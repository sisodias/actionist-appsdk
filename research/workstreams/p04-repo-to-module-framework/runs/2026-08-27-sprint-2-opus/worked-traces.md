# P04 — three worked traces

Run `2026-08-27-sprint-2-opus` · lane S2-L1 · agent `ACTIONIST-S2-L1-MODULE-FRAMEWORK`
Status: research only · `UNEXECUTED` · `NOT_ADMITTED` · admitted modules **0** · `implementation_authorized=false`

> **Boundary.** These are design traces. Nothing was cloned, executed, built, deployed or
> admitted. Every receipt below is `not_run`. Where a trace states a value observed in a
> prior authorized local run, it cites that run; where it states a value that would only
> exist after execution, it states `U`.

The three traces are chosen to break the framework in different places. Trace A is the
shape the contract family handles best. Trace B is the shape with the least commercial
precedent. Trace C is the shape whose supply the project measured and found hollow.

Each trace accounts for all fourteen required concerns: branding, onboarding, identity,
tenant, settings, navigation, data ownership, migrations, events, connectors, token
mapping, runtime, upgrade, rollback.

---

## Trace A — intact service: a signature/audit engine kept downstream

**Shape:** `intact_service` · **rights exposure:** `none_network_only` · **sync model:** `downstream_service`

**Why this shape.** The SISOCRM test, applied directly: *would upstream ever ship
something here that we would actually want?* For signature envelopes and cryptographic
audit the answer is emphatically yes, and the second test compounds it — this is
security-critical and legally-loaded code, the category SISOCRM classifies as a
**liability to own**. The recorded verdict is `SERVICE — downstream`, with the reasoning
"Legal validity + crypto audit. The last code we want to maintain."

The expensive mistake this avoids is named explicitly in the same source: *the failure
mode is owning the security-critical parts while renting the parts that define your
product.* Trace A rents the right thing.

| Concern | Resolution | Surgery | Class |
|---|---|---|---|
| Branding | Not applicable — no donor UI is rendered in the host | — | — |
| Onboarding | Not applicable — the donor is never user-facing | — | — |
| Identity | Host mints a short-lived audience-bound assertion; the service never sees a host password | NS-IDENT-01 | SEMI |
| Tenant | Donor retains its own tenancy; host enforces the shape at the proxy because the host cannot reach the donor schema | NS-TENANT-02 | SEMI |
| Settings | Donor-owned, unreachable — service-shaped donors have no settings surface in the product | — | — |
| Navigation | Host renders the entry; no donor chrome exists to reconcile | NS-NAV-01 | SEMI |
| Data ownership | `donor_owned_intact`. Authoritative owner: **donor** | NS-DATA-01 | HUM |
| Migrations | Donor owns them entirely. The host never migrates donor tables | NS-DATA-01 | HUM |
| Events | Donor webhooks wrapped in the host envelope, stamped with a distinct capability identifier | NS-EVENT-01 | SEMI |
| Connectors | The donor *is* reached as an adapter; the host owns the tenant credential row | NS-CONN-01 | DET |
| Token mapping | Not applicable — no donor UI | — | — |
| Runtime | `service` profile; separate origin behind a contract | NS-RUNTIME-01 | HUM |
| Upgrade | Adopt upstream releases; drift detection is digest comparison, the response is human | NS-UPGRADE-01 | SEMI |
| Rollback | Objects: donor revision, configuration, secrets, connector credential state. **Not** data — donor data rollback is the donor's own procedure and has its own horizon | NS-ROLLBACK-01/02 | SEMI/DET |

**What the framework handles cleanly.** Seven of fourteen concerns are either not
applicable or resolved by a single named surgery. `CapabilityContract.state_semantics.
authoritative_owner = donor` disposes of the migration question in one field. This is the
cheapest shape and the contract family shows why: nothing is copied, so
`PackagingProfile.rights_exposure` is `none_network_only` and NS-UPGRADE-02 — the worst
recurring cost in the taxonomy — never applies.

**What it does not resolve.** The cross-owner query. A product view spanning this donor
and a host-owned resource cannot be one query; it requires NS-DATA-03 and pays the
eventual-consistency cost SISOCRM states plainly: *"which buyers signed an NDA and viewed
the CIM" cannot be one query.* The trace does not make that cost disappear; it makes it
**visible at binding time** rather than at 2am.

**Falsifier.** If a signature/audit donor's upstream releases prove to require host-side
schema changes on every minor version, the `downstream_service` sync model is wrong for
this capability and it must be re-shaped — which restarts qualification.

---

## Trace B — transplanted product surface: a record surface absorbed into the host

**Shape:** `transplant` (product surface) or `intact_fork` (whole donor) · **rights exposure:** `source_copied` · **sync model:** `pinned_fork_no_merge`

**Why this shape.** The inverse of Trace A on both tests. Upstream will never ship
client-specific vocabulary or a client-specific record layout, so the merge is fiction;
and this is the category SISOCRM calls a **liability NOT to own** — *anything that defines
the product's feel: record surfaces, list/table/filter/detail, the shell, vocabulary.
Every tweak here fights upstream's assumptions.* The recorded verdict for Twenty's record
surfaces is `OWN — transplant the code`, with the note that they are *"already effectively
forked the moment we customise."*

The operated precedent is real, not hypothetical. SISOCRM's `DONOR_FORK_STANDARD` names
this the default integration pattern *"when a donor application already has the complete
UI and behavior we want,"* with Teable as the reference implementation, and an explicit
warning against the alternative: *"Do not transplant a partial component tree unless the
donor explicitly supports that embedding."*

| Concern | Resolution | Surgery | Class |
|---|---|---|---|
| Branding | Marks replaced; compiled bundles, email templates and favicons swept separately because source replacement misses them | NS-BRAND-01 | DET |
| Onboarding | Donor first-run suppressed — **and traced for what it initialized**, because the wizard may write default workspaces and permission rows | NS-ONBOARD-01 | SEMI |
| Identity | Host session injected at the smallest donor auth seam. Success criterion: *no donor signup/login route reachable* | NS-IDENT-01 | SEMI |
| Tenant | Tenant key introduced as first-class from the first migration. **The unrecoverable surgery** | NS-TENANT-01 | SEMI |
| Settings | v1 default is donor-rendered behind a host nav entry. Full remount has **zero commercial precedent** | NS-SETTINGS-02 (not -01) | DET |
| Navigation | Donor contributes nodes; host composes one tree; route-space handshake mandatory | NS-NAV-01/02/03 | SEMI |
| Data ownership | `donor_owned_absorbed`. Own schema, same database server | NS-DATA-02 | SEMI |
| Migrations | Donor's own migrator keeps its history in its own schema. **One owner per table, never two** | NS-DATA-01, NS-MIGRATE-01 | HUM/DET |
| Events | Donor internal events wrapped; contractual events separated from incidental ones | NS-EVENT-01 | SEMI |
| Connectors | Host connection store; donor never persists credentials | NS-CONN-01 | DET |
| Token mapping | Donor tokens mapped to host semantics through one resolver | NS-TOKEN-01, NS-BRAND-02 | SEMI |
| Runtime | `microfrontend` or in-process, per donor embedding support | NS-RUNTIME-01, NS-RUNTIME-02 | HUM/SEMI |
| Upgrade | Pinned; drift detected but **merge not attempted** — the honest position for a fork whose divergence is the point | NS-UPGRADE-01 | SEMI |
| Rollback | All eight objects live, including the standing alternate UI route (`/tables-native` while `/tables` is canonical) — the object no vendor surfaced | NS-ROLLBACK-01/02 | SEMI/DET |

**This trace is where the framework strains.** Fourteen of fourteen concerns are live;
twelve require a named surgery; four are `architectural` cost class and three are
irreversible. Two findings deserve to be stated plainly rather than smoothed:

1. **NS-SETTINGS-01 has no precedent.** After 33 commercial surfaces, *zero* render a
   third party's settings inside host-owned chrome. Zoho One and Microsoft 365 — the two
   largest suite-unification efforts observed — unify at identity and admin and
   explicitly do **not** suppress donor chrome. An Actionist promise of "one settings
   surface across all capabilities" is a **research bet, not an engineering estimate**,
   and this trace therefore defaults to NS-SETTINGS-02.

2. **The host navigation registry must be built, not adopted.** Luigi has the declarative
   node data structure but no contribution model; Backstage has decentralized
   contribution but emits a React element welded to its own build system. Two proven
   halves, no whole. This is a named build cost, not a dependency.

**On the "one or two percent" claim.** This trace is the reason A07 stays `unknown`. The
cosmetic surgeries (NS-BRAND-01, NS-NAV-03) are genuinely tiny. The architectural ones
(NS-TENANT-01, NS-IDENT-02, NS-DATA-01, NS-RUNTIME-01) are not, and three of them are
irreversible. The framework's contribution is **not** an estimate — it is the separation
that makes "small in lines, large in boundary" a statement the plan can carry rather than
a surprise it absorbs.

**Falsifier.** If one mature donor is absorbed and every category resolves through a
reusable adapter with no bespoke surgery, the taxonomy is over-built and should collapse.
The stop rule already anticipates the opposite result: *stop if every donor requires
bespoke auth/data/navigation surgery with no reusable adapter pattern.*

---

## Trace C — extracted package plus generated pattern: a case/workflow capability

**Shape:** `extracted_package` (engine) + `custom_delta` (surface) · **rights exposure:** mixed

**Why this trace exists.** P03 measured this and the result inverts the intuition. Across
13 case/workflow rows: **7 runnable products exist and every one is strong-copyleft,
weak-copyleft or open-core. Clean permissive products: zero.** The only clean permissive
candidates — flowable, jBPM, Camunda — are `primitive`: BPMN/CMMN *engine libraries* with
no UI, no case surface and no identity. Camunda ships its Operate and Tasklist UIs as
separate non-open components.

P03's own account of revising this twice is the honest part: an earlier pass reported
case/workflow had *"mature, permissive, service-shaped supply on the JVM"* and the
product-versus-primitive pass corrected it. The corrected claim is both stronger and more
useful: **the engine layer is solved under permissive terms; the product layer is what
Actionist would build.**

This is why `CapabilityContract.capability_kind` adds `engine` and `surface` as distinct
values. Collapsing them is precisely the error P03 caught.

| Concern | Resolution | Surgery | Class |
|---|---|---|---|
| Branding | Engine has none; surface is host-authored | — | — |
| Onboarding | Host-owned; no donor wizard exists | — | — |
| Identity | Host-native throughout — the engine has no identity concept to displace | — | — |
| Tenant | Host tenant key from the first migration; the engine is handed a tenant-scoped context | NS-TENANT-01 | SEMI |
| Settings | Host-owned entirely. **The only trace where NS-SETTINGS-01's risk does not arise** | — | — |
| Navigation | Host-authored; no contribution needed | — | — |
| Data ownership | `owned_transactional`, Postgres. Authoritative owner: **host** | NS-DATA-01 | HUM |
| Migrations | Host owns them. The cleanest migration story of the three traces | NS-DATA-01 | HUM |
| Events | Host envelope natively; engine state transitions become host events | NS-EVENT-01 | SEMI |
| Connectors | Host store; dry-run required for any external effect the workflow triggers | NS-CONN-01/03/04 | DET/SEMI |
| Token mapping | Not applicable — the surface is host-authored against host tokens | — | — |
| Runtime | `package` for the engine (JVM sidecar if language-locked); host process for the surface | NS-RUNTIME-01 | HUM |
| Upgrade | Coordinate-only for the engine — **the cheapest upgrade path available** | NS-UPGRADE-01 | SEMI |
| Rollback | Code artifact, schema, data. Fewest objects of the three traces | NS-ROLLBACK-01 | SEMI |

**What this trace proves about the framework.** It is the *inverse* of Trace B: eight of
fourteen concerns are not applicable or host-native, because nothing donor-shaped is
absorbed. The hardest computational part — a correct state machine with timers and CMMN
semantics — is borrowed outright at a coordinate, and the product-defining part is
written. That is a much better-scoped build than "build a workflow system."

**The cross-language cost the framework must not hide.** flowable and jBPM are JVM. A
TypeScript host consuming them pays a sidecar or a service boundary, which promotes
NS-RUNTIME-01 from a package decision to an operational one. The trace records this as a
real cost rather than assuming a same-language engine exists. `U` — no equivalent
permissive CMMN engine on Node was established by P03.

**Falsifier.** If a clean permissive case/workflow *product* is found, Trace C collapses
into Trace A or B and the "engine solved, surface built" conclusion is wrong for this
archetype. P03's method — reading each repository's actual authentication surface rather
than its description — is the method that would find it, and it is the method that
already deleted 17 of 19 apparent portal rows.

---

## What the three traces establish together

**1. The reuse shape predicts the surgery set, and the contract family makes that
prediction machine-checkable.** Trace A touches 7 of 14 concerns, Trace B touches 14 of
14, Trace C touches 6 of 14. This is not a coincidence to be smoothed over — it is the
single most useful planning signal the framework produces, and it is derivable from
`PackagingProfile.reuse_shape` before any code is read.

**2. The irreversible surgeries cluster.** NS-TENANT-01, NS-IDENT-01/02, NS-DATA-01,
NS-CONN-01/03 and NS-RUNTIME-01 are marked `reversible: false`. Every one of them is
decided at binding time and none can be revisited without re-qualification. A framework
that surfaces them at binding time is doing its job; one that discovers them at Stage 8
is not.

**3. One category has no precedent to copy.** NS-SETTINGS-01 is the only surgery in the
taxonomy carrying `risk: HIGHEST_UNKNOWN_IN_TAXONOMY`, and it earned that from a
deliberate 33-surface sweep that found nothing. Every other surgery has at least one
observed commercial or operated precedent.

**4. Supply shape, not supply volume, decides the build.** Trace C's conclusion came from
reading what repositories *are* rather than counting them — the same discipline that
turned 19 portal rows into 2 and 728 headline connectors into 113 OAuth ones. The
framework should make that reading a required field (`capability_kind: engine | surface |
product`), not an analyst's diligence.
