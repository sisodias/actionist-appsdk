# Phase 7 corpus-integrity Wave 5 report

Lane: `P7-CORPUS-INTEGRITY-W5`  
Observed: `2026-08-27`  
Mode: research-only; parent goal active; no overall completion claim.

## Outcome

Wave 5 selects exactly the next 10 remaining partial closure-queue pairs in each of 17 industries, for 170 distinct canonical industry–repository pairs. The exclusion set is the 10 Wave-1 T1 queue IDs plus the 170 Wave-2, 170 Wave-3, and 170 Wave-4 dimension-selected queue IDs. Every selected row remains `complete_status=NOT_COMPLETE`, `is_complete=false`, and carries its actual missing dimensions.

This tranche advances selection coverage only. It preserves the current complete count of 270 and the complete-pair gap of 1,430. Prior Wave-2, Wave-3, and Wave-4 corpus selections are flagged where they overlap; they are not silently treated as dimension selections or fresh evidence. This lane does not promote or complete any pair.

## Inputs and method

Read: the Wave-2 through Wave-4 coordinator receipts and Wave-5 dispatch receipt, closure queue/coverage audit/manifest, Wave-1 corpus artifacts, Wave-2 through Wave-4 corpus state/artifacts, Wave-2 through Wave-4 dimension state/ledger, Wave-2 through Wave-4 industry-joins state/ledger, the 284-row baseline register, the 500-row expansion register, and current matrix inputs. Only existing public-metadata artifacts were used; no login, credentials, client/private data, clone/copy, source execution, implementation, build, deployment, benchmark, scan, external write, or admission occurred.

Selection rule: `dimension_count descending then queue_id ascending; exclude every Wave-1 T1 queue_id, every Wave-2 dimension-selected queue_id, every Wave-3 dimension-selected queue_id, and every Wave-4 dimension-selected queue_id; take next 10 partial rows per industry`. Canonical identity is case-folded GitHub `owner/name` plus normalized `https://github.com/owner/name`. Queue status, dimension count, source URLs, observed dates, and evidence classes are preserved. Wave-1 T1 and Wave-2/Wave-3/Wave-4 dimension sets are exclusions; prior corpus overlaps are context only.

## Exact counters

| Measure | Count |
|---|---:|
| Industries | 17 |
| Selected pairs per industry | 10 |
| Wave-5 selection rows | 170 |
| Wave-5 identity edges | 170 |
| Wave-1 T1 queue IDs excluded | 10 |
| Wave-2 dimension queue IDs excluded | 170 |
| Wave-3 dimension queue IDs excluded | 170 |
| Wave-4 dimension queue IDs excluded | 170 |
| Prior Wave-2 corpus-assignment overlap, flagged only | 86 |
| Prior Wave-3 corpus-selection overlap, flagged only | 0 |
| Prior Wave-4 corpus-selection overlap, flagged only | 0 |
| Complete pairs preserved | 270 |
| Partial pairs preserved | 3,076 |
| Complete-pair gap preserved | 1,430 |
| Assigned dimension counts | 8=29, 7=141 |

The 170 selected rows are not 170 complete pairs. The dimension evidence lane owns completion; this lane owns canonical selection and exclusion integrity.

## Per-industry selection

| Industry | Partial queue pool | W1 T1 excluded | W2 dimension excluded | W3 dimension excluded | W4 dimension excluded | Remaining after exclusions | Selected | Dimension counts |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| accounting_firms | 187 | 6 | 10 | 10 | 10 | 151 | 10 | 7:10 |
| construction | 180 | 1 | 10 | 10 | 10 | 149 | 10 | 7:10 |
| course_creators | 182 | 2 | 10 | 10 | 10 | 150 | 10 | 7:10 |
| ecommerce | 176 | 0 | 10 | 10 | 10 | 146 | 10 | 8:1, 7:9 |
| education_training | 180 | 1 | 10 | 10 | 10 | 149 | 10 | 8:3, 7:7 |
| healthcare_medical_practices | 181 | 0 | 10 | 10 | 10 | 151 | 10 | 8:9, 7:1 |
| hospitality | 183 | 0 | 10 | 10 | 10 | 153 | 10 | 8:5, 7:5 |
| insurance_agencies | 184 | 0 | 10 | 10 | 10 | 154 | 10 | 7:10 |
| it_services_msps | 180 | 0 | 10 | 10 | 10 | 150 | 10 | 8:6, 7:4 |
| law_firms | 183 | 0 | 10 | 10 | 10 | 153 | 10 | 7:10 |
| logistics_freight | 172 | 0 | 10 | 10 | 10 | 142 | 10 | 7:10 |
| marketing_social_media_agencies | 186 | 0 | 10 | 10 | 10 | 156 | 10 | 7:10 |
| mortgage_brokers | 184 | 0 | 10 | 10 | 10 | 154 | 10 | 8:5, 7:5 |
| property_management | 185 | 0 | 10 | 10 | 10 | 155 | 10 | 7:10 |
| real_estate | 187 | 0 | 10 | 10 | 10 | 157 | 10 | 7:10 |
| recruiting_staffing | 171 | 0 | 10 | 10 | 10 | 141 | 10 | 7:10 |
| saas | 175 | 0 | 10 | 10 | 10 | 145 | 10 | 7:10 |

## Evidence, rights, and falsifier boundary

The queue records are repository-specific public metadata context with evidence class `E`, but they are not runtime or authenticated proof. Direct claims are limited to what the queue records; industry/capability implications are explicitly inferred. Every row has source URLs, source dates, evidence-class counts, missing dimensions, access limits, unknown Block Contract fields, rights/license/SBOM unknowns, falsifier, smallest next read-only gate, and a stop condition.

Registry dispositions (`candidate`, `hold`, `reject`, `reference`, `unknown`) and license signals remain unchanged and are not rights clearance. Fork/mirror/alias/rebrand status is not re-inferred in this tranche. Runtime behavior, capability, authority, source provenance, SBOM, maintenance, support, rollback, portability, and admission remain unknown or not run.

## Boundaries

All Wave-5 records carry `research_only=true`, `authenticated_behavior=U`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `implementation_authorized=false`, `admitted_blocks=0`, and `parent_goal_status=active`. The 1,430 complete-pair gap is preserved; this report does not claim the target is complete.

`CORPUS_INTEGRITY_W5_POSTWRITE_SMOKE_PASS`
