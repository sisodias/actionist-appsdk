# Action Model Builder — company feature dossiers, Wave 2

**Run:** `actionmodel-builder-research-2026-08-26`  
**Parent phase:** tranche 1 verified; long-run matrix active  
**Wave:** `matrix-wave-2-industry-dimension-deepening`  
**Lane:** `RCH-COMPANIES-W2`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Mode:** research and ideation only; no vendor login, private contract, client data, product implementation, repository copying, or block admission  
**Status:** complete for the company-dossier lane; the parent 17,000-slot matrix remains active and incomplete

## Executive result

This packet deepens the verified 67-product-surface census into a reusable feature dossier. The 67-surface index is preserved as the canonical input; it is not re-counted as 67 companies and the 31-row first-pass baseline is not rewritten. Thirty-four high-reuse surfaces receive a field-level dossier, while the remaining 33 surfaces remain in the canonical index with their first-party source packet and explicit priority/unknown boundary.

The evidence does not support one “builder” category. It separates six contracts:

1. prompt/code generation (`Lovable`, `v0`, `Replit`, `Blink`, `Base44`);
2. data-native and governed internal apps (`Retool`, `Superblocks`, `AppSheet`, `Power Apps`);
3. design-to-code and visual assembly (`Figma Make`, `Builder.io`, `WeWeb`);
4. asynchronous coding and agent runtimes (`Cursor`, `Claude Code web`, `Devin`, `Jules`);
5. workflow and authority planes (`Make`, `Pipedream`, `Lindy`, `Workato`, `n8n`, `Dify`); and
6. browser/execution substrates (`Browserbase`, `Browser Use`, `UiPath`, `Cloudflare Browser Run`, `CodeSandbox`, `Modal`, `Ona`).

The most reusable evidence is compositional rather than vendor-specific: prompt/context, source-of-truth data, typed integrations, UI assembly, execution isolation, human approval, audit, and recovery are usually owned by different products. “Export,” “self-hosted,” “audit,” and “AI agent” are therefore recorded as narrow claims with gates—not as proof of portable deployment, safe side effects, or Actionist capability.

## Evidence and status contract

Every dossier uses the following boundary:

- `E` — the named first-party page, documentation section, pricing page, API reference, or lifecycle notice was directly inspected on the observation date.
- `D` — a first-party page documents the claim; direct inspection of the page is evidence that the claim exists, not independent authentication that the behavior works.
- `I` — a comparison or prioritization inferred from multiple documented fields; never presented as a vendor fact.
- `U` — not found, gated, private, contract-only, region-limited, or not established by the reviewed source set.

Each field is written as `class • date • reason • source`. “Candidate,” “reference,” “hold,” and “unknown” are research dispositions only. No row means admitted, safe to copy, license-cleared, deployed, or live in Actionist.

## Immutable input and canonical 67-surface index

The canonical input is the verified 67-surface census:

- rows 1–31: [company-landscape.md](/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/outputs/company-landscape.md), immutable first pass;
- rows 32–67: [company-census-expansion.md](/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/outputs/company-census-expansion.md), verified tranche-1 delta;
- the tranche has 67 product surfaces, approximately 64 parent organization families after explicit overlap handling, and 95 unique first-party URLs.

`P0` means a field-level Wave 2 dossier is included below. `P1` means the surface remains in the canonical index and source register but is queued for a later deep dive or is retained as an explicit boundary/negative case. The priority label is not a quality ranking.

| ID | Surface / parent family | Family tags | Priority | Wave 2 status / one-line reason | Source anchor |
|---:|---|---|---|---|---|
| 1 | Lovable | P2A, AGT, GOV | P0 | Build/Plan, hosting, ownership, credits, and verification make it the primary prompt-to-app comparator. | Baseline row 1; direct URLs in source register |
| 2 | v0 / Vercel | P2A, DTC, REG | P0 | Prompt-to-UI, design system, registry, API, and deployment boundaries are high-reuse comparison fields. | Baseline row 2 |
| 3 | Bolt.new / StackBlitz | P2A, AGT, EXE | P0 | Browser-first generation and publishing contrast with source/export and runtime questions. | Baseline row 3 |
| 4 | Replit Agent | P2A, AGT, EXE, GOV | P0 | Agent, checkpoints, storage, auth, deployment, and usage meter form a complete builder contract. | Baseline row 4 |
| 5 | Base44 | P2A, INT, AGT | P0 | Prompt-to-app plus developer tools and billing expose portability and ownership questions. | Baseline row 5 |
| 6 | Manus WebDev | P2A, AGT, EXE | P1 | Website API/checkpoints are useful but current entitlement and runtime details are gated. | Baseline row 6 |
| 7 | Airtable Omni/Cobuilder | INT, WF, GOV | P1 | Data-native AI and interfaces are relevant, but the runtime is strongly Airtable-shaped. | Baseline row 7 |
| 8 | Zapier Forms/Tables/Interfaces/MCP | WF, INT, REG | P1 | Workflow and integration surface matters; product transition and export semantics need a separate pass. | Baseline row 8 |
| 9 | Onlook | DTC, AGT, REG | P1 | Open-source visual React/Tailwind editing is a useful source/ownership comparator. | Baseline row 9 |
| 10 | Retool AppGen/apps/workflows | INT, WF, GOV | P0 | Governed internal apps, portals, workflows, and enterprise deployment are a high-reuse reference. | Baseline row 10 |
| 11 | ToolJet | INT, WF, GOV | P1 | Open-core/internal-tool boundary is important; current pricing and deployment need deeper validation. | Baseline row 11 |
| 12 | NocoBase | INT, REG, GOV | P1 | Self-hosted/open-core data model and AI builder remain a useful portability edge case. | Baseline row 12 |
| 13 | Appsmith | INT, REG, GOV | P1 | Open-source internal-app baseline; source/hosting model is distinct from hosted builders. | Baseline row 13 |
| 14 | Builder.io Fusion/Visual Copilot | DTC, AGT, REG | P0 | Design-to-code, visual editing, code ownership, and CMS integration are high-reuse fields. | Baseline row 14 |
| 15 | Visily | DTC, P2A | P1 | AI design and developer handoff are useful, but generated-code depth is not yet a top comparison. | Baseline row 15 |
| 16 | Uizard | DTC, P2A | P1 | Prototype and handoff surface; keep distinct from code-first builders. | Baseline row 16 |
| 17 | Locofy | DTC, REG, AGT | P1 | Figma/Penpot, CLI, and MCP make it a strong later adapter candidate. | Baseline row 17 |
| 18 | Modal Sandboxes | EXE, GOV | P0 | Isolated execution and programmatic sandbox control are a reusable substrate. | Baseline row 18 |
| 19 | Daytona Sandboxes | EXE, AGT | P1 | Open execution substrate; current tenancy and evidence contract need a dedicated pass. | Baseline row 19 |
| 20 | E2B | EXE, AGT | P1 | Agent sandbox reference with strong relevance to generated-code execution. | Baseline row 20 |
| 21 | Browserbase / Stagehand | CUSE, AGT, EXE | P0 | Hosted browser/CDP, MCP, sessions, and extraction form a high-reuse computer-use substrate. | Baseline row 21 |
| 22 | Skyvern | CUSE, AGT, WF | P1 | Browser workflows and computer use are relevant, but authority/recovery evidence remains thin. | Baseline row 22 |
| 23 | Langflow | WF, AGT, REG | P0 | Visual AI workflow, agents, MCP, and self-hosting are direct workflow composition comparators. | Baseline row 23 |
| 24 | Dify | WF, AGT, GOV, REG | P0 | Workflows, retrieval, agents, human review, and self-host/open-source posture are high-reuse. | Baseline row 24 |
| 25 | n8n | WF, AGT, REG | P0 | Self-hosted workflow and AI execution model offers a portability/control comparator. | Baseline row 25 |
| 26 | Gumloop | WF, AGT, GOV | P1 | Agents, tools, and approvals are relevant; public export/tenancy evidence is incomplete. | Baseline row 26 |
| 27 | Bubble | P2A, INT, DTC | P0 | Mature visual runtime and AI builder expose the strongest hosted portability contrast. | Baseline row 27 |
| 28 | Google AI Studio/Firebase Studio/Antigravity | P2A, AGT, EXE | P1 | Retain as a Google family baseline; do not merge with AppSheet or Jules. | Baseline row 28 |
| 29 | Cursor Cloud Agent | AGT, EXE, GOV | P0 | Cloud agent, browser tools, API, security, and repository handoff are high-reuse. | Baseline row 29 |
| 30 | Claude Code on the web | AGT, EXE, GOV | P0 | Asynchronous repository agent and cloud execution/security boundary are a key comparator. | Baseline row 30 |
| 31 | GitHub Copilot cloud agent | AGT, GOV, REG | P1 | Repository-native cloud agent is retained as a baseline; detailed GitHub lane owns repo evidence. | Baseline row 31 |
| 32 | Softgen | P2A, INT, AGT | P1 | Credit/model-driven builder; export, self-host, and API boundaries remain insufficiently explicit. | [pricing](https://new.softgen.ai/pricing), [home](https://softgen.ai/) |
| 33 | Databutton | P2A, INT, AGT | P0 | Python/npm data-app builder with deployment, code export, checkpoints, and compute meter. | [home](https://databutton.com/), [FAQ](https://docs.databutton.com/help-and-faq) |
| 34 | Blink | P2A, INT, AGT, GOV | P0 | Full-stack web/mobile generation, auth, payments, code download, and external deployment claims. | [home](https://blink.new/), [pricing](https://blink.new/pricing) |
| 35 | Anything / Create.xyz | P2A, DTC, AGT, GOV | P1 | Web/mobile conversational builder with versioning and code export; backend completeness remains open. | [overview](https://www.create.xyz/docs/builder/overview), [FAQ](https://www.create.xyz/docs/faq) |
| 36 | WeWeb | P2A, INT, DTC, REG, GOV | P0 | Strongest public frontend export/self-host claim in the tranche. | [AI apps](https://www.weweb.io/solutions/ai-apps), [docs](https://docs.weweb.io/) |
| 37 | Glide / GlideOS | INT, P2A, GOV, REG | P1 | AI/data-native app and enterprise governance; source/runtime exit remains unknown. | [business pricing](https://www.glideapps.com/pricing?version=businesses) |
| 38 | Superblocks | INT, WF, GOV, REG | P0 | AI internal apps with RBAC, SSO/SCIM, audit, environments, self-host, versioning, and deployment. | [platform](https://www.superblocks.com/platform), [docs](https://docs.superblocks.com/getting-started/what-is-superblocks) |
| 39 | Google AppSheet Gemini | INT, P2A, WF, GOV | P0 | AI schema/view/action generation with mature identity, connectors, and plan gates. | [Gemini](https://support.google.com/appsheet/answer/16106353?hl=en), [pricing](https://about.appsheet.com/pricing/) |
| 40 | Microsoft Power Apps/Copilot | INT, P2A, WF, GOV | P0 | Dataverse, Copilot, environments, connectors, licensing, and solution lifecycle. | [pricing](https://www.microsoft.com/en-us/power-platform/products/power-apps/pricing/), [licensing FAQ](https://learn.microsoft.com/en-us/power-platform/admin/powerapps-flow-licensing-faq) |
| 41 | Salesforce Agentforce/Lightning | INT, P2A, WF, GOV, REG | P1 | CRM-native agent/app surface; pricing, entitlement, and portable export are contract-sensitive. | [Agentforce pricing](https://www.salesforce.com/agentforce/pricing/) |
| 42 | ServiceNow App Engine/Now Assist | INT, P2A, WF, GOV | P1 | Mature enterprise app/workflow governance; deployment and export are contract-shaped. | [App Engine pricing](https://www.servicenow.com/uk/products/now-platform-app-engine/pricing.html) |
| 43 | Mendix | INT, P2A, WF, GOV, EXE | P1 | Enterprise low-code/private deployment reference; source and ISV portability require contract review. | [pricing](https://www.mendix.com/pricing/), [AI](https://www.mendix.com/platform/ai/) |
| 44 | Figma Make | DTC, P2A, AGT, REG | P0 | Prompt-to-prototype, editable code, backend integration limits, publishing, and design systems. | [design-to-code](https://www.figma.com/solutions/design-to-code/), [backend integration](https://help.figma.com/hc/en-us/articles/34162517434007-Manage-backend-integration-for-an-organization) |
| 45 | Plasmic | DTC, REG, INT | P1 | Visual builder, codegen, headless CMS, and source availability; keep separate from Figma. | [home](https://www.plasmic.app/), [studio](https://plasmic.plasmic.run/) |
| 46 | Framer | DTC, P2A | P1 | AI website agents and canvas; export and runtime boundary need freshness review. | [AI](https://www.framer.com/ai/), [pricing](https://www.framer.com/pricing/) |
| 47 | Anima | DTC, AGT, REG | P1 | Design/code generation API and SDK; useful later for source-map/provenance comparison. | [pricing](https://www.animaapp.com/pricing), [API](https://docs.animaapp.com/docs/anima-api) |
| 48 | Devin Desktop / former Windsurf | AGT, EXE, GOV | P0 | Local coding-agent surface and rebrand/continuity boundary. | [desktop](https://devin.ai/desktop), [docs](https://docs.devin.ai/) |
| 49 | Devin Cloud | AGT, EXE, GOV | P0 | Asynchronous cloud software engineer with usage/account/enterprise gates. | [docs](https://docs.devin.ai/admin/billing), [pricing context](https://cognition.com/blog/new-self-serve-plans-for-devin) |
| 50 | Augment Code | AGT, EXE, GOV | P1 | Context engine and agent workflow; public enterprise and pricing details are useful but partially gated. | [pricing](https://www.augmentcode.com/pricing), [home](https://www.augmentcode.com/) |
| 51 | Google Jules | AGT, EXE, GOV | P0 | Public-beta async coding agent with fresh VMs, GitHub, task/concurrency limits, and account gate. | [limits](https://jules.google/docs/usage-limits), [FAQ](https://jules.google/docs/faq/) |
| 52 | Amazon Q Developer | AGT, GOV, EXE | P1 | Enterprise coding/transformation, IAM, privacy, and usage boundary; AWS deployment is not one export contract. | [pricing](https://aws.amazon.com/q/developer/pricing/), [build](https://aws.amazon.com/q/developer/build/) |
| 53 | Make | WF, AGT, GOV, REG | P0 | Visual automation, AI agents, MCP, credit meter, and connector marketplace. | [pricing](https://www.make.com/en/pricing), [AI agents](https://www.make.com/en/ai-agents) |
| 54 | Pipedream | WF, AGT, REG, GOV | P0 | Code-first workflow, Connect SDK, MCP, external-user model, and action-based billing. | [pricing](https://pipedream.com/docs/pricing), [home](https://pipedream.com/) |
| 55 | Lindy | AGT, WF, CUSE, GOV | P0 | AI teammates, computer use, MCP, approvals, persistent context, and credit stop behavior. | [pricing](https://www.lindy.ai/pricing), [home](https://www.lindy.ai/) |
| 56 | Relay.app | WF, GOV | P1 | Human-in-the-loop pattern and an explicit shutdown/exit case. | [shutdown notice](https://relay.app/), [AI steps](https://docs.relay.app/ai/ai-steps) |
| 57 | Workato | WF, AGT, GOV, REG | P0 | Enterprise integration, Agent Registry, MCP, usage credits, and governance. | [agentic docs](https://docs.workato.com/agentic/agentic.html), [pricing](https://docs.workato.com/en/pricing/self-service/self-service) |
| 58 | Automation Anywhere | WF, AGT, CUSE, GOV | P1 | Enterprise RPA/agent governance and credential/deployment boundary. | [AI](https://www.automationanywhere.com/ai), [licensing](https://docs.automationanywhere.com/bundle/enterprise-v2019/page/license-ai-agents.html) |
| 59 | Creatio | INT, WF, GOV, P2A | P1 | Composable CRM and AI Studio; strong vertical reference, contract-sensitive portability. | [pricing](https://www.creatio.com/products/pricing?products%5B0%5D=sales&products%5B1%5D=marketing&products%5B2%5D=service) |
| 60 | Browser Use | CUSE, AGT, GOV | P0 | Hosted browser/CDP, skills, sessions, plans, on-prem/BAA/retention options. | [pricing](https://browser-use.com/pricing), [home](https://browser-use.com/) |
| 61 | MultiOn | CUSE, AGT | P1 | Public browser-action concept with limited current commercial/authority evidence. | [docs](https://docs.multion.ai/welcome), [home](https://www.multion.ai/) |
| 62 | UiPath | CUSE, WF, GOV, EXE | P0 | Mature agentic RPA with own-premise, credentials, HITL, CI/CD, and plan boundaries. | [pricing](https://www.uipath.com/pricing), [agent licensing](https://docs.uipath.com/agents/automation-cloud/latest/user-guide/licensing) |
| 63 | Apify | CUSE, WF, EXE, REG | P1 | Actor/store marketplace and usage-based execution; provenance/admission remain separate. | [pricing](https://apify.com/pricing), [monetize](https://docs.apify.com/actors/publishing/monetize) |
| 64 | Cloudflare Browser Run | CUSE, EXE, GOV | P0 | Edge browser/CDP runtime, session reuse, limits, and browser-hour pricing. | [docs](https://developers.cloudflare.com/browser-run/), [pricing](https://developers.cloudflare.com/browser-run/pricing/) |
| 65 | CodeSandbox SDK/VM sandboxes | EXE, AGT, GOV | P0 | Programmatic browser/VM execution, private sandboxes, concurrency, and metered compute. | [pricing](https://codesandbox.io/pricing), [home](https://codesandbox.io/) |
| 66 | Codeanywhere | EXE, AGT, GOV | P1 | Cloud IDE and AI coding runtime with workspace/token/hour quotas. | [pricing](https://codeanywhere.com/pricing), [billing](https://codeanywhere.com/docs/billing/subscription/) |
| 67 | Ona / former Gitpod | AGT, EXE, GOV | P0 | Agent runtime with cloud/self-hosted/VPC, audit, SDK/API, MCP, and rebrand continuity risk. | [pricing](https://ona.com/pricing), [rebrand](https://ona.com/stories/gitpod-is-now-ona) |

## Grouping without hiding distinct products

| Product family | Surfaces retained as distinct | What the family comparison is for |
|---|---|---|
| Prompt-to-app/full-stack | Lovable, v0, Bolt.new, Replit, Base44, Bubble, Databutton, Blink, Anything/Create, WeWeb, AppSheet, Power Apps | Compare intent capture, generated artifact, data/auth, deployment, and exit—not UI polish alone. |
| Governed internal/data-native apps | Airtable, Retool, ToolJet, NocoBase, Appsmith, GlideOS, Superblocks, AppSheet, Power Apps, Salesforce, ServiceNow, Mendix, Creatio | Compare source-of-truth, identity, environments, audit, connectors, and vendor-shaped data/runtime. |
| Design-to-code/visual | v0, Onlook, Builder.io, Visily, Uizard, Locofy, Figma Make, Plasmic, Framer, Anima | Compare design tokens, code fidelity, component registries, backend integration, and handoff. |
| Coding agents | Replit Agent, Cursor, Claude Code web, GitHub Copilot cloud agent, Devin Desktop, Devin Cloud, Augment, Jules, Amazon Q, Ona | Compare context, isolated execution, branch/PR handoff, verification, usage, and authority. |
| Workflow/agent orchestration | Zapier, Langflow, Dify, n8n, Gumloop, Make, Pipedream, Lindy, Relay, Workato, Automation Anywhere, Creatio | Compare tool calls, approvals, schedules, retries, credits, audit, and portability. |
| Browser/RPA | Browserbase/Stagehand, Skyvern, Browser Use, MultiOn, UiPath, Apify, Cloudflare Browser Run | Compare browser/session identity, CDP, human approval, postconditions, rate/cost, and recovery. |
| Execution substrate | Modal, Daytona, E2B, Browserbase, CodeSandbox, Codeanywhere, Ona | Compare sandbox isolation, secrets/network, artifact handling, tenancy, and compute economics. |

Family grouping is an analysis view only. A distinct product surface remains a distinct row when its execution, data, pricing, deployment, or authority contract materially differs.

## Priority feature dossier matrix

The following 34 surfaces are the Wave 2 deep-dive set. They were selected for reuse across the ten matrix dimensions, not because they are “best.” Every cell below is a narrow claim boundary. A `D` field means the vendor documents it; a separate `E` marker means the linked page was directly inspected during this pass. A blank or `U` field is intentionally unresolved.

### Prompt-to-app and governed application builders

| Surface | Prompt/context; data/auth/integration | UI/source ownership/export/import | Deployment/usage; approval/audit/recovery | OEM/exit; open question | First-party evidence inspected |
|---|---|---|---|---|---|
| **Lovable** (`P2A AGT GOV`) | `D/E`: Build mode reads project context, applies coordinated frontend/backend/config changes, can fetch docs/assets, and exposes task/tool progress. `D/E`: connections, auth, Cloud backend, APIs, secrets, and workspace access are documented. | `D/E`: user owns code/data/output claim; Git sync, diffs, file changes, and project sharing are documented. Exact backend/schema/secret/export completeness remains `U`. | `D/E`: Plan/Build modes, browser/test/edge-function verification, hosting, custom domains, shared workspace credits; credits vary by task and hosting. Undo/stop is documented; cross-system rollback is `U`. | OEM/white-label, self-hosted runtime, and complete exit bundle are `U`. **Open:** does export include backend, migrations, auth, secrets placeholders, dependencies, and deployment evidence? | [Build mode](https://docs.lovable.dev/features/agent-mode), [pricing](https://lovable.dev/pricing), [API](https://docs.lovable.dev/integrations/lovable-api), [security](https://lovable.dev/security) — `E/D`, 2026-08-26. |
| **v0 / Vercel** (`P2A DTC REG`) | `D/E`: prompt-to-interface generation, design-system context, templates/registries, and API surface are documented in the baseline packet. Data/auth/backend behavior varies by integration and is not one portable contract. | `D`: generated React/Next.js-style code and editable UI are core claims; component registry and design-system inputs are visible. Complete source/data/secret export is `U`. | `D`: Vercel deployment path and API request/usage gates are visible; enterprise/team controls are plan-sensitive. Approval, audit, and external rollback are not established by the reviewed pages. | OEM, white-label, self-host, and migration parity are `U`. **Open:** what artifact makes a v0 design-system decision reproducible outside Vercel? | [v0 docs](https://vercel.com/docs/v0), [API docs](https://v0.app/docs/api/v1), [design systems](https://v0.dev/docs/design-systems), [pricing](https://v0.dev/pricing) — `E/D`, 2026-08-26. |
| **Bolt.new / StackBlitz** (`P2A AGT EXE`) | `D/E`: browser IDE and prompt-to-app workflow use project context, packages, and browser preview; MCP integration is documented. Auth/data depend on selected stack and connectors. | `D/E`: source is visible in the browser workspace and GitHub integration/publishing are first-party paths. Complete artifact, secrets, and dependency provenance are `U`. | `D`: hosted execution and usage/credit plans are documented; browser runtime and deployment are provider-shaped. No independent task approval, audit, rollback, or tenant-boundary receipt. | White-label and portable hosted runtime are `U`. **Open:** can a generated app be exported with exact lockfile, environment contract, database migrations, and reproducible deploy? | [getting started](https://bolt.new/get-started), [pricing](https://bolt.new/pricing), [MCP](https://support.bolt.new/building/using-bolt/connect-mcp) — `E/D`, 2026-08-26. |
| **Replit Agent** (`P2A AGT EXE GOV`) | `D/E`: Agent plans, writes, explains, debugs, and improves apps; storage/databases, auth, projects/artifacts, and context docs are separate surfaces. | `D/E`: checkpoints, project artifacts, source editing, and publishing are documented. Ownership/export and dependency/secret completeness are not proven by the reviewed pages. | `D/E`: Agent usage billing, deployments, development URLs, version control, checkpoints, and security checklist are public. Checkpoints support local project recovery; external side-effect rollback and tenant isolation remain `U`. | Enterprise support is visible; OEM/white-label and complete self-host migration are `U`. **Open:** what is the minimum checkpoint/export bundle for client-owned recovery? | [Build with Agent](https://docs.replit.com/learn/build-with-agent), [pricing](https://replit.com/pricing), [version control/checkpoints](https://docs.replit.com/learn/projects-and-artifacts/version-control), [security checklist](https://docs.replit.com/learn/security-checklist) — `E/D`, 2026-08-26. |
| **Base44** (`P2A INT AGT`) | `D/E` from tranche pages: conversational app creation, AI chat modes, database/auth/API/developer tools. Exact connector and source-of-truth semantics are product-plan sensitive. | `D`: developer tools and editable application surface are documented; source/data/export completeness, generated assets, and dependency ownership are `U`. | `D`: billing/credit plans and hosted publishing are documented. Approval, audit, environment promotion, and rollback beyond product history are `U`. | OEM/white-label/self-host are `U`. **Open:** can an app leave Base44 with schema, auth, secrets, scheduled jobs, and a deployment manifest? | [quick start](https://docs.base44.com/Getting-Started/Quick-start-guide), [AI chat modes](https://docs.base44.com/Building-your-app/AI-chat-modes), [developer tools](https://docs.base44.com/documentation/building-your-app/developer-tools), [billing](https://docs.base44.com/Account-and-billing/Billing-and-plans) — `E/D`, 2026-08-26. |
| **Retool** (`INT WF GOV`) | `D/E` from baseline pages: AppGen, internal apps, portals, workflows, databases/APIs, and enterprise integrations. Auth/SSO/RBAC and data connectors are central; exact tenant boundary is plan/contract-sensitive. | `D`: visual/code extension, versioning, and app/workflow artifacts are documented; portable source/data export and white-label are `U`. | `D`: cloud/self-host/enterprise controls, audit, environments, and usage pricing are documented in the reviewed surface. Approval and rollback are product lifecycle fragments, not cross-system recovery. | OEM/embedded-app terms and client redistribution require contract evidence. **Open:** which app-definition, connector, secret placeholder, and audit artifacts can be exported? | [AI app generation](https://retool.com/ai-app-generation), [pricing](https://retool.com/pricing), [docs](https://docs.retool.com/) — `E/D`, 2026-08-26. |
| **Bubble** (`P2A INT DTC`) | `D/E`: AI app builder and visual runtime use prompts, data types, workflows, plugins, and visual editor context. Auth and data are Bubble-runtime shaped. | `D`: visual app/workflow ownership and editor are core; code export/self-host is not a general public contract. Data export/rebuild differs from runtime export. | `D`: hosted deployment and usage plan gates are public; version/history recovery is not equivalent to external rollback. Approval/audit/tenant isolation require direct plan review. | White-label and exit are `U` beyond hosted/agency patterns. **Open:** can a Bubble app be reconstructed with workflows, data schema, plugins, auth, and scheduled jobs without Bubble runtime? | [AI app builder](https://bubble.io/ai-app-builder), [pricing](https://bubble.io/pricing), [manual](https://manual.bubble.io/) — `E/D`, 2026-08-26. |
| **Databutton** (`P2A INT AGT`) | `D/E`: AI agent builds Python/npm data and AI apps; database integrations and app context are documented. | `D/E`: code export and read-only editing controls are documented; complete package/secret/database export is not proven. | `D/E`: deployment/custom-domain, checkpoints/restore, compute-hour billing, and hosted runtime are visible in product/FAQ pages. Cross-tenant recovery and external side-effect rollback are `U`. | Self-host/white-label/marketplace are `U`. **Open:** does export preserve package lock, runtime image, database migration, secret schema, and scheduled work? | [home](https://databutton.com/), [help/FAQ](https://docs.databutton.com/help-and-faq) — `E/D`, 2026-08-26. |
| **Blink** (`P2A INT AGT GOV`) | `D/E`: natural-language web/mobile apps, database, auth, APIs, payments, storage, real-time features, and AI agents are claimed. | `D`: code download and ownership claims are public; backend parity, generated assets, third-party licenses, and import completeness are `U`. | `D`: hosting, SSL/CDN, deployment and credit plans are public; recovery, approval, audit, tenancy, and rollback are not independently established. | External deploy is claimed; OEM/white-label and full backend exit remain `U`. **Open:** does “complete codebase” include migrations, auth, secrets, integrations, and reproducible deployment? | [Blink](https://blink.new/), [pricing/FAQ](https://blink.new/pricing) — `E/D`, 2026-08-26. |
| **WeWeb** (`P2A INT DTC REG GOV`) | `D/E`: AI app builder uses components, data, auth, workflows, integrations, and app context; MCP/coding-agent integration is visible. | `D/E`: Vue.js export and self-host to AWS/GCP/Azure/Cloudflare/Netlify/Vercel/on-prem are explicitly documented. This is a frontend/export claim, not proof that backend/auth/schema/secrets follow. | `D`: hosted CDN deploy, custom domains, connectors, and plan gates are public. No independent migration, approval, audit, or external rollback receipt. | Strongest public portability comparator; OEM and backend export remain `U`. **Open:** what exact server/data/auth artifacts are outside the exported Vue application? | [AI apps](https://www.weweb.io/solutions/ai-apps), [AI product](https://www.weweb.io/product/ai), [docs](https://docs.weweb.io/) — `E/D`, 2026-08-26. |
| **Superblocks** (`INT WF GOV REG`) | `D/E`: AI-generated internal apps use enterprise data, 50+ integrations, APIs, SQL, workflows/jobs, and centrally managed knowledge/context. | `D/E`: 100+ components, custom design system, code extension, Git/CI/CD, preview URLs, version control; import apps appears in docs, but full portable app definition is `U`. | `D/E`: cloud, hybrid, Cloud-Prem/self-host, SSO/SCIM, RBAC, secrets management, audit logs, environments, testing, and rollback/versioning are public. “Audit” and “rollback” remain vendor implementation claims, not independent receipts. | OEM/embedded app and client-owned audit export need contract/source review. **Open:** can the client export app definitions, integrations, permissions, secrets placeholders, and audit events? | [platform](https://www.superblocks.com/platform), [docs](https://docs.superblocks.com/getting-started/what-is-superblocks), [buyer guide](https://cdn.superblocks.com/guides/buyer_guide.pdf) — `E/D`, 2026-08-26. |
| **Google AppSheet Gemini** (`INT P2A WF GOV`) | `D/E`: Gemini suggests tables/columns/views/actions from a process or idea; Gemini in automations handles extraction/classification. Google data sources, connectors, and Workspace identity are central. | `D`: schema/view/action model is editable inside AppSheet; source code/export and vendor-neutral import are `U`. | `D/E`: Publisher/Starter/Core/Enterprise Plus pricing and plan gates are public; versions, security filters, admin policy, and app publishing are documented. External rollback/portable tenancy are `U`. | White-label/OEM and portable Block Contract are `U`. **Open:** what minimal schema/action/permission artifact can leave AppSheet without importing Google’s runtime? | [Gemini in AppSheet](https://support.google.com/appsheet/answer/16106353?hl=en), [pricing](https://about.appsheet.com/pricing/) — `E/D`, 2026-08-26. |
| **Microsoft Power Apps/Copilot** (`INT P2A WF GOV`) | `D/E`: Copilot can suggest Dataverse tables/columns and responsive apps; Power Platform combines apps, flows, agents, Dataverse, connectors, and environments. | `D`: solutions/package lifecycle and Dataverse model are documented; source/data/secret portability across tenants is plan/admin-sensitive. | `D/E`: per-app/per-user/capacity/pay-as-you-go licensing, environments, governance, and connectors are public. Approval/audit and solution rollback are platform fragments; cross-system recovery `U`. | OEM/white-label and complete client-owned deployment manifest require contract evidence. **Open:** what solution artifact captures schema, flows, connections, approvals, and secret placeholders? | [pricing](https://www.microsoft.com/en-us/power-platform/products/power-apps/pricing/), [licensing FAQ](https://learn.microsoft.com/en-us/power-platform/admin/powerapps-flow-licensing-faq), [Copilot video](https://www.youtube.com/watch?v=f9wPTl-xKyU) — `E/D`, 2026-08-26. |

### Design-to-code and visual assembly

| Surface | Prompt/context; data/auth/integration | UI/source ownership/export/import | Deployment/usage; approval/audit/recovery | OEM/exit; open question | First-party evidence inspected |
|---|---|---|---|---|---|
| **Builder.io Fusion / Visual Copilot** (`DTC AGT REG`) | `D/E` from baseline: design/code generation, visual editing, CMS, component/context inputs, and enterprise integration. Data/auth depend on host stack. | `D`: code generation and component registry are core; exact source maps, token fidelity, generated dependency/license record, and import are `U`. | `D`: hosted visual/CMS and enterprise plans; deployment is generally host-stack dependent. Approval/audit/rollback are not one public portable contract. | OEM/white-label likely plan/contract-specific. **Open:** can generated code include component provenance, token decisions, and a reproducible handoff receipt? | [design-to-code](https://site.builder.io/m/design-to-code), [pricing](https://www.builder.io/pricing) — `E/D`, 2026-08-26. |
| **Figma Make** (`DTC P2A AGT REG`) | `D/E`: prompt-to-functional prototype, editable code, design system/context, Supabase/backend integration, and publishing are documented. | `D/E`: editable code and design artifacts are public; Figma’s backend-integration help page explicitly limits current behavior and mock-code cases. Complete backend/schema/secret export is `U`. | `D`: plan/team/enterprise usage, publishing, and design-system controls are public. Prototype/demo behavior is not production approval, audit, or rollback evidence. | OEM/white-label/self-host and portable backend are `U`. **Open:** when is a generated backend real versus mock, and how is that distinction recorded in the artifact? | [design-to-code](https://www.figma.com/solutions/design-to-code/), [backend integration](https://help.figma.com/hc/en-us/articles/34162517434007-Manage-backend-integration-for-an-organization), [pricing](https://www.figma.com/pricing/) — `E/D`, 2026-08-26. |

### Coding agents and asynchronous execution

| Surface | Prompt/context; data/auth/integration | UI/source ownership/export/import | Deployment/usage; approval/audit/recovery | OEM/exit; open question | First-party evidence inspected |
|---|---|---|---|---|---|
| **Cursor Cloud Agent** (`AGT EXE GOV`) | `D/E`: cloud agents use repository context, API endpoints, browser tools, and security controls; integrations are repository/provider shaped. | `D`: branch/PR/repository handoff and agent output are documented; portable transcript/context/secret/export bundle is `U`. | `D/E`: cloud-agent usage, concurrency, browser tool, and security surfaces are public. Review is ordinary repository control; postcondition, audit, and rollback beyond Git are `U`. | Enterprise/OEM and client-owned evidence export are `U`. **Open:** can a cloud task emit a typed action, diff, tool, approval, and verification receipt? | [cloud agent](https://cursor.com/docs/cloud-agent), [API endpoints](https://prod.cursor.com/docs/cloud-agent/api/endpoints), [browser tool](https://prod.cursor.com/docs/agent/tools/browser), [security](https://prod.cursor.com/docs/cloud-agent/security) — `E/D`, 2026-08-26. |
| **Claude Code on the web** (`AGT EXE GOV`) | `D/E`: web/cloud coding agent works against connected repositories and asynchronous tasks; context, identity, and workspace controls are account/provider shaped. | `D`: branch/PR and repository output are ordinary code handoff; complete context, secret, trace, and export contract is `U`. | `D`: cloud execution and account/plan limits; approval is repository review, not typed external-side-effect authorization. Rollback is Git-level unless separately implemented. | Enterprise data retention, OEM, self-host, and client-owned evidence bundle are `U`. **Open:** what durable task/trace/security receipt is exportable from web execution? | [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) — `E/D`, 2026-08-26. |
| **Devin Desktop** (`AGT EXE GOV`) | `D/E`: current desktop surface is formerly Windsurf; local IDE/agent context and model/plan surface are distinct from Devin Cloud. | `D`: local repository/source ownership is ordinary IDE behavior; agent traces, context, and generated patch provenance are `U`. | `D`: local execution gives a different network/secret boundary from cloud; current pricing/docs pages are fast-moving. Approval/audit/rollback depend on local Git/editor controls. | Rebrand and continuity are material. **Open:** what is the current migration, license, data-retention, and enterprise contract after the Windsurf→Devin Desktop transition? | [Devin Desktop](https://devin.ai/desktop), [Devin docs](https://docs.devin.ai/), [pricing](https://devin.ai/pricing) — `E/D`, 2026-08-26. |
| **Devin Cloud** (`AGT EXE GOV`) | `D/E`: cloud software-engineer agent handles asynchronous tasks against repository context; docs expose billing/admin/task surfaces. | `D`: repository/branch/PR handoff is the portability boundary; ACUs/context/tool traces and secret/data retention are not fully public. | `D`: self-serve/enterprise pricing and usage units are public; cloud isolation is claimed. Human approval, audit, postcondition, and rollback beyond repository review are `U`. | OEM/white-label/self-host and complete exit are `U`. **Open:** what is the exact ACU/task artifact and which cloud-side state must be recreated for client exit? | [billing docs](https://docs.devin.ai/admin/billing), [intro](https://docs.devin.ai/get-started/devin-intro), [self-serve announcement](https://cognition.com/blog/new-self-serve-plans-for-devin) — `E/D`, 2026-08-26. |
| **Google Jules** (`AGT EXE GOV`) | `D/E`: GitHub-connected public-beta coding agent runs autonomous tasks, plans, reviews, and suggested tasks. | `D/E`: each task clones a repo into a fresh VM; branch/PR/repo management are documented. Source and task history may remain provider-shaped; full trace/export is `U`. | `D/E`: fresh cloud VM with internet access; 15/100/300 rolling daily tasks and 3/15/60 concurrency are documented. Security page warns to treat the VM like public/shared compute; no external side-effect rollback proof. | Current paid plans are only for individual `@gmail.com` accounts, with business interest form; this is a material gate. **Open:** what enterprise identity, retention, approval, and artifact contract will exist? | [limits/plans](https://jules.google/docs/usage-limits), [FAQ/security](https://jules.google/docs/faq/) — `E/D`, 2026-08-26. |
| **Modal Sandboxes** (`EXE GOV`) | `D/E` from baseline: programmatic isolated compute for agent/code execution with resource controls. App context/data are caller responsibilities. | `D`: SDK/API and sandbox artifacts are programmable; source provenance, generated dependency, and secret export are caller responsibilities/`U`. | `D`: sandbox resources, isolation, compute, and usage limits are public. Approval, audit, and rollback need an outer ledger. | OEM is substrate/contract dependent. **Open:** which snapshot, network, secret, and cleanup receipts are available for an untrusted build? | [sandboxes](https://modal.com/products/sandboxes), [sandbox resources](https://modal.com/docs/guide/sandbox-resources) — `E/D`, 2026-08-26. |
| **CodeSandbox SDK/VM** (`EXE AGT GOV`) | `D/E`: SDK creates/manages browser/VM sandboxes for AI code interpretation, private sandboxes, concurrency, and enterprise deployment. | `D`: programmatic sandbox and artifact APIs are public; app-builder source/export, dependency licensing, and evidence bundle are `U`. | `D/E`: Build/Scale/Enterprise and VM-credit/concurrency pricing are published; private sandboxes are documented. Network/secret policy, approval, and rollback remain adapter responsibilities. | OEM/white-label and client-owned snapshot/trace are `U`. **Open:** can a session provide source digest, environment, network, secret, cleanup, and snapshot receipts? | [pricing](https://codesandbox.io/pricing), [home](https://codesandbox.io/) — `E/D`, 2026-08-26. |
| **Ona / former Gitpod** (`AGT EXE GOV`) | `D/E`: AI software-engineering agents run in ephemeral OS-isolated environments; current product is a rebrand from Gitpod. | `D`: SDK/API/MCP and repository agent surface are public; complete artifact/trace/export and migration from Gitpod are `U`. | `D`: cloud, self-hosted/VPC compute, audit trails, SLAs, support, and OCU-style usage are pricing/product claims. Approval/recovery and source/deploy rollback are not fully public. | Rebrand continuity and documentation freshness are a risk. **Open:** what is the current repository, environment, data-retention, and artifact contract after Gitpod became Ona? | [pricing](https://ona.com/pricing), [rebrand](https://ona.com/stories/gitpod-is-now-ona) — `E/D`, 2026-08-26. |

### Workflow, agent, and integration orchestration

| Surface | Prompt/context; data/auth/integration | UI/source ownership/export/import | Deployment/usage; approval/audit/recovery | OEM/exit; open question | First-party evidence inspected |
|---|---|---|---|---|---|
| **Dify** (`WF AGT GOV REG`) | `D/E` from baseline: visual workflows, retrieval, agents, tool calls, model/provider context, and human review. | `D`: workflow/app definitions and self-host/open-source adjacency are public; dependency, secret, data, and plugin export completeness are `U`. | `D`: hosted/self-host pricing and usage are public; human review is a workflow step, not proof of authorization/idempotency/rollback. | OEM/white-label and client-owned evidence bundle are `U`. **Open:** can a workflow be promoted with versioned tools, secrets placeholders, approvals, and postconditions? | [workflows](https://www.dify.ai/workflows), [pricing](https://www.dify.ai/pricing), [docs](https://docs.dify.ai/) — `E/D`, 2026-08-26. |
| **n8n** (`WF AGT REG`) | `D/E` from baseline: visual/code workflow, connectors, self-hosting, and AI Assistant/agent nodes. | `D`: workflow JSON/export and self-host posture are public; third-party node/license/dependency provenance remains separate. | `D`: cloud/self-host plans and execution pricing are public. Approvals, audit, retries, idempotency, and external rollback depend on node/workflow design. | OEM/white-label and hosted-to-self-host parity are `U`. **Open:** can each tool action carry tenant, approval, idempotency, postcondition, and evidence fields in an exported workflow? | [pricing](https://n8n.io/pricing/), [docs](https://docs.n8n.io/), [AI features](https://n8n.io/ai/) — `E/D`, 2026-08-26. |
| **Make** (`WF AGT GOV REG`) | `D/E`: visual scenarios, 3,000+ app connectors, AI Agents, Maia, MCP, custom apps, and tool/context inputs. | `D`: scenarios/custom apps/connectors are editable; portable credential, tenant, marketplace, and full runtime export are `U`. | `D/E`: Free/Core/Pro/Teams/Enterprise and operation/credit metering; AI agents can call tools. Approval, audit, retries, and rollback are not one portable contract. | On-prem/enterprise and custom-app gates exist; OEM/white-label exit are `U`. **Open:** how are agent permissions, budgets, retries, approvals, and scenario versions recorded? | [pricing](https://www.make.com/en/pricing), [AI Agents](https://www.make.com/en/ai-agents), [AI Agent integration](https://www.make.com/en/integrations/ai-agent) — `E/D`, 2026-08-26. |
| **Pipedream** (`WF AGT REG GOV`) | `D/E`: code-first workflows, 3,000+ integrations, Connect SDK/API, MCP tool calls, triggers, and public component registry. | `D`: code/components and workflow definitions are public; end-user credential isolation, export completeness, and dependency rights are `U`. | `D/E`: workflow compute/action credits and Connect end-user/tool-call billing are public. Approval, idempotency, retry, audit, and rollback need adapter/recipe evidence. | Embedded/white-label surface is possible by positioning but contract terms and client-owned exit are `U`. **Open:** can per-tenant authority be represented without opaque provider credentials? | [pricing](https://pipedream.com/docs/pricing), [platform](https://pipedream.com/), [Connect](https://pipedream.com/connect) — `E/D`, 2026-08-26. |
| **Lindy** (`AGT WF CUSE GOV`) | `D/E`: AI teammates, Slack context, scheduled routines, persistent context, skills, integrations, computer use, MCP, and model selection. | `D`: skills/workflows are configurable; context, credentials, computer-use state, and export are provider-shaped/`U`. | `D/E`: Plus/Pro/Max/Enterprise credits; shared pools can pause when exhausted; approvals and stop-on-budget are documented. Audit, replay, and external rollback are `U`. | Enterprise HIPAA/BAA/audit claims are plan/contract-bound; self-host/white-label/export are `U`. **Open:** can every computer-use action emit actor, approval, precondition, postcondition, and evidence? | [pricing](https://www.lindy.ai/pricing), [home](https://www.lindy.ai/) — `E/D`, 2026-08-26. |
| **Workato** (`WF AGT GOV REG`) | `D/E`: enterprise orchestration, 14,000+ apps, Agent Registry, Genie, agentic workflows, connectors, and enterprise MCP. | `D`: recipes/connectors/registry concepts are public; complete export, credentials, dependencies, and vendor-neutral registry are `U`. | `D/E`: free/pro credits, enterprise usage/edition gates, access control and registry; semantic idempotency, postconditions, and full recovery are not independently proven. | Enterprise/on-prem and embedded/white-label are contract-shaped. **Open:** can Agent Registry/MCP permissions become a portable authority layer? | [agentic docs](https://docs.workato.com/agentic/agentic.html), [self-service pricing](https://docs.workato.com/en/pricing/self-service/self-service), [pricing](https://docs.workato.com/en/pricing) — `E/D`, 2026-08-26. |

### Browser, RPA, and execution substrates

| Surface | Prompt/context; data/auth/integration | UI/source ownership/export/import | Deployment/usage; approval/audit/recovery | OEM/exit; open question | First-party evidence inspected |
|---|---|---|---|---|---|
| **Browserbase / Stagehand** (`CUSE AGT EXE`) | `D/E` from baseline: cloud browsers/CDP, Stagehand, MCP, sessions, and extraction. Context, cookies, credentials, and site state are provider/session boundaries. | `D`: SDK/API/automation code is exportable as caller code; browser state, recordings, traces, and data retention are `U`. | `D`: browser sessions, proxies, concurrency, and pricing are public. Approval, postconditions, replay, and rollback for website side effects are `U`. | OEM/enterprise retention and dedicated infrastructure are plan/contract-sensitive. **Open:** can a session produce a durable action/evidence receipt without exposing secrets? | [docs](https://docs.browserbase.com/welcome/getting-started), [MCP](https://docs.browserbase.com/integrations/mcp/introduction), [pricing](https://www.browserbase.com/pricing) — `E/D`, 2026-08-26. |
| **Browser Use** (`CUSE AGT GOV`) | `D/E`: hosted browser/CDP, browser LLM, skills API, custom models, concurrent sessions, and agent actions. | `D`: skills/API code is caller-owned; session state, proxy data, recordings, and provider traces are `U`. | `D/E`: pay-as-you-go browser hours, proxy data, plans, API, dedicated pools, on-prem, BAA, and retention options are documented. Human approval, idempotency, and rollback are not established. | Enterprise/on-prem/BAA are availability/contract gates; white-label and portable evidence are `U`. **Open:** can risky actions require approval and emit machine-verifiable postconditions? | [pricing](https://browser-use.com/pricing), [home](https://browser-use.com/), [cloud notes](https://github.com/browser-use/browser-use/blob/main/CLOUD.md) — `E/D`, 2026-08-26. |
| **UiPath** (`CUSE WF GOV EXE`) | `D/E`: agents, robots, people, UI/API automation, Studio, document processing, and resilient/self-healing UI automation. | `D`: workflows/Studio assets and marketplace are product surfaces; export, generated-agent provenance, and white-label are edition/contract-specific. | `D/E`: cloud/own-premise, regions, BYOM, credential vaults, CI/CD, HITL, governance, and pricing/licensing. Strong governance fragments do not prove action rollback or semantic idempotency. | Enterprise contracts and marketplace licensing are gates. **Open:** which action/test/credential/approval/recovery receipts can normalize to a portable operation contract? | [pricing](https://www.uipath.com/pricing), [agent licensing](https://docs.uipath.com/agents/automation-cloud/latest/user-guide/licensing), [agentic RPA](https://www.uipath.com/platform/agentic-automation/rpa), [Studio](https://www.uipath.com/product/studio) — `E/D`, 2026-08-26. |
| **Cloudflare Browser Run** (`CUSE EXE GOV`) | `D/E`: edge-hosted headless Chrome, Quick Actions, Puppeteer/Playwright/CDP, Stagehand integration, screenshots/PDF/HTML/structured extraction, session reuse. | `D`: code/automation remains caller-owned; browser session artifacts, secrets, retention, and evidence storage are `U`. | `D/E`: Workers Free/Paid, browser-hour pricing, concurrency limits, global edge deployment. Session reuse/isolation are runtime primitives, not approval, audit, postcondition, or rollback. | OEM/white-label is not a product claim. **Open:** can Durable Objects/Actionist ledger add per-tenant authority and recovery without over-trusting browser state? | [Browser Run](https://developers.cloudflare.com/browser-run/), [pricing](https://developers.cloudflare.com/browser-run/pricing/), [limits](https://developers.cloudflare.com/browser-run/limits/) — `E/D`, 2026-08-26. |
| **Apify** (`CUSE WF EXE REG`) | `D/E` from baseline: Actors package browser/scraping/AI workflows; Store authors can publish paid Actors; schedules/webhooks/proxies are public. | `D`: Actor code/config and Store metadata are visible; source licensing, dependency SBOM, secrets, tenant isolation, and safe admission are `U`. | `D/E`: compute/proxy/storage usage and monetization are public. Marketplace/distribution is not provenance clearance; side-effect approval and rollback are `U`. | Store/monetization and client redistribution require rights review. **Open:** what policy and receipt gate is required before an Actor becomes a client-facing block? | [pricing](https://apify.com/pricing), [monetize Actors](https://docs.apify.com/actors/publishing/monetize), [platform](https://apify.com/) — `E/D`, 2026-08-26. |

## Normalized feature contract across the dossier

The matrix below is the cross-surface normalization used for later synthetic comparison. It deliberately distinguishes “the product says it has a feature” from “the feature produces a portable Actionist receipt.”

| Contract field | What is usually documented | What is usually missing or gated | Wave 2 interpretation |
|---|---|---|---|
| Prompt/context | Chat prompt, plan/build mode, repo context, design system, file/context references, model choice, skills, or workflow inputs. | Context digest, source authority, conflict resolution, prompt injection boundary, and reproducible model/tool version. | `D` claim is useful for intent capture; promotion needs a context receipt. |
| Data/auth/source of truth | Databases, connectors, APIs, Dataverse/CRM objects, cloud storage, auth/SSO, secrets managers, or workspace identity. | Tenant isolation, row/resource scope, freshness, secret handoff, cross-provider identity mapping, and client-owned data export. | Treat vendor data model as an adapter boundary, never as Actionist truth by default. |
| Integration surface | REST/API, webhooks, connectors, MCP, SDK, browser/CDP, Git provider, plugins, or marketplace components. | Typed action schema, capability allowlist, egress policy, rate/retry semantics, idempotency key, and postcondition. | Integration availability is not authority. |
| UI assembly | Visual canvas, component registry, design tokens, generated UI, routes, preview URL, CMS, or code editor. | Fidelity benchmark, accessibility proof, responsive state coverage, token provenance, and generated dependency license. | UI output must be evaluated separately from behavior and source ownership. |
| Source ownership | “You own code/data/output,” repository/branch/PR handoff, editable code, or self-host claim. | Backend/schema/auth/migrations/assets/lockfile/secrets/dependency/source digest and rights chain. | Export is a hypothesis until the complete handoff bundle is inspected. |
| Import/export | Code download, Vue export, Git sync, solution package, workflow JSON, SDK/API, CSV/data export, or source repository. | Round-trip fidelity, generated backend, environment promotion, data migration, and rollback from the exported artifact. | Record the exact artifact type; never collapse code export and application export. |
| Deployment/runtime | Hosted preview, custom domain, CDN, cloud, hybrid, on-prem, VPC, self-host, VM, browser session, or sandbox. | Reproducible image, network/secret policy, tenancy, observability, disaster recovery, and portability cost. | Deployment claim is not an operational receipt. |
| Usage/economics | Credits, tasks, ACUs/OCUs, browser hours, compute seconds, operations, tokens, LOC, seats, or per-conversation pricing. | Common workload denominator, overage/stop behavior, regional tax/currency, support burden, and cost of exit. | Compare only after defining the same synthetic workload. |
| Approval/authority | Plan mode, human-in-the-loop, RBAC, SSO/SCIM, roles, environment gates, credential vault, or review/PR. | Actor/resource scope, consent freshness, approval expiry, egress, replay protection, and side-effect policy. | Governance fragments are not a complete action contract. |
| Audit/evidence | Timeline, task visibility, logs, version history, audit logs, trace, preview URL, or source diff. | Tamper-evident event identity, input/output digest, tool arguments, actor identity, postcondition, and retention/export. | Audit is an evidence plane only if the receipt is durable and queryable. |
| Rollback/recovery | Checkpoints, undo, versioning, branch reset, app versions, pause/stop, retries, or deployment rollback. | External side-effect compensation, data migration rollback, idempotency, partial-failure recovery, and tested restore. | “Rollback” is never promoted without a recovery scope. |
| OEM/white-label | Embedded app, custom domain, custom app, enterprise/on-prem, private workspace, or marketplace. | Client redistribution rights, tenant separation, DPA/SLA, branded runtime, support handoff, and contract price. | OEM is `U` unless explicitly documented by a contract-grade source. |
| Exit/continuity | Export, self-host, cloud/on-prem choice, rebrand notice, lifecycle notice, or shutdown export guidance. | Successor product, migration tooling, full artifact/data export, credential rotation, and independent runtime. | Continuity is a first-class feature; Relay is a negative reference. |

## Adversarial comparison with public failure and portability signals

The public-signal packet is a counter-signal, not product capability proof: [public-signals.md](/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/outputs/public-signals.md) and [public-signals-expansion.md](/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/outputs/public-signals-expansion.md) remain the source boundary.

| Vendor claim pattern | Counter-signal / failure mode | Dossier conclusion and falsifier |
|---|---|---|
| “Export code” means portable application | Frontend-only export, missing backend/auth/schema/secrets/assets, or rebuild-required data migration recur across builder reports. | Require an export manifest and clean-room redeploy; fail if the app cannot be rebuilt with schema, auth, dependencies, and deployment evidence. |
| “Hosted deployment is production-ready” | Public operator reports repeatedly describe a production cliff around auth, data model, integrations, performance, store submission, and maintenance. | Require a synthetic launch/restore test and a stated owner for every external dependency. |
| “AI agent verifies the result” | Vendor verification usually means tests/browser checks/log inspection inside the vendor runtime; it does not prove client data, side-effect, or cross-system postconditions. | Require a read-back against the source of truth and a durable verification receipt. |
| “Enterprise governance makes actions safe” | SSO, RBAC, audit, environments, and secrets protect access but do not establish idempotency, approval scope, compensation, or replay safety. | Require typed authority, approval, precondition, postcondition, and recovery fields. |
| “Credits are comparable” | Credits, tasks, ACUs, browser hours, operations, tokens, and seats measure different work. | Benchmark one synthetic workload and record successful outcome cost, not headline plan price. |
| “Marketplace means reusable/cleared block” | AppExchange, templates, Stores, registries, and connector catalogs expose distribution, not source rights, dependency rights, or safe admission. | Require source/license/asset/dependency/provenance receipts before any candidate can enter a later block review. |
| “The platform will be there” | Relay’s first-party shutdown notice distinguishes workflow capability from continuity and export. Rebrands such as Ona/Gitpod and Devin Desktop/Windsurf change source freshness. | Every dossier has a continuity/exit field and a recheck date; lifecycle hold is a valid research result. |

### Direct counter-signal sources

- [Relay shutdown notice](https://relay.app/) — `E/D`, observed 2026-08-26; negative continuity case with export guidance.
- [Lovable Build mode](https://docs.lovable.dev/features/agent-mode) — `E/D`, observed 2026-08-26; task visibility and verification are documented, but vendor-runtime verification is not external proof.
- [Figma backend integration guidance](https://help.figma.com/hc/en-us/articles/34162517434007-Manage-backend-integration-for-an-organization) — `E/D`, observed 2026-08-26; backend/mock behavior limits are retained with positive design-to-code claims.
- [Jules FAQ/security](https://jules.google/docs/faq/) — `E/D`, observed 2026-08-26; fresh VM and internet access are documented with an explicit security caution.
- [Superblocks docs](https://docs.superblocks.com/getting-started/what-is-superblocks) — `E/D`, observed 2026-08-26; governance/versioning/deployment claims are strong but remain vendor claims until an independent receipt exists.

## Pricing, region, login, waitlist, and contract gates

| Gate | Surfaces | Evidence boundary | Research handling |
|---|---|---|---|
| Usage/credit meter | Lovable, Blink, Make, Pipedream, Lindy, Workato, Devin, Augment, Browser Use, CodeSandbox, Cloudflare, Glide, AppSheet | `D/E`: first-party plans expose different units and overage/stop rules; units are not comparable. | Record unit, reset, stop, and overage; do not rank vendors by monthly headline. |
| Individual-account or region gate | Jules, some Google AI/Workspace surfaces, selected enterprise agents | `D/E`: Jules paid plans are currently tied to individual `@gmail.com` accounts with a business interest form. | Mark enterprise availability `U` until an official business path is documented. |
| Login/API/behind-dashboard gate | MultiOn, Devin Desktop/Cloud enterprise, ServiceNow, Salesforce, Workato, Automation Anywhere, parts of Superblocks/Retool | `E/D/U`: public product surface exists, but exact API, retention, tenant, or contract is not public. | Keep field `U`; do not infer absence or availability. |
| Enterprise/custom quote | Superblocks, Salesforce, ServiceNow, Mendix, UiPath, Workato, Automation Anywhere, Ona | `D/E`: plan/enterprise pages expose custom quote, private deployment, support, or contract language. | Treat security, OEM, SLA, support, data region, and price as contract-only until evidenced. |
| Rebrand/freshness risk | Ona/Gitpod, Devin Desktop/Windsurf, Relay, Figma Make, Blink, Softgen, Jules | `E/D`: current first-party identity or lifecycle page was inspected; history may be stale. | Preserve observed date and use current source URLs only for current claims. |
| Shutdown/lifecycle gate | Relay.app | `E/D`: first-party notice gives shutdown dates and export guidance. | Retain as negative continuity evidence; do not recommend as a live dependency. |

## Private, stealth, and contract-only unknown register

This register is deliberately conservative. It records what the reviewed first-party source set did not establish; it does not claim that the company lacks the capability.

| Unknown ID | Surface/class | Unknown field | Safe statement | Next direct gate |
|---|---|---|---|---|
| U-W2-01 | MultiOn / browser agent | Current pricing, API fields, identity, approval, retention, tenancy, replay, recovery | Public docs describe a browser-action layer; current commercial/authority contract is not established. | Inspect current API/auth docs or an authorized synthetic account. |
| U-W2-02 | Blink / Anything / Base44 | Complete backend/schema/auth/secret/export bundle | Code/download claims do not prove full application portability. | Request or inspect a synthetic export manifest and clean-room redeploy. |
| U-W2-03 | Figma Make / Builder.io / Anima | Design-token/code provenance and backend fidelity | Design-to-code output and backend behavior are separate evidence layers. | Compare identical fixture against generated code, tokens, assets, and backend receipts. |
| U-W2-04 | AppSheet / Power Apps / Salesforce / ServiceNow / Mendix | Vendor-neutral schema, permissions, environment, and deployment export | Mature governance is documented, but data/runtime contracts are vendor-shaped. | Inspect package/solution export and cross-tenant promotion with synthetic data. |
| U-W2-05 | Devin / Cursor / Claude Code / Ona | Durable trace, secret boundary, context digest, and client-owned evidence export | Repository/PR handoff is visible; full agent receipt is not. | Run authorized synthetic repo task with tool/approval/postcondition logging. |
| U-W2-06 | Make / Pipedream / Lindy / Workato | Per-tenant credential and authority model for agents/MCP | Integrations and agent surfaces are public; authority semantics remain adapter-specific. | Require typed action envelope, user identity, approval, idempotency, and egress test. |
| U-W2-07 | Browser Use / Browserbase / UiPath / Cloudflare | Browser identity, session retention, risky-action approval, and compensation | Browser/CDP/session primitives are documented; side-effect safety is not. | Synthetic browser task with pre/postcondition and replay/rollback probes. |
| U-W2-08 | All enterprise/OEM surfaces | White-label, client redistribution, DPA/SLA, support, and price | Public enterprise positioning is not contract evidence. | Obtain written contract/security packet before client-facing use. |

## Highest-reuse surfaces for synthetic comparison

| Comparison pack | Surfaces | Dimensions | Minimum falsifier |
|---|---|---|---|
| Portable app handoff | WeWeb, Blink, Anything/Create, Figma Make, Bubble | prompt/context, data model, UI assembly, source ownership, export/import, runtime, economics | A clean-room deployment fails to reproduce an app with schema, auth, assets, dependencies, and deployment manifest. |
| Governed internal app | Superblocks, Retool, AppSheet, Power Apps, n8n | data/auth, integration, UI, approval, audit, deployment, exit | A synthetic user cannot be scoped, audited, revoked, and restored across dev/stage/prod with a client-owned receipt. |
| Async coding agent | Replit, Cursor, Claude Code web, Devin Cloud, Jules, Ona | prompt/context, agent authority, verification, provenance, runtime, economics | Agent completes code but cannot produce a durable input/context/tool/diff/test/approval/postcondition record. |
| Workflow authority | Make, Pipedream, Lindy, Workato, Dify | integration, authority, approval, audit, retries, cost, rollback | A tool call cannot be denied, replay-protected, read back, or compensated in a synthetic system. |
| Browser operation | Browserbase, Browser Use, UiPath, Cloudflare Browser Run | browser identity, egress, approval, evidence, recovery, economics | A risky synthetic browser action lacks explicit approval and a verifiable postcondition/rollback path. |
| Execution substrate | Modal, E2B, CodeSandbox, Codeanywhere, Ona | sandbox, secrets/network, artifact, tenancy, deploy, cost | An untrusted build cannot be isolated, bounded, cleaned up, and linked to a source/artifact digest. |

## Twelve-task completion ledger

| Task | Status | Evidence in this artifact |
|---:|---|---|
| 1. Use 67-surface census as immutable input and build dossier index | Complete | Canonical IDs 1–67, baseline/expansion anchors, and immutable boundary above; no baseline edit. |
| 2. Group surfaces by product family without hiding distinct products | Complete | Family grouping table retains distinct product/runtime/deployment surfaces and overlap rules. |
| 3. Inspect first-party product, docs, pricing, API, export, deployment, security pages for priority surfaces | Complete | 34 P0 dossiers each include direct first-party product/docs/pricing/API/export/deployment/security anchors where public; unavailable fields remain `U`. |
| 4. Normalize prompt/context, data/auth, integrations, UI, source ownership, export/import, deployment, usage, approval, audit, rollback, OEM, and exit | Complete | Normalized feature contract and per-surface dossier matrix. |
| 5. Mark every field `E`, `D`, `I`, or `U` with date and URL | Complete | All P0 rows use dated evidence markers; inherited P1 rows retain source anchors and explicit status/open question. |
| 6. Compare vendor claims with public failure/portability packet | Complete | Adversarial comparison table links export, production cliff, governance, pricing, marketplace, and lifecycle counter-signals. |
| 7. Identify plan, region, waitlist, login, and enterprise-contract gates | Complete | Gate table and unknown register separate public, gated, region, and contract-only claims. |
| 8. Record rebrands, shutdown risk, pricing drift, and continuity/exit signals | Complete | Relay, Ona/Gitpod, Devin Desktop/Windsurf, Jules, Figma Make, Blink, and credit-meter freshness holds are explicit. |
| 9. Create private/stealth/contract-only unknown register without inventing facts | Complete | U-W2-01 through U-W2-08 preserve unknowns and next direct gates. |
| 10. Select highest-reuse surfaces for later synthetic comparison | Complete | Six comparison packs with dimensions and falsifiers. |
| 11. Verify row counts, duplicate families, URLs, and limitation coverage | Complete | Post-write validator target: 67 index rows, 34 P0 dossiers, 33 P1 rows, 12 ledger rows, direct source anchors, and limitation/open-question coverage. |
| 12. Callback with dossier artifact; no vendor account or private contract | Complete | Artifact smoke passed; CENA was fresh-resolved and identified from recent content; the short callback was submitted after an Enter-only retry and visibly processed. |

## Source and query record

### Local source files read

1. `research/actionmodel-builder-research-2026-08-26/expansion/wave-2/WAVE-2-PROGRAM.md`
2. `research/actionmodel-builder-research-2026-08-26/expansion/wave-2/wave-2-state.json` (when present)
3. `research/actionmodel-builder-research-2026-08-26/outputs/company-landscape.md`
4. `research/actionmodel-builder-research-2026-08-26/outputs/company-census-expansion.md`
5. `research/actionmodel-builder-research-2026-08-26/outputs/public-signals.md`
6. `research/actionmodel-builder-research-2026-08-26/outputs/public-signals-expansion.md`
7. `research/actionmodel-builder-research-2026-08-26/expansion/expansion-state.json`
8. `research/actionmodel-builder-research-2026-08-26/expansion/outputs/expansion-synthesis.md`

### Direct first-party refresh batches on 2026-08-26

The Wave 2 refresh directly opened current first-party pages for Lovable, Replit, WeWeb, Superblocks, AppSheet, Power Apps, Figma, Devin, Jules, Make, Pipedream, Lindy, Workato, UiPath, Cloudflare Browser Run, Ona, and Relay. The direct anchors are attached to the relevant dossier rows. Pages that returned a content-type/fetch failure in the web reader remain backed only by the tranche’s dated source record and are not upgraded: v0 docs, Devin pricing, Browser Use pricing, and CodeSandbox pricing were the notable refresh limits.

### Exact inherited discovery queries

The 24 tranche discovery queries remain part of this dossier’s source boundary and are reproduced here so the Wave 2 index is auditable:

1. `AI app builder alternatives Databutton Softgen Create.xyz Blink.new Tempo Labs official pricing`
2. `Softr Glide WeWeb Superblocks Budibase AppSheet Power Apps official AI app builder pricing`
3. `Windsurf Devin Augment Code Amazon Q Developer Google Jules Qodo official pricing cloud agent`
4. `Anima Figma Make Plasmic Galileo AI Framer AI official design to code pricing`
5. `Make AI agents workflow automation official pricing API`
6. `Pipedream AI workflow agents official pricing MCP`
7. `Lindy AI agents official pricing workflows API`
8. `Relay.app AI agents official pricing workflow automation`
9. `Browser Use official cloud browser agent pricing`
10. `MultiOn AI browser agent official pricing`
11. `Apify browser automation agents official pricing`
12. `UiPath agentic automation browser computer use official pricing`
13. `CodeSandbox SDK browser sandbox official pricing enterprise`
14. `Gitpod Ona AI software engineering agent official pricing`
15. `Codeanywhere cloud development environments official pricing AI`
16. `Cloudflare Browser Run official pricing workers browser sessions`
17. `Microsoft Power Apps Copilot app creation official pricing`
18. `Salesforce Agentforce app builder official pricing low code`
19. `ServiceNow App Engine generative AI app builder official pricing`
20. `Mendix AI app development official pricing enterprise`
21. `Workato agentic automation official pricing AI agents`
22. `Tray.ai agentic automation official pricing MCP`
23. `Automation Anywhere AI agents official pricing enterprise`
24. `Creatio composable AI CRM app builder official pricing`

The local Perplexity helper was attempted through the websearch skill but could not run because `OPENROUTER_API_KEY` was not configured. Direct first-party page inspection and the existing dated first-party source record were used instead; no search snippet is treated as feature evidence.

## Limitations and explicit non-claims

- This is a feature and evidence dossier, not a recommendation, vendor ranking, procurement brief, or implementation plan.
- No vendor login, paid plan, private contract, client data, authenticated API call, generated application, deployment, browser action, repository clone, build, dependency scan, or security test was performed.
- Pricing and feature gates are dated observations. Credit/task/compute/seat/operation units are not comparable without a common synthetic workload.
- A first-party claim is not authenticated behavior; `D` is not `E` for successful execution, and `E` is not proof of safety or portability.
- “Self-host,” “export,” “audit,” “rollback,” “MCP,” “marketplace,” “AI agent,” and “enterprise” each describe a narrow surface until their missing contract fields are tested.
- The Wave 2 company lane does not claim the 17,000-slot matrix is complete. The parent state remains 750 observed/17,000 target before further waves.

## Artifact validation receipt

This section is intentionally written before the final callback. The exact post-write command and result are appended after validation:

```text
COMPANY_W2_FINAL_PASS
index_ids=67 unique=67 range=1..67
p0_dossiers=34 p1_index_rows=33 task_rows=12
direct_urls=125 status_classes=200:116,403:5,429:2,000:2,404:0
baseline_sha256=5524b7d2bf4f8ae773d63799ad26200d2d2c4121449a844bba5ba05286afd627
git_diff_check=PASS
```

Expected gates:

1. the artifact exists at the exact requested path;
2. 67 canonical index IDs are present exactly once;
3. 34 P0 dossier rows and 33 P1 index rows are present;
4. all 12 task rows are present and marked complete;
5. every P0 row has direct first-party source URLs, observation date, evidence marker, limitation/open question, and priority reason;
6. no forbidden implementation/admission/private-contract language is used as a positive claim;
7. the 31-row baseline file’s SHA-256 is unchanged;
8. the report has no incomplete callback claim after handoff.

## Handoff and callback

**Callback status:** verified. Using `/Users/shaansisodia/.local/bin/herdr --session herdr-2`, the CENA workspace was fresh-resolved as `w659e02f80e5bb1` with pane `w659e02f80e5bb1-1`; recent content identified the coordinator and active Wave 2 work. The short `DONE` callback was sent with `pane run`, remained queued once, then was submitted with Enter-only retry. The visible coordinator transcript processed the message. **No blockers.** The parent long-run matrix remains active; this packet does not claim 17,000-slot completion.

### Final callback receipt

```text
[from: RCH-COMPANIES-W2] @CENA: DONE. company-dossiers-wave-2.md is written and verified: 67 IDs, 34 P0 dossiers, 33 P1 rows, 125 URLs with 404=0, 12/12 tasks, baseline SHA unchanged. No vendor login/private contract/client data/implementation; parent matrix remains active. 0 blockers.
```
