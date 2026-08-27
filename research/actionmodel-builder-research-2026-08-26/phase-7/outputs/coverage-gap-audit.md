# Phase 7 coverage-gap audit

**Artifact:** `P7-COVERAGE-GAP-AUDIT-001`  
**Observed:** 2026-08-27  
**Status:** `gap_confirmed`  
**Boundary:** research-only; no client data, login, source execution, cloning, copying, implementation, build, deployment, benchmark, scan, or admission.

## Verdict

The existing research is a substantial indexed foundation, but it is not yet the parent objective.

The merged matrix does contain **17,000 observed slots** across **17 industries × 10 dimensions × 100 slots**. However, the invariant that matters for the requested corpus is **100 complete repositories per industry**, where each repository has evidence in all 10 dimensions. The current matrix has only **270 complete industry–repository pairs**. The target is **1,700 complete pairs**, leaving a measured gap of **1,430 pairs**.

The headline slot count is therefore not sufficient evidence of completion. The same repository is reused across industries and dimensions, and most industry–repository pairs cover fewer than 10 dimensions.

## Requirement versus evidence

| Requirement | Target | Current measured state | Verdict |
|---|---:|---:|---|
| Industries | 17 | 17 | met |
| Dimensions per industry | 10 | 10 | met as a cell schema |
| Complete repositories per industry | 100 | 12–22 | incomplete |
| Complete industry–repository pairs | 1,700 | 270 | **1,430 short** |
| Observed matrix slots | 17,000 | 17,000 | met as slots only |
| Distinct repositories in merged observed matrix | 1,700 required for non-reused pairs; no fixed global target was supplied | 216 | reuse/coverage gap confirmed |
| Competitor/platform feature census | every competitor and feature | 117 normalized platform records with field-level evidence | incomplete for the requested exhaustive census |

## Measured matrix state

- `expansion/outputs/repo-matrix-observations.jsonl` contains 17,000 schema slots, of which the parent file marks 750 observed and 16,250 unobserved.
- Waves 2–11 contribute the 16,250 follow-up observations. Merged with the 750 observed parent slots, they produce 17,000 observed rows.
- All 170 industry×dimension cells have exactly 100 distinct repository URLs. This proves cell breadth, not that the same 100 repositories are complete across all 10 dimensions.
- The merged observed rows contain 216 distinct repository URLs.
- They form 3,346 industry–repository pairs. Only 270 pairs have all 10 dimensions; 3,076 pairs are partial.
- The per-pair dimension-count distribution is: 1 dimension: 386; 2: 487; 3: 328; 4: 305; 5: 363; 6: 339; 7: 339; 8: 247; 9: 282; 10: 270.
- 171 of the 216 repositories appear in all 17 industries, which explains why a large slot count does not imply 1,700 independent complete repositories.
- Matrix `evidence` has 216 unique values across the merged observations and `ledger` has one unique value. These are signals that the matrix is an indexed evidence layer, not yet 17,000 independent deep repository dossiers.

### Complete-pair count by industry

| Industry | Unique repos in industry | Repos with all 10 dimensions |
|---|---:|---:|
| accounting_firms | 201 | 14 |
| construction | 195 | 15 |
| course_creators | 201 | 19 |
| ecommerce | 194 | 18 |
| education_training | 197 | 17 |
| healthcare_medical_practices | 194 | 13 |
| hospitality | 196 | 13 |
| insurance_agencies | 198 | 14 |
| it_services_msps | 194 | 14 |
| law_firms | 199 | 16 |
| logistics_freight | 191 | 19 |
| marketing_social_media_agencies | 199 | 13 |
| mortgage_brokers | 196 | 12 |
| property_management | 201 | 16 |
| real_estate | 202 | 15 |
| recruiting_staffing | 193 | 22 |
| saas | 195 | 20 |

## Platform and competitor depth

The platform work is valuable but has a different shape from the requested “every competitor / every feature” census:

- The canonical Phase-2 platform register has 117 normalized platform records.
- Phase-4 through Phase-6 evidence packets deepen those same ranked identities in slices; they do not establish an exhaustive universe of competitors.
- The packets preserve direct, inferred, gated, thin, and unknown evidence, which is correct. “Record exists” must not be promoted to “feature exists.”
- The next contract must enumerate a stable feature taxonomy, record one evidence row per competitor×feature, retain source URLs and observation dates, and distinguish `observed`, `not_found`, `gated`, `contradicted`, and `unknown`.

## Required Phase-7 closure invariant

Phase 7 should not promote on slot count alone. It should promote only when the machine-readable ledger proves:

1. 17 industries are present.
2. Each industry has 100 distinct repository identities selected for that industry.
3. Each selected repository has exactly 10 dimension records, not merely a slot occupied by a reused or generic observation.
4. Every dimension record has repository-specific evidence, source identity, observation date, evidence class, limitation, and falsifier/next gate.
5. Repository identity is deduplicated by canonical URL plus owner/name normalization.
6. Rights, license, SBOM, and provenance remain explicit and are never inferred from a search result.
7. The competitor ledger covers the declared universe and feature taxonomy, with unknowns and inaccessible sources retained rather than silently omitted.

## Authoritative inputs and reproduction

The measurements are reproduced by:

- `../../expansion/outputs/repo-matrix-observations.jsonl`
- `../../expansion/wave-2/outputs/repo-matrix-wave-2.jsonl` through `../../expansion/wave-11/outputs/repo-matrix-wave-11.jsonl`
- `../../expansion/outputs/github-expansion.jsonl`
- `../../phase-2/outputs/platform-deepdives-register.jsonl`
- `verify-coverage-gap.py` in this output directory

The JSON companion is the machine-readable snapshot of this audit. This artifact intentionally records the gap; it does not authorize implementation, admission, or client validation.
