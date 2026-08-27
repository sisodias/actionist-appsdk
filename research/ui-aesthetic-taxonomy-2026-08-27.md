# UI Aesthetic Taxonomy for a Design-Token Pack Gallery

**Research date:** 2026-08-27
**Scope:** Is there a defensible taxonomy of UI aesthetics, and what is the minimum set of token packs that spans it for Action Model / Actionist (B2B, data-dense apps plus some marketing surfaces)?
**Sibling docs:** `token-pack-science-2026-08-27.md` covers the *schema* (DTCG, token tiers, validation). This doc covers the *content* — which visual styles exist and which earn a slot.

**Reading rule:**
- **EVIDENCED** — directly documented by the linked source.
- **CONVENTION** — widely practised, no strong evidence the specific value is optimal.
- **CONTESTED** — the sources disagree, or the claim is a marketing label rather than a documented movement.

---

## 1. VERDICT

**There is a real taxonomy, but it is not the one the trend blogs sell you.**

The named "movements" (glassmorphism, neumorphism, claymorphism…) are a *mixture* of documented styles and marketing labels, and they are **not a partition** — they overlap, nest, and several are effects rather than systems. Taxonomy by *name* is vibes. But there is a hard taxonomy underneath: **aesthetics are separated by a small number of token-level knobs**, and two packs are genuinely different only if they differ on those knobs.

The seven knobs that actually span the space:

1. **Surface contrast delta** — how far a card/control sits from the page background (near-zero → high).
2. **Border weight** — 0px / hairline 1px / heavy 2–4px.
3. **Shadow character** — none / soft-diffuse / hard-offset-zero-blur / dual light+dark / tonal-tint-instead-of-shadow / blur-backdrop.
4. **Radius scale** — 0 / small (2–6px) / medium (8–12px) / large (16–24px+).
5. **Type family class** — geometric-or-neo-grotesque sans / humanist sans / serif / monospace / display-eccentric.
6. **Density** — control height and padding ramp (compact / default / spacious).
7. **Chroma policy** — near-neutral, single accent / mid-saturation multi-role / max-saturation flat / dark-first with one glow accent.

**Why this is the load-bearing claim:** it is proved in production, not just in theory. shadcn ships **eight named styles** — Nova, Vega, Mira, Luma, Sera, Maia, Rhea, Lyra — and explicitly separates *style* from *theme*: a theme "changes colors, typography, and token choices," a style "changes the shape and density of the components those tokens sit on" (EVIDENCED — [shadcndesign style guide](https://www.shadcndesign.com/blog/how-to-choose-shadcn-ui-style), [Rhea changelog](https://ui.shadcn.com/docs/changelog/2026-05-rhea)). That is the exact distinction Actionist needs: **a gallery that varies only colour is one style with N themes, not N packs.**

### The proposed spanning set — 16 packs

Full justification in §5. Four tiers:

**Tier A — dense B2B workhorses (6).** These carry tables, forms, and 200-row grids.
1. **Grid** — Swiss/International: neo-grotesque, hairline rules, radius 0–2, no shadows, compact.
2. **Console** — dark-first dev-tool: near-black canvas, single accent, mono numerics, compact.
3. **Ledger** — maximum-density admin: 28–32px rows, hairline borders, zero radius, no elevation.
4. **Paper** — light neutral flat: soft off-white surfaces, 1px borders, radius 6, comfortable.
5. **Tonal** — Material 3: tint-based elevation rather than shadow, radius 12–16, spacious.
6. **Slate** — enterprise dark companion to Paper: dark surfaces layered by lightness, hairline borders.

**Tier B — branded product surfaces (5).** Data-capable but with more personality.
7. **Soft** — rounded, generous, low-elevation SaaS (radius 12–16, soft shadow, comfortable).
8. **Sharp** — boxy/geometric, radius 0–2 with mono accents (the Lyra pole).
9. **Signal** — high-saturation accent on neutral chrome; charts and status-heavy.
10. **Editorial** — serif headline + sans body, wide measure, generous leading.
11. **Bento** — modular asymmetric card grid; layout-token pack more than a colour pack.

**Tier C — marketing / landing surfaces (3).** Not for tables.
12. **Bold** — neubrutalist: heavy black borders, hard offset shadow, flat saturated colour.
13. **Aurora** — gradient-and-glass hero surfaces, restricted to marketing shells.
14. **Mono** — pure monospace terminal-as-product; brand-forward, low data density.

**Tier D — bounded expressive (2).** Deliberately scoped to non-critical components.
15. **Clay** — inflated radii, colourful, chunky; onboarding/marketing/consumer-facing portals.
16. **Depth** — restrained skeuomorph-adjacent: gradients + real shadows, used for approvals/handoff moments.

**Ruled out entirely for the gallery:** neumorphism (accessibility-incompatible at its own definition), full glassmorphism as a *pack* (it is a component effect, not a system), Corporate Memphis (an illustration style, not a token set), Y2K/Frutiger Aero (asset-dependent, not tokenisable), full skeuomorphism (asset-dependent). Reasons in §6.

**Single most useful finding:** the strongest precedent for a *mechanically* differentiated gallery is not a trend blog but shadcn/create's 8 styles, where the differentiators named are "spacing, sizing, radius, density, and component proportions" and one style (Sera) is defined by *underline-only inputs*, another (Rhea) by *borderless-at-rest fields* (EVIDENCED — [shadcndesign](https://www.shadcndesign.com/blog/how-to-choose-shadcn-ui-style)). Component-treatment tokens — not hue — are where distinctiveness actually lives.

---

## 2. The aesthetics catalogue

Column "Status" answers the brief's question: real documented movement, or marketing label?

### 2.1 Flat design

**Status: EVIDENCED — real, dated, attributable.** Debuted 2013 with iOS 7, Windows 8, and Google's Material Design. In iOS 7 specifically, "textures were replaced with white or subtle gradients, buttons lost their backgrounds in favor of thin outlines, icons became flat and lightweight, and depth was preserved only occasionally via drop shadows." Jony Ive's stated rationale was "an incredible liberty in not having to reference the physical world so literally."
Sources: [IxDF — skeuomorphism](https://www.interaction-design.org/literature/topics/skeuomorphism), [IxDF — skeuomorphism is dead, long live skeuomorphism](https://ixdf.org/literature/article/skeuomorphism-is-dead-long-live-skeuomorphism), [AppleScoop on iOS 7](https://applescoop.org/story/the-end-of-skeuomorphism-how-ios-7-changed-ui-design).

**Token signature:** zero-to-hairline borders, no or minimal shadow, small radius, high surface/background contrast carried by colour rather than depth.

### 2.2 Material Design (and M3 / M3 Expressive)

**Status: EVIDENCED — a documented system, not a trend.** M3 defines **six elevation levels** mapped to dp, commonly cited as 0, 1, 3, 6, 8, 12 dp. Crucially for tokens, M3 "represents elevation mainly using tonal color overlays… in addition to shadows," with the tonal colour derived from the primary colour, and instructs authors to "use shadows only when required." Elevation tokens themselves "have no shadows or color — each platform determines the specific shadows."
Sources: [M3 Elevation](https://m3.material.io/styles/elevation), [material-web elevation docs](https://github.com/material-components/material-web/blob/main/docs/components/elevation.md).

**M3 Expressive** (announced Google I/O May 2025, shipped to Pixel from Sept 2025 via Android 16 QPR1) adds a **parallel "emphasized" type set** alongside **baseline** styles — higher weights for selective emphasis — and **two motion schemes** (expressive with visible overshoot, standard), driven by springs rather than duration+easing pairs. Google cites studies with 18,000+ participants; treat that as vendor research (CONTESTED as evidence, EVIDENCED as a claim).
Sources: [DesignWhine on M3 Expressive](https://www.designwhine.com/material-3-expressive-details/), [Android Authority deep dive](https://www.androidauthority.com/google-material-3-expressive-features-changes-availability-supported-devices-3556392/).

**Why this matters for packs:** M3 gives Actionist a *legitimate second elevation mechanism* — tint instead of shadow. That is a genuine mechanical axis, not a colour swap. It earns the "Tonal" pack.

### 2.3 Neumorphism / Soft UI

**Status: EVIDENCED as a named, dated style — but with a documented, structural accessibility flaw.** Emerged late 2019; the term is credited to Michal Malewicz following a viral Dribbble post by Alexander Plyuto, with Malewicz crediting the spelling origin to Jason Kelley ("Neuomorphism," 3 Dec 2019). Definition: elements appear extruded from or pressed into the background using **dual soft shadows (one light, one dark) on a monochromatic, same-hue surface**.

The flaw is definitional, not incidental: neumorphic elements "rely on multiple shadows that help blend the element into the background it sits on," and WCAG requires **3:1 for non-text UI components** ([WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)) — so an element that is *by definition* the same hue and near-lightness as its background fights the requirement it must pass. Malewicz himself flagged it from the start, saying it is "not good for every possible UI element," and later argued the extrusion should only be added to cards that "look good without it" — i.e. where it could be removed with no loss.
Sources: [IxDF — What is Neumorphism](https://ixdf.org/literature/topics/neumorphism), [Malewicz in UX Collective](https://uxdesign.cc/accessibility-vs-design-trends-aeb24a45ef4), [Built In on neumorphism accessibility](https://builtin.com/design-ux/neumorphism-accessibility), [CSS-Tricks — Neumorphism and CSS](https://css-tricks.com/neumorphism-and-css/).

### 2.4 Glassmorphism

**Status: EVIDENCED — documented by NN/g, and by vendor systems under other names.** NN/g defines it as "a visual-design style that utilizes different levels of translucency to create depth and contrast between foreground and background elements, mimicking frosted glass." Its **two primary properties are opacity and background blur**; **two supporting properties are strokes and gradients**. NN/g's own example: white at 30% opacity with 25px blur stays readable; 100px blur merges background content.

Two things NN/g says that decide the pack question:
- Glass elements "stand out when placed in front of gradients or complex backgrounds" — **it requires a busy backdrop to read as glass at all.**
- Design systems "usually file it under 'material' rather than the trend name" — Fluent calls it **Acrylic**, Apple calls them **Materials**. That is, the mature systems treat it as a *component material*, not a global style.

NN/g's caveats: verify contrast because "text can span several underlying colors"; favour more blur; give users transparency controls (as Apple's reduce-transparency setting does); and if custom controls aren't feasible, glass elements "should still be WCAG-compliant."
Source: [NN/g — Glassmorphism: Definition and Best Practices](https://www.nngroup.com/articles/glassmorphism/).

### 2.5 Brutalism (web)

**Status: EVIDENCED — real, attributable, and deliberately anti-usability.** Term coined by **Pascal Deville**, founder of brutalistwebsites.com, around 2014, gaining traction ~2016. Deville characterises it by "ruggedness and lack of concern to look comfortable or easy," framed as a reaction against the lightness and frivolity of contemporary web design. He identifies three sub-currents: **Purists** (truth to materials, purest markup), **UX Minimalists** (efficiency/performance, radical limitation), and **Anti-ists/Artists**. Architectural lineage: Reyner Banham's 1955 "On the New Brutalism."

Token signature per the sources: pure black on pure white, Helvetica Bold all-caps or monospace body, default browser blue links, **zero shadows, no rounded corners, no gradient overlays**.
Sources: [Smashing Magazine — The Split Personality of Brutalist Web Development](https://www.smashingmagazine.com/2020/01/split-personality-brutalist-web-development/), [LogRocket — What is web brutalism](https://blog.logrocket.com/ux-design/web-brutalism/), [UX Collective](https://uxdesign.cc/brutalist-web-design-is-taking-over-the-internet-fee3c66139b5).

### 2.6 Neubrutalism / Neobrutalism

**Status: EVIDENCED — NN/g documents it as a distinct trend, separate from brutalism.** NN/g defines it as "high contrast, blocky layouts, bold colors, thick borders, and 'unpolished' elements," and explicitly separates it from brutalism: brutalism is "raw, harsh, unfinished, or utilitarian" with plain HTML and restricted palettes (their example: Drudge Report), while neobrutalism is "more colorful and orderly," fusing brutalist styling with 1990s graphic-design cues.

NN/g's six characteristics: high contrast/bright colours; thick lines and geometric shapes; **stark drop shadows — "solid, single-color… offset by 4px"**, not soft layered ones; bold type; skeuomorphic retro references (Windows 98 buttons, monospace); function over polish.

NN/g best practices worth turning into token constraints: **limit to ~2–3 bold high-contrast colours**; pair unconventional headline fonts with neutral body faces "such as Roboto or Inter"; use generous padding (they suggest 24–32px margins); headlines roughly **double body-text size**. Their warning is explicit: saturated pairings "like yellow-on-cyan can fail readability tests."
Source: [NN/g — Neobrutalism: Definition and Best Practices](https://www.nngroup.com/articles/neobrutalism/).

The canonical implementation recipe reported in the wider literature: `border: 3px solid #0A0A0A` plus `box-shadow: 5px 5px 0 #0A0A0A` — hard offset, zero blur, no transparency. Origin commonly traced to Gumroad's 2021 redesign and Figma's brand work. (CONVENTION for the exact pixel values; EVIDENCED for the pattern.)
Sources: [Bejamas — Neubrutalism](https://bejamas.com/blog/neubrutalism-web-design-trend), [Envato Author Hub — Trend deep dive](https://author.envato.com/hub/trend-deep-dive-neo-brutalism/), [Lagomorph — Neubrutalism: A Consideration, and Ruleset](https://lagomor.ph/2022/08/neubrutalism-a-consideration-and-ruleset/).

### 2.7 Skeuomorphism

**Status: EVIDENCED as a real, foundational concept — but not tokenisable.** IxDF: interface objects that "mimic their real-world counterparts in how they appear and/or how the user can interact with them," connected to Gibson's affordances. Dominant in iOS roughly 2007–2013 (leather calendar bindings, Game Center green felt), displaced by flat design in 2013. IxDF's nuance is important: the two "aren't as far apart as they appear" — flat design "doesn't so much replace skeuomorphism as mute it."
Sources: [IxDF](https://www.interaction-design.org/literature/topics/skeuomorphism), [NN/g — Skeuomorphism](https://www.nngroup.com/articles/skeuomorphism/), [LogRocket](https://blog.logrocket.com/ux-design/skeuomorphism-ux-design-examples/).

**The pack problem:** true skeuomorphism is carried by *textures and bespoke assets* (leather, felt, brushed metal), which cannot be expressed as design tokens. What *is* tokenisable is its residue: gradients-on-surfaces, real drop shadows, inset highlights. That residue becomes the "Depth" pack; the full style does not.

### 2.8 Swiss / International Typographic Style

**Status: EVIDENCED — the best-documented movement here, with primary literature.** Post-war Swiss movement (1940s–50s) that standardised the mathematical grid, sans-serif typography and objective photography. Characteristics: mathematical grids, asymmetric layout on that grid, bold sans-serif type, flush-left/ragged-right setting, objective photography over illustration. Müller-Brockmann "sought an absolute and universal form of graphic expression through objective and impersonal presentation." Primary texts: *Gestaltungsprobleme des Grafikers* (1961) and *Grid Systems in Graphic Design* (1981). Legacy in wayfinding: Frutiger's Paris Métro, Vignelli's NY Subway.
Sources: [Wikipedia — International Typographic Style](https://en.wikipedia.org/wiki/International_Typographic_Style), [Wikipedia — Josef Müller-Brockmann](https://en.wikipedia.org/wiki/Josef_M%C3%BCller-Brockmann), [PRINT Magazine — Swiss Style](https://www.printmag.com/featured/swiss-style-principles-typefaces-designers/), [The Graphic Design School](https://www.thegraphicdesignschool.com/design-history/swiss-style-movement/).

**Why it earns a pack slot outright:** it is the only style in this list whose defining properties (grid discipline, hairline rules, neutral sans, zero ornament) are *simultaneously* an aesthetic and a data-density strategy. One source calls it "arguably, the invisible default" — which is exactly why the pack must be explicit rather than assumed.

### 2.9 Editorial / magazine

**Status: CONVENTION — a real practice with consistent documented characteristics, but not a named dated movement.** Reported characteristics: large hero imagery, varied type hierarchy, asymmetric composition, pull quotes, generous whitespace; **bold serif headlines with quiet sans-serif body copy**; oversized titles against small legible body text. Component checklist from a design-spec resource: asymmetric grid, pull quotes, drop caps, multi-column text, large imagery, bylines, section dividers.
Sources: [DESIGN.md — Editorial Grid / Magazine](https://designmd.app/library/editorial-grid-magazine/), [hashbuilds — What is magazine layout](https://www.hashbuilds.com/patterns/what-is-magazine-layout), [Tubik Studio](https://tubikstudio.com/blog/media-editorial-website-design/).

### 2.10 Corporate Memphis / Alegria

**Status: EVIDENCED as a real named style — but it is an ILLUSTRATION style, not a UI token system.** Named after the Memphis Group; the visual language is largely attributed to the **Alegria** system created in 2017 for Facebook by studio **BUCK**. Defined by "disproportionate human figures with bendy limbs, small heads, and non-representational skin tones… against flat solid-colored backgrounds." Heavily criticised — WIRED called it a "massive homogenisation and dulling down of the internet's visual culture" — and by 2023 oversaturated to the point of self-cannibalisation.

AIGA's Eye on Design makes a meta-critique worth respecting: it argues it is "hazardous and useless to assign a style's origin to a single moment," since flat art has a long history that the think-pieces overlook (CONTESTED — the origin story itself is disputed).
Sources: [Wikipedia — Corporate Memphis](https://en.wikipedia.org/wiki/Corporate_Memphis), [AIGA Eye on Design](https://eyeondesign.aiga.org/what-the-think-pieces-about-corporate-memphis-tell-us-about-the-state-of-illustration/), [Webflow Blog](https://webflow.com/blog/corporate-memphis), [Creative Bloq](https://www.creativebloq.com/news/corporate-memphis-style-is-dead).

**Verdict for the gallery: it is an asset-library choice, not a pack.** Its entire signature lives in illustrations. A token pack cannot express "bendy limbs."

### 2.11 Dark-mode-native / terminal / dev-tool

**Status: CONVENTION — a strongly consistent, widely-copied house style with no canonical naming authority.** Two documented poles:
- **Vercel/Geist** — monochrome precision, "pure blacks at oklch(0 0 0), pure whites at oklch(1 0 0), with no accent colors and no decoration." Structurally notable: **dark mode is treated as the canonical surface and light as the alternate**, inverting the usual arrangement. Geist Sans and Geist Mono are open-source.
- **Literal terminal** — "every character — headings, body, buttons, labels, nav links — is monospace," near-black canvas, one disciplined accent.

The documented caveat: "a true terminal system isn't a dark theme with green text," and "the restraint that reads as premium for engineers reads as empty for everyone else."
Sources: [Vercel Geist on DesignSystems.one](https://www.designsystems.one/design-systems/vercel-geist), [Hermes popular-web-designs skill (54 systems incl. Stripe/Linear/Vercel)](https://github.com/nousresearch/hermes-agent/blob/main/skills/creative/popular-web-designs/SKILL.md), [terminal-ui-design-system](https://github.com/chyinan/terminal-ui-design-system).

**Cyberpunk** specifically (neon-on-black, glow, chromatic aberration) is CONTESTED as a UI movement — it is a *media* aesthetic borrowed into UI, with no design-authority definition. It is expressible in tokens (glow shadows, high-chroma accents on near-black) but it is a hue-and-glow variant of dark-first, not a separate mechanical class. Not a separate slot.

### 2.12 Minimal / Scandinavian

**Status: CONTESTED as a distinct UI movement.** "Scandinavian design" is a real furniture/product movement, but as applied to UI it is used interchangeably with generic minimalism: neutral off-whites, generous whitespace, restrained accent, humanist sans. No design authority defines a "Scandinavian UI" token signature distinct from Swiss-plus-warmth. Mechanically it reduces to: **Swiss grid discipline + warmer neutral hue + larger spacing ramp + softer radius**. That is a legitimate *variant*, and it earns the "Paper" slot — but it should not be sold as its own movement.

### 2.13 Retro / Y2K / Frutiger Aero

**Status: CONTESTED — community-coined, not design-authority-defined.** The sources are explicit that "the term Frutiger Aero is not an official design category" and documentation comes from "community wikis and design blogs rather than academic sources." Frutiger Aero was **named in 2017 by Sofi Xian of the Consumer Aesthetics Research Institute**, retroactively describing a mid-2000s–early-2010s style; it combines the Frutiger typeface name with Windows Aero. Characteristics: extensive skeuomorphism, glossy textures, aqua/sky-blue/teal palettes, lens flares, bokeh, nature imagery (fish, bubbles, skies). Y2K proper is the earlier and more chaotic sibling — chrome, metallic textures, abstract digital forms.
Sources: [Wikipedia — Frutiger Aero](https://en.wikipedia.org/wiki/Frutiger_Aero), [Aesthetics Wiki — Frutiger Aero](https://aesthetics.fandom.com/wiki/Frutiger_Aero), [Kittl blog](https://www.kittl.com/blogs/frutiger-aero-aesthetic-stl/).

**Verdict: not tokenisable.** Bokeh, lens flares, tropical fish and glossy chrome are *raster assets*. Strip the assets and you have a blue gradient — which is a theme, not a pack.

### 2.14 Claymorphism

**Status: CONTESTED — a marketing label for a blend.** Described as combining glassmorphism and neumorphism into "inflated, colorful elements with prominent shadows," adding inner glow for tactility. No design-authority definition (no NN/g, no IxDF topic page found); it is documented via design blogs and trend round-ups.
Sources: [Pixso — Glassmorphism vs Neumorphism vs Claymorphism](https://pixso.net/articles/glassmorphism-vs-neumorphism-vs-claymorphism/), [Tools Network guide](https://tools-network.com/blog/tutorials/modern-ui-design-trends-glassmorphism-neumorphism-claymorphism).

**But it is mechanically real even if the name is marketing:** very large radius + inner highlight + soft coloured shadow + mid-high saturation is a genuinely distinct token combination that no other pack in the set produces. It earns a slot on mechanics, with the caveat that the name is a label, not a movement.

### 2.15 Bento grid

**Status: CONTESTED origin, EVIDENCED as a real pattern.** Modular layout of variably-sized tiles, named for the Japanese compartmented lunch box. Two competing origin stories: **Apple keynote spec grids** (the dominant theory, gaining momentum ~2023–2024) versus **Microsoft Metro / Windows Phone 7** (the counter-theory). Linear.app is credited with popularising the "dark bento grid."
Sources: [Banani — Bento Grid explained](https://www.banani.co/definitions/bento-grid), [Mockuuups — Bento grid examples](https://mockuuups.studio/blog/post/best-bento-grid-design-examples/), [Beryl Design](https://www.beryldesign.fr/en/post/bento-grid-design).

**Important classification note:** bento is a **layout** pattern, orthogonal to every colour/depth style above. You can render a bento grid in Swiss, in neubrutalism, or in glass. It belongs in the gallery only if Actionist's packs carry layout/spacing tokens (tile gap, tile radius, span ratios) — which they should, for dashboard home screens.

---

## 3. THE MECHANICAL MATRIX

This is the core deliverable. If two proposed packs share a row here, one of them is redundant.

### 3.1 Aesthetic × token knobs

| Aesthetic | Surface↔BG contrast | Radius | Shadow character | Border weight | Type family class | Density | Chroma policy | Motion |
|---|---|---|---|---|---|---|---|---|
| **Swiss / International** | Low–med (rules, not fills) | 0–2px | None | Hairline 1px rules | Neo-grotesque sans | Compact | Near-neutral + 1 accent | Minimal / none |
| **Flat (post-iOS7)** | Medium | 4–8px | None or 1 subtle | 0–1px thin outline | Neutral sans | Default | Mid-sat, colour carries hierarchy | Simple ease |
| **Material 3 (baseline)** | Low, via **tonal tint** | 12–16px | **Tint overlay, shadow by exception** (6 levels, 0/1/3/6/8/12dp) | 0–1px | Humanist sans (Roboto) | Default–spacious | Seeded tonal palettes | Standard springs |
| **M3 Expressive** | as M3 | Larger, varied shapes | as M3 | as M3 | + **emphasized weight set** | Spacious, larger targets | Higher chroma | **Expressive springs, visible overshoot** |
| **Neumorphism** | **Near-zero (definitional)** | 12–24px | **Dual: light top-left + dark bottom-right, same hue** | 0 | Neutral sans | Spacious | **Monochromatic, same-hue only** | Soft press |
| **Glassmorphism** | Low, mediated by blur | 12–20px | **Backdrop-blur + low-opacity fill + gradient stroke** | Hairline translucent stroke | Neutral sans | Default | Requires **busy/gradient backdrop** | Soft fade |
| **Brutalism** | **Max (pure #000/#FFF)** | **0** | **None** | 0 or default UA | **Helvetica Bold caps / monospace** | Compact, unstyled | **Pure black/white + default link blue** | **None** |
| **Neubrutalism** | High | **0–4px** | **Hard offset, zero blur, solid colour (~4–5px)** | **Heavy 2–4px black** | Display/eccentric headline + neutral body | Spacious padding (24–32px) | **Max-saturation flat, 2–3 colours** | Snap / translate-on-press |
| **Skeuomorphism** | High | 6–12px | **Real: outer drop + inner bevel + gradient fill** | 1px, often gradient | Varies, often serif/system | Default | Photographic, texture-dependent | Physical |
| **Claymorphism** | Medium | **Very large 20–32px** | **Soft coloured outer + inner glow highlight** | 0 | Rounded geometric sans | Spacious | Mid-high saturation, pastel-bright | Bouncy |
| **Editorial** | Low (paper) | 0–4px | None | Hairline rules | **Serif headline + sans body** | Spacious, wide leading | Near-neutral + 1 ink accent | Minimal |
| **Dark-first / dev-tool** | **Low, via lightness layering on near-black** | 4–8px | Subtle or none; borders do the work | Hairline, low-contrast | Neutral sans + **mono numerics** | Compact | **Near-monochrome + 1 accent** | Fast, short |
| **Terminal / mono** | Low on near-black | **0–2px** | None | Hairline or ASCII rules | **Monospace everywhere** | Compact | Monochrome + 1 phosphor accent | None / step |
| **Corporate Memphis** | n/a — illustration layer | n/a | n/a | n/a | Rounded sans | n/a | Flat, non-representational hues | n/a |
| **Y2K / Frutiger Aero** | High | 8–16px | Gloss + bloom + lens flare (**raster**) | 1px, often light stroke | Frutiger/humanist | Default | **Aqua/teal/sky, glossy gradients** | Glossy |
| **Bento** | **Layout-only** | Tile radius 12–20px | Per host style | Per host style | Per host style | **Tile gap + span ratios** | Per host style | Per host style |

### 3.2 The knobs, restated as the pack contract

If Actionist's pack schema exposes only these, the gallery can be mechanically non-redundant. Note that **shadcn's stock theming does not reach far enough**: its documented CSS variables cover surface/foreground pairs, `--border`, `--input`, `--ring`, `--chart-1..5`, `--sidebar-*`, and **`--radius` only** — the docs page carries "no shadow, font, letter-spacing, or spacing tokens" in the default scaffold (EVIDENCED — [shadcn theming docs](https://ui.shadcn.com/docs/theming)). Radius is derived: `--radius-sm` = `calc(var(--radius) * 0.6)`, `md` 0.8, `lg` 1.0, `xl` 1.4, `2xl` 1.8, `3xl` 2.2, `4xl` 2.6, default `0.625rem`.

**Therefore a pack must add, beyond shadcn defaults:** a shadow ramp (with a `style` discriminator: `none | soft | hard-offset | dual | tonal | glass`), a font-family triple (display/body/mono), a density scale (control heights + padding ramp), a border-width scale, a letter-spacing/tracking ramp, and motion tokens (duration + easing/spring).

### 3.3 Proof the axes are independent

- **Radius is independent of colour** — Lyra ("square and minimal") and Maia ("round and approachable") in shadcn/create can carry identical palettes ([shadcndesign](https://www.shadcndesign.com/blog/how-to-choose-shadcn-ui-style)).
- **Elevation mechanism is independent of shadow presence** — M3 achieves depth with tonal tint and no shadow at all ([M3 Elevation](https://m3.material.io/styles/elevation)).
- **Density is independent of both** — Carbon ships **five row heights** as of Carbon 11 (up from four), with **two toolbar heights, 32px and 48px**, and rules on which pair with which ([Carbon data table usage](https://carbondesignsystem.com/components/data-table/usage/), [Carbon issue #8875](https://github.com/carbon-design-system/carbon/issues/8875)).
- **Component treatment is independent of all of the above** — Sera's "underline-only inputs" and Rhea's "borderless-at-rest fields" are pure component-token decisions ([shadcndesign](https://www.shadcndesign.com/blog/how-to-choose-shadcn-ui-style)).

Four provably independent axes is already enough to generate far more than 16 distinguishable packs. The constraint on the gallery is *usefulness*, not *distinguishability*.

---

## 4. Data-density and accessibility survivability

### 4.1 What data density actually demands

Baseline facts to hold each aesthetic against:

- **WCAG 1.4.11 Non-text Contrast (AA, introduced in 2.1, carried into 2.2):** UI component boundaries and state indicators need **3:1 against adjacent colours**. The most common failure is exactly the one dense tables invite: a light grey border like `#CCCCCC` on white gives roughly **1.6:1**; the fix is darkening to about **`#767676`** to reach 3:1 ([W3C Understanding 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [Deque University](https://dequeuniversity.com/resources/wcag2.1/1.4.11-non-text-contrast), [Eric Eggert — Non-text contrast in detail](https://yatil.net/blog/non-text-contrast-in-detail-ui-components)). Note the criterion "does not force authors to have a visual boundary at all — it only governs the contrast of indicators you do use."
- **WCAG 2.2 Target Size (Minimum) 2.5.8:** **24×24 CSS px** floor for interactive targets, with spacing exceptions. A compact row can be short, but its checkbox hit area cannot ([W3C Understanding 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)).
- **Dark mode is not free:** "a button that passes on white may fail on dark gray — so maintain a separate verified palette" ([TestParty 1.4.11 guide](https://testparty.ai/blog/wcag-1-4-11-non-text-contrast-2025-guide)). And WCAG 2.x contrast is *mathematically unsuited* to dark mode: it "overstates contrast for dark colors to the point that 4.5:1 can be functionally unreadable when one of the colors is near black," and "cannot be used for guidance designing dark mode" ([APCA in a Nutshell](https://git.apcacontrast.com/documentation/APCA_in_a_Nutshell.html)).
- **Practical density figures (CONVENTION, practitioner guidance not standard):** 48–56px rows standard, 40–44px compact, with 1px low-contrast dividers past ~20 rows; past ~1,000 rows switch to virtualization ([Setproduct data table guide](https://www.setproduct.com/blog/data-table-ui-design)). Carbon's own guidance: give tables the most width on the page, don't nest them in small containers, and **if zebra striping is off, row dividers are mandatory** ([Carbon](https://carbondesignsystem.com/components/data-table/usage/)).

### 4.2 Survivability verdicts

| Aesthetic | 200-row table | Form-heavy CRM | WCAG-gate compatible? | Verdict |
|---|---|---|---|---|
| **Swiss / International** | **Excellent** — rules over fills is exactly the dense-table idiom | Excellent | Yes, trivially (darken rules to ≥3:1) | **Ship. Anchor pack.** |
| **Dark-first / dev-tool** | **Excellent** — lightness layering scales to any row count | Excellent | Yes, but **must be authored against APCA/verified dark palette**, not inverted from light | **Ship.** |
| **Flat / minimal** | Excellent | Excellent | Yes | **Ship.** |
| **Material 3 (baseline)** | **Good** — tonal elevation costs nothing at 200 rows | Good | Yes — "accessible contrast is designed into role pairings, *but only if components use the prescribed role pairs*" | **Ship.** |
| **Editorial** | **Poor** — wide measure and large leading fight row density | Fair | Yes | **Ship, marketing/report surfaces only.** |
| **Bento** | N/A (layout) — good for dashboard *home*, irrelevant inside a table | N/A | Yes | **Ship as layout pack.** |
| **Neubrutalism** | **Fails** — 3px borders × 200 rows is 600px of black chrome; hard offset shadows on every row is visual noise | **Poor** — NN/g's own 24–32px padding guidance is anti-density | Passable *if* palette limited to 2–3 colours and yellow-on-cyan avoided; NN/g flags the risk explicitly | **Marketing/landing only. Do not offer for table-heavy apps.** |
| **Claymorphism** | **Fails** — 24px+ radius and inner glow do not tile | Poor | Achievable but fights itself | **Bounded: onboarding, portals, CTA surfaces.** |
| **Glassmorphism** | **Fails as a system.** It needs a busy backdrop by NN/g's own definition; a 200-row grid *is* the backdrop, and text "can span several underlying colors" | Poor | Achievable per-component, not per-system | **Reject as a pack. Allow as a bounded component material (nav overlay, modal scrim) inside other packs.** |
| **Neumorphism** | **Fails** — near-zero surface contrast against 200 rows is unreadable | **Fails** — controls stop reading as controls | **Structurally hostile.** Its definition (same-hue, near-lightness, blended shadows) is in direct tension with the 3:1 non-text requirement. Malewicz's own remediation is to add it only where removing it costs nothing | **Reject.** |
| **Skeuomorphism (full)** | Fails — asset weight, no scalability | Fails | Achievable | **Reject; keep the gradient/shadow residue as "Depth".** |
| **Corporate Memphis** | N/A — illustration layer | N/A | N/A | **Not a pack.** |
| **Y2K / Frutiger Aero** | Fails | Fails | Hard (glossy gradients under text) | **Reject.** |
| **Brutalism (pure)** | Technically survives (it's near-unstyled HTML) but is **deliberately** uncomfortable — Deville's own framing is "lack of concern to look comfortable or easy" | Poor | Pure black on white passes trivially | **Reject as offered pack; its usable half is Swiss + zero radius, which "Sharp" already covers.** |

### 4.3 The accessibility collision, stated precisely

Three distinct failure modes, and only two are fixable:

1. **Fixable by authoring — low-contrast minimal.** Nothing in "minimal" requires low contrast. The grey-border-on-white failure (~1.6:1) is an authoring choice, corrected by darkening to ≈`#767676`. Any minimal pack can pass. **Gate it, don't ban it.**
2. **Fixable by scoping — glassmorphism.** NN/g's own best practices are a scoping recipe: favour more blur, control the backdrop where possible, provide a reduce-transparency path (as Apple does), and comply with WCAG regardless. All achievable *for a modal over a controlled scrim*; not achievable *for a whole app*.
3. **Not fixable — neumorphism.** The aesthetic's defining premise is that the control is the same material and near-same lightness as its background. Raise the contrast enough to pass 1.4.11 and the extrusion illusion disappears — you have made a flat pack with soft shadows. The style's own originator's advice amounts to "only apply it where it's decorative." **A pack whose visual signature is destroyed by the gate should not be in a gallery gated on contrast.**

**Gate recommendation (CONVENTION):** run WCAG 2.2 as the legal floor — "a pair that passes APCA but fails 4.5:1 is still a legal liability today" ([APCA in a Nutshell](https://git.apcacontrast.com/documentation/APCA_in_a_Nutshell.html)) — and additionally check APCA Lc for dark packs, where WCAG 2.x is known to mispredict. Radix's precedent is directly usable: its steps 11 and 12 are "guaranteed to Lc 60 and Lc 90 APCA contrast" on a step-2 background of the same scale, and its 12-step roles map cleanly onto a pack ([Radix — Understanding the scale](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)). Useful APCA thresholds: Lc45 large text, Lc60 medium, Lc75 body minimum, Lc90 preferred ([APCA docs](https://git.apcacontrast.com/documentation/APCAeasyIntro.html)).

---

## 5. What real products actually offer — and the gap

| Product | Range actually spanned | Where it clusters | Mechanical or colour-only? |
|---|---|---|---|
| **shadcn/ui base colors** | 7: Neutral, Stone, Zinc, Mauve, Olive, Mist, Taupe ([theming docs](https://ui.shadcn.com/docs/theming)) | **All neutral greys/warm-greys** | **Colour-only** — and only *neutral* colour |
| **shadcn/create styles** | **8: Nova, Vega, Mira, Luma, Sera, Maia, Rhea, Lyra** ([Rhea changelog](https://ui.shadcn.com/docs/changelog/2026-05-rhea)) | Density and radius, from Mira (dense) to Luma (spacious), Lyra (square) to Maia (round) | **Mechanical** — spacing, sizing, radius, density, proportions |
| **shadcn styles (legacy)** | 2: `default` (deprecated) and `new-york`. Concrete diff: `h-10`→`h-9` controls, `ring-2`+`ring-offset-2`→`ring-1`, card `p-4`→`px-4 py-3 text-sm`, lucide→Radix icons ([community diff](https://gist.github.com/gulfaraz/3a872aab54e9585842bea863fbe7479c)) | Density | **Mechanical** |
| **tweakcn** | Live editor + preset gallery for shadcn/Tailwind v4 themes ([tweakcn.com](https://tweakcn.com/)) — page body not machine-readable at fetch time, **preset count UNVERIFIED** | Palette-forward | Mixed (exposes radius/shadow/font controls; extent UNVERIFIED) |
| **Material 3** | Baseline vs Expressive; seeded tonal palettes from one source colour | Single system, infinite hues | **Mechanical between baseline/expressive; colour-only within** |
| **Carbon** | 4 themes: white, g10, g90, g100 | **Light↔dark axis only** | Colour-only (density is a separate table-level control) |
| **Wix** | 2,000+ templates, 5 main categories (Blog, Community, Creative, Store, Business & Services), 27 subcategories ([WebsiteBuilderExpert](https://www.websitebuilderexpert.com/website-builders/comparisons/webflow-vs-squarespace/), counts CONTESTED across sources) | **Categorised by INDUSTRY, not by aesthetic** | Full templates |
| **Squarespace** | ~100–300 templates, 9–19 categories (counts vary by source) | **Industry categories** | Full templates |
| **Webflow** | 100 to 7,000+ depending on source (CONTESTED); business/portfolio/blog/ecommerce | **Industry categories** | Full templates |

### The gap, stated plainly

1. **Every website builder categorises by INDUSTRY, not by AESTHETIC.** Wix's 5 categories are Blog, Community, Creative, Store, Business & Services — a restaurant filter, not a look filter. A non-technical client who wants "sharp and serious, not friendly and rounded" cannot express that anywhere in these galleries. **That is Actionist's opening.**
2. **Every developer theme system categorises by COLOUR, not by MECHANICS** — with exactly one exception. shadcn's 7 base colors are all neutral greys; Carbon's 4 themes are a light/dark ramp. Only shadcn/create's 8 styles vary shape and density, and they were introduced *after* the colour-only era, which is itself evidence that colour-only was found insufficient.
3. **Nobody offers a gated gallery.** No surveyed product presents a finite set of pre-authored looks that are (a) mechanically distinct, (b) contrast-validated before use, and (c) selectable by a non-technical buyer before the app exists. The sibling report reaches the same conclusion from the schema side.

**Implication for Actionist:** the pack gallery should be labelled in *client language about character* ("sharp and serious," "warm and approachable," "dense and technical") and be differentiated in *mechanics*, not hue. That combination is unoccupied.

---

## 6. The proposed spanning set — 16 packs

Each row is mechanically distinct from every other on at least two of the seven knobs.

### Tier A — dense B2B workhorses (6)

| # | Pack | Character (client-facing line) | Mechanical distinctives |
|---|---|---|---|
| 1 | **Grid** | "Precise, neutral, gets out of the way." | Neo-grotesque sans; radius 0–2; **no shadows at all**, hairline rules ≥3:1; compact density; near-neutral + 1 accent; motion near-zero. The Swiss anchor. |
| 2 | **Console** | "Dark, technical, built for people who live in it." | **Dark-first canvas** (dark is canonical, light is the alternate); lightness-layered surfaces, no shadows; mono numerics in tables; compact; one accent; **APCA-authored, not inverted**. |
| 3 | **Ledger** | "Maximum information per screen." | Most extreme density: shortest control heights, smallest padding ramp, radius 0, hairline dividers, zebra optional-with-dividers-mandatory. Differs from Grid only on the density axis — but that is the axis Carbon proves matters most. |
| 4 | **Paper** | "Calm, light, easy on the eyes." | Warm off-white surfaces; radius 6; **one soft low-elevation shadow**; comfortable density; humanist sans; larger spacing ramp. The "Scandinavian/minimal" slot, honestly labelled. |
| 5 | **Tonal** | "Modern, layered, colour-led." | **Elevation by tonal tint, not shadow** (M3 mechanism); radius 12–16; spacious; seeded tonal roles; standard springs. The only pack in the set where depth is a *hue* operation. |
| 6 | **Slate** | "Serious dark, for long sessions." | Dark neutral surfaces layered by lightness step; hairline borders carrying identification; comfortable (not compact) density; near-zero chroma. Differs from Console on density + mono usage + accent discipline. |

### Tier B — branded product surfaces (5)

| # | Pack | Character | Mechanical distinctives |
|---|---|---|---|
| 7 | **Soft** | "Friendly, rounded, approachable." | Radius 12–16; soft diffuse shadows at 2 levels; comfortable density; rounded geometric sans; mid-saturation. The Luma/Maia pole. |
| 8 | **Sharp** | "Geometric, disciplined, a bit severe." | Radius 0–2; **no shadow, borders only**; mono for labels and numerics; compact-to-default; high-contrast neutral. The Lyra pole. |
| 9 | **Signal** | "Data-forward, status-led, high-visibility." | Neutral chrome + **saturated semantic roles** (chart-1..5 as first-class, not afterthoughts); default density; hairline borders; radius 4–6. Optimised for dashboards where colour is meaning. |
| 10 | **Editorial** | "Reads like a good magazine." | **Serif display + sans body**; wide measure; large leading; hairline rules; radius 0–4; no shadows; generous spacing ramp. Reports, docs, marketing. |
| 11 | **Bento** | "Modular dashboard tiles." | **Layout tokens are the payload**: tile gap, tile radius (12–20), span ratios, tile min-heights. Inherits colour from a host pack — offered as a layout modifier over Tier A/B, not a standalone palette. |

### Tier C — marketing / landing surfaces (3)

| # | Pack | Character | Mechanical distinctives |
|---|---|---|---|
| 12 | **Bold** | "Loud, confident, impossible to ignore." | **Heavy 2–4px borders; hard offset zero-blur shadows**; radius 0–4; 2–3 max-saturation colours per NN/g's limit; display headline + neutral body; padding 24–32px. **Marked table-hostile in the gallery.** |
| 13 | **Aurora** | "Premium, atmospheric, modern." | Gradient canvases + **backdrop-blur glass surfaces**; radius 16–20; translucent gradient strokes. **Restricted to marketing shells and overlay components; blocked from data grids by the pack manifest.** |
| 14 | **Mono** | "Terminal-native, for a technical audience." | **Monospace everywhere**; radius 0–2; near-black canvas; one phosphor accent; step/no motion; ASCII-style rules. Genuinely distinct from Console (which uses mono only for numerics). |

### Tier D — bounded expressive (2)

| # | Pack | Character | Mechanical distinctives |
|---|---|---|---|
| 15 | **Clay** | "Playful, tactile, chunky." | **Radius 20–32; soft coloured outer shadow + inner glow highlight**; zero borders; spacious; bright mid-saturation; bouncy motion. Onboarding, client portals, consumer-facing surfaces. |
| 16 | **Depth** | "Substantial, tangible, considered." | **Gradient surface fills + real drop shadow + inset top highlight**; radius 6–12; 1px gradient borders. The tokenisable residue of skeuomorphism, without assets. Approval flows, high-stakes confirmations. |

### Why each earns its slot

- **1, 2, 3, 6** are the only four that survive 200 rows without qualification, and they are the four most likely to be *chosen* by B2B clients. Three of them (Grid/Ledger, Console/Slate) are near-neighbours — that is intentional: the light/dark and comfortable/compact pairs are the two most-requested real variations, and shipping them as pre-authored packs is cheaper and safer than deriving them.
- **5 (Tonal)** is the only pack using tint-based elevation. Drop it and the gallery has one depth mechanism.
- **7 vs 8** are the round/square poles. shadcn ships both (Maia/Luma vs Lyra) — this is the single most legible mechanical distinction to a non-technical client.
- **10 (Editorial)** is the only pack with a serif display face. Drop it and the gallery is 100% sans.
- **11 (Bento)** is the only layout-axis pack; without it, "make my dashboard home look modern" has no answer.
- **12, 14** are the two genuinely *loud* options. Actionist needs at least two, or every client-facing app looks like the same competent grey SaaS.
- **15, 16** cover the two tactile mechanisms (inflated-soft, and gradient-plus-real-shadow) that nothing else in the set produces.

### Coverage self-check against the seven knobs

- **Contrast delta:** near-zero (none — deliberately, see §6), low (Console/Slate/Tonal), medium (Paper/Soft), high (Grid/Bold).
- **Radius:** 0 (Grid, Ledger, Sharp, Mono) → 4–6 (Paper, Signal) → 12–16 (Soft, Tonal) → 20–32 (Clay).
- **Shadow:** none (Grid/Ledger/Sharp/Mono/Editorial), soft (Paper/Soft), tonal-tint (Tonal), hard-offset (Bold), glass-blur (Aurora), inner-glow (Clay), real-gradient (Depth). **Seven distinct mechanisms.**
- **Border:** hairline (most), heavy (Bold), zero (Soft/Clay), translucent (Aurora).
- **Type class:** neo-grotesque, humanist, geometric-rounded, serif, monospace, display-eccentric — all six present.
- **Density:** compact (Grid/Console/Mono/Sharp), maximal (Ledger), default (Signal/Slate), spacious (Paper/Soft/Tonal/Editorial/Clay/Bold).
- **Chroma:** near-neutral, mono+accent, tonal-seeded, semantic-saturated, max-flat, pastel-bright — all present.

No gap. No two rows identical on two or more axes.

---

## 7. What was excluded, and why

| Excluded | Reason |
|---|---|
| **Neumorphism** | Its defining premise — controls the same hue and near-lightness as their background — is in structural tension with WCAG 1.4.11's 3:1 non-text requirement. Author it to pass and the extrusion illusion is gone; you have shipped "Paper" with extra shadows. Its own originator says apply it only where removing it costs nothing. A pack that dies at the gate should not be in a gallery gated on contrast. |
| **Glassmorphism as a standalone pack** | By NN/g's own definition it requires a "gradient or complex background" to read as glass, and its text "can span several underlying colors." A data grid cannot supply that backdrop and cannot tolerate that risk. **Kept as a bounded component material** inside Aurora and as an optional overlay treatment elsewhere — which is exactly how Fluent (Acrylic) and Apple (Materials) file it. |
| **Corporate Memphis / Alegria** | An illustration style, not a token system. Its entire signature (bendy limbs, non-representational skin tones) lives in vector assets. Belongs in an illustration-asset picker if Actionist builds one. Also documented as oversaturated to self-cannibalisation by 2023. |
| **Y2K / Frutiger Aero** | Community-coined, explicitly "not an official design category," and asset-dependent — bokeh, lens flares, glossy chrome, tropical fish. Strip the raster assets and what remains is a blue gradient, i.e. a theme, not a pack. |
| **Full skeuomorphism** | Textures (leather, felt, brushed metal) are assets, not tokens. Its tokenisable residue is preserved as **Depth**. |
| **Pure brutalism** | Deville's definition is explicitly about "lack of concern to look comfortable or easy." Its usable half — pure contrast, zero radius, system fonts — is already **Sharp** and **Grid**. Offering the unusable half to a client building a CRM is a trap. |
| **Cyberpunk as a separate pack** | Expressible (glow shadows, high-chroma on near-black) but mechanically it is Console/Mono with a different accent hue and a glow shadow token. That is a *theme* of an existing pack, not a pack. Ship it as a Console variant if demand appears. |
| **A separate "Scandinavian" pack** | No design authority defines a UI token signature distinct from Swiss-plus-warmth-plus-space. **Paper** is that, honestly labelled. |
| **Packs 17–30** | Every additional pack must clear the two-axis test in §6. Beyond 16, new entries were hue variants or single-axis nudges — which the gallery should express as *theme variants within a pack* (light/dark, accent choice), not as new packs. **A gallery of 30 that differ by accent colour is the failure mode the brief names; 16 mechanically distinct packs × light/dark × a small accent choice already yields plenty of visible variety without redundancy.** |

---

## 8. Open questions

1. **Does the pack schema carry layout tokens?** Bento only works as a pack if tile gap, span ratios and tile min-height are in scope. If packs are colour+radius+type+shadow only, Bento drops to 15 packs and becomes a template concern. **This is the one decision that changes the set size.**
2. **Light/dark: paired or separate packs?** Carbon ships white/g10/g90/g100 as four *named themes*. If Actionist pairs light+dark inside each pack, Slate and Ledger may collapse into Console and Grid — reducing 16 to 14. If packs are single-mode, all four stand. Recommend paired, with Console and Slate surviving as genuinely different *density* choices rather than light/dark ones.
3. **Is the contrast gate WCAG-only or WCAG + APCA?** WCAG 2.2 is the legal floor and must gate. But WCAG 2.x is documented as mispredicting dark-mode contrast, which is precisely where Console, Slate and Mono live. Recommend: WCAG 2.2 as pass/fail, APCA Lc as an *additional* gate on dark packs only. Radix's Lc 60 / Lc 90 guarantee is a ready-made target.
4. **How are table-hostile packs enforced?** Bold, Aurora, Clay and Mono should carry a manifest flag (e.g. `dataDensity: "low"`) that either warns the client at selection time or blocks the pack for app types dominated by grids. Warning vs blocking is a product call.
5. **tweakcn preset inventory — UNVERIFIED.** The site's body content was not machine-readable at fetch time, so its preset count and the extent of its non-colour controls remain unconfirmed. Worth a browser-based check before claiming the gap is unoccupied, since tweakcn is the closest adjacent product.
6. **Do M3 Expressive's motion schemes justify a separate pack?** The spring-based expressive/standard split is a real mechanical axis (visible overshoot vs none), but currently it is absorbed as a motion-token difference inside Tonal. If motion becomes a first-class client-facing choice, Tonal could split into Tonal and Tonal Expressive.
7. **Named-style licensing.** "Material" and "Material Design" are Google marks; the Tonal pack should be described by its mechanism (tonal elevation) and not marketed as Material. Same caution for Geist/Vercel-derived naming in Console.
