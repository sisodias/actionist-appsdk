# P10 — Identity, Settings, Navigation Host: Commercial Survey

Run 2026-08-27, Sprint-1 lane S1-L4. Research only. Data: `top-companies.jsonl` — 33 rows, 10 `top10`, 21 `register`, 2 `rejected`, 31 observed / 2 inferred.

## Method

Public docs only, via search plus direct fetches of vendor reference pages. A row is `observed` only when its claim came from a page actually read this session, and `source` is that page. Six primary docs were fetched in full rather than read through search summaries, because mechanism detail is where the expensive mistakes hide: Shopify's `<s-app-nav>` reference, Forge's `jira:globalPage` manifest reference and modules index, the Cerbos scoped-policies write-up, Superblocks' embedded-app authentication, and monday.com's auth-method chooser.

Two rows are `inferred` and flagged: Budibase (P10-C-024, sourced only from a competitor's comparison blog) and the WorkOS+Cerbos composition pattern (P10-C-033, a vendor ecosystem page). Neither is in `top10`. Where a figure came from marketing rather than reference docs the row's `limitations` says so — Permit.io's pricing disagrees across secondary sources and is marked unverified.

Coverage: 11 IdP/B2B-tenancy vendors, 4 authorization services, 4 feature-flag/settings platforms, 8 embedded/portal/nav-registry precedents, 3 suite-unification examples, 3 mechanism-specific rows split from their parent product.

## Why these ten

The `top10` set is chosen so each row contributes a **distinct mechanism** a host would have to build or buy, not the ten best-known brands. Auth0, Clerk, FusionAuth, LaunchDarkly, Microsoft 365, Zoho One and Shopify's token-exchange grant were all demoted to `register` because a kept row already shows the same mechanism more cleanly.

Kept: **Shopify App Bridge** (P10-C-001) — the only surface read where a guest, from inside its iframe, declaratively registers nav that renders *outside* it in host chrome. **Forge global page** (002) — manifest-declared nav with `pages`/`sections` and host-assigned URLs. **WorkOS** (003) — cleanest per-org SSO/SCIM substrate with roles on memberships, not on a global user. **Frontegg** (004) — the strongest embeddable host-owned settings shell, three-level tenancy. **Cerbos scoped policies** (005) — the best published answer to tenant-authored policy that cannot escalate. **Superblocks** (006) — the most legible host→guest token exchange with tamper-proof claims. **Salesforce Canvas + Lightning** (009) — the oldest production absorption pattern plus cascading tab visibility. **Descope** (013) — explicit inheritance with a stated conflict rule. **ServiceNow UI Builder** (025) — nav as a stored JSON document, including its failure mode. **Frontegg Entitlements** (031) — the two-gate rule stated plainly.

## The recurring host-absorption patterns

### A — Iframe + token exchange ("app-bridge shape")

The guest renders in host-controlled chrome and never brokers its own login; the host mints a short-lived signed assertion the guest's backend exchanges or verifies. Observed in four independent forms. **Shopify**: App Bridge issues a session/ID token, the backend swaps it via the OAuth token-exchange grant — embedded-only, explicitly motivated by removing redirects and load flicker. **Superblocks**: a long-lived org-level embed token, held only by the host backend, mints a short-lived per-user session token keyed on email with arbitrary metadata sealed in as claims. **Salesforce Canvas**: an encrypted `signed_request` POSTed to the guest with user context and an access token — the same shape, no redirect, twenty years earlier. **monday.com**: seamless SDK auth where the iframe talks to the parent frame and stores no keys, backed server-side by a signing-secret JWT carrying a 5-minute token.

The consistent choice is **two tokens, not one**: a long-lived credential only the host's backend holds, and a short-lived per-user token that crosses the boundary. Wix is the instructive counter-example — it delivers a signed `instance` as a *query parameter* and then has to warn in its own docs that a plain-text `instanceId` is attacker-manipulable and must be decoded server-side.

### B — Nav manifest registration

The guest declares entries; the host renders them. Three variants: **deploy-time manifest** (Forge — one `jira:globalPage` per app, `pages` or `sections` but never both, host-assigned `/jira/apps/{appId}/{envId}`); **runtime component** (Shopify — `<s-app-nav>` with `<s-link>` children, relative paths only, one flat level, no nesting, exactly one hidden `rel="home"`); and **stored configuration document** (ServiceNow — a JSON value on a UX Page Property, with the documented trap that a String-typed property makes the side menu silently vanish). Atlassian Connect (P10-C-027) is the only surface offering **dynamic** registration by REST rather than descriptor-only, which matters if donors are absorbed at runtime.

Universal constraint: **the host owns the URL space, the guest owns its internal router, and the guest must reconcile them.** Forge says it outright — the sidebar only changes the URL. Shopify's reported broken TitleBar links on direct URL visits are the same seam failing.

### C — Scoped settings tree with an explicit combination rule

Every mature surface has a hierarchy *and* a stated conflict rule; the rule is the design decision. Cerbos offers two selectable modes — `OVERRIDE_PARENT` (child decides) versus `REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS` (child ALLOW only lands if the parent would also allow, child DENY always wins), with role policies inheriting `parentRoles` and permitted only to narrow. Descope resolves cross-tenant conflict by applying the **most restrictive** password policy. FusionAuth makes tenant config a default an Application may override. LaunchDarkly evaluates prerequisite flags *before* all other targeting and forbids them across projects. Frontegg nests Environment → Account → Sub-account, opt-in per parent. The idea worth stealing is Cerbos's: make the combination rule an explicit per-node field with a safe default, not a global convention.

### D — Two-gate visibility (entitlement AND permission)

Frontegg states it plainly: a module enabled in the Builder stays invisible without both the role permission and the feature entitlement. The gates sit at different scopes — entitlement on the tenant/plan, permission on the role — so neither folds into the other. Clerk attacks the same problem from the UI side (`<Show when={{role}}/{{permission}}>`), Salesforce from the composition side (per-tab visibility filters). Salesforce adds what the others omit: **cascading emptiness** — hide every component in a tab and the tab goes; hide every tab and the Tabs component goes. A host stripping entitlement-gated modules out of a donor needs exactly this or it leaves empty chrome behind.

### E (weaker) — Console federation rather than absorption

Zoho One and Microsoft 365 unify at the identity and admin tier while each product keeps its own UI; donor chrome is explicitly **not** suppressed. This is the honest commercial baseline and mostly a warning — the two largest suite-unification efforts observed did not actually absorb their constituents' UI. Microsoft's one transferable idea is the Simplified/Dashboard toggle: the same settings at two curated depths, switchable by the user rather than locked by permission.

## Host-owned vs delegable, per commercial practice

Consistently **host-owned**: the identity assertion and its lifetime (no observed host lets a guest mint its own session); the URL space and route prefix; nav rendering and placement even when the guest supplies entries; install, scope grant and consent (Shopify's managed installation moves this off the guest entirely); tenant membership and role assignment (WorkOS puts roles on `/organization_memberships`; Auth0 is explicit that orgs group users but do not own identities); the root policy layer defining maximum capability; and cross-tenant conflict resolution.

Consistently **delegable**: internal routing within the guest's prefix; the guest's own settings screens reached via a host-rendered nav entry; per-tenant policy authored inside root guardrails (Cerbos Hub gives per-tenant policy stores with version history); per-org branding, auth method, MFA policy and custom domain; and which optional portal modules are active.

The contested seam is **settings UI ownership**. Frontegg and Permit.io sell the admin UI as part of the product; WorkOS ships an Admin Portal for connection setup but not app settings; Shopify, Forge and Superblocks leave the guest's settings screen wholly to the guest. **No observed surface renders a third party's settings inside host-owned chrome.** If P10 wants that, it is building something with no direct commercial precedent found here — either the opportunity or the warning, depending on appetite.

## Innovation candidates

- **P10-I-C-1** — Two-token exchange as the only guest identity path; the long-lived credential never leaves the host backend, and never a query parameter.
- **P10-I-C-2** — Sealed host claims: donors receive entitlement and tenant facts as signed JWT claims rather than querying a host API, so they cannot be forged and no internal endpoint is exposed.
- **P10-I-C-3** — Nav manifest as versioned data, but schema-validated at write time, closing ServiceNow's silent String-vs-JSON failure.
- **P10-I-C-4** — Runtime nav registration (Connect's dynamic route) rather than deploy-time-only, since donors are absorbed continuously.
- **P10-I-C-5** — Explicit per-node combination mode on the settings tree, borrowing Cerbos's two modes as a first-class field with the safe one as default.
- **P10-I-C-6** — Narrow-only role delegation: a tenant-defined role is structurally constrained to a subset of its parent, not reviewed into compliance.
- **P10-I-C-7** — Cascading emptiness as a host guarantee: entitlement-stripped modules take their nav entry and any now-empty group with them.
- **P10-I-C-8** — Two-gate rendering everywhere, with a debug view reporting *which* gate denied — a diagnostic no surveyed vendor documents.
- **P10-I-C-9** — Donor chrome suppression contract: the absorption manifest names which donor header, sidebar and settings links are hidden, so suppression is declared and auditable rather than done in CSS.
- **P10-I-C-10** — Route reconciliation handshake at absorption time: host publishes its prefix, guest acknowledges its route table, deep links validated before they break (the failure Forge's URL-persistence bridge exists to patch).
- **P10-I-C-11** — Progressive settings depth as a per-module property (Microsoft's toggle), so a donor exposes a curated subset by default and its full surface on request.
- **P10-I-C-12** — Nested nav beyond one flat level, which Shopify (no nesting) and Kinde (two layers only, N-layer on roadmap) both currently lack — a real gap, not a nicety.
- **P10-I-C-13** — Tenant-scoped identity isolation as an explicit switch (Descope's Tenant User Isolation, Stytch's org-scoped passwords) rather than an assumed default either way.
- **P10-I-C-14** — Directory reconciliation from an events log with a host-owned replayable cursor, since WorkOS itself calls the events API more robust than webhooks.
- **P10-I-C-15** — Record ephemeral guest membership: Superblocks embed users hold group permissions only for a token's life and never appear as members, which is an audit blind spot.
- **P10-I-C-16** — Absorption-time capability negotiation: the donor declares which identity lanes it supports and the host selects one, instead of hand-porting every donor to a single lane.
- **P10-I-C-17** — Settings provenance on every resolved value — which scope supplied it and which rule won. Every surveyed hierarchy has a combination rule; none exposes the resolution trace.

## Unknowns

- **Budibase licensing**: described as GPL-v3 in a competitor's blog, **not** read from the LICENSE body. GPL-v3 would carry real obligations for a host that embeds or modifies it. Row marked `inferred`/`rejected` — exactly the kind of licence badge that must be read from source.
- **Permit.io pricing**: secondary sources disagree ($5/mo at 25k MAU/100 tenants vs $150/mo at 10k MAU). Read the vendor page before quoting.
- **Frontegg hierarchy depth** beyond sub-account: not established from reference docs.
- **Shopify nav on direct URL visit**: community reports of broken nav/TitleBar links; not confirmed in Shopify reference docs.
- **WorkOS + Cerbos seam cost**: the composition pattern is corroborated by both products' positioning, but attribute freshness, latency and dual-configuration burden are undocumented in what was read.
- **Salesforce Canvas current status**: read from the long-standing Canvas Developer Guide; whether Salesforce steers new work to LWC instead was not established.
- **Wix deprecation timeline**: classic iframe extensions now sit under deprecated docs with newer apps steered to self-hosted extensions and `WixClient`. End-of-life date and the `instance` param's survival are both unknown.
- **No third-party-settings-in-host-chrome precedent found.** Absence of evidence after this sweep, not evidence of absence.
