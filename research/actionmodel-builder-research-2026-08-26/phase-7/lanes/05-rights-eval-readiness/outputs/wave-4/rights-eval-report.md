# Phase 7 Wave 4 rights and evaluation readiness

Lane: `P7-RIGHTS-EVAL-READINESS-W4`  
Artifact: `P7-RER-W4-REPORT-001`  
Status: **BLOCKED** on an immutable upstream coverage gap; the available tranche is emitted without padding or guessed identities.

## Boundary

`research_only=true`; `execution_status=UNEXECUTED`; `admission_status=NOT_ADMITTED`; `admitted_blocks=0`; `implementation_authorized=false`; `parent_goal_status=active`.

No login, credentials, client/private data, source execution, cloning/copying, implementation, build, deploy, benchmark, scan, or admission occurred. Public metadata, declared license signals, register claims, and synthetic matrices are not capability proof or rights clearance.

## Immutable inputs and local links

| Artifact | SHA-256 | Role |
|---|---|---|
| [Wave-4 dispatch receipt](../../../../wave-4-dispatch-receipt.json) | `df601782030aeda5a30e34e12c6a80fa1d9d0e13e1b335992f00f80821ea204e` | scope and boundary |
| [Phase-7 program](../../../../PHASE-7-PROGRAM.md) | `bde02720f1b169c190607403632a6b8b8f783142f659f779869f54396228d2d0` | evidence contract |
| [Phase-3 candidate priority](../../../../../phase-3/outputs/github-candidate-priority.jsonl) | `5516415c8ebb66ad9fbf061f635cf564326e6de3cb65cba56ec7700a349733ce` | GCP-201..300 identities/ranks |
| [Phase-2 platform register](../../../../../phase-2/outputs/platform-deepdives-register.jsonl) | `13213b409c1d66a0c105a39d6046f98c6c4dbd581b15aa93dfee17d909cecc1c` | actual existing_surface IDs |
| [Wave-3 predecessor report](../wave-3/rights-eval-report.md) | `7f803fc4ff1f77e9fa9fcd93c7ac6e76858d31dae04b6dba63ea95aff06c3bb0` | preserved schema/boundary precedent |
| [Rights ledger](rights-provenance-ledger.jsonl) | `d8f47d7baa217f8863fcb2dd12e980722b33834af046d5c4bfa65ed87ef02d7d` | W4 output |
| [Evaluation ledger](evaluation-readiness-ledger.jsonl) | `13f44688d5f25cd610ebf4cf5b3b554c0347f5dd569030e279f63e2514ce344e` | W4 output |
| [Lane state](lane-state.json) | recorded after callback | W4 lane receipt |

## Exact tranche accounting

| Record class | Requested | Emitted | Identity rule |
|---|---:|---:|---|
| Repository rights/provenance | 100 | 100 | exact GCP-201..GCP-300 by immutable Phase-3 rank |
| Repository evaluation readiness | 100 | 100 | same exact repository identities |
| Competitor-surface evaluation | 20 | 17 | actual numeric `existing_surface` IDs 51..67 only |
| Evaluation rows total | 120 | 117 | no guessed or padded surface rows |

### Acceptance blocker

The immutable platform register contains 117 rows total and 67 `existing_surface` rows overall. In the requested interval it contains exactly IDs 51–67. IDs **68, 69, and 70 are absent**, with no raw register mentions; therefore exact 20-row surface coverage cannot be truthfully emitted. The lane remains blocked pending a corrected/extended platform-register receipt. No placeholder surface identity is created.

## Rights and provenance

All 100 repository rows include canonical owner/name/URL, default branch, immutable ref `NOT_CAPTURED`, source URLs and evidence class, support `UNKNOWN_NOT_REVIEWED`, declared license/SPDX signal, unreviewed LICENSE/NOTICE/provenance, SBOM `unknown_not_scanned`, maintenance metadata boundary, candidate falsifier, next clean-room gate, stop rules, upstream hashes, and research boundary.

Rights-status signals inherited from the immutable candidate packet (not clearance):

- `copyleft_signal_requires_review`: 4
- `license_declared_but_not_rights_cleared`: 64
- `rights_unknown_no_declared_license`: 16
- `rights_unknown_nonstandard_or_other`: 5
- `rights_unknown_source_available_or_other`: 11
- `immutable_versions_captured`: 0
- `rights_cleared`: false for all 100
- `support_status_known`: 0
- `source_code_inspected`: 0
- `sbom/scans`: 0 / not run

## Evaluation readiness

Every emitted repository and surface row contains nine gate groups: identity/source; license/NOTICE/provenance; SBOM/dependencies; synthetic evaluation; authority/security; visual/runtime; portability/rollback; economics/maintenance; and client/legal authorization.

Every emitted evaluation row contains `FIX-OPS-001`, exactly 20 task IDs `T01..T20`, exactly 18 negative IDs `N01..N18`, `model_id=UNEXECUTED`, `model_version=UNEXECUTED`, `prompt_or_config_hash=UNEXECUTED`, `cost=UNEXECUTED`, `result=UNEXECUTED`, and `status=DESIGN_ONLY`. No model, runtime, browser, benchmark, security probe, dependency scan, or client operation ran.

## Source limitations and falsifiers

- GitHub evidence is recorded public first-party metadata with URL reachability not independently re-resolved in this lane; generic descriptions, tags, stars, and declared licenses remain signals only.
- Platform rows preserve source label, date, access limit, unknowns, and falsifier. HTTP-gated, shutdown, moved/legacy, and pricing-reader-limited surfaces are not upgraded.
- Missing fixture truth, owner, expected verdict, model/version, cost denominator, correction route, immutable identity, rights path, or receipt hash is a **HOLD**.
- Credentials, client/private data, source copying, execution, build, deploy, benchmark, scan, authority widening, cross-tenant access, secret exposure, or external side effect is a **KILL** for this research lane.
- Future capability or reuse claims require authorized clean-room identity pinning, rights/NOTICE/provenance review, SBOM/dependency review, synthetic receipt, authority/security proof, runtime/rollback receipt, and economics/maintenance owner.

## Verification record

- `jsonl_schema_and_parse`: PASS (all emitted JSONL lines parse with required fields)
- `exact_repository_ranges`: GCP-201..300, 100 rights + 100 repository evaluation rows
- `exact_surface_range`: blocked; actual 51..67 = 17, missing 68..70
- `local_links`: PASS (11 local links resolve)
- `hashes`: PASS (output hashes above; upstream hashes match recorded inputs)
- `git_diff_check`: PASS
- `post_write_smoke`: PASS for parse/schema/count/link/hash/boundary/whitespace/git checks; exact surface acceptance remains BLOCKED on IDs 68–70.
- `callback_status`: `sent_and_verified` — fresh CENA pane resolution, pane run, sleep 2, visible readback

## Output links

- [rights-provenance-ledger.jsonl](rights-provenance-ledger.jsonl)
- [evaluation-readiness-ledger.jsonl](evaluation-readiness-ledger.jsonl)
- [lane-state.json](lane-state.json)

Overall Phase 7 remains unpromoted; this is a blocked Wave-4 lane receipt only.
