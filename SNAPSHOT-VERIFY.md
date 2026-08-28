# Snapshot verification receipt

Date: 2026-08-28  
Branch: `research/actionmodel-snapshot-20260828`

## Snapshot-local checks

- Framework Registry: PASS — 24 frameworks, 62 dependency edges, 10 gaps.
- System map: PASS — 15 parts and 15 pages.
- Block Hub: PASS — 80 blocks, 5 recipes, 233 source edges, 191 sources.
- Knowledge spine: PASS — 960 sources, 978 nodes, 11,297 edges.
- Program Driver: PASS — 50 checks.
- Secret-pattern scan: PASS for GitHub/OpenAI token and private-key patterns.
- Git large-file scan: no ordinary working-tree file above 50 MB.
- Git diff whitespace check: PASS.

## Canonical-workspace checks preserved by receipt

- AFFiNE v0.1 package: validator PASS, 5/5 tests PASS, deterministic bind/install PASS, identity refusals PASS.
- Teable v0.1 package: validator PASS, 13/13 smoke PASS, deterministic install/bind PASS.
- AFFiNE/Teable/Chatwoot solver: verifier PASS, 22 ordered rules, three-run digest parity, zero relaxations.
- Repository topology: PASS — 399 checks.

The exact receipts are included under:

- `research/workstreams/2026-08-28-affine-block/`
- `research/workstreams/2026-08-28-teable-block/`
- `research/workstreams/2026-08-28-three-candidate-solver-pilot/`
- `research/agent-zero/2026-08-28-repository-topology/`

## Expected isolated-clone holds

The full AFFiNE, Teable and three-candidate evidence-path verifiers do not pass in this isolated client-index snapshot because their contracts intentionally retain references to evidence outside this repository:

- Fahmy implementation receipts;
- SISOCRM host/data contracts;
- Bykonz Chatwoot integration receipts.

Those estates were not copied because this repository is an index/control plane and the snapshot exclusion policy forbids absorbing unrelated private/client source trees. This is a portability/indexing hold, not a reversal of the canonical verification receipts. It must be closed later through stable repository/Great Library locators rather than local relative paths.

## Boundary

This branch is a research/prototype snapshot. No block is qualified, admitted, deployed or released by this commit.
