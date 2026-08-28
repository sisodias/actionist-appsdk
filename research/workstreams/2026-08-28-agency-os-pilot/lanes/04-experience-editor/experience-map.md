# Actionist cross-vertical experience and surface/component taxonomy

Observed: 2026-08-28  
Status: research-only · contract synthesis · `UNEXECUTED` · `NOT_ADMITTED`  
Owned lane: `research/workstreams/2026-08-28-agency-os-pilot/lanes/04-experience-editor/`

## Correction and scope

The initial task wording described an Agency OS pilot. The scope is corrected here: **Agency OS is
not the product target.** This packet defines a general surface and component taxonomy that can
serve SaaS, ecommerce, marketing agencies and course creators. It does not select a client,
industry, product bundle, route map, donor, or pilot workflow. The directory name is retained only
because it is the assigned owned path.

This is an experience contract, not an implementation plan. It records the reusable vocabulary,
the vertical boundaries, the host/surface ownership rules, the token and state contracts, and the
bounded editing rules that a later composition plan may consume. It does not authorize cloning,
source execution, source copying, migration, build, deployment, admission, image generation or
client-private data access.

## What this packet must make decidable

1. Which experience recipes are universal, shared by several verticals, or vertical-specific.
2. Which 21st.dev evidence is a retrieval hint and which controlled component role a recipe may use.
3. Which layer owns identity, URL space, navigation, settings, theme resolution and donor chrome.
4. How the same experience vocabulary behaves at wide, compact, tablet and mobile widths.
5. How every recipe represents rest, loading, empty, error, denied, success, invalid and stale data.
6. Which client-facing edits remain inside a governed composition and which become a named refusal or
   a priced contract transition.

The machine-readable register is the source of truth for recipe rows, block joins, raw-tag hints,
controlled roles, state profiles, responsive profiles and counts: `surface-register.json`.
`edit-contract.json` is the source of truth for the mini-vibe editor and reuse-shape authority.

## Evidence receipts

The following are the decisive local receipts. Counts are quoted with their evidence kind and are
not upgraded from discovery metadata into qualification claims.

| Receipt | Decisive observation | Use in this contract |
|---|---|---|
| `knowledge/block-hub/block-register.json` | 80 blocks: 12 surface-layer, 38 product, 15 capability, 10 engine, 5 platform; 66 seeded-candidate, 2 thin-existing-supply and 12 Actionist-owned/targeted-gap rows; 233 source edges | The block vocabulary and parity denominator |
| `knowledge/block-hub/composition-recipes.json` | Five recipe memberships: Digital Business OS 31, SaaS 45, Ecommerce 50, Marketing Agency 48, Course Creator 50 | Universal/overlay joins, without selecting one product |
| `research/actionmodel-builder-research-2026-08-26/phase-8/lanes/02-local-corpus-join/outputs/local-corpus-join-report.md` | 8,515 distinct joined UI identities: 7,949 new bundle-oriented entries, 3,508 legacy entries, 3,506 source-bearing legacy entries, 2,942 intersection, 5,007 new-only, 566 legacy-only | Supply identity and artifact-kind distinction |
| `research/21st-corpus-audit-2026-08-27.md` | 7,949 harvested bundles, 7,678 previews, 75 raw tags; live join 7,279 tagged and 670 untagged; sample evidence is 86.7% tokenised colour rules (`n=25`) and 55/60 token blocks (`n=60`) | Preview/retrieval input only; sampled rates are not corpus rates |
| `research/workstreams/p07-token-theme-harmonization/runs/2026-08-27-sprint-2-opus/semantic-token-contract.json` | 17 semantic token families and 110 roles; host prefix `--am-`; light/dark pairing; binding classes B1–B5 | Actionist token vocabulary and donor ceiling |
| `research/workstreams/p08-archetype-shell-layout/runs/2026-08-27-sprint-2-opus/navigation-ownership-matrix.json` | 16 navigation surfaces: 9 host-owned, 2 archetype/capability-owned, 3 forbidden; donors declare intent and never rail position | Navigation and chrome ownership |
| `research/workstreams/p13-preview-editor/runs/2026-08-27-sprint-2-opus/edit-operation.schema.json` | Seven verbs across three substrates; denied/deferred/escalated outcomes are typed | Bounded edit vocabulary |
| `research/workstreams/p13-preview-editor/runs/2026-08-27-sprint-2-opus/authority-rules.json` | 21 authority cells, four outcomes, persisted permission and nearest-alternative requirement for denials | Refusal quality and least-bounded-channel rule |

Rights are a separate gate. The local join counts 11,549 third-party records across the stores and
only 2 license fields (0.017%). Therefore the 21st stores are **reference-only/gated by default**;
this is not an automatic quality rejection. A high-quality pattern may be reimplemented from its
role/anatomy contract, or a rights-cleared source may enter a different reuse shape later. The
register records this trade-off rather than silently treating presence as permission.

## Experience planes and audience journeys

The same recipe can be rendered in different contexts. Audience is a boundary on data and actions,
not a reason to duplicate the component vocabulary.

### Public experience

The public journey is `discover → understand → trust → convert → continue`:

- `website_cms`, `landing_page`, `blog_editorial`, `proof_case_study`, `documentation` and
  `pricing_plans` expose indexed, readable content with clear next actions.
- `forms_intake` turns an inquiry, registration or waitlist into a consented submission; it does
  not expose operator records.
- `audience_messaging` may collect an explicit opt-in and show delivery status without exposing
  another person's subscription state.
- `storefront`, `catalogue`, `cart_checkout` and `course` recipes are vertical variants of the
  same public pattern: browse, inspect, commit, confirm and recover.

Public surfaces do not inherit an operator rail, tenant switcher, employee directory or internal
search. They may use the host's public navigation recipe and a public-safe error/denied policy.

### Operator and employee experience

The operator journey is `authenticate → orient → find work → change state → prove outcome`:

- The host owns identity, workspace/tenant authority, URL basename, navigation, global search
  entry, notifications entry, settings entry and theme resolution.
- Universal operational recipes include `crm_pipeline`, `projects_tasks`, `scheduling_booking`,
  `support_desk`, `shared_inbox`, `files_assets`, `workflow_approvals`, `reporting_analytics`,
  `payments`, `settings_admin` and `people_employee`.
- Vertical overlays add the domain state machine: subscriptions and entitlements for SaaS;
  catalogue/order/inventory/fulfilment for ecommerce; campaigns/assets/approvals for marketing
  agencies; course/cohort/learner delivery for course creators.
- Employee administration is a governed people surface, not an afterthought: onboarding,
  access review, ownership reassignment, offboarding and role changes must leave an audit trail.

The operator shell is a workflow console, not a fixed five-slot product. The destination set is
archetype-owned and the ordering is host-assigned.

### External-client experience

The external-client journey is `invite → authenticate → see assigned work → provide/review →
approve or request change → receive evidence`:

- `client_portal` is a reusable external-boundary archetype. The current block register has a
  marketing-agency implementation row (`B058`); the archetype can be used by other verticals
  only when their own client-facing blocks and authority are declared. Do not relabel B058 as a
  universal block merely because the pattern recurs.
- `workflow_approvals`, `files_assets`, `reporting_analytics`, `documentation`, `support_desk`
  and `billing/payments` may appear as explicitly scoped portal destinations.
- The external shell must not expose internal navigation, internal search, employee records or
  tenant switching. A denied state must not reveal the existence of records outside the client's
  scope.
- The client sees reviewable evidence, not donor chrome. A donor may render bounded content below a
  host-assigned basename; it may not mint a second identity or top-level navigation silo.

## Recipe taxonomy: universal, cross-vertical and vertical-specific

The Block Hub's 80 rows are classified by recipe membership, not by how attractive a component
preview looks:

| Scope | Block count | Meaning | Examples |
|---|---:|---|---|
| `universal` | 31 | Present in the Digital Business OS and all four vertical overlays | identity, shell, settings, files, workflows, website, CRM, projects, support, reporting |
| `cross_vertical` | 11 | Present in two or more overlays but not in the shared foundation | pricing, onboarding, analytics, subscription billing, recovery, reviews, media, referrals |
| `vertical_specific` | 38 | Present in one overlay and requiring that overlay's vocabulary/state machine | ecommerce checkout/inventory, agency campaigns/social, SaaS provisioning/API access, course delivery |

This is a three-way classification so “universal” does not swallow a useful middle. The complete
80-block join, including every block ID and recipe scope, is in `surface-register.json`.

### Universal experience recipes

The universal layer is a set of reusable outcomes, not one product shell:

- **Identity and people:** `identity_access`, `people_employee`, `settings_admin`.
- **Orientation and trust:** `app_shell_navigation`, `search_command`, `notifications`,
  `audit_activity`.
- **Work and data:** `files_assets`, `workflow_approvals`, `integrations`, `reporting_analytics`,
  `data_admin`, `assistant_help`.
- **Public and relationship surfaces:** `website_cms`, `landing_page`, `blog_editorial`,
  `documentation`, `proof_case_study`, `forms_intake`, `audience_messaging`, `crm_pipeline`,
  `scheduling_booking`, `support_desk`, `shared_inbox`, `knowledge_base`, `projects_tasks`,
  `collaboration`, `payments`, `document_generation`.

These recipes can be reused in every one of the four verticals, but their copy, entities,
permission policy, state vocabulary and primary action remain context-specific.

### Cross-vertical overlays

The cross-vertical set is a deliberate join rather than a universal promise:

- `pricing_plans` spans SaaS, ecommerce, marketing agencies and course creators.
- `subscription_billing`, `entitlements_access`, `onboarding_activation`, `product_analytics`,
  `customer_success`, `incident_status` and `lifecycle_recovery` span selected SaaS/ecommerce/
  agency/course combinations shown in the Block Hub.
- `reviews_proof` spans ecommerce and course creators; `media_assets` spans marketing agencies and
  course creators; `affiliate_referral` spans course creators, ecommerce and SaaS.

### Vertical-specific recipes

- **SaaS:** trials/provisioning, metering, feature flags, roadmap/feedback and developer access.
- **Ecommerce:** catalogue/PIM, storefront discovery, cart/checkout, inventory, orders, tax/risk,
  fulfilment, shipping, returns, promotions, recovery and commerce-specific proof.
- **Marketing agency:** client portal, briefs, proposals/retainers, contracts/signatures, campaign
  calendar, assets, client approvals, social publishing, reporting decks, capacity, agency finance
  and the bounded client site/campaign editor.
- **Course creator:** course/lesson delivery, cohorts/progress, community, live events, assignments,
  certificates, paid memberships, learner communication, learner portal and media delivery.

Vertical-specific does not mean “must be custom code.” It means the recipe cannot be assumed to
have universal entities or authority. It may be implemented through a qualified source, an
extracted package, a generated pattern or a custom delta after the reuse-shape gates run.

## 21st.dev supply → controlled component roles

The corpus is a supply index, not a role system:

```text
21st identity / preview / bundle / source-bearing record
  → raw tag as retrieval hint only
  → normalized anatomy and controlled component role
  → recipe slot with allowed states and tokens
  → surface recipe with vertical and audience scope
```

The join has four rules:

1. **Preserve identity before dedupe.** The 8,515 count is the union of two complementary stores.
   The 2,942 overlap is not disposable duplication: it often carries both source and compiled
   preview artifacts.
2. **Treat tags as evidence for retrieval, never as roles.** `hero`, `card`, `grid`, `table`,
   `form`, `modal`, `spinner`, `dashboard`, `navigation-menu`, `gallery`, `data-visualization`
   and the other 75 tags are hints. They may be multi-valued, stale or weakly inferred. A role is
   a controlled contract such as `data.table`, `workflow.approval` or `content.hero` with an
   anatomy, semantic-token families, allowed states and responsive behavior.
3. **Separate visual role from business capability.** A `table` preview can serve CRM, orders,
   inventory, employee administration or reporting only after the recipe supplies data authority,
   actions, empty/error semantics and permission scope. A component tag never proves a business
   capability.
4. **Promote only after role fit and provenance gates.** Bundle-only entries may be preview/reference
   supply; source-bearing entries still require rights, dependency, adaptation and qualification
   records. No 21st artifact is admitted by this packet.

The controlled role catalogue in `surface-register.json` names the token families it may consume.
All roles ultimately resolve through the Actionist semantic contract (`component → semantic →
primitive`), never from a raw tag or a raw color/spacing literal.

## Navigation and archetype boundaries

The four-layer model is stable across verticals:

| Layer | Owns | Must not own |
|---|---|---|
| `L0_host_frame` | identity/session, tenant authority, URL space, global search entry, notification entry, settings route, token resolver, rail rendering/order | vertical vocabulary and donor internals |
| `L1_archetype_shell` | destination set, domain names and persistent context surfaces such as an SLA/deadline indicator | identity, tenant authority, URL basename and ordering primitives |
| `L2_capability_navigation` | tabs, view switchers and record routes below a host-assigned basename | top-level rail rows or unscoped routes |
| `L3_donor_chrome` | donor's internal below-fold structure when the reuse shape allows it | donor login, tenant switcher, host rail row, host-covering modal or authority |

The evidence rejects a universal five-area shell. Five is not a schema; at most it is a checked
budget choice for one archetype. The current shell contract carries a destination cap of **7** and
navigation depth of **2**, with no donor-named rail row. A donor declares navigation intent
(`label`, `icon`, `routeRef`); the host assigns the destination and order. Collapsed navigation
must preserve the same meaning and destination set.

The geometry default is a class rule, not a ratio: a roughly **320px** rail at viewports at or
above **1056px**, an icon rail of roughly 48–80px below that, and a bottom bar or overlay below
roughly **768px**. This is an evidence-backed default from the shell packet, not a universal
requirement. Scheduling, field and external-portal archetypes may override it. The portal override
is a security boundary: external clients receive only the routes and search surface explicitly in
their scope.

## Actionist token harmonization

One DesignDNA selection resolves to one immutable, validated token pack. A surface consumes
semantic roles; it does not consume DesignDNA directly or copy a donor variable name into the host
namespace.

- Host semantic namespace: `--am-*`; donor variables never enter it.
- Required modes: `light` and `dark`; dark values are explicit and are not an RGB inversion.
- The P07 semantic contract has **17 role families / 110 semantic roles**. This register maps
  controlled component roles to those families, including canvas, surface, text, icon, border,
  action, status, link, form, nav, dataviz, shape, elevation, space, type, motion and shell.
- The authored token pack is separately defined as **75 requirements across 10 groups** with gates
  A–J. Composition adds runtime gates K–N for resolved properties, encoding correctness, visual
  coherence and mode transitions.
- Binding class is structural: B1 owned/native emission, B2 extracted/source retokenization, B3
  scoped variable bridge, B4 scoped stylesheet override (fragile), B5 frame negotiation. A
  cross-origin frame cannot claim token parity; its ceiling is bounded/none.
- A `theme` edit chooses a valid pack or declared context offset. It never authors arbitrary RGB,
  CSS, gradients, radii or spacing values. A client-facing style choice is therefore reproducible,
  gateable and replayable.

The register does not claim that every 21st bundle is theme-ready. The audit's 86.7% and 91.7%
figures are sampled (`n=25`, `n=60`) and remain unmeasured at corpus scale. Visual taste remains a
human gate after deterministic token/state checks.

## Responsive contract

Every recipe selects a responsive profile from the register. Profiles share four viewport classes:

| Class | Default host behavior | Meaning-preserving rule |
|---|---|---|
| `wide` (≥1280px) | full shell, 320px rail where the archetype uses one, multi-column content | all primary actions and context visible |
| `compact_desktop` (1056–1279px) | full rail where the archetype needs nested navigation; content gutters tighten | no destination or permission change |
| `tablet` (768–1055px) | icon rail or overlay; split panes may become a drawer; tables expose priority columns first | row/card actions remain reachable without hover |
| `mobile` (<768px) | bottom bar/overlay or public drawer; content stacks; modal/drawer becomes full-screen | no horizontal-only task, no clipped focus ring, no hidden approval action |

Profile-specific rules:

- `public`: inline navigation and CTA at wide widths; drawer/full-screen navigation on mobile;
  hero media crops by a named token and never becomes required for comprehension.
- `operator`: rail collapse preserves the destination set; dense tables become priority-column
  lists or horizontally scrollable regions with an accessible alternate; detail drawers become
  full-screen on mobile.
- `editorial`: reading measure stays bounded; article metadata and table-of-contents become a
  disclosure rather than disappearing.
- `commerce`: catalogue grids reduce columns; checkout is a linear, resumable sequence; price,
  tax, payment state and confirmation remain visible at every size.
- `portal`: minimal, external-safe navigation; internal routes are never exposed by a responsive
  collapse; approvals and file review remain primary actions.
- `learning`: course/lesson progress remains persistent; media and transcript stack; live-event
  join and assignment submit actions do not depend on hover.
- `editor`: preview and change-request controls remain reachable; two-pane desktop comparison
  becomes stacked mobile comparison without losing the selected state.

## State contract

Each recipe supports eight semantic states through the `state_catalog` and `state_profiles` in the
JSON register. The four required failure/absence states are not decorative variants:

| State | Required behavior |
|---|---|
| `rest` | show the current data/surface with explicit primary and secondary actions |
| `loading` | preserve final geometry with skeleton/progressive placeholder, `aria-busy`, and no layout jump; use a spinner only as a supplement |
| `empty` | explain what is absent, why it matters, and one permitted next action; never fabricate metrics or fake records |
| `error` | preserve draft/input where safe, show actionable retry/recovery, correlation/receipt reference where useful, never raw stack traces |
| `denied` | state that access is unavailable, provide request/access-owner path, and avoid revealing out-of-scope record existence |
| `success` | confirm the changed state and expose the next useful action/receipt |
| `invalid` | identify the field/constraint, retain user input, provide correction without discarding the draft |
| `stale` | label last-known time/source, distinguish read-only stale data from live data, and offer refresh/reconciliation |

Operator, public, commerce and portal profiles specialize copy and permitted actions, but not the
state names. Status colors never stand alone: icon, label, pattern or position provides redundant
meaning. Loading, error and denied states are covered by the same semantic token and responsive
rules as the rest of the surface.

## Bounded mini-vibe editor

The mini-vibe editor is a typed change surface over a composed recipe, not a general code editor.
It allows a client or operator to express visual/content intent and returns a plan with an explicit
outcome. It is the same seven-verb vocabulary across substrates; the substrate changes authority,
anchor class and cost.

### Directly supported operations

- `text` in declared content slots.
- `theme` as a valid token-pack/context-offset selection on owned UI; a declared token bridge on
  an embedded module.
- `reorder` only in order-independent slots; host-side seams for embedded/framed surfaces.
- `add` only where a slot enumerates permitted roles/capabilities; host wrappers for embedded
  modules and frame-level placement for intact services.
- `remove` for owned content, or donor/host chrome-suppression flags where the boundary explicitly
  supports them. Removal records an inverse and reports orphaned bindings.
- `replace` only among deterministic, port-compatible owned candidates. Replacing a donor is a
  composition change and escalates.
- `data-binding` only within the release's declared scope, with high authority and an explicit
  data-owner check. It is not a cosmetic mini-vibe control.

### Refused or escalated operations

The editor has no encoding for free-form code, raw CSS/style literals, coordinate/DOM/line anchors,
unregistered components, donor-authored top-level navigation, donor login/tenant switching,
cross-origin token theming, out-of-scope data binding, destructive data deletion, or an unbounded
chat escape hatch. A refused operation names the violated constraint and nearest supported
alternative. A legitimate but governing-rule-overridden change is `deferred` with the overriding
rule. A change that needs a human composition or contract change is `escalated` with its transition
and price.

The persisted record stores:

```text
EditRecord = intent (why, version-independent)
           + resolution (how against version V, disposable)
           + receipt (who approved which artifact hash and when)
```

Anchors are semantic (`contract_slot`, `semantic_role`, `bridge_token`, `host_seam` or explicitly
priced `donor_export`). Coordinates are forbidden. On upgrade, resolution is discarded and intent
is replayed against V+1. `RESOLVED` may proceed; `DEGRADED` and `ORPHANED` are retained, named and
block auto-publish. Every channel—visual controls, chat, agent, API, migration and upgrade—must
resolve through the same authority table or boundedness is decorative.

### Reuse-shape consequences

The experience contract keeps the master synthesis's reuse shapes distinct:

| Reuse shape | Experience consequence |
|---|---|
| intact service | host owns frame/route/permissions; internal theme/text/data edits are denied; mode/chrome negotiation is bounded |
| embedded module / microfrontend | host owns identity, rail and token bridge; declared content slots and host wrappers may be edited; donor exports carry upgrade debt |
| transplanted subsystem | treat as embedded/native only where its seams and ownership are declared; source edits become engineering changes, not vibe edits |
| extracted package | owned UI after extraction; semantic roles and contract slots are editable, with source/rights/qualification still separately gated |
| adapter | service remains authority; host edits only declared query/command/presentation seams; data scope is never widened by a vibe edit |
| generated from pattern | output is owned UI; pattern evidence is reference input, not copied markup; raw literals remain forbidden |
| template/archetype | selects a versioned recipe and slot set; it does not grant a client arbitrary structure or data authority |
| custom delta | owned and typed if it fits the same contracts; otherwise it is an escalated contract transition |

Quality is the first ranking dimension, but rights and reimplementation cost remain recorded. A
pattern with an unclear license may be the best design evidence and still be reference-only; a
rights-cleared donor with high absorption cost may be preserved as a service. These are packaging
decisions, not silent rejection rules.

## Visual/product-surface scoring for a repository Value Matrix

The Value Matrix needs a visual/product-surface dimension that is reproducible from controlled
screenshots, not a subjective star column. The scoring contract is in `surface-register.json` under
`value_matrix_visual_scoring`; its purpose is to decide whether a repository contributes a viable
**user-visible product surface**. It is intentionally not a quality gate for an engine, connector,
data model, API, or UI pattern used as reference/reimplementation input. Those rows receive
`ui_quality_gate: not_applicable` and retain their own capability, rights, runtime and maintenance
evidence.

### Scored dimensions and machine signals

Each scored surface produces a 0–100 value for these dimensions. High is good for every dimension
except `donor_chrome_removal_burden`, whose raw measure is a cost and is inverted before the overall
score. The score record keeps both raw signals and the normalized value so a high score cannot hide
an expensive or fragile boundary.

| Dimension | What is measured from the controlled surface |
|---|---|
| `professional_coherence` | cross-screen semantic-token resolution, unresolved styles, namespace leakage, surface treatment agreement and absence of visually broken artifacts |
| `hierarchy` | landmark/heading order, primary-action salience, grouping/alignment, reading order and visual emphasis concentration |
| `typography` | resolved font/weight availability, fallback use, text overflow/wrapping, line-height/measure and text/background contrast |
| `spacing_density` | spacing-scale membership, alignment rhythm, control density, hit targets, clipping and content stress at representative rows/cards/forms |
| `interaction_state_completeness` | rest, hover, focus-visible, active, selected, disabled, loading, empty, error, denied, invalid, success and stale coverage where applicable |
| `responsive_quality` | overflow/clipping, action reachability, layout-shift, breakpoint behavior, drawer/rail collapse and content-priority preservation |
| `accessibility` | contrast, semantic/ARIA structure, keyboard path, focus visibility, reduced motion, target size, labels and critical axe/validator findings |
| `visual_consistency` | computed-property agreement for shared roles, light/dark parity, repeated-component variance and identical-first donor binding diff |
| `donor_chrome_removal_burden` | duplicate identity/search/settings/nav controls, suppression selectors, patch/export anchors, host seams and reimplementation/maintenance cost; lower raw cost is better |

The proposed product-surface gate is: reproducible capture present; no critical accessibility,
tenant/identity or overflow failure; overall normalized score at least 75; no dimension below 60;
`accessibility` at least 90; `interaction_state_completeness` and `responsive_quality` at least
70; and normalized chrome-burden score at least 60. These thresholds are **policy proposals to be
calibrated**, not measured industry constants. A score below the gate does not erase a useful
engine/pattern candidate; it changes the product-surface reuse decision or requires a named
reimplementation/reuse-shape transition.

### Positive-anchor calibration set

Four local product surfaces are calibration anchors, not proof that every surface is equally good:

- **AFFiNE** — complete Docs client with document navigation, documents, whiteboard, databases,
  search, favorites, tags and templates. The local decision preserves the complete experience in a
  framed module and explicitly adds loading/offline/crash states and a narrow host bridge. This is
  the anchor for a rich editor/workspace surface with contextual donor chrome.
- **Twenty** — real CRM frontend/runtime with objects, fields, views, permissions, workflows,
  record/table lenses and a dedicated data owner. This is the anchor for metadata-driven CRM/table
  surfaces and for measuring the cost of preserving donor identity/session chrome.
- **Chatwoot** — account-scoped inbox, conversation, contact, assignment, campaign and SLA surface
  with channel/provider state. This is the anchor for queue/thread/support UX and high-volume
  communication states; its service/adapter boundary must be scored separately from its UI.
- **Plane** — host-level rail substitution with contextual project sidebar, route headers, pages,
  boards, dialogs and stores preserved. This is the anchor for a native/transplanted operational
  surface where donor chrome is selectively preserved rather than removed wholesale.

Calibration is not a claim that screenshots have already been captured in this research lane. The
register records each anchor's expected surface set, reuse shape, mount/binding profile, calibration
floor and evidence path. `calibration_status` remains `protocol_defined_not_run` until a later
authorized screenshot run supplies actual vectors. The controlled protocol must run the same matrix
for all four anchors before the Value Matrix treats a score as comparable.

### Reproducible screenshot protocol (VSCP-1)

1. Pin the browser/runtime image, Playwright version, font files, locale (`en-US`), timezone (UTC),
   color profile (sRGB), device scale factor (1), reduced-motion preference and deterministic seed.
   Disable animations/transitions only through a test preference; do not remove stateful UI.
2. Start from a fixture manifest containing synthetic, non-client data: enough rows/cards/messages to
   exercise normal density, long labels, empty collections, validation errors, denied scope, stale
   timestamps and success receipts. Freeze clock, random IDs, network mocks and image responses.
3. Capture each anchor's declared representative surfaces at viewports `1440x1024`, `1280x900`,
   `1024x768`, `768x1024` and `390x844`, in `light` and `dark` where the surface supports both.
   Use the same surface/state/viewport/mode tuple across anchor comparisons whenever a semantic
   equivalent exists; do not compare unrelated pages pixel-for-pixel.
4. For each surface capture the state set declared by its profile. At minimum capture rest, loading,
   empty, error, denied, success, invalid and stale; add hover, focus-visible, selected, disabled and
   active probes to the interaction ledger. Record the action path used to reach each state.
5. Emit one immutable manifest row per capture with `anchor_id`, `surface_id`, `recipe_id`,
   `reuse_shape`, `mount_profile`, `viewport`, `mode`, `state`, `fixture_hash`, `browser_hash`,
   `screenshot_sha256`, `aria_snapshot_sha256`, `computed_style_digest`, `dom_contract_digest`,
   `capture_timestamp`, and `network_assertion`.
6. Derive signals mechanically: screenshot and DOM bounding boxes for hierarchy/spacing, OCR/font
   metrics for typography, computed styles for token consistency, overflow/focus probes for
   responsiveness, accessibility/contrast reports for accessibility, and an explicit donor-chrome
   inventory for removal burden. Store raw counts before normalization.
7. Score each dimension per capture, aggregate by surface using the median across repeated captures,
   aggregate a repository surface score using the median across its representative surfaces, and
   retain the worst critical accessibility/responsive/state result. Do not let a polished hero hide a
   broken table, form or denied state.
8. Compare product-surface candidates against the four anchors and a same-surface baseline. Run an
   identical-first diff before any harmonization, then a cross-surface computed-property comparison
   after binding. A passing build or a present bridge file is not a visual pass.
9. Store the score record and gate verdict in the Value Matrix. For a failed product surface, record
   the nearest supported reuse shape (service, adapter, pattern, reimplementation or custom delta),
   the burden/cost and the failed dimension. For engines and patterns, record `not_applicable` rather
   than penalizing them for lacking a user interface.

The protocol is deterministic about capture and measurement; human review remains required for
whether a surface is professionally coherent and whether a bounded donor ceiling is commercially
acceptable. The human verdict must reference the immutable capture manifest, not an unrecorded
browser session.

## Unresolved questions and falsifiers

- The taxonomy is a contract synthesis, not a measured user test. No published evidence ties a
  particular navigation count to task success; five-area universality remains rejected as an
  assumption, not replaced by a proven universal count.
- The corpus-wide theme-eligibility rate is unmeasured. The available 86.7%/91.7% figures retain
  their sample sizes and cannot be quoted as 21st-wide rates.
- Whether a single DesignDNA plus context offsets is sufficient across public, operator and portal
  surfaces is unresolved.
- Whether clients accept bounded editing and well-explained refusals is unresolved; this is the
  highest commercial risk inherited from P13.
- Stable anchor export from heterogeneous donors and replay across real upgrades are unrun.
- Role coverage must be validated on a labeled component sample before any role becomes an admitted
  source mapping. A raw tag match alone is not a pass.

The next gate is a controlled role-fit and state/viewport review over representative references,
followed by qualification of specific reuse shapes. It is not a new broad corpus sweep and it is
not implementation of a concrete product.
