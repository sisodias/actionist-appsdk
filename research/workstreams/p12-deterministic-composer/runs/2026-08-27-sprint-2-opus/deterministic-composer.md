# P12 — the deterministic composer

**Lane:** `S2-L4` · **Agent:** `ACTIONIST-S2-L4-COMPOSER` · **Run:** `2026-08-27-sprint-2-opus`
**Owns:** P12 / domain D15 (composition planner) · **Observed:** 2026-08-27
**Mode:** research and contract synthesis only. No implementation, no execution, no model run, no registry query, no cloning, no build, no deploy, no admission.
**Boundary:** `research_only=true`, `implementation_authorized=false`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `admitted_blocks=0`.

**Evidence classes:** `E` directly inspected local artifact · `D` documented first-party claim, not independently authenticated · `I` inference or design proposal · `U` unknown. A design proposal is never `E` because its inputs were inspected — the inspection is `E`, the proposal is `I`.

---

## 0. Objective, and the one sentence that matters

**Objective.** Receive a ProductSpec plus module and host evidence; eliminate impossible combinations deterministically; expose what the contracts cannot decide; and hand a model only a small set of pre-verified feasible alternatives.

The load-bearing sentence is the third clause, and it is the one most likely to be dropped in implementation:

> **A composer that cannot decide must say so, and saying so must be as easy as saying yes.**

Every failure mode this lane guards against is a variant of *not-knowing presented as knowing*. A model asked "are these compatible?" will answer. A solver missing a field can return a plausible verdict. A ranking function can average a fatal unknown into a good score. The design below spends most of its structure on making the third verdict — `UNDERDETERMINED` — cheap, visible and routed to whoever can close it.

### What this lane is NOT redoing

Phase 8 lane 05 already established the plan-then-fill architecture, the five planner roles, the packet contract, the ten original solver constraints and a 26-fixture eval suite (`E`). Sprint 1 already surveyed the demand, supply, data, identity, connector, runtime and learning planes (`E`). **None of that is repeated here.** This document does four things Phase 8 could not:

1. Binds the solver to a **real contract family** — S2-L1's `actionist:p04:module-contract-family:v1`, published in this same run — instead of an abstract block.
2. Adds **nine constraints** the original ten could not name, each because a Sprint 1 packet proved a specific failure.
3. Closes the **ProductSpec minimum** that P02 explicitly deferred to this lane.
4. Produces **hand-executed traces** that found and fixed a real defect in its own rule table.

---

## 1. First principles

### 1.1 Invariants this lane accepts as given

These come from the knowledge spine and Sprint 1 convergence, not from this lane. They are constraints on the design, not conclusions of it.

| # | Invariant | Source |
|---|---|---|
| I1 | One authoritative owner per stateful resource | A11, INV-P09-1 (`E`) |
| I2 | Requirements stay implementation-independent until composition | Framework invariant 3 (`E`) |
| I3 | Models cannot grant themselves data, tenant or side-effect authority | A-ledger invariant 4 (`E`) |
| I4 | Unknown compatibility returns `UNDERDETERMINED`; it never becomes model confidence | A-ledger invariant 5 (`E`) |
| I5 | A whole workflow must pass before an application is accepted | A-ledger invariant 6 (`E`) |
| I6 | Every release pins exact capability and binding versions | A-ledger invariant 7 (`E`) |
| I7 | Every production composition has a recovery or replacement path | A-ledger invariant 8 (`E`) |
| I8 | Evidence tier is the minimum across families, never an average | I-P15-2, P14 C6 (`E`) |
| I9 | Composition authority is the intersection of member scopes, never the union | P04 C4, P13 C2 (`E`) |

### 1.2 Forbidden couplings

Stated as prohibitions because each names a real way this subsystem could absorb another domain's authority:

- The composer **does not choose modules**. It eliminates; a model or a human chooses among survivors.
- The composer **does not define contracts**. It consumes S2-L1's family and reports gaps back as defects.
- The composer **does not grant authority**. It computes an intersection and refuses what exceeds a ceiling.
- The composer **does not determine rights**. It reads `rights_state` and routes to `human_legal`.
- The composer **does not qualify**. It reads receipts; it never infers one family's pass from another's.
- The composer **does not judge product equivalence**. A `FEASIBLE` verdict is not "this serves the client."
- The composer **does not rank on popularity**. Stars are not quality (A22, unproven/weak).

### 1.3 The unknowns that bound everything below

| Unknown | State | Consequence for this design |
|---|---|---|
| Zero admitted modules exist | `E` | The solver cannot be piloted end-to-end. `F-C06` stands. |
| Actionist HostContract is unsettled | `E` | Every host-facing rule is written against S2-L1's proposed shape, not a deployed one. |
| Real adaptation cost is unmeasured | `E` (A07 `unknown`) | The glue budget has a *mechanism* but no calibrated *numbers*. |
| Cheap-model capability is unmeasured | `E` | Every `MR-*` hypothesis is inherited and unfalsified. |
| Client-value rubric does not exist | `E` | `FEASIBLE` can never mean "good." Axis A8 stays human. |
| The authority-axis mapping is unvalidated | `I` | §4.3 — the weakest load-bearing element in this design. |

---

## 2. What the composer consumes

### 2.1 The ProductSpec minimum — closing P02's deferral

P02 ended with an explicit dependency on this lane:

> "What is the true minimum? This lane derived the spec backwards from P12's needs, but **P12's contract is itself unsettled in Sprint 1**. The minimum cannot be closed until S2-L4 defines what the composer consumes." (`E`)

**Answer.** The solver reads exactly five fields. Everything else in a ProductSpec exists for humans, acceptance and learning — all legitimate, none consumed by feasibility.

| Field | Why the solver needs it | What it must NOT be used for |
|---|---|---|
| `requirements[].atom` | Selects candidate capability families | Not parsed as prose; a free-text atom is a spec defect |
| `requirements[].authority` | Feeds the ceiling intersection | Never widened to fit a module |
| `requirements[].coverage` | `UNCOVERED` count gates promotion | Never set by the composer |
| `entities[]` | Detects identity/data conflicts; preserves client vocabulary | Never used to rename donor tables |
| `authority_ceiling`, `data_mode`, `non_goals` | Session-level ladders and exclusions | Never upgraded silently |

**The two gates the composer enforces but does not own:** `open_markers == 0` and `uncovered_requirements == 0`. The composer **refuses to plan** against a spec failing either, unless a recorded `waiver_ref` exists. It never resolves a marker itself — that is precisely the "model got confident" failure P02's own A4 names (`E`).

**Design consequence for P02:** the spec's rich structure is vindicated but only five fields are load-bearing for composition. That is a useful narrowing: it tells P02 which fields must be mechanically enforced and which may stay prose.

### 2.2 Module and host evidence

Consumed verbatim from `actionist:p04:module-contract-family:v1` (`E`, same run). The composer reads all seven records but **writes only `BindingPlan` references and its own AssemblyPlan**:

| Record | Read for | Written? |
|---|---|---|
| `CapabilityContract` | ports, authority class, state semantics, host needs | never |
| `PackagingProfile` | reuse shape, rights, closure, sync model | never |
| `HostContract` | pinned facilities, identity, navigation, settings | never |
| `BindingPlan` | the per-application binding — **D15-owned** | referenced and ordered |
| `QualificationDossier` | evidence tier, receipt families | never |
| `RegistryRecord` | admission scope, lifecycle, projection policy | never |
| `ReleaseManifest` | rollback objects, recovery horizon | never |

**Vocabulary rule.** Every enum shared with P04 is imported verbatim. A divergence is a defect, not a dialect. `assembly-plan.schema.json → vocabulary_provenance` lists all 21 imported enum paths so a future reader can diff them mechanically.

**One collision found and handled.** P03 uses the string `UNDERDETERMINED` as a **supply-census verdict** about a capability *kind* (e.g. `portal`, `developer_docs_rendering`) (`E`). The solver's `UNDERDETERMINED` is a **per-composition contract-defect verdict**. Same spelling, different objects. The schema never reads a P03 supply verdict into `solver.verdict`; it travels as advisory `candidate.supply_census_verdict`. Left unhandled, this would have produced a composer that refuses to plan whenever the shelf census was incomplete.

---

## 3. Architecture: where determinism stops

### 3.1 The three planes

```text
DETERMINISTIC                    MODEL                      HUMAN
─────────────                    ─────                      ─────
eligibility filtering            interpret demand           licence obligations
port satisfaction (typed)        construct queries          authority grants
version intersection             choose among ≤5            product equivalence
namespace / migration owner       PRE-VERIFIED sets         constraint relaxation
authority intersection           write bounded glue         client acceptance
evidence minimum                 propose reuse shape        any promotion past staging
horizon minimum                   (for confirmation)
glue arithmetic
verdict + constraint naming
```

The boundary is not a style preference. It is the answer to a specific question: **which failures are observable without running a model?** Selection, compatibility, authority, namespace, tenancy, rollback and budget failures are all decidable from declared metadata. Pulling them out of the model plane means the eval suite produces signal *before* any model run is authorized — which matters because the model run is a separate gate that has not been lifted.

### 3.2 Why the model must not be asked about compatibility

A model asked "are these two modules compatible?" produces an answer with a confidence that is not calibrated to anything. It cannot know whether the fields it needed were present. The solver, given the same input with a missing field, returns `UNDERDETERMINED` naming that field.

**This is the whole architectural argument in one comparison.** The model's answer is unfalsifiable and looks identical whether the contracts were complete or empty. The solver's is checkable and tells you what to fix. The dispatch's phrase — *models must not invent compatibility* — is enforced structurally: the model plane receives only sets the solver already certified, and it has no channel to add one.

### 3.3 Ordered rules, not a rule set

22 rules in 7 phases (resolving to 19 distinct constraint names), in a fixed total order. **First failure names the verdict.** Ordering is load-bearing for three reasons demonstrated in the dry run (`solver-dry-run.md` §2):

1. **Gate routing.** The named constraint selects the next gate — `license → human_legal`, `tenancy → reshape`, `authority → human_authority`. The wrong name sends work to the wrong person.
2. **Cheap-first.** A quarantined module must not be priced for runtime fit.
3. **Stability.** An unordered solver picking "the worst" failure needs a severity ranking, which is a judgement call — and judgement calls are what a deterministic solver must not contain.

Order: `eligibility → host_fit → closure → exclusivity → authority → recoverability → budget`.

### 3.4 The nine constraints this lane adds

Phase 8 defined ten (`port_closure`, `version`, `runtime`, `namespace`, `data_mode`, `token`, `authority`, `license`, `scope`, `idempotency`). Each addition below exists because a Sprint 1 packet proved a failure the original ten could not name:

| Constraint | Why the original ten could not name it | Source |
|---|---|---|
| `identity` | Donor session minting is not a namespace collision | INV-P10-1/2/3 (`E`) |
| `navigation` | Predicate/guard divergence is not a route collision | INV-P10-4/5/6 (`E`) |
| `migration_owner` | Contested **authority** ≠ **collision** — different gate | P04 C6, INV-P09-1 (`E`) |
| `tenancy` | Missing tenant key is not a data-mode violation | INV-P09-7, INV-P11-3 (`E`) |
| `rollback` | A boolean rollback flag is wrong by construction | I-P14-1 (`E`) |
| `host_version` | Host lacking a facility ≠ module runtime mismatch | P04 `requires_host` (`E`) |
| `glue_budget` | Adaptation overflow means the **shape** was wrong | P04 `exceeded_action` (`E`) |
| `observability_identity` | Anonymity must fail at admission, not at incident | P04 C7, I-P14-4 (`E`) |
| `evidence_tier` | Min-gating is not a licence or scope check | I-P15-2, P14 C6 (`E`) |

The most important is `migration_owner`. Folding it into `namespace` is the most plausible simplification available and it is wrong: two modules both legitimately writing `cases` in a case-management app is not a naming accident, and renaming solves nothing (`solver-dry-run.md` §3).

---

## 4. The three verdicts

### 4.1 Why three and not two

`FEASIBLE` = contracts sufficient to decide **yes**. `INFEASIBLE` = contracts sufficient to decide **no**. `UNDERDETERMINED` = contracts **insufficient to decide either way**.

Collapsing the third is the single most damaging simplification available:

- Fold it into `INFEASIBLE` → every contract gap looks like a rejected module. Viable modules are discarded on absent evidence, and the contract never gets fixed because nothing reports it.
- Fold it into `FEASIBLE` → the system fabricates compatibility. This is exactly the failure a green build never catches.

### 4.2 `UNDERDETERMINED` is the most valuable output

Each occurrence names a **contract field** that S2-L1 must add or tighten. It is simultaneously a blocker for one composition and a defect report against a named record. This is the mechanism by which the framework improves itself without anyone running an experiment.

**K5 kill rule:** `UNDERDETERMINED` on >30% of fixtures stops the composition eval and returns to S2-L1 — **the contract is the defect, not the agent.** This is a *useful* failure: it redirects effort to the contract layer instead of burning model budget against an undecidable problem.

The distinction the fixtures pin down (CF-03 vs CF-18): a field whose absence the contract **assigns meaning to** is decidable. P04 defines absent `admission_scope` as "not admitted anywhere" → `INFEASIBLE: scope`. An `incomplete` dependency closure means unfinished work → `UNDERDETERMINED`. The test is whether the contract makes absence meaningful.

### 4.3 The weakest load-bearing element, stated plainly

**The mapping between P04's `authority_class` and the session authority ladder is class `I` and unvalidated.**

Sprint 1 produced two authority axes independently: Phase 8's session ladder (`read`/`stage`/`write`/`message`/`deploy`) and P04's capability class (`read_only`/`tenant_scoped_write`/`external_effecting`/`privileged`). Nobody validated that they compose. This design joins them in an explicit table with a stated asymmetry: **a module classed `read_only` can still be infeasible at ceiling `read`** if any port declares `external_effect != none`. The port is authoritative; the class is a summary; where they disagree the stricter wins **and the disagreement is itself reported** as `UNDERDETERMINED` against the contract.

`stage` deliberately maps to no capability class — it is a session posture, not a capability property. Forcing a correspondence would have hidden that.

This is written as an explicit table precisely so it can be attacked. It is the most likely site of a silent privilege bug in the entire design. **Falsifier:** a capability whose correct ceiling cannot be derived from its class and ports together — which would mean the two axes do not compose and one must be redesigned by S2-L1 and the coordinator.

---

## 5. Candidate ranking without averaging away fatal unknowns

Ranking is advisory and happens **only after** feasibility. It never rescues an eliminated candidate and never satisfies a port.

**Ranking is min-gated, never averaged.** I-P15-2 (`E`) is a deliberate divergence from the entire external recommender census: an asset with excellent adaptation cost, excellent workflow success and **unresolved rights** must not outrank a merely-good asset with clean rights. A weighted score is *designed* to let strength in one dimension compensate for weakness in another; for a capability going into a client's production system that is catastrophic.

Consequences:

1. Any fatal-class dimension (rights, tenancy, scope) is a **gate**, not a weight.
2. Evidence tier is the **minimum** across families; an absent required family counts as `not_run`, not as inapplicable (see §7).
3. Popularity is not admitted as a quality signal (A22 unproven/weak).
4. The regime is `n≈10`, not `n≈10⁶` (I-P15-1) — methods needing thousands of observations per arm are disqualified regardless of how well they work elsewhere.

---

## 6. Glue budget

The budget is a **mechanism with uncalibrated numbers**, and saying so is the honest position: A07 ("adaptation is always only 1–2% of the work") is explicitly `unknown` (`E`).

Overflow is not a warning. Per P04, *"a change set exceeding the ratio is a rewrite wearing a codemod's clothes."* The declared `exceeded_action` decides: `reject`, `reshape`, or `escalate_human_review`.

**`reshape` is the interesting outcome.** Overflow usually means the **reuse shape was chosen wrongly** — a donor being transplanted is service-shaped. That makes the budget a shape-decision detector, not merely a cost cap.

**`escalate_human_review` must not collapse into refusal** (CF-21): the result is `FEASIBLE` with `feasibility_class: determined_with_human_gate`. Feasible-with-a-gate is not promotable. Collapsing these would make `escalate_human_review` dead config and let a human-gated set look automatic.

---

## 7. Contradictions, rejected alternatives and one self-inflicted defect

### 7.1 Rejected alternatives

| Alternative | Why rejected |
|---|---|
| Model decides compatibility | Unfalsifiable; identical output whether contracts were complete or empty (§3.2) |
| Two verdicts instead of three | Discards viable modules or fabricates compatibility (§4.1) |
| One migration owner per **composition** | Would reject CF-01 and make heterogeneous reuse impossible — defeats the thesis |
| Fold `migration_owner` into `namespace` | Sends contested authority to a rename gate (`solver-dry-run.md` §3) |
| Weighted ranking score | Averages fatal unknowns into good scores (I-P15-2) |
| Union for composed authority | P04 C4: the natural implementation is exactly where privilege escalation occurs |
| Graceful constraint relaxation | Indistinguishable from a broken solver; makes every eval result uninterpretable |
| Adopt connector catalogue **with** its store | A26 rejected; OpenConnector proved the tenancy failure by demonstration |
| Negotiated multi-agent composition | Adds coordination failure modes before the base case is proven |

### 7.2 Contradictions held open

1. **Zero admitted modules vs an architecture requiring them.** `F-C06` stands. Not hidden, not a solver defect.
2. **The two authority axes are unvalidated** (§4.3).
3. **Absorption vs federation** pull the data plane in opposite directions and both are locally proven. Resolution is per-capability via `PackagingProfile`; the composer must price both, and CF-01 exists to prove it can.
4. **`host_rendered` donor settings is a research bet, not an engineering estimate.** P10's headline risk: after 33 commercial surfaces, **zero** render a third party's settings inside host-owned chrome (`E`). The v1 default is `donor_rendered_behind_host_nav`. The composer must not treat `host_rendered` as routine.
5. **Glue thresholds are uncalibrated** (A07 `unknown`).
6. **The eval suite cannot run.** Tiers A/B need a registry; the registry is empty.

### 7.3 A defect this lane found in its own rule table

`R-EVIDENCE` as first drafted was **undecidable** when two modules report different receipt *family sets*: "minimum across families" has no meaning if module A reports nine and module B reports six. The permissive reading — minimum over *reported* families — would let a module raise its tier **by reporting fewer families**, inverting the anti-averaging rule it exists to enforce.

Fixed: an absent required family is treated as `not_run` → `UNDERDETERMINED`. Recorded in both `compatibility-and-authority-rules.json` and `solver-dry-run.md` §6 rather than silently patched, because a rule table quietly repaired reads as though it was correct when written.

---

## 8. Falsifiers, experiments and stop rules

### 8.1 Falsifiable claims

Numbered `F-P12-##` to avoid collision with Phase 8's inherited `F-C01`–`F-C10`.

| ID | Claim | Falsifier | Stop condition |
|---|---|---|---|
| `F-P12-01` | 22 ordered rules decide feasibility from declared fields without a model | >30% of fixtures return `UNDERDETERMINED` | K5 — return to S2-L1 |
| `F-P12-02` | Phase ordering yields stable, correctly-gated verdicts | Operators consistently need a different constraint than the one named | Re-order; record the negative result |
| `F-P12-03` | `namespace` and `migration_owner` are genuinely distinct failures | No real composition distinguishes them | Merge; simplify the table |
| `F-P12-04` | The authority-axis mapping composes | A capability whose ceiling cannot be derived from class + ports | Redesign one axis (S2-L1 + coordinator) |
| `F-P12-05` | Min-gated ranking beats weighted scoring on selection quality | Weighted scoring selects better assets in a paired comparison | Adopt weighting; revisit I-P15-2 |
| `F-P12-06` | The glue budget detects wrong reuse-shape choices | Overflow does not correlate with shape errors | Budget is a cost cap only |
| `F-P12-07` | The five-field ProductSpec minimum is sufficient | A composition needs a sixth field | Extend; report to P02 |
| `F-P12-08` | Verdicts are deterministic under identical input | Any divergence across repeat runs | K6 — no result is interpretable |

### 8.2 Stop and kill rules

Inherited verbatim (K1 security, K2 authority, K3 budget, K4 repair, K5 solver-defect, K6 determinism, K7 contamination). K5 and K6 remain the most likely to fire first, and both are useful failures.

**Added:** `K8 — vocabulary fork.` If this lane's enums diverge from S2-L1's published family, stop and reconcile before any run. A forked vocabulary makes every cross-lane result meaningless.

### 8.3 The smallest next experiment

**Not** a model run, and **not** a pilot. The cheapest falsifying step is:

> Encode three real modules from the P03 shelf into the S2-L1 contract family, then hand-execute the 22 rules against them.

This needs no model, no execution environment, no admission and no client. It directly tests `F-P12-01` and `F-P12-07`, and every `UNDERDETERMINED` it produces is a concrete contract-field bug report. If more than ~30% of checks come back `UNDERDETERMINED`, the correct response is to fix the contract family, not to build a solver.

---

## 9. Handoff edges

| Edge | What passes | Direction |
|---|---|---|
| **S2-L1 (P04)** | Contract family consumed verbatim; `UNDERDETERMINED` fields returned as defect reports | both |
| **S2-L2 (P07)** | Token *pack* validity is theirs; this lane checks only resolution and single-source | consume |
| **S2-L3 (P08/P13)** | Bounded edit ops must not violate a solved constraint; an edit invalidating a binding re-enters the solver | both |
| **S2-L5 (P14/P15)** | Runtime profiles, rollback objects and horizons consumed; evidence min-gate shared | consume |
| **P02** | The five-field ProductSpec minimum, now closed (§2.1) | produce |
| **Coordinator** | The authority-axis mapping (§4.3) needs cross-lane adjudication | escalate |

---

## 10. Reconciliation with S2-L1 — performed, with one residue

**Performed against** `research/workstreams/p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus/module-contract-family.json`, read directly at 2026-08-27 (`E`), version `1.0.0`.

**Reconciled clean:**

- All 21 shared enum paths imported verbatim (listed in `assembly-plan.schema.json → vocabulary_provenance`).
- `BindingPlan` is P04-owned and D15-attributed; this lane references and orders, never redefines.
- Composition rules C1–C7 map onto rules `R-PORTTYPE`, `R-TENANCY`, `R-TOKEN`, `R-AUTHORITY`, `R-LICENSE`, `R-MIGOWNER`, `R-OBSID` — a 1:1 correspondence with no orphans in either direction.
- Phase 8 §13's "required imports" gap is **closed**: `admission_scope`, `authority_class` and `rights_state` now all exist as required fields. Phase 8 warned the solver's scope and authority checks were "not implementable as specified" without them; they now are.
- The P03 `UNDERDETERMINED` spelling collision is handled (§2.2).

**Residue — one open item for the coordinator:**

> The **authority-axis mapping** (§4.3) is not settled by either lane. S2-L1 owns `authority_class`; Phase 8 owned the session ladder; **neither owns the join**. This lane proposes an explicit mapping table with a stated asymmetry rule and flags it as the most likely site of a silent privilege bug. It requires cross-lane adjudication, not a unilateral decision by either owner.

**Second-pass reconciliation against the normalization taxonomy (`E`, read 2026-08-27).** S2-L1's `module-contract-family.json` was published mid-run and reconciled first; its remaining artifacts landed shortly after and `normalization-surgery-taxonomy.jsonl` was then read directly. It carries **28 surgeries across 14 categories** — exactly the categories the dispatch requires the composer to account for (branding, onboarding, identity, tenant, settings, navigation, data_ownership, migrations, events, connectors, token_mapping, runtime, upgrade, rollback).

Two fields in it bear directly on this lane and **resolve what was an open residue**:

1. **`cost_class` ∈ {`cosmetic`, `boundary`, `architectural`}** (observed split: 3 / 13 / 12). This is the operational form of the master synthesis's central distinction — *"Replacing a logo is trivial. Replacing authentication, settings ownership or database migration authority is not"* (`E`). **Consequence for §6:** the glue budget must be priced **per cost class, not as one line count**. A 400-line cosmetic surgery and a 400-line architectural surgery are not the same risk, and a single changed-lines ceiling cannot distinguish them. This is a genuine refinement to this lane's `R-GLUE`, recorded here as the required revision rather than silently folded in.

2. **`determinism` ∈ {`DET`, `SEMI`, `HUM`}** (observed split: 7 / 17 / 4). This independently corroborates §3.1's three-plane split, and the distribution is itself informative: **only 7 of 28 surgeries are fully deterministic**, and 4 require a human outright (`NS-IDENT-02` donor authorization model, `NS-SETTINGS-01` settings remount, `NS-DATA-01` migration authority assignment, `NS-RUNTIME-01` runtime profile selection). Three of those four map onto constraints this lane already routes to human gates (`identity`, `migration_owner`, `runtime`), which is a convergent result from two lanes reasoning independently.

**Remaining residue for the coordinator — one item, unchanged:** the **authority-axis mapping** (§4.3). S2-L1 owns `authority_class`; Phase 8 owned the session ladder; **neither owns the join**. It needs cross-lane adjudication, not a unilateral decision by either owner.

**Revision owed by this lane (recorded, not yet made):** `R-GLUE` should price the three cost classes separately. It is stated as an owed revision rather than applied now, because changing a rule after the dry run executed against it would leave the traces describing a table that no longer exists — and the dry run's value is that it was executed against the table as written.

---

## 11. What this lane established, and what it did not

### Established (all `I` unless marked)

- A 22-rule ordered table (19 distinct constraints), executable by hand to one verdict with one named constraint (five traces).
- Nine new constraints, each traced to a specific Sprint 1 evidence packet (`E` for the evidence, `I` for the constraint design).
- The three-verdict model with `UNDERDETERMINED` routed as a contract-defect report.
- The ProductSpec minimum P02 deferred (§2.1).
- 24 fixtures across all nine required coverage axes, none executed.
- Vocabulary reconciliation with S2-L1 across 21 enum paths (`E` for the read).
- One real defect found and fixed in this lane's own rule table (§7.3).

### Not established

- **That any of this works.** No solver exists. No code was written or run.
- **That any real module can populate these fields.** Zero admitted modules; every fixture value is synthetic.
- **Any cost claim.** No budget has been agreed; a number would be fabrication.
- **That a model can choose well among feasible sets.** `MR-3`/`MR-4` inherited, unfalsified.
- **That the glue thresholds are right.** Mechanism only; A07 is `unknown`.
- **That the authority mapping is correct.** Class `I`, unvalidated, escalated.

**Research-only conclusion.** This document specifies a deterministic composer. It does not demonstrate one. The next credible step is §8.3 — encode three real shelf modules into the contract family and hand-execute the rules — because it needs no model, no execution, no admission and no client, and every gap it surfaces is a concrete contract bug rather than an opinion.
