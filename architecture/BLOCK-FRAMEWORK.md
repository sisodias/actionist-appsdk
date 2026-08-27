# The Block Framework — repo → standardized building block

Drafted 26 Aug 2026 after the first Cena call. Goal (Shaan's words): "a standardized
framework/skill that means any repo or code on the internet that we find useful — any
theme, template, design schema — can be turned into a standardized building block that
this system can use."

## What already exists on this laptop (don't rebuild it)

**AutoSaaS (`SISO_Agency/apps/AutoSaaS/`) is ~60% of this framework, already written:**
- `framework/code-harvest-protocol.md` — the 85%-reuse target, license/provenance rules
  (MIT/Apache/BSD/ISC harvestable, GPL reference-only, unlicensed = summarize-don't-copy),
  26-point candidate scoring, reuse manifests, delta-build classification
  (reuse_local / reuse_external / pattern_external / generate_custom / defer).
- `framework/source-graph-template-strategy.md` — MiniMax explorer swarm, local-first
  search order, template map contract (direct_reuse / reference_only / extract_candidate
  / reject), ISSO five-area shell mapping, build gates.
- `base-template/` — minimal SaaS shell + component registry + template-manifest.json.
- `runs/action-model/` — AutoSaaS's first reference run was literally Action Model.
- Local graphs: `graphify-out/` (dep, shared-component, concept, tech graphs).
- The clone-website skill (`sandbox/alj`) — browser recon → design tokens → component
  specs → parallel build → visual QA.

**`~/SISO_Workspace/siso-ui-base/` (found 26 Aug laptop sweep, counts re-verified) is
the other big prior asset — a RUNNING assembly-over-generation loop:**
- 7,949 harvested component dirs (7,828 with `bundle.html`, 2.9G, gitignored — fresh
  clone re-runs `harvest.mjs` ~20 min) tagged against a 75-tag taxonomy
  (`registry/21st/classification.json`).
- `registry/repos.json` — 33-repo annotated GitHub prior-art manifest in 6 families
  (shadcn-ui, screenshot-to-code, onlook, tldraw/make-real, magic-mcp…) + `clone.sh`.
- End-to-end `brief → forge → gate → judge → bless → graduate` pipeline: `brief.mjs`,
  `precedent.mjs` (replays past judgments), `pipeline/{shoot,judge,rubric}.mjs`
  (screenshot + visual scoring), `batteries/gates/` (mechanical design gates),
  `app/serve.mjs` review grid, `tenants/oracle/dna.md` (per-project design authority —
  the shape an Action Model tenant file would take).
- Licensing boundary to inherit: harvest bundles are compiled 21st.dev third-party
  code; `commands/forge-variations.md` mandates "approaches from the references, never
  markup." Blocks must obey the same rule — the harvest corpus is retrieval evidence,
  not copy-paste source. Great Library's `work.schema.json` (provenance/locator/
  license.spdx/evidence) is the vetting-schema shape to copy; its laptop-estate
  inventory already flags siso-ui-base as high-priority `extract`.
- Image-gen approval-loop precedent: `~/DEV/dispo/design-schema/` (candidates →
  explicit approval state machine in `data/product-asset-review.json` → never
  auto-promote). Nearest working P2 pattern.

What AutoSaaS does NOT yet define — the actual new work — is the **block contract**:
the standardized artifact a harvested repo gets converted INTO.

## The block contract (first-principles draft)

A "block" is a repo/subsystem/component normalized into an installable unit:

```yaml
block:
  id: string                  # namespaced, versioned
  kind: scaffold | feature | component | theme | integration | schema-pattern
  provenance:                 # non-negotiable (harvest protocol rules)
    source_url, commit_sha, license, copyright, adaptation_log
  stack_contract:             # what it assumes
    runtime: [nextjs@15, react@19, ...]
    styling: tailwind + CSS-variable tokens only   # no hardcoded colors
    data: postgres via {orm}   # THE standardization bet — see below
    auth_interface: session|jwt provider-agnostic hooks
  provides:                   # what it exports
    routes[], components[] (registry JSON, shadcn-style), migrations[],
    api_endpoints[], env_vars[], events[]
  requires: [block-ids]       # dependency edges between blocks
  tokens_consumed:            # design tokens it reads (color.*, space.*, type.*)
  eval:                       # every block ships its own proof
    build_cmd, smoke_test, screenshot_baseline
```

Normalization pipeline (repo → block):
1. **Harvest** (exists: code-harvest-protocol) — find, license-gate, score.
2. **Extract** — isolate the subsystem; strip app-specific wiring; AST-level identifier
   pass (research receipt: adaptation via typed transforms is the weak-model-safe route).
3. **Standardize** — the three unification moves Shaan named on the call:
   - **Data layer → Postgres.** One DB dialect; harvested schemas converted to
     Postgres migrations + one ORM's models. This is what makes blocks composable with
     each other AND linkable to Action Model's databases.
   - **Design → token extraction.** Pull the repo's colors/type/spacing into token JSON;
     re-express its CSS against `var(--*)` slots so ANY app theme restyles ANY block.
     (Pairs with P2: image-gen proposes tokens, blocks consume them.)
   - **Interfaces → contracts.** Auth, billing, storage become interface-shaped deps
     (block asks for `auth.getUser()`, not Clerk-vs-Supabase specifics).
4. **Register** — write the block manifest into the registry (Great Library
   `registry/assemblies` pattern is the natural home; AutoSaaS template-registry.md is
   the nearer-term file).
5. **Prove** — block builds + smoke-tests standalone inside the base scaffold before
   admission. No unproven blocks in the registry.

Composition = scaffold + blocks resolved over shared Postgres + shared token theme +
interface bindings, then the assembler generates only glue. This is exactly the
assembly-over-generation architecture from BUILDER-DESIGN.md — the block contract is
the missing middle layer between "850k raw repos" and "the builder can use it."

## Fit to what Cena described on the call (26 Aug)

His ask sharpened: ActionFi/Action Model **clients** build whatever they want
(dashboards etc.) that (a) links to their databases, (b) deploys on an actionmodel.com
subdomain, (c) is cheap per build. That's a SCOPED Lovable, which is much easier than
general Lovable:
- Known deploy target (their subdomains) — no arbitrary-hosting problem.
- Known data layer (their DBs) — schema introspection replaces schema invention.
- Known design system (Action Model brand tokens) — the token layer has one theme to hit.
- Dashboard-heavy use cases — the single best-covered category in OSS (our corpus's
  ~300 categories are strongest exactly here).
Scoped builder + block registry + cheap-model assembly = buildable. **The Lovable
teardown confirmed this** (`../research/lovable-teardown-2026-08-26.md`): Lovable's
genuinely-hard problems are all problems of GENERALITY (sandbox fleets — which Lovable
themselves abandoned for Modal; LLM load-balancing at billions of tokens/min; ~100
OAuth connectors; unified credit metering; any-app codegen). The scoped case deletes
every one. Minimal 80%-value set = chat → constrained codegen (fixed schema + component
library) → sandbox preview iframe → git-backed versions → subdomain publish =
weeks-to-months on rented sandboxes. Bonus: Lovable's worst security liability
(LLM-authored RLS on public Postgres) is structurally removed when the platform owns
schema and policies.

## Buy-option to evaluate FIRST: v0 Platform API

Before building the codegen leg, test Vercel's v0 Platform API (GA, white-label
builders an explicitly supported use case): `chats.init()` seeded with Actionist schema
files at no token cost, shadcn-registry injection for their design system, parsed files
+ demo-URL iframes back. Could be a drop-in for the hardest half while the block
registry matures underneath. Test against: 100 deploys/day quota, Vercel-only deploy
path, unpublished per-call pricing. Hybrid architecture (labeled inference): v0 API for
generation now → swap to own MiniMax-class assembly as the block registry matures —
de-risks the demo timeline without surrendering the moat.

## Next actions

1. ~~Await opus-lovable teardown~~ DONE — verdict folded above.
2. Spike the v0 Platform API with a fake "ActionFi client dashboard" schema (buy-vs-build
   evidence, ~a day).
3. Write `block-contract.schema.json` v0 (formalize the YAML above).
4. Pilot: convert ONE harvested repo (candidate: a shadcn admin dashboard, MIT) into a
   block by hand; record every manual step — that log becomes the automation spec.
5. Re-analysis of the corpus (Shaan wants open-source APPS re-analyzed) waits until the
   block contract v0 exists so the re-analysis extracts INTO the contract.
