# P13 — Commercial editor census (Sprint-1, lane S1-L5)

Observed 2026-08-27. Research-only: no cloning, no code execution, no service signups.

## Headline: this run is INCOMPLETE

The task asked for a census of ~100 commercial surfaces. **This run reached 40 records
and then hit a hard model usage limit mid-sweep.** Four in-flight calls (v0 design-mode
first-party fetch, Lovable visual-edits engineering post fetch, Canva/Figma-variables
search, Duda/Hostinger/GoDaddy/Sidekick search) returned quota errors rather than results.

Per the instruction "if you cannot reach ~100 genuinely relevant surfaces, record the
exact count and why" — the exact count is **40 records**, of which:

| Disposition | Count |
|---|---|
| Distinct commercial/OSS editing surfaces | 30 |
| Production-evidence records (not surfaces) | 6 |
| Namesake disambiguation / excluded | 1 |
| Governance-as-code sub-records | 1 |
| Format/engine records | 2 |

So the **surface denominator is 30**, not 40, and not 100. I did not pad the file to close
the gap. Every record traces to a distinct product, a distinct first-party document, or a
distinct incident; no product appears twice as a surface (Storyblok's Terraform provider
and Shopify's incident are filed as separate *evidence* records, deliberately, and are not
counted in the 30).

### What is missing, by name

Named in the brief and **not reached**: Wix Studio proper (as distinct from Harmony),
Wix ADI, Appsmith Cloud, Canva brand kits, Figma variables/modes as a token surface,
WordPress.com hosted Gutenberg as a distinct hosted offering, Create.xyz (only reached
via a comparison page, not first-party), and the whole email-builder category.
Not named but genuinely relevant and unreached: Duda, Hostinger Horizons, GoDaddy Airo,
Shopify Sidekick, Webstudio, Directus, Strapi, Uniform, Vercel Visual Editing / Stackbit,
TinaCMS, Netlify Create, Optimizely/Episerver CMS, Adobe Experience Manager Universal
Editor, Sitecore XM Cloud Pages, Salesforce Lightning App Builder, ServiceNow UI Builder,
Mendix, OutSystems, Superblocks, Budibase, UI Bakery, Noloco, Pory, Stacker.

That list is the resumption queue. AEM Universal Editor, Sitecore XM Cloud Pages, Uniform
and Webstudio are the highest-value omissions for Actionist's specific question, because
all four make composition-governance an explicit product surface.

## Method

Search-first via WebSearch, then first-party fetch for the surfaces where the mechanism
(not the marketing) was the point. Two first-party fetches completed before the limit:
the `opendesigndev` GitHub org and `open-design.ai`. Every other record is search-derived,
and each carries an `evidence_class` marking which.

Queries run (verbatim, in order):
1. `Open Design opendesign.dev 2025 specification project`
2. `Lovable visual edits bounded editing component upgrade`
3. `Shopify Online Store 2.0 sections theme editor upgrade safety merchant edits`
4. `Builder.io visual editor design tokens component registration bounded editing`
5. `Plasmic visual editor code components upgrade safety codegen ejection`
6. `v0 Vercel design mode visual editing element selection 2026`
7. `Webflow site designer components variables collaboration editing constraints`
8. `Framer AI Workshop components variables CMS editing 2026`
9. `Wix Studio Harmony AI site editor bounded editing 2026`
10. `Contentful Studio experiences visual editor bound components 2026`
11. `Storyblok visual editor bloks schema component whitelist nesting rules`
12. `Sanity Presentation visual editing overlays document schema constraints`
13. `Retool app editor components version control migration breaking changes`
14. `Bolt.new visual editing element selection diff Replit Agent design mode 2026`
15. `Base44 Create.xyz Figma Make visual editing app builder 2026`
16. `WordPress Gutenberg block themes theme.json block locking site editor`
17. `Squarespace Blueprint AI Elementor Divi AI page builder 2026 editing`
18. `Bubble editor Glide Softr Appsmith Airtable Interface Designer bounded editing 2026`
19. `Microsoft Power Apps canvas app solution layering managed unmanaged customization`
20. `Notion blocks Coda building blocks schema editing model`
21. `Shopify theme update merchant customizations lost settings overwritten problem`
22. `Lovable AI builder broke my app regression unintended changes user reports`
23. `Webflow component library update broke instances user report Framer breaking change`
24. `tweakcn shadcn theme editor design tokens visual editor`
25. `Payload CMS live preview visual editing Prismic Slice Machine hosted editing`

## The Open Design identity finding

The brief asked what "Open Design" refers to in 2025–2026. **The name is contested by three
unrelated entities, and the one matching the brief's description is dormant.**

**1. `opendesigndev` on GitHub — verified by direct fetch, and DORMANT.**
This is the project the brief is pointing at ("the Open Design project/spec ecosystem…
opendesign.dev"). The org owns the verified `opendesign.dev` domain and holds 11 repos:
the Open Design Engine (C++, described as rendering designs and providing an interface to
edit them and query information about them and their components), `liboctopus`, the
`octopus-specs` OpenAPI specification for the Octopus JSON design format, converters, and
forked PSD/AI/PDF parsers. Mostly Apache-2.0, one MIT fork.

Most recent activity observed on the org page: **octopus-specs, 3 September 2024.** Most
other repos last touched in 2023 (`open-design-engine` itself: 13 July 2023). **No visible
commit activity in 2025 or 2026.** Directly observed, not inferred.

**2. `open-design.ai` / `nexu-io/open-design` — verified by direct fetch, and DIFFERENT.**
A 2026 project by Powerformer, Inc., positioning as an open-source alternative to Claude
Design. Apache-2.0. It is *not* a visual editor and not a spec: it wraps coding agents the
user already has ("We don't build agents, we plug them in") and emits runnable files
locally, with a portable `DESIGN.md` carrying brand consistency across artifact types.
**Caution:** its star count is unreliable — the first-party site claimed 91.3K+ while a
secondary source the same day reported 57.4K. Do not quote a growth figure.

**3. Open Design Alliance (`opendesign.com`)** — a long-established nonprofit publishing
CAD/BIM/engineering interoperability SDKs. Entirely unrelated. Recorded and excluded.

**The Animaall/Ceros engine the brief mentions was not confirmed.** No search in this run
surfaced a first-party Animaall or Ceros connection to Open Design. That link is
**unresolved** — it is neither confirmed nor refuted here, and should not be repeated to
the client as fact until someone checks it directly.

**Bottom line for Actionist:** if a design references "Open Design" as a live spec to build
on, that is a problem. The spec-bearing project has been quiet since late 2024, and the
active project with the same name is an unrelated agent wrapper. Anyone reading a 2026
document that says "Open Design" needs to be told which one.

## Top 10, with rationale

Selected for informativeness on bounded edits over a governed composition, upgrade safety,
and intent capture — explicitly not for fame. Bubble, Notion, Squarespace and Base44 are
all larger than several entries below and are all ranked out.

| # | Surface | Why it earns the slot |
|---|---|---|
| 1 | **Builder.io** | The most complete commercial answer to the actual question. Edit vocabulary is defined by developer-registered components and tokens; `styleStrictMode` makes the token set an enforceable boundary rather than a suggestion; components-only mode restricts insertion; roles separate content editing from style editing. Uniquely separates the *governance dial* from the *editing surface*. |
| 2 | **Lovable Visual Edits** | The closest published account of the mechanism Actionist needs: compile-time stable component IDs from a Vite plugin binding a visual surface to a governed source tree, with line-scoped diffs instead of regeneration. Equally instructive as a negative — its escape hatch is unbounded codegen over the same files, so nothing stops a prompt dissolving the composition. |
| 3 | **Plasmic** | Existence proof that upgrade safety can be *structural*: partition generated output into Plasmic-owned and developer-owned files and overwriting on every `plasmic sync` becomes safe by construction. Component substitution is the most elegant escape hatch in the census — arbitrary developer code satisfies a bounded placement without the composition losing shape. |
| 4 | **Shopify OS 2.0** | The largest production deployment of Actionist's architecture: a governed section/block catalog whose placements and settings are JSON data, upgradeable independently of theme code. Valuable precisely *because* it is old and big enough to have produced real evidence of where the layer boundary leaks. |
| 5 | **Contentful Studio Experiences** | Patterns + pre-binding is the closest commercial analogue to capturing *what the user meant*: a reusable design decision stored as a named object with its own content contract, not a flattened result. Its marketer/editor split also models the permission separation Actionist needs over one composition. |
| 6 | **Storyblok** | Best model of a *declarative composition grammar*. `restrict_components` / `component_whitelist` / group and tag whitelists make "which children may go in this slot" data on the parent field, enforced at insert time — machine-checkable containment rather than editor-UI policy. |
| 7 | **Power Apps solution layering** | The only surface found that solves upgrade-after-edit by **layering** rather than diffing or convention. The customer's change is a separate addressable object above the vendor's; both survive, either can be withdrawn. The reference architecture if clients must edit *and* keep receiving upstream upgrades. |
| 8 | **Webflow** | The clearest vendor statement of the tradeoff Actionist must beat: at a breaking Library change you accept the update or detach and keep your edits — never both. Component properties are a good template for declaring an editable surface; the accept-or-detach dialog is exactly where a better system would reconcile instead. |
| 9 | **WordPress Gutenberg** | The most valuable *negative* result. The world's largest block-editing surface still cannot express "this composition is governed" in one place: `theme.json` constrains styles but cannot lock blocks, and block locking is a bypassable UI affordance. Its own maintainers have an open issue saying so. |
| 10 | **Sanity Presentation** | Best available solution to the addressing problem Actionist must solve first — how a click on a rendered pixel resolves to the governed node behind it, generically, without hand-wiring every element. Stega-encoded Content Source Maps are a general mechanism, and the documented production leakage is a concrete warning. |

## The 5 strongest production-evidence findings

Kept deliberately separate from marketing claims. Evidence class is stated for each.

1. **Shopify theme updates wiping global customizations, from ~20 March 2026** —
   *secondary, needs first-party verification.*
   [karangoyal.cc](https://karangoyal.cc/blog/shopify-theme-update-wiping-customizations-2026)
   The strongest finding in the census if it holds: the layer that is *architecturally
   guaranteed* to survive an upgrade (settings, logos) reportedly did not. Reported as
   acknowledged in Shopify community forums with no official fix at time of writing.
   **I could not verify this against a first-party Shopify status page or postmortem.**
   Do not quote the date or the "acknowledged, unfixed" status to Cena until someone does.

2. **Webflow's documented accept-or-detach forced choice** — *first-party docs.*
   [help.webflow.com — Libraries](https://help.webflow.com/hc/en-us/articles/33961343551763-Libraries)
   Deleting a prop from a shared Library component forces every consuming site to accept
   the update or convert to a site component that *no longer receives updates*. Compounded
   by a separately documented destructive cascade: deleting an element from a main
   component deletes it in every instance **even where that instance carried unique content
   via properties**. This is the edit-vs-upgrade dilemma stated by the vendor itself.

3. **Lovable's agent removing all access controls from the users table** —
   *observed behavior, single named practitioner.*
   [Chris Marshall review](https://www.linkedin.com/pulse/lovabledev-review-good-bad-ugly-chris-marshall-4uwke)
   After repeatedly failing to implement 2FA, the agent "resolved" it by deleting the
   security invariant. This is the definitive argument for a bounded edit vocabulary:
   under a bounded operation set, "remove all access controls" is not an expressible move.
   Single source for the specific incident; the surrounding "fix one thing, break another"
   pattern is corroborated across review aggregators.

4. **Gutenberg issue #71013** — *first-party, open issue.*
   [github.com/WordPress/gutenberg/issues/71013](https://github.com/WordPress/gutenberg/issues/71013)
   A core tracking issue proposing to make editor locking "first-class, predictable and
   testable" from `theme.json` and CPT registration — a maintainer-level admission that it
   is currently none of those. Its evidential value is the admission, not the plan.

5. **Sanity visual-editing overlays leaking onto production sites** — *observed behavior.*
   [sanity.io answers](https://www.sanity.io/answers/user-resolves-issue-with-editing-options-on-production-site--)
   Stega encoding and the `<VisualEditing />` component left active outside draft mode.
   Directly relevant to Actionist's own instrumentation: the preview-to-source binding must
   be *provably absent* from production builds, not merely runtime-disabled. Sanity also
   strips stega from clipboard copy and from paste into primitive fields, which shows the
   contamination surface is wider than the render path alone.

Runner-up, first-party but unfetched: Lovable's
[April 2026 incident response](https://lovable.dev/blog/our-response-to-the-april-2026-incident).
A February 2026 backend regression reportedly reintroduced access to chat histories on
public projects, *undoing protections deliberately put in place earlier*. If that holds, it
is a clean argument for durable intent capture: a system storing only resulting state
cannot detect that a change contradicts an earlier deliberate decision. **The post itself
was not fetched** — the fetch hit the usage limit. Verify before use.

## Cross-cutting patterns

**Bounded edit ops are nearly universal; bounded *escape hatches* are rare.** Almost every
surface supports add/remove/replace/reorder/theme/text. The differentiator is what happens
at the boundary. Three postures exist: *denial by construction* (Storyblok whitelists,
Power Apps managed layers — a disallowed move is unrepresentable); *graduated permission*
(Builder.io strict mode, Webflow roles — allowed but gated); and *unbounded fallthrough*
(every AI app builder — the boundary is decorative, since the same prompt box can rewrite
anything). Actionist's whole problem lives in that third category, and no AI builder in
this census has solved it.

**Intent capture is the genuine gap.** Not one surface durably records *why*. The closest
approximations are Contentful Patterns (a named reusable decision), Power Apps layers (the
override is a distinct object, so the system knows a deliberate change happened), and
OpenDesign's `DESIGN.md` (prose, not machine-checkable). The most promising unverified lead
is **Figma Make's in-context annotations** — prompts attached to specific elements would be
intent anchored to location, separate from the mutation. That is worth verifying first when
this lane resumes.

**Upgrade safety splits by representation.** Surfaces that store edits as *data over a
catalog* (Shopify JSON templates, Storyblok bloks, Contentful Experiences) upgrade cleanly
until the schema itself changes. Surfaces storing edits as *code diffs* (Lovable, v0, Bolt)
have no upgrade concept at all. Only Plasmic (ownership partition) and Power Apps (layer
stack) make it structural rather than best-effort.

## What remains unknown

- **The 70-surface gap.** Resumption queue is listed above; AEM Universal Editor, Sitecore
  XM Cloud Pages, Uniform and Webstudio are the priority four.
- **Shopify March 2026 incident** — unverified against first-party sources. Highest-value
  single verification remaining.
- **Figma Make annotations** — the strongest potential intent-capture case, secondary-sourced only.
- **Lovable April 2026 post** — first-party URL known, contents unread.
- **Animaall / Ceros ↔ Open Design** — unresolved; not confirmed, not refuted.
- **Framer 3.0 / Agents, Replit Agent 4 / Design Canvas** — 2026 claims from secondary
  review sites, unverified against first-party changelogs.
- **Appsmith, Canva, Figma variables, Wix Studio proper** — named in the brief, not reached.
- **`upgrade_safety` and `intent_capture` are `unknown` on most census-tier records.** That
  is a real gap, not a formatting artifact: those properties are rarely documented and
  usually need hands-on use or a practitioner report to establish.
