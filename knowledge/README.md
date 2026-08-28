# Actionist Builder knowledge spine

This folder is the canonical entry point for understanding the Actionist/Action Model builder research as one system. It does not replace the underlying evidence. It links, classifies and compresses it.

## Read in this order

1. [00 — Master synthesis](00-MASTER-SYNTHESIS.md) — the whole problem, what was learned, and the current architectural thesis.
2. [01 — Domain map](01-DOMAIN-MAP.md) — the 18 owned problem domains and their contracts.
3. [02 — Assumption ledger](02-ASSUMPTION-LEDGER.md) — observed facts, working hypotheses, rejected assumptions and untested bets.
4. [03 — Evidence map](03-EVIDENCE-MAP.md) — which local research supports each domain.
5. [04 — Open questions](04-OPEN-QUESTIONS.md) — unresolved first-principles questions and missing research.
6. [05 — Experiment roadmap](05-EXPERIMENT-ROADMAP.md) — the smallest loops that convert research into evidence.
7. [06 — Design grammar and preference protocol](06-DESIGN-GRAMMAR-AND-PREFERENCE-PROTOCOL.md) — joins P05/P06/P07/P08 into the valid design space, elicitation rounds, DesignDNA contract and closure experiments.
8. [07 — Decision timeline](07-DECISION-TIMELINE.md) — chronological record of the research, framework decisions, stacking model and pilot shortlist.
9. [Block Hub](block-hub/README.md) — business lifecycle, shared Digital Business OS, four vertical recipes, block requirements, source joins and gaps.
10. [Capability source registry](capability-shelf/README.md) — permanent joined list of candidate source systems, operator/Foundry signals, P03 evidence and client runtime precedents.

## Machine-readable layer

- `source-inventory.jsonl` accounts for every inventoried source file with path, hash, size, kind, phase and topic tags.
- `knowledge-graph.json` links sources to domains and canonical synthesis documents.
- `inventory-summary.json` records coverage and counts.
- `capability-shelf/source-registry.jsonl` is the current joined source-candidate and evidence projection.
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
