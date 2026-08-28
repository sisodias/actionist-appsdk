# S1-L4 lane synthesis — host foundation (P09 · P10 · P11)

Agent: ACTIONIST-S1-L4-HOST · run `2026-08-27-sprint-1-fable` · 2026-08-27
Status: research only · UNEXECUTED · NOT_ADMITTED · admitted blocks 0 · unpromoted

## The lane question

What must the Actionist host own so that mixed donor systems — absorbed code, intact
services, external SaaS — behave as one product rather than a portal of stacked logins?

## The answer in one paragraph

The host must own **authority**, not implementation. Concretely: one identity authority,
one tenant key on every stateful resource, one authoritative owner per table and
migration, one navigation registry, one settings hierarchy with provenance, one
connection store, and one action ledger. Everything else — the database a donor uses, its
ORM, its internal router, its own settings screens, the provider catalogue, the OAuth
protocol machinery, the authorization engine — can and mostly should be borrowed. The
failure mode this lane found repeatedly is the inverse of the intuitive one: teams rent
the parts that define the product's authority and build the parts that are already
commodities.

## Denominators (re-derived from files at report time)

| | Commercial | OSS | Combined |
|---|---|---|---|
| P09 data plane | 35 | 41 | 76 |
| P10 identity/settings/nav | 33 | 35 | 68 |
| P11 connectors/actions | 32 | 45 | 77 |
| **Lane** | **100** | **121** | **221** |

Innovation candidates 72 registered (≈112 generated across notes), 30 ranked top10.
Local sources registered 27. Structural smoke PASS, 0 failures.

## The five cross-part findings

### 1. Authority is the host's only irreducible property

Each part independently converged on the same shape. P09: one owner per stateful
resource, tenant key from the first migration. P10: the host is the sole identity
authority and owns the URL space, while the guest owns its router. P11: the caller passes
an identity and never a secret, and every connection is tenant-keyed from the first
migration. Three separate surveys, one conclusion — the host's job is to hold authority
that nothing else may mint, and to delegate everything else explicitly.

### 2. The gap map inverts intuition — build the plumbing, borrow the hard parts

What looks hard is supplied. Authorization has five Apache-2.0 engines across four
deployment shapes; building custom would be indefensible. OAuth protocol machinery,
provider catalogues (1,445 verified in-repo), sandboxing and durable execution are all
adoptable.

What looks like plumbing is greenfield. **Settings registry**: no OSS settings-schema
library exists, and no commercial surface renders third-party settings in host chrome.
**Navigation registry**: two proven halves (Luigi's declarative node schema, Backstage's
contribution model and route refs), neither shipped whole or consumable standalone.
**Idempotency**: no production OSS supply; top search result 14 stars. **Outbound token
broker**: every mature project runs the opposite direction. **Egress enforcement**: policy
engines decide, nothing refuses the call. **Multi-tenancy for a TypeScript host**: no
adoptable framework; tenant isolation is bespoke, tested work.

Effort should follow this map, not intuition.

### 3. Reuse shape selects the host pattern — and the host must run both lanes

SISOCRM designed a complete federation identity contract on 2026-07-30 and reversed it on
2026-07-31 for absorption — both correct, for different donors. Intact services need
token handoff and an adapter; absorbed code needs auth deletion and host-session
substitution; Plane stayed host and infrastructure stayed service throughout. The same
split governs data: schema-per-donor with event-fed read models for federated donors, one
schema with real foreign keys for absorbed ones.

This is the lane's most important structural claim: **the host contract is not one
pattern but a selector**, keyed on PackagingProfile (the five-shape table is in P10's
decision ledger). The cost of maintaining both lanes indefinitely is unmeasured and
should not be assumed small.

### 4. A34 must be split into three tiers, because they have different precedent

The assumption ledger tracks "the host can absorb donor identity/settings/navigation
cleanly" as one `unknown`. That conflates:

- **Identity** — strong precedent: four independent commercial forms of the two-token
  exchange, plus a locally protocol-proven Ed25519 spike. Bounded, patterned work.
- **Navigation** — partial precedent: three commercial manifest variants, two OSS halves.
  Bounded per donor once the host registry exists.
- **Settings** — **no precedent found, commercial or OSS.** Unknown cost, highest risk.

The honest consequence for the client conversation: "one settings surface across all
capabilities" is a research bet, not an engineering estimate. Either scope it to the
commercial baseline for v1 (host-owned settings for host concerns; donor settings
rendered by the donor behind a host nav entry) or make it the deliberate differentiator
with Loop-3 evidence *before* selling it.

### 5. The licence-badge trap is systemic and now quantified

Reading LICENSE bodies rather than badges produced 20+ corrections across the lane. Five
P09 surfaces would have passed an automated SPDX scan silently (Redpanda reports `null`;
its terms live at `licenses/bsl.md`). Three structural trap classes were checked
deliberately because of the Composio failure this project already absorbed — per-package
overrides under a permissive root, meta-repo badges that do not cover the runtime, and a
permissive licence on a repo that is not the live product — and **all three were found
live**. SuperTokens is the third instance of the Composio pattern specifically: a paid
`ee/` carve-out behind a `NOASSERTION` badge.

This validates the project's evidence standard empirically and makes a licence-body CI
gate a near-mandatory host invariant rather than a nice-to-have.

## What this lane hands the pilot

The pilot in `knowledge/05-EXPERIMENT-ROADMAP.md` Loop 4 needs one intact service, one
transplanted surface, one owned delta, one connector, shared host identity/settings/
navigation, one owned Postgres resource and one donor-owned resource. This lane supplies
the contracts for every one of those seams:

- **Loop 2 (data bake-off)** gains a new measured dimension: what mechanically prevents a
  capability writing a table it does not own (per-capability DB roles, RLS as the single
  authorization source, or admission-time static analysis of adapter declarations).
- **Loop 3 (host absorption)** must measure the settings tier specifically, because that
  is where the thesis has no precedent. The Teable brief already supplies the acceptance
  shape: no login prompt, no reachable donor signup route, state survives restart.
- **The connector flow** has a build order inverted from intuition: tenant-keyed store
  first, then the API-key path (~90% of every catalogue), then server-side idempotency,
  then OAuth with early refresh under a tenant+connection lock.

## Cross-lane notes (read-only, no writes to other lanes)

- **P08** owns archetypes; P10 supplies only the mounting contract and deliberately does
  not hard-code an information architecture. The five-area ISSO shell stays unproven.
- **P12** will consume the DataResourceContract, HostContract and ConnectorContract
  shapes; all three are deliberately thin, with qualification and release evidence kept
  linked rather than fused.
- **P14** owns runtime profiles and sandboxing; P11's tiered sandbox-selection idea is
  registered here but belongs there.
- **P13/P15** receive the action ledger and settings-change event stream as learning
  inputs.

## Open decisions the lane cannot settle alone

1. Is the settings tier the differentiator or scoped down for v1? (product decision)
2. One database, schemas, service stores or hybrid per client? (depends on pilot reuse mix)
3. Host runtime language, which gates several data-plane picks.
4. Object storage implementation — unresolved locally, licence-constrained externally.
5. Fork the OpenConnector catalogue or track a young vendor-controlled upstream?
6. Provider icon licensing — still UNVERIFIED and gating any client-facing picker.

## Boundary

Research only. Nothing cloned, executed, benchmarked, deployed or admitted. No
client-private data or authenticated vendor access. Every subagent ran on Opus. Writes
confined to the three owned run directories and this lane directory. Historical research
untouched. Sprint 1 remains unpromoted pending coordinator verification.
