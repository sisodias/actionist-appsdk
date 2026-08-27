# Phase 7 rights and evaluation readiness

Lane: P7-RIGHTS-EVAL-READINESS

Artifact: P7-RER-REPORT-001

Observed: 2026-08-26 for the inherited candidate and platform receipts

Status: metadata/design review only; no clean-room inspection, source reuse,
execution, benchmark, scan, implementation, or admission.

## Boundary

This tranche used only local Phase-2 through Phase-7 artifacts. It did not
clone, copy, open as source, execute, build, deploy, benchmark, scan, modify,
or license any repository. It did not log in to a vendor, use credentials,
access client or private data, run a runtime, or create an external side
effect.

    research_only: true
    execution_status: UNEXECUTED
    admission_status: NOT_ADMITTED
    admitted_blocks: 0
    implementation_authorized: false
    parent_goal_status: active
    client_validation: NOT_AUTHORIZED

Unknown, not_run, not_established, gated, and rights_uncleared are preserved
outcomes. A public URL, README, declared SPDX value, search or matrix signal,
feature tag, star count, or maintenance timestamp is not rights clearance or
capability proof.

## Deterministic tranche

Repositories are exactly GCP-001 through GCP-020 from the Phase-3 candidate
priority ledger, ordered by ascending rank. Each has the matching
GITHUB-RIGHTS-001 through GITHUB-RIGHTS-020 Phase-4 metadata receipt. This is a
bounded inspection queue, not a safety, quality, reuse, or market verdict.

Competitor surfaces are selected from the actual platform-register schema:
rows whose record_type is existing_surface and whose surface_id is numeric.
The first ten numeric IDs are used. The 50 expansion_candidate rows that lack
surface_id are intentionally not coerced into this tranche.

| Surface ID | Product surface | Comparator role |
|---:|---|---|
| 1 | Lovable | hosted full-stack agent builder |
| 2 | v0 | design-to-code builder |
| 3 | Bolt.new | browser-native app builder |
| 4 | Replit Agent | hosted agent/app lifecycle |
| 5 | Base44 | prompt-to-data-app surface |
| 6 | Manus WebDev | agent website lifecycle |
| 7 | Airtable Omni/Cobuilder | structured data-app control plane |
| 8 | Zapier Forms/Tables/Interfaces/MCP | integration/workflow registry |
| 9 | Onlook | visual source editing |
| 10 | Retool | governed internal app builder |

Product surfaces are not companies. Alias, family, rebrand, successor, OSS
sibling, dependency, and lifecycle relationships remain separate.

## Source lineage

The machine-readable ledgers retain source receipt IDs, URLs, dates, access
limits, and upstream artifact hashes. The source set and observed hashes are:

| Local source | SHA-256 | Role |
|---|---|---|
| [Block Contract v1](../../../../phase-2/outputs/block-contract-v1.json) | fb10cee0717ff8994bf8fa47858684e3214be9533528d17657ddeab8983b1fb8 | contract field families and boundary constants |
| [Standards and science](../../../../outputs/standards-and-science.md) | 623cb6eaff5116e5c053d164326650afa3ed9fb964f7502591806e2e515703c5 | rights, provenance, evaluation, runtime, and recovery references |
| [Standards applicability closure](../../../../phase-5/outputs/standards-applicability-closure.md) | 79bdb1d75b5229571b112ab995f55b244610dae60930d84cff5d55f18428a402 | 170 cells by 10 dimensions, readiness_unexecuted |
| [GitHub candidate priority](../../../../phase-3/outputs/github-candidate-priority.jsonl) | 5516415c8ebb66ad9fbf061f635cf564326e6de3cb65cba56ec7700a349733ce | GCP-001 through GCP-020 selection |
| [GitHub rights receipts](../../../../phase-4/outputs/github-top50-rights-receipts.jsonl) | 426774d04e2316b1728bdcbb787d20e4ec97ec330ec9f5944b74bd8c622915f2 | GITHUB-RIGHTS-001 through 020 |
| [Coverage gap audit](../../../outputs/coverage-gap-audit.md) | 6a37c6fcd57369e19fec4c689f024a0e13c92db85d8e8228e81d4f0a9381a22a | 270 complete pairs against 1,700 target |
| [Closure queue](../../../outputs/closure-queue.jsonl) | 99ead4a8f8de29228a73fe3fe3bd131ee952a5950b50c3bc126c1423add84c32 | partial pairs and missing dimensions |
| [Synthetic pilot specification](../../../../phase-3/outputs/synthetic-pilot-specification.md) | f86f6d7482669c227581e10784031b7fe74387351bdd028c5fd78fecdba2da26 | FIX-OPS-001 and future receipt design |
| [Decision ledger](../../../../phase-3/outputs/decision-ledger.md) | ed0bc7409ee9dbd7f9bbd7bb32cf64819be7875402d0d7069fc595803ecd8197 | ranked work and hold/kill rules |
| [Feature findings](../../../outputs/luna-competitor-feature-census-findings.md) | 5347053b6f10f9cccb6fefdc64ef5ecc578cf570c337377d0d454a4472b454f6 | surface universe and taxonomy conflict |
| [Platform register](../../../../phase-2/outputs/platform-deepdives-register.jsonl) | 13213b409c1d66a0c105a39d6046f98c6c4dbd581b15aa93dfee17d909cecc1c | stable surface IDs and documented signals |

Candidate and rights receipts are dated 2026-08-26 and state that recorded
public URLs were not independently resolved by those lanes. Platform-register
rows retain their own source labels, dates, HTTP/access descriptions, and
unknowns. This lane does not upgrade any inherited access or evidence class.

## Rights and provenance ledger

The 20 repository records in rights-provenance-ledger.jsonl each include:

- canonical owner/name, canonical URL, default branch, and explicit
  immutable_commit_or_tag NOT_CAPTURED;
- candidate-priority and rights-receipt IDs plus upstream packet SHA-256;
- source URLs, source kind, evidence class, confidence, query, date, and
  access boundary;
- declared license signal, SPDX signal, license-file presence, NOTICE state,
  license-text state, attribution state, and rights status;
- copyright ownership, contributor provenance, transformation lineage, and
  correction unknowns;
- dependency and lockfile signals without scanning; SBOM is
  unknown_not_scanned and scan_performed is false;
- metadata-only maintenance indicators without health or production claims;
- candidate-specific falsifier, next clean-room gate, stop rules, and boundary.

All 20 selected repositories are rights_uncleared with a declared permissive
signal. The tranche contains 10 Apache-2.0 signals and 10 MIT signals. These
are inherited declarations, not legal conclusions. No immutable commit/tag,
NOTICE review, contributor review, source digest, SBOM, transitive dependency
review, security scan, or reuse authorization was obtained.

The rights gate is HOLD until identity is pinned and license, NOTICE,
provenance, attribution, dependency obligations, correction ownership, and
exit path are reviewed in an explicitly authorized clean room. It must stop
before source copying or execution if a rights or provenance contradiction
appears.

## Evaluation readiness ledger

The evaluation-readiness-ledger.jsonl has 30 valid records: 20 repository rows
and 10 competitor-surface rows. Each row preserves nine gate groups:

1. identity and source;
2. license, NOTICE, and provenance;
3. SBOM and dependencies;
4. synthetic evaluation;
5. authority and security;
6. visual and runtime;
7. portability and rollback;
8. economics and maintenance;
9. client/legal authorization.

Every repository and surface row binds the future design to FIX-OPS-001 and
the comparison fixtures FIX-FIN-001, FIX-CRM-001, and FIX-SUP-001 where
applicable. Every row carries T01 through T20, 18 negative-case slots,
model_id UNEXECUTED, model_version UNEXECUTED, prompt/config hash UNEXECUTED,
cost UNEXECUTED, metrics UNEXECUTED, and result UNEXECUTED.

No row is evaluated. The statuses are design-only, not-run,
rights-uncleared, unknown-not-scanned, or not-authorized as appropriate.

## Synthetic task and receipt contract

The future 20-task cheap-model hypothesis must record task_id, fixture_id,
expected truth, observed result, model provider/id/version, prompt or config
hash, latency, usage and cost denominator, authority role, side-effect result,
evidence links, falsifier result, owner, retention, correction route, verdict,
and timestamp. This lane did not run a model or populate any result.

The future synthetic fixture must be frozen and hashed before execution. It
must retain stable IDs, tenant scope, source fields, malformed/stale/duplicate
values, unknown owners, expected truth, negative cases, and an explicit
read-only or staged boundary. A missing fixture hash, truth owner, expected
verdict, or correction route is a HOLD.

## Competitor feature readiness

The feature findings establish a denominator conflict: 68 keys are stated,
while 18 provisional domains enumerate 8 keys each, which is 144. The surface
rows retain eight high-value review keys only:

    exit.source_export
    exit.backend_export
    auth.consent_and_approval
    verify.independent_evidence
    recovery.source_rollback
    security.tenant_isolation
    economics.model_cost_visibility
    ops.maintenance_burden

These keys are a bounded queue, not a final taxonomy. Surface rows preserve
first-party or review-fragment signals for prompt/data/authority/import-export/
rollback/pricing/maintenance and mark feature status unknown until a
surface-by-feature record is independently evidenced. Product claim,
capability proof, lifecycle, rights, and source ownership stay separate.

The taxonomy cannot advance until the coordinator chooses either the
machine-counted 144-key dictionary after applicability review or a smaller
dictionary with an explicit mapping from every removed key.

## Falsifiers and stop rules

Repository falsifier: a pinned clean-room inspection falsifies readiness if
the identity, declared boundary, fixture truth, authority refusal, rights
path, or reproducible expected result is absent, contradictory, or dependent
on credentials without disclosure.

Surface falsifier: a bounded direct source or independent fixture falsifies
readiness if it contradicts the documented surface signal, remains inaccessible
after the allowed read-only gate, or cannot attribute export, authority,
rollback, and maintenance evidence.

Kill immediately for client/private data, credentials, login, source copying,
execution, build, deployment, benchmark, scan, external side effect, secret
leakage, cross-tenant access, authority widening, unapproved send/write/
publish, fabricated evidence, or silent conversion of unknown to pass.

Hold for missing owner, version, denominator, fixture truth, source digest,
rights, SBOM, correction route, portability, rollback, maintenance evidence,
or client/legal authorization. Hold is not a negative capability finding.
Kill is not block admission. Both preserve a research receipt.

## Exact counts and blockers

    rights_provenance_rows: 20
    evaluation_repository_rows: 20
    evaluation_surface_rows: 10
    evaluation_total_rows: 30
    repository_identity_count: 20
    competitor_surface_count: 10
    surface_id_range: 1..10
    feature_focus_keys: 8
    gate_groups_per_row: 9
    cheap_model_tasks_per_row: 20
    negative_case_slots_per_row: 18
    standards_context_cells: 170
    standards_dimensions_per_cell: 10
    top20_apache_signals: 10
    top20_mit_signals: 10
    rights_uncleared_rows: 20
    sbom_unknown_not_scanned_rows: 20
    immutable_versions_captured: 0
    capability_proofs: 0
    model_runs: 0
    runtime_runs: 0
    scans: 0
    admitted_blocks: 0

Current blockers are direct rights/provenance review, immutable version
pinning, unexecuted SBOM/evaluation/authority/runtime/portability/economics
gates, the feature-taxonomy conflict, and absent client/legal authorization.

## Source register

- [Phase-7 program](../../../PHASE-7-PROGRAM.md)
- [Phase-7 shared state](../../../phase-7-state.json)
- [Block Contract](../../../../phase-2/outputs/block-contract-v1.json)
- [Standards and science](../../../../outputs/standards-and-science.md)
- [Standards applicability](../../../../phase-5/outputs/standards-applicability-closure.md)
- [GitHub candidate priority](../../../../phase-3/outputs/github-candidate-priority.md)
- [GitHub rights receipts](../../../../phase-4/outputs/github-top50-rights-receipts.md)
- [Coverage gap](../../../outputs/coverage-gap-audit.md)
- [Closure queue](../../../outputs/closure-queue-summary.md)
- [Synthetic pilot](../../../../phase-3/outputs/synthetic-pilot-specification.md)
- [Decision ledger](../../../../phase-3/outputs/decision-ledger.md)
- [Feature findings](../../../outputs/luna-competitor-feature-census-findings.md)
- [Platform register](../../../../phase-2/outputs/platform-deepdives-register.jsonl)

## Correction and smoke status

The first generated evaluation file was rejected as invalid because a
generator assumed every platform-register row had surface_id and emitted a
Python traceback. It was overwritten before this report and is now parsed as
30 JSONL objects with zero traceback lines. The actual source schema was then
re-read and the tranche was restricted to existing_surface rows with numeric
surface_id.

    evaluation_jsonl: VALID
    traceback_lines: 0
    report_link_smoke: PASS
    lane_state: COMPLETE
    callback_status: DELIVERED_AND_VERIFIED
    execution_status: UNEXECUTED
    admission_status: NOT_ADMITTED
    implementation_authorized: false
    parent_goal_status: active

## Final callback receipt

    receipt_id: P7-RER-CORRECTED-DONE-001
    callback_status: DELIVERED_AND_VERIFIED
    recipient: CENA
    delivery: fresh CENA pane resolved by herdr pane list; pane content verified before send
    verification: pane run followed by sleep 2 readback; queued composer required Enter-only retry; message then appeared visibly submitted
    exact_counts: 20 rights rows; 20 repository evaluation rows; 10 competitor surface rows; 30 evaluation rows; 24 report links; 20-task matrix per row
    hashes: rights 0c896780ffc5ec4070a5b05041f43f506406064ba273e2b63b341dbb212205ec; evaluation 68be5716f4570cb3d1c7c526cf30eae6c2ac843ad7611e329c1f8b0edb54c971
    smoke: JSONL parse/required-fields/no-traceback/count/link/boundary/trailing-whitespace/git-diff PASS
    blockers: rights uncleared; immutable versions absent; SBOM/evaluation/authority/runtime/portability/economics gates unexecuted; taxonomy conflict; client/legal authorization absent
    execution_status: UNEXECUTED
    admission_status: NOT_ADMITTED
    admitted_blocks: 0
    implementation_authorized: false
    parent_goal_status: active
