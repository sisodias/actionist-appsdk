# ACTIONIST program driver — dispatch

Date: 2026-08-28
Role: persistent Luna program operator
Coordinator: CENA

## Objective

Maintain one accurate, evidence-linked operating picture for the complete Actionist plan so the operator is asked only for consequential product choices. Reconcile the 18-domain knowledge spine, the 15 public moving-part pages, Sprint 1 and Sprint 2 convergence, current block implementation lanes, and the remaining empirical gates.

This lane coordinates and proposes. It does not silently broaden scope, spawn workers, deploy, admit blocks, or make product decisions for the operator.

## Read first

Read these completely before writing:

1. `AGENTS.md`
2. `CURRENT_STATE.md`
3. `knowledge/README.md`
4. `knowledge/00-MASTER-SYNTHESIS.md`
5. `knowledge/01-DOMAIN-MAP.md`
6. `knowledge/02-ASSUMPTION-LEDGER.md`
7. `knowledge/03-EVIDENCE-MAP.md`
8. `knowledge/04-OPEN-QUESTIONS.md`
9. `knowledge/05-EXPERIMENT-ROADMAP.md`
10. `knowledge/07-DECISION-TIMELINE.md`
11. `research/workstreams/2026-08-27-sprint-1/sprint-state.json`
12. `research/workstreams/2026-08-27-sprint-1/convergence/S1-CONVERGENCE.md`
13. `research/workstreams/2026-08-27-sprint-2/sprint-state.json`
14. `research/workstreams/2026-08-27-sprint-2/convergence/S2-CONVERGENCE.md`
15. `research/workstreams/2026-08-28-framework-registry/DISPATCH.md`
16. `research/workstreams/2026-08-28-affine-block/DISPATCH.md`
17. `research/workstreams/2026-08-28-teable-block/DISPATCH.md`

Inspect live Herdr state read-only via the explicit named session `herdr-2`. Identify lanes by durable agent name and terminal ID; never act on remembered pane positions.

## Owned paths

Write only inside:

- `research/workstreams/2026-08-28-program-driver/**`

`DISPATCH.md` is coordinator-owned and read-only.

Do not edit canonical knowledge, architecture, site, block, sprint, or sibling-lane files. Instead record exact proposed changes in `canonical-update-proposals.md` for CENA to review and apply.

## Initial deliverables

1. `program-status.md`
   - one-page human operating summary;
   - what is complete, active, blocked, missing, and deliberately deferred;
   - separate research-complete from implemented, qualified, admitted, and released.
2. `master-task-graph.json`
   - stable task IDs;
   - domain/moving-part ownership;
   - dependencies;
   - status and evidence paths;
   - next gate;
   - whether operator input is genuinely required.
3. `live-lanes.json`
   - current durable agent names, terminal IDs, objectives, owned paths and observed status;
   - no stale pane IDs.
4. `critical-path.md`
   - the smallest path from current state to one composed, measured product;
   - identify parallelizable work and explicit convergence points;
   - place AFFiNE and Teable correctly within that path.
5. `operator-decisions.md`
   - only decisions that cannot be resolved from existing evidence;
   - each decision includes default recommendation, consequence and deadline/gate;
   - if no decision is needed now, say so.
6. `canonical-update-proposals.md`
   - cite stale/conflicting canonical claims and exact proposed replacement wording;
   - never patch shared sources directly.
7. `lane-state.json`
   - counts, blockers, evidence paths, boundary state and refresh timestamp.
8. `smoke.mjs`
   - verify required artifacts, JSON validity, task-ID uniqueness, dependency resolution, evidence-path existence, status vocabulary and owned-path boundary.

## Operating rules after initial reconciliation

- Stay available as the durable program driver.
- When CENA sends a lane callback, update only this lane's status/graph artifacts from direct receipts.
- Never infer DONE from agent status. DONE requires an artifact plus a passing verifier or an explicit verified hold.
- Never spawn or message another worker unless CENA explicitly authorizes that exact action.
- Surface no more than three operator decisions at once.
- Prefer the next evidence-producing implementation/experiment over another breadth survey.
- Treat `CURRENT_STATE.md` as potentially stale until reconciled against the sprint convergence receipts.

## Success criteria

- Every one of the 18 domains and 15 public moving parts maps to a current status and evidence path.
- Sprint 1 and Sprint 2 are represented accurately as converged research with holds, not unrun.
- The active Framework Registry, AFFiNE and Teable lanes are represented without claiming completion.
- The graph exposes the critical path and does not jump from research directly to production admission.
- The operator can understand where the project stands from `program-status.md` in under three minutes.
- `node research/workstreams/2026-08-28-program-driver/smoke.mjs` passes.

## Boundary

Research/coordination only. No client data. No deployment. No production admission. No source cloning. No hidden worker creation. Preserve unrelated work.

## Callback protocol

Finishing silently is a failure mode. Write the full artifacts first. Then:

1. Re-resolve the CENA pane from `herdr-2` with `/Users/shaansisodia/.local/bin/herdr --session herdr-2 pane list`.
2. Verify the CENA pane by reading recent content.
3. Send a message of six lines or fewer: status, artifact path, critical path headline, operator decisions count, blockers count.
4. Read back after two seconds and press Enter only if the message remains queued.

Return an `AGENT_PACKET v1` in your own pane with exact verification evidence.
