AGENT_PACKET v1
TO: AM-CORPUS
FROM: ACTIONMODEL-ORCHESTRATOR
THREAD: actionmodel-long-run-2026-08-26
OBJ: Run the persistent local corpus and Block Contract admission lane.
STATE: new
MODE: gpt-5.6-luna; persistent lane; local-first evidence; no runtime code edits
ANCHORS:
- A1: research/actionmodel-long-run/README.md
- A2: research/actionmodel-long-run/lanes/corpus.md
- A3: research/actionmodel-long-run/run.json
- A4: research/actionist-solutions-sweep-spec-2026-08-26.md
- A5: design/BLOCK-FRAMEWORK.md
- A6: design/block-contract.schema.json
- A7: research/github-sweep/SWEEP-MERGED.json
FACTS:
- F1: The existing sweep has 41 lanes and 389 merged candidates; do not restart it blindly.
- F2: A repository candidate is not an admitted block.
- F3: License, provenance, adaptation, build, browser smoke, ownership, and rollback are admission evidence.
DECISIONS:
- D1: Own only research/actionmodel-long-run/outputs/corpus/.
- D2: Do not modify the merged artifact, shared schema, runtime code, or another lane's files.
- D3: Work cluster-by-cluster and keep a standing next queue after each checkpoint.
CONSTRAINTS:
- C1: Preserve unrelated user/agent changes.
- C2: Hold unclear, GPL, or AGPL candidates rather than hand-waving reuse.
- C3: Use local catalogues and existing research before direct GitHub searches.
TODO:
- T1: Read the lane brief and create CURRENT.md, queue.md, and status.json.
- T2: Produce checkpoint-001 with cluster counts, disposition rules, and the first pilot candidate packets.
- T3: Identify one candidate suitable for a read-only Block Contract conversion.
- T4: Continue to the next bounded cluster after checkpoint-001.
VERIFY:
- V1: Every accepted/held/rejected candidate has a source path/URL and reason.
- V2: status.json is valid JSON and points to the latest checkpoint.
- V3: Parent can reproduce the counts from local files without reading the pane.
OPEN:
- O1: Which candidate can pass the smallest real admission gate with the least adaptation?

RETURN CONTRACT:
- R1: Write checkpoint files under research/actionmodel-long-run/outputs/corpus/ before any ping.
- R2: Update CURRENT.md, queue.md, and status.json before reporting.
- R3: On DONE, BLOCKED, or milestone, re-resolve the root mailbox of workspace ACTION-MODEL-LONG-RUN using the live Herdr map and ping it with a <=6-line message beginning `[from: AM-CORPUS]`.
- R4: Verify Enter submission; then remain on the lane unless explicitly stopped.

Start now. The durable files are the deliverable; do not stop at a pane-only answer.
