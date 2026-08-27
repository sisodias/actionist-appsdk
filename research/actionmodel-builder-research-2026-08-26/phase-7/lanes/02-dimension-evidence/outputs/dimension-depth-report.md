# Phase 7 Dimension Evidence Ledger — deterministic first tranche

**Lane:** `P7-DIMENSION-EVIDENCE`  
**Observed:** `2026-08-27`  
**Tranche:** `P7-DIMENSION-EVIDENCE-T1` — 10 repository-specific evidence rows, one per dimension.

## Boundary and denominator

This is a bounded research-only tranche, not overall corpus closure. The authoritative audit remains **270 complete industry–repository pairs out of a 1,700 target**, with **3,076 partial pairs** and a **1,430 complete-pair gap**. This lane adds ten dimension-evidence observations only; it does not mutate the merged matrix, closure queue, or the 270/1,700 counters.

No login, credentials, client/private data, browser side effects, cloning, source copying, source execution, build, deployment, benchmark, scan, implementation, admission, or external write occurred. Authenticated behavior is `U`; execution is `UNEXECUTED`; admission is `NOT_ADMITTED`; parent goal is active.

## Deterministic selection rule

For each of the ten dimensions, choose the `partial` closure-queue row with maximum `dimension_count`, breaking ties by ascending `queue_id`. Nine selected rows have `dimension_count=9`. No rank-9 row is missing `demand_atom_fit`, so that dimension uses the maximum available candidate at `dimension_count=8` (`P7-CLOSE-0446`). Queue missing-dimension arrays are copied into each record and remain open.

## Inputs and provenance

- Coverage audit: `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-7/outputs/coverage-gap-audit.json` — SHA-256 `9d1a6e9177bae58cb15f0532ce7a1dbb5765fc3d231c1396a7db0db0d684e948`; measured complete pairs 270/1700.
- Closure queue: `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-7/outputs/closure-queue.jsonl` — 3346 rows — SHA-256 `99ead4a8f8de29228a73fe3fe3bd131ee952a5950b50c3bc126c1423add84c32`.
- Phase-3 platform/industry evidence input remains prior context only; this tranche does not edit it.
- Prior industry, standards, and platform inputs were read as context; their current hashes are recorded in the lane packet and were not modified.
  - `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-5/outputs/industry-signal-depth.md` — SHA-256 `828ad9d41cbfd85d9d8af1e5c53b19670ba948657eab0cbe3250aeecc56af878`
  - `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-5/outputs/standards-applicability-closure.jsonl` — SHA-256 `89e144f62a6617223435c98396a6a49a79b6cf733bdba0431eb14ac57293e1f0`
  - `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-5/outputs/platform-p1-evidence-a.jsonl` — SHA-256 `71999ed84cec6ab52f3888ffe5891ff59261bcdb2f22a4157375f63c21ebd5ce`
  - `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-5/outputs/platform-p1-evidence-b.jsonl` — SHA-256 `52ce203fadd83d55cf321aceb03bcd29dec6924b5797f1dee5e991b0ba3467a6`
  - `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-6/outputs/platform-p2-evidence-a.jsonl` — SHA-256 `4a7a7616a3bdde37c7a8e057e5d2a404a9325c6a072f5ca0d9a7b2d89c63374c`
  - `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-6/outputs/platform-p2-evidence-b.jsonl` — SHA-256 `4136326cb94bcf4ce9a8f0b98fa2a3c1dd6d6e9521a7ab5041d84395a6e5641d`
  - `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-6/outputs/platform-p2-evidence-c.jsonl` — SHA-256 `b03a1445a27d090715fa26ff66e628563d7ae0504c7b99bae634499c04b920b8`

## Tranche index

| # | Queue | Industry | Repository | Dimension | Prior count | Missing dimensions retained | Access |
|---:|---|---|---|---|---:|---|---|
| 1 | P7-CLOSE-0446 | Course Creators | VoltAgent/awesome-design-md | demand_atom_fit | 8 | demand_atom_fit, workflow_behavior | public_github_reader_reached |
| 2 | P7-CLOSE-0181 | Accounting Firms | stevenmcsorley/Private-Legal-DMS | workflow_behavior | 9 | workflow_behavior | public_github_reader_reached |
| 3 | P7-CLOSE-0588 | Course Creators | verifywise-ai/verifywise | data_model | 9 | data_model | public_github_reader_reached |
| 4 | P7-CLOSE-0175 | Accounting Firms | samarailly51-pixel/claimpilot-harness | integration_surface | 9 | integration_surface | public_github_reader_reached |
| 5 | P7-CLOSE-0075 | Accounting Firms | aws-samples/serverless-eda-insurance-claims-processing | ui_assembly | 9 | ui_assembly | public_github_reader_reached |
| 6 | P7-CLOSE-0006 | Accounting Firms | AnilBotta/realtorspal-ai | agent_authority | 9 | agent_authority | public_github_reader_reached_stale |
| 7 | P7-CLOSE-0062 | Accounting Firms | amanraj74/hirepilot | verification_eval | 9 | verification_eval | public_github_reader_reached |
| 8 | P7-CLOSE-0007 | Accounting Firms | Arindam200/awesome-ai-apps | provenance_rights | 9 | provenance_rights | public_github_reader_reached |
| 9 | P7-CLOSE-0347 | Construction | onejune2018/Awesome-LLM-Eval | runtime_deployment | 9 | runtime_deployment | public_github_reader_reached_stale |
| 10 | P7-CLOSE-0857 | Education & Training | api-evangelist/alto-vebra | economics_maintenance | 9 | economics_maintenance | public_github_reader_reached_stale |

## Repository-specific evidence

### P7-DIM-0001 — VoltAgent/awesome-design-md — demand_atom_fit

- **Queue/identity:** P7-CLOSE-0446; Course Creators; canonical URL https://github.com/VoltAgent/awesome-design-md; dedupe key `VoltAgent/awesome-design-md`.
- **Prior state:** 8/10 dimensions; missing retained: demand_atom_fit, workflow_behavior; queue/matrix not mutated.
- **Source/access:** https://github.com/VoltAgent/awesome-design-md; public_github_reader_reached; crawled today by public reader
- **Direct claims:**
  - The repository describes a collection of DESIGN.md analyses from developer-focused websites. _(source: https://github.com/VoltAgent/awesome-design-md/blob/HEAD/README.md; repository README / description)_
  - The README says a DESIGN.md can be placed in a project and given to an AI coding agent to generate a page matching the design language. _(source: https://github.com/VoltAgent/awesome-design-md/blob/HEAD/README.md; README DESIGN.md sections)_
  - The README lists design patterns, tokens, rules, responsive behavior, and an agent prompt guide as parts of the documents. _(source: https://github.com/VoltAgent/awesome-design-md/blob/HEAD/README.md; README “What’s Inside Each DESIGN.md”)_
- **Inferred claims:**
  - For the Course Creators industry relation, the repository is a plausible source of reusable course, landing, or content-interface design atoms; the industry relation and demand are inferred, not validated.
- **Unknown Block Contract fields:** atom, source_of_truth, owner, research_boundary; status `U`.
- **Rights/SBOM:** license/notice/contributor provenance/attribution/maintenance/support/OEM/exit remain unknown; SBOM `unknown_not_scanned`; triage signal: Research-only reference; declared permissive state is not license clearance; inspect dependencies and file-level rights before any reuse decision..
- **Limitation:** The repository is a generic design-resource collection, not demand evidence or an end-user outcome receipt. The public page does not establish component fidelity, asset rights for extracted designs, adoption, or production behavior.
- **Falsifier:** Require a direct first-party contradiction or a future authorized clean-room fixture that falsifies the repository-specific claim; no falsifier was run in this research-only tranche.
- **Next read-only gate:** Direct source review, pinned digest, dependency/SBOM and license review, then a bounded read-only fixture with post-condition and rollback evidence.
- **Boundary:** research_only=true; authenticated_behavior=U; execution_status=UNEXECUTED; admission_status=NOT_ADMITTED; implementation_authorized=false.

### P7-DIM-0002 — stevenmcsorley/Private-Legal-DMS — workflow_behavior

- **Queue/identity:** P7-CLOSE-0181; Accounting Firms; canonical URL https://github.com/stevenmcsorley/Private-Legal-DMS; dedupe key `stevenmcsorley/Private-Legal-DMS`.
- **Prior state:** 9/10 dimensions; missing retained: workflow_behavior; queue/matrix not mutated.
- **Source/access:** https://github.com/stevenmcsorley/Private-Legal-DMS; public_github_reader_reached; crawled yesterday by public reader
- **Direct claims:**
  - The README describes a self-hosted legal document management system with matter-centric workflows, WORM compliance, and zero-trust security architecture. _(source: https://github.com/stevenmcsorley/Private-Legal-DMS/blob/HEAD/README.md; repository README / description)_
  - It describes code-freeze status, restoration documentation, database snapshots, document classifications, clearance-based access, audit trails, and multi-firm management. _(source: https://github.com/stevenmcsorley/Private-Legal-DMS/blob/HEAD/README.md; README project status and feature sections)_
  - The README identifies document-processing and background-processing stages including extraction, OCR, and a non-blocking pipeline. _(source: https://github.com/stevenmcsorley/Private-Legal-DMS/blob/HEAD/README.md; README document-management feature section)_
- **Inferred claims:**
  - The repository-specific documentation supplies workflow/state-transition signals relevant to legal or accounting operations, but production workflow behavior, recovery, and ownership were not executed or independently tested.
- **Unknown Block Contract fields:** state_machine.transitions, state_machine.terminal_states, idempotency_replay, evidence_receipts; status `U`.
- **Rights/SBOM:** license/notice/contributor provenance/attribution/maintenance/support/OEM/exit remain unknown; SBOM `unknown_not_scanned`; triage signal: Research-only reference; no declared license means rights are unknown; do not reuse or admit..
- **Limitation:** README claims and named restoration artifacts are weaker than a pinned checkout, runtime trace, negative-case receipt, or rollback test. The page also labels the project as code-frozen in September 2025, so current maintenance is unknown.
- **Falsifier:** Require a direct first-party contradiction or a future authorized clean-room fixture that falsifies the repository-specific claim; no falsifier was run in this research-only tranche.
- **Next read-only gate:** Direct source review, pinned digest, dependency/SBOM and license review, then a bounded read-only fixture with post-condition and rollback evidence.
- **Boundary:** research_only=true; authenticated_behavior=U; execution_status=UNEXECUTED; admission_status=NOT_ADMITTED; implementation_authorized=false.

### P7-DIM-0003 — verifywise-ai/verifywise — data_model

- **Queue/identity:** P7-CLOSE-0588; Course Creators; canonical URL https://github.com/verifywise-ai/verifywise; dedupe key `verifywise-ai/verifywise`.
- **Prior state:** 9/10 dimensions; missing retained: data_model; queue/matrix not mutated.
- **Source/access:** https://github.com/verifywise-ai/verifywise; public_github_reader_reached; crawled today by public reader
- **Direct claims:**
  - The README presents governance entities including vendors and vendor risks, AI use cases and risks, global tasks with a timeline view, an evidence center with folders, and a public AI trust center. _(source: https://github.com/verifywise-ai/verifywise/blob/HEAD/package.json; repository README major-features section)_
  - The repository describes itself as an AI governance and LLM evaluation platform supporting multiple governance frameworks and regulations. _(source: https://github.com/verifywise-ai/verifywise/blob/HEAD/package.json; repository description / README)_
  - The README exposes a package-level deployment surface and port requirements, but no normalized schema contract is established by this lane. _(source: https://github.com/verifywise-ai/verifywise/blob/HEAD/package.json; README ports and setup sections)_
- **Inferred claims:**
  - The named entities and views provide repository-specific data-model evidence for a governance application, while field-level schema, tenancy, retention, and row-access behavior remain unknown.
- **Unknown Block Contract fields:** atom.source_of_truth, provenance_rights.lineage, tenancy.data_owner, tenancy.retention, evidence_receipts; status `U`.
- **Rights/SBOM:** license/notice/contributor provenance/attribution/maintenance/support/OEM/exit remain unknown; SBOM `unknown_not_scanned`; triage signal: Research-only reference; preserve source_available_or_other license state and inspect dependencies/file-level rights before any reuse decision..
- **Limitation:** The rendered README does not prove database schema, migrations, row-level permissions, freshness, correction, or production data handling. No source checkout, build, or runtime inspection was performed.
- **Falsifier:** Require a direct first-party contradiction or a future authorized clean-room fixture that falsifies the repository-specific claim; no falsifier was run in this research-only tranche.
- **Next read-only gate:** Direct source review, pinned digest, dependency/SBOM and license review, then a bounded read-only fixture with post-condition and rollback evidence.
- **Boundary:** research_only=true; authenticated_behavior=U; execution_status=UNEXECUTED; admission_status=NOT_ADMITTED; implementation_authorized=false.

### P7-DIM-0004 — samarailly51-pixel/claimpilot-harness — integration_surface

- **Queue/identity:** P7-CLOSE-0175; Accounting Firms; canonical URL https://github.com/samarailly51-pixel/claimpilot-harness; dedupe key `samarailly51-pixel/claimpilot-harness`.
- **Prior state:** 9/10 dimensions; missing retained: integration_surface; queue/matrix not mutated.
- **Source/access:** https://github.com/samarailly51-pixel/claimpilot-harness; public_github_reader_reached; crawled today by public reader
- **Direct claims:**
  - The README describes ClaimPilot Harness as an evaluation product for claim AI agents, with agent adapters for built-in, command, HTTP service, and OpenAI-compatible /v1/chat/completions connections. _(source: https://github.com/samarailly51-pixel/claimpilot-harness/blob/HEAD/pyproject.toml; repository README adapter table)_
  - It describes adversarial insurance cases, reusable risk tags, deterministic quality gates, replayable reports, and benchmark scorecards. _(source: https://github.com/samarailly51-pixel/claimpilot-harness/blob/HEAD/pyproject.toml; README product description and case-pack table)_
  - The repository provides public links to a quickstart, release, challenge, and interactive demo, while those linked flows were not opened or executed in this lane. _(source: https://github.com/samarailly51-pixel/claimpilot-harness/blob/HEAD/pyproject.toml; README links section)_
- **Inferred claims:**
  - The adapter list is repository-specific integration-surface evidence for HTTP and command boundaries; credential scope, idempotency, read-back, and external-user authority remain unproven.
- **Unknown Block Contract fields:** ports, authority_consent.capability_scope, idempotency_replay, evidence_receipts; status `U`.
- **Rights/SBOM:** license/notice/contributor provenance/attribution/maintenance/support/OEM/exit remain unknown; SBOM `unknown_not_scanned`; triage signal: Research-only reference; declared permissive state is not license clearance; inspect dependencies and file-level rights before any reuse decision..
- **Limitation:** Public README documentation is weaker than adapter-level contract inspection, a pinned digest, a synthetic request/response receipt, or a negative-case replay. No service, API, demo, or agent was run.
- **Falsifier:** Require a direct first-party contradiction or a future authorized clean-room fixture that falsifies the repository-specific claim; no falsifier was run in this research-only tranche.
- **Next read-only gate:** Direct source review, pinned digest, dependency/SBOM and license review, then a bounded read-only fixture with post-condition and rollback evidence.
- **Boundary:** research_only=true; authenticated_behavior=U; execution_status=UNEXECUTED; admission_status=NOT_ADMITTED; implementation_authorized=false.

### P7-DIM-0005 — aws-samples/serverless-eda-insurance-claims-processing — ui_assembly

- **Queue/identity:** P7-CLOSE-0075; Accounting Firms; canonical URL https://github.com/aws-samples/serverless-eda-insurance-claims-processing; dedupe key `aws-samples/serverless-eda-insurance-claims-processing`.
- **Prior state:** 9/10 dimensions; missing retained: ui_assembly; queue/matrix not mutated.
- **Source/access:** https://github.com/aws-samples/serverless-eda-insurance-claims-processing; public_github_reader_reached; crawled yesterday by public reader
- **Direct claims:**
  - The README identifies a frontend using AWS AppSync and ReactJS and a backend using AWS serverless cloud-native services with AWS CDK as infrastructure as code. _(source: https://github.com/aws-samples/serverless-eda-insurance-claims-processing/blob/HEAD/lib; repository README structure and technology-stack sections)_
  - It identifies the frontend code location as /react-claims and the infrastructure setup at the repository root. _(source: https://github.com/aws-samples/serverless-eda-insurance-claims-processing/blob/HEAD/lib; README structure section)_
  - The README describes customer-facing voice interaction, data retrieval, real-time audio streaming, and an event-driven insurance-claims flow. _(source: https://github.com/aws-samples/serverless-eda-insurance-claims-processing/blob/HEAD/lib; README voice-AI and architecture sections)_
- **Inferred claims:**
  - The repository supplies a concrete React/AppSync UI assembly surface for an insurance workflow, but component registry, design tokens, accessibility, and UI behavior remain unverified.
- **Unknown Block Contract fields:** ui, registry, scaffold, design_tokens, accessibility, research_boundary; status `U`.
- **Rights/SBOM:** license/notice/contributor provenance/attribution/maintenance/support/OEM/exit remain unknown; SBOM `unknown_not_scanned`; triage signal: Research-only reference; source-available or other rights state retained; no reuse or admission is authorized..
- **Limitation:** README architecture and path claims do not prove a working interface, source fidelity, accessibility, responsive behavior, or reusable scaffold. No source path was opened, built, or run.
- **Falsifier:** Require a direct first-party contradiction or a future authorized clean-room fixture that falsifies the repository-specific claim; no falsifier was run in this research-only tranche.
- **Next read-only gate:** Direct source review, pinned digest, dependency/SBOM and license review, then a bounded read-only fixture with post-condition and rollback evidence.
- **Boundary:** research_only=true; authenticated_behavior=U; execution_status=UNEXECUTED; admission_status=NOT_ADMITTED; implementation_authorized=false.

### P7-DIM-0006 — AnilBotta/realtorspal-ai — agent_authority

- **Queue/identity:** P7-CLOSE-0006; Accounting Firms; canonical URL https://github.com/AnilBotta/realtorspal-ai; dedupe key `AnilBotta/realtorspal-ai`.
- **Prior state:** 9/10 dimensions; missing retained: agent_authority; queue/matrix not mutated.
- **Source/access:** https://github.com/AnilBotta/realtorspal-ai; public_github_reader_reached_stale; crawled two weeks ago by public reader
- **Direct claims:**
  - The repository describes an AI-powered real-estate CRM with lead management, AI agents, voice/SMS/email workflows, and analytics. _(source: https://github.com/AnilBotta/realtorspal-ai/blob/HEAD/frontend; repository README / description)_
  - The repository identifies a complete full-stack application with a Next.js frontend, Express.js backend, and AI-powered lead management. _(source: https://github.com/AnilBotta/realtorspal-ai/blob/HEAD/frontend; repository description)_
  - The public repository page exposes an external deployed URL, but no account, agent session, approval, or side effect was accessed. _(source: https://github.com/AnilBotta/realtorspal-ai/blob/HEAD/frontend; repository metadata)_
- **Inferred claims:**
  - The documented agent and channel surfaces are a repository-specific authority review lead, but actor scope, approvals, consent, egress, and side-effect controls remain unknown.
- **Unknown Block Contract fields:** authority_consent, actor, approval, egress, side_effects, research_boundary; status `U`.
- **Rights/SBOM:** license/notice/contributor provenance/attribution/maintenance/support/OEM/exit remain unknown; SBOM `unknown_not_scanned`; triage signal: Research-only reference; no declared license means rights are unknown; do not reuse or admit..
- **Limitation:** The reader reported a two-week-old crawl, so freshness is limited. Marketing/README claims and a deployed URL do not prove least privilege, approval semantics, tenant isolation, or safe side effects; no deployment was opened.
- **Falsifier:** Require a direct first-party contradiction or a future authorized clean-room fixture that falsifies the repository-specific claim; no falsifier was run in this research-only tranche.
- **Next read-only gate:** Direct source review, pinned digest, dependency/SBOM and license review, then a bounded read-only fixture with post-condition and rollback evidence.
- **Boundary:** research_only=true; authenticated_behavior=U; execution_status=UNEXECUTED; admission_status=NOT_ADMITTED; implementation_authorized=false.

### P7-DIM-0007 — amanraj74/hirepilot — verification_eval

- **Queue/identity:** P7-CLOSE-0062; Accounting Firms; canonical URL https://github.com/amanraj74/hirepilot; dedupe key `amanraj74/hirepilot`.
- **Prior state:** 9/10 dimensions; missing retained: verification_eval; queue/matrix not mutated.
- **Source/access:** https://github.com/amanraj74/hirepilot; public_github_reader_reached; crawled today by public reader
- **Direct claims:**
  - The README describes a deterministic AI engine that parses resumes, scores matches against jobs, explains strengths and gaps, and routes candidates through a seven-stage Kanban pipeline. _(source: https://github.com/amanraj74/hirepilot/blob/HEAD/packages; repository README product description)_
  - It describes a job-board flow with a weighted 0–100% AI match score and deterministic extraction of resume fields. _(source: https://github.com/amanraj74/hirepilot/blob/HEAD/packages; README candidate-flow section)_
  - The README exposes demo role accounts and an audit-log view, but those credentials and any live/demo behavior were not accessed. _(source: https://github.com/amanraj74/hirepilot/blob/HEAD/packages; README quick-start/demo section)_
- **Inferred claims:**
  - The repository-specific deterministic scoring and staged pipeline are verification/eval evidence leads, but no independent test, expected-versus-observed receipt, or recovery result was obtained.
- **Unknown Block Contract fields:** verification, eval, recovery.workflow, evidence_receipts; status `U`.
- **Rights/SBOM:** license/notice/contributor provenance/attribution/maintenance/support/OEM/exit remain unknown; SBOM `unknown_not_scanned`; triage signal: Research-only reference; declared permissive state is not license clearance; inspect dependencies and file-level rights before any reuse decision..
- **Limitation:** README-described determinism and score formulas are not an evaluation receipt. No demo credentials, live app, source, benchmark, or runtime was used; authenticated behavior and data handling remain unknown.
- **Falsifier:** Require a direct first-party contradiction or a future authorized clean-room fixture that falsifies the repository-specific claim; no falsifier was run in this research-only tranche.
- **Next read-only gate:** Direct source review, pinned digest, dependency/SBOM and license review, then a bounded read-only fixture with post-condition and rollback evidence.
- **Boundary:** research_only=true; authenticated_behavior=U; execution_status=UNEXECUTED; admission_status=NOT_ADMITTED; implementation_authorized=false.

### P7-DIM-0008 — Arindam200/awesome-ai-apps — provenance_rights

- **Queue/identity:** P7-CLOSE-0007; Accounting Firms; canonical URL https://github.com/Arindam200/awesome-ai-apps; dedupe key `Arindam200/awesome-ai-apps`.
- **Prior state:** 9/10 dimensions; missing retained: provenance_rights; queue/matrix not mutated.
- **Source/access:** https://github.com/Arindam200/awesome-ai-apps; public_github_reader_reached; crawled today by public reader
- **Direct claims:**
  - The repository describes itself as a collection of 131 committed projects, tutorials, and recipes covering RAG, agents, workflows, and MCP-backed tools. _(source: https://github.com/Arindam200/awesome-ai-apps/blob/HEAD/README.md; repository README / description)_
  - The public repository page exposes a MIT license resource, code-of-conduct, and contributing links at the collection level. _(source: https://github.com/Arindam200/awesome-ai-apps/blob/HEAD/README.md; repository resources navigation)_
  - The page identifies public activity metadata and a large collection scale; included project-level rights are not enumerated in the inspected page. _(source: https://github.com/Arindam200/awesome-ai-apps/blob/HEAD/README.md; repository metadata)_
- **Inferred claims:**
  - The collection-level MIT signal is useful provenance metadata for the repository itself, but it cannot clear the licenses, notices, contributor rights, dependencies, or SBOM of the 131 included projects.
- **Unknown Block Contract fields:** provenance_rights.license, notices, sbom, attribution, lineage; status `U`.
- **Rights/SBOM:** license/notice/contributor provenance/attribution/maintenance/support/OEM/exit remain unknown; SBOM `unknown_not_scanned`; triage signal: Research-only reference; preserve declared_permissive license state and inspect dependencies/file-level rights before any reuse decision..
- **Limitation:** No license files, dependency trees, notices, or SBOM were scanned. Collection-level licensing is not a legal conclusion for included projects or copied assets; no reuse or admission is authorized.
- **Falsifier:** Require a direct first-party contradiction or a future authorized clean-room fixture that falsifies the repository-specific claim; no falsifier was run in this research-only tranche.
- **Next read-only gate:** Direct source review, pinned digest, dependency/SBOM and license review, then a bounded read-only fixture with post-condition and rollback evidence.
- **Boundary:** research_only=true; authenticated_behavior=U; execution_status=UNEXECUTED; admission_status=NOT_ADMITTED; implementation_authorized=false.

### P7-DIM-0009 — onejune2018/Awesome-LLM-Eval — runtime_deployment

- **Queue/identity:** P7-CLOSE-0347; Construction; canonical URL https://github.com/onejune2018/Awesome-LLM-Eval; dedupe key `onejune2018/Awesome-LLM-Eval`.
- **Prior state:** 9/10 dimensions; missing retained: runtime_deployment; queue/matrix not mutated.
- **Source/access:** https://github.com/onejune2018/Awesome-LLM-Eval; public_github_reader_reached_stale; crawled last week by public reader
- **Direct claims:**
  - The README describes Awesome-LLM-Eval as a curated list of evaluation tools, datasets/benchmarks, demos, leaderboards, papers, docs, and models. _(source: https://github.com/onejune2018/Awesome-LLM-Eval/blob/HEAD/docs; repository README opening)_
  - The README links the project to an evaluation survey and lists MIT and Creative Commons license notices for the collection. _(source: https://github.com/onejune2018/Awesome-LLM-Eval/blob/HEAD/docs; README license and citation sections)_
  - The public page presents resource links and repository metadata, but no repository-specific runtime, deployment, or rollback receipt is provided by the inspected surface. _(source: https://github.com/onejune2018/Awesome-LLM-Eval/blob/HEAD/docs; repository README and metadata)_
- **Inferred claims:**
  - This repository-specific observation supports an explicit runtime/deployment unknown: it is a catalog of evaluation material, not evidence that a selected application can run, deploy, isolate, or recover.
- **Unknown Block Contract fields:** deployment, runtime, tenancy, secrets, rollback, recovery.workflow; status `U`.
- **Rights/SBOM:** license/notice/contributor provenance/attribution/maintenance/support/OEM/exit remain unknown; SBOM `unknown_not_scanned`; triage signal: Research-only reference; preserve declared_permissive license state and inspect dependencies/file-level rights before any reuse decision..
- **Limitation:** The reader reported a last-week crawl. Catalog entries, benchmark names, and license notices do not establish executable packaging, environment compatibility, deployment, tenancy, or rollback; no item was executed or cloned.
- **Falsifier:** Require a direct first-party contradiction or a future authorized clean-room fixture that falsifies the repository-specific claim; no falsifier was run in this research-only tranche.
- **Next read-only gate:** Direct source review, pinned digest, dependency/SBOM and license review, then a bounded read-only fixture with post-condition and rollback evidence.
- **Boundary:** research_only=true; authenticated_behavior=U; execution_status=UNEXECUTED; admission_status=NOT_ADMITTED; implementation_authorized=false.

### P7-DIM-0010 — api-evangelist/alto-vebra — economics_maintenance

- **Queue/identity:** P7-CLOSE-0857; Education & Training; canonical URL https://github.com/api-evangelist/alto-vebra; dedupe key `api-evangelist/alto-vebra`.
- **Prior state:** 9/10 dimensions; missing retained: economics_maintenance; queue/matrix not mutated.
- **Source/access:** https://github.com/api-evangelist/alto-vebra; public_github_reader_reached_stale; crawled two days ago by public reader
- **Direct claims:**
  - The repository describes Alto/Vebra Alto as a UK estate-agency CRM and records created and modified dates of 2026-07-26 in its public metadata. _(source: https://github.com/api-evangelist/alto-vebra/blob/HEAD/packages; repository README / metadata)_
  - The README describes an open unauthenticated developer portal with a 95-path OpenAPI document and 24 CloudEvents webhook types, while stating that credentials are partner-only and require an existing contract and agency activation. _(source: https://github.com/api-evangelist/alto-vebra/blob/HEAD/packages; README API posture section)_
  - The README lists API resource families spanning contacts, listings, valuations, offers, sales/lettings progression, tenancies, property management, work orders, and client accounting. _(source: https://github.com/api-evangelist/alto-vebra/blob/HEAD/packages; README Alto API section)_
- **Inferred claims:**
  - The repository-specific evidence indicates a contract-gated commercial/API operating model and a maintenance-relevant public documentation snapshot, but pricing, support enforcement, continuity, and exit costs remain unknown.
- **Unknown Block Contract fields:** economics, pricing_usage, maintenance, support, cost_visibility, exit; status `U`.
- **Rights/SBOM:** license/notice/contributor provenance/attribution/maintenance/support/OEM/exit remain unknown; SBOM `unknown_not_scanned`; triage signal: Research-only reference; preserve no_declared_license license state and inspect dependencies/file-level rights before any reuse decision..
- **Limitation:** The reader reported a two-day-old crawl. Repository timestamps and documented API posture are not a cost, SLA, support, maintenance, or vendor-continuity receipt; partner access was not requested or used.
- **Falsifier:** Require a direct first-party contradiction or a future authorized clean-room fixture that falsifies the repository-specific claim; no falsifier was run in this research-only tranche.
- **Next read-only gate:** Direct source review, pinned digest, dependency/SBOM and license review, then a bounded read-only fixture with post-condition and rollback evidence.
- **Boundary:** research_only=true; authenticated_behavior=U; execution_status=UNEXECUTED; admission_status=NOT_ADMITTED; implementation_authorized=false.

## Tranche completeness and non-claims

The tranche contains 10 ledger rows and 10 source receipts, covering 10/10 dimensions exactly once. It does not claim any complete-pair count increase, overall target completion, implementation readiness, capability proof, or admission.

## Verification

The lane smoke script is `smoke-dimension-evidence.mjs`. It passed structural, source/identity parity, boundary, link, rights/SBOM-state, tranche-count, denominator, and git-diff checks: 10 ledger rows, 10 source receipts, and 10/10 dimensions. The 270 complete-pair baseline and 1,700 target were unchanged.

## Callback

Fresh CENA pane resolution used `/Users/shaansisodia/.local/bin/herdr --session herdr-2 pane list`; pane content was verified before delivery. The short DONE receipt was visible/submitted after the required two-second verification. Callback status: `sent_and_verified`; blockers: `0`.

`[from: RCH-P7-DIMENSION-EVIDENCE] @CENA: DONE deterministic T1. 10 ledger rows + 10 source receipts across all 10 dimensions; outputs/02-dimension-evidence/{dimension-evidence-ledger.jsonl,source-receipts.jsonl,dimension-depth-report.md,lane-state.json,smoke-dimension-evidence.mjs}. Smoke PASS (structural/parity/boundary/links/rights-SBOM/denominator/git); queue SHA256 99ead4a8f8de29228a73fe3fe3bd131ee952a5950b50c3bc126c1423add84c32; audit SHA256 9d1a6e9177bae58cb15f0532ce7a1dbb5765fc3d231c1396a7db0db0d684e948. Baseline remains 270/1700; no overall completion claim. UNEXECUTED/NOT_ADMITTED/parent-active; blockers 0.`
