# P14 Sprint 2 — Release manifest and multi-object rollback contract

Part: P14 · Lane: S2-L5 · Run: `2026-08-27-sprint-2-opus`
Status: research only · DESIGN_ONLY · UNEXECUTED · NOT_ADMITTED · admitted_blocks 0

---

## 1. The claim this contract exists to prevent

"This release can be rolled back."

That sentence is true of the code artifact and frequently false of everything else. Sprint 1 verified
the shape from two independent directions: vendors reasoning from their own product surface (Vercel
reverts traffic in about a second but its documentation states environment variables and configuration
are **not** reverted; Fly.io says the same about `fly.toml`, secrets and migrations) and SISO reasoning
from operating a real AGPL-3.0 donor in production (revert the parent commit to restore the pinned
donor revision, but "**Data rollback is separate**: restore the pre-migration database dump" — and
Teable retained `/tables-native` as a *third* object, a temporary UI rollback route).

**A `RollbackPlan` whose value is a boolean is wrong by construction.**

## 2. The eight rollback objects

| Object | Reverted by | Typical horizon | Owner of the horizon |
|---|---|---|---|
| `code_artifact` | Redeploy pinned digest | Long — retention we own | **Actionist** |
| `config` | Config-version restore | Long, **if versioned** | Actionist |
| `secrets` | Secret-version restore | Long, if versioned | Actionist |
| `schema` | Migration reversal / versioned view | **Short and bounded** (~30min dual-write, PlanetScale) | **Donor / engine** |
| `data` | Pre-migration dump restore | Bounded by backup retention + RPO | Actionist |
| `donor_revision` | Revert parent commit to pinned revision | Long, if digest-pinned and retained | Shared |
| `surface_route` | Repoint mount / retained fallback route | Long, but costs a live second surface | Actionist |
| `connector_state` | Credential/connection re-grant | **Often unrecoverable** (revoked tokens, external side effects) | **Third party** |

Three of the eight — `schema`, `connector_state`, and the donor half of `donor_revision` — have
horizons Actionist does not control. That is the structural fact the manifest must expose.

## 3. Horizon algebra

**I-P14-2:** the composition's true recovery horizon is the **minimum** across its objects.

```
composition_horizon = min(horizon(o) for o in objects)
release_is_recoverable(t) = (t <= composition_horizon)
```

Rules:

- **H-1.** The horizon is computed at release time and written into the `ReleaseManifest`. It is not
  discovered during an incident.
- **H-2 (I-P14-9).** A release whose `composition_horizon` is shorter than the client's declared
  support window is **refused**, not warned. Override requires named human authority recorded in the
  manifest — this is the commercial risk trade, and it is a human's to make (C7).
- **H-3.** An object whose horizon cannot be computed contributes `horizon = 0`. Unknown is not
  optimistic. This makes an uncomputable horizon a `NO_SHIP` by arithmetic rather than by a separate
  rule.
- **H-4.** `unrecoverable` objects (a scheduled job's sent email, a revoked OAuth grant) do not
  contribute `0` and thereby block every release. They are moved out of the horizon calculation into a
  declared `non_recoverable_effects` list, each with either a **compensating action** or an explicit
  recorded acceptance. Conflating "cannot be undone" with "cannot be released" would make every
  composition that sends an email unreleasable.

H-4 is the correction to a naive reading of the minimum rule. The minimum governs *recovery*; it does
not govern *effects that were never recoverable in the first place*. Those need naming, not a horizon.

## 4. Pinning and retention

**I-P14-3.** Pin by content digest, and own retention for at least the declared horizon.

- Render re-pulls by **tag** on rollback and may obtain a different image. A tag is not a pin.
- Fly warns that images not recently deployed may be **pruned**. A pinned reference to an artifact
  someone else can garbage-collect is not a recovery path.
- Therefore: `digest` is mandatory in the manifest; `tag` may be recorded for humans but is never the
  rollback target; and retention of every pinned digest is Actionist-owned, with expiry ≥
  `composition_horizon`.

Verification `F-P14-DIGEST`: a pinned digest that is unresolvable at rollback time falsifies the whole
mechanism. Resolvability should be re-checked on a schedule, not assumed from the fact it was written.

## 5. Rehearsal

**Unrehearsed rollback blocks release.** A rollback path that has never been executed is a belief, not
a capability, and every object class has its own failure mode.

**I-P14-10.** Rehearsal evidence is **per object class**, not per release. A release may reuse a prior
rehearsal receipt for an object class only when that class's mechanism and horizon are unchanged. Any
object class new to this composition requires its own rehearsal before promotion.

Rehearsal receipt must record, per object: pre-state checksum, rollback executed, post-state checksum,
elapsed time, and parity verdict. Elapsed time feeds the horizon; parity feeds `F-P14-ROLLBACK` (a
rehearsed rollback that leaves an object unrestored falsifies the multi-object claim).

The rehearsal does not prove production rollback works. It proves the mechanism exists and the operator
has executed it once. That is a floor, not a ceiling, and the manifest should not imply more.

## 6. Order of operations

Rollback objects are not independent, and reverting them in the wrong order corrupts state. The
dependency order:

```
1. surface_route      (stop new traffic reaching the failing surface)
2. code_artifact      (restore the executing code)
3. config + secrets   (restore the environment that code expects)
4. worker drain       (in-flight jobs from the newer version must not hit older code)
5. schema             (only within its horizon; the shortest window)
6. data               (restore the pre-migration dump if schema reversal was destructive)
7. donor_revision     (donor's own pinned revision + its own data step)
8. connector_state    (re-grant; frequently manual, frequently the tail)
```

Two hazards this ordering exists to avoid:

- **Reverting code before draining workers** leaves the old binary consuming job envelopes written by
  the new one. This is why `worker` rollback is not instantaneous and its drain interval must be added
  to the horizon rather than assumed zero.
- **Reverting schema before code** points live new code at an old schema — a strictly worse outage than
  the one being fixed.

## 7. `ReleaseManifest` — required content

Machine-readable schema: `release-manifest.schema.json`. Required in prose because it is the contract
S2-L1 and S2-L4 bind to:

- Composition identity, and for **every** capability: `capability_id`, `capability_version`,
  `runtime_profile`, `attribution_class`, digest pin, retention expiry.
- The `RollbackPlan`: per-object mechanism, horizon, rehearsal receipt reference.
- `composition_horizon` (computed minimum) and the declared client support window.
- `non_recoverable_effects` with compensating action or recorded acceptance.
- Qualification dossier reference and its **minimum** tier across families (C6 — never an average).
- Human approval record (C7 — policy pass and human approval both required, neither substitutes).
- Licence notices and source-offer obligations (C8 — these are release gates, carried forward from the
  donor standard; recorded here as a gate, with legal interpretation explicitly out of this lane's
  scope per A39).

## 8. What this contract refuses to claim

- Nothing has been released, rolled back or rehearsed. `admitted_blocks = 0`. Every horizon number
  quoted (≈1s Vercel traffic revert, ≈30min PlanetScale dual-write) is **vendor-documented mechanics**,
  not measured Actionist behavior, and Sprint 1 recorded that no SLA page or published postmortem was
  retrieved for any surveyed vendor.
- The ordering in §6 is derived from the objects' dependencies, not observed in an executed rollback.
  E-P14-1 is its test.
- K-version schema coexistence is **not** assumed (AP14-5 doubtful; pgroll/reshape hold two versions
  transiently). Where a composition would need it, the fallback is lockstep upgrade, and that
  constraint must be priced rather than wished away.
