# Lane-owner finding — every `workstream_root` in parts.json is a dead path

Lane: S1-L3. Run: `2026-08-27-sprint-1-fable`. Found: 2026-08-27.
Evidence class: **observed** (directory listing joined against the parts.json field).
Scope: **cross-lane.** This affects all five Sprint-1 lanes, not just S1-L3.

## How it surfaced

The P08 agent reported its packet missing and suggested the lane owner might be "looking at
`P08-archetypes-shells-and-layouts/`, the parts.json `workstream_root`, not
`p08-archetype-shell-layout/`." The packet was not missing — but the question was worth checking,
and checking it exposed something larger.

## The measurement

Joining every `workstream_root` in `site/system-map/data/parts.json` against
`research/workstreams/` on disk:

```
parts with a workstream_root:      15
roots that do NOT exist on disk:   15   (100%)
```

| Part | `workstream_root` in parts.json | Directory actually in use |
|---|---|---|
| P01 | `P01-client-intelligence-and-discovery/` | `p01-client-intelligence/` |
| P02 | `P02-outcome-and-product-specification/` | `p02-outcome-product-spec/` |
| P03 | `P03-curated-capability-shelf/` | `p03-curated-capability-shelf/` |
| P05 | `P05-living-ui-component-layer/` | `p05-living-component-layer/` |
| P06 | `P06-design-taste-and-preference-learner/` | `p06-preference-science/` |
| P08 | `P08-archetypes-shells-and-layouts/` | `p08-archetype-shell-layout/` |
| P09 | `P09-data-and-state-plane/` | `p09-data-plane/` |
| P10 | `P10-identity-settings-and-navigation-host/` | `p10-identity-settings-navigation/` |
| P11 | `P11-connector-and-external-action-plane/` | `p11-connectors-integration-runtime/` |
| P13 | `P13-preview-editor-and-change-loop/` | `p13-preview-editor/` |
| P14 | `P14-runtime-verification-and-release/` | `p14-runtime-sandbox-release/` |
| P15 | `P15-continuous-corpus-and-production-learning/` | `p15-learning-feedback/` |

(P04, P07 and P12 have roots on disk under neither name — no lane owns them this sprint.)

Note P03 differs **only in leading case**, which is the most dangerous variant: it will resolve
on a case-insensitive filesystem and fail on a case-sensitive one.

## Why it matters

`parts.json` is the machine-readable spine behind the live moving-parts map. An agent that
trusts it for routing — rather than for part semantics — writes to a directory nobody reads, or
concludes a sibling's work is missing. The second failure nearly happened in this lane: a
subagent reported its own completed packet as possibly lost because the advertised path did not
match the real one.

Nothing was actually lost here. But the near-miss is the finding: **a dead path in a spine file
does not error, it misroutes.** It is the same class as the `MG-01..MG-05` drift the Phase-8
local-corpus-join lane recorded ("each one silently misroutes an agent that trusts the
document") — that lane found five stale paths; this is fifteen, at 100%.

## Recommendation (not executed — outside this lane's write scope)

`parts.json` is not S1-L3's file and this lane did not modify it. For the coordinator:

1. Either update the 15 `workstream_root` values to the directories actually in use, or rename
   the directories to match the spine — but pick one direction and apply it to all 15.
2. Prefer updating `parts.json`, since twelve lanes' worth of run packets already live under the
   short names and renaming would break every path recorded in this sprint's checkpoints and
   callbacks.
3. Add a cheap CI/verification check that every `workstream_root` resolves. This is a one-line
   join and would have caught all 15 at authoring time.

## Limitation

Verified for `research/workstreams/` roots only, at one point in time. Whether other spine files
(`task-graph.json`, the knowledge graph) carry the same drift was **not** checked by this lane.
