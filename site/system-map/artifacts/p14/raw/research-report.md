# P14 — Runtime, verification and release: research report

Part: P14 · Lane: S1-L5 · Run: 2026-08-27-sprint-1-fable
Author: ACTIONIST-S1-L5-RUNTIME · Recorded 2026-08-27
Status: research only · DESIGN_ONLY · UNEXECUTED · NOT_ADMITTED · admitted_blocks 0
Depth contract: **partially met** — exact denominators in §2.

---

## 1. Result in one paragraph

Every commercial system surveyed treats rollback as reverting one object — usually a code artifact —
while a composed application has many independently-recoverable objects, each with its own recovery
horizon. This was derived twice independently: from vendor documentation (Vercel does not revert
environment variables or configuration; Fly does not revert `fly.toml`, secrets or migrations) and
from SISO's own operated donor-fork standard ("Data rollback is separate"), which additionally names
a third object no vendor surfaced (a standing alternate UI route). Separately, the failure-attribution
census established that only 4 of 29 observability surfaces can attribute a fault across a boundary
into someone else's code — precisely Actionist's case — and produced a derived **minimum
instrumentation contract** that belongs in the HostContract rather than being retrofitted later.
The sandbox decision inherited from prior work survives on capability but its portability premise is
untested and is the part's top open question.

## 2. Denominators — exact, and honestly short

| Survey | Achieved | Target | Met? |
|---|---:|---|---|
| Commercial surfaces | **49 records** (20 wave-1 + 29 wave-2 observability/incident/release/verification) | ~100 | **No** |
| OSS projects | **45+** at time of writing (wave-2 in progress; wave-1 produced zero) | ~100 | **No** |
| Innovations | **100** (10 ranked) | ~100 | Yes |

Cause: an account-wide model usage limit terminated wave-1 after roughly ten search calls. Wave-2
recovered the observability gap and rebuilt the OSS survey. **No padding** — every record is a page
actually read on 2026-08-27.

Commercial subcategories: sandbox 6, paas 5, edge_tls 3, release 10, verification 7, data_migration 2,
observability 12, incident 4. Wave-2 disposition: 27 census, 2 excluded.

Still uncovered: Railway, Heroku, DigitalOcean, AWS, GCP, Azure, Porter, Coolify, Dokploy, Sevalla;
Morph, CodeSandbox, StackBlitz, Replit; all browser sandboxes; Octopus, GitLab environments,
Buildkite, Spinnaker; Applitools, Autify, Reflect, Argos, Opsgenie, Akuity.

## 3. Rollback is not one object (primary finding)

**Vendor evidence.** Vercel reverts traffic in roughly one second but its documentation states
environment variables and configuration are not reverted. Fly.io states the same for `fly.toml`,
secrets and migrations.

**Operated evidence.** SISOCRM's donor-fork standard, written against a real AGPL-3.0 donor mounted in
production: "Revert the parent commit to restore the previous pinned donor revision. **Data rollback
is separate**: restore the pre-migration database dump." It then names a third object — Teable retains
`/tables-native` as a temporary UI rollback while `/tables` is canonical.

Two independent derivations reaching the same structure is the strongest evidence in this lane.

**Rollback objects identified:** code artifact · configuration · secrets · database schema · data ·
donor revision · surface route · connector/credential state.

Consequence: `RollbackPlan` cannot be a boolean. It must enumerate objects, each with a restore
procedure and a recovery horizon.

## 4. Recovery horizons

PlanetScale's schema revert is a bounded window — roughly 30 minutes of dual-write — while artifact
rollback has no such bound. **The composition's true recoverability is the minimum horizon across its
objects**, and that number must be computed and displayed at release time rather than discovered
during an incident.

## 5. A pin is not a pin

Render re-pulls by tag on rollback and may obtain a different image; digests are required for
predictability. Fly warns that images not recently deployed may be pruned. Therefore: pin by content
digest **and** retain the artifact in Actionist-owned storage for at least the declared horizon. A
pinned reference to an artifact a third party may garbage-collect is not a recovery path.

## 6. Failure attribution — the census and its derived contract

P14's open question "How are failures attributed per capability?" was answered by a dedicated pass over
29 observability/incident/release/verification surfaces.

**Granularity distribution (the finding):** of 29 surfaces, **8 stop at `service`, 7 at `deploy`, and
only 4 reach `dependency`.** Most of the market attributes to a deploy unit or a service name. Almost
nothing attributes *across a boundary into someone else's code* — which is exactly the intact-donor
case Actionist must handle.

Reaching `dependency`: Dynatrace Davis (fault-tree over Smartscape topology), Honeycomb BubbleUp
(selection vs baseline over field values), Datadog APM (dependency node scoping), Elastic APM service
map (trace-derived, with its failure mode stated).

**Two vendor claims were deliberately downgraded** rather than recorded at face value: Datadog Error
Tracking's "which commit probably caused the error" documents no fingerprinting algorithm and never
mentions service or version attribution; Datadog Synthetics asserts automatic rollback but specifies
no exit code, blocking flag or mechanism. Both are recorded weaker than Sentry's documented blame
algorithm and Harness/Argo's spelled-out abort semantics.

### The minimum instrumentation contract (primary deliverable)

Derived by intersecting what vendors *require* before attributing anything — Grafana's five OTel
resource attributes, Datadog's Unified Service Tagging, Elastic's `traceparent` requirement, Harness's
Service Instance Identifier, incident.io's routing attribute. Every one is the same requirement in a
different vocabulary. Actionist's **HostContract** must therefore carry, for every composed capability:

1. **A stable capability identifier on every signal** — not a display name or URL; survives redeploy;
   identical across the deploy system and telemetry. New Relic supplies the inverse warning: an app
   reporting as multiple entities "may produce duplicate groups", and their fix (consolidate to one
   entity) is exactly what a composed app must *not* do. **Capability identity must be deliberately
   plural where the app is one thing but the capabilities are many.**
2. **Deploy/release correlation per capability — version and environment.** Must be per capability,
   not per app: Sentry release health scores a whole release, and Rollbar's suspect deploy is "the last
   deploy prior to the first occurrence", a temporal heuristic that will systematically blame the wrong
   capability when capabilities deploy independently — which Actionist does by design. App-level
   correlation here is not merely weaker, it is actively misleading.
3. **Trace context propagated across every capability boundary.** This is what buys `dependency`-level
   attribution and the item most likely to be skipped because it costs something at every seam. Elastic:
   without propagation "the connection will not be drawn on the map". **The failure is silent** — an
   uninstrumented capability does not appear as a gap, it simply does not appear.
4. **Ownership metadata resolvable from the identifier.** PagerDuty and incident.io both *consume* an
   attribution decision rather than computing one. incident.io's contract enforcement is the model:
   required attributes make the system warn when alert sources lack them. Actionist should enforce the
   capability identifier **at admission time**, not discover at incident time that a capability is anonymous.
5. **A per-capability health assertion with machine-readable pass/fail.** k6 is the template —
   tag-scoped thresholds yielding exit codes — with the warning that checks alone "do not affect the
   exit status", so the assertion must be a threshold, not an observation. **A capability that cannot
   state its own pass/fail cannot be automatically rolled back.**

Items 1, 2 and 4 are cheap metadata and should be mandatory. Item 3 is the expensive one and should be
a costed decision, not an omission. Item 5 is what makes per-capability rollback automatable.

**Admission criterion derived:** a capability Actionist cannot instrument caps the whole system's
attribution at the call boundary. Vercel shows the happy path (platform-owned runtime supplies
`deploymentId`, `requestId`, `invocationId`, route and branch free); Dynatrace shows the agent route.
An intact hosted donor grants neither, and the best achievable is `endpoint`-level attribution from the
caller's side. **Instrumentability should therefore be a capability admission criterion**, because it
determines in advance whether that capability can ever be blamed correctly.

## 7. Runtime profiles — the v1 answer

Derived from packaging mode rather than chosen: **package-in-host, microfrontend, sidecar service,
worker, scheduled job**. Full table in `first-principles.md` §6. The sidecar row is where heterogeneity
bites: it is the only profile where a third party owns migrations, and therefore the only one whose
recovery horizon is not ours to set.

## 8. Verification

The local donor standard's required-proof list is directly reusable and is workflow-shaped rather than
build-shaped: submodule resolves at the pinned commit; donor health; full-page SSR; host-session login;
logout revocation; realtime subscription; CRUD on records and fields; views, filters, sorting and
hidden fields "against real persisted data"; database backup before any bridge migration; persistence
after a database restart; host and fork tests; human visual pass before sign-off.

Layered on top: eight declared UI states, fifteen negative paths N01–N15, and a two-tenant isolation
fixture with `cross_tenant_leakage => NO_SHIP`.

**Automatic rollback vs alert-only:** nearly the entire observability market stops at notification.
Systems with documented abort semantics (Harness CV, Argo Rollouts) are the exception, and in Argo's
case the customer-supplied query does the actual attributing.

## 9. Prior-conclusion verdicts

| Prior | Verdict |
|---|---|
| **E2B as sandbox provider** | **Survives on capability.** Memory-preserving pause (~1s resume, ~4s/GiB pause) beats Modal (snapshots preview-only, 7-day expiry, same-instance-type only, snapshotting *terminates* the sandbox) and Vercel Sandbox (documented unsuitable for continuous hosting). |
| **E2B operational caveat** | E2B retains paused sandboxes **indefinitely with no auto-kill setting** — the reaping policy is ours to own or it is a recurring cost leak. |
| **ComputeSDK provider contract** | **RESOLVED AGAINST THE PRIOR — do not adopt as the load-bearing abstraction.** Wave-2 read the source: the canonical `universal-sandbox.ts` interface declares no `pause`/`resume`/`suspend`, and its `status: 'running' \| 'stopped' \| 'error'` enum cannot represent a paused sandbox. The E2B provider never passes `keepMemory`, so the memory-preserving path is unreachable through it. A provider author's own comment concedes `getInstance()` is an "escape hatch" to the stateful API "that ComputeSDK's core surface does not model". The abstraction degrades to exactly the filesystem lowest-common-denominator feared, and **the failure is silent** — code compiles and runs, previews just cold-boot. Options: bind directly to E2B and accept lock-in; use ComputeSDK for exec/filesystem and drop to `getInstance()` for pause (per-provider code, per-provider testing); or define a narrow Actionist interface with pause/resume as a required primitive. |
| **Caddy on-demand TLS** | Survives on mechanism (ask-endpoint gating, cold path after first issuance). Risk: shared certificate-storage backends reportedly not in official builds, so a multi-node fleet may need a custom binary — **secondary-sourced, unconfirmed**. |
| **Cloudflare for SaaS** | Credible buy-side option; gates wildcards and CA selection behind Enterprise. |
| **Daytona disqualification** | Not re-tested this wave; prior stands unexamined. |

## 10. Corrections carried forward

- **Do not quote "Northflank one-click rollback."** Vendor feature pages claim it; the first-party
  run-and-manage-releases doc describes only re-triggering a prior run and does not say whether runs
  capture image digests.
- **Statsig has no documented automatic rollback** (alerting only, single-metric optimisation by its
  own docs) — excluded from the top 10.
- **Blaxel and QA Wolf** records are secondary-sourced throughout; headline figures are marketing.
- **No SLA page or published postmortem was retrieved for any surface.** `production_evidence` here
  means documented operational mechanics and disclosed limitations — weaker than the dispatch required.
  Records say `none_found` where an SLA would be needed.

## 11. Top 10 commercial surfaces (wave-1 ranking; re-rank pending census completion)

1. E2B · 2. Vercel deployments (Instant Rollback, Promote, Rolling Releases) · 3. Fly.io Machines ·
4. Vercel Sandbox · 5. Render · 6. LaunchDarkly (Guarded Rollouts, Release Pipelines) · 7. Netlify ·
8. Checkly · 9. PlanetScale safe migrations · 10. Cloudflare for SaaS.

This ranking predates the observability pass and does not yet reflect Honeycomb BubbleUp, Dynatrace
Davis or Harness CV, all of which are strong on the attribution axis that the observability pass showed
to be central. **Treat as provisional.**

## 12. Wave-2 resolutions (both prior open questions closed)

**ComputeSDK portability — resolved against the prior recommendation.** See §9. The abstraction cannot
express memory-preserving pause; the interface has no `pause`/`resume` and its status enum cannot
represent a paused sandbox. This overturns the inherited "LIFT the ComputeSDK contract" conclusion.

**pgroll / reshape concurrent-version count — the prior local audit was correct, and the limit is
worse than stated.** Both hold exactly two versions live, verified from each project's own docs. The
mechanism explains it: pgroll propagates writes to "its counterpart", singular. Critically, that K=2
window is **transient by design** — it exists only between `start` and `complete`, completing drops
the old version, and after completion rollback is impossible. Actionist needs K versions *long-lived*
across independently-upgrading clients, so the gap is two-dimensional (count and duration). The
versioned-view primitive is sound and independently converged on by both projects; Actionist would be
extending validated prior art, but it must be planned and costed as an extension, not assumed to be a
configuration option. Licences (Apache-2.0, MIT) permit the work.

## 13. What this report does not establish

- Nothing built, deployed, executed or rolled back. `admitted_blocks = 0`.
- Commercial denominator 49 of ~100; OSS 80 of ~100. Depth contract **unmet** for both.
- The ComputeSDK finding is a static read of the interface at `main` on 2026-08-27; no execution
  against a live provider. (The finding does not depend on runtime behaviour — a method absent from an
  interface cannot be called through it.)
- Caddy distributed-storage risk unconfirmed.
- Daytona prior unexamined this wave.
- No SLA or postmortem evidence for any surface.
