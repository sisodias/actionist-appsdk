# P14 — Runtime, verification and release: first-principles synthesis

Part: P14 · Lane: S1-L5 · Run: 2026-08-27-sprint-1-fable
Author: ACTIONIST-S1-L5-RUNTIME (Opus 5[1m]; wave-1 census under Fable 5[1m])
Status: research only · DESIGN_ONLY · UNEXECUTED · NOT_ADMITTED · admitted_blocks 0

---

## 1. The objective, stated precisely

Run heterogeneous capabilities in explicit runtime profiles, verify the complete client workflow,
release an exact recoverable composition, and be able to undo it.

The word doing the work is **heterogeneous**. A composition may contain an intact donor application
running as its own service with its own database and migrations, an extracted package linked into
the host build, a microfrontend mounted into the shell, a background worker, and a scheduled job.
These have different isolation boundaries, different health semantics, different upgrade paths and
different failure modes. A runtime design that assumes one shape is not a runtime design for this
problem.

## 2. The finding that reorganises this part

Two independent lines of evidence converged on the same structural claim, which is why it is stated
first and treated as the most reliable thing this lane produced.

**From the commercial census (vendor documentation):** artifact rollback is not composition rollback.
Vercel reverts traffic in roughly a second, but its documentation states environment variables and
configuration are **not** reverted. Fly.io says the same about `fly.toml`, secrets and migrations.

**From the local estate (operated practice):** SISOCRM's donor-fork standard, written against a real
AGPL-3.0 donor mounted in production, states: "Revert the parent commit to restore the previous
pinned donor revision. **Data rollback is separate**: restore the pre-migration database dump."
It then names a *third* object — Teable retains `/tables-native` as a temporary UI rollback while
`/tables` is canonical.

Vendors reasoning from their own product surface and SISO reasoning from operating a donor arrived
at the same shape independently.

**Invariant I-P14-1: a composition has multiple rollback objects, and reverting one does not revert
the others.** The objects observed so far: code artifact, configuration, secrets, database schema,
data, donor revision, surface route, connector/credential state.

A `RollbackPlan` whose value is a boolean is therefore wrong by construction. This is the single
largest gap between what P14's output contract currently implies and what production requires.

## 3. The second-order finding: horizons

PlanetScale's schema revert is a bounded window — roughly 30 minutes of dual-write — while artifact
rollback has no such bound.

**Invariant I-P14-2: each rollback object has its own recovery horizon, and the composition's true
horizon is the minimum across objects.** A release advertised as "rollback-able" is only rollback-able
for as long as its shortest-lived object permits. That number must be computed and displayed at
release time, not discovered during an incident.

## 4. The third finding: a pin is not a pin

Render re-pulls by tag on rollback and may therefore obtain a different image; digests are required
for predictability. Fly warns that images not recently deployed may be pruned.

**Invariant I-P14-3: pinning must be by content digest, and retention of the pinned artifact must be
owned by Actionist for at least the declared rollback horizon.** A pinned reference to an artifact
someone else can garbage-collect is not a recovery path.

## 5. Constraints

| # | Constraint | Source |
|---|---|---|
| C1 | One owner per stateful resource; never two | A11 / donor standard |
| C2 | Host owns identity and sessions; donors validate server-to-server, never trusting browser headers | Donor standard |
| C3 | Preview is not production; production is a clean rebuild | ARCHITECTURE release flow |
| C4 | A passing build is not client workflow proof | P14 known |
| C5 | Receipt families are orthogonal; no family's pass is inferred from another's | INV-ORTHOGONAL |
| C6 | Evidence tier is the minimum across families, never an average | Anti-averaging rule |
| C7 | Policy pass and human approval are both required; neither substitutes | Approval-laundering rule |
| C8 | Licence notices and source-offer obligations are release gates | Donor standard |
| C9 | Cross-tenant leakage is zero-tolerance | Local proposal |
| C10 | Default-deny egress; no production credentials in preview | Harness requirements |

## 6. Runtime profiles — answering the v1 question

P14's open question is "Which runtime profiles are v1?" The reuse shapes already decided in
`knowledge/` imply the answer, because packaging mode determines runtime:

| Profile | Serves reuse shape | Isolation | Data ownership | Upgrade path |
|---|---|---|---|---|
| **Package-in-host** | extracted package, generated-from-pattern | Host process | Host-owned | Host build; lockfile pin |
| **Microfrontend** | embedded module / bounded UI | Browser + style/route scoping | Host-owned | Independent build, contract-tested mount |
| **Sidecar service** | intact service, intact fork | Own process/origin | **Donor-owned** store and migrations | Pinned revision; separate data rollback |
| **Worker** | async atoms | Own process | Host-owned queue | Idempotency-keyed; drain-then-replace |
| **Scheduled job** | recurring atoms | Own process | Host-owned | Imports disabled; explicit enable |

Five profiles, derived rather than chosen. The sidecar row is where the heterogeneity actually bites:
it is the only profile where a third party owns migrations, and therefore the only one where the
recovery horizon is not ours to set.

## 7. Verification — the gate that everyone conflates

Every incumbent treats a green build as a shippable result. The local donor standard does not, and
its required-proof list is workflow-shaped: submodule resolves at the pinned commit; donor health;
full-page SSR; host-session login; logout revocation; realtime subscription; create/update/delete on
records and fields; views, filters, sorting and hidden fields "against real persisted data"; a
database backup before any bridge migration; persistence after a database restart; host and fork
tests; and a human visual pass before production sign-off.

That is a directly reusable P14 qualification checklist, and it is evidence that workflow-level
verification is operable, not merely desirable.

Layered on top, from the local gate design: eight declared UI states (loading, empty, ready, stale,
error, denied, review, unsupported-version), fifteen negative paths N01–N15, and a two-tenant
isolation fixture with `cross_tenant_leakage => NO_SHIP`.

**Invariant I-P14-4: verification must be attributable per capability.** An app-level pass/fail
cannot tell P15 which capability to demote or tell rollback which object to revert. This requires a
stable capability identifier carried through logs, traces and errors — which makes it a *HostContract*
requirement, not an observability feature bought later.

## 8. Assumptions

| ID | Assumption | State | Falsifier |
|---|---|---|---|
| AP14-1 | Five profiles cover the realistic reuse shapes | hypothesis | A representative capability that fits none |
| AP14-2 | A provider abstraction preserves the property that justified the provider | **contested** | ComputeSDK exposes only filesystem snapshot, not memory-preserving pause |
| AP14-3 | Workflow acceptance can be automated enough to gate releases | hypothesis | Acceptance suites prove too brittle or too slow to run per release |
| AP14-4 | Per-capability failure attribution is achievable | hypothesis | Attribution requires instrumentation donors will not accept |
| AP14-5 | K long-lived schema versions can coexist | **doubtful** | Prior art (pgroll, reshape) holds two versions during a controlled rollout, not K indefinitely |
| AP14-6 | Rented sandboxes meet isolation and cost needs | hypothesis | Measured cost or isolation failure at pilot scale |

## 9. Contradictions

**X-P14-1 — RESOLVED AGAINST THE PRIOR RECOMMENDATION. The sandbox abstraction does forfeit the
property that chose the sandbox.** E2B was selected on capability: memory-preserving pause with
roughly 1s resume and ~4s/GiB pause, versus Modal (memory snapshots preview-only, 7-day expiry,
same-instance-type only, and snapshotting *terminates* the sandbox) and Vercel Sandbox (documented as
unsuitable for continuous hosting).

Wave-2 read the ComputeSDK source directly and the concern was correct:

- `packages/computesdk/src/types/universal-sandbox.ts` (271 lines, the canonical interface every
  provider implements) declares `sandboxId, provider, runCommand(), getInfo(), getUrl(), destroy()`
  and a `filesystem` object. There is **no `pause`, `resume` or `suspend`**.
- The state model forecloses adding one: `status: 'running' | 'stopped' | 'error'` **cannot represent
  a paused sandbox**. This is not a missing method a small patch could add.
- `packages/e2b/src/index.ts` never passes `keepMemory`, so E2B's memory-preserving path is
  unreachable through the provider; its `snapshot.list`/`snapshot.delete` fall through to
  `listTemplates`/`deleteTemplate` — E2B *templates*, which are images.
- The CreateOS provider author concedes it in their own source comment: `getInstance()` hands callers
  the stateful API "(pause / resume / fork / disks / networks / bandwidth) **that ComputeSDK's core
  surface does not model**", described at line 430 as an "escape hatch".
- Provider semantics also diverge outright: CreateOS's `snapshot.create` *pauses* the source VM and the
  paused sandbox id *is* the snapshot id. The same call means materially different things per provider.

E2B's own docs treat the two as different products with different costs — `keepMemory: false` yields a
filesystem-only snapshot that **reboots** on resume. They are not interchangeable.

**Consequence:** ComputeSDK cannot be the load-bearing abstraction if memory-preserving pause is a
justifying property. Three options: (1) bind directly to the E2B SDK and accept lock-in for that
capability; (2) use ComputeSDK for exec/filesystem portability and drop to `getInstance()` for pause,
accepting that the pause path is per-provider code needing per-provider testing; (3) define Actionist's
own narrow interface with pause/resume as a required primitive, implemented only for providers that
genuinely have it.

**The failure mode is silent** — there is no runtime error. The code compiles and runs; previews just
cold-boot and lose process state. Caveat: static read of the interface at `main` on 2026-08-27, no
execution against a live provider. The finding does not depend on runtime behaviour, since a method
absent from an interface cannot be called through it.

**X-P14-2 — E2B retains paused sandboxes indefinitely with no auto-kill setting.** A capability that
is convenient in a demo is a recurring cost leak in production. The reaping policy must be ours.

**X-P14-3 — Multi-node Caddy may need a custom binary.** Shared certificate-storage backends are
reportedly not in official Caddy builds. **Secondary-sourced and unconfirmed** — must be verified
against module documentation before the on-demand-TLS decision is treated as settled.

**X-P14-4 — The visual gate is human-terminal.** No numeric threshold exists in the local pipeline;
`weightedOverall()` computes a score and nothing compares it to a bar. P14 must not claim automated
visual gating.

**X-P14-5 — K-version schema coexistence exceeds known prior art, in two dimensions.** Verified in
wave-2 from each project's own documentation. pgroll's README says "multiple schema versions", which
is where an unchecked reading goes wrong; every *concrete* statement is a pair — "Keep old and new
schema versions working simultaneously", "both the old version of the schema ... and the new one ...
will be accessible simultaneously". The mechanism explains the limit: pgroll maintains the old
physical column and a new one with triggers propagating writes "to its counterpart", singular. Each
additional live version would require pairwise trigger propagation among all live versions. reshape
gives the same answer: "During a migration, Reshape ensures both the old and new schema are available
at the same time."

The second dimension is the one that actually hurts: **that K=2 window is transient by design.** It
exists only between `start` and `complete`; completing the migration drops the old version, and after
completion rollback is impossible. Neither tool supports two versions coexisting *indefinitely* while
client A stays on v1 for months and client B moves to v2.

| | pgroll / reshape | Actionist needs |
|---|---|---|
| Concurrent versions | 2 | K |
| Duration | transient (migration window) | long-lived |

The versioned-view technique is sound and both projects converge on it independently, which is good
evidence it is the right primitive. Actionist would be **extending a validated mechanism, not
inventing one** — but it is an extension, and must be planned and costed as such rather than assumed
to be a configuration option. pgroll (Apache-2.0) and reshape (MIT) both permit that work.

**X-P14-6 — Do not quote "Northflank one-click rollback."** Vendor feature pages claim it; the
first-party run-and-manage-releases documentation describes only re-triggering a prior run and does
not state whether runs capture image digests. Similarly, Statsig has no documented automatic
rollback (alerting only), and was excluded from the top 10 for that reason.

## 10. Top 10 design hypotheses

Full register: `innovation-register.jsonl` (100 entries, 10 ranked).

1. **Multi-object RollbackPlan** — code, config, secrets, schema, data, donor revision, surface, connectors.
2. **Per-object recovery horizon** — minimum governs; displayed at release time.
3. **Digest pinning with owned retention** — for at least the declared horizon.
4. **Rollback rehearsal before promotion** — unrehearsed rollback blocks release.
5. **Surface-level fallback route** — the third rollback object, observed in local practice.
6. **K concurrent live schema versions** — versioned views with per-app pinning; ceiling acknowledged.
7. **Five declared runtime profiles** — derived from packaging mode, not chosen ad hoc.
8. **Sandbox reaping policy is ours** — vendor's missing default is our cost leak.
9. **Abstraction validated on the justifying property** — test memory-pause specifically, not lifecycle generally.
10. **Workflow acceptance gate above build gate** — the gate every incumbent conflates.

## 11. Falsifiers

| ID | Claim | Falsifier |
|---|---|---|
| F-P14-ROLLBACK | Multi-object rollback restores a composition | A rehearsed rollback leaves an object unrestored |
| F-P14-HORIZON | Min-horizon governs recoverability | A release is recovered after its shortest horizon expired |
| F-P14-DIGEST | Digest pinning plus owned retention guarantees a rollback target | A pinned digest is unresolvable at rollback time |
| F-P14-PORTABLE | The provider abstraction preserves memory-pause | ComputeSDK exposes only filesystem snapshot |
| F-P14-PROFILES | Five profiles suffice | A representative capability fits none |
| F-P14-ATTRIB | Failures are attributable per capability | >20% of failures cannot be attributed |
| F-P14-KVERSION | K schema versions coexist | The view layer cannot sustain K versions at pilot scale |
| F-P14-WORKFLOW | Workflow acceptance is gate-able per release | Suites too brittle or slow to run per release |

## 12. Experiments (designed, not authorized)

- **E-P14-1 — Rollback rehearsal.** Compose two capabilities of different profiles, release, induce
  failure, execute the multi-object rollback, checksum every object. Primary test of I-P14-1.
- **E-P14-2 — Horizon measurement.** Measure the actual recovery horizon of each object class.
- **E-P14-3 — ComputeSDK portability.** Compare provider primitives for memory-preserving pause
  across at least two providers. Resolves X-P14-1.
- **E-P14-4 — Attribution instrumentation.** Determine the minimum identifier set that yields
  per-capability attribution, and whether donors can carry it without forking.
- **E-P14-5 — K-version schema.** Sustain three long-lived schema versions with per-app pinning.
- **E-P14-6 — Preview/production parity.** Diff the preview artifact against the released artifact.

## 13. Decision gates

| Gate | Question | Pass | Fail |
|---|---|---|---|
| GP14-A | Does multi-object rollback work? | Every object restored with checksum parity | Do not release compositions containing that object class |
| GP14-B | Is the abstraction honest? | Memory-pause preserved across providers | Drop the abstraction and accept E2B lock-in explicitly, or drop the property |
| GP14-C | Is attribution achievable? | ≥80% of induced failures attributed correctly | Per-capability learning (P15) is not feasible; redesign |
| GP14-D | Do K schema versions hold? | Three versions sustained | Force lockstep upgrades and price that constraint |

## 14. What this document refuses to claim

- Nothing has been built, deployed, executed or rolled back. `admitted_blocks = 0`.
- No SLA page or published postmortem was retrieved for any surveyed vendor; `production_evidence`
  means documented mechanics and disclosed limitations, which is weaker than the dispatch required.
- The commercial denominator is **incomplete** (20 at wave-1, extended in wave-2 but still short of
  ~100); the OSS denominator was zero at wave-1 and is being rebuilt in wave-2. The depth contract is
  **unmet** for this part and the shortfall is recorded, not concealed.
- The Caddy distributed-storage risk is secondary-sourced and unconfirmed.
- Daytona's disqualification was not re-tested this wave; the prior stands unexamined.
