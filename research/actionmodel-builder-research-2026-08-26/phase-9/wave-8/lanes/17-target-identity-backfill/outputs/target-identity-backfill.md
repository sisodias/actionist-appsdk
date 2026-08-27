# P9-L17 target identity backfill

Date observed: 2026-08-27. This lane is research-only and owns this output directory.

The verified 1,700-row target ledger supplies 100 positions in each of 17 industries. L04 and L12 are excluded by pair ID; this tranche selects the next ten deficit positions after each industry's prior tranche maximum. It emits exactly 170 assignments: 160 resolved to canonical GitHub URLs plus 40-hex immutable commit SHAs from public default-branch Atom feeds, and 10 explicit unresolved rows where no parseable commit was returned. No row is padded.

Artifacts:

- `target-identity-assignments.jsonl`: 170 rows, 10 per industry.
- `identity-edges.jsonl`: 160 resolved identity-to-revision edges; unresolved identities are not represented as edges.
- `source-receipts.jsonl`: 170 receipts, one per assignment.
- `lane-state.json`: canonical boundary and counters.
- `no-bytecode-verifier.sh`: read-only verifier for counts, uniqueness, tranche disjointness, JSONL shape, and bytecode absence.

Candidates come only from recorded Phase-7 industry-join metadata. Canonical URLs are unique within each industry and disjoint from both prior tranches. GitHub access was read-only public metadata; no repository was cloned, copied, executed, installed, built, deployed, benchmarked, scanned, or admitted.
