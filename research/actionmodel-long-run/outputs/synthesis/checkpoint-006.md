# AM-SYNTHESIS checkpoint-006

Run: `actionmodel-long-run-2026-08-26`  
Lane: `AM-SYNTHESIS`  
Created: 2026-08-26 08:56 ICT  
Prior checkpoint: `research/actionmodel-long-run/outputs/synthesis/checkpoint-005.md`

## Outcome

The live platform lane has advanced through checkpoint-008. That immutable
checkpoint is now directly reviewed as `PARTIAL`. It supports a three-plane
model—constrained build, authority/operation, and evidence/registry—and a
strategic hypothesis that Action Model should build the client tool plus an agent
for long-tail software. It does not establish an Actionist implementation,
authenticated capability, vendor-neutral deployment, or an admitted Block
Contract.

The peer control plane contains a count contradiction: `status.json` reports one
blocked dossier and one active blocker, while `CURRENT.md` reports zero blocked
dossiers and a lower held/rejected claim count. The latest checkpoint explicitly
records one held admission blocker. Synthesis therefore keeps the blocker and
marks the peer `PARTIAL`; it does not edit the platform lane’s files.

## Verification receipts

Read-only checks run on 2026-08-26:

- Platform checkpoint-008 is an active milestone based on checkpoints 001–007,
  with no new discovery, one held admission blocker, and no runtime code edits
  (`research/actionmodel-long-run/outputs/platforms/checkpoint-008.md:1-17`).
- Its comparison ledger separates build, authority/operation, and evidence/
  registry planes and names the missing provider-neutral contracts, arbitrary GUI
  operation safeguards, and Action Model admission ledger
  (`research/actionmodel-long-run/outputs/platforms/checkpoint-008.md:19-35`).
- The platform decision records keep the build plane constrained and registry
  backed, make evidence/authority first-class, and treat vendor platforms as
  adapter-bound references rather than the Actionist contract
  (`research/actionmodel-long-run/outputs/platforms/checkpoint-008.md:37-67`).
- Explicit holds cover the screenshot-to-code admission blocker, absent
  authenticated/live evidence, legal/provenance boundaries, and unnormalized
  cost/limits (`research/actionmodel-long-run/outputs/platforms/checkpoint-008.md:69-85`).
- The platform source list names immutable checkpoints 001–007 and the mutable
  control-plane files; those checkpoint paths and the latest pointer resolve
  (`research/actionmodel-long-run/outputs/platforms/checkpoint-008.md:96-107`;
  `research/actionmodel-long-run/outputs/platforms/status.json:5-7`).
- The structured peer status reports `blocker_count: 1`, `dossiers.blocked: 1`,
  and a held P-010 candidate (`research/actionmodel-long-run/outputs/platforms/status.json:13-30`).
  The peer `CURRENT.md` instead reports `Blocked dossiers: 0` and 25
  held/rejected claim groups (`research/actionmodel-long-run/outputs/platforms/CURRENT.md:12-25`).
  The mismatch is recorded, not silently normalized.

## Verdicts

| Subject | Verdict | Evidence-backed finding and counter-citation |
|---|---|---|
| AM-PLATFORMS checkpoint-008 | `PARTIAL` | The packet gives a coherent, source-bounded comparison and explicit holds, but no Actionist implementation, authenticated/live capability, or admitted block (`research/actionmodel-long-run/outputs/platforms/checkpoint-008.md:1-17,69-85`). |
| Three-plane wedge | `PARTIAL` | Build, authority/operation, and evidence/registry are useful separations; the proposed long-tail software wedge is strategic direction rather than implemented capability (`research/actionmodel-long-run/outputs/platforms/checkpoint-008.md:11-17,21-35`). |
| Vendor/platform buy claim | `PARTIAL` | Registries, APIs, deployment, history, and telemetry exist in reviewed products, but the platform decision keeps them behind adapters and holds vendor-neutral deployment, full recovery, and OEM boundaries (`research/actionmodel-long-run/outputs/platforms/checkpoint-008.md:45-67,79-85`). |
| Platform control-plane counts | `PARTIAL` | `status.json` says one blocked dossier/active blocker while `CURRENT.md` says zero blocked dossiers and 25 held/rejected groups; the latest checkpoint independently says one held blocker (`research/actionmodel-long-run/outputs/platforms/status.json:13-30`; `research/actionmodel-long-run/outputs/platforms/CURRENT.md:12-25`; `research/actionmodel-long-run/outputs/platforms/checkpoint-008.md:69-73`). |
| Block Contract pilot authorization | `OPEN` | The screenshot-to-code candidate remains held for stack, token, adaptation, build, smoke, and visual proof; no platform comparison closes those gates (`research/actionmodel-long-run/outputs/platforms/checkpoint-008.md:69-85`). |

## Decision impact

- Keep the synthesis wedge `PARTIAL`: “build the client tool plus the agent that
  operates long-tail software” is a supported strategic inference, not a shipped
  or authenticated feature.
- Keep build-versus-buy `PARTIAL`. v0, Lovable, NocoBase, CopilotKit, and related
  surfaces can inform adapters, but none is the Actionist contract boundary or a
  substitute for provenance, approval, recovery, and evidence gates.
- Keep the next implementation gate `OPEN`. P-014 may resolve or defer the held
  screenshot-to-code path, but it does not authorize a real Block Contract pilot.
- Treat the peer count mismatch as a live tracker defect. Use the structured
  `status.json` blocker and the immutable checkpoint’s one-held-blocker statement
  for synthesis risk posture until AM-PLATFORMS reconciles `CURRENT.md`.

## Path and status repair

- The synthesis peer pointer advances to the directly reviewed
  `research/actionmodel-long-run/outputs/platforms/checkpoint-008.md`; all
  platform checkpoint files 001–008 are present.
- The platform latest pointer is valid, and its future checkpoint-009 pointer is
  intentionally queued rather than treated as a missing current artifact
  (`research/actionmodel-long-run/outputs/platforms/status.json:5-7,25-30`).
- No other lane output is edited. The vertical 39/24/27 crosswalk correction and
  the corpus/Horizon admission hold remain in force.

## Next queue

1. Retain the AM-VERTICALS correction at 39 covered use cases, 24 covered ideas,
   and 27 remaining use cases until its source metadata is repaired
   (`research/actionmodel-long-run/outputs/verticals/crosswalk-batch-001.json:55-67`;
   `research/actionmodel-long-run/outputs/verticals/status.json:19-39`).
2. Run the cross-lane contradiction pass against the sweep admission rule and
   Block Contract boundary (`research/actionist-solutions-sweep-spec-2026-08-26.md:108-127`;
   `design/BLOCK-FRAMEWORK.md:97-128`).
3. Follow AM-PLATFORMS P-014 only as an evidence/decision item; keep the held
   candidate and the real Block Contract pilot `OPEN`.
