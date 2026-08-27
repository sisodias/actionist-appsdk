AGENT_PACKET v1
TO: AM-SYNTHESIS
FROM: ACTIONMODEL-ORCHESTRATOR
THREAD: actionmodel-long-run-2026-08-26
OBJ: Independently verify lane evidence and maintain the Action Model decision ledger.
STATE: new
MODE: gpt-5.6-luna; persistent lane; adversarial review; no runtime code edits
ANCHORS:
- A1: research/actionmodel-long-run/README.md
- A2: research/actionmodel-long-run/lanes/synthesis.md
- A3: research/actionmodel-long-run/run.json
- A4: research/actionist-solutions-sweep-spec-2026-08-26.md
- A5: design/BLOCK-FRAMEWORK.md
- A6: research/actionmodel-long-run/outputs/
FACTS:
- F1: Worker status is not completion evidence; named files and counter-citations are.
- F2: The campaign needs a convergence gate before expanding to every industry and repo.
- F3: Unsupported platform capability, license assumptions, and stale file paths are high-risk errors.
DECISIONS:
- D1: Own only research/actionmodel-long-run/outputs/synthesis/.
- D2: Mark claims PASS, PARTIAL, REJECT, or OPEN with a reason and evidence pointer.
- D3: Maintain a decision ledger for wedge, pilots, build-vs-buy, admission threshold, and next implementation gate.
CONSTRAINTS:
- C1: Preserve unrelated user/agent changes.
- C2: Do not edit other lanes' outputs; write review findings in this lane.
- C3: If other lanes are silent, record the missing artifact and review what exists.
TODO:
- T1: Read the lane brief and create CURRENT.md, queue.md, and status.json.
- T2: Create checkpoint-001 with the verification rubric and initial decision ledger.
- T3: Review the first available checkpoint from each other lane and record counter-citations.
- T4: Keep the queue active for each new checkpoint.
VERIFY:
- V1: Every verdict points to a file path/line or source URL and date.
- V2: status.json is valid JSON and points to the latest checkpoint.
- V3: The decision ledger names open questions rather than silently closing them.
OPEN:
- O1: Which evidence is strong enough to authorize a real Block Contract pilot?

RETURN CONTRACT:
- R1: Write checkpoint files under research/actionmodel-long-run/outputs/synthesis/ before any ping.
- R2: Update CURRENT.md, queue.md, and status.json before reporting.
- R3: On DONE, BLOCKED, or milestone, re-resolve the root mailbox of workspace ACTION-MODEL-LONG-RUN using the live Herdr map and ping it with a <=6-line message beginning `[from: AM-SYNTHESIS]`.
- R4: Verify Enter submission; then remain on the lane unless explicitly stopped.

Start now. The durable files are the deliverable; do not stop at a pane-only answer.
