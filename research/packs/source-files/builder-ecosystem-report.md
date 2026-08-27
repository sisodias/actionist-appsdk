# Action Model builder ecosystem report

**Milestone:** commercial-matrix v1 + coverage-ledger v2 + OSS-map v1 + provisional-stack v1  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Lane:** ECOSYSTEM-COMMERCIAL  
**Scope:** commercial/private AI builders, Lovable, and public GitHub/open-source alternatives for an Action Model pilot  
**Research mode:** read-only; primary product/docs pages and pinned public repositories first

## Working hypothesis — not a conclusion

The current evidence suggests that a general-purpose “prompt → any app” builder is a crowded and increasingly bundled surface: Lovable, v0, Bolt, Replit Agent, Base44, Manus, Airtable Omni, and Zapier all document meaningful parts of the build plane. This is a working market hypothesis, not a final strategic conclusion. A provisional pilot candidate to validate—not a build authorization—is a constrained builder that:

1. turns a free-form request into a structured `BuildSession` and explicit approval;
2. chooses one known-good Next.js/React/Tailwind/shadcn archetype and a small, license-cleared block registry;
3. binds to Action Model’s known data/auth/deployment boundary instead of inventing auth, RLS, or a general backend;
4. assembles bounded changes in a rented isolated sandbox using a cheap model as the default;
5. gates every release on provenance/license, build, browser smoke, screenshot, deployment, approval, and rollback evidence; and
6. connects the resulting client tool to an Action Model agent that can operate long-tail/API-less software with explicit authority, approval, verification, recovery, and audit.

The leading strategic hypothesis is the governed loop **build the client tool + operate the client’s existing software + prove the side effect**. That is an inference from the reviewed sources, not a claim that Action Model already implements the full loop or that the market has been exhaustively covered.

For validation planning, v0 Platform API is an optional time-to-demo spike, not an established Actionist contract boundary. Lovable’s Build with URL API is a useful benchmark and integration reference, but the reviewed first-party material does not establish OEM/white-label rights or full application/database rollback.

## Evidence rules

The report separates:

- **Documented fact (`D`)** — stated in a first-party product, help, API, pricing, or source page reviewed on the observation date.
- **Partial (`P`)** — a first-party surface documents part of the capability, but not the stronger interpretation needed for a safe builder platform.
- **Unverified / not found (`U`)** — the reviewed sources did not establish the claim. This does not prove the product lacks it.
- **Inference (`I`)** — a recommendation or strategic reading derived from the evidence.

“Deploy,” “history,” “MCP,” “enterprise,” and “AI agent” are not treated as proof of a complete deployment, rollback, computer-use, OEM, or audit contract. A branded URL is not white-label licensing. A repository license field is not legal clearance for the complete dependency and asset tree.

This report is not an exhaustive census of the internet. It is a dated, source-backed programme with a coverage ledger and explicit next sweeps. Absence claims are therefore scoped to the reviewed source set.

## Coverage ledger — current programme state

| Dimension | Covered in this pass | Source class / date range | Confidence | Notable gap |
|---|---|---|---|---|
| Commercial conversational/full-stack builders | Lovable, v0, Bolt, Replit Agent, Base44, Manus WebDev, Convex Chef (OSS reference) | Official product/docs/API/pricing pages; observed 2026-08-26; some pages published/crawled 2025–2026 | High for narrow documented behaviors; medium for comparison | Other builders and regional/private offerings remain unsearched or only locally referenced. |
| Data-native and automation builders | Airtable Omni, Zapier Forms/Interfaces, Retool AppGen, ToolJet, NocoBase AI Builder, Appsmith core | Official product/docs/pricing pages; observed 2026-08-26; current product rename and plan gates captured | High for narrow product/plan claims; medium for cross-product comparison | Budibase, Make, Pipedream, Relay, Lindy, and live enterprise/self-host tests remain open. |
| Visual/design-to-code | Onlook, screenshot-to-code, Builder.io, Visily, Uizard, Locofy; local image→token gap evidence | Official docs/pricing plus local source review; observed 2026-08-26 | Medium-high for documented product fragments; low for market absence | Anima, Figma First Draft, Galileo, image-to-token vendors, and visual fidelity benchmarks remain open. |
| API/MCP / embedding / OEM | Lovable Build with URL/MCP, v0 Platform API, Bolt MCP, Zapier MCP, Base44 SDK/CLI | Official API/docs pages; observed 2026-08-26; no credentials | High for documented surfaces; low for commercial entitlement | OEM, white-label, tenant isolation, rate limits, per-call API pricing, procurement terms remain unverified. |
| Sandboxes and execution | E2B, Modal Sandboxes, Daytona Sandboxes, StackBlitz WebContainers, Replit; public `e2b-dev/desktop`, `bolt.diy`, Chef references | Official/vendor docs plus public repos; 2025–2026 sources | Medium-high for documented runtime/price fragments; medium for security comparison | E2B current pricing/SLAs/security, Firecracker/gVisor/Cloudflare isolated execution, and an apples-to-apples cost/latency test remain open. |
| OSS app-builder candidates | Existing 389-record sweep; direct pinned checks for selected repos; bounded GitHub search on 2026-08-26 | GitHub API, raw pinned `LICENSE`, README, commits; 2025–2026 repo state | High for checked repo/license facts; low for census completeness | Candidate checkout/build/browser/asset scans were not run under this read-only lane. |
| Governance, recovery, evidence | Replit, Base44, Lovable, v0, Bolt, Airtable, Manus; local Block Contract | First-party docs plus local design/checkpoint packets; observed 2026-08-26 | Medium-high for product boundaries; low for Action Model implementation | No authenticated runtime, enterprise DPA/procurement review, or end-to-end audit/recovery proof. |
| Agent operation / API-less GUI | Browserbase, Stagehand, Skyvern, Playwright references plus Manus/CopilotKit/Onlook local packets | Official docs/pricing/repo pages; observed 2026-08-26 | Medium for browser-loop existence; low for governed moat | Browser Use, computer-use model evaluations, approval/idempotency/recovery benchmarks, and Action Model live proof remain open. |
| Workflow / agent builders | Langflow, Dify, n8n, Gumloop; Zapier and CopilotKit local/first-party packets | Official docs/pricing; observed 2026-08-26 | Medium-high for workflow/HITL/MCP fragments; low for Action Model fit | Make, Pipedream, Relay, Lindy, and a cross-product reliability/approval benchmark remain open. |
| Guide / voice / elicitation | Local P3 packet: Realtime, LiveKit, Pipecat, Vapi, Retell; no direct new commercial dossier here | Local source-linked research; 2026-08-26 | Medium for cited capability fragments | Needs product/API/pricing/latency and requirement-coverage sweep; no voice recommendation is final. |
| Economics / plan gates | Current public price/credit pages for Lovable, v0, Bolt, Replit, Base44, Manus, Zapier; Airtable plan availability | Official pricing/help pages; observed 2026-08-26 | High for displayed plan facts; medium for dynamic pricing | API billing, regional taxes, enterprise quotes, hidden caps, run-time cost, and comparable cost-per-successful-build remain open. |

### Domains and source classes searched

**Domains directly searched or opened:** `lovable.dev`, `docs.lovable.dev`, `v0.dev`, `api2.v0.dev`, `vercel.com`, `bolt.new`, `support.bolt.new`, `stackblitz.com`, `replit.com`, `docs.replit.com`, `base44.com`, `docs.base44.com`, `app.base44.com` pricing references, `manus.im`, `open.manus.ai`, `manus-api.mintlify.app`, `help.manus.im`, `support.airtable.com`, `zapier.com`, `help.zapier.com`, `docs.onlook.com`, `onlook.com`, `github.com`, `api.github.com`, and `raw.githubusercontent.com`. Local project evidence was read from the Action Model SISO workspace and was not treated as a substitute for first-party commercial evidence.

**Source classes used:** official product pages; official help/docs; official API references; official pricing/plan tables; official changelogs; first-party GitHub repositories; pinned commit metadata; raw license text; local source-review/checkpoint packets that preserve URL/date/proof boundaries.

**Date range:** product and pricing behavior was observed on **2026-08-26**. Some source pages were published or crawled earlier (mostly 2025–2026) and are retained only as current documentation at the observation date. Public-repository metadata and license files were checked at pinned default-branch commits observed on 2026-08-26; repository commit history can be older. No historical product time series was assembled.

**Sources deliberately excluded from core claims:** community posts, Reddit, testimonials, unsourced market-size claims, unauthenticated screenshots, search snippets without an opened primary page, and the local project’s own strategic assertions when no primary source was attached. They may be useful leads for follow-on work, not evidence upgrades.

### Confidence interpretation

- **High:** exact product behavior, plan gate, API field, or license text is directly stated in a reviewed primary source.
- **Medium:** several primary sources agree on a product pattern, but no live session, cross-product benchmark, or complete boundary was tested.
- **Low:** market-wide absence, moat, competitiveness, “best,” interoperability, or any claim involving unauthenticated enterprise/OEM behavior.

## Taxonomy and missing-category map

The ecosystem is broader than “AI app builders.” The following taxonomy is the programme’s coverage map; a category is listed even when it is not yet researched so that missing work is visible.

| Category | Representative systems / repos | What it supplies | Current status |
|---|---|---|---|
| 1. Conversational full-stack builders | Lovable, v0, Bolt, Replit Agent, Base44, Manus, Chef, Dyad | Intent → code/app/backend → preview/publish | Commercial core covered; OSS partial; no exhaustive census. |
| 2. Data-native / internal-tool builders | Airtable Omni, Retool, Appsmith, ToolJet, Budibase, NocoBase, Softr | Schema-first CRUD, permissions, dashboards, workflows | Airtable covered; others follow-on. |
| 3. Automation / agent workflow builders | Zapier, n8n, Make, Pipedream, Gumloop, Relay, Lindy, Dify, Flowise, Langflow | Trigger/action graphs, connectors, approvals, schedules | Zapier narrow surface covered; rest open. |
| 4. Visual editors / design-to-code | Onlook, Plasmic, Builder.io, Uizard, Visily, Locofy, Anima, Figma First Draft | DOM/code mapping, visual edits, mockup/code export | Onlook and screenshot-to-code partial; broad commercial sweep open. |
| 5. Screenshot/image → code | `abi/screenshot-to-code`, FigmaToCode, commercial visual generators | Visual reconstruction and correction loops | OSS source reviewed; whole-app adoption held; no image→token proof. |
| 6. Image/design → tokens/registry | Figma token tools, DTCG exporters, DOM exporters, internal P2 design | Semantic visual IR, tokens, registry constraints | Local sweep found no admitted raster→token candidate; private market unsearched. |
| 7. Registry / design-system assembly | shadcn/ui, v0 registries, Plasmic, Storybook, private npm, refine | Reusable components/blocks/tokens and compatible composition | Pattern covered; Actionist registry not admitted. |
| 8. Scaffolds / SaaS foundations | Horizon UI, ixartz, BoxyHQ, Refine, Appsmith, starter kits | Auth, tenancy, dashboard, billing, resource primitives | Pinned source/license review partial; no block admitted. |
| 9. Sandbox / preview / execution | E2B, Modal, Daytona, WebContainers, Replit, `e2b-dev/desktop` | Isolated build/run, iframe/live preview, filesystem | Reference evidence covered; pricing/security/runtime comparison open. |
| 10. Backend/data/auth primitives | Supabase, Convex, Firebase, Postgres/Drizzle, Prisma, Xano, Directus, PocketBase | Schema, auth, storage, realtime, functions | Actionist-owned boundary is an open dependency; direct vendor sweep open. |
| 11. Deployment / domains / white-label | Vercel, Netlify, Cloudflare, Render, Railway, Fly, vendor builder APIs | Publish, subdomains, custom domains, tenancy, OEM | Product-level deploy covered; OEM/portability unverified. |
| 12. Provenance / license / supply chain | ScanCode, ORT, FOSSA, Black Duck, GitHub license metadata, SPDX/SBOM tools | License partition, notices, dependency/asset evidence | ScanCode identified; no candidate license scan executed. |
| 13. Agent operation / browser/computer use | Browserbase, Playwright, Stagehand, Browser Use, Skyvern, Manus computer use, CopilotKit tools | Perceive/act in API-less software, approvals, retries, proof | Strategic wedge only; direct comparative sweep open. |
| 14. Guide / elicitation / voice | OpenAI Realtime, LiveKit, Pipecat, Vapi, Retell, structured interview agents | Clarify intent, narrate deltas, collect approvals | Local P3 packet only; no final choice. |
| 15. Governance / recovery / observability | Replit checkpoints, Base44 version history, Git/GitHub, Sentry, Aikido, Wiz, audit/event systems | Isolation, rollback, release approvals, security and evidence | Product fragments covered; Actionist end-to-end ledger open. |
| 16. Business model / metering / distribution | Credit/token builders, seat plans, usage billing, app stores, Actionist App Store | Unit economics, procurement, white-label economics, distribution | Public plan surfaces sampled; no cost-per-successful-build benchmark. |

### Programme gaps that must remain explicit

1. No authenticated product session or API call was used. “Documented” is not “live and reliable.”
2. No commercial contract, OEM addendum, DPA, security questionnaire, enterprise quote, or tenant-isolation test was reviewed.
3. No generated application was built, deployed, browser-tested, or rolled back in this lane.
4. No OSS candidate checkout was built or scanned for transitive dependency, asset, or generated-code license obligations.
5. No comparable benchmark measures cost, latency, successful-build rate, repair-loop count, visual fidelity, or requirement coverage across products.
6. The public Actionist surface is a demand/catalogue signal, not proof that advertised capabilities are implemented; the local platform packets record zero authenticated/live Actionist dossiers.
7. The alleged 850k/80k GitHub corpus scale and current Mini-side availability are unverified in this workspace.
8. The search is English- and web-index-biased; regional products, private offerings, behind-login capabilities, and non-indexed procurement docs are unknown.

The local project already contains a 389-record GitHub discovery sweep, but current project evidence says it is discovery metadata, not an admitted block inventory. The bounded source review currently records **0 accepted, 84 held, 1 rejected**; no candidate has yet passed the full source → license → adaptation → isolated build → smoke/visual proof → owner/rollback ladder. The Action Model corpus scale claims (~850k scraped / ~80k categorized) remain unverified because the external data plane is not mounted in this workspace.

## 1. Commercial/private builder matrix

The matrix answers the requested capability questions using only the reviewed first-party evidence. A blank or `U` cell means “not established in the reviewed sources,” not “does not exist.”

| Capability | Lovable | v0 by Vercel | Bolt | Replit Agent | Base44 | Manus WebDev | Airtable Omni | Zapier Forms / Interfaces | Onlook |
|---|---|---|---|---|---|---|---|---|---|
| **Generation** | `D`: natural-language Agent mode; Plan mode separates planning from execution; prompt, image, and web-page references can start builds. | `D`: natural-language code/UI generation; projects and chats exposed through API. | `D`: chat-to-website/app flow; production-ready templates. | `D`: Agent plans, writes, debugs, and improves apps; Plan mode is paid-gated. | `D`: prompt-to-app with Default, Discuss, and Edit modes. | `D`: agent-built web apps/sites with hosted preview and publish API. | `D`: Omni can build tables, fields, interfaces, automations, forms, and record changes. | `D`: Copilot can generate forms; current product is Forms, not a general code builder. | `D/P`: visual React/Tailwind editing plus AI code generation; not a general backend builder. |
| **Context / retrieval** | `D`: workspace/project knowledge, cross-project references, GitHub/GitLab, chat connectors/MCP, web/image inputs. | `D`: `chats.init` accepts files, repo, registry, and zip; create-chat accepts system context and attachments. | `D`: filesystem context is central to token usage; design systems from GitHub/private npm/Storybook; MCP context. | `D`: users add screenshots/files/Canvas notes; agent reads project context; connectors on paid tiers. | `P`: app/file/entity context and custom instructions; no reviewed contract for reusable provenance-aware retrieval. | `P`: research and builder context are documented; reusable scaffold/provenance retrieval not established. | `D/P`: reads permitted base/interface data and can research the web; no general repo/block registry. | `D/P`: existing Table/template starting points; no repo/context contract. | `D/P`: indexes/maps DOM to source in a React project; external corpus retrieval not established. |
| **API / MCP** | `D/P`: open-beta Build with URL API; MCP server is a research preview for managing Lovable projects; not OEM proof. | `D`: Platform API, SDK, hooks, usage/rate/billing endpoints, registry context; MCP/integration surfaces documented, but API behavior was not live-tested. | `D`: built-in/custom MCP connectors for external context/actions; no public OEM builder API found in reviewed sources. | `D/P`: connectors and AI integrations; no general public builder API/OEM contract established in reviewed sources. | `D`: CLI, JS SDK, TypeScript functions, OpenAPI custom integrations, GitHub. | `D`: `task.create` plus `website.*` API; API key required; public docs expose website lifecycle. | `P`: Omni operates inside Airtable permission boundary; no public builder API used here. | `D`: Zapier automation, Tables, Forms, and Zapier MCP; not a general generated-code API. | `P`: MCP and project/developer surfaces are listed by the public repo/readme; hosted entitlement not authenticated. |
| **Integrations** | `D`: app connectors, API integrations, GitHub/GitLab, Supabase/Lovable Cloud, MCP chat connectors. | `D/P`: Vercel ecosystem, GitHub, registries, files/repos/zips, env vars; arbitrary backend integration is generated code, not a portable contract. | `D`: databases/auth/server functions/file storage/secrets, complex third-party integrations, private npm/design systems. | `D`: connectors, databases, storage, AI integrations; plan gates apply. | `D`: auth, NoSQL, realtime, functions, connectors, OpenAPI integrations, external frontend SDK. | `D/P`: website/API/integration features and hosted WebDev; exact connector/credential boundaries need direct product testing. | `D`: Airtable base data, web research, docs, automations; third-party credentials cannot be securely stored in AI-generated elements. | `D`: Zaps, Tables, conditional logic, redirects, embeds, 7,000+ app automation positioning. | `P`: works with existing React stack/components/Tailwind/shadcn; not backend/integration coverage. |
| **Deployment** | `D`: publish/update, hosted previews, Lovable Cloud, GitHub self-hosting path; post-publish checks. | `D`: generated apps deploy to Vercel; API projects link to Vercel; vendor-coupled in reviewed evidence. | `D`: Bolt Cloud hosting, databases, domains, SSL, hosted requests. | `D`: one-click publishing, multiple publishing options, logs/analytics; usage-based costs. | `D`: hosted app, CLI/deploy, managed functions/backend, external frontend option. | `D`: `website.publish` is asynchronous; checkpoint success is not the same as live deployment. | `P`: publish/share Airtable interfaces inside Airtable; no independent deployment contract. | `D/P`: share/embed links and hosted Forms; not code deployment. | `D/P`: deploy directly from application is documented; repo/runtime boundaries need proof. |
| **Domains / branding** | `D`: default `lovable.app`, paid custom domains; Business/Enterprise branded workspace URL pattern and DNS/SSL. | `D`: `vercel.app` URL plus custom domains through Vercel; no independent white-label entitlement established. | `D`: free tier Bolt branding; Pro removes branding and adds custom domains; Enterprise governance. | `D`: Starter badge; paid tiers remove badge; custom deployment/region controls; enterprise boundaries. | `D`: `base44.app`, custom domains on Starter+; annual Builder/Pro/Elite include one-year domain. | `D/P`: hosted URL/visibility documented; custom branded/OEM boundary not established in reviewed API docs. | `P`: Airtable-hosted interfaces and permission sharing; custom deployment/white-label not established. | `D`: branding/custom colors/custom domain/access controls; current pricing gates premium form features. | `P`: repo/hosted product claims mention deployment and real code; no OEM/branding contract reviewed. |
| **Data / auth** | `D/P`: full-stack/backend/auth/Cloud/Supabase; external schema binding and provider-neutral ownership remain unclear. | `P`: files/env/project context and Vercel deployment; no portable Postgres/ORM/auth contract in reviewed API docs. | `D`: structured data, authentication, server functions, storage, secrets; provider choice is plan-gated. | `D`: built-in database and app hosting; DB rollback depends on plan; exact generated schema ownership needs testing. | `D`: managed NoSQL, built-in auth/access control, realtime, functions; backend is beta and platform-shaped. | `P`: hosted WebDev includes databases/AI/integrations; portable schema/auth ownership not established. | `D`: tables/fields/records/interfaces; Omni mirrors user permissions and only sees permitted data. | `D`: form submissions to Zapier Tables and workflow actions; not general relational/auth code generation. | `U/P`: visual React/code layer; backend/auth/schema binding not established. |
| **Testing / validation** | `P`: preview, security scan, SEO/live checks, debugging/verification; no portable required build/browser/deployment gate. | `P`: demo/status/error/usage/hooks; no universal build/browser contract gate documented. | `P`: hosted preview and runtime; no full independent contract-gate receipt in reviewed sources. | `D/P`: “review and test,” checkpoints, logs/analytics; no claim of a universal machine-enforced gate. | `P`: preview issue detection and AI repair; not a complete required test suite. | `P`: preview and publish-state polling; no automated browser/build contract suite established. | `P`: preview/edit/test entry/history for elements; no automated app release gate. | `D`: preview and test entry validate form behavior/persistence; narrow surface. | `P`: DOM/code mapping and preview; no full backend/deployment gate. |
| **Versioning / rollback** | `P`: version history/revert; official changelog warns migrations/database are not fully reverted. | `P/U`: version/latestVersion metadata and deployment concepts; no reviewed API restore endpoint. | `P`: local OSS control plane has diffs/snapshots/revert; commercial product recovery boundary not fully documented here. | `D/P`: checkpoints and rollback can restore files, Agent memory, tasks, and optional database; Pro advertises 28-day DB rollback. | `D`: prompt revert, restore/publish previous version while current draft remains open; GitHub sync changes history boundary. | `P`: checkpoints backed by git commits and list/publish lifecycle; public API publishes latest and cannot pin an older checkpoint. | `P`: element history can revert; no full interface/database rollback. | `U`: no current Forms version rollback found in reviewed help. | `P`: public repo lists branching/checkpoints; hosted semantics not authenticated. |
| **Approvals / audit** | `P`: workspace/project permissions, publish security checks, comments/history; no per-side-effect approval ledger. | `P`: privacy/team modes, hooks, usage/activity/billing telemetry; no immutable adaptation/release ledger. | `P`: team access/admin controls; Enterprise advertises SSO/audit logs; side-effect approval not established. | `P`: collaboration, permissions, budgets/alerts, checkpoints; no common external-side-effect approval contract. | `P`: Discuss mode, freeze files/entities, explicit Publish, chat/version history; no per-side-effect queue. | `P`: checkpoint IDs, publish status, visibility; no immutable end-to-end audit log. | `D/P`: user permissions bound Omni actions/data; history/permissions but no general approval queue. | `P`: access controls, test entries, Zap history elsewhere; interface audit contract not established. | `P`: source mapping and project history patterns; no approval/audit contract established. |
| **Enterprise boundary** | `D/P`: Business/Enterprise workspace controls, branded URLs, SSO/governance; OEM still unproven. | `D`: Business/Enterprise training opt-out, SAML/RBAC, support SLAs; Platform API pricing/entitlements require validation. | `D`: Enterprise custom workflows/integrations/SLAs, SSO, audit logs, governance/retention. | `D`: Enterprise SSO/SAML, privacy controls, single-tenant, region, static IP/VPC peering. | `P`: Elite plus contact for capacity/enterprise; exact tenancy/compliance boundaries not normalized. | `P`: Team SSO/opt-out/analytics documented in pricing help; enterprise API/tenancy not established. | `D/P`: plan/workspace/base permissions and admin controls; exact Omni enterprise boundary needs account review. | `D`: Enterprise advanced permissions/deployment/observability/TAM; Forms feature table has plan gates. | `P`: open-source/hosted split; no enterprise contract reviewed. |
| **Pricing / plan gates** | `D`: free daily build/cloud grants; credits cover build, hosting, and app AI; Plan mode 1 credit/message; unlimited workspace members; Enterprise volume pricing. Exact displayed subscription amounts were not captured in the reviewed page. | `D`: Free $0 with $5 monthly credits/7 messages/day; Plus $30/user; Business $100/user; Enterprise custom; model token rates published. | `D`: Free $0/300K daily + 1M monthly tokens; Pro $25; Teams $30/member; Enterprise custom; branding, domains, design-system knowledge, and governance gate by tier. | `D`: Starter free; Core $25 monthly/$20 annual; Pro $100/$95 annual; Enterprise custom; effort-based Agent billing and plan-gated Plan mode/connectors/DB rollback. | `D`: Free 25 message/100 integration credits; Starter 100/2,000; Builder 250/10,000; Pro 500/20,000; Elite configurable; private apps paid from Feb 2026. | `D`: Free 300 daily credits; Pro from $20/4,000 or $40/8,000 monthly; Team from $20/seat; WebDev hosting/database/API usage billed separately. | `D/P`: Omni available all plan types; full Omni requires AI credits; AI-generated interface build has distinct credit treatment. | `D`: Forms available all plans; Free includes 100 tasks/month; Pro from $19.99; Team $69; Enterprise custom; current plan update includes Forms/Tables/MCP. | `U/P`: open-source repo plus hosted product; current commercial price/entitlements not normalized. |

### Commercial reading by product

#### Lovable — strongest benchmark, not a licensable Actionist core

Lovable now covers more of the generic build plane than the earlier teardown allowed. Agent mode executes and verifies changes; Plan mode is a separate planning surface; GitHub is two-way; workspace/project knowledge and cross-project references provide reusable context; app/chat/API connectors and MCP are documented; Build with URL is an open-beta API that accepts prompt/image/web-page references; branded workspace URLs and custom domains support published delivery.

The important boundaries are equally clear. The Build with URL API and MCP research preview are not an OEM/white-label contract. Workspace branding is a URL/domain feature, not licensing of the builder UI, billing, tenancy, or runtime. Version history/revert does not guarantee database rollback after migrations. Lovable’s pricing page currently exposes a shared credit balance for building, hosting, and in-app AI; Plan mode is one credit/message, while Enterprise uses volume pricing. Do not transfer older exact Pro/Business dollar figures into this report without re-reading the live plan selector.

**Action Model implication:** use Lovable as the benchmark for multimodal intent, context reuse, and release UX. Do not anchor the moat on chat-to-app or embedded generation.

#### v0 — best optional buy/spike for registry-backed generation

The v0 Platform API is the clearest documented context-injection seam: initialize a chat from files, a repo, a registry, or a zip; pass system context, attachments, project instructions, environment variables, and model configuration; receive generated files, version/demo metadata, hooks, and Vercel-linked deployment state. Its design-system documentation makes the registry pattern explicit: tokens, components, blocks, dependencies, target files, Tailwind/CSS variables, and “Open in v0” transfer.

The API is not a proven Actionist boundary. The reviewed docs tie project/deployment state to Vercel, do not expose a restore-older-version endpoint, and do not establish vendor-neutral deployment, Actionist-owned auth/data safety, or OEM pricing. The public SDK is marked developer preview/beta and its GitHub API license field is `NOASSERTION`; the pinned `LICENSE` file is Apache-2.0.

**Action Model implication:** run one controlled fake ActionFi dashboard spike if API access becomes authorized. Treat it as a replaceable generator adapter, never as the registry, approval, evidence, or deployment contract.

#### Bolt — strongest hosted “all-in-one” convenience and a useful OSS control-plane reference

Bolt documents Bolt Cloud hosting, domains, databases, authentication, server functions, file storage, secrets, design-system imports, and custom MCP connectors. Its pricing page makes filesystem synchronization a major token driver, gates private npm/design-system knowledge and administration by team tier, and places SSO/audit logs/compliance/retention in Enterprise. The commercial runtime is convenient but vendor-shaped.

`bolt.diy` is more useful to Action Model as a public reference for model adapters, file locks, diffs, snapshots, and revert than as a ready-made client foundation. WebContainers are a commercial StackBlitz runtime concern; do not assume the OSS control plane grants the commercial runtime license.

#### Replit Agent — strongest documented recovery and enterprise isolation pattern

Replit documents Agent planning/building, checkpoints, rollback, effort-based billing, publishing, logs/analytics, connectors, and database rollback on higher tiers. The pricing page exposes a concrete enterprise boundary: SSO/SAML, advanced privacy, single-tenant environments, region selection, static outbound IPs, and VPC peering. This is a useful safety reference because it treats reversible state and environment separation as product primitives.

**Action Model hypothesis to test:** copy the state-machine/recovery idea, not the hosted runtime. A validation prototype should treat code, database, deployment, credentials, and external side effects as separate rollback objects.

#### Base44 — closest packaged full-stack lifecycle, with explicit mutation restraint

Base44 documents prompt-to-app generation, Default/Discuss/Edit modes, custom AI instructions, frozen files/entities, backend functions, auth/access control, realtime, integrations, CLI/SDK, GitHub, hosting, custom domains, and version publish/revert. Its billing page exposes plan-specific message/integration credits and gates private apps, domains, GitHub, model selection, and backend functions.

The permanent GitHub sync and version-history behavior are an important caution: source-control integration changes the recovery boundary; it does not automatically make all state reversible. Base44’s backend is platform-shaped and currently documented as beta in the reviewed billing page.

#### Manus — closest competitor for the combined agent/build/publish story

Manus documents agent-built websites/web apps, hosted URLs, checkpoints, `website.status`, `website.listCheckpoints`, `website.publish`, visibility, and separate WebDev usage billing for live hosting, databases, AI, and API calls. Its API distinguishes a successful generated checkpoint from a live deployment. It also documents that the public lifecycle publishes the latest checkpoint and does not provide an older-checkpoint pin in the reviewed API.

**Action Model implication:** benchmark the whole “describe → build → preview → publish” loop against Manus, but do not infer safe rollback or arbitrary GUI operation from its website API.

#### Airtable Omni — data-native builder, not a portable code builder

Omni is available across Airtable plan types and can create/update base structures, interfaces, automations, records, fields, and forms. It mirrors the requesting user’s permissions and data visibility. This is strong evidence for plan-before-mutation and permission-aware data operations. Its limits are equally relevant: reviewed docs say AI-generated elements cannot securely store third-party credentials, are limited to Airtable’s runtime/data model, and do not become a general reusable scaffold registry.

#### Zapier Forms / Interfaces — narrow intake-to-automation atom

The current product page says Interfaces is now Zapier Forms. It can start from blank, an existing Table, or Copilot; collect data; preview/test an entry; store submissions in Tables; trigger Zaps; and publish via share/embed. Current pricing includes Forms, Tables, and Zapier MCP in the main plans, while conditional logic, branding, custom domains, access, and scale remain plan-dependent. This is useful prior art for intake and automation, not a full-stack builder.

#### Onlook — visual code layer, not the pilot runtime

Onlook’s docs describe live React/Tailwind DOM editing, AI code assistance, theme systems, code integration, Figma-to-React, and deployment. Its public repository is Apache-2.0 at the observed commit. It is a promising design/code reference for the optional image/design leg, but the reviewed source does not establish backend, auth, schema binding, approval, or enterprise deployment contracts.

## Commercial findings — not a conclusion

The commercial market has converged on a common build-plane sequence:

```text
natural-language intent → context/project state → generated or assembled app
→ preview → publish → some history/usage/permissions
```

The unbundled seams that matter to Action Model are:

```text
provenance/license admission → typed block contract → safe schema/auth boundary
→ isolated/reversible execution → independent deployment proof
→ authority/approval for external side effects → durable evidence ledger
```

That second sequence is the leading candidate for a pilot boundary. Whether it is narrower, safer, or commercially defensible must be tested through the follow-on sweeps and an authorized proof, not assumed from this desk research.

## 1.5 Bounded expansion sweeps — findings, not conclusions

The first matrix focused on direct Lovable-like builders. The following bounded sweeps broaden the taxonomy so adjacent categories cannot be mistaken for missing competitors.

### Data-native and internal-tool builders

| Product | Primary evidence found | Plan / licensing boundary | Action Model relevance |
|---|---|---|---|
| [Retool AppGen](https://retool.com/ai-app-generation) | Retool positions AppGen as AI app generation on the customer’s data/cloud with governance, moving between natural language, visual editing, and code. | [Pricing](https://retool.com/pricing) shows Free, Team ($10/builder + $5/internal user), Business ($50/$15), and Enterprise custom. Business adds audit logging, rich permissions, portals/embedded apps, custom branding; Enterprise adds SSO/SCIM, source control, self-host/air-gapped options, platform APIs, and full white-labeling. | Strong proof that enterprise buyers pay for governed data/app lifecycle, not only code generation. Retool is a commercial reference, not a portable Actionist foundation. |
| [ToolJet](https://docs.tooljet.ai/docs/getting-started/platform-overview/) | Official docs describe natural-language AI app generation that scaffolds UI, queries, and component bindings; 80+ data sources; agents/workflows; RBAC, SSO, audit logs, multi-environment, GitSync/CI/CD, self-hosting. | [Pricing](https://tooljet.ai/pricing?tab=cloud) exposes AI credits and enterprise/self-host/air-gapped boundaries. The public repo is AGPL-3.0, so the OSS map holds it for embedding. | Closest data-native analogue to a governed Actionist client-tool plane, but its product is a hosted/self-hosted internal-tool platform, not proof of API-less GUI operation. |
| [NocoBase AI Builder](https://docs.nocobase.com/ai-builder) | Natural-language AI can cover data modeling, UI, workflows, permissions, and go-live; no-code Portal stores configuration in DB, while AI Portal writes React source that can be committed to Git. Security/audit is explicitly surfaced. | [Commercial licensing](https://www.nocobase.com/en/commercial) says client-facing configuration rights can require a commercial license; repo has custom and Apache files. | Valuable reference for separating configuration output from committed source; adoption remains a legal/edition hold, not a recommendation. |
| [Appsmith](https://docs.appsmith.com/) | Open-source internal-app builder connects databases/APIs, uses widgets/queries/JavaScript, supports Git branches and rollback, deploy/share, and self-hosting. | Public repo is Apache-2.0 at the observed commit, but this pass did not establish current Appsmith AI-generation behavior or enterprise plan terms from a first-party AI dossier. | Foundation/reference for data-bound dashboards and Git lifecycle; not evidence of a general prompt-to-app or Actionist authority contract. |

**Finding:** data-native platforms make schema, permissions, deployment environments, and audit more explicit than generic vibe builders. They reduce Action Model’s need to invent CRUD primitives, but they do not by themselves solve cross-application GUI operation, provenance admission, or external-side-effect proof.

### Visual design and design-to-code

| Product | Primary evidence found | Plan / gate | Boundary relevant to Action Model |
|---|---|---|---|
| [Builder.io Fusion / Visual Copilot](https://site.builder.io/m/design-to-code) | Figma-to-framework code, existing component connection, in-context iteration; [pricing](https://www.builder.io/pricing) documents Git providers, Figma/VS Code, MCP, design-system intelligence and enterprise roles/reviews. | Free $0, Pro $24/user, Team $40/user, Enterprise custom; agent credits and design-system/enterprise controls are plan-scoped. | Strong registry/design-system reference; output is design/code, not proof of schema/auth/rollback or image→approved-token contract. |
| [Visily](https://www.visily.ai/ai-design/) | Text, screenshots, and diagrams become editable UI; [code export](https://support.visily.ai/portal/en/kb/articles/how-to-export-designs-to-code) supports React/Vue/HTML and warns output is a development starting point. | [Pricing](https://www.visily.ai/pricing/) shows Starter, Pro $11/editor/month annual, Business $29/editor/month annual; code export is paid and AI layout consumes 15 credits/screen. | Direct evidence for a visual front-end round; no backend, registry provenance, or token approval contract. |
| [Uizard](https://uizard.io/pricing/) | Text, screenshot, wireframe and AI design review flows produce editable prototypes; Pro includes React/CSS developer handoff. | Free; Pro $12/month annual; Business $39/month; Enterprise custom with design-system setup and data SLA. | Good reference for breadth design rounds, not a generated-app runtime. |
| [Locofy](https://www.dev.locofy.ai/docs/) | Figma/Penpot plugin, CLI, import-from-URL, and MCP flows convert designs to frontend code. | Pricing and enterprise terms were not normalized in this pass. | Shows that design-to-code/MCP is already a commercial category; it does not establish raster→token→Actionist registry assembly. |

**Finding:** commercial design tools close “reference → editable design” or “Figma → frontend code.” They do not, in the reviewed sources, prove the stronger chain **raster → confidence-bearing token IR → human token approval → fixed registry IDs → build/screenshot diff**. The gap remains a hypothesis to test, not a universal market-absence claim.

### Sandbox and execution infrastructure

| Provider / runtime | Primary evidence found | Cost / boundary | Action Model reading |
|---|---|---|---|
| [Modal Sandboxes](https://modal.com/products/sandboxes) | Isolated containers, custom images, snapshots/volumes, sub-second scheduling, high concurrency; docs expose per-second CPU/memory billing. | Usage priced; [resource docs](https://modal.com/docs/guide/sandbox-resources) say billing is based on requested or actual resource use, whichever is higher. | Strong candidate for rented execution, subject to security/tenant/egress and cost tests. |
| [Daytona Sandboxes](https://www.daytona.io/docs/sandboxes) | Programmatic isolated containers/VMs with dedicated kernel/filesystem/network, snapshots/fork/pause, persistent state, SDK/API/CLI. | [Pricing/product page](https://www.daytona.io/) publishes compute/memory/storage rates and customer-managed-compute/enterprise claims. | Strong candidate for stateful execution; claims still need authorized smoke/security/rollback proof. |
| [E2B](https://e2b.dev/) | Official product page positions open-source, full-isolation environments for agents; local project packets use E2B as the open-lovable/sandbox reference. | Current exact usage/enterprise terms were not normalized in this pass. | Keep as an adapter option, not a built runtime. |
| [StackBlitz WebContainers](https://developer.stackblitz.com/platform/api/webcontainer-api) | Browser-based Node.js runtime executes applications/OS commands inside the browser tab; enterprise page exposes private registries and access controls. | [Terms](https://stackblitz.com/terms-of-service) say commercial WebContainer API use is subject to commercial plans and a session limitation in the reviewed terms. | Excellent low-latency preview reference, but the runtime is proprietary/commercial; `bolt.diy` MIT does not grant it. |

**Finding:** the sandbox market is mature enough to rent. The unresolved pilot question is not whether a sandbox exists; it is which isolation, state, network, storage, cost, and evidence boundary Action Model can defend.

### Browser / computer-use operation

| Product | Primary evidence found | Plan / boundary | Action Model relevance |
|---|---|---|---|
| [Browserbase](https://docs.browserbase.com/welcome/getting-started) + [Stagehand](https://stagehand.dev/) | Cloud browser sessions, direct Playwright/Puppeteer/Selenium control, cloud functions, AI-native Stagehand; [MCP server](https://docs.browserbase.com/integrations/mcp/introduction) gives MCP clients a browser. | [Pricing](https://www.browserbase.com/pricing) shows free/developer/startup/custom tiers, concurrency/browser hours, retention, and Enterprise private-cloud/BAA/DPA/SSO options. | A credible browser-operation substrate, but sessions/tools are not an approval, idempotency, rollback, or post-action evidence contract. |
| [Skyvern](https://www.skyvern.com/docs/developers/getting-started/introduction) | Screenshot → DOM → LLM reasoning → action → goal-check loop; workflows, credentials, browser sessions, artifacts; API/SDK, MCP, Docker/self-host. | Hosted/self-host split and enterprise features are documented; exact current pricing was not normalized here. | Closest direct reference for API-less GUI operation, but its product claims do not prove Actionist’s authority/recovery model. |
| Playwright / deterministic browser tests | Used in local project’s proof design and many commercial docs; not itself a computer-use agent. | Open-source/runtime choices require separate version/license review. | Keep deterministic browser smoke as the validation layer below any vision/LLM action layer. |

**Finding:** “browser automation exists” is not a moat. The potential differentiation is a governed composition that binds a built client tool to a browser operation, asks for approval at side-effect boundaries, verifies the result, and stores evidence. That is still an inference requiring a direct Action Model proof.

### Workflow and agent builders

| Product | Primary evidence found | Boundary |
|---|---|---|
| [Langflow](https://docs.langflow.org/) | Open-source visual AI workflow builder with API, templates, agents, tools, MCP server/client, playground, component-level testing; [HITL](https://docs.langflow.org/components-agents) can require approval for tool calls. | Builds/serves AI flows, not a client app scaffold or general GUI-operation/release ledger. |
| [Dify](https://www.dify.ai/workflows) | Visual workflows combine model calls, retrieval, tools, code, branching, triggers, human review; cloud/self-host/enterprise; [pricing](https://www.dify.ai/pricing) exposes community, cloud, and enterprise boundaries. | Strong workflow/evidence reference; source and enterprise licenses need path-level review before reuse. |
| [n8n](https://n8n.io/pricing/) | AI Assistant helps build workflows; cloud plans meter AI credits; self-hosted AI Assistant is preview/BYOK. | Automation/workflow builder, not generated full-stack client app. |
| [Gumloop agents](https://docs.gumloop.com/core-concepts/agents) | Agents use tools/workflows; rule proposals require explicit Accept/Reject approval; credits meter model/tool/workflow use. | Strong approval UX reference; proprietary, and no evidence here of source-backed app assembly. |

**Finding:** workflow builders validate the need for typed tools, approval cards, rules, logs, and credit accounting. They are adjacent components for the Actionist authority plane, not substitutes for a provenance-gated app builder.

## 2. OSS/GitHub map — pinned candidates, none admitted

### Method and disposition rule

The local Action Model sweep remains the broad discovery layer: **389 merged records** across builders, CRUD/admin shells, registries, sandboxes, schema tools, generative UI, deployment, and license-related lanes. This report adds a bounded direct-source pass: canonical repository, observed branch/commit, root license text where available, README/source behavior, and an explicit adoption mode. GitHub stars and search rank are discovery signals only.

No candidate below is an admitted Actionist block. “Foundation,” “integration,” and “pattern” describe the role a candidate could play after a successful conversion; “hold” means the current evidence or license boundary is not safe for client adoption. The full Block Contract still requires a pinned source, license/provenance, adaptation log, stack/data/interface contract, isolated build, browser/screenshot proof, owner, and rollback boundary.

### Candidate map

| Class | Candidate and observed pin | Primary capability | License/provenance evidence | Proposed adoption mode | Current disposition / gap |
|---|---|---|---|---|---|
| **Foundation** | [`shadcn-ui/ui`](https://github.com/shadcn-ui/ui/tree/ee628d75dea87325735fafa7c54f5d7d7edb8774) `ee628d7` | React/Tailwind/shadcn primitives and registry-shaped component distribution. | MIT root [`LICENSE.md`](https://github.com/shadcn-ui/ui/blob/ee628d75dea87325735fafa7c54f5d7d7edb8774/LICENSE.md), copyright shadcn, read at pin. | Whole dependency or extracted registry items, with own token/notice manifest. | Strongest UI contract candidate; package-level dependencies/assets still require scan and host compatibility proof. |
| **Foundation** | [`refinedev/refine`](https://github.com/refinedev/refine/tree/779d52a20e29b0307ac0df04d135beba434370dc) `779d52a` | Declarative resources, CRUD, routing, data providers, and deterministic admin primitives. | MIT root [`LICENSE`](https://github.com/refinedev/refine/blob/779d52a20e29b0307ac0df04d135beba434370dc/LICENSE), read at pin. | Dependency or adapter/reference; use resource contracts, not whole generated app. | Good fit for schema-bound dashboards; no Actionist host build or provider-neutral contract has been proven. |
| **Foundation** | [`ixartz/Next-js-Boilerplate`](https://github.com/ixartz/Next-js-Boilerplate/tree/51dfd23b21ac4ef8da56f8cc9a2f4b78f5df0deb) `51dfd23` | Active Next.js/React/Drizzle host baseline with tests and typed app structure. | MIT root [`LICENSE`](https://github.com/ixartz/Next-js-Boilerplate/blob/51dfd23b21ac4ef8da56f8cc9a2f4b78f5df0deb/LICENSE), read at pin. | Extract or fork only after stack, dependency, asset, and tenant-boundary review. | Promising host baseline; not an admitted scaffold and no build/smoke receipt was produced in this lane. |
| **Foundation** | [`boxyhq/saas-starter-kit`](https://github.com/boxyhq/saas-starter-kit/tree/abc9b686823cbfb4973c79bc36fea37a3244be6c) `abc9b68` | Apache-2.0 Next.js SaaS shell with auth/teams/billing-oriented primitives. | Apache-2.0 root [`LICENSE`](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/LICENSE), read at pin. | Extract/reference selected shell primitives; do not import its provider assumptions wholesale. | Candidate for tenancy/auth patterns; third-party assets/dependencies and Actionist data ownership remain open. |
| **Integration** | [`vercel/v0-sdk`](https://github.com/vercel/v0-sdk/tree/276e1c235d14416f36649da6f97ae4719e7c1e31) `276e1c2` | SDK/control-plane reference for v0 Platform API, registry-seeded chats, hooks, and generated files. | GitHub API reported `NOASSERTION`; pinned [`LICENSE`](https://github.com/vercel/v0-sdk/blob/276e1c235d14416f36649da6f97ae4719e7c1e31/LICENSE) is Apache-2.0; README labels SDK developer preview/beta. | Optional external adapter / spike, never the Actionist registry or release ledger. | API key, Vercel coupling, per-call API pricing, rollback, and OEM boundaries are unverified; no live call made. |
| **Integration** | [`e2b-dev/desktop`](https://github.com/e2b-dev/desktop/tree/30b8dfc327995c455dad59416d61d4f327b12fd8) `30b8dfc` | Sandboxed desktop/computer-use adjacency and isolated execution management. | Apache-2.0 root [`LICENSE`](https://github.com/e2b-dev/desktop/blob/30b8dfc327995c455dad59416d61d4f327b12fd8), read at pin. | Sidecar/reference behind a sandbox adapter. | Interesting runtime adjacency; service security, cost, tenant isolation, and browser smoke were not tested. |
| **Integration** | [`CopilotKit/CopilotKit`](https://github.com/CopilotKit/CopilotKit/tree/7998cf2c327fd2cd5d4210a521d08fead72499ce) `7998cf2` | Frontend copilot, typed tools/state, human-in-the-loop and agent event surfaces. | MIT root [`LICENSE`](https://github.com/CopilotKit/CopilotKit/blob/7998cf2c327fd2cd5d4210a521d08fead72499ce/LICENSE), read at pin. | Sidecar for guide/approval UI or tool event contracts. | Does not supply the builder, sandbox, provenance, or external GUI recovery loop; version/API compatibility needs proof. |
| **Integration** | [`aboutcode-org/scancode-toolkit`](https://github.com/aboutcode-org/scancode-toolkit/tree/3c532f0fa89113c4aae0301664f17293562aeedb) `3c532f0` (`develop`) | License, copyright, dependency, package, and SBOM detection. | Official README says overall Apache-2.0 with CC-BY reference datasets and multiple secondary licenses; see [`README`](https://github.com/aboutcode-org/scancode-toolkit/blob/develop/README.rst), [`apache-2.0.LICENSE`](https://github.com/aboutcode-org/scancode-toolkit/blob/develop/apache-2.0.LICENSE), and [`NOTICE`](https://github.com/aboutcode-org/scancode-toolkit/blob/develop/NOTICE). | Sidecar CI/admission gate; retain raw reports. | Correct fit for the evidence plane; not installed or run here, and its own third-party data boundary must be preserved. |
| **Integration** | [`abi/screenshot-to-code`](https://github.com/abi/screenshot-to-code/tree/d026163f586dfa8c5c10d28c36edd59a9d3b0e88) `d026163` | Screenshot/mockup/Figma/recording to code plus headless preview and correction/version test shapes. | MIT root [`LICENSE`](https://github.com/abi/screenshot-to-code/blob/d026163f586dfa8c5c10d28c36edd59a9d3b0e88/LICENSE), read at pin. | Reimplement/extract only the visual leg; do not vendor whole app. | Existing Action Model admission packet is `HELD`: stack/token/adaptation/build/smoke/visual gates absent. |
| **Integration** | [`onlook-dev/onlook`](https://github.com/onlook-dev/onlook/tree/423e2e924366419e418ee049093872d535eea41a) `423e2e9` | DOM-to-source visual React/Tailwind editing, theme system, AI code assistance. | Apache-2.0 root [`LICENSE.md`](https://github.com/onlook-dev/onlook/blob/423e2e924366419e418ee049093872d535eea41a/LICENSE.md), read at pin. | Sidecar/reference for optional design/code loop. | Hosted/runtime, backend/auth, and enterprise/approval boundaries not authenticated; not a full builder foundation. |
| **Integration** | [`Automata-Labs-team/code-sandbox-mcp`](https://github.com/Automata-Labs-team/code-sandbox-mcp/tree/0f0b8d607f5097afe43782bb6d223156ee49dc49) `0f0b8d6` | Docker-backed MCP sandbox with file transfer, command execution, and logs. | MIT root [`LICENSE`](https://github.com/Automata-Labs-team/code-sandbox-mcp/blob/0f0b8d607f5097afe43782bb6d223156ee49dc49/LICENSE), read at pin. | Reference/sidecar only, behind security and resource-policy review. | Untrusted-code isolation, image provenance, network policy, cleanup, and multi-tenant proof are missing. |
| **Pattern** | [`stackblitz-labs/bolt.diy`](https://github.com/stackblitz-labs/bolt.diy/tree/2e254ac19a696394030601bc602f54945b12bfc4) `2e254ac` | Model adapter layer, file locks, diffs, snapshots/revert, workspace UX. | MIT root [`LICENSE`](https://github.com/stackblitz-labs/bolt.diy/blob/2e254ac19a696394030601bc602f54945b12bfc4/LICENSE), read at pin. | Reference/reimplement selected control-plane patterns. | WebContainers commercial licensing and runtime/security boundaries remain separate; no whole-repo adoption. |
| **Pattern** | [`get-convex/chef`](https://github.com/get-convex/chef/tree/d8a6cb6a6f226133fdc63ed5f59d04cacb9b06cc) `d8a6cb6` | Backend-aware AI app builder: database, auth, uploads, realtime, workflows, template, and agent loop. | Apache-2.0 root [`LICENSE`](https://github.com/get-convex/chef/blob/d8a6cb6a6f226133fdc63ed5f59d04cacb9b06cc/LICENSE), read at pin. | Reference/reimplement agent loop; only use Convex as an explicit alternative boundary. | README says local production forks must replace Convex-specific authentication/control-plane setup; not a drop-in Postgres/Actionist foundation. |
| **Pattern** | [`somdipto/open-lovable`](https://github.com/somdipto/open-lovable/tree/7d23bd98e1da39fc9c624af1887c6cc5ed9dc6c3) `7d23bd9` | Lovable-like web cloning with E2B sandboxed execution and targeted discovery. | MIT root [`LICENSE`](https://github.com/somdipto/open-lovable/blob/7d23bd98e1da39fc9c624af1887c6cc5ed9dc6c3/LICENSE), read at pin. | Reference/reimplement sandbox and targeted-file patterns. | Last observed push is 2025-09-04; web-cloning focus, provider keys, and no Actionist contract; no build proof here. |
| **Pattern** | [`tastyeffectco/sandboxd`](https://github.com/tastyeffectco/sandboxd/tree/eaad3c5c0dcb5a50e8d131c5d12b58d6d3bbd006) `eaad3c5` | Self-hosted prompt-to-running-app service with isolated sandboxes and preview URLs. | MIT root [`LICENSE`](https://github.com/tastyeffectco/sandboxd/blob/eaad3c5c0dcb5a50e8d131c5d12b58d6d3bbd006/LICENSE); README advertises Docker/self-hosting. | Bounded validation target for self-owned execution, not an adoption decision. | Newly surfaced; no direct build, security, tenancy, model-cost, or rollback proof in this lane. |
| **Pattern** | [`AndyY-Q/launchkit-ai`](https://github.com/AndyY-Q/launchkit-ai/tree/b44605271d852326f89990d0e9d01359c2d8382b) `b446052` | Chat → agent → E2B sandbox → preview URL, with tRPC, Inngest, Clerk, Prisma/Postgres and usage limits. | MIT root [`LICENSE`](https://github.com/AndyY-Q/launchkit-ai/blob/b44605271d852326f89990d0e9d01359c2d8382b/LICENSE), README/source claims read at pin. | Reference for orchestration and usage accounting; reimplement behind Actionist interfaces. | Provider-bound to OpenAI/Clerk/Prisma/E2B; demo/build receipts and external-side-effect controls not verified. |
| **Pattern** | [`giselles-ai/giselle`](https://github.com/giselles-ai/giselle/tree/56ff5f1c86b42e4ed9250010b9cb9ebc0520c8fd) `56ff5f1` | Open-source agentic workflow studio and human–AI collaboration surfaces. | Apache-2.0 root [`LICENSE`](https://github.com/giselles-ai/giselle/blob/56ff5f1c86b42e4ed9250010b9cb9ebc0520c8fd/LICENSE), README/license read at pin. | Pattern/reference for workflow composition and approval UX. | Not a demonstrated app-builder or Actionist GUI-operation runtime; no direct build/proof/adaptation review. |
| **Hold** | [`horizon-ui/shadcn-nextjs-boilerplate`](https://github.com/horizon-ui/shadcn-nextjs-boilerplate/tree/efe90c62391f2d3247a5a5f0712adcad0515aba7) `efe90c6` | Dashboard shell with shadcn, Next.js, Tailwind, chart/table, Supabase wiring. | MIT root [`LICENSE`](https://github.com/horizon-ui/shadcn-nextjs-boilerplate/blob/efe90c62391f2d3247a5a5f0712adcad0515aba7/LICENSE), read at pin; README links third-party Horizon UI terms. | Extract candidate read-only dashboard only. | Current project’s best dashboard candidate but `pilot_selected_not_admitted`: no isolated build, browser smoke, screenshot, dependency/asset scan, owner, or rollback receipt. |
| **Hold** | [`dyad-sh/dyad`](https://github.com/dyad-sh/dyad/tree/ccbd8199102a8c9650e9fd2c091d1a004ce12680) `ccbd819` | Local-first open-source AI app builder, BYOK providers, browser/eval harness, sandbox/workspace. | Root [`LICENSE`](https://github.com/dyad-sh/dyad/blob/ccbd8199102a8c9650e9fd2c091d1a004ce12680/LICENSE) says content outside `src/pro` is Apache-2.0; `src/pro` has a separate FSL boundary. | Reference core patterns only after path-level license partition. | Whole-repo adoption is held; mixed-license boundary, dependencies, build, and host fit need review. |
| **Hold** | [`NocoBase/NocoBase`](https://github.com/nocobase/nocobase/tree/eab849eba0aef24638dfa070f27361a6d0b3723d) `eab849e` | Data/low-code platform, plugins, permissions, workflows, version/release patterns. | [`LICENSE.txt`](https://github.com/nocobase/nocobase/blob/eab849eba0aef24638dfa070f27361a6d0b3723d/LICENSE.txt) is a custom NocoBase agreement; repo also includes [`LICENSE-APACHE.txt`](https://github.com/nocobase/nocobase/blob/eab849eba0aef24638dfa070f27361a6d0b3723d/LICENSE-APACHE.txt). | Reference/integration only pending legal/edition review. | Mixed/custom licensing and commercial plugins make whole or silent code reuse unsafe; live capability/edition boundary untested. |
| **Hold** | [`plasmicapp/plasmic`](https://github.com/plasmicapp/plasmic/tree/51a74801a1cc2da3c21f2ce89fa3ce1362eeeaf0) `51a7480` | Visual builder, component registry, codegen/loader and design-system integration. | Root [`LICENSE.md`](https://github.com/plasmicapp/plasmic/blob/51a74801a1cc2da3c21f2ce89fa3ce1362eeeaf0/LICENSE.md) is MIT for part of the tree; [`LICENSE.platform.md`](https://github.com/plasmicapp/plasmic/blob/51a74801a1cc2da3c21f2ce89fa3ce1362eeeaf0/LICENSE.platform.md) is AGPL-3.0. | Reference for registry/visual concepts; no whole-platform embedding. | Mixed MIT/AGPL boundary and hosted service terms require path-level legal review. |
| **Hold** | [`tooljet/tooljet`](https://github.com/ToolJet/ToolJet/tree/cd65e3c6313bbab3117127c167110ddabfd77d8a) `cd65e3c` | Internal-tool builder and workflows. | Root [`LICENSE`](https://github.com/ToolJet/ToolJet/blob/cd65e3c6313bbab3117127c167110ddabfd77d8a/LICENSE) is AGPL-3.0. | Reference only unless a separate commercial license is obtained. | Reject-by-default for client embedding under current policy; not part of pilot foundation. |
| **Hold** | [`beam-cloud/lovable-clone`](https://github.com/beam-cloud/lovable-clone/tree/6920cef25ea8dc912e11adc299acc8c77bd44a2d) `6920cef` | BAML/FastMCP/Beam Lovable-style clone; close to an MCP-native surface. | No root license file observed in the pinned root listing; GitHub API returned `NOASSERTION`. | Study/reference only; no code lifting. | Default copyright / provenance hold, plus no build/adaptation/tenant proof. |
| **Hold** | [`bernaferrari/FigmaToCode`](https://github.com/bernaferrari/FigmaToCode/tree/f5c4831d5de6cffc19a73fe2823c56b4bb551281) `f5c4831` | Figma-to-code conversion reference. | GitHub’s repository page labels it GPL-3.0; a direct root license-file fetch did not return text in this pass, so the exact file-level receipt remains open. | Reference only. | Copyleft and structured-Figma-vs-raster mismatch; does not solve image→token→registry. |

### OSS findings

1. **The reusable parts are composable, but not yet admitted.** `shadcn/ui` gives a permissive component/registry seam; `refine` gives typed resource/data-provider primitives; an MIT/Apache host baseline can provide the shell; E2B/Modal/Daytona-like services provide isolation; ScanCode can gate provenance. This is a candidate composition, not a successful build.
2. **The public full-builder repos are mostly references, not turnkey foundations.** `bolt.diy`, Chef, sandboxd, LaunchKit AI, Dyad, and open-lovable each expose useful control-plane or sandbox patterns, but bind to different model providers, auth/data layers, or licensing boundaries.
3. **License status is not binary.** Dyad, NocoBase, Plasmic, ScanCode, and the Action Model harvest all contain meaningful path-level or third-party obligations. “MIT/Apache on GitHub” does not clear dependencies, bundled assets, generated output, or neighboring directories.
4. **The strongest open gap remains composition under governance.** The sweep finds individual builders, registries, visual editors, sandboxes, license tools, and workflow agents; it does not find a source-cleared, Actionist-shaped contract that composes them with fixed Postgres/auth boundaries, approvals, deployment proof, and reversible external side effects.
5. **The new search results do not justify exhaustiveness.** `gh search repos` is ranking- and query-sensitive; long phrases are ANDed and miss candidates. New repos such as sandboxd and Chef were admitted to the map as leads, not as proof of quality or market coverage.

### Bounded OSS follow-on sweeps

| Sweep | Bounded question | Sources / queries | Output gate |
|---|---|---|---|
| OSS-1: scaffold admission | Can one MIT/Apache dashboard shell become a real Block Contract? | Pin ixartz, Horizon, shadcn, refine; inspect package/asset tree; run source build in an isolated checkout only when authorized. | One complete provenance/license/adaptation/build/browser/screenshot/owner/rollback receipt, or a held verdict. |
| OSS-2: builder control plane | Which open builder supplies the safest phase/checkpoint/repair state machine? | bolt.diy, Chef, Dyad, sandboxd, LaunchKit; read agent loop, snapshots, tests, provider boundaries. | Comparison of state transitions and a reimplementation boundary; no code vendoring by default. |
| OSS-3: execution plane | What is the minimum safe sandbox for untrusted generated code? | E2B, Modal, Daytona, WebContainers, code-sandbox-mcp, Firecracker/gVisor references. | Cost/security/tenant/network/cleanup matrix plus a non-production smoke plan. |
| OSS-4: design plane | Can screenshot/image input produce approved tokens and registry IDs? | screenshot-to-code, Onlook, Plasmic, FigmaToCode, token exporters, DOM exporters; direct vendor docs for Uizard/Visily/Builder.io/Locofy/Anima. | Evidence of image → token IR → human approval → registry assembly → screenshot diff; otherwise preserve gap. |
| OSS-5: license/provenance | Can the corpus be partitioned into source-cleared evidence before retrieval? | ScanCode, ScanCode.io, ORT, SPDX, ClearlyDefined, FOSSA/Black Duck public docs; one small fixture tree. | Machine-readable license/SBOM receipt with unlicensed/mixed/GPL quarantine; no corpus-wide claim. |
| OSS-6: agent-operation | What actually closes the API-less GUI loop? | Browserbase, Browser Use, Stagehand, Skyvern, Playwright, Manus computer-use docs, CopilotKit tools. | Typed action/authority/idempotency/approval/recovery/evidence comparison; no “browser automation = moat” shortcut. |
| OSS-7: workflow/voice guide | Does a guide improve spec completeness enough to justify voice? | OpenAI Realtime, LiveKit, Pipecat, Vapi, Retell, n8n/Dify/Langflow/Gumloop docs and pricing. | 20-session requirement-coverage and approval-correction benchmark proposal; no near-term voice choice. |

## Commercial source index

All URLs below are first-party pages or first-party source repositories reviewed or used as anchors on 2026-08-26. They are intentionally kept in the artifact so the report remains auditable if a product page changes.

### Lovable

- [Agent mode](https://docs.lovable.dev/features/agent-mode)
- [Pricing](https://lovable.dev/pricing)
- [Build with URL API](https://docs.lovable.dev/integrations/build-with-url)
- [Lovable API / MCP overview](https://docs.lovable.dev/integrations/lovable-api)
- [Integrations](https://docs.lovable.dev/integrations/introduction)
- [GitHub sync](https://docs.lovable.dev/integrations/github)
- [Cross-project referencing](https://docs.lovable.dev/features/cross-project-referencing)
- [Workspace admin settings / knowledge / connectors](https://docs.lovable.dev/features/workspace-admin-settings)
- [Publish](https://docs.lovable.dev/features/publish)
- [Custom domains](https://docs.lovable.dev/features/custom-domain)
- [Branded workspace URLs](https://docs.lovable.dev/features/branded-workspace-urls)
- [Debugging / version history guidance](https://docs.lovable.dev/prompting/prompting-debugging)
- [Changelog](https://docs.lovable.dev/changelog?page=1)

### v0

- [v0 overview](https://vercel.com/docs/v0)
- [v0 pricing](https://api2.v0.dev/pricing)
- [v0 Platform API overview / initialization and chat reference](https://v0.app/docs/api/v1)
- [v0 API quickstart](https://v0.app/docs/api/v1/quickstart)
- [v0 API documentation](https://api.v0.dev/docs)
- [Design systems / registries](https://v0.dev/docs/design-systems)
- [v0 API hooks, limits, and billing reference](https://api.v0.dev/docs)
- [v0 API usage report](https://v0.app/docs/api/v1/reference/reports/get-usage)
- [Custom domains](https://v0.dev/docs/custom-domains)
- [v0 SDK](https://github.com/vercel/v0-sdk)
- [v0 SDK pinned Apache-2.0 license](https://github.com/vercel/v0-sdk/blob/276e1c235d14416f36649da6f97ae4719e7c1e31/LICENSE)

### Bolt

- [Bolt get started / cloud, domains, database, integrations](https://bolt.new/get-started)
- [Bolt pricing and plan gates](https://bolt.new/pricing)
- [Bolt MCP](https://support.bolt.new/building/using-bolt/connect-mcp)
- [bolt.diy repository](https://github.com/stackblitz-labs/bolt.diy)
- [bolt.diy pinned MIT license](https://github.com/stackblitz-labs/bolt.diy/blob/2e254ac19a696394030601bc602f54945b12bfc4/LICENSE)

### Replit

- [Build with Agent](https://docs.replit.com/learn/build-with-agent)
- [AI billing / plan feature gates](https://docs.replit.com/billing/ai-billing)
- [Pricing / enterprise](https://replit.com/pricing)
- [Publishing costs](https://docs.replit.com/billing/deployment-pricing)
- [Replit Core and Agent features](https://docs.replit.com/billing/plans/replit-core)

### Base44

- [Quick start](https://docs.base44.com/Getting-Started/Quick-start-guide)
- [AI chat modes, controls, version history](https://docs.base44.com/Building-your-app/AI-chat-modes)
- [Developer tools / backend / SDK / integrations](https://docs.base44.com/documentation/building-your-app/developer-tools)
- [Billing and plan gates](https://docs.base44.com/Account-and-billing/Billing-and-plans)
- [Custom domains](https://docs.base44.com/Setting-up-your-app/Setting-up-your-custom-domain)
- [Troubleshooting and explicit revert boundary](https://docs.base44.com/Community-and-support/Troubleshooting)

### Manus

- [Website API](https://open.manus.ai/docs/v2/website)
- [Checkpoint API](https://manus-api.mintlify.app/v2/website.listCheckpoints)
- [WebDev usage billing](https://help.manus.im/en/articles/13885710-how-does-webdev-billing-work)
- [Membership pricing](https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus)

### Airtable and Zapier

- [Airtable Omni](https://support.airtable.com/articles/1744327578-using-omni-ai-in-airtable)
- [Airtable Omni permissions/context](https://support.airtable.com/docs/using-airtable-cobuilder)
- [Airtable interface sharing/version boundary](https://support.airtable.com/articles/4255096925-managing-and-sharing-airtable-interfaces)
- [Zapier Forms creation](https://help.zapier.com/hc/en-us/articles/15927500577037-Create-forms-in-Zapier-Forms)
- [Zapier Forms quick start](https://help.zapier.com/hc/en-us/articles/27310207159053-Zapier-Forms-quick-start-guide)
- [Zapier plan pricing](https://zapier.com/pricing?hsLang=en)
- [Zapier plan update: Forms, Tables, MCP included](https://help.zapier.com/hc/en-us/articles/39645433045773-Zapier-plan-updates-Tables-Interfaces-and-MCP-now-included)

### Onlook

- [Onlook docs](https://docs.onlook.com/)
- [Onlook for React](https://www.onlook.com/for/react)
- [Onlook feature overview](https://docs.onlook.com/getting-started/core-features)
- [Onlook pinned Apache-2.0 repository](https://github.com/onlook-dev/onlook/blob/423e2e924366419e418ee049093872d535eea41a/LICENSE.md)

### Bounded expansion sources

- [Retool AppGen](https://retool.com/ai-app-generation) and [Retool pricing](https://retool.com/pricing)
- [ToolJet platform overview](https://docs.tooljet.ai/docs/getting-started/platform-overview/), [ToolJet AI](https://docs.tooljet.ai/docs/setup/tooljet-ai/overview/), and [ToolJet pricing](https://tooljet.ai/pricing?tab=cloud)
- [NocoBase AI Builder](https://docs.nocobase.com/ai-builder) and [NocoBase commercial licensing](https://www.nocobase.com/en/commercial)
- [Appsmith docs](https://docs.appsmith.com/)
- [Builder.io design-to-code](https://site.builder.io/m/design-to-code) and [Builder pricing](https://www.builder.io/pricing)
- [Visily AI design](https://www.visily.ai/ai-design/), [Visily code export](https://support.visily.ai/portal/en/kb/articles/how-to-export-designs-to-code), and [Visily pricing](https://www.visily.ai/pricing/)
- [Uizard pricing and AI design gates](https://uizard.io/pricing/)
- [Locofy docs](https://www.dev.locofy.ai/docs/)
- [Modal sandboxes](https://modal.com/products/sandboxes) and [Modal sandbox pricing/resources](https://modal.com/docs/guide/sandbox-resources)
- [Daytona sandboxes](https://www.daytona.io/docs/sandboxes) and [Daytona pricing](https://www.daytona.io/)
- [E2B](https://e2b.dev/)
- [StackBlitz WebContainer API](https://developer.stackblitz.com/platform/api/webcontainer-api), [enterprise runtime](https://stackblitz.com/enterprise), and [commercial terms](https://stackblitz.com/terms-of-service)
- [Browserbase overview](https://docs.browserbase.com/welcome/getting-started), [Browserbase MCP](https://docs.browserbase.com/integrations/mcp/introduction), and [Browserbase pricing](https://www.browserbase.com/pricing)
- [Stagehand](https://stagehand.dev/)
- [Skyvern introduction](https://www.skyvern.com/docs/developers/getting-started/introduction), [core concepts](https://www.skyvern.com/docs/developers/getting-started/core-concepts), and [Skyvern GitHub](https://github.com/Skyvern-AI/skyvern)
- [Langflow](https://docs.langflow.org/), [Langflow agents/HITL](https://docs.langflow.org/components-agents), and [Langflow MCP](https://docs.langflow.org/mcp-server)
- [Dify workflows](https://www.dify.ai/workflows) and [Dify pricing](https://www.dify.ai/pricing)
- [n8n pricing / AI Assistant](https://n8n.io/pricing/)
- [Gumloop agents and approval rules](https://docs.gumloop.com/core-concepts/agents)

## Local evidence reused

- `research/lovable-teardown-2026-08-26.md` — prior Lovable teardown, corrected here where the first-party API review narrowed earlier “no API” language.
- `research/builder-architecture-intel-2026-08-25.md` — registry, recovery, sandbox, and assembly-over-generation synthesis.
- `research/actionmodel-long-run/outputs/platforms/checkpoint-001.md` — Manus, Airtable Omni, Zapier Forms, Base44, Onlook dossiers.
- `research/actionmodel-long-run/outputs/platforms/checkpoint-006.md` — v0 Platform API and registry review.
- `research/actionmodel-long-run/outputs/platforms/checkpoint-007.md` — Lovable API, branding, and rollback reconciliation.
- `research/actionmodel-long-run/outputs/platforms/checkpoint-008.md` — adversarial authority, recovery, and evidence comparison.
- `design/BUILDER-DESIGN.md` — Action Model pipeline and phase-1 shape.
- `design/BLOCK-FRAMEWORK.md` and `design/block-contract.schema.json` — block contract and admission boundary.

## Provisional pilot stack candidate — validation target, not a conclusion

This is the requested Action Model pilot stack expressed as a falsifiable candidate. It is not a build authorization, a procurement decision, or a claim that the stack is best. Each row names the evidence needed before committing.

| Layer | Candidate for a smallest coherent pilot | Why it is in the candidate | Required validation / fallback |
|---|---|---|---|
| Guide and spec | Actionist-owned `BuildSession` state machine: free chat → structured spec → assumptions → explicit approval; cheap MiniMax-class model by default. | Local design packets consistently identify elicitation and approval as the missing control plane; commercial builders document plan/discuss modes but not an Actionist contract. | Confirm Actionist UI/channel/API boundary and measure spec completeness on a golden prompt set. Voice remains optional; chat-first is a hypothesis. |
| Host and UI contract | Next.js/React/Tailwind/shadcn host; `shadcn/ui` primitives + `refine` resource contracts; `ixartz/Next-js-Boilerplate` as a host candidate. | Permissive pinned sources and deterministic resource/UI primitives reduce free-form foundation generation. | Run OSS-1: dependency/asset scan, isolated build, route smoke, screenshot, and tenant/rollback receipt. Keep Horizon as a held read-only dashboard extraction candidate, not the foundation by assumption. |
| Generation / assembly | Actionist-owned typed assembler and Block Contract v0; optional v0 Platform API adapter for a bounded fake dashboard spike. | Registry/file/repo context is proven in v0; source-cleared admission, token slots, and evidence are the proposed Actionist boundary. | If v0 API access is authorized, compare time-to-first-working-preview against the own assembler; verify API pricing, quotas, Vercel coupling, and older-version recovery. |
| Retrieval / evidence | Conditional retrieval from a quarantined, provenance-indexed sourcebank; top-k evidence packs, no raw corpus copy. ScanCode sidecar at admission. | Existing P1 research says retrieval should be gated and queried for contracts/APIs, not superficial similarity; the local corpus is not yet mounted/verified. | Run OSS-5 on a small fixture; measure abstention, license reports, dependency/asset coverage, and retrieval usefulness. Do not expose the 389 discovery records directly to generation. |
| Execution / preview | One rented sandbox adapter; Modal is the high-concurrency candidate, Daytona the stateful-snapshot alternative, E2B the existing reference option. | Lovable’s own documented sandbox history and current infrastructure market support renting; no need to own a fleet in the candidate. | Run OSS-3: isolation, network/secret policy, cold start, cost/session, cleanup, artifact persistence, and cross-tenant checks. Select one only after evidence. |
| Data and auth | Actionist-owned data/auth boundary; first slice is a read-only fixture/read-model adapter with no block-owned migrations or LLM-authored RLS. Block Contract dialect remains Postgres + Drizzle until Actionist confirms its real contract. | This removes the generic builder’s schema/auth liability and makes the first proof reversible. | Obtain the canonical Actionist API/schema/deployment contract; test no-write behavior, session binding, and data ownership. If unknown, keep the pilot fixture-only. |
| Validation | `npm run build`/typecheck, unit checks, Playwright route/browser smoke, screenshot diff, deployment smoke, and a machine-readable verdict; repair capped at 2–4 rounds. | Commercial products expose pieces of this loop; the local design requires the complete gate and separately tests preview vs deployment. | Do not count a preview as a deployment pass. Record failing checks and stop after the repair budget. |
| Versioning / release | Git commit per approved phase plus host manifest; code, DB, deployment, credentials, and external side effects are separate rollback objects. Target Action Model subdomains only after DNS/tenant contract is confirmed. | Replit/Base44/Manus show partial recovery patterns; Lovable and v0 show why version history is not full state rollback. | Prove rollback to the last green commit and removal of a block route without touching client data. Vercel may be a deployment adapter for a spike, not the ownership boundary. |
| Browser operation | Existing Action Model Browserbase direction as a candidate substrate, with deterministic Playwright below Stagehand; Skyvern as a bounded alternative for workflow experiments. | Browserbase/Stagehand/Skyvern document real browser control, APIs/MCP, and workflow primitives; none proves Action Model’s authority/evidence loop. | Run OSS-6: typed actions, approval before side effects, idempotency key, post-action verification, retry/recovery, artifact/audit receipt. |
| Approval / audit | Host-owned approval cards and append-only `BuildSession`/action ledger; reuse Actionist authority/logging only after its private contract is confirmed. | Airtable/Gumloop/Langflow/Replit validate fragments of permission/approval; the cross-product ledger is the open seam. | Demonstrate deny, approve, retry, and rollback paths with a non-sensitive fixture workflow before any client-facing side effect. |
| Design input (P1/P2) | Optional reference/design round from Visily, Builder.io, Uizard, or internal image generation; compile to a confidence-bearing token IR and fixed registry IDs. | Commercial design tools cover editable UI/code but not the complete raster→token→registry contract; this keeps image design out of the P0 critical path. | Prove token approval and screenshot diff; if not, ship a code-first read-only dashboard pilot and preserve the image leg as research. |

### Candidate success criteria

Before this stack becomes a recommendation, the programme should produce evidence that one bounded dashboard request can:

1. yield a structured spec with assumptions and an explicit approval;
2. select a pinned, source-cleared scaffold/block set;
3. assemble and build in an isolated sandbox using the intended cheap-model budget;
4. pass route/browser/screenshot and separately tested deployment gates;
5. show no data or external side effect before approval;
6. publish to a known tenant/subdomain and roll back to the previous green manifest; and
7. emit a durable evidence packet containing source, commit, license, adaptation, prompts/spec, model, tests, screenshots, approval, deployment, and rollback state.

Those are acceptance criteria for a future validation run, not results claimed by this report.

### Defensible moat candidate

| Candidate moat | Evidence status | What would falsify or strengthen it |
|---|---|---|
| Source-cleared, versioned scaffold/block library that turns a large repo corpus into admissible, typed, reusable evidence | Supported design hypothesis; no admitted block yet | Falsified if a competitor or internal alternative provides the same provenance/adaptation/proof ledger at lower cost; strengthened by one admitted block and retrieval eval. |
| Guide agent that elicits implicit requirements and converts approved visual direction into token/registry contracts | Research-supported opportunity; no Actionist benchmark | Falsified if generic prompts match requirement coverage/approval correction at equal cost; strengthened by a 20-session golden-prompt benchmark. |
| Build + operate API-less software + prove side effects with authority, idempotency, recovery, and audit | Strongest strategic inference from the category split; Actionist live capability unverified | Falsified if a reviewed incumbent offers the same cross-application governed loop or if Actionist cannot demonstrate reliable proof; strengthened by one safe browser workflow tied to a generated client tool. |

**Not a moat by itself:** chat-to-app, generic code generation, a custom domain, an MCP connector, a sandbox vendor, a shadcn registry, or a large unverified repository count.

## Status and next milestone

- **Commercial matrix:** v1 complete for the reviewed direct builders; expansion sweeps added Retool, ToolJet, NocoBase, Appsmith, Builder.io, Visily, Uizard, Locofy, Modal, Daytona, StackBlitz, Browserbase, Stagehand, Skyvern, Langflow, Dify, n8n, and Gumloop as bounded primary-source findings.
- **Coverage ledger:** v2 records searched domains, source classes, date range, confidence, taxonomy, unknowns, and bounded follow-on sweeps. It explicitly does not claim exhaustiveness.
- **OSS map:** v1 complete for pinned candidates and license/readme evidence; all candidates remain unadmitted, with foundation/integration/pattern/hold classifications.
- **Provisional pilot stack:** v1 drafted as a validation target, not a conclusion or build authorization.
- **Next evidence gates:** OSS-1 scaffold admission, OSS-3 execution comparison, OSS-5 license fixture, OSS-6 browser authority proof, and canonical Actionist API/data/deployment contract.
