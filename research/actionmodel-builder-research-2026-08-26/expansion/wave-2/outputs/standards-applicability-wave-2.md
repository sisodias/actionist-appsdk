# Standards applicability — Action Model Builder, wave 2

**Run:** `actionmodel-builder-research-2026-08-26`  
**Lane:** `RCH-STANDARDS-W2`  
**Wave:** `matrix-wave-2-industry-dimension-deepening`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Mode:** research and synthetic-probe design only  
**Status:** applicability matrix complete; all execution receipts remain absent  
**Output:** `research/actionmodel-builder-research-2026-08-26/expansion/wave-2/outputs/standards-applicability-wave-2.md`

This is an additive wave-2 applicability packet. It does not edit, replace, or
reinterpret the verified 566-line normative baseline:
[`standards-expansion.md`](../../../outputs/standards-expansion.md).

## Executive result

The ten matrix dimensions can each be anchored to one or more version-pinned
standards/specifications, but no standard proves the whole dimension and no
standard proves that Action Model has implemented or passed a control. The
useful unit is a typed applicability profile:

standard/spec target → local Block Contract field(s) → observable receipt to
collect later → limitation/non-claim → falsifier → synthetic read-only probe.

The local Block Contract is still v0 and intentionally narrower than this
research profile. The checked-in schema has eight top-level areas (`id`,
`kind`, `provenance`, `stack_contract`, `provides`, `requires`,
`tokens_consumed`, and `eval`). The proposed `action_contract`, evidence,
tenant/egress, release, audit, demand, and economics fields below are research
inferences, not schema changes and not implementation authorization.

No license scan, contract test, eval, sandbox test, registry verification,
deployment, rollback, client-data access, private contract, or admission was
executed for this lane.

## Immutable baseline and local contract audit

### Baseline receipt

| Check | Evidence | Result |
|---|---|---|
| Baseline path | `research/actionmodel-builder-research-2026-08-26/expansion/outputs/standards-expansion.md` | Present |
| Baseline line count | `wc -l` | `566` |
| Baseline byte count | `stat` | `65655` |
| Baseline SHA-256 | `shasum -a 256` | `22b4024b5163c77eca40597bda43802aca6d9e69f41e827465494ad90f8dbc3f` |
| Baseline treatment | Read-only input to this packet | Preserved; not edited |
| Wave program | `wave-2/WAVE-2-PROGRAM.md` | Read in full; lane is research-only |

The hash above is the hash of the verified 566-line expansion used for this
wave. It is distinct from the first-pass report hash recorded inside that
expansion. Both identities are retained rather than substituted for one
another.

### Exact local v0 fields

These are the fields available in
[`design/block-contract.schema.json`](../../../../../../design/block-contract.schema.json),
not fields inferred from the prose framework.

| Contract area | Exact v0 paths | Applicability boundary |
|---|---|---|
| Identity | `id`, `kind` | Namespaced version and block category only; no content digest or registry trust root |
| Rights/provenance | `provenance.source_url`, `.commit_sha`, `.license`, `.copyright`, `.harvested_at`, `.adaptation_log`, `.harvest_score` | Source pointer and declared harvest metadata; no file-span receipt, scanner receipt, SBOM, attestation, SWHID, or transparency receipt |
| Runtime/data/auth | `stack_contract.runtime`, `.styling.system`, `.styling.component_library`, `.data.dialect`, `.data.orm`, `.data.tables_owned`, `.data.tables_read`, `.auth_interface`, `.interfaces_required` | Host assumptions; no tenant, workload identity, secret scope, resource limit, sandbox, or egress fields |
| Exports | `provides.routes[]`, `.components[]`, `.migrations[]`, `.env_vars[]`, `.events[]` | Route/component/migration/env/event inventory; no typed API-contract reference or compatibility result. `api_endpoints` appears in prose but is not a schema field |
| Dependencies | `requires[]` | String block IDs only; no dialect/version/digest/compatibility policy |
| Design | `tokens_consumed[]` | Token slot names only; no token source version, context, resolved digest, fallback, or unused-token receipt |
| Proof | `eval.build_cmd`, `.smoke_test`, `.screenshot_baseline` | Commands and optional baseline path; no run identity, environment, seed, raw trace, scorer, reset, or verdict taxonomy |
| Admission-shaped data | `eval.admission.admitted_at`, `.scaffold_tested_against`, `.license_scan` | Registry-populated shape exists, but this lane must not fill or imply it |

### Research-only extension vocabulary

The following names make gaps precise. They are not being added to the schema in
this task: `demand.{job,trigger,outcome,industry_id,atom_refs,evidence_receipt}`;
`workflow.{states,transitions,retries,schedules,handoff,idempotency}`;
`data_policy.{tenant,owner,sensitivity,freshness,permissions,rls_receipt}`;
`contract_refs[]`; `tokens.{format,resolver,contexts,resolved_digest,fallback_policy}`;
`action_contract`; `evidence.{rights_receipts,sbom_views,attestations,transparency_receipt,transform_receipt,contract_receipts,visual_receipt,eval_receipt,runtime_receipt,release_receipt}`;
`release.{subject_digest,rollout,health_gates,flags,rollback_or_compensation}`;
and `economics.{cost_units,budget,latency_budget,maintenance_owner,freshness,vendor_continuity,portability,exit_test}`.

Any future implementation must first decide whether these are schema changes or
external receipts. This report does not decide that question.

## Twelve-task execution ledger

The wave program's twelve RCH-STANDARDS-W2 tasks are each represented below.
“Designed” means the research artifact contains the requested mapping or probe;
it never means a local control executed.

| # | Program task | Wave-2 evidence | State |
|---:|---|---|---|
| 1 | Use the 566-line standards expansion as immutable normative baseline | Baseline receipt above; hash and line count captured before report write | Designed / verified |
| 2 | Map all ten dimensions to exact standards/spec versions and local Block Contract fields | Dimension records `D01`–`D10` below; exact v0 field audit above | Complete |
| 3 | Separate normative requirements, implementation behavior, empirical results, and vendor positioning | Evidence-class rules and source-quality register below | Complete |
| 4 | Add rights/provenance/SBOM/attestation evidence receipts | Receipt designs `R01`–`R04`; no scan or attestation emitted | Complete / unexecuted |
| 5 | Add AST/CST/codemod/retrieval and design-token/visual-proof receipts | Receipt designs `R05`–`R06`; transform and visual probes `P05`–`P06` | Complete / unexecuted |
| 6 | Add MCP/A2A/OAuth/policy/approval/authority contract comparisons | Comparison table and `D06` action contract mapping | Complete |
| 7 | Add eval, sandbox, egress, tenancy, deployment, rollback, and recovery applicability | `D07` and `D09`; receipts `R08`–`R10`; probes `P07` and `P09` | Complete / unexecuted |
| 8 | State what each standard cannot prove | Per-dimension limitations plus non-claims section | Complete |
| 9 | Add falsifiers and minimum synthetic probe designs | Ten minimum probes `P01`–`P10`, each with a negative case | Complete / unexecuted |
| 10 | Record version/date/source quality and access limitations | Source register below, including mutable/current/version-not-stated notes | Complete |
| 11 | Verify all links and the baseline hash | Link receipt and hash command are recorded in validation; no search snippet used as sole evidence | Complete |
| 12 | Callback with applicability matrix; no executed scan/eval/deploy claim | Fresh CENA pane resolution, visible callback read-back, and working-status receipt recorded below | Complete / verified |

## Evidence classes and decision vocabulary

| Class | Meaning | Permitted use |
|---|---|---|
| `N` | Normative standard, RFC, W3C Recommendation, or standards-track specification | Define a version-pinned interoperability or control target; not local conformance |
| `D` | First-party implementation/specification documentation | Describe documented behavior and required fields; not proof the local runtime uses it |
| `P` | Peer-reviewed/proceedings/preprint research | Define a hypothesis, benchmark design, or risk; not a local result |
| `V` | Vendor/project positioning, release page, leaderboard, or marketing claim | Record as a claim with provenance only; require independent/local evidence |
| `I` | Explicit inference in this report | Propose a local field or probe; must have a falsifier |
| `E` | Direct inspection of a primary artifact/page | Source-observation confidence only; not Action Model evidence |

Receipt states used here are `not_run`, `unknown`, `blocked`,
`needs_direct_review`, and (only for a future executed experiment) `observed`.
`candidate`, `catalogued`, and `standard-mapped` never mean `admitted`.

## Ten-dimension applicability matrix

### D01 — `demand_atom_fit`

**Question.** Does a proposed block trace to a specific industry job, trigger,
outcome, and one or more of the 12 catalogue atoms without upgrading a broad
industry tag into observed demand?

**Exact standards/spec targets.**

- [ISO/IEC/IEEE 29148:2018 — Requirements engineering](https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/07/20/72089.html), Edition 2, published 2018-11 and confirmed current in 2024 (`N`). It defines requirements processes and information items, not demand truth.
- [ISO/IEC 25010:2023 — Product quality model](https://www.iso.org/standard/78176.html), Edition 2, published 2023-11 (`N`). It supplies a quality model for specification, measurement, and evaluation, including functional suitability, but not market adoption.

**Local fields.** Existing: `kind`, `provides.routes[]`,
`provides.components[]`, `provides.events[]`, `provides.migrations[]`,
`requires[]`, and `eval.smoke_test`. Proposed inference: `demand.job`,
`demand.trigger`, `demand.outcome`, `demand.industry_id`, `demand.atom_refs`,
and `demand.evidence_receipt`.

**Limitation.** Neither standard observes a user, proves willingness to pay,
retention, frequency, or vertical-specific demand. `smoke_test` can prove a
technical path exists, not that the path matters.

**Falsifier.** A blinded reviewer cannot reproduce the job-to-trigger-to-outcome
trace from the cited source/fixture, or the block only satisfies a generic tag
while failing the declared atom outcome.

**Minimum synthetic probe `P01`.** Create three fully synthetic job cards per
archetype (read-only dashboard, queue/handoff, and scheduled reconciliation),
each containing `industry_id`, atom, trigger, expected outcome, and a negative
near-neighbor. Ask two independent mappings to select block exports and record
the rationale. Pass requires agreement on the job/atom and a runnable
post-condition fixture; fail if the mapping relies on an uncited broad label or
cannot state an observable outcome. No client data or adoption inference is
used; the probe is designed only.

### D02 — `workflow_behavior`

**Question.** Are state transitions, queues, schedules, retries, idempotency,
and human handoffs explicit and testable?

**Exact standards/spec targets.**

- [OMG BPMN 2.0.2](https://www.omg.org/spec/BPMN/2.0.2/), formal version adopted January 2014 (`N`). Its normative PDF and machine-readable files describe process notation and interchange.
- [AsyncAPI 3.1.0 specification repository](https://github.com/asyncapi/spec), latest released line shown by the official project page (`N/D`). Pin a release commit in any future receipt; the default branch is mutable.
- [CloudEvents core 1.0](https://github.com/cloudevents/spec/releases/tag/ce%40v1.0.2), released core compatibility version (`N/D`). The `main` file is a `1.0.3-wip` line; this report does not treat that work in progress as the target.

**Local fields.** Existing: `provides.events[]`, `provides.migrations[]`,
`requires[]`, `stack_contract.interfaces_required`, and `eval.smoke_test`.
Proposed inference: `workflow.states`, `workflow.transitions`,
`workflow.retries`, `workflow.schedules`, `workflow.handoff`, and
`workflow.idempotency`.

**Limitation.** BPMN is a model/notation and diagram-interchange specification,
not an execution engine. AsyncAPI and CloudEvents describe message/interface
semantics; they do not prove broker delivery, ordering, deduplication,
transactionality, or a successful human handoff.

**Falsifier.** Duplicate, delayed, out-of-order, malformed, and partially failed
events produce an unrecorded transition, double effect, impossible state, or
silent loss; a human handoff has no owner, expiry, or return state.

**Minimum synthetic probe `P02`.** Use a four-state synthetic workflow
`new → queued → approved → complete` with `rejected` and `needs_human`
branches. Replay the same CloudEvent twice, deliver it out of order, drop the
ack, inject a timeout, and submit an unknown event type. A future receipt would
contain the state trace, event IDs, transition rules, retry count, and terminal
post-condition. The required negative result is no duplicate completion and no
implicit approval.

### D03 — `data_model`

**Question.** Do entities, schema, tenancy, freshness, permissions, and
sensitivity match the declared block job?

**Exact standards/spec targets.**

- [JSON Schema Draft 2020-12](https://json-schema.org/draft/2020-12), published 2022-06-16 (`N`).
- [OpenAPI Specification 3.1.1](https://spec.openapis.org/oas/v3.1.1.html) with its [2024-11-10 JSON Schema dialect](https://spec.openapis.org/oas/3.1/dialect/2024-11-10.html) (`N`). OAS 3.1.1 Schema Objects are based on Draft 2020-12; the official index also lists OAS 3.2.0, so 3.1.1 is an explicit pinned compatibility target here.
- [NIST SP 800-207 Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final), final August 2020 (`N`). It supplies architecture principles for continuous subject/resource authorization, not a database policy.

**Local fields.** Existing: `stack_contract.data.dialect`, `.orm`,
`.tables_owned`, `.tables_read`, `stack_contract.auth_interface`,
`provides.migrations[]`, `provides.env_vars[]`, and route auth flags.
Proposed inference: `data_policy.tenant`, `.owner`, `.sensitivity`,
`.freshness`, `.permissions`, and `.rls_receipt`.

**Limitation.** A schema validator cannot prove that a live Postgres policy is
enabled, that data is fresh, that tenant identifiers are unguessable, or that a
secret is not exposed. Zero Trust is architectural guidance, not a local RLS
or tenancy receipt.

**Falsifier.** A synthetic tenant can read or write another tenant’s fixture,
an expired/freshness-invalid record is accepted without an explicit policy, an
unknown field is silently coerced into a privileged value, or the declared ORM
and migration dialect cannot recreate the fixture.

**Minimum synthetic probe `P03`.** Generate two tenants with adversarial IDs,
two sensitivity classes, one stale row, one missing permission, and one unknown
field. Run read, write, list, export, and migration checks under the declared
auth interface. Expected result: cross-tenant and unauthorized effects deny;
stale data is marked or rejected according to an explicit policy; valid rows
round-trip through the pinned schema. No real database or client record is used.

### D04 — `integration_surface`

**Question.** Can REST, event, tool, agent, import/export, and browser boundaries
be described with versioned contracts and safe compatibility behavior?

**Exact standards/spec targets.**

- [OpenAPI 3.1.1](https://spec.openapis.org/oas/v3.1.1.html) (`N`).
- [AsyncAPI 3.1.0](https://github.com/asyncapi/spec) (`N/D`, release must be pinned).
- [CloudEvents 1.0](https://github.com/cloudevents/spec/releases/tag/ce%40v1.0.2) (`N/D`).
- [MCP specification 2025-11-25](https://modelcontextprotocol.io/specification/2025-11-25/basic) (`D`, versioned project specification).
- [A2A specification 1.0.0](https://a2a-protocol.org/v1.0.0/specification) (`D/N-adjacent`, latest released protocol version shown by the project).

**Local fields.** Existing: `provides.routes[]`, `.events[]`, `.env_vars[]`,
`provides.components[]`, `requires[]`, and `stack_contract.interfaces_required`.
Proposed inference: `contract_refs[]` with `kind`, `id`, `version`, `digest`,
`compatibility_policy`, `generated_artifacts`, and `receipt`.

**Limitation.** A valid OpenAPI/AsyncAPI/MCP/A2A document does not prove the
provider is available, credentials are correctly scoped, the browser boundary
is safe, the implementation obeys every declared behavior, or an external side
effect is reversible. Protocol compatibility is not semantic business
correctness.

**Falsifier.** A clean consumer/provider fixture disagrees on a pinned contract;
unknown fields are accepted when they should fail; a version-negotiation or
retry path causes duplicate effects; or a tool/agent advertises a capability it
cannot execute.

**Minimum synthetic probe `P04`.** Pair a synthetic provider and consumer for
one REST operation, one event, one MCP tool, and one A2A task. Run valid,
missing, unknown, incompatible-version, timeout, duplicate, and cancellation
cases. Capture schema/definition digests and raw request/response/task traces;
the probe passes only if negative behavior is explicit and the contract receipt
joins both sides to the same pinned version. It is not an executed contract test.

### D05 — `ui_assembly`

**Question.** Do routes and components consume the declared token system and
hold their interaction, accessibility, and visual evidence across states?

**Exact standards/spec targets.**

- [DTCG Format Module 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/) and [Resolver Module 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-resolver-20251028/), both final reports dated 2025-10-28 (`N-adjacent`; W3C Community Group, not W3C Recommendation).
- [WCAG 2.2](https://www.w3.org/TR/2024/REC-WCAG22-20241212/), W3C Recommendation 2024-12-12 (`N`).
- [WAI-ARIA 1.2](https://www.w3.org/TR/2023/REC-wai-aria-1.2-20230606/), W3C Recommendation 2023-06-06 (`N`).
- [Playwright screenshot comparisons](https://playwright.dev/docs/test-snapshots), current implementation documentation (`D`).
- [Storybook testing](https://storybook.js.org/docs/writing-tests), docs version 10.5 as observed in the baseline (`D/V`), and [axe-core](https://github.com/dequelabs/axe-core) current repository behavior (`D/E`).

**Local fields.** Existing: `tokens_consumed[]`, `provides.routes[]`,
`provides.components[]`, and `eval.screenshot_baseline`. Proposed inference:
`tokens.format`, `tokens.resolver`, `tokens.contexts`, `tokens.resolved_digest`,
`tokens.fallback_policy`, `eval.accessibility`, `eval.component_states`, and
`eval.visual_environment`.

**Limitation.** DTCG specifies token representation and resolution, not taste,
layout quality, complete token consumption, or generated CSS correctness. WCAG
and ARIA provide conformance semantics, not universal usability. Playwright,
Storybook, and axe are implementation evidence; screenshots are sensitive to
browser, OS, fonts, viewport, hardware, locale, and motion settings. A visual
pass is not an accessibility or behavior pass.

**Falsifier.** Deleting or renaming a required token silently falls back without
an explicit receipt; a keyboard/focus/name/contrast mutation is not detected;
the same pinned fixture produces unexplained screenshot drift; or a component
state lacks a story/interaction case.

**Minimum synthetic probe `P05`.** Define a button, data table, empty state,
error state, and approval dialog using synthetic content. Resolve light, dark,
high-contrast, and reduced-motion contexts. Mutate a required token, focus
order, accessible name, contrast pair, and disabled/loading state one at a time.
A future receipt includes DTCG/resolver input and output digests, token usage,
browser/OS/font/viewport, axe result, keyboard trace, and screenshot diff. The
expected outcome is detection and quarantine of each seeded mutation.

### D06 — `agent_authority`

**Question.** Does an action bind a principal and actor chain to a tenant,
resource, operation, risk, approval, policy decision, expiry, replay rule, and
recovery path?

**Exact standards/spec targets.**

- [MCP basic protocol 2025-11-25](https://modelcontextprotocol.io/specification/2025-11-25/basic) (`D`): tool/resource/prompt and session/capability surfaces.
- [A2A 1.0.0](https://a2a-protocol.org/v1.0.0/specification) (`D/N-adjacent`): agent cards, tasks, artifacts, status, cancellation, version negotiation, and authentication surfaces.
- [RFC 9396 OAuth 2.0 Rich Authorization Requests](https://www.rfc-editor.org/rfc/rfc9396.html) and [RFC 8693 OAuth 2.0 Token Exchange](https://www.rfc-editor.org/rfc/rfc8693.html) (`N`, Standards Track): structured authorization details and delegated subject/actor relationships.
- [RFC 9421 HTTP Message Signatures](https://www.rfc-editor.org/rfc/rfc9421.html) (`N`, Standards Track): covered HTTP components, key IDs, created/expiry, and replay-relevant parameters.
- [W3C Trace Context Recommendation 2021-11-23](https://www.w3.org/TR/2021/REC-trace-context-1-20211123/) (`N`): trace propagation, not authority.
- [Gatekeeper documentation](https://open-policy-agent.github.io/gatekeeper/website/docs/) (`D/E`): validating/mutating policy admission behavior, not action semantics.

**Local fields.** Existing: `stack_contract.auth_interface`,
`.interfaces_required`, `provides.env_vars[]`, `requires[]`, and route
`auth_required`. Proposed inference: the `action_contract` vocabulary in the
contract audit, plus `audit.action_receipt`.

**Contract comparison.**

| Family | It can contribute | It cannot decide |
|---|---|---|
| MCP | Tool identity, schema, capability negotiation, session state | Least authority, human approval, tenant policy, non-repudiation, rollback |
| A2A | Agent capability card, task identity/status, artifacts, cancellation, versioning | Whether a human approved the effect or whether business truth is satisfied |
| OAuth RAR/token exchange | Structured resource/action request and delegation/actor chain | Whether the requested scope is safe or sufficiently narrow for the business |
| RFC 9421 | Signed request components, freshness, key ID, body/authority coverage | Which issuer/key is trusted, whether the action is allowed, or whether effect is reversible |
| Trace Context | Cross-service correlation via `traceparent`/`tracestate` | Immutable audit, causality proof, redaction policy, or approval |
| Policy/admission engine | A versioned allow/deny decision when configured | Complete tool semantics, authority intent, side-effect recovery, or policy coverage |

**Limitation.** The standards expose useful primitives but no single one is a
local authority model. “The model asked for the tool” is not an authorization
receipt. A valid signature or token can carry an over-broad or false claim.

**Falsifier.** Any replay, expired signature, wrong audience/tenant, scope
escalation, missing approval, tool-definition drift, duplicate request, partial
failure, or irreversible external effect without a declared recovery path is
accepted as successful.

**Minimum synthetic probe `P06`.** Create a read-only action, reversible write,
and irreversible external-effect fixture. Exercise valid approval, expired
approval, wrong tenant, wrong audience, scope escalation, replayed nonce,
mutated body digest, tool schema drift, duplicate request, and partial failure.
Expected results are deny, quarantine, idempotent deduplication, or explicit
compensation according to risk. Record principal, actor chain, policy version,
approval, signature, trace, effect, and recovery as a future receipt. Do not
execute a real external effect.

### D07 — `verification_eval`

**Question.** Does a block have healthy, reproducible, layered evidence for
build, contract, UI, tool-state, safety, GUI, repetition, and recovery behavior?

**Exact standards/spec targets and research anchors.**

- [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html) (`N`): quality characteristics and evaluation model.
- [ISO/IEC/IEEE 29119-3:2021 reference](https://www.iso.org/standard/81612.html) (`N`, public catalog record): test documentation concepts; full standard access is limited.
- [SWE-bench](https://arxiv.org/abs/2310.06770), [SWE-rebench](https://swe-rebench.com/about), and [SWE-Bench Pro](https://arxiv.org/abs/2509.16941) (`P/V/E`): repository-level task and benchmark designs.
- [ToolSandbox](https://arxiv.org/abs/2408.04682), [AgentDojo](https://proceedings.neurips.cc/paper_files/paper/2024/file/97091a5177d8dc64b1da8bf3e1f6fb54-Paper-Datasets_and_Benchmarks_Track.pdf), [WorkArena++](https://papers.nips.cc/paper_files/paper/2024/file/0b82662b6c32e887bb252a74d8cb2d5e-Paper-Datasets_and_Benchmarks_Track.pdf), [BrowserGym](https://github.com/ServiceNow/BrowserGym), and [OSWorld](https://arxiv.org/abs/2404.07972) (`P/D/E`): complementary tool-state, safety, GUI, browser, and computer-use designs.

**Local fields.** Existing: `eval.build_cmd`, `.smoke_test`,
`.screenshot_baseline`, and the registry-populated `.admission` shape. Proposed
inference: `eval.protocol`, `.fixture_revision`, `.model_provider`, `.seed`,
`.environment_image`, `.tool_definitions`, `.reset`, `.scorer`, `.raw_trace`,
`.metrics`, `.failure_taxonomy`, and `.falsifiers`.

**Limitation.** A benchmark score is not a local result, not a product-quality
guarantee, and not transferable across task/scaffold/provider environments.
Public tasks can be contaminated, broken, or judged by an incomplete oracle.
Safety, refusal, reversible recovery, unsafe success, and incomplete work must
not be compressed into one aggregate score.

**Falsifier.** The task installation/oracle is broken, a held-out or mutated
fixture changes the conclusion, repeated seeds have wide or unstable intervals,
or an unsafe action is counted as a capability success.

**Minimum synthetic probe `P07`.** Build a fixture matrix with one valid,
one malformed, one held-out, one mutated, one negative, and one recovery case
for each of build, contract, UI, tool-state, and safety layers. Pin task and
repo revisions, model/provider, seed, environment, tool definitions, reset
method, scorer, raw trace, cost/latency, and verdict class. Repeat from a clean
reset under at least three seeds in a future run. The probe is a protocol design;
no model or eval was run.

### D08 — `provenance_rights`

**Question.** Can the block’s source, transformations, dependencies, artifact,
signers, rights claims, and registry history be joined without implying a legal
opinion or semantic safety?

**Exact standards/spec targets.**

- [SPDX 3.0.1](https://spdx.github.io/spdx-spec/v3.0.1/) (`N/E`); [SPDX official specification index](https://spdx.dev/use/specifications/) currently labels 3.0 as current, so 3.0.1 is pinned explicitly for this packet.
- [REUSE Specification 3.3](https://reuse.software/spec-3.3/) (`N/E`).
- [CycloneDX 1.7 overview](https://cyclonedx.org/specification/overview/) (`N/D`), including BOM/VEX/formulation/linkage concepts.
- [SLSA v1.2](https://slsa.dev/spec/v1.2/) and [source requirements](https://slsa.dev/spec/v1.2/source-requirements) (`N/E`).
- [in-toto Attestation Framework](https://github.com/in-toto/attestation) (`N/E`, public framework/spec pages).
- [TUF specification 1.0.35](https://github.com/theupdateframework/specification/blob/master/tuf-spec.md) (`N/E`, version macro observed on the source page).
- [OCI image/distribution 1.1.0 release](https://opencontainers.org/posts/blog/2024-03-13-image-and-distribution-1-1/) (`N/E`).
- [SWHID specification 1.1](https://www.swhid.org/specification/v1.1/) and [ISO/IEC 18670 announcement](https://www.softwareheritage.org/software-hash-identifier-swhid/) (`N/E`); SWHID identity is not rights clearance.
- [SCITT, RFC 9943](https://www.rfc-editor.org/rfc/rfc9943.html) (`N`, Proposed Standard published June 2026).
- [Sigstore security model](https://docs.sigstore.dev/about/security/) (`D/E`).

**Local fields.** Existing: all `provenance.*`, `id`, `kind`, `requires[]`, and
`eval.admission.license_scan` (registry-shaped only). Proposed inference:
`provenance.source_spans`, `.source_identity`, `.artifact_digest`,
`.rights_receipts`, `.transform_receipt`, `evidence.sbom_views`,
`.attestations`, `.transparency_receipt`, `registry.trust_root`, and
`release.subject_digest`.

**Limitation.** SPDX/REUSE express metadata and claims; SBOMs describe an
inventory; SLSA/in-toto bind statements; TUF/Sigstore/SCITT/OCI establish
different integrity/transparency/transport properties. None establishes legal
ownership, permission for adaptation, complete dynamic dependency discovery,
semantic correctness, or runtime safety.

**Falsifier.** A mixed-license/generated/vendored fixture is incorrectly
classified; changing a material leaves a valid attestation; a mutable tag,
expired key, rollback target, or untrusted signer resolves as trusted; or a
source span cannot be joined to the final subject digest.

**Minimum synthetic probe `P08`.** Seed a tiny repository with MIT, Apache,
GPL reference-only, unlicensed, generated, vendored, embedded-snippet, and
missing-notice files. Create a mutated source, dependency lock, artifact digest,
fake attestation, expired key, stale TUF target, and missing OCI referrer.
The designed verifier must preserve each file span, distinguish declared from
detected rights, reject changed subjects and stale trust metadata, and route
legal ambiguity to review. Do not run a scanner or create an attestation here.

### D09 — `runtime_deployment`

**Question.** Are runtime, sandbox, workload identity, tenant, egress, rollout,
rollback, and irreversible side effects explicit?

**Exact standards/spec targets.**

- [OCI image and distribution specifications 1.1.0](https://opencontainers.org/posts/blog/2024-03-13-image-and-distribution-1-1/) (`N/E`).
- [Kubernetes NetworkPolicy API `networking.k8s.io/v1`](https://kubernetes.io/docs/reference/kubernetes-api/networking/network-policy-v1/) and [Kubernetes 1.36 network-policy limitations](https://kubernetes.io/docs/concepts/services-networking/network-policies/) (`D/E`).
- [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final) (`N`).
- [SPIFFE Standard page](https://spiffe.io/docs/latest/spiffe-specs/) (`D/E`; the page exposes current SPIFFE/SPIRE material but does not provide a frozen version label for every page).
- [WASI 0.2](https://wasi.dev/releases/wasi-p2) (`D/E`), stable Component Model/WIT-based release; [WASI releases](https://wasi.dev/releases) now also exposes 0.3, so 0.2 is an explicit compatibility target.
- [Argo Rollouts](https://argoproj.github.io/argo-rollouts/) and [Kubernetes rollout undo](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_undo/) (`D/V/E`).

**Local fields.** Existing: `stack_contract.runtime`, `.data.*`,
`.auth_interface`, `.interfaces_required`, `provides.env_vars[]`, and
`eval.build_cmd`. Proposed inference: `stack_contract.sandbox_profile`,
`.tenant`, `.workload_identity`, `.egress`, `.secret_scope`,
`.resource_limits`, `release.subject_digest`, `.rollout`, `.health_gates`,
`.rollback_or_compensation`, and `audit.runtime_receipt`.

**Limitation.** OCI identifies and transports artifacts but does not make them
safe. NetworkPolicy only covers supported L3/L4 paths when an enforcing plugin
is present; Kubernetes documentation calls out default egress, DNS, hostNetwork,
proxy/L7, and other limitations. NIST is architecture guidance. SPIFFE
identifies workloads but does not authorize each operation. WASI capability
interfaces do not prove guest trustworthiness. Rollout undo does not undo a
database migration, payment, message, deletion, or other external effect.

**Falsifier.** Cross-tenant read/write, direct-IP/DNS-rebinding/metadata access,
proxy bypass, undeclared secret access, resource-limit escape/DoS, or a release
rollback that leaves an untracked external effect succeeds.

**Minimum synthetic probe `P09`.** On a disposable fixture only, define two
tenants, a default-deny egress policy with an explicit DNS exception, one
allowed host, direct-IP and metadata destinations, a workload identity mapping,
CPU/memory/time limits, a canary revision, and a compensating action. Inject
cross-tenant IDs, DNS rebinding, proxy bypass, timeout, crash after external
effect, and rollback during migration. Future evidence must show deny/abort or
compensation and identify plugin/runtime/image/identity digests. No sandbox,
deployment, network, or rollback was executed.

### D10 — `economics_maintenance`

**Question.** Can cost units, budgets, maintenance burden, freshness, vendor
continuity, portability, and exit be measured without treating a billing schema
as a business forecast?

**Exact standards/spec targets.**

- [FOCUS Specification v1.2](https://focus.finops.org/focus-specification/v1-2/), published release and SaaS-supporting schema (`N/D`). The official index now exposes v1.3/v1.4 as well; v1.2 is the pinned receipt for this packet, not a claim of latest.
- [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html), Edition 2 (`N`), for maintainability, portability, performance-efficiency, and quality evaluation dimensions.
- [OpenFeature specification](https://openfeature.dev/specification/) (`D`): its public page defines normative/stability sections but does not state one frozen release number; treat the version as `not stated` until a release is pinned. The project documents stable 1.0 SDK milestones in [its 1.0 announcement](https://openfeature.dev/blog/hardening-and-1-0-sdks/), which is implementation evidence, not a spec version.
- [OCI image/distribution 1.1.0](https://opencontainers.org/posts/blog/2024-03-13-image-and-distribution-1-1/) (`N/E`) for digest-pinned artifact portability, not total exit economics.

**Local fields.** Existing: `stack_contract.runtime`, `.data.orm`,
`.interfaces_required`, `requires[]`, `eval.build_cmd`, `.smoke_test`, and
`.admission.scaffold_tested_against` (registry-shaped). Proposed inference:
`economics.cost_units`, `.budget`, `.latency_budget`, `.maintenance_owner`,
`.freshness`, `.vendor_continuity`, `.portability`, `.exit_test`, and
`release.flags`.

**Limitation.** FOCUS normalizes billing data and can support chargeback,
allocation, budgeting, and forecasting inputs; it cannot predict demand,
engineering effort, support quality, vendor solvency, or exit success. ISO
25010 is a quality model, not a cost oracle. Feature flags can disable future
paths but are not compensation for effects already executed. A digest-pinned
container is not a provider-independent application.

**Falsifier.** Evidence verification/storage dominates assembly cost; a budget
or token/credit unit cannot be reconciled to provider billing; maintenance grows
without an owner/SLO; a provider outage or price/schema change breaks the block;
or the declared exit test cannot rebuild/run against the pinned contract.

**Minimum synthetic probe `P10`.** Model a fixed synthetic build with token,
compute, storage, verification, screenshot, trace-retention, and human-review
units. Reconcile those units against a FOCUS-shaped billing fixture, then inject
a price change, provider outage, stale dependency, evidence-retention increase,
and feature-flag kill. Test a rebuild from the pinned artifact/contract and
record cost, latency, freshness, owner, fallback, and exit result. The design
does not use vendor accounts, credentials, or live cost data.

## Cross-cutting receipt designs

### R01–R04 — rights, SBOM, attestation, and trust receipts

| Receipt | Minimum fields | Future verdict rule |
|---|---|---|
| `R01 rights_receipt` | `receipt_id`, source URL/revision/SWHID, selected file/snippet spans and digests, declared/detected/concluded SPDX expression, copyright evidence, scanner/version/command, policy version, exclusions, human escalation, observed date | `unknown` or `needs_direct_review` when coverage, generated/vendored files, or legal interpretation is incomplete; never “clean” merely because SPDX parses |
| `R02 sbom_receipt` | format/version, source/build/deploy view, subject digest, components/services/data flows, dependency edges, generator/version, input lockfile, VEX/formulation, observed date | Reject a stale, partial, or non-joinable BOM; a richer format does not prove complete inventory |
| `R03 attestation_receipt` | in-toto/SLSA predicate type/version, subject/material digests, step, builder/issuer identity, policy, signature, expiry, verification result, independent re-execution link | Fail on changed material/tool/builder/output or an untrusted issuer; signature authenticity is not semantic correctness |
| `R04 trust_receipt` | TUF root/threshold/key IDs/expiry/rollback state, OCI target/referrer digest, Sigstore identity/transparency entry, SCITT receipt if used, verifier policy/version | Reject mutable tag drift, expired/revoked/untrusted metadata, missing referrer, or policy mismatch; trust root does not bless code or rights |

The baseline's typed lineage model is preserved: SPDX/REUSE describe rights and
attribution; SWHID supplies intrinsic identity; CycloneDX/SPDX describe source,
build, deployment, service, and data-flow views; SLSA/in-toto bind materials and
steps; OCI carries digest-addressed artifacts and referrers; Sigstore/TUF/SCITT
address different signing, update, and transparency concerns. They are joined
by receipt, not collapsed into a single “trusted” boolean.

### R05 — AST/CST, codemod, retrieval, and semantic transformation receipt

The baseline's transform applicability remains split by capability:

| Mechanism | Version/source posture | Receipt contribution | Cannot prove |
|---|---|---|---|
| Tree-sitter | [official documentation](https://tree-sitter.github.io/tree-sitter/), version not stated on page (`D/E`) | Grammar/parser version, language, exact byte spans, parse/error result | Types, runtime dependencies, behavior preservation |
| LSP | [LSP 3.17](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/) (`N/E`) | Server/version, document revision, symbols/references/rename/diagnostics, edit ranges | Server completeness, semantic equivalence, trusted edit application |
| Comby | [overview/API](https://comby.dev/docs/overview) (`D/E`) | Pattern, rewrite, match ranges, dry-run, diff | Type/semantic correctness and rights boundaries |
| Semgrep | [rule writing](https://semgrep.dev/docs/writing-rules/overview) and [rule fixes](https://semgrep.dev/docs/writing-rules/rule-defined-fix) (`D/E`) | Rule/version, fixture hits/non-hits, deterministic fix and post-fix findings | Safe behavior or absence of all vulnerabilities |
| Coccinelle | [official site](https://coccinelle.gitlabpages.inria.fr/website/) (`P/D/E`) | SmPL recipe, C target, patch review, and compile result | General-language/UI portability |
| CodeQL | [official overview](https://codeql.github.com/docs/codeql-overview/about-codeql/) (`D/E`) | Query/database/language/build extraction and known-variant findings | Rewrite correctness or complete vulnerability coverage |

Minimum receipt fields are input revision, selected path/byte spans, source
rights references, parser or language-server version, recipe ID/parameters,
before/after digests, diff reference, post-transform parse/type/build/behavior
checks, rights re-scan reference, reviewer/policy identity, and status. Parse or
rewrite success without post-check evidence stays `unknown`/`quarantine`.

The synthetic corpus must include positive matches and intentional non-matches,
nested syntax, comments/strings, generated files, language extensions,
ambiguous scopes, a false positive, and a behavior regression. This is a probe
design only; no transform or retrieval run was executed.

### R06 — design-token and visual-proof receipt

Minimum fields are DTCG format/resolver version, input and resolved digests,
selected context (theme, contrast, motion), consumed/unused/missing tokens,
component state matrix, WCAG target and ARIA cases, axe version/result,
browser/OS/font/viewport fingerprint, screenshot baseline, masking and diff
threshold policy, and status. The proof layers stay separate:

1. DTCG parse, type, alias, and resolver validity.
2. Token-consumption and hardcoded-style check.
3. WCAG target-level and ARIA/APG interaction cases.
4. Storybook state and interaction coverage.
5. Playwright screenshot/text snapshot from a pinned environment.
6. Automated axe result plus any manually scoped keyboard/assistive-technology
   review.

A screenshot without the environment fingerprint is not reproducible visual
evidence. DTCG and pixels are different evidence; accessibility and visual
quality are different evidence.

### R07 — contract and registry install receipt

For every `provides`/`requires` edge, future evidence should include
`contract_ref.kind`, `id`, exact version, digest, compatibility policy,
provider/consumer subject digests, generated-artifact versions, positive and
negative fixtures, unknown-field behavior, raw trace, and result. The state
machine is `catalogued → installable → verified → admitted`; an entry never
skips states because a registry manifest parses. The v0 schema has no contract
digest or install receipt, so this is an external receipt or future schema
decision, not a current field.

### R08 — action authority receipt

The minimum future action receipt joins principal, actor chain, tenant, resource,
operation, risk class, approval and approver, policy version/input/decision,
scope/audience/expiry, request/body signature, idempotency key, replay result,
trace linkage, pre/post state, external effect references, and rollback or
compensation owner/result. It must preserve denial and partial-failure traces,
not only successful calls.

### R09 — eval and reproducibility receipt

The minimum future eval receipt joins task/fixture/repository revisions,
prompt/model/provider versions, seed and repetition, environment image, tool
definitions and permissions, state reset, scorer version, raw trace, verdict
class, failure taxonomy, cost/latency, and benchmark-health result. Safe refusal,
unsafe success, incomplete work, human takeover, and successful reversible
recovery are distinct verdicts.

### R10 — runtime, release, rollback, and recovery receipt

The minimum future runtime receipt joins subject digest, image/module/runtime,
OS/architecture/limits, tenant/workload identity, secret scope, allowed and
denied egress, source/build/deploy BOM views, rollout health gates, feature-flag
context, previous target, and tested rollback/compensation result. A previous
manifest is not a compensation receipt for a payment, message, deletion, schema
write, credential, or other external effect.

## What these standards cannot prove

This list is deliberately explicit because a source citation is not an admission
claim:

- Requirements and quality standards cannot prove demand, willingness to pay,
  retention, or a vertical outcome.
- BPMN, AsyncAPI, CloudEvents, OpenAPI, JSON Schema, MCP, and A2A cannot prove
  provider availability, implementation completeness, business truth, secret
  safety, or reversibility of an external effect.
- DTCG cannot prove visual quality, accessibility, interaction semantics, or
  that every token is consumed; WCAG/ARIA cannot prove universal usability;
  screenshots cannot prove semantics or accessibility.
- MCP, A2A, OAuth, signatures, trace context, VC, and policy engines do not by
  themselves create a least-authority business approval model.
- SPDX, REUSE, SBOMs, SLSA, in-toto, SWHID, TUF, Sigstore, SCITT, and OCI do not
  decide legal permission, establish ownership, prove complete dependency
  discovery, or prove semantic/runtime safety.
- Benchmarks and papers do not constitute Action Model runs. Public score,
  vendor claim, or leaderboard rank cannot replace a healthy held-out local
  fixture and raw receipt.
- OCI, Kubernetes, SPIFFE, WASI, NIST, Gatekeeper, Argo, and feature flags do
  not jointly prove tenant isolation, egress denial, rollback of data, or
  compensation for irreversible effects without local negative tests.
- FOCUS can normalize cost/usage inputs; it cannot prove total cost, budget
  accuracy, provider continuity, maintenance ownership, or exit success.

## Falsifiers and minimum synthetic probe index

The ten probes are deliberately read-only or disposable-fixture designs. None
was executed in this research lane.

| Probe | Dimension | Minimum falsifier | Evidence a future run must retain |
|---|---|---|---|
| `P01` | `demand_atom_fit` | Job-to-atom mapping is generic, uncited, disagreed by independent mapping, or has no observable outcome | Synthetic job cards, mappings, rationale, atom/industry IDs, post-condition |
| `P02` | `workflow_behavior` | Duplicate/out-of-order/unknown event causes double completion, impossible state, loss, or implicit approval | Event IDs, ordered state trace, transition/version, retries, owner/handoff |
| `P03` | `data_model` | Cross-tenant access, stale-data acceptance without policy, privilege through unknown field, or migration round-trip failure | Fixture digests, tenant/auth context, schema validation, DB/RLS policy result |
| `P04` | `integration_surface` | Consumer/provider mismatch, incorrect unknown-field behavior, duplicate retry effect, or capability drift | Contract digests, versions, generated artifacts, raw traces, positive/negative verdicts |
| `P05` | `ui_assembly` | Token/context mutation, focus/name/contrast/state mutation, or visual drift is missed or unexplained | Token/resolver digests, state matrix, browser fingerprint, axe/keyboard/snapshot results |
| `P06` | `agent_authority` | Replay, scope escalation, wrong audience/tenant, expired approval, drift, missing approval, or unrecoverable partial effect succeeds | Action contract, policy/approval, signature, nonce, trace, pre/post state, recovery |
| `P07` | `verification_eval` | Broken oracle, contamination, held-out/mutated divergence, unstable repeats, or unsafe success counted as capability | Fixture health, revisions, seeds, reset, raw trace, scorer, distinct verdict classes |
| `P08` | `provenance_rights` | Mixed/generated/vendored file is misclassified, changed material verifies, stale trust metadata resolves, or source span cannot join artifact | File spans/digests, rights evidence, BOMs, attestation, trust metadata, review route |
| `P09` | `runtime_deployment` | Cross-tenant read/write, direct-IP/DNS-rebinding/metadata/proxy bypass, secret escape, limit bypass, or rollback leaves effect | Runtime/image/plugin/identity digests, egress trace, deny/abort/compensation result |
| `P10` | `economics_maintenance` | Units cannot reconcile, evidence cost dominates, no owner/freshness, provider change breaks block, or exit rebuild fails | FOCUS-shaped fixture, cost/latency, price/outage mutation, owner, exit trace |

## Version, source-quality, and access register

| ID | Source/version used | Class/quality | Access and limitation recorded |
|---|---|---|---|
| S01 | ISO/IEC/IEEE 29148:2018, Edition 2 | `N`, ISO catalog/abstract | Public abstract and current-status record; full normative text is access-limited |
| S02 | ISO/IEC 25010:2023, Edition 2 | `N`, ISO catalog/abstract | Public abstract; full standard is access-limited; quality model is not an oracle |
| S03 | OMG BPMN 2.0.2 | `N`, OMG catalog/PDF/machine files | Public normative PDF and files; diagram interchange itself does not ascertain semantic correctness |
| S04 | JSON Schema Draft 2020-12 | `N`, public specification | Public; draft naming is the release label, and spec text outranks schema disagreements |
| S05 | OpenAPI 3.1.1 plus 2024-11-10 dialect | `N`, official OAI pages | Public; official index also exposes 3.2.0, so 3.1.1 is deliberately pinned rather than called latest |
| S06 | AsyncAPI 3.1.0 | `N/D`, official project repository | Project page marks 3.1.0 latest; default branch is mutable, so future receipt must pin release/commit |
| S07 | CloudEvents core 1.0, released tag `ce@v1.0.2` | `N/D`, CNCF project | Stable `specversion` remains `1.0`; `main` shows 1.0.3-wip and is not used as normative evidence |
| S08 | MCP 2025-11-25 | `D`, versioned official docs | Public versioned docs; project protocol, not W3C/IETF standards-track; TypeScript schema is described as source of truth |
| S09 | A2A 1.0.0 | `D/N-adjacent`, official specification | Public released spec and version history; project-governed interoperability, not proof of authority/business correctness |
| S10 | OAuth RFC 9396, RFC 8693; RFC 9421 | `N`, IETF Standards Track RFCs | Public RFC text; application scopes, key trust, approval, and replay stores remain local choices |
| S11 | DTCG Format/Resolver 2025.10 | `N-adjacent`, W3C Community Group final reports | Public final reports; Community Group work is not a W3C Recommendation and does not prove UI quality |
| S12 | WCAG 2.2 (2024-12-12), WAI-ARIA 1.2 (2023-06-06) | `N`, W3C Recommendations | Public stable snapshots; applicable criteria and manual AT scope still require local decisions |
| S13 | SPDX 3.0.1, REUSE 3.3 | `N/E`, project/specification pages | Public; SPDX official index labels 3.0 current, so 3.0.1 pin and tool support must be recorded |
| S14 | CycloneDX 1.7; SLSA 1.2; in-toto current framework | `N/D/E`, first-party sources | Public specifications/docs; generator coverage, predicate policy, and dynamic dependencies remain open |
| S15 | TUF 1.0.35; OCI 1.1.0; Sigstore current docs | `N/D/E`, official project sources | Public; transport/signature/trust metadata is not code/rights/runtime proof |
| S16 | SWHID 1.1 / ISO/IEC 18670 (2025 announcement) | `N/E`, public spec and Software Heritage source | Public spec and announcement; identity/resolution/archival availability must be checked separately |
| S17 | SCITT RFC 9943 | `N`, IETF Proposed Standard | Public RFC, published June 2026; log governance, storage, issuer truth, privacy, and retention are out of scope |
| S18 | LSP 3.17; Tree-sitter/Comby/Semgrep/Coccinelle/CodeQL docs | `N/D/E`, primary docs/repos | Public; several tool pages do not freeze a runtime version, so receipts must pin installed versions |
| S19 | OTel semantic conventions 1.44.0; W3C Trace Context 2021-11-23 | `D/N`, official docs/Recommendation | Public; GenAI conventions moved to a separate repository; correlation is not immutable audit |
| S20 | FOCUS v1.2 | `N/D`, published open specification | Public; official index now exposes 1.3/1.4, so v1.2 is a pinned historical compatibility target |
| S21 | SPIFFE current standard page; WASI 0.2 | `D/E`, first-party docs | Public; SPIFFE page version is not frozen for all material and WASI exposes 0.3, so future runtime must pin explicitly |
| S22 | OpenFeature specification/current docs | `D/V`, project specification | Public normative sections and stability labels; no single frozen version number on inspected page, explicit `not stated` |
| S23 | ToolSandbox, AgentDojo, WorkArena++, BrowserGym, OSWorld, SWE families | `P/D/V/E`, papers/repos/leaderboards | Public research/project artifacts; no local task validity, contamination, or transfer claim |

## Validation and non-execution record

### Link and hash verification

The report uses direct first-party URLs and records the source version/date or an
explicit `not stated`. The verification pass checks HTTP reachability without
following any authenticated flow; redirects, PDFs, mutable branches, and
access-limited abstracts remain source-quality limitations rather than proofs.

The exact commands used for the final local receipt are:

- `wc -l research/actionmodel-builder-research-2026-08-26/expansion/outputs/standards-expansion.md` → `566`.
- `shasum -a 256 research/actionmodel-builder-research-2026-08-26/expansion/outputs/standards-expansion.md` → `22b4024b5163c77eca40597bda43802aca6d9e69f41e827465494ad90f8dbc3f`.
- For each report URL: `curl -L --max-time 15 --connect-timeout 8 --range 0-0 -s -o /dev/null -w "%{http_code} %{url_effective}\\n" URL`.

The completed HEAD reachability pass returned `200` for 59 of 62 URLs and
`403` for the three ISO catalog URLs used for 29148, 25010, and 29119-3; the
latter are reachable but access-limited by the publisher. No report URL
returned `404`. The initial one-byte range pass returned `200`/`206` for 59,
the same three expected `403`s, and one large-PDF timeout; HEAD checks returned
`200` for that PDF, so this receipt is reachability only and does not claim to
have downloaded or inspected every full document body.

This is URL reachability evidence only, not standards conformance and not an
executed scan/eval/deploy receipt.

### Required non-claims

- `license_scan`: not run.
- `contract_test`: not run.
- `build_cmd` / `smoke_test`: not run for a candidate block.
- `eval`: not run; no model/provider/tool result exists.
- `sandbox`, tenant, egress, workload-identity, or network test: not run.
- `registry` signature/trust/transparency verification: not run.
- `deployment`, canary, rollback, compensation, or recovery execution: not run.
- `admission`: not requested, not granted, and not implied.

The parent long-run goal remains active. This lane does not claim the 1,700-slot
wave floor, the 17,000-slot target, the 100-per-cell target, or any other lane's
artifact.

## Handoff and callback

After the artifact and validation checks pass, re-resolve the CENA pane with
`/Users/shaansisodia/.local/bin/herdr pane list`, verify its current content with
`pane read --source recent --lines 200`, send the following short callback, and
read back the visible pane to verify submission. Do not reuse a cached pane ID.

```text
[from: RCH-STANDARDS-W2] @CENA: DONE RCH-STANDARDS-W2. Applicability matrix written and verified; 566-line baseline hash preserved; no execution/admission claims. 0 blockers.
```

If the pane cannot be positively identified or the callback cannot be verified,
send a short `BLOCKED` callback with that exact operational reason; do not
pretend completion. Keep the parent 17,000-slot goal active in either case.

### Callback receipt

At `2026-08-26T16:59:30+07:00`, `/Users/shaansisodia/.local/bin/herdr pane list`
resolved the CENA workspace `w659e02f80e5bb1` to pane
`w659e02f80e5bb1-1` / terminal `term_659e5ff7c2d5817`. A preceding
`pane read --source recent --lines 200` matched the coordinator's active wave
work. The callback was sent with `pane run`; a subsequent
`pane read --source visible --lines 200` showed the exact callback text in the
pane, and `agent list` reported the pane as `working`. Submission is therefore
verified. Pane IDs remain volatile and must be re-resolved before any later
message.
