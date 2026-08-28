# P04 — the repo-to-module framework

Run `2026-08-27-sprint-2-opus` · lane S2-L1 · agent `ACTIONIST-S2-L1-MODULE-FRAMEWORK`
Part: **P04 only** · Observed 2026-08-27
Status: research only · `DESIGN_ONLY` · `UNEXECUTED` · `NOT_ADMITTED` · admitted modules **0** · `implementation_authorized=false`

> **Boundary.** This artifact defines contracts and traces. It performed no cloning,
> execution, build, benchmark, migration, deployment or admission, and touched no client
> data or authenticated vendor session. It wrote only this run directory.

---

## 1. First principles

### 1.1 Objective

Define the framework that turns useful source into maintainable Actionist modules **while
preserving heterogeneous architectures**. The last clause is the whole difficulty. A
framework that normalizes every source into one database, one runtime and one UI
architecture is easy to specify and destroys the quality that motivated the reuse. A
framework that normalizes nothing produces an unmaintainable pile.

The framework's job is to standardize **only the seams**, and to name exactly which ones.

### 1.2 The reusable unit

A repository is a source container. A module is:

> a **bounded capability** with declared semantics, delivered in one **explicit reuse
> shape**, binding to a **host contract** at named seams, carrying **linked but separate**
> qualification evidence, and governed by a registry that can revoke it.

Five things, deliberately not one object. The inherited Block Contract v1 fused them, and
§2 shows why that fusion is the defect rather than a stylistic preference.

### 1.3 Invariants

1. **One authoritative owner per stateful resource.** One migration owner per table, never two.
2. **One explicit reuse shape per module**, decided before adaptation and not revisable without re-qualification.
3. **Capability semantics never contain runtime, proof or rights detail.** A proof re-run must not be able to edit what a composer reads.
4. **Authority composes by intersection, never union.**
5. **Unknown compatibility returns `UNDERDETERMINED`.** It never becomes model confidence.
6. **Absent evidence holds state.** It never promotes.
7. **A module's evidence tier is the minimum across its nine families**, never the average.
8. **Every released composition enumerates its recoverable objects.** Rollback is not a boolean.

### 1.4 Forbidden couplings

| Coupling | Why it is forbidden |
|---|---|
| Capability semantics ↔ runtime profile | Puts donor-specific runtime detail into the interface a composer reasons over |
| Capability semantics ↔ qualification evidence | Makes every proof re-run mutate the semantic contract |
| Two modules ↔ one migration authority | The 2am failure; the one rule SISOCRM proved by operating it |
| Registry projection ↔ rights refusal | Projecting `ambiguous`/`incompatible` as `pending` erases the refusal |
| Composed scope ↔ union of member scopes | The natural implementation is exactly the privilege-escalation bug |
| Discovery score ↔ admission evidence | A 26-point harvest heuristic is T0/T1 triage, not proof |

### 1.5 Unknowns this lane does not resolve

- Whether donor settings can be rendered in host chrome at all (**no commercial precedent found in 33 surfaces**).
- The real adaptation-cost distribution. A07 stays `unknown`; this lane supplies the categories to measure, not the measurements.
- Whether one host navigation registry can serve intact, embedded and transplanted donors (both known halves are unadoptable).
- Whether the deterministic elimination layer materially reduces model error (S2-L4 owns the falsifier).
- Cost per converted module. **An unmeasured cost is `BLOCKED`, not zero.**

---

## 2. Why the inherited contract had to be split

Block Contract v1 is structurally strong — 19 required top-level fields, 29 `$defs`,
covering ports, state machine, tenancy, provenance, cost, maintenance, recovery and
admission. It fails as a *composition interface* for one reason, and the reason is
ownership rather than size:

**The seven concerns it fuses have seven different owners changing on seven different
clocks.** Capability semantics change when product meaning changes. Packaging changes when
the delivery shape changes. Host requirements change on a host release. A binding changes
per application. Qualification changes per proof run. Registry state changes by a
governance act. Release state changes per deployment.

Fusing them means a proof re-run can mutate the semantic interface a composer reads. That
is not a hypothetical: v1 carries `evidence_receipts` in the same object as `ports`.

The contract family in `module-contract-family.json` separates them, and the separation
rule is stated in the file: *a field belongs to the record whose owner can change it
without invalidating the others.*

### 2.1 Defects carried in and fixed

Five, each inherited from a prior lane's own finding rather than discovered fresh:

| ID | Defect | Fix |
|---|---|---|
| **X-1** | v1's `id` regex hardcodes major version `1`, so a v2 id is literally unrepresentable | `capability_id` admits any major |
| **X-2** | v0 required `requires: [block-ids]`; v1 **dropped the dependency edge entirely** while composition is the goal | `requires_capabilities` restored |
| **X-4** | Great Library `license.status` has 3 values and cannot represent `ambiguous`/`incompatible` — exactly the two that must block reuse | Refuse projection rather than downgrade |
| **R2B-GAP** | No receipt type for source identity, dependency closure or shape decision — the stages gating everything else | Four types added |
| **SCOPE-HOLE** | `admitted_scope` is a free nullable string, so scope-less admission reads as universal | Structured and required; absent means admitted **nowhere** |

X-2 is worth pausing on. Phase 8 recorded that v1 dropping `requires` is *"a plausible
cause of gap G-B rather than an oversight to paper over"* — the framework could not
express composition because it had deleted the edge composition runs on.

### 2.2 The vocabulary collision, resolved

Three prior artifacts used three different "shape" vocabularies, and they were not
synonyms:

- the knowledge spine's **8 reuse shapes** (service, embedded module, transplant, extracted package, adapter, generated pattern, template, custom delta);
- UBF §3.2's **5 packaging modes** (intact_fork, intact_service, extracted_slice, generated_from_pattern, reference_only);
- repo-to-block §2's **4 source shapes** S1–S4 (intact package, service/runtime, bounded code slice, reference-only reimplementation).

Treating these as one enum with naming drift would be wrong. **They measure two different
axes.** S1–S4 classify *how much source is copied* — a rights and maintenance question.
The other two classify *what the module is in the product* — an architecture question.
An `intact_service` copies nothing; a `transplant` copies source; both are single points
on the first axis and different points on the second.

The contract family therefore carries **both**: `reuse_shape` (10 values, the architecture
axis) and `rights_exposure` (4 values, restating S1–S4 as what they actually measure).
This is a reconciliation, not a merge, and it is recorded in the decision ledger as
`D-P04-002`.

---

## 3. Source identity comes before everything

The single most consequential finding inherited into this lane, and it inverts the
intuitive ordering:

> **Identity, not rights, is the first blocker.** Rights work on an unpinned source is
> wasted, because the finding cannot be bound to specific bytes.

The measured state that establishes it: the Phase 7 corpus records
`"immutable_commit_or_tag": "NOT_CAPTURED"` and
`"access_status": "recorded_public_url_not_independently_resolved"`. The corpus is a
**nomination layer**. Every candidate re-enters at Stage 0.

Identity requires three artifacts together because each alone is forgeable or mutable: a
`purl` coordinate, an immutable revision (a branch name is *not* an identity), and a
content digest. `PackagingProfile.source_identity` requires all three and carries
`identity_status: pinned | unpinnable | NOT_CAPTURED` so the corpus's real state is
representable rather than absent.

**The consequence for planning.** Any plan denominated on a harvest count is denominated
on nominations. The local 21st corpus measured 7,949 harvested, 3,951 tagged, and
**2** with local code — and carries no license field at all, which under SPDX 2.3 is
`NOASSERTION`, not permission. `isPublic: true` is visibility, not a licence.

---

## 4. The normalization surgery taxonomy

`normalization-surgery-taxonomy.jsonl` — **28 surgeries across 14 categories**. Every row
carries a mechanism, a determinism class, applicable shapes, a cost class, a failure mode,
an evidence citation, the judgment required, and a falsifier.

### 4.1 The distribution is the finding

| Determinism | Count | |
|---|---:|---|
| `DET` fully deterministic | 7 | 25% |
| `SEMI` mechanically computable, policy-thresholded | 17 | 61% |
| `HUM` irreducibly judgment | 4 | 14% |

| Cost class | Count | |
|---|---:|---|
| `cosmetic` | 3 | 11% |
| `boundary` | 13 | 46% |
| `architectural` | 12 | 43% |

**Only 3 of 28 surgeries are cosmetic.** This is the quantitative form of the "one or two
percent" question, and it does not support the optimistic reading. The line-count delta
may well be small; the *boundary* delta is where 25 of 28 surgeries live, and 12 of them
are architectural. Six surgeries are marked `reversible: false`.

### 4.2 The one unrecoverable surgery

`NS-TENANT-01` (tenant key introduction) carries `recoverable: false`. A cross-tenant
result is the single failure in the taxonomy with no recovery path — consistent with the
inherited gate register, where a cross-tenant result is a kill condition rather than a
remediable fail.

It compounds with a supply finding: **for a TypeScript host there are effectively no
adoptable multi-tenancy frameworks.** The maintained ones are language-locked
(`archtechx/tenancy` Laravel 4.4k stars, `citusdata/django-multitenant` 822); targeted
searches otherwise returned sub-5-star templates. Tenant isolation is owned, tested work.
**No purchase removes it**, and the framework should stop implying one might.

### 4.3 The one surgery with no precedent

`NS-SETTINGS-01` carries `risk: HIGHEST_UNKNOWN_IN_TAXONOMY`. After a deliberate 33-surface
commercial sweep, **zero** surfaces render a third party's settings inside host-owned
chrome. Shopify, Forge and Superblocks leave the guest's settings screen to the guest.
Zoho One and Microsoft 365 unify at identity and admin and explicitly do not suppress
donor chrome.

That is absence of evidence after a deliberate sweep — not proof of impossibility. But it
forces a correction the framework must carry: **"one settings surface across all
capabilities" is a research bet, not an engineering estimate.** The taxonomy therefore
ships `NS-SETTINGS-02` (donor-rendered behind a host nav entry) as the v1 default and
marks `-01` as a differentiator requiring Loop-3 evidence *before* it is promised to a
client.

The three tiers of the absorption question have very different precedent strength and
must stop being tracked as one `unknown`:

| Tier | Precedent | Cost class |
|---|---|---|
| Identity | **Strong** — 4 independent commercial forms plus a protocol-proven local spike | Bounded, patterned |
| Navigation | **Partial** — two proven halves, neither shipped standalone | Bounded per donor; host registry must be built |
| Settings | **None found** | Unknown; the framework's biggest risk |

### 4.4 What must be built rather than adopted

Three, each established by reading the candidates rather than their descriptions:

1. **The host navigation registry.** Luigi has the declarative node structure (~45 params; `children` typed `array | function` resolving at runtime; `visibleForFeatureToggles` with negation; `userSettingsGroup` tying a nav node to a settings group) but **no contribution model** — one tree in the host's own config file. Backstage decentralizes contribution but emits a **React element**, not a declarative record, and is welded to `@backstage/cli` and webpack. Two proven halves, no whole.
2. **Tenant isolation.** §4.2.
3. **The idempotency layer.** OSS supply is effectively absent — the most-starred idempotency-key middleware found has **14 stars**, and no surveyed embedded-iPaaS or agent-action vendor documented a write idempotency contract for agent actions.

---

## 5. Where deterministic automation stops

This is the section the dispatch required to be explicit, and the honest answer is
uncomfortable for any full-automation claim.

### 5.1 The split

| Fully deterministic | Environment-dependent | Policy-thresholded | Irreducibly human |
|---|---|---|---|
| Content digest | Dependency closure | Licence compatibility | **Reuse shape decision** |
| `purl` construction | Sandbox build reproduction | Public vs incidental interface | Ambiguous rights resolution |
| Static reachability (typed, non-dynamic) | Visual state capture | `external_effect` typing | Adaptation-safety acceptance |
| Diff and before/after digests | Test execution | Tenancy sufficiency | Drift response (adopt/fork/retire) |
| Notice presence detection | Egress ledger | Change-ratio threshold | **Migration authority assignment** |
| Upstream drift *detection* | | Settings combination rule | Owner assignment · **Admission** |

**No stage is end-to-end deterministic.** Identity pinning and boundary extraction are
genuinely mechanical and are the spine. Everything downstream either depends on a pinned
environment or encodes a policy choice.

### 5.2 The three irreducible decisions

Full automation is falsified by three specific decisions, not by general caution:

1. **The reuse shape** (`NS-RUNTIME-01`, and `PackagingProfile.reuse_shape`). Choosing an embedded shape for something engine-shaped converts a dependency-update problem into a permanent fork. The decision order is deliberately biased toward copying less — coordinate, then network, then slice, then specification-only — because the first two copy nothing and carry the smallest rights and maintenance surface. *A slice decision made for convenience when a coordinate was available is a review failure.*
2. **Migration authority** (`NS-DATA-01`). A product-architecture decision, not a mechanical one.
3. **Admission.** Permanently outside any pipeline's power: `implementation_authorized` is `const: false` in the inherited contract — not a default, a constant.

### 5.3 What automation should actually deliver

Not conversion. **Cheap elimination plus a clean decision packet.** The machine should
pin identity, compute closure, derive reachability, detect drift, and assemble the
evidence a named human needs — then stop at the three decisions above and present them
with their rejected alternatives recorded so a later reviewer can falsify them.

### 5.4 A model-judgment trap the framework must name

Models are best at exactly the SEMI work — reading unfamiliar source, proposing shapes,
mapping semantics. That is 17 of 28 surgeries, the majority. The trap is that SEMI work
*looks* like DET work in its output: a proposed shape decision and a computed digest are
both a short confident string.

The mitigation is structural, not a prompt: `PackagingProfile.reuse_shape` requires a
`shape_decision` receipt (one of the four types this lane adds) carrying the rejected
alternatives. A shape with no recorded alternatives is not a decision; it is a default
that nobody noticed.

---

## 6. Contradictions and rejected alternatives

### 6.1 Rejected

| Alternative | Why rejected |
|---|---|
| Keep one monolithic module contract | Seven owners on seven clocks; a proof re-run would mutate the composer's interface (§2) |
| Merge the three shape vocabularies into one enum | They measure two orthogonal axes; merging would lose the rights-exposure axis (§2.2) |
| Normalize every donor onto host Postgres | The cost is the fork, not the database — three donor data layers rewritten, and redone on every upstream merge |
| One shared schema across donors | Couples independently-versioned projects at their most brittle layer; explicitly out of scope in the operated standard |
| Adopt a connector catalogue with its storage | Rejected **by demonstration**: a global connections table with no tenant column, a hardcoded key salt, a codec silently returning plaintext when the env key is unset, and two tenants' connections returned under one admin token |
| Promise a unified settings surface in v1 | Zero precedent in 33 surfaces (§4.3) |
| Treat harvest counts as supply | 7,949 harvested, 2 with local code, no licence field |

### 6.2 Carried contradictions

| ID | Contradiction | Status |
|---|---|---|
| **X-3** | The forge/judge pipeline is described as a gate but has **no numeric threshold**; blessing is a human act. Automated visual gating is not established | Open — S2-L2 inherits |
| **X-7** | An AGPL-3.0 donor is operated as a mounted fork while harvest policy classes AGPL as reference-only. Both are current practice | Reconciled *only* if `intact_service`/`intact_fork` is accepted as a distribution-distinct shape. If a qualified reviewer rejects that distinction, much of the packaging axis must be rebuilt |
| **P04-NEW** | The knowledge spine lists 8 reuse shapes; this framework's `reuse_shape` enum has 10 (adding `intact_fork` and `reference_only`, which the spine folded into others) | Resolved here; the spine should adopt the 10 or state why 8 |

X-7 remains the most consequential. It is the case where this framework's central
proposal is what makes two existing local policies non-contradictory.

---

## 7. Falsifiers, experiments and stop rules

### 7.1 Falsifiers

1. **F-SPLIT** — if one composition can be planned from a single monolithic contract without the composer reading proof or rights fields, the seven-record split is over-built.
2. **F-SHAPE** — if reuse shape does **not** predict the surgery set across five donors, the taxonomy's organizing axis is wrong.
3. **F-SETTINGS** — if one donor's settings render in host chrome with full parity **and survive a donor upgrade**, NS-SETTINGS-01's risk rating is wrong and the v1 default should change.
4. **F-COSMETIC** — if a representative absorption measures >80% of adaptation hours in `cosmetic` surgeries, the boundary-heavy reading of A07 is wrong.
5. **F-DET** — if shape decision and migration authority can be decided mechanically at parity with a named human across ten donors, §5.2 is wrong and more of the pipeline automates.
6. **F-ORTHOGONAL** — if a module is admitted where one evidence family's pass was *derived* from another's, the nine-family separation is not being enforced.

### 7.2 The next experiment

Loop 0 in the roadmap — contract surgery, no application build — is now executable
against this family. Produce records for an intact service, a transplanted surface, an
extracted package, one owned capability and one connector.

**Pass:** the solver determines compatibility without implementation source and without a
monolithic contract.
**Fail:** required semantics remain in prose, or runtime-specific fields leak into
`CapabilityContract`.

Loop 3 (host absorption) is the one that resolves A07 and NS-SETTINGS-01. It should be
scheduled **before** any settings-unification claim reaches a client.

### 7.3 Stop and kill rules

Stop or redesign if: every donor requires bespoke auth/data/navigation surgery with no
reusable adapter pattern; plan-then-fill costs more than a focused custom build across
representative pilots; typed contracts cannot hide storage/runtime differences without
becoming donor-specific; composed UX stays visibly incoherent after token and shell
adaptation; operational burden grows linearly per reused service; or production outcomes
do not improve retrieval.

**Kill immediately** on a cross-tenant result, a non-empty egress ledger, or a rollback
parity mismatch. These are the four unrecoverable states, and they are unrecoverable
because continuing past them means shipping a product that can leak or cannot be undone.

---

## 8. Handoff edges

| To | Edge | What this lane fixes |
|---|---|---|
| **S2-L4** | `CapabilityContract` is the composer's only semantic input; `BindingPlan.unresolved` is the `UNDERDETERMINED` channel; `glue_budget` is declared per binding; C1–C7 are the feasibility rules | Reconciled §9 |
| **S2-L2** | NS-BRAND-02 and NS-TOKEN-01 are SEMI and hand the token contract to L2; C3 requires one resolver context | L2 owns the mapping; P04 owns only that the surgery exists |
| **S2-L3** | NS-NAV-01/02/03 and NS-SETTINGS-01/02 are shell operations; the host owns the URL space without exception | L3 must treat the nav registry as build-not-adopt |
| **S2-L5** | `PackagingProfile.reuse_shape` constrains the runtime profile; `ReleaseManifest.rollback_plan.objects` enumerates eight object kinds; the composition horizon is the **minimum**, computed at release time | L5 owns profile definitions and qualification |

---

## 9. Reconciliation with S2-L4

Reconciled through shared read-only drafts on 2026-08-27, before callback. S2-L4's
`assembly-plan.schema.json`, `compatibility-and-authority-rules.json` and
`composition-fixtures.json` were read directly in its own run directory; nothing there was
written or modified by this lane.

**The edge holds.** L4 consumes this family by reference — it pins
`actionist:p04:module-contract-family:v1` and imports **21 fields verbatim**, recording in
its own `vocabulary_provenance` that *"a divergence is a defect, not a dialect."* Its
design note confirms the boundary this lane needed: the AssemblyPlan *"never edits a
CapabilityContract, never mints authority, and never records a compatibility judgement a
model made."*

The §2 coupling risk did **not** materialise. L4 reads `CapabilityContract` for semantics
and `PackagingProfile`/`QualificationDossier` only for fields this family already
separates; it did not need a semantic field the family lacks, and it did not have to read
across records to plan.

**Two P04 composition rules were promoted to named solver constraints**, which is the
outcome this lane wanted and could not guarantee alone:

| P04 rule | L4 constraint | Why it needed its own name |
|---|---|---|
| C6 single migration owner | `migration_owner` | Distinct from `namespace` — that is collision, this is contested **authority** |
| C7 observability identity | `observability_identity` | Enforced at admission, not discovered at incident time |

**One real defect was raised against this contract, and it is accepted.**

`P04-L4-001` — `CapabilityContract.authority_class` is a capability-shaped *summary* and
can disagree with port-level `external_effect`: a module classed `read_only` may declare a
port whose `external_effect` is not `none`. L4 correctly names this *"the single most
likely place for a silent privilege bug."*

Resolution, now recorded in the contract family: **port-level `external_effect` is
authoritative; the class is a summary; where they disagree the stricter wins and the
disagreement returns `UNDERDETERMINED` rather than resolving silently.** The
class-to-session-ceiling mapping is owned by L4's rules file and is deliberately **not**
restated here, so there is one truth rather than two.

The two axes are genuinely different and neither lane may assume the mapping:
`authority_class` (`read_only | tenant_scoped_write | external_effecting | privileged`) is
capability-shaped; `authority_level` (`read | stage | write | message | deploy`) is a
session ceiling. C4 survives unchanged in both and L4 restates why the union
implementation is the bug: *"a solver that computes a union would pass every fixture in
this suite that tests a single module and fail catastrophically in production."*

**One open edge carried to convergence.** L4's `stage` ceiling deliberately maps to no
capability class — it is the pilot ceiling permitting a complete proposed assembly with
zero tenant-visible effect, where a capability is *"bound but not executed."* This family
does not model a staged-but-unexecuted binding state. Neither lane should invent it
unilaterally; the convergence coordinator owns whether `BindingPlan` needs a
`binding_state`, or whether staging is purely an AssemblyPlan concern.

## 10. What this lane refuses to claim

- That any module exists. `admitted_modules = 0`.
- That the adaptation cost is 1–2%, or any other number. A07 stays `unknown`; §4.1 supplies the categories, not the measurements.
- That donor settings can be absorbed into host chrome. No precedent was found.
- That the host navigation registry can be adopted. Both known halves are unadoptable.
- That conversion can be automated. Three decisions require a named human (§5.2).
- That any licence is cleared. No scan was run.
- That the traces in `worked-traces.md` were executed. Every receipt is `not_run`.
- That the S2-L4 edge is closed. It reconciled and one defect was accepted (§9), but the
  staged-binding edge remains open and belongs to the convergence coordinator.

---

## Boundary receipt

```yaml
lane: S2-L1
part: P04
agent: ACTIONIST-S2-L1-MODULE-FRAMEWORK
run_id: 2026-08-27-sprint-2-opus
observed: 2026-08-27
model: opus-5-1m
research_only: true
implementation_authorized: false
execution_status: UNEXECUTED
admission_status: NOT_ADMITTED
admitted_blocks: 0
admitted_modules: 0
source_cloned: false
source_executed: false
build_run: false
license_scan_run: false
sbom_generated: false
deployment_run: false
client_data_accessed: false
authenticated_vendor_action: false
sprint_1_packets_modified: false
other_lane_directories_written: false
parent_goal_status: active
```
