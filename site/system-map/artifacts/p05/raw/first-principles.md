# P05 — first principles

**Part:** P05 Living UI component layer · **Run:** `2026-08-27-sprint-1-fable` · **Observed:** 2026-08-27
**Mode:** research-only · no cloning · no execution of candidate source · no build/deploy · no admission · no authenticated vendor access

Evidence classes used below: **observed** (re-derived by this lane or read from a named receipt), **inferred** (reasoned from observed facts), **hypothesis** (not yet tested), **unknown** (explicitly unresolved).

---

## 1. Objectives

What P05 must actually deliver, restated from `parts.json` and tested against what the estate can support.

1. **A corpus that answers "show me options" for a human who cannot name what they want.** The selection surface is visual, not lexical.
2. **A corpus that answers "give me the component for this role" for an agent.** The agent surface is structured, not visual.
3. **A corpus whose freshness is a computable fact, not a claim.**
4. **A corpus whose every record states what it actually is** — source-bearing or bundle-only, ground-truth-tagged or inferred, theme-eligible or not, rights-cleared or gated.
5. **A clear boundary between what Actionist owns and what it merely indexes.**

Objective 5 is the one the estate most clearly forced a change on. See §6.

---

## 2. Constraints

**C-1 — There is no component source in the bundle store.** `demo.tsx` is an import wrapper (median 346 B, 58.1% under 500 B) pointing at a path absent from the corpus. Source exists only in the legacy store: 3,506 components. Source-bearing supply is roughly **2.3× smaller** than the 7,949 headline. *(observed, S-002, S-016)*

**C-2 — Rights are unestablished and the acquisition mechanism is prohibited.** 21st.dev's terms prohibit scraping, prohibit AI/ML training on marketplace content, and prohibit republishing structured metadata — and both local stores were built by exactly that mechanism. Rights coverage across third-party records is 2 of 11,549 (0.017%). SISO's own harvest rule 6 makes both stores summarize-only. **This is a recorded counsel gate, not this lane's decision axis.** *(observed, S-017)*

**C-3 — The upstream constraint is rate, not availability.** The legacy store was populated through the same metered endpoint the newer corpus calls economically impossible at 7,949 scale. 21st.dev's MCP is live and authenticated (a JSON-RPC `initialize` returns a 401 naming a missing API key), metered at roughly 2 installs/day free. *(observed, S-024, S-017)*

**C-4 — The corpus has no time axis.** No `meta.json` in 7,949 directories carries a harvest timestamp. Directory mtimes cluster in a single 67-minute window on 2026-08-18. **Staleness is currently uncomputable.** *(observed, S-009)*

**C-5 — Tag evidence is tiered and the tiers matter.** Ground-truth `page` tags cover 4,033 components; `api` and `local` inference cover the rest. Reported supply changes by up to 3× depending on tier (sidebar: 44 page-tier vs 139 all-tier). *(observed, S-005)*

**C-6 — Two of the corpus's own summary fields are stale.** `stats.untagged=3998` and `stats.tagged=3951` were written by an earlier pass and never recomputed. The live figures are 670 untagged and 7,279 tagged. *(observed, S-004)*

---

## 3. Invariants

Properties any P05 design must preserve, regardless of implementation.

**I-1 — Never present a number without its tier or its scope.** Supply figures must state page-tier vs all-tier; theming rates must state sampled vs corpus-wide; registry counts must state items vs components.

**I-2 — Never delete either 21st store as a duplicate.** The 2,945 intersecting components hold source *and* bundle *and* preview; 534 legacy-only components are source-bearing and absent from the newer corpus. The "we have this twice" reflex destroys capability here. *(observed, S-003)*

**I-3 — Rights status is a required field, defaulting to gated.** No component enters a client-facing surface without a provenance record. *(observed, S-017)*

**I-4 — Theme eligibility is a per-component fact, never a corpus-wide assumption.** The inherited 87% figure is `SAMPLED n=25`; a per-component gate makes the guarantee checkable so a client never picks a component that will ignore their palette.

**I-5 — The index must survive a change of source.** If counsel blocks 21st material, the schema should persist with different rows.

**I-6 — Every quoted count must be re-derivable from source on demand.** This lane re-derived 7,949 / 7,828 / 7,678 / 7,279 / 670 / 3,506 rather than inheriting them.

---

## 4. Assumptions

Stated so they can be attacked. Each is *not* established fact.

**A-1** — Previews are a faithful visual proxy for the component. *(inferred; median 11,410 B WebP is legible, but 6.1% fall under 2 KB and 271 are missing entirely)*

**A-2** — Clients choose better from images than from names. *(hypothesis; the entire visual-first premise rests on it, and it is untested)*

**A-3** — Re-themed components remain aesthetically coherent. *(unknown; explicitly flagged by the prior audit as the most likely source of unpleasant surprises)*

**A-4** — The 20 AutoSaaS primitives are the right owned set for Actionist's archetypes. *(inferred from an AutoSaaS requirements doc with no evidence of implementation)*

**A-5** — Agents will prefer a shadcn-compatible registry over a bespoke API. *(inferred from nine registries serving the format and shadcn's MCP being registry-agnostic)*

**A-6** — Haiku-generated `visual_style`, `complexity` and `use_cases` labels match human judgement well enough to filter on. *(hypothesis; they are model output, per `_classifierModel`)*

---

## 5. Contradictions found

**X-1 — "75-tag facet system" vs measured behaviour.** The vocabulary is described as faceted, but mean tags per component is **2.09**, with **52.6% carrying exactly one tag**. It functions as a single-label category scheme. *(observed, S-006)*

**X-2 — `tagCounts` vs `tagToComponents`.** These disagree substantially (sidebar 143 vs 47) because `tagToComponents` holds only page-tier tags. Either could be quoted as "supply" and they differ by 3×. *(observed, S-005)*

**X-3 — J-1's join key does not work as specified.** The recommended join on canonical URL fails on raw string equality: the stores encode identity as `/@author/components/slug` and `/r/Author/slug` respectively. Normalisation is required, and yields 2,945 / 8,483 rather than the inherited 2,942 / 8,515. *(observed, S-003)*

**X-4 — J-4 is not a crosswalk problem.** The inherited plan frames industry coverage as a 36→17 merge. Measured, the axis **does not discriminate**: mean 3.93 industries per component, 171 components claiming all 10, 89.6% claiming `saas`. And 5 of the 17 target industries have **zero** reachable supply. Merging synonyms cannot fix an axis that is near-uniform and materially absent. *(observed, S-013, S-014)*

**X-5 — "Continuously refreshed" vs a 67-minute snapshot.** P05's thesis claims continuous refresh; the corpus has no timestamps and was captured in one window. *(observed, S-009)*

**X-6 — Dependency surface: 18 vs 237.** The prior audit measured 18 distinct packages from import-wrapper `demo.tsx` files and correctly flagged the measurement as weak. Measured from the source-bearing store's `registry-item.json`, it is **237**. This closes that open item. *(observed, S-011)*

**X-7 — Registry item counts are not component counts.** Magic UI serves 247 registry items against a "150+ components" homepage claim; Aceternity's homepage says "200+" while its own AI page states 111 free + 23 pro. Any corpus sized from headline numbers will be wrong. *(observed, S-027)*

---

## 6. The ownership argument, from first principles

The lane was asked to argue ownership from archetype/universal-necessity. The evidence pushed the argument somewhere slightly different, and the distinction matters.

**Scarcity is not the reason to own.** Every one of the 20 AutoSaaS-required primitives has real ground-truth supply — from 32 (onboarding) up to 164 (spinner), all with previews. If ownership were about availability, the answer would be "harvest everything." *(observed, S-007)*

**The reason to own is that these components are contract surfaces, not visual choices.** A harvested bundle is compiled output: no props, no state machine, no accessibility contract, no data binding. AutoSaaS's own metadata requirement — name, use case, props, states, accessibility notes, responsive behavior, source path, examples, tests — is unsatisfiable from a bundle for *any* component. *(observed, S-016, S-018)*

That gives a clean dividing line:

- **Own it** when the component's correctness depends on something outside itself: navigation (route topology and permission state from P10), forms (validation and submission contracts), tables (sorting, pagination, selection, and the empty/loading/error triad), and the feedback family (which must be coherent app-wide, and sourcing it from five different authors guarantees incoherence).
- **Harvest it** when the component is self-contained and its value *is* its visual variety: heroes (521), testimonials (137), pricing sections (186), galleries (325). These carry no data-plane contract, and variety is exactly what a client is choosing between.

**The archetype angle reinforces rather than drives this.** `case_workflow` is primary for 6 of 17 industries and `portal` secondary for 6 of 17, so a small owned set covers the majority of demand. But the owned set is determined by *contract-bearing-ness*, not by archetype frequency. *(observed, S-020)*

---

## 7. Falsifiers

Each headline conclusion, with the observation that would overturn it.

| Conclusion | Falsifier |
|---|---|
| Canonical entities + aliases beat flat tags | Two raters assigning 200 components to a ~60-name canonical set agree under 80% |
| Visual near-duplication needs pHash + CLIP | pHash alone collapses the 2,058 name-collision surplus to under ~200 clusters |
| Actionist must own the ~20 app primitives | Five sampled harvested components each wire to P09 and pass a11y in under a day |
| Refresh must run on licensed endpoints | Counsel clears the existing harvest mechanism |
| Industry should leave the component layer | Re-classifying 200 components directly against the 17 industries yields a discriminating distribution |
| Clients choose better visually | Usability testing shows faster, more satisfied selection from a named list |
| Adopt shadcn Dynamic Search | The contract cannot carry P05's facets even as ignorable extensions |
| The corpus is a snapshot, not living | A reliable per-component `updated_at` is readable upstream at query time |

---

## 8. Unresolved questions

**U-1 — The visual near-duplicate rate.** Measured floor: 102 exact-duplicate surplus (1.3% of 7,678). Name-collision proxy ceiling: 2,058 (25.9%). The true figure is unmeasured, and the range is too wide to design against. *(unknown, S-034)*

**U-2 — Corpus-wide theme-eligibility pass rate.** Inherited rates are `SAMPLED n=25` and `n=60`. Requires applying a token pack to all 7,949 bundles and scanning output CSS. *(unknown, S-035)*

**U-3 — Whether re-themed bundles look right.** Validity of the transform is proven; aesthetic coherence is not. A light-first component given a dark pack may fail contrast even with every token correctly swapped. *(unknown, S-036)*

**U-4 — Rights clearance.** A counsel gate. Not discharged, not dischargeable by a research lane. *(unknown, S-037)*

**U-5 — Whether a paid 21st.dev key returns component source.** Gates whether the 5,004 bundle-only components can ever become source-bearing. Untested; requires a paid key and network calls. *(unknown, S-038)*

**U-6 — 42 commercial surfaces unreached.** A subagent hit a hard model usage limit after verifying 8 of ~50 assigned gallery/design-system surfaces and correctly declined to characterise the rest from memory. Recorded as `unknown` in `top-companies.jsonl`, not as absent. *(unknown, S-029)*

**U-7 — Whether `visual_style` and `complexity` labels match human judgement.** They are Haiku output and the whole visual-facet design leans on them. Untested.

---

## 9. What this lane did not do

No repository cloned, copied, moved or deleted. No harvested component code executed. No build, deploy, benchmark or admission. No authenticated vendor access and no paid key used. No client data touched. All local `node` invocations were read-only counts over metadata and previews. Historical research files were read, never modified. Writes were confined to this run directory.

One methodological note: an initial junk-detection regex was faulty and matched 100% of the corpus. That result was discarded and the rules rewritten, giving 78 of 7,949 (0.98%). The error is recorded here because the discarded figure appeared in an intermediate step.
