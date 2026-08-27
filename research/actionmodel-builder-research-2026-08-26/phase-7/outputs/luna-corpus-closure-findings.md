# Luna corpus-closure findings

**Lane:** corpus closure audit  
**Researcher:** Luna explorer A / Descartes  
**Status:** independently confirmed; no implementation or admission claim  
**Boundary:** read-only analysis of the local research artifacts.

## Finding

The Phase-7 gap is a join/completion failure, not a missing-slot failure.

The current pipeline constructs 170 independent cells:

```text
R(i,d) = 100 repository slots for industry i and dimension d
```

That construction proves 17 × 10 × 100 = 17,000 slots. It does not first select a stable set of 100 repositories per industry and then require the ten-dimensional cross-product for every selected repository:

```text
C(i,r) = |D(i,r)| = 10
```

The independent readback confirms:

- 17,000 merged observed rows.
- 170 cells, each with exactly 100 distinct repository URLs.
- 216 distinct repository URLs globally.
- 3,346 industry–repository pairs.
- 270 pairs with all 10 dimensions.
- 3,076 partial pairs.
- 1,430 complete-pair deficit against the 1,700-pair target.
- 171 repositories reused across all 17 industries.

The dimension-count distribution for the 3,346 pairs is:

| Dimensions present | Pairs |
|---:|---:|
| 1 | 386 |
| 2 | 487 |
| 3 | 328 |
| 4 | 305 |
| 5 | 363 |
| 6 | 339 |
| 7 | 339 |
| 8 | 247 |
| 9 | 282 |
| 10 | 270 |

The evidence shape also matters: the merged matrix contains 216 unique evidence values and one unique ledger value. That is consistent with an indexed evidence layer, not 17,000 independent repository dossiers.

The complete machine-checked measurement is in [coverage-gap-audit.md](coverage-gap-audit.md), and the deterministic worklist is in [closure-queue-summary.md](closure-queue-summary.md) with its row-level [closure-queue.jsonl](closure-queue.jsonl).

## Required ledger model

The current matrix row should not be promoted directly to a complete dossier. The closure ledger needs four separable record types:

1. `repository_selection`: one canonical identity per industry×repository pair, with owner/name normalization, canonical URL, revision fields, selection status, rights status, and falsifier.
2. `dimension_evidence`: exactly one repository-specific evidence record for every industry×selected-repository×dimension combination. The target is 17 × 100 × 10 = 17,000 records.
3. `source_receipt`: reusable immutable source identity, URL/path or endpoint, revision, retrieval time, content digest, access status, source class, and rights linkage.
4. `closure_summary`: one industry record plus one run record proving selected count, complete count, missing dimensions, and promotion state.

Minimum evidence fields:

```text
industry_id
identity_key
dimension_id
selection_id
canonical repository URL
immutable revision or explicit unresolved state
source reference and exact path/span
observed date
evidence class
observation
limitation
rights and SBOM state
falsifier or next gate
closure status
admission status
```

The candidate register’s rights and provenance fields are useful inputs, but search metadata, a mutable HEAD URL, or a declared capability tag cannot serve as sole closure evidence. Rights, license, SBOM, runtime behavior, and capability proof remain separate claims.

## Queue rule

Queue by incomplete industry×repository pair, not by empty cell. A worker may fill only the dimensions listed as missing, preserve existing observations, and attach repository-specific source receipts. New repository discovery is a separate queue class so it cannot be conflated with completing an existing partial pair.

The deterministic priority is:

1. greatest existing evidence coverage / fewest missing dimensions;
2. explicit repository-specific source lead;
3. rights and identity readiness;
4. maintenance metadata;
5. canonical identity key.

Promotion remains blocked until every industry has 100 distinct complete pairs and every one of those pairs has ten valid dimension records. This finding is an evidence-backed design constraint for Phase 7, not a claim that the target has been reached.
