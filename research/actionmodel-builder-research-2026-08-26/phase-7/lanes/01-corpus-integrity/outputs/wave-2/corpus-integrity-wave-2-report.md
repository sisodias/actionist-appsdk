# Phase 7 corpus-integrity Wave 2 report

Lane: `P7-CORPUS-INTEGRITY-W2`  
Observed: `2026-08-27`  
Mode: research-only; parent goal active; no overall completion claim.

## Outcome

Wave 2 deterministically assigns **1430 existing partial industry–repository pairs** to the remaining target positions: one distinct canonical pair per position within each industry. These assignments close the identity/position layer only. Every row remains `complete_status=NOT_COMPLETE`, `is_complete=false`, and retains its actual missing dimensions. The measured complete-pair deficit remains **1,430**.

No repository was fabricated, padded, cloned, copied, executed, built, deployed, benchmarked, scanned, admitted, or upgraded from partial to complete. The 270 Wave-1 complete pairs remain outside this output and were read as immutable context.

## Inputs and deterministic method

Inputs read: Phase-7 program and current state, coverage-gap audit, closure queue/manifest, 284-row baseline GitHub register, 500-row expansion register, merged and wave matrix inputs, and Wave-1 corpus-integrity artifacts. The source registers and matrix are public-metadata artifacts already present in the workspace; this lane performed no external write or authenticated access.

Canonical identity is lowercase GitHub `owner/name` plus normalized `https://github.com/owner/name`; original source URL and display fields are retained. For each industry, the script sorts only closure rows with `status=partial` by canonical key and takes the first `100 - complete_count`. The queue’s `status=partial`, `dimension_count`, `dimensions_missing`, source URLs, dates, and evidence classes are copied as evidence metadata, not capability proof.

A target position with an assigned partial pair is still an unresolved complete-pair deficit. A future dimension lane may close it only with ten repository-specific dimension records; generic matrix values, snippets, stars, tags, or assignment presence cannot do so.

## Counts

| Measure | Count |
|---|---:|
| Industries | 17 |
| Target positions per industry | 100 |
| Wave-2 assignment rows | 1430 |
| Distinct assigned `(industry, canonical_repo)` pairs | 1430 |
| Wave-1 complete pairs preserved as context | 270 |
| Current complete pairs | 270 |
| Current partial pairs | 3,076 |
| Complete-pair gap | 1,430 |
| Matrix canonical identities used by the queue | 216 |

Assigned partial dimension-count distribution: `1=176`, `2=255`, `3=136`, `4=155`, `5=147`, `6=126`, `7=150`, `8=132`, `9=153`.
Assigned expansion disposition states (not clearance): `candidate=563`, `hold=838`, `reference=28`, `reject=1`.

## Per-industry assignment and remaining complete deficit

| Industry | Wave-1 complete | Partial pool | Wave-2 assigned | Complete still missing |
|---|---:|---:|---:|---:|
| accounting_firms | 14 | 187 | 86 | 86 |
| construction | 15 | 180 | 85 | 85 |
| course_creators | 19 | 182 | 81 | 81 |
| ecommerce | 18 | 176 | 82 | 82 |
| education_training | 17 | 180 | 83 | 83 |
| healthcare_medical_practices | 13 | 181 | 87 | 87 |
| hospitality | 13 | 183 | 87 | 87 |
| insurance_agencies | 14 | 184 | 86 | 86 |
| it_services_msps | 14 | 180 | 86 | 86 |
| law_firms | 16 | 183 | 84 | 84 |
| logistics_freight | 19 | 172 | 81 | 81 |
| marketing_social_media_agencies | 13 | 186 | 87 | 87 |
| mortgage_brokers | 12 | 184 | 88 | 88 |
| property_management | 16 | 185 | 84 | 84 |
| real_estate | 15 | 187 | 85 | 85 |
| recruiting_staffing | 22 | 171 | 78 | 78 |
| saas | 20 | 175 | 80 | 80 |

The two last columns are intentionally equal: Wave 2 fills target positions with unresolved partial pairs, so it does not reduce the complete-pair deficit.

## Identity, rights, and unknown-state handling

- Every assignment is matrix-aligned through the existing closure queue and expansion register; no matrix-only or synthetic identity is added.
- Wave-1 complete assignments are not reused as Wave-2 partial assignments. The Wave-1 ledger and hashes are recorded in `lane-state.json`.
- Registry `candidate`, `hold`, `reject`, `reference`, and `unknown` states remain visible in each assignment’s `rights_state`; none is a rights decision or admission.
- Fork, mirror, alias, rebrand, notice, contributor, SBOM, runtime, support, maintenance, rollback, and exit questions remain unresolved unless directly represented by the preserved input record. This lane does not infer identity relationships from stars, fork counts, names, or capability tags.
- The assignment edge file contains one edge per assigned target position and carries source URLs, observation dates, evidence classes, missing dimensions, rights unknowns, limitation, falsifier, and stop condition.

## Boundaries and next gate

All rows retain `research_only=true`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `implementation_authorized=false`, `admitted_blocks=0`, `authenticated_behavior=U`, and `parent_goal_status=active`. The next read-only gate is direct repository-specific evidence for each assignment’s missing dimensions, then independent rights/provenance/evaluation/runtime review. Until then, the complete-pair deficit is unchanged.

`CORPUS_INTEGRITY_W2_POSTWRITE_SMOKE_PASS`
