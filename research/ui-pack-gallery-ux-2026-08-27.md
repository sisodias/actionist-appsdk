# Pack Gallery UX — how a non-technical client picks a design-token pack

Research date: 2026-08-27
Scope: the **picking experience** for 20–30 pre-authored token packs in Actionist (Action Model), chosen *before* any app is generated. Not the token schema.

Every claim is tagged:
- **EVIDENCED** — backed by a cited study, primary doc, or a page I fetched myself.
- **CONVENTION** — widespread practice, no controlled evidence found.
- **CONTESTED** — the literature actively disagrees; both sides reported.
- **UNVERIFIED** — I could not confirm it; stated as such.

---

## 1. VERDICT — the recommended picker, in 10 lines

1. **One scrolling grid, all packs visible simultaneously — not a wizard, not one-at-a-time.** This is the strongest evidence in the whole report: simultaneous presentation beats sequential on decision quality, satisfaction, *and* commitment (Basu & Savani 2017; Mogilner et al. 2013; replicated 2024). Commitment is exactly what we need — a client who re-picks three times has cost us three builds.
2. **Ship 12–18 packs on the default view, not 30.** Chunk into 3–4 named groups of 4–6. The count matters less than whether the grouping is meaningful to the client (Rosati; *Universal Principles of Design*).
3. **Card = a miniature rendered UI, not a swatch row and not a full screenshot.** Swatches don't answer "how will my app feel"; screenshots promise content we won't deliver.
4. **Every card renders the SAME reference screen.** Identical content is what turns a gallery into a comparison. NN/g: differences must be explicit, not implied.
5. **Reference screen = an app shell with a data card, a primary+secondary button pair, a text input, a table row, and three levels of type.** Argued in §4. It exercises surface layering, borders, focus, solid accent, and text — the Radix 1–12 role span — in one view.
6. **Name by vibe, subtitle by attribute.** "Quiet Ledger — muted slate, tight spacing, serif headings." Google Fonts ships a "Feelings" filter as a first-class control; vibe is how non-technical people actually search.
7. **Group by aesthetic/vibe, NOT by industry.** Industry taxonomy is a marketplace-inventory convention (Wix, Shopify, Framer) that carries no styling information — and Shopify itself admits no theme is restricted to an industry.
8. **Show light mode on the card; make dark a hover/toggle on the detail view; author both, always.** Never let the client "pick light."
9. **Two pickers, sequential, STYLE FIRST then STRUCTURE.** Style is the cheap, reversible, identity-defining pick; structure is the 7,949-component search space. Picking style first collapses that space and makes every section preview already-branded.
10. **Detail view must include a long-text / empty-state stress panel.** The single most-documented failure of template galleries is that the demo looks nothing like the delivered result.

---

## 2. What does a pack card show?

### The four options in the wild

**(a) Colour-swatch rows.** Radix Colors documents the 12-step scale with each step carrying an assigned role — 1 app background, 2 subtle background, 3–5 component backgrounds (rest/hover/active), 6–8 borders and focus rings, 9–10 solid accents, 11–12 text. Tailwind's palette docs render similar numbered ramps.

Verdict: **precise but non-predictive.** A swatch row tells you the palette; it does not tell you what a button looks like. The mechanism is documented — components reference semantic tokens internally, so a button's *background* is the theme colour but its radius, border, and shadow are separate tokens a swatch row never shows.
Tag: **EVIDENCED** (Radix role assignment) / **CONVENTION** (the inadequacy claim is reasoned, not measured).

**(b) Miniature rendered UI — the convergent answer.**

tweakcn (https://tweakcn.com, https://github.com/jnsahaj/tweakcn) is the closest live analogue to what we're building. I fetched `https://tweakcn.com/editor/theme` directly. Its preview tab row is:

> `Custom | Cards | Dashboard | Application | Marketing`

and the rendered demo surfaces include revenue/subscription stat cards, a calendar, an activity card, an upgrade form, "Team Members", "Cookie Settings", a date-range picker, a "Create an account" signup form, a chat panel, a "Report an issue" form, a "Payments" data table, and a share panel. Its editor sidebar groups colours as Primary, Secondary, Accent, Base, Card, Popover, Muted, Destructive, Border & Input, Chart 1–5, Sidebar.
Tag: **EVIDENCED** — fetched 2026-08-27.

tweakcn's stated motivation is directly our problem: *"Websites made with shadcn/ui famously look the same."* (README, github.com/jnsahaj/tweakcn) Tag: **EVIDENCED**.

Figma **First Draft** is the other direct precedent, and it is the closest to our flow because the style pick happens *around generation*: you preview different themes by clicking thumbnails underneath the prompt, and the theme controls cover colour, border radius, spacing, typography, and a light/dark toggle. (https://help.figma.com/hc/en-us/articles/23955143044247-Use-First-Draft-with-Figma-AI, https://www.figma.com/blog/figma-ai-first-draft/)
Tag: **EVIDENCED**.

Note also that First Draft lets you pick from **four libraries** ranging from a lo-fi wireframing library to higher-fidelity ones — an explicit two-axis split (library × theme) that is prior art for our §6 question. Tag: **EVIDENCED**.

**(c) Full screenshot.** ThemeForest, Wix, Shopify, Framer. High visual appeal, and it is what marketplaces converge on — but see §7: this is precisely the pattern that generates the "looks nothing like the preview" complaint, because the screenshot's persuasive power comes from demo content the buyer doesn't have.
Tag: **CONVENTION** for the pattern; **EVIDENCED** for the failure mode (§7).

**(d) Animated / interactive preview.** Not recommended for the card. NN/g's guidance on product imagery favours simple interactions — clicking thumbnails or a next button usually beats making users struggle with a rotating 3D view. (https://www.uxtigers.com/post/photography) Tag: **EVIDENCED**, though transferred from ecommerce imagery to theme previews by analogy.

### Preview fidelity vs decision confidence — what evidence exists

I found **no study specifically on theme-preview fidelity and decision confidence.** Tag: **UNVERIFIED** — do not claim one exists.

The nearest real evidence is NN/g's ecommerce imagery research, which splits cleanly along a line we can borrow:

- Thumbnails serve **identification and navigation** — must be large enough to differentiate, and must reflect the user's expressed interest. NN/g's failure case: a "green water bottle" search returning thumbnails that didn't show green bottles, which destroyed at-a-glance confidence.
- The enlarged view serves **evaluation and confidence** — must be big enough to reveal detail the copy omits. In NN/g testing, users glean product details from images including details not covered in the description.
- Nielsen's compromise: thumbnail first, enlarge on click, and the enlarged version must be *really* big, not 25% bigger.
(https://www.nngroup.com/articles/product-photos-listing-pages/, https://www.uxtigers.com/post/photography)
Tag: **EVIDENCED** for ecommerce; **CONVENTION** when transferred to token packs.

Baymard's parallel finding: on large screens, the better use of space is scaling up each list item for higher-resolution imagery rather than cramming more columns. (https://baymard.com/blog/responsive-upscaling) Tag: **EVIDENCED**.

**Recommendation:** miniature rendered UI on the card (identification), full reference screen + stress panel on the detail view (evaluation). This is the thumbnail→detail split, applied to design systems.

---

## 3. How many options before paralysis?

### The literature is genuinely CONTESTED — report it honestly

**Original.** Iyengar & Lepper (2000): a tasting booth with 6 vs 24 jams. The large assortment drew more passersby (~60% vs ~40% stop rate) but converted far worse (~3% vs ~30%). Effect size reported at d ≈ .77.

**The null meta-analysis.** Scheibehenne, Greifeneder & Todd (2010), "Can There Ever Be Too Many Options? A Meta-Analytic Review of Choice Overload", *Journal of Consumer Research* 37(3): 63 conditions, 50 experiments, N = 5,036. **Mean effect size virtually zero (D ≈ 0.02)** with large between-study variance. Scheibehenne's own direct jam replication with a larger sample produced ~zero; jelly-bean and red-wine studies produced *negative* effects.
(https://academic.oup.com/jcr/article-abstract/37/3/409/1827647)

**The moderator rebuttal.** Chernev, Böckenholt & Goodman (2015), "Choice overload: A conceptual review and meta-analysis", *Journal of Consumer Psychology* 25, 333–358: 99 observations, N = 7,202. The effect is robust **once four moderators are accounted for** — choice set complexity, decision task difficulty, preference uncertainty, and decision goal.
(https://chernev.com/wp-content/uploads/2017/02/ChoiceOverload_JCP_2015.pdf)

Tag: **CONTESTED.** The honest summary: "more options are always worse" is not supported; "more options are worse under specific conditions" is.

### Why this matters for us specifically — we hit three of the four moderators

Our client is a non-technical person picking a visual identity before a build:

- **Preference uncertainty — HIGH.** They do not have a pre-formed opinion about spacing scales. Chernev's own gloss on this moderator is the decision maker being unsure how to aggregate preferences across dimensions. That is exactly our client.
- **Choice set complexity — HIGH if we get the card wrong.** Chernev's gloss: hard-to-compare alternatives. A gallery where every pack renders a *different* screen is definitionally hard-to-compare. **This is the design lever we control**, and it argues the same-screen rule of §4 does more work than trimming the count.
- **Decision task difficulty — MEDIUM.** Low time pressure, but consequential-feeling.
- **Decision goal — LOW risk.** The client is committed to building; they are not browsing idly.

So the defensible position is: **overload is a live risk for us, and the highest-leverage mitigation is reducing set complexity (same reference screen, explicit differences), not shrinking the catalogue.** Tag: **EVIDENCED** (moderators are from Chernev et al.); the mapping onto our client is my reasoning — **CONVENTION**.

### One more datapoint with a real N

Iyengar's Vanguard 401(k) analysis of 739,749 employees: participation fell roughly 2% for every ten additional funds offered — a 5-fund plan saw ~10% higher participation than a 50-fund plan. Cited via https://lawsofux.com/choice-overload/. Tag: **EVIDENCED** as reported, though I read it through a secondary source, not the original paper.

### Hick's Law does NOT license "just show fewer"

*Universal Principles of Design* states the law **does not apply to complex menus or hierarchies**, because such selection involves reading, scanning, and problem-solving rather than simple stimulus-response; its recommendation is to test with the target population instead.

The mechanism matters: the logarithmic curve only holds if the user can subdivide the set. Rosati's paper concludes that time-to-choose depends **less on the number of options and more on how they are organized** — sub-linear when arranged by a criterion meaningful to the user, linear when not. (https://www.lucarosati.it/download/papers/hick-law-classification.pdf)
Tag: **EVIDENCED**. This is the strongest argument in the report for investing in *grouping* over *trimming*.

### What real products actually show

| Product | Catalogue size | How it's chunked | Source |
|---|---|---|---|
| Wix | 2,000+ templates (older reviews: 800–900) | Business & Services, Store, Creative, Community & Blog, with deep sub-categories (e.g. landscape vs wedding photography); plus an assistant that recommends a design from a few questions | https://www.tooltester.com/en/blog/wix-templates/, https://support.wix.com/en/article/about-templates |
| Shopify Theme Store | "800+" headline; price filter shows 24 free + 1,219 paid listings (includes presets) | Industry (20 named: Art, Auto, Bags, Beauty, Clothing, Electronics, Entertainment, Food and drink, Garden, Hardware, Home, Jewelry, Kids, Office, Pets, Services, Shoes, Sports, Toys, Wellness); catalog-size filter (One product 26 / Few 2–10 91 / Some 11–100+ 823 / Lots 500+ 303); collections incl. "Minimalist style" | https://themes.shopify.com/themes, https://help.shopify.com/en/manual/online-store/themes/choose-themes |
| Framer Marketplace | "thousands" of assets | Category sidebar + Trending/Latest sort + Price/Style filters; the categories page I fetched rendered **24 templates** in its grid | https://www.framer.com/community/marketplace/templates/categories/ (fetched 2026-08-27) |
| Figma First Draft | 4 libraries × N themes | Theme thumbnails under the prompt | https://help.figma.com/hc/en-us/articles/23955143044247-Use-First-Draft-with-Figma-AI |

The Framer figure is the most directly useful: **24 items rendered in the grid.** Tag: **EVIDENCED** (fetched). I could not confirm whether that is a fixed page size or a lazy-load batch — Tag: **UNVERIFIED**.

Baymard's grid guidance: restrict to a **maximum of 5–8 columns** depending on item size, because beyond that users "drown in information" and eyes struggle to travel between lines. And on category tiles specifically: **presenting 20+ tiles at the same visual weight creates decision fatigue** — group under section headings instead. (https://baymard.com/blog/responsive-upscaling, https://baymard.com/learn/ecommerce-category-page)
Tag: **EVIDENCED.** This is the most transferable number in the report and it lands almost exactly on our 20–30 pack corpus.

### Recommendation

**Author 20–30 packs. Show 12–18 by default, in 3–4 labelled groups of 4–6, at 3 columns on desktop.**

- 3 columns, not 5–8: our cards are miniature *UIs*, which need far more pixels per item than a product photo. Baymard's own alternative to more columns is scaling up each item.
- 3–4 groups of 4–6 keeps every group under Baymard's 20-tile fatigue threshold and gives the meaningful subdivision Rosati shows is what actually drives time-to-choose.
- The remaining packs live behind group filters / "show more" — progressive disclosure at the *browse* level, while keeping the final comparison simultaneous.
- Do **not** paginate. Pagination breaks simultaneous comparison, which §6/§1 shows is the confidence-critical property.

Tag: **CONVENTION** — this is a reasoned synthesis, not a measured optimum. It should be A/B tested.

---

## 4. Naming and grouping

### The vocabularies in use

1. **By industry/use-case** — Wix (Business & Services, Store, Creative, Community & Blog), Shopify (20 industries above), Framer (portfolio, SaaS, agency, ecommerce, blog). Tag: **EVIDENCED**.
2. **By vibe/feeling** — Google Fonts ships a **"Feelings" filter** with mood categories including *business, playful, vintage, happy, artistic*, plus an "Appearance" axis with *techno, marker, stencil, medieval, art deco*. Tag: **EVIDENCED**.
3. **By named aesthetic** — Brutalist, Editorial, Glassmorphic. Common in Framer/Figma community listings. Tag: **CONVENTION**.
4. **By colour** — Radix and Tailwind palette docs name by hue. Precise, non-evocative.

### Does vibe-naming beat attribute-naming?

**I found no controlled study comparing vibe labels to attribute labels for style selection.** Tag: **UNVERIFIED** — do not claim otherwise.

What *is* evidenced, and points the same way:

- **Google Fonts built the Feelings filter as a first-class control.** A team with that much search telemetry shipping mood-based filtering is strong revealed-preference evidence that non-experts search by feeling. Tag: **EVIDENCED** (the feature exists); the inference about why is **CONVENTION**.
- **The design premise is standard:** "font follows feeling" — shape and content melt together, and mood categories are an orientation tool for digging through an enormous set. The same source is careful that the lines blur quickly. (https://pimpmytype.com/font-follows-feeling/) Tag: **EVIDENCED** as a documented position, not as measurement.
- **Semantic tagging along three axes** is a live pattern: aesthetic qualities (elegant, modern, playful, bold), emotional associations (romantic, professional, friendly), and use cases (wedding invitations, tech startups). (Mood Font, https://huggingface.co/spaces/ysharma/mood-font) Tag: **EVIDENCED** that the pattern exists.
- **The countervailing evidence is the strongest single citation here.** NN/g: when key differences between choices are implied rather than stated, users select the wrong option; stating the difference explicitly is the first step to guaranteeing a correct choice. (https://www.nngroup.com/articles/explicit-differences/) Tag: **EVIDENCED**.
- UX Movement's mechanism: when two or more choices are similar, cognitive load *spikes* — users debate internally, hesitant and afraid to make a mistake — and labels alone are not enough to tell near-identical options apart. Tag: **EVIDENCED** as a documented UX position.

### Why NOT to group by industry

Shopify's own help documentation says **no theme is restricted to any industry** — a technology store could use a theme listed under "Art and photography." (https://help.shopify.com/en/manual/online-store/themes/choose-themes) Tag: **EVIDENCED**.

That is the tell. Industry taxonomy in marketplaces is a **merchandising and SEO structure**, not a design-information structure. It exists because "Shopify themes for pet stores" is a search query. For us it would be actively harmful: it invites the client to reason "I'm a dentist, so I need the Dentist pack," which is a claim about their vertical, not about the design. And crucially, industry labels violate the NN/g explicit-difference rule — two packs both tagged "SaaS" tell the client nothing about how they differ.

### Recommendation: three-part label, vibe-grouped

Every card carries:

1. **Name (vibe, evocative, 1–2 words):** `Quiet Ledger`, `Neon Arcade`, `Paper & Ink`, `Soft Studio`.
2. **Attribute subtitle (the explicit difference — NN/g):** "Muted slate · tight spacing · serif headings · sharp corners."
3. **2–3 vibe chips:** `Calm` `Dense` `Professional`.

Groups are **aesthetic**, 3–4 of them, e.g. *Calm & Editorial · Bold & Expressive · Clean & Systematic · Warm & Human*. Optionally offer a secondary industry filter as a *shortcut*, never as the primary structure — clearly framed as "commonly chosen by…", not "for."

The name gives the emotional handle non-experts need; the subtitle supplies the explicit difference NN/g requires. Neither alone is sufficient.
Tag: **CONVENTION**, assembled from evidenced components.

---

## 5. The same-screen comparison problem — what reference screen?

### Why identical content is non-negotiable

Simultaneous presentation only produces its benefit through **comparison across attributes** — that is the stated mechanism in Basu & Savani. If pack A shows a landing hero and pack B shows a dashboard, there is no shared axis and the mechanism does not fire; the client is comparing *content*, not design.

Baymard's tile guidance says the same from the other end: consistency of image style across tiles aids scanning, and mixing photography styles and backgrounds makes a grid harder to read. Tag: **EVIDENCED**.

And there's a warning from the opposite failure. A Shopify community report describes selecting different colour options and finding the **layout** changed too, when the user expected only the palette to vary. The lesson: *distinguishable along the axis users expect to vary* — vary the tokens, hold everything else fixed. Tag: **EVIDENCED** as a reported user complaint.

### What the screen must contain

Radix's 12-step role assignment is effectively a checklist of what a preview has to exercise. A screen that never renders a border never shows steps 6–8; one with no solid button never shows 9–10.

| Radix role | Element that exercises it |
|---|---|
| 1 app background | Page canvas |
| 2 subtle background | Sidebar / secondary panel |
| 3–5 component bg (rest/hover/active) | Card surface, input field, hovered row |
| 6–8 borders, focus ring | Card border, input border, **a focused input** |
| 9–10 solid accent | Primary button, active nav item |
| 11–12 text | Body text, muted caption, heading |

Tag: **EVIDENCED** for the role assignment (Radix Colors docs, established prior context); the mapping table is my construction — **CONVENTION**.

Note that a focused input is the *only* thing that renders the focus ring, and focus rings are a large part of whether a system feels sharp or soft. Most theme previews omit it.

### Dashboard vs landing hero vs form

The convergent industry answer favours a component mix over a marketing page. tweakcn's tab order is `Cards | Dashboard | Application | Marketing` — component surfaces first, marketing last. Tag: **EVIDENCED** (fetched).

Theme-preview generators converge on **palette swatches, button variants, a card preview, and input states** as the visual reference, because that combination hits fills, borders, elevation, text hierarchy, and interactive states in one screen. Tag: **CONVENTION** (from secondary sources; I did not verify a specific generator's source).

The two candidates stress different things:
- **Dashboard** — density, data hierarchy, surface layering, elevation, neutral scales.
- **Landing hero** — brand expression, large-scale typography, but very little of steps 3–8.

**A landing hero is the wrong choice** despite being the most seductive. A hero is mostly one big type treatment on one background; it exercises maybe 4 of the 12 roles, and it flatters every pack. It is exactly the "looks great empty" trap of §7.

**A pure settings/form page is also wrong** — it over-weights inputs and under-weights surface and accent.

### Recommendation: one "App Shell" reference screen

A single composed screen, identical content in every pack:

```
┌──────────────────────────────────────────────┐
│ [logo]  Overview  Reports  Settings   (avatar)│ ← nav: subtle bg (2), active item on solid accent (9)
├────────┬─────────────────────────────────────┤
│ Side   │  Monthly revenue          H1 + muted │ ← type hierarchy (11/12)
│ nav    │  ┌───────────┐ ┌───────────┐        │
│ · Home │  │ $12,480   │ │   842     │        │ ← cards: surface (3), border (6)
│ · Team │  │ +12% ▲    │ │ Active    │        │
│ · Bill │  └───────────┘ └───────────┘        │
│        │  ┌─────────────────────────────┐    │
│        │  │ Name        Status    Date  │    │ ← table header + 3 rows,
│        │  │ Ana Ruiz    ●Active  Aug 4  │    │   one row hovered (4/5)
│        │  │ …                           │    │   status pill = accent
│        │  └─────────────────────────────┘    │
│        │  [ Email ______________ ]           │ ← input, FOCUSED (7/8)
│        │  ( Save changes )  ( Cancel )       │ ← primary (9) + secondary (3)
└────────┴─────────────────────────────────────┘
```

Mandatory contents: nav bar with one active item · sidebar (second surface) · 2 stat cards with borders · a 4-row data table with one hovered row and a status pill · **one input rendered in focus state** · a primary + secondary button pair · H1, body, and muted caption · one destructive/error affordance.

This covers all 12 Radix role bands, holds content constant, and is what the client's actual app will look like. The card thumbnail is a scaled-down crop of the same screen — so the thumbnail is a literal, not approximate, promise of the detail view.

Add a second tab on the **detail view only** (not the card): a **marketing/hero surface**, since many Actionist apps ship a landing page. But never let the hero be the comparison surface.

Tag: **CONVENTION** — reasoned from the Radix role table and the convergent tab sets; not measured.

---

## 6. Light / dark presentation

### What real products do

- **Figma First Draft:** light/dark is a **toggle inside the theme controls**, alongside preset colours, border radius, spacing, and typography. Tag: **EVIDENCED**.
- **v0 design systems:** you can create design systems with unique colour schemes and **preview in light and dark mode**. Tag: **EVIDENCED** (https://v0.app/docs/design-mode, https://community.vercel.com/t/introducing-design-mode-on-v0/13225).
- **shadcn/ui:** the docs site carries a "Toggle theme" control in its header. Note: **`https://ui.shadcn.com/themes` now 302-redirects to `https://ui.shadcn.com/create`** (verified 2026-08-27 — `curl -sIL … -w '%{url_effective}'` returned `https://ui.shadcn.com/create`). The old standalone themes page no longer exists at that URL; the nav is now Home / Docs / Components / Blocks / Charts / Directory / Typeset / Create. **UNVERIFIED:** I could not extract the `/create` page's picker UI — it is client-rendered and the fetched HTML contained only site chrome. Do not cite specifics about it.
- **tweakcn:** the fetched sidebar exposes explicit `Base`, `Card`, `Popover`, `Muted` colour groups implying dual-mode authoring, but **no light/dark toggle was visible in the extracted text**. Tag: **UNVERIFIED**.

### How many users actually run dark?

This is where the marketing statistics are dangerous. The widely circulated figures — 81.9% of Android users, 82.7% on OS — come from SEO statistics-aggregator sites recycling one Android survey without clear methodology.

The methodologically trustworthy datapoint is behavioural, not self-reported: **Chrome Platform Status measured users with `prefer-dark` set at ~22% of web traffic (December 2021).** Tag: **EVIDENCED** as a measurement, though **dated** — five years old at time of writing, and the real figure today is almost certainly higher. Treat 22% as a floor.

Also relevant: ~64.6% of users reportedly want sites to switch automatically, which argues for honouring `prefers-color-scheme` rather than hard-defaulting. Tag: **CONTESTED** — same aggregator-source problem; directionally plausible, weakly sourced.

Even at a 22% floor, roughly one in five of the client's users sees dark. That is far too many to leave to chance.

### What breaks if the client picks in light and their users run dark

Concrete, and all avoidable:

1. **Contrast inversion.** A pale-tint accent that reads beautifully on white becomes a low-contrast smear on near-black. Semantic tokens should point to *reference* tokens that differ per mode, not to static values — a pack whose dark mode is a naive inversion will fail WCAG AA on text pairs the client never saw.
2. **Elevation reverses.** In light mode elevation is shadow; in dark mode it is a *lighter* surface. A pack that encodes elevation only as shadow renders flat in dark.
3. **Borders vanish.** Radix steps 6–8 in dark mode are not the light values inverted; a border tuned for light often disappears against a dark canvas.
4. **Brand accent legibility.** A saturated mid-tone that passes on white frequently fails on dark, and vice versa.

Tag: **CONVENTION** for the enumeration; **EVIDENCED** for the underlying principle that system tokens must point at different reference tokens per theme and that default foreground/background pairs should meet WCAG AA.

### Recommendation

**Author both modes for every pack — this is a corpus requirement, not a picker feature. Never expose "light or dark" as a client choice at pack-selection time.**

- **Card:** renders **light only**. Adding a second thumbnail per pack doubles grid density for no comparison value and halves the size of each preview — directly against Baymard's scale-up-the-item guidance.
- **Card hover / long-press:** cross-fade the same thumbnail to dark. Free, discoverable, and it communicates "this pack has a dark mode" without costing a grid slot.
- **Detail view:** a prominent light/dark toggle, matching First Draft and v0. This is the evaluation surface, per the NN/g thumbnail→detail split.
- **Shipped app:** honours `prefers-color-scheme` by default, with a user-facing override.
- **Gate:** no pack enters the corpus until both modes pass WCAG AA on the reference screen's text pairs. This makes light/dark a *quality gate on us*, not a *decision for the client* — which is right, because the client cannot evaluate it and their users will experience it either way.

Tag: **CONVENTION**, built on evidenced components.

---

## 7. The two-picker composition problem

This is the most consequential question here, and the evidence is better than expected.

### Prior art

**Canva — the closest known analogue, and it settles the ordering.** Brand Kits (colours, fonts, logos) are authored and stored **separately** from Brand Templates, and a kit is applied *onto* a template via Styles → select kit → "Apply to all pages." Crucially, **Canva's own recommendation is to set up the Brand Kit first**, because a more complete kit helps both the team and Canva AI stay on-brand.
(https://www.canva.com/help/using-brand-templates/, https://www.canva.com/pro/brand-kit/)
Tag: **EVIDENCED** — including the ordering recommendation, which is the load-bearing part.

Canva also documents a real friction worth noting: applying a kit's colours "just shuffles them," and "apply to all pages" may not give the result you want — the reliable path is selecting an element, setting a brand colour, then "Change all." Tag: **EVIDENCED**. Read as a warning: **a token pack must be applied by binding to semantic roles, never by remapping raw colour values.** Our packs assign Radix-style roles, so we sidestep this — but only if the component library consumes role tokens rather than literal hexes.

**Figma First Draft** — two axes: pick a **library** (wireframe → higher-fidelity, four options) then preview **themes** as thumbnails. Structure axis is coarse and chosen first; style is refined after. Tag: **EVIDENCED**.

**Lovable** — design systems are *versioned, releasable projects* selectable in a **design system picker** at project creation; attaching is a managed link, so the project keeps receiving updates, and detaching leaves component files as ordinary editable code under `src/design-system/`. (https://docs.lovable.dev/features/design-systems) Tag: **EVIDENCED**. This is the strongest architectural precedent: **style is a versioned, re-attachable link chosen at project creation**, not a one-time copy.

**v0** — no visual style picker; a persistent free-text "Context" field set at project creation and injected into every prompt. Tag: **EVIDENCED**.

**Base44** — I could not verify whether it offers a pre-generation style picker. Tag: **UNVERIFIED**.

### One flow or two? Sequential or interleaved?

**Two separate steps, sequential.** NN/g's staged-disclosure criterion is the deciding test: staged disclosure works when a task divides into distinct steps with **little interaction between them**, and is problematic when steps are **interdependent** and users must alternate.

Token packs and section shapes are *weakly* coupled — any pack can render any hero. That is the design property that makes a wizard safe here, and it is a property we should actively defend (§ anti-patterns: a pack that only works with one hero has failed).

But — and this is the constraint most wizards get wrong — **the split is elicitation vs. selection**. Sequential staging is for moving *between* the two axes. **Within** each axis, options must be presented simultaneously in a grid. Basu & Savani's benefit comes from comparing options across attributes; a wizard that shows one pack per screen destroys exactly that.

### Style first, then structure — five reasons

1. **Style collapses the structure search space.** 7,949 components is unbrowsable. Once a pack is chosen, every section preview in step 2 renders *in that pack* — so the client is choosing shapes with the colours already correct. Reverse the order and step 2's previews must render in some neutral default, which is (a) uninformative and (b) the "Tailwind indigo" sameness trap.
2. **Canva says so.** Set up the Brand Kit **first**. Tag: **EVIDENCED**.
3. **Style is the cheaper mistake.** Re-picking a pack is a token swap. Re-picking structure is re-laying-out the app. Front-load the reversible decision.
4. **Style is what the client actually has an opinion about.** A non-technical client has a feeling about "calm and editorial" vs "bold and loud." They do not have a prior opinion about which of eleven sign-in layouts they want. Ask the question they can answer first — it builds momentum and gives step 2 a decision frame.
5. **Structure choices become style-informed.** Having picked "Paper & Ink," a centred editorial hero is visibly the right partner. The reverse ordering gives no such guidance.

### Recommended flow

```
STEP 0  Two-line intent ("what are you building?")           ← elicitation, sequential
          └─ used only to reorder/pre-filter the gallery, never to hide packs

STEP 1  PACK GALLERY — 12–18 packs, one grid, all visible    ← selection, SIMULTANEOUS
          same App Shell reference screen on every card
          → detail view: full screen, light/dark toggle, stress panel
          → "Use this pack"

STEP 2  SECTION SHAPES — hero, sign-in, pricing, nav…        ← selection, SIMULTANEOUS
          each section type = its own small grid (4–8 options)
          EVERY option pre-rendered IN THE CHOSEN PACK        ← the payoff of style-first
          → sensible default pre-selected for every slot; skippable

STEP 3  BUILD — with a persistent "change pack" affordance    ← Lovable's re-attachable link
          swapping the pack must NOT reset structure choices
```

Step 0 should **reorder, never remove**. Wix ships an assistant that recommends a design from a few questions (Tag: **EVIDENCED**) — useful as a shortcut, dangerous as a gate, because a filter that silently hides options destroys the simultaneous comparison the evidence depends on.

Step 2 must be **skippable with defaults**, so a client who only cares about the vibe can reach a built app in one decision.

Step 3's "change pack" must be **cheap and non-destructive** — Lovable's managed-link model, not a copy. If swapping the pack discards structure choices, clients will refuse to explore, and the picker's whole value collapses.

Tag: **CONVENTION** for the assembled flow; **EVIDENCED** for each component (Canva ordering, NN/g staging criterion, Basu & Savani simultaneity, Lovable re-attachment).

---

## 8. Anti-patterns to avoid

**A1 — Preview that doesn't match the result. The single best-documented failure in this space.**
Complaints span every platform: a GeneratePress user whose imported template "looked nothing like it… like it has no formatting"; a Betheme "Business5" install with missing modules and distorted styles; a Shopify merchant finding shuffled sections, different margins, wrong block order, and a blank footer after "Try Theme". Shopify's own explanation: **themes ship with structure only** — demo stores are pre-populated with their own content and settings.
The root cause is stated bluntly: a newly installed site has almost no content, so even good themes look underwhelming next to a demo full of copy and professional photography — and in the worst cases demos include plugins and features that don't ship with the theme.
Tag: **EVIDENCED** (user reports; https://forum.muffingroup.com/betheme/discussion/79480/, https://community.shopify.com/t/the-theme-i-chose-in-the-theme-store-is-very-different-inside-the-editor/273958).
**Our mitigation:** the card thumbnail is a literal crop of the detail screen, and the detail screen is what the generator actually emits. Never composite a card by hand. If a pack's preview is authored separately from its tokens, it *will* drift.

**A2 — Options too similar to distinguish.**
NN/g: implied differences cause wrong selections; explicit statement is the first step to a correct choice. UX Movement: similarity *spikes* cognitive load — users debate internally, hesitant and afraid to make a mistake — and labels alone don't separate near-identical options. Tag: **EVIDENCED**.
Note the frequent technical root cause: sameness is often a **CSS specificity/scoping failure masquerading as a design decision** — global styles winning over theme-scoped ones. Worth an explicit check in our pack build.
**Our mitigation:** a pairwise distinguishability gate on the corpus (see §9), plus the attribute subtitle on every card.

**A3 — "Looks great empty, breaks with real content."**
The classic trap named in the theme literature: falling for a multi-column magazine layout with scrolling feature sections when the project has no content, since it takes years of writing to fill those spaces. And: replace placeholder content with real content early, since **real text lengths and image ratios often break layout balance**. Tag: **EVIDENCED**.
**Our mitigation:** the detail view carries a mandatory **stress panel** — a 60-character page title, a two-word one, an empty table, a 40-row table, a missing avatar, a long button label, and a validation error. If a pack survives all seven, it ships. This is the highest-value thing in the whole picker and no competitor does it.

**A4 — The sameness problem, which is our actual competitive premise.**
tweakcn's stated motivation: *"Websites made with shadcn/ui famously look the same."* Tag: **EVIDENCED** (README).
Adam Wathan (Tailwind creator) posted in August 2025 about having defaulted Tailwind UI buttons to `bg-indigo-500` years earlier — an inoffensive placeholder now reflected across AI-generated interfaces. Tag: **CONTESTED/UNVERIFIED** — reported consistently across secondary sources; **I did not fetch the original post. Verify before citing externally.**
The genuinely solid academic anchor: **Goree, Doosti, Crandall & Su (CHI 2021)** ran computer vision over ~227,000 website screenshots from 2003–2019 and found **layout distance between sites fell ~44% during the 2010s**, with framework adoption correlated to visual similarity. Tag: **EVIDENCED as reported via secondary source — I did not read the paper.** This matters because it shows homogenisation **predates LLMs**; it is a defaults problem, not an AI problem.
**Our mitigation:** the corpus must span a genuinely wide aesthetic range. If all 30 packs are tasteful neutrals with 8px radii, we have rebuilt the problem with a nicer picker.

**A5 — Varying the wrong axis.** The Shopify report where changing a colour option also changed the layout. Vary tokens; hold content and structure fixed. Tag: **EVIDENCED**.

**A6 — Paginating or wizard-ing the final choice.** Sequential presentation reduces decision quality, satisfaction, and commitment (§ below). Tag: **EVIDENCED**. Never show packs one at a time.

**A7 — Industry taxonomy as the primary grouping.** Shopify's own docs undercut it: no theme is restricted to any industry. Tag: **EVIDENCED**.

**A8 — Filters that hide rather than reorder.** A step-0 questionnaire that removes packs from the grid destroys simultaneous comparison. Reorder and highlight; never remove.

---

## 9. The evidence that most shaped this design

Stated separately because it is the strongest and most decision-relevant finding, and it cuts against the instinct to build a friendly step-by-step wizard.

**Simultaneous presentation beats sequential on quality, satisfaction, and commitment.**

- **Basu & Savani (2017)**, *Organizational Behavior and Human Decision Processes* 139, 76–91 — "Choosing one at a time? Presenting options simultaneously helps people make more optimal decisions than presenting options sequentially." **Seven experiments**; better selection quality with simultaneous presentation. Mechanism: simultaneous presentation lets participants easily compare options **across attributes**. (https://www.sciencedirect.com/science/article/abs/pii/S0749597816302060)
- **Mogilner, Shiv & Iyengar (2013)** — consumers were **more satisfied and more committed** when options were presented all at once rather than one at a time; a series of lab and field experiments showed a detrimental effect of sequential presentation on **choice commitment**.
- **2024 conceptual replication**, *Marketing Letters* — same result on dating profiles: greater satisfaction and commitment under simultaneous viewing, driven mainly by **regret from foregone options** in the sequential condition. (https://link.springer.com/article/10.1007/s11002-024-09746-2)
- **Review:** Basu & Savani (2019), *Current Directions in Psychological Science*. (https://journals.sagepub.com/doi/10.1177/0963721418806646)
- **Dissent, reported honestly:** Santiago & Walser (2019) found simultaneous presentation *worse* for selection quality; the inconsistency is attributed to different information-processing behaviours the formats trigger. Tag: **CONTESTED**, but the weight — seven experiments plus an independent replication on the commitment measure — sits clearly with simultaneous.

Tag: **EVIDENCED**. I read these through search summaries and the linked abstracts, not the full PDFs — the effect direction is consistently reported across four independent sources, but **read Basu & Savani in full before citing exact effect sizes.**

**Why this is decisive for Actionist:** *commitment* is our actual success metric. A client who picks a pack, sees the build, and wants to re-pick has cost us a full generation cycle. The regret mechanism in the 2024 replication — regret from foregone options — is precisely the failure mode of a wizard that shows packs one at a time. So: sequential between the two axes, simultaneous within each.

---

## 10. Proposed gallery spec (buildable)

**Card anatomy** (3-col desktop / 2-col tablet / 1-col mobile; card ~380×300 desktop)
```
┌────────────────────────────────┐
│                                │
│   [ App Shell reference screen │  ← literal scaled crop of the detail view
│     rendered in THIS pack,     │     light mode; cross-fades to dark on hover
│     light mode ]               │
│                                │
├────────────────────────────────┤
│ Quiet Ledger                   │  ← vibe name, 1–2 words
│ Muted slate · tight spacing ·  │  ← explicit difference (NN/g)
│ serif headings · sharp corners │
│ [Calm] [Dense] [Professional]  │  ← 2–3 vibe chips
└────────────────────────────────┘
```

**Gallery**
- 20–30 packs authored; **12–18 shown by default**
- **3–4 aesthetic groups**, 4–6 packs each, section headings (Baymard: 20+ equal-weight tiles → decision fatigue)
- 3 columns desktop (Baymard caps at 5–8 for *product photos*; miniature UIs need more pixels)
- **No pagination.** "Show all" expands in place
- Sticky group filter; filters **reorder and highlight, never remove**
- Optional step-0 intent → reorders only

**Grouping / naming**
- Groups: *Calm & Editorial · Bold & Expressive · Clean & Systematic · Warm & Human*
- Vibe name + attribute subtitle + chips (§4)
- Secondary industry filter permitted as a shortcut, framed "commonly chosen by…"

**Reference screen** — the App Shell of §5. Nav with active item · sidebar · 2 bordered stat cards · 4-row table with one hovered row and a status pill · **one focused input** · primary + secondary buttons · H1 / body / muted caption · one error affordance. Covers all 12 Radix role bands. Identical content in every pack.

**Detail view**
- Full App Shell, large (Nielsen: the enlarged version must be *really* big)
- Light/dark toggle (First Draft, v0)
- Second tab: marketing/hero surface
- **Stress panel** (A3): 60-char title, 2-word title, empty table, 40-row table, missing avatar, long button label, validation error
- Font names, radius, spacing scale listed as plain English
- "Use this pack" + "Back to gallery" — never a dead end

**Light/dark** — both authored for every pack; light on card, dark on hover, toggle on detail; shipped app honours `prefers-color-scheme`; **WCAG AA on both modes is a corpus gate, not a client decision**.

**Two-picker flow** — Step 0 intent (reorder only) → **Step 1 pack gallery (simultaneous)** → **Step 2 section shapes, pre-rendered in the chosen pack (simultaneous, skippable, defaults pre-selected)** → Step 3 build, with a non-destructive "change pack".

**Corpus gates before a pack ships**
1. Both modes pass WCAG AA on every reference-screen text pair
2. Survives all seven stress-panel cases
3. **Pairwise distinguishability**: no two packs in the same group are confusable at card size — test by asking someone unfamiliar to match 5 detail views back to their 5 thumbnails (A2)
4. Renders correctly with **every** section shape it may be paired with — a pack that only works with one hero has failed the weak-coupling property the whole flow depends on
5. Aesthetic range check across the corpus (A4) — if all 30 packs are tasteful neutrals, we have rebuilt the sameness problem

---

## 11. Open questions

1. **Does 12–18 beat 30 for our clients?** Unresolved by literature — Chernev's moderators say overload is a live risk, Scheibehenne says the main effect is ~zero. Only an A/B test on real clients settles it. Measure **re-pick rate and time-to-first-build**, not clicks.
2. **Does vibe-naming actually beat attribute-naming?** No study found. Our three-part label hedges by shipping both. Testable with a 5-second card-matching task.
3. **Is the App Shell the right reference screen?** Argued from the Radix role table, not measured. Test: show clients the App Shell preview, then the built app; measure surprise.
4. **Does step-0 intent help or harm?** Reordering should be safe. Verify it doesn't cause clients to skip a pack they'd have preferred.
5. **How does a pack degrade across 7,949 components?** Gate 4 is unenforceable at that scale by hand. Needs an automated render-and-contrast-check sweep — an engineering question, not a UX one.
6. **What's the current dark-mode share?** The trustworthy number (~22%, Chrome Platform Status) is from Dec 2021. Worth re-measuring before making any "most users are in light" argument.
7. **Verify the Wathan indigo post and the CHI 2021 paper directly** before either appears in client-facing material. Both are currently secondary-sourced.
8. **Should packs be versioned and re-attachable, Lovable-style?** Architectural, but it determines whether "change pack" at step 3 is cheap. Strongly recommend yes; out of scope here.

---

## Source index

**Choice / decision science**
- Iyengar & Lepper (2000) jam study — via https://atticusli.com/replication-crisis/choice-overload-jam-study/
- Scheibehenne, Greifeneder & Todd (2010), *JCR* 37(3) 409 — https://academic.oup.com/jcr/article-abstract/37/3/409/1827647
- Chernev, Böckenholt & Goodman (2015), *JCP* 25, 333–358 — https://chernev.com/wp-content/uploads/2017/02/ChoiceOverload_JCP_2015.pdf
- Basu & Savani (2017), *OBHDP* 139, 76–91 — https://www.sciencedirect.com/science/article/abs/pii/S0749597816302060
- Basu & Savani (2019), *Curr Dir Psychol Sci* — https://journals.sagepub.com/doi/10.1177/0963721418806646
- Simultaneous-vs-sequential replication (2024), *Marketing Letters* — https://link.springer.com/article/10.1007/s11002-024-09746-2
- Rosati, Hick-Hyman & classification — https://www.lucarosati.it/download/papers/hick-law-classification.pdf
- Laws of UX (Vanguard 401(k) figure) — https://lawsofux.com/choice-overload/

**UX research**
- NN/g, Explicitly State the Difference Between Options — https://www.nngroup.com/articles/explicit-differences/
- NN/g, Product Photos on Listing Pages — https://www.nngroup.com/articles/product-photos-listing-pages/
- NN/g, Progressive Disclosure — https://www.nngroup.com/articles/progressive-disclosure/
- Nielsen, Photos Improve Usability and Credibility — https://www.uxtigers.com/post/photography
- Baymard, Responsive Upscaling (5–8 column cap) — https://baymard.com/blog/responsive-upscaling
- Baymard, Ecommerce Category Pages (20+ tile fatigue) — https://baymard.com/learn/ecommerce-category-page
- Baymard, Number of Items Loaded by Default — https://baymard.com/blog/number-of-items-loaded-by-default

**Products (fetched or documented)**
- tweakcn editor — https://tweakcn.com/editor/theme (fetched 2026-08-27: tab set `Custom | Cards | Dashboard | Application | Marketing`)
- tweakcn README — https://github.com/jnsahaj/tweakcn (fetched: sameness motivation)
- shadcn/ui — https://ui.shadcn.com/themes → **302 → https://ui.shadcn.com/create** (verified 2026-08-27)
- Figma First Draft — https://help.figma.com/hc/en-us/articles/23955143044247-Use-First-Draft-with-Figma-AI · https://www.figma.com/blog/figma-ai-first-draft/
- Lovable design systems — https://docs.lovable.dev/features/design-systems
- v0 design mode — https://v0.app/docs/design-mode · https://community.vercel.com/t/introducing-design-mode-on-v0/13225
- Canva Brand Kits & Templates — https://www.canva.com/help/using-brand-templates/ · https://www.canva.com/pro/brand-kit/
- Shopify Theme Store — https://themes.shopify.com/themes · https://help.shopify.com/en/manual/online-store/themes/choose-themes
- Framer Marketplace categories — https://www.framer.com/community/marketplace/templates/categories/ (fetched: 24 templates in grid)
- Wix templates — https://support.wix.com/en/article/about-templates · https://www.tooltester.com/en/blog/wix-templates/
- Google Fonts "Feelings" filter — via https://pimpmytype.com/font-follows-feeling/ · Mood Font https://huggingface.co/spaces/ysharma/mood-font

**Anti-pattern reports**
- Betheme "Business5" — https://forum.muffingroup.com/betheme/discussion/79480/
- Shopify theme vs editor mismatch — https://community.shopify.com/t/the-theme-i-chose-in-the-theme-store-is-very-different-inside-the-editor/273958
- GeneratePress template import — https://generatepress.com/forums/topic/loaded-template-but-doesnt-look-like-preview/
- Design sameness — https://freedesignmd.com/blog/shadcn-looks-generic · https://axe-web.com/insights/ai-website-design-sameness/ (agency blogs; treat as advocacy)
- Goree, Doosti, Crandall & Su, CHI 2021 (44% layout convergence) — **cited via secondary source, not read directly**
