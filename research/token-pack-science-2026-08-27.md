# Deterministic Design-Token Packs: Prior Art, Science, and a Complete Schema

**Research date:** 2026-08-27  
**Scope:** evidence for a closed, pre-authored gallery of design-token packs for Action Model / Actionist.  
**Reading rule:** **EVIDENCED** means directly documented by the linked source; **CONVENTION** means a widely used practice without strong evidence that the specific number is optimal; **CONTESTED** means the source or literature explicitly leaves room for disagreement, uncertainty, or future change.

## 1. Verdict

- There is real engineering science behind parts of a pack: color-space conversion, luminance/contrast math, type interpolation, token validation, and deterministic theme resolution are machine-checkable.
- The *content* and *composition* of a visual style are not uniquely determined by science. Step counts, spacing units, type ratios, radius families, shadows, and “brand feel” remain conventions or authored taste.
- Large systems already ship closed, multi-theme token sets: Spectrum, Carbon, Primer, Polaris, Atlassian, M3, Radix, shadcn/ui, and others. They prove the pack model is operationally sound.
- The W3C Design Tokens Community Group now has a first stable **2025.10 Community Group Report**, but it standardizes interchange syntax and typing, not a semantic taxonomy or a “complete pack” recipe. It is not a W3C Recommendation.
- Template marketplaces prove that non-technical buyers will choose visually from cards, previews, filters, and “edit this” actions. They generally sell complete layouts/templates, not closed token packs independent of structure.
- **Closest verified competitive matches:** Figma First Draft exposes theme thumbnails and preset colors during generation; Base44 has workspace design systems that can be selected as a default before a new app’s first prompt. Neither is verified as a deterministic, closed token-pack picker with a finite pre-authored gallery and a no-invention guarantee.
- Most AI builders document prompt/import/post-generation editing rather than a pre-build, closed theme-preset step. Lovable, v0, Bolt, and Replit should therefore not be described as having one without product-specific evidence.
- Recommendation: ship curated packs as immutable, versioned artifacts; let the model select token *names* only; reject arbitrary style literals and fail the build on incomplete or inaccessible packs.

**Single most surprising finding:** the strongest precedent is not an AI builder but GitHub Primer: a documented base → functional → component token architecture with multiple dark, high-contrast, and color-vision themes, where functional tokens—not raw palette values—are the cross-theme contract.

## 2. Prior art table

| Name | What it is | What it actually does (verified) | Relevance to Actionist | Link |
|---|---|---|---|---|
| **W3C Design Tokens Community Group (DTCG)** | Vendor-neutral interchange specification | 2025.10 is a first stable Community Group Report, not a W3C Standard/Recommendation. It defines JSON token/group structure, `$value`, `$type`, aliases/references, inheritance, deprecation, extensions, and typed composite values. It does **not** prescribe primitive/semantic/component tiers, naming taxonomy, visual taste, or a minimum pack. | Use as the file contract and validator input, not as the pack design itself. | [2025.10 announcement](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/), [format report](https://www.designtokens.org/TR/2025.10/format/), [W3C CG reports](https://www.w3.org/community/reports/) |
| **Adobe Spectrum** | Enterprise design system | Spectrum describes tokens as centrally managed design decisions. Its system supports four color themes (lightest, light, dark, darkest) and desktop/mobile scales; components are expected to work across them. Spectrum DNA generates component design files from token data. | Evidence that a pack should include theme variants and scale/context variants, not just one palette. | [Design tokens](https://spectrum.adobe.com/page/design-tokens/), [color system](https://spectrum.adobe.com/page/color-system/) |
| **Salesforce Lightning Design System 2** | Enterprise product design system | SLDS 2 decouples structure from visual style, favors CSS custom properties/styling hooks, and supports default Salesforce Cosmos or custom org themes. Admins select a brand color; Salesforce documents automatically selecting complementary accent colors meeting WCAG contrast guidance. Dark mode is documented as beta for Winter ’26. | Strong evidence for deterministic role-based derivation from a brand input, but it is not a finite visual gallery of packs. | [Color](https://www.lightningdesignsystem.com/2e1ef8501/p/655b28-color), [admins/theming](https://www.lightningdesignsystem.com/2e1ef8501/p/771012), [styling hooks](https://www.lightningdesignsystem.com/2e1ef8501/p/591960-global-styling-hooks/) |
| **IBM Carbon** | Enterprise design system | `@carbon/themes` ships four named themes: white, g10, g90, g100. Common role-based tokens remain stable while theme values change. Carbon documents color, spacing, typography, and layering; code supports Sass theme maps and automatic `prefers-color-scheme` switching. | A direct precedent for closed named packs, explicit light/dark surface layering, and shared semantic roles. | [Themes overview](https://carbondesignsystem.com/elements/themes/overview/), [theme code](https://carbondesignsystem.com/elements/themes/code/), [color](https://carbondesignsystem.com/elements/color/overview/) |
| **GitHub Primer** | Large product design system | Primer documents base tokens (raw values), functional tokens (global UI roles), and limited component/pattern tokens. It ships light/dark plus high-contrast, dimmed, colorblind, and tritanopia variants as separate themes. Functional token names stay the contract while scales change per mode. | Best prior art for the three-tier pack architecture and accessibility variants. | [Token names](https://primer.style/product/primitives/token-names/), [UI color system](https://primer.style/foundations/color/overview/), [primitives colors](https://primer.style/primitives/colors/), [repository guide](https://github.com/primer/primitives/blob/main/DESIGN_TOKENS_GUIDE.md) |
| **Material Design 3** | Google/Android design system | Material Color Utilities converts a source color into key colors and tonal palettes, then maps fixed tones to semantic roles. HCT separates hue/chroma/tone; the palette/role recipes are deterministic. Accessible contrast is designed into role pairings, but only if components use the prescribed role pairs. | Strong precedent for “one seed → complete deterministic theme,” though M3 is an algorithm/role system rather than a gallery of hand-authored packs. | [M3 color system](https://m3.material.io/styles/color/system/how-the-system-works), [dynamic color](https://m3.material.io/styles/color/dynamic/user-generated-source), [Material Color Utilities](https://github.com/material-foundation/material-color-utilities) |
| **Radix Colors** | Open UI color palette system | Each palette has 12 authored steps with documented purposes: backgrounds (1–2), component states (3–5), borders/focus (6–8), solid backgrounds (9–10), and text (11–12). Its docs state text steps target APCA Lc 60/90 over step 2. Light and dark scales are separate and use mutable aliases for cases such as app background. | Closest color-scale precedent for a pack preview that visibly communicates roles, and for role-specific, machine-tested ramps rather than generic swatches. | [Scale rationale](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale), [compose palette](https://www.radix-ui.com/colors/docs/palette-composition/composing-a-palette), [custom palettes](https://www.radix-ui.com/colors/docs/overview/custom-palettes) |
| **Tailwind CSS** | Utility CSS framework with a default theme | Tailwind v4 exposes theme variables for colors, type, fonts, shadows, and more. Its default palette uses 11 OKLCH steps (50–950); authors can extend, override, or clear namespaces. It is a broad primitive library, not a semantic complete app pack. | Good primitive source and serialization target; insufficient alone because arbitrary utility use can bypass semantic completeness. | [Theme variables](https://tailwindcss.com/docs/theme), [colors](https://tailwindcss.com/docs/colors), [v4 announcement](https://tailwindcss.com/blog/tailwindcss-v4) |
| **shadcn/ui** | Copy-owned component scaffolding and theming convention | Uses CSS variables with semantic surface/content pairs (`background`/`foreground`, `primary`/`primary-foreground`, etc.), light and `.dark` values, chart/sidebar roles, and a base radius. Its installer offers a finite `baseColor` choice, while values remain editable. | A pragmatic minimum semantic role set and pairing convention. It is not immutable: users can edit values and add arbitrary tokens. | [Theming](https://ui.shadcn.com/docs/theming) |
| **tweakcn** | Visual shadcn theme editor/generator | Provides live editing and preview of shadcn/Tailwind themes and code output; it is a visual editor, not a pre-build closed marketplace with enforced completeness. | Prior art for pack-card preview and export, but not for deterministic enforcement. | [tweakcn](https://tweakcn.com/), [theme editor](https://tweakcn.com/editor/theme) |
| **Open Props** | CSS custom-property library | Ships “sub-atomic” props for colors, type, fluid type, weights, line heights, shadows, ratios, durations, sizes, gradients, and more; supports modular imports. | Demonstrates breadth of categories required if the model must never invent a raw value. It is a library of primitives, not an app semantic contract. | [Open Props](https://open-props.style/) |
| **Atlassian Design System** | Enterprise product design system | Defines themes as collections of token values, including light/dark/high-contrast and non-color themes. Semantic color tokens include role, emphasis, inverse, state, text, links, icons, backgrounds, borders, charts, elevation, and opacity. | Strong evidence that a complete pack must cover more than palette and typography, and that tokens should express intent. | [Design-token overview](https://atlassian.design/foundations/tokens/design-tokens), [all tokens](https://atlassian.design/components/tokens/all-tokens), [color](https://atlassian.design/foundations/color) |
| **Shopify Polaris** | E-commerce/admin design system | Current docs expose tokens for space, typography, and color. Legacy color docs describe role-based palettes generated in HSLuv with WCAG 2.1 contrast targets; spacing uses 4px units and lint rules prefer tokens over literals. | Evidence for role-based colors, automated palette generation, and lint-enforced spacing; the HSLuv rationale is legacy and should not be treated as universal proof. | [Current color](https://polaris.shopify.com/foundations/design/colors), [legacy color](https://legacy.polaris.shopify.com/design/colors), [space](https://polaris.shopify.com/tokens/spacing), [typography](https://polaris.shopify.com/foundations/design/typography) |
| **ThemeForest / Envato** | Template marketplace | Listings converge on faceted search/category, sales/rating/update metadata, and a separate live preview. Buyers choose a complete layout/template, then customize it. | Proven visual discovery UX, but structure and theme are bundled; Actionist can separate the visual token pack from generated app structure. | [Marketplace search](https://themeforest.net/search/marketplace), [Webflow category](https://themeforest.net/category/cms-themes/webflow) |
| **Webflow Templates** | Website template marketplace and builder | Browse/search templates; listings provide preview; “Preview in Designer” enables trying edits without saving; selecting a template creates a new project rather than applying it to an existing project. A separate community gallery supports browse/clone/customize. | Strong browse → preview → commit pattern for pack picking, and evidence that preview reduces commitment. | [Templates](https://webflow.com/templates/all), [marketplace](https://webflow.com/marketplace) |
| **Framer Marketplace** | No-code website template marketplace | Curated category browsing of templates intended to be customized in Framer; the choice is a template/layout, not an independently versioned design-token pack. | Supports visual gallery and editable preview pattern. | [Framer marketplace](https://www.framer.com/marketplace/) |
| **Wix Templates** | Website builder template picker | Browse by category/search, view or edit a template, then customize colors, fonts, images, sections, layout, and apps in the editor. Listings expose audience/description metadata. | Very clear non-technical picker UX: card → View/Edit → customize; Actionist should use a live representative preview and keep “apply pack” one click. | [Wix templates](https://www.wix.com/website/templates) |
| **Canva Brand Kit** | Brand asset/token layer applied to templates | Brand Kit stores logos, colors, fonts, and templates; Brand Templates can be applied to designs and Canva AI can generate on-brand designs. Setup can extract brand elements from a website/PDF. | Strong precedent for separating a reusable brand layer from individual layouts/templates. | [Brand Kit](https://www.canva.com/help/brand-kit/), [Brand Templates](https://www.canva.com/help/using-brand-templates/), [on-brand generation](https://www.canva.com/help/create-on-brand-designs/) |
| **Figma First Draft / Figma AI** | Generative wireframe/design feature | During generation, users can preview theme thumbnails; controls include light/dark, preset colors or color wheel, radius, spacing, and title/body/label fonts. It uses Figma-built wireframe libraries and did not document custom design-system support in the cited article. | Closest verified generation-time visual-theme chooser. It is not documented as a closed DTCG token pack, and custom systems were not yet supported in that source. | [Use First Draft](https://help.figma.com/hc/en-us/articles/23955143044247-Use-First-Draft-with-Figma-AI) |
| **Base44** | AI app builder | Workspace Design Systems store brand basics, colors, fonts, logo, radius, shadows, spacing, and components; a default design system is preselected when starting a new app, and users can choose another through the AI chat. A per-app Theme panel is post-generation. | Closest verified AI-builder precedent for “choose a reusable design system before the first prompt,” though docs describe generated/editable systems rather than a fixed gallery of immutable packs. | [Design system](https://docs.base44.com/Building-your-app/Design-system), [customizing app design](https://docs.base44.com/Building-your-app/Design) |
| **Lovable** | AI app builder | Public materials cited here document screenshot/Figma import and visual edits; no official source was found confirming a pre-build finite preset-token gallery. | Treat as **not verified** for this competitive feature. Do not claim absence globally; only absence from the reviewed sources. | [Lovable design/video entry](https://lovable.dev/videos/figma), [comparison guide](https://lovable.dev/guides/lovable-vs-v0) |
| **v0** | Vercel generative UI/app builder | Public docs/materials reviewed describe React/Tailwind/shadcn generation and reusable style presets/design-system instructions, but no official source was found confirming a closed pre-build token-pack gallery. | Token-aware prompting/styles are adjacent prior art, not proof of deterministic picker UX. | [v0](https://v0.dev/), [generative UI guide](https://v0.dev/chat/generative-ui-guide-mIdmdXFEtBi) |
| **Bolt** | AI app builder | Reviewed materials document prompt generation, imports, testing, and deployment; no official source was found confirming a finite pre-build theme/token picker. | **Not verified**; likely relies on prompt/import/post-generation edits in the reviewed evidence. | [Bolt materials via Lovable comparison](https://lovable.dev/guides/bolt-vs-lovable) |
| **Replit Agent** | AI app builder/IDE | Replit documents Visual Editor/Design Mode and Figma import; the cited custom-theme documentation concerns the Project Editor’s appearance, not a generated-app pack picker. | **Not verified** as a pre-build app-token picker. Figma import is a handoff path, not a closed palette gallery. | [Replit Design](https://replit.com/products/design), [Figma import](https://docs.replit.com/getting-started/quickstarts/import-from-figma), [editor themes](https://docs.replit.com/references/editor/themes) |

### What “already doing the deterministic picker” means

No reviewed product is documented as doing all of the following simultaneously: (1) a finite gallery of pre-authored token packs, (2) a representative visual preview, (3) complete closed-world token coverage, (4) machine validation before use, and (5) a guarantee that the generation model cannot invent values. Figma First Draft does (1–2) with style controls; Base44 does reusable pre-build design systems; mature design systems do (3–4) internally. The combined product is still a credible differentiation.

## 3. The science and evidence

### 3.1 DTCG: format versus design-system architecture

**EVIDENCED.** The 2025.10 format treats an object with `$value` as a token; `$type` may be explicit or inherited from the closest typed group, and implementations must not infer type by inspecting value shape. Groups are arbitrary JSON objects without `$value`; names and hierarchy do not imply semantic purpose. Curly-brace aliases target complete tokens; `$ref` uses JSON Pointer and can target sub-properties. Composite types include stroke style, border, transition, shadow, gradient, and typography. Extensions are preserved even when a consumer does not understand them. See the [2025.10 format report](https://www.designtokens.org/TR/2025.10/format/).

**EVIDENCED.** The first stable release is a **Community Group Report**, not a W3C Recommendation or W3C Standards Track deliverable. See the [release announcement](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/) and [W3C CG report guidance](https://www.w3.org/community/reports/).

**INFERRED.** Semantic tokens can be represented using aliases and author-defined namespaces (`primitive`, `semantic`, `component`), but the DTCG format does not formalize those tier names or tell a tool which role a token serves. A pack needs an additional Actionist profile that constrains naming, allowed namespaces, required paths, and metadata.

### 3.2 Perceptual color spaces: useful, not magical

**EVIDENCED.** The W3C [CSS Color 4 specification](https://www.w3.org/TR/css-color-4/) describes Oklab/OkLCh as an improved Lab-like space produced by optimization against visually similar color data, with better hue/chroma uniformity than CIE L
a*b*/LCh in relevant uses. Björn Ottosson’s original [Oklab explanation](https://bottosson.github.io/posts/oklab/) describes goals of predicting lightness, chroma, and hue while keeping coordinates useful and computationally simple.

**EVIDENCED.** Oklch’s `L` axis is useful for constructing monotonic light-to-dark ramps and interpolation; it is not a guarantee that equal numeric steps are equally perceived for every hue, size, background, or display. Gamut mapping can alter chroma and sometimes lightness. Use a wide-gamut representation for authoring, then validate the actual sRGB fallback and CSS rendering path.

**CONTESTED.** “Perceptually uniform” is not one universal property. Appearance uniformity, color-difference prediction, and accessibility contrast are different objectives. The cited Oklab source itself is a model derivation, not a guarantee of perfect human uniformity. Therefore a pack gate should test monotonicity and deltas but should not claim that one color space makes all ramps objectively correct.

**CONVENTION.** For a deterministic UI pack, author ramps in OKLCH or HCT, clamp/map to the target gamut, and store the final CSS/display values plus source metadata. A practical gate can reject non-monotonic lightness and extreme adjacent ΔE differences; thresholds below are proposed engineering thresholds, not standards.

### 3.3 Radix’s 12-step rationale

**EVIDENCED.** Radix documents a role-oriented 12-step scale rather than presenting 12 arbitrary swatches:

1. app background;
2. subtle background;
3. normal UI-element background;
4. hovered UI-element background;
5. active/selected UI-element background;
6. subtle non-interactive borders/separators;
7. interactive borders/focus rings;
8. hovered interactive borders/heavier focus;
9. solid backgrounds/high-chroma accent;
10. hovered solid backgrounds;
11. low-contrast text;
12. high-contrast text.

The exact rationale and caveats are in [Understanding the scale](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale).

**EVIDENCED.** Radix states that steps 11 and 12 are designed for APCA Lc 60 and Lc 90 against a corresponding step 2 background. It also documents exceptions: some yellow-family steps 9–10 are intended for dark rather than white foregrounds. Light and dark themes are separate; a mutable alias can map `AppBg` differently in each mode. See [aliasing](https://www.radix-ui.com/colors/docs/overview/aliasing).

**INFERRED.** Radix’s scale is a good preview grammar for Actionist: show a swatch plus a miniature UI strip labelled by role. Do not copy the step numbers as universal truth; semantic role coverage matters more than 12 as a number.

### 3.4 Material 3 HCT and tonal palettes

**EVIDENCED.** M3’s documented pipeline is source/seed color → key colors (primary, secondary, tertiary, neutral, neutral variant) → tonal palettes → semantic color roles. HCT uses hue, chroma, and tone; tone ranges from black-like 0 to white-like 100. Material Color Utilities provides the reference implementation and commonly uses tones `[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100]`. See [M3 color system](https://m3.material.io/styles/color/system/how-the-system-works) and [Material Color Utilities](https://github.com/material-foundation/material-color-utilities).

**EVIDENCED.** The role recipes are designed so prescribed pairs such as `primary`/`on-primary` and `primary-container`/`on-primary-container` have appropriate contrast. The guarantee depends on respecting role assignments; a developer who substitutes arbitrary colors breaks the contract. Chroma availability varies by hue and tone, so a seed’s exact chroma/tone is not necessarily preserved in every output role.

**INFERRED.** M3 proves that a one-input deterministic generator can produce a complete role palette. For Actionist, there are two viable modes: (a) hand-authored closed packs, safest for visual art direction; (b) deterministic seed-derived packs, safest for scale. If using (b), pin the Material Color Utilities version and run the same gates as hand-authored packs.

### 3.5 Contrast: WCAG 2.x and APCA

**EVIDENCED.** WCAG 2.x uses relative luminance and the contrast ratio:

```text
L = 0.2126 R + 0.7152 G + 0.0722 B
contrast = (L1 + 0.05) / (L2 + 0.05)
```

`R`, `G`, and `B` are linearized sRGB channels; current WCAG 2.2 uses the 0.04045 breakpoint. AA thresholds are 4.5:1 for normal text and 3:1 for large text; enhanced text is 7:1. The normative success criterion is [WCAG 2.2 SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum); the luminance definition is [here](https://www.w3.org/TR/WCAG21/relative-luminance.html).

**EVIDENCED.** APCA reports signed perceptual lightness contrast `Lc`: positive for dark text on light, negative for light text on dark. Its documentation presents Lc 90 as preferred for fluent/body text, Lc 75 as a body-text floor in several size/weight contexts, Lc 60 for non-body text, Lc 45 for headline-scale text, Lc 30 as a floor for low-priority text/non-text, and Lc 15 near the visibility limit. See [APCA Easy Intro](https://git.apcacontrast.com/documentation/APCAeasyIntro.html), [APCA in a Nutshell](https://git.apcacontrast.com/documentation/APCA_in_a_Nutshell.html), and [integration compliance](https://git.apcacontrast.com/documentation/minimum_compliance.html).

**CONTESTED.** APCA is not a ratified WCAG 3 Recommendation. It is a candidate method in ongoing WCAG 3 work; the APCA project’s own documentation says WCAG 3 is still in development. W3C Silver/WCAG 3 working material is non-normative unless explicitly stated. Do not label a pack “WCAG 3 compliant.”

**INFERRED.** A robust gate should run both WCAG 2.2 ratio (regulatory compatibility) and a pinned APCA implementation (perceptual/forward-looking quality). A pass in one must not suppress a fail in the other. Record the algorithm and version in pack metadata.

### 3.6 Type scales and fluid type

**EVIDENCED.** A modular type scale is a repeated ratio from a base size. Utopia documents fluid type as interpolation between a small-viewport scale and a large-viewport scale, emitted using CSS `clamp(min, preferred, max)`. Its calculator gives the linear slope and y-intersection used to create the preferred term. See [Utopia type calculator](https://utopia.fyi/type/calculator/), [CSS modular scales](https://utopia.fyi/blog/css-modular-scales/), and [clamp calculator](https://utopia.fyi/blog/clamp-calculator/).

**CONVENTION.** Ratios such as 1.125, 1.2, 1.25, 1.333, and 1.618 are design conventions. The reviewed Utopia materials provide a coherent construction method, not controlled evidence that one ratio improves comprehension or visual quality for every product. A pack must fix the base, ratio/steps, min/max viewport, line-height policy, and weight mapping; it should not ask a model to pick these.

**CONTESTED.** CSS `clamp()` and browser text zoom interact with accessibility. The Utopia materials cite concerns that a preferred/max formula can behave unexpectedly under user text-size preferences. Test with browser zoom/text resizing and avoid using viewport interpolation as a substitute for readable minimums.

### 3.7 Spacing and the 4pt/8pt grid

**EVIDENCED.** Material’s layout guidance codifies 8dp as the common layout unit, with 4dp used for finer elements and typography baselines. Shopify Polaris documents 4px spacing units and tokenized spacing. See [Material layout](https://m2.material.io/design/layout/understanding-layout.html) and [Polaris space](https://polaris.shopify.com/tokens/spacing).

**CONVENTION.** The reviewed evidence supports institutional convention and divisibility/practicality, not a controlled study proving 4pt or 8pt is perceptually optimal. A pack can choose 4, 5, 6, or 8 as long as it defines the entire scale and component geometry consistently. The gate should enforce allowed values, not claim the base unit is scientifically superior.

### 3.8 Primitive → semantic → component layering

**EVIDENCED.** Primer explicitly documents base, functional, and component/pattern token tiers. Base tokens map to raw values; functional tokens represent global UI patterns and respect modes; component tokens are limited and more specific. Atlassian likewise describes tokens as named design decisions and warns not to select tokens merely because values happen to match across one theme. DTCG provides aliases/references but leaves tiers to authors. See [Primer token names](https://primer.style/product/primitives/token-names/), [Atlassian tokens](https://atlassian.design/foundations/tokens/design-tokens), and [DTCG](https://www.designtokens.org/TR/2025.10/format/).

**INFERRED.** Layering reduces drift when (1) components consume semantic roles, (2) primitives are not permitted in application code, and (3) a validator checks reference direction and forbids cycles. It is not evidence that every three-tier naming scheme is optimal; it is evidence that large systems use the separation to make themes and maintenance tractable.

### 3.9 Dark mode

**EVIDENCED.** Primer, Carbon, Spectrum, Atlassian, Radix, and shadcn all represent dark mode with alternate values or alternate token files/selectors. shadcn’s documented dark values do not simply invert light values: borders/inputs become translucent white and chart/sidebar roles differ. Radix documents that an app may use white in light mode but a gray/colored step in dark mode, requiring a mutable alias. Carbon’s layering model treats dark surfaces as a system, not a raw inversion. See [shadcn theming](https://ui.shadcn.com/docs/theming), [Carbon themes](https://carbondesignsystem.com/elements/themes/overview/), [Radix aliasing](https://www.radix-ui.com/colors/docs/overview/aliasing), and [Primer color](https://primer.style/foundations/color/overview/).

**INFERRED.** Naive inversion breaks semantic emphasis, surface hierarchy, shadows/elevation, border visibility, text contrast, status-color meaning, and image/illustration suitability. A disciplined pack defines explicit light/dark semantic pairs and validates them independently. “Dark = invert RGB” must be prohibited.

## 4. PROPOSED MINIMUM COMPLETE PACK SCHEMA

This is the proposed Actionist profile. It is intentionally stricter than DTCG. “Complete” means the generator can only reference declared token names and never needs to choose a raw value. A pack may contain more tokens, but cannot omit a required category unless it declares a deterministic, version-pinned resolver for that category.

### 4.1 Pack identity and closed-world metadata

1. `pack.id`: immutable slug.
2. `pack.version`: semantic version.
3. `pack.name`, `pack.description`, `pack.author`, `pack.license`.
4. `pack.preview`: thumbnail(s), representative screen, supported modes, and accessibility badges.
5. `pack.schemaVersion`: Actionist profile version.
6. `pack.colorSpace`: authoring space, output space, gamut mapping method, and color-profile assumptions.
7. `pack.algorithms`: WCAG version, APCA implementation/version, color conversion library/version, font metric policy, and any seed-generation library/version.
8. `pack.modes`: at least `light` and `dark`; optionally `highContrast`, `dimmed`, `lightColorblind`, `darkColorblind`.
9. `pack.allowedNamespaces`: explicit primitive, semantic, component, state, and asset namespaces.
10. `pack.closedWorld: true`: unknown token names and literal style values are build errors, not fallbacks.
11. `pack.deprecations`: explicit token replacements; no silent deletion.

### 4.2 Color primitives

12. Neutral scale: at least 10–13 steps, or a declared equivalent, for each mode/variant.
13. Brand/accent scales: primary plus secondary/tertiary; each has deterministic steps and gamut-safe outputs.
14. Status scales: success, warning, danger/error, info, and optionally discovery/notice.
15. Focus/selection scale: explicit focus ring, selected background, selected border, and keyboard-visible state colors.
16. Inverse scales: text/icon/border values intended for bold or accent surfaces.
17. Alpha overlays: scrim, hover, pressed, disabled, hairline, and translucent border tokens; alpha values are explicit.
18. Data-visualization palette: categorical, sequential, and diverging series with a minimum count declared by the component inventory; include CVD-safe alternatives or explicit non-color cues.
19. Color profile/fallback pair: wide-gamut value where supported and sRGB fallback where required.
20. Primitive metadata: source color, HCT/OKLCH coordinates where applicable, gamut clipping result, and ramp role.

### 4.3 Semantic color roles

21. Canvas/background: `background`, `background-subtle`, `background-sunken`, `background-inverse`.
22. Surfaces: `surface`, `surface-raised`, `surface-overlay`, `surface-sunken`, `surface-selected`, `surface-disabled`.
23. Text: `text`, `text-subtle`, `text-muted`, `text-disabled`, `text-inverse`, `text-on-accent`, `text-on-status`.
24. Icons: `icon`, `icon-subtle`, `icon-muted`, `icon-disabled`, `icon-inverse`, `icon-on-accent`.
25. Borders: `border`, `border-subtle`, `border-strong`, `border-interactive`, `border-focus`, `border-disabled`, `border-inverse`.
26. Actions: primary/secondary/tertiary/quiet plus hover, active, selected, disabled, focus, and their content pairs.
27. Status: success/warning/danger/info each with subtle, bold/solid, inverse, foreground/content, border, icon, hover, and active roles.
28. Links: default, hover, visited (if supported), active, focus, disabled, and inverse.
29. Form controls: input background, text, placeholder, border, hover, focus, invalid, valid, disabled, read-only, and selected.
30. Navigation: nav background, text, icon, active/selected/hover, divider, and inverse roles.
31. Data visualization: chart text/grid/axis plus series roles and interaction states.
32. Every surface role with content must have an explicit foreground/content role; no component may pair content by model choice.

### 4.4 Component/state coverage

33. A component manifest listing every supported generated component: button, link, input, textarea, select, checkbox, radio, switch, slider, tabs, menu, tooltip, popover, dialog, toast, banner, card, table, list, badge, avatar, navigation, pagination, skeleton, empty state, chart, and custom extension points.
34. For each component: default/rest, hover, active/pressed, focus-visible, selected, disabled, loading, invalid, valid, read-only, and inverse states where applicable.
35. For each component state: background, content/text, icon, border, ring, shadow/elevation, opacity, and motion reference tokens.
36. Interaction-state precedence rules, e.g. disabled overrides hover; focus-visible does not disappear under selected; invalid overrides valid.
37. Component tokens may reference semantic tokens but may not reference another component’s private token unless explicitly allowed.

### 4.5 Typography

38. Font family stacks: display/heading, body, label/UI, mono/code; include fallback stacks and loading behavior.
39. Font weights: normal, medium, semibold, bold, plus actual availability map per family.
40. Type steps: display, h1–h6, body-lg/body/md/body-sm, label-lg/md/sm, caption, code, overline if used.
41. Each step defines size, line height, weight, letter spacing, casing, and minimum/maximum responsive values.
42. Fluid policy: fixed or `clamp()` with min/max viewport and user-text-zoom test status.
43. Text truncation/wrapping policy: line clamp counts, ellipsis behavior, and minimum readable sizes.
44. Numeric/tabular styles for prices, metrics, dates, and code if generated apps use them.

### 4.6 Spacing, sizing, and layout

45. Base spacing unit and complete scale, e.g. `space-0` through `space-24`; aliases such as `inset`, `stack`, `inline`, and `gap` are semantic.
46. Component dimensions: control heights, icon sizes, avatar sizes, hit targets, button padding, input padding.
47. Layout widths: content max, reading measure, sidebar, modal/dialog, drawer, card, and chart widths.
48. Breakpoints/container queries: names, numeric values, ordering, and behavior at boundaries.
49. Grid rules: columns, gutters, page padding, alignment, and responsive collapse rules.
50. Safe-area/inset tokens for mobile if the runtime supports mobile layouts.
51. No raw `px`, `rem`, `%`, `vw`, or arbitrary Tailwind spacing may appear outside token definitions and explicitly permitted exceptions.

### 4.7 Shape, elevation, and effects

52. Radius scale: none, sm, md, lg, xl, full/pill, plus component aliases.
53. Border widths/styles: hairline, default, strong, focus, dashed, and allowed line caps/dashes.
54. Elevation/shadow scale for each mode, including shadow color, opacity, offset, blur, spread, and layered shadows.
55. Surface/layer model: canvas, base, raised, overlay, modal, popover, and inverse layer ordering.
56. Opacity scale: disabled, subtle, hover/pressed overlays, scrim, loading, and decorative.
57. Blur/backdrop effects only if the runtime support and fallback are defined.
58. Gradients/noise/textures only as named assets/tokens with fallback behavior; no model-generated gradient stops.

### 4.8 Motion and behavior

59. Duration scale: instant, fast, normal, slow, expressive.
60. Easing/cubic-bezier tokens and transition composites.
61. Component motion recipes: hover, press, expand/collapse, modal, toast, skeleton, page transition.
62. Reduced-motion alternatives for every motion recipe.
63. Focus-visible policy and keyboard navigation timing/behavior.
64. Z-index/layer tokens and portal stacking rules.

### 4.9 Assets and content-adjacent style contracts

65. Icon family/style, stroke width, size mapping, and fallback icon policy.
66. Image treatment: object-fit, aspect-ratio tokens, corner radius, placeholder, and overlay rules.
67. Illustration/logo treatment: light/dark asset pairing and contrast/background constraints.
68. Empty/loading/error visual recipes.
69. Data-viz annotation and non-color encoding rules.

### 4.10 DTCG representation and Actionist policy

70. Serialize each value using DTCG `$value`/`$type` and use aliases for semantic/component layers.
71. Store pack-specific metadata under `$extensions` (or an external manifest) without making interpretation depend on unknown extensions.
72. Require every token consumed by the generator to resolve to a concrete value in every supported mode.
73. Require reference direction `component → semantic → primitive`; primitive tokens may not reference semantic/component tokens.
74. Generate runtime CSS variables/classes from the validated pack; generation code must not contain color/spacing/radius/shadow literals.
75. Keep the generator’s vocabulary finite: the model may select `button.primary`, never `#3b82f6`; it may select `space.3`, never `12px`.

## 5. MACHINE-VERIFIABLE GATES

The following are concrete gates. Thresholds labelled **proposed** are Actionist policy choices, not universal standards.

### Gate A — DTCG/schema validity

- Parse JSON and validate against the pinned DTCG 2025.10 schema/profile.
- Require every token to have exactly one `$value`; reject group/token collisions.
- Require explicit or inherited `$type`; reject type inference.
- Resolve all `{token.path}` and `$ref` references; reject missing targets, group targets, malformed pointers, and cycles.
- Validate every composite sub-value: border has color/width/style; typography has declared family/size/line-height/weight policy; shadow fields have correct types.
- Reject unknown `$type` values unless the Actionist profile explicitly registers them.

### Gate B — completeness / closed world

- Compare the pack’s resolved token paths against the required manifest in §4.
- Fail if any required token is absent in any supported mode.
- Fail if a token is present in light but not dark unless `modeBehavior: invariant` is explicit and validated.
- Traverse the generated component catalog and fail if any style declaration is a literal or unresolved CSS variable.
- Fail on unused required tokens only if the profile marks them mandatory for the current component set; otherwise warn. This avoids making optional product modules block every pack.
- Fail if generated code requests a token outside the allowed namespace.

### Gate C — WCAG 2.2 contrast

For each text/content role and its actual background role, compute sRGB relative luminance. Linearize each normalized channel `c` as:

```text
c_linear = c / 12.92                         if c <= 0.04045
            ((c + 0.055) / 1.055) ^ 2.4      otherwise

L = 0.2126 R_linear + 0.7152 G_linear + 0.0722 B_linear
ratio = (max(L1,L2) + 0.05) / (min(L1,L2) + 0.05)
```

Fail thresholds:

- normal body/UI text: `ratio >= 4.5`;
- large text: `ratio >= 3.0`;
- enhanced text policy: `ratio >= 7.0`;
- meaningful icons/non-text UI boundaries: `ratio >= 3.0` where WCAG’s applicable criterion requires it;
- no rounding up: 4.499 fails 4.5.

Test every light/dark mode and every state, not just default/rest. For alpha colors, composite foreground over the actual background using the declared alpha before measuring. For gradients/images, sample worst-case or require a solid backing layer and an explicit overlay contract.

### Gate D — APCA quality gate

- Run a pinned APCA reference implementation; record algorithm/version and polarity.
- Do not claim WCAG 3 conformance. APCA is a candidate method, not a final WCAG 3 Recommendation.
- Suggested Actionist policy, derived from APCA’s documented Lc tiers:
  - body/fluent text: `|Lc| >= 75`, preferably `>= 90`;
  - labels/non-body text: `|Lc| >= 60`;
  - large headlines: `|Lc| >= 45`;
  - low-priority placeholder/disabled: `|Lc| >= 30`, but never rely on color alone;
  - functional borders/non-text: `|Lc| >= 15`, with `>= 30` preferred for important boundaries.
- Apply polarity-specific checks and a dark-mode ceiling policy. APCA’s dark-mode maximum guidance is preliminary; make that policy explicit rather than silently inheriting it.
- Fail if WCAG passes but APCA fails for a role designated “body,” “label,” or “interactive boundary.” Keep a report of both values for review.

### Gate E — ramp monotonicity and uniformity

For each primitive ramp intended to progress light→dark:

1. Convert rendered colors to OKLCH (or HCT for M3-derived packs).
2. Require monotonic `L` in the declared direction.
3. Compute adjacent perceptual distance, e.g. `ΔE_OK = sqrt((ΔL)^2 + (Δa)^2 + (Δb)^2)` in OKLab.
4. **Proposed thresholds:** median adjacent ΔE > 0; max/min adjacent ΔE ≤ 2.0; no adjacent ΔE > 3× median; reject any out-of-gamut fallback whose ΔL changes direction.
5. Validate both wide-gamut and sRGB/fallback values; the fallback is the shipped contract for unsupported displays.

These thresholds are engineering heuristics. They are not proof that a ramp is aesthetically correct, and they should be calibrated against authored packs and visual review.

### Gate F — dark-mode pairing

- Every semantic color role resolves in every mode.
- Each mode must pass its own WCAG/APCA matrix.
- Verify surface ordering: `canvas < surface < raised < overlay` in the pack’s declared lightness/elevation policy; do not assume numeric lightness ordering is identical in light and dark modes.
- Require explicit pairings for text/content, icons, borders, focus rings, status roles, chart series, shadows, scrims, and inverse surfaces.
- Reject `dark = invert(light)` implementations unless the pack explicitly opts into that algorithm and all other gates pass; default policy is forbidden.
- Test transitions between modes with screenshot diffs or a deterministic token-diff report. Warn if a semantic role changes by an excessive perceptual distance without an explicit `modeChangeReason`.

### Gate G — typography

- Every text style resolves family, weight, size, line-height, letter-spacing, and casing.
- Verify the requested weight exists in the selected font or has an explicit fallback mapping.
- Enforce minimum body/UI sizes and line-height ratios from the pack policy.
- For `clamp()`, evaluate at minimum viewport, maximum viewport, intermediate widths, browser zoom/text resize scenarios, and `prefers-reduced-motion` where relevant.
- Reject overflow in known components at the smallest supported viewport.

### Gate H — spacing/geometry

- Every spacing/dimension value belongs to the pack’s allowed scale or is a declared composite exception.
- Validate control hit targets, minimum touch target policy, and focus-ring clearance.
- Validate no negative or fractional values unless the token type explicitly allows them.
- Check component geometry at all breakpoints; fail if text, focus ring, or required actions clip.

### Gate I — color-vision and non-color encoding

- Simulate protanopia, deuteranopia, and tritanopia for status and chart palettes.
- Require distinguishability threshold for adjacent categorical series under the chosen simulation; threshold should be calibrated, because CVD simulation is model-dependent.
- Require icon/label/pattern/position redundancy for success, warning, danger, selected, and error states; do not use hue as the only cue.

### Gate J — runtime literal audit

- Scan source and generated CSS for raw hex/rgb/hsl/oklch values, arbitrary spacing, radius, shadow, duration, and z-index literals.
- Allow literals only inside pack files, tests, SVG path data, and explicitly registered asset exceptions.
- Fail the build rather than silently replacing literals, because silent replacement hides model drift.

## 6. Open questions / could not be verified

1. **AI-builder status is fast-changing.** The reviewed sources verify Figma First Draft’s theme controls and Base44’s workspace Design System selection. They do not prove that Lovable, v0, Bolt, or Replit never offer a preset in every plan/version; they only fail to provide a confirming source in this review.
2. **DTCG release targeting.** The stable 2025.10 announcement and the live draft are different URLs/versions. Actionist should pin and validate one exact release, not point at an unversioned “latest” draft.
3. **APCA final status/formula.** APCA documentation provides the candidate status and Lc guidance; the exact implementation must be pinned from the official reference code. APCA’s own materials are advocacy/technical documentation, not a final WCAG Recommendation.
4. **Ramp thresholds.** No authoritative source establishes the proposed ΔE adjacent-step limits above. They are gate proposals requiring calibration against the 20–30 authored packs and human review.
5. **4pt/8pt evidence.** The reviewed sources document adoption and rationale, not a peer-reviewed causal result proving one base unit superior.
6. **Three-tier drift reduction.** Primer and other systems document the architecture and operational rationale. The review did not find a controlled empirical study proving that exactly three tiers reduce drift by a quantified amount.
7. **Minimum pack breadth.** The §4 schema is an engineering derivation from the categories enumerated by shipped systems and from Actionist’s closed-world requirement. It is not a standards-body minimum. Actionist must finalize which generated component inventory is in scope; optional modules can otherwise overburden every pack.
8. **Marketplace economics and ranking.** ThemeForest/Webflow/Wix/Framer evidence establishes browse/preview/edit mechanics, not a universal optimal gallery size. A 20–30 pack catalog is a product decision, not an evidence-backed magic number.
9. **Color management.** The report does not settle whether Actionist should store only sRGB, wide-gamut + fallback, or HCT/OKLCH source parameters. The safe choice is to store source metadata plus the exact rendered/fallback values and validate both.

### Bottom line

Actionist can credibly claim a deterministic design-token picker if it combines the proven UX of template galleries, the semantic/multi-theme architecture of Primer/Carbon/Spectrum/Atlassian, the role-ramp discipline of Radix/M3, and a strict validator. The differentiator is not inventing a new color theory; it is making the closed-world guarantee operational: every generated style must resolve to a pre-authored token, and every pack must pass automated completeness, contrast, mode-pairing, and runtime-literal gates before appearing in the gallery.
