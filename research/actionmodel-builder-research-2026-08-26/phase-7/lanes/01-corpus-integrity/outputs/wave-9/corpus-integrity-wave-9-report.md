# Phase 7 corpus-integrity Wave 9 report

Lane: `P7-CORPUS-INTEGRITY-W9`  
Observed: `2026-08-27`  
Mode: research-only; parent goal active; no overall completion claim.

## Outcome

Wave 9 selects exactly the next 10 remaining partial closure-queue pairs in each of 17 industries, for 170 distinct canonical industry–repository pairs. The queue-ID exclusion set is the 10 Wave-1 T1 IDs plus the 170 dimension-selected IDs from each of Waves 2–8, for 1,200 IDs. A separate pair-level prior-identity guard excludes every industry/canonical-repository identity already present in Waves 1–8. Every selected row remains `complete_status=NOT_COMPLETE`, `is_complete=false`, and carries its actual missing dimensions.

This tranche advances selection coverage only. It preserves the current complete count of 270 and the complete-pair gap of 1,430. Prior Wave-2 through Wave-8 corpus selections are tracked explicitly; the pair-level prior-identity guard yields zero overlap in the selected tranche. No pair is promoted or completed.

## Inputs and method

Read: the Wave-2 through Wave-8 coordinator receipts and Wave-9 dispatch receipt, closure queue/coverage audit/manifest, Wave-1 through Wave-8 corpus artifacts, Wave-2 through Wave-8 dimension state/ledger, Wave-2 through Wave-5 industry-joins state/ledger, the 284-row baseline register, the 500-row expansion register, and current matrix inputs. Only existing public-metadata artifacts were used; no login, credentials, client/private data, clone/copy, source execution, implementation, build, deployment, benchmark, scan, external write, or admission occurred.

Selection rule: `dimension_count descending then queue_id ascending; exclude every Wave-1 T1 queue_id and every Wave-2 through Wave-8 dimension-selected queue_id, and exclude every prior industry/canonical-repository identity; take next 10 partial rows per industry`. Canonical identity is case-folded GitHub `owner/name` plus normalized `https://github.com/owner/name`. Queue status, dimension count, source URLs, observed dates, and evidence classes are preserved. W1 T1 plus W2–W8 dimension sets are queue exclusions; prior W1–W8 corpus identities are a separate pair-level exclusion.
The dispatch's historical Phase-7 state anchor is `NOT_DECLARED_IN_LIVE_DISPATCH`; the live state observed before this lane write was `06b3daec2efc29e07cd7457ff7a4b047aeb1947af4072e4e014ca9fa97f3de0d`. If the anchor is absent or differs, that condition is preserved as coordinator activity; this lane did not write central state and does not use the live state to select pairs.

### Dispatch metadata transition

The first W9 dispatch read observed the pre-stamp/pending dispatch SHA256 `57ee12b2f161cb0b7816c31dbf206814b1a36159cf7197ee2dfdd96dd6cb791a`. CENA subsequently stamped the final immutable contract at SHA256 `cd3d2ba4340a9bfa8d66826310db7d2b42f5654a2e8ef00f06ee0ea06ea99273`, which was validated before handoff. This is coordinator metadata history, not a corpus-source change; the final stamped dispatch is the input recorded in `lane-state.json`.

## Exact counters

| Measure | Count |
|---|---:|
| Industries | 17 |
| Selected pairs per industry | 10 |
| Wave-9 selection rows | 170 |
| Wave-9 identity edges | 170 |
| Wave-1 T1 queue IDs excluded | 10 |
| Wave-2 dimension queue IDs excluded | 170 |
| Wave-3 dimension queue IDs excluded | 170 |
| Wave-4 dimension queue IDs excluded | 170 |
| Wave-5 dimension queue IDs excluded | 170 |
| Wave-6 dimension queue IDs excluded | 170 |
| Wave-7 dimension queue IDs excluded | 170 |
| Wave-8 dimension queue IDs excluded | 170 |
| Prior identity pairs excluded | 2516 |
| Prior Wave-2 corpus-assignment overlap, flagged only | 0 |
| Prior Wave-3 corpus-selection overlap, flagged only | 0 |
| Prior Wave-4 corpus-selection overlap, flagged only | 0 |
| Prior Wave-5 corpus-selection overlap, flagged only | 0 |
| Prior Wave-6 corpus-selection overlap, flagged only | 0 |
| Prior Wave-7 corpus-selection overlap, flagged only | 0 |
| Prior Wave-8 corpus-selection overlap, flagged only | 0 |
| Prior identity overlap in selected tranche | 0 |
| Complete pairs preserved | 270 |
| Partial pairs preserved | 3,076 |
| Complete-pair gap preserved | 1,430 |
| Assigned dimension counts | 5=54, 4=100, 3=16 |

The 170 selected rows are not 170 complete pairs. The dimension evidence lane owns completion; this lane owns canonical selection and exclusion integrity.

## Per-industry selection

| Industry | Partial queue pool | W1 T1 excluded | W2 dimension excluded | W3 dimension excluded | W4 dimension excluded | W5 dimension excluded | W6 dimension excluded | W7 dimension excluded | W8 dimension excluded | Prior identity excluded | Remaining after exclusions | Selected | Dimension counts |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| accounting_firms | 187 | 6 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 135 | 52 | 10 | 5:4, 4:6 |
| construction | 180 | 1 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 133 | 47 | 10 | 5:7, 4:3 |
| course_creators | 182 | 2 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 130 | 52 | 10 | 4:8, 3:2 |
| ecommerce | 176 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 134 | 42 | 10 | 4:8, 3:2 |
| education_training | 180 | 1 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 131 | 49 | 10 | 4:10 |
| healthcare_medical_practices | 181 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 134 | 47 | 10 | 5:4, 4:6 |
| hospitality | 183 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 133 | 50 | 10 | 5:6, 4:4 |
| insurance_agencies | 184 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 133 | 51 | 10 | 5:7, 4:3 |
| it_services_msps | 180 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 134 | 46 | 10 | 5:4, 4:4, 3:2 |
| law_firms | 183 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 133 | 50 | 10 | 5:1, 4:9 |
| logistics_freight | 172 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 132 | 40 | 10 | 4:4, 3:6 |
| marketing_social_media_agencies | 186 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 135 | 51 | 10 | 5:1, 4:9 |
| mortgage_brokers | 184 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 136 | 48 | 10 | 5:4, 4:6 |
| property_management | 185 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 132 | 53 | 10 | 5:4, 4:6 |
| real_estate | 187 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 130 | 57 | 10 | 5:9, 4:1 |
| recruiting_staffing | 171 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 121 | 50 | 10 | 5:3, 4:7 |
| saas | 175 | 0 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 130 | 45 | 10 | 4:6, 3:4 |

## Evidence, rights, and falsifier boundary

The queue records are repository-specific public metadata context with evidence class `E`, but they are not runtime or authenticated proof. Direct claims are limited to what the queue records; industry/capability implications are explicitly inferred. Every row has source URLs, source dates, evidence-class counts, missing dimensions, access limits, unknown Block Contract fields, rights/license/SBOM unknowns, falsifier, smallest next read-only gate, and a stop condition.

Registry dispositions (`candidate`, `hold`, `reject`, `reference`, `unknown`) and license signals remain unchanged and are not rights clearance. Fork/mirror/alias/rebrand status is not re-inferred in this tranche. Runtime behavior, capability, authority, source provenance, SBOM, maintenance, support, rollback, portability, and admission remain unknown or not run.

## Boundaries

All Wave-9 records carry `research_only=true`, `authenticated_behavior=U`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `implementation_authorized=false`, `admitted_blocks=0`, and `parent_goal_status=active`. The 1,430 complete-pair gap is preserved; this report does not claim the target is complete.

`CORPUS_INTEGRITY_W9_POSTWRITE_SMOKE_PASS`
