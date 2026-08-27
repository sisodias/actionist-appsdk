# Sprint 1 — independent evidence harvest

Run ID: `2026-08-27-sprint-1-fable`

Status: dispatched, unpromoted

## Objective

Resolve the independent research questions behind the first Actionist architecture pass without prematurely designing the cross-domain contracts. Five persistent Fable agents own disjoint moving-part directories and may use only Opus subagents.

## Depth contract

This is a serious research run, not a summary exercise. Every lane must:

1. Audit existing local evidence before external discovery and record what was actually read.
2. Build a broad commercial denominator near 100 relevant surfaces where the domain supports it, then justify a top 10.
3. Build a broad OSS/GitHub denominator near 100 relevant projects where the domain supports it, then justify a top 10.
4. Join the local estate, including AutoSaaS, Great Library, SISOCRM, 21st.dev stores and routed domain evidence where relevant.
5. Generate approximately 100 candidate innovations or design hypotheses, then rank a defensible top 10 where applicable.
6. Perform first-principles synthesis: objectives, constraints, invariants, assumptions, contradictions, falsifiers and unresolved questions.
7. Define contracts, experiments and decision gates without implementing them.
8. Run a post-write structural smoke and independently challenge the lane's headline claims before reporting done.

Denominators are targets, not permission to pad. If a denominator is not applicable, write `not_applicable` with a specific rationale and use the strongest domain-appropriate alternative. Unknowns remain unknown.

## Shared boundary

- Research only.
- No client-private data or authenticated vendor access.
- No candidate cloning, source execution, build, deploy, benchmark, admission or production mutation.
- Existing historical research is immutable evidence.
- Each lane writes only its owned workstream run directories and its own checkpoints.
- Parent status remains active and Sprint 1 remains unpromoted until coordinator verification.

## Required context

Read `AGENTS.md`, `CURRENT_STATE.md`, `knowledge/README.md`, `knowledge/00-MASTER-SYNTHESIS.md`, `knowledge/02-ASSUMPTION-LEDGER.md`, `knowledge/03-EVIDENCE-MAP.md`, the 17-industry specifications, the niche-to-atom-to-block join, `site/system-map/data/parts.json`, `site/system-map/data/task-graph.json`, and each owned part page. Follow evidence-map routes rather than recursively ingesting every historical file.

## Required packet per owned part

Path: `research/workstreams/<part-id>-<slug>/runs/2026-08-27-sprint-1-fable/`

- `research-report.md`
- `source-register.jsonl`
- `top-companies.jsonl`
- `top-repos.jsonl`
- `innovation-register.jsonl`
- `first-principles.md`
- `decision-ledger.json`
- `lane-state.json`

One lane-level `lane-synthesis.md` may join its owned parts. Every JSONL record needs an ID, evidence class, source identity/URL or local path, observation date, claim, limitations and disposition. `lane-state.json` records exact counts, checkpoints, blockers, hashes, smoke verdict and the canonical boundaries.

## Checkpoints

Each lane persists a compact checkpoint after:

1. prior-evidence audit;
2. commercial survey;
3. OSS/local-estate survey;
4. first-principles synthesis and verification.

## Lane ownership

- S1-L1: P01 and P02 only — client demand science.
- S1-L2: P03 only — capability supply graph.
- S1-L3: P05, P06 and P08 only — experience science.
- S1-L4: P09, P10 and P11 only — host foundation.
- S1-L5: P13, P14 and P15 only — editor, runtime and learning.

Cross-lane dependencies are cited read-only. No lane writes another lane's files.
