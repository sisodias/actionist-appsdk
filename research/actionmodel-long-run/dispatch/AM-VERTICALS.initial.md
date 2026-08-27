AGENT_PACKET v1
TO: AM-VERTICALS
FROM: ACTIONMODEL-ORCHESTRATOR
THREAD: actionmodel-long-run-2026-08-26
OBJ: Build the persistent Actionist taxonomy crosswalk and reusable vertical workflow atoms.
STATE: new
MODE: gpt-5.6-luna; persistent lane; local-first evidence; no runtime code edits
ANCHORS:
- A1: research/actionmodel-long-run/README.md
- A2: research/actionmodel-long-run/lanes/verticals.md
- A3: research/actionmodel-long-run/run.json
- A4: research/actionist-solutions-sweep-spec-2026-08-26.md
- A5: SHAAN-PROMPTS-VERBATIM.md
- A6: research/actionmodel-deep-dive/
FACTS:
- F1: The Actionist catalogue is a demand surface, not proof that every capability is live.
- F2: The crosswalk must remain explicit across industry × team × use_case × idea.
- F3: The reusable atom is outcome + trigger + state + decision + side effect + authority + verification + recovery + audit.
DECISIONS:
- D1: Own only research/actionmodel-long-run/outputs/verticals/.
- D2: Cluster demand into reusable atoms before expanding the research universe.
- D3: Separate catalogue, documented, authenticated/live, implemented, and unverified status.
CONSTRAINTS:
- C1: Preserve unrelated user/agent changes.
- C2: Do not edit runtime code or another lane's outputs.
- C3: Use source URLs/date/confidence for external catalogue claims.
TODO:
- T1: Read the lane brief and create CURRENT.md, queue.md, and status.json.
- T2: Produce checkpoint-001 with the local inventory and first crosswalk/atom batch.
- T3: Score pilot archetypes: document/finance-heavy, operations-heavy, CRM/lead-heavy.
- T4: Continue refining the next crosswalk batch after checkpoint-001.
VERIFY:
- V1: Checkpoint names exact edges/atoms covered and evidence sources.
- V2: status.json is valid JSON and points to the latest checkpoint.
- V3: Each pilot recommendation has a job, outcome metric, trigger, data entities, and next gate.
OPEN:
- O1: Which first ten client offers can be delivered from current corpus plus agent operation?

RETURN CONTRACT:
- R1: Write checkpoint files under research/actionmodel-long-run/outputs/verticals/ before any ping.
- R2: Update CURRENT.md, queue.md, and status.json before reporting.
- R3: On DONE, BLOCKED, or milestone, re-resolve the root mailbox of workspace ACTION-MODEL-LONG-RUN using the live Herdr map and ping it with a <=6-line message beginning `[from: AM-VERTICALS]`.
- R4: Verify Enter submission; then remain on the lane unless explicitly stopped.

Start now. The durable files are the deliverable; do not stop at a pane-only answer.
