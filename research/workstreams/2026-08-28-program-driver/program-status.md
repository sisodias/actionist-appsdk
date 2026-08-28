# Actionist program status

As of 2026-08-28. This is the coordinator’s reconciled operating picture; it does not replace the source receipts.

## Incident log

### INC-PD-001 — prior Program Driver tab retired after Herdr ID compaction

- **Cause:** The coordinator mistakenly retired the prior Program Driver tab after Herdr tab IDs compacted during cleanup.
- **Impact:** No artifact loss; the owned program-driver artifacts remained on disk.
- **Recovery:** Replacement terminal `term_65a172d4585c516` started from disk and is the current Program Driver handle.
- **Containment:** This resume stays inside the program-driver-owned paths; no worker was spawned or messaged and no shared canonical file was edited.

## Executive state

| Layer | Current state | Evidence-backed interpretation |
|---|---|---|
| Research | `research_complete_with_holds` for Sprint 1 and Sprint 2 | Sprint 1 and Sprint 2 both converge with explicit holds; their state files still say research-only. |
| Framework/package follow-on | `verified_packets_with_holds` | Framework Registry is `VERIFIED_RESEARCH_PACKET`; AFFiNE and Teable are `VERIFIED_PROTOTYPE_WITH_HOLDS`. All remain research-only; none is qualified, admitted or released. |
| Application implementation | `not_started` | No composed Actionist application, source conversion, mounted donor, or staged product binding is evidenced. The block lanes are scoped prototype packaging exceptions, not a product implementation. |
| Qualification | `not_started` | No current follow-on package has passed capability, binding or complete-workflow qualification; Teable has prototype proofs only and remains `NOT_QUALIFIED`. |
| Admission | `not_started` | Sprint receipts report `admission_status=NOT_ADMITTED` and zero admitted blocks/modules. |
| Release / learning | `not_started` | No deployment, rollback rehearsal, maintained client, or production learning receipt exists. |

The project is therefore past broad research and at the evidence-producing boundary. All three prerequisite packets are verified, and the contract-only AFFiNE+Teable+Chatwoot solver pilot is now `COMPLETE_VERIFIED_REFUSAL`: every candidate and the combined scenario is `INFEASIBLE` first at `R-SCOPE`. This is a correct fail-closed result, not a permission to weaken scope or promote anything; Framework Registry maturity remains `measured=0` and `operational=0`.

## Complete, active, blocked, missing and deferred

### Complete as research

- The 18-domain decomposition, seven-record module contract family, normalization taxonomy, five binding classes, five runtime profiles, 22-rule deterministic composer, evidence min-gating and multi-object rollback vocabulary are specified in Sprint 2 receipts.
- Sprint 1 has all twelve planned part packets and a verified convergence receipt with holds.
- Sprint 2 has a convergence receipt, canonical seam decisions and passing lane smoke receipts; the convergence is still research-only.
- The 15-node system map, Block Hub requirements projection and decision timeline are present on disk and in the static site.
- The Framework Registry packet is `VERIFIED_RESEARCH_PACKET`: 24 frameworks, 62 dependency edges, 10 gaps, maturity `0/9/14/1/0/0` (`idea/specified/machine_readable/dry_run/measured/operational`), with registry, system-map, Block Hub, spine and diff checks passing.
- The AFFiNE `blocks/affine-workspace` packet is `VERIFIED_PROTOTYPE_WITH_HOLDS`: 7 records, 13 evidence sources, 20 package files, no source/vendor, identity fail-closed tests 5/5, and `NOT_ADMITTED`.
- The repository-topology support lane is `COMPLETE_VERIFIED`: verifier `PASS` with 399 checks and one concurrent-root-change warning explicitly attributed to sibling activity; no external writes, repository creation, remote mutation, commit, push, publication or data movement occurred.
- The `PD-007` solver packet is `COMPLETE_VERIFIED_REFUSAL`: 14 artifacts, three candidates with seven records each, 22 ordered rules over 19 constraints, three repeated runs with digest parity, zero relaxations, and all four scenarios refusing first at `R-SCOPE`.

### Active now

- `ACTIONIST-FRAMEWORK-REGISTRY` has a verified research packet under its own dispatch; its registry, dependency graph, gap analysis, Value Matrix, verifier and local site projection pass the recorded checks. It remains research-only, with measured and operational maturity both zero.
- `ACTIONIST-BLOCK-AFFINE` has a verified `VERIFIED_PROTOTYPE_WITH_HOLDS` packet under its own block/workstream boundary; its package and synthetic binding proofs pass, but it remains `NOT_QUALIFIED`/`NOT_ADMITTED`.
- `ACTIONIST-BLOCK-TEABLE` is now `verified_prototype_with_holds`: independent validation, 13/13 smoke, npm test, deterministic install, synthetic bind and diff-check all pass. Its `NOT_QUALIFIED`/`NOT_ADMITTED` boundary and seven explicit holds remain in force.
- The contract-only AFFiNE+Teable+Chatwoot solver pilot is complete as a verified refusal. No downstream host/data/connector/runtime binding is promoted because the sequencing defect requires a distinct candidate-evaluation scope; `R-SCOPE` remains strict.
- `ACTIONIST-REPO-TOPOLOGY` is now complete and verified as a non-critical support lane. Its headline is: Sinamun/Actionist-AppSDK private client index; Great Library public lineage; proposed small framework/block registries; per-block implementation repos; siso-ui-base engine with a 3.0G corpus in a private content-addressed data plane. No repository or publication mutation is authorized by the receipt.
- This program-driver lane is maintaining the graph and will refresh these statuses only from artifacts plus verifiers or explicit verified holds.

### Blocked or held

1. The canonical Agent Brain task service is unreachable from this checkout (`siso-brain health` and `siso-brain tasks` returned connection refused), so shared task state cannot be fetched or mutated in this turn.
2. `PD-007` is a verified refusal at `R-SCOPE`; downstream binding cannot advance until candidate evaluation is separated from production admission scope. Staged binding remains separately unauthorized.
3. Real adaptation cost, HostContract absorption, below-full-page donor rendering, design-axis sufficiency, runtime density and whole-workflow success remain unmeasured or unexecuted.
4. Agent Brain remains unavailable; repository-topology is complete verified and no longer blocks or occupies an active lane.

### Missing evidence

- A corrected candidate-evaluation scope and a subsequent solver run; the current three-candidate run is complete but correctly refused before admission.
- An end-to-end mixed-shape workflow with host identity, donor-owned and Actionist-owned data, a connector, rollback and measured adaptation/runtime cost.
- A qualification dossier, human acceptance, admission record, release manifest tied to a deployed composition, and production feedback.
- The authoritative local 1.3M/850k/80k corpus path/query interface and a current Agent Brain service receipt.

### Deliberately deferred

- Another breadth survey, full-corpus ranking, full competitor taxonomy reconciliation and complete 21st.dev refresh.
- Universal database selection, a universal shell, a full automatic repo converter, deployment and production admission.
- Legal/rights resolution as an architecture driver; legal evidence remains recorded and is outside this quality-first coordination lane.

## Sprint reconciliation

| Sprint / source | Reconciled status | What it proves | What it does not prove |
|---|---|---|---|
| S1 | `converged_with_holds` | Twelve part packets, five lane callbacks and research handoff artifacts are present. | It does not authorize implementation, execution or admission. |
| S2 | `converged_with_holds` | The seven-record family, seam decisions, solver contract, runtime/release and learning contracts are coherent as research artifacts. | It does not prove a real source was converted, mounted, composed, built, deployed, released or rolled back. |
| Follow-on lanes | `verified_packets_with_holds` | Framework Registry, AFFiNE and Teable have verified artifact-first packets; repository-topology is `COMPLETE_VERIFIED`; `PD-007` is `COMPLETE_VERIFIED_REFUSAL` at `R-SCOPE`. | No packet is promoted to qualification, admission or release; the scope refusal and later unknowns remain intact. |

### PD-007 verified refusal and framework sequencing defect

The contract-only solver packet is complete and independently verified:

- 14 artifacts; three candidates × seven linked records; 22 ordered rules and 19 distinct constraints.
- Three repeated runs have digest parity `PASS`; zero relaxations were applied.
- AFFiNE, Teable, Chatwoot and the combined scenario are all `INFEASIBLE`, first at `R-SCOPE`, because every `RegistryRecord` is intentionally `NOT_ADMITTED` with an empty target scope.
- Later failures remain recorded: AFFiNE and Teable authority conflicts; Chatwoot tenancy, idempotency and consent failures.
- Later unknowns remain unresolved: all UI token mappings, evidence fields, rollback horizons and glue budgets.

**SEQ-PD-001:** Pre-admission contract evaluation needs a candidate-evaluation scope distinct from the production admission scope. This is a sequencing correction, not a reason to weaken `R-SCOPE` or treat `NOT_ADMITTED` records as admitted. The next gate is to define that separate evaluation scope and rerun the solver without authorizing binding, qualification, admission or deployment.

Evidence: `research/workstreams/2026-08-28-three-candidate-solver-pilot/pilot-report.md`, `research/workstreams/2026-08-28-three-candidate-solver-pilot/solver-results.json`, `research/workstreams/2026-08-28-three-candidate-solver-pilot/lane-state.json`, and `research/workstreams/2026-08-28-three-candidate-solver-pilot/verify.mjs`.

### AFFiNE verified prototype holds

The packet proves a bounded local synthetic host/binding prototype, not qualification or admission. Preserve these five holds exactly:

1. `H-THEME` — cross-origin theme/token parity is unproven.
2. `H-SETTINGS` — donor-rendered settings fallback remains the v0.1 path; host-chrome remount is unproven.
3. `H-UPGRADE` — donor upgrade replay and export-anchor survival are unrun.
4. `H-DENSITY` — density, mobile, below-full-page behavior, tenant switching and second-identity isolation remain unmeasured.
5. `H-CE-WEB` — official CE web/service provenance, manifest/SBOM/notices and file-level redistribution remain unproven.

Evidence: `research/workstreams/2026-08-28-affine-block/run/COMPLETION-PACKET.md`, `research/workstreams/2026-08-28-affine-block/run/verification.json`, and `research/workstreams/2026-08-28-affine-block/run/evidence-index.json`.

### Teable verified prototype holds

The receipt proves a reusable prototype package, not qualification or admission. Preserve these seven holds exactly:

1. Authenticated native desktop CRUD proof incomplete.
2. Authenticated native mobile CRUD proof incomplete.
3. Attachment upload/read authorization proof incomplete.
4. Host session exchange and donor-login direct-denial proof not reproduced.
5. Independent role/schema/backup/restore boundary incomplete.
6. AGPL corresponding-source and Section 7 attestation incomplete.
7. No release artifact retention; recovery horizon is 0.

Evidence: `research/workstreams/2026-08-27-sprint-1/convergence/S1-CONVERGENCE.md`, `research/workstreams/2026-08-27-sprint-2/convergence/S2-CONVERGENCE.md`, `research/workstreams/2026-08-28-teable-block/runs/2026-08-28-teable-block-v0.1/run-receipt.json`, and `live-lanes.json`.

## 18-domain status

`research_complete_with_holds` means the domain has a current research artifact and a named next gate; it does not mean the capability is implemented or production-ready.

| Domain | Current status | Current hold / next gate | Evidence |
|---|---|---|---|
| D01 Outcome and demand | `research_complete_with_holds` | ClientContext authority and accessible workflow/value evidence remain open. | `research/workstreams/p01-client-intelligence/runs/2026-08-27-sprint-1-fable/research-report.md`; `research/workstreams/p02-outcome-product-spec/runs/2026-08-27-sprint-1-fable/research-report.md` |
| D02 Industry/domain ontology | `research_complete_with_holds` | Industry-to-workflow fit is an inference until a reachable pilot and acceptance data exist. | `research/actionmodel-builder-research-2026-08-26/phase-2/outputs/industry-atom-specifications.md`; `research/workstreams/p01-client-intelligence/runs/2026-08-27-sprint-1-fable/industry-discovery-priors.jsonl` |
| D03 Product specification | `research_complete_with_holds` | Five-workflow proving harness and client Accept/Revise gate remain unrun. | `research/workstreams/p02-outcome-product-spec/runs/2026-08-27-sprint-1-fable/research-report.md`; `research/workstreams/2026-08-27-sprint-1/convergence/s1-contract-handoff.json` |
| D04 Source intelligence | `research_complete_with_holds` | Discovery supply is large, but the authoritative 1.3M/850k/80k index remains unknown. | `research/actionmodel-builder-research-2026-08-26/expansion/outputs/github-expansion-report.md`; `knowledge/capability-shelf/source-registry.jsonl` |
| D05 Capability mining | `research_complete_with_holds` | No source has been executed or converted into a qualified capability. | `research/workstreams/p03-curated-capability-shelf/runs/2026-08-27-sprint-1-fable/research-report.md`; `research/workstreams/p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus/repo-to-module-framework.md` |
| D06 Reuse shape and ownership | `research_complete_with_holds` | Shape choice remains a named judgment; the three-shape pilot is unrun. | `research/workstreams/p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus/worked-traces.md`; `research/workstreams/2026-08-27-sprint-2/convergence/S2-CONVERGENCE.md` |
| D07 Extraction and adaptation | `research_complete_with_holds` | Surgery categories exist, but real cost distribution and upgrade replay are unmeasured. | `research/workstreams/p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus/normalization-surgery-taxonomy.jsonl`; `research/workstreams/p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus/repo-to-module-framework.md` |
| D08 Thin capability contract | `research_complete_with_holds` | Contract sufficiency across real service/module/package shapes is untested. | `research/workstreams/p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus/module-contract-family.json`; `research/workstreams/2026-08-27-sprint-2/convergence/canonical-seam-decisions.json` |
| D09 Registry and resolution | `research_complete_with_holds` | Framework Registry research packet is verified; its outputs are not a qualified capability registry and measured/operational maturity remain zero. Use it in the contract-only pilot. | `research/workstreams/2026-08-28-framework-registry/DISPATCH.md`; `knowledge/frameworks/framework-register.json`; `knowledge/frameworks/framework-dependency-graph.json`; `knowledge/scripts/verify-framework-registry.mjs` |
| D10 Data plane | `research_complete_with_holds` | Host runtime language, object storage and cross-owner consistency still require a pilot. | `research/workstreams/p09-data-plane/runs/2026-08-27-sprint-1-fable/research-report.md`; `research/workstreams/2026-08-27-sprint-2/convergence/S2-CONVERGENCE.md` |
| D11 Identity and authority | `research_complete_with_holds` | Host-verified identity is required; settings absorption and tenant switching remain open. | `research/workstreams/p10-identity-settings-navigation/runs/2026-08-27-sprint-1-fable/research-report.md`; `research/workstreams/2026-08-27-sprint-2/convergence/canonical-seam-decisions.json` |
| D12 Connectors | `research_complete_with_holds` | Tenant-keyed storage and OAuth refresh/completion are not locally proven end to end. | `research/workstreams/p11-connectors-integration-runtime/runs/2026-08-27-sprint-1-fable/research-report.md`; `research/openconnector-spike-2026-08-27.md` |
| D13 UI and taste | `research_complete_with_holds` | Corpus theme eligibility, visual coherence and preference-axis sufficiency remain unmeasured. | `research/workstreams/p05-living-component-layer/runs/2026-08-27-sprint-1-fable/research-report.md`; `research/workstreams/p06-preference-science/runs/2026-08-27-sprint-1-fable/research-report.md`; `research/workstreams/p07-token-theme-harmonization/runs/2026-08-27-sprint-2-opus/design-harmonization-framework.md` |
| D14 Archetypes and shells | `research_complete_with_holds` | Below-full-page donor feasibility and host/donor navigation absorption need a real pilot. | `research/workstreams/p08-archetype-shell-layout/runs/2026-08-27-sprint-2-opus/shell-contract.md`; `research/workstreams/p08-archetype-shell-layout/runs/2026-08-27-sprint-2-opus/navigation-ownership-matrix.json` |
| D15 Composition planner | `research_complete_with_holds` | The three-candidate contract solver is verified as a fail-closed refusal at `R-SCOPE`; a distinct candidate-evaluation scope is required before rerun. | `research/workstreams/2026-08-28-three-candidate-solver-pilot/pilot-report.md`; `research/workstreams/2026-08-28-three-candidate-solver-pilot/solver-results.json`; `research/workstreams/p12-deterministic-composer/runs/2026-08-27-sprint-2-opus/compatibility-and-authority-rules.json` |
| D16 Runtime and host | `research_complete_with_holds` | Runtime density, host identity handoff and profile portability are unmeasured. | `research/workstreams/p14-runtime-sandbox-release/runs/2026-08-27-sprint-2-opus/runtime-profile-contracts.md`; `research/workstreams/p14-runtime-sandbox-release/runs/2026-08-27-sprint-2-opus/runtime-profiles.json` |
| D17 Verification and qualification | `research_complete_with_holds` | Qualification gates have been designed but no real binding or workflow has passed them. | `research/workstreams/p14-runtime-sandbox-release/runs/2026-08-27-sprint-2-opus/release-rollback-contract.md`; `research/workstreams/2026-08-27-sprint-2/convergence/S2-CONVERGENCE.md` |
| D18 Release and learning | `research_complete_with_holds` | No release, rollback rehearsal, production outcome or cross-client learning consent exists. | `research/workstreams/p15-learning-feedback/runs/2026-08-27-sprint-2-opus/learning-contract.md`; `research/workstreams/p14-runtime-sandbox-release/runs/2026-08-27-sprint-2-opus/release-rollback-contract.md` |

## 15 public moving parts

All 15 public pages exist. Their public projection still carries mixed `partial`/`open` labels and older run pointers; the current status below is the reconciled program view and is intentionally recorded here until CENA applies any canonical-site update.

| Part | Reconciled status | Evidence / public page |
|---|---|---|
| P01 Client intelligence and discovery | `research_complete_with_holds` | `research/workstreams/p01-client-intelligence/runs/2026-08-27-sprint-1-fable/lane-state.json`; `site/system-map/parts/p01/index.html` |
| P02 Outcome and product specification | `research_complete_with_holds` | `research/workstreams/p02-outcome-product-spec/runs/2026-08-27-sprint-1-fable/lane-state.json`; `site/system-map/parts/p02/index.html` |
| P03 Curated capability shelf | `research_complete_with_holds` | `research/workstreams/p03-curated-capability-shelf/runs/2026-08-27-sprint-1-fable/lane-state.json`; `site/system-map/parts/p03/index.html` |
| P04 Autonomous repo-to-block foundry | `research_complete_with_holds` | `research/workstreams/p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus/lane-state.json`; `site/system-map/parts/p04/index.html` |
| P05 Living UI component layer | `research_complete_with_holds` | `research/workstreams/p05-living-component-layer/runs/2026-08-27-sprint-1-fable/lane-state.json`; `site/system-map/parts/p05/index.html` |
| P06 Design taste and preference learner | `research_complete_with_holds` | `research/workstreams/p06-preference-science/runs/2026-08-27-sprint-1-fable/lane-state.json`; `site/system-map/parts/p06/index.html` |
| P07 Token and theme harmonizer | `research_complete_with_holds` | `research/workstreams/p07-token-theme-harmonization/runs/2026-08-27-sprint-2-opus/lane-state.json`; `site/system-map/parts/p07/index.html` |
| P08 Archetypes, shells and layouts | `research_complete_with_holds` | `research/workstreams/p08-archetype-shell-layout/runs/2026-08-27-sprint-2-opus/lane-state.json`; `site/system-map/parts/p08/index.html` |
| P09 Data and state plane | `research_complete_with_holds` | `research/workstreams/p09-data-plane/runs/2026-08-27-sprint-1-fable/lane-state.json`; `site/system-map/parts/p09/index.html` |
| P10 Identity, settings and navigation host | `research_complete_with_holds` | `research/workstreams/p10-identity-settings-navigation/runs/2026-08-27-sprint-1-fable/lane-state.json`; `site/system-map/parts/p10/index.html` |
| P11 Connector and external-action plane | `research_complete_with_holds` | `research/workstreams/p11-connectors-integration-runtime/runs/2026-08-27-sprint-1-fable/lane-state.json`; `site/system-map/parts/p11/index.html` |
| P12 Deterministic composition planner | `research_complete_with_holds` | `research/workstreams/p12-deterministic-composer/runs/2026-08-27-sprint-2-opus/lane-state.json`; `site/system-map/parts/p12/index.html` |
| P13 Preview, editor and change loop | `research_complete_with_holds` | `research/workstreams/p13-preview-editor/runs/2026-08-27-sprint-2-opus/lane-state.json`; `site/system-map/parts/p13/index.html` |
| P14 Runtime, verification and release | `research_complete_with_holds` | `research/workstreams/p14-runtime-sandbox-release/runs/2026-08-27-sprint-2-opus/lane-state.json`; `site/system-map/parts/p14/index.html` |
| P15 Continuous corpus and production learning | `research_complete_with_holds` | `research/workstreams/p15-learning-feedback/runs/2026-08-27-sprint-2-opus/lane-state.json`; `site/system-map/parts/p15/index.html` |

## Immediate operating rule

Do not promote any lane from `active` based on Herdr alone. Read its owned artifact, require a passing verifier or explicit verified hold, update this packet and the graph, then callback CENA when authorized. The three-candidate solver packet is now `COMPLETE_VERIFIED_REFUSAL`; resolve `SEQ-PD-001` before any rerun. No new operator decision is requested, and no staged binding or admission is implied.
