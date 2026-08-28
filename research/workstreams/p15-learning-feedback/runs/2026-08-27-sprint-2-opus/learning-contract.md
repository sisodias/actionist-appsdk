# P15 Sprint 2 — Production evidence loop contract

Part: P15 · Lane: S2-L5 · Run: `2026-08-27-sprint-2-opus`
Owner: `ACTIONIST-S2-L5-RUNTIME-LEARNING` (Opus 5[1m])
Status: research only · DESIGN_ONLY · UNEXECUTED · NOT_ADMITTED · admitted_blocks 0

Sprint 1 established the regime (sparse, expensive, privacy-partitioned; zero observations today) and
the governing divergence (min-gating, never a weighted average). Sprint 2 specifies the loop that
promotes, demotes and retires modules — and the rules that stop it from averaging away fatal unknowns.

---

## 1. The starting position has not changed

**Zero accepted plans. Zero recorded client edits. Zero incidents. Zero maintenance outcomes. Zero
admitted blocks.** A37 remains a hypothesis. This system must be **correct on its first observation
and still correct at ten** — it is not a system to be tuned into correctness later.

Cold start is not an edge case here. It is the only case that currently exists.

## 2. Inherited invariants

| ID | Invariant | Source |
|---|---|---|
| I-P15-1 | The sparse/expensive/partitioned regime disqualifies most prior-art machinery; estimators must be honest at n=10 | Regime table |
| I-P15-2 | Ranking is **min-gated on the weakest evidence family**, never a weighted average | Universal Block Framework anti-averaging rule |
| I-P15-3 | Catalogue size is not supply | OpenConnector: 1,445 providers, 15,156 actions, unsafe tenancy model |
| I-P15-4 | Exploration is permitted over **quality**, never over **safety** | Client-delivery safety envelope |
| C6 (P15) | Unknown stays unknown; **absence is not a negative signal** | Evidence discipline |

## 3. New invariants this lane adds

**I-P15-5 — A signal may only be attributed at or below the capability's declared
`attribution_class`.** This is the binding edge to P14. A capability admitted at `endpoint` class
cannot be demoted for an internal quality defect, because the system cannot see its internals. X-P15-3
recorded that P15's most valuable signal is blocked on a P14 deliverable; Sprint 2 makes the dependency
explicit and enforceable rather than aspirational.

**I-P15-6 — Every observation carries a `signal_class`, and only `quality` signals rank capabilities.**
This is the correction Trace D forces. A capability whose third-party OAuth grant was revoked shows a
high failure rate that is correctly attributed and tells you nothing about its quality. Classes:

| `signal_class` | Example | Ranks capability? | Routes to |
|---|---|---|---|
| `quality` | Defect in the capability's own behavior | **Yes** | Capability score |
| `environmental` | Revoked credential, third-party outage, quota | No | Operational log |
| `contract_defect` | `UNDERDETERMINED`, inconclusive health assertion | No | **Contract backlog** |
| `binding_defect` | Workflow fails though every capability qualifies | No | Composer/contract backlog (S2-L1/L4) |
| `correlated` | Co-rolled-back host-linked packages | **Shared cause only** | One event, one cause id |

Misfiling `environmental` as `quality` is not a rounding error in this regime. With tens of
observations, a handful of misfiled incidents can invert a ranking.

**I-P15-7 — Correlated outcomes count once.** Trace B: rolling back the host artifact rolls back every
`package-in-host` capability with it. Counting four demotion events for one cause punishes three
innocent capabilities. Observations sharing a `cause_id` collapse to one event.

**I-P15-8 — Retirement requires a positive reason, never accumulated silence.** A capability with no
observations is `unproven`, not `bad` (C6). Retirement is triggered by a zero-tolerance breach, a
sustained quality signal at sufficient attribution class, or an explicit operator decision — never by
a decayed score drifting toward zero for want of use. Otherwise the shelf silently retires everything
that was never tried, which is most of it.

## 4. Evidence families and the min-gate

Ranking is over families, and the capability's tier is the **minimum** across them. A single T1 family
pins the capability at T1 regardless of how strong the others are.

| Family | Primary source | Notes |
|---|---|---|
| Rights/licence | Source register | **Zero-tolerance**; unresolved rights is a floor, not a discount |
| Tenancy/isolation | P14 qualification | `cross_tenant_leakage` observed → `NO_SHIP`, never tiered |
| Security posture | Qualification | Zero-tolerance classes never averaged (C4) |
| Adaptation cost | Build instrumentation | **Primary ranking signal** — replaces stars (attacks A22) |
| Workflow defects | P14 acceptance suite | Post-release, composition level |
| Incidents | P14 attribution | Gated by `attribution_class` (I-P15-5) |
| Upgrade burden | Maintenance outcomes | Long-latency (days–months) |
| Fit / edit volume | P13 operation log | Heavy editing means poor default fit |
| Instrumentability | P14 admission | Determines the ceiling on every other signal |

**Why min-gating and not a weighted score.** A weighted average is *designed* to let strength in one
dimension compensate for weakness in another. For ranking films that is correct. For ranking a
capability about to be embedded in a client's production system it is catastrophic: an asset with
excellent adaptation cost, excellent workflow success and **unresolved rights** must not outrank a
merely-good asset with clean rights. Averaging makes exactly that mistake, and it makes it silently.

**The degeneracy risk is real and recorded.** AP15-7: if every asset has one weak family, everything
pins to the same tier and the ranking is uninformative. E-P15-1 (retrospective ranking over the
existing corpus) tests this **before any live use**. If the ranking is degenerate, the ranking's job
changes from ordering assets to **naming the missing evidence** — which at this stage is arguably the
more useful output anyway, since it produces a work list rather than a leaderboard.

## 5. Promote / demote / retire

State machine per capability. Transitions are deterministic given the evidence; the *admission* of a
capability to a client build remains a human decision (C3: models cannot author ranking changes; the
deterministic pipeline owns writes).

```
unproven ──(qualification pass + first successful release)──> provisional
provisional ──(N independent quality observations, min-gate tier >= threshold)──> proven
proven ──(sustained quality degradation at sufficient attribution_class)──> provisional
any ──(zero-tolerance breach: rights, tenancy, security)──> retired      [immediate, no averaging]
any ──(explicit operator decision)──> retired
unproven ──(no observations)──> unproven                                  [NEVER auto-retire]
```

Rules:

- **R-1.** Zero-tolerance breach retires immediately and is never averaged against positive evidence.
- **R-2.** Demotion requires the observation's `signal_class = quality` **and** the capability's
  `attribution_class` fine enough to support the claim (I-P15-5).
- **R-3.** `deploy`-class capabilities can never be demoted on incident evidence — the attribution
  cannot name them. They may still be retired by R-1 or operator decision.
- **R-4.** Revocation propagates to every composing assembly (C7 inherited). A retired capability marks
  every `ReleaseManifest` containing it for review.
- **R-5.** `provisional → proven` requires **independent** observations: distinct `cause_id`, distinct
  client where consent permits. Ten observations of one correlated event are one observation.

## 6. Estimator selection under n=10

Surviving I-P15-1: Bayesian and preference-learning methods — Bradley-Terry/Luce, Thompson sampling
over posteriors, hierarchical priors. Failing it: frequentist A/B testing on tens of builds.

The requirement is not "best accuracy at scale" but **honesty at n=10**: the estimator must express
that it does not yet know. A posterior with wide credible intervals correctly says "unproven"; a point
estimate from three observations says "0.67" and invites a decision it cannot support.

**Cold-start priors** come from industry/archetype (AP15-3, untested), and their transfer is itself a
hypothesis (E-P15-3 tests archetype priors against uniform). Until that runs, priors should be weak
enough that a handful of real observations dominate them.

## 7. Exploration inside the safety envelope

Pure exploitation makes the shelf a ratchet: the first-ranked asset stays ranked because nothing else
is tried, and the ranking becomes a record of what was chosen rather than a measurement of what is
good.

But exploration here means trying a less-proven capability **on a paying client's project**. Permitted
only when: the candidate passes **every** zero-tolerance gate (rights, tenancy, security); never on
regulated workloads (health, finance, legal, HR); a bounded fraction of builds declared in advance; and
the human admission decision is retained.

**Exploration is over quality uncertainty, never over safety uncertainty** (I-P15-4). That distinction
is the entire reason having an exploration budget at all is defensible.

## 8. Free signals, and the two that are misread

Designed properly, P13 and P14 already emit P15's inputs — no separate telemetry programme is needed
for the primary signals. Two deserve their Sprint 1 emphasis restated because they are routinely
misfiled:

**`UNDERDETERMINED` aggregates are contract defects, not model failures.** Each one names a field the
Block Contract is missing. Aggregating them redirects effort from burning model budget to fixing the
contract layer, where the defect actually is. Under I-P15-6 they are `contract_defect` class and never
touch capability rank.

**Falsified beliefs are a first-class output.** Nothing in the external census records which *belief* an
outcome falsified — every surveyed system reranks items instead. This converts the assumption ledger
from a static document into a maintained artifact, and it is a genuinely local idea rather than an
import.

## 9. The commercial risk that gates the premise

**Cross-client aggregation may be contractually unavailable (X-P15-2).** If contracts forbid it, P15
degrades to per-tenant learning, where tens of observations become ones and the sparse-data problem
becomes far worse. This is **unknown**, not merely unmeasured.

E-P15-5 resolves it: establish with the client owner whether anonymised cross-client aggregation is
contractually available. **It is a conversation, not code**, it gates the entire cross-client premise,
and it is the cheapest high-value experiment in the part. Regulated industries are excluded from
aggregation by default regardless of the answer.

Related market signal, verified in Sprint 1: Azure AI Personalizer — the one major cloud vendor's
general-purpose learning-loop service — was closed to new resources on 20 September 2023 and retired
**25 August 2026**, with Microsoft directing users to the open-source `microsoft/learning-loop`
repository rather than a successor. The implication is not that the technique is unsound but that this
capability must be **owned, not bought**.

## 10. What this contract refuses to claim

- **No learning loop exists.** Nothing has been ranked or reranked. `admitted_blocks = 0`.
- A37 (production learning improves reuse decisions) remains a hypothesis and is not upgraded here.
- Min-gating is **not** demonstrated to be informative (AP15-7 open; E-P15-1 unrun). It could be
  degenerate.
- No claim that clients will permit cross-client aggregation (AP15-5 unknown).
- No claim about the 1.3M/850k corpus; its path remains unknown (A20/A21).
- The state machine in §5 is a design contract with zero transitions ever executed.
