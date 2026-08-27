# Phase 4 Platform P0 Evidence B — Ranks 8–14

- Lane: `RCH-P4-PLATFORM-P0-B`
- Observed: `2026-08-27`
- Scope: exactly platform-depth triage ranks 8 through 14, seven records.
- Mode: research only.
- Authenticated behavior: **U / unknown for every record**.

## Method and immutable input

The Phase-3 platform-depth triage JSONL was read as the ranking input. Only the seven records with ranks 8–14 were selected; all identity, exact source URLs, unknown fields, rights/OEM/support gaps, lifecycle/access state, falsifier, and next-gate fields were retained. Public-page evidence was limited to the exact first-party URLs in those records. No vendor login, credential, client/private data, browser/runtime action, repository clone, source copy, execution, build, deployment, external write, or admission occurred.

Input: `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-3/outputs/platform-depth-triage.jsonl` (117 records; SHA-256 `f83db8203c4bd87521cd9aae5cadb9599516732076aa7bd627b56f084ae7d05e`).

Reachability and capability are separate: an HTTP response or readable page is reachability evidence; a first-party product/documentation statement is a documented claim; neither establishes authenticated behavior, runtime behavior, portability, safety, rights clearance, or capability proof.

## Scoped records

| Rank | Identity | Access status | Evidence class | Unknown fields | Exact first-party URL(s) |
|---:|---|---|---|---:|---|
| 8 | Databutton → Riff | public_reader_reached_http_200_redirected | E/D | 13 | https://databutton.com/<br>https://riff.ai/ |
| 9 | Anything / Create.xyz | public_reader_reached_http_200 | E/D | 13 | https://www.create.xyz/docs/first-app |
| 10 | ServiceNow App Engine/Now Assist | public_reader_reached; prior_bounded_curl_http_403 | E/D | 13 | https://www.servicenow.com/uk/products/now-platform-app-engine/pricing.html |
| 11 | Devin Desktop | public_reader_reached; prior_bounded_curl_http_429 | E/D | 11 | https://devin.ai/desktop |
| 12 | Make | public_reader_reached; prior_bounded_curl_http_403 | E/D | 11 | https://www.make.com/en/ai-agents |
| 13 | MultiOn | public_reader_reached_http_200_legacy_beta | E/D | 11 | https://docs.multion.ai/welcome |
| 14 | Ona / former Gitpod | public_reader_reached_http_200_current_rebrand | E/D | 12 | https://ona.com/pricing |

### Rank 8 — Databutton → Riff

- Identity: `existing_surface:33`; dedupe key `existing::33`; observed `2026-08-27`.
- Exact first-party URLs: [https://databutton.com/](https://databutton.com/), [https://riff.ai/](https://riff.ai/)
- Access/reachability: **public_reader_reached_http_200_redirected** — https://databutton.com/ redirected to https://riff.ai/; the current Riff first-party page was readable.
- Evidence class: `E/D`; direct claims are documented first-party claims, not empirical behavior.
- Direct claims:
  - The public Databutton URL redirects to the Riff first-party site; this is a lifecycle/identity continuity signal, not a capability proof. ([source](https://databutton.com/))
  - Riff describes AI agents for quoting, procurement, planning, and logistics. ([source](https://riff.ai/))
  - Riff states that agents work from real system data through deterministic, controlled tools and team-defined guardrails; the page lists ERP read/write, contract repository, and purchase approval examples. ([source](https://riff.ai/))
  - Riff states that actions are traceable and reversible and displays SOC 2, ISO 27001, and GDPR assertions; these remain vendor-documented claims, not independently verified receipts. ([source](https://riff.ai/))
- Inferred claims:
  - The redirect plus Riff operational-agent positioning makes this a high-value continuity, authority, and integration read, but migration, export, tenancy, and rollback behavior remain unknown. — inference only; not capability proof.
- Unknown Block Contract fields (`U`): data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label
- Rights/OEM/support/SBOM/maintenance: rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`.; license, ownership, provenance, SBOM, maintenance, support, OEM, and attribution remain unknown.
- Falsifier: A future read-only identity/migration review falsifies the continuity lead if the canonical successor, ownership, or handoff path cannot be established without authenticated access or if the documented operational boundary is materially absent. (not run).
- Next read-only gate: Re-open Databutton and Riff official pages and follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page; no login or execution.

### Rank 9 — Anything / Create.xyz

- Identity: `existing_surface:35`; dedupe key `existing::35`; observed `2026-08-27`.
- Exact first-party URLs: [https://www.create.xyz/docs/first-app](https://www.create.xyz/docs/first-app)
- Access/reachability: **public_reader_reached_http_200** — The current Create.xyz/Anything first-app documentation was readable and exposes the current first-app flow; the triage record retains the prior redirect/freshness signal.
- Evidence class: `E/D`; direct claims are documented first-party claims, not empirical behavior.
- Direct claims:
  - Anything describes going from an idea to a working app in one conversation, with the agent building from the first message. ([source](https://www.create.xyz/docs/first-app))
  - The page lists web/mobile screens, AI, databases, sign-up/login, backend server logic and scheduled tasks/API calls, and payments as building blocks. ([source](https://www.create.xyz/docs/first-app))
  - The page documents iterative design/feature prompts, builder preview/QR testing, and publishing web apps or submitting mobile apps. ([source](https://www.create.xyz/docs/first-app))
  - The public navigation exposes separate API/CLI, integrations, export, API-key, and account areas; this page does not establish their access or parity. ([source](https://www.create.xyz/docs/first-app))
- Inferred claims:
  - This is a strong full-stack builder adjacency signal for prompt-to-app, data/auth, UI assembly, and publish flows, but it does not prove reproducible artifact export, backend/auth behavior, tenancy, or support. — inference only; not capability proof.
- Unknown Block Contract fields (`U`): data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label
- Rights/OEM/support/SBOM/maintenance: rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`.; license, ownership, provenance, SBOM, maintenance, support, OEM, and attribution remain unknown.
- Falsifier: A future read-only documentation review falsifies the candidate lead if the documented app-building path, external backend/auth/scheduled-work surfaces, or attributable export boundary cannot be established from official pages. (not run).
- Next read-only gate: Re-open the exact first-party first-app page and follow only official navigation to API/CLI, integrations, export, auth/backend, deployment, support, and lifecycle documentation; no login or execution.

### Rank 10 — ServiceNow App Engine/Now Assist

- Identity: `existing_surface:42`; dedupe key `existing::42`; observed `2026-08-27`.
- Exact first-party URLs: [https://www.servicenow.com/uk/products/now-platform-app-engine/pricing.html](https://www.servicenow.com/uk/products/now-platform-app-engine/pricing.html)
- Access/reachability: **public_reader_reached; prior_bounded_curl_http_403** — The public ServiceNow page was readable through the web reader; the Phase-3 bounded curl observation remains HTTP 403/HTTP-gated and is preserved.
- Evidence class: `E/D`; direct claims are documented first-party claims, not empirical behavior.
- Direct claims:
  - ServiceNow lists App Engine Foundation as AI-assisted app development with low-code tools, app components, Workspace Builder, custom tables, scoped apps, and Virtual Agent. ([source](https://www.servicenow.com/uk/products/now-platform-app-engine/pricing.html))
  - The page describes App Engine Prime as autonomous app development with full AI agent capabilities and enterprise-scale governance. ([source](https://www.servicenow.com/uk/products/now-platform-app-engine/pricing.html))
  - The page states that Now Assist for App Engine can build and deploy in-app AI agents at runtime and lists lifecycle management, role-based workspaces, custom tables, and scoped applications. ([source](https://www.servicenow.com/uk/products/now-platform-app-engine/pricing.html))
  - The page directs visitors to a custom quote/demo rather than exposing a complete public price receipt. ([source](https://www.servicenow.com/uk/products/now-platform-app-engine/pricing.html))
- Inferred claims:
  - The page supports an enterprise governed-workflow/app-builder research lead, but HTTP-gated access and absent public receipts leave pricing, API/MCP, export, tenancy, audit, support, and rollback unresolved. — inference only; not capability proof.
- Unknown Block Contract fields (`U`): data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label
- Rights/OEM/support/SBOM/maintenance: rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`.; license, ownership, provenance, SBOM, maintenance, support, OEM, and attribution remain unknown.
- Falsifier: A future read-only scoped-app review falsifies the lead if the claimed cross-instance governance/agent boundary cannot be documented without private access or if no attributable promotion/rollback path exists. (not run).
- Next read-only gate: Re-open the exact official App Engine pricing/product pages and follow only official links to API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, and lifecycle details; preserve the HTTP-gated result and do not bypass it.

### Rank 11 — Devin Desktop

- Identity: `existing_surface:48`; dedupe key `existing::48`; observed `2026-08-27`.
- Exact first-party URLs: [https://devin.ai/desktop](https://devin.ai/desktop)
- Access/reachability: **public_reader_reached; prior_bounded_curl_http_429** — The public Devin Desktop page was readable through the web reader; the Phase-3 bounded curl observation remains HTTP 429/rate-gated and is preserved.
- Evidence class: `E/D`; direct claims are documented first-party claims, not empirical behavior.
- Direct claims:
  - Devin describes Desktop as a command center for managing agents, with Spaces, a Kanban view, and multi-agent management. ([source](https://devin.ai/desktop))
  - The page states that Devin Desktop is the new name for Windsurf and describes local/cloud agent choices, shared workspaces, and preserved context. ([source](https://devin.ai/desktop))
  - The page lists custom background agents plus MCP servers/extensions such as Slack, Linear, Notion, Figma, Stripe, Vercel, Datadog, and Atlassian. ([source](https://devin.ai/desktop))
  - The page publishes plan/pricing labels and states that plan, pricing, extensions, settings, and in-progress work carry over during the rebrand; these are first-party claims, not migration receipts. ([source](https://devin.ai/desktop))
- Inferred claims:
  - This is a high-value agent-authority, integration, and migration-continuity lead, while local/cloud boundaries, task retention, export, audit, tenancy, and rollback remain unverified. — inference only; not capability proof.
- Unknown Block Contract fields (`U`): agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label
- Rights/OEM/support/SBOM/maintenance: rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`.; license, ownership, provenance, SBOM, maintenance, support, OEM, and attribution remain unknown.
- Falsifier: A future read-only migration/retention review falsifies the lead if the rebrand cannot preserve the documented plan/settings/workflow identity or if the task and artifact retention boundary is not attributable. (not run).
- Next read-only gate: Re-open the exact Devin Desktop page and follow only official docs to task receipts, retention/migration, API/MCP, export, deployment/tenancy, audit, support, and rollback documentation; do not authenticate or execute.

### Rank 12 — Make

- Identity: `existing_surface:53`; dedupe key `existing::53`; observed `2026-08-27`.
- Exact first-party URLs: [https://www.make.com/en/ai-agents](https://www.make.com/en/ai-agents)
- Access/reachability: **public_reader_reached; prior_bounded_curl_http_403** — The public Make AI Agents page was readable through the web reader; the Phase-3 bounded curl observation remains HTTP 403/HTTP-gated and is preserved.
- Evidence class: `E/D`; direct claims are documented first-party claims, not empirical behavior.
- Direct claims:
  - Make describes AI Agents that can be shared across teams/workflows and orchestrate processes across 3000+ apps in a visual platform. ([source](https://www.make.com/en/ai-agents))
  - The page states that users can see agent decisions, tools, and workflow behavior and use reusable agent setups. ([source](https://www.make.com/en/ai-agents))
  - The page lists CRM, email, tickets, documents, databases, and other integrations and describes intake, triage, follow-ups, and analysis use cases. ([source](https://www.make.com/en/ai-agents))
  - The FAQ states that users can set rules, add manual approvals, or stop an agent at specific points; the page presents this as product behavior, not an empirical test receipt. ([source](https://www.make.com/en/ai-agents))
- Inferred claims:
  - This is a strong workflow/integration/authority research lead, but public documentation does not prove credential scope, multi-tenant isolation, export, audit, replay, or rollback behavior. — inference only; not capability proof.
- Unknown Block Contract fields (`U`): agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label
- Rights/OEM/support/SBOM/maintenance: rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`.; license, ownership, provenance, SBOM, maintenance, support, OEM, and attribution remain unknown.
- Falsifier: A future read-only governance review falsifies the lead if the documented approval/stop/visibility surfaces cannot be mapped to an attributable workflow boundary or if no denied/replay evidence path is documented. (not run).
- Next read-only gate: Re-open the exact official AI Agents page and follow only official links to API/MCP, export, deployment/tenancy, credential authority, audit, support, maintenance, and rollback documentation; preserve the HTTP-gated result and do not bypass it.

### Rank 13 — MultiOn

- Identity: `existing_surface:61`; dedupe key `existing::61`; observed `2026-08-27`.
- Exact first-party URLs: [https://docs.multion.ai/welcome](https://docs.multion.ai/welcome)
- Access/reachability: **public_reader_reached_http_200_legacy_beta** — The first-party MultiOn documentation was readable and explicitly labels itself Agent V1 Beta; the triage record preserves the moved/legacy-beta continuity state.
- Evidence class: `E/D`; direct claims are documented first-party claims, not empirical behavior.
- Direct claims:
  - The documentation identifies itself as MultiOn Agent V1 Beta and directs readers to verify outputs and use support/Discord channels. ([source](https://docs.multion.ai/welcome))
  - MultiOn describes autonomous web agents using natural-language commands and an Agent API quick start. ([source](https://docs.multion.ai/welcome))
  - The page lists remote sessions, native proxy support, a Chrome browser extension, structured data scraping, and parallel agents. ([source](https://docs.multion.ai/welcome))
  - The public docs navigation exposes API Reference, Release Notes, sessions, skills, and cookbook examples, but this welcome page does not establish current availability or authenticated behavior. ([source](https://docs.multion.ai/welcome))
- Inferred claims:
  - This is a historical/current-continuity lead for browser-agent authority and scraping, but Beta labeling and public-site movement make current API, pricing, ownership, support, and exit especially uncertain. — inference only; not capability proof.
- Unknown Block Contract fields (`U`): agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label
- Rights/OEM/support/SBOM/maintenance: rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`.; license, ownership, provenance, SBOM, maintenance, support, OEM, and attribution remain unknown.
- Falsifier: A future read-only continuity review falsifies the lead if the current API/owner cannot be established from official pages or if the documented Agent V1 surfaces are no longer attributable to a maintained product. (not run).
- Next read-only gate: Re-open the exact official MultiOn welcome/API/release-note pages and follow only first-party navigation to current API, authority, sessions, support, pricing, export, maintenance, and exit documentation; no playground, login, or execution.

### Rank 14 — Ona / former Gitpod

- Identity: `existing_surface:67`; dedupe key `existing::67`; observed `2026-08-27`.
- Exact first-party URLs: [https://ona.com/pricing](https://ona.com/pricing)
- Access/reachability: **public_reader_reached_http_200_current_rebrand** — The current Ona pricing page was readable and presents current Core/Enterprise, OCU, cloud/multi-tenant, and self-hosted managed-VPC comparisons; the triage rebrand signal is preserved.
- Evidence class: `E/D`; direct claims are documented first-party claims, not empirical behavior.
- Direct claims:
  - Ona presents Core and Enterprise plans using Ona Compute Units (OCUs) for environment runtime and agent conversations, with included and add-on credit examples. ([source](https://ona.com/pricing))
  - The pricing comparison lists Ona Cloud as multi-tenant for Core and self-hosted, Ona-managed VPC for Enterprise. ([source](https://ona.com/pricing))
  - The page lists parallel environments, environment auto-delete, security/policy controls, secrets, automation limits, and support levels by plan; displayed dashes/custom values remain plan-specific unknowns rather than universal absence claims. ([source](https://ona.com/pricing))
  - The FAQ states that OCUs cover agent planning/coding/automation and environment infrastructure, and describes environment deployment options including AWS and customer VPCs managed by Ona. ([source](https://ona.com/pricing))
- Inferred claims:
  - This is a high-value runtime/deployment/economics and rebrand-continuity lead, but plan-specific API/SDK, audit, SSO, SLA, export, artifact migration, ownership, and rollback details remain unresolved. — inference only; not capability proof.
- Unknown Block Contract fields (`U`): agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label
- Rights/OEM/support/SBOM/maintenance: rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`.; license, ownership, provenance, SBOM, maintenance, support, OEM, and attribution remain unknown.
- Falsifier: A future read-only rebrand/deployment review falsifies the lead if the current Ona identity or cloud/VPC/OCU model cannot be reconciled to an attributable source, or if no migration/artifact receipt path exists. (not run).
- Next read-only gate: Re-open Ona pricing and only official linked docs for current rebrand migration, API/SDK, deployment/tenancy, SSO/audit, support/SLA, ownership, artifact export, and rollback; no login or execution.

## Cross-record rights and boundary statement

Every record preserves license/rights/provenance/OEM/support/maintenance/SBOM unknowns. No license signal was converted into legal clearance, no vendor claim was converted into an empirical result, and no authenticated behavior was tested. Every falsifier is marked not run and every next gate is read-only and future-authorized.

Boundary fields for all seven records: research-only; authenticated behavior `U`; execution `UNEXECUTED`; admission `NOT_ADMITTED`; implementation authorization `false`; no login, credentials, client/private data, browser/runtime action, clone, source copy, execution, build, deployment, external write, or admission decision.

## Verification

Post-write structural, JSONL, link, boundary, and git-diff checks: PASS. The register contains exactly seven normalized rank records, ranks 8–14 once each, with absolute first-party source URLs, direct/inferred/gated/unknown fields, falsifiers, next read-only gates, and boundary fields.

## Fresh CENA callback receipt

- Status: `sent_and_verified`.
- Target: CENA freshly resolved with `/Users/shaansisodia/.local/bin/herdr --session herdr-2 pane list`; coordinator pane `w659e02f80e5bb1-1` was read before delivery.
- Message: `[from: RCH-P4-PLATFORM-P0-B] @CENA: DONE. Wrote phase-4/outputs/platform-p0-evidence-b.md and platform-p0-evidence-b.jsonl for exactly ranks 8-14 (7 normalized records, 8 first-party URLs); direct/inferred/gated/thin/unknown fields, falsifiers, next read-only gates, and boundaries preserved. Structural/JSONL/link/boundary/git checks PASS; authenticated behavior U, execution UNEXECUTED, admission NOT_ADMITTED, parent active; 0 blockers.`
- Herdr verification: initial delivery remained queued; Enter-only retries were used without retyping, and the receipt became visible and was acknowledged in the CENA coordinator pane.
