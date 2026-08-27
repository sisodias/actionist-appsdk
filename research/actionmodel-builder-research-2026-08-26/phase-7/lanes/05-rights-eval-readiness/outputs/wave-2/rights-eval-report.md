# Phase 7 Wave 2 rights and evaluation readiness

Lane: P7-RIGHTS-EVAL-READINESS-W2

Artifact: P7-RER-W2-REPORT-001

Status: bounded metadata/design tranche; no clean-room inspection, source
reuse, execution, benchmark, scan, implementation, or admission.

## Boundary

This Wave-2 tranche used only local Phase-2 through Phase-7 artifacts. It did
not clone, copy, open as source, execute, build, deploy, benchmark, scan,
modify, or license any repository. It did not log in to a vendor, use
credentials, access client or private data, run a runtime, or create an
external side effect.

    research_only: true
    execution_status: UNEXECUTED
    admission_status: NOT_ADMITTED
    admitted_blocks: 0
    implementation_authorized: false
    parent_goal_status: active
    client_validation: NOT_AUTHORIZED

Unknown, not_run, not_established, gated, and rights_uncleared are intentional
outcomes. A public URL, README, declared SPDX value, search signal, feature
tag, star count, or maintenance timestamp is not rights clearance or
capability proof.

## Deterministic Wave-2 tranche

Repository records are exactly GCP-021 through GCP-100 from the Phase-3
candidate-priority ledger, ordered by ascending rank. GCP-021 through GCP-050
join the Phase-4 top-50 rights packet; GCP-051 through GCP-100 join the
Phase-5 next-50 rights packet. No GCP-001 through GCP-020 record is rewritten.

Competitor records are exactly numeric existing_surface rows with platform
surface_id 11 through 30. The 50 expansion_candidate rows without a
surface_id are excluded rather than assigned guessed identities.

| Range | Record type | Count | Deterministic source |
|---|---|---:|---|
| GCP-021..GCP-100 | repository rights/provenance | 80 | Phase-3 rank and Phase-4/5 rights receipts |
| surface_id 11..30 | competitor surface evaluation | 20 | platform register existing_surface schema |

## Upstream source hashes

| Local source | SHA-256 | Use |
|---|---|---|
| [Phase-3 GitHub candidate priority](../../../../../phase-3/outputs/github-candidate-priority.jsonl) | 5516415c8ebb66ad9fbf061f635cf564326e6de3cb65cba56ec7700a349733ce | GCP-021..100 rank and identity selection |
| [Phase-4 top-50 rights receipts](../../../../../phase-4/outputs/github-top50-rights-receipts.jsonl) | 426774d04e2316b1728bdcbb787d20e4ec97ec330ec9f5944b74bd8c622915f2 | GCP-021..050 rights metadata |
| [Phase-5 next-50 rights receipts](../../../../../phase-5/outputs/github-next50-rights-receipts.jsonl) | 9b77612a14144fa9a1cf8e266df725524c9e8ca2715ed27a292086acc9a5feed | GCP-051..100 rights metadata |
| [Platform register](../../../../../phase-2/outputs/platform-deepdives-register.jsonl) | 13213b409c1d66a0c105a39d6046f98c6c4dbd581b15aa93dfee17d909cecc1c | actual existing_surface IDs 11..30 |
| [Block Contract v1](../../../../../phase-2/outputs/block-contract-v1.json) | fb10cee0717ff8994bf8fa47858684e3214be9533528d17657ddeab8983b1fb8 | contract and boundary field families |
| [Standards and science](../../../../../outputs/standards-and-science.md) | 623cb6eaff5116e5c053d164326650afa3ed9fb964f7502591806e2e515703c5 | rights, provenance, evaluation, runtime, recovery reference classes |
| [Standards applicability closure](../../../../../phase-5/outputs/standards-applicability-closure.md) | 79bdb1d75b5229571b112ab995f55b244610dae60930d84cff5d55f18428a402 | 170 cells and ten unexecuted dimensions |
| [Coverage gap audit](../../../../outputs/coverage-gap-audit.md) | 6a37c6fcd57369e19fec4c689f024a0e13c92db85d8e8228e81d4f0a9381a22a | closure gap context |
| [Closure queue](../../../../outputs/closure-queue.jsonl) | 99ead4a8f8de29228a73fe3fe3bd131ee952a5950b50c3bc126c1423add84c32 | partial-pair and missing-dimension context |
| [Synthetic pilot](../../../../../phase-3/outputs/synthetic-pilot-specification.md) | f86f6d7482669c227581e10784031b7fe74387351bdd028c5fd78fecdba2da26 | FIX-OPS-001, negative cases, receipts |
| [Decision ledger](../../../../../phase-3/outputs/decision-ledger.md) | ed0bc7409ee9dbd7f9bbd7bb32cf64819be7875402d0d7069fc595803ecd8197 | ranked work and hold/kill rules |
| [Wave-1 report](../rights-eval-report.md) | c864463d86f21e56679ab0194d7d1682bda8d5b7f50e64be99cc73cb2bd19e75 | inherited schema and prior boundary |

Candidate and rights receipts are dated 2026-08-26 and retain public metadata
reachability limits. This lane does not upgrade those access or evidence
classes.

## Rights and provenance result

Each of the 80 repository rows includes canonical owner/name and URL,
default branch, explicit immutable_commit_or_tag NOT_CAPTURED, candidate and
rights receipt IDs, upstream packet hashes, source URL and evidence class,
license and SPDX signal, NOTICE and provenance states, SBOM state, maintenance
metadata boundary, falsifier, clean-room next gate, stop rules, and boundary.

Observed inherited signal distribution:

    rights_provenance_rows: 80
    license_declared_but_not_rights_cleared: 79
    copyleft_signal_requires_review: 1
    spdx_Apache-2.0: 34
    spdx_MIT: 45
    spdx_GPL-3.0: 1
    immutable_versions_captured: 0
    sbom_unknown_not_scanned: 80
    sbom_scans_performed: 0
    source_code_inspected: 0

The license and SPDX values are declared signals only. NOTICE, license-text,
copyright ownership, contributor provenance, attribution obligations,
transformation lineage, transitive dependency obligations, security findings,
and reuse rights remain NOT_REVIEWED or UNKNOWN. No row is reusable block
input.

## Evaluation readiness result

The evaluation ledger has 100 rows: 80 repository rows and 20 competitor
surface rows. Every row includes the same nine gate groups:

1. identity and source;
2. license, NOTICE, and provenance;
3. SBOM and dependencies;
4. synthetic evaluation;
5. authority and security;
6. visual and runtime;
7. portability and rollback;
8. economics and maintenance;
9. client/legal authorization.

Every row declares FIX-OPS-001, a 20-task design matrix T01 through T20, 18
negative-path IDs N01 through N18, model_id UNEXECUTED, model_version
UNEXECUTED, prompt/config hash UNEXECUTED, cost UNEXECUTED, metrics
UNEXECUTED, and result UNEXECUTED. No model, runtime, browser, benchmark,
security probe, scan, or client operation ran.

The future receipt must capture task, fixture, expected truth, observed result,
model provider/id/version, prompt/config hash, latency, usage and cost
denominator, authority role, side-effect result, evidence links, falsifier,
owner, retention, correction route, verdict, and timestamp. A missing fixture
hash, truth owner, expected verdict, version, or correction route is HOLD.

## Competitor surface context

Surface rows 11 through 30 retain the platform register source label, URL,
date, access limit, prompt/data/authority/import-export/rollback/pricing/
maintenance signals, and unknowns. They do not assert authenticated behavior
or capability proof.

The feature findings retain the unresolved taxonomy conflict: 68 keys stated
versus 144 keys enumerated by 18 domains with 8 keys each. The Wave-2 surface
rows use a bounded review queue, not a final denominator:

    exit.source_export
    exit.backend_export
    auth.consent_and_approval
    verify.independent_evidence
    recovery.source_rollback
    security.tenant_isolation
    economics.model_cost_visibility
    ops.maintenance_burden

Feature status remains unknown until an independently evidenced surface×feature
row exists. Product claim, capability proof, lifecycle, rights, and source
ownership remain separate fields.

## Falsifiers and stop rules

Repository falsifier: a pinned clean-room review falsifies readiness if
identity, source boundary, fixture truth, authority refusal, rights path, or
reproducible expected result is absent, contradictory, or credential-dependent.

Surface falsifier: a bounded direct source or independent fixture falsifies
readiness if it contradicts the documented signal, remains inaccessible after
the allowed gate, or cannot attribute export, authority, rollback, or
maintenance evidence.

Kill immediately for client/private data, credentials, login, source copying,
execution, build, deployment, scan, benchmark, external side effect, secret
leakage, cross-tenant access, authority widening, unapproved send/write/
publish, fabricated evidence, or converting unknown to pass.

Hold for missing owner, version, denominator, fixture truth, source digest,
rights, SBOM, correction route, portability, rollback, maintenance evidence,
or client/legal authorization. Hold is not a negative capability finding.
Kill is not block admission. Both preserve the research boundary.

## Exact counts and blockers

    rights_provenance_rows: 80
    repository_evaluation_rows: 80
    competitor_surface_evaluation_rows: 20
    evaluation_total_rows: 100
    repository_identity_count: 80
    competitor_surface_count: 20
    surface_id_range: 11..30
    gate_groups_per_row: 9
    cheap_model_tasks_per_row: 20
    negative_case_slots_per_row: 18
    standards_context_cells: 170
    standards_dimensions_per_cell: 10
    rights_uncleared_or_review_required: 80
    immutable_versions_captured: 0
    capability_proofs: 0
    model_runs: 0
    runtime_runs: 0
    scans: 0
    admitted_blocks: 0

Blockers are rights/provenance review, immutable version pinning, SBOM and
dependency review, unexecuted evaluation/authority/runtime/portability/
economics gates, the competitor taxonomy conflict, and absent client/legal
authorization.

## Source register

- [Phase-7 program](../../../../PHASE-7-PROGRAM.md)
- [Shared Phase-7 state](../../../../phase-7-state.json)
- [Wave-1 rights/eval report](../rights-eval-report.md)
- [Wave-1 lane state](../lane-state.json)
- [Block Contract](../../../../../phase-2/outputs/block-contract-v1.json)
- [Standards and science](../../../../../outputs/standards-and-science.md)
- [Standards applicability](../../../../../phase-5/outputs/standards-applicability-closure.md)
- [Candidate priority](../../../../../phase-3/outputs/github-candidate-priority.md)
- [Top-50 rights packet](../../../../../phase-4/outputs/github-top50-rights-receipts.md)
- [Next-50 rights packet](../../../../../phase-5/outputs/github-next50-rights-receipts.md)
- [Coverage gap](../../../../outputs/coverage-gap-audit.md)
- [Closure queue](../../../../outputs/closure-queue-summary.md)
- [Synthetic pilot](../../../../../phase-3/outputs/synthetic-pilot-specification.md)
- [Decision ledger](../../../../../phase-3/outputs/decision-ledger.md)
- [Feature findings](../../../../outputs/luna-competitor-feature-census-findings.md)
- [Platform register](../../../../../phase-2/outputs/platform-deepdives-register.jsonl)

## Smoke and callback status

The Wave-2 JSONL was generated in bounded batches and validated with
json.loads on every line. No line begins Traceback. The actual platform source
schema was filtered by record_type existing_surface and numeric surface_id;
rows without that field were not coerced.

    rights_jsonl: VALID
    evaluation_jsonl: VALID
    report_links: PASS (28 local links resolve)
    post_write_smoke: PASS
    callback_status: lane-state-managed
    callback_verification: recorded in lane-state after fresh CENA delivery
    execution_status: UNEXECUTED
    admission_status: NOT_ADMITTED
    implementation_authorized: false
    parent_goal_status: active
