# Actionist Builder knowledge spine

This folder is the canonical entry point for understanding the Actionist/Action Model builder research as one system. It does not replace the underlying evidence. It links, classifies and compresses it.

## Read in this order

1. [00 — Master synthesis](00-MASTER-SYNTHESIS.md) — the whole problem, what was learned, and the current architectural thesis.
2. [01 — Domain map](01-DOMAIN-MAP.md) — the 18 owned problem domains and their contracts.
3. [02 — Assumption ledger](02-ASSUMPTION-LEDGER.md) — observed facts, working hypotheses, rejected assumptions and untested bets.
4. [03 — Evidence map](03-EVIDENCE-MAP.md) — which local research supports each domain.
5. [04 — Open questions](04-OPEN-QUESTIONS.md) — unresolved first-principles questions and missing research.
6. [05 — Experiment roadmap](05-EXPERIMENT-ROADMAP.md) — the smallest loops that convert research into evidence.

## Machine-readable layer

- `source-inventory.jsonl` accounts for every inventoried source file with path, hash, size, kind, phase and topic tags.
- `knowledge-graph.json` links sources to domains and canonical synthesis documents.
- `inventory-summary.json` records coverage and counts.
- `scripts/build-spine.mjs` rebuilds those generated artifacts deterministically.

## Canonicality rules

- This folder owns the current synthesis, questions and experiment ordering.
- Original research artifacts remain authoritative for their measured counts and receipts.
- A synthesis statement that conflicts with a direct source receipt must be corrected here; the source must not be rewritten to match the synthesis.
- `observed`, `inferred`, `hypothesis`, `unknown` and `rejected` are different states. They must never be collapsed into “we know.”
- Broad corpus counts describe discovery supply, not production-ready reusable assets.
- Legal/rights evidence is retained in the source graph but is outside the present quality-first architecture decision, per operator direction.

## Current boundary

This is a research and reasoning spine. It authorizes no cloning, execution, implementation, deployment or production admission. No background research loop is active from this folder.
