# P10 — Identity / Settings / Navigation: OSS Survey Notes

Run: 2026-08-27, Sprint-1, lane S1-L4, part P10. Research only; nothing cloned or executed.

## Method

Every row was produced by fetching the live GitHub repo page on 2026-08-27 and reading
what it actually said. Where a license looked like it might be split, carved out, or
badge-vs-body divergent, the raw LICENSE body was fetched separately. Four licenses were
verified against the body rather than the badge: single-spa (raw LICENSE, MIT),
Appsmith (raw LICENSE read end-to-end for appended Commons-Clause-style terms — none),
NocoBase (raw LICENSE.txt — see the critical finding below), and Cerbos/Backstage/ToolJet/
Budibase/GrowthBook/Flagsmith (README licensing statements).

The `license_verified` field records the method per row. `badge` means the GitHub sidebar
field only; treat those as claims that survived a look but not a full read.

**The GitHub REST API is blocked in this environment.** An attempt to pull
`pushed_at`/`archived`/`spdx_id` for six repos returned null across the board. That means
last-commit recency is unconfirmed for every row — maintenance signals below are inferred
from tooling age, open-issue counts, release posture and README language, never from a
commit timestamp. Where I say a project is dormant, that is an inference and is labelled.

## Run completeness — read this before using the file

The task asked for ~33 rows with exactly 10 top10. The file has **31 rows with 12 top10**,
and it stops short deliberately.

I hit a hard Fable-5 usage limit on WebFetch partway through, and WebFetch was my only
working research tool once the GitHub API turned out to be blocked. The limit was
confirmed persistent, not transient, by a retry. Four repos in the planned set were never
fetched and are therefore **absent rather than guessed**: SuperTokens (supertokens-core),
Logto, oauth2-proxy, and panva/jose. Two of those matter for licensing specifically —
SuperTokens has a known split license and Logto is MPL-2.0 with terms worth reading — so
inventing rows for them would have been precisely the failure mode this project exists to
avoid. Ory Oso/Oso library and Keycloak-adjacent session tooling also went unsurveyed.

The top10 count is 12 rather than 10 because trimming to exactly 10 would mean ranking
against a set I could not finish surveying. Cutting two now would be an arbitrary
tiebreak presented as a judgement. The twelve are defensible individually; the final trim
should happen once the four missing repos are in.

## Top 12 rationale

**Backstage (P10-R-023)** is the single most instructive repo in this survey for P10 and
the reason to keep reading it. It is the only project here where plugins contribute
*navigation* as a first-class, declarative thing rather than as an app-author edit. The
route-ref indirection — plugins link to each other without hardcoded paths — is exactly
the seam a host needs if pages are to be added without editing the shell. Caveat recorded
in the row: the "new frontend system auto-discovers nav extensions" detail is general
knowledge, not text I read on the repo page, and must be checked against backstage.io.

**single-spa (P10-R-017)** and **Module Federation 2.0 (P10-R-018)** are the two halves of
mounting. single-spa owns *when* an app is active (`activeWhen` + bootstrap/mount/unmount
promises); Module Federation owns *how* remote code arrives, and its 2.0 Manifest is the
metadata seam — a host could read a manifest to learn what a remote offers. Neither knows
what a nav item is. **Piral (P10-R-019)** is the one that goes furthest toward a real host
contract: pilets expose extension slots, extend each other, and can be rolled out or
disabled dynamically, which is a permissions/visibility story in disguise. Its risk is the
implied hosted feed service whose commercial terms I could not read.

**qiankun** sits at register rather than top10 only because v3 ships on the npm `rc` tag
while `latest` is still 2.x; its Proxy-membrane sandbox is the best isolation model seen.

Identity splits cleanly by shape. **Keycloak** is the heavyweight everyone knows;
**Kratos** is the headless one that leaves every screen to the host, which is the right
default when the host owns its own design system; **Casdoor** earns its place purely on
the multi-tenancy model — independent organizations each owning users, applications,
providers *and branding* is the closest match to a tenant-aware host. **Better Auth** is
the library-tier pick, and the notable find of the run is that Auth.js's own README now
says it has joined Better Auth and recommends new projects start there. That inverts the
default recommendation for greenfield TypeScript work.

Authorization is the best-supplied concern in the whole survey. **OPA** (CNCF graduated,
embeddable as Go lib / sidecar / WASM), **SpiceDB** (most mature Zanzibar, explicitly
verified Apache-2.0 and *not* BSL), **Cerbos** (YAML policies, stateless PDP), and
**Casbin** (in-process, PERM metamodel, RBAC-with-domains) cover four genuinely different
deployment shapes at Apache-2.0. **Flagsmith** takes the settings slot on license grounds
— BSD-3-Clause is the most permissive of the three flag platforms.

## Supply-gap map — which host concerns OSS actually covers

**Authorization: heavily oversupplied.** Five credible Apache-2.0 engines, zero
source-available traps, multiple deployment shapes. Building anything custom here would be
indefensible. Pick one.

**Identity: oversupplied, licence-stratified.** Server IdPs, headless identity APIs, and
TS libraries all exist. The only real decisions are deployment weight and whether AGPL
(ZITADEL) or a mixed tree (authentik's EE subdirectory) is acceptable.

**Session/token: adequately supplied but under-surveyed here.** Hydra and Authelia cover
the server side. The library tier (jose, oauth2-proxy) went unfetched, so this concern is
the least evidenced in this run despite being well-served in reality.

**Tenancy: partially supplied.** Casdoor and ZITADEL both ship real organization models,
and Casbin has RBAC-with-domains. But these are tenancy models *inside an IdP or a policy
engine* — they answer "which org does this user belong to," not "how does the host
compose a tenant-scoped workspace." No general-purpose multi-tenant framework surfaced
with meaningful adoption. This is a partial gap.

**Shell/mounting: well supplied, semantically empty.** single-spa, Module Federation,
qiankun, Piral and Luigi all solve loading and isolating heterogeneous apps. Not one of
them carries identity, permissions, or settings semantics across the boundary. The
plumbing is free; the meaning is not.

**Navigation registry: near-greenfield — this is the real gap.** Backstage is the only
project surveyed where navigation is a declarative contribution rather than shell source
code, and even there the classic frontend system has app authors hand-editing `App.tsx`
routes and `SidebarItem` entries. Luigi's Core owns navigation config and *might* express
it as a node tree, but the repo page does not say so and I could not confirm it. Frappe
has Workspace documents as JSON fixtures, per general knowledge, but the repo page
documents none of it. There is no OSS library whose job is "a registry of navigation nodes
with labels, icons, ordering, permission predicates and ownership." Every shell framework
punts this to the host.

**Settings registry: greenfield. There is no OSS settings-schema library.** This is the
clearest finding of the survey. The three feature-flag platforms are the nearest
precedent and they are not the same thing: flags are flat, environment-scoped key-value
with targeting rules, evaluated per request. A settings registry needs hierarchy
(system → tenant → workspace → user), schema and validation, defaults with override
provenance ("who set this and at what level"), and typed rendering. Flagsmith's remote
config is the closest analogue and still only reaches flat key-value. Frappe's DocType
metadata model is arguably the closest conceptual relative — metadata that generates
forms, permissions and APIs — but it is a whole framework, not an extractable library, and
its details are undocumented on the repo page. If P10 builds one real mechanism, this is
the one with no OSS to absorb.

## Innovation candidates

- **P10-I-R-1** — Navigation registry as a first-class artifact: nodes with label, icon,
  route, ordering, owner and a permission predicate, contributed by modules rather than
  edited into the shell. Backstage's route refs are the precedent; nobody ships it standalone.
- **P10-I-R-2** — Route-ref indirection borrowed from Backstage so modules link to each
  other's pages without hardcoding paths, making pages relocatable without breaking links.
- **P10-I-R-3** — Hierarchical settings registry with explicit override provenance at every
  level, so the UI can always answer "why is this value what it is, and who set it."
- **P10-I-R-4** — Settings schema that generates its own UI, validation and API surface
  from one declaration (the DocType idea, extracted from Frappe's framework weight).
- **P10-I-R-5** — Unify the navigation predicate and the authorization engine: a nav node's
  visibility is the same check as its route guard, evaluated once, never drifting apart.
- **P10-I-R-6** — Manifest-driven mounting: a module ships a manifest declaring its nav
  contributions, settings schema and required permissions; the host reads it and needs no
  code change. Extends Module Federation 2.0's Manifest with host semantics.
- **P10-I-R-7** — Tenant-scoped navigation: the same module renders different nav trees per
  tenant, driven by the tenancy model rather than by branching in module code.
- **P10-I-R-8** — Settings as policy input: feed resolved settings into OPA/Cerbos as data
  so configuration and authorization share one evaluation path.
- **P10-I-R-9** — Extension slots as a permission surface (Piral's slot model crossed with
  a policy engine): a slot renders only contributions the current principal may see.
- **P10-I-R-10** — Session propagation across a microfrontend boundary as a defined
  contract — the thing every shell framework in this survey conspicuously omits.
- **P10-I-R-11** — Progressive-disclosure settings: schema carries an audience level so
  advanced options exist without cluttering the default surface.
- **P10-I-R-12** — Dynamic enable/disable of mounted modules at runtime (Piral's rollout
  capability) driven by a flag platform, giving staged rollout of whole pages.
- **P10-I-R-13** — Nav registry diffing so a module upgrade surfaces exactly which nav
  entries and settings keys it adds, removes or renames — an upgrade-safety review gate.
- **P10-I-R-14** — Organization/branding inheritance modelled on Casdoor, where a tenant's
  theme, providers and login surface are one inheritable settings subtree.
- **P10-I-R-15** — Headless-identity plus host-owned UI as the default posture (Kratos's
  shape): the host never surrenders its design system to an IdP's screens.
- **P10-I-R-16** — Settings-change audit as a first-class event stream, since the override
  hierarchy already knows the level and principal for every write.

## Unknowns and blockers

1. **Four planned repos unsurveyed** — SuperTokens, Logto, oauth2-proxy, jose — because of
   the usage limit. SuperTokens and Logto both need body-level license reads.
2. **No commit-recency evidence anywhere.** The GitHub API is blocked here; every
   maintenance judgement in this run is inferred from secondary signals.
3. **Luigi's navigation model is the highest-value open question.** If its Core really does
   express navigation as a declarative node tree, it is the closest existing precedent to
   P10-I-R-1 and deserves a docs read at docs.luigi-project.io.
4. **Backstage's new frontend system** needs confirming against backstage.io architecture
   docs before the auto-discovered-nav-extension claim is relied on.
5. **Frappe's Workspace/DocType mechanics** are undocumented on the repo page and are the
   most relevant unexamined prior art for the settings-registry gap.
6. **Piral's feed service commercial terms** are unread and could be an adoption blocker.
7. **ZITADEL's directory-level Apache/MIT carve-outs** were not read at file level; only
   the AGPL core and the existence of LICENSING.md were confirmed.

## Backfill 2026-08-27

Closes gaps 1, 3, 4 and 5 from "Unknowns and blockers" above. Four repos surveyed, three
targeted doc reads. Every license below was read from the LICENSE body, not a badge.

### Four repo license verdicts

**SuperTokens (P10-R-032) — split licence, FLAG.** `LICENSE.md` on master opens
"Portions of this software are licensed as follows" and carves out the `ee/` directory.
`ee/LICENSE.md`, fetched separately, requires agreement to the SuperTokens Subscription
Terms and a valid Enterprise licence "for the correct number of user seats" for any
production use, and states it is "forbidden to copy, merge, publish, distribute,
sublicense, and/or sell the Software." Everything outside `ee/` is Apache-2.0. The GitHub
API reports `spdx_id: NOASSERTION` — the badge alone would have been actively misleading,
and this is a third instance of the pattern already seen with Composio and NocoBase.

**Logto (P10-R-033) — MPL-2.0, FLAG-LITE.** The body is verbatim Mozilla Public License
Version 2.0, terminating in the standard Exhibit A / Exhibit B notices, with no appended
exception, Commons Clause or enterprise carve-out. The root directory listing shows a
single `LICENSE` and no `ee/` or `enterprise/` directory, so unlike SuperTokens the grant
is uniform across the repo. This matters because Logto is frequently assumed permissive:
it is weak file-level copyleft. Modified Logto files must be published under MPL, but —
unlike ZITADEL's AGPL — there is no network-service source-provision duty, which makes it
the most absorbable of the multi-tenant IdPs surveyed.

**oauth2-proxy (P10-R-034) — MIT, clean.** Verbatim MIT grant and warranty disclaimer with
no added conditions. One cosmetic defect: the file carries no copyright attribution line,
an attribution gap rather than a licence-scope issue.

**jose / panva (P10-R-035) — MIT, clean.** "The MIT License (MIT)", Copyright (c) 2018
Filip Skokan, verbatim, no added conditions.

### Doc read 1 — Luigi: the nav-registry claim is CONFIRMED, but only half of it

Read from `SAP/luigi` `docs/navigation-parameters-reference.md`, `navigation-advanced.md`
and `navigation-configuration.md` on main, since docs.luigi-project.io is JS-rendered and
returns no body to a fetch.

Luigi's navigation node tree is a **genuine declarative contract**, and a richer one than
this survey assumed. The reference documents roughly 45 node parameters, including
`pathSegment`, `label`, `viewUrl`, `children`, `category`, `icon`, `viewGroup`,
`hideFromNav`, `keepSelectedForChildren`, `badgeCounter`, `statusBadge`, `externalLink`,
`virtualTree` and `testId`. Three properties are directly load-bearing for P10:

- **`children` is typed "array | function"** and may return a Promise resolving to an array
  of nodes, explicitly "useful if the child nodes aren't available immediately and need to
  get fetched asynchronously." Sub-trees can therefore be resolved at runtime from a
  server — the mechanism a registry needs.
- **`visibleForFeatureToggles`** gates a node on a list of feature toggles, with `!` for
  negation. This is a real precedent for P10-I-R-5 (nav visibility as a predicate), though
  it binds to flags rather than to a policy engine.
- **`userSettingsGroup`** ties a nav node to a named group in a `userSettingGroups`
  object — a rare existing instance of navigation and settings sharing one declaration.

**What Luigi does NOT have, and this is the decisive half:** there is no contribution or
registration model. `navigation.nodes` is one tree authored in the host's single JavaScript
configuration file — the basic guide instructs the author to "edit the JavaScript
configuration file of your project, specifically the `navigation:` category." Nothing in
the advanced navigation doc describes a module registering, contributing or merging nav
entries; searches for register/contribute/merge/plugin/extension/discover return nothing
relevant. A micro frontend supplies a `viewUrl` that the host has already written down.

**Verdict: Luigi narrows the gap but does not close it.** It proves the *shape* of a
declarative node contract is workable and worth stealing wholesale, and it supplies async
`children` as the runtime-resolution hook. It does not supply decentralized contribution,
which is the actual substance of P10-I-R-1. The earlier note that Luigi "might express it
as a node tree" is now confirmed rather than speculative, and the parameter list should be
treated as prior art to copy from, not merely to cite.

### Doc read 2 — Backstage: auto-discovery CONFIRMED, and route refs are the stronger idea

Read from backstage.io `/docs/frontend-system/architecture/` pages for extensions, app and
routes.

**Auto-discovery is real.** The app docs describe "App feature discovery" which "lets you
automatically discover and install features provided by dependencies in your app," so
"you don't need to manually `import` features in code, but they are instead installed as
soon as you add them as a dependency in your `package.json`." Explicit installation via
`createApp({ features: [...] })` remains possible, but the docs state features "typically
will instead be discovered automatically." One hard constraint: discovery "is only
available when using the `@backstage/cli` to build your app," because it hooks into the
webpack compilation by scanning the app package for compatible dependencies. That is a
build-system coupling, not a portable runtime mechanism.

**The attachment model.** Extensions declare `attachTo: { id, input }` and communicate
through typed data refs — `createExtensionDataRef`, `coreExtensionData.reactElement`,
`coreExtensionData.path`, `coreExtensionData.routeRef` — with inputs declared via
`createExtensionInput([...refs], { singleton, optional, internal })`. Nav specifically:
the app's nav extension has id `app/nav` and exposes an `items` input, so a plugin
contributes a nav entry by attaching with `attachTo: { id: 'app/nav', input: 'items' }`
and outputting a `reactElement`. Extensions can be disabled per-app and configured by id
under `app.extensions` in `app-config.yaml`, and gated by an `if` predicate over
`featureFlags` and `permissions`.

Note the important limitation: a nav contribution outputs a **React element**, not a
declarative node record. Backstage decentralizes *who contributes* nav, but the payload is
opaque UI rather than the data structure Luigi has. Neither project has both halves.

**Route refs are the highest-value transferable idea in this entire survey.** A route ref
is "an opaque value that represents route targets in an app, which are bound to specific
paths at runtime," letting plugins navigate "without each individual plugin knowing the
concrete path or location of other plugins in the routing hierarchy, or even its own."
`createRouteRef` declares a target (with `params` for path variables);
`createExternalRouteRef` declares a link *out* to another plugin without importing it,
optionally with a `defaultTarget`; the app binds them once at startup via `bindRoutes` or
`app.routes.bindings` in config, where `false` explicitly disables a binding; `useRouteRef`
returns a link generator that may be `undefined` when a route is unavailable. Also
`createSubRouteRef` for relative paths and `aliasFor` for override scenarios.

**Combined verdict on the nav gap: it is confirmed as near-greenfield, but the two halves
now have proven precedents.** Luigi supplies the declarative node schema with async
resolution; Backstage supplies decentralized contribution plus path indirection. No
surveyed project supplies both, and neither ships its half as a standalone library
consumable outside its own framework. P10-I-R-1 remains a build, but it is now a synthesis
of two demonstrated designs rather than an invention.

### Doc read 3 — Frappe DocType: conceptually a settings-schema registry, NOT extractable

Read from docs.frappe.io framework user guide, `basics/doctypes` and
`basics/doctypes/single-doctype`.

**Conceptually, yes — and more so than expected.** A DocType is "the core building block of
any application based on the Frappe Framework" and "describes the **Model** and the
**View** of your data." Crucially the metadata is itself data: DocTypes carry information
about behaviour that Frappe calls **Meta**, and "this meta-data is also stored in a
database table," so changes can be made "on the fly without writing much code." The docs
state the recursion outright — "A DocType is also a DocType." Creating one generates a JSON
object which "in turn creates a database table" (`tabArticle` for DocType `Article`), and
the framework then derives List and Form views automatically from that declaration. That
is precisely the P10-I-R-4 idea — one declaration yielding schema, UI, validation and API —
already shipping in production.

**Settings use is confirmed via Single DocTypes.** A Single DocType is "a DocType that has
only one instance in the database," and is "useful for persisting things like *System
Settings*, which don't make sense to have multiple records." Values live in a shared
`tabSingles` table with columns `doctype`, `field` and `value` — one record per property,
a key-value layout — and are read with `frappe.get_doc('System Settings')`. (The commonly
cited `frappe.get_single` and `frappe.db.get_single_value` do not appear on these pages;
treat them as unverified.)

**Not extractable.** Everything the docs describe is bound to the framework: the ORM layer,
the generated `tab`-prefixed tables, the Desk UI that renders the views, and the Python
runtime. There is no library boundary around the metadata model, and the docs never
present DocType as usable standalone. It is the best available reference *design* for a
settings schema registry and the worst available *dependency*.

Note also that `tabSingles` is flat key-value per DocType. Frappe solves schema, generated
UI and validation, but it does **not** solve the hierarchical override chain
(system → tenant → workspace → user) with provenance. That specific requirement remains
unmet by every project in this survey.

### Change to the supply-gap map

- **Navigation registry: near-greenfield — CONFIRMED, with the caveat upgraded from
  speculation to evidence.** The previous entry hedged that Luigi "might express it as a
  node tree" and could not confirm Backstage's discovery. Both are now settled from source.
  Restate the gap precisely: the missing artifact is a *declarative nav node record*
  (Luigi's contract) that *independent modules register* (Backstage's discovery) and that
  *resolves through path indirection* (route refs). Each half exists; the composition does
  not, and neither half is available as a standalone library.
- **Settings registry: greenfield — CONFIRMED, and the nearest relative is now read rather
  than assumed.** Frappe's DocType is a genuine metadata-driven schema registry with
  generated UI, and Single DocTypes are genuinely how Frappe does settings pages. It is
  whole-framework-bound, so it is prior art to imitate, not code to absorb. The
  hierarchical-override-with-provenance requirement is unmet by DocType *and* by every flag
  platform surveyed, which makes P10-I-R-3 the single least-supplied idea in P10.
- **Identity: well supplied, licence-hazardous.** Adding SuperTokens and Logto, the
  self-hosted IdP field is now nine projects deep and licence quality, not capability, is
  the discriminator. Of the multi-tenant options, Logto (MPL-2.0) is materially safer than
  ZITADEL (AGPL-3.0 core) and SuperTokens (proprietary `ee/`).
- **Session: unchanged and still thin at the boundary.** oauth2-proxy terminates auth at
  the network edge and jose mints and verifies tokens, but neither propagates session
  across a microfrontend boundary. P10-I-R-10 stands untouched by this backfill.

### Additional innovation candidates

- **P10-I-R-17** — Split the nav node into a declarative record plus an optional renderer,
  taking Luigi's parameter schema as the record and Backstage's attachment model as the
  contribution channel. Fixes the flaw in both: Backstage nav items are opaque React
  elements the host cannot introspect, sort, search or permission-check without rendering
  them; Luigi records are introspectable but cannot be contributed by a module.
- **P10-I-R-18** — Async `children` resolvers as the tenancy seam: adopt Luigi's
  "array | function returning a Promise" typing for sub-trees so a tenant's navigation is
  fetched and cached at runtime rather than branched in module code. Gives P10-I-R-7 a
  concrete, already-proven mechanism.
- **P10-I-R-19** — Route refs with `defaultTarget` as the module-decoupling primitive,
  lifted from Backstage but shipped standalone: modules declare link intents, the host
  binds them once at startup, unbound intents degrade to a default or disable cleanly
  rather than producing a dead link. This is the piece of Backstage most worth stealing and
  the one least tied to its framework.
- **P10-I-R-20** — Runtime-registered settings schemas modelled on DocType's
  "metadata stored as data" recursion, but with the override chain DocType lacks: each
  resolved value carries the level and principal that set it, so the UI can always explain
  provenance. Combines P10-I-R-3 and P10-I-R-4 into one mechanism and is the strongest
  candidate for the one real thing P10 should build.
- **P10-I-R-21** — Build-independent discovery. Backstage's auto-discovery is welded to
  `@backstage/cli` and webpack; a manifest read at runtime achieves the same ergonomics
  without dictating the host's build system. Sharpens P10-I-R-6 with the specific
  constraint that made the precedent non-portable.
- **P10-I-R-22** — Promote Luigi's `userSettingsGroup` into a general rule: a settings
  schema declares which nav node surfaces it, so a new module's settings page appears in
  the right place with no host edit — one declaration feeding both registries.
