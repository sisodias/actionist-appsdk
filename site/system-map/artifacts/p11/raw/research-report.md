# P11 — Connector and external-action plane: research report

Run `2026-08-27-sprint-1-fable` · lane S1-L4 · agent ACTIONIST-S1-L4-HOST
Status: research only · UNEXECUTED · NOT_ADMITTED · admitted blocks 0

## Question this part owns

How does an assembled Actionist product take real, authorized, tenant-scoped actions in
third-party systems — over API, browser or service adapters — such that every side effect
is intended, attributable, replay-safe and revocable?

## Exact denominators

| Evidence stream | Count | Notes |
|---|---|---|
| Commercial surfaces surveyed | 32 | 18 first pass + 14 backfill |
| OSS projects surveyed | 45 | 10 top10, 28 register, 7 rejected |
| Licence bodies read (OSS) | 8 of 45 | every landmine below was invisible at badge level |
| Local sources read this run | 7 | see `source-register.jsonl` |
| Innovation candidates | 38 | 21 commercial + 17 OSS |
| Prior verified catalogue receipts carried | 4 | OpenConnector, Activepieces, Nango, jentic |

Denominator honesty: the commercial packet stopped at 18 rows under a hard usage limit,
named its 14 unreached surfaces, and was closed by a targeted Opus backfill that
prioritised the single most load-bearing omission first. Nothing was padded.

## The single most important result: the idempotency reference contract

The OSS survey established that **idempotency has no production OSS supply** — the
most-starred idempotency-key middleware found is 14 stars, and the field is many single
authors privately rebuilding the same thing. The commercial survey then established that
**documented write-side idempotency is essentially absent across embedded-iPaaS and
agent-action vendors**: none of the surfaces read documented a write idempotency-key
contract for agent actions. Alloy asserts "retries" without semantics; Prismatic offers
operator-initiated retry; browser automation retries at the DOM level with no dedupe key
at all.

Against that background, Stripe is the positive control, read directly this run:

- **Supply**: client-generated key in the `Idempotency-Key` header, up to 255 chars,
  UUIDv4 or derived from a user-attached object such as a cart ID.
- **Lifetime**: pruned after at least 24 hours, and a key reused after pruning generates
  a *new* request — replay protection **silently lapses rather than erroring**.
- **Replay, identical params**: the status code and body of the first request are saved
  *regardless of whether it succeeded or failed* and returned on retry, including cached
  500s, with `Idempotent-Replayed: true` as the machine-readable receipt.
- **Replay, different params**: the layer compares parameters against the original and
  errors when they differ.
- **Methods**: all POSTs; GET and DELETE are idempotent by definition.
- **Concurrency**: HTTP 409 when two requests share a key.
- **Save boundary**: results are saved only after endpoint execution begins, so
  validation failures and concurrent conflicts save nothing and may be retried.
- **Retry signal**: `Stripe-Should-Retry: true|false`; absent means undetermined.
- **500s are INDETERMINATE**: the cached response will not change, but Stripe may
  reconcile and fire webhooks for objects created during reconciliation, so a cached 500
  is *not* proof nothing happened.

**The caveat that changes Actionist's design**: rate limiters run *before* the
idempotency layer. A request rate-limited with a 429 can produce a different result under
the same key, and the same holds for a 401 with a missing key and most 400s. An
idempotency key therefore does not make a request universally safe to replay — the safety
window opens only once the request reaches the idempotency layer. Consequence:
**Actionist's own idempotency layer must sit inside its rate limiter and auth check, not
outside**, or it reproduces this hazard at the host boundary.

This run also **corrected one of my own draft invariants**. I had written "non-2xx is not
cached", taken from a secondary summary of the Stripe rule. Stripe's own documentation
says the opposite: it caches failures too. The invariant is now recorded with the
correction visible, and the caching choice is flagged as a deliberate Actionist decision
rather than an inherited default — caching failures gives a stable replay answer but can
pin a transient error; not caching them lets a genuine retry succeed.

## What was established

### 1. The four-component split, and which two to own

Catalogue and OAuth/credential runtime are **adopt**; connection store and action runtime
are **own**. This is not a preference — the store is unfit by demonstration, not
inference: OpenConnector's `connections` table is keyed `(service, connection_name)` with
no tenant column, `oauth_client_configs` is keyed on service alone (one OAuth app per
service globally), the key salt is a hardcoded constant, the secret codec silently
returns plaintext when the env key is unset, and two named tenants' connections were
returned together under a single admin token during the 27 Aug spike.

What is worth adopting is genuinely proven: the local generator produced 1,445 providers
and 15,156 actions from repository source with no network; a fake token was rejected by
live credential verification before persistence; a correctly parameterized OAuth
authorization URL was produced with `access_type=offline` and encrypted state.

### 2. The safety patterns commercial practice converges on

Named and each observed across multiple surfaces: connect-session tokens (server-minted,
short-lived, user-scoped); **the caller passes an identity, not a secret**, with the
broker injecting credentials server-side — the most consistent finding in the survey;
scope narrowing at connect time; **consent graded by consequence rather than resource**
(OpenAI's Always ask / Any changes / Important actions, defaulting to the middle tier);
approval as a composable workflow step rather than a platform modal (Workato is the only
surface where this holds); per-tenant *instance* rather than per-tenant row (Prismatic);
receipts that deliberately exclude payload; and retry *without* idempotency as the
depressing norm.

Best single primitive found: Zapier's `preview_only` — a dry run returning the exact
resolved arguments with empty results and no side effect, on by default and forceable by
the action author so the tenant cannot disable it. Caveat: Zapier AI Actions is
documented as no longer developed or supported, so this is a pattern to study, not a
dependency.

### 3. Two hazards to design against explicitly

**Silent ambient-authority selection**: Pipedream picks the most-recently-created account
when a user has several for one app. An action must name which connection it uses; silent
selection is a defect class, not a convenience.

**Durable bearer blobs**: Browserbase Contexts deliberately defeat the no-persistence
default by replaying cookies and tokens with MFA completed once and reused — a credential
outside any scope or revocation model, with additional ToS exposure from stealth and
IP-rotation features. Browser connectors need their own authority class, separate from
API connectors.

### 4. What must be built, because nothing supplies it

Six items, in `decision-ledger.json` with a build order. The three with no supply at all:
server-side idempotency (key store, request fingerprint, replay semantics, concurrency
lock, TTL); an **outbound** token broker — every mature OSS project runs the wrong
direction, since oauth2-proxy guards inbound access, Hydra makes you an authorization
server and Dex federates identity, and nothing stores and refreshes many long-lived
third-party tokens per tenant per connector; and egress policy *enforcement*, since OPA
and Cerbos decide but neither refuses an outbound call, and no surveyed project ships the
pairing for tool calls.

### 5. Build order is inverted from intuition

About 90% of every catalogue is API-key auth (OpenConnector 1,302 of 1,445; Activepieces
374 `SECRET_TEXT` of 761; Nango 323 `API_KEY` of 982). The API-key path needs no callback
URL, no per-vendor app registration and no refresh. Ship it first; it unlocks the largest
slice for the least machinery. OAuth follows for the ~96–425 providers that need it.

When OAuth does arrive: refresh 15 minutes early under a lock keyed by tenant+connection,
and discriminate `invalid_grant` (the user's problem → mark the connection ERROR) from
`invalid_client`/`invalid_scope` (our bug → must **not** mark the connection bad).

### 6. Licence landmines, all invisible at badge level

Vault is BSL 1.1 with IBM as licensor — **OpenBao** is the MPL-2.0 Linux Foundation fork
and the answer. Inngest is SSPL-1.0 despite marketing heavily on being open source.
Restate is BSL with a nuance that lands in Actionist's favour: it forbids a public
platform where third parties register their own service deployments, while permitting
production deployments invoking services the licensee wrote. Convoy is ELv2 — and is the
best functional fit in its category, which is what makes it dangerous. Infisical is MIT
with an `ee/` carve-out. Both MCP repos report NOASSERTION because they are mid-relicence
with per-file provenance. `hookdeck-cli` is Apache-2.0 on the CLI only while the gateway
is closed SaaS — structurally the same trap as Composio. Skyvern is AGPL-3.0.

## Invariants proposed

Eleven, in `first-principles.md` and `decision-ledger.json`. The firmest is INV-P11-3
(every connection keyed by tenant from the first migration, per-tenant key derivation,
stable `externalId` as the reference) because its falsifier already fired against
OpenConnector. The newest is INV-P11-11 (the idempotency layer sits inside the rate
limiter and auth check), derived directly from Stripe's documented ordering.

## Open decisions and unknowns

Four open decisions in the ledger. Still unresolved and gating: **provider icon licensing
remains UNVERIFIED** and blocks any client-facing connector picker — carried from the
27 Aug research and still the detail that surfaces late and embarrasses.

Evidence-honesty flags that must not be laundered into a client deliverable: Paragon's
isolation detail rests on its own marketing blog after the docs security URL 404'd;
Anon's "never stores credentials" is marketing-site only and must not be repeated to Cena
as fact; compliance certifications observed are logos, not inspected reports; 37 of 45
OSS rows are badge-level licence only, sound for filtering but not for committing;
Vessel's developer docs return 404 and its app subdomain fails TLS, which is recorded
rather than smoothed over.

## Experiments this feeds

One tenant-safe connector flow end to end (the standing P11 experiment), idempotency
contract conformance fixtures measured against the Stripe reference contract, and Loop 4
mixed-shape composition with one connector.

## Boundary

Nothing was cloned, executed, deployed or admitted in this run. The 27 Aug OpenConnector
spike was executed and cleaned under prior authorization; its receipts are cited, not
re-run. No client-private data or authenticated vendor access was used.
