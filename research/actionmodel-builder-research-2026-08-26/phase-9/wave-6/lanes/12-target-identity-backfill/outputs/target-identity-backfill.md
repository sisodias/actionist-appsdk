# P9-L12 target identity backfill

Date observed: 2026-08-27. This lane is research-only and owns this output directory.

The verified 1,700-row pair ledger contains 100 positions in each of 17 industries. The selection is the next ten `deficit` positions per industry after excluding every `pair_id` in Wave-2 L04. It emits exactly 170 assignments: 166 resolved to a canonical GitHub URL plus a 40-hex commit SHA from a read-only GitHub commits probe, and 4 explicit unresolved rows where the probe returned no commit. No row is padded.

Artifacts:

- `target-identity-assignments.jsonl`: 170 rows, 10 per industry; 166 resolved and 4 unresolved.
- `identity-edges.jsonl`: 166 resolved identity-to-revision edges; unresolved identities are not represented as edges.
- `source-receipts.jsonl`: 170 receipts, including an explicit receipt for each unresolved probe.
- `lane-state.json`: canonical boundary and counters.
- `no-bytecode-verifier.sh`: read-only verifier for counts, uniqueness, L04 disjointness, JSONL shape, and bytecode absence.

Resolution uses existing Phase-7 `selected_metadata_niche_join` records, excludes the 170 Wave-2 L04 assignments, de-duplicates canonical repository URLs within each industry, and then queries only public GitHub metadata. No repository was cloned, copied, executed, installed, built, deployed, benchmarked, scanned, or admitted.

The verifier must report `PASS` for exact assignment count, 17×10 industry distribution, zero within-industry URL duplicates, zero L04 pair overlap, assignment/receipt alignment, resolved-edge alignment, and no bytecode artifacts.
