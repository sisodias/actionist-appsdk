AGENT_PACKET v1
TO: AM-PLATFORMS
FROM: ACTIONMODEL-ORCHESTRATOR
THREAD: actionmodel-long-run-2026-08-26
OBJ: Run the persistent platform landscape lane and produce the first evidence checkpoint.
STATE: new
MODE: gpt-5.6-luna; persistent lane; local-first evidence; no runtime code edits
ANCHORS:
- A1: research/actionmodel-long-run/README.md
- A2: research/actionmodel-long-run/lanes/platforms.md
- A3: research/actionmodel-long-run/run.json
- A4: research/actionist-solutions-sweep-spec-2026-08-26.md
- A5: research/builder-architecture-intel-2026-08-25.md
- A6: research/market-convergence-intel-2026-08-26.md
FACTS:
- F1: This is a durable local campaign, not a one-shot report.
- F2: Existing local platform coverage is substantive but has named gaps.
- F3: Claims must be separated into catalogue, documented, authenticated/live, implemented, or unverified.
DECISIONS:
- D1: Own only research/actionmodel-long-run/outputs/platforms/.
- D2: Work through bounded dossiers; continue to the next queue after each checkpoint.
- D3: Full reports live on disk; the callback is only a short doorbell.
CONSTRAINTS:
- C1: Do not edit runtime application code, shared schemas, or another lane's files.
- C2: Preserve unrelated user/agent changes.
- C3: Use local research first; use network research only to close named gaps.
- C4: Never claim a platform capability without a source, date, and confidence.
TODO:
- T1: Read the lane brief and create CURRENT.md, queue.md, and status.json.
- T2: Produce checkpoint-001 covering the first priority dossier(s): Manus, Airtable Omni, Zapier Interfaces, Base44, or Onlook.
- T3: Reconcile each dossier against the comparison matrix in the lane brief.
- T4: Continue working after checkpoint-001; mine local evidence for the next gap when the queue is exhausted.
VERIFY:
- V1: Every checkpoint has source URLs/paths, dates, confidence, and rejected/held claims.
- V2: CURRENT.md names the next queue item and the latest checkpoint path.
- V3: status.json is valid JSON and reports the latest checkpoint.
- V4: Parent can verify all paths without reading the pane transcript.
OPEN:
- O1: Which platform capabilities are genuinely differentiated after first-party evidence review?

RETURN CONTRACT:
- R1: Write the full report to research/actionmodel-long-run/outputs/platforms/checkpoint-001.md (and later numbered checkpoints) BEFORE any ping.
- R2: Update CURRENT.md, queue.md, and status.json before reporting.
- R3: On DONE, BLOCKED, or a meaningful milestone, ping the root mailbox of workspace ACTION-MODEL-LONG-RUN. Re-resolve it fresh with the Herdr live map; do not reuse a pane id. The mailbox is a plain root pane, not another worker.
- R4: Callback message must be <=6 lines and begin `[from: AM-PLATFORMS]`; include checkpoint path, headline, blocker count, and next queue item.
- R5: After pinging, verify the text submitted; if Enter was swallowed, press Enter only. Then remain on the lane unless explicitly stopped.

Start now. Do not stop after writing a prose answer in the pane; the file-first checkpoint is the deliverable.
