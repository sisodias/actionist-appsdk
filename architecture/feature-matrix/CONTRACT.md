# Lovable feature-to-repo matrix — worker contract

Goal: itemize every Lovable feature, then determine which OSS repo does each one best,
then reason the architecture. Client: Action Model (Cena / actionmodel.com).

## Ground truth (do not re-derive)
- Taxonomy: 144 keys / 18 domains, in
  `../../research/actionmodel-builder-research-2026-08-26/phase-7/lanes/03-competitor-features/outputs/feature-dictionary.jsonl`
  (record_type=feature_key). Reuse these keys verbatim. The stated-68 vs enumerated-144
  conflict is UNRESOLVED — use 144, never cite a 68 denominator.
- Repo pool: `repo-pool.jsonl`, 500 repos, 302 declared_permissive.
- Prior Lovable teardown: `../../research/lovable-teardown-2026-08-26.md`
- Prior recon: `../../research/github-recon-2026-08-26.md`
- Architecture intel: `../../research/builder-architecture-intel-2026-08-25.md`
- Scoped-clone thesis: platform owns DB + design system + deploy target, so generality
  problems are deleted. See teardown two-column verdict.

## Hard rules
1. EVIDENCE OR UNKNOWN. Every claim carries a source URL or a repo path+file. If you
   cannot source it, status is `unknown`. Do NOT infer capability from a README badge.
   The prior Phase-7 pass failed by marking 192/192 rows unknown from docs-only reading;
   do better by actually opening repo source, but never fabricate to avoid unknown.
2. LICENSE GATE. Mark every recommendation with spdx + one of:
   LIFT (permissive, can copy code) / STUDY (no license or copyleft, architecture only)
   / AVOID. `no_declared_license` = default copyright = STUDY, never LIFT.
3. Distinguish DIRECT (observed) from INFERRED. Label inference inline.
4. No implementation. No cloning repos. Research + written artifacts only.
5. DATE MUTABLE RECEIPTS. A receipt for a mutable source (issue state, star count,
   licence field, last-push date) records its observation date and is cited as
   "observed on DATE", never as a standing fact. Adopted 2026-08-27 from the Opus
   contract audit after two independent aging-receipt findings (vibesdk #313 closed
   after citation; census premise retracted 2 minutes after inheritance).

---

## Opus audit 2026-08-27

Audited the contract's own evidence rules against how downstream documents actually
applied them. **The rules held; no rule needed changing.** Three observations worth
recording, because each one caught something real.

**Rule 1 (evidence or unknown) worked.** Both audited documents carry live command
receipts, and re-running them reproduced the stated results — the `ARCHITECTURE.md` §2
language sample re-ran to the identical 45 rows and identical counts (TypeScript 12,
Rust 3). Where evidence was absent the documents said UNVERIFIED rather than guessing,
and in the one case the audit could discharge that hedge (B7's Postgres `ALTER TABLE`
behavior), the resolved fact favoured the existing argument. A pass that had bluffed
there would have been caught.

**Rule 2 (license gate) worked, and its "never trust a badge" clause earned its keep.**
`GAP-DEEP-DIVE.md` found five repos whose GitHub licence field misrepresents the actual
terms, resolved only by reading LICENSE bodies. Re-verified independently in this audit:
`gh api repos/Infisical/infisical` returns `NOASSERTION` while the body is MIT-core with a
proprietary `ee/`, and `gh api repos/daytonaio/daytona` returns `NONE` on a repo carrying
71,868 stars. Star-ranking or badge-reading would have mis-gated both.

**Rule 3 (DIRECT vs INFERRED) is where the residual risk sits.** The labels were applied
honestly, but two audit findings show the failure mode is not mislabelling — it is a
correctly-labelled INFERRED claim that reads as settled because its DIRECT neighbours are
well-sourced. Two examples from this pass:

- `GAPS-AND-DIFFERENTIATION.md` B7 step 2 ("maintain old versions during a deprecation
  window") was sound reasoning, but the prior art it resembles (pgroll, Reshape) holds only
  two versions live at once. The step was not wrong; it was *further from solved* than its
  surroundings implied.
- An `ARCHITECTURE.md` receipt (vibesdk #313) pointed exactly where claimed but is now a
  **closed** issue, which the citing text did not say. A receipt can be accurate about
  existence and stale about status.

**Suggested addition for future passes, not a change to the rules above:** a DIRECT receipt
for a *mutable* source (issue state, star count, licence field, last-push date) should
record the observation date alongside the value, and cite it as "observed on DATE" rather
than as a standing fact. Both documents already date their research; the receipts inside
them do not consistently inherit that date. Everything else in this contract survived the
audit intact.
