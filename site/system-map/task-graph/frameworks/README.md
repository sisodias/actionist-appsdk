# Actionist Framework Registry

Status: `research_only` · observed 2026-08-28 · owner `ACTIONIST-FRAMEWORK-REGISTRY`

The Framework Registry is the canonical index of repeatable Actionist methods. It turns the
scattered contracts, decision protocols, score models and evidence gates in `knowledge/` and
`research/` into linked records that a future planner can discover without treating a repository,
prose packet or precedent as a production capability.

## Canonical artifacts

- [`framework-register.json`](framework-register.json) — one record per framework, including its
  owner, method, maturity, evidence, boundaries, falsifiers and next gate.
- [`framework-dependency-graph.json`](framework-dependency-graph.json) — prerequisite edges between
  frameworks. An edge means the `from` framework is an input to the `to` framework; it does not
  transfer ownership.
- [`repository-value-matrix-v1.md`](repository-value-matrix-v1.md) — shape-specific valuation
  method, evidence ladder, screenshot protocol, calibration fixtures and falsifiers.
- [`repository-value-score.schema.json`](repository-value-score.schema.json) — machine-readable
  score output contract for one `(source, shape, recipe, block, workflow)` row.
- [`framework-gap-analysis.md`](framework-gap-analysis.md) — ranked missing or under-tested
  framework work, ordered by dependency centrality and consequence.
- Generated site page: [`/task-graph/frameworks/`](../../site/system-map/task-graph/frameworks/).

## Framework record contract

Every record has a stable ID and name, one category, one owned problem, a reason it is reusable,
typed inputs and outputs, an algorithm or decision protocol, machine-readable artifact paths,
maturity, evidence class and exact evidence paths, dependency and consumer edges, deterministic /
model-judgment / human-authority boundaries, falsifiers, a next gate, current owner and canonical
page.

The seven categories preserve the full Actionist loop:

1. `demand_product`
2. `supply_discovery`
3. `selection_valuation`
4. `conversion_contracts`
5. `composition_experience`
6. `runtime_release`
7. `learning_governance`

Maturity is a claim about the framework artifact, not about the software it describes:

- `idea` — named proposal without a stable specification.
- `specified` — protocol is described and falsifiable, but its canonical machine form is absent or
  incomplete.
- `machine_readable` — a stable JSON/schema/structured artifact exists; execution may still be
  absent.
- `dry_run` — a structured artifact has been exercised against synthetic or hand-run cases; this is
  not runtime qualification.
- `measured` — the framework has direct, reproducible measurements for its intended decision.
- `operational` — it is used in an authorized maintained production loop.

The current register deliberately contains no `measured` or `operational` framework. Existing
counts and smoke receipts prove that documents and schemas parse; they do not prove that a source
was cloned, executed, composed, deployed, admitted or learned from in production. Rights,
qualification, runtime and client acceptance remain separate gates.

Evidence classes retain the project vocabulary: `observed`, `inferred`, `hypothesis`, `unknown` and
`rejected`. A local file can support an inference without turning the inference into an observed
production fact. Unknown paths are represented explicitly rather than padded with a guessed source.

## Registry boundary

This packet inventories and links current methods. It does not implement a framework runtime, score
the full repository corpus, select a pilot, admit a block, deploy the system map or change any
historical research receipt. The generated page is a searchable local projection of the registry;
the JSON is the source of truth.
