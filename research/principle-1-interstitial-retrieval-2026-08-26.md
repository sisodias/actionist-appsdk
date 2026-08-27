# P1 research — interstitial code retrieval — 26 Aug 2026

Agent: luna-retrieval (+websearch supplement). Confidence 91%. All claims source-linked;
UNVERIFIED items flagged. Verdict up front: **the principle survives, but as
"small, iterative, quality-gated evidence supply" — NOT indiscriminate scraping between
every step.**

## The four findings that shape the design

1. **In-loop retrieval works — gated.** RepoCoder (EMNLP 2023) proves iterative
   retrieve↔generate beats one-shot (+10% on RepoBench). But Repoformer (ICML 2024) is
   the counterweight: **always-on retrieval hurts**; a self-assessed "will retrieval
   help?" policy gets up to 70% inference speedup with no accuracy loss.
   → Retrieval between steps is *conditional*: the pipeline asks "do I need evidence
   here?" before querying. https://aclanthology.org/2023.emnlp-main.151/ ·
   https://arxiv.org/abs/2403.10059
2. **"Find similar code" is the trap.** The AllianceCoder study: naive similar-code
   retrieval can *reduce* Pass@1 by up to 15% (GPT CoderEval 36.52 → 19.57 when noisy
   similar code was injected). What helps: same-file context, invoked-API info, and
   NL descriptions of APIs after task decomposition (+20% Pass@1). Python-only, two
   models — directional. https://arxiv.org/abs/2503.20589
   → Query bundles should target APIs/contracts/intent, not "code that looks like this."
3. **Granularity is hierarchical, chunking is AST-aware.** Repo → file → AST block →
   line-span, each for a different role (scope → compatibility → extraction → patch).
   cAST (EMNLP 2025 Findings): AST-aware ~2-2.5k-char chunks, top-5, +4.3 Recall@5
   RepoEval / +2.67 Pass@1 SWE-bench; more low-ranked context = distractors.
   Evidence spans are tiny (median 27 lines) inside big files (51.8% >500 lines) — file
   hits ≠ localization. https://aclanthology.org/2025.findings-emnlp.430/ ·
   https://arxiv.org/abs/2607.24882
4. **Hybrid index, fused.** No single retriever dominates (Agent Retrieval Bench: RRF
   fusion of embeddings + structural RepoMap, MRR 0.2296→0.2713; agents still miss all
   gold files 27-35% of the time). GitHub Blackbird = the scale reference (blob-SHA
   dedupe, Tree-sitter symbols, n-grams); Sourcegraph moved *away* from embeddings at
   >100k-repo scale for ops cost. → Corpus index needs: lexical/symbol + embeddings +
   AST/graph edges + metadata (stack/license/quality), RRF-fused, top-5 evidence packs.
   https://github.blog/engineering/architecture-optimization/the-technology-behind-githubs-new-code-search/ ·
   https://sourcegraph.com/blog/how-cody-understands-your-codebase

## License gate (hard requirements)

- No license = default copyright = not harvestable. Ingestion requires machine-recognized
  license + provenance (URL, commit SHA, copyright, license text). Distinguish Unlicense
  (public-domain dedication, fine) from unlicensed (default copyright, quarantine).
- MIT: preserve notices. Apache-2.0: notices + change statements + patent grant.
  GPL/AGPL: reject-by-default for proprietary client output (AGPL adds network trigger).
- ScanCode over retrieved files AND final assembled tree; SPDX/CycloneDX output as CI
  gate. https://github.com/aboutcode-org/scancode-toolkit
- Open legal item: mixed-license adaptations / "larger work" boundaries need counsel for
  the production policy.

## When retrieval wins / loses

Wins: known APIs, framework glue, tested integration patterns, reusable UI primitives,
local conventions. (11-16% of changes in large repos are ported from peer projects;
AdaptivePaste shows adaptation is the error hotspot — bound-variable wiring — and a
dedicated adaptation step helps. https://arxiv.org/abs/2205.11023)
Loses: superficial similarity, novel logic, style/dependency conflict with scaffold,
context-budget overflow. **Abstention is a first-class outcome:** if license/compat/test
gates fail → generate fresh or use a higher-level library.

## Recommended pipeline (agent's design, inference from evidence)

Versioned `BuildState` after every step (spec, scaffold/stack, UI tree/tokens, feature
contract, diff, dep graph, test failures, retrieval ledger). Between steps:
1. Query bundle from current artifact: intent terms, exact APIs, framework/version,
   symbols, IO shapes, negative constraints. (Multiple short variants — matches our
   gh-search lesson.)
2. Scope by language/framework/license; exclude archived/vendored/generated/forks.
3. Parallel retrieve: BM25/regex/symbol + embedding + AST/graph.
4. Rerank: compatibility > semantic similarity; structural/API match > popularity
   (weighting = hypothesis, not literature); dedupe.
5. Evidence pack: source metadata + AST blocks + neighboring imports/types + minimal
   lines. Top-5, hard context budget, ordering matters (lost-in-middle: ICLR 2025).
6. Cheap-model adaptation constrained to scaffold interfaces (typed transformation:
   imports, identifiers, APIs, state, styling, errors).
7. Gates: license/provenance, deps, typecheck/build, unit, browser smoke.
8. Write back accept/reject as retrieval feedback.

## Implications for OUR corpus (my synthesis, not the agent's)

The 850k-repo index is README/category-level — good for step-2 scoping, NOT for step-3
retrieval. To serve P1 it needs a second layer: license partition first (cuts the
harvestable set hard), then Tree-sitter symbol/AST extraction over the license-clean
subset, blob-SHA dedupe, embeddings only over that reduced set. Blackbird's numbers
(115TB → 28TB unique) say dedupe buys ~4x. This is the real phase-1 engineering scope
for the corpus asset.

GAP (from agent): no public benchmark compares full app assembly from retrieved
components vs fresh generation under equal budgets — our eval harness would be novel.
UNVERIFIED: arXiv 2604.x/2605.x/2606.x claims from websearch (incl. anti-function-level
chunking result) — do not cite until confirmed.
