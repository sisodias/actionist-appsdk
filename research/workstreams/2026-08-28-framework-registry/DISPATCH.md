# ACTIONIST-FRAMEWORK-REGISTRY dispatch

Agent: `ACTIONIST-FRAMEWORK-REGISTRY`  
Model: `gpt-5.6-luna max`  
Mode: visible Herdr lane, no subagents

## OUTCOME

Create the canonical Actionist Framework Registry and publish it into the existing system-map site. Convert scattered proprietary methods into reusable, linked, machine-readable frameworks and identify the frameworks still missing.

This is not a broad web-research task and not another prose dump. Inventory current Actionist research and local precedents first.

## REQUIRED READS

1. `AGENTS.md`
2. `CURRENT_STATE.md`
3. `knowledge/README.md`
4. `knowledge/00-MASTER-SYNTHESIS.md`
5. `knowledge/02-ASSUMPTION-LEDGER.md`
6. `knowledge/03-EVIDENCE-MAP.md`
7. `knowledge/05-EXPERIMENT-ROADMAP.md`
8. `knowledge/07-DECISION-TIMELINE.md`
9. `knowledge/block-hub/README.md`
10. `research/workstreams/2026-08-27-sprint-1/convergence/S1-CONVERGENCE.md`
11. `research/workstreams/2026-08-27-sprint-2/convergence/S2-CONVERGENCE.md`
12. P04/P06/P07/P09/P10/P12/P14/P15 current framework artifacts routed by the evidence map.
13. Completed lane packets under `research/workstreams/2026-08-28-agency-os-pilot/lanes/` when present; treat them as evidence only.

## FRAMEWORK CONTRACT

Every framework record must include:

- stable `framework_id` and name;
- category and problem owned;
- why this is a reusable framework rather than a one-off decision;
- inputs and outputs;
- algorithm, equation, ordered rules, or decision protocol;
- machine-readable artifact paths;
- maturity: `idea | specified | machine_readable | dry_run | measured | operational`;
- evidence class and exact local evidence paths;
- dependencies and downstream consumers;
- deterministic, model-judgment, and human-authority boundaries;
- falsifiers and next gate;
- current owner and canonical page.

Use categories that preserve the complete system, including demand/product, supply/discovery, selection/valuation, conversion/contracts, composition/experience, runtime/release, and learning/governance.

## LOAD-BEARING CONTENT

Inventory at least the existing frameworks for:

- client discovery and ProductSpec;
- business lifecycle / Block Hub decomposition;
- source discovery and candidate funnel;
- product-vs-framework-vs-primitive classification;
- reuse-shape selection;
- Repository Value Matrix / shape-specific Diamond Score;
- seven-record module contract family;
- normalization surgery taxonomy;
- host identity, tenancy, settings and navigation;
- data ownership and migration authority;
- design grammar and semantic token harmonization;
- preference learning;
- surface/component role mapping;
- bounded editing;
- deterministic composition and UNDERDETERMINED behavior;
- evidence qualification and min-gating;
- runtime profile and resource budgets;
- release, rollback and recovery horizons;
- production attribution, learning, promotion and retirement.

Do not force a target count. Deduplicate genuinely overlapping frameworks and preserve specializations.

## REPOSITORY VALUE MATRIX V1

Formalize the missing shape-specific valuation framework. Positive operator calibration anchors are AFFiNE, Twenty, Chatwoot and Plane. A repository must receive separate scores for complete-product, surface/module, engine, package and pattern reuse shapes.

The framework must include:

- measurable dimensions for product completeness, UI quality, out-of-box operability, architecture, integration seams, adaptation burden, runtime burden, maintenance, reuse breadth and evidence confidence;
- shape-specific weights;
- a min-sensitive or geometric equation so fatal weaknesses cannot be averaged away;
- hard gates and missing-evidence behavior;
- visual screenshot protocol;
- evidence ladder from metadata through source read, runtime smoke and integration proof;
- calibration fixtures and falsifiers;
- output schema suitable for scoring thousands of repositories;
- licence/reimplementation effort as a cost dimension, not an automatic rejection.

## GAP ANALYSIS

Identify additional frameworks Actionist will require to automate the complete loop. Rank gaps by dependency centrality and present consequence, not novelty. Distinguish:

- genuinely missing framework;
- existing framework lacking machine-readable form;
- machine-readable but untested;
- tested but not operational.

## OWNERSHIP

You may write:

- `knowledge/frameworks/**`
- `research/workstreams/2026-08-28-framework-registry/**` except this dispatch file may only be read
- the minimum generator/verifier changes under `knowledge/scripts/`
- generated Framework Registry files under `site/system-map/task-graph/frameworks/**`
- the minimum task-graph link/data updates generated through existing site scripts.

Preserve unrelated dirty work and do not rewrite historical research.

## REQUIRED ARTIFACTS

- `knowledge/frameworks/README.md`
- `knowledge/frameworks/framework-register.json`
- `knowledge/frameworks/framework-dependency-graph.json`
- `knowledge/frameworks/framework-gap-analysis.md`
- `knowledge/frameworks/repository-value-matrix-v1.md`
- `knowledge/frameworks/repository-value-score.schema.json`
- deterministic build/verify support integrated with current knowledge/system-map scripts;
- searchable site page at `/task-graph/frameworks/` with maturity, category, dependencies, evidence and gaps.

## VERIFY

- JSON/schema parse;
- unique IDs and resolved dependency edges;
- evidence paths resolve or are explicitly external/unknown;
- every framework carries maturity, falsifier and next gate;
- Value Matrix weights/equation/gates are internally consistent;
- known-good calibration anchors are fixtures, not fabricated measured scores;
- system-map build and smoke pass;
- knowledge spine build and smoke pass;
- `git diff --check` passes;
- live deployment is outside your authority: do not deploy.

## STOP

Stop after verified local artifacts and generated site output. Do not spawn subagents, implement any framework's runtime, score the full repository corpus, deploy the site, or promote a framework beyond its evidence.

## CALLBACK PROTOCOL

Finishing silently is a failure. Write all artifacts before callback.

Re-resolve the CENA pane in workspace `w659e02f80e5bb1` using:

```bash
H=/Users/shaansisodia/.local/bin/herdr
$H --session herdr-2 pane list
```

Verify the pane content before sending. Then send no more than six lines:

```text
[from: ACTIONIST-FRAMEWORK-REGISTRY] @CENA: DONE|BLOCKED. Framework count, maturity counts, top gaps, Value Matrix status, smoke status. Full packet in owned paths.
```

Use `pane run`, read back, and send Enter only if the message remains queued.
