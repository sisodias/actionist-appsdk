# S1-L2 Checkpoint 4 — first-principles synthesis and verification

Observed: 2026-08-27. Fourth and final checkpoint per the program.

## Synthesis artifacts written

- `first-principles.md` — objectives, constraints, 5 invariants, assumptions S1-S3, contradictions C1-C3, falsifiers F1-F4, open questions Q1-Q3, contracts E1/E2.
- `capability-taxonomy-and-industry-join.md` — 24 kinds, 17-industry join, commodity/scarce/missing, overlap model, 7 provenance lanes.
- `decision-ledger.json` — 10 lane decisions (D-01..D-10) each with rationale, evidence, falsifier and status; 5 open gates. D-06 and D-09 are proposals/reports to the coordinator, not applied changes, because this lane does not write `knowledge/` or shared skills.
- `innovation-register.jsonl` — 100 design hypotheses across 10 categories, 10 ranked.
- `source-register.jsonl` — 23 sources across all 7 provenance lanes.
- `smoke.py`, `build-overlap-graph.py` — mechanical verification and graph derivation, written before the artifacts were final so the check is a gate rather than a reread.
- `challenge-plan.md` / `challenge-results.md` — adversarial pass.

## Verification performed (not deferred to a final reread)

**Re-derived from source, not carried forward on trust:**
- Archetype concentration: parsed the Phase-8 §3 table directly. 17 industries; case_workflow primary for 6, secondary for 3 (9 of 17 total); portal secondary for 6; marketplace 0/0. Confirms the concentration and marketplace-exclusion claims.
- Corpus interface: `ls` of the foundry-corpus skill dir + `foundry status --json` run by the lane owner, reproducing the subagent's probe and finding the exit-0-on-failure defect independently.
- Both survey files re-counted with python3 rather than accepting the agents' summaries.

**Challenge results that changed the report (see challenge-results.md):**
1. **Portal supply is ~0, not 6.** All six permissive+candidate `portal` rows are wikis, doc renderers or internal-admin frameworks. None meets the archetype bar of untrusted external identity with scoped read. Portal scarcity is worse than counted; the build case strengthens. Sent to the repair agent as a fourth defect so the fix lands in the data.
2. **case_workflow scarcity was partly a stack artifact.** Phase 8 concluded no clean supply under a JS/TS filter. Off that filter, Flowable (Apache-2.0, CMMN — the case-management standard, pushed same-day) and jBPM (Apache-2.0, confirmed only by reading a non-standard root filename after the `/license` endpoint returned empty) are permissive, maintained, general spines. Camunda is correctly held: no root LICENSE, and a `licenses/` dir carrying both Apache-2.0 and a proprietary Camunda licence. The honest claim is "no clean supply on the JS/TS spine," not "no clean supply."
3. **Copyleft rows earn their place:** 58 of 65 strong-copyleft rows actively maintained, so D-03's keep-with-shape-constraint is preserving real optionality.

The portal defect was found by the adversarial read and NOT by the structural audit — evidence that mechanical checks alone were insufficient here.

## Outstanding at checkpoint time

Two repair passes still running (OSS scheduling/e-sign survey + shape revisions + portal re-tag; commercial embed/white-label/pricing verification). Final counts, overlap graph, research report, lane-state and smoke run land after they return. Status checks sent to both.

No promotion, admission or sprint-completion is claimed by this checkpoint.
