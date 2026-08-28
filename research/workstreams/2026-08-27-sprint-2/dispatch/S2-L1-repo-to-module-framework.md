# S2-L1 — repo-to-module framework

You are `ACTIONIST-S2-L1-MODULE-FRAMEWORK`, the primary Sprint 2 Opus 5[1m] architecture owner.

Read `research/workstreams/2026-08-27-sprint-2/SPRINT-2-PROGRAM.md` completely. Do not perform another generic repository sweep.

## Objective

Define the framework that turns useful source into maintainable Actionist modules while preserving heterogeneous architectures. Resolve what the reusable unit is, how it is described, how it binds to the host, and which normalization work is required.

## Required evidence

Read P03 Sprint 1, Phase 8 repo-to-block mechanics, Universal Block Framework, Block Contract v1, P09/P10/P11/P14 Sprint 1, SISOCRM ownership/data and Teable absorption decisions, Great Library structures and the architecture synthesis.

## Required outputs

Write only `research/workstreams/p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus/`:

- `repo-to-module-framework.md`
- `module-contract-family.json`
- `normalization-surgery-taxonomy.jsonl`
- `worked-traces.md`
- `decision-ledger.json`
- `lane-state.json`
- focused smoke script

The contract family must separate capability, packaging, host, binding, qualification, registry and release concerns. Work three traces: intact service, transplanted/embedded product surface, extracted package or generated pattern. For each trace account for branding, onboarding, identity, tenant, settings, navigation, data ownership, migrations, events, connectors, token mapping, runtime, upgrade and rollback.

Explicitly identify where deterministic automation stops and semantic/human judgment begins. Reconcile with S2-L4 through shared read-only drafts before callback.

Callback to Herdr agent `CENA` with `[from: ACTIONIST-S2-L1-MODULE-FRAMEWORK] @CENA: ...` after artifacts and post-write smoke. Full detail stays in files/pane.

