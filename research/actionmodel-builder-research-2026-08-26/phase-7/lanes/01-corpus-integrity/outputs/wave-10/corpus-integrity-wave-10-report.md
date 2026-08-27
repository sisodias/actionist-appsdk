# Phase 7 corpus-integrity Wave 10 report

Lane: `P7-CORPUS-INTEGRITY-W10`  
Observed: `2026-08-27`  
Mode: research-only; parent goal active; no overall completion claim.

## Outcome

W10 selects exactly the next 10 remaining partial closure-queue pairs in each of 17 industries: 170 new canonical industry–repository pairs. The exclusion union is the 10 Wave-1 T1 IDs plus the 170 dimension-selected IDs from each of Waves 2–9, exactly 1,370 queue IDs. A separate pair-level guard excludes every prior W1–W9 industry/canonical-repository identity. Every selected row remains `complete_status=NOT_COMPLETE`, `is_complete=false`, and carries its actual missing dimensions.

The tranche advances selection coverage only. It preserves complete=270, partial=3,076, and the complete-pair gap=1,430. No pair is promoted, padded, or treated as complete.

## Inputs and deterministic method

Inputs were the final W10 dispatch receipt, Phase-7 program, immutable closure queue, coverage audit/manifest, the 284-row baseline register, the 500-row expansion register, matrix observations, W9 coordinator/dispatch receipts, and W1–W9 corpus plus W2–W9 dimension artifacts. All were read from existing local research artifacts. No vendor login, credentials, client/private data, external write, source execution, clone/copy, implementation, build, deployment, benchmark, scan, or admission occurred.

Selection rule: `dimension_count descending then queue_id ascending; exclude Wave-1 T1 and Wave-2 through Wave-9 dimension-selected queue IDs, then exclude every prior industry/canonical-repository identity; take the next 10 partial rows per industry`. Canonical identity is case-folded GitHub `owner/name` plus normalized `https://github.com/owner/name`; URL query/fragment and trailing slash are removed. Queue status, dimension count, source URLs, observed dates, and evidence classes are preserved. No web query was run in W10 (`query=none`); source/query provenance is inherited and explicitly dated in each record.
Final W10 dispatch SHA256: `e3c44562d20809cb1a00b1b22aec5acc434ebcf8ff5516a154a545b5fe8aa0fc` (contract hash prefix supplied by coordinator: `e3c44562`). The dispatch's phase-state anchor is `eb426594a23dc4a9cb0b4e2d41168b2cf72e4038e4f3d1d82646a61150887d56`; this lane did not write central state.

## Exact counters

| Measure | Count |
|---|---:|
| Industries | 17 |
| Selected pairs per industry | 10 |
| W10 selection rows | 170 |
| W10 identity edges | 170 |
| W1 T1 queue IDs excluded | 10 |
| W2 dimension queue IDs excluded | 170 |
| W3 dimension queue IDs excluded | 170 |
| W4 dimension queue IDs excluded | 170 |
| W5 dimension queue IDs excluded | 170 |
| W6 dimension queue IDs excluded | 170 |
| W7 dimension queue IDs excluded | 170 |
| W8 dimension queue IDs excluded | 170 |
| W9 dimension queue IDs excluded | 170 |
| Prior identity pairs excluded | 2686 |
| Prior W2 corpus-selection overlap, flagged only | 0 |
| Prior W3 corpus-selection overlap, flagged only | 0 |
| Prior W4 corpus-selection overlap, flagged only | 0 |
| Prior W5 corpus-selection overlap, flagged only | 0 |
| Prior W6 corpus-selection overlap, flagged only | 0 |
| Prior W7 corpus-selection overlap, flagged only | 0 |
| Prior W8 corpus-selection overlap, flagged only | 0 |
| Prior W9 corpus-selection overlap, flagged only | 0 |
| Selected identity overlap with prior waves | 0 |
| Complete pairs preserved | 270 |
| Partial pairs preserved | 3,076 |
| Complete-pair gap preserved | 1,430 |
| Assigned dimension counts | 4=42, 3=122, 2=6 |

The 170 selected rows are not 170 complete pairs. Dimension-specific closure remains a separate lane and must supply ten repository-specific records before any completion claim.

## Per-industry selection

| Industry | Partial pool | Excluded queue IDs | Prior identity pairs | Remaining | Selected | Dimension counts |
|---|---:|---:|---:|---:|---:|---|
| accounting_firms | 187 | 86 | 145 | 42 | 10 | 4:1, 3:9 |
| construction | 180 | 81 | 143 | 37 | 10 | 4:1, 3:9 |
| course_creators | 182 | 82 | 140 | 42 | 10 | 3:10 |
| ecommerce | 176 | 80 | 144 | 32 | 10 | 3:7, 2:3 |
| education_training | 180 | 81 | 141 | 39 | 10 | 4:3, 3:7 |
| healthcare_medical_practices | 181 | 80 | 144 | 37 | 10 | 4:3, 3:7 |
| hospitality | 183 | 80 | 143 | 40 | 10 | 4:6, 3:4 |
| insurance_agencies | 184 | 80 | 143 | 41 | 10 | 4:1, 3:9 |
| it_services_msps | 180 | 80 | 144 | 36 | 10 | 3:10 |
| law_firms | 183 | 80 | 143 | 40 | 10 | 4:4, 3:6 |
| logistics_freight | 172 | 80 | 142 | 30 | 10 | 3:7, 2:3 |
| marketing_social_media_agencies | 186 | 80 | 145 | 41 | 10 | 4:7, 3:3 |
| mortgage_brokers | 184 | 80 | 146 | 38 | 10 | 4:4, 3:6 |
| property_management | 185 | 80 | 142 | 43 | 10 | 4:3, 3:7 |
| real_estate | 187 | 80 | 140 | 47 | 10 | 4:8, 3:2 |
| recruiting_staffing | 171 | 80 | 131 | 40 | 10 | 4:1, 3:9 |
| saas | 175 | 80 | 140 | 35 | 10 | 3:10 |

## Evidence, rights, falsifiers, and gates

Each row contains exact inherited source URLs, the 2026-08-27 observation date, evidence class E, source access limits, direct versus inferred claims, unknown Block Contract fields, rights/license/notice/contributor/SBOM unknowns, a falsifier, a smallest next read-only gate, and a stop condition. The queue's public metadata is reachability/context evidence, not runtime, authenticated, capability, support, rollback, or production proof.

Registry disposition and any license signal remain unreviewed metadata, not clearance. Fork/mirror/alias/rebrand identity is normalized only at owner/name/URL level in this lane; unresolved relationships remain unknown. Runtime behavior, authority/side effects, portability, tenancy, maintenance, support, rollback, economics, capability proof, and admission remain unknown or not run.

## Boundaries and limitations

All W10 records carry `research_only=true`, `authenticated_behavior=U`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `implementation_authorized=false`, `admitted_blocks=0`, and `parent_goal_status=active`. This report does not promote the selected pairs and does not claim overall Phase-7 completion.

`CORPUS_INTEGRITY_W10_POSTWRITE_SMOKE_PASS`
