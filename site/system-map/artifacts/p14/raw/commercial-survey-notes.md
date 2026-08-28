# P14 — Commercial runtime, verification and release survey

Run: `2026-08-27-sprint-1-fable` · Observed date: 2026-08-27 · Research-only (no cloning, no execution, no signups)

## Headline: this run is incomplete and the denominator is 20, not ~100

The task asked for a census of roughly 100 commercial surfaces. **This run reached 20.** The run
was terminated early by a hard model rate limit (`You've reached your Fable 5 limit`) that stopped
all further web search after the tenth search call. The limit was confirmed non-transient by a
retry.

I have deliberately **not** padded the census to look complete. Every record in
`top-companies.jsonl` corresponds to a surface I actually read a page for on 2026-08-27. The named
surfaces from the brief that were **not surveyed at all** are listed under "Not surveyed" below and
must be picked up by a follow-up run before this part can be called done. The top 10 below is
therefore a **top 10 of 20 surveyed**, not a top 10 of the market, and should be re-ranked once the
census is complete.

## Method

1. Subcategory-by-subcategory web search to identify candidate surfaces and locate first-party docs.
2. Direct `WebFetch` of first-party documentation for load-bearing claims — rollback mechanics,
   runtime limits, snapshot semantics, TLS issuance — rather than trusting the search summary.
3. Every record carries an `evidence_class`. `first_party_docs` means I read the vendor's own docs
   page. `secondary` means the claim rests on vendor blogs, comparison posts, or third-party
   reviews, and is flagged as unverified in the record's `limitations`.
4. Where a vendor's marketing and its own documentation disagreed, I recorded the disagreement
   rather than picking the more flattering version (see Northflank, below).

A caution on sources: search results for this topic are heavily polluted by competitive vendor
blogs — Northflank, Blaxel, Beam, Morph, ZenML and OpenComputer all publish "E2B alternatives"
content that ranks above primary documentation. None of that material was treated as evidence.

## Denominator and subcategory counts

**Exact denominator surveyed: 20.**

| Subcategory | Surveyed | Target balance | Shortfall |
|---|---|---|---|
| `sandbox` | 5 | ~17 | E2B, Vercel Sandbox, Cloudflare Sandbox SDK, Modal, Runloop, Blaxel |
| `paas` | 4 | ~14 | Vercel deployments, Fly.io, Render, Netlify, Northflank |
| `release` | 2 | ~11 | LaunchDarkly, Statsig |
| `verification` | 2 | ~13 | Checkly, QA Wolf |
| `observability` | 0 | ~10 | none surveyed |
| `data_migration` | 2 | ~8 | PlanetScale, Neon |
| `edge_tls` | 3 | ~6 | Cloudflare for SaaS, Caddy on-demand TLS, Approximated |

(Counts sum to 18 vendor names across 20 records because Vercel appears twice — Sandbox and
deployments are separate surfaces with different mechanics — as do the counts above.)

**Not surveyed** (named in the brief, zero coverage this run): Railway, Heroku, DigitalOcean App
Platform, AWS Amplify/App Runner, Google Cloud Run, Azure Container Apps, Porter, Coolify Cloud,
Dokploy Cloud, Sevalla; Morph, Together/CodeSandbox SDK, StackBlitz WebContainers, CodeSandbox,
Replit; Browserbase, Steel.dev, Anchor, Hyperbrowser; Flagsmith, Split, Unleash, Harness,
Argo/Akuity, Octopus Deploy, Spinnaker vendors, GitLab/GitHub environments, Buildkite; Momentic,
Ranger/testdriver-style AI QA, Percy, Chromatic, Applitools, Argos, Datadog Synthetics, Grafana k6;
**the entire observability/incident subcategory** (Datadog, Sentry, Honeycomb, Grafana Cloud, New
Relic, incident.io, PagerDuty); Supabase branching, Xata, Prisma; SaaS Custom Domains, Vercel
custom domains API.

The observability gap is the most consequential. The brief's attribution-of-failure-per-component
angle is central to Actionist's problem — when a released composition of heterogeneous capabilities
misbehaves, knowing *which* capability broke is the whole game — and this run produced **no
evidence on it whatsoever**.

## Top 10 (of the 20 surveyed)

| # | Surface | Category | Why it is informative for Actionist |
|---|---|---|---|
| 1 | E2B | sandbox | Pause/resume preserves filesystem **and memory**; resume ~1s, pause ~4s/GiB. Lets a whole donor application be suspended and revived, which is what makes per-capability preview affordable across mixed shapes. |
| 2 | Vercel deployments | paas | ~1s traffic reroute to an immutable prior deployment, but docs state env vars and config are **not** reverted. The clearest commercial proof that artifact rollback ≠ composition rollback. |
| 3 | Fly.io | paas | Most honest first-party account of rollback's limits; warns images may be **pruned**, which directly threatens any "pin the composition" guarantee. |
| 4 | Vercel Sandbox | sandbox | Most precisely documented quota surface found (ports, vCPU, session length, snapshot TTL) — the best reference for sizing Actionist's own runtime profiles. |
| 5 | Render | paas | Only surface whose preview unit is an entire multi-service, multi-datastore environment. Tag-vs-digest rollback distinction is the most transferable detail in the survey. |
| 6 | LaunchDarkly | release | Rollback triggered by measured regression (sequential testing) rather than a human noticing; shape-independent because it acts at flag evaluation. |
| 7 | Netlify | paas | Crispest definition of atomic release: nothing serves until assets, functions, redirects and config are all ready. Locked deploys prevent a later build undoing a rollback. |
| 8 | Checkly | verification | The **same** Playwright spec gates the release and monitors production, so verification and observation cannot drift. Directly answers "verify complete workflows, not builds". |
| 9 | PlanetScale | data_migration | Makes the database half of a composition revertable — the gap Fly and Render explicitly disclaim. 30-minute revert window is a hard planning constraint. |
| 10 | Cloudflare for SaaS | edge_tls | Managed counterweight to the Caddy prior; shows hostname routing and certificate issuance are independently failing subsystems. Wildcards are Enterprise-only. |

## Do the priors survive?

### E2B behind the MIT ComputeSDK provider contract — survives, with a caveat

E2B's documented capability is the best fit among the five sandboxes surveyed for Actionist's
hardest case, a donor application with expensive warm state. The memory-preserving pause is a real
differentiator: Modal's equivalent is explicitly early preview, expires after 7 days with no
extension, can only restore on the same instance type, and **terminates the sandbox when
snapshotting** (first-party docs). Vercel Sandbox is better documented on quotas but is explicitly
documented as unsuitable for continuous hosting.

The caveat is cost governance, not capability: E2B's docs state paused sandboxes are retained
**indefinitely** with no auto-kill-after-N-days setting, so snapshot storage accrues until an
explicit `kill()`, which is permanent and unresumable. Every competitor surveyed has a default TTL
(Vercel 30 days after last use; Modal 30 days for filesystem, 7 for memory). Actionist must
implement the reaping policy E2B does not provide.

The **provider-contract half of the prior is untested by this run.** I surveyed capability, not
portability. The value of ComputeSDK is the ability to swap providers, and I did not verify that
Modal, Vercel and Cloudflare expose compatible primitives — indeed the evidence gathered suggests
they do not: memory-state pause/resume is an E2B and Blaxel property that Modal offers only in
preview and Vercel does not document in the same terms. A contract abstracting all of them likely
degrades to the filesystem-snapshot lowest common denominator, which would forfeit exactly the
property that justified choosing E2B. **This is the single most important open question from the
run** and needs a dedicated comparison of provider primitives.

### Caddy on-demand TLS — survives on mechanism, but one material risk surfaced

The mechanism is sound and well documented: an `ask` endpoint gates issuance, and it is cold-path
because subsequent requests for a known hostname skip it until renewal.

Two risks, both of which I want to flag as **not confirmed against Caddy's own module docs** —
they came from community and secondary sources in this run:

1. **Distributed certificate storage may require a custom Caddy build.** Shared storage backend
   modules are reported not to ship in official builds. If true, a multi-node Caddy fleet is a
   build-and-maintain-your-own-binary commitment, not a config change. For a single-node edge this
   is irrelevant; for a fleet it changes the build-vs-buy calculus materially.
2. The `ask` directive sends a plain GET, so the only practical way to attach a secret is in the
   URL.

Cloudflare for SaaS is the credible buy-side alternative and demonstrates what managed issuance
provides (dual ECDSA/RSA chains for browser compatibility), but gates wildcards, CA selection and
custom certificate upload behind **Enterprise**. Verify risk (1) against Caddy's documentation
before treating the prior as settled.

### Daytona disqualification — not re-tested

No evidence gathered this run. The prior stands unexamined.

## Five strongest production-evidence findings

1. **Vercel disables production-domain auto-assignment after a rollback.** Otherwise the next push
   to the production branch silently replaces the rolled-back deployment — a failure mode you only
   learn about from an incident. Actionist should copy this behaviour outright.
2. **Fly.io warns that images not deployed recently may be pruned**, and recommends an external
   registry for durable rollback targets. A pinned composition reference is worthless if the
   artifact is garbage-collected; artifact retention must be owned, not inherited.
3. **Render re-pulls by tag on rollback and may get a different image.** Their docs state digests
   are required for predictable rollback. This is the concrete mechanism behind "exact composition".
4. **LaunchDarkly rolls back on sample ratio mismatch whether or not the customer enabled automatic
   rollback.** The vendor overrides the operator to protect correctness — a strong maturity signal
   and a defensible pattern for Actionist's own guardrails.
5. **PlanetScale's schema revert is a bounded dual-write window (30 minutes), not unlimited undo.**
   Combined with (2), this establishes that a composition has *two different rollback horizons* —
   artifact and schema — and the shorter one governs what is genuinely recoverable.

Runner-up worth recording: **Modal's docs disclose that snapshotting terminates the sandbox, that
background processes from `exec` are not properly restored, and that open TCP connections close.**
Vendors that document their own sharp edges this plainly are more trustworthy than vendors with
cleaner-looking claims.

## Unknowns and corrections

- **Northflank rollback is contested.** Vendor feature pages claim one-click rollback of a release
  or an entire pipeline stage. The first-party `run-and-manage-releases` doc I read describes no
  dedicated rollback control; the closest mechanism is re-triggering a prior run with the same
  configuration and arguments. The docs also do not state whether a run captures image **digests**,
  which is exactly what would make a re-trigger equivalent to a composition rollback. Recorded as
  unverified; do not quote "one-click rollback".
- **Statsig has no documented automatic rollback.** Its posture is threshold-based alerting. Its
  own docs state Autotune optimises a single metric only and is not reliable for secondary effects.
  Excluded from the top 10 on that basis.
- **Blaxel and QA Wolf records are `secondary` throughout** — docs.blaxel.ai and docs.qawolf.com
  were not fetched. Every figure in those records (25ms resume, 80% coverage guarantee, zero-flake
  guarantee) is vendor marketing and must not be quoted to the client.
- **No observability evidence at all**, so the attribution-of-failure-per-component question is
  entirely open.
- **No SLA pages or published postmortems were retrieved** for any surface. "Production evidence"
  in these records means documented operational mechanics and disclosed limitations, which is a
  weaker standard than the brief's "documented postmortems, SLA pages". Where a claim would need an
  SLA to support it, the record says `none_found`.
- Vendor comparison content dominates search results for this topic; a follow-up run should fetch
  primary docs directly rather than searching, wherever the vendor URL is already known.

## Recommended follow-up

A second run should (a) cover the observability/incident subcategory, which is the largest
substantive gap; (b) compare ComputeSDK provider primitives across E2B, Modal, Vercel and
Cloudflare to test whether the abstraction preserves memory-state pause/resume; (c) confirm the
Caddy distributed-storage build requirement against first-party module docs; and (d) close the
remaining ~80 surfaces to establish a real denominator.
