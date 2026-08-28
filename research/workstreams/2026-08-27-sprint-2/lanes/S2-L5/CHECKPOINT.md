# S2-L5 — runtime and learning contracts · lane checkpoint

Agent: `ACTIONIST-S2-L5-RUNTIME-LEARNING` (Opus 5[1m], no subagents dispatched)
Run: `2026-08-27-sprint-2-opus` · Status: **complete**
Boundary: research only · `implementation_authorized=false` · `UNEXECUTED` · `NOT_ADMITTED` · `admitted_blocks=0`

## What this lane owns and produced

Sprint 2 extensions of P14 and P15 only. No Sprint 1 packet or historical phase output was modified.

**P14** → `research/workstreams/p14-runtime-sandbox-release/runs/2026-08-27-sprint-2-opus/`
`runtime-profile-contracts.md` · `observability-attribution-contract.md` · `release-rollback-contract.md` ·
`worked-traces.md` · `packaging-runtime-reconciliation.md` · `runtime-profiles.json` ·
`release-manifest.schema.json` · `decision-ledger.json` · `lane-state.json` · `smoke.sh`

**P15** → `research/workstreams/p15-learning-feedback/runs/2026-08-27-sprint-2-opus/`
`learning-contract.md` · `evidence-signal.schema.json` · `capability-evidence-state.schema.json` ·
`decision-ledger.json` · `lane-state.json`

## The five things that matter

1. **Five runtime profiles as contracts, selected by ownership.** `package-in-host`, `microfrontend`,
   `sidecar-service`, `worker`, `scheduled-job` — chosen by *who owns the state and migrations*, not by
   deployment convenience. Selection is a deterministic lookup; the `ReuseDecision` feeding it is model
   judgment; accepting a short horizon or a non-recoverable effect is human authority.

2. **Attribution classes bound what the learning loop may conclude.** Every capability declares
   `dependency` / `service` / `endpoint` / `deploy` / `none`, verified by induced failure rather than
   self-declared. `none` is inadmissible; `deploy` can never drive demotion. This closes Sprint 1's
   X-P15-3 (P15's best signal was blocked on a P14 deliverable) with an enforceable field.

3. **Eight rollback objects, minimum-governed horizon, refusal on shortfall.** `RollbackPlan` is never a
   boolean. An uncomputable horizon contributes 0 and refuses the release by arithmetic. Unrecoverable
   effects are held *outside* the horizon calculation so a notification job does not make every
   composition unreleasable — the minimum governs recovery, not effects never recoverable.

4. **Signal classes stop the learning loop poisoning itself.** Only `quality` signals rank a capability.
   A revoked third-party OAuth grant is `environmental`; `UNDERDETERMINED` is `contract_defect`; a
   workflow failing while every capability qualifies is `binding_defect`; co-rolled-back packages share
   one `cause_id` and count once. Retirement requires a positive reason — accumulated silence never
   retires anything, because absence is not a negative signal.

5. **Min-gating held, including against itself.** Ranking is the minimum across evidence families, never
   a weighted average, and a within-tier weighted tie-break was considered and rejected because it
   reintroduces the same compensation failure at finer grain.

## Four worked traces, each breaking something different

| Trace | Profile | Breaks |
|---|---|---|
| A — intact donor service | `sidecar-service` | 7 rollback objects; ~30min donor-owned schema horizon **refuses** a 24h support window |
| B — extracted package | `package-in-host` | No independent rollback; correlated demotions would punish innocent capabilities |
| C — nightly job emitting email | `scheduled-job` | Failure mode is silence; sent email is covered by no rollback object |
| D — connector-backed worker | `worker` | Correct attribution, wrong learning conclusion; `connector_state` often unrecoverable |

## Reconciliation with S2-L1 — executed

S2-L1 published `module-contract-family.json` during this run (read 22:12, while they were still
`working`; rows are re-runnable against a later version). Seven checks executed:
**4 PASS, 1 PARTIAL, 2 NOT MODELLED.** Detail in `packaging-runtime-reconciliation.md`.

**The headline is independent convergence.** Working from the same Sprint 1 evidence without sharing
drafts, both lanes derived the **same eight rollback objects**, the **same minimum-horizon rule**, the
**same digest-pinning-with-owned-retention** requirement, and the **same anti-averaging minimum tier**.
L1's `HostContract.observability` reproduces the Sprint 1 attribution requirements almost verbatim.
Two independent derivations reaching one model is stronger evidence than either alone.

Defects raised against P04 (theirs to accept or reject):
- **S2L5-P04-001** `HostContract.identity` does not forbid trusting client-supplied headers — the
  clause that most often forces a donor fork, and an admission gate rather than a style preference.
- **S2L5-P04-002** No correlated-rollback grouping; without it P15 counts one cause as N demotions.
- **S2L5-P04-003** **`ReleaseManifest` is defined by both lanes.** Compatible — mine is a superset with
  the same object model — but two schemas for one record is a convergence defect. Recommendation: L1's
  family carries the record's place, mine carries its content; merge under D18.

Defects S2-L5 accepts against itself, unpatched because they sit on a two-lane seam:
- `tier` enum missing `T0` (L1 has `T0..T4`); my manifest would reject a T0 capability.
- `upstream_sync_model` not consumed, so upgrade-burden evidence has no declared source — a
  `vendored_no_upstream` capability never emits an upgrade-break signal.
- Correlated grouping modelled on the signal but not on the binding, where it must originate.

Vocabulary settled by evidence: **`capability_id`** (L1 uses it 9 times, `module_id` zero). Still
unsettled: L1's `PackagingProfile` and my runtime profiles are different objects sharing the word
"profile"; and the eight rollback objects have two cosmetic spellings that must be reconciled before
either schema is implemented.

## Verification

`bash research/workstreams/p14-runtime-sandbox-release/runs/2026-08-27-sprint-2-opus/smoke.sh` — **PASS** (6 sections, 41 assertions, 0 failures)

Six sections: artifact presence, JSON parse, boundary flags, counts-match-prose, schema boundary
constants (tier rules pinned to `minimum_across_families`, 8 rollback classes, structural-only signals),
and an ownership check that all working-tree changes are confined to owned S2-L5 paths.

## Carried unresolved — not closed by this lane

- **AP14-1** five profiles suffice — hypothesis. Likeliest falsifier recorded: a capability needing
  iframe-with-own-origin isolation while owning no store. Deliberately **not** patched with a sixth
  profile on speculation.
- **AP14-2 / X-P14-1** ComputeSDK cannot carry memory-preserving pause (no `pause`/`resume`; `status`
  enum cannot represent paused). Resolved *against the abstraction*; the three-way choice is left
  explicit because the failure mode is silent. Static read at `main`, no live-provider execution.
- **AP14-5** K long-lived schema versions exceed pgroll/reshape (two versions, transient). Not assumed
  anywhere; fallback is lockstep upgrade, whose cost must be priced.
- **AP15-5** cross-client aggregation consent — **unknown**, gates P15's whole cross-client premise.
  E-P15-5 resolves it by conversation, not code. Cheapest high-value experiment in the part.
- **AP15-7** min-gating may be degenerate; E-P15-1 must run before any live use.
- **A37** production learning improves reuse decisions — still a hypothesis.
- Vendor claims that must not be quoted as capability: Northflank "one-click rollback", Datadog
  Synthetics automatic rollback. Sprint 1 gaps still open: FireHydrant, Rootly, Bugsnag stability
  targets, Datadog Error Tracking fingerprinting.

## What this lane refuses to claim

Nothing has been built, released, rolled back or rehearsed. Every horizon figure quoted (≈1s Vercel
traffic revert, ≈30min PlanetScale dual-write) is vendor-documented mechanics, not measured Actionist
behavior. The rollback ordering is derived from object dependencies, not observed in execution. No
learning-loop transition has ever fired. `admitted_blocks = 0`.
