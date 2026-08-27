# Template gap and seeds — durable packet

Lane: TEMPLATES (external Opus input to Phase 8)
Observed: 2026-08-27
Owner: Template Opus
Status: research-only, UNEXECUTED, NOT_ADMITTED
Register: [`template-seed-register.jsonl`](template-seed-register.jsonl) · State: [`lane-state.json`](lane-state.json)

## 1. Finding: proven absence of a curated shelf

The Action Model pack contains **no curated deployable B2B SaaS template shelf**. This is an
absence established by inspection, not an inference from silence.

Directories read under `SISO/`: `research/` (18 entries), `research/packs/` (17 entries),
`research/github-sweep/` (40 lanes + `SWEEP-MERGED.json`), `design/` (4 files),
`research/actionmodel-builder-research-2026-08-26/` (phases 2-7, `expansion/`, `outputs/`).

Existing material sits **one level above or below** an app-template shelf:

| Layer | Asset | Local path | What it is |
|---|---|---|---|
| Above | Block Framework + contract | `design/BLOCK-FRAMEWORK.md`, `design/block-contract.schema.json` | Admission protocol. Explicitly states the unit is not the repo. **0 blocks admitted.** |
| Above | Vertical taxonomy | `research/packs/vertical-model.html` | 17 industries / 12 teams / 66 use cases / 72 ideas / 12 atoms. Held at inferred/unverified; 60 of 66 use cases "Coming soon". |
| Above | SaaS catalogue | `research/packs/saas-catalogue.html` | 17 local systems, 34 public candidates, **0 admitted**. |
| Level | Builder/tooling corpus | `.../outputs/github-corpus.jsonl` (284 records) | Repos that *build builders*, not app starters. |
| Level | Raw starter lanes | `research/github-sweep/lane*.json` | Uncurated search output. See §2. |
| Below | Component harvest | `~/SISO_Workspace/siso-ui-base/` | ~7,949 harvested component dirs, 75-tag taxonomy (count per prior sweep report; **not re-verified in this lane**). Components, not app templates. |

**Boundary:** absence of a shelf is a claim about *this pack's contents*, verified by directory
read. It is not a claim that no such shelf exists elsewhere on the estate or in the corpus.

## 2. Exact raw starter lanes

`research/github-sweep/` holds **40 lanes**, each capped at 15 records. **13 are
template-adjacent**; all 13 are raw `gh search` output with no curation, license scan, or read.

| Lane file | Records |
|---|---:|
| `lane1-admin-panel-generator.json` | 15 |
| `lane1-crud-generator.json` | 15 |
| `lane1-dashboard-generator.json` | 15 |
| `lane2-component-registry.json` | 15 |
| `lane2-design-system-tokens.json` | 15 |
| `lane2-multi-tenant-saas.json` | 15 |
| `lane2-nextjs-boilerplate.json` | 15 |
| `lane2-react-admin-dashboard.json` | 15 |
| `lane2-shadcn-template.json` | 15 |
| `lane2-supabase-starter.json` | 15 |
| `lane4-text-to-dashboard.json` | 7 |
| `lane4-figma-tokens-extract.json` | 1 |
| `lane4-screenshot-to-design-tokens.json` | **0** |

**8 of 40 lanes returned nothing** — a coverage gap, not a finding of absence in the world:
`lane3-ast-transformation-codemod`, `lane3-browser-preview-iframe-dev`,
`lane3-monorepo-extract-package`, `lane3-static-site-deploy-api`,
`lane3-wildcard-subdomain-deploy`, `lane4-ai-website-generator-llm`,
`lane4-screenshot-to-design-tokens` (all `[]`), and `lane4-lovable-alternative` (**0 bytes** —
malformed, not merely empty). Two of these — wildcard-subdomain deploy and static-site deploy
API — bear directly on the stated Actionist deploy target and remain unresearched.

## 3. Candidate seeds

A fresh sweep was run on 2026-08-27 to seed the shelf: 25 keyword + 12 topic queries via
`gh search repos`, deduped against 833 repos already present in the corpus and sweep lanes.

Funnel: **1,394 unique → 1,347 new → 196 passing gates → 70 JS/TS-stack seeds.**

Gates: not archived · ≥100 stars · pushed within 365d · permissive declared license
(MIT/Apache-2.0/BSD/ISC/MPL-2.0/Unlicense) · lexical JS/TS stack match.

All 70 are in `template-seed-register.jsonl` as `TS-001..TS-070`, evidence class **D/M**
(direct metadata). **No README was read, no source inspected, no repo cloned or executed.**

## 4. Archetype coverage vs the 17-industry / 66-use-case taxonomy

| Ref | Archetype | JS/TS seeds | Any-stack | Status | Strongest seeds (metadata only) |
|---|---|---:|---:|---|---|
| AR-01 | SaaS foundation (auth+billing+tenancy) | 27 | 42 | **COVERED** | `wasp-lang/open-saas` (15641★, mit), `vercel/next-forge` (7660★, mit), `Blazity/next-enterprise` (7448★, mit) |
| AR-02 | Internal admin / back-office | 16 | 35 | **COVERED** | `refinedev/refine` (35586★, mit), `marmelab/react-admin` (26915★, mit), `illacloud/illa-builder` (12311★, apache-2.0) |
| AR-03 | CRM / sales pipeline | 4 | 17 | **COVERED** | `illacloud/illa-builder` (12311★, apache-2.0), `open-mercato/open-mercato` (1685★, mit), `marmelab/atomic-crm` (1206★, mit) |
| AR-04 | Finance / invoicing / expense | 5 | 24 | **COVERED** | `al1abb/invoify` (6345★, mit), `pdovhomilja/nextcrm-app` (684★, mit), `PaddleHQ/paddle-nextjs-starter-kit` (360★, apache-2.0) |
| AR-05 | Support inbox / helpdesk | 0 | 10 | **GAP** | — none — |
| AR-06 | Inventory / ERP / ops | 1 | 16 | **THIN** | `open-mercato/open-mercato` (1685★, mit) |
| AR-07 | Client / customer portal | 0 | 3 | **GAP** | — none — |
| AR-08 | Booking / scheduling | 1 | 4 | **THIN** | `illacloud/illa-builder` (12311★, apache-2.0) |
| AR-09 | HR / ATS / people ops | 0 | 1 | **GAP** | — none — |
| AR-10 | Contract / document lifecycle | 0 | 0 | **GAP** | — none — |

### Implications for the taxonomy

- The 66 use cases do **not** require 66 templates. They collapse onto ~10 archetypes over the
  12 atoms in `atoms-001.json` (`intake_normalize`, `extract_structure`, `classify_prioritize`,
  `reconcile_audit`, `approval_publish`, …). Shelf sizing should follow archetypes, not use cases.
- Coverage is inverted against stated client demand. AR-01/AR-02 are saturated (27 and 16 seeds)
  and are exactly what generic boilerplate already solves. **AR-07 client portal — named in the
  client demand spec — is a proven zero.**
- The four GAP archetypes (AR-05, AR-07, AR-09, AR-10) are where a shelf would create
  differentiated value, and are precisely where no permissive JS/TS seed cleared the gates.
- 23 of 70 seeds are `AR-00-unmapped`: generic scaffolds with no vertical shape.

## 5. License and evidence gaps

Load-bearing and unresolved:

1. **No license scan executed.** Every `license_observed` value is the GitHub API's declared
   field for the root repo only. Dependency licenses, vendored code, and the license of an
   *assembled/adapted* artifact are all unknown.
2. **No SBOM** for any seed.
3. **No capability or runtime proof.** Star counts, freshness, and fork counts are popularity
   and activity metadata — they are not evidence that a repo builds, runs, or is production-fit.
4. **Lexical categorisation is unreliable.** The archetype regex misfired on the wider candidate
   set — a "client portal" query returned Interactive Brokers API wrappers; "helpdesk" returned
   an MQTT broker. Archetype refs in the register are **provisional pending a read**.
5. **`AR-00-unmapped` (23 seeds)** have no assigned archetype.
6. **Star/freshness thresholds are arbitrary proxies** chosen for this sweep, not a validated rubric.
7. **No Block Contract evaluation.** `block_contract_evaluated: false` on all 70 seeds.
8. **`siso-ui-base` counts are carried forward**, not re-verified in this lane.

## 6. The concrete shelf needed

A governed shelf of **~10 app archetypes**, each an admitted composition of blocks — not a repo
to fork. Per archetype, the minimum viable contract:

- **Data layer** — Postgres-normalized schema with declared tenant boundary.
- **Design layer** — extracted tokens, not markup. Inherits the standing rule:
  *approaches from the references, never markup.*
- **Interface layer** — auth, billing, and connector surfaces as interfaces, not provider bindings.
- **Atom mapping** — which of the 12 atoms the archetype composes.
- **Evidence bundle** — license + SBOM + build + visual + rollback receipts per the Block Contract.

Suggested sequencing, derived from the coverage inversion above:

1. **AR-07 client portal** — proven zero, explicitly client-demanded. Highest differentiated value.
2. **AR-05 support inbox** — zero JS/TS, but 10 any-stack references exist to study.
3. **AR-03 CRM** — `marmelab/atomic-crm` is the closest stack match to the scoped-Lovable
   assumption (React + shadcn/ui + Supabase) and is the natural first read.
4. **AR-01/AR-02** — deliberately *last*. Saturated with commodity boilerplate; low differentiation.

**This ordering is a research recommendation, not an approved plan.** It rests on metadata and
one lexical pass, and assumes a Next.js/Supabase/Vercel deploy target inferred from the Actionist
teardown rather than confirmed with the client.

## 7. Boundary

Research-only. No source was cloned, read, executed, or benchmarked. No license scan, SBOM,
eval, or deployment receipt exists. No block or template is admitted. No implementation is
authorized. Every seed is a candidate requiring a read before it can be trusted.
