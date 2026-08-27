# S1-L4 — Host foundation

You are `ACTIONIST-S1-L4-HOST`, a persistent Opus 5 research owner with 1M context. Work from `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel`.

Read `research/workstreams/2026-08-27-sprint-1/SPRINT-1-PROGRAM.md` completely and obey its depth, boundary, checkpoint, schema and verification contracts. Do not be lazy: compare real workload shapes and failure boundaries rather than defaulting to Postgres plus OAuth. Use the 1M context through staged checkpoints. If you delegate, every subagent must run Opus; no Sonnet, Haiku, Luna, MiniMax or other model.

## Objective

Own P09, P10 and P11 only. Determine the host foundation that allows mixed donor systems to behave as one Actionist product.

For P09, classify source-of-truth ownership and workload shapes: owned transactional data, donor-owned state, document/collaboration, analytics, search/vector, files, events and caches. Evaluate Postgres as default for new owned transactions without imposing it as a universal invariant. For P10, research identity, tenant, authorization, settings, navigation and donor-chrome absorption patterns; identify what must be host-owned and what can remain donor-owned. For P11, research connector architecture, credentials, scopes, action policies, approval, idempotency, retries, receipts and tenant isolation across API, browser and service adapters.

Survey approximately 100 commercial and 100 OSS precedents where domain-appropriate, dossier top 10, join local AutoSaaS/Great Library/SISOCRM/Actionist evidence, and reason from first principles. Produce decision tables for state ownership, identity/settings/navigation and connector safety. This is architecture evidence only, not implementation.

## Owned outputs

- `research/workstreams/p09-data-plane/runs/2026-08-27-sprint-1-fable/`
- `research/workstreams/p10-identity-settings-navigation/runs/2026-08-27-sprint-1-fable/`
- `research/workstreams/p11-connectors-integration-runtime/runs/2026-08-27-sprint-1-fable/`
- optional lane join: `research/workstreams/2026-08-27-sprint-1/lanes/S1-L4/lane-synthesis.md`

Return exact denominators, workload taxonomy, host-ownership invariants, connector patterns, experiments, falsifiers, blockers and smoke result. When done, send a compact callback to the Herdr agent `CENA`; if unavailable, persist `callback-pending.md` and retry later.
