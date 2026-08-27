# Phase 7 Wave 6 rights and evaluation readiness

Lane: `P7-RIGHTS-EVAL-READINESS-W6`  
Artifact: `P7-RER-W6-REPORT-001`  
Status: **BLOCKED** on an immutable platform-register coverage gap; no surface identity is invented or padded.

## Boundary

`research_only=true`; `execution_status=UNEXECUTED`; `admission_status=NOT_ADMITTED`; `admitted_blocks=0`; `implementation_authorized=false`; `parent_goal_status=active`.

No login, credentials, client/private data, source execution, cloning/copying, implementation, build, deploy, benchmark, scan, or admission occurred. Public metadata, declared license signals, register claims, and synthetic matrices are not capability proof or rights clearance.

## Immutable inputs and local links

| Artifact | SHA-256 | Role |
|---|---|---|
| [Wave-6 dispatch receipt](../../../../wave-6-dispatch-receipt.json) | `6db9bb2ddb4c7e50687d76c6ba0ba2b666c7bdc64c71c54c4fc4e1d1778bdfd6` | scope and boundary |
| [Phase-7 program](../../../../PHASE-7-PROGRAM.md) | `bde02720f1b169c190607403632a6b8b8f783142f659f779869f54396228d2d0` | evidence contract |
| [Closure queue](../../../../outputs/closure-queue.jsonl) | `99ead4a8f8de29228a73fe3fe3bd131ee952a5950b50c3bc126c1423add84c32` | dispatch context |
| [Coverage gap audit](../../../../outputs/coverage-gap-audit.json) | `9d1a6e9177bae58cb15f0532ce7a1dbb5765fc3d231c1396a7db0db0d684e948` | dispatch context |
| [W5 coordinator receipt](../../../../wave-5-coordinator-receipt.json) | `b716572c9dea9577b300d28678aa10db96e415d9883df9a2591595dda62aa5c6` | predecessor coordinator receipt |
| [Phase-3 candidate priority](../../../../../phase-3/outputs/github-candidate-priority.jsonl) | `5516415c8ebb66ad9fbf061f635cf564326e6de3cb65cba56ec7700a349733ce` | GCP-401..500 identity/rank selection |
| [Phase-2 platform register](../../../../../phase-2/outputs/platform-deepdives-register.jsonl) | `13213b409c1d66a0c105a39d6046f98c6c4dbd581b15aa93dfee17d909cecc1c` | immutable surface schema and gap |
| [W5 predecessor state](../wave-5/lane-state.json) | `fdd8fe4d0b4d68b58891d1145c9e92ced0591e84d05a9fb08a1e93630a35e674` | prior rights/eval packet |
| [W5 predecessor report](../wave-5/rights-eval-report.md) | `be81b1a0a5fa0cd4f8bd758e78009c24c9bacbbd5c7203e32a92f1386a728736` | prior schema/boundary |
| [Rights ledger](rights-provenance-ledger.jsonl) | `46c981de5dba485df99d82a2d83490739c811e5b65d0385eff28cbe9babc6ea0` | W6 output |
| [Evaluation ledger](evaluation-readiness-ledger.jsonl) | `03beed6769983e4c682d4d1135840c79de401d64b779c8ab40be5d2a3eebdae8` | W6 output |
| [Missing-surface reconciliation](missing-surface-reconciliation.json) | `bb31df016cbfbf430e3ae6d112ac96e96327a1b7a6e1c4eba864c3c23d32861b` | W6 output |
| [Lane state](lane-state.json) | recorded after callback | W6 lane receipt |

## Exact tranche accounting

| Record class | Requested | Emitted | Identity rule |
|---|---:|---:|---|
| Repository rights/provenance | 100 | 100 | exact GCP-401..GCP-500 by immutable Phase-3 rank |
| Repository evaluation readiness | 100 | 100 | same exact repository identities |
| Competitor-surface evaluation | max 20 | 0 | only immutable register IDs 88..107; none present |
| Evaluation rows total | max 120 | 100 | no guessed or padded surface rows |
| Missing-surface records | 20 | 20 | one explicit record for each ID 88..107 |

### Acceptance blocker

The immutable Phase-2 platform register contains 117 rows, 67 `existing_surface` rows, and maximum observed existing surface ID 67. Requested IDs **88 through 107 are all absent**. The [missing-surface reconciliation](missing-surface-reconciliation.json) contains one record per absent ID. No candidate row or guessed product identity is substituted; exact surface coverage remains blocked.

## Rights and provenance

All 100 repository rows include canonical owner/name/URL, default branch, immutable ref `NOT_CAPTURED`, source URLs/evidence class, support `UNKNOWN_NOT_REVIEWED`, declared license/SPDX signal, unreviewed LICENSE/NOTICE/provenance, SBOM `unknown_not_scanned`, maintenance boundary, falsifier, next clean-room gate, stop rules, upstream hashes, and research boundary.

Rights-status signals are inherited candidate metadata, not clearance:
- `copyleft_signal_requires_review`: 6
- `license_declared_but_not_rights_cleared`: 6
- `rights_unknown_no_declared_license`: 85
- `rights_unknown_nonstandard_or_other`: 1
- `rights_unknown_source_available_or_other`: 2
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
- `exact_repository_ranges`: GCP-401..500, 100 rights + 100 repository evaluation rows
- `surface_range`: blocked; requested 88..107, actual 0 present
- `missing_surface_records`: 20/20 explicit records for IDs 88..107
- `local_links`: PASS (18 local links resolve)
- `hashes`: PASS (output and upstream hashes match recorded inputs)
- `git_diff_check`: PASS
- `post_write_smoke`: PASS for schema/count/identity/missing-record/link/hash/boundary/whitespace/git checks; exact surface acceptance remains BLOCKED on IDs 88–107.
- `callback_status`: `sent_and_verified` — fresh CENA pane resolution, pane run, Enter-only retry while queued, bounded wait, visible submitted readback

## Output links

- [rights-provenance-ledger.jsonl](rights-provenance-ledger.jsonl)
- [evaluation-readiness-ledger.jsonl](evaluation-readiness-ledger.jsonl)
- [missing-surface-reconciliation.json](missing-surface-reconciliation.json)
- [lane-state.json](lane-state.json)

Overall Phase 7 remains unpromoted; this is a blocked Wave-6 lane receipt only.
