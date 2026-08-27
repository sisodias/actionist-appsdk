# Competitor taxonomy closure — P9-L02

Observed 2026-08-27. Research-only closure of the Phase 7 competitor taxonomy.

## Canonical denominator

- Surfaces: **118** product-surface records (PS-001…PS-118); 15 relationship records are provenance, not denominator rows.
- Canonical features: **144** enumerated keys across **18** domains.
- Surface×feature cells: **16,992** (= 118 × 144), all populated with a disposition.
- 68-versus-144: the source supplies a stated count of 68 but no named 68-key list or mapping. The canonical denominator is 144; the unresolved 68 aggregate is recorded in `unmapped-feature-ledger.jsonl`.

## Disposition counters

| Disposition | Cells |
|---|---:|
| direct | 84 |
| inherited | 0 |
| inferred | 24 |
| unknown | 16844 |
| blocked | 40 |
| not_applicable | 0 |

Evidence-quality labels: {"E/D": 880, "E/D+E/U": 8, "E/U": 48, "I/U": 8, "none": 16048}. Direct cells are limited to feature-specific first-party claim objects; URL reachability alone never upgrades a cell to direct.

## Taxonomy mapping

Every enumerated feature has an explicit parent domain and aliases containing only its source key and source label (`alias_status=source_key_and_label_only`). No unprovided 68-key names were invented. No observed Phase 7 feature key falls outside the 144-key set.

## Evidence queue and limitations

The **16884** unresolved cells remain an evidence queue. Prioritized next reads are first-party pages for blocked or unknown cells, starting with surfaces having current register URLs. This closure does not claim exhaustiveness because unknown and blocked cells remain. It makes no client-data, vendor-login, cloning, execution, build, deploy, benchmark, license, SBOM, or admission decision.
