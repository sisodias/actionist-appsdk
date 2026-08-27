# P9-L01 Pair-completion forensics

Observed 2026-08-27. This is a research-only denominator reconstruction.

## Result

The authoritative target is **1,700 positions**: **270 complete**, **1,430 deficit**, **0 partial target rows**, and **0 duplicates**. The deficit is explicit: those positions have no repository identity and are not padded.

A complete pair means the Phase 7 corpus-selection ledger marks the exact industry/target position `selected_for_evidence_only` with all ten closure dimensions. Its ten dimension states are recorded here as inherited queue evidence, never as direct evidence. Deficit positions have ten unknown states and no source identity.

## Why 1,700-row waves did not move 270

Each Phase 7 dimension wave contains 1,700 **dimension records**, not 1,700 pairs: the deterministic shape is 170 distinct pairs × 10 dimensions. Across waves 2–10, each wave overlaps the authoritative target identity set by 0; its rows carry an explicit no-closure-effect marker or inherited/blocked state. Thus later rows add observations outside the selected 270 and cannot promote the master counter.

## Counters

See `lane-state.json` for machine-derived counters, input/output hashes, wave parity, and boundary state. `gap-reason-register.jsonl` has one reason row for every deficit.

## Next gate

Only a repository-specific, public read-only all-ten-dimension closure receipt, followed by separate rights/evaluation/runtime review, can fill a deficit. No inherited metadata, generic evidence, repeated URL, or absent identity is sufficient.
