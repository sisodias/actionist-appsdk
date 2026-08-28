# Canonical update proposals for CENA

This lane does not patch shared canonical files. The following proposals are evidence-linked and require CENA review/application.

## Applied program-driver receipt — 2026-08-28

The owned operating picture now records the following verified receipts without modifying shared canonical files:

- Framework Registry: `VERIFIED_RESEARCH_PACKET`; registry smoke `PASS` with 24 frameworks, 62 edges and 10 gaps; maturity `0/9/14/1/0/0`, including `measured=0` and `operational=0`.
- Supporting checks: system map `PASS`; Block Hub `PASS` with 80 blocks, 5 recipes, 233 edges and 191 sources; spine `PASS` with 960 sources, 978 nodes and 11,297 edges; diff `PASS`.
- AFFiNE `blocks/affine-workspace`: `VERIFIED_PROTOTYPE_WITH_HOLDS`; independent validation `PASS` (7 records, 13 evidence sources, 20 package files, no source/vendor, `NOT_ADMITTED`), npm test 5/5 with identity fail-closed, deterministic bind/post-bind validate, bounded install and diff-check all pass. It remains `NOT_QUALIFIED`/`NOT_ADMITTED` with H-THEME, H-SETTINGS, H-UPGRADE, H-DENSITY and H-CE-WEB.
- Teable remains `verified_prototype_with_holds`, `NOT_QUALIFIED`/`NOT_ADMITTED`, with all seven existing holds preserved.
- The contract-only AFFiNE+Teable+Chatwoot solver pilot gate is `OPEN` under the existing exclusions: contract records, surgery derivation and hand-run composer only; no clone, source execution, staged binding, deployment, qualification, admission or client data.

The exact machine-readable state is in `master-task-graph.json` and `lane-state.json`; direct packet evidence remains in the sibling-owned paths named there.

## CUP-01 — refresh the stale `CURRENT_STATE.md` lane sentence

**Source:** `CURRENT_STATE.md`, Status bullet currently says:

> Fifteen dedicated knowledge-node pages and a three-sprint/five-lane task graph are designed and live; no research lane has been dispatched from that graph yet.

**Why stale:** Fresh `herdr-2` state shows durable named lanes `ACTIONIST-FRAMEWORK-REGISTRY`, `ACTIONIST-BLOCK-AFFINE`, `ACTIONIST-BLOCK-TEABLE` and `ACTIONIST-PROGRAM-DRIVER`; their dispatch files are present on disk.

**Proposed replacement wording:**

> Fifteen dedicated knowledge-node pages and a three-sprint/five-lane task graph are designed and live. Sprint 1 and Sprint 2 research have converged with holds; on 2026-08-28, scoped follow-on lanes for the Framework Registry, AFFiNE v0.1 and Teable v0.1 were dispatched. These lanes are not completion, qualification, admission or release evidence.

## CUP-02 — correct the old Sprint 2 promotion sentence in the generated task graph

**Source:** `site/system-map/data/task-graph.json`, `promotion_gate` currently says:

> Sprint 1 has converged with explicit holds and all four handoff artifacts. Sprint 2 research is running; no implementation or Sprint 3 pilot is promoted until its five framework lanes reconcile.

**Why stale/conflicting:** `research/workstreams/2026-08-27-sprint-2/sprint-state.json` and `S2-CONVERGENCE.md` say Sprint 2 is `converged_with_holds`; the current follow-on lanes are three scoped post-S2 lanes, not the original five Sprint 2 framework lanes.

**Proposed replacement wording:**

> Sprint 1 and Sprint 2 have converged with explicit holds. The Framework Registry, AFFiNE v0.1 and Teable v0.1 follow-on lanes are active under scoped dispatches; no Sprint 3 pilot, shared application implementation, qualification, admission or deployment is promoted.

## CUP-03 — clarify the implementation boundary in the decision timeline

**Source:** `knowledge/07-DECISION-TIMELINE.md`, “Current next gate” currently begins:

> Before implementation, produce a comparative pilot decision packet for SaaS, ecommerce and marketing/social agencies...

**Why ambiguous:** The AFFiNE and Teable dispatches authorize local synthetic package implementation inside their owned block packages. That is narrower than application implementation and does not contradict the mainline research-only/admission boundary, but the distinction is not explicit in the canonical timeline.

**Proposed replacement wording:**

> Before any shared application implementation or staged binding, produce a comparative pilot decision packet for SaaS, ecommerce and marketing/social agencies, with course creators retained as the adjacent candidate. Scoped framework/package prototypes may proceed only inside their explicit lane-owned paths; they do not count as an application build, qualification, admission or release.

## CUP-04 — refresh public moving-part status projection

**Source:** `site/system-map/data/parts.json` currently mixes older `partial`/`open` statuses and S1 `current_run` pointers for P04/P07/P08/P12/P13/P14/P15 even though S2 artifacts and convergence are on disk.

**Proposed replacement wording / data rule:**

> Public moving-part status is derived from the latest verified receipt: `research_complete_with_holds` for all 15 parts at the current research boundary, with S2 run pointers for P04, P07, P08, P12, P13, P14 and P15. The status must remain separate from `implemented`, `qualified`, `admitted` and `released`; active follow-on lanes are shown as overlays, not as part completion.

The exact generated JSON should be rebuilt by the owning site/spine process after CENA reviews this packet; this proposal intentionally does not edit the generated site.
