# Phase 7 corpus-integrity Wave 7 report

Lane: `P7-CORPUS-INTEGRITY-W7`  
Observed: `2026-08-27`  
Mode: research-only; parent goal active; no overall completion claim.

## Outcome

Wave 7 selects exactly the next 10 remaining partial closure-queue pairs in each of 17 industries, for 170 distinct canonical industry–repository pairs. The queue-ID exclusion set is the 10 Wave-1 T1 IDs plus the 170 dimension-selected IDs from each of Waves 2–6, for 860 IDs. A separate pair-level prior-identity guard excludes every industry/canonical-repository identity already present in Waves 1–6. Every selected row remains `complete_status=NOT_COMPLETE`, `is_complete=false`, and carries its actual missing dimensions.

This tranche advances selection coverage only. It preserves the current complete count of 270 and the complete-pair gap of 1,430. Prior Wave-2 through Wave-6 corpus selections are tracked explicitly; the pair-level prior-identity guard yields zero overlap in the selected tranche. No pair is promoted or completed.

## Inputs and method

Read: the Wave-2 through Wave-6 coordinator receipts and Wave-7 dispatch receipt, closure queue/coverage audit/manifest, Wave-1 through Wave-6 corpus artifacts, Wave-2 through Wave-6 dimension state/ledger, Wave-2 through Wave-5 industry-joins state/ledger, the 284-row baseline register, the 500-row expansion register, and current matrix inputs. Only existing public-metadata artifacts were used; no login, credentials, client/private data, clone/copy, source execution, implementation, build, deployment, benchmark, scan, external write, or admission occurred.

Selection rule: `dimension_count descending then queue_id ascending; exclude every Wave-1 T1 queue_id and every Wave-2 through Wave-6 dimension-selected queue_id, and exclude every prior industry/canonical-repository identity; take next 10 partial rows per industry`. Canonical identity is case-folded GitHub `owner/name` plus normalized `https://github.com/owner/name`. Queue status, dimension count, source URLs, observed dates, and evidence classes are preserved. W1 T1 plus W2–W6 dimension sets are queue exclusions; prior W1–W6 corpus identities are a separate pair-level exclusion.
The dispatch's historical Phase-7 state anchor is `NOT_DECLARED_IN_LIVE_DISPATCH`; the live state observed before this lane write was `1862bf13f8704e7a508bfa9010a0cb9be29a737b0eb4fd427f6069295b2ec6a7`. If the anchor is absent or differs, that condition is preserved as coordinator activity; this lane did not write central state and does not use the live state to select pairs.

## Exact counters

| Measure | Count |
|---|---:|
| Industries | 17 |
| Selected pairs per industry | 10 |
| Wave-7 selection rows | 170 |
| Wave-7 identity edges | 170 |
| Wave-1 T1 queue IDs excluded | 10 |
| Wave-2 dimension queue IDs excluded | 170 |
| Wave-3 dimension queue IDs excluded | 170 |
| Wave-4 dimension queue IDs excluded | 170 |
| Wave-5 dimension queue IDs excluded | 170 |
| Wave-6 dimension queue IDs excluded | 170 |
| Prior identity pairs excluded | 2176 |
| Prior Wave-2 corpus-assignment overlap, flagged only | 0 |
| Prior Wave-3 corpus-selection overlap, flagged only | 0 |
| Prior Wave-4 corpus-selection overlap, flagged only | 0 |
| Prior Wave-5 corpus-selection overlap, flagged only | 0 |
| Prior Wave-6 corpus-selection overlap, flagged only | 0 |
| Prior identity overlap in selected tranche | 0 |
| Complete pairs preserved | 270 |
| Partial pairs preserved | 3,076 |
| Complete-pair gap preserved | 1,430 |
| Assigned dimension counts | 7=8, 6=143, 5=19 |

The 170 selected rows are not 170 complete pairs. The dimension evidence lane owns completion; this lane owns canonical selection and exclusion integrity.

## Per-industry selection

| Industry | Partial queue pool | W1 T1 excluded | W2 dimension excluded | W3 dimension excluded | W4 dimension excluded | W5 dimension excluded | W6 dimension excluded | Prior identity excluded | Remaining after exclusions | Selected | Dimension counts |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| accounting_firms | 187 | 6 | 10 | 10 | 10 | 10 | 10 | 115 | 72 | 10 | 6:10 |
| construction | 180 | 1 | 10 | 10 | 10 | 10 | 10 | 113 | 67 | 10 | 6:10 |
| course_creators | 182 | 2 | 10 | 10 | 10 | 10 | 10 | 110 | 72 | 10 | 6:6, 5:4 |
| ecommerce | 176 | 0 | 10 | 10 | 10 | 10 | 10 | 114 | 62 | 10 | 6:8, 5:2 |
| education_training | 180 | 1 | 10 | 10 | 10 | 10 | 10 | 111 | 69 | 10 | 6:7, 5:3 |
| healthcare_medical_practices | 181 | 0 | 10 | 10 | 10 | 10 | 10 | 114 | 67 | 10 | 6:10 |
| hospitality | 183 | 0 | 10 | 10 | 10 | 10 | 10 | 113 | 70 | 10 | 6:10 |
| insurance_agencies | 184 | 0 | 10 | 10 | 10 | 10 | 10 | 113 | 71 | 10 | 6:10 |
| it_services_msps | 180 | 0 | 10 | 10 | 10 | 10 | 10 | 114 | 66 | 10 | 7:2, 6:8 |
| law_firms | 183 | 0 | 10 | 10 | 10 | 10 | 10 | 113 | 70 | 10 | 6:10 |
| logistics_freight | 172 | 0 | 10 | 10 | 10 | 10 | 10 | 112 | 60 | 10 | 6:4, 5:6 |
| marketing_social_media_agencies | 186 | 0 | 10 | 10 | 10 | 10 | 10 | 115 | 71 | 10 | 7:4, 6:6 |
| mortgage_brokers | 184 | 0 | 10 | 10 | 10 | 10 | 10 | 116 | 68 | 10 | 6:7, 5:3 |
| property_management | 185 | 0 | 10 | 10 | 10 | 10 | 10 | 112 | 73 | 10 | 7:2, 6:8 |
| real_estate | 187 | 0 | 10 | 10 | 10 | 10 | 10 | 110 | 77 | 10 | 6:10 |
| recruiting_staffing | 171 | 0 | 10 | 10 | 10 | 10 | 10 | 101 | 70 | 10 | 6:9, 5:1 |
| saas | 175 | 0 | 10 | 10 | 10 | 10 | 10 | 110 | 65 | 10 | 6:10 |

## Evidence, rights, and falsifier boundary

The queue records are repository-specific public metadata context with evidence class `E`, but they are not runtime or authenticated proof. Direct claims are limited to what the queue records; industry/capability implications are explicitly inferred. Every row has source URLs, source dates, evidence-class counts, missing dimensions, access limits, unknown Block Contract fields, rights/license/SBOM unknowns, falsifier, smallest next read-only gate, and a stop condition.

Registry dispositions (`candidate`, `hold`, `reject`, `reference`, `unknown`) and license signals remain unchanged and are not rights clearance. Fork/mirror/alias/rebrand status is not re-inferred in this tranche. Runtime behavior, capability, authority, source provenance, SBOM, maintenance, support, rollback, portability, and admission remain unknown or not run.

## Boundaries

All Wave-7 records carry `research_only=true`, `authenticated_behavior=U`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `implementation_authorized=false`, `admitted_blocks=0`, and `parent_goal_status=active`. The 1,430 complete-pair gap is preserved; this report does not claim the target is complete.

`CORPUS_INTEGRITY_W7_POSTWRITE_SMOKE_PASS`
