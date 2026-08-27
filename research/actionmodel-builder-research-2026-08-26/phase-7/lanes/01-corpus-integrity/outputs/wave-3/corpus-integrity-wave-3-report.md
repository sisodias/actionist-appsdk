# Phase 7 corpus-integrity Wave 3 report

Lane: `P7-CORPUS-INTEGRITY-W3`  
Observed: `2026-08-27`  
Mode: research-only; parent goal active; no overall completion claim.

## Outcome

Wave 3 selects exactly the next 10 remaining partial closure-queue pairs in each of 17 industries, for 170 distinct canonical industry–repository pairs. The exclusion set is the 10 Wave-1 T1 queue IDs plus the 170 Wave-2 dimension-selected queue IDs. Every selected row remains `complete_status=NOT_COMPLETE`, `is_complete=false`, and carries its actual missing dimensions.

This tranche advances selection coverage only. It preserves the current complete count of 270 and the complete-pair gap of 1,430. A prior Wave-2 corpus target assignment is flagged where it overlaps (not silently treated as a Wave-2 dimension selection); this lane does not promote or complete any pair.

## Inputs and method

Read: the coordinator Wave-3 dispatch receipt, closure queue/coverage audit/manifest, Wave-1 corpus artifacts, Wave-2 corpus state/artifacts, Wave-2 dimension state/ledger, Wave-2 industry-joins state/ledger, the 284-row baseline register, the 500-row expansion register, and current matrix inputs. Only existing public-metadata artifacts were used; no login, credentials, client/private data, clone/copy, source execution, implementation, build, deployment, benchmark, scan, external write, or admission occurred.

Selection rule: `dimension_count descending then queue_id ascending; exclude every Wave-1 T1 queue_id and every Wave-2 dimension-selected queue_id; take next 10 partial rows per industry`. Canonical identity is case-folded GitHub `owner/name` plus normalized `https://github.com/owner/name`. Queue status, dimension count, source URLs, observed dates, and evidence classes are preserved. The Wave-2 corpus assignment set is reported as context; the dispatch’s explicit exclusion classes are Wave-1 T1 and Wave-2 dimension selection.

## Exact counters

| Measure | Count |
|---|---:|
| Industries | 17 |
| Selected pairs per industry | 10 |
| Wave-3 selection rows | 170 |
| Wave-3 identity edges | 170 |
| Wave-1 T1 queue IDs excluded | 10 |
| Wave-2 dimension queue IDs excluded | 170 |
| Prior Wave-2 corpus-assignment overlap, flagged only | 69 |
| Complete pairs preserved | 270 |
| Partial pairs preserved | 3,076 |
| Complete-pair gap preserved | 1,430 |
| Assigned dimension-count 9 / 8 | 102 / 68 |

The 170 selected rows are not 170 complete pairs. The dimension evidence lane owns completion; this lane owns canonical selection and exclusion integrity.

## Per-industry selection

| Industry | Partial queue pool | W1 T1 excluded | W2 dimension excluded | Remaining after exclusions | Selected | Dimension counts |
|---|---:|---:|---:|---:|---:|---|
| accounting_firms | 187 | 6 | 10 | 171 | 10 | 9:4, 8:6 |
| construction | 180 | 1 | 10 | 169 | 10 | 9:6, 8:4 |
| course_creators | 182 | 2 | 10 | 170 | 10 | 9:4, 8:6 |
| ecommerce | 176 | 0 | 10 | 166 | 10 | 9:7, 8:3 |
| education_training | 180 | 1 | 10 | 169 | 10 | 9:9, 8:1 |
| healthcare_medical_practices | 181 | 0 | 10 | 171 | 10 | 9:10 |
| hospitality | 183 | 0 | 10 | 173 | 10 | 9:10 |
| insurance_agencies | 184 | 0 | 10 | 174 | 10 | 9:8, 8:2 |
| it_services_msps | 180 | 0 | 10 | 170 | 10 | 9:6, 8:4 |
| law_firms | 183 | 0 | 10 | 173 | 10 | 9:5, 8:5 |
| logistics_freight | 172 | 0 | 10 | 162 | 10 | 9:9, 8:1 |
| marketing_social_media_agencies | 186 | 0 | 10 | 176 | 10 | 9:5, 8:5 |
| mortgage_brokers | 184 | 0 | 10 | 174 | 10 | 9:5, 8:5 |
| property_management | 185 | 0 | 10 | 175 | 10 | 9:2, 8:8 |
| real_estate | 187 | 0 | 10 | 177 | 10 | 9:7, 8:3 |
| recruiting_staffing | 171 | 0 | 10 | 161 | 10 | 8:10 |
| saas | 175 | 0 | 10 | 165 | 10 | 9:5, 8:5 |

## Evidence, rights, and falsifier boundary

The queue records are repository-specific public metadata context with evidence class `E`, but they are not runtime or authenticated proof. Direct claims are limited to what the queue records; industry/capability implications are explicitly inferred. Every row has source URLs, source dates, evidence-class counts, missing dimensions, access limits, unknown Block Contract fields, rights/license/SBOM unknowns, falsifier, smallest next read-only gate, and a stop condition.

Registry dispositions (`candidate`, `hold`, `reject`, `reference`, `unknown`) and license signals remain unchanged and are not rights clearance. Fork/mirror/alias/rebrand status is not re-inferred in this tranche. Runtime behavior, capability, authority, source provenance, SBOM, maintenance, support, rollback, portability, and admission remain unknown or not run.

## Boundaries

All Wave-3 records carry `research_only=true`, `authenticated_behavior=U`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `implementation_authorized=false`, `admitted_blocks=0`, and `parent_goal_status=active`. The 1,430 complete-pair gap is preserved; this report does not claim the target is complete.

`CORPUS_INTEGRITY_W3_POSTWRITE_SMOKE_PASS`
