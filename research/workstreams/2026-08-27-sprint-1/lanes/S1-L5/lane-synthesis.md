# S1-L5 lane synthesis — editor, runtime and learning (P13, P14, P15)

Lane: S1-L5 · Owner: ACTIONIST-S1-L5-RUNTIME · Run: 2026-08-27-sprint-1-fable
Parent model: Opus 5[1m] at report; Fable 5[1m] at wave-1 dispatch. Subagents: Opus only, 0 violations.
Status: research only · DESIGN_ONLY · UNEXECUTED · NOT_ADMITTED · admitted_blocks 0 · **unpromoted**

---

## 1. The one thing this lane found

The three owned parts look like three different problems — an editor, a runtime, a learning loop — and
they are not. They are three views of a single question:

> **What must be recorded, and in what form, for a composed application to remain governable after it
> changes?**

- **P13** asks it of client-initiated change. The answer is: record *intent*, not mutation, because a
  mutation cannot survive the capability moving underneath it.
- **P14** asks it of system-initiated change. The answer is: record the *composition as a set of
  independently-recoverable objects*, because reverting one object does not revert the others.
- **P15** asks it of accumulated change across many clients. The answer is: record *evidence per
  family and gate on the weakest*, because averaging lets one fatal gap disappear.

Each part independently rejected a "single value" representation — a single mutation, a single rollback
boolean, a single quality score — in favour of a structured record with an explicitly weakest element.
That convergence was not designed in; it emerged from three separate evidence bases.

## 2. The strongest evidence produced

**Rollback is not one object — derived twice, independently.** Vendor documentation says Vercel reverts
traffic but not environment variables or configuration, and Fly does not revert `fly.toml`, secrets or
migrations. SISO's own operated donor-fork standard says "Data rollback is separate: restore the
pre-migration database dump", and names a third object no vendor surfaced (a standing alternate UI
route at `/tables-native`). One derivation from documentation, one from practice, same structure.
This is the most reliable finding in the lane.

**Only 4 of 29 observability surfaces attribute a fault across a boundary into someone else's code.**
Eight stop at `service`, seven at `deploy`. Actionist's case — an intact third-party donor inside a
composed app — is precisely the case the market does not serve. The derived **minimum instrumentation
contract** (stable per-capability identifier; per-capability version and environment; propagated trace
context; ownership metadata resolvable from the identifier; machine-readable per-capability health
assertion) is a HostContract requirement, not an observability purchase, and its most important
property is that **the failure is silent**: an uninstrumented capability does not appear as a gap, it
simply does not appear.

**Layer separation is necessary but not sufficient.** Verified directly: Shopify OS 2.0's settings layer
— the industry's canonical upgrade-safety guarantee, and the same guarantee Actionist must make — was
reported wiped by a theme update in March 2026 by two independent merchants, with a Shopify staff member
acknowledging receipt and no visible resolution. The wave-1 framing "acknowledged, unfixed" was
overstated and has been corrected in place.

## 3. Cross-part contracts this lane commits to

| Contract | Producer | Consumer | Content |
|---|---|---|---|
| Operation log | P13 | P15 | Typed edits with intent, actor, capability, accepted/rejected/refused |
| Escape-hatch transitions | P13 | P14, P15 | bounded → forked changes upgrade eligibility and is a health metric |
| ChangePlan | P13 | P14 | Staged, hash-bound, reversibility-labelled; triggers re-qualification |
| Capability identifier | P14 | P15 | Stable ID enabling per-capability incident attribution |
| RollbackPlan | P14 | P13 | Per-object horizons; bounds what an editor may promise |
| QualificationDossier | P14 | P15 | Workflow defects, receipts, evidence tier per family |
| Asset ranking | P15 | P13 | Which capability to offer when the client adds or replaces |
| Falsified beliefs | P15 | all | Assumption-ledger maintenance |

The efficient consequence: **P15 needs almost no telemetry of its own.** If P13 and P14 are built as
designed, they already emit P15's primary signals.

## 4. Denominators — honest state

| Survey | Achieved | Target | Met |
|---|---:|---:|---|
| P13 commercial | 40 records / **30 distinct surfaces** | 100 | No |
| P13 OSS | 70 | 100 | No |
| P14 commercial | 49 | 100 | No |
| P14 OSS | 80 | 100 | No |
| P15 commercial | 22 | 100 | No |
| P15 OSS | **97** | 100 | Yes (no padding) |
| Innovations (each part) | **100** | 100 | Yes |

**Cause:** an account-wide model usage limit terminated survey wave 1 across all six subagents within
about ten minutes of dispatch, confirmed non-transient by each agent independently. Wave 2, dispatched
after the parent moved to Opus 5, recovered the two zero-coverage OSS denominators, closed the
observability gap, and extended P15 commercial. **No survey was padded.** Every record is a page
actually read. This is BLOCKED (could not observe), not FAIL (observed wrong).

Total census records across the lane: **358**.

## 5. Top design hypotheses, lane-wide

1. Multi-object RollbackPlan with per-object recovery horizons (P14).
2. Unrepresentable-by-construction edit model (P13).
3. Min-gated asset ranking, never a weighted average (P15).
4. Intent records separate from mutations, re-resolved on upgrade (P13).
5. Minimum instrumentation contract in the HostContract (P14).
6. Digest pinning with Actionist-owned artifact retention (P14).
7. Rank by observed adaptation cost, not popularity metadata (P15).
8. Workflow acceptance gate above the build gate (P14).
9. Exploration permitted over quality, never over safety (P15).
10. Falsified-belief records as a first-class output (P15).

## 6. Contradictions and open questions ranked by consequence

1. **Cross-client aggregation may be contractually unavailable** (X-P15-2). Gates P15's entire value
   proposition. Resolvable by a conversation, not code — cheapest high-value experiment in the lane.
2. **ComputeSDK portability is untested** (X-P14-1). The abstraction that was supposed to keep the
   sandbox choice reversible may forfeit the memory-pause property that justified choosing E2B.
3. **Do clients accept a bounded editing surface?** (X-P13-2). Every AI builder chose unbounded
   fallthrough — either an industry failure of nerve or evidence that clients reject bounds. Desk
   research cannot distinguish these.
4. **S1-L4 reports no observed surface renders third-party settings inside host chrome** (33 surfaces).
   If settings absorption fails, either capabilities expose their own unbounded settings UI — the
   fallthrough posture arriving through the back door — or absorption is bespoke per donor, raising
   adaptation cost and changing P15's primary ranking signal.
5. **K long-lived schema versions exceed known prior art** (X-P14-5). pgroll and reshape hold two
   versions during a controlled rollout, not K indefinitely.
6. **Attribution is a prerequisite for learning** (X-P15-3). P15's incident signal is blocked on P14's
   instrumentation contract.
7. **Open Design is dormant** (X-P13-1). The dispatch's census instruction rested on a project whose
   last activity was 3 September 2024. Any downstream document treating it as live must be corrected.

## 7. Experiments, cheapest-first

| ID | Experiment | Cost | Gates |
|---|---|---|---|
| E-P15-5 | Ask the client owner whether anonymised cross-client aggregation is contractually available | A conversation | P15's whole premise |
| E-P15-6 | Run the solver over existing contracts; aggregate UNDERDETERMINED into a contract backlog | No model, no execution | Contract evolution priority |
| E-P15-1 | Retrospective min-gated ranking of existing corpus assets; check for degeneracy | Analysis only | AP15-7 |
| E-P13-1 | Compile a real client-request sample into the seven-verb algebra; measure residue | Analysis only | The edit algebra |
| E-P14-3 | Compare provider primitives for memory-preserving pause | Doc reading | X-P14-1 |
| E-P13-2 | Apply N edits, upgrade a capability, replay intents, diff the surviving edit set | Needs a pilot | P13's core thesis |
| E-P14-1 | Compose two capabilities of different profiles, induce failure, execute multi-object rollback | Needs a pilot | P14's core thesis |

The first three need no authorization beyond what exists and would materially reduce uncertainty.

## 8. What this lane refuses to claim

- No editor, runtime or learning system was implemented. Nothing was cloned, built, executed, deployed,
  rolled back or admitted. `admitted_blocks = 0`.
- Five of six denominators are unmet; the shortfalls are recorded per survey.
- No SLA page or published postmortem was retrieved for any P14 surface; `production_evidence` means
  documented mechanics and disclosed limitations.
- The Shopify finding is two merchant reports plus a staff acknowledgement of receipt — not a measured
  failure rate, not a root cause, not evidence about any other vendor.
- Caddy's distributed certificate-storage risk is secondary-sourced and unconfirmed.
- Daytona's disqualification was not re-tested this wave.
- Azure AI Personalizer's retirement status is flagged for verification.
- S1-L4's findings are cited read-only and are that lane's claims, not verified by this one.

## 9. Do-not-quote list (verification debt)

Carried forward so nothing unverified reaches the client:

- "Northflank one-click rollback" — first-party docs describe only re-triggering a prior run.
- Statsig automatic rollback — its docs describe alerting only.
- Shopify "acknowledged, unfixed" — corrected; staff acknowledged receipt, no formal bug acknowledgement.
- Blaxel and QA Wolf headline figures — marketing, secondary-sourced throughout.
- Framer 3.0/Agents, Replit Agent 4 / Design Canvas 2026 — secondary only.
- Datadog Error Tracking "which commit probably caused the error" — no documented algorithm.
- Datadog Synthetics automatic rollback — asserted, no mechanism specified.
- From S1-L4: Anon "never stores credentials"; Paragon isolation detail; compliance logos as certs;
  37/45 of their P11 OSS licence rows are badge-level only.
