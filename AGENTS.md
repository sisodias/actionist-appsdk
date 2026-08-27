# Agent instructions — Actionist / Action Model

## Required reading

Before doing project work, read in order:

1. `CURRENT_STATE.md`
2. `knowledge/README.md`
3. `knowledge/00-MASTER-SYNTHESIS.md`
4. the domain-specific evidence linked from `knowledge/03-EVIDENCE-MAP.md`

Do not begin from the deepest phase folder or restart broad research merely because old program state says `parent_goal_status=active`.

## Canonical paths

- Current reasoning: `knowledge/`
- Product/technical architecture: `architecture/`
- Original evidence and research receipts: `research/`
- Private client context: `client/`
- Static views: `site/`
- Local tool state: `runtime/`
- Upstream client clone: `Actionist-AppSDK/`

The old `Actionist-AppSDK/SISO/` hierarchy is compatibility-only. Never create new work there; follow the symlink to the canonical root path.

## Evidence discipline

- Distinguish `observed`, `inferred`, `hypothesis`, `unknown` and `rejected`.
- Exact counts come from direct receipts, not synthesis prose.
- Broad corpus rows are discovery evidence, not reusable capability or production-readiness proof.
- Repositories are source containers; determine a reuse shape before extraction.
- Keep capability semantics, packaging, host binding, qualification and release evidence separate.
- Preserve historical outputs. Correct current interpretation in `knowledge/`, not by rewriting old receipts.

## Working boundary

- Research loops are paused unless the user explicitly restarts one.
- Do not spawn agents merely because old phase programs name lanes.
- Do not clone, execute, deploy or admit candidate source without current authorization.
- Legal/rights evidence remains recorded, but current architecture reasoning is quality-first per operator direction.
- Never commit or push this workspace to the `Actionist-AppSDK` remote.

## Verification

After changing knowledge or moving research files, run:

```bash
node knowledge/scripts/build-spine.mjs
node knowledge/scripts/verify-spine.mjs
```

If paths move, preserve compatibility only where historical receipts or tooling depend on them, and document the mapping in `REORGANIZATION-MAP.md`.
