# Universal Block Framework — Phase-8 Lane 01

Run: `actionmodel-builder-research-2026-08-26`
Phase: `8` — universal-block-foundry-research-sprint
Lane: `P8-UNIVERSAL-BLOCK-FRAMEWORK`
Observed: 2026-08-27 (UTC)
Mode: `research_only`
Status: `DESIGN_ONLY; UNEXECUTED; NOT_ADMITTED; admitted_blocks=0`

> This packet designs a contract and lifecycle. It does not implement a runtime, convert a repository, scan a license, execute a build, bind a tenant, or admit a block. Every "MUST" below is a *proposed* rule for a future authorized run, not an executed control.

## 0. Evidence classes and how to read this document

This lane inherits the four-class ladder used across the run and adds the source-access
distinction the program requires.

| Class | Meaning | Permitted claim strength |
|---|---|---|
| `direct` | A local artifact was opened and its exact bytes/fields were read in this lane. | May assert that the artifact exists and contains the quoted field. |
| `inferred` | A design synthesis across two or more artifacts. | Must carry a falsifier. Never asserts capability. |
| `gated` | A first-party source exists but its content was not retrieved in this lane, or retrieval was partial. | May name the source; may not assert its contents. |
| `unknown` | Absent, unmeasured, unowned, or contradictory. | Is not negative evidence. |

Every numbered claim below carries `[class]` plus a local path or first-party URL. A
standards citation motivates a field; it never proves local conformance.

## 1. The question this lane answers

The program states the missing system as:

> `repo/local asset → evidence-backed reusable block → governed registry → agent-composed B2B application`
> — `[direct]` `phase-8/PHASE-8-PROGRAM.md`

Lane 01 owns the *middle contract*: what a block IS, what states it moves through, what
evidence each state demands, and how the existing local systems map onto it. It does not
own the corpus join (lane 02), the template shelf (lane 03), the conversion mechanics
(lane 04), or the composition agent (lane 05).

### 1.1 The one-sentence answer

A **block** is not a repository and not a component. It is a *versioned, owned, evidence-bearing
contract over a bounded capability*, whose admission is gated by nine orthogonal evidence
families that cannot substitute for one another, and whose default outcome is
`reference_only` rather than `admitted`.

The framework's load-bearing claim is negative and is the reason the whole design exists:

> **Reuse is not a property of code. It is a property of evidence about code.**
> Two byte-identical repositories differ in reusability entirely by their rights, owner,
> provenance, and proof state. `[inferred]` — falsifier in §14.

## 2. Why v1 needs a delta at all

Block Contract v1 (`[direct]` `phase-2/outputs/block-contract-v1.json`, 3111 lines,
`$id: siso:actionist-builder:block-contract:v1`) is structurally strong. It already carries
19 required top-level fields and 29 `$defs` including `ports`, `state_machine`,
`idempotency_replay`, `authority_consent`, `provenance_rights`, `evidence_receipt`,
`tenancy`, `cost`, `maintenance`, `recovery`, and `admission`.

v1 was written to answer *"what shape must one block contract have?"*. Phase 8 asks a
harder question: *"what shape must the SYSTEM have that turns arbitrary local and public
assets into blocks, governs them in a registry, and lets an agent compose them into B2B
applications?"*

Five structural gaps follow from that shift. Each is the basis of a delta item in §9 and
of the machine-readable `universal-block-contract-delta.json`.

| Gap | v1 today `[direct]` | Why Phase 8 breaks it | Delta |
|---|---|---|---|
| G-A Packaging mode | `kind` enum has 6 values, all *slice-shaped*: `scaffold, feature, component, theme, integration, schema-pattern`. | SISOCRM's working pattern is an **intact donor app** mounted whole, not a slice. v1 cannot express it. | `packaging_mode` (§4) |
| G-B Composition | v1 describes one block in isolation. `ports` are declared but nothing states how two blocks *join*. | A composed B2B app is the deliverable. Unjoined ports are not composability. | `composition` (§6) |
| G-C Registry governance | `admission` is per-block. There is no registry-level scope, shelf, or supersession concept. | A governed registry needs collection-level identity, supersession, and revocation propagation. | `registry` (§7) |
| G-D Reference-only as first class | `status` includes `reference_only` but no fields explain what may be *learned* from a reference-only asset. | Harvest policy makes reference-only the **most common** outcome, not an edge case. | `reference_only_use` (§8) |
| G-E Evidence ladder binding | Receipts carry `evidence_class` `E/D/I/U` but the T0–T4 ladder lives only in prose. | The ladder must be machine-checkable to gate promotion. | `evidence_tier` (§10) |

`[direct]` on all v1 field quotations: read from the schema's `$defs` and `properties`.
`[direct]` on the T0–T4 ladder text: `phase-2/outputs/block-contract-v1.md` §8 — "T0 discovery
-> T1 opened source -> T2 pinned/right-scoped candidate -> T3 isolated proof -> T4
owner/rollback/human release".

## 3. Block kinds, restated

v1's `kind` conflates two independent axes: *what the thing is* and *how it is packaged*.
Separating them is the single highest-leverage change in this lane.

### 3.1 Axis 1 — capability kind (what it does)

The v1 six-value enum is retained unchanged for backward compatibility, plus two additions
the corpus demands:

| kind | Meaning | Status |
|---|---|---|
| `scaffold` | Application shell/skeleton. | v1, retained |
| `feature` | An outcome-bearing vertical slice. | v1, retained |
| `component` | A UI unit. | v1, retained |
| `theme` | Token/visual identity. | v1, retained |
| `integration` | External-system binding. | v1, retained |
| `schema-pattern` | Data-model shape. | v1, retained |
| `workflow` | **NEW** — an atom-chain with states, no owned UI. | delta |
| `agent_capability` | **NEW** — a tool/skill surface an agent invokes. | delta |

`workflow` and `agent_capability` are proposed because the 12-atom vocabulary
(`[direct]` `phase-2/outputs/industry-atom-specifications.md` §2.2 — `intake_normalize`,
`triage_route`, `extract_structure`, `classify_prioritize`, `follow_up_chase`,
`schedule_coordinate`, `reconcile_audit`, `report_digest`, `monitor_alert`,
`approval_publish`, `sync_handoff`, `browser_data_entry`) describes units that are neither
a `feature` nor a `component`, and MCP-shaped tool surfaces
(`[direct]` https://modelcontextprotocol.io/specification/2025-11-25/basic) are a distinct
packaging target.

### 3.2 Axis 2 — packaging mode (how it is delivered)

This axis does not exist in v1 and is the gap the program named explicitly: the framework
"must support both intact packages/services and bounded extracted slices, with
reference-only as a valid outcome" `[direct]` `PHASE-8-PROGRAM.md`.

| packaging_mode | Meaning | Local precedent |
|---|---|---|
| `intact_fork` | Whole upstream app, forked, pinned, mounted; donor UI/state/realtime preserved. | SISOCRM donor-fork standard `[direct]` |
| `intact_service` | Whole upstream run as a separate service/origin behind a contract. | SISOCRM `port`/`runtimePath` manifests `[direct]` |
| `extracted_slice` | Bounded subsystem lifted out, wiring stripped, identifiers normalized. | v0 normalization pipeline `[direct]` |
| `generated_from_pattern` | No code copied; architecture reproduced from a studied reference. | `pattern_external` in harvest policy `[direct]` |
| `reference_only` | Nothing reproduced; the asset informs design only. | `GPL/AGPL reference-only` rule `[direct]` |

The decisive evidence that `intact_fork` is real and not hypothetical:

> "This is the default integration pattern when a donor application already has the
> complete UI and behavior we want. Teable is the reference implementation."
> `[direct]` `SISO_Agency/apps/SISOCRM/docs/DONOR_FORK_STANDARD.md`

and its explicit warning against slicing:

> "Do not transplant a partial component tree unless the donor explicitly supports that
> embedding." `[direct]` same file.

**Consequence.** A framework that only models `extracted_slice` would have rejected the one
integration pattern SISO has actually operated. `packaging_mode` is therefore required,
not optional, and `rights` interacts with it: the same AGPL-3.0 asset that is
`reference_only` as a slice may be admissible as an `intact_service` under source-offer
obligations — which the donor standard already treats as a release gate
(`[direct]` "License notices and source-offer obligations are release gates. The Teable
application is AGPL-3.0 with additional Section 7 terms.").

## 4. The nine evidence families

A block is admitted only when nine orthogonal families each carry an owned receipt. They
are orthogonal in the strict sense: **no family's pass can be inferred from another's.**

| # | Family | Question | v1 anchor `[direct]` | Cannot be substituted by |
|---|---|---|---|---|
| F1 | Identity & versioning | Is this exact thing addressable and immutable? | `id`, `contract_version`, `provenance_rights.source.immutable_revision` | A URL or a repo name |
| F2 | Provenance & rights | May we use it, and can we prove where it came from? | `provenance_rights.rights.license_state` | A permissive-looking badge |
| F3 | Dependency closure | Does everything it needs resolve, transitively? | `ports`, `requires` (v0) | A lockfile that installs |
| F4 | Interface contract | Are its boundaries typed and owned? | `ports.{inputs,outputs,data,ui,actions}` | A green build |
| F5 | Data & tenancy | Whose data, isolated how? | `tenancy.model`, `tenancy.cross_tenant_test` | "It uses Postgres" |
| F6 | Visual & token | Does it obey the theme without hardcoded values? | `ports.ui.token_refs` | A screenshot |
| F7 | Runtime & sandbox | Does it run in isolation, reproducibly? | `recovery`, `admission.required_gates` | A demo video |
| F8 | Maintenance & economics | Who keeps it alive and at what cost per outcome? | `cost`, `maintenance` | A star count |
| F9 | Rollback & owner authority | Who can revoke it and how is it undone? | `recovery`, `owner`, `admission.human_decision` | A git revert |

The orthogonality rule restated as a machine-checkable invariant, proposed for the delta:

```text
INV-ORTHOGONAL: for all f in F1..F9,
  receipt[f].status == "pass"  MUST NOT be derived from  receipt[g].status for any g != f
INV-FAIL-CLOSED: admission.status == "admitted"  REQUIRES  all(receipt[f].status == "pass")
INV-DEFAULT: absent evidence  =>  status stays not_admitted or reference_only, never admitted
```

`[direct]` v1 already encodes the fail-closed posture in prose — "missing evidence holds
state" (`block-contract-v1.md` §4) — and in the 14 required `receipt_type` values verified
by its embedded smoke. The delta's contribution is making orthogonality explicit rather
than implied.

## 5. The block lifecycle state machine

v1 declares 15 `status` values. The lifecycle below preserves every one of them and adds
the transitions Phase 8 requires: a packaging-mode decision point, a reference-only
terminal that is *productive* rather than a failure, and registry-level revocation.

### 5.1 States

| State | v1? | Entry condition | Exit |
|---|---|---|---|
| `discovered` | yes | Asset observed in a corpus or search. T0. | → `candidate` on rights+identity read |
| `candidate` | yes | Identity pinned; rights read. T2. | → `quarantined` \| `converting` \| `reference_only` |
| `quarantined` | yes | Rights ambiguous/incompatible, or security concern. | → `reference_only` \| `rejected` \| `candidate` on clearance |
| `converting` | yes | Packaging mode chosen; transform underway. | → `proof_pending` |
| `proof_pending` | yes | Artifact exists; receipts not yet complete. T3. | → `admission_review` when all 9 families report |
| `admission_review` | yes | All nine families have receipts (pass or fail). | → `admitted` \| `not_admitted` \| `held` |
| `not_admitted` | yes | Default terminal-ish state. **Initial state for every new contract.** | → `candidate` on new evidence |
| `held` | yes | Blocking unknown; named owner must resolve. | → any |
| `admitted` | yes | All gates pass + named human decision. T4. | → `released` \| `revoked` |
| `released` | yes | Bound to a release target. | → `deprecated` \| `rolled_back` \| `revoked` |
| `deprecated` | yes | Superseded; successor named. | terminal |
| `rejected` | yes | Hard fail. | terminal |
| `revoked` | yes | Rights/security withdrawal after admission. | terminal |
| `rolled_back` | yes | Release failed; prior-known-good restored. | → `proof_pending` |
| `reference_only` | yes | Rights forbid reuse, or value is architectural only. | **productive terminal** (§8) |

### 5.2 Transition guards (proposed)

```text
discovered      --(identity_pinned & rights_read)-->        candidate
candidate       --(rights_state in {incompatible,ambiguous,unknown})--> quarantined
candidate       --(packaging_mode selected & rights permit)--> converting
candidate       --(rights forbid reproduction)-->            reference_only
quarantined     --(legal_review == complete & permits)-->    candidate
quarantined     --(legal_review == complete & forbids)-->    reference_only
converting      --(artifact_digest exists)-->                proof_pending
proof_pending   --(all 9 families reported)-->               admission_review
admission_review --(all pass & human_decision == pass)-->    admitted
admission_review --(any fail)-->                             not_admitted | rejected
admission_review --(any unknown/not_run)-->                  held
admitted        --(release_target bound)-->                  released
released        --(rights_or_security_withdrawal)-->         revoked
released        --(release_failure)-->                       rolled_back
```

**Invariants** (extending v1's `state_machine.invariants`):

1. `not_admitted` is the initial state of every contract. Nothing starts as a candidate.
2. No state may be entered by inference; each transition needs a typed receipt.
3. `reference_only` and `rejected` are NOT the same terminal. §8.
4. Terminal states do not silently reopen; re-entry mints a new contract version.
5. A later green receipt binds a *new* artifact/environment, never retroactively an old one. `[direct]` v1 §4.
6. **NEW:** revocation of a block propagates to every registry entry that composes it (§7).

## 6. Composition contract (delta G-B)

v1 types a block's ports but never says when two blocks may be joined. Composition is the
Phase-8 deliverable, so the join must be contractual.

A composition is valid only if all five hold:

| Rule | Statement | Falsifier |
|---|---|---|
| C1 Port typing | Every wired `output`→`input` pair has compatible `schema_ref`. | A join with unresolved `schema_ref` |
| C2 Tenancy agreement | All composed blocks share one `tenancy.model` and `tenant_key`, or declare an explicit bridge. | Two blocks with different `tenant_key` and no bridge |
| C3 Token single-source | All `component`/`theme` blocks resolve tokens from ONE resolver context. | Any hardcoded color/space value |
| C4 Authority non-escalation | The composition's capability scope is the INTERSECTION, never the union, of member scopes. | A composed app performing an action no member was scoped for |
| C5 Rights compatibility | The composed license expression is satisfiable; the strictest obligation governs. | An MIT app silently linking AGPL slice code |

C4 is the security-load-bearing rule. Composition is where privilege escalation would
occur, and the natural implementation (union of scopes) is exactly wrong.
`[inferred]` — motivated by RFC 9396 rich authorization requests and RFC 8693 token
exchange as cited in v1's `x-source-basis` `[gated]` (named in v1, not re-fetched here).

C3 has a working local precedent. `siso-ui-base` resolves a conflict between universal
principles and tenant DNA with an explicit precedence rule rather than a merge:

> "where they disagree THE DNA WINS — the principles say so themselves: 'if a principle
> and a design-system rule conflict, the design system wins. Flag the conflict for
> review.'" `[direct]` `siso-ui-base/batteries/gates/principles-grep.mjs`

That file also implements a third verdict beyond pass/fail — a DNA-governed value "is
reported as `deferred`, naming the DNA rule that overrides it, and does not fail the run"
`[direct]`. **The delta adopts `deferred` as a fourth receipt status** alongside v1's
`pass|fail|not_run|unknown|not_applicable|superseded`, because a gate that cannot
distinguish "violation" from "legitimately overridden" will either block valid work or
wave through real violations.

## 7. Registry governance (delta G-C)

The program requires a *governed registry*, not a pile of manifests. Great Library already
supplies the record shapes; the delta binds block contracts into them rather than
inventing a parallel registry.

`[direct]` `Great_Library_of_SISO/schemas/` contains 10 schemas. Two are directly load-bearing:

- `work.schema.json` — required: `schema_version, record_type, id, slug, name, summary,
  work_type, lifecycle_status, updated_at, provenance, relationships, evidence`;
  `lifecycle_status` enum = `planned, experimental, active, retired, unknown`.
- `assembly.schema.json` — required includes `components, operating_loop, capability_model,
  evidence`. This is the **composition record**, and it already exists.

`common.schema.json` `$defs` supply the provenance primitives `[direct]`:

| `$def` | Required fields | Enum values |
|---|---|---|
| `provenance` | `origin, owners, locators, license` | `origin`: `siso, external, mixed, unknown` |
| `license` | `status, spdx, reason, evidence` | `status`: `verified, pending, not_applicable` |
| `locator` | `type, url, revision, visibility, verified, evidence` | `visibility`: `public, private, unknown` |
| `owner` | `name, role, classification` | `role`: `steward, repository_owner, upstream_owner, maintainer` |
| `evidence` | `kind, reference, observed_at, summary` | `kind`: `integration_check, public_locator, source_review, registry_validation, release_receipt, documentation` |
| `distributionState` | `state, reason, evidence` | `state`: `planned, experimental, verified, unavailable, not_applicable` |

**Mapping decision.** A block contract SHOULD be registered as a `work` record with
`work_type` naming it, and a composed application as an `assembly` record. The v1
`provenance_rights` object and Great Library `provenance` are *not* duplicates — v1 is
richer (adds `transformation`, `file_spans`, `source_digest`) — so the delta specifies v1
as authoritative and Great Library as the **projection** target, with a named field map
(§9.7). This avoids two competing provenance truths, which is the failure mode a registry
must not have.

**Registry-level obligations the delta adds:**

1. `registry.scope_id` — which shelf/collection an entry belongs to.
2. `registry.supersedes` / `superseded_by` — explicit, not inferred from version order.
3. `registry.revocation_propagation` — on revoke, every `assembly` whose `components`
   include this block MUST be re-opened to `held`. This is invariant 6 in §5.2.
4. `registry.admission_scope` — v1's `admission.admitted_scope` is per-block; a registry
   must record that a block admitted for tenant A is NOT admitted for tenant B.

Item 4 closes a real hole: v1's `admitted_scope` is a free string `['string','null']`
`[direct]`, so nothing prevents a scope-less admission being read as universal.

## 8. Reference-only as a productive outcome (delta G-D)

Harvest policy makes reference-only common, not exceptional:

> "3. Treat GPL/AGPL as reference-only unless the target project can accept reciprocal
> obligations. ... 6. If license is missing or unclear, do not copy. Summarize the pattern
> instead." `[direct]` `SISO_Agency/apps/AutoSaaS/framework/code-harvest-protocol.md`

And the harvest scoring bands make two of four outcomes reference-shaped `[direct]` (same file,
"Maximum score: 26"): `20-26: import/adapt candidate`, `14-19: reference pattern candidate`,
`8-13: weak reference only`, `0-7: reject`.

The `siso-ui-base` harvest corpus carries the same rule for *compiled third-party bundles*:

> "harvest bundles are compiled 21st.dev third-party code; `commands/forge-variations.md`
> mandates 'approaches from the references, never markup.' Blocks must obey the same rule —
> the harvest corpus is retrieval evidence, not copy-paste source."
> `[direct]` `SISO/design/BLOCK-FRAMEWORK.md`

v1 lists `reference_only` as a status but attaches no fields to it, so a reference-only
asset carries no usable output. The delta adds `reference_only_use`:

```json
{
  "permitted": ["architecture", "api_shape", "state_model", "naming", "test_strategy"],
  "forbidden": ["source_copy", "markup_copy", "asset_copy", "derived_translation"],
  "extracted_lesson": "<prose, no source text>",
  "contamination_control": "<who may read the source; how the lesson was recorded>",
  "reviewer": "<principal_id>"
}
```

`contamination_control` is the field that makes this honest. Reference-only is only
meaningful if there is a stated boundary between reading a source and reproducing it; an
unstated boundary is indistinguishable from copying. `[inferred]` — falsifier: if a future
audit finds reference-only-derived output that is a token-level translation of the source,
the control failed and the asset must move to `quarantined`.

## 9. Exact mapping to existing artifacts

This section is the lane's cross-system join. Every row is `[direct]` unless marked.

### 9.1 Block Contract v1 → universal framework

| v1 field | Universal role | Delta |
|---|---|---|
| `contract_version` const `1.0.0` | Contract identity | → `2.0.0` for delta adoption |
| `id` pattern `^[a-z0-9-]+/[a-z0-9-]+@1\.[0-9]+\.[0-9]+$` | F1 identity | **Pattern hardcodes major `1`.** Must widen to `@[0-9]+\.` or v2 ids are unrepresentable |
| `kind` (6 values) | Capability axis | +`workflow`, +`agent_capability` |
| `status` (15 values) | Lifecycle | unchanged; transitions formalized (§5) |
| `ports.{inputs,outputs,data,ui,actions}` | F4 | + `composition` join rules (§6) |
| `state_machine` | Lifecycle | + invariant 6 (revocation propagation) |
| `provenance_rights` | F2 | authoritative; Great Library is projection |
| `evidence_receipts[].status` | All families | + `deferred` status (§6) |
| `evidence_receipts[].evidence_class` `E/D/I/U` | Ladder | + `evidence_tier` T0–T4 (§10) |
| `tenancy.model` (7 values) | F5 | unchanged |
| `admission.admitted_scope` | F9 | + registry scope binding (§7.4) |
| `cost`, `maintenance`, `recovery`, `owner` | F8, F9 | unchanged |

The `id` pattern finding is a **direct defect**, not a design preference: the regex
`^[a-z0-9-]+/[a-z0-9-]+@1\.[0-9]+\.[0-9]+$` `[direct]` literally cannot express a `2.x`
block id, so adopting any contract v2 requires changing it.

### 9.2 v0 design schema → v1 → universal

`[direct]` `SISO/design/block-contract.schema.json` requires
`id, kind, provenance, stack_contract, provides, eval` with optional `requires,
tokens_consumed`. v1 absorbed and expanded all of it except two fields that **disappeared**:

- `stack_contract` (runtime/styling/data/auth_interface) — v1 has no single field asserting
  the target stack. Recommended as delta `stack_contract`.
- `requires: [block-ids]` — v1 has no inter-block dependency edge at all. This is the
  literal mechanism composition needs; the delta restores it as `composition.requires`.

That v1 dropped `requires` is a plausible cause of gap G-B rather than an oversight to
paper over.

### 9.3 AutoSaaS harvest policy → framework

| AutoSaaS artifact | Universal binding |
|---|---|
| `reuse_local, reuse_external, pattern_external, generate_custom, defer` | Maps 1:1 onto `packaging_mode`: `extracted_slice`(local/external), `generated_from_pattern`, `reference_only`, plus `defer` as a non-state |
| Licence ladder MIT/Apache-2.0/BSD/ISC permissive; GPL/AGPL reference-only; unclear = don't copy | `rights.license_state` → `packaging_mode` gate |
| Score bands 20-26 / 14-19 / 8-13 / 0-7 | T0→T1 triage prior to F2; **not** an admission input |
| "85% of commodity SaaS code before custom implementation" | An economics target for lane 05, not a contract field |
| Completion gate (6 conditions) | Precedent for fail-closed phase gates |

**Boundary note.** The 26-point score is a *discovery* heuristic. Treating it as evidence
would violate the program invariant that "repository counts... never substitute for
capability or admission proof" `[direct]` `PHASE-8-PROGRAM.md`. The framework therefore
admits the score at T0/T1 only.

### 9.4 siso-ui-base forge/gate/judge → F6 visual family

The pipeline is `brief → forge → gate → judge → bless → graduate` `[direct]`
(`SISO/design/BLOCK-FRAMEWORK.md`; stage files confirmed present:
`brief.mjs`, `precedent.mjs`, `pipeline/{shoot,judge,rubric}.mjs`, `batteries/gates/`,
`app/serve.mjs`, `commands/graduate.md`).

`[direct]` `siso-ui-base/pipeline/rubric.mjs` defines five weighted axes:

| axis id | weight |
|---|---|
| `warmth` | 1.0 |
| `playful` | 1.0 |
| `clarity` | 1.0 |
| `craft` | 1.2 |
| `coherence` | 1.3 |

with `weightedOverall()` computing `Σ(score×weight)/Σ(weight)`, and a strict JSON verdict
`{"panel","scores","worst","critique","fixes"}` `[direct]`. Observed verdicts exist:
`review-state.json` records `goal-bar/v1-thermometer` at overall `6.09` and
`goal-bar/v2-warm-gradient` at `6.89`, both `"status": "reviewed"` `[direct]`.

**Mapping.** This is a *tenant-scoped taste judge*, not a universal quality gate. Its axes
are explicitly Oracle-specific ("cam-model PERFORMER cockpit... NOT a fintech dashboard")
`[direct]` `rubric.mjs`. The framework therefore binds it as:

- F6 receipt producer for `ui_accessibility` / visual receipts, **parameterized by tenant DNA**.
- `tenants/<t>/dna.md` is the per-tenant design authority; `dna-grep.mjs` enforces one
  tenant's taste, `principles-grep.mjs` enforces universal rules, DNA wins on conflict `[direct]`.
- `graduate.md` supplies the intact handoff rule: "The blessed HTML is the SOURCE OF TRUTH...
  Only mark done when they match" `[direct]` — a genuine F6 verification precedent.

**Critical caveat `[direct]`:** no numeric pass threshold exists anywhere in the pipeline.
`weightedOverall` computes a score; nothing compares it to a bar. Blessing is a human act
(`winner.json`). Any framework claim that visual gating is *automated* would be false.
Recorded as contradiction X-3.

### 9.5 SISOCRM module/transplant/theming → packaging modes

| SISOCRM artifact | Universal binding |
|---|---|
| `product-manifest.json`: `schemaVersion, slug, folder, workingName, status, productType, owner, layers` `[direct]` | Module identity ≈ F1; `status: "shell-prototype"` ≈ lifecycle |
| `layers`: `ui-shell, crm-kernel, optional-business-modules, vertical-pack, client-configuration-and-integrations` `[direct]` | A **layer axis** for composition ordering (§6) |
| `DONOR_FORK_STANDARD.md` 6-point boundary `[direct]` | The `intact_fork` packaging mode definition |
| Ownership rules: "One system owns each write path", "The host owns identity and sessions", "The fork owns donor UI changes" `[direct]` | F5 data ownership + F9 owner authority |
| "Required proof before promotion" (submodule resolves, donor health, SSR, session login, logout revocation, realtime, CRUD, views/filters, backup-before-migration, persistence after restart, tests/build, human visual pass) `[direct]` | A concrete, executed-in-practice **F7 runtime receipt set** |
| `integrations/*.json`: `repository, upstream, ref, commit, runtimePath, port, mode, docker` `[direct]` | The `intact_service`/`intact_fork` manifest shape; `commit` is F1 pinning |

Observed value `[direct]`: `integrations/affine-client.json` carries
`"mode": "source-owned-fork-submodule"`, `"commit": "837a5c285caf2078e340a6220de38bdd8ab1da9a"`,
`"upstream": "https://github.com/toeverything/AFFiNE.git"`. Modules present on disk:
`modules/{siso-docs, siso-notes-backend, teable}`; 13 integration manifests exist.

This is the strongest **direct** evidence in the lane that the intact path is operated in
practice, and it is why §3.2 treats `packaging_mode` as required.

### 9.6 17-industry taxonomy → composition denominator

`[direct]` `phase-2/outputs/industry-atom-specifications.md` §4 defines exactly 17:
`accounting_firms, construction, course_creators, ecommerce, education_training,
healthcare_medical_practices, hospitality, it_services_msps, insurance_agencies, law_firms,
logistics_freight, marketing_social_media_agencies, mortgage_brokers, property_management,
real_estate, recruiting_staffing, saas`.

Also `[direct]`: 12 teams, 66 use cases (6 `documented`, 60 catalogue-only), 72 ideas,
12 atoms, 170 industry×dimension cells, 17,000 observations at exactly 100/cell.

**Framework use.** Industries are a *demand and composition denominator*, never evidence.
The shared-atom hypothesis — that 12 atoms × 5 archetypes cover most of 17 industries, so
duplicate implementation should collapse — is `[inferred]` with the falsifier in §14.

The 10 readiness dimensions map to contract fields `[direct]`
(`phase-5/outputs/standards-applicability-closure.md`): `demand_atom_fit → atom,
state_machine`; `workflow_behavior → state_machine.transitions, idempotency_replay`;
`data_model → atom.source_of_truth, tenancy`; `integration_surface → ports,
authority_consent.capability_scope`; `ui_assembly → ports.ui`; `agent_authority →
authority_consent, ports.actions`; `verification_eval → evidence_receipts`;
`provenance_rights → provenance_rights`; `runtime_deployment → tenancy, recovery`;
`economics_maintenance → cost, maintenance`. All 170 cells are `readiness_unexecuted`,
0 admitted `[direct]`.

### 9.7 Great Library projection map

| v1 (authoritative) | Great Library `common.schema.json` (projection) |
|---|---|
| `provenance_rights.source.source_url` | `provenance.locators[].url` |
| `provenance_rights.source.immutable_revision` | `provenance.locators[].revision` |
| `provenance_rights.source.access` | `provenance.locators[].visibility` |
| `provenance_rights.rights.license_expression` | `provenance.license.spdx` |
| `provenance_rights.rights.license_state` | `provenance.license.status` (**lossy**, see below) |
| `owner.principal_id` + `owner.role` | `provenance.owners[].name` + `.role` |
| `evidence_receipts[]` | `evidence[]` (**lossy**) |
| `provenance_rights.transformation` | *no target* — **projection gap** |

Two lossy edges and one gap, all `[direct]` from comparing the two schemas:

1. v1 `license_state` has 6 values (`declared, verified, unknown, ambiguous, incompatible,
   not_applicable_synthetic`); Great Library `license.status` has 3 (`verified, pending,
   not_applicable`). **`ambiguous` and `incompatible` have no target** — precisely the two
   states that must block reuse. Projecting them into `pending` would erase a rights refusal.
2. v1 `evidence_receipt` has 14 required fields including `expected`, `observed`,
   `falsifier`, `limitations`; Great Library `evidence` requires 4
   (`kind, reference, observed_at, summary`). Falsifiers do not survive projection.
3. `transformation` (parser, tool_versions, before/after digest, adaptation_log, reviewer)
   has no Great Library counterpart, so extraction history is not representable there.

**Decision.** Projection MUST be lossy-flagged, never treated as round-trippable. A block
whose rights are `ambiguous`/`incompatible` MUST NOT be projected into the registry at all,
rather than projected as `pending`. Recorded as contradiction X-4.

## 10. Evidence tier binding (delta G-E)

The T0–T4 ladder `[direct]` (`block-contract-v1.md` §8) becomes a required field so
promotion is checkable rather than narrative.

| Tier | Meaning | Minimum evidence | Max packaging claim |
|---|---|---|---|
| `T0` | Discovered | A locator | none |
| `T1` | Opened | Source read; identity observed | `reference_only` |
| `T2` | Pinned & right-scoped | `immutable_revision` + `license_state` decided | `generated_from_pattern` |
| `T3` | Isolated proof | Runs in isolation; F3–F7 receipts | `extracted_slice`, `intact_*` |
| `T4` | Owner & rollback | F8, F9 + named human decision | `admitted` |

Rule: `evidence_tier` may never exceed the minimum tier across the nine families. A single
T1 family pins the whole block at T1 regardless of eight T4s. This is the anti-averaging
rule — the failure mode where a strong average hides one fatal gap.

## 11. What this framework refuses to claim

- It does not claim any block exists. `admitted_blocks = 0` `[direct]` `phase-8-state.json`.
- It does not claim Actionist can host, deploy, authenticate, or bind any of it. `[unknown]`
- It does not claim the 17 industries have validated demand. 60/66 use cases are
  catalogue-only `[direct]`.
- It does not claim any license is cleared. No scan was run in this lane. `[unknown]`
- It does not claim the siso-ui-base judge generalizes beyond the Oracle tenant `[direct]`.
- It does not claim the AutoSaaS 85% reuse target is achievable. `[unknown]`
- It does not resolve GPL/AGPL interpretation; the donor standard's Section 7 terms remain
  a live legal question for a qualified reviewer `[direct]`, not for this lane.

## 12. Unresolved contradictions

| ID | Contradiction | Sources | Status |
|---|---|---|---|
| X-1 | v1 `id` regex hardcodes major version `1`, making a v2 contract id unrepresentable while §9.1 proposes `contract_version` `2.0.0`. | `block-contract-v1.json` `[direct]` | **Must** be resolved before any v2 adoption |
| X-2 | v0 required `requires: [block-ids]`; v1 dropped it, leaving no dependency edge — yet composition is the Phase-8 goal. | v0 + v1 schemas `[direct]` | Delta restores it; why it was dropped is `[unknown]` |
| X-3 | The forge/judge pipeline is described as a gate but has **no numeric threshold**; blessing is human. Automated visual gating is not established. | `rubric.mjs`, `graduate.md`, `review-state.json` `[direct]` | Open |
| X-4 | Great Library `license.status` cannot represent `ambiguous`/`incompatible`; projecting rights refusals loses them. | `common.schema.json` vs v1 `[direct]` | Open; §9.7 mitigates by refusing projection |
| X-5 | Phase-5 closure cites "MCP 2026-07-28 **final**"; the first-party versioning page states 2026-07-28 is **Current**, and "Final" is a distinct status meaning a past, unchangeable spec. | `standards-applicability-closure.md` `[direct]` vs https://modelcontextprotocol.io/specification/versioning `[direct]` | Version correct, status label wrong |
| X-6 | AutoSaaS says "Prefer local SISO-owned code first"; the harvest corpus of 21st.dev bundles is local but third-party compiled code. "Local" and "SISO-owned" are not the same predicate. | harvest protocol vs `BLOCK-FRAMEWORK.md` `[direct]` | Open; locality must never imply rights |
| X-7 | SISOCRM operates AGPL-3.0 Teable as a mounted donor while harvest policy classes GPL/AGPL as reference-only. Both are current SISO practice. | `DONOR_FORK_STANDARD.md` vs harvest protocol `[direct]` | Reconciled *only* if `intact_service`/`intact_fork` is accepted as distinct from code reuse — which is exactly why `packaging_mode` exists. Legal confirmation `[unknown]` |

X-7 is the most consequential: it is the case where the delta's central proposal is what
makes two existing local policies non-contradictory. If a qualified reviewer rejects that
distinction, `packaging_mode` collapses and much of §3.2 must be rebuilt.

## 13. Falsifiers

The framework is wrong, in whole or part, if any of these is observed:

1. **F-ORTHOGONAL** — A future authorized run admits a block where one family's receipt was
   derived from another's (e.g. rights inferred from a build passing). The nine families
   are then not orthogonal and §4 is wrong.
2. **F-ATOM-COVERAGE** — A representative sample across the 17 industries cannot be expressed
   as compositions of the 12 atoms plus a bounded archetype set, and per-industry bespoke
   implementation does not fall. The shared-atom denominator claim (§9.6) fails.
3. **F-PACKAGING** — A legal reviewer finds `intact_fork`/`intact_service` carries the same
   reuse obligations as `extracted_slice`. X-7 resolves against the delta; §3.2 collapses.
4. **F-REFERENCE-CONTAMINATION** — Audit finds reference-only output that is a token-level
   translation of its source. §8's `contamination_control` is not a real control.
5. **F-COMPOSITION-INTERSECT** — A composed application is observed performing an action no
   member block was scoped for. C4 was not enforced; the composition model is unsafe.
6. **F-TIER-AVERAGING** — A block reaches T4 with any family below T3. §10's anti-averaging
   rule is not enforced.
7. **F-REGISTRY-REVOCATION** — A revoked block remains live inside a composed assembly.
   Invariant 6 / §7.3 is not implemented.
8. **F-LOSSY-PROJECTION** — A block with `ambiguous` or `incompatible` rights appears in the
   Great Library registry as `pending`. §9.7's refusal was not enforced.

## 14. What a future authorized run would do first

Ordered by information gained per unit of risk, and explicitly **not** authorized here:

1. Resolve X-1 (id regex) — a 1-line schema question blocking all versioning.
2. Get a legal reading on X-7 — it governs whether `packaging_mode` survives.
3. Restore `requires` and pilot ONE two-block composition against C1–C5 (X-2).
4. Set a numeric visual threshold or document that F6 is human-terminal (X-3).
5. Convert exactly one asset end-to-end, recording every manual step, per the v0 plan's
   step 4 `[direct]` — the log becomes lane 04's automation spec.

## 15. Local inputs read in this lane

All paths relative to the repository root unless absolute.

- `research/actionmodel-builder-research-2026-08-26/phase-8/PHASE-8-PROGRAM.md`
- `research/actionmodel-builder-research-2026-08-26/phase-8/dispatch/01-universal-block-framework.md`
- `research/actionmodel-builder-research-2026-08-26/phase-8/phase-8-state.json`
- `research/actionmodel-builder-research-2026-08-26/phase-8/dispatch-receipt.json`
- `research/actionmodel-builder-research-2026-08-26/phase-2/outputs/block-contract-v1.json`
- `research/actionmodel-builder-research-2026-08-26/phase-2/outputs/block-contract-v1.md`
- `research/actionmodel-builder-research-2026-08-26/phase-2/outputs/evaluation-and-admission-plan.md`
- `research/actionmodel-builder-research-2026-08-26/phase-2/outputs/industry-atom-specifications.md`
- `research/actionmodel-builder-research-2026-08-26/phase-2/outputs/local-corpus-inventory.md`
- `research/actionmodel-builder-research-2026-08-26/phase-3/outputs/decision-ledger.md`
- `research/actionmodel-builder-research-2026-08-26/phase-5/outputs/standards-applicability-closure.md`
- `research/actionmodel-builder-research-2026-08-26/outputs/first-principles-framework.md`
- `design/BLOCK-FRAMEWORK.md`
- `design/block-contract.schema.json`
- `/Users/shaansisodia/SISO_Workspace/siso-ui-base/pipeline/rubric.mjs`
- `/Users/shaansisodia/SISO_Workspace/siso-ui-base/batteries/gates/principles-grep.mjs`
- `/Users/shaansisodia/SISO_Workspace/siso-ui-base/commands/graduate.md`
- `/Users/shaansisodia/SISO_Workspace/siso-ui-base/tenants/oracle/review-state.json`
- `/Users/shaansisodia/SISO_Workspace/Great_Library_of_SISO/schemas/{work,assembly,common,decision,event,release}.schema.json`
- `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/framework/code-harvest-protocol.md`
- `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/product-manifest.json`
- `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/docs/DONOR_FORK_STANDARD.md`
- `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/integrations/affine-client.json`

First-party URLs retrieved in this lane `[direct]`:

- https://modelcontextprotocol.io/specification/2025-11-25/basic — protocol components, JSON Schema 2020-12 requirement
- https://modelcontextprotocol.io/specification/versioning — current version `2026-07-28`; Draft/Current/Final status semantics
- https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/ — `$value` required; `$type` required-in-effect; types incl. `color, dimension, fontFamily, fontWeight, duration, cubicBezier, number` and composites
- https://spdx.dev/use/specifications/ — SPDX 3.0 current; ISO/IEC 5962:2021

Named in v1's `x-source-basis` but **not** retrieved in this lane, therefore `[gated]`:
SLSA, in-toto, TUF, OCI, PROV, OpenAPI, Pact, AsyncAPI, CloudEvents, RFC 9396/8693/9421/9700,
Cedar, OTel, WCAG, LSP, A2A, FOCUS, OpenFeature, Argo, Temporal, K8s NetworkPolicy, SCITT,
SWHID, SPIFFE, REUSE.

## 16. Boundary restatement

`plan_status: DESIGN_ONLY` · `execution_status: UNEXECUTED` · `admission_status: NOT_ADMITTED`
`implementation_authorized: false` · `client_data_used: false` · `vendor_login_used: false`
`repository_code_copied: false` · `external_side_effects: none` · `production_deployment: false`
`executed_rollback: false` · `legal_clearance: absent` · `client_approval: absent`
`admitted_blocks: 0` · `shared_phase_state_promotion: false` · `parent_goal_status: active`
