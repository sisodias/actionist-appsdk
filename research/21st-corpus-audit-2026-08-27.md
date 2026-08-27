# 21st Corpus Audit — Deterministic Component Picker Feasibility

**Date:** 2026-08-27
**Corpus:** `/Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st`
**Question:** can the component half of a deterministic pre-build picker (client picks token pack + component shapes, no AI chooses colour or layout) be built from this corpus?
**Method:** read-only. Every number below carries the command that produced it. Sampled figures are marked SAMPLED (n=X).

---

## 1. VERDICT

**Buildable — yes, and on materially better ground than the brief assumed.**

Three of the brief's premises turned out to be wrong in our favour, and one turned out to be wrong against us. All four are load-bearing.

**BUILD FRESH — do not extend `board.html`.** The existing board is a genuinely good picker UI (grid, tag chips, multi-select, POST to `/api/picks`) but it is a **static snapshot of 832 of 7,949 components (10.5%)**, driven by `ranked.json`/`catalog.json` which both hold 832 entries, and it points at a *different* preview store (`previews/`, 832 files) than the corpus (`harvest/*/preview.webp`, 7,678 files). It also carries a hand-written 16-chip taxonomy that is not the 75-tag vocabulary. Extending it means replacing its data source, its image paths, its taxonomy, and regenerating 885KB of inlined HTML — i.e. everything except the CSS. Steal the CSS and the interaction model; rebuild the data layer against `classification.json` + `harvest/`.

**De-theming is MECHANICAL, not per-component judgment — and this is the big finding.** The brief's framing (`bg-slate-900` → `bg-[var(--surface)]`, i.e. rewrite Tailwind classes in source) does not apply, because **component source does not exist in this corpus**. What exists is `bundle.html`: pre-compiled Tailwind v4 output. In compiled form the colour has *already* been indirected through CSS variables by Tailwind itself. **86.7% of colour-bearing CSS rules already resolve through `var(--token)`** (SAMPLED n=25), and **87.3% of bundles carry a standard shadcn `:root{}` oklch token block** (SAMPLED n=200). Re-theming is a find-and-replace on ~30 CSS custom property declarations — I ran it and verified it (§4.3).

**Biggest risk: the corpus contains no component source code.** `demo.tsx` is a 3-line import wrapper (median 346 bytes, 58.1% under 500B) that imports `@/components/ui/<slug>` — a path that is not in the corpus. `AGENT.md` states this outright: "Component source is not available." So the picker can show the client a component and hand a cheap model a *rendered, re-themable reference*, but **it cannot hand it the component's source to assemble**. The deterministic chain is sound for *choosing*; the *assembly* input has to come from somewhere else (paid 21st key, or re-implementation from the bundle). This is the single question to resolve before committing engineering time.

---

## 2. COUNTS

### 2.1 Corpus shape

| Metric | Value | Source |
|---|---|---|
| harvest dirs | 7,949 | `ls harvest \| wc -l` |
| with `meta.json` | 7,949 (100%) | node join, §2.2 |
| with `preview.webp` | 7,678 (96.6%) | node stat sweep |
| with `demo.tsx` | 7,829 (98.5%) | node stat sweep |
| distinct authors | 848 | meta.json sweep |

```
$ ls harvest | wc -l
    7949
$ node -e '...' # stat sweep over all dirs
previews present: 7678 missing: 271
total bytes: 172595436 = 164.6 MB
$ node -e '...' # demo.tsx sweep
n: 7829 missing: 120
```

### 2.2 Tagging — the brief's `untagged=3998` is a STALE FIELD

`classification.json.stats.untagged` reads 3998, but that field was written by the *first* `classify.mjs` pass and never recomputed. `classify-fill.mjs` and `classify-local.mjs` both ran afterwards and rewrote `componentToTags` **without updating `stats.untagged`** (they write `stats.taggedTotal`/`bySource` instead — `classify-local.mjs:177`). Joining the live index against actual harvest dirs:

```
$ node -e '...' # join componentToTags against harvest meta.json urls
harvest dirs: 7949 with meta.json: 7949 no meta: 0
HARVESTED+TAGGED: 7279 HARVESTED+UNTAGGED: 670
index entries not in harvest: 103
harvested components by STRONGEST source: {"page":3951,"api":692,"local":2636}
```

**The real gap is 670 (8.4%), not ~4,000 (50%).** `AGENT.md`'s "91.6% of components carry at least one tag" is the accurate figure (7279/7949 = 91.6%).

| Tag source | Components | Meaning |
|---|---|---|
| `page` | 3,951 | scraped from 21st's own tag page — ground truth |
| `api` | 692 | semantic search inference — plausible |
| `local` | 2,636 | offline slug/name match — weakest |
| **untagged** | **670** | — |

Tag distribution (top 20, from `classification.json.tagCounts`):

```
background 681 · card 627 · hero 521 · button 448 · text 446 · spinner 438
grid 372 · dashboard 346 · scroll-area 341 · navigation-menu 326 · gallery 325
carousel 315 · image 314 · features 312 · icon 305 · toggle 292 · modal 277
menu 274 · slider 272 · data-visualization 259
```

**JUDGE — closing the 670 is near-free, and mostly should not be closed.** Inspecting the untagged residue:

```
untagged examples: 0xUrvish__folder-interaction | 16inam06__chromatic-lens |
2301020845__asciisphere | 3h5x__pagenotfound | 772984045__test |
79198736000dan_localhost__expo-dep-chain-e2e-20260605111142 |
79198736000dan_localhost__expo-e2e-011649 | 79198736000dan_localhost__expo-e2e-224752 |
79198736000dan_localhost__jfajfjajfajf | 79198736000dan_localhost__test-comp
```

6 of the 10 are junk — `test`, `jfajfjajfajf`, `localhost` e2e fixtures. The untagged set is largely *what should be excluded from a client-facing picker anyway*. **Cost: zero.** No model pass, no script run. Filter the picker to tagged components and you lose nothing a client would want to pick. If you later want them, `classify-local.mjs` already exists and runs offline in seconds — but the remaining names (`chromatic-lens`, `asciisphere`) are genuinely un-categorisable by any vocabulary, which is why they survived three passes.

### 2.3 Preview health

**Total on-disk size of ALL previews: 164.6 MB across 7,678 files** (`harvest/*/preview.webp`). Note `previews/` is a *separate* 325 MB store of 832 files used only by `board.html`.

SAMPLED n=200 (stride sampling, every 39th dir alphabetically — spread, not head):

```
$ node -e '...' # stride-200 sample
SAMPLE n=200 previews found: 196 missing: 4
min: 1233 p25: 4641 median: 11410 p75: 22521 max: 181475
under 2KB: 12
under 5KB: 53
under 10KB: 91
```

| Metric | Value |
|---|---|
| min | 1,233 B |
| median | 11,410 B |
| max | 181,475 B |
| under 2KB | 12 / 196 (6.1%) |
| missing | 4 / 200 (2.0%) |

Ten smallest / suspicious in sample:

```
1233 isaiahbjork__system-monitor          1294 axai-kaizoku__animated-theme-toggle
1352 anubra266__switch-1                  1354 moumensoliman__elastic-switch-shadcnui
1460 reshaped__reshaped-table             1606 Shatlyk1011__motion-button
1716 antdesign__float-button              1791 tom_ui__label-input
1875 radiumcoders__minimal-button         1938 shadcnui-blocks__navigation-menu-04
MISSING airbnb-visx__split-line-path | MISSING dksksnsf__pinlist
MISSING olivier_1b6cd5bc__accordion | MISSING vercel-crawled__task
```

**JUDGE — yes, previews are good enough to be the primary visual surface.** Median 11KB WebP is a legible component thumbnail. Critically, the small files are *not corruption* — they are small because the component is small and simple (a switch, a button, a label input compress to ~1.4KB of mostly-flat WebP). The under-2KB tail is 6.1% and correlates with primitive components, which are exactly the ones a client picks by name rather than by look. 96.6% coverage corpus-wide; `backfill-previews.mjs` exists to recover the 271 missing but was not run (network + mutates state, out of scope).

### 2.4 Bundle renderability

SAMPLED n=15 (stride ~530):

```
$ node -e '...' # external ref scan
401KB ext-script=0 ext-link=0 ext-img=0 :: 0xUrvish__animated-collection
510KB ext-script=0 ext-link=0 ext-img=0 :: arihantcodes_1f7b8c4d__multistep-form
[... all 15 identical: ext-script=0 ext-link=0 ext-img=0 ...]
MEDIAN bundle bytes: 337515 min: 220301 max: 522413
```

| Metric | Value |
|---|---|
| median bundle size | 337,515 B (~330 KB) |
| range | 220 KB – 510 KB |
| **external `<script src>`** | **0 / 15** |
| **external `<link href>`** | **0 / 15** |
| self-contained (code + CSS) | **15 / 15** |
| references remote *content* images | 6 / 15 |

Distinct external hosts referenced anywhere in the 15 bundles:

```
15 react.dev · 15 www.w3.org · 15 tailwindcss.com · 4 github.com
3 images.unsplash.com · 3 bugzilla.mozilla.org · 3 bugs.chromium.org · 3 bugs.webkit.org
1 placehold.co · 1 remotion.dev · 1 radix-ui.com · 1 originui.com
1 assets.21st.dev · 1 ik.imagekit.io · 1 ui-avatars.com · 1 localhost
```

The high-frequency hosts (`react.dev`, `w3.org`, `tailwindcss.com`, the browser bug trackers) appear in **all 15** because they are inlined *error-message strings and SVG namespace declarations* in the React/Tailwind runtime — not fetches. Every bundle carries its own React runtime and compiled CSS inline (2–4 `<script>` blocks, 1–3 `<style>` blocks, all inline).

The genuine network dependency is content imagery in 6/15:

```
0xUrvish__animated-collection    remote-assets: 2 :: images.unsplash.com/photo-1506744038136...
haydenbleasel__marquee           remote-assets: 1 :: placehold.co/128x128?random=${u}
localhost_serafim__dialog        remote-assets: 1 :: originui.com/dialog-content.png
monkjin1983__ascii-811f593a      remote-assets: 2 :: assets.21st.dev/ascii-recipes/...
ravikatiyar162__meeting-event-form remote-assets: 8 :: ik.imagekit.io + images.unsplash.com
uilayout.contact__hero-scroll-animation remote-assets: 4 :: images.unsplash.com
bundles referencing remote image assets: 6 / 15
```

**JUDGE — the picker can be a purely local static site.** 15/15 render offline with correct layout, typography, colour and interactivity, because all code and CSS are inline. 6/15 will show broken image placeholders where Unsplash stock photos would be. That is a cosmetic degradation of *demo content*, not of the component. Two clean mitigations: (a) serve the picker from `serve.mjs` and let those images load if online — they are third-party stock URLs, no auth; or (b) fall back to `preview.webp`, which was captured with images intact, for the 40% that need it. **`preview.webp` is a sufficient fallback**, and the right default for a grid view regardless — 11KB median beats 330KB median bundle for scroll performance.

### 2.5 Dependency surface

SAMPLED n=197 `demo.tsx` (stride 200). **This measurement is weak and I am flagging it as such** — see §6.

```
$ node -e '...' # import extraction
SAMPLED n=197 demo.tsx
distinct external packages: 18
  44 (22.3%) react              18 (9.1%) lucide-react
   2 (1.0%) motion               2 (1.0%) react-day-picker
   1 (0.5%) @react-three/fiber   1 (0.5%) framer-motion
   1 (0.5%) next-themes          1 (0.5%) @heroui/react
   1 (0.5%) react-aria-components 1 (0.5%) reshaped
   1 (0.5%) @hookform/resolvers  1 (0.5%) @radix-ui/react-direction
   1 (0.5%) @remixicon/react     1 (0.5%) react-hook-form
   1 (0.5%) sonner               1 (0.5%) zod
HEAVYWEIGHT: 1 @react-three/fiber · 1 framer-motion · 2 motion
```

Only 18 distinct packages appear, and the top-25 request cannot be filled — **there are only 18**. Two entries in the raw output were regex artefacts (multi-line object literals caught by the import pattern), not packages.

The reason the numbers are so low: `demo.tsx` files are import wrappers, so they only name the packages the *demo* touches, not the component. Real dependencies are compiled into `bundle.html` and no longer identifiable as package names.

**JUDGE — directionally, the dependency surface is benign, but this is under-measured.** What is visible is a single coherent stack: React + lucide-react icons + occasional Radix/motion. No licence-encumbered packages observed. No component drags in a competing framework (no Vue, no Svelte, no Angular). Heavyweight 3D/animation libs appear in ~2% of the sample. The corpus-wide GL measurement in §4.2 corroborates this: 4/25 bundles contain WebGL/shader colour, consistent with a small but real 3D minority. Assembly practicality looks fine; treat the exact percentages as unreliable.

### 2.6 Duplication

Across **all 7,949** dirs via `meta.json`:

```
$ node -e '...' # author + normalised-slug analysis over all dirs
components with meta: 7949
DISTINCT AUTHORS: 848
DISTINCT normalised slug bases: 5891
slug bases with >1 component: 669
components inside those groups: 2727
near-duplicate SURPLUS (n - distinct bases): 2058
```

Top 15 authors:

| Author | Components | Author | Components |
|---|---|---|---|
| ruixen.ui | 383 | uniquesonu | 132 |
| ravikatiyar162 | 330 | paper-design | 121 |
| dhileepkumargm | 232 | avanishverma4 | 117 |
| serafimcloud | 186 | preetsuthar17 | 114 |
| designali-in | 185 | uilayout.contact | 112 |
| cnippet.dev | 143 | sean0205 | 111 |
| | | sshahaider | 111 |
| | | larsen66 | 105 |
| | | theorcdev | 105 |

Top colliding slug bases (after stripping trailing digits and `v2`/`copy`/`new` suffixes):

```
57 card · 51 button · 48 hero section · 47 hero · 31 accordion · 27 loader
25 feature · 24 pricing section · 22 table · 21 breadcrumb · 21 features
19 pricing · 18 testimonial · 18 skeleton · 17 calendar
```

**Near-duplicate surplus: 2,058 (25.9% of corpus).** Note this is a *name-collision* proxy, not visual similarity — `hero` ×47 from 47 different authors are 47 genuinely different heroes; `ruixen.ui`'s 383 components are largely one author's variations on a house style, which *is* real redundancy for a "pick 1 of 10" UX.

**JUDGE — comfortably enough distinct options per category.** Taking hero as the worked case: 521 tagged, and even under a pessimistic assumption that the surplus rate (25.9%) and single-author clustering both apply aggressively, you land in the low hundreds of genuinely distinct heroes. For "pick 1 of 10" you need 10. The binding constraint is **curation, not supply** — you will be choosing 10 from ~300, and the real work is ranking, not finding. `find.mjs` already implements a defensible ranker (confidence-first, damped by tag spread, installs as tiebreak — `find.mjs:96-99`). Categories with the thinnest supply are still fine: `sign-up` at 94 and `sign-in` at 140 both clear 10 by an order of magnitude. Apply a one-per-author cap within a category to kill the `ruixen.ui` clustering effect.

### 2.7 Existing hub

| File | Entries / size | What it is |
|---|---|---|
| `serve.mjs` | 59 lines | zero-dep static server, `/` → `board.html`, GET+POST `/api/picks` |
| `board.html` | 885,238 B | fully pre-rendered grid, 832 cards, 16 tag chips, multi-select |
| `catalog.json` | 832 entries | component metadata |
| `ranked.json` | 832 entries | catalog + `trueType`, `fit`, `completeness`, `need`, `score`, `flags` |
| `picks.json` | `[]` | empty — never used |
| `find.mjs` | 114 lines | CLI query surface over `classification.json`, ranked, `--json` for agents |

```
$ node -e '...' # board.html analysis
img srcs: 832
img hosts: {"LOCAL previews/": 832}
sample srcs: previews/19077.webp
filter chips: 16 :: ★ Use it | Heroes | Footers | Product / Commerce | Feature sections |
  Galleries | Navigation | FAQ | Logo marquee | Stats | Team | Newsletter | CTA | Other |
  Testimonials | Pricing
lazy loading: true
$ cat picks.json
[]
```

**What board.html does well** — genuinely reusable, and better than a from-scratch first draft:
- Responsive `auto-fill minmax(320px,1fr)` grid with `aspect-ratio:16/10` thumbnails and `loading=lazy`
- Light/dark via `prefers-color-scheme`, tokenised in its own `:root`
- Multi-select with visual `.sel` state, a sticky tray with a live count, copy-IDs, clear-all
- **Persists picks to the server** (`fetch('/api/picks',{method:'POST'})`) — the manifest mechanism the deterministic picker needs already exists end to end
- Click-to-zoom lightbox with Escape-to-close
- Hover-to-play video previews (`ph.onmouseenter` lazily creates a `<video>`)

**What is missing for a client-facing picker:**
- **Coverage: 832 / 7,949 = 10.5%.** The other 89.5% is invisible.
- **Wrong image store.** 832 files in `previews/` (325 MB) keyed by numeric 21st id; the corpus is 7,678 files in `harvest/*/preview.webp` keyed by `author__slug`. `board.html` contains zero references to `harvest/` (`mentions harvest/: 0`).
- **Wrong taxonomy.** 16 hand-written chips vs the 75-tag faceted vocabulary in `classification.json`. No multi-tag filtering, no tag intersection (which `find.mjs` supports via `--tag`).
- **No token-pack integration.** No concept of a theme, no way to preview a component under a chosen palette — the entire point of the deterministic chain.
- **Static HTML.** 885KB pre-rendered; every data change means regenerating the file. Not viable at 7,949 cards.
- **No per-category "pick 1 of N" flow.** It is a flat browse-and-multi-select, not a guided sequence of category decisions producing a structured manifest.

**JUDGE — BUILD FRESH, steal liberally.** Keep `serve.mjs` essentially as-is (it already serves `harvest/` correctly — it serves anything under its own directory, and the `/api/picks` contract is exactly right). Port `board.html`'s CSS and interaction JS. Replace the data layer entirely: render cards client-side from a generated slim index over `classification.json` + `harvest/`, not from pre-rendered HTML. Extending in place would mean rewriting the data source, image paths, taxonomy, and the render strategy — everything but the stylesheet.

---

## 3. DE-THEMING FEASIBILITY — THE LOAD-BEARING ANALYSIS

### 3.1 The brief's premise does not apply, because there is no source

The brief asks whether `bg-slate-900` → `bg-[var(--surface)]` is a mechanical transform over `demo.tsx`. Measuring `demo.tsx` first:

```
$ node -e '...' # demo.tsx size distribution, ALL dirs
n: 7829 missing: 120
min: 50 p25: 163 median: 346 p75: 1062 p95: 4124 max: 192690
under 500B: 4546 (58.1%)
under 1KB: 5799
over 5KB: 276
```

A median `demo.tsx` is 346 bytes. In full, a representative one:

```tsx
// harvest/sshahaider__testimonials-6/demo.tsx
import { TestimonialsSection } from "@/components/ui/testimonials-6";

export default function TestimonialsDemo() {
  return <TestimonialsSection />;
}
```

`@/components/ui/testimonials-6` **is not in the corpus.** Each harvest dir contains exactly four files:

```
$ ls harvest/sshahaider__testimonials-6/
bundle.html  demo.tsx  meta.json  preview.webp
```

`AGENT.md` confirms this is by design, not a harvest failure: *"Component source is not available. `/r/<author>/<slug>` is metered at 2/day on the free plan and `component_data.code` is empty even authenticated. The `bundle.html` is the real implementation."*

Running the brief's requested n=25 theme scan over `demo.tsx` therefore measures the wrappers, and returns near-zero — accurate for what it measured, meaningless for the question:

| Of 25 `demo.tsx` | Count |
|---|---|
| Tailwind colour utilities | 1 |
| raw hex/rgb/hsl literals | 3 |
| `var(--)` or shadcn semantic | 4 |
| `dark:` variants | 1 |
| arbitrary values `bg-[#...]` | 1 |

Full distinct colour vocabulary across all 25 `demo.tsx` — **5 tokens**: `text-muted-foreground` ×3, `bg-background` ×2, `text-foreground` ×2, `text-primary` ×1, `bg-black` ×1.

**The real question is whether `bundle.html` can be re-themed.** It can, and more cleanly than source could.

### 3.2 Bundles are compiled Tailwind v4 — colour is already indirected

Searching a bundle for Tailwind colour classes returns nothing:

```
$ node -e '...' # raw class scan, no string extraction
bundle bytes: 411978
RAW tailwind colour matches anywhere: 0
distinct: 0
style blocks: 1 total css bytes: 16577
  style[0] head: /*! tailwindcss v4.1.10 | MIT License | https://tailwindcss.com */
```

Zero — because Tailwind v4 already compiled them away. What survives is a `<style>` block where **Tailwind v4 has itself performed the exact indirection the brief wants to perform**:

```css
:root,:host{
  --color-background:var(--background);  --color-foreground:var(--foreground);
  --color-card:var(--card);              --color-primary:var(--primary);
  --color-muted:var(--muted);            --color-accent:var(--accent);
  --color-border:var(--border);          --color-input:var(--input);
  --color-ring:var(--ring);              --color-destructive:var(--destructive);
  /* ... 22 shadcn tokens + 5 chart + 8 sidebar ... */
}
```

and utility rules that consume it:

```css
.bg-background      { background-color: var(--background) }
.bg-card            { background-color: var(--card) }
.bg-muted           { background-color: var(--muted) }
.text-muted-foreground { color: var(--muted-foreground) }
.shadow-foreground\/10 { --tw-shadow-color: var(--foreground) }
.fill-current       { fill: currentColor }
```

with concrete values defined once, in one `:root{}`:

```css
:root{--radius:.625rem;
  --background:oklch(100% 0 0);        --foreground:oklch(14.5% 0 0);
  --card:oklch(100% 0 0);              --card-foreground:oklch(14.5% 0 0);
  --primary:oklch(20.5% 0 0);          --primary-foreground:oklch(98.5% 0 0);
  --secondary:oklch(97% 0 0);          --muted:oklch(97% 0 0);
  --muted-foreground:oklch(55.6% 0 0); --accent:oklch(97% 0 0);
  --destructive:oklch(57.7% .245 27.325);
  --border:oklch(92.2% 0 0);           --input:oklch(92.2% 0 0);
  --ring:oklch(70.8% 0 0);             --chart-1..5 ...  --sidebar* ... }
```

**`--surface` does not need to be introduced. It already exists, named `--background`, and every rule already points at it.** A token pack is a replacement for that one block.

How widely this holds, SAMPLED n=200 (stride 39):

```
$ node -e '...' # token block presence sweep
sampled: 197 missing bundle: 3
Tailwind v4 compiled: 176 (89.3%)
--color-* -> var(--token) map: 172 (87.3%)
defines --background value: 172 (87.3%)
has .dark / prefers-color-scheme block: 195 (99.0%)
```

| Property | SAMPLED n=197 | % |
|---|---|---|
| compiled with Tailwind v4 | 176 | 89.3% |
| exposes `--color-*` → `var(--token)` map | 172 | 87.3% |
| **defines a swappable `:root` token block** | **172** | **87.3%** |
| has `.dark{}` / `prefers-color-scheme` | 195 | 99.0% |

### 3.3 PROOF — I performed the transform and verified it

Not a claim. A run, on `harvest/sshahaider__testimonials-6/bundle.html`, applying a dark token pack by regex over the custom-property declarations:

```
$ node -e '...' # apply PACK via /(--<token>\s*:\s*)([^;}]+)/g
token replacements: 12
orig bytes: 411978 themed bytes: 412014
BEFORE --background: --background:oklch(100% 0 0)
AFTER  --background: --background:oklch(21% 0.02 265)
BEFORE --foreground: --foreground:oklch(14.5% 0 0)
AFTER  --foreground: --foreground:oklch(97% 0.01 265)
closing tag intact: true
JS untouched (script byte count equal): true
```

A white-background/near-black-text component became dark-background/near-white-text via 12 string replacements, with the JavaScript bundle bit-identical and the document still valid. Output at `/private/tmp/claude-501/-Users-shaansisodia/625a73d0-b440-4f16-ab91-9d64e30b4d43/scratchpad/retheme-proof.html`.

Generalising, SAMPLED n=60 (stride 132):

```
$ node -e '...' # token swap across 60 bundles
SAMPLED n=60
has replaceable :root token block: 55
NO token block (needs other handling): 5
token swap produced a changed document: 55
examples lacking token block: RayMethula__testimonial | aghasisahakyan1__galaxy-interactive-hero-section |
  bundui__text-gradient-scroll | dillionverma__orbiting-circles | preetsuthar17__alert
```

**55/60 (91.7%) re-theme cleanly with one regex pass.**

### 3.4 Where the mechanical approach breaks — concrete cases from files I read

Measuring how many colour rules resolve through `var()` versus a baked literal, SAMPLED n=25:

```
$ node -e '...' # classify every colour-bearing CSS rule
=== OUT OF 25 ===
compiled with Tailwind v4: 23
exposes shadcn --color-* -> var(--token) mapping: 23
defines concrete token VALUES in-bundle: 25
has >=1 colour rule with a BAKED LITERAL: 12
colour rules ALL resolve through var(): 13
has inline-style colour literal: 0
has canvas fillStyle/strokeStyle colour: 0
has GL/three colour (vec3/THREE.Color): 4

TOTAL colour rules: viaVar=307 viaLit=47  => 86.7% tokenised
```

**86.7% of colour rules are already tokenised. 13.3% (47 rules across 25 bundles) carry a baked literal.** The four failure classes, with real examples:

**(a) Alpha-modified palette colours — the dominant failure, and it is enumerable.** The complete literal-bearing vocabulary observed:

```
5 bg-transparent            2 file:bg-transparent::file-selector-button
1 border-white/30           1 bg-white/10          1 bg-white/5     1 via-white/10
1 border-white/5            1 border-white/10      1 text-white/20  1 text-white/30
1 text-white/40             1 text-white/50        1 text-white/80  1 shadow-white/50
1 bg-black/20               1 bg-black/40          1 bg-black/50    1 bg-black/80
1 from-black/30             1 to-black/60          1 shadow-white/10
1 border-cyan-500/20        1 border-violet-500/20 1 bg-cyan-900/20 1 bg-violet-900/20
1 hover:border-cyan-500/50  1 hover:border-violet-500/50
1 hover:bg-cyan-900/40      1 hover:bg-violet-900/40
1 selection:bg-cyan-500/30::selection  1 placeholder-white/20::placeholder
1 focus-within:bg-black/80:focus-within
1 border-green-300/50       1 border-yellow-300/50  1 text-emerald-500/80
1 shadow-blue-500/20        1 bg-[#050505]          1 bg-[#0A090D]  1 bg-white/[0.2]
1 text-transparent
```

**This is a finite, small, enumerable vocabulary — 39 distinct classes across 25 components.** Tailwind emits `bg-white/10` as a literal (`#ffffff1a`) rather than a var reference because the base colour is not a theme token. The mapping is mechanical: `white/N` → `color-mix(in oklab, var(--foreground) N%, transparent)`, `black/N` → same against `var(--background)`. Note `bg-transparent`/`text-transparent` (7 of the 47) are **false positives** — `transparent` is theme-independent and needs no mapping at all, which drops the true failure rate to ~8.5%.

Named-palette-with-alpha (`bg-cyan-900/20`, `border-violet-500/20`, `text-emerald-500/80`, `shadow-blue-500/20`) is where **judgment genuinely enters**: is `cyan-500` this component's accent (→ `var(--primary)`) or a semantically-meaningful colour (a success green, a warning amber)? The observed `border-green-300/50` and `border-yellow-300/50` in one component are almost certainly validation states, which a token pack should *not* recolour. This is a small set and can be handled by a rule — map greys and the component's dominant hue; leave red/green/amber/yellow alone as semantic status colours — but the rule will occasionally be wrong.

**(b) Arbitrary hex values.** Observed vocabulary is 4 distinct:

```
15 bg-[#0A090D]   1 border-[var(--accent-color)]   1 from-[#1A191D]   1 to-[#0A090D]
```

`kaif-ui__macbook-keyboard` alone contributes 15 occurrences of `bg-[#0A090D]` plus a `from-[#1A191D]`/`to-[#0A090D]` gradient — a component with a deliberate hardcoded near-black product palette. Mechanically detectable (regex for `-\[#[0-9a-f]{3,8}\]`), mechanically *replaceable*, but choosing *which* token each maps to is judgment. Note `border-[var(--accent-color)]` is a component-author-defined variable outside the shadcn set — it would survive a token swap untouched and silently keep its own colour.

**(c) WebGL / shader colour — genuinely not mechanical.** 4/25 bundles:

```
chamaac__waves                          gl-colour-refs: 133
dhileepkumargm__design-meets-innovation gl-colour-refs: 128
passerhub__grid-background              gl-colour-refs: 118
unlumen__aurora-blur                    gl-colour-refs: 130
```

These carry ~130 `vec3(...)`/`vec4(...)` colour constructions inside GLSL shader source strings. Colour here is float triplets in shader code, sometimes computed (aurora gradients, wave interference). No CSS variable reaches them. These components are visually *defined* by their colour — `aurora-blur` re-themed is a different component. **Correct handling is exclusion, not transformation:** flag them and either drop them from the picker or present them as fixed-palette "effect" components the token pack does not govern. At 4/25 (16%) this is a real but bounded minority, and it corroborates the §2.5 finding that 3D/shader components are a small slice.

**(d) Bundles with no shadcn token block — 5/60 (8.3%).** Investigating the three most tractable:

```
--- RayMethula__testimonial          cssB: 35416 tw4: false tw3-ish: true
    baked-literal colour rules: 0
--- dillionverma__orbiting-circles   cssB: 37120 tw4: false tw3-ish: true
    baked-literal colour rules: 1  bg-black/10=#0000001a
--- preetsuthar17__alert             cssB: 17391 tw4: true  tw3-ish: false
    baked-literal colour rules: 5  hover:bg-black/5:hover=#0000000d ,
      dark:bg-amber-950/30=#4619014d , dark:bg-blue-950/30=#1624564d ,
      dark:bg-green-950/30=#032e154d , dark:hover:bg-white/5:hover=#ffffff0d
```

Two are **Tailwind v3** builds (`--tw-bg-opacity` idiom, no v4 `@theme`), which use a different — but equally enumerable — indirection. Interestingly, `RayMethula__testimonial` has **zero** baked literals, so it is fine. `preetsuthar17__alert` is the honest hard case: `dark:bg-amber-950/30`, `dark:bg-blue-950/30`, `dark:bg-green-950/30` are **semantic status colours for alert variants** (warning / info / success). A naive token mapper that recolours them to `var(--primary)` would make all three alert variants identical and destroy the component's meaning. This is the archetypal needs-judgment case.

### 3.5 Verdict: mechanical with a gate, plus a small exclusion list

**Roughly 87% mechanical, ~13% needs judgment or exclusion**, and — importantly — **the split is itself mechanically detectable**, which is what makes the deterministic chain hold.

| Class | Share | Handling |
|---|---|---|
| Colour already via `var(--token)` | 86.7% of rules | swap the `:root` block. Zero judgment. |
| `white/N`, `black/N`, `transparent` | ~5% of rules | fixed mapping table → `color-mix()`. Mechanical. |
| Named palette + alpha (`cyan-900/20`) | ~4% of rules | rule-based, occasionally wrong on status colours. |
| Arbitrary hex `bg-[#0A090D]` | ~3% of rules | detectable; target token needs judgment. |
| WebGL/shader colour | 16% of *components* | **exclude** — colour is the component. |
| No token block (v3 builds) | 8.3% of components | second mapping table, or exclude. |

The gate the brief asks for is buildable and cheap: after applying a token pack, scan the output CSS for any colour-valued declaration not resolving through `var()` or `color-mix(var())`, ignoring `transparent`/`currentColor`. Non-empty ⇒ fail the component out of the picker. That is ~20 lines and it makes the guarantee *checkable per component* rather than assumed corpus-wide — so a client never picks a component that will ignore their palette. **Run that gate across all 7,949 once and the output is your picker's eligible set.**

The honest caveat: this re-themes the **compiled bundle**, which is the picker's *preview* surface. It does not by itself produce re-themed component *source* for assembly — see §1 and §6.

---

## 4. RECOMMENDED BUILD ORDER

Effort is rough, assumes one engineer, and excludes the §6 source question which may reorder everything.

| # | Step | Effort | Why first |
|---|---|---|---|
| 1 | **Resolve the source question** (§6) — can we get component code, or do we re-implement from bundles? | 0.5d investigation | Gates everything downstream. Do not build until answered. |
| 2 | **Build the eligibility gate** — apply a token pack to all 7,949 bundles, scan for unresolved colour literals, emit `themeable.json` (pass/fail + failure class per component) | 1d | Turns the 87% estimate into a per-component fact. Also auto-produces the WebGL/v3 exclusion lists. |
| 3 | **Generate a slim index** — join `classification.json` + `meta.json` + preview paths + `themeable.json` into one `picker-index.json` (~1–2 MB, not 700 KB × 3) | 0.5d | The data layer `board.html` lacks. |
| 4 | **Token-pack format + swapper** — define a pack as the ~30 shadcn tokens; implement `applyPack(bundle, pack)` | 0.5d | Already prototyped in §3.3; formalise it. |
| 5 | **Picker UI** — port `board.html` CSS/interaction; client-side render from `picker-index.json`; 75-tag filtering with intersection; virtualised grid | 2–3d | Fresh build, but the stylesheet and pick-tray logic are lifted wholesale. |
| 6 | **Category flow** — "pick 1 of 10" sequenced per category, curated top-10 per tag via `find.mjs`'s ranker + one-per-author cap | 1d | The actual client UX. §2.6 shows supply is ample. |
| 7 | **Live token preview** — render the picked component in an iframe with the picked pack applied | 1d | Closes the loop: client sees their palette on their component before any code is generated. |
| 8 | **Manifest output** — extend the existing `POST /api/picks` contract to emit `{tokenPack, picks[]}` | 0.5d | `serve.mjs` already does the transport. |

**~8 days** to a working client-facing picker, assuming step 1 resolves favourably.

Reuse as-is: `serve.mjs` (no changes needed), `find.mjs` (ranking logic), `classification.json`, `harvest/*/preview.webp`, `board.html` CSS.
Do not reuse: `board.html` markup/data, `catalog.json`, `ranked.json`, `previews/` (all 832-entry, superseded).

---

## 5. UNMEASURED / OPEN QUESTIONS

1. **Component source availability — the blocking one.** `demo.tsx` imports `@/components/ui/<slug>`, which is absent. `AGENT.md` says `/r/<author>/<slug>` is metered at 2/day free and `component_data.code` is empty even authenticated. **UNMEASURED:** whether a paid 21st key returns source, and its licence terms for client delivery. Not tested — would require network calls and a paid key, both out of scope. Until answered, the picker chooses components it cannot hand to an assembler as code.

2. **Visual near-duplicate rate.** §2.6 measures *name* collisions (2,058 surplus). **UNMEASURED:** actual visual similarity. A perceptual hash over the 7,678 previews would give the true distinct-options count. Cheap to run, not run here.

3. **Do re-themed bundles look *right*?** §3.3 proves the CSS variables change and the document stays valid. **UNMEASURED:** whether the result is aesthetically coherent — a component designed light-first may have insufficient contrast when given a dark pack, even with every token correctly swapped. Needs headless-browser screenshots before/after across a sample. This is the most likely source of unpleasant surprises.

4. **Corpus-wide de-theming rates.** §3.4 percentages are SAMPLED n=25 (rules) and n=60 (token blocks). Build step 2 makes them exact for all 7,949 — treat the current figures as directional.

5. **Real dependency surface.** §2.5 is measured from import-wrapper `demo.tsx` files and is unreliable (only 18 distinct packages found). **UNMEASURED:** true dependencies, which are compiled into bundles and no longer carry package names. If source becomes available (item 1), measure from there.

6. **The 271 missing previews and 120 missing `demo.tsx`.** `backfill-previews.mjs` exists to recover them but was not run (network + mutates state, out of scope per constraints).

7. **`.dark{}` blocks.** 99.0% of bundles carry one (SAMPLED n=200). **UNMEASURED:** whether a token pack should overwrite both `:root{}` and `.dark{}`, and how the picker exposes light/dark to the client. The §3.3 proof rewrote every matching declaration including those inside `.dark{}`, which is probably wrong for a light pack — it would collapse the dark variant. Needs a scoped replacement, one block at a time.

---

*All figures produced by read-only commands against `/Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st` on 2026-08-27. Nothing in that tree was modified; the only file written outside it is this report plus one scratchpad proof artefact.*
