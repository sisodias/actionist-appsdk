# S1-L4 checkpoint 4 — first-principles synthesis and verification

Agent: ACTIONIST-S1-L4-HOST · 2026-08-27 · Opus 5 (1M) at consolidation

## Structural smoke — PASS

Re-derived from the written files immediately before reporting, not from agent claims:

```
P09: 8/8 files  commercial=35(top10=10)  oss=41(top10=10)  innov=27(top10=10)
P10: 8/8 files  commercial=33(top10=10)  oss=35(top10=10)  innov=24(top10=10)
P11: 8/8 files  commercial=32(top10=10)  oss=45(top10=10)  innov=21(top10=10)
LANE TOTALS: commercial=100 oss=121 combined=221 innovation=72 sources=27
FAIL COUNT: 0   VERDICT: PASS
```

Checks run: every JSONL line parsed; required fields (`id`, `evidence_class`,
`observed`) asserted on every row; duplicate and mis-prefixed IDs checked; top10 counts
re-derived from `disposition` rather than trusted; all `decision-ledger.json` and
`lane-state.json` files parsed after hand edits.

**The smoke caught one real defect.** The P11 innovation register had 11 top10 rows
because I assigned rank 2 twice while ranking. Fixed by demoting per-tenant-per-connector
rate limiting to rank 11 with the demotion reason recorded in the row rather than
silently deleted. This is the smoke doing its job on my own output, not on a subagent's.

## Independent challenge of this lane's headline claims

Each headline claim was attacked before being reported. Results recorded in each part's
`lane-state.json` under `headline_claims_challenged`.

**P09 — "Postgres is the right default for new owned transactional state."** Challenge:
if a workload-shape-first taxonomy just re-derives Postgres for 80% of classes, the
abstraction is pure overhead. Not argued away — recorded as the explicit falsifier for
INV-P09-2, to be settled by Loop 2.

**P09 — "Tenant isolation must be bespoke."** Challenge: real absence or failed search?
Three targeted searches returned sub-5-star templates; the only maintained frameworks
with genuine adoption are language-locked (Laravel 4.4k stars, Django 822). Recorded as
a finding with its search method stated, so a future run can falsify it cheaply.

**P10 — "No commercial precedent for third-party settings in host chrome."** Challenge:
artefact of surface selection? Recorded explicitly as absence of evidence after a
deliberate 33-surface sweep, never as proof of impossibility. The consequence claimed is
a reclassification of A34, not a claim that the thing cannot be built.

**P10 — "The navigation registry is near-greenfield."** This one nearly shipped wrong.
The first-pass agent flagged Luigi as possibly closing the gap and said so rather than
asserting greenfield. The backfill read Luigi's navigation docs directly: it supplies a
genuine declarative node contract (~45 parameters, `children` typed array-or-function
returning a Promise for async resolution, `visibleForFeatureToggles`, `userSettingsGroup`)
but has **no contribution model** — nodes are authored in the host's single JS config.
Backstage supplies contribution and route-ref indirection but outputs opaque React
elements and welds discovery to its own CLI and webpack. Gap confirmed real, and now
better understood: two proven halves, neither shipped whole.

**P11 — "Idempotency has no production OSS supply."** Corroborated from two independent
populations: the OSS search found a field of single-author repos (top result 14 stars),
and the commercial survey independently found no embedded-iPaaS or agent-action vendor
documenting a write idempotency-key contract. Different populations, same gap.

**P11 — "Adopt OpenConnector's catalogue and OAuth engine, never its store."** Unfit by
demonstration, not inference: the 27 Aug spike created two tenant connections and
retrieved both under one admin token, and the schema read confirmed no tenant column,
service-only OAuth config keying and a hardcoded salt.

**P11 — "Stripe is the contract to copy."** Challenge: importing a payments contract into
a general action runtime may import assumptions that do not hold. The critical caveat was
surfaced rather than smoothed — rate limiters run *before* Stripe's idempotency layer, so
a 429 can produce a different result under the same key. That became a new invariant
(INV-P11-11) about where Actionist's own layer must sit.

## Self-correction recorded

My draft INV-P11-5 asserted "non-2xx is not cached". Stripe's own documentation says the
opposite: it saves the status and body of the first request regardless of success or
failure and returns cached 500s on replay. The claim came from a secondary summary in the
hono-idempotency README and did not survive reading the primary source. The invariant is
amended with the correction left visible, and the caching choice is now flagged as a
deliberate Actionist decision rather than an inherited default.

This is the CLAUDE.md evidence standard producing a catch on my own reasoning, which is
the point of it.

## Denominator honesty

Commercial 100 and OSS 121 are the achieved counts, not the targets restated. Two packets
stopped short mid-run under hard usage limits, named their unfetched surfaces, and were
closed by targeted Opus backfills rather than by invention:

- P10 OSS: 31 rows with the four unfetched repos named; backfill fetched exactly those
  four (all licence bodies read), resolved three doc questions, trimmed top10 12 → 10.
- P11 commercial: 18 rows with 14 unreached surfaces named; backfill prioritised the
  single most load-bearing omission (Stripe) first, reached 32, trimmed top10 12 → 10.

P09's combined 76 is below 100 because the domain-appropriate population of *bindable*
storage/state products is smaller once marketing-only and non-embeddable entries are
excluded. Two named surfaces could not be verified at all and are recorded rejected /
unverified rather than counted.

## Model and boundary compliance

Every subagent — six surveys plus two backfills — ran on Opus per the project override.
Zero violations. The orchestrator moved Fable 5[1m] → Opus 5 (1M) mid-run by operator
direction; all prior reasoning, checkpoints and completed outputs were carried forward,
none discarded. Nothing cloned, executed, benchmarked, deployed or admitted. No
client-private data, no authenticated vendor access, no signups. No files written outside
the three owned run directories and the S1-L4 lane directory.

## Post-write re-verification (after lane-state, cp4 and lane-synthesis were written)

The smoke was re-run against final on-disk state with checks the first pass did not
include: non-empty assertions on all 24 packet files, lane-state schema-key validation,
boundary-flag assertions, subagent-policy compliance, checkpoint count, and existence of
all five S1-L4 lane files.

```
P09: 8/8 files non-empty | commercial=35(top10=10) oss=41(top10=10) innov=27(top10=10)
P10: 8/8 files non-empty | commercial=33(top10=10) oss=35(top10=10) innov=24(top10=10)
P11: 8/8 files non-empty | commercial=32(top10=10) oss=45(top10=10) innov=21(top10=10)
LANE TOTALS: commercial=100 oss=121 combined=221 innovation=72 sources=27
FAIL COUNT: 0   VERDICT: PASS
```

### Write-boundary verification, and a proxy that lied

`files_written_outside_owned_paths: 0` is an assertion in three lane-state files, so it
was tested rather than trusted. An mtime scan of `clients/actionmodel/` returned 206 files
touched in the window, 171 of them outside my owned paths, and reported **FAIL**.

That verdict was wrong, and taking it at face value would have produced a false boundary
violation in this report. Five Sprint-1 lanes run concurrently in one workspace, so mtime
cannot attribute authorship — it is a signal to investigate, never a verdict. Classifying
by path ownership and content instead:

| Bucket | Files | Owner |
|---|---|---|
| MINE | 35 | S1-L4, all inside the four owned paths |
| PEER S1-L1 | 29 | p01, p02, lanes/S1-L1 |
| PEER S1-L2 | 22 | p03, lanes/S1-L2 |
| PEER S1-L3 | 34 | p05, p06, p08, lanes/S1-L3 |
| PEER S1-L5 | 33 | p13, p14, p15, lanes/S1-L5 |
| SHARED | 43 | coordinator-regenerated system-map, sprint scaffolding, dispatch files |
| TOOL ARTIFACT | 14 | .wrangler, .playwright-cli, .claude from other sessions |

That distribution is exactly the disjoint ownership the program assigns, matching the four
peer sessions observed running concurrently. **Cross-contamination check: NONE.** No part
ID of mine (P09/P10/P11) appears under any peer path, and no peer part ID appears under
mine. Of the shared files, I opened `SPRINT-1-PROGRAM.md`, `sprint-state.json`,
`parts.json` and the S1-L4 dispatch read-only and wrote none of them.

Git could not adjudicate this either: the entire `clients/actionmodel/` tree is untracked
(`??`), so there is no diff to attribute. The content-and-ownership classification is the
decisive evidence.

**Boundary verdict: PASS.** The lane-state claim is accurate.

## Status

All four checkpoints complete. Twenty-four packet files plus five lane files written and
validated twice, the second time against final on-disk state. CENA callback delivered to
ACTIONIST-S1-L5-RUNTIME. Sprint 1 remains unpromoted pending coordinator verification.
