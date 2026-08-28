# P14/P15 Sprint 2 — Worked traces

Part: P14 + P15 · Lane: S2-L5 · Run: `2026-08-27-sprint-2-opus`
Status: research only · DESIGN_ONLY · UNEXECUTED · NOT_ADMITTED · admitted_blocks 0

Four traces, deliberately heterogeneous, chosen so that each one **breaks a different part of the
contract**. A trace that passes cleanly teaches nothing. These are design fixtures, not executions:
no capability here has been built, released or rolled back.

---

## Trace A — Intact donor service (`sidecar-service`)

**Shape:** a mature record/table application mounted as its own service with its own Postgres, modelled
on the SISOCRM donor-fork pattern (AGPL-3.0 donor, pinned revision, `/tables` canonical with
`/tables-native` retained as a fallback route).

### Profile selection (deterministic)

`owns_durable_store = true`, `owns_migrations = true` → `sidecar-service`. No judgment required once
the `ReuseDecision` is fixed.

### Identity binding

Host owns identity. Donor validates **server-to-server** and must not trust browser headers. This is
the clause that most often forces a fork: if the donor authenticates by reading a cookie the browser
supplies, it cannot be admitted unmodified.

### Attribution

Donor accepts `traceparent` at its ingress → `attribution_class = dependency`, **verified by induced
failure**, not by reading its docs. If the donor drops trace context, the class falls to `endpoint` and
Rule A-1 then forbids P15 from demoting this capability on anything finer than "the call failed."

### Rollback objects — seven

| Object | Mechanism | Horizon | Owner |
|---|---|---|---|
| `code_artifact` | redeploy pinned digest | long | actionist |
| `config` | config-version restore | long | actionist |
| `secrets` | secret-version restore | long | actionist |
| `donor_revision` | revert parent commit to pinned revision | long | shared |
| `schema` | migration reversal | **~30 min** | **donor/engine** |
| `data` | pre-migration dump restore | backup retention | actionist |
| `surface_route` | `/tables` → `/tables-native` | long | actionist |

`composition_horizon = min(...) = ~30 min`, set entirely by the donor's schema revert window.

### What this trace breaks

**A release advertised as "rollback-able" is rollback-able for ~30 minutes.** If the client's declared
support window is 24 hours, H-2 **refuses** the release. The available responses are all commercial,
not technical: shorten the declared window, negotiate a donor migration strategy that keeps the old
column, or accept a named human override recorded in the manifest.

The naive design fails here by reporting `rollback: true` on the strength of the code artifact alone —
which is exactly what Vercel's and Fly's documentation warn about, and exactly what the SISOCRM donor
standard corrects with "Data rollback is separate."

---

## Trace B — Extracted package (`package-in-host`)

**Shape:** a validation/formatting library extracted from a donor, linked into the host build.

### Profile selection

Owns no store, no timer, no queue, no surface → `package-in-host`.

### Attribution

In-process; the host controls instrumentation, so `dependency` is achievable cheaply via a
module-scoped span/logger wrapper injected at binding.

### Rollback objects — two

`code_artifact`, `config`. Long horizon, Actionist-owned retention. This is the easy case.

### What this trace breaks

**Independent rollback does not exist.** Rolling this package back means rolling back the host
artifact, which rolls back every other `package-in-host` capability with it.

The failure this exposes is a *reporting* failure rather than a mechanism failure: a manifest that
lists per-capability rollback for host-linked packages is claiming granularity the runtime does not
have. The contract requires `independent_rollback: false` for this profile precisely so the manifest
cannot imply otherwise.

Second-order consequence for P15: because these capabilities roll back together, an incident that
triggers a host rollback produces a *correlated* negative signal across every host-linked package. If
P15 counted each as an independent demotion event it would punish four innocent capabilities for one
guilty one. **Correlated rollbacks must be recorded as one event with a shared cause id**, and P15
must not treat co-rolled-back capabilities as independent observations — in a regime with tens of
observations, that error is large.

---

## Trace C — Scheduled job with external side effects (`scheduled-job`)

**Shape:** a nightly job that reconciles records and emails a summary to client staff.

### Profile selection

`timer_driven = true` → `scheduled-job`.

### Health assertion

**Freshness, positively asserted.** The failure mode is silence: a cron that never fires emits no
error, and a check reading only the last run's status reads a stale success indefinitely. The assertion
must be "a successful run occurred within N hours," not "the last run succeeded."

### Rollback objects

`code_artifact`, `config`, `schedule_state`, and — the problem — `emitted_side_effects`.

### What this trace breaks

**Reverting the artifact does not unsend the email.** Under a naive minimum-horizon rule, an
unrecoverable object would contribute `horizon = 0` and make every composition containing this job
permanently unreleasable.

That is why H-4 exists: unrecoverable effects are moved out of the horizon calculation into
`non_recoverable_effects`, each carrying either a compensating action (send a correction notice) or an
explicit recorded acceptance. The horizon governs *recovery*; it does not govern effects that were
never recoverable.

On restore, **imports are disabled and require explicit re-enable** — otherwise a rolled-back job
immediately re-runs and re-emits the side effect it was rolled back for.

---

## Trace D — Connector-backed worker (`worker`), and a poisoned learning signal

**Shape:** a queue-driven worker syncing records through a third-party connector under a tenant OAuth
grant.

### Profile selection

`queue_driven = true` → `worker`. Requires an idempotency key.

### The incident

The third party revokes the OAuth grant. The worker's failure rate crosses its threshold. Attribution
correctly names this capability — the spans carry its `capability_id`, the failures are its own.

### What this trace breaks

**The attribution is correct and the learning conclusion would be wrong.** P15's naive reading is
"this capability has a high production failure rate; demote it." But the capability did not fail — its
credential was revoked by a third party. Demoting it teaches the shelf to avoid a perfectly good
capability, and the same revocation would hit any replacement.

This is the concrete case for P15's `signal_class` separation (see `learning-contract.md` §4):
credential/authorization failures are **environmental**, not quality signals. They belong to a class
that never contributes to capability ranking.

Rollback exposes a second trap: `connector_state` is frequently **unrecoverable** — a revoked token
cannot be un-revoked by Actionist, and re-granting is a third-party, often manual, action. It is the
tail of the rollback order (§6 of the release contract) for that reason.

And the worker adds the in-flight hazard: rolling the artifact back without draining first leaves old
code consuming job envelopes written by the new version. The drain interval is part of the horizon,
not zero.

---

## Cross-trace summary

| | A: sidecar donor | B: host package | C: scheduled job | D: connector worker |
|---|---|---|---|---|
| Rollback objects | 7 | 2 | 4 | 3 |
| Independent rollback | yes | **no** | yes | yes |
| Horizon owner | **donor** | actionist | actionist | actionist + third party |
| Attribution ceiling risk | drops to `endpoint` | `dependency` | `dependency` | `dependency` |
| Breaks | horizon refusal | granularity claim | unrecoverable effects | poisoned signal |

The four failure modes are structurally different, which is the point: **no single runtime or rollback
design covers them**, and a contract that passes all four traces is doing real work rather than
restating the easy case.

## What these traces do not establish

- None has been executed. Every horizon, mechanism and class above is designed, not measured.
- Trace A's ~30-minute figure is PlanetScale's documented dual-write window quoted as a representative
  engine bound, not a measurement of any donor Actionist operates.
- The traces are fixtures chosen to stress the contract. They are not evidence that the contract is
  complete — AP14-1 (five profiles suffice) remains a hypothesis, and the iframe-own-origin seam is
  recorded as its likeliest falsifier.
