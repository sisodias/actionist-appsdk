# P9-L14 authenticated GitHub Stage 2/3 retry

Observed 2026-08-27. Consumed all 76 pinned P9-L06 Stage-0 identity receipts.

| Measure | Count | Result |
|---|---:|---|
| Pinned candidates consumed | 76 | exact L06 denominator |
| Pinned tree API observations | 76 | observed |
| Pinned README API observations | 76 | observed |
| Pinned raw README observations | 76 | observed |
| Approved non-unknown source-shape classifications | 0 | all remain unknown |
| Dependency receipts | 76 | all closure_complete=false |
| Complete transitive closures | 0 | no defensible closure claim |
| Unresolved-depth rows | 76 | shape/dependency gaps preserved |

Compared with the P9-L09 all-unknown baseline, transport/evidence movement is positive: tree and README evidence moved from blocked to observed for all 76 candidates. Classification movement is zero: tree/README metadata does not defensibly establish intact_service, intact_fork, extracted_slice, generated_from_pattern, or reference_only. Dependency closure movement is zero.

Only read-only authenticated GitHub API and pinned raw endpoints were used. No clone, project copy, source execution, package install, build, deploy, benchmark, license scan, SBOM, admission, or promotion occurred.

State remains parent active, research-only, implementation false, execution UNEXECUTED, admission NOT_ADMITTED, admitted 0, promotion false.

Smoke: PASS — all five JSONL ledgers contain exactly 76 rows; lane invariants PASS; no-bytecode verifier PASS.
