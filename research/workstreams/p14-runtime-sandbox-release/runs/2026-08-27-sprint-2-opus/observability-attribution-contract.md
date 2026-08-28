# P14 Sprint 2 — Observability and attribution contract

Part: P14 · Lane: S2-L5 · Run: `2026-08-27-sprint-2-opus`
Status: research only · DESIGN_ONLY · UNEXECUTED · NOT_ADMITTED · admitted_blocks 0

Sprint 1 derived the minimum instrumentation contract by intersecting what 29 surveyed vendors
*require* before attributing anything. Sprint 2 turns that intersection into a binding admission
contract and specifies the attribution classes that bound what P15 may conclude.

---

## 1. Why this is a HostContract requirement and not an observability purchase

Attribution is load-bearing for two decisions that are not observability decisions:

- **which object to roll back** (P14), and
- **which capability to demote** (P15).

Both need a stable capability identifier on every signal. If that identifier is bought later as a
monitoring feature, it will not exist on the signals emitted by capabilities admitted before the
purchase — and those are exactly the capabilities that will be in production first. Sprint 1 stated
this as I-P14-4; Sprint 2 states the consequence: **identity is admitted or the capability is not.**

## 2. The five required fields, restated as an admission schema

Derived in Sprint 1 by intersecting Grafana's five OTel resource attributes, Datadog Unified Service
Tagging, Elastic's `traceparent` requirement, Harness's Service Instance Identifier and incident.io's
routing attribute. Every one is the same requirement in a different vendor's vocabulary.

| # | Field | Requirement | Admission-blocking? |
|---|---|---|---|
| 1 | `capability_id` | Stable across redeploy; on every span, log, metric, error. Not a display name, not a URL | **Yes** |
| 2 | `capability_version` + `environment` | **Per capability, never per app** | **Yes** |
| 3 | Trace context propagated across every capability boundary | `traceparent` in and out | **No — costed decision** |
| 4 | Ownership metadata resolvable from `capability_id` | Enforced at admission, incident.io style | **Yes** |
| 5 | Per-capability health assertion with machine-readable pass/fail | A **threshold**, not an observation | **Yes** |

Two notes carried forward because they are the ones most easily got wrong:

**Capability identity must be deliberately plural.** New Relic warns that an app reporting as multiple
entities "may produce duplicate groups" and recommends consolidating into one entity. For a composed
application that recommendation is exactly backwards — the app is one thing but the capabilities are
many, and collapsing them destroys the only signal that makes rollback and demotion targetable.

**App-level release correlation is actively misleading, not merely weaker.** Rollbar's suspect deploy
is "the last deploy prior to the first occurrence" — a purely temporal heuristic. Because Actionist
deploys capabilities independently by design, that heuristic will systematically blame whichever
capability happened to deploy most recently. A wrong attribution fed to P15 is worse than no
attribution: it demotes an innocent capability *and* leaves the guilty one ranked.

**Checks are not thresholds.** k6's documentation is explicit that checks alone "do not affect the exit
status." A health assertion that logs a failure without failing is not an assertion. Field 5 requires
a non-zero exit or an equivalent machine-readable fail.

## 3. Attribution classes — the mechanism that stops fabricated blame

This is the lane's main addition. Sprint 1 established that 8 of 29 vendors stop at `service`, 7 at
`deploy`, and only 4 reach `dependency` — and that a capability Actionist cannot instrument caps the
system at the call boundary. Sprint 2 makes the ceiling an explicit, recorded property.

Every admitted capability carries a declared `attribution_class`:

| Class | Achieved when | What may be concluded | What may NOT be concluded |
|---|---|---|---|
| `dependency` | Trace context propagates in and out; capability-scoped spans | This capability caused the fault, distinguished from its caller | — |
| `service` | `capability_id` on signals, no boundary propagation | This capability is implicated | Whether the fault is its own or its downstream's |
| `endpoint` | Caller-side only; donor not instrumentable | The call to this capability failed | Anything about the capability's internals |
| `deploy` | Only release correlation available | Something in this release window changed | Which capability — **P15 MUST NOT demote on this class** |
| `none` | No identifier reaches telemetry | Nothing | Capability is **not admissible** |

**Rule A-1:** P15 may only act on a signal at or below the capability's declared `attribution_class`.
**Rule A-2:** A capability at `endpoint` or `deploy` may be admitted, but its class is recorded in the
`ReleaseManifest` and surfaced at incident time, so the operator knows the blame is coarse before
acting on it.
**Rule A-3:** `attribution_class` is verified by induced-failure test at qualification (E-P14-4), not
self-declared. A capability claiming `dependency` that cannot demonstrate boundary propagation is
recorded at the class it actually achieves.

The silent-failure warning from Elastic applies directly: no `traceparent` propagation means no edge on
the map, and **an uninstrumented capability does not appear as a gap — it simply does not appear.**
Class verification must therefore test for presence positively, never infer health from absence of
error.

## 4. The market gap Actionist has to build across

Sprint 1's most consequential attribution finding, restated because it defines the build:

- **Attribute to a component but do not act:** Dynatrace, Honeycomb, Datadog APM, Elastic (all
  `dependency`-capable, all alert-only).
- **Act automatically but attribute only to the deploy unit under test:** Harness CV, Argo Rollouts.
- **No surveyed vendor both attributes to a component and rolls that component back automatically.**

So the automated per-capability rollback decision is Actionist-owned code sitting between a
dependency-level attributor and a rollback executor. Two inherited cautions:

- **Harness CV needs a historical ML baseline**, which a newly composed capability does not have. The
  cold-start problem lands directly on Actionist's use case — the first release of any capability is
  precisely when no baseline exists. Automated statistical rollback is therefore **unavailable on first
  release** and must fall back to threshold assertions (field 5) plus human decision.
- **Argo Rollouts' contract is portable and declarative but attributes nothing** — the customer-supplied
  expression does all the attributing. That is the right shape to copy: Actionist supplies the
  capability-scoped query, the executor evaluates it.

Do not quote "Northflank one-click rollback" (X-P14-6): the feature page claims it, the first-party
run-and-manage documentation describes only re-triggering a prior run and does not state whether runs
capture image digests. Datadog Synthetics' automatic-rollback claim is likewise asserted without exit
code or blocking flag and must be verified before reliance.

## 5. Inconclusive is a state, not a failure

Argo Rollouts shows the cost of ambiguity: an inconclusive analysis run pauses and "Manual intervention
is then needed." That is correct behavior and Actionist should reproduce it rather than defaulting
inconclusive to pass or fail.

- **Inconclusive → hold + page.** Never auto-promote, never auto-roll-back.
- An inconclusive result is **not** a negative quality signal for P15 (absence is not a negative
  signal). It is a defect in the health assertion, and it is routed to the contract backlog alongside
  `UNDERDETERMINED` results.

## 6. Open gaps carried, not closed

These were `UNVERIFIED` at Sprint 1 and this lane did not re-fetch vendor documentation (out of
boundary — no authenticated sessions, no vendor execution). They remain open:

- FireHydrant change-correlation model (docs returned navigational boilerplate; resume via `llms.txt`).
- Rootly ownership model (homepage only; do not rank against PagerDuty/incident.io on mechanism).
- Bugsnag stability targets — whether a stability target can gate anything.
- Datadog Error Tracking fingerprinting algorithm; its commit-attribution claim is marketing-adjacent
  and must not be ranked alongside Sentry's documented blame algorithm.
- Datadog Synthetics `datadog-ci` exit codes and blocking flags.
- Split/FME 355-sample significance threshold (secondary source only).
