# Pick → Spec → Build: the deterministic transform

**Date:** 2026-08-27
**Scope:** how a client's *visual pick* becomes a *deterministic build instruction* an assembler model executes, without ever pasting the picked component's source.
**Claim under test:** "the model never picks a colour, a spacing value, or a layout — it only executes a spec."

Claims are marked **EVIDENCED** (source URL or command output given), **CONVENTION** (established practice, no single authority), or **CONTESTED** (disputed or unverifiable from public sources).

---

## 1. VERDICT

1. **Spec-not-markup is viable, and it is not novel — it is a *proven* production pattern.** Airbnb, Lyft, Spotify, DoorDash and Shopify all ship systems where a structured layout description travels and styling is resolved locally by the client. That is exactly our shape. **EVIDENCED** (§2.1).
2. The strongest prior-art lesson: **keep the schema a closed set of semantic types, never an open view tree.** Every team that stayed disciplined kept a hard-coded template/component layer on the client; the schema names *which* component, not *how it looks*.
3. **The pick is a query, not an asset.** What we retain from component #37 is its *coordinates in a variation space* — not its markup. That is the licensing firewall and it is also just a better data model.
4. The variation space is small and enumerable. A sign-in is ~8 axes; the whole realistic space for a section type is a **fillable form of 6–12 enum fields** (§3). 140 sign-ins collapse to a few hundred reachable combinations, most of which nobody picked.
5. **Recommended extraction: hybrid, className-signal-first, vision-second, hand-authored for the curated head.** Not the ordering originally assumed — because of finding 6.
6. **The bundle is NOT parseable as DOM.** Every `bundle.html` is a Vite SPA shell containing exactly **one** `<div>` and **zero** `<input>` elements; all structure lives in compiled `jsx()` calls. **EVIDENCED** (§4.1). Option (c) "parse the DOM" as originally framed is dead. But a weaker, *very useful* version survives: Tailwind className strings and content literals survive minification and are greppable.
7. Honest accuracy: coarse structural extraction (which archetype, is there a brand panel, where's the form) is materially more reliable than screenshot-to-code — but **no published benchmark measures archetype classification directly**, so anyone quoting a number for it is guessing. **EVIDENCED / no-figure-found** (§4.2).
8. Validation is a **layered gate**, not one check: schema-validate the spec → assert DOM/ARIA structure → assert token provenance → visual-diff at fixed viewports. Pixel diff alone cannot prove intent was met; ARIA alone cannot prove it looks right. **EVIDENCED** (§5).
9. **The failure mode to price in now:** the client picked a *rendering*, and we are delivering a *re-rendering*. Bespoke motion, custom illustration and one-off visual gimmicks do not survive the spec bottleneck. Previews must be shown **re-themed and re-rendered**, never as the original thumbnail (§6).
10. Do this and the IP is real: the spec vocabulary plus the curated head of hand-authored specs is the defensible asset. The assembler model is a commodity; the vocabulary is not.

---

## 2. PRIOR ART

### 2.1 Server-driven UI — the closest match, and it validates the architecture

The shape "structured description travels, styling is local" is exactly SDUI. Every major implementation independently arrived at the same firewall.

**Spotify HubFramework** — the clearest *public JSON*. **EVIDENCED**
<https://spotify.github.io/HubFramework/json-programming-guide.html>

```json
{
  "header": {
    "id": "header",
    "component": {"id": "default:header", "category": "header"},
    "text": {"title": "Delicious Food"},
    "images": {"background": {"uri": "https://spotify.com/image/of/food.jpg"}}
  },
  "body": [{
    "id": "featured",
    "component": {"id": "default:carousel", "category": "carousel"},
    "children": []
  }]
}
```

Note precisely what is **absent**: no colour, no font, no spacing, no pixel dimension. The payload carries `component.id`, `category`, `text`, `images`, `target`, `children`. Rendering and styling are resolved entirely by the component the id names. **This is the template for our spec format.** (Caveat: HubFramework is deprecated and documents no schema-version policy. **CONTESTED**)

**Airbnb Ghost Platform** — one shared GraphQL schema across Web/iOS/Android, organised as screens → sections → `SectionComponentType`. **EVIDENCED**
<https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5>

The load-bearing detail: `TITLE` and `PLUS_TITLE` can share the same underlying `TitleSection` data model, but `PLUS_TITLE` selects a different client renderer carrying Airbnb Plus branding. **Same content, same structure, different visual identity — selected by a type name, not by transmitted style.** That is our token-pack swap, exactly. Our researcher could not reach the Medium article's raw JSON figure, so the payload itself is **CONTESTED**; the architecture description is evidenced.

**Lyft** — splits **declarative** components (protobuf view primitives, no client domain knowledge) from **semantic** components (name a known client component; layout and interaction stay local). Actions are decoupled from components and reusable. Complex animation stays client-side. **EVIDENCED**
<https://eng.lyft.com/the-journey-to-server-driven-ui-at-lyft-bikes-and-scooters-c19264a0378e>

This declarative/semantic distinction is directly useful to us: our section specs are **semantic** (name a known section archetype), and only the content slots are declarative. Lyft's "complex animation stays client-side" is the same boundary we hit in §6.

**Shopify Shop app** — the server names `ProductsSection`, `CollectionsSection`, `GridLayout`, `ShelfLayout`; the client maps those to `ProductGrid` / `ProductShelf`. **Unknown layouts fall back to a client-defined default.** The template layer is deliberately hard-coded. **EVIDENCED**
<https://shopify.engineering/server-driven-ui-in-shop-app>

The fallback-on-unknown behaviour is the single most copyable idea here: it is how you version a spec vocabulary without breaking old builds.

**DoorDash** — "Facets" map ~1:1 to rendered views; fields include `id`, `component`, `text`, `images`, `events`, plus an escape-hatch untyped `google.protobuf.Struct`. Unknown action Facets are omitted for forward compatibility. **EVIDENCED**
<https://careersatdoordash.com/blog/improving-development-velocity-with-generic-server-driven-ui-components/>

DoorDash also reports the failure we should avoid: **enum additions broke generated Swift models**, pushing them to hand-maintained models; and recursive Facets caused GraphQL problems severe enough that the gateway flattened responses for clients to reconstruct. *Lesson: keep the spec shallow and prefer open string enums with a documented fallback over closed generated enums.*

**Meta/Instagram Bloks** — **CONTESTED**. No official public schema found. Reverse-engineered repos expose `layout.bloks_payload.tree`, `bk.action.*`, `bloks_versioning_id`, `styles_id` (<https://github.com/novitae/igbloks>), but this is not documented prior art and should not be cited to a client.

**How did they stop the schema becoming a markup language?** The consistent answer across all five: **a closed vocabulary of semantic component/section names, with the client owning a hard-coded renderer per name.** Nobody transmits arbitrary view trees. The moment the server can express "a div with 12px padding", the firewall is gone. **CONVENTION**, but unanimously so.

### 2.2 Structural formalisms without markup or colour

| Formalism | Can express our split sign-in? | Verdict |
|---|---|---|
| **DTCG tokens** | No — tokens are *values*, not structure | Use as the styling layer only |
| **JSON Forms UI Schema** | Partially — the form half only | Borrow for the form sub-spec |
| **Adaptive Cards** | Yes, but leaks presentation | Good versioning model to copy |
| **Figma auto-layout** | Yes, but dimension-heavy | Wrong altitude — too concrete |

**DTCG** — tokens carry `$value`, `$type`, `$description`, `$extensions`; groups are *not* semantic layout containers. **EVIDENCED** <https://tr.designtokens.org/format/>. This is the important scope limit: **the token format is deliberately incapable of expressing hierarchy, placement, or behaviour.** So it cannot be our spec format — but that is a feature. It is precisely the local styling layer that SDUI leaves to the client. Token pack = the "how it looks"; section spec = the "what it is". They compose cleanly because they cannot overlap.

**JSON Forms** — decoupled UI schema, real example **EVIDENCED** <https://jsonforms.io/docs/uischema/layouts>:

```json
{
  "type": "HorizontalLayout",
  "elements": [
    {"type": "Control", "scope": "#/properties/email"},
    {"type": "Control", "scope": "#/properties/password"}
  ]
}
```

Expresses field composition well; cannot express a brand panel, social-auth grouping, or page composition. Useful as the *inner* schema for form-bearing sections, not as the outer vocabulary.

**Adaptive Cards** — typed `Container` / `ColumnSet` / `Column` / `TextBlock` / inputs / actions, with explicit `version` and `fallbackText`. **EVIDENCED** <https://adaptivecards.io/explorer/>. It *can* express the split structure, but it is closer to a markup language than we want. **Steal its versioning + fallback design, not its vocabulary.**

**Figma auto-layout** — `layoutMode: HORIZONTAL | VERTICAL | GRID` plus padding/spacing/sizing/alignment. **EVIDENCED** <https://developers.figma.com/docs/plugins/api/properties/nodes-layoutmode/>. Structurally expressive but design-file-oriented and full of concrete dimensions — adopting it would re-introduce exactly the pixel values we are trying to keep the model away from.

**Conclusion:** none is a drop-in. The right answer is a **closed semantic section vocabulary** (§3) resolved against **DTCG tokens** for styling. **CONVENTION.**

### 2.3 Headless anatomy — proof that identity is separable from appearance

Headless libraries are the existing, shipped proof that a component's **identity lives separately from its look**. Real part lists, **EVIDENCED**:

- **Radix Select** — `Root, Trigger, Value, Icon, Portal, Content, Viewport, Item, ItemText, ItemIndicator, Group, Label, Separator` <https://www.radix-ui.com/primitives/docs/components/select>
- **Base UI Select** — `Root, Label, Trigger, Value, Icon, Portal, Backdrop, Positioner, Popup, List, Item, ItemText, ItemIndicator, Group, GroupLabel, Separator` <https://base-ui.com/react/components/select>
- **Ark UI Dialog** — `Root, Trigger, Backdrop, Positioner, Content, Title, Description, CloseTrigger` <https://ark-ui.com/docs/components/dialog>
- **Headless UI Dialog** — `Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description, CloseButton` <https://headlessui.com/react/dialog>

Design-system anatomy docs agree on *roles* but not on *names*: Material 3 text field = container / label / input / supporting text / leading+trailing icons; Carbon modal = header / body / footer / close icon / overlay; Polaris text field = label / input / help text / prefix / suffix / error; Spectrum dialog = Header / Heading / Divider / Content / ButtonGroup / Footer.

**Finding: there is a shared semantic role set but no universal naming.** `Activator ≈ Trigger`, `Panel ≈ Content ≈ Popup`, `Close ≈ CloseTrigger`. **CONVENTION.**

**Implication for us — this answers the brief's question directly: yes, a picked component reduces to ANATOMY + VARIANT + CONTENT-SLOTS.** But we must define *our own* normalised part vocabulary with documented aliases rather than adopt any one library's names, because no library's names are portable. Note also that headless anatomy is designed for *widgets* (select, dialog), not *page sections* — for sections we need our own vocabulary, which is §3.

---

## 3. THE SECTION SPEC VOCABULARY

**This is the core deliverable.** Each section type is a fillable form of enum-valued axes. Every axis is a choice the *client's pick* determines and the *model therefore never makes*.

**Grounding note.** Axes below are derived from the real corpus: `140 sign-in`, `521 hero`, `186 pricing-section`, `346 dashboard`, `200 footer`, `326 navigation-menu` components (command + output in §4.1). They are informed by the corpus, but the enum completeness is **CONVENTION** — validate by classifying a real sample before freezing v1.

### Universal envelope (every section)

```yaml
section:
  archetype: <string>            # closed vocabulary, e.g. "signin.split"
  spec_version: "1.0"
  container:
    width: full-bleed | contained | narrow
    vertical_rhythm: tight | normal | generous
    min_height: auto | viewport | half-viewport
  surface:
    treatment: flat | card | glass | bordered | elevated
    background: none | solid | gradient | image | pattern | animated
  emphasis: primary | secondary        # drives token role selection
  motion: none | entrance | scroll-linked | continuous
  content_slots: {}                    # section-specific, see below
```

Everything here names a **role**, never a value. `background: gradient` selects a gradient *from the picked token pack*; the model never chooses the colours. That is the mechanism behind the claim.

---

### 3.1 SIGN-IN (corpus: 140)

```yaml
archetype: signin.centred | signin.split | signin.offset | signin.fullbleed-overlay
axes:
  form_position:      centre | left | right
  brand_panel:        none | image | gradient | illustration | testimonial | product-shot
  brand_panel_side:   left | right | n/a
  brand_panel_ratio:  half | third | two-fifths | n/a
  logo_placement:     none | above-form | top-left-fixed | on-brand-panel
  social_auth:        none | above-divider | below-divider | only
  social_style:       icon-only-row | full-width-stacked | full-width-single
  social_providers:   [google, apple, github, microsoft, email-magic-link, sso]
  field_set:          email+password | email-only | username+password | phone | email+password+confirm
  field_style:        outlined | filled | underline | floating-label
  secondary_actions:  [forgot-password, remember-me, create-account, back-to-site]
  secondary_position: inline-with-field | below-form | footer
  submit_width:       full | auto
  legal_text:         none | below-submit | footer
  card_treatment:     none | bordered | elevated | glass
content_slots:
  heading, subheading, submit_label, brand_panel_media, legal_copy
```

Worked example — the corpus entry `designali-in__login-03` ("Login with image and logos") measured as `lg:grid-cols-2` ×1, `object-cover` ×2, `max-w-lg` ×3 (command output in §4.1) reads as:

```yaml
archetype: signin.split
form_position: right
brand_panel: image
brand_panel_side: left
brand_panel_ratio: half
social_auth: above-divider
social_style: full-width-stacked
field_set: email+password
```

Whereas `arunachalam__modern-animated-sign-in` measured `w-1/2` ×4, `bg-gradient` ×7, `absolute inset-0` ×2, `backdrop-blur` ×6 → `signin.split` + `brand_panel: gradient` + `surface.treatment: glass` + `motion: continuous`. **Two different picks, same archetype, distinguished entirely by enum values.** This is the mechanism working.

And `ephraimduncan__login-03` / `deltacomponents__auth-form` both measured `max-w-sm` + `min-h-screen` with **no** grid-cols-2 → `signin.centred`, `brand_panel: none`. Corpus descriptions confirm: "A centered login form with email and password fields, a sign-in button, and a reset-password link" and "Authentication card with Google and GitHub SSO buttons, email magic-link sign-in".

---

### 3.2 HERO (corpus: 521 — the largest category)

```yaml
archetype: hero.centred | hero.split | hero.fullbleed | hero.asymmetric | hero.stacked-media
axes:
  content_alignment:  centre | left | right
  media:              none | screenshot | illustration | video | 3d-scene | abstract-canvas | device-mockup
  media_position:     right | left | below | background | floating-overlap
  media_treatment:    plain | browser-frame | device-frame | perspective-tilt | masked
  eyebrow:            none | text | badge | pill-with-link
  heading_scale:      display | large | medium
  heading_treatment:  plain | gradient-text | highlighted-span | animated-typing
  subheading:         none | single-line | paragraph
  cta_count:          0 | 1 | 2 | 3
  cta_arrangement:    inline | stacked | inline-with-text-link
  cta_hierarchy:      solid-only | solid+outline | solid+ghost
  social_proof:       none | logo-row | avatar-stack+rating | stat-row | testimonial-quote
  social_proof_pos:   above-heading | below-cta | bottom-strip
  background:         none | gradient | grid-pattern | dots | spotlight | noise | animated-particles | video
  nav_relationship:   below-nav | overlapping-transparent-nav
content_slots:
  eyebrow, heading, subheading, cta_primary, cta_secondary, media_asset, proof_items[]
```

---

### 3.3 PRICING (corpus: 186)

```yaml
archetype: pricing.cards | pricing.table | pricing.single | pricing.cards+table
axes:
  tier_count:         2 | 3 | 4 | 5+
  billing_toggle:     none | monthly-annual-switch | tabs | slider
  toggle_position:    above-cards | in-header
  discount_badge:     none | on-toggle | on-tier
  featured_tier:      none | middle | last | first
  featured_treatment: none | scale-up | border-accent | filled-surface | ribbon | glow
  card_arrangement:   equal-row | featured-elevated | staggered | horizontal-scroll
  price_display:      amount-only | amount+period | from-amount | custom-quote
  feature_list_style: checkmarks | icons | plain | grouped-with-headers
  feature_comparison: per-card | shared-table-below | tooltip-on-hover
  cta_per_tier:       button | button+link | text-link
  cta_style_variance: uniform | featured-differs
  enterprise_row:     none | inline-tier | separate-band-below
  guarantee_strip:    none | below-cards | in-card-footer
content_slots:
  heading, subheading, tiers[{name, price, period, description, features[], cta_label, badge}]
```

---

### 3.4 DASHBOARD (corpus: 346)

```yaml
archetype: dashboard.sidebar-main | dashboard.topnav-main | dashboard.sidebar+topbar | dashboard.canvas
axes:
  nav_position:       left-sidebar | right-sidebar | top-only | both
  sidebar_state:      fixed | collapsible | icon-rail | overlay-mobile
  sidebar_sections:   flat | grouped-with-labels | nested-tree
  topbar_contents:    [breadcrumb, search, notifications, avatar-menu, actions, org-switcher]
  page_header:        none | title-only | title+actions | title+tabs+actions
  primary_layout:     stat-row+table | card-grid | split-master-detail | single-table | kanban | chart-grid
  stat_cards:         none | 2 | 3 | 4 | 5+
  stat_card_content:  value-only | value+delta | value+delta+sparkline
  data_region:        table | chart | list | calendar | mixed-tabs
  table_features:     [sort, filter, search, pagination, row-select, bulk-actions, column-toggle]
  empty_state:        none | illustration+cta | text-only
  density:            comfortable | compact
content_slots:
  nav_items[], page_title, stats[], table_columns[], actions[]
```

---

### 3.5 FOOTER (corpus: 200)

```yaml
archetype: footer.columns | footer.minimal | footer.mega | footer.cta+columns
axes:
  column_count:       0 | 2 | 3 | 4 | 5+
  brand_block:        none | logo-only | logo+tagline | logo+tagline+social
  brand_position:     first-column | above-columns | left-of-columns
  newsletter:         none | inline-in-column | full-width-band-above | full-width-band-inside
  social_links:       none | icon-row | labelled-list
  social_position:    with-brand | bottom-bar | own-column
  bottom_bar:         none | copyright-only | copyright+legal | copyright+legal+locale
  legal_links:        [privacy, terms, cookies, accessibility, security]
  locale_switcher:    none | language | language+currency | region
  cta_band:           none | above-footer | inside-footer
  divider:            none | above-bottom-bar | between-columns
  oversized_wordmark: none | background | bottom-bleed
content_slots:
  column_groups[{label, links[]}], brand_tagline, newsletter_copy, legal_links[]
```

---

### 3.6 NAVIGATION (corpus: 326)

```yaml
archetype: nav.simple-bar | nav.centred-links | nav.split | nav.mega-menu | nav.floating-pill
axes:
  logo_position:      left | centre
  link_position:      left | centre | right
  dropdown_style:     none | simple-list | mega-panel | grouped-columns-with-icons
  cta_slot:           none | single-button | link+button | link+button+avatar
  mobile_pattern:     hamburger-drawer | hamburger-fullscreen | bottom-sheet | collapse-inline
  sticky_behaviour:   static | sticky | sticky-shrink | hide-on-scroll-down
  surface:            transparent | solid | blurred | bordered-bottom | floating-detached
  search:             none | icon-trigger | inline-field | command-palette
  extras:             [theme-toggle, locale, announcement-bar-above, progress-bar]
  width:              full-bleed | contained | floating-pill
content_slots:
  logo, nav_items[{label, href, children[]}], cta_label, announcement_copy
```

---

### 3.7 How the spec forecloses model choice

The assembler receives spec + token pack and has **no remaining degrees of freedom that matter**:

| Decision | Who makes it |
|---|---|
| Layout archetype, region placement | **Spec** (from the pick) |
| Which anatomy parts exist | **Spec** |
| Colour, type scale, radius, shadow, spacing step | **Token pack** |
| Copy | **Client content** |
| Which JSX/utility class expresses `container.width: contained` | Model — *and it is free to, because the choice is not visible* |

The claim is honest **provided** the assembler is forbidden from emitting raw values. Enforce it mechanically: **lint the generated output for hex colours, raw px/rem spacing, and arbitrary Tailwind values (`[...]`)**. Any literal that is not a token reference fails the build. That lint — not a prompt instruction — is what makes the claim true. **CONVENTION.**

---

## 4. EXTRACTION: how a pick becomes a spec

### 4.1 The corpus reality (measured, not assumed)

Registry inspected read-only at `/Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st`.

**Scale.** `ls harvest | wc -l` → **7949**. Tag counts via `node find.mjs --tags`: `140 sign-in`, `521 hero`, `186 pricing-section`, `346 dashboard`, `200 footer`, `326 navigation-menu`, `94 sign-up`, `627 card`. `node find.mjs sign-in --limit 12 --json` reports `"matched": 139`. **EVIDENCED.**

**The decisive finding — the bundle is not parseable as DOM.** For `harvest/designali-in__login-03/bundle.html`:

```
script tags: 3
body-ish divs: 1
<input elements: 0
jsx( calls: 136
first 300 chars: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>... <title>Vite + React + TS</title>"
```

Generality check across 8 further bundles (`arihantcodes_1f7b8c4d__*`): every one returned **`1 divs`**, with jsx counts 16–127. **EVIDENCED.**

So each `bundle.html` is a **Vite SPA shell**: one mount div, structure entirely inside compiled `jsx()` calls. **Option (c) from the brief — "parse the bundle.html DOM structure into an anatomy" — is not available.** No static DOM exists to parse.

**But a weaker version of (c) is strong.** Tailwind classNames and content literals survive minification and are directly extractable. Measured layout signals:

| id | signals found | reads as |
|---|---|---|
| `designali-in__login-03` | `lg:grid-cols-2`×1, `grid-cols-2`×4, `object-cover`×2, `max-w-lg`×3, `min-h-screen`×3 | split + image panel |
| `arunachalam__modern-animated-sign-in` | `w-1/2`×4, `lg:w-1/2`×1, `bg-gradient`×7, `absolute inset-0`×2, `backdrop-blur`×6 | split + gradient panel + glass |
| `ephraimduncan__login-03` | `max-w-sm`×2, `min-h-screen`×3, no grid-cols-2 | centred card |
| `deltacomponents__auth-form` | `max-w-sm`×2, `max-w-md`×2, `min-h-screen`×3 | centred card |

Content literals also survive: `placeholder:"Email"`, `placeholder:"Password"` extracted from `designali-in__login-03`. **EVIDENCED.**

This means **className-signal extraction is a real, deterministic, zero-cost signal** for the axes that matter most (archetype, panel presence, panel ratio, surface treatment, background type) — and it is *deterministic*, which vision is not.

### 4.2 Vision-model accuracy — the honest number

Coarse structural extraction is materially more reliable than screenshot-to-code, but **no published benchmark measures layout-archetype classification directly**. Anyone quoting a figure for it is extrapolating. **no-figure-found.**

What *is* measured, all **EVIDENCED**:

- **Design2Code** (484 pages, 80-example HARD subset): GPT-4o scored **93.0 Block / 85.5 Position / 90.4 CLIP** on the main set; on HARD, Block collapsed to **56.6** while CLIP barely moved to **87.1**. Models omit **30–40%** of block elements. <https://arxiv.org/html/2403.03163>
  *Read this carefully: it is the single most important number in this report.* Visual similarity stays high while structural fidelity collapses. **A model can produce something that looks right and is structurally wrong** — which is exactly the failure our spec layer must not inherit.
- **WebCode2M** (2,563,905 training samples, three 256-example test splits): structural TreeBLEU for WebCoder falls **0.35 → 0.15** short-to-long pages; GPT-4o scores **0.15 / 0.13 / 0.11**. Authors name hierarchy capture an open problem. <https://arxiv.org/html/2404.06369>
- **ScreenAI**: Screen Annotation F1 **86.2** at IoU 0.1, RefExp **86.3** — but complex ScreenQA only **42.4 F1**. Recognition is easier than compositional reasoning. <https://arxiv.org/html/2402.04615v3>
- **OmniParser**: ScreenSpot grounding **73.0%** with local semantics vs **53.4%** SeeClick, **16.2%** GPT-4V. <https://arxiv.org/html/2408.00203>
- **ScreenSpot-Pro** (1,581 instructions, 23 apps): OS-Atlas-7B **18.9%**, UGround **16.5%**; iterative cropping lifts OS-Atlas to **48.1%**. <https://arxiv.org/html/2504.07981v1>
- **WebSight**: 2M synthetic screenshot/HTML pairs (v0.2). Sightseer results are qualitative — simple designs work, complex/text-heavy/out-of-distribution fail. <https://arxiv.org/html/2403.09029v1>

**Honest expectation for our task.** Our task is far easier than any of these: we are not generating code or grounding a click — we are classifying into ~5 archetypes and filling ~10 enums, from a clean, high-quality, single-section preview image. Expect **high reliability on the coarse axes** (archetype, panel presence/side, media presence, tier count, column count) and **notably weaker reliability on fine axes** (field style, exact social-button treatment, motion, density). Treat the 80–90% bounded-screen-understanding figures as an **upper bound reference, not a promise**. **Do not quote a specific accuracy number to the client** — measure it on our own 50-item labelled sample before claiming anything.

### 4.3 Recommendation — hybrid, in this order

**Stage 1 — className signal extraction (deterministic, free, run on all 7,949).**
Regex the bundle for layout signals; derive archetype + high-confidence axes. Deterministic, reproducible, costs nothing, no model in the loop. This is a *stronger* input than the brief anticipated and it should run first. Emit per-component confidence.

**Stage 2 — vision fill (cheap, scalable, on `preview.webp`).**
A vision model fills axes the classNames cannot reach (visual style, social-button treatment, proof elements, density). Critically: **it fills a fixed enum-valued form, never free text.** Constrained enum output is the single biggest accuracy lever — it converts open-ended understanding into multiple choice, and it makes the output schema-validatable.

**Stage 3 — reconcile + flag.**
Where stage 1 and stage 2 agree, accept. Where they disagree, flag for review. Disagreement rate is itself the accuracy metric — you get measurement for free.

**Stage 4 — hand-author the curated head.**
For the ~200 components that will actually be offered (10 per category × 20 categories), a human reviews and corrects the auto-derived spec. At ~5 minutes each that is roughly **17 hours of work, once** — and it is the highest-value 17 hours in the project, because a hand-verified spec is the difference between "the assembler builds the right thing" and "the assembler builds something plausible".

**Why this ordering beats vision-first:** the deterministic signal is free and never hallucinates. Use the model only for what the regex genuinely cannot see. It also gives you a permanent cross-check rather than an unverifiable single source.

---

## 5. THE VALIDATION LOOP

Four layers. **No single layer is sufficient** — this is the load-bearing point.

**Layer 1 — Schema validation (deterministic).** The emitted spec validates against the section-type JSON Schema: known archetype, all enums in range, required slots present. Cheap, catches malformed specs before any build.

**Layer 2 — Structural assertion (deterministic, the important one).** After build, assert the rendered DOM matches the spec. Playwright's `toMatchAriaSnapshot()` compares a YAML accessibility tree with partial role/hierarchy matching (`contain` / `equal` / `deep-equal`). **EVIDENCED** <https://playwright.dev/docs/aria-snapshots>. This is the closest built-in primitive for asserting a structured UI contract.

Each axis becomes a mechanical assertion. `brand_panel: image` → an `img` exists in the first grid child. `social_auth: above-divider` → the social button group precedes the separator in document order. `tier_count: 3` → exactly three pricing cards. **Generate these assertions from the spec itself** — that is what closes the loop and makes the system verifiable rather than hopeful.

**Layer 3 — Token provenance lint (deterministic, this is what earns the claim).** Scan generated source for hex colours, raw px/rem values, and arbitrary Tailwind values. Any non-token literal fails. Without this the "model never picks a colour" claim is a promise; with it, it is a build gate.

**Layer 4 — Visual regression (fuzzy, triage only).** Playwright `toHaveScreenshot()` — default colour threshold **0.2**, `maxDiffPixels`/`maxDiffPixelRatio` unset unless configured **EVIDENCED** <https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1>. Alternatives: BackstopJS via Resemble.js, default `misMatchThreshold` **0.1** <https://github.com/garris/BackstopJS>; Argos thresholds 0–1, default **0.5**, with optional ARIA snapshots <https://argos-ci.com/docs/reference/playwright.md>. Percy and Chromatic capture DOM/styles/assets and re-render in controlled cloud browsers. Applitools markets structural visual analysis but publishes no reproducible benchmark — **CONTESTED**, do not cite to a client.

Use layer 4 **against our own previous build**, never against the original 21st thumbnail — a diff against the original would always fail by design, since re-theming is the point.

**Critical caveat from Design2Code, restated:** on the HARD subset, CLIP stayed at **87.1** while Block Match fell to **56.6**. Visual-similarity scores are demonstrably insensitive to structural error. **Never gate on visual similarity alone.** Layers 2 and 3 are the real gate; layer 4 catches regressions between our own builds. Use CLIP/LLM judges for triage and ranking only.

---

## 6. HONEST FAILURE MODES

**What is lost between the thumbnail and the built thing:**

1. **Bespoke motion and 3D.** The corpus contains genuine one-offs — `larsen66__hero-futuristic` is described as "an interactive 3D scene with a scanning effect and depth map"; `manuarora700__hero-parallax` as "scroll effect with rotation, translation and opacity animations". `motion: scroll-linked` in a spec does not reproduce a hand-tuned parallax rig. Lyft reached the same boundary and kept complex animation client-side. **Either build a small library of real motion presets the spec can name, or exclude motion-heavy picks from the offering.** Do not let a spec field imply a capability that does not exist.

2. **Custom illustration and imagery.** A pick whose appeal is its artwork loses that artwork entirely. The spec says `brand_panel: illustration`; the built thing gets *an* illustration, not *that* one. For image-led picks this is most of the perceived value.

3. **The long tail of micro-decisions.** Specific easing, a particular border-radius rhythm, a one-off hover, precise optical spacing. Individually invisible, collectively "it doesn't feel as nice as the picture". This is the most common and most under-anticipated complaint.

4. **Enum coverage gaps.** Any pick whose distinguishing feature has no axis silently collapses into its nearest neighbour. **Two different picks can produce identical specs** — and then the client wonders why choosing differently changed nothing. Mitigation: adopt Shopify's unknown-fallback discipline, and log spec collisions as a coverage signal telling you which axis to add.

5. **Spec drift under versioning.** DoorDash's report — enum additions broke generated models, forcing hand-maintained ones — is our future if we generate types from closed enums. Use open string enums with documented fallbacks, and version specs from day one.

6. **Density and content-length reality.** Real client copy is longer than demo copy. A layout that looks balanced with "Sign in to your account" breaks with the client's actual heading. The spec captures structure, not the content that will stress it.

**What to promise the client — and what not to.**

Promise: *"You are choosing a **layout and a style direction**. We build it fresh, in your brand, so it is consistent with the rest of your app, fully yours, and cleanly licensed."*

Do **not** promise: *"You'll get that."*

**Operational consequence — this is the actionable one.** The gallery must show **re-themed, re-rendered previews built from our own specs in a neutral or the client's token pack** — never the original 21st thumbnail. Showing the original creates an expectation the system is architecturally incapable of meeting, and every subsequent conversation is a disappointment relative to a picture we chose to show. Rendering our own previews also means **the preview is the spec's output, so what the client picks is exactly what the system can build** — the expectation gap closes by construction, and previews become a free end-to-end test of the whole pipeline.

---

## 7. OPEN QUESTIONS

1. **Is the enum vocabulary complete?** Unvalidated. Classify a labelled sample of ~50 sign-ins against §3.1 and measure the "doesn't fit / collided with another pick" rate before freezing v1.
2. **What is our actual vision-fill accuracy?** Unknown and unknowable from published benchmarks (§4.2). Measure on our own labelled sample. Do not quote a number until then.
3. **How many archetypes per section type is right?** Too few and picks collapse; too many and the assembler needs a bespoke renderer each. Shopify's hard-coded template layer suggests the number should be small (~4–6) and stable.
4. **Does the assembler need a renderer per archetype, or can it compose from primitives?** This is the biggest architectural fork. Prior art (Shopify, Airbnb) says **hard-code the renderers** — it is the thing that stops the schema becoming a markup language. Composing from primitives is more flexible and much more likely to drift.
5. **Where do motion presets live** — spec vocabulary, token pack, or excluded? Affects both §3 and failure mode 1.
6. **Multi-tag components.** The registry is a faceted index, not a tree — 47.4% of components carry two or more tags (`AGENT.md`). Does a card that is also a testimonial get one spec or two?
7. **Licensing posture confirmation.** This report assumes "adapt, don't paste — approaches, never markup". The className-signal extraction in §4.3 reads the bundle to *derive enum values*, and emits no markup. That should be comfortably inside the posture, but confirm it explicitly before building, since it is the one place we programmatically read the artefact.

---

## Sources

**SDUI:** [Airbnb Ghost Platform](https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5) · [Lyft](https://eng.lyft.com/the-journey-to-server-driven-ui-at-lyft-bikes-and-scooters-c19264a0378e) · [Spotify HubFramework JSON](https://spotify.github.io/HubFramework/json-programming-guide.html) · [Shopify Shop app](https://shopify.engineering/server-driven-ui-in-shop-app) · [DoorDash generic SDUI](https://careersatdoordash.com/blog/improving-development-velocity-with-generic-server-driven-ui-components/)

**Formalisms:** [DTCG format](https://tr.designtokens.org/format/) · [JSON Forms layouts](https://jsonforms.io/docs/uischema/layouts) · [Adaptive Cards](https://adaptivecards.io/explorer/) · [Figma layoutMode](https://developers.figma.com/docs/plugins/api/properties/nodes-layoutmode/)

**Anatomy:** [Radix Select](https://www.radix-ui.com/primitives/docs/components/select) · [Base UI Select](https://base-ui.com/react/components/select) · [Ark UI Dialog](https://ark-ui.com/docs/components/dialog) · [Headless UI Dialog](https://headlessui.com/react/dialog)

**Vision/benchmarks:** [Design2Code](https://arxiv.org/html/2403.03163) · [WebCode2M](https://arxiv.org/html/2404.06369) · [ScreenAI](https://arxiv.org/html/2402.04615v3) · [OmniParser](https://arxiv.org/html/2408.00203) · [ScreenSpot-Pro](https://arxiv.org/html/2504.07981v1) · [WebSight](https://arxiv.org/html/2403.09029v1)

**Validation:** [Playwright ARIA snapshots](https://playwright.dev/docs/aria-snapshots) · [Playwright toHaveScreenshot](https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) · [BackstopJS](https://github.com/garris/BackstopJS) · [Argos](https://argos-ci.com/docs/reference/playwright.md)
