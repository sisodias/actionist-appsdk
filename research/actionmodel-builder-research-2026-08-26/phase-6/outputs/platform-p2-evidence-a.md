# Phase 6 platform P2 evidence — lane A

Run: `RCH-P6-PLATFORM-P2-A`  
Scope: exact Phase-3 platform-depth ranks **55–74**  
Observation date: **2026-08-27**  
Prior observation date: **2026-08-26**  
Mode: public first-party research only; execution remains `UNEXECUTED`; admission remains `NOT_ADMITTED`.

## Method and evidence boundary

This packet preserves the exact Phase-3 identity tuple (rank, name, source record ID/type, dedupe key, category) and the exact Phase-3 first-party source URL for each of the 20 ranks. Each URL was checked with a bounded read-only HTTP probe and a public reader. A readable page is evidence class `E/D` (directly documented first-party claim); a reachable-but-thin or unreadable page is `E/U` (access evidence only). `INFERENCE` is used only for a bounded interpretation of a direct claim. Reachability is not capability, and marketing or plan language is not a runtime receipt.

No vendor login, credential, paid account, client/private data, browser side effect, repository clone, source copy, source execution, build, deployment, benchmark, scan, or admission was performed. Authenticated behavior is `U` for every record. No product was installed, run, or tested. The normalized JSONL register is the field-level source of truth; the dossier sections below preserve all 20 records and their evidence limits.

### Count and access summary

| Measure | Result |
|---|---:|
| Phase-3 ranks in scope | 20 (55–74) |
| Normalized JSONL records | 20 |
| Unique dedupe identities | 20 |
| Exact first-party URLs | 20 |
| `E/D` readable records | 17 |
| `E/U` access-limited records | 3 (Airplane, Huddle, LangGraph) |
| HTTP reachability | 19/20 returned HTTP 200; Airplane returned HTTP 000 |
| Authenticated behavior | `U` for all 20 |
| Execution / admission | `UNEXECUTED` / `NOT_ADMITTED` |

The HTTP 200 count is not a capability count. Huddle was HTTP reachable but reader-limited, and LangGraph exposed only a thin redirect notice. Airplane’s HTTP 000 and reader error are preserved rather than replaced by a guessed successor or secondary source.

## Normalized matrix

| Rank | Exact Phase-3 identity | Category | Evidence / access | Documented surface from the inspected first-party URL | Primary unresolved gate |
|---:|---|---|---|---|---|
| 55 | Manus WebDev (`id=6`, `existing::6`) | P2A AGT EXE | E/D; HTTP 200 | Website status, checkpoints, publish/update, visibility, hosted URL | authority, export, rollback, tenancy, support/OEM |
| 56 | UiPath (`id=62`, `existing::62`) | CUSE WF GOV EXE | E/D; HTTP 200 | Agentic automation, governance, agent/robot/people orchestration | typed authority/API, licensing, audit, deployment |
| 57 | Apify (`id=63`, `existing::63`) | CUSE WF EXE REG | E/D; HTTP 200 | Actors, Store, compute/storage/proxy metering, support/SLA | Actor contract, provenance, export, authority |
| 58 | Cloudflare Browser Run (`id=64`, `existing::64`) | CUSE EXE GOV | E/D; HTTP 200 | Headless Chrome, Quick Actions, sessions, CDP/Playwright/Puppeteer/Stagehand, JSON extraction | session authority, retention, tenancy, API/MCP limits |
| 59 | Codeanywhere (`id=66`, `existing::66`) | EXE AGT GOV | E/D; HTTP 200 | Cloud workspaces, Git providers, isolation, IAM/SAML/SCIM/RBAC/audit | reproducible export, secrets, deployment, support |
| 60 | Airtable Omni/Cobuilder (`id=7`, `existing::7`) | INT WF GOV | E/D; HTTP 200 | Record/field/automation/form edits, permission mirroring, guardrails | action receipt, API/MCP, portability, audit |
| 61 | Onlook (`id=9`, `existing::9`) | DTC AGT REG | E/D; HTTP 200 | Visual React/Tailwind editing, AI, Figma import, data sources, GitHub edit | source-map/dependency fidelity, rights, API |
| 62 | Visily (`id=15`, `existing::15`) | DTC P2A | E/D; HTTP 200 | Paid screen-only code export to React/Vue/HTML ZIP; AI/static layouts | application fidelity, assets/rights, API/deploy |
| 63 | Uizard (`id=16`, `existing::16`) | DTC P2A | E/D; HTTP 200 | AI design, Free/Pro limits, React/CSS handoff, image/PDF exports | component/asset fidelity, full export, rights |
| 64 | Bubble (`id=27`, `existing::27`) | P2A INT DTC | E/D; HTTP 200 | AI web/mobile app builder, integrated data/logic, app-store publishing | export, authority, tenant isolation, rollback |
| 65 | Plasmic (`id=45`, `existing::45`) | DTC REG INT | E/D; HTTP 200 | Existing codebase/components, branching, multiplayer, CMS/in-app integration | source/CMS fidelity, audit, deployment, OEM |
| 66 | Framer (`id=46`, `existing::46`) | DTC P2A | E/D; HTTP 200 | Prompt-generated editable pages, canvas, CMS, branches/review, hosting/publish | source portability, publish/audit, rollback |
| 67 | Zapier Forms/Tables/Interfaces/MCP (`id=8`, `existing::8`) | WF INT REG | E/D; HTTP 200 | Plan inclusion of Tables, Interfaces, and Zapier MCP | schema, credentials/authority, export, audit |
| 68 | Airplane (`id=24`, `airplane.dev`) | internal tools | E/U; HTTP 000 / reader error | No readable claim admitted | lifecycle/successor, identity, all Block Contract fields |
| 69 | Softr AI App Generator (`id=2`, `softr.io`) | app builder/internal tools | E/D; HTTP 200 | Prompt-to-business app, pages/layouts/flows, portals, integrations | data/auth, export, deployment, tenancy |
| 70 | Huddle (`id=43`, `letshuddle.ai`) | internal app builder | E/U; HTTP 200 / reader error | Reachability only; no readable capability claim admitted | readable official surface, identity, all Block Contract fields |
| 71 | OpenAI Agents SDK (`id=13`, `openai.com::agents-sdk`) | agent SDK | E/D; HTTP 200 | Agents/tools, handoffs, guardrails, MCP, sessions, human-in-loop, tracing | runtime authority, tenancy, trace retention, portability |
| 72 | LangGraph (`id=14`, `langchain.com::langgraph`) | agent orchestration | E/U; HTTP 200 / thin redirect | Redirect/reachability only; no capability claim admitted | readable official target, identity continuity, all Block Contract fields |
| 73 | CrewAI (`id=15`, `crewai.com`) | agent orchestration | E/D; HTTP 200 | Agents/crews/flows, state persistence/resume, guardrails, deployment/monitoring | authority, replay, tenancy, audit, export |
| 74 | AutoGen (`id=16`, `microsoft.com::autogen`) | agent orchestration | E/D; HTTP 200 | Studio, AgentChat, event-driven Core, MCP, Docker executor, gRPC runtime | authority/isolation, export, audit, deployment |

## Field-level dossiers

### Rank 55 — Manus WebDev

Source: [Manus Website API docs](https://open.manus.ai/docs/v2/website) — observed 2026-08-27; HTTP 200; direct first-party docs (`E/D`).

Direct: Manus documents website status, checkpoint listing, publish, metadata update, hosted URLs, public/team/private visibility, asynchronous publish, and checkpoints backed by git commits. It states that publish uses the latest checkpoint, has no public older-checkpoint pinning or unpublish endpoint, and directs takedown requests to support.

Inferred: This suggests a documented website/deployment version model, but does not prove task authority, checkpoint fidelity, live availability, rollback, or recovery. The lack of a public unpublish endpoint makes takedown a governance question, not an implemented capability claim.

Unknown Block Contract fields: task/website schema; input/output ports; agent authority and consent; API/MCP authentication/idempotency; import/export fidelity; tenant isolation; pricing/usage; audit receipts; provenance/rights; maintenance/version pinning; rollback/replay; support/SLA; OEM/white-label. Rights/support gap: git-backed checkpoints and hosted URLs do not establish rights, SBOM, maintenance, support, OEM, or exit terms; no website was created. Falsifier: an official inspect/publish/version-match/takedown receipt contradicting checkpoint ownership, live-version matching, or takedown behavior. Smallest next read-only gate: follow only official Manus docs for auth, export, authority, tenancy, audit, support, maintenance, rollback, and OEM terms.

### Rank 56 — UiPath

Source: [UiPath pricing](https://www.uipath.com/pricing) — observed 2026-08-27; HTTP 200; direct first-party pricing/product page (`E/D`).

Direct: The page positions UiPath around agentic automation, scaling, securing/governing, and deployment. It names orchestration of agents, robots, and people and links Studio, Orchestrator, Test Cloud, and coding-agent products. It is not treated as account-specific licensing or quota evidence.

Inferred: The navigation indicates a broad automation/governance ecosystem, but not a typed robot/agent authority model, API, or deployment outcome. Pricing-page reachability does not prove plan availability. Unknown Block Contract fields: workflow/robot schema; prompt/design/repository input; data/auth/vault scope; agent authority/approval; API/MCP; import/export; deployment parity; tenancy; pricing detail; audit; portability; maintenance; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: positioning does not establish provenance, OEM, SBOM, maintenance, support, or exit; no account, vault, robot, or plan was accessed. Falsifier: a typed public action/test/approval receipt contradicting the described orchestration/governance surface. Smallest next read-only gate: official UiPath pages for agent licensing, APIs, vault/authority, deployment, tenancy, audit, export, support, maintenance, and OEM.

### Rank 57 — Apify

Source: [Apify pricing](https://apify.com/pricing) — observed 2026-08-27; HTTP 200; direct first-party pricing page (`E/D`).

Direct: Apify lists Free, Starter, Scale, Business, and Enterprise plans; compute-unit pricing; Actor and Store spend; storage, transfer, proxy and RAM/concurrency add-ons; enterprise solutions; SLA language; and dedicated expert support. The page presents Actors and AI agents as platform units.

Inferred: Actor publishing, Store distribution, run metering, and add-ons indicate an executable/registry surface, but not Actor authority, provenance, portability, or successful execution. Public pricing is a documented usage model, not a guarantee of current availability or total cost. Unknown: Actor schema; input/output datasets; agent authority/secret scope; API/MCP; source/export fidelity; deployment; tenancy; overage; audit; portability; maintenance; support enforcement; rollback/replay; rights/provenance; OEM/white-label. Rights/support gap: Store and Actor claims do not establish rights to scraped data/code, provenance, OEM, SBOM, maintenance, or exit; no Actor or run was used. Falsifier: a public provenance/secret/runtime receipt showing output or ownership cannot be attributed. Smallest next gate: official docs for Actor API/auth, Store provenance, datasets/export, deployment, tenancy, audit, support/SLA, maintenance, rollback, and OEM.

### Rank 58 — Cloudflare Browser Run

Source: [Cloudflare Browser Run docs](https://developers.cloudflare.com/browser-run/) — observed 2026-08-27; HTTP 200; direct first-party docs (`E/D`), page updated 2026-08-11.

Direct: Cloudflare describes headless Chrome on its global network for automation, scraping, testing, and content generation. It separates stateless Quick Actions from browser sessions controlled by Puppeteer, Playwright, CDP, or Stagehand; names Workers/other-environment deployment; documents JSON extraction; and links limits, pricing, changelog, and MCP resources.

Inferred: The split suggests a stateless/stateful browser Block Contract, but does not prove session authority, retention, tenant isolation, cleanup, or live plan behavior. Unknown: session schema; artifact ports; authority/consent; API/MCP auth/rate limits; import/export; deployment/tenancy; quotas; audit/retention; portability; maintenance; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: browser automation docs do not establish captured-content rights, policy compliance, OEM, support, maintenance, SBOM, or exit; no session or Worker was started. Falsifier: a durable synthetic session ledger contradicting the documented methods, limits, or MCP surface. Smallest next gate: official limits/pricing/auth/session-retention/security/API/MCP/support/maintenance/export/OEM docs.

### Rank 59 — Codeanywhere

Source: [Codeanywhere pricing](https://codeanywhere.com/pricing) — observed 2026-08-27; HTTP 200; direct first-party pricing/feature page (`E/D`).

Direct: The page lists cloud compute/storage/token-oriented resources, environment variables, port forwarding, collaboration, workspace isolation, IAM, SAML, SCIM, RBAC, audit/SIEM, data sovereignty, and GitHub/GitLab/Bitbucket repository connection.

Inferred: Isolation and governance rows make the product relevant to execution and tenancy review, but a feature matrix is not a security receipt or plan proof. Git integration suggests a handoff path, not complete export, rights, or reproducible environment state. Unknown: workspace schema; prompt/agent authority; data/auth/secrets; API/MCP; export/lockfile fidelity; deployment; tenancy semantics; overage; audit retention; portability; maintenance; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: feature rows and Git integration do not establish provenance, OEM, SBOM, maintenance, support, or exit; no repo/workspace/payment was accessed. Falsifier: an environment/source/secret cleanup receipt contradicting workspace governance or Git handoff. Smallest next gate: official docs for API, workspace/auth, secrets, export, deployment, tenancy, audit, pricing, support, maintenance, rollback, and OEM.

### Rank 60 — Airtable Omni/Cobuilder

Source: [Airtable Omni support](https://support.airtable.com/articles/1744327578-using-omni-ai-in-airtable) — observed 2026-08-27; HTTP 200; direct first-party support page (`E/D`).

Direct: Airtable documents Omni creating/updating automations, editing records/fields/cells, renaming fields, extracting uploaded-document points, and creating/deleting standalone forms. It asks users to provide context, guardrails, data, formatting, and explicit scope. Airtable says Omni mirrors the interacting user’s permissions, can act only where that user can act, and is constrained by field/table permissions; Owner/Creator permissions govern Omni settings and internet access.

Inferred: Permission mirroring and explicit settings are documented authority signals, but no action, permission check, audit record, or data boundary was observed. The base/interface context suggests a registry/data-app surface, not a portable Block Contract. Unknown: base/interface schema; ports; permission enforcement receipt; authority/consent receipt; API/MCP; import/export; deployment; tenancy; pricing; audit retention; portability; maintenance; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: permission mirroring does not establish rights/provenance, OEM, SBOM, maintenance, support, or exit; no base or client data was accessed. Falsifier: a public rebuild preserving permissions, bindings, and guardrails outside Airtable. Smallest next gate: official support/developer pages for API/MCP, export, permission/audit, tenancy, pricing, support, maintenance, rollback, and OEM.

### Rank 61 — Onlook

Source: [Onlook core features](https://docs.onlook.com/getting-started/core-features) — observed 2026-08-27; HTTP 200; direct first-party docs (`E/D`).

Direct: Onlook describes visual React component editing, drag/drop/resize/position and text/image edits, Tailwind styling, AI assistance, Figma import, React conversion, data-source connections, and GitHub editing.

Inferred: This is a design-to-code/source-adjacent surface, but the page does not prove source-map fidelity, dependency preservation, rights, or a successful Git handoff. Figma import plus data connections raises authority/provenance questions; no project or external data was used. Unknown: component schema; ports; design/data/auth scope; agent authority/consent; API/MCP; import/export/source fidelity; deployment; tenancy; pricing; audit; portability; maintenance; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: Figma/React claims do not establish design rights, generated-code provenance, OEM, support, maintenance, SBOM, or exit; no file/project/repo was accessed. Falsifier: a React fixture with source-map, dependency, license, and component-parity evidence. Smallest next gate: official docs for project integration, export/Git, API/MCP, data authority, pricing, deployment, support, maintenance, rollback, and OEM.

### Rank 62 — Visily

Source: [Visily Export to Code](https://support.visily.ai/portal/en/kb/articles/how-to-export-designs-to-code) — observed 2026-08-27; HTTP 200; direct first-party support article (`E/D`).

Direct: Visily states that Export to Code is a paid Pro/Business feature and exports screens only. It lists React, Vue, and HTML output, ZIP download, AI layout versus static layout, 15 AI credits per screen for AI layout, and up to 10 screens per export.

Inferred: ZIP/formats provide a concrete export surface, but not complete application fidelity, responsive/accessibility correctness, asset rights, or portable behavior. Plan/credit gating is an availability unknown; no paid feature was accessed. Unknown: screen schema; ports; data/auth; agent authority; API/MCP; export fidelity/assets/rights; deployment; tenancy; pricing beyond article; audit; portability; maintenance; support/SLA; rollback/replay; OEM/white-label. Rights/support gap: format/ZIP delivery does not establish design/asset rights, provenance, OEM, SBOM, maintenance, support, or exit; no export was downloaded. Falsifier: a responsive/accessibility/asset fixture showing the documented formats cannot preserve the handoff. Smallest next gate: official support/developer pages for schema, API/MCP, pricing, deployment, tenancy, audit, support, maintenance, rollback, and OEM.

### Rank 63 — Uizard

Source: [Uizard pricing](https://uizard.io/pricing/) — observed 2026-08-27; HTTP 200; direct first-party pricing page (`E/D`).

Direct: Uizard publishes Free and Pro examples, AI-generation allowances, project counts, templates, private projects, React/CSS handoff, JPG/PNG/PDF exports, team asset libraries, and custom brand assets.

Inferred: Public pricing and React/CSS handoff indicate a design/prototype and developer-handoff surface, but not component fidelity, responsive behavior, or complete export. Plan-gated generation/handoff is not account availability or execution evidence. Unknown: project/screen schema; ports; data/auth; agent authority; API/MCP; complete export and asset fidelity; deployment; tenancy; quotas; audit; portability; maintenance; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: handoff/export does not establish design/asset rights, generated-code provenance, OEM, SBOM, maintenance, support, or exit; no account or export was accessed. Falsifier: a public handoff fixture that fails to preserve components, assets, or responsive states. Smallest next gate: official Uizard pages for export, API/MCP, design authority, deployment, tenancy, audit, support, maintenance, rollback, rights, and OEM.

### Rank 64 — Bubble

Source: [Bubble AI app builder](https://bubble.io/ai-app-builder) — observed 2026-08-27; HTTP 200; direct first-party product page (`E/D`).

Direct: Bubble describes AI-assisted web and native mobile app building with a shared backend/database, design/data/logic in one platform, App Store and Google Play publishing, and an Agent choice between editing and chatting. The page includes SOC 2 Type II/GDPR-ready processing language.

Inferred: Bubble presents an integrated visual/data/workflow builder with publishing, but the page does not prove export, authority, tenant isolation, or successful store deployment. Compliance language is vendor positioning, not a lane-specific audit or data-processing receipt. Unknown: app/schema; ports; data/auth/plugin scope; authority/consent; API/MCP; import/export; deployment/store handoff; tenancy; pricing; audit; portability; maintenance; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: integrated backend and publishing claims do not establish provenance, OEM, SBOM, maintenance, support, or exit; no app/database/plugin/store process was accessed. Falsifier: a clean-room rebuild preserving app/data/logic behavior outside Bubble. Smallest next gate: official Bubble docs for API/plugin/export, auth, deployment, tenancy, pricing, audit, support, maintenance, rollback, and OEM.

### Rank 65 — Plasmic

Source: [Plasmic](https://www.plasmic.app/) — observed 2026-08-27; HTTP 200; direct first-party homepage (`E/D`).

Direct: Plasmic says it integrates with existing codebases, leverages existing components, supports branching and multiplayer collaboration, and integrates pages into current applications rather than using iframes. CMS/product/deployment navigation is visible.

Inferred: Existing-codebase/component integration indicates a source-adjacent design/CMS surface, but not dependency fidelity, provenance, export, or deployment behavior. Branching may support change isolation, but no rollback or audit receipt is established. Unknown: component/CMS schema; ports; data/auth; agent authority; API/MCP; import/export/source fidelity; deployment; tenancy; pricing; audit; portability; maintenance; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: codebase/CMS integration does not establish content/component rights, OEM, SBOM, maintenance, support, or exit; no codebase/project was accessed. Falsifier: a component/CMS provenance round trip showing missing lineage, dependencies, or content ownership. Smallest next gate: official docs for code integration, API/export, CMS/data authority, deployment, tenancy, pricing, audit, support, maintenance, rollback, and OEM.

### Rank 66 — Framer

Source: [Framer AI](https://www.framer.com/ai/) — observed 2026-08-27; HTTP 200; direct first-party product page (`E/D`).

Direct: Framer states that its AI agent creates editable pages, sections, copy, and visuals from prompts or existing projects. It describes canvas refinement, components, breakpoints, effects, CMS, branches/review, hosting, redirects, analytics, and publishing approved changes from the same platform.

Inferred: Editable layers, branches/review, and publishing indicate a documented design/lifecycle surface, but do not prove source portability, authority, audit, or publish success. Branching may support rollback, but no rollback receipt or retention guarantee is present. Unknown: page/layer schema; ports; data/auth; agent authority/consent; API/MCP; import/export; deployment; tenancy; pricing; audit; portability; maintenance; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: editable layers/CMS/publishing do not establish provenance, OEM, SBOM, maintenance, support, or exit; no site/CMS/publish action was used. Falsifier: a public page/CMS/component fixture that cannot reproduce outside Framer. Smallest next gate: official docs for API/export, CMS/auth, branch/review/audit, deployment, tenancy, pricing, support, maintenance, rollback, rights, and OEM.

### Rank 67 — Zapier Forms/Tables/Interfaces/MCP

Source: [Zapier plan update](https://help.zapier.com/hc/en-us/articles/39645433045773-Zapier-plan-updates-Tables-Interfaces-and-MCP-now-included) — observed 2026-08-27; HTTP 200; direct first-party support article (`E/D`), updated 2026-08-21.

Direct: Zapier states that Tables, Interfaces, and Zapier MCP are included in Free, Pro, and Team plans without separate add-ons. The article is a plan-entitlement announcement; it does not itself document schema, export, authority, audit, or run behavior.

Inferred: The update indicates a current product-family relationship, not complete interoperability or portability. Plan inclusion is not evidence that a particular account has access or that an MCP call succeeds. Unknown: table/interface/workflow schema; ports; data/auth; authority/consent; API/MCP contract; import/export; deployment; tenancy; pricing limits; audit; portability; maintenance; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: plan inclusion does not establish provenance, OEM, SBOM, maintenance, support, or exit; no account, connected app, table, interface, or MCP server was accessed. Falsifier: a public export containing schedules, tools, retries, credential placeholders, and audit data that cannot reconstruct the documented family. Smallest next gate: official help/developer pages for MCP/API, export, auth, deployment, tenancy, audit, pricing, support, maintenance, rollback, and OEM.

### Rank 68 — Airplane

Source: [Airplane](https://www.airplane.dev/) — observed 2026-08-27; HTTP 000 in the bounded curl probe and bounded reader internal error; `E/U`.

Direct: Only the exact Phase-3 first-party URL probe is admitted. No product, pricing, API, export, deployment, or lifecycle capability claim is admitted. Inferred: the access failure may be a moved, retired, or transient surface, but does not establish lifecycle or identity. All Block Contract fields remain unknown.

Unknown: tool schema; prompt/design/repository input; data/auth; agent authority; API/MCP; import/export; deployment; tenancy; pricing/usage; audit; portability; maintenance; support; rollback; lifecycle; rights/OEM/white-label. Rights/support gap: no reachable page establishes provenance, OEM, SBOM, maintenance, support, or exit; no login or substitute source was used. Falsifier: a readable official successor or first-party shutdown/identity notice. Smallest next gate: re-open the exact URL and follow only an official redirect/status/docs/successor if publicly reachable; no external-source substitution, login, or execution.

### Rank 69 — Softr AI App Generator

Source: [Softr AI App Generator](https://www.softr.io/ai-app-generator) — observed 2026-08-27; HTTP 200; direct first-party product page (`E/D`).

Direct: Softr says its AI builder turns a plain-English prompt into a business app with pages, layouts, and user flows. It positions the product for portals, internal tools, and business software without code, linking databases, workflows, integrations, and mobile apps. “Production-ready” language and a free-start CTA are recorded as marketing claims, not execution receipts.

Inferred: The page documents prompt-to-business-app generation and an internal-tool surface, but not data/auth authority, export fidelity, deployment, or tenant isolation. Unknown: app schema; ports; data/auth; authority/consent; API/MCP; import/export; deployment; tenancy; pricing/usage; audit; portability; maintenance; support/SLA; rollback/replay; lifecycle; rights/OEM/white-label. Rights/support gap: generation claims do not establish provenance, OEM, SBOM, maintenance, support, or exit; no account/database/generated app was accessed. Falsifier: a clean-room or direct first-party fixture contradicting the app-generation surface or showing no usable handoff. Smallest next gate: official Softr docs/support/pricing for API/MCP, data/auth, export, deployment, tenancy, audit, support, maintenance, rollback, and OEM.

### Rank 70 — Huddle

Source: [Huddle](https://letshuddle.ai/) — observed 2026-08-27; HTTP 200 by curl but bounded reader internal error; `E/U`.

Direct: The exact first-party URL was reachable, but no readable product, pricing, API, export, deployment, or lifecycle claim was available. Inferred: the reader failure may reflect a JavaScript-backed or transient page, but does not establish identity or capability; HTTP reachability is not capability evidence.

Unknown: app schema; prompt/design/repository input; data/auth; authority/consent; API/MCP; import/export; deployment; tenancy; pricing/usage; audit; portability; maintenance; support; rollback; lifecycle; rights/OEM/white-label. Rights/support gap: reachability provides no provenance, OEM, SBOM, maintenance, support, or exit evidence; no alternate non-first-party source was used. Falsifier: a readable first-party page showing a different identity, shutdown, or capability; capability remains unproven. Smallest next gate: re-open through an accessible official static/docs representation and record only readable claims.

### Rank 71 — OpenAI Agents SDK

Source: [OpenAI Agents SDK Python docs](https://openai.github.io/openai-agents-python/) — observed 2026-08-27; HTTP 200; direct first-party SDK docs (`E/D`). No API key, package install, agent run, or tool call was used.

Direct: The docs describe agents with instructions/tools, agents-as-tools and handoffs, input/output guardrails, schema-validated function tools, MCP server tool calling, persistent sessions, human-in-the-loop, sandbox agents with manifest-defined files and resumable sessions, run error handlers, usage, lifecycle, tracing, streaming events, results, and run context.

Inferred: The SDK exposes a documented orchestration/guardrail/session surface relevant to a Block Contract, but the docs do not prove runtime behavior, tool authority, trace persistence, or safety. Sandbox and handoff concepts suggest resumability/delegation, not portability, tenancy, or rollback guarantees. Unknown: agent/tool schema; ports; data/auth/secrets; authority/consent/approval; API/MCP auth; import/export; deployment; tenancy; pricing/usage; audit/trace retention; portability; maintenance; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: docs/examples do not establish provenance, OEM, SBOM, maintenance, support, or exit; no package/key/runtime was used. Falsifier: a public typed tool/guardrail/session receipt contradicting the documented schema, handoff, MCP, or human-in-loop surface. Smallest next gate: official OpenAI developer and exact SDK docs for current API/MCP, tracing, sandbox, auth, export, deployment, pricing, support, maintenance, rollback, and OEM.

### Rank 72 — LangGraph

Source: [LangGraph](https://langchain-ai.github.io/langgraph/) — observed 2026-08-27; HTTP 200 with a thin redirect notice; `E/U`.

Direct: The exact first-party URL returned HTTP 200 and a thin redirect notice. No product, API, export, deployment, tenancy, or lifecycle capability claim is admitted from that page. Inferred: the redirect may indicate documentation relocation, but does not establish identity continuity, capabilities, or lifecycle. All Block Contract fields remain unknown until the official target is directly readable.

Unknown: graph/state schema; prompt/design/repository input; data/auth; agent authority/consent; API/MCP; import/export; deployment; tenancy; pricing/usage; audit; portability; maintenance; support; rollback/replay; lifecycle; rights/OEM/white-label. Rights/support gap: redirect-only evidence provides no provenance, OEM, SBOM, maintenance, support, or exit evidence; no alternate source was used. Falsifier: a readable official LangGraph page showing a different identity or lifecycle. Smallest next gate: follow only the exact page’s official redirect to readable LangGraph docs for state, tools, persistence, API/MCP, deployment, tenancy, audit, support, maintenance, rollback, and OEM; no install or run.

### Rank 73 — CrewAI

Source: [CrewAI docs](https://docs.crewai.com/) — observed 2026-08-27; HTTP 200; direct first-party docs (`E/D`).

Direct: CrewAI describes agents, crews, flows, tools, memory, knowledge, structured outputs, guardrails, observability, flow state, persistence/resume, sequential/hierarchical/hybrid processes, callbacks, human-in-the-loop triggers, enterprise deployment, environments, safe redeploy, monitoring, integrations, API reference, coding-agent guidance, and enterprise console.

Inferred: Persistence/resume, callbacks, guardrails, and deployment form a documented orchestration surface, but do not prove replay, authority enforcement, tenant isolation, or trace retention. “Production ready” is positioning, not a runtime receipt. Unknown: agent/crew/flow schema; ports; data/auth/secrets; authority/consent; API/MCP; export; deployment parity; tenancy; pricing; audit retention; portability; maintenance/versioning; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: docs do not establish provenance, OEM, SBOM, maintenance, support, or exit; no package/account/console was accessed. Falsifier: a public clean-room flow receipt showing state/persistence/resume or guardrails do not survive handoff. Smallest next gate: official docs for API/MCP, state persistence, export, auth, deployment, tenancy, pricing, audit, support, maintenance, rollback, rights, and OEM.

### Rank 74 — AutoGen

Source: [Microsoft AutoGen docs](https://microsoft.github.io/autogen/stable/) — observed 2026-08-27; HTTP 200; direct first-party docs (`E/D`).

Direct: AutoGen describes web-based Studio, AgentChat, event-driven Core for scalable multi-agent systems, deterministic/dynamic business workflows, distributed agents, MCP workbench, Docker command-line code executor, gRPC worker runtime extensions, and Python 3.10+ for the shown AgentChat path.

Inferred: This documents multi-agent orchestration and execution-extension surfaces, but proves no authority, isolation, export, audit, or runtime behavior. Docker/MCP/distributed extension names are integration signals, not security or deployment receipts. Unknown: agent/message/state schema; ports; data/auth/secrets; authority/consent; API/MCP auth; import/export; deployment; tenancy; pricing; audit/tracing; portability; maintenance/versioning; support/SLA; rollback/replay; rights/OEM/white-label. Rights/support gap: framework/extension docs do not establish provenance, OEM, SBOM, maintenance, support, or exit; no package, Studio, executor, or MCP server was run. Falsifier: a clean-room multi-agent receipt contradicting the documented workflow, MCP, or executor surface. Smallest next gate: official docs for message/state schemas, MCP, executors, deployment, auth, export, tenancy, audit, pricing, support, maintenance, rollback, and OEM.

## Adversarial pass, gaps, and next queue

- The three `E/U` records are deliberately not capability rows: Airplane is HTTP 000/reader error; Huddle is HTTP 200/reader error; LangGraph is HTTP 200/thin redirect.
- Pricing and plan inclusion were recorded only as first-party claims. They do not prove entitlement, current quotas, account state, execution, or total cost.
- “Production-ready,” “secure,” compliance, governance, support, and deployment wording was not upgraded to authenticated behavior, audit proof, or implementation status.
- Export, Git, branching, checkpoint, persistence, and publishing language was not upgraded to fidelity, rollback, provenance, rights, or exit proof.
- Every record retains unknown API/MCP, input/output, authority/consent, auth/secrets, tenancy, audit, maintenance, support, rollback, rights/OEM/white-label fields where the inspected source did not resolve them.

Smallest next queue: first re-open the three access-limited official surfaces and record only a readable official successor/redirect; then prioritize public API/auth/export and audit/authority pages for Manus, Apify, Browser Run, Airtable, Zapier, OpenAI Agents SDK, CrewAI, and AutoGen. Any later authenticated behavior, runtime execution, vendor contract, client data, or admission decision remains outside this lane.

## Boundary receipt and verification marker

All 20 JSONL records carry `authenticated_behavior: U`, `vendor_login: false`, `client_data: false`, `browser_side_effects: false`, `execution: false`, `build: false`, `deployment: false`, `benchmark: false`, `scan: false`, `admission: false`, `implementation_authorized: false`, `execution_status: UNEXECUTED`, `admission_status: NOT_ADMITTED`, and `parent_goal_status: active`.

`P6_P2_A_POSTWRITE_PASS` — structural, JSONL, identity/source-parity, boundary, link, and git-diff checks passed before callback. The following exact payload was sent with Herdr to the freshly resolved CENA pane; its visible readback confirmed delivery after an Enter-only retry because the first `pane run` left the composer queued:

```text
[from: RCH-P6-PLATFORM-P2-A] @CENA: DONE.\nArtifacts: phase-6/outputs/platform-p2-evidence-a.md and platform-p2-evidence-a.jsonl; exact ranks 55-74, 20 records, 20 unique identities/URLs; E/D=17, E/U=3; source probe 19 HTTP 200 and Airplane rank 68 HTTP 000 preserved.\nVerification: structural, JSONL, exact Phase-3 identity/source parity 20/20, boundary, link, and git diff PASS.\nLimits/boundary: authenticated behavior U; no login/client-private data/side effects/execution/build/deploy/benchmark/scan/admission; UNEXECUTED/NOT_ADMITTED; parent active; blockers 0. Full AGENT_PACKET in my pane.
```

The callback receipt does not claim authenticated behavior, live implementation, execution, deployment, or admission.
