# P2 research — image-gen as the design front-end — 26 Aug 2026

Agent: luna-imagegen. Confidence 88%. Verdict: **the principle works, with a split:
fast/cheap models for breadth rounds, specialist models for text/vector assets, and the
crucial move — tokens + component registry become the contract, not the pixels.**

## Model matrix (who does what)

| Model | Role in our pipeline | Cost/latency signal |
|---|---|---|
| FLUX.2 Pro | **Breadth engine** — 6-10 vibe candidates/round; structured JSON prompts, exact HEX palettes, seeds, reference-image syntax | $0.03/img (1024²); fal claims sub-2s |
| Ideogram 3/4 | Second breadth engine — has a DESIGN style type, palettes, style-reference images | fal served 1K gen at 0.44s; API pricing dynamic |
| GPT-Image-1/2 | **Text-fidelity specialist** — dense/legible copy in mockups, targeted edits, style transfer, up to 10 input images | $0.011-0.167/img by tier; ~40s — async only, never the sync loop |
| Recraft V4.1 | **SVG/vector specialist** — logos, icons, brand assets with clean editable paths | $0.035 raster / $0.08 vector |
| Midjourney | Not embeddable (no public API; enterprise API "exploratory") | — |

A full 6-10 image breadth round: **~$0.18-0.35, seconds-fast** on FLUX/Ideogram.
"Seconds and cents" is credible there; NOT credible for synchronous GPT-Image rounds.

## Image → design tokens (the gap our recon found no OSS for)

Research supports a **vision-to-IR step**, not direct CSS from pixels:
- Typed IR with global token space (arxiv 2603.01460); JSON extraction of
  primary/secondary/accent/neutral hex, font hierarchy, ~8px spacing base
  (InfiniteWeb, arxiv 2601.04126); k-means dominant color as deterministic supplement
  (Brickify, arxiv 2502.21219).
- Output `{color, typography, spacing, radius, shadow, layout}` → CSS vars / Tailwind /
  shadcn theme, **with confidence attached** — font identity and exact spacing are
  underdetermined by pixels.
- Quantize to allowed scales (spacing 4/8/12/16, type scale, semantic colors).
  **Humans approve tokens, not raw pixels.**
- Deterministic exporters (dembrandt, design-extract → CSS/Tailwind/DTCG/shadcn) work on
  live DOM — use them AFTER a prototype exists, not on raster mockups.

## Image → code (realistic fidelity)

- Design2Code benchmark: frontier models "mostly lag" on visual-element recall + layout.
  Realistic promise: **high visual resemblance for simple/medium screens after 1-3
  correction passes** — not pixel-perfect cloning. Sell it as "approved visual direction
  faithfully instantiated within the registry."
- screenshot-to-code (74k⭐ MIT, per our recon) supports multi-provider + headless-browser
  screenshot self-check — the correction-loop pattern to adopt.
- Registry-constrained output (v0's shadcn default; Relume's 1,000-component assembly;
  Onlook's code-mapped canvas) trades a little pixel fidelity for reliability,
  maintainability, accessibility. That's our trade — it's also what makes cheap-model
  implementation viable (bounded target space).

## Product landscape (who's already doing image-first iteration)

Uizard (screenshot→editable mockup, no public API), Visily (prompt/screenshot→editable
UI; paid MCP exports React/TS/Tailwind/shadcn — note: MCP!), Figma First Draft (no custom
design systems yet), Galileo (pivoted away — stale). Nobody chains
breadth-images → token contract → registry-constrained build. **Composition gap confirmed
for the third time.**

## The recommended design-round pipeline

1. **Round brief:** goal, 3-5 reference images, brand constraints, target screens,
   must-preserve content → 6-10 parallel candidates via FLUX/Ideogram (~$0.20-0.35,
   seconds).
2. **Shortlist/refine:** client picks 2-3; style-references keep visual language stable;
   GPT-Image/Recraft selectively for typography-critical or vector assets (async, with
   progress shown).
3. **Token contract:** vision model emits token JSON + confidence + open questions;
   quantized; client approves tokens.
4. **Registry-constrained implementation:** approved mockups + tokens + content +
   component registry → vision/coding agent; component IDs only, no new primitives
   without approval; primitives-first then compose (v0 workflow); screenshot-diff loop.
5. **Round artifacts stored:** prompt/refs/model/seed, contact sheet, chosen screens,
   token JSON, component mapping, rendered diff, decision log. Vibe-approval separate
   from pixel claims.

GAPS: no neutral 2026 benchmark of UI-text legibility across the four models; no public
benchmark isolating component-library constraints (again — our eval harness is novel IP).
