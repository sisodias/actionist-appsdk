# Phase 8 — Lane 02: Local Corpus Join

Lane: `P8-LOCAL-CORPUS-JOIN`
Observed: 2026-08-27
Status: research-only, UNEXECUTED, NOT_ADMITTED, admitted blocks 0
Method: read-only metadata/manifest join. No source opened for reuse, no clone, copy, move, delete, or execution.

Evidence labels used throughout: **direct** (observed on disk or from a first-party page this lane fetched), **inferred** (reasoned from direct evidence), **gated** (blocked behind rights, quota, or auth), **unknown** (unresolved).

---

## 1. Headline: what the join actually found

Phase 7 failed to connect the laptop assets. The connection now exists, and it changes the supply picture in a way the headline numbers hide.

**The three narrative counters are all exactly correct.** siso-ui-base holds 7,949 component directories, 7,828 bundles, and a 75-tag vocabulary — verified by direct count and by the corpus's own integrity gate, which passes with a clean reconciliation (7,949 = 7,828 with a bundle + 121 that ship none). This is the rare case where narrative and receipts agree, so the counters can be trusted going forward.

**But the counters measure the wrong thing.** Three findings, each falsifiable, matter more than the totals:

1. **A second, source-bearing 21st.dev store exists** at `SISO_Knowledge/design-system/library/21st-dev` — 3,508 component directories, **3,506 carrying real `.tsx` implementation source**. The newer 7,949-component corpus explicitly states that source is unobtainable. Both statements are true; the constraint is rate, not availability (§3).
2. **Rights coverage across every third-party store is effectively zero** — 2 license fields across 11,549 third-party records (0.017%). Applied literally, SISO's own written harvest rule makes both 21st stores summarize-only today (§4).
3. **Multiple canonical documents point at paths that no longer exist** — including AutoSaaS's "current confirmed local assets" list and the prior Great Library estate inventory (§5).

**Bottom line for the foundry:** the block-eligible supply is not 7,949. For any block class that requires readable source, today's ceiling is roughly **3,506 third-party components plus first-party code** — and even that is gated on rights that no local record currently establishes.

---

## 2. Asset register (summary)

Full records with counts, manifests, and evidence refs: `local-corpus-join.jsonl` (14 records).

| Asset | Path | Scale | Rights | Role in the foundry |
|---|---|---|---|---|
| SISO UI Base | `siso-ui-base/` | 3.6 G | gated | UI atom supply + taste-gate pipeline |
| 21st harvest (bundle) | `siso-ui-base/registry/21st` | 7,949 comps, 3.4 G | gated | Largest candidate pool; reference-grade |
| 21st extras | `…/registry/21st/extras` | 1,514 | gated | Themes/templates/shaders; only page-level 21st material |
| **Legacy 21st library** | `SISO_Knowledge/design-system/library/21st-dev` | **3,508 comps, 3,506 with source** | gated | **The source-bearing store** |
| SISO Design System | `SISO_Knowledge/design-system` | 6 adapters, 3 lib sources | gated | Only asset with a human greenlight ritual |
| AutoSaaS | `SISO_Agency/apps/AutoSaaS` | 66 M, 11 framework docs | direct | Owns the rights/provenance policy |
| Great Library | `Great_Library_of_SISO` | 10 schemas, 32 works, 79 releases | direct | Governed registry + 11-stage lifecycle |
| Module templates | `SISO_Knowledge/module_templates` | 6 entries | direct | Knowledge schemas — **not** app templates |
| Local SaaS apps | `SISO_Agency/apps` | 22 apps | direct | First-party; highest rights confidence |
| Prior-art manifest | `siso-ui-base/registry/repos.json` | 33 repos, 5 families | gated | Clone-intent list, not a rights record |
| Mini 850k/80k corpus | UNRESOLVED | — | unknown | Could not resolve (§6) |

Verification receipt for the headline counters (**direct**):

```
node registry/21st/verify-harvest.mjs
corpus: 7949 dirs
  valid 7949 | no bundle 121 | no preview 271 | with usage_count 2436
  FAIL bad-json 0 | FAIL missing-fields 0 | FAIL tiny-bundle 0
PASS   (exit 0)
```

---

## 3. The decisive finding: two 21st stores, different artifact kinds

Identity join on `author` + `slug` across both stores (**direct**):

| Measure | Count |
|---|---|
| New corpus (bundle-only) | 7,949 |
| Legacy library (source-bearing) | 3,508 |
| **Intersection** | **2,942** |
| New only | 5,007 |
| Legacy only | 566 |
| **Union of distinct upstream components** | **8,515** |

These stores are **complementary, not redundant**. They differ by artifact kind:

- New corpus: `bundle.html` (compiled, minified), `demo.tsx`, `preview.webp`, `meta.json`
- Legacy library: `<name>.tsx` (**real source**), `demo.tsx`, `classification.json`, `registry-item.json` with `dependencies[]` and a `_provenance` block

For the 2,942 intersecting components the laptop holds *both* readable source and a compiled bundle with a preview. **Deduplicating by deleting either side would destroy capability** — the obvious "we have this twice" reflex is wrong here. The 566 legacy-only components are source-bearing and absent from the newer corpus entirely.

### Resolving the source-availability contradiction

The newer corpus's `AGENT.md` states plainly that component source is not available — the per-component endpoint is metered at 2/day on the free plan and the code field is empty even authenticated (**direct**). Yet the legacy store holds 3,506 real `.tsx` files (**direct**).

Both are true at their own observation times. The legacy store was populated 2026-04-22 through exactly that metered path, which its own README documents as "metered — 2/day on the free tier." The newer corpus was built 2026-08-19 at 7,949 scale, where the metered path is economically impossible. **The constraint is rate, not availability** (**inferred**, from two direct observations and the documented quota).

This is the single most consequential correction this lane makes: the 7,949 headline overstates source-bearing supply by roughly 2.3×.

---

## 4. Rights and readiness gaps

### RG-01 — No machine-checkable rights record anywhere (**direct**)

| Store | Records | With a license field |
|---|---|---|
| 21st harvest | 7,949 | 0 |
| Design-system library | 3,567 | 0 |
| Prior-art repos manifest | 33 | 2 |
| **Total** | **11,549** | **2 (0.017%)** |

### RG-02 — 21st.dev terms constrain the acquisition mechanism itself (**direct**, first-party)

Fetched from `https://21st.dev/terms` (last updated 2026-07-20). The terms prohibit scraping/bots/crawlers without written consent, prohibit using marketplace content to train AI or machine-learning systems without written consent, and prohibit republishing media assets or structured metadata (titles, descriptions, tags) without permission. On open source they state that MIT "allows reuse; it does not allow republishing someone else's work as your own creation," and require retaining the original license and visibly crediting the author even under a permissive licence. 21st separately claims ownership of the presentation layer — demos, previews, screenshots, video — independently of who owns the component.

Both local stores were built by the prohibited mechanism. The newer corpus's own tooling scrapes tag pages (`classify.mjs` "rescrape the 75 tag pages"), bulk-sweeps search (`sweep.mjs`), and caches previews; the legacy store records `importMode: "bulk"`, `importedFromList: "21st-dev-sitemap"`. The cached previews and the harvested tag/description metadata are squarely the presentation layer and structured metadata the terms name.

I am not a lawyer and this is not legal advice; it is a research finding that a **counsel gate is required before any admission**, not something a research lane can discharge.

### RG-03 — SISO's own policy already forbids what the corpus invites (**direct**)

`AutoSaaS/framework/code-harvest-protocol.md` rule 6: if the licence is missing or unclear, do not copy — summarize the pattern instead. Rule 5: every imported file or pattern needs a provenance record.

Applied literally to §4's table, **both 21st stores are summarize-only today**. Notably the newer corpus already reaches the same conclusion by a different route: its `AGENT.md` instructs agents to adapt rather than paste, treating the bundle as reference. The internal policy and the corpus's own contract agree. The gap is that neither is enforced by a machine-checkable record.

### RG-04 — Curation exists but does not scale (**direct**)

`design-system/KEEPERS.md` is the only local artifact resembling block admission: named, dated, human-greenlit components with source, contents, and honest status ("Copied as reference. Broken imports preserved. Will need rewiring to use in a new app."). It is prose, unschematized, and covers a handful of components against a corpus of thousands.

### RD-01 — Classification is two systems, neither sufficient alone (**direct**)

The 75-tag scheme is authoritative on *what a component is*, with honest provenance tiers: 4,033 tags scraped from 21st's own tag pages (ground truth), 713 API-inferred, 2,636 matched offline from slug/name/description — the corpus itself calls that last tier weakest. **33% of tag evidence is the weakest tier and must not count as capability evidence.**

The legacy `classification.json` is the only local source of *who a component is for* (`best_for_industries`) and *what job it does* (`use_cases`). The foundry's retrieval layer needs both axes; merge them rather than picking a winner.

### RD-02 — First-party apps are unmeasured for extraction (**direct** sizes, **unknown** readiness)

SISOCRM 7.1 G, siso-knowledge 5.7 G, isso-dashboard 3.3 G, agency-landing 1.0 G, siso-client-platform 411 M. These carry the **highest rights confidence** (SISO-owned, per harvest rule 1) but zero measured extraction readiness — no interface boundaries, no dependency isolation, no test evidence. Sizes include `node_modules` and build output and are not a capability signal. Client-derived material inside these apps is a separate, uncleared gate.

---

## 5. Missing and moved state

| ID | Documented path | Cited by | Observed |
|---|---|---|---|
| MG-01 | `siso-ui-base/packages`, `siso-ui-base/apps` | Great Library laptop-estate inventory, 2026-08-09 | **Absent** |
| MG-02 | `graphify-out/*.json` (6 graph files) | AutoSaaS harvest protocol, as "current confirmed local assets" | **Absent** |
| MG-03 | `foundry/agency-intelligence`, `foundry/agency-source-candidates`, `foundry/data` | Great Library laptop-estate inventory | **Absent** |
| MG-04 | `design-system/_raw/`, `_external/21st-dev/`, `components/` | `CATALOG.md`, `PROVENANCE.md` | **Absent**; content lives under `library/` |
| MG-05 | `siso-agent-base` (lowercase) | Great Library laptop-estate inventory | Present as `SISO_Agent_Base` |

MG-02 is the sharpest: a framework document asserting *confirmed* assets that are gone. MG-01 and MG-03 mean the prior estate inventory cannot be re-verified against disk without repathing. None of these are data loss findings — they are drift findings, and each one silently misroutes an agent that trusts the document.

**Both blockers on the prior `siso-ui-base-candidate` unit still stand** as of today: no accepted UI Base Work exists, and local presence does not establish ownership, rights, or release readiness. Nothing measured here discharges either. Stage should remain `candidate`, confidence `low`, portability `requires_sanitization`.

---

## 6. Unresolved

**Mini 850k/80k corpus — unknown.** Not resolvable by this lane. Attempts: workspace root (59 entries), `SISO_Knowledge` top level, `SISO_Knowledge/DATA-MANIFEST.json` local data plane (lists people/YouTube pipelines only), and all 8 Great Library source inventories. Repository-wide content search is blocked in this environment (`grep`/`rg`/`find` disabled for agent navigation) and Serena indexes symbols, not prose corpora. **Next gate:** the operator supplies the exact path or owning manifest, then this join re-runs for that asset alone.

---

## 7. Recommended joins

Ordered by leverage. All are read-only research proposals; none is authorized work.

**J-1 — Join the two 21st stores on canonical upstream URL.** Key on the 21st.dev component URL, present in both stores (`meta.json.url`; `registry-item.json._provenance.fetchedFrom`). Emit one record per upstream component carrying `source_available`, `bundle_available`, `preview_available`, `dependencies[]`, `industry_tags[]`, `usage_count`, and both classification systems. This is the single highest-leverage join: it turns two partial stores into one 8,515-component index that finally says which components are actually source-bearing.

**J-2 — Adopt the Great Library lifecycle instead of inventing one.** The 11 stages (`unverified → read → candidate → owner_assigned → extracted → verified → released → library_indexed → stack_pinned → retired`) already encode the promotion discipline the Block Contract needs, and `source-inventory.schema.json` already requires `evidence[]` on every unit, a `next_gate`, and explicit `blockers[]`. Lane 01 should extend this, not parallel it.

**J-3 — Make rights a required, machine-checkable field.** No block admits without a rights record. Given §4, the honest default for all 11,549 third-party records is `rights_status: gated, reuse: reference_only` until counsel says otherwise. This encodes SISO's existing rule 6 as a gate rather than a sentence in a document.

**J-4 — Author a 36→17 industry crosswalk.** Required before the legacy classification can join the 17-industry denominator. Merge the synonym clusters (`ai`/`ai-tools`/`ai-ml`; `creator-tools`/`creators-tools`/`creative-tools`/`creative`; `social`/`social-media`) and treat `other` (1,398) as unclassified rather than a category.

**J-5 — Schematize KEEPERS.** Convert the prose greenlight log into records against the Great Library evidence shape. It is the only local artifact that already encodes human admission; losing it to prose drift would discard the one working precedent.

**J-6 — Repath the stale references (MG-01…MG-05).** Cheap, and it stops silently misrouting every agent that trusts those documents.

---

## 8. What this lane did not do

No source was opened for reuse, no repository cloned, copied, moved, or deleted, no harvested code executed, no licence scan, no benchmark, no block admitted. The two `node` invocations were the corpus's own read-only integrity gate (`verify-harvest.mjs`) and its tag-vocabulary lister (`find.mjs --tags`); both read local metadata and neither executes harvested component code. One first-party page was fetched (`21st.dev/terms`) as rights evidence. No authenticated vendor action was taken and no client data was touched.

Phase 8 remains **UNPROMOTED**. Rights, runtime, economics, and client/legal gates remain open and are explicitly *not* discharged by this lane.
