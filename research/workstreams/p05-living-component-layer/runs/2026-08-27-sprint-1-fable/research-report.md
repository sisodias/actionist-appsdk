# P05 — Living UI component layer

**Run:** `2026-08-27-sprint-1-fable` · **Lane:** S1-L3 · **Observed:** 2026-08-27
**Mode:** research-only — no cloning, no execution of candidate source, no build/deploy, no admission, no authenticated vendor access
**Owned output:** `research/workstreams/p05-living-component-layer/runs/2026-08-27-sprint-1-fable/`

---

## 1. Resolved decisions

All five of P05's open questions in `parts.json` are answerable from evidence. Four resolve cleanly; one resolves as a mechanism whose *execution* is gated on counsel. Two findings contradict the inherited plan.

**1. Canonical taxonomy — canonical component entities with alias sets, not the flat 75-tag vocabulary.**
The 75 tags survive as a retrieval index; they cannot be the client-facing taxonomy. Measured, the vocabulary averages **2.09 tags per component with 52.6% carrying exactly one tag** — it already behaves as a single-label category scheme rather than the facet grid it is described as. The Component Gallery, the only verified production system solving cross-source component naming, uses 60 canonical components each with an explicit alias list, and its data actively breaks flat naming: *Banner* is an alias of both **Alert** and **Hero**; *Stepper* is both an alias of **Progress indicator** and its own canonical; *Label* is an alias of **Badge** and standalone. A flat namespace collides on exactly the terms clients use.

**2. Dedupe — measure before designing; the honest range is 1.3% to 25.9%.**
This lane established the *floor*: exact byte-identical previews are only **65 groups covering 167 components, a surplus of 102 of 7,678 (1.3%)**, and the largest groups are test-fixture clusters from single authors. The inherited name-collision surplus of **2,058 (25.9%)** is the ceiling. Because the floor is so low, the 2,058 are overwhelmingly *not* pixel-identical, which means cheap hashing alone cannot resolve them and perceptual hashing plus semantic embedding is genuinely required rather than merely nice. The rate itself stays **unmeasured** — the gap is too wide to design against.

**3. Ownership — Actionist owns the archetype shell and the ~20 app primitives; harvests decorative surfaces.**
The reason is not scarcity. Every one of the 20 AutoSaaS-required primitives has real ground-truth supply (32 for onboarding up to 164 for spinner, all with previews). The reason is that these are **contract surfaces**: navigation encodes route topology and permission state from P10, forms encode validation and submission contracts, tables encode sorting/pagination/selection behaviour, and the feedback family must be coherent app-wide. A harvested bundle is compiled output with no props, no states and no accessibility contract — it cannot satisfy AutoSaaS's own per-component metadata requirement for *any* component. Heroes (521), testimonials (137), pricing sections (186) and galleries (325) are self-contained, carry no data-plane contract, and are exactly where visual variety has client value: harvest those.

**4. Refresh — the mechanism is ready and the blocker is legal, not technical.**
`urls-union.json` holds **8,225 discovered URLs against 7,949 harvested**, with 0 harvested items missing from the union. That delta — **276 discovered-but-unharvested components** — is a ready-made refresh queue. But the mechanism that produced it is precisely what 21st.dev's terms prohibit. The design therefore splits: build a **source-agnostic index**, run refresh against **licensed `registry.json` endpoints** (nine parsed live in this run: ReactBits 672, Tailark 469, Aceternity 278, Magic UI 247, Fancy 158, HextaUI 139, Eldora 115, Kokonut 51, shadcn core 63) and/or a paid metered API, and keep the scrape path **designed but gated**.

**5. Visual choice — guided pick-1-of-10 per category, pre-rendered in the client's token pack.**
Supply per category (32–164 ground truth) means the task is *choosing* 10, not *finding* any: curation, not search, is the binding constraint. The legacy store already carries the needed axes populated — `visual_style` across 24 values (minimalist 1,739, flat 1,315, gradient 768), `complexity` (composite 2,201, atomic 1,261), and 16,241 `use_case` strings across 3,507 components. Awwwards's hex colour-swatch and font filtering is the best verified precedent for choosing without vocabulary; Mobbin's Text-in-Screenshots dimension is a retrieval path needing no taxonomy at all.

### Two findings that contradict the inherited plan

**The industry axis should leave the component layer entirely.** The inherited J-4 frames this as a 36→17 crosswalk merge. Measured, `best_for_industries` **does not discriminate**: mean 3.93 industries per component, **171 components claim all 10** of the dominant set, and **89.6% (3,143/3,507) claim `saas`**. Worse, only **2 of the 17** target industries (`real_estate`, `saas`) have a direct legacy analogue, and **5 of 17** — construction, logistics_freight, insurance_agencies, mortgage_brokers, property_management — have **zero reachable supply** under a best-effort synonym crosswalk. Merging synonyms cannot repair an axis that is near-uniform and materially absent. Industry variance belongs at the archetype/composition layer, where the b2b shelf lane already places it.

**J-1's join key does not work as specified.** The two stores encode the same identity differently — `meta.json.url` is `https://21st.dev/@author/components/slug` while `_provenance.fetchedFrom` is `https://21st.dev/r/Author/slug`. Raw URL equality fails. Case-insensitive author+slug normalisation gives **intersection 2,945, union 8,483** (against the inherited 2,942 / 8,515), with 28 legacy records carrying no parseable provenance URL. The delta is normalisation, not error; both are defensible, but the join must be specified as normalised.

---

## 2. What was verified versus inherited

Per the lane brief, this lane spot-verified the audited facts rather than trusting them. **Every headline count reproduced exactly.**

| Fact | Inherited | Re-derived here | Result |
|---|---|---|---|
| Bundle store dirs | 7,949 | 7,949 | match |
| with `bundle.html` | 7,828 | 7,828 | match |
| with `preview.webp` | 7,678 | 7,678 | match |
| with `meta.json` | 7,949 | 7,949 | match |
| Legacy store dirs | 3,508 | 3,507 (+`_utils`) | match |
| Legacy with real source | 3,506 | 3,506 | match |
| Tagged / untagged | 7,279 / 670 | 7,279 / 670 | match |
| `stats.untagged` stale | 3998 | 3998 (and `stats.tagged=3951` **also stale**) | confirmed, extended |
| Tag vocabulary | 75 | 75 | match |
| Store join | 2,942 ∩ / 8,515 ∪ | **2,945 ∩ / 8,483 ∪** | refined — see above |

**Inherited without re-derivation** (cited to their receipts, not re-measured): the de-theming rates (86.7% of colour rules tokenised at `SAMPLED n=25`; 55/60 = 91.7% re-theming cleanly; WebGL 4/25; no-token-block 5/60), the `demo.tsx` wrapper measurements, the 21st.dev terms findings, and the 0.017% rights coverage.

### Six new measurements this lane contributes

1. **`tagCounts` and `tagToComponents` disagree by design.** `tagToComponents` holds *only* page-tier tags; `tagCounts` includes api/local inference. Worked example: sidebar is **47** in one and **143** in the other, decomposing to page=47 / api=81 / local=15. Quoting either as "supply" without its tier is a 3× error.
2. **The 75-tag vocabulary is not faceted in practice** — mean 2.09 tags/component, 52.6% single-tagged.
3. **The exact-duplicate floor is 102 surplus (1.3%)**, against a 2,058 name-collision ceiling.
4. **No harvest timestamp exists anywhere.** Fields across a 3,000-directory sample are `url, author, slug, name, description, installCommand, id, bundleUrl, previewUrl, harvested` (all 3,000), plus `usage_count, demo_id, video_url` (1,125 = 37.5%) and `preview, previewVia` (121). Directory mtimes span a single **67-minute window on 2026-08-18**.
5. **The real dependency surface is 237 packages, not 18** — measured from the source-bearing store's `registry-item.json` (lucide-react 1,272; class-variance-authority 1,031; framer-motion 874; @radix-ui/react-slot 824; three 85; gsap 57; @react-three/fiber 29). This **closes** the prior audit's UNMEASURED item 5.
6. **Junk is ~1%, not a major cleanup problem** — 78 of 7,949 (0.98%) under a corrected rule set. Author concentration: 848 distinct authors, top-10 hold 24.4%, top-50 hold 57.3%, and 455 authors have exactly one component.

---

## 3. AutoSaaS-20 supply, by evidence tier

The load-bearing table for the ownership decision. Ground truth = page-tier tag, component present on disk, preview present.

| Required primitive | Tag | Page-tier | Any-tier | Page + preview |
|---|---|---|---|---|
| loading state | spinner | 167 | 434 | 164 |
| data table | table | 141 | 180 | 139 |
| topbar | navigation-menu | 135 | 320 | 132 |
| status badge | badge | 124 | 236 | 122 |
| modal / detail drawer | modal | 113 | 270 | 112 |
| pricing table | pricing-section | 113 | 185 | 113 |
| segmented control | toggle | 110 | 282 | 109 |
| report card | data-visualization | 108 | 258 | 82 |
| filter bar | search | 107 | 122 | 105 |
| file uploader | upload-download | 103 | 132 | 101 |
| tabs | tabs | 97 | 180 | 96 |
| error state | alert | 87 | 175 | 83 |
| metric card | stat | 78 | 153 | 77 |
| form field | form | 120 | 163 | 120 |
| empty state | empty-state | 50 | 186 | 49 |
| app shell / sidebar | sidebar | 44 | 139 | 42 |
| activity timeline | timeline | 42 | 133 | 42 |
| onboarding checklist | onboarding | 32 | 73 | 32 |

Note the tier spread: `empty-state` looks like 186 components until you require ground-truth evidence, at which point it is 50. `sidebar` drops from 139 to 44. Reporting all-tier supply to a client would overstate the shelf by up to 3×.

---

## 4. Commercial denominator

**105 records; 55 verified live; 50 recorded `unknown`.** The denominator target was ~100 surfaces and the *record count* meets it, but honest coverage is 55. A subagent reached a hard model usage limit after verifying 8 of ~50 assigned gallery/design-system surfaces and correctly declined to characterise the remaining 42 from memory. Those 42 are `unknown`, not absent.

### Top 10, with what each contributes

1. **21st.dev** — our upstream and primary competitor. MCP confirmed live: a JSON-RPC `initialize` POST returns `401 {"code":-32001,"message":"Not authenticated - your API key is missing or was reset..."}`, which is proof of a working authenticated endpoint rather than a marketing claim. Metered ~2 installs/day free.
2. **shadcn `registry.json` + MCP** — the interchange standard, and the source of our agent-query answer (§5).
3. **registry.directory** — the closest existing implementation of P05's own thesis: a cross-registry aggregator with freshness telemetry, rendering same-day "Just shipped" deltas (Shadcn Blocks +193, Zyeon UI +121, ReUI +93) and per-registry updated-recency spanning same-day to 10 months, layered under human-written editorial groupings. Study before building.
4. **The Component Gallery** — 60 canonical components with alias lists across 95 design systems; the empirical basis for decision 1. Also carries *Unmaintained (11)* and *Accessibility issues (4)* as first-class facets, which is a quality-signal pattern worth stealing.
5. **Mobbin** — the only verified first-party production MCP serving a visual corpus to agents (60 req/min, 20-screen default cap, paid OAuth). Its image-context cost guidance (3–8 images per call) is a real constraint on our agent surface. Scale figures conflict across three sources and are quotable only as attributed claims.
6. **Creative Tim UI** — the most complete verified agent stack: a 72,531-byte `llms.txt` from which 418 distinct `/ui/r/{name}.json` block URLs were extracted, plus a CLI and an agent skill. Proof the pattern is retrofittable to a legacy vendor.
7. **ReactBits (672) / Tailark (469)** — largest single registries actually parsed; highest corpus yield per integration.
8. **UIverse** — 4,456 elements with strong non-technical visual browse and **zero** agent access (`/llms.txt` 404, `/api/elements` 404). The clearest verified statement of the market gap P05 claims to fill.
9. **Awwwards** — hex colour-swatch and font-name filtering; the best verified answer to "choose without knowing names."
10. **Adele (UXPin)** — a ~35-column design-system comparison matrix including a `color naming convention` facet with enum natural/abstract/branded/specific — a rare case of a catalog encoding naming *philosophy* as a facet.

**Dead or blocked, recorded so nobody re-walks them:** UI Garage has **shut down**. Four component-kit domains fail DNS entirely — `indie-ui.com`, `spectrumui.art`, `nyxbui.design`, `edilozi.pro` — all of which still appear in stale "best shadcn library" listicles. Land-book is CAPTCHA-walled even through a reader proxy. `component.gallery`, `mobbin.com` and `land-book.com` all 403 direct fetches; `r.jina.ai` gets through for the first two.

**A trap worth carrying into the client deliverable:** registry *item* counts are not *component* counts. Magic UI serves 247 items against a "150+ components" homepage claim; Aceternity's homepage says "200+" while its own AI-facing page states 111 free + 23 pro. Both numbers are "true" in different senses, and any figure reaching Cena must say which.

---

## 5. OSS denominator

**122 records; 110 verified via `gh api`; 12 slugs returned 404** and are recorded as unconfirmed. Licences are the SPDX id from the API, and where that field was `NOASSERTION` or null the LICENSE body was decoded and read.

### Licence traps caught by reading bodies rather than trusting the API field

| Repo | API says | Body actually says |
|---|---|---|
| `browserless/browserless` | NOASSERTION | **SSPL**, dual-licensed with an explicit commercial/CI restriction — **do not adopt** |
| `meilisearch/meilisearch` | NOASSERTION | partly **BSL 1.1** (Enterprise Edition) |
| `modelcontextprotocol/servers` | NOASSERTION | mid-transition MIT → Apache-2.0; docs CC-BY-4.0 |
| `npm/cli` | NOASSERTION | **Artistic-2.0**, not MIT as commonly assumed |
| `21st-dev/magic-mcp` | null | **no LICENSE file at all**; `package.json` asserts ISC — a bare assertion, not a grant |

**AGPL-3.0 confirmed** on `renovatebot/renovate`, `firecrawl/firecrawl`, `DIYgod/RSSHub`, `kornelski/dssim`, and `cosscom/coss` — which is what the slug `origin-space/originui` now redirects to, and is Cal.com's design system rather than the Origin UI kit anyone citing that slug intends. `Shopify/polaris` redirects to `Shopify/polaris-react-archive`, which is **archived**. Each of these would otherwise have ranked; all are excluded for a client deliverable.

### Top 10, weighted to dedupe, preview, agent query and refresh — not stars

1. **shadcn-ui/ui** (122,246, MIT) — for the registry spec, not the components. See §6.
2. **idealo/imagededup** (5,667, Apache-2.0) — pHash/dHash/wHash/CNN *plus* an evaluation harness, which is what makes the unmeasured near-duplicate rate cheap to close. Last push 2025-08-15, ~12 months stale.
3. **facebookresearch/faiss** (40,810, MIT) — the cleanest-licensed serious ANN library; 7,678 vectors is far below its strain point.
4. **upstash/context7** (61,285, MIT) — the closest existing system to "continuously refreshed corpus queried by agents"; steal the freshness/versioning model.
5. **storybookjs/storybook** (90,945, MIT) — CSF as the component-description format, and Composition federates many sources into one browsable index, which *is* our ingestion topology.
6. **openai/CLIP** (34,237, MIT) — required because our exact-duplicate floor is only 1.3%; cross-framework ports (shadcn-vue 10,498, shadcn-svelte 9,061) guarantee semantically identical, pixel-different components.
7. **microsoft/playwright** (95,214, Apache-2.0) — capture engine for re-themed previews and the 271 missing ones.
8. **dgtlmoon/changedetection.io** (33,361, Apache-2.0) — the "living" half, and notably *not* AGPL, unlike Renovate and Firecrawl.
9. **tajo/ladle** (2,983, MIT) — CSF-compatible and far lighter than Storybook; at 7,678 previews build time dominates.
10. **teambit/bit** (18,463, Apache-2.0 by body read) — the only project that has actually shipped component-as-independently-versioned-unit with a hosted browsable scope.

---

## 6. Contracts, experiments and decision gates

Defined, not implemented.

### Contract A — `ComponentRecord` (the canonical joined index)

Joined on **case-insensitive normalised `author` + `slug`**, never raw URL equality. Every record carries:

- **Identity**: canonical key, both raw upstream URLs, author, slug, display name.
- **Artifacts**: `source_available` (bool — true for only 3,506), `bundle_available`, `preview_available`, plus paths.
- **Taxonomy**: `canonical_component` (the ~60-name entity), `aliases[]`, `tags[]` **each with its provenance tier** (`page` | `api` | `local`).
- **Semantics**: `use_cases[]`, `visual_style[]`, `complexity`, `interactions[]` — from the legacy classification, labelled as model-generated.
- **Dependencies**: from `registry-item.json`, with a `heavyweight` flag (three / gsap / @react-three/fiber).
- **Theming**: `theme_eligible` (bool), `failure_class` (`ok` | `webgl` | `tailwind_v3` | `baked_literal` | `no_token_block`).
- **Rights**: `rights_status` defaulting to `gated`, `reuse` defaulting to `reference_only`.
- **Freshness**: `first_seen`, `last_verified`, `source_updated_at` — **all currently absent and required**.

*Explicitly excluded:* an industry facet. See §1.

### Contract B — agent query surface

Adopt the shadcn **Dynamic Search** contract verbatim, verified from source by this lane at `apps/v4/content/docs/registry/dynamic-search.mdx`: `GET /r/registry.json?q=&type=&limit=&offset=`, with a `pagination` object in the response as the opt-in signal that results are pre-filtered server-side. It is explicitly designed for "large registries with thousands of items," is backwards compatible with static registries, and requires no capability negotiation. Because shadcn's MCP is registry-agnostic, adopting the format makes Actionist queryable by existing agents with zero bespoke client work. P05-specific facets (theme eligibility, archetype role, visual similarity) ride as extension parameters a static registry can ignore.

### Experiments, in dependency order

| # | Experiment | Closes | Gate |
|---|---|---|---|
| E-1 | Perceptual hash + CLIP over 7,678 previews; report cluster-size distribution | U-1, the dedupe rate | Proceed to taxonomy only once the real rate is known |
| E-2 | Apply a token pack to all 7,949 bundles; scan output CSS for colour not resolving through `var()`/`color-mix()`; emit `themeable.json` | U-2 | Pass rate below ~60% falsifies the re-theming premise |
| E-3 | Headless before/after screenshots of a re-themed sample + WCAG contrast measurement | U-3, the highest-risk unknown | Aesthetic failure rate above a set threshold forces fixed-palette presentation |
| E-4 | Two-rater canonical assignment over 200 components | D-01's falsifier | Under 80% agreement reverts to faceted tags |
| E-5 | Usability test: visual grid vs named list, measuring time-to-first-selection and satisfaction | A-2, the visual-first premise | A named list winning falsifies the whole selection design |
| E-6 | Re-classify 200 components directly against the 17 industries | D-06's falsifier | A discriminating distribution would restore the industry axis |

### Decision gates

- **G-1 (counsel, blocking):** rights clearance for both 21st stores. Until cleared, both remain summarize-only per harvest rule 6, and refresh runs only against licensed endpoints. **Not dischargeable by a research lane.**
- **G-2 (blocking for assembly):** whether a paid 21st.dev key returns component source. Determines whether the 5,004 bundle-only components can ever become source-bearing.
- **G-3 (design):** E-1 must report before dedupe strategy is fixed.
- **G-4 (design):** E-2 must report before any client-facing eligibility claim.

---

## 7. Connection to the 17 industries

The lane brief asked how this connects to the 17 industries where workflows materially differ. **The honest answer is that it mostly does not, and that is a finding rather than a gap.**

Measured against the source-bearing store, the industry axis is near-uniform (§1). Five of the seventeen have zero reachable supply. The most defensible reading is that **UI components are largely industry-agnostic**, and that industry variance lives one level up — in the archetype's data spine, state machine and authority model, which is exactly where the b2b template shelf lane already places it (`case_workflow` primary for 6 of 17, `portal` secondary for 6 of 17, `marketplace` primary for none).

The practical consequence for P05: the component layer should expose **archetype role** (is this the case list, the intake form, the client portal shell?) rather than industry. A law firm's matter list and a property manager's work-order list are the same `case_workflow` table with different labels — one component, two variants, not two components. If that proves false, the b2b lane's own falsifier fires first: a `case_workflow` spine that cannot be re-skinned across its six industries without rewriting its state machine would mean archetype-level reuse is an illusion, and P05 would need per-industry shelves after all.

---

## 8. Honest coverage statement

- **Commercial:** 105 records, **55 verified**, 50 `unknown`. Target was ~100 surfaces; genuine verified coverage is 55, short of target, and 42 of the shortfall is one subagent's usage-limit cutoff. Not padded.
- **OSS:** 122 records, **110 verified** via `gh api`, 12 unconfirmed 404s. Meets the ~100 target.
- **Innovations:** 108 records — 64 observed, 20 inferred, 24 hypothesis — across 13 themes, with a ranked top 10.
- **Local estate:** three headline count sets re-derived from source and matching exactly; six new measurements contributed; one inherited join refined.

Unknowns are recorded as unknown. No number in this report is quoted without either a re-derivation by this lane or a named inherited receipt.
