# Standards applicability and probe readiness — Action Model Builder, wave 5

**Run:** `actionmodel-builder-research-2026-08-26`  
**Lane:** `RCH-STANDARDS-W5`  
**Wave:** `matrix-wave-5-industry-dimension-deepening`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Mode:** research, applicability mapping, and synthetic read-only probe design only  
**Status:** 170-cell wave-5 readiness delta complete; local execution receipts remain absent  
**Owner:** this artifact only; no other wave-5 output is owned here

This packet is additive. It preserves the verified 566-line baseline and verified
wave-2, wave-3, and wave-4 applicability packets as read-only inputs:

- [`standards-expansion.md`](../../../outputs/standards-expansion.md)
- [`standards-applicability-wave-2.md`](../../wave-2/outputs/standards-applicability-wave-2.md)
- [`WAVE-5-PROGRAM.md`](../WAVE-5-PROGRAM.md)
- [`standards-applicability-wave-3.md`](../../wave-3/outputs/standards-applicability-wave-3.md)
- [`standards-applicability-wave-4.md`](../../wave-4/outputs/standards-applicability-wave-4.md)
- [`catalogue.json`](../../../../actionmodel-long-run/outputs/verticals/catalogue.json)
- [`atoms-001.json`](../../../../actionmodel-long-run/outputs/verticals/atoms-001.json)

No implementation, repository copying, client-data access, private contract,
license scan, contract test, model eval, sandbox test, deployment, rollback,
registry verification, or block admission is claimed or performed by this lane.

## Executive result

All 170 exact cells are represented below as the Cartesian product of the 17
immutable catalogue industry IDs and the ten wave-2 dimension IDs. Each row
references:

1. an exact industry demand profile containing job, trigger, outcome, and atom pressure;
2. a pinned standards profile `STD-D01`–`STD-D10` with source/version/date posture;
3. a readiness field profile `RF-D01`–`RF-D10` mapped to exact existing v0 paths and clearly marked proposed fields;
4. a falsifiable probe `P01`–`P10`; and
5. a cell-level gap state that does not turn missing receipts into negative demand.

The wave-2 floor is treated as `10 observed slots per cell` because the wave-3
program declares it verified. That repository observation floor is separate from
standards readiness: every cell below remains `readiness_unexecuted` until its
local source, rights, authority, eval, runtime, and other required receipts are
actually produced. This packet does not claim the wave-3 GitHub 1,700-row delta
or the combined 3,400-slot floor.

## Immutable inputs and integrity boundaries

| Input | Required treatment | Wave-5 evidence |
|---|---|---|
| 566-line standards expansion | Immutable normative baseline | `566` lines, `65655` bytes, SHA-256 `22b4024b5163c77eca40597bda43802aca6d9e69f41e827465494ad90f8dbc3f` |
| Wave-2 applicability packet | Immutable applicability predecessor | Present at the path above; SHA-256 recorded during pre-write audit and checked again after write |
| Wave-3 applicability packet | Immutable applicability predecessor | SHA-256 `98bc9657efa729334a0eac68d429223d5be8934847105e08a8ec98a81c2433f5` |
| Wave-4 applicability packet | Immutable applicability predecessor | SHA-256 `a545a6facb2d5ade9288a29d377f86760cdaef8a3c0d2fec25be17bb208df1f1` |
| 17-industry catalogue | Exact foreign-key namespace | `research/actionmodel-long-run/outputs/verticals/catalogue.json`, `schema_version: 1`, observed `2026-08-26` |
| 12 atoms | Immutable demand/capability pressure vocabulary | `research/actionmodel-long-run/outputs/verticals/atoms-001.json`, batch `atoms-001`, observed `2026-08-26` |
| Wave-5 program | Lane contract | Read in full; one owned output only |
| Parent target | Still open research backlog | `17,000` slots / `100` observations per cell; parent state remains active |

Baseline and wave-2 files are not edited by this lane. A field named here is not
an implementation capability unless an external execution receipt says so.

## Evidence classes and readiness vocabulary

| Class/state | Meaning | What it cannot mean |
|---|---|---|
| `N` | Normative standard, RFC, W3C Recommendation, or standards-track specification | Local conformance or product safety |
| `D` | First-party implementation or protocol documentation | Action Model implementation |
| `P` | Peer-reviewed, proceedings, or preprint research | Local benchmark result |
| `V` | Vendor/project positioning or leaderboard | Authenticated behavior, adoption, or ROI |
| `I` | Explicit local inference proposed by this report | Existing Block Contract field or authorization |
| `E` | Directly inspected source/page/artifact | Execution receipt |
| `profiled_probe_ready` | Cell has exact profile, standards target, fields, probe, and falsifier design | Passing the probe or meeting an admission gate |
| `readiness_unexecuted` | Required local receipt has not been run/issued in this lane | Negative evidence or “no capability” |
| `blocked_pending_receipt` | A named next gate is required before readiness can advance | A blocked market or rejected candidate |
| `admitted` | Registry admission state | This state is prohibited in the wave-5 artifact |

## Exact v0 Block Contract surface

The checked-in schema at
[`design/block-contract.schema.json`](../../../../../../design/block-contract.schema.json)
contains these actual paths. Wave-5 readiness profiles use `P:` for a real v0
path and `I:` for a proposed receipt/extension that is not currently in the
schema.

| Area | Existing v0 paths (`P:`) | Wave-3 gap / proposed paths (`I:`) |
|---|---|---|
| Identity | `id`, `kind` | `evidence.subject_digest`, `provenance.source_identity`, registry trust root |
| Provenance | `provenance.source_url`, `.commit_sha`, `.license`, `.copyright`, `.harvested_at`, `.adaptation_log`, `.harvest_score` | file/snippet spans, declared/detected/concluded rights, scanner receipt, SBOM views, attestation, transparency receipt |
| Runtime/data/auth | `stack_contract.runtime`, `.styling.*`, `.data.*`, `.auth_interface`, `.interfaces_required` | tenant/data owner/sensitivity/freshness/RLS, workload identity, sandbox profile, resource limits, secret scope, egress, rollback |
| Exports | `provides.routes[]`, `.components[]`, `.migrations[]`, `.env_vars[]`, `.events[]` | typed `contract_refs[]`, compatibility policy, generated artifact and install receipts |
| Dependencies | `requires[]` | contract dialect/version/digest and compatibility result |
| Design | `tokens_consumed[]` | DTCG format/resolver/context/resolved digest, fallback and visual/accessibility receipts |
| Proof | `eval.build_cmd`, `.smoke_test`, `.screenshot_baseline` | fixture/repo revision, model/provider, seed/reset, environment, scorer, raw trace, verdict classes, benchmark health |
| Admission-shaped | `eval.admission.*` | Registry-populated only; wave 5 must not populate it |


## Wave-5 current standards refresh

Observed on 2026-08-26. These current-source observations refresh targets and
gaps; they do not upgrade local readiness or create execution evidence.

| Refresh | Current observation | Readiness consequence |
|---|---|---|
| `RFRESH-01` | OpenAPI's official index exposes 3.2.0 and 3.1.2; 3.1.1 remains published. | Keep 3.1.1 as an explicit compatibility pin; require dialect/version/digest receipts; do not call it latest. |
| `RFRESH-02` | FOCUS 1.4 is the latest published release and was ratified 2026-06-04; 1.2 remains the predecessor compatibility target. | Require `FocusVersion`, version-aware joins, and cost-source freshness; billing schema is not ROI. |
| `RFRESH-03` | WASI 0.3 is stable while WASI 0.2 remains stable; 0.3 replaces `wasi:io` with native async primitives. | Record runtime choice, WIT/toolchain, and fallback; a version pin is not sandbox enforcement. |
| `RFRESH-04` | AsyncAPI 3.1.0 is released; CloudEvents core 1.0.2 is the latest released core and the default branch is WIP. | Pin release tags and reject mutable-branch-only receipts. |
| `RFRESH-05` | SPDX's official index labels 3.0 current; SCITT RFC 9943 is a published Proposed Standard. | Preserve version drift and add transparency/subject joins; neither supplies legal clearance. |
| `RFRESH-06` | MCP 2026-07-28 is now published; it introduces a stateless core, header routing, cacheable lists, authorization hardening, and extensions. | Pin 2026-07-28 for current review, retain 2025-11-25 as a migration comparator, and test capability/version drift. |
| `RFRESH-07` | OTel semantic conventions are 1.44.0; DTCG Format/Resolver 2025.10 is a stable W3C Community Group final, not a W3C Recommendation. | Treat telemetry as correlation and keep token, accessibility, interaction, and visual receipts independent. |

Wave-5 delta status for every cell is `standards_source=observed` and
`local_readiness=unobserved`. The parent repository indices 31–40 are owned by
other lanes; this report does not claim their 1,700 rows or 6,800-slot floor.
## Ten refreshed standards/readiness profiles

The profiles below are the standards/readiness vocabulary referenced by all 170
cell rows. “Pinned” means the version/date is explicit; it does not mean the
standard is implemented locally.

| Profile | Dimension | Pinned standards/specifications and source posture | Exact readiness fields |
|---|---|---|---|
| `STD-D01` | `demand_atom_fit` | ISO/IEC/IEEE 29148:2018 Edition 2; ISO/IEC 25010:2023 Edition 2 (`N`, ISO abstracts; full texts access-limited) | `RF-D01`: `P:kind`, `P:provides.routes[]`, `P:provides.components[]`, `P:provides.events[]`, `P:requires[]`; `I:demand.job`, `.trigger`, `.outcome`, `.industry_id`, `.atom_refs`, `.evidence_receipt` |
| `STD-D02` | `workflow_behavior` | OMG BPMN 2.0.2; AsyncAPI 3.1.0; CloudEvents core 1.0.2 released tag; default branch WIP (`N/D`; mutable project branches require future commit pins) | `RF-D02`: `P:provides.events[]`, `P:provides.migrations[]`, `P:requires[]`, `P:stack_contract.interfaces_required`; `I:workflow.states`, `.transitions`, `.retries`, `.schedules`, `.handoff`, `.idempotency` |
| `STD-D03` | `data_model` | JSON Schema Draft 2020-12; OpenAPI 3.1.1 plus 2024-11-10 dialect; NIST SP 800-207 final (`N`) | `RF-D03`: `P:stack_contract.data.*`, `P:stack_contract.auth_interface`, `P:provides.migrations[]`, `P:provides.env_vars[]`; `I:data_policy.tenant`, `.owner`, `.sensitivity`, `.freshness`, `.permissions`, `.rls_receipt` |
| `STD-D04` | `integration_surface` | OpenAPI 3.1.1 compatibility pin; AsyncAPI 3.1.0; CloudEvents 1.0.2; MCP 2026-07-28; A2A 1.0.0; OAS 3.2.0/3.1.2 drift (`N/D`; protocol/project sources) | `RF-D04`: `P:provides.routes[]`, `.events[]`, `.env_vars[]`, `.components[]`, `P:requires[]`, `P:stack_contract.interfaces_required`; `I:contract_refs[].{kind,id,version,digest,compatibility_policy,receipt}` |
| `STD-D05` | `ui_assembly` | DTCG Format/Resolver 2025.10; WCAG 2.2 Recommendation 2024-12-12; WAI-ARIA 1.2 Recommendation 2023-06-06; Playwright/Storybook/axe implementation docs (`N/D`) | `RF-D05`: `P:tokens_consumed[]`, `P:provides.routes[]`, `.components[]`, `P:eval.screenshot_baseline`; `I:tokens.*`, `eval.accessibility`, `.component_states`, `.visual_environment` |
| `STD-D06` | `agent_authority` | MCP 2026-07-28 published with 2025-11-25 migration drift; A2A 1.0.0; OAuth RFC 9396/8693; RFC 9421; W3C Trace Context; policy-engine docs (`N/D`) | `RF-D06`: `P:stack_contract.auth_interface`, `.interfaces_required`, `P:provides.env_vars[]`, `P:requires[]`; `I:action_contract.*`, `audit.action_receipt` |
| `STD-D07` | `verification_eval` | ISO/IEC 25010:2023; ISO/IEC/IEEE 29119-3:2021 catalog record; SWE-bench/SWE-rebench/SWE-Bench Pro, ToolSandbox, AgentDojo, WorkArena++, BrowserGym, OSWorld (`N/P/D/V`) | `RF-D07`: `P:eval.build_cmd`, `.smoke_test`, `.screenshot_baseline`; `I:eval.fixture_revision`, `.model_provider`, `.seed`, `.environment_image`, `.tool_definitions`, `.reset`, `.scorer`, `.raw_trace`, `.metrics`, `.failure_taxonomy`, `.falsifiers` |
| `STD-D08` | `provenance_rights` | SPDX 3.0.1 compatibility pin with official 3.0-current drift; REUSE 3.3; CycloneDX 1.7; SLSA 1.2; in-toto; TUF 1.0.35; OCI 1.1.0; SWHID 1.1 / ISO/IEC 18670; SCITT RFC 9943; Sigstore docs (`N/D`) | `RF-D08`: all `P:provenance.*`, `P:id`, `P:kind`, `P:requires[]`; `I:source_spans`, `.source_identity`, `.artifact_digest`, `.rights_receipts`, `.sbom_views`, `.attestations`, `.transparency_receipt`, `registry.trust_root`, `release.subject_digest` |
| `STD-D09` | `runtime_deployment` | OCI 1.1.0; Kubernetes NetworkPolicy `networking.k8s.io/v1`; NIST SP 800-207; SPIFFE; WASI 0.2 compatibility pin with stable 0.3 drift; Argo/Kubernetes rollout docs (`N/D/V`) | `RF-D09`: `P:stack_contract.runtime`, `.data.*`, `.auth_interface`, `.interfaces_required`, `P:provides.env_vars[]`; `I:stack_contract.sandbox_profile`, `.tenant`, `.workload_identity`, `.egress`, `.secret_scope`, `.resource_limits`, `release.*`, `audit.runtime_receipt` |
| `STD-D10` | `economics_maintenance` | FOCUS v1.2 compatibility pin plus current ratified FOCUS v1.4; ISO/IEC 25010:2023; OpenFeature version not stated; OCI 1.1.0 (`N/D`; FOCUS v1.2 explicitly pinned, not latest) | `RF-D10`: `P:stack_contract.runtime`, `.data.orm`, `.interfaces_required`, `P:requires[]`, `P:eval.build_cmd`, `.smoke_test`; `I:economics.cost_units`, `.budget`, `.latency_budget`, `.maintenance_owner`, `.freshness`, `.vendor_continuity`, `.portability`, `.exit_test`, `release.flags` |

## Twelve-task execution ledger

| # | Wave-5 RCH-STANDARDS task | Evidence in this artifact | State |
|---:|---|---|---|
| 1 | Preserve 566-line baseline and verified wave-2/wave-3/wave-4 packets | Immutable input table and final hash checks | Complete / verified by post-write smoke |
| 2 | Refresh all 170 cells against current rights/SBOM/attestation, AST/codemod, tokens/visual, authority, eval, runtime, egress, tenancy, rollback, and economics needs | Current refresh register plus 170-row matrix | Complete |
| 3 | Distinguish normative text, implementation behavior, empirical evidence, vendor positioning, and proposed local inference | Evidence vocabulary and limitations | Complete |
| 4 | Pin versions/dates and mark mutable/access-limited pages | Ten profiles, refresh findings, and source register | Complete |
| 5 | Define minimum synthetic read-only probe and falsifier for every dimension, including negative/replay/timeout/recovery/ownership cases | `P01`–`P10` | Complete / unexecuted |
| 6 | Map receipt fields to actual Block Contract paths without treating proposals as existing capability | v0 surface and `RF-D01`–`RF-D10` | Complete |
| 7 | Identify where standards are useful but insufficient for authority, safety, portability, outcome, or rollback | Gap and limitation sections | Complete |
| 8 | Produce exact 170-cell delta/readiness matrix and prioritized gaps | Matrix accounting and priority register | Complete |
| 9 | Record absent receipts and why a standard cannot supply them | Non-execution ledger | Complete |
| 10 | Verify direct links, baseline line/hash, 170 cells, 10 dimensions, 12 tasks, and zero execution/admission claims | Validation section | Complete / verified by post-write smoke |
| 11 | Preserve prior hashes and source limitations | Immutable inputs and source register | Complete / verified by post-write smoke |
| 12 | Fresh-resolve CENA and callback after post-write verification; parent remains active | Callback protocol and receipt | Complete / verified |
## Exact industry demand profiles

These 17 profiles are the immutable catalogue join keys used by every cell.
Each `profile_id` resolves to the exact `industry_id`, job, trigger, outcome,
and atom pressure. The atom IDs are copied from `atoms-001.json`; they are
capability/demand vocabulary, not authenticated workflows.

| Profile | `industry_id` | Label | Job | Trigger | Outcome | Atom pressure |
|---|---|---|---|---|---|---|
| IND-01 | `accounting_firms` | Accounting Firms | Chase client documents, reconcile bank feeds, and close books on time. | New document or payment, aging threshold, or close schedule. | Time to review/close, matched rate, and exception aging. | `intake_normalize, extract_structure, reconcile_audit, follow_up_chase, report_digest` |
| IND-02 | `construction` | Construction | Track jobs, chase change orders, coordinate subcontractors, and send progress billing. | Job/status change, change-order request, milestone, or due date. | Change-order cycle time, on-time billing, and unresolved job exceptions. | `intake_normalize, triage_route, sync_handoff, follow_up_chase, report_digest` |
| IND-03 | `course_creators` | Course Creators | Onboard students, run lesson drips, and manage the community. | Enrollment, lesson schedule, unanswered question, or cohort event. | Activation/completion, response time, and attendance. | `intake_normalize, schedule_coordinate, follow_up_chase, report_digest` |
| IND-04 | `ecommerce` | Ecommerce | Recover abandoned carts, sync inventory, and handle support tickets. | Cart age, stock change, support request, or order event. | Cart recovery, stockout rate, and ticket resolution/SLA. | `monitor_alert, follow_up_chase, sync_handoff, triage_route, report_digest` |
| IND-05 | `education_training` | Education & Training | Handle enrolments, attendance, learner communication, and tuition administration. | Enrollment or attendance event, due date, or missing document. | Enrollment completion, attendance, and response/collection time. | `intake_normalize, schedule_coordinate, follow_up_chase, reconcile_audit` |
| IND-06 | `healthcare_medical_practices` | Healthcare & Medical Practices | Confirm appointments, chase no-shows, send reminders, and handle billing administration. | Appointment, cancellation/no-show, or billing aging event. | Confirmed appointment rate, no-show rate, and unresolved billing. | `schedule_coordinate, follow_up_chase, triage_route, reconcile_audit` |
| IND-07 | `hospitality` | Hospitality | Handle reservations, guest feedback, and housekeeping coordination. | Reservation/status change, guest message, or room task. | Occupancy/response, room turnaround, and feedback resolution. | `schedule_coordinate, triage_route, sync_handoff, monitor_alert` |
| IND-08 | `it_services_msps` | IT Services & MSPs | Triage tickets, monitor SLAs and backups, and handle client onboarding. | Ticket/alert, SLA threshold, backup result, or client intake. | Mean time to triage/resolve, SLA breach rate, and onboarding time. | `triage_route, monitor_alert, intake_normalize, report_digest, approval_publish` |
| IND-09 | `insurance_agencies` | Insurance Agencies | Follow up leads, chase renewals, and issue certificates. | Lead/renewal date, missing condition, or certificate request. | Renewal retention, condition aging, and certificate turnaround. | `follow_up_chase, extract_structure, approval_publish, report_digest` |
| IND-10 | `law_firms` | Law Firms | Handle client intake, conflict checks, document drafts, and billing administration. | Intake, new matter, document request, or invoice aging. | Intake-to-review time, conflict turnaround, and billing aging. | `intake_normalize, triage_route, extract_structure, approval_publish, follow_up_chase` |
| IND-11 | `logistics_freight` | Logistics & Freight | Flag exceptions, book carriers, file proof of delivery, and notify customers. | Shipment/status event, delay, missing POD, or booking request. | Exception resolution, on-time delivery, and POD completeness. | `monitor_alert, triage_route, schedule_coordinate, sync_handoff, follow_up_chase` |
| IND-12 | `marketing_social_media_agencies` | Marketing & Social Media Agencies | Schedule content, pull reporting decks, and chase retainer leads. | Content calendar, reporting period, lead/event, or approval request. | Publish-on-time rate, reporting cycle time, and lead response. | `approval_publish, schedule_coordinate, report_digest, follow_up_chase, extract_structure` |
| IND-13 | `mortgage_brokers` | Mortgage Brokers | Qualify borrowers, chase conditions, and keep loan files moving toward close. | Application, missing condition, or lender/status event. | Condition aging, application-to-close time, and file completeness. | `intake_normalize, extract_structure, triage_route, follow_up_chase, report_digest` |
| IND-14 | `property_management` | Property Management | Answer tenant inquiries, chase rent, log work orders, and file leases. | Tenant message, rent aging, maintenance request, or lease event. | Response time, rent aging, and work-order turnaround. | `intake_normalize, triage_route, follow_up_chase, sync_handoff, extract_structure` |
| IND-15 | `real_estate` | Real Estate | Answer portal leads, book viewings, and keep listing paperwork filed. | Lead/event, viewing request, or missing listing document. | Lead response, viewing conversion, and document completeness. | `intake_normalize, follow_up_chase, schedule_coordinate, extract_structure, report_digest` |
| IND-16 | `recruiting_staffing` | Recruiting & Staffing | Screen candidates, schedule interviews, and keep roles filled. | Application, stage change, interview availability, or offer condition. | Time to screen/schedule/fill and candidate response. | `extract_structure, triage_route, schedule_coordinate, follow_up_chase, report_digest` |
| IND-17 | `saas` | SaaS | Turn MQLs into demos, keep churn low, and ship faster. | Lead/product event, renewal/churn signal, or CI/PR/release event. | Conversion, churn/renewal, and release cycle time. | `triage_route, follow_up_chase, monitor_alert, sync_handoff, report_digest` |

## 170-cell current-readiness delta matrix

Schema: `cell_id = industry_id:dimension_id`. The profile foreign key is
intentional: it binds each row to the exact job/trigger/outcome/atom pressure
above. `STD-Dxx` pins the dimension standards, `RF-Dxx` names the exact local
and proposed readiness fields, and `Pxx` is the dimension's falsifiable
read-only probe. Every row is `readiness_unexecuted`; this is not a negative
capability result and does not claim a wave-5 repository observation.

| Cell ID | Industry profile | Dimension / standards profile | Readiness fields | Evidence anchor | Probe | Cell gap | Source state | Readiness state |
|---|---|---|---|---|---|---|
| `accounting_firms:demand_atom_fit` | IND-01 / `accounting_firms` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#accounting_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `accounting_firms:workflow_behavior` | IND-01 / `accounting_firms` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#accounting_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `accounting_firms:data_model` | IND-01 / `accounting_firms` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#accounting_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `accounting_firms:integration_surface` | IND-01 / `accounting_firms` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#accounting_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `accounting_firms:ui_assembly` | IND-01 / `accounting_firms` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#accounting_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `accounting_firms:agent_authority` | IND-01 / `accounting_firms` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#accounting_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `accounting_firms:verification_eval` | IND-01 / `accounting_firms` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#accounting_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `accounting_firms:provenance_rights` | IND-01 / `accounting_firms` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#accounting_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `accounting_firms:runtime_deployment` | IND-01 / `accounting_firms` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#accounting_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `accounting_firms:economics_maintenance` | IND-01 / `accounting_firms` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#accounting_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `construction:demand_atom_fit` | IND-02 / `construction` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#construction (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `construction:workflow_behavior` | IND-02 / `construction` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#construction (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `construction:data_model` | IND-02 / `construction` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#construction (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `construction:integration_surface` | IND-02 / `construction` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#construction (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `construction:ui_assembly` | IND-02 / `construction` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#construction (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `construction:agent_authority` | IND-02 / `construction` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#construction (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `construction:verification_eval` | IND-02 / `construction` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#construction (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `construction:provenance_rights` | IND-02 / `construction` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#construction (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `construction:runtime_deployment` | IND-02 / `construction` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#construction (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `construction:economics_maintenance` | IND-02 / `construction` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#construction (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `course_creators:demand_atom_fit` | IND-03 / `course_creators` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#course_creators (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `course_creators:workflow_behavior` | IND-03 / `course_creators` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#course_creators (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `course_creators:data_model` | IND-03 / `course_creators` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#course_creators (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `course_creators:integration_surface` | IND-03 / `course_creators` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#course_creators (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `course_creators:ui_assembly` | IND-03 / `course_creators` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#course_creators (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `course_creators:agent_authority` | IND-03 / `course_creators` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#course_creators (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `course_creators:verification_eval` | IND-03 / `course_creators` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#course_creators (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `course_creators:provenance_rights` | IND-03 / `course_creators` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#course_creators (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `course_creators:runtime_deployment` | IND-03 / `course_creators` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#course_creators (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `course_creators:economics_maintenance` | IND-03 / `course_creators` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#course_creators (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `ecommerce:demand_atom_fit` | IND-04 / `ecommerce` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#ecommerce (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `ecommerce:workflow_behavior` | IND-04 / `ecommerce` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#ecommerce (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `ecommerce:data_model` | IND-04 / `ecommerce` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#ecommerce (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `ecommerce:integration_surface` | IND-04 / `ecommerce` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#ecommerce (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `ecommerce:ui_assembly` | IND-04 / `ecommerce` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#ecommerce (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `ecommerce:agent_authority` | IND-04 / `ecommerce` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#ecommerce (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `ecommerce:verification_eval` | IND-04 / `ecommerce` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#ecommerce (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `ecommerce:provenance_rights` | IND-04 / `ecommerce` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#ecommerce (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `ecommerce:runtime_deployment` | IND-04 / `ecommerce` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#ecommerce (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `ecommerce:economics_maintenance` | IND-04 / `ecommerce` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#ecommerce (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `education_training:demand_atom_fit` | IND-05 / `education_training` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#education_training (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `education_training:workflow_behavior` | IND-05 / `education_training` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#education_training (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `education_training:data_model` | IND-05 / `education_training` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#education_training (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `education_training:integration_surface` | IND-05 / `education_training` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#education_training (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `education_training:ui_assembly` | IND-05 / `education_training` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#education_training (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `education_training:agent_authority` | IND-05 / `education_training` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#education_training (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `education_training:verification_eval` | IND-05 / `education_training` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#education_training (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `education_training:provenance_rights` | IND-05 / `education_training` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#education_training (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `education_training:runtime_deployment` | IND-05 / `education_training` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#education_training (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `education_training:economics_maintenance` | IND-05 / `education_training` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#education_training (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `healthcare_medical_practices:demand_atom_fit` | IND-06 / `healthcare_medical_practices` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#healthcare_medical_practices (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `healthcare_medical_practices:workflow_behavior` | IND-06 / `healthcare_medical_practices` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#healthcare_medical_practices (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `healthcare_medical_practices:data_model` | IND-06 / `healthcare_medical_practices` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#healthcare_medical_practices (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `healthcare_medical_practices:integration_surface` | IND-06 / `healthcare_medical_practices` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#healthcare_medical_practices (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `healthcare_medical_practices:ui_assembly` | IND-06 / `healthcare_medical_practices` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#healthcare_medical_practices (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `healthcare_medical_practices:agent_authority` | IND-06 / `healthcare_medical_practices` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#healthcare_medical_practices (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `healthcare_medical_practices:verification_eval` | IND-06 / `healthcare_medical_practices` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#healthcare_medical_practices (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `healthcare_medical_practices:provenance_rights` | IND-06 / `healthcare_medical_practices` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#healthcare_medical_practices (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `healthcare_medical_practices:runtime_deployment` | IND-06 / `healthcare_medical_practices` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#healthcare_medical_practices (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `healthcare_medical_practices:economics_maintenance` | IND-06 / `healthcare_medical_practices` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#healthcare_medical_practices (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `hospitality:demand_atom_fit` | IND-07 / `hospitality` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#hospitality (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `hospitality:workflow_behavior` | IND-07 / `hospitality` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#hospitality (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `hospitality:data_model` | IND-07 / `hospitality` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#hospitality (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `hospitality:integration_surface` | IND-07 / `hospitality` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#hospitality (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `hospitality:ui_assembly` | IND-07 / `hospitality` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#hospitality (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `hospitality:agent_authority` | IND-07 / `hospitality` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#hospitality (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `hospitality:verification_eval` | IND-07 / `hospitality` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#hospitality (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `hospitality:provenance_rights` | IND-07 / `hospitality` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#hospitality (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `hospitality:runtime_deployment` | IND-07 / `hospitality` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#hospitality (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `hospitality:economics_maintenance` | IND-07 / `hospitality` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#hospitality (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `it_services_msps:demand_atom_fit` | IND-08 / `it_services_msps` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#it_services_msps (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `it_services_msps:workflow_behavior` | IND-08 / `it_services_msps` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#it_services_msps (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `it_services_msps:data_model` | IND-08 / `it_services_msps` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#it_services_msps (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `it_services_msps:integration_surface` | IND-08 / `it_services_msps` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#it_services_msps (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `it_services_msps:ui_assembly` | IND-08 / `it_services_msps` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#it_services_msps (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `it_services_msps:agent_authority` | IND-08 / `it_services_msps` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#it_services_msps (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `it_services_msps:verification_eval` | IND-08 / `it_services_msps` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#it_services_msps (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `it_services_msps:provenance_rights` | IND-08 / `it_services_msps` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#it_services_msps (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `it_services_msps:runtime_deployment` | IND-08 / `it_services_msps` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#it_services_msps (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `it_services_msps:economics_maintenance` | IND-08 / `it_services_msps` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#it_services_msps (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `insurance_agencies:demand_atom_fit` | IND-09 / `insurance_agencies` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#insurance_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `insurance_agencies:workflow_behavior` | IND-09 / `insurance_agencies` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#insurance_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `insurance_agencies:data_model` | IND-09 / `insurance_agencies` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#insurance_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `insurance_agencies:integration_surface` | IND-09 / `insurance_agencies` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#insurance_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `insurance_agencies:ui_assembly` | IND-09 / `insurance_agencies` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#insurance_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `insurance_agencies:agent_authority` | IND-09 / `insurance_agencies` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#insurance_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `insurance_agencies:verification_eval` | IND-09 / `insurance_agencies` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#insurance_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `insurance_agencies:provenance_rights` | IND-09 / `insurance_agencies` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#insurance_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `insurance_agencies:runtime_deployment` | IND-09 / `insurance_agencies` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#insurance_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `insurance_agencies:economics_maintenance` | IND-09 / `insurance_agencies` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#insurance_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `law_firms:demand_atom_fit` | IND-10 / `law_firms` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#law_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `law_firms:workflow_behavior` | IND-10 / `law_firms` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#law_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `law_firms:data_model` | IND-10 / `law_firms` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#law_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `law_firms:integration_surface` | IND-10 / `law_firms` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#law_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `law_firms:ui_assembly` | IND-10 / `law_firms` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#law_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `law_firms:agent_authority` | IND-10 / `law_firms` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#law_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `law_firms:verification_eval` | IND-10 / `law_firms` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#law_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `law_firms:provenance_rights` | IND-10 / `law_firms` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#law_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `law_firms:runtime_deployment` | IND-10 / `law_firms` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#law_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `law_firms:economics_maintenance` | IND-10 / `law_firms` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#law_firms (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `logistics_freight:demand_atom_fit` | IND-11 / `logistics_freight` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#logistics_freight (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `logistics_freight:workflow_behavior` | IND-11 / `logistics_freight` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#logistics_freight (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `logistics_freight:data_model` | IND-11 / `logistics_freight` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#logistics_freight (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `logistics_freight:integration_surface` | IND-11 / `logistics_freight` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#logistics_freight (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `logistics_freight:ui_assembly` | IND-11 / `logistics_freight` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#logistics_freight (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `logistics_freight:agent_authority` | IND-11 / `logistics_freight` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#logistics_freight (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `logistics_freight:verification_eval` | IND-11 / `logistics_freight` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#logistics_freight (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `logistics_freight:provenance_rights` | IND-11 / `logistics_freight` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#logistics_freight (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `logistics_freight:runtime_deployment` | IND-11 / `logistics_freight` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#logistics_freight (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `logistics_freight:economics_maintenance` | IND-11 / `logistics_freight` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#logistics_freight (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `marketing_social_media_agencies:demand_atom_fit` | IND-12 / `marketing_social_media_agencies` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#marketing_social_media_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `marketing_social_media_agencies:workflow_behavior` | IND-12 / `marketing_social_media_agencies` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#marketing_social_media_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `marketing_social_media_agencies:data_model` | IND-12 / `marketing_social_media_agencies` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#marketing_social_media_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `marketing_social_media_agencies:integration_surface` | IND-12 / `marketing_social_media_agencies` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#marketing_social_media_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `marketing_social_media_agencies:ui_assembly` | IND-12 / `marketing_social_media_agencies` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#marketing_social_media_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `marketing_social_media_agencies:agent_authority` | IND-12 / `marketing_social_media_agencies` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#marketing_social_media_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `marketing_social_media_agencies:verification_eval` | IND-12 / `marketing_social_media_agencies` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#marketing_social_media_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `marketing_social_media_agencies:provenance_rights` | IND-12 / `marketing_social_media_agencies` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#marketing_social_media_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `marketing_social_media_agencies:runtime_deployment` | IND-12 / `marketing_social_media_agencies` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#marketing_social_media_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `marketing_social_media_agencies:economics_maintenance` | IND-12 / `marketing_social_media_agencies` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#marketing_social_media_agencies (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `mortgage_brokers:demand_atom_fit` | IND-13 / `mortgage_brokers` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#mortgage_brokers (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `mortgage_brokers:workflow_behavior` | IND-13 / `mortgage_brokers` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#mortgage_brokers (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `mortgage_brokers:data_model` | IND-13 / `mortgage_brokers` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#mortgage_brokers (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `mortgage_brokers:integration_surface` | IND-13 / `mortgage_brokers` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#mortgage_brokers (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `mortgage_brokers:ui_assembly` | IND-13 / `mortgage_brokers` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#mortgage_brokers (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `mortgage_brokers:agent_authority` | IND-13 / `mortgage_brokers` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#mortgage_brokers (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `mortgage_brokers:verification_eval` | IND-13 / `mortgage_brokers` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#mortgage_brokers (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `mortgage_brokers:provenance_rights` | IND-13 / `mortgage_brokers` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#mortgage_brokers (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `mortgage_brokers:runtime_deployment` | IND-13 / `mortgage_brokers` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#mortgage_brokers (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `mortgage_brokers:economics_maintenance` | IND-13 / `mortgage_brokers` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#mortgage_brokers (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `property_management:demand_atom_fit` | IND-14 / `property_management` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#property_management (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `property_management:workflow_behavior` | IND-14 / `property_management` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#property_management (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `property_management:data_model` | IND-14 / `property_management` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#property_management (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `property_management:integration_surface` | IND-14 / `property_management` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#property_management (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `property_management:ui_assembly` | IND-14 / `property_management` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#property_management (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `property_management:agent_authority` | IND-14 / `property_management` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#property_management (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `property_management:verification_eval` | IND-14 / `property_management` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#property_management (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `property_management:provenance_rights` | IND-14 / `property_management` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#property_management (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `property_management:runtime_deployment` | IND-14 / `property_management` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#property_management (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `property_management:economics_maintenance` | IND-14 / `property_management` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#property_management (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `real_estate:demand_atom_fit` | IND-15 / `real_estate` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#real_estate (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `real_estate:workflow_behavior` | IND-15 / `real_estate` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#real_estate (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `real_estate:data_model` | IND-15 / `real_estate` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#real_estate (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `real_estate:integration_surface` | IND-15 / `real_estate` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#real_estate (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `real_estate:ui_assembly` | IND-15 / `real_estate` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#real_estate (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `real_estate:agent_authority` | IND-15 / `real_estate` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#real_estate (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `real_estate:verification_eval` | IND-15 / `real_estate` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#real_estate (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `real_estate:provenance_rights` | IND-15 / `real_estate` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#real_estate (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `real_estate:runtime_deployment` | IND-15 / `real_estate` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#real_estate (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `real_estate:economics_maintenance` | IND-15 / `real_estate` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#real_estate (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `recruiting_staffing:demand_atom_fit` | IND-16 / `recruiting_staffing` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#recruiting_staffing (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `recruiting_staffing:workflow_behavior` | IND-16 / `recruiting_staffing` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#recruiting_staffing (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `recruiting_staffing:data_model` | IND-16 / `recruiting_staffing` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#recruiting_staffing (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `recruiting_staffing:integration_surface` | IND-16 / `recruiting_staffing` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#recruiting_staffing (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `recruiting_staffing:ui_assembly` | IND-16 / `recruiting_staffing` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#recruiting_staffing (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `recruiting_staffing:agent_authority` | IND-16 / `recruiting_staffing` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#recruiting_staffing (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `recruiting_staffing:verification_eval` | IND-16 / `recruiting_staffing` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#recruiting_staffing (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `recruiting_staffing:provenance_rights` | IND-16 / `recruiting_staffing` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#recruiting_staffing (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `recruiting_staffing:runtime_deployment` | IND-16 / `recruiting_staffing` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#recruiting_staffing (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `recruiting_staffing:economics_maintenance` | IND-16 / `recruiting_staffing` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#recruiting_staffing (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |
| `saas:demand_atom_fit` | IND-17 / `saas` | D01 / `STD-D01` | `RF-D01` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#saas (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S01/S02` | `P01` | `G-DOMAIN-ATOM-REVIEW` | `observed` | `readiness_unexecuted` |
| `saas:workflow_behavior` | IND-17 / `saas` | D02 / `STD-D02` | `RF-D02` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#saas (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S03/S06/S07` | `P02` | `G-STATE-TRANSITION-RECEIPT` | `observed` | `readiness_unexecuted` |
| `saas:data_model` | IND-17 / `saas` | D03 / `STD-D03` | `RF-D03` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#saas (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S04/S05/S26` | `P03` | `G-SOURCE-TRUTH-RLS` | `observed` | `readiness_unexecuted` |
| `saas:integration_surface` | IND-17 / `saas` | D04 / `STD-D04` | `RF-D04` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#saas (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S05/S06/S07/S08/S09` | `P04` | `G-INTEGRATION-CONTRACT` | `observed` | `readiness_unexecuted` |
| `saas:ui_assembly` | IND-17 / `saas` | D05 / `STD-D05` | `RF-D05` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#saas (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S12/S13` | `P05` | `G-VISUAL-A11Y` | `observed` | `readiness_unexecuted` |
| `saas:agent_authority` | IND-17 / `saas` | D06 / `STD-D06` | `RF-D06` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#saas (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S08/S09/S10/S11/S25` | `P06` | `G-AUTHORITY-RECEIPT` | `observed` | `readiness_unexecuted` |
| `saas:verification_eval` | IND-17 / `saas` | D07 / `STD-D07` | `RF-D07` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#saas (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S28` | `P07` | `G-EVAL-RECEIPT` | `observed` | `readiness_unexecuted` |
| `saas:provenance_rights` | IND-17 / `saas` | D08 / `STD-D08` | `RF-D08` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#saas (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S14/S15/S16/S17/S18/S19/S20/S21/S22` | `P08` | `G-RIGHTS-SBOM` | `observed` | `readiness_unexecuted` |
| `saas:runtime_deployment` | IND-17 / `saas` | D09 / `STD-D09` | `RF-D09` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#saas (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S20/S26/S27` | `P09` | `G-RUNTIME-ROLLBACK` | `observed` | `readiness_unexecuted` |
| `saas:economics_maintenance` | IND-17 / `saas` | D10 / `STD-D10` | `RF-D10` | `E:research/actionmodel-long-run/outputs/verticals/catalogue.json#saas (2026-08-26, job/trigger/outcome/atom_pressure); wave-5 standards refresh; S02/S20/S24/S27` | `P10` | `G-COST-MAINTENANCE` | `observed` | `readiness_unexecuted` |


### Matrix accounting

| Quantity | Required | Mapped | Evidence |
|---|---:|---:|---|
| Catalogue industries | 17 | 17 | `IND-01`–`IND-17`, exact IDs from `catalogue.json` |
| Matrix dimensions | 10 | 10 | `STD-D01`–`STD-D10` and `RF-D01`–`RF-D10` |
| Cartesian cells | 170 | 170 | One explicit row per industry×dimension pair above |
| Standards/source anchors | 170 | 170 | Every row has catalogue path plus wave-5 standards source IDs |
| Probe references | 10 | 170 references | Each cell points to its dimension probe; designs only |
| Wave-4 combined repository floor | 30 per cell | inherited | Program-declared prior floor; separate from standards readiness |
| Wave-5 repository delta | 10 per cell | not claimed here | Other lanes own indices 31–40; this lane has zero repository execution receipts |
| Wave-5 combined repository floor | 40 per cell | not claimed here | Parent arithmetic only; standards readiness is independent |
| Remaining parent research slots | 10,200 | reserved | Open backlog toward 17,000; not a capability or demand judgment |



## Readiness semantics and prioritized next-review gaps

The matrix is a readiness map, not a pass/fail evaluation. All 170 rows are
`profiled_probe_ready` for a future read-only review and `readiness_unexecuted`
for local evidence. A standards citation supplies a target; only a receipt can
advance a cell.

| Priority | Gap ID | Applies to | Missing evidence | Minimum next gate |
|---|---|---|---|---|
| P0 | `G-AUTHORITY-RECEIPT` | All 17 cells in `agent_authority`; every cell with write/publish/browser pressure | Principal, actor chain, tenant/resource, policy decision, approval, expiry, replay, idempotency, effect, recovery | Synthetic deny/replay/scope-escalation fixture; no real effect |
| P0 | `G-RIGHTS-SBOM` | All 17 cells in `provenance_rights`; every cell whose block may be transformed or registered | File/snippet rights spans, source/build/deploy BOMs, transform lineage, attestation, trust root | Disposable mixed-license fixture and digest mutation; human review route |
| P0 | `G-RUNTIME-ROLLBACK` | All 17 cells in `runtime_deployment`; especially healthcare, law, mortgage, insurance, finance | Tenant/RLS, workload identity, secret scope, egress deny, resource limit, rollout, rollback/compensation | Disposable two-tenant and deny-egress fixture; no deployment |
| P0 | `G-EVAL-RECEIPT` | All 17 cells in `verification_eval`; every readiness claim | Healthy fixture/oracle, held-out/mutated negatives, seed/reset, raw trace, verdict taxonomy | Frozen synthetic matrix with at least three resets/seeds; no model run here |
| P1 | `G-SOURCE-TRUTH-RLS` | All 17 `data_model` cells | Exact owner, entity scope, freshness, sensitivity, permissions, and source-of-truth read-back | Synthetic tenant/permission/stale-record fixture |
| P1 | `G-INTEGRATION-CONTRACT` | All 17 `integration_surface` cells | Pinned dialect/version/digest, compatibility policy, provider/consumer negative cases | Mock REST/event/MCP/A2A provider pair |
| P1 | `G-STATE-TRANSITION-RECEIPT` | All 17 `workflow_behavior` cells | State machine, event ordering, retry, timeout, handoff, idempotency | Duplicate/out-of-order/timeout workflow fixture |
| P1 | `G-VISUAL-A11Y` | All 17 `ui_assembly` cells | Token context/resolved digest, component states, WCAG/ARIA cases, visual environment | Token mutation, keyboard/focus, accessibility, and screenshot fixture |
| P2 | `G-COST-MAINTENANCE` | All 17 `economics_maintenance` cells | Cost units, budgets, freshness, owner/SLO, continuity, portability, exit | FOCUS-shaped cost fixture plus price/outage/exit mutations |
| P2 | `G-DOMAIN-ATOM-REVIEW` | All 17 `demand_atom_fit` cells | Direct domain evidence and held-out job/atom outcome | Independent job-to-atom review with negative near-neighbor |

The same gap code on 17 rows means the same standards/readiness family is
missing, not that all industries have identical demand or risk. The exact job
and atom pressure remain in each `IND-xx` profile. No broad repository tag or
catalogue card is upgraded to an authenticated vertical fact.

## Deepened applicability gaps

### G-RIGHTS — rights, SBOM, attestation, and trust composition

The v0 `provenance` object is a useful pointer but cannot represent the full
lineage needed for a transformed block. The minimum future receipt graph is:

`source URL/revision/SWHID → selected file/snippet spans → rights evidence →
transform recipe → source/build/deploy BOM views → subject digest → signed
attestation → registry trust/transparency decision`.

SPDX 3.0.1 and REUSE 3.3 express rights/attribution metadata; CycloneDX 1.7
supports broader BOM and formulation/VEX relationships; SLSA 1.2 and in-toto
bind subjects to materials, steps, builders, and predicates; SWHID 1.1/ISO
18670 supplies intrinsic identity; OCI 1.1.0 supplies artifact/referrer
identity; TUF 1.0.35, Sigstore, and SCITT RFC 9943 cover different trust and
transparency concerns. None decides legal permission or semantic safety.

Required receipt fields: source revision, source identity, exact spans and
digests, declared/detected/concluded license expressions, copyright evidence,
scanner/version/command, exclusions, policy, escalation, BOM view, attestation
predicate/signature/expiry, trust root/threshold, subject digest, and status.
Missing coverage, generated/vendored ambiguity, changed materials, expired
metadata, and untrusted issuers remain `unknown`, `needs_direct_review`, or
`blocked`; they never become `clean` or `admitted` by name recognition.

### G-TRANSFORM — AST/CST, codemod, retrieval, and design-token receipts

Tree-sitter proves that a pinned grammar produced a concrete syntax tree and
ranges; LSP 3.17 supplies navigation/edit/diagnostic protocol surfaces; Comby
and Semgrep provide structural matching/rewrite mechanisms; Coccinelle provides
SmPL semantic patches in C; CodeQL supplies query/data-flow analysis. They
occupy different levels and none proves behavior preservation. A future
`transform_receipt` must record parser/server/tool version, language, exact
spans, retrieval query, recipe, before/after digests, diff, parse/type/build/
behavior checks, rights re-scan, and reviewer/policy identity.

DTCG Format and Resolver 2025.10 should be pinned as token interchange and
context-resolution targets, not as visual-quality scores. The token receipt
must preserve authored input, selected contexts, resolution order, resolved
digest, consumed/unused/missing tokens, fallback policy, and translator
version. WCAG 2.2/WAI-ARIA 1.2, axe, Storybook, and Playwright remain separate
accessibility, interaction, and pixel evidence layers.

### G-AUTH — MCP, A2A, OAuth, policy, approval, and authority

MCP 2025-11-25 describes client/server session, capability, tool, resource, and
prompt exchange; the official project also has a 2026-07-28 release candidate,
so this packet pins the stable 2025-11-25 revision and records the drift. A2A
1.0.0 describes agent cards, task/artifact/status/cancellation and versioning.
OAuth RAR RFC 9396 and token exchange RFC 8693 contribute structured resource/
action and delegation/actor concepts. RFC 9421 can sign selected HTTP
components and freshness parameters. Trace Context correlates distributed work.
Policy engines can produce a versioned allow/deny decision.

The local inference is still an `action_contract`, not a claimed existing field:
principal, actor chain, tenant, resource, operation, risk class, input/output
schema, approval, authorization scopes/audience, policy version, expiry,
idempotency, replay protection, trace, effect, and recovery. No protocol alone
answers whether a business action is allowed, whether a user truly approved
the exact payload, or how to undo an external effect.

### G-EVAL — validity, safety, determinism, and recovery

Repository, contract, UI, tool-state, adversarial, GUI, repeated-pass, and
operations evidence must remain separate. A future eval receipt must include
task/fixture/repository revision, prompt/model/provider, seed/repetition,
environment image, tool definitions/permissions, state reset, scorer version,
raw trace, cost/latency, benchmark-health verdict, and distinct result classes:
`safe_success`, `unsafe_success`, `refusal`, `incomplete`, `recovered`, and
`blocked`.

SWE-bench-family scores, ToolSandbox, AgentDojo, WorkArena++, BrowserGym, and
OSWorld are useful designs and external evidence, not Action Model results.
Broken or contaminated tasks, incomplete oracles, single-seed results, and
unsafe side effects masked as capability are falsifiers. The wave-3 probe is a
read-only fixture design; no model, tool, contract, or product eval ran.

### G-RUNTIME — sandbox, egress, tenancy, deployment, rollback

Runtime readiness has four independent boundaries: process/image/module and
resource limits; workload identity and tenant binding; network/egress including
DNS, direct IP, metadata, and proxy paths; and data/effect ownership including
secrets, approval, and compensation. OCI, Kubernetes NetworkPolicy, NIST
SP 800-207, SPIFFE, WASI 0.2, Gatekeeper, Argo, and rollout-undo docs inform
these boundaries but do not instantiate them.

The future runtime receipt must name the enforcement plugin/provider, runtime
and image/module digest, OS/architecture/limits, tenant/workload identity,
secret scope, allowed/denied destinations, rollout revision, health gates, and
rollback/compensation result. NetworkPolicy is L3/L4 and requires an enforcing
plugin; a manifest rollback does not undo data or external effects. Any denied
path that succeeds or any effect with no recovery owner is a blocker.

### G-ECON — cost units, maintenance, continuity, and exit

FOCUS v1.2 gives a pinned schema for normalized billing data, including SaaS
cost concepts; the official index exposes newer versions, so v1.2 is a bounded
compatibility target rather than “latest.” ISO/IEC 25010:2023 contributes
maintainability, portability, and performance-quality dimensions. OpenFeature
is useful for flag/kill-switch interfaces, but its public specification page
does not expose one frozen release number and is therefore `version not stated`.

The proposed economics receipt must join cost-unit definitions, budget and
latency limits, evidence-storage cost, provider bill reconciliation, dependency
freshness, maintenance owner/SLO, continuity signal, portability, flag context,
and a rebuild/exit result. Billing-schema conformance cannot prove total cost,
vendor continuity, support quality, or exit success.

## Falsifiable read-only probe designs

These probes are designs only. They use synthetic fixtures, disposable state, or
mock providers and must not be described as executed evidence.

| Probe | Dimension | Synthetic design | Negative/replay/timeout/recovery cases | Pass/fail observation to retain |
|---|---|---|---|---|
| `P01` | `demand_atom_fit` | Three synthetic job cards per archetype, each with exact industry/profile, atom, trigger, outcome, and a near-neighbor | Generic/cross-vertical mapping, disagreement, uncited outcome, or no post-condition fails | Job/atom trace, independent mappings, rationale, source IDs, fixture outcome |
| `P02` | `workflow_behavior` | `new → queued → approved → complete` plus `rejected`/`needs_human`, represented with versioned event envelopes | Duplicate event, out-of-order event, missing ack, unknown type, timeout, and retry must not double-complete or imply approval | Event IDs, ordered transition trace, retry/handoff owner, terminal state |
| `P03` | `data_model` | Two synthetic tenants, sensitive/non-sensitive rows, stale row, missing permission, unknown field, and migration fixture | Cross-tenant read/write, stale acceptance without policy, privilege via unknown field, or round-trip failure fails | Schema digest, auth/tenant context, permission/RLS result, freshness decision |
| `P04` | `integration_surface` | Mock REST operation, event, MCP tool, and A2A task joined to pinned consumer/provider definitions | Unknown field, incompatible version, timeout, duplicate retry, capability drift, and cancellation must be explicit | Contract/version/digest, generated artifacts, raw traces, negative verdicts |
| `P05` | `ui_assembly` | Synthetic button/table/empty/error/approval-dialog states under light/dark/high-contrast/reduced-motion contexts | Missing token, fallback drift, focus/name/contrast/keyboard/state mutation, or unexplained screenshot drift fails | Token/resolver digests, usage, state matrix, accessibility and visual receipts |
| `P06` | `agent_authority` | Read-only, reversible-write, and irreversible-effect mock actions with policy/approval records | Wrong tenant/audience, scope escalation, expired approval, replayed nonce, body mutation, schema drift, duplicate, partial failure | Actor chain, policy/approval, signature, idempotency, trace, pre/post/recovery |
| `P07` | `verification_eval` | Valid, malformed, held-out, mutated, negative, and recovery fixtures across build/contract/UI/tool/safety layers | Broken oracle, contamination, reset leakage, unstable seeds, or unsafe success counted as capability fails | Fixture health, revisions, seed/reset, raw trace, scorer, distinct verdicts |
| `P08` | `provenance_rights` | Synthetic MIT/Apache/GPL-reference/unlicensed/generated/vendored/snippet files plus artifact and trust metadata | Misclassification, changed material verification, stale/revoked key, rollback target, missing referrer, or unjoinable span fails | Rights spans, BOM views, attestation, trust-root decision, review route |
| `P09` | `runtime_deployment` | Disposable two-tenant runtime with default-deny egress, DNS exception, allowed host, metadata/direct-IP targets, limits, canary, and compensation mock | Cross-tenant access, DNS rebinding, proxy bypass, secret escape, resource bypass, crash-after-effect, or incomplete rollback fails | Runtime/plugin/image/identity digests, egress trace, abort/compensation receipt |
| `P10` | `economics_maintenance` | Fixed synthetic build costed by compute, tokens, storage, verification, screenshot, trace retention, and review units | Price change, provider outage, stale dependency, evidence-retention increase, flag kill, or exit rebuild failure fails | FOCUS-shaped rows, reconciliation, owner/freshness, outage/exit result |

## Wave-5 bounded probe invariants

Each dimension probe is a bounded synthetic read-only or mock-effect design.
Every run must retain the five cases below; omission of any case leaves the
dimension `unobserved`. No real tenant, credential, external effect, client
data, deployment, or admission is in scope.

| Probe | Dimension | Negative case | Replay case | Timeout case | Recovery case | Ownership case |
|---|---|---|---|---|---|---|
| `P01` | `demand_atom_fit` | Generic or cross-vertical job mapping | Same job card submitted twice | Missing source/outcome deadline | Route uncertain mapping to human review | Exact industry owner and atom steward required |
| `P02` | `workflow_behavior` | Unknown event or illegal transition | Duplicate event ID | Missing ack or delayed handoff | `needs_human` terminal route | Named owner for every state transition |
| `P03` | `data_model` | Unknown field or unauthorized tenant | Repeated read/write request ID | Stale source beyond freshness budget | Quarantine stale row and preserve audit | Tenant/data owner must match policy context |
| `P04` | `integration_surface` | Version/schema/capability mismatch | Duplicate request/event/task ID | Provider response exceeds deadline | Cancel and classify partial result | Provider and consumer subjects must be named |
| `P05` | `ui_assembly` | Missing token, focus name, contrast, or state | Repeated interaction with same action key | Component never resolves loading state | Error/empty/approval state remains usable | Component and token owner must be recorded |
| `P06` | `agent_authority` | Wrong scope, tenant, audience, or approval | Reused nonce/idempotency key | Policy/provider decision times out | Deny, compensate mock effect, or human handoff | Principal, actor chain, resource owner, approver |
| `P07` | `verification_eval` | Malformed, unsafe, contaminated, or oracle-broken fixture | Re-run same seed/task with reset boundary | Scorer/tool/eval deadline expires | Classify incomplete/recovered/blocked | Fixture, scorer, and policy owners named |
| `P08` | `provenance_rights` | Unlicensed, ambiguous, changed, or missing-span source | Replayed attestation/transparency statement | Key/registry verification expires | Escalate to human review; no clean verdict | Source, artifact, rights, and verifier owners |
| `P09` | `runtime_deployment` | Tenant/egress/secret/resource boundary bypass | Replayed rollout or release subject | Startup/health/rollback deadline expires | Abort and compensate mock effect | Workload, tenant, runtime, and recovery owners |
| `P10` | `economics_maintenance` | Unknown cost unit, stale dependency, or failed exit | Duplicate billing/evidence row | Budget, latency, or retention deadline | Kill flag, switch provider, or rebuild mock | Cost, maintenance, continuity, and exit owners |

A passing normative parser, schema, protocol handshake, screenshot, signature,
or cost row cannot erase a negative case. A missing owner, raw trace, or
falsifier outcome remains `unobserved` or `blocked`, never `admitted`.

## Receipt contracts for the next execution-authorized review

These are evidence shapes, not changes to `design/block-contract.schema.json`.
The presence of a proposed field below does not create an Actionist capability.

### Rights, SBOM, attestation, and trust

`rights_receipt` must contain `receipt_id`, source URL, immutable VCS revision,
SWHID/content digest, selected file/snippet spans, source digests, declared /
detected / concluded SPDX expression, copyright evidence, scanner/version/
command, policy version, exclusions, generated/vendored treatment, human
escalation, observed date, and state. `sbom_receipt` must distinguish source,
build, and deploy views and retain format/version, subject digest, component /
service/data-flow edges, generator/version, lockfile, VEX/formulation, and
freshness. `attestation_receipt` must retain predicate type/version,
subject/material digests, step, builder/issuer, signature, expiry, verifier
policy, and independent re-execution link. `trust_receipt` must retain TUF
root/threshold/key/expiry/rollback data, OCI target/referrer, Sigstore
identity/transparency reference, SCITT receipt when used, and verifier policy.

The required falsifier is a mixed-license or changed-material fixture that still
resolves as clean/trusted, or a source span that cannot be joined to the final
subject digest. No scan, BOM, signature, attestation, or registry decision was
created by this lane.

### Transform and retrieval

`transform_receipt` must retain input revision, selected spans and rights refs,
parser/grammar or LSP server version, language, retrieval query, recipe ID and
parameters, dry-run result, before/after digests, diff, parse/type/build/
behavior results, post-transform rights re-scan, and reviewer/policy identity.
Tree-sitter/CST, LSP navigation, Comby/Semgrep rewrites, Coccinelle semantic
patches, and CodeQL analysis must remain separate capabilities. A successful
parse, match, query, or rewrite is not a semantic-equivalence proof.

### Design-token and visual proof

`visual_receipt` must retain DTCG format/resolver version, authored and resolved
digests, context selection and resolution order, consumed/unused/missing tokens,
translator version, state matrix, WCAG target, ARIA cases, axe result, browser /
OS/font/viewport fingerprint, locale/color-scheme/motion settings, baseline,
masking, threshold, and status. Token validity, accessibility, interaction, and
pixel evidence are independent gates.

### Contract, authority, eval, runtime, economics

| Receipt | Required joins | Hard non-claim |
|---|---|---|
| `contract_receipt` | Contract kind/id/version/digest; provider and consumer subjects; compatibility policy; generated artifacts; positive/negative/unknown/mutated fixtures; raw trace | A valid schema or registry manifest does not prove provider behavior or business correctness |
| `action_receipt` | Principal, actor chain, tenant/resource/operation, risk, exact approval, policy version/input/decision, scope/audience/expiry, signature/body digest, nonce/idempotency, replay result, trace, pre/post effect, recovery | MCP/A2A/OAuth/signature/policy primitives do not by themselves authorize a business effect |
| `eval_receipt` | Task/fixture/repo revision; model/provider/prompt; seed/repetition; environment; tools/permissions; reset; scorer; raw trace; benchmark health; verdict, failure, cost, latency | External scores and benchmark names are not local execution evidence |
| `runtime_release_receipt` | Subject/image/module digest; runtime/OS/arch/limits; tenant/workload identity; secret scope; allowed/denied egress; BOM views; rollout health; flag context; rollback/compensation owner/result | Image identity or manifest rollback does not prove tenant isolation, egress denial, or reversal of external effects |
| `economics_receipt` | Cost units, budget, latency, evidence-retention cost, FOCUS-shaped billing row, freshness, owner/SLO, continuity, portability, exit rebuild | FOCUS conformance and quality metrics do not prove total cost, support quality, or vendor continuity |

## Standards limitations by decision type

| Decision a reader might overclaim | Evidence that can inform it | Still missing / cannot be inferred |
|---|---|---|
| Demand or vertical value | 29148 requirements records, 25010 quality model, catalogue profile, `P01` | Willingness to pay, adoption, retention, or authenticated customer outcome |
| Workflow reliability | BPMN, AsyncAPI, CloudEvents, `P02` | Broker behavior, exactly-once delivery, handoff success, external side effects |
| Data isolation | JSON Schema, OAS dialect, NIST ZTA, `P03` | Live RLS, tenant isolation, freshness, secret exposure, semantic ownership |
| Integration portability | OAS/AsyncAPI/CloudEvents, MCP, A2A, `P04` | Provider availability, credential scope, tool truth, business compatibility |
| UI quality | DTCG, WCAG, ARIA, Storybook, axe, Playwright, `P05` | Universal usability, visual taste, complete token use, all assistive technology behavior |
| Agent authority | MCP, A2A, OAuth, HTTP signatures, trace context, policy, `P06` | Business authorization, genuine approval, least authority, compensation |
| Capability/eval | 25010, 29119-3, benchmark research, `P07` | Local task health, contamination control, transfer, safe success, repeatability |
| Rights and supply chain | SPDX, REUSE, CycloneDX, SLSA, in-toto, TUF, OCI, SWHID, SCITT, Sigstore, `P08` | Legal opinion, ownership, complete dynamic inventory, semantic/runtime safety |
| Runtime and rollback | OCI, Kubernetes, NIST, SPIFFE, WASI, Argo, `P09` | Enforcement in the selected provider, full L7 egress, cross-tenant proof, undo of outside effects |
| Cost and maintenance | FOCUS, 25010, OpenFeature, OCI, `P10` | Total cost, demand forecast, vendor solvency, maintenance quality, successful exit |

## Pinned source register and access limitations

Observed date for this register is `2026-08-26`; all URLs are direct source
pages, not search-result links.

| ID | Pinned source/version | Class | Quality/access limitation |
|---|---|---|---|
| S01 | [ISO/IEC/IEEE 29148:2018](https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/07/20/72089.html), Edition 2, 2018-11; confirmed current 2024 | `N/E` | Public abstract/current record; full normative text access-limited |
| S02 | [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html), Edition 2, 2023-11 | `N/E` | Public abstract; full text access-limited; quality model not a market oracle |
| S03 | [OMG BPMN 2.0.2](https://www.omg.org/spec/BPMN/2.0.2/), formal January 2014 | `N` | Public catalog, PDF, and machine files; diagram interchange does not ensure semantic correctness |
| S04 | [JSON Schema Draft 2020-12](https://json-schema.org/draft/2020-12), published 2022-06-16 | `N` | Public; “draft” is release nomenclature and specification text outranks schema disagreement |
| S05 | [OpenAPI 3.1.1](https://spec.openapis.org/oas/v3.1.1.html) and [2024-11-10 dialect](https://spec.openapis.org/oas/3.1/dialect/2024-11-10.html) | `N` | Public; official index lists 3.2.0 too, so 3.1.1 is explicit pin, not “latest” |
| S06 | [AsyncAPI 3.1.0](https://www.asyncapi.com/docs/reference/specification/v3.1.0) | `N/D` | Official versioned page; future receipt must pin release/commit, not mutable default branch |
| S07 | [CloudEvents core 1.0 release](https://github.com/cloudevents/spec/releases/tag/ce%40v1.0.2) | `N/D` | Stable `specversion` is 1.0; repository `main` exposes later work in progress |
| S08 | [MCP 2026-07-28 specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) with [2025-11-25 comparator](https://modelcontextprotocol.io/specification/2025-11-25/basic) | `D` | Published current revision; prior version is retained for migration comparison and SDK opt-in remains explicit |
| S09 | [A2A 1.0.0](https://a2a-protocol.org/v1.0.0/specification) | `D/N-adjacent` | Public released project specification; protocol semantics are not local authority |
| S10 | [OAuth RFC 9396](https://www.rfc-editor.org/rfc/rfc9396.html), [RFC 8693](https://www.rfc-editor.org/rfc/rfc8693.html), and [RFC 9421](https://www.rfc-editor.org/rfc/rfc9421.html) | `N` | Public IETF text; app scopes, key trust, approval, and replay storage remain local |
| S11 | [W3C Trace Context Recommendation 2021-11-23](https://www.w3.org/TR/2021/REC-trace-context-1-20211123/) | `N` | Public Recommendation; correlation is not an immutable audit ledger |
| S12 | [DTCG Format 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/) and [Resolver 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-resolver-20251028/) | `N-adjacent` | Public W3C Community Group final reports, not W3C Recommendations |
| S13 | [WCAG 2.2](https://www.w3.org/TR/2024/REC-WCAG22-20241212/) and [WAI-ARIA 1.2](https://www.w3.org/TR/2023/REC-wai-aria-1.2-20230606/) | `N` | Public stable Recommendations; applicable criteria and manual AT scope remain local |
| S14 | [SPDX 3.0.1](https://spdx.github.io/spdx-spec/v3.0.1/) and [official version index](https://spdx.dev/use/specifications/) | `N/E` | 3.0.1 page is direct; official index labels 3.0 current, so pin/version drift is recorded |
| S15 | [REUSE 3.3](https://reuse.software/spec-3.3/) | `N/E` | Public specification; metadata/process conformance is not legal clearance |
| S16 | [CycloneDX overview](https://cyclonedx.org/specification/overview/), v1.7 | `N/D` | Public; BOM completeness, freshness, and generator coverage remain open |
| S17 | [SLSA v1.2](https://slsa.dev/spec/v1.2/) and [source requirements](https://slsa.dev/spec/v1.2/source-requirements) | `N/E` | Public; provenance authenticates a statement, not intent, semantic correctness, or rights |
| S18 | [in-toto Attestation Framework](https://github.com/in-toto/attestation) | `N/E` | Public framework; issuer, predicate, expiry, and independent verification are local choices |
| S19 | [TUF 1.0.35](https://github.com/theupdateframework/specification/blob/master/tuf-spec.md) | `N/E` | Public mutable repository with version macro; root custody and threshold policy remain open |
| S20 | [OCI image/distribution 1.1.0](https://opencontainers.org/posts/blog/2024-03-13-image-and-distribution-1-1/) | `N/E` | Public release note; artifact identity/transport is not runtime safety or rights proof |
| S21 | [SWHID 1.1](https://www.swhid.org/specification/v1.1/) and [ISO/IEC 18670 announcement](https://www.softwareheritage.org/software-hash-identifier-swhid/) | `N/E` | Public identity spec/announcement; archive resolution and rights remain separate |
| S22 | [SCITT RFC 9943](https://www.rfc-editor.org/rfc/rfc9943.html) | `N` | Public Proposed Standard, June 2026; issuer truth, governance, privacy, and retention are out of scope |
| S23 | [LSP 3.17](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/), [Tree-sitter](https://tree-sitter.github.io/tree-sitter/), [Comby](https://comby.dev/docs/overview), [Semgrep rules/fixes](https://semgrep.dev/docs/writing-rules/overview), [Coccinelle](https://coccinelle.gitlabpages.inria.fr/website/), [CodeQL](https://codeql.github.com/docs/codeql-overview/about-codeql/) | `N/D/E` | Public primary docs; several implementation pages do not freeze runtime versions |
| S24 | [FOCUS v1.2](https://focus.finops.org/focus-specification/v1-2/) | `N/D` | Public published release; official index exposes newer releases, so v1.2 is a compatibility pin |
| S25 | [OpenTelemetry semantic conventions 1.44.0](https://opentelemetry.io/docs/specs/semconv/) | `D` | Public docs; GenAI conventions moved to a separate repository; telemetry is not truth |
| S26 | [SPIFFE standard page](https://spiffe.io/docs/latest/spiffe-specs/), [WASI 0.2](https://wasi.dev/releases/wasi-p2), [Kubernetes NetworkPolicy](https://kubernetes.io/docs/concepts/services-networking/network-policies/) | `D/E` | Public docs; SPIFFE page and runtime/provider versions require future explicit pins; NetworkPolicy needs an enforcing plugin |
| S27 | [OpenFeature specification](https://openfeature.dev/specification/), [Argo Rollouts](https://argoproj.github.io/argo-rollouts/), and [rollout undo](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_undo/) | `D/V/E` | Public docs; OpenFeature page has no one frozen release number; rollout/flags do not undo effects |
| S28 | [SWE-bench](https://arxiv.org/abs/2310.06770), [SWE-rebench](https://swe-rebench.com/about), [ToolSandbox](https://arxiv.org/abs/2408.04682), [AgentDojo](https://proceedings.neurips.cc/paper_files/paper/2024/file/97091a5177d8dc64b1da8bf3e1f6fb54-Paper-Datasets_and_Benchmarks_Track.pdf), [WorkArena++](https://papers.nips.cc/paper_files/paper/2024/file/0b82662b6c32e887bb252a74d8cb2d5e-Paper-Datasets_and_Benchmarks_Track.pdf), [BrowserGym](https://github.com/ServiceNow/BrowserGym), [OSWorld](https://arxiv.org/abs/2404.07972) | `P/D/V/E` | Public papers/repos/leaderboards; no local validity, contamination, or transfer claim |

The preferred Perplexity adapter was unavailable in this environment because
`OPENROUTER_API_KEY` was unset; primary source pages were inspected with the
available web tool. This changes the acquisition path, not the evidence class.
Mutable branches, access-limited publisher pages, and version-not-stated docs
remain explicit limitations.

## Wave-5 direct source additions

These current-source pages were inspected on 2026-08-26 and are the direct
receipts behind `RFRESH-01`–`RFRESH-07`. They are not execution evidence.

| Refresh | Direct source | Observation / limitation |
|---|---|---|
| OpenAPI | [official index](https://spec.openapis.org/oas/) and [OAS 3.2.0](https://spec.openapis.org/oas/v3.2.0.html) | 3.2.0 and 3.1.2 are published; 3.1.1 remains the compatibility pin. |
| FOCUS | [v1.4](https://focus.finops.org/focus-specification/v1-4/) and [release context](https://focus.finops.org/what-is-focus/) | 1.4 is latest and ratified 2026-06-04; 1.2 remains the bounded comparator. |
| WASI | [releases](https://wasi.dev/releases), [v0.3](https://wasi.dev/releases/wasi-p3), and [v0.2](https://wasi.dev/releases/wasi-p2) | 0.3 is stable; 0.2 remains stable and is retained for compatibility. |
| AsyncAPI | [3.1.0](https://www.asyncapi.com/docs/reference/specification/v3.1.0) and [release notes](https://www.asyncapi.com/blog/release-notes-3.1.0) | Released version is directly addressable. |
| CloudEvents | [1.0.2 release](https://github.com/cloudevents/spec/releases/tag/ce%40v1.0.2) | Stable tag; default branch is WIP. |
| MCP | [2026-07-28 specification release](https://blog.modelcontextprotocol.io/posts/2026-07-28/) and [SDK migration guide](https://ts.sdk.modelcontextprotocol.io/v2/migration/support-2026-07-28) | Published revision; 2025-11-25 is retained as migration comparator; SDKs require explicit opt-in. |
| SPDX/SCITT | [SPDX index](https://spdx.dev/use/specifications/), [SPDX 3.0.1](https://spdx.github.io/spdx-spec/v3.0.1/), [SCITT RFC 9943](https://www.rfc-editor.org/rfc/rfc9943.html) | SPDX index labels 3.0 current; SCITT is published Proposed Standard; neither supplies legal clearance. |
| DTCG/OTel | [DTCG Format 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/) and [OTel semconv 1.44.0](https://opentelemetry.io/docs/specs/semconv/) | DTCG is a Community Group final; telemetry is correlation, not truth. |

Access-limited publisher pages, mutable branches, version-not-stated docs, and
vendor or research claims remain explicit evidence gaps.

## Validation, non-execution, and callback receipt

### Post-write smoke requirements

Smoke must prove this output is the only owned wave-5 file changed; the baseline
remains 566 lines/65655 bytes/its recorded SHA-256; wave-2, wave-3, and wave-4
hashes remain unchanged; the matrix has exactly 170 unique cells, 17 industries,
ten dimensions, ten probes, and 12 tasks; each row has `STD-Dxx`, `RF-Dxx`,
`Pxx`, an observed source anchor, and unobserved local readiness; direct URLs are
reachable or explicitly access-limited with no silent 404; and no execution,
deployment, rollback, scan, eval, contract-test, or admission claim appears.

### Explicit absent receipts

`license_scan`, source/build/deploy SBOM generation, signed attestation,
transparency/registry verification, AST/CST transform, design-token build,
contract test, authority/action harness, model or benchmark eval, sandbox/
tenant/egress test, deployment/canary, rollback/compensation, and live cost or
maintenance run are all `not_run` in this lane. Standards citations cannot supply
these receipts.

No implementation, repository copying, client-data access, deployment, production
execution, rollback, or block admission was performed or claimed by this lane.

### Observed smoke receipt

Post-write structural and source-link smoke PASS (2026-08-26). The packet has
170 unique exact cells, 17 industries, 10 dimensions, 10 unique probes plus
ten probe-invariant rows, and 12 task rows. Every matrix row has a catalogue
evidence anchor, wave-5 source IDs, `STD-Dxx`, `RF-Dxx`, `Pxx`,
`source_state=observed`, and `readiness_state=readiness_unexecuted`.

The immutable baseline is 566 lines / 65655 bytes / SHA-256
`22b4024b5163c77eca40597bda43802aca6d9e69f41e827465494ad90f8dbc3f`.
Wave-2 SHA-256 is
`6e02e43314bab63da025cf288d2270cd5d33dd30b58cfd4ed9b3e6135a365475`.
Wave-3 SHA-256 is
`98bc9657efa729334a0eac68d429223d5be8934847105e08a8ec98a81c2433f`.
Wave-4 SHA-256 is
`a545a6facb2d5ade9288a29d377f86760cdaef8a3c0d2fec25be17bb208df1f1`.
Bounded checks covered 60 direct URLs: 18 returned HTTP 200, 40 returned HTTP
206, and two ISO
publisher pages returned HTTP 403 due access limits; no URL returned 000, 404,
or 5xx. This smoke is a read-only artifact check, not an execution receipt.

### Callback protocol

After post-write verification, fresh-resolve CENA with
`/Users/shaansisodia/.local/bin/herdr pane list`; read the fresh pane with
`pane read <id> --source recent --lines 200`; send the exact callback with `pane
run`; wait two seconds; read visible content; send Enter once only if still
queued; then verify the message with `recent-unwrapped`. If identity or delivery
cannot be verified, send `BLOCKED` naming the exact operational reason. Never
reuse a cached pane ID.

Required callback:

```text
[from: RCH-STANDARDS-W5] @CENA: DONE RCH-STANDARDS-W5. 170-cell standards/readiness refresh written and smoke-verified; 566-line baseline plus Waves 2-4 packets preserved; no execution/admission claims. 0 blockers.
```

### Callback receipt

Verified on 2026-08-26 after post-write smoke. A fresh `/Users/shaansisodia/.local/bin/herdr pane list` resolved the CENA workspace `w659e02f80e5bb1` to pane `w659e02f80e5bb1-1`; a generous recent read confirmed the active W5 coordinator context. `pane run` staged the callback, visible readback confirmed the queued text, and one Enter-only retry submitted it. `recent-unwrapped` then showed the exact callback, followed by CENA acknowledging that Standards W5 returned DONE and that the 170-cell readiness refresh, preserved predecessors, and no execution/admission claims were verified. Pane IDs are volatile and must be re-resolved before later sends.

`[from: RCH-STANDARDS-W5] @CENA: DONE RCH-STANDARDS-W5. 170-cell standards/readiness refresh written and smoke-verified; 566-line baseline plus Waves 2-4 packets preserved; no execution/admission claims. 0 blockers.`

The parent `17,000`-slot / `100 observations per cell` goal remains active. Wave 5
leaves `10,200` reserved slots open and does not authorize implementation, client
data, repository copying, deployment, rollback, or block admission.
