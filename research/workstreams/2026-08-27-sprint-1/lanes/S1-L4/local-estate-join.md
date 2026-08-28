# S1-L4 local-estate join — host foundation (P09/P10/P11)

Agent: ACTIONIST-S1-L4-HOST · Date: 2026-08-27 · Evidence class per row as marked.

This join reads the local estate the program names (AutoSaaS, Great Library, SISOCRM,
Actionist prior research) specifically through the host-foundation lens. Every path was
actually opened this run.

## SISOCRM — the deepest local host-foundation evidence (all observed)

`apps/SISOCRM/verticals/business-broker/` contains a real, dated decision sequence that
is the single most valuable local input to this lane, because it records a live
architecture REVERSAL:

1. **2026-07-30 — federation era.** `AUTH-AND-CONTEXT-INTEGRATION-CONTRACT.md` designs
   host-issued Ed25519 launch tokens (60–120s TTL, audience-bound `siso-module:*`,
   single-use jti, safe returnPath rules, typed adapter errors, propagated logout), with
   per-donor handoff adapters mapped to real seams read from source: Twenty
   (community-side handoff controller to avoid the EE SSO guard), Documenso (signed
   sessionId cookie path), Frappe (LoginManager/sid). An executable spike
   (`check-auth-handoff.mjs`) proved the token protocol but no adapter was built.
   `PAGE-COMPOSITION-AND-CAPABILITY-GAPS.md` (same date) records the runtime truth of
   federation: routes existed but "donor login blocks the experience" on 4+ surfaces —
   the integration gap was "identity, routing, provisioning, canonical record linkage,
   and return navigation", not UI.
2. **2026-07-31 — absorption reversal.** `ABSORPTION-STRATEGY.md` supersedes the wiring
   spec: "Absorb the donors. Copy the code, repoint the data layer at our Postgres,
   delete their login. One app, one database, one session." It explicitly kills the
   Ed25519 tokens, the external-ref mapping table, Svix event projection, and six
   per-donor identity adapters — for the donors being absorbed. Plane stays the host;
   infra (ClamAV/Postgres/Redis/Caddy) stays service.
3. **Same day — data-layer reasoning.** `OWNERSHIP-AND-DATA-LAYER-DECISIONS.md`:
   SQLite-vs-Postgres decided by donor-fork cost, not writer limits ("the cost is the
   fork, not the database"); one Postgres server with separate schemas per donor beats
   shared-schema (migration coupling) and per-donor servers (ops burden); cross-schema
   joins traded away and answered by consuming donor events into owned read models;
   ownership split by two tests ("would upstream ever ship something here we want?" and
   "liability to own vs liability NOT to own").

**What the reversal teaches P10 (inferred, high confidence):** identity federation vs
absorption is not a single platform choice — it tracks the reuse shape. Intact-service
donors need the launch-token/handoff pattern; absorbed/transplanted donors need auth
DELETION and host-session substitution. Both patterns are now locally designed, one is
protocol-proven. The Actionist host contract must support both, selected per capability
by its PackagingProfile — a table this lane's P10 decision ledger must encode.

**What it teaches P09 (observed → principle):** one-owner-per-table-and-migration
(A11); schema-per-donor within one server for service-shaped donors; full schema merge
with real FKs only for absorbed code; events/read models as the cross-boundary query
answer; object storage undecided even there (directory+restic proposed on one VPS).

Also present: `AGPL-POSITION-AND-MODULE-HYGIENE.md`, `TEABLE-ABSORPTION-BRIEF.md`
(host-session success criteria: no login prompt, rows survive restart, no reachable
donor signup route — a ready-made P10 acceptance shape), `THEMING-CONTRACT.md` (P07's
concern, cited not owned here).

## Actionist prior research (observed)

- `research/connectors-licensing-2026-08-27.md` + `openconnector-spike` +
  `connector-research-summary.md`: the P11 baseline — catalog/OAuth-engine/connection-
  store separation, verified counts (OC 1,445 providers · 15,156 actions · 103 OAuth2 ·
  1,302 API-key; AP 761 pieces · 96 OAUTH2; Nango 982 · 425 OAuth-family; jentic 4,140
  CC0 specs), the tenancy falsifier (flat connection table, global OAuth config,
  hardcoded salt, plaintext degradation), EE-boundary import trap in Activepieces, and
  the patterns-worth-stealing list (connect-session tokens, origin-checked postMessage,
  capability-scoped runtime tokens, CredentialProfile, requiredScopes-vs-grantedScopes,
  externalId, early refresh under lock with invalid_grant/invalid_client discrimination,
  envelope-encryption AAD, fail-fast on ambiguous config, lazy executors,
  catalogOnly/needsCredential/locallyExecutable states).
- `research/packs/source-files/reusable-block-framework-report.md`: block dossier data
  section (mode/none/read_only_external/owned_postgres/api_only, tables_owned/read/
  write, tenant_key, rls_policy, migrations, idempotency, rollback) — the v0 vocabulary
  P09's DataResourceContract should thin out rather than reinvent; Postgres boundary
  primitives (schemas, information_schema, privileges, RLS, constraints) with the
  search_path warning.
- `architecture/feature-matrix/ARCHITECTURE.md`: scoped-builder decomposition already
  assigns "platform DB view/schema adapter" (introspection, allow-listed, generated
  clients never own platform migrations) and "policy engine" (deny-by-default,
  server-side, no LLM-authored production policy) — inherited assumptions this lane
  treats as hypotheses to test, per CURRENT_STATE.
- `lovable-teardown-2026-08-26.md`: LLM-authored RLS on a public database is the
  incumbent's worst risk and is removed when the platform owns schema+policies —
  the strongest external argument for host-owned data authority (P09/P10).

## AutoSaaS (observed, bounded read)

`apps/AutoSaaS/framework/autosaas-method.md`: factory loop (opportunity → research →
spec → source graph → shell map → build waves → verification → launch → learning) and
the five-area ISSO shell as default UX base. Host-relevant take: AutoSaaS assumes a
shell and a source-graph but has no identity/tenant/settings/connector contract at all —
the host foundation this lane researches is the missing layer AutoSaaS would sit on.
The five-area shell remains an unproven archetype hypothesis (A15), owned by P08, cited
read-only here because navigation absorption (P10) must not hard-code it.

## Great Library (observed, bounded read)

`Great_Library_of_SISO/schemas/`: work/assembly/decision/event/release/snapshot/
source-inventory JSON Schemas. Assembly records require components with work_id, role,
responsibilities, depends_on, evidence, an operating_loop and a capability_model —
i.e. the registry/lifecycle vocabulary already exists locally and is machine-validated.
Host-relevant take (inferred): P09/P10/P11 contracts should stay compatible with this
record discipline (immutable versioned records, evidence arrays, explicit
relationships) rather than inventing a parallel registry format; the Block Contract
separation (capability/packaging/host/binding/qualification/registry/release) maps
cleanly onto work+assembly+release records.

## 21st stores / siso-ui-base

Not re-read this run: UI-corpus evidence is S1-L3's ownership (P05/P06/P08). Cited
via knowledge/00 counts only (8,515 joined identities; 3,506 source-bearing legacy).
No host-foundation claims depend on it.

## Net local-estate verdict for this lane

The local estate already contains: (a) a proven short-lived-token handoff protocol and
its absorption-era refutation — both needed, selected by reuse shape; (b) the
one-owner-per-table principle and the schemas-vs-merge decision tree with its honest
costs; (c) a verified connector catalog/OAuth/store separation with a demonstrated
tenancy falsifier; (d) a block-dossier data vocabulary to thin, and a machine-validated
registry record discipline to stay compatible with. What the local estate does NOT
contain: any tenant model beyond single-org (SISOCRM is one brokerage), any settings
registry, any navigation registry beyond one hand-built rail, any per-tenant key
derivation, any idempotency/receipt implementation, and any evidence about how
commercial hosts absorb third-party modules at scale — exactly the gaps the six
external surveys target.
