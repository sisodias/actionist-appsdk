# S1-L2 Checkpoint 3 — commercial + OSS + local-estate surveys, and the lane audit of them

Observed: 2026-08-27. Model note: lane continued from Fable 5[1m] onto Opus 5[1m] mid-run at operator direction; all prior checkpoints, files and completed subagent outputs preserved and consumed. All subagents ran `model: opus` throughout, satisfying the Opus-only policy across both parent models.

## Surveys returned

| Lane | File | First-write state |
|---|---|---|
| s1l2_oss_survey | draft-top-repos.jsonl | 176 data records + SUMMARY; 200 repos queried by `gh api`; 49 licence bodies fetched and read; 24 stale identity redirects; 23 capability kinds; all E-class |
| s1l2_commercial_survey | draft-top-companies.jsonl | 100 vendor records + COM-SUMMARY; 25 capability kinds; D=17 / I=83 |
| local_estate | draft-local-estate.md | Corpus interface resolved; user-list count = 0; SISOCRM own-vs-service table; 452 lines |

## Lane audit of subagent output (depth contract item 8 applied early, not deferred to the end)

I did not accept the survey summaries as findings. I re-derived counts from the files with python3 and found three defects worth repairing rather than reporting around:

1. **False scarcity from under-tagging.** `calendar_scheduling` = 1 row and `e_sign` = 1 row. That is a survey gap, not thin supply, and it would have corrupted the commodity/scarce/missing classification — this lane's most decision-relevant output. Repair pass dispatched (target ≥8 verified rows each, or an honest lower number with reasons).
2. **Degenerate reuse-shape signal.** `pattern` on 117/176 rows. 74 of those are strong-copyleft, where `pattern` is correct for rights reasons. But 28 permissive and 15 source-available rows also carried it, and for permissive code — which can legally be taken — the shape should reflect the technical seam. Repair pass re-examines the ~28 permissive rows with `shape_revision_note` on each.
3. **Commercial claims resting on recall.** 83/100 rows are I-class. The three fields that drive build-vs-buy (`embed_mode`, `whitelabel`, `pricing_class`) are precisely the fields that go stale, and a wrong "white-label: yes" or a missed enterprise-tier embedding gate is a real client-facing error. Verification pass dispatched over the decision-relevant subset (~25-30 rows: white-label-claiming candidates plus the kinds where scarcity classification depends on commercial supply).

Credit where due: the commercial agent caught and corrected its own summary (claimed D=22, true D=17) before returning. That is the behaviour the evidence standard is meant to produce.

## Independently re-derived load-bearing claim (A20/A21)

The local-estate agent's headline was that the large repo corpus is not local. I re-ran the probe myself rather than trusting the report:

- `ls -la ~/.claude/skills/foundry-corpus/` → `foundry` (24,791 B, executable), `SKILL.md` present. Interface EXISTS.
- `~/.claude/skills/foundry-corpus/foundry status --json` → `ENGINE UNREACHABLE (mac-mini): ssh: connect to host 192.168.0.100 port 22: Network is unreachable`, **exit 0**.

Two consequences. First, A20 must split three ways: the index exists (confirmed), "local" is refuted (it lives on the Mac mini), "currently queryable" is refuted (unreachable). A21 (850k/80k is the same asset at an earlier dating) is confirmed. Second, the tool exits 0 while printing failure, contradicting SKILL.md's documented exit 4 — any automation built on this must parse `--json`, never the exit status. That is a defect in a shared skill, found here, and worth reporting beyond this lane.

Every corpus size figure (1.3M, 1.36M, 850k/80k) therefore remains a stale claim. No shelf row depends on one (invariant 5).

## User-provided list lane

Count = 0, and that is a finding, not an omission. Checked `client/` in full, `PROJECT.md`, `README.md`, `research/` top level. What exists is one repo URL (the client's own empty Actionist-AppSDK) and three prior-art names. The client's own words — "Probably 10 open source repos for this already. Just dno where" — are a hypothesis, not supply. A real list is client input and must be requested through CENA. The lane is kept distinct and empty, exactly as the dispatch requires, rather than backfilled from our own surveys.

## Next

Repair + verification returns → top-10 selection and dossiers → overlap graph stats → research-report.md, decision-ledger.json, lane-state.json → scripted post-write smoke → adversarial challenge of the headline claims → CENA callback (no sprint-completion claim).
