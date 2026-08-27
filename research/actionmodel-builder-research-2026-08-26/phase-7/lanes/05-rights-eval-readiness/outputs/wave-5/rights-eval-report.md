# Phase 7 Wave 5 rights and evaluation readiness

Lane: `P7-RIGHTS-EVAL-READINESS-W5`  
Artifact: `P7-RER-W5-REPORT-001`  
Status: **BLOCKED** on an immutable platform-register coverage gap; no surface identity is invented or padded.

## Boundary

`research_only=true`; `execution_status=UNEXECUTED`; `admission_status=NOT_ADMITTED`; `admitted_blocks=0`; `implementation_authorized=false`; `parent_goal_status=active`.

No login, credentials, client/private data, source execution, cloning/copying, implementation, build, deploy, benchmark, scan, or admission occurred. Public metadata, declared license signals, register claims, and synthetic matrices are not capability proof or rights clearance.

## Immutable inputs and local links

| Artifact | SHA-256 | Role |
|---|---|---|
| [Wave-5 dispatch receipt](../../../../wave-5-dispatch-receipt.json) | `f8b096b12f6b58a39fa58cc2ee6e614d585d5ef4da9a298fa826e903f09e6478` | scope and boundary |
| [Phase-7 program](../../../../PHASE-7-PROGRAM.md) | `bde02720f1b169c190607403632a6b8b8f783142f659f779869f54396228d2d0` | evidence contract |
| [Phase-3 candidate priority](../../../../../phase-3/outputs/github-candidate-priority.jsonl) | `5516415c8ebb66ad9fbf061f635cf564326e6de3cb65cba56ec7700a349733ce` | GCP-301..400 identity/rank selection |
| [Phase-2 platform register](../../../../../phase-2/outputs/platform-deepdives-register.jsonl) | `13213b409c1d66a0c105a39d6046f98c6c4dbd581b15aa93dfee17d909cecc1c` | immutable surface schema and gap |
| [W4 predecessor lane state](../wave-4/lane-state.json) | `2797e52f036103c678f184224d23d48f3873ac5ac3d55c65e7c076f375d8a603` | preserved prior packet |
| [W4 predecessor report](../wave-4/rights-eval-report.md) | `4afba7e0fde9329da527b8ca7ca8f064bc0ae534a07d6166244d43b9250c6c44` | schema/boundary precedent |
| [Competitor W4 lane state](../../../../lanes/03-competitor-features/outputs/wave-4/lane-state.json) | `556ce2144427fd6a0649eb977f937a8eb73b689427b05cf5a84641be70e184d1` | surface/evidence predecessor |
| [Competitor W4 evidence](../../../../lanes/03-competitor-features/outputs/wave-4/competitor-feature-evidence.jsonl) | `126c5fc8222e598cfbead9bb24d3811b3596802f2db628dade8369649b6f9726` | surface source context |
| [Rights ledger](rights-provenance-ledger.jsonl) | `8d126ac54f000d4b9f08902d74871ae038bf98e5d0e4c0a824ea3ffe1ac39c2b` | W5 output |
| [Evaluation ledger](evaluation-readiness-ledger.jsonl) | `91d398a943e057dffe20c815efc052974c48b4a55cbbabd6182759edf3b52fc9` | W5 output |
| [Missing-surface reconciliation](missing-surface-reconciliation.json) | `88dd9540930c0c85baf1538c6a2c7d5dacada9bce7316746645966e06dac30d4` | W5 output |
| [Lane state](lane-state.json) | recorded after callback | W5 lane receipt |

## Exact tranche accounting

| Record class | Requested | Emitted | Identity rule |
|---|---:|---:|---|
| Repository rights/provenance | 100 | 100 | exact GCP-301..GCP-400 by immutable Phase-3 rank |
| Repository evaluation readiness | 100 | 100 | same exact repository identities |
| Competitor-surface evaluation | max 20 | 0 | only immutable register IDs 68..87; none present |
| Evaluation rows total | max 120 | 100 | no guessed or padded surface rows |
| Missing-surface records | 20 | 20 | one explicit record for each ID 68..87 |

### Acceptance blocker

The immutable Phase-2 platform register contains 117 rows, 67 `existing_surface` rows, and maximum observed existing surface ID 67. Requested IDs **68 through 87 are all absent**. The [missing-surface reconciliation](missing-surface-reconciliation.json) contains one record per absent ID. No candidate row or guessed product identity is substituted; exact surface coverage remains blocked.

## Rights and provenance

All 100 repository rows include canonical owner/name/URL, default branch, immutable ref `NOT_CAPTURED`, source URLs/evidence class, support `UNKNOWN_NOT_REVIEWED`, declared license/SPDX signal, unreviewed LICENSE/NOTICE/provenance, SBOM `unknown_not_scanned`, maintenance boundary, falsifier, next clean-room gate, stop rules, upstream hashes, and research boundary.

Rights-status signals are inherited candidate metadata, not clearance:
- `copyleft_signal_requires_review`: 6
- `license_declared_but_not_rights_cleared`: 49
- `rights_unknown_no_declared_license`: 34
- `rights_unknown_nonstandard_or_other`: 4
- `rights_unknown_source_available_or_other`: 7
- `immutable_versions_captured`: 0
- `rights_cleared`: false for all 100
- `support_status_known`: 0
- `source_code_inspected`: 0
- `sbom/scans`: 0 / not run

## Evaluation readiness

Every repository evaluation row contains nine gate groups: identity/source; license/NOTICE/provenance; SBOM/dependencies; synthetic evaluation; authority/security; visual/runtime; portability/rollback; economics/maintenance; and client/legal authorization.

Every emitted evaluation row contains `FIX-OPS-001`, exactly 20 task IDs `T01..T20`, exactly 18 negative IDs `N01..N18`, `model_id=UNEXECUTED`, `model_version=UNEXECUTED`, `prompt_or_config_hash=UNEXECUTED`, `cost=UNEXECUTED`, `result=UNEXECUTED`, and `status=DESIGN_ONLY`. No model, runtime, browser, benchmark, security probe, dependency scan, or client operation ran.

## Limitations, falsifiers, and stop rules

- GitHub evidence is recorded public first-party metadata with URL reachability not independently re-resolved in this lane; descriptions, tags, stars, and declared licenses remain signals only.
- The platform-register absence is falsifiable only by a corrected immutable register receipt containing an actual `existing_surface` row for each ID.
- Missing fixture truth, owner, expected verdict, model/version, cost denominator, correction route, immutable identity, rights path, or receipt hash is a **HOLD**.
- Credentials, client/private data, source copying, execution, build, deploy, benchmark, scan, authority widening, cross-tenant access, secret exposure, or external side effect is a **KILL**.
- Future capability/reuse claims require authorized identity pinning, rights/NOTICE/provenance review, SBOM/dependency review, synthetic receipt, authority/security proof, runtime/rollback receipt, and economics/maintenance owner.

## Verification record

- `jsonl_schema_and_parse`: PASS (all emitted JSONL lines parse with required fields)
- `exact_repository_ranges`: GCP-301..400, 100 rights + 100 repository evaluation rows
- `surface_range`: blocked; requested 68..87, actual 0 present
- `missing_surface_records`: 20/20 explicit records for IDs 68..87
- `local_links`: PASS (17 local links resolve)
- `hashes`: PASS (output and upstream hashes match recorded inputs)
- `git_diff_check`: PASS
- `post_write_smoke`: PASS for schema/count/identity/missing-record/link/hash/boundary/whitespace/git checks; exact surface acceptance remains BLOCKED on IDs 68–87.
- `callback_status`: `sent_and_verified` — fresh CENA pane resolution, pane run, Enter-only retries while queued, sleep 2, visible readback

## Output links

- [rights-provenance-ledger.jsonl](rights-provenance-ledger.jsonl)
- [evaluation-readiness-ledger.jsonl](evaluation-readiness-ledger.jsonl)
- [missing-surface-reconciliation.json](missing-surface-reconciliation.json)
- [lane-state.json](lane-state.json)

Overall Phase 7 remains unpromoted; this is a blocked Wave-5 lane receipt only.
