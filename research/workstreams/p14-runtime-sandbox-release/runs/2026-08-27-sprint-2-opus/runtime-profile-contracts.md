# P14 Sprint 2 — Runtime profile contracts

Part: P14 · Lane: S2-L5 · Run: `2026-08-27-sprint-2-opus`
Owner: `ACTIONIST-S2-L5-RUNTIME-LEARNING` (Opus 5[1m])
Status: research only · DESIGN_ONLY · UNEXECUTED · NOT_ADMITTED · admitted_blocks 0

Sprint 1 established *that* a composition has multiple rollback objects and *that* five profiles fall
out of packaging mode. Sprint 2 does not re-survey either. It specifies the profiles as contracts an
implementation could be held to, and states precisely where each one stops being safe.

---

## 1. Objective

Given a heterogeneous `AssemblyPlan`, decide for every capability: what process it runs in, what it is
allowed to own, what evidence qualifies it, how it is identified in telemetry, how far back it can be
recovered, and what its release and rollback receipts must contain.

## 2. Invariants inherited (not re-derived)

| ID | Invariant | Sprint 1 source |
|---|---|---|
| I-P14-1 | A composition has multiple rollback objects; reverting one does not revert the others | Vercel/Fly docs + SISOCRM donor standard |
| I-P14-2 | Each object has its own recovery horizon; the composition's horizon is the **minimum** | PlanetScale ~30min dual-write window |
| I-P14-3 | Pins are by content digest, and Actionist owns retention for the declared horizon | Render tag re-pull; Fly image pruning |
| I-P14-4 | Verification must be attributable per capability | Attribution census requirements intersection |
| C5 | Receipt families are orthogonal; no family's pass is inferred from another's | INV-ORTHOGONAL |
| C6 | Evidence tier is the minimum across families, never an average | Anti-averaging rule |
| C7 | Policy pass and human approval are both required; neither substitutes | Approval-laundering rule |

## 3. New invariants this lane adds

**I-P14-7 — A runtime profile is a claim about ownership, not about deployment convenience.**
The profile is selected by answering *who owns the state and who owns the migrations*, not by asking
where it is easiest to run the code. Two capabilities with identical Dockerfiles take different
profiles if one owns a database and the other does not. This is what stops `sidecar-service` from
becoming the default dumping ground for anything awkward to bundle.

**I-P14-8 — Instrumentability is an admission criterion, evaluated before the reuse shape is fixed.**
Sprint 1 established that a capability Actionist cannot instrument caps attribution at the call
boundary. Sprint 2 makes the consequence binding: a capability whose attribution ceiling is `endpoint`
may be admitted, but it is admitted into a *declared* attribution class, and P15 may never demote it
on evidence finer than that class. Blaming a capability at a granularity its instrumentation cannot
support is a fabricated attribution, and it is the specific failure that would poison the learning loop
with confident wrong signals.

**I-P14-9 — The recovery horizon is computed and displayed at release time, and a release whose
minimum horizon is shorter than its declared support window is refused.** Sprint 1 said the number
must be computed rather than discovered during an incident. The refusal is the part that gives it
teeth: an uncomputable horizon is not a warning, it is a `NO_SHIP`.

**I-P14-10 — Rollback rehearsal evidence is per object class, not per release.** Rehearsing artifact
rollback tells you nothing about schema rollback. A release may reuse a prior rehearsal receipt for an
object class only if that class's mechanism and horizon are unchanged; any new object class in the
composition requires its own rehearsal before promotion.

## 4. The five profiles as contracts

Profiles are derived from packaging mode (Sprint 1 §6), restated here with the fields an implementation
must supply. `MUST` fields are admission-blocking.

### 4.1 `package-in-host`

Serves: extracted package, generated-from-pattern.

| Field | Value |
|---|---|
| Process | Host process; no independent lifecycle |
| State ownership | Host-owned. The package MUST NOT open its own connections or own tables |
| Migrations | Host-owned; package MAY ship migration *fragments* the host applies under host ownership |
| Identity | Host session; package never authenticates |
| Attribution ceiling | `dependency` — in-process, host controls instrumentation |
| Capability id emission | Module-scoped logger/span wrapper injected at binding; MUST be present |
| Health assertion | Static: build + contract tests. No runtime health endpoint exists to poll |
| Rollback objects | code artifact, config |
| Recovery horizon | Bounded by host artifact retention (Actionist-owned) |
| Upgrade path | Host build, lockfile pin by digest/integrity hash |
| Fails when | The package needs background work, its own store, or its own release cadence — re-shape to `worker` or `sidecar-service` |

The honest limit: because this profile has no independent lifecycle, it cannot be rolled back
independently. Rolling back a package is rolling back the host artifact. Every other capability in
`package-in-host` rides along. **A composition with many host-linked packages has coarse rollback
granularity by construction**, and the release manifest must say so rather than implying per-capability
recoverability it does not have.

### 4.2 `microfrontend`

Serves: embedded module, bounded UI surface.

| Field | Value |
|---|---|
| Process | Independent build; browser-side mount into host shell |
| State ownership | Host-owned. Server state reached only through host-declared ports |
| Migrations | None owned |
| Identity | Host session, passed as a scoped token; MUST NOT read host cookies directly |
| Attribution ceiling | `dependency` if the mount emits capability-scoped spans; `service` otherwise |
| Capability id emission | MUST tag client errors and RUM events with capability id + version |
| Health assertion | Mount contract test + declared-state rendering (the eight UI states) |
| Rollback objects | code artifact, config, **surface route** |
| Recovery horizon | Artifact retention; route fallback available immediately |
| Upgrade path | Independent build, contract-tested mount |
| Fails when | It needs to own server state or run without the shell |

This is the only profile that gets the **surface-route rollback object** cheaply, because a mount point
can be repointed. Sprint 1 observed this in local practice: Teable's `/tables-native` retained as a UI
rollback while `/tables` is canonical. That is a *deliberate cost* — two live surfaces — and it should
be declared with an expiry, not left permanently.

### 4.3 `sidecar-service`

Serves: intact service, intact fork.

| Field | Value |
|---|---|
| Process | Own process and origin |
| State ownership | **Donor-owned store and migrations.** The one profile where a third party owns migrations |
| Migrations | Donor-owned. Host MUST NOT write donor tables; cross-system reads go through events/read models (A12) |
| Identity | Host owns identity; the donor validates **server-to-server** and MUST NOT trust browser headers |
| Attribution ceiling | `dependency` only if the donor accepts `traceparent` propagation; otherwise `endpoint` from the caller side |
| Capability id emission | MUST be injectable without forking the donor, or the capability is admitted at `endpoint` class |
| Health assertion | Donor health endpoint + host-side threshold (k6-shaped: scoped threshold, non-zero exit) |
| Rollback objects | code artifact, config, secrets, **schema**, **data**, **donor revision**, connectors |
| Recovery horizon | **Not ours to set** — governed by donor migration reversibility |
| Upgrade path | Pinned donor revision by digest; separate data rollback |
| Fails when | The donor requires trusting client-supplied identity, or its migrations cannot be reversed within the declared horizon |

This is where the heterogeneity actually bites, and it carries the most rollback objects. The critical
asymmetry: **for every other profile Actionist can lengthen the recovery horizon by owning retention;
for this one it cannot**, because a donor's forward-only migration is forward-only regardless of what
Actionist retains. Sprint 1's I-P14-2 minimum rule means a single sidecar donor with a 30-minute schema
revert window sets the whole composition's horizon to 30 minutes.

### 4.4 `worker`

Serves: async atoms.

| Field | Value |
|---|---|
| Process | Own process, queue-driven |
| State ownership | Host-owned queue; worker owns no durable store |
| Migrations | Host-owned |
| Identity | Service identity; per-job tenant context MUST be explicit in the job envelope, never ambient |
| Attribution ceiling | `dependency` — trace context carried on the job envelope |
| Capability id emission | MUST be on the job envelope so a failed job attributes without reading worker code |
| Health assertion | Queue depth + failure rate thresholds; **idempotency key required** |
| Rollback objects | code artifact, config, **in-flight jobs** |
| Recovery horizon | Artifact retention, bounded by queue retention |
| Upgrade path | **Drain-then-replace**, idempotency-keyed |
| Fails when | Jobs are not idempotent — replay after rollback then corrupts state |

The rollback object the naive design misses is **in-flight work**. Rolling a worker back to a prior
version while jobs enqueued by the newer version sit in the queue means the old code consumes envelopes
it does not understand. Drain-then-replace exists precisely to close this, and it means worker rollback
is *not* instantaneous — it takes at least one drain interval, which must be added to the recovery
horizon rather than assumed to be zero.

### 4.5 `scheduled-job`

Serves: recurring atoms.

| Field | Value |
|---|---|
| Process | Own process, timer-driven |
| State ownership | Host-owned |
| Migrations | Host-owned |
| Identity | Service identity; tenant iteration MUST be explicit |
| Attribution ceiling | `dependency` |
| Capability id emission | MUST tag each run with capability id, version, and run id |
| Health assertion | Run success + freshness (did it run at all?) — **absence is the failure mode** |
| Rollback objects | code artifact, config, **schedule state**, side effects already emitted |
| Recovery horizon | Artifact retention; **side effects are frequently unrecoverable** |
| Upgrade path | **Imports disabled on restore; explicit re-enable** |
| Fails when | A run emits irreversible external side effects (sent email, posted invoice) with no compensating action |

The dangerous property here is that a scheduled job's failure is *silence*. Every other profile fails
loudly by returning errors; a cron that never fires emits nothing, and a health check that only
inspects the last run's status will read a stale success forever. Freshness must be asserted
positively. The second property: **a scheduled job can emit side effects that no rollback object
covers.** Reverting the artifact does not unsend the email. Where a job has external effects, the
release manifest must record either a compensating action or an explicit acceptance that this object
class is non-recoverable.

## 5. Profile selection is deterministic; shape selection is not

The split between mechanical and judgment work matters for what can be automated.

**Deterministic** — given a `ReuseDecision` and a `CapabilityContract`, profile selection is a lookup:

```
owns_durable_store AND owns_migrations        -> sidecar-service
timer_driven                                  -> scheduled-job
queue_driven                                  -> worker
browser_mounted_surface                       -> microfrontend
otherwise                                     -> package-in-host
```

**Model judgment** — deciding whether a capability *should* own its store, which is the `ReuseDecision`
itself (D06, owned by S2-L1). A model may propose it; the deterministic layer validates that the
proposal's declared ownership is internally consistent.

**Human authority** — accepting a profile whose recovery horizon is shorter than the client's declared
support window, accepting a non-recoverable side-effect class, and every admission decision. These are
not automatable because they trade client risk against delivery speed, which is a commercial decision.

## 6. Qualification: what makes a profile's evidence sufficient

Sprint 1 imported the donor standard's workflow-shaped proof list. Sprint 2 assigns it per profile,
because requiring donor-grade proof of an extracted package is waste, and accepting package-grade
proof of a donor service is negligence.

Receipt families remain **orthogonal** (C5) and the dossier tier is the **minimum** across families
(C6). No family passes by inference from another.

| Family | `package-in-host` | `microfrontend` | `sidecar-service` | `worker` | `scheduled-job` |
|---|---|---|---|---|---|
| Build/contract | required | required | required | required | required |
| Declared UI states (8) | n/a | **required** | required for its surfaces | n/a | n/a |
| Negative paths (N01–N15) | subset: input/error | subset: + denied/stale | **full** | subset: + retry/poison | subset: + missed-run |
| Two-tenant isolation | required | required | **required, `NO_SHIP` on leak** | **required** | **required** |
| Host-session login/logout revocation | n/a | required | **required** (server-to-server) | n/a | n/a |
| Persistence across restart | n/a | n/a | **required** | required (queue) | required (schedule) |
| Pre-migration backup | n/a | n/a | **required** | n/a | n/a |
| Idempotency | n/a | n/a | required for its ports | **required** | **required** |
| Freshness assertion | n/a | n/a | n/a | n/a | **required** |
| Rollback rehearsal (per object class) | required | required | **required, all classes** | required incl. drain | required incl. side effects |
| Human visual pass | n/a | **required** | required for its surfaces | n/a | n/a |

Cross-tenant leakage is `NO_SHIP` in every profile where a tenant boundary exists. That row is not
tiered and never trades against delivery pressure.

**The gate above the build gate.** A passing build is not client-workflow proof (C4). Workflow
acceptance is asserted at composition level, not per capability, and it is the last gate before human
approval. A composition where every capability qualifies individually but the workflow fails is a
**binding defect**, and it is routed to S2-L1/S2-L4 as a contract defect rather than recorded as a
capability quality signal — otherwise P15 learns to demote capabilities for the composer's mistakes.

## 7. Where this contract admits it is weak

- **AP14-5 remains doubtful and is not resolved here.** K long-lived schema versions exceed pgroll and
  reshape, which hold two versions transiently between `start` and `complete`. This lane does not claim
  K-version coexistence works; the profile table above assumes per-donor pinning with lockstep upgrade
  as the fallback, and the cost of that fallback is a real constraint to price (GP14-D).
- **AP14-2 is contested and resolved against the abstraction.** ComputeSDK's interface has no
  `pause`/`resume` and its `status` enum cannot represent a paused sandbox. Preview runtime must either
  bind directly to E2B for memory-preserving pause or drop the property. This lane does not pick;
  it records that the choice must be explicit because **the failure mode is silent** — previews simply
  cold-boot and lose process state, with no runtime error.
- **No profile has been executed.** Every row above is a design contract. `admitted_blocks = 0`.
- **The five-profile claim (AP14-1) is still a hypothesis**, falsified by any representative capability
  fitting none. The likeliest candidate for falsification is a capability needing an
  iframe-with-own-origin shape — isolation stronger than `microfrontend` but without owning a store.
  It is currently forced into `sidecar-service`, which over-grants store ownership. Recorded as an open
  seam rather than patched with a sixth profile on speculation.
