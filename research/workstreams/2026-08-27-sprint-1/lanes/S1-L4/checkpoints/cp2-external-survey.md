# S1-L4 checkpoint 2 — commercial + OSS survey

Agent: ACTIONIST-S1-L4-HOST · 2026-08-27 · Model at survey dispatch: Fable 5[1m];
model at consolidation: Opus 5 (1M). All six survey subagents ran on Opus per the
project override. No non-Opus subagent was used at any point.

## Denominators actually achieved (counts re-derived from files, not from agent claims)

| Packet | File | Rows | top10 | Status |
|---|---|---|---|---|
| P09 commercial | top-companies.jsonl | 35 | 10 | complete |
| P09 OSS | top-repos.jsonl | 41 | 10 | complete |
| P10 commercial | top-companies.jsonl | 33 | 10 | complete |
| P10 OSS | top-repos.jsonl | 31 | 12 | backfill running (4 repos + 3 doc reads + trim) |
| P11 commercial | top-companies.jsonl | 18 | 12 | backfill running (Stripe + 14 surfaces + trim) |
| P11 OSS | top-repos.jsonl | 45 | 10 | complete |

Commercial denominator so far 86; OSS denominator so far 117. Combined 203 across three
parts. Two packets deliberately stopped short of target rather than padding when Fable-5
usage limits hit the survey agents mid-run; both recorded the exact unfetched names. That
is the correct behaviour under this program's evidence standard and is being closed by
targeted Opus backfills rather than by invention.

## The three findings that change the architecture

**1. The licence-badge trap is systemic, not anecdotal.** Reading LICENSE bodies instead
of badges produced 12+ corrections across the three parts: Convex FSL, PowerSync FSL,
Inngest SSPL, Redpanda BSL (API reports null — licence lives at `licenses/bsl.md`),
Elasticsearch triple-licence with document-level security inside the ELv2-only x-pack,
Citus AGPL, Liquibase FSL (API says "Other"), Meilisearch now MIT AND BUSL, MinIO AGPL
*and archived*, Vault BSL under IBM, Restate BSL, Convoy ELv2, Skyvern AGPL, NocoBase's
custom Singapore-entity licence that a badge reports as Apache-2.0, Unleash AGPL,
hookdeck-cli Apache-on-the-CLI-only (a structural repeat of the Composio trap this
project already caught). This validates the CLAUDE.md rule empirically and makes a
licence-body CI gate (P09-I-C-7 / P09-I-R-11) a near-mandatory host invariant.

**2. Three named greenfields — the host foundation's real build list.**
- *Settings registry* (P10 OSS): no OSS settings-schema library exists. Flag platforms
  are flat env-scoped KV with targeting; a settings registry needs hierarchy, schema,
  override provenance and typed rendering. Frappe DocType is the nearest conceptual
  relative and is whole-framework-bound.
- *Navigation registry* (P10 OSS): near-greenfield. Backstage route-refs are the only
  declarative nav-contribution precedent; every shell framework (single-spa, Module
  Federation, qiankun, Piral, Luigi) solves loading and isolation but carries no
  identity, permission or settings semantics across the boundary — "the plumbing is
  free; the meaning is not."
- *Idempotency* (P11 OSS): no production OSS supply. Most-starred idempotency-key
  middleware result is 14 stars; the field is many single authors privately rebuilding
  the same thing. Since P11 owns real side effects at third-party systems, this is the
  single most important thing Actionist must write.
Two further must-builds: an *outbound* token broker (every mature project runs the wrong
direction — oauth2-proxy guards inbound, Hydra makes you an auth server, Dex federates
identity; nothing stores/refreshes many long-lived third-party tokens per tenant per
connector) and *egress policy enforcement* (OPA/Cerbos decide, neither enforces).

**3. No commercial precedent for the P10 thesis.** After 33 surfaces: no observed
surface renders a third party's settings inside host-owned chrome. Shopify, Forge and
Superblocks leave the guest's settings screen wholly to the guest; Frontegg and Permit.io
sell the admin UI as their own product; Zoho One and Microsoft 365 — the two largest
suite-unification efforts observed — unify at identity/admin and explicitly do NOT
suppress donor chrome. This is either the opportunity or the warning, and it directly
bears on A34 (unknown: can one host absorb donor identity/settings/navigation cleanly).

## Patterns imported into the decision tables

P10 absorption patterns (named, each observed in ≥2 independent surfaces): (A) iframe +
two-token exchange — long-lived credential never leaves the host backend, short-lived
per-user token crosses the boundary (Shopify App Bridge, Superblocks, Salesforce Canvas,
monday.com; Wix is the counter-example passing a signed instance as a query param and
warning about it in its own docs); (B) nav manifest registration in three variants —
deploy-time manifest (Forge), runtime component (Shopify `<s-app-nav>`, flat, no
nesting), stored configuration document (ServiceNow, with a documented silent-failure
mode when the property is String-typed rather than JSON); (C) scoped settings tree with
an explicit combination rule — Cerbos's two selectable modes are the best published
answer, Descope resolves to most-restrictive; (D) two-gate visibility — entitlement AND
permission at different scopes, plus Salesforce's cascading emptiness so stripped modules
do not leave empty chrome; (E) console federation as the honest baseline that does not
absorb at all. Universal constraint across every surface: the host owns the URL space,
the guest owns its internal router, and the guest must reconcile them.

P11 safety patterns: connect-session tokens; the caller passes an *identity* not a
secret and the broker injects server-side (the survey's most consistent finding); scope
narrowing at connect time; consent graded by consequence not resource; approval as a
composable workflow step; per-tenant instance rather than per-tenant row; receipts that
deliberately exclude payload; and retry WITHOUT idempotency as the depressing norm.
Best single primitive found: Zapier's `preview_only` dry-run returning exact resolved
arguments with no side effect, on by default and not disableable by the tenant.
Two hazards to design against: Pipedream silently selects the most-recently-created
account when a user has several for one app (silent ambient-authority selection), and
Browserbase Contexts replay cookies/tokens with MFA completed once and reused — a
durable bearer blob outside any scope or revocation model.

P09 tenancy: the real dividing line is cost-at-rest, not capability — every surface can
do database-per-tenant, only scale-to-zero substrates afford it at high tenant counts.
Electric's inversion (authorization above the database, in a host-owned proxy that signs
a shape; client subsets may only narrow, never widen) is the most transferable idea for
federating stores whose schema the host does not control. Algolia proves a
cryptographically tenant-scoped credential can be handed to an untrusted client.
Multi-tenancy frameworks for a TypeScript host: effectively none — tenant isolation is
bespoke work Actionist must own and test, the highest-risk correctness surface in the plane.

## Innovation register status

P09 18 commercial + 17 OSS = 35. P10 17 commercial + 16 OSS = 33 (+4 from backfill).
P11 17 commercial + 17 OSS = 34 (+4 from backfill). Running total ≈ 102 before backfill
additions, against the ~100 target. Ranking to a defensible top 10 per part happens at
checkpoint 4.

## Honesty flags carried forward (must not be laundered into the report)

- Crunchy Data entirely unverified (rate-limited); Elastic Cloud Serverless 404'd;
  Typesense Cloud pricing never fetched; NATS accounts-as-tenancy inferred not read;
  Temporal namespace-to-tenant mapping explicitly unconfirmed.
- P10 OSS has NO commit-recency evidence anywhere — the GitHub REST API was blocked in
  that agent's sandbox and returned null for every field; all maintenance calls there are
  inferred from secondary signals.
- Paragon's isolation detail rests on its own marketing blog (docs security URL 404'd).
  Anon's "never stores credentials" is marketing-site only — must NOT be repeated to Cena
  as fact. Infisical's MIT is third-party-sourced in the commercial packet (the OSS packet
  did read the body: MIT with an `ee/` carve-out).
- 37 of 45 P11 OSS rows are badge-level licence only; all five landmines in that packet
  were invisible at badge level, so badge rows are sound for filtering, not committing.
- Budibase licence read from a competitor's blog, not the LICENSE body.
- Zapier AI Actions is documented as no longer developed/supported — study, don't depend.

## Next

Checkpoint 3 = local-estate join (already written to lanes/S1-L4/local-estate-join.md)
plus backfill absorption. Checkpoint 4 = first-principles synthesis, decision tables,
innovation ranking, experiments/falsifiers, structural smoke, adversarial self-challenge,
then the CENA callback to ACTIONIST-S1-L5-RUNTIME.
