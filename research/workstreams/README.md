# Actionist research workstreams

This directory is reserved for future verified research packets for the 15 moving parts in the [interactive system map](https://actionist-system-map.pages.dev/).

No workstream is active merely because its directory or task-graph node exists. Dispatch requires explicit operator authorization.

## Canonical location

```text
research/workstreams/<part-id>-<slug>/runs/<run-id>/
```

One agent may own several related part directories in a sprint. Two live agents must never write the same part directory.

## Required packet

Every completed run returns:

- `research-report.md`
- `source-register.jsonl`
- `top-companies.jsonl`
- `top-repos.jsonl`
- `innovation-register.jsonl`
- `first-principles.md`
- `decision-ledger.json`
- `lane-state.json`

If a denominator or artifact is not applicable, the lane records an explicit `not_applicable` disposition and rationale. It must not invent or pad rows.

## Required context

Before external discovery, every lane reads:

1. `AGENTS.md` and `CURRENT_STATE.md`.
2. `knowledge/00-MASTER-SYNTHESIS.md`.
3. `knowledge/02-ASSUMPTION-LEDGER.md`.
4. `knowledge/03-EVIDENCE-MAP.md`.
5. The 17-industry specifications and niche→atom→block join.
6. The dedicated system-map page and linked artifacts for every owned part.

## Promotion

The coordinator independently verifies the packet, then links it from the dedicated moving-part page. Original receipts remain immutable; current interpretation changes in the knowledge spine and page registry.
