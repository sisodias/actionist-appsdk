# Solver dry run — hand-executed traces

**Lane:** `S2-L4` · **Run:** `2026-08-27-sprint-2-opus` · **Owns:** P12 (D15)
**Observed:** 2026-08-27
**Mode:** research and design only. No solver was implemented, no code executed, no model run, no registry queried, no block admitted.

> **What "dry run" means here.** These traces are executed **by hand against the rule table**, not by software. They exist to prove one thing: that the rules in `compatibility-and-authority-rules.json` are specific enough that a human can execute them and arrive at exactly one verdict with exactly one named constraint, without consulting a model and without judgement calls. Anywhere a trace required judgement, that is recorded as a **defect in the rule**, not smoothed over.
>
> Evidence classes: `E` inspected local artifact · `D` documented first-party claim · `I` inference/design · `U` unknown.

---

## 0. What the dry run tested and what it found

Five traces were executed: one full mixed-shape positive, three heterogeneous negatives across different failure families, and one determinism/tie case.

**The four findings, stated before the traces so they can be checked against them:**

1. **Rule ordering is load-bearing and the current order is correct.** Trace B fails three separate rules; only phase ordering makes the reported constraint stable and cheap-first. A set-based (unordered) solver would report a different constraint on different runs — indistinguishable from non-determinism.
2. **`namespace` and `migration_owner` must stay separate constraints.** Trace C would be reported as `namespace` by any solver that folds them, sending a contested-authority problem to a rename gate. This is the single most likely real-world misdiagnosis in the table.
3. **The authority mapping between P04's `authority_class` and the session ladder is the weakest link in this design.** Trace D exposes that a module declaring `read_only` can still be infeasible at ceiling `read`. The mapping is class `I` and is written down explicitly so it can be attacked.
4. **One rule was found defective during the dry run and is recorded, not hidden.** See §6 — `R-EVIDENCE` as originally drafted could not decide a composition where two modules report different receipt *families*, because "minimum across families" is ambiguous when the family sets differ. The fix is stated; the defect is retained in the record.

---

## 1. Trace A — mixed-shape case/workflow assembly (CF-01)

The reference positive. Four reuse shapes, three runtime profiles, two migration owners, no contested resource.

### Input

| Module | Reuse shape | Runtime profile | Authority class | State class | Migration authority | Rights |
|---|---|---|---|---|---|---|
| `syn/doc-engine@2.1.0` | `intact_service` | `sidecar_service` | `tenant_scoped_write` | `donor_owned_intact` | `donor_upstream` | verified |
| `syn/record-surface@1.4.0` | `transplant` | `microfrontend` | `tenant_scoped_write` | `donor_owned_absorbed` | `actionist_single_owner` | verified |
| `syn/sla-timer@1.0.0` | `extracted_package` | `package_in_host` | `read_only` | `owned_transactional` | `actionist_single_owner` | verified |
| `syn/case-delta@1.0.0` | `custom_delta` | `package_in_host` | `tenant_scoped_write` | `owned_transactional` | `actionist_single_owner` | n/a synthetic |

Session: ceiling `stage`, data mode `owned_postgres`, host `hc-1.0.0`.

### Execution

| Phase | Rule | Outcome | Note |
|---|---|---|---|
| 0 | `R-SCOPE` | pass | All four admitted for `hc-1.0.0/app-case-1`. Scope is present and matches — absence would have been a refusal, not a gap. |
| 0 | `R-LICENSE` | pass | Three `verified`, one `not_applicable_synthetic`. No copyleft obligation in the composed expression. |
| 0 | `R-EVIDENCE` | pass | Min tier across all four ≥ required. **See §6** — this rule needed repair to execute cleanly. |
| 1 | `R-HOSTVER` | pass | Declared facilities (`identity`, `tenant`, `data`, `events`, `navigation`) all exist in `hc-1.0.0`. |
| 1 | `R-RUNTIME` | pass | Each profile matches the derivation table. `transplant → package_in_host_or_microfrontend`; `microfrontend` chosen and declared, so the ambiguity is resolved in the contract rather than by the solver. |
| 1 | `R-DATAMODE` | pass | Strongest required mode is `owned_postgres`; session is `owned_postgres`. Equal is permitted; the ladder is `<=`, not `<`. |
| 1 | `R-TENANCY` | pass | One tenant key across all four; the sidecar declares an explicit bridge mapping canonical → donor IDs. |
| 2 | `R-PORTCLOSE` | pass | Every `requires` edge resolves to a `provides` edge or a host facility. |
| 2 | `R-VERSION` | pass | No shared dependency, so no diamond. |
| 2 | `R-PORTTYPE` | pass | Wirings are `identical` or `narrowing`. |
| 3 | `R-NAMESPACE` | pass | No route/table/env collision. |
| 3 | `R-MIGOWNER` | **pass — the interesting one** | Two distinct owners exist (`donor_upstream`, `actionist_single_owner`) but **no resource is claimed twice**. Cross-owner reads are `event_fed_read_model`. |
| 3 | `R-IDENTITY` | pass | Sidecar → two-token handoff; transplant → donor auth deleted, host session substituted. Pattern selected by reuse shape (INV-P10-3), not uniformly. |
| 3 | `R-NAV` | pass | All four contribute nav nodes via `deploy_time_manifest`; visibility predicate is the route guard. |
| 3 | `R-TOKEN` | pass | Both UI-bearing modules resolve from one context. |
| 3 | `R-OBSID` | pass | Four distinct stable capability ids. |
| 4 | `R-AUTHORITY` | pass | Union of external effects is `none`/`read_external`, min ceiling `read` ≤ `stage`. Scope is the **intersection**. |
| 4 | `R-IDEMPOTENCY` | n/a | No write/message ports at ceiling `stage`. |
| 4 | `R-CONSENT` | n/a | No external effects requiring consent. |
| 5 | `R-ROLLBACK` | pass | Objects declared: `code_artifact`, `configuration`, `database_schema`, `data`, `donor_revision`, `surface_route`. |
| 5 | `R-HORIZON` | pass | Composition horizon = min across objects, bounded by the sidecar donor. |
| 6 | `R-GLUE` | pass | Predicted within declared ceilings. |

### Result

`FEASIBLE`, `feasibility_class: fully_determined`, `relaxations_applied: 0`.

### What this trace proves and does not prove

**Proves (`I`, by construction):** the rule table admits a genuinely heterogeneous composition. Four reuse shapes and two migration owners coexist without a contested resource. A solver enforcing "one migration owner per composition" instead of "per resource" would reject this and make heterogeneous reuse impossible — which would defeat the entire Actionist thesis.

**Does not prove:** that any real module can populate these fields. Every value is synthetic. The registry has **zero admitted blocks** (`E`), so this trace is a specification of correct behaviour, not evidence of a working system.

---

## 2. Trace B — the ordering test (three simultaneous failures)

**Purpose:** show that phase ordering, not rule content, determines which constraint gets reported — and that the current order is the right one.

A connector module is injected with **three** independent defects at once:

1. `rights_state: ambiguous` (phase 0, `R-LICENSE`)
2. native connection store with no tenant column (phase 1, `R-TENANCY`)
3. `write_external` port under a `stage` ceiling (phase 4, `R-AUTHORITY`)

### Execution

| Phase | Rule | Outcome |
|---|---|---|
| 0 | `R-SCOPE` | pass |
| 0 | `R-LICENSE` | **fail → quarantined** |
| — | *remaining rules* | **not evaluated** |

### Result

`INFEASIBLE: license`, disposition `quarantined`, gate `human_legal`.

### Why this ordering is correct

The module is defective three ways, but only one constraint is reported, and it is the **cheapest and most decisive** one. Rationale, in order of strength:

- **A quarantined module must not be priced.** Evaluating tenancy or authority on a module that may not be considered at all wastes the analysis and, worse, produces a report implying the rights problem is one of three equal issues. It is not — it is a gate that forecloses the others.
- **The named constraint selects the next gate** (Phase 8 §10.5.1). `license` → `human_legal`. `tenancy` → `reshape`. `authority` → `human_authority`. Reporting the wrong one sends the work to the wrong person.
- **Ordering is what makes the verdict stable.** An unordered solver evaluating all rules and picking "the worst" needs a severity ranking — which is a judgement call, and judgement calls are exactly what a deterministic solver must not contain. A fixed total order removes the question.

**Falsifier for the ordering itself:** if in practice operators consistently need the tenancy defect reported *alongside* the rights refusal to plan work, then `checks_run[]` (which records every rule's outcome including `not_run`) is the right channel — not a change to which constraint names the verdict. The schema already carries this: `checks_run` distinguishes `not_run` from `pass`, so silence never reads as a pass.

---

## 3. Trace C — namespace vs migration_owner (CF-07)

**Purpose:** demonstrate the single most likely misdiagnosis in the table.

An absorbed donor surface (`syn/record-surface@1.4.0`) and an owned delta (`syn/case-delta@1.0.0`) both declare migration authority over the table `cases`.

### The trap

A solver that folds these two rules reports:

> `INFEASIBLE: namespace` — two modules own the same table → gate `reshape` (rename one).

That is **wrong**, and wrong in a way that looks entirely reasonable. Both modules *legitimately* need to write `cases`; this is a case-management app and `cases` is the central table. Renaming solves nothing. The real question — *who owns the migration lineage* — is a **product decision about ownership**, not a naming collision.

### Correct execution

| Phase | Rule | Outcome | Note |
|---|---|---|---|
| 3 | `R-NAMESPACE` | pass | Both modules legitimately reference `cases`. Reference is not ownership. |
| 3 | `R-MIGOWNER` | **fail** | Two `migration_authority` claims on one resource. |

### Result

`INFEASIBLE: migration_owner`, conflict `[syn/record-surface@1.4.0, syn/case-delta@1.0.0]`, gate `human_product`.

### Why this distinction earns a separate constraint

`R-NAMESPACE` catches **collision** — two modules naming one object, usually accidental, fixed by renaming or reshaping. `R-MIGOWNER` catches **contested authority** — two modules legitimately touching one object, where exactly one must own the migration lineage. Same symptom, different disease, different gate.

This is also the rule with the strongest evidence behind it. P04 records C6 as the **only** composition rule proved by *operating* it rather than by reasoning about it: SISOCRM ran Prisma (Teable) and Django (Plane) against one database and established one owner per table, never two (`E`). Every other rule in the table is design reasoning over evidence; this one is operational scar tissue.

---

## 4. Trace D — the authority mapping soft spot (CF-10 variant)

**Purpose:** expose the weakest link in this design rather than let it pass unexamined.

A module declares `authority_class: read_only`. The session ceiling is `read`. By the mapping table, `read_only → minimum ceiling read`, so it fits.

But one of its ports declares `external_effect: read_external` against a third-party API, and a second port declares `write_external` — writing a "last synced" timestamp back to the provider.

### Execution

| Rule | Reading `authority_class` alone | Reading ports (authoritative) |
|---|---|---|
| `R-AUTHORITY` | pass — `read_only` ≤ `read` | **fail** — `write_external` requires min ceiling `message`, exceeds `read` |

### Result

`INFEASIBLE: authority`, gate `human_authority` — **plus** an `UNDERDETERMINED` entry against `CapabilityContract.authority_class`, because the class and the ports disagree.

### Why both outputs are emitted

The **stricter reading wins** (the port-level `external_effect` is authoritative), so the verdict is a refusal. But the *disagreement itself* is a contract defect: a capability whose summary class contradicts its own ports will mislead every future reader. Emitting only the refusal would fix this composition and leave the defective contract in the registry to fail again.

### The honest assessment

This mapping (`compatibility-and-authority-rules.json → authority_model.mapping`) is class `I` — a design proposal, not an observed fact. It joins two axes that Sprint 1 produced **independently**: the session ladder is Phase 8's (`read`/`stage`/`write`/`message`/`deploy`, a *session* concept) and `authority_class` is P04's (`read_only`/`tenant_scoped_write`/`external_effecting`/`privileged`, a *capability* concept). Nobody has validated that they compose.

**This is the most likely place in the whole design for a silent privilege bug**, which is precisely why the mapping is written down as an explicit table with a stated asymmetry warning rather than left implicit in an implementation. `stage` deliberately maps to no capability class at all — it is a session posture, not a capability property, and forcing a correspondence would have hidden that.

**Falsifier:** a capability whose correct ceiling cannot be derived from its class and ports together. That would mean the two axes do not compose and one must be redesigned — a finding for S2-L1 and the coordinator, not a solver bug.

---

## 5. Trace E — determinism under a tie (CF-24)

**Purpose:** test the place a solver is most likely to be accidentally non-deterministic.

Two feasible sets tie on every ranking dimension: identical evidence tier, identical predicted glue, identical port closure.

### Execution

Ranking produces no winner. The tie-break rule fires: **lexicographic ascending `capability_id`, then ascending `set_id`**. Run three times against a byte-identical `input_digest`, the same set is selected each time.

### Why the tie case specifically

A solver is deterministic wherever ranking decides, and non-deterministic exactly where it does not. Hash iteration order, map ordering, or a timestamp tie-break all produce stable-looking results under casual testing and diverge under load or after an unrelated refactor. K6 (identical inputs → different verdicts) makes every other result in the suite uninterpretable, so the tie case is the one that must be pinned.

**Consequence recorded in the schema:** `solver.determinism.tie_break_rule` is a required field, and `relaxations_applied` is `const: 0`. A solver that "helpfully" relaxes a constraint to break a tie voids the plan.

---

## 6. A rule found defective during this dry run

Recorded because the evidence standard requires the correction to be visible, not silently patched.

**Defect.** `R-EVIDENCE` as first drafted said: *"the composition's evidence tier is the MINIMUM across member modules and across each module's receipt families."* Executing Trace A exposed that this is **undecidable when two modules report different family sets**. If module A reports nine families and module B reports six, "minimum across families" has no defined meaning — is B's tier the min of its six, or does an unreported family count as `not_run`?

**Why it matters.** The permissive reading (min over *reported* families) lets a module raise its tier by reporting fewer families. That inverts the anti-averaging rule it was written to enforce: the weakest evidence would become invisible rather than governing.

**Fix, now in the rule.** `R-EVIDENCE` reads `families_reported` and treats any family in the required set that is absent from `families_reported` as `not_run`, which yields `UNDERDETERMINED` naming that family — never a pass. This makes CF-17 (eight passes, one `not_run`) decidable, and it closes the "report fewer families" loophole.

**Status:** the fix is reflected in `compatibility-and-authority-rules.json`. The defect is retained here because a rule table that was quietly repaired reads as though it was correct when written, and the next reader should know which rules have been executed even once.

---

## 7. What these traces establish

| Claim | Class | Basis |
|---|---|---|
| The rule table is executable by hand to a single verdict with a single named constraint | `I` | Five traces executed; one rule required repair (§6) |
| Phase ordering produces stable, cheap-first, correctly-gated verdicts | `I` | Trace B |
| `namespace` and `migration_owner` must remain distinct constraints | `E` reasoning over `E` evidence | Trace C; P04 C6 operational proof |
| The authority mapping is the weakest load-bearing element | `I` | Trace D; two axes joined without validation |
| Tie-breaking is where determinism actually fails | `I` | Trace E |
| Any of this works on real modules | **`U`** | Zero admitted blocks; every value synthetic |

## 8. What these traces do not establish

- **No solver exists.** Nothing was implemented or executed. These are hand traces against a written table.
- **No module is real.** Every field value is synthetic. Names evoking real projects denote architectural shapes from Sprint 1 evidence, not claims about those projects.
- **No cost claim.** This lane records no cost figure; no budget has been agreed, so any number would be fabrication.
- **No model was run**, so nothing here says whether a model can choose well among feasible sets. That remains `MR-3`/`MR-4`, inherited and unfalsified.
- **The registry is empty.** `F-C06` stands: the strategy cannot be piloted end-to-end until at least one module is admitted. That is a supply dependency, not an agent defect.
