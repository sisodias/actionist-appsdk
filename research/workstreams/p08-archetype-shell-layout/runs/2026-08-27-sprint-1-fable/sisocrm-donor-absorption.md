# SISOCRM donor absorption — a built estate tested against the lane's absorb-vs-preserve rule

Research-only inspection, 2026-08-27. Read-only; nothing in SISOCRM was modified.

**Why this estate matters to P08.** SISOCRM is the only local place where the lane's
absorb-vs-preserve rule can be checked against decisions somebody actually made under
real constraints — a shipped shell with working code, patch files, and machine-checked
route tests — rather than argued from first principles.

**Headline: the estate contradicts the lane on two load-bearing points.** The claim of
"zero donor-named nav entries" is false as built (`Tables` is a rail destination), and
the host-vs-donor split is not decided by capability-vs-destination at all. It is decided
by whether the surface needs to share a **CSS cascade and a session** with the host. That
is a mechanical boundary, not a semantic one.

**Estate paths.** Documents: `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/verticals/business-broker/`.
Built shell: `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/product-app/`.

**A note on document age.** The design documents date 2026-07-30 to 2026-08-01; the built
shell files date to 2026-08-02. Where they disagree, this report treats the **code** as
what was actually decided and the document as an earlier intention. Several of the
contradictions below are of exactly that shape, and the lane should read them as "the
plan lost to the build," not as sloppiness.

---

## Q1 — Nav structure as built

**Verdict: the "11 host-owned pages" claim is CORRECT in spirit but wrong in count, and
the "zero donor-named nav entries" claim is CONTRADICTED.** (observed)

The rail is defined in one place, as a literal array — `product-app/src/components/GroupedRail.tsx:43-65`,
exported as `RAIL_GROUPS`. I counted from that source rather than from any document.

**Derived from source: 4 groups, 13 destinations.** Nesting verified by reading the whole
array — each `destinations: [...]` is closed before the next group object opens, so no
label is paired across a brace boundary:

| Group (`id`, line) | Destinations (`label` → `to`) |
|---|---|
| `overview` (:44) | Dashboard → `/dashboard`; Calendar → `/calendar` |
| `brokerage` (:48) | Deals → `/deals`; Buyers → `/buyers`; Sellers → `/sellers` |
| `operations` (:53) | Tasks → `/tasks`; Documents → `/documents`; **Tables → `/tables`**; AI → `/ai`; Reports → `/reports` |
| `company` (:60) | Marketing → `/marketing`; Team → `/team`; Settings → `/settings` |

Two further destinations sit outside the groups in `GLOBAL_UTILITIES`
(`GroupedRail.tsx:67-70`): `Needs you` → `/attention` and `New deal` → `/deals/new`. These
are utility actions, not pages, and `attention` is rendered as a button that opens a
panel, not a `NavLink` (`GroupedRail.tsx:170-180`).

**Reconciling with the frozen skeleton.** `FROZEN-PAGE-SKELETON.md:8-19` lists exactly 11
page rows: Dashboard, Deals, Buyers, Sellers, Tasks, Documents, Calendar, Reports,
Marketing, Team, Settings. All 11 exist in the built rail. The built rail adds **two the
skeleton never listed**: `Tables` (:56) and `AI` (:57). So: 11 planned pages all shipped,
plus 2 unplanned ones. 13 total. (observed)

**The donor-named-nav contradiction.** `Tables` is a top-level rail destination with its
own icon (`Table2`) and route. `TEABLE-ABSORPTION-BRIEF.md:16` explicitly rules this out:

> | ~~A "Tables" page~~ | **No.** A separate tables page becomes a second silo nobody updates |

and `:18`: "The broker never clicks 'Tables'." As built, the broker has a rail entry
labelled Tables and clicks it. `pageNames` (`App.tsx:30`) even names it, and the
runtime route table gives it `"launcherLabel": "Tables"`
(`integrations/combined-route-runtime.json`, `routes.tables`).

"Tables" is arguably a generic capability word rather than the donor's proper name
(the vendor is Teable, not Tables) — but the *brief's own prohibition* was against a
Tables page by that name, and it lost. **Recorded as a contradiction, not a quibble.** (observed)

**Machine-checked, not just asserted.** The rail count is exposed for verification:
`data-verify-nav-groups={RAIL_GROUPS.length}` (`GroupedRail.tsx:108`) and
`data-verify-compact-destinations={destinations.length}` (`:144`), the latter computed by
flattening the groups (`:138`). Collapsed and expanded rails render the same destination
set — the file's own header comment says collapsing "never changes what the navigation
means" (`GroupedRail.tsx:5-6`).

---

## Q2 — Per-donor absorb-vs-preserve

Three distinct modes are in evidence, and the estate names them itself via
`data-verify-reuse-mode` attributes. That vocabulary is the estate's, not mine.

| Donor | Nav treatment | Mode | Receipt |
|---|---|---|---|
| **Teable** | **BOTH** — absorbed *and* preserved, simultaneously, on two routes | `source-owned-fork-submodule` | `App.tsx:410`; `App.tsx:168` |
| **AFFiNE** (as "SISO Docs") | PRESERVED in-pane, donor identity erased | `source-owned-fork-submodule` | `App.tsx:239-241` |
| **Twenty** | **NO UI SURFACE** — manifest and scripts only, no runtime | n/a | see below |
| **Plane** | **NO UI SURFACE** — submodule present, shell not used | n/a | `.gitmodules`; `platform/package.json:2` |
| **Documenso** | Intact service, no rail entry | service | `combined-route-runtime.json` `routes.signatures` |
| **Activepieces** | **UNKNOWN — absent** | — | see below |
| *(Postiz)* | PRESERVED in-pane, donor named in UI | `intact-separate-origin` | `App.tsx:128-133` |
| *(OpenWork)* | PRESERVED in-pane, donor named in UI | `intact-separate-origin` | `App.tsx:326-333` |

**Teable is the interesting case — it is on both sides of the line at once.** (observed)

- `/tables` renders `TablesCanvas`, a cross-origin **iframe** to `127.0.0.1:3052`
  (`App.tsx:183-190`), header text "Teable tables" (`App.tsx:174`) — donor **preserved and
  named**.
- `/tables-native` renders `TeableGrid` **natively mounted** in the host React tree
  (`App.tsx:410`), no iframe. The test asserts `expect(surface.querySelector("iframe")).toBeNull()`
  (`App.test.tsx:127`) — donor **absorbed**.
- Teable's own grid was vendored into the host source tree at
  `product-app/src/domains/teable/grid/`, with a `stubs/` directory of ~30 files replacing
  Teable's Next.js context (`next-router.ts`, `next-i18next.ts`, `ShareContext.tsx`,
  `feature-flags.ts`).

So the same donor is preserved on one route and absorbed on another, **at the same time**,
with the native one labelled "temporary fallback" in the test name (`App.test.tsx:119`).
The direction of travel is toward absorption (see Q5).

**Teable also supplies three host-chrome surfaces without owning any of them:**
Settings (`App.tsx:262-263`, framing `/siso/settings`), Notifications
(`App.tsx:309`, framing `/siso/notifications`), and admin (`App.tsx:262`). The broker
reaches Settings from the SISO rail; Teable renders the panel. The donor is invisible as a
brand while supplying the surface.

**AFFiNE's donor identity is fully erased.** The submodule is named `siso-docs`, the
manifest records `"upstream": "https://github.com/toeverything/AFFiNE.git"`
(`integrations/affine-client.json`), and the UI says only "SISO Docs" — `DocsCanvas`
renders **no header at all** (`App.tsx:236-253`), unlike Postiz and OpenWork which both
render "Intact subsystem" + donor name. AFFiNE is the most thoroughly absorbed *identity*
while still being iframe-preserved *mechanically*. (observed)

**Twenty has no runtime.** `integrations/twenty-intact.json` declares
`"runtimePath": ".twenty-runtime"`, but `ls .twenty-runtime` → *No such file or directory*.
`.twenty-tools/` exists (a pinned Node 24.16.0 and yarn 4.13.0 — toolchain only). Scripts
`setup-twenty.sh`, `dev-twenty.sh`, `status-twenty.sh` exist. `combined-route-runtime.json`
declares a `crm` route owned by Twenty, but **no `/crm` route exists in `RAIL_GROUPS` or in
`App.tsx`'s `pageNames`**. Twenty is planned and provisioned, not built. (observed)

**Plane is the host that never was** — see Q3.

**Activepieces: genuinely absent.** It appears in `FROZEN-PAGE-SKELETON.md:13` (folded into
Tasks) and `OWNERSHIP-AND-DATA-LAYER-DECISIONS.md:100` ("SERVICE — downstream"). It has no
manifest in `integrations/`, no patch in `integrations/patches/`, no script in `scripts/`,
and no route. Marked **unknown/not-started**, not "decided against." (observed absence)

---

## Q3 — Testing the lane's rule

> Lane hypothesis: "absorb when the donor supplies a CAPABILITY; preserve when it supplies
> a DESTINATION," and "data-model nav preserved in-pane; workflow nav absorbed."

**Verdict: the estate CONTRADICTS the second clause and FAILS TO DISCRIMINATE on the
first. A different rule — a mechanical one — predicts this estate's behaviour better.**

**The clean contradiction.** The lane predicts *data-model nav preserved in-pane*. Teable
is the purest data-model donor in the estate — grids, views, fields, formulas. The estate
did preserve it in-pane at `/tables`… and then built a **native, non-iframe mount** at
`/tables-native`, vendoring ~30 stub files into the host tree to do it. That is the
opposite of the prediction, applied to the exact donor the prediction is about. (observed)

**And the reason given is not semantic.** `THEMING-CONTRACT.md:94-102`, under the heading
"Why this requires the native mount":

> "A cross-origin iframe is a hard CSS boundary — custom properties do not inherit across
> it. Inside a frame, this bridge cannot reach Teable's components at all… Natively
> mounted, the bridge is just cascade and it works. **This is the concrete reason the
> iframe had to go.**"

Nobody absorbed Teable because it supplied a capability rather than a destination. They
absorbed it because **design tokens do not cross an origin boundary** and the client wanted
themeable surfaces. (observed)

**The rule that actually predicts this estate.** Sorting every donor by observed treatment:

- **Absorbed (native mount)** when the surface must share the host's *CSS cascade* or its
  *session*: Teable grid (theming, per `THEMING-CONTRACT.md:94`), Teable settings and
  notifications (must appear as host chrome).
- **Preserved (iframe)** when the surface is self-contained and a hard boundary costs
  nothing: Postiz, OpenWork, AFFiNE, Documenso, Papermark.

Both Teable-the-grid and Postiz-the-scheduler are "capabilities" under the lane's
vocabulary, yet one is absorbed and one is iframed. The capability/destination axis does
not separate them. **Cascade-and-session coupling does.** (inferred, from the pattern plus
the explicit reason at `THEMING-CONTRACT.md:94-102`)

**Where the lane's rule survives.** The *nav* half holds up well. No donor's own navigation
was ever adopted into the rail — the rail is 100% host-authored, and donor chrome is
actively suppressed (Q4). If the rule is narrowed to "never inherit donor nav," the estate
confirms it unanimously. It is the absorb/preserve *mechanism* choice the rule mispredicts.

---

## Q4 — Host/donor boundary as practised

The host took **everything that is global**, and did so aggressively. (observed)

| Concern | Taken by | Receipt |
|---|---|---|
| **Identity / session** | **HOST, absolutely** | `LANE-AUTH-RESULT.md`: "Teable's login is deleted from the live `/tables` path… The browser receives neither a Teable cookie nor a Teable bearer token." |
| **Nav rail** | HOST | `GroupedRail.tsx:43-65`, sole source |
| **Settings entry** | HOST route, donor renders | `App.tsx:262-263`; `App.test.tsx:130-137` |
| **Global search** | **HOST, delegating inward** | `App.tsx:358-364`; `App.test.tsx:106-117` |
| **Notifications** | HOST trigger, donor panel | `App.tsx:309`; `App.test.tsx:147-157` |
| **Theming tokens** | HOST | `THEMING-CONTRACT.md:38-49` — "ONE mapping file… the only place Teable styling is defined" |
| **URL space** | HOST | `pageNames` (`App.tsx:22-39`) — flat host paths, no donor prefixes |
| **Tenant switch** | **UNKNOWN** | `workspaceId` threaded (`App.tsx:200`); no switcher UI found |

**Global search is the sharpest example of the boundary.** The host owns the ⌘K handler
(`App.tsx:370-379`). On host pages it opens the host's own palette. On donor routes it
**refuses to open its own UI** and instead posts a message into the donor frame
(`App.tsx:358-364`):

```js
const openSearch = React.useCallback(() => {
  if (["/tables", "/documents"].includes(location.pathname)) {
    window.dispatchEvent(new Event(MODULE_SEARCH_EVENT));
    return;
  }
  setSearchOpen(true);
}, [location.pathname]);
```

with delivery at `App.tsx:158` (`postMessage({ type: "siso:open-search" }, teableOrigin)`),
asserted per-origin in `App.test.tsx:106-117`. **One keystroke, host-owned, donor-serviced.**
Neither pure absorption nor pure preservation.

**What the donors kept: their internals, and nothing chrome-shaped.** Where a donor's own
chrome would be visible, it is deleted. `teable-siso-absorption.patch` adds
`data-siso-hide="settings"` to two sidebar lists and `data-siso-hide="footer"` to the
sidebar footer (patch lines 175, 188, 201), then hides them via CSS injected only when
framed (`_app.tsx` hunk, patch lines 234-248):

> "when framed by the host shell, hide the chrome that belongs to SISO instead — settings,
> trash, template, notifications and the profile dock. **The space switcher stays.**"

Note the surgical exception: the space switcher survives because the host has no tenant
switcher of its own. The same suppression appears in AFFiNE's patch, which removes
`AppDownloadButton`, `OpenInAppCard`, the cloud-sync button, and all OAuth providers
(`affine-siso-local.patch`, hunks at `root-app-sidebar/index.tsx` and
`modules/cloud/constant.ts:39`).

**The host also removed its own chrome on donor routes** — `isModuleRoute`
(`App.tsx:357`) suppresses the breadcrumb topbar entirely on `/tables`, `/documents`,
`/ai`, `/marketing`, `/settings`, asserted at `App.test.tsx:62-67`. The donor pane gets the
full canvas. Chrome is deduplicated from **both** sides, not just the donor's.

**A contradiction inside the boundary docs themselves.**
`OWNERSHIP-AND-DATA-LAYER-DECISIONS.md:95` rules "Shell / navigation rail — **OWN**… Already
replaced Plane's launcher," and `ABSORPTION-STRATEGY.md:107` lists Plane under "What stays a
service — **Plane — the host itself**." But the built shell is not Plane-derived at all.
`platform/package.json:2` confirms the submodule is `"name": "plane"`, v1.4.0, on branch
`siso/host-shell` — and `App.tsx` is a **standalone Vite + React Router app** with no Plane
code in its import graph. Meanwhile `combined-route-runtime.json` still declares
`"host": {"owner": "Plane", "description": "Plane-derived SISOCRM shell with one SISO
launcher per module"}` and a `/:workspaceSlug/projects` route that does not exist in the
rail. **The runtime route manifest describes a Plane-hosted architecture that the shipped
shell abandoned.** The host was rewritten from scratch rather than inherited. (observed)

---

## Q5 — Adaptation cost signals

**This is the estate's most valuable contribution to the lane: A07 ("adaptation is always
only 1-2% of the work") is measurable here, and it is FALSE as a universal — while being
roughly TRUE for iframe-preserved donors.** The cost splits cleanly by absorption depth.

**Derived by counting from source** (`wc -l` on `integrations/patches/*.patch`, then reading
each patch to count `diff --git` headers by eye — grep was unavailable):

| Patch | Lines | Files | What it buys |
|---|---|---|---|
| `documenso-siso-frame.patch` | **17** | 1 | one `frame-ancestors` CSP branch |
| `teable-siso-native-icons.patch` | 27 | 3 | rename `Array`/`Object`/`Boolean` → `*Icon` (TDZ fix) |
| `teable-siso-records.patch` | 30 | — | records wiring |
| `twenty-siso-local.patch` | **35** | 2 | two HTML markers + `process.exit(0)` |
| `papermark-siso-community.patch` | 62 | 2 | S3 path-style + conditional `X-Frame-Options` |
| `teable-siso-embed.patch` | 100 | 2 | CSP/frameguard for embedding |
| `affine-siso-local.patch` | 130 | 6 | strip telemetry, cloud, OAuth, download CTAs |
| **`teable-siso-absorption.patch`** | **273** | **9** | **host auth + schema-qualified tables + chrome suppression** |
| **Total** | **674** | | |

**The gradient is the finding.** Preserve-in-an-iframe costs 17-62 lines of CSP config.
Absorb identity and the data layer costs 273 lines across 9 files, touching the donor's
**auth strategy, SSR auth hop, DB provider, and public API schema**:

- `session.passport.ts` — host identity injected as a session fallback, with a comment
  recording a bug already paid for: *"Real session ALWAYS wins… overriding the session
  unconditionally breaks the SSR path (renders 'Page not found' on /space)."*
- `withAuthSSR.ts` — a second, separate patch because the SSR hop needed the same header
  independently.
- `postgres.provider.ts` + `packages/openapi/src/table/create.ts` — the regex
  `/^[a-z]\w{0,62}$/i` widened to `/^[a-z]\w{0,62}(\.[a-z]\w{0,62})?$/i` so a Teable table
  can address `siso.buyer_profile`. **A donor's public API validation schema was changed to
  make absorption possible.** That is upstream-divergence debt in the most literal place.

**Upgrade friction, priced in advance.** Every patch hunk carries an
`if (process.env.SISO_*)` guard so upstream behaviour is the default — an explicit strategy
for surviving merges, and itself a cost. `ABSORPTION-STRATEGY.md:111-119` states it plainly
under "Honest cost": *"Rewriting a data layer per donor means their models onto our schema,
their queries, their migrations, their background jobs, their file handling. **Not a
weekend each.**"* And: *"Upstream divergence is acceptable — a worker can read their diffs
later and port what is worth having. Not free, but not stuck."*

**No hour figures exist anywhere in the estate.** No timesheet, no effort estimate, no
story points. Cost is recorded only as patch size, changed-file count, and prose. The lane
should treat "no hours were ever recorded" as itself the finding: this team measured
adaptation cost in **diff surface against upstream**, which is arguably the better metric
for upgrade friction anyway. (observed absence)

**Forked routing and disabled donor routes, confirmed:**
- Teable login/session/access-token routes are **blocked with typed 403** at the host proxy
  (`LANE-AUTH-RESULT.md`).
- Papermark's Data Rooms, Q&A and advanced permissions are **disabled for licence reasons** —
  `combined-route-runtime.json` `routes.data-rooms.licenseBoundary`: *"Data Rooms, Q&A, and
  advanced permissions remain disabled and license-required."* Note the irony worth flagging
  to the lane: the route is *named* "Data Rooms" while data rooms are the disabled feature.
- Four donors run on **separate databases** (`separateDonorDatabases: true`, same file),
  despite `ABSORPTION-STRATEGY.md:1` promising "one app, one database." Another plan-vs-build
  divergence.

---

## Contradictions, collected

For the lane owner, the four that change conclusions:

1. **"Zero donor-named nav entries" is false as built.** `Tables` is a rail destination
   (`GroupedRail.tsx:56`) and a launcher label (`combined-route-runtime.json`), directly
   against `TEABLE-ABSORPTION-BRIEF.md:16,18`.
2. **"Data-model nav preserved in-pane" is contradicted by the estate's own direction of
   travel.** The purest data-model donor got a native non-iframe mount, and the recorded
   reason is CSS-token inheritance (`THEMING-CONTRACT.md:94-102`), not capability vs
   destination.
3. **The absorb/preserve axis is mechanical, not semantic.** Cascade-and-session coupling
   predicts this estate; capability-vs-destination does not discriminate Teable from Postiz.
4. **A07 is false as a universal and true in a bounded region.** Iframe preservation really
   is ~1-2% (17-62 lines). Identity-and-data-layer absorption is an order of magnitude more
   (273 lines, 9 files, a changed public API regex) — and the estate's own strategy doc says
   "not a weekend each."

Plus one for the record: the **host is not Plane**, though three documents and the live
runtime manifest still say it is.

## Blockers and limits

- **grep/rg/find blocked**, per lane rules. Navigation was `ls` + exact-path reads. Files
  and patches I read are quoted directly; I did **not** exhaustively prove absence of a
  string across the whole estate. Activepieces and the tenant switcher are reported as
  *unknown/absent from the paths I checked*, not as proven-absent.
- **Nothing was executed.** No build, no server, no browser. Route behaviour is read from
  `App.tsx` and from `App.test.tsx`'s assertions, which are checked-in expectations rather
  than an observed run.
- **`.teable-runtime/` and `.openwork-runtime/`** (full donor trees) were not read in
  depth — only their presence noted. A follow-up could diff `.teable-runtime` against the
  pinned upstream commit `06a4461e2bc53055182d4df0a72dffa26fd99210`
  (`integrations/teable-fork.json`) for a true total-divergence line count, which would
  price A07 far more precisely than the patch files alone.
- **No hour or effort data exists** in the estate (reported as a finding, not a gap I
  failed to close).
