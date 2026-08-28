# P11 first principles — connector and external-action plane

Lane S1-L4 · run 2026-08-27-sprint-1-fable

## Objective

Let an assembled Actionist product take real, authorized, tenant-scoped actions in
third-party systems — via API, browser or service adapters — such that every side effect
is intended, attributable, replay-safe and revocable.

## Constraints (evidence-backed)

1. Catalogue supply is solved and legally navigable: OpenConnector Apache-2.0 (1,445
   providers / 15,156 actions generated locally from repo source), Activepieces MIT
   outside `ee/` (761 pieces via public API), jentic CC0 (4,140 vendor OpenAPI specs).
   Nango/Airbyte ELv2 and Composio's SDK-only MIT are study-or-buy, never adopt.
2. Catalogue size is not connect-button count: ~90% of every catalogue is API-key auth.
   OAuth subsets are OC 103, AP 96, Nango 425. Ship the API-key path first.
3. OpenConnector's connection store fails tenancy by demonstration, not inference: flat
   `(service, connection_name)` primary key, no tenant column, one global OAuth app per
   service, hardcoded key salt, silent plaintext degradation without the env key, and
   three separate auth switches needed for a safe deploy.
4. **Idempotency has no production OSS supply.** The most-starred idempotency-key
   middleware found is 14 stars; the field is many single authors rebuilding the same
   thing privately. Stripe's SDK gives the caller half; the server half is Actionist's.
5. **Outbound token brokering does not exist in OSS.** Every mature project runs the
   opposite direction: oauth2-proxy guards inbound, Hydra makes you an authorization
   server, Dex federates identity. Nothing stores and refreshes many long-lived
   third-party tokens per tenant per connector.
6. **Policy engines decide but do not enforce on egress.** OPA/Cerbos produce decisions;
   binding them requires a proxy that can refuse the outbound call, which no surveyed
   project ships for tool calls.
7. Commercially, retry *without* idempotency is the norm — the industry's own default is
   the unsafe one.

## Invariants (proposed, with falsifiers)

- **INV-P11-1 Catalogue, credential runtime, connection store and action runtime are
  four separate governed components.** Adopt the first two, own the last two. Falsifier:
  a seam test showing OpenConnector's OAuth engine cannot be used as a library without
  its store (the spike indicates it can: `/api/providers` and `/api/oauth/authorizations`
  are thin over `src/oauth/*` and `src/providers/*`).
- **INV-P11-2 The caller passes an identity, never a secret.** The broker injects
  credentials server-side. Generated app code and model context never hold a third-party
  token. (Most consistent finding across the commercial survey.) Falsifier: a connector
  whose auth genuinely requires client-side possession (rare; treat as a separate,
  flagged class).
- **INV-P11-3 Every connection is keyed by tenant from the first migration**, with
  per-tenant key derivation and a stable `externalId` as the reference — never the UUID,
  never the display name. Retrofitting this is the documented OpenConnector failure.
  Falsifier: none expected; this is the lane's firmest invariant.
- **INV-P11-4 Every action declares its idempotency class** —
  naturally-idempotent / idempotent-with-key / unsafe — and the runtime **refuses to
  auto-retry the unsafe class**. Falsifier: a provider catalogue where the class cannot
  be determined for most actions, which would make the field aspirational (mitigation:
  default to `unsafe`, the safe failure direction).
- **INV-P11-5 Replay with the same key and a different payload is a hard error**, via
  request fingerprinting. Non-2xx responses are not cached (Stripe's rule).
- **INV-P11-6 Consent is graded by consequence, not by resource.** Read/reversible/
  irreversible-or-financial, defaulting to the middle tier, with approval expressible as
  a workflow step rather than only a platform modal.
- **INV-P11-7 Dry-run is a first-class action mode**, returning the exact resolved
  outbound request with no side effect, and is not disableable by the tenant. (Zapier's
  `preview_only`, the best primitive found; note Zapier AI Actions is itself
  discontinued — study, don't depend.)
- **INV-P11-8 Every attempt, retry, replay, denial and approval lands in one queryable
  per-tenant action ledger**, and receipts deliberately exclude payload bodies.
- **INV-P11-9 No ambient authority in account selection.** When a tenant has multiple
  accounts for one provider, the action must name which; silently choosing the
  most-recently-created (Pipedream's documented behaviour) is a defect class, not a
  convenience.
- **INV-P11-10 Egress is allow-listed from the connector manifest.** The decision engine
  is bound to a proxy that can refuse; a decision nothing enforces is not a control.

## The must-build list (what no supply covers)

1. Tenant connection store with per-tenant key derivation (local + external evidence).
2. Server-side idempotency: key store, request fingerprint, replay semantics,
   concurrency lock, TTL. The single most important P11 build.
3. Outbound token broker: per-tenant-per-connector storage, refresh 15 minutes early
   under a lock keyed by tenant+connection, discriminating `invalid_grant` (user's
   problem → mark connection ERROR) from `invalid_client`/`invalid_scope` (our bug →
   must NOT mark the connection bad).
4. Egress enforcement bound to policy decisions.
5. Per-tenant-per-connector fair-share rate limiting so one tenant cannot exhaust a
   shared third-party quota.
6. Inbound webhook ingest with signature verification and operator-triggered replay
   (Svix covers sending; the project covering both, Convoy, is ELv2-blocked).

## Contradictions and tensions

- Adopting OpenConnector's catalogue means carrying a young (created 2026-06-29),
  vendor-controlled dependency with a commercial hosted product behind it. Apache-2.0
  means a relicence binds only future versions and the 39.5 MB catalogue is forkable —
  the mitigation is real but is a fork commitment, not a shrug.
- Browser automation as a connector runtime is genuinely useful and carries the survey's
  worst safety finding: Browserbase Contexts deliberately defeat the no-persistence
  default by replaying cookies/tokens with MFA completed once and reused — a durable
  bearer blob outside any scope or revocation model, plus ToS exposure from stealth and
  IP-rotation features. Browser connectors need their own authority class, not the API
  connector's.
- Provider icon licensing remains UNVERIFIED and gates any client-facing connector
  picker. Carried from the 27 Aug research; still open; still the detail that surfaces
  late and embarrasses.

## Unknowns carried to experiments

Q22-Q26 (knowledge/04) remain open. This lane adds: whether the idempotency class can be
derived at catalogue-import time for a useful fraction of 1,445 providers, or whether it
is per-action human judgement; and what the real cost is of the egress-enforcement proxy
on action latency.
