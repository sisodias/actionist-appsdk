# AM-PLATFORMS checkpoint-001 — first-party priority dossiers

**Run:** `actionmodel-long-run-2026-08-26`  
**Lane:** `AM-PLATFORMS`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Scope:** Manus, Airtable Omni, Zapier Interfaces/Forms, Base44, and Onlook  
**Status:** evidence checkpoint; no authenticated product sessions; no Actionist runtime changes

## Headline

The first-party review weakens “AI app builder” as a differentiated premium category and sharpens the Action Model wedge. Manus is the closest reference for conversational building plus hosted release. Airtable Omni is a data-native builder with unusually explicit plan/build/permission boundaries. Base44 is the strongest of this set for an agent-friendly full-stack lifecycle with backend, auth, realtime, hosting, GitHub sync, and version rollback. Zapier Interfaces has narrowed/renamed to Zapier Forms: it is a workflow front end over Tables and Zaps, not evidence of a general code or full-stack builder. Onlook is a visual React/Tailwind design-to-code layer, not an end-to-end backend or GUI-operation platform.

The evidence-backed Action Model opportunity is therefore the combination of:

1. a constrained build plane using vetted scaffolds and typed blocks; and
2. an agent-operation plus evidence plane that can perceive and operate long-tail software, request approval, verify side effects, recover, and retain provenance.

None of the five reviewed first-party surfaces documents that complete combination. This is a bounded finding about these sources, not a universal market claim.

## Evidence levels used

| Level | Meaning in this packet |
|---|---|
| `catalogue` | First-party product/marketing surface names or positions a capability. |
| `documented` | First-party help, API, docs, or public source describes a behavior or boundary. |
| `authenticated/live` | A capability was exercised in a signed-in product session or live API call. **None in this packet.** |
| `implemented` | Capability exists in the Action Model codebase. **None asserted in this packet.** |
| `unverified` | Plausible or claimed, but not supported by the reviewed first-party evidence at the required level. |

`D*` below means documented with a material boundary; it is not a claim of production quality. `C` is catalogue-only. `U` is unverified. `H` is held/rejected as phrased.

## Local evidence reconciled first

- `research/actionmodel-long-run/README.md` — campaign contract and checkpoint protocol; observed 2026-08-26.
- `research/actionmodel-long-run/lanes/platforms.md` — comparison matrix and first queue; observed 2026-08-26.
- `research/actionist-solutions-sweep-spec-2026-08-26.md` — the cited solutions sweep spec (the packet’s `A4` path is `actionist-`, not `actionmodel-`); dated 2026-08-26.
- `research/builder-architecture-intel-2026-08-25.md` — existing v0/Replit/Bolt/Lovable and scaffold conclusions; dated 2026-08-25.
- `research/market-convergence-intel-2026-08-26.md` — local hypotheses for Manus, Airtable, Zapier, and Base44; dated 2026-08-26. Its platform claims were treated as hypotheses until the first-party review below.
- `research/lovable-teardown-2026-08-26.md` and `research/github-recon-2026-08-26.md` — local coverage used to avoid reopening already-covered builder and OSS discovery work.

The local evidence establishes demand and prior hypotheses. It does not itself upgrade a platform capability to `documented` unless the cited local source is first-party or the capability is independently checked below.

## Priority dossier 1 — Manus

**Capability status:** `catalogue + documented`; `authenticated/live: unverified`; `implemented in Actionist: no evidence`.

### What first-party evidence supports

- Manus’s website-builder docs describe natural-language build/edit, live interactive preview, desktop/mobile preview, and visual/style editing. The page exposes separate developer-tool areas for code control, Figma import, integrations, and GitHub integration.
- Manus’s API docs describe websites produced by an agent task, point-in-time checkpoints backed by git commits, hosted URLs, `website.status`, `website.listCheckpoints`, `website.publish`, and `website.update`.
- The API distinguishes a successful checkpoint from a live deployment. Publish is asynchronous, returns/polls publish state, and reports the live version. Visibility is documented as `public`, `team`, or `private` (with endpoint-specific limits).
- The API always deploys the latest checkpoint. It explicitly says there is no way through this API to pin an older checkpoint, and there is no public unpublish endpoint. These are important safety boundaries for an Actionist release plane.

### Matrix reconciliation

| Capability | Finding | Level/confidence |
|---|---|---|
| Intent capture | Natural-language description of the web app/site. | `D`; high |
| Planning | Agent task exists, but a user-visible structured build plan is not established by the reviewed pages. | `U`; medium |
| Retrieval | Industry/competitor research is described on the builder page; no reusable scaffold/knowledge retrieval contract is documented here. | `D*`; medium |
| Scaffold selection | The simple builder explicitly contrasts itself with template-based builders; no registry selection contract found. | `U`; medium |
| Design tokens | Visual style controls for colors, typography, spacing, and borders are documented; token manifests are not. | `D*`; high |
| Schema binding | Built-in database/auth/lead features are claimed in product material; external-schema binding is not established in the reviewed docs. | `D* / U`; medium |
| Execution environment | Cloud agent task plus live preview and hosted website. | `D`; high |
| Browser operation | Manus has a separate browser-operator product surface; builder integration with arbitrary GUI operation is not documented. | `U`; medium |
| Approvals | Visibility/collaboration controls are documented; per-side-effect approval gates are not. | `D* / U`; medium |
| Testing | Interactive preview and publish-state polling are documented; automated contract/browser test suites are not. | `D*`; medium |
| Deployment | `website.publish`, status polling, hosted URLs, and visibility are documented. | `D`; high |
| Rollback | Checkpoint/version history is documented, but public API cannot pin an older checkpoint; rollback safety is therefore partial. | `D* / H`; high |
| Auditability | Checkpoint IDs, git-commit backing, status, and published-version matching provide release evidence; no immutable end-to-end audit log is documented. | `D*`; high |
| Cost | No exact current unit price or build/run meter was used for this dossier. | `U`; high |
| Extensibility | API, integrations, GitHub, Figma import, and developer-tool surfaces are documented. | `D*`; medium |

**Action Model reading:** Manus is the strongest direct competitor/reference for “describe → build → preview → publish,” but its documented release API exposes a non-trivial rollback gap. Treat it as a build/deploy benchmark, not evidence that a safe agent-operation/evidence plane is solved.

## Priority dossier 2 — Airtable Omni

**Capability status:** `catalogue + documented`; `authenticated/live: unverified`; `implemented in Actionist: no evidence`.

### What first-party evidence supports

- Airtable describes Omni as a conversational assistant that can build apps, research the web, analyze data/documents, create/update records, and answer questions. The help page says it is available across all plan types, subject to AI/permission settings.
- Omni can propose a plan before building an AI-generated interface element. The builder can refine the plan and then choose “Build it.” It can create tables, views, fields, interfaces, automations, and record/field changes within Airtable’s permission boundary.
- AI-generated interface elements can be configured against selected tables/fields, filtered/sorted, and given inline create/edit/delete actions. History supports reverting an earlier version of an element.
- The same documentation states material limits: third-party credentials cannot be securely stored in AI-generated elements; elements are not viewable on mobile; they cannot be reused across multiple pages/apps; only selected data is available; and native interface pages differ from AI-generated elements.

### Matrix reconciliation

| Capability | Finding | Level/confidence |
|---|---|---|
| Intent capture | Natural-language requests for apps, interfaces, data, and automations. | `D`; high |
| Planning | Omni proposes a plan describing intended interface and table/field changes before Build it. | `D`; high |
| Retrieval | Web research and base/document analysis are documented; reusable component/scaffold retrieval is not. | `D*`; high |
| Scaffold selection | Native interface pages versus AI-generated elements are distinguished; no general scaffold registry is documented. | `D* / U`; medium |
| Design tokens | AI-generated layouts/visualizations and standard property editing are documented; no portable token contract is shown. | `D*`; medium |
| Schema binding | Tables, fields, selected data sources, new fields, and inline record actions are directly documented. | `D`; high |
| Execution environment | Runs inside Airtable’s hosted base/interface runtime; no isolated per-build sandbox is documented. | `D*`; high |
| Browser operation | Omni can operate Airtable’s own functions/data; arbitrary external browser operation is not documented. | `U`; high |
| Approvals | Workspace/base roles and a setting controlling interface-only collaborator mutations are documented; per-action approval is not. | `D* / U`; high |
| Testing | Preview/edit/history and error-fix guidance exist; no automated build/route/browser test gate is documented. | `D*`; medium |
| Deployment | Interfaces are editable/published/shared within Airtable; a separately testable client deployment contract is not established. | `D*`; medium |
| Rollback | History can revert earlier AI-generated elements; scope is not equivalent to a full database/app rollback. | `D*`; high |
| Auditability | Permissions, selected data scope, and history are documented; immutable action/audit evidence is not. | `D*`; medium |
| Cost | Omni help says all plan types; AI credits are required for full Omni, while AI-generated interface elements do not use AI credits. Exact spend model is not normalized here. | `D*`; high |
| Extensibility | Automations, custom elements, source download/edit, and Airtable’s existing data model are documented; external agent extensibility is not established. | `D*`; medium |

**Action Model reading:** Omni is the clearest data/schema-first counterexample to a code-centric builder. It validates “plan before mutation” and permission-aware writes, but its credential, reuse, mobile, and hosted-runtime limits make it a poor substitute for a portable Block Contract plus cross-application operation.

## Priority dossier 3 — Zapier Interfaces → Zapier Forms

**Capability status:** `catalogue + documented`; `authenticated/live: unverified`; `implemented in Actionist: no evidence`.

### What first-party evidence supports

- The current first-party help page says: “Zapier Interfaces is now Zapier Forms” (updated 2026-05-29). Existing projects continue to work, but the current documented surface is forms, tables, and workflow triggers.
- Forms can start blank, from an existing Zapier Table, or via Zapier Copilot. Fields can be configured with conditional logic. Submissions can show a message, redirect, show another page, or run a Zap.
- Form submissions can be stored in a connected Table, then viewed, filtered, searched, and exported. Zapier documents preview/testing with a test entry before sharing, plus link/embed publishing and access controls.
- The older Interfaces page documents multi-page interfaces, components, templates, custom branding, share permissions, and links to Zaps/Tables. It is useful historical evidence, but it predates the rename and should not be treated as the current product name.

### Matrix reconciliation

| Capability | Finding | Level/confidence |
|---|---|---|
| Intent capture | Copilot can generate a form from a natural-language description. | `D`; high |
| Planning | No structured plan-before-apply flow found in the reviewed help pages. | `U`; medium |
| Retrieval | Can start from an existing Table/template; no web/repo retrieval contract. | `D*`; high |
| Scaffold selection | Blank, template, Table, and Copilot starting points are documented. | `D`; high |
| Design tokens | Components, layout, branding, and colors are documented; portable design tokens are not. | `D*`; high |
| Schema binding | Forms bind to existing/new Zapier Tables. | `D`; high |
| Execution environment | Zapier-hosted form/interface runtime. | `D`; high |
| Browser operation | No arbitrary browser/computer-use operation documented. | `U`; high |
| Approvals | Access controls are documented; side-effect approval queues are not. | `D* / U`; medium |
| Testing | Preview and test entry validate fields, confirmation, and table persistence. | `D`; high |
| Deployment | Share/embed links are documented; this is hosted form publication, not code deployment. | `D*`; high |
| Rollback | No version-history or rollback behavior found in the reviewed current help. | `U`; medium |
| Auditability | Zap execution history may exist elsewhere in Zapier, but it is not established as an interface audit log here. | `U`; high |
| Cost | Current help says Forms is available on all plans; exact cost/limits were not normalized. | `D* / U`; high |
| Extensibility | Zaps, Tables, components, conditional logic, redirects, and embeds are documented. | `D`; high |

**Action Model reading:** Zapier is strong evidence for a narrow “intake → system write → automation” atom. It should not be counted as a general full-stack builder or as proof of agent-operated software.

## Priority dossier 4 — Base44

**Capability status:** `catalogue + documented`; `authenticated/live: unverified`; `implemented in Actionist: no evidence`.

### What first-party evidence supports

- Base44’s quick-start docs describe prompt-to-app generation with design, databases, signups, user permissions, hosting, preview, and iterative customization.
- The AI chat docs expose three modes: Default (act immediately), Discuss (plan/refine before applying), and Edit (click preview elements to adjust visuals). AI Controls include custom instructions and freezing files/entities to prevent accidental edits.
- Base44 documents built-in backend capabilities: NoSQL data, authentication/access control, realtime subscriptions, serverless functions, integrations, and hosting. Its developer docs describe a CLI, SDK, project config, entity/auth files, and deploy flows.
- Version History supports preview, revert, view code, and publishing a previous version while leaving the current draft open. However, GitHub two-way sync is described as permanent; after connection, pre-integration Base44 history is not available for rollback and live publication still requires an explicit Publish action after main-branch sync.
- Base44 documents editor error detection and “Resolve with AI,” but this is not evidence of a complete automated test/contract gate.

### Matrix reconciliation

| Capability | Finding | Level/confidence |
|---|---|---|
| Intent capture | Plain-language prompt-to-app flow is documented. | `D`; high |
| Planning | Discuss mode is explicitly for planning/refining before applying changes. | `D`; high |
| Retrieval | App/code context is implied by the editor/agent, but reusable external retrieval is not documented in reviewed pages. | `U`; medium |
| Scaffold selection | Templates and generated app structures are mentioned; a selectable vetted registry is not established. | `D* / U`; medium |
| Design tokens | Visual Edit, custom instructions, and protected files/entities are documented; portable token manifests are not. | `D*`; high |
| Schema binding | Entities/config files, SDK, and managed data layer are documented. | `D`; high |
| Execution environment | Managed backend, functions, realtime, hosting, and local frontend development are documented. | `D`; high |
| Browser operation | No arbitrary external browser operation documented. | `U`; high |
| Approvals | Discuss mode and freeze controls provide mutation restraint; per-side-effect approvals are not documented. | `D* / U`; high |
| Testing | Preview issue detection, GitHub checks/workflows, and AI repair guidance are documented; full required test gates are not. | `D*`; medium |
| Deployment | CLI/deploy, hosted app, custom domain/HTTPS, and explicit Publish are documented. | `D`; high |
| Rollback | Prompt revert, version restore, prior-version publish, and code view are documented; GitHub sync narrows historical rollback. | `D*`; high |
| Auditability | Chat/version history and GitHub sync provide trace points; immutable audit or side-effect evidence is not documented. | `D*`; medium |
| Cost | Exact current cost/credit schedule was not used in this checkpoint. | `U`; high |
| Extensibility | CLI, JavaScript SDK, TypeScript functions, integrations, GitHub, and external frontend use are documented. | `D`; high |

**Action Model reading:** Base44 is the closest of these five to a packaged full-stack build plane. Its explicit Discuss/Edit/Default modes, freezes, and version publishing are useful patterns. The permanent GitHub sync and partial rollback behavior are a warning: source control integration can change the recovery boundary rather than automatically improving it.

## Priority dossier 5 — Onlook

**Capability status:** `catalogue + documented`; public source `documented`; hosted product `authenticated/live: unverified`; `implemented in Actionist: no evidence`.

### What first-party evidence supports

- Onlook docs describe a visual editor for React/Tailwind projects, live DOM edits reflected into code, AI assistance for generating/modifying code, a theme system, and deployment from the application.
- The feature docs describe drag/drop, resize/position, text/image edits, Tailwind styles, real-time code integration, code editing/import/export, AI generation/debugging, and Figma-to-React conversion.
- The project README describes a web-container architecture: code runs in a container, a preview is shown in an iframe, code is indexed/instrumented to map DOM elements to source, and edits are applied to the iframe and code. It also lists templates, text/image starts, branching, checkpoints, CLI commands, deployment, MCPs, and non-Next/non-Tailwind support as project capabilities.
- The public GitHub repository is first-party and reports Apache-2.0 license metadata; GitHub API observation on 2026-08-26 reported `pushed_at=2026-08-25T01:06:22Z`, 26,560 stars, and 379 open issues. The README simultaneously says the hosted product is in early access. Repository claims and hosted-product claims must stay separate.

### Matrix reconciliation

| Capability | Finding | Level/confidence |
|---|---|---|
| Intent capture | AI chat can create/edit projects from descriptions; text/image starts are listed. | `D`; medium |
| Planning | No structured plan-before-edit flow documented. | `U`; medium |
| Retrieval | Code is read/indexed to map DOM to source; external knowledge/repo retrieval is not established. | `D*`; high |
| Scaffold selection | Next.js creation, templates, and text/image starts are listed; exact registry/admission rules are not. | `D*`; medium |
| Design tokens | Theme system, brand assets, Tailwind style controls, and component editing are documented. | `D*`; high |
| Schema binding | No backend/data-schema binding contract found in the reviewed docs. | `U`; high |
| Execution environment | Web container plus iframe preview is documented in the first-party README/docs. | `D`; high |
| Browser operation | DOM visual editing is documented; general GUI operation across third-party software is not. | `D* / U`; high |
| Approvals | No per-change approval or external side-effect approval contract found. | `U`; high |
| Testing | Live preview and checkpoints are documented; automated test gates are not. | `D*`; medium |
| Deployment | Docs/README describe deploy, shareable links, and custom domains. | `D`; medium |
| Rollback | Checkpoints/branching are listed; exact restore semantics need a live/source verification pass. | `D*`; medium |
| Auditability | Source edits, checkpoints, and branches provide history; no immutable audit log is documented. | `D*`; medium |
| Cost | Hosted early-access pricing/limits were not verified. | `U`; high |
| Extensibility | Open source, local run/contribution docs, MCPs, CLI, and broader project support are documented/claimed. | `D*`; medium |

**Action Model reading:** Onlook is a useful visual/design leg and possible reference for DOM-to-source mapping. It does not close schema, authority, approval, recovery, or agent-operation requirements.

## Cross-dossier comparison: what is genuinely differentiated

| Capability cluster | First-party signal across these five | Action Model implication |
|---|---|---|
| Conversational intent/build | Manus, Omni, Base44, and Zapier Forms all support natural-language creation in some scope. | Do not differentiate on chat-to-first-screen alone. |
| Data/schema binding | Omni and Base44 document native data models; Zapier binds forms to Tables. | A reusable schema/block contract and safe migration boundary remain valuable. |
| Visual/design adaptation | Manus, Omni, Base44, and Onlook expose visual editing or generated layouts. | Tokenized design systems and visual proof matter more than generic styling prompts. |
| Isolated execution | Manus/Onlook document cloud/container previews; Base44 documents managed hosting. | Runtime is necessary but not sufficient; deploy-vs-preview validation must be explicit. |
| Reversibility | Manus has checkpoint IDs but API latest-only publish; Omni has element history; Base44 has version revert/publish with GitHub caveats; Onlook lists checkpoints/branches; Zapier rollback is unverified. | Recovery must be a first-class contract, not inferred from “history” language. |
| Browser/computer operation | None of the five reviewed builder surfaces documents arbitrary third-party GUI operation plus approvals and verification. | This remains the strongest defensible Actionist wedge, subject to direct Actionist evidence. |
| Evidence/provenance | None documents the local catalogue → license/provenance → Block Contract → smoke/visual proof admission pipeline. | The evidence/registry plane is a product seam, not a copy of a competitor feature. |

## Held or rejected claims

These claims were not promoted because the required first-party evidence level was not present:

- **Held:** local market-intel claims about Manus revenue, acquisition history, or market share. They are outside this checkpoint’s first-party capability review.
- **Held:** “Manus can always generate a complete production backend/auth/database.” First-party pages document these features/claims, but not universal success or authenticated behavior across arbitrary apps.
- **Held:** “Airtable Omni is a portable full-stack builder.” The reviewed docs describe an Airtable-native runtime with explicit credential, mobile, reuse, and page-type limits.
- **Rejected as current naming:** “Zapier Interfaces” as the current standalone product label. First-party help says it became Zapier Forms in May 2026; older Interfaces docs are retained as historical evidence.
- **Held:** “Zapier Forms is a general app/code builder.” The reviewed current docs support forms, Tables, Zaps, preview, and share/embed—not a general code/full-stack deployment surface.
- **Held:** “Base44 GitHub sync improves rollback.” The docs state that the sync is permanent and removes access to pre-integration Base44 history.
- **Held:** “Onlook’s hosted product is production-ready and equivalent to its public repository.” The README says hosted access is early access; source and hosted claims remain separate.
- **Not claimed for any platform:** authenticated/live behavior, Actionist implementation, exact current cost, end-to-end automated testing, immutable auditability, or arbitrary browser operation.

## Sources and observation ledger

All web sources below were read or searched on **2026-08-26**. Where a publisher update date was visible, it is included; otherwise the observation date is the date of record.

### First-party web/source URLs

- Manus docs: [Editing and Previewing](https://manus.im/docs/website-builder/editing-and-previewing) — observed 2026-08-26; docs page, publisher update not shown.
- Manus API: [Website endpoints](https://open.manus.ai/docs/v2/website) — observed 2026-08-26; documents checkpoints, publish states, visibility, and error boundaries.
- Manus catalogue: [Simple website builder](https://manus.im/tools/simple-website-builder) — observed 2026-08-26; catalogue/positioning, not a live test.
- Airtable: [Using Omni AI](https://support.airtable.com/articles/1744327578-using-omni-ai-in-airtable) — last updated 2026-08-12; observed 2026-08-26.
- Airtable: [AI-generated interface elements](https://support.airtable.com/articles/6845086569-ai-generated-interface-elements) — last updated 2026-08-12; observed 2026-08-26.
- Airtable: [Omni app-building page](https://www.airtable.com/platform/app-building) — observed 2026-08-26; catalogue/positioning.
- Zapier: [Create forms in Zapier Forms](https://help.zapier.com/hc/en-us/articles/15927500577037-Create-forms-in-Zapier-Forms) — updated 2026-05-29; observed 2026-08-26; includes the Interfaces→Forms rename.
- Zapier: [Create interactive pages and apps with Zapier Interfaces](https://help.zapier.com/hc/en-us/articles/14490267815949-Create-interactive-pages-and-apps-with-Zapier-Interfaces-Beta-) — updated 2025-01-24; observed 2026-08-26; historical Interfaces behavior.
- Base44: [Building an app](https://docs.base44.com/Getting-Started/Quick-start-guide) — observed 2026-08-26; prompt-to-app, data/auth/hosting/preview claims.
- Base44: [AI chat modes](https://docs.base44.com/Building-your-app/AI-chat-modes) — observed 2026-08-26; plan/edit modes, controls, version history, repair guidance.
- Base44: [Developer tools](https://docs.base44.com/documentation/building-your-app/developer-tools) — observed 2026-08-26; managed backend, SDK/CLI, hosting and integrations.
- Base44: [GitHub integration](https://docs.base44.com/developers/app-code/local-development/github) — observed 2026-08-26; permanent sync and rollback boundary.
- Base44: [Auth](https://docs.base44.com/developers/backend/resources/auth) — observed 2026-08-26; auth config and deploy/push behavior.
- Onlook: [Docs welcome](https://docs.onlook.com/) — observed 2026-08-26; visual editor, AI, theme, deploy positioning.
- Onlook: [Core features](https://docs.onlook.com/getting-started/core-features) — observed 2026-08-26; visual/code/AI/Figma capabilities.
- Onlook: [First-party GitHub repository](https://github.com/onlook-dev/onlook) — observed 2026-08-26; public-source README and hosted early-access boundary.
- Onlook: [GitHub releases](https://github.com/onlook-dev/onlook/releases) — observed 2026-08-26; release surface.

### Machine verification

- Repository state was checked before writing; no pre-existing `outputs/platforms/` tracker files were present.
- `gh api repos/onlook-dev/onlook --jq '{full_name,html_url,license:.license.spdx_id,default_branch,updated_at,pushed_at,open_issues_count,stargazers_count}'` returned `license=Apache-2.0`, `pushed_at=2026-08-25T01:06:22Z`, and `updated_at=2026-08-25T18:27:02Z` on 2026-08-26.
- No authenticated product session, API key, or runtime implementation was used. Therefore all platform rows remain catalogue/documented only.

## Next gate

Reconcile the existing local dossiers for Lovable, Replit, v0, Bolt, bolt.diy, Dyad, Plasmic, refine, screenshot-to-code, shadcn registries, E2B, and open-lovable against this same matrix. Then source-review NocoBase and CopilotKit. The next checkpoint should focus on contradictions between local coverage and first-party behavior, not restart general discovery.
