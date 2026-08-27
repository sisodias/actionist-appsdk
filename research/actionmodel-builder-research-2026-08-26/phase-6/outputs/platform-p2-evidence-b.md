# Phase 6 Platform P2 Evidence B

**Lane:** `RCH-P6-PLATFORM-P2-B`  
**Observed:** `2026-08-27`  
**Scope:** Phase-3 platform-depth ranks **75–94**, exactly one normalized record per rank.

## Contract and method

This lane re-read the Phase-3 platform-depth triage and checked exactly the listed public first-party URLs for ranks 75–94. Evidence is limited to directly visible first-party documentation or access observations; it does not establish runtime capability, authority, portability, rights clearance, support, or maintenance. Authenticated behavior remains **U — not tested** for every record.

No vendor login, credentials, client/private data, browser attachment or side effect, runtime action, repository clone, source copy, source execution, build, deployment, benchmark, license/SBOM scan, admission, or implementation occurred. Hyperbrowser returned a thin one-line reader result. Tray.ai is recorded with current public reachability plus the Phase-3 historical 403 gate. Neon and Directus redirects remain explicit.

## Inputs

- Phase-3 triage: `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-3/outputs/platform-depth-triage.jsonl` — 117 records — SHA-256 `f83db8203c4bd87521cd9aae5cadb9599516732076aa7bd627b56f084ae7d05e`.
- Phase-6 program/state: `research/actionmodel-builder-research-2026-08-26/phase-6/PHASE-6-PROGRAM.md` and `phase-6/phase-6-state.json` (read before work; only the P2-B lane object is updated).
- Scope is disjoint from P2-A (55–74) and P2-C (95–117): ranks 75–94 only.

## Scope index

| Rank | Surface | Access | Evidence | Unknown fields | Source |
|---:|---|---|---|---:|---|
| 75 | LlamaIndex | public_reader_reached_http_200 | E/D | 16 | https://www.llamaindex.ai/ |
| 76 | Temporal | public_reader_reached_http_200 | E/D | 16 | https://temporal.io/ |
| 77 | Trigger.dev | public_reader_reached_http_200 | E/D | 16 | https://trigger.dev/ |
| 78 | Windmill | public_reader_reached_http_200 | E/D | 16 | https://www.windmill.dev/ |
| 79 | Tray.ai | public_reader_reached_http_200_current_triage_403 | E/U | 16 | https://tray.ai/ |
| 80 | Browserless | public_reader_reached_http_200 | E/D | 16 | https://www.browserless.io/ |
| 81 | Hyperbrowser | public_reader_thin_one_line | E/D | 16 | https://www.hyperbrowser.ai/ |
| 82 | BrowserGym | public_reader_reached_http_200_public_repo_page | E/D | 16 | https://github.com/ServiceNow/BrowserGym |
| 83 | Render | public_reader_reached_http_200 | E/D | 16 | https://render.com/ |
| 84 | Railway | public_reader_reached_http_200 | E/D | 16 | https://railway.com/ |
| 85 | Budibase | public_reader_reached_http_200 | E/D | 16 | https://budibase.com/ |
| 86 | Fly.io | public_reader_reached_http_200 | E/D | 16 | https://fly.io/ |
| 87 | Netlify | public_reader_reached_http_200 | E/D | 16 | https://www.netlify.com/ |
| 88 | Convex | public_reader_reached_http_200 | E/D | 16 | https://www.convex.dev/ |
| 89 | Hasura | public_reader_reached_http_200 | E/D | 16 | https://hasura.io/ |
| 90 | Neon | public_reader_reached_http_200_redirected_to_neon_com | E/D | 16 | https://neon.tech/ |
| 91 | agentry | public_reader_reached_http_200 | E/D | 16 | https://agentry.run/ |
| 92 | Lowco | public_reader_reached_http_200 | E/D | 16 | https://lowco.ai/internal-tools-builder |
| 93 | Chrome DevTools for agents | public_reader_reached_http_200 | E/D | 16 | https://developer.chrome.com/docs/devtools/agents/get-started |
| 94 | Directus | public_reader_reached_http_200_redirected_to_directus_com | E/D | 16 | https://directus.io/ |

## Normalized evidence records

### Rank 75 — LlamaIndex

- **Identity:** source record 17; dedupe key `llamaindex.ai`; status `new_candidate`; category `agent/data framework`.
- **Source:** [https://www.llamaindex.ai/](https://www.llamaindex.ai/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party LlamaIndex homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page presents LlamaParse document parsing and extraction, with structured extraction, indexing, and retrieval for AI workflows. _(locator: homepage product sections)_
  - The page describes building and deploying end-to-end document agents and multi-step document agents for knowledge work. _(locator: homepage lines 142–153 and 320–326)_
  - The page presents LiteParse as open-source local document parsing; this is a vendor page statement, not a license clearance for reuse in this lane. _(locator: homepage LiteParse section)_
- **Inferred claims (not capability proof):**
  - The public surface is an agent/data framework and document-intelligence reachability lead, but API authority, data handling, export, tenancy, and operational support remain unverified.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://www.llamaindex.ai/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 76 — Temporal

- **Identity:** source record 18; dedupe key `temporal.io`; status `new_candidate`; category `durable orchestration`.
- **Source:** [https://temporal.io/](https://temporal.io/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Temporal homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Temporal describes an open-source platform for applications with agentic capabilities. _(locator: homepage lines 31–35)_
  - The page describes persisted application state, retries, task queues, signals, and timers, and offers self-hosted or Temporal Cloud hosting paths. _(locator: homepage lines 74–78)_
  - The page states its project is MIT-licensed and presents self-hosting and cloud hosting options; no independent license or deployment verification was performed. _(locator: homepage lines 164–183)_
- **Inferred claims (not capability proof):**
  - The public surface is a durable-orchestration reachability lead for long-running agent workflows, but authority, tenancy, audit, portability, and support behavior remain unknown.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://temporal.io/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 77 — Trigger.dev

- **Identity:** source record 19; dedupe key `trigger.dev`; status `new_candidate`; category `agent/workflow runtime`.
- **Source:** [https://trigger.dev/](https://trigger.dev/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Trigger.dev homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Trigger.dev presents a platform for building AI workflows in TypeScript with long-running tasks, retries, queues, observability, and elastic scaling. _(locator: homepage lines 37–41)_
  - The page lists AI agents, human-in-the-loop, browser automation, scheduled tasks, concurrency, and retries as platform areas. _(locator: homepage feature list)_
  - The page states Trigger.dev is Apache 2.0 licensed, open source, and self-hostable, and lists an official MCP server in its documentation navigation; these are vendor statements, not reuse clearance or runtime testing. _(locator: homepage lines 434–438 and 704–712)_
- **Inferred claims (not capability proof):**
  - The public surface is an agent/workflow-runtime reachability lead with unusually explicit self-host/MCP positioning, but authority, data handling, tenancy, audit, and support remain unverified.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://trigger.dev/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 78 — Windmill

- **Identity:** source record 20; dedupe key `windmill.dev`; status `new_candidate`; category `code-first orchestration`.
- **Source:** [https://www.windmill.dev/](https://www.windmill.dev/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Windmill homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Windmill describes a code-first orchestration platform for internal software, combining workflows, internal apps, and data pipelines. _(locator: homepage lines 5–17)_
  - The page states it is open source and self-hostable, with code/Git collaboration and infrastructure control. _(locator: homepage lines 7–15)_
  - The page presents internal software, AI agents, scheduled tasks, governance, observability, integrations, and a no-lock-in claim; these are vendor statements, not an independent support or portability proof. _(locator: homepage lines 20–24 and 95–105)_
- **Inferred claims (not capability proof):**
  - The public surface is a code-first orchestration and internal-tools reachability lead, but actual tenancy, authority, audit, rollback, maintenance, and OEM terms remain unknown.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://www.windmill.dev/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 79 — Tray.ai

- **Identity:** source record 21; dedupe key `tray.ai`; status `new_candidate`; category `integration automation`.
- **Source:** [https://tray.ai/](https://tray.ai/); observed 2026-08-27; access `public_reader_reached_http_200_current_triage_403`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** The exact first-party Tray.ai homepage was publicly reachable in the reader on 2026-08-27. Phase-3 triage preserved a prior HTTP/source access gate 403; both the historical gate and current reachability are retained.
- **Direct claims:**
  - Tray presents integration, automation, AI agents, and MCP governance across 700+ connectors. _(locator: homepage lines 205–210)_
  - The page describes managed MCP servers, governed connector tools, audit and observability, and agent/workflow governance features. _(locator: homepage lines 208–210)_
  - The page presents enterprise SSO, managed authentication, scoped access, budgets/caps, and an app registry; these are vendor claims and were not tested. _(locator: homepage Helix feature navigation)_
- **Inferred claims (not capability proof):**
  - The public surface is an integration-automation and MCP-governance reachability lead, but current access does not resolve authority, tenancy, portability, support, or OEM gaps.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://tray.ai/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 80 — Browserless

- **Identity:** source record 25; dedupe key `browserless.io`; status `new_candidate`; category `browser runtime`.
- **Source:** [https://www.browserless.io/](https://www.browserless.io/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Browserless homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Browserless presents a browser layer for AI agents with search, scrape, crawl, browser-agent, MCP, and authenticated-profile offerings. _(locator: homepage lines 15–19 and 62–70)_
  - The page states that cloud, managed, or self-hosted deployment paths use the same API and describes session persistence and scaling. _(locator: homepage lines 138–146)_
  - The page displays operational metrics, security/compliance links, and a free-plan usage claim; none were independently tested or treated as a support/SLA guarantee. _(locator: homepage lines 128–146 and 224–246)_
- **Inferred claims (not capability proof):**
  - The public surface is a browser-runtime reachability lead for agent automation, but any authenticated authority, data retention, tenancy, export, and support behavior remains unknown.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://www.browserless.io/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 81 — Hyperbrowser

- **Identity:** source record 26; dedupe key `hyperbrowser.ai`; status `new_candidate`; category `browser runtime`.
- **Source:** [https://www.hyperbrowser.ai/](https://www.hyperbrowser.ai/); observed 2026-08-27; access `public_reader_thin_one_line`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Hyperbrowser homepage was reachable in the reader on 2026-08-27 but returned only a one-line title-level result; no substantive body claim was extracted.
- **Direct claims:**
  - The first-party page title presents Hyperbrowser as web infrastructure for AI agents; the reader returned no matching body text for agent, browser, API, sessions, cloud, or automation. _(locator: title-level access observation)_
- **Inferred claims (not capability proof):**
  - Hyperbrowser remains a browser-runtime reachability lead from the Phase-3 candidate record, but current public evidence is too thin to support a capability claim.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://www.hyperbrowser.ai/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 82 — BrowserGym

- **Identity:** source record 27; dedupe key `github.com::servicenow-browsegym`; status `new_candidate`; category `browser evaluation/open source`.
- **Source:** [https://github.com/ServiceNow/BrowserGym](https://github.com/ServiceNow/BrowserGym); observed 2026-08-27; access `public_reader_reached_http_200_public_repo_page`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** The exact first-party ServiceNow/BrowserGym public repository page was reachable in the reader on 2026-08-27; no repository clone, source checkout, or code execution occurred.
- **Direct claims:**
  - The public repository describes BrowserGym as an open, extensible framework for web-agent research and says it is not a consumer product. _(locator: repository README lines 177–186)_
  - The page lists multiple web-agent benchmarks and explains that BrowserGym can be used to design new web benchmarks. _(locator: repository README lines 192–203)_
  - The public repository exposes README and LICENSE resources and public activity metadata; license terms, dependency/SBOM status, and source rights were not scanned or cleared. _(locator: repository resources and metadata)_
- **Inferred claims (not capability proof):**
  - The public surface is a browser-evaluation/open-source reachability lead rather than a product capability proof; benchmark relevance does not establish production authority, tenancy, or support.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://github.com/ServiceNow/BrowserGym; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 83 — Render

- **Identity:** source record 28; dedupe key `render.com`; status `new_candidate`; category `deployment/runtime`.
- **Source:** [https://render.com/](https://render.com/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Render homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Render presents cloud infrastructure with autoscaling, private networking, persistent disks, infrastructure as code, preview environments, zero-downtime deploys, REST API, and MCP navigation. _(locator: homepage navigation lines 4–26 and 65–85)_
  - The page lists static sites, web services, private services, background workers, cron jobs, Postgres, Key Value, and workflows. _(locator: homepage services navigation)_
  - The page links to security, shared responsibility, DPA, terms, and acceptable-use material; these links do not independently establish the required rights, tenancy, support, or rollback behavior. _(locator: homepage legal navigation)_
- **Inferred claims (not capability proof):**
  - The public surface is a deployment/runtime reachability lead with agent/MCP adjacency, but data authority, tenant isolation, export, maintenance, and OEM status remain unknown.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://render.com/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 84 — Railway

- **Identity:** source record 29; dedupe key `railway.com`; status `new_candidate`; category `deployment/runtime`.
- **Source:** [https://railway.com/](https://railway.com/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Railway homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Railway describes an all-in-one cloud provider where a repository can be connected for auto-configuration, previews, and deployment. _(locator: homepage lines 22–38)_
  - The page describes private/public networking, SSL, load balancing, scaling to global deployment, replicas, metrics, logs, alerts, and dashboards. _(locator: homepage lines 49–104)_
  - The page presents deployment as a vendor-managed workflow; no account, repository, deployment, or rollback was accessed or performed. _(locator: homepage deployment and operations sections)_
- **Inferred claims (not capability proof):**
  - The public surface is a deployment/runtime reachability lead, but agent authority, tenancy, audit, portability, support, rollback, and OEM gaps remain unverified.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://railway.com/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 85 — Budibase

- **Identity:** source record 3; dedupe key `budibase.com`; status `new_candidate`; category `internal tools/low-code`.
- **Source:** [https://budibase.com/](https://budibase.com/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Budibase homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Budibase presents agents, apps, automations, API exploration, connectors, and data tables for internal tools. _(locator: homepage navigation lines 0–20)_
  - The page describes internal tools backed by company data, LLMs, and APIs, with agent request handling and automated approvals/routing/notifications. _(locator: homepage lines 30–38 and 116–128)_
  - The page displays sign-in and sign-up links and enterprise/security navigation; no authenticated behavior or security/support claim was independently tested. _(locator: homepage lines 29–34 and 10–18)_
- **Inferred claims (not capability proof):**
  - The public surface is an internal-tools/low-code reachability lead with agent and workflow adjacency, but data authority, tenancy, export, audit, maintenance, and OEM rights remain unknown.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://budibase.com/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 86 — Fly.io

- **Identity:** source record 30; dedupe key `fly.io`; status `new_candidate`; category `deployment/runtime`.
- **Source:** [https://fly.io/](https://fly.io/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Fly.io homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Fly presents hardware-isolated Linux computers for agents, evaluations, and tools through its Sprites product. _(locator: homepage lines 20–34)_
  - The page describes per-agent computers, MCP servers with persistent disk and egress policy, and hardware-isolated VM execution for untrusted code. _(locator: homepage lines 36–55)_
  - The page describes persistent filesystems, checkpoints, and rollback, while stating the Sprites Block Device is in private beta. _(locator: homepage lines 63–72)_
- **Inferred claims (not capability proof):**
  - The public surface is a deployment/runtime and agent-sandbox reachability lead, but the private-beta boundary and untested authority, tenancy, support, and portability prevent capability closure.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://fly.io/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 87 — Netlify

- **Identity:** source record 32; dedupe key `netlify.com`; status `new_candidate`; category `deployment/runtime`.
- **Source:** [https://www.netlify.com/](https://www.netlify.com/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Netlify homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Netlify presents an app platform for creating with AI or code and deploying to production infrastructure. _(locator: homepage lines 10–24 and 85–89)_
  - The page lists Agent Runners, Deploy Previews, AI Gateway, Functions, Database, Observability, Security, and Edge network features. _(locator: homepage lines 15–24)_
  - The page identifies coding-agent integrations including Claude and Codex and links to documentation, templates, and integrations. _(locator: homepage lines 45–69)_
- **Inferred claims (not capability proof):**
  - The public surface is a deployment/runtime reachability lead with AI/coding-agent adjacency, but data authority, tenancy, audit, export, maintenance, and OEM rights remain unknown.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://www.netlify.com/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 88 — Convex

- **Identity:** source record 34; dedupe key `convex.dev`; status `new_candidate`; category `backend/data runtime`.
- **Source:** [https://www.convex.dev/](https://www.convex.dev/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Convex homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Convex presents a reactive backend with database, functions, workflow, sync, search, file storage, and TypeScript support. _(locator: homepage lines 1–7)_
  - The page describes ACID transactions, end-to-end type safety, caching/scaling, and real-time sync as product properties. _(locator: homepage lines 21–39)_
  - The page presents sandboxed open-source components, retried/parallel background work, checkpointing workflows, and built-in agents with threads/context/vector search. _(locator: homepage lines 46–67)_
- **Inferred claims (not capability proof):**
  - The public surface is a backend/data-runtime reachability lead for agentic applications, but data authority, export, tenancy, audit, support, maintenance, and OEM status remain unverified.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://www.convex.dev/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 89 — Hasura

- **Identity:** source record 35; dedupe key `hasura.io`; status `new_candidate`; category `API/data backend`.
- **Source:** [https://hasura.io/](https://hasura.io/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Hasura homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Hasura presents PromptQL for AI and a Hasura API/GraphQL product for accessing and using data. _(locator: homepage lines 10–15)_
  - The page describes Hasura for APIs and GraphQL as battle-tested and powering user experiences; this is vendor positioning, not empirical validation. _(locator: homepage lines 11–15)_
  - The homepage routes fit assessment through an AI Catalyst Team/demo path; no authenticated or account behavior was accessed. _(locator: homepage lines 2–8)_
- **Inferred claims (not capability proof):**
  - The public surface is an API/data-backend reachability lead with AI query adjacency, but authority, schema export, tenancy, audit, support, maintenance, and OEM rights remain unknown.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://hasura.io/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 90 — Neon

- **Identity:** source record 36; dedupe key `neon.tech`; status `new_candidate`; category `database/runtime`.
- **Source:** [https://neon.tech/](https://neon.tech/); observed 2026-08-27; access `public_reader_reached_http_200_redirected_to_neon_com`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** The exact Phase-3 URL https://neon.tech/ was reachable but redirected by the reader to the current first-party https://neon.com/ page on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The current first-party page presents Neon as a backend for apps and agents built on Lakebase Postgres, with database, auth, functions, object storage, and an AI Gateway. _(locator: current first-party page lines 15–31)_
  - The page describes autoscaling and instant branching, including copy-on-write, anonymization, and ephemeral branches for development/testing. _(locator: current first-party page lines 53–92)_
  - The page exposes login/sign-up links and MCP-client connection positioning; no authenticated behavior or data access was tested. _(locator: current first-party page lines 10–18 and 46–52)_
- **Inferred claims (not capability proof):**
  - The public surface is a database/runtime reachability lead for apps and agents, but auth authority, tenant isolation, export, audit, support, maintenance, and OEM rights remain unknown.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://neon.tech/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 91 — agentry

- **Identity:** source record 44; dedupe key `agentry.run`; status `new_candidate`; category `private-infra internal apps`.
- **Source:** [https://agentry.run/](https://agentry.run/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party agentry homepage was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - agentry presents internal apps on infrastructure the customer owns and states that code and data remain on that infrastructure. _(locator: homepage lines 2–8)_
  - The page describes isolated server environments, encrypted connections, per-organization isolation, audit logs, and runtime/deploy rollback to previous container builds. _(locator: homepage lines 26–47 and 105–132)_
  - The page states that deployments are container images kept in the customer registry and that images can be run elsewhere; this is a vendor claim, not a portability test. _(locator: homepage lines 42–47)_
- **Inferred claims (not capability proof):**
  - The public surface is a private-infrastructure internal-app reachability lead with unusually explicit ownership, isolation, and rollback claims, but implementation, support, OEM, and rights terms remain unverified.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://agentry.run/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 92 — Lowco

- **Identity:** source record 45; dedupe key `lowco.ai`; status `new_candidate`; category `AI internal tools`.
- **Source:** [https://lowco.ai/internal-tools-builder](https://lowco.ai/internal-tools-builder); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Lowco internal-tools-builder page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Lowco presents internal tools backed by a real database, real auth, and Studio workflows. _(locator: page lines 6–13)_
  - The page describes Postgres-compatible storage, row-level policies, SSO/roles/permissions, governed workflows with retries/approvals/audit, and MCP-exposed agent tools. _(locator: page lines 20–40)_
  - The page states that apps can use draft, staging, and production environments with branch/test/publish and zero-downtime rollout; no such lifecycle was exercised. _(locator: page lines 38–40)_
- **Inferred claims (not capability proof):**
  - The public surface is an AI-operable internal-tools reachability lead, but the early-access/demo posture and untested data authority, export, tenancy, support, maintenance, and OEM terms remain material gaps.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://lowco.ai/internal-tools-builder; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 93 — Chrome DevTools for agents

- **Identity:** source record 47; dedupe key `google.com::chrome-devtools-agents`; status `new_candidate`; category `browser/MCP tooling`.
- **Source:** [https://developer.chrome.com/docs/devtools/agents/get-started](https://developer.chrome.com/docs/devtools/agents/get-started); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** Exact first-party Chrome DevTools for agents documentation page was publicly reachable in the reader on 2026-08-27; no login, browser attachment, or runtime action was used.
- **Direct claims:**
  - The documentation describes an MCP server connecting an AI agent to a live browser, a Chrome DevTools CLI, and agentic skills for complex debugging tasks. _(locator: documentation lines 52–56)_
  - It describes performance-trace evaluation and browsing live web pages beyond static HTML, and says the CLI supports only a targeted subset of the full suite. _(locator: documentation lines 58–63)_
  - The documentation warns that the tooling exposes browser content and can act on behalf of a user with an active authenticated session; this lane did not connect to any browser or session. _(locator: documentation lines 67–71)_
- **Inferred claims (not capability proof):**
  - The public surface is a browser/MCP-tooling reachability lead, but authority, authenticated behavior, data handling, support, portability, and OEM status remain unknown.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://developer.chrome.com/docs/devtools/agents/get-started; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 94 — Directus

- **Identity:** source record 5; dedupe key `directus.io`; status `new_candidate`; category `backend/headless CMS`.
- **Source:** [https://directus.io/](https://directus.io/); observed 2026-08-27; access `public_reader_reached_http_200_redirected_to_directus_com`.
- **Evidence class:** E/D or E/U as inherited from Phase-3 triage — public first-party documentation/access observation only; no empirical or authenticated behavior was performed.
- **Access / limits:** The exact Phase-3 URL https://directus.io/ was reachable but redirected by the reader to the current first-party https://directus.com/ page on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Directus presents a headless CMS backend that connects databases, generates APIs, provides a no-code interface, and includes a native MCP server. _(locator: current first-party page lines 39–45)_
  - The page describes self-hosting or Directus Cloud and automatic REST/GraphQL API generation while preserving the customer schema. _(locator: current first-party page lines 81–94)_
  - The page presents AI/MCP operations over live data and examples involving schema creation and asset metadata, but these are illustrative vendor claims and no authenticated operation was performed. _(locator: current first-party page lines 154–168 and 238–268)_
- **Inferred claims (not capability proof):**
  - The public surface is a backend/headless-CMS reachability lead with API/MCP and self-hosting adjacency, but actual authority, portability, tenancy, audit, support, maintenance, and OEM rights remain unknown.
- **Reachability vs capability:** A reachable page, redirect, public repository page, or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (16):** prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label, authenticated_behavior.
- **Triage unknowns:** Deep-dive API/auth/export/deployment/tenancy/authority/audit/portability/maintenance/support/rollback/OEM evidence before treating as a platform baseline.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented;  License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** Require a clean-room or direct first-party contradiction/fixture before closing the claim. Not run.
- **Smallest next read-only gate:** Re-open exact first-party source page(s): https://directus.io/; then follow only official navigation to the smallest missing API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle page for prompt_design_repo_input, data_auth, agent_tool_authority, api_mcp, import_export, deployment and remaining gaps; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

## Verification record

Post-write structural, identity/source parity, boundary, source-link, report-coverage, and `git diff --check` checks passed before callback: 20 records, ranks 75–94 exactly once, 20 exact Phase-3 source URLs, triage identity/field-gap/hash parity, and unchanged shared Phase-6 boundary values.

## Callback

Fresh CENA resolution used `/Users/shaansisodia/.local/bin/herdr --session herdr-2 pane list`; pane content was verified before delivery. The short DONE receipt was initially queued, so the required Enter-only retry was used; after the wait, it was visible/submitted in CENA’s pane.

`[from: RCH-P6-PLATFORM-P2-B] @CENA: DONE Phase-6 P2-B. Wrote phase-6/outputs/platform-p2-evidence-b.md and .jsonl: exactly 20 normalized records/ranks 75-94, 20 exact Phase-3 source URLs. Structural/identity-source parity/boundary/link/git-diff checks PASS; auth U, UNEXECUTED, NOT_ADMITTED, parent active. 0 blockers.`

Callback status: `sent_and_verified`; blockers: `0`.
