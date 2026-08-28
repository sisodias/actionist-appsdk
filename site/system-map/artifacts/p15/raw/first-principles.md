# P15 — Continuous corpus and production learning: first-principles synthesis

Part: P15 · Lane: S1-L5 · Run: 2026-08-27-sprint-1-fable
Author: ACTIONIST-S1-L5-RUNTIME (Opus 5[1m]; wave-1 census under Fable 5[1m])
Status: research only · DESIGN_ONLY · UNEXECUTED · NOT_ADMITTED · admitted_blocks 0

---

## 1. The objective, and the honest starting position

P15's thesis is that every new component, repository, conversion and production outcome should
improve the shelf, taxonomy, recipes and future recommendations.

The honest starting position must be stated first, because it determines the entire design:

**There is currently no production learning data of any kind.** Zero accepted plans, zero recorded
client edits, zero incidents, zero maintenance outcomes, zero admitted blocks. The local AutoSaaS
loop is procedural, not measured — its own maturity section records no machine-readable template
registry, no SaaS built by the method, no automated freshness check, no command runner. Ledger entry
A37 ("production learning will improve retrieval and reuse decisions") is a **hypothesis**.

Therefore P15 is not a system to be tuned. It is a system that must **work correctly on its first
observation and remain correct at ten**. Cold start is not an edge case; it is the only case that
currently exists. Any mechanism requiring thousands of observations per arm is disqualified
regardless of how well it performs elsewhere.

## 2. The regime, stated as a constraint

| Property | Typical recommender/bandit assumption | Actionist reality |
|---|---|---|
| Observations per arm | 10³–10⁶ | 10⁰–10¹ |
| Feedback latency | seconds to hours | days to months (maintenance outcomes) |
| Feedback cost | free (a click) | expensive (a build, a client, an incident) |
| Arms | thousands, cheap to try | dozens, each with real adaptation cost |
| Wrong choice cost | one bad recommendation | a client project |
| Data sharing | one operator's own users | **separate clients, contractually private** |

**Invariant I-P15-1: the sparse, expensive, privacy-partitioned regime disqualifies most of the
external prior art's machinery, and the design must select for estimators that are honest at n=10.**
Bayesian and preference-learning methods (Bradley-Terry/Luce, Thompson sampling over posteriors,
hierarchical priors) survive this test. Frequentist A/B testing on tens of builds does not.

## 3. The invariant imported from the local estate

The Universal Block Framework's evidence ladder carries an anti-averaging rule: `evidence_tier` may
never exceed the minimum tier across the nine families — "A single T1 family pins the whole block at
T1 regardless of eight T4s."

This directly contradicts how recommender systems work. Recommenders compute weighted scores, and a
weighted score is designed to let strength in one dimension compensate for weakness in another. For
ranking films that is correct. For ranking a capability that will be embedded in a client's
production system, it is catastrophic: an asset with excellent adaptation cost, excellent workflow
success and **unresolved rights** must not outrank a merely-good asset with clean rights. Averaging
makes exactly that mistake.

**Invariant I-P15-2: asset ranking is min-gated on the weakest evidence family, never a weighted
average.** This is the clearest place where first-principles reasoning from the local estate diverges
from the entire external census, and it should be treated as a deliberate design divergence rather
than an oversight.

## 4. What the shelf actually contains today

Ranking presupposes something to rank. Current state:

- 8,515 joined UI identities, of which **3,506 are source-bearing**; much of the newer 7,949-entry
  harvest is bundle/metadata oriented.
- 500-candidate GitHub corpus; **270 of 1,700** industry-repository pairs complete at the measured
  baseline (1,430 deficit).
- OpenConnector generated 1,445 provider definitions and 15,156 actions locally, but its global
  connection storage failed the tenancy model.
- The remembered ~1.3M-repository index and the 850k/80k Mini corpus have **no authoritative path**
  in current receipts (A20/A21 unknown).
- **Zero admitted blocks.**

**Invariant I-P15-3: catalogue size is not supply.** The OpenConnector case is the cleanest
demonstration: 1,445 providers and 15,156 actions, and the storage model made the whole thing unsafe
to inherit as-is. A ranking signal derived from catalogue breadth would have ranked it top.

Consequence for refresh design: P15 must be designed against an unknown-size, unknown-location corpus
and must not assume the large feed exists.

## 5. Constraints

| # | Constraint | Source |
|---|---|---|
| C1 | Cross-client aggregation requires explicit contractual permission | G7 client/legal gate |
| C2 | Learn from structural facts only — never client content, schema names or copy | Evidence + privacy discipline |
| C3 | Models cannot author ranking changes; the deterministic pipeline owns writes | Authority invariant |
| C4 | Zero-tolerance events are never averaged into a score | Zero-tolerance classes |
| C5 | Every signal carries source, date and evidence class | Evidence discipline |
| C6 | Unknown stays unknown; absence is not a negative signal | Ledger vocabulary |
| C7 | Revocation propagates to every composing assembly | Framework invariant 6 |
| C8 | Regulated industries excluded from cross-client aggregation by default | Contract-pressure column |

## 6. The signal inventory — and where it comes from for free

The most efficient finding of this lane is that P13 and P14, designed properly, *already emit*
P15's inputs. No separate telemetry programme is needed for the primary signals.

| Signal | Emitted by | Feeds |
|---|---|---|
| Accepted AssemblyPlan | P13 approval / composition lifecycle | Positive fit evidence |
| Edit volume and verb mix per capability | P13 operation log | Fit signal — heavy editing means poor default fit |
| Rejected offers | P13 offer log | Counterfactual, prevents selection bias |
| Refusals (out-of-algebra requests) | P13 ABSTAIN log | Demand/roadmap signal |
| Escape-hatch/fork rate | P13 state transitions | Bounded-editing health |
| Adaptation hours by category | Build instrumentation | **Primary ranking signal** (replaces stars) |
| Glue size per binding | Solver `predicted_glue_loc` vs actual | Integration cost |
| Workflow defects post-release | P14 acceptance suite | Quality |
| Incidents attributed per capability | P14 attribution (needs stable capability ID) | Demotion |
| Maintenance and upgrade-break events | P14 upgrade path | Burden + upgrade-safety evidence |
| UNDERDETERMINED results | Compatibility solver | **Contract defects, not model failures** |
| Falsified assumptions | Every build | Assumption-ledger maintenance |

Two of these deserve emphasis.

**UNDERDETERMINED aggregates are contract defects.** The composition architecture already names this
as "the single most valuable output" for the contract lane: each such result names a field the Block
Contract is missing. Aggregating them redirects effort from burning model budget to fixing the
contract layer, which is where the defect actually is.

**Falsified beliefs are a first-class output.** AutoSaaS §8 lists "failed assumptions" among the
things each run must update. No system in the external census records which *belief* an outcome
falsified — they all rerank items. This is a genuinely local idea and a candidate differentiator: it
converts the assumption ledger from a static document into a maintained artifact.

## 7. Exploration in a client-delivery business

Pure exploitation freezes the shelf: the first-ranked asset stays ranked because nothing else is ever
tried, and the ranking becomes a ratchet rather than a measurement. Some exploration is structurally
necessary.

But exploration in this business means trying a less-proven capability **on a paying client's
project**. That is only acceptable inside a safety envelope:

- exploration candidates must pass every zero-tolerance gate (rights, tenancy, security) — exploration
  is over *quality* uncertainty, never over *safety* uncertainty;
- never on regulated workloads (health, finance, legal, HR);
- bounded fraction of builds, declared in advance;
- always with the human admission decision retained.

**Invariant I-P15-4: exploration is permitted over quality, never over safety.** This is what makes
having any exploration budget at all defensible.

## 8. Assumptions

| ID | Assumption | State | Falsifier |
|---|---|---|---|
| AP15-1 | Production outcomes predict future reuse quality better than metadata | hypothesis | Outcome-ranked shelf performs no better than metadata-ranked over N builds |
| AP15-2 | Tens of observations suffice for useful ranking | hypothesis | Posterior remains too diffuse to separate candidates after N builds |
| AP15-3 | Industry/archetype priors transfer to new clients | hypothesis | Cold-start priors perform no better than uniform |
| AP15-4 | Structural facts suffice; content is never needed | hypothesis | Useful signal proves inseparable from client content |
| AP15-5 | Clients will permit anonymised cross-client aggregation | **unknown** | Contracts routinely forbid it, collapsing the cross-client premise |
| AP15-6 | Adaptation cost is measurable consistently | hypothesis | Hours-by-category proves unrecordable in practice |
| AP15-7 | Min-gating produces usable rankings, not universal floors | hypothesis | Every asset pins to the same low tier, making the ranking uninformative |

AP15-7 deserves attention: min-gating is correct but could be degenerate if every asset has one weak
family. If so, the ranking's job changes from ordering assets to *naming the missing evidence*, which
is arguably more useful at this stage anyway.

## 9. Contradictions

**X-P15-1 — A flagship contextual-bandit service in this category was retired.** Azure AI Personalizer
appears in the census and its retirement (status flagged for verification in wave-2) is a negative
signal about the durability of buying this capability. The implication is to own the mechanism and
treat vendors as replaceable, not to conclude the technique is unsound.

**X-P15-2 — The cross-client learning premise may be contractually unavailable.** P15's value
proposition assumes learning aggregates across clients. If client contracts forbid it, P15 degrades
to per-tenant learning, where the sparse-data problem becomes far worse (tens of observations become
ones). This is the largest commercial risk in the part and it is **unknown**, not merely unmeasured.

**X-P15-3 — Ranking requires attribution that does not exist yet.** Demotion on incident requires
knowing which capability caused the incident, which requires the stable capability identifier and
instrumentation contract that P14 must impose. P15's most valuable signal is blocked on a P14
deliverable.

**X-P15-4 — Corpus refresh cannot be designed against a corpus with no path.** A20/A21 remain unknown.
Refresh cadence must therefore be specified for the assets actually in hand.

**X-P15-5 — The external census is methodologically the wrong shape.** The strongest documented-
methodology analogues are registry-health scorers (OpenSSF Scorecard, ecosyste.ms, SourceRank,
Renovate merge-confidence), not recommenders — because they score *software assets* on *evidence*
rather than users on preferences. The recommender literature contributes cold-start technique;
the registry-health literature contributes the actual scoring shape.

## 10. Top 10 design hypotheses

Full register: `innovation-register.jsonl` (100 entries, 10 ranked).

1. **Min-gated ranking, never weighted average** — imported from the anti-averaging rule.
2. **Rank by observed adaptation cost, not popularity** — attacks A22 directly.
3. **Sparse-regime estimator selection** — honest at n=10 or disqualified.
4. **Cold-start priors from industry archetype** — because cold start is the only current case.
5. **Falsified-belief records as a first-class output** — local idea, absent externally.
6. **Explicit exploration budget** — without it the shelf is a ratchet.
7. **Exploration only within a safety envelope** — quality uncertainty, never safety.
8. **Client edit volume as a fit signal** — P13's log is P15's richest input at zero extra cost.
9. **UNDERDETERMINED aggregates drive contract evolution** — defects belong to the contract layer.
10. **Cross-client aggregation is opt-in and contractual** — precondition, not feature.

## 11. Falsifiers

| ID | Claim | Falsifier |
|---|---|---|
| F-P15-OUTCOME | Outcome ranking beats metadata ranking | No measurable improvement over N builds |
| F-P15-SPARSE | Tens of observations suffice | Posteriors too diffuse to separate candidates |
| F-P15-PRIOR | Archetype priors transfer | Cold-start priors no better than uniform |
| F-P15-MINGATE | Min-gating is informative | All assets pin to the same tier |
| F-P15-PRIVACY | Structural facts suffice | Useful signal inseparable from client content |
| F-P15-CONSENT | Clients permit aggregation | Contracts routinely forbid it |
| F-P15-ATTRIB | Incidents attribute per capability | Attribution unachievable (inherits F-P14-ATTRIB) |
| F-P15-LOOP | The loop improves builds | Later builds show no reduction in adaptation cost or defects |

## 12. Experiments (designed, not authorized)

- **E-P15-1 — Retrospective ranking.** Rank existing corpus assets by available evidence under
  min-gating; check whether the ranking is degenerate (tests AP15-7) before any live use.
- **E-P15-2 — Adaptation-cost instrumentation.** Record hours by category on the first pilot build;
  produces the first real point of the A07 distribution.
- **E-P15-3 — Prior transfer.** Build archetype priors from the first N builds; test on N+1 against
  uniform.
- **E-P15-4 — Signal sufficiency.** Determine whether structural facts alone separate good from bad
  assets, or whether content is required (tests F-P15-PRIVACY).
- **E-P15-5 — Consent probe.** Establish with the client owner whether anonymised cross-client
  aggregation is contractually available. **This is a conversation, not code, and it gates the
  entire cross-client premise.** Cheapest high-value experiment in the part.
- **E-P15-6 — UNDERDETERMINED harvest.** Run the solver over existing contracts; aggregate missing
  fields into a prioritised contract backlog. Runs today with no model and no execution.

## 13. Decision gates

| Gate | Question | Pass | Fail |
|---|---|---|---|
| GP15-A | Is min-gated ranking informative? | Assets separate into usable tiers | Ranking's job becomes naming missing evidence instead |
| GP15-B | Is cross-client aggregation available? | Contractual permission obtainable | Per-tenant learning only; re-scope P15's value claim |
| GP15-C | Is adaptation cost recordable? | Hours by category captured on a real build | Primary ranking signal unavailable; fall back to defect counts |
| GP15-D | Does attribution work? | Inherits GP14-C | Incident-driven demotion unavailable |

## 14. What this document refuses to claim

- **No learning loop exists.** Zero accepted plans, zero client edits, zero incidents, zero
  maintenance outcomes, zero admitted blocks. Nothing has been ranked or reranked.
- No claim that production learning improves outcomes — A37 is a hypothesis and stays one.
- No claim about the 1.3M/850k corpus; its path remains unknown (A20/A21).
- No claim that clients will permit cross-client aggregation (X-P15-2 open, and it is the part's
  largest commercial risk).
- The commercial denominator was **5 records at wave-1** and is being rebuilt in wave-2; the
  `not_applicable` determination for a pure "learning-loop vendor" category was not made at wave-1
  and is a wave-2 deliverable. The OSS denominator is complete at **97 records**.
