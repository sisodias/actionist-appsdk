# Phase 5 Platform P1 Evidence B

**Lane:** `RCH-P5-PLATFORM-P1-B`  
**Observed:** `2026-08-27`  
**Scope:** platform-depth ranks **35–54**, exactly one normalized record per rank.

## Contract and method

This lane re-read the Phase 3 platform-depth triage and the Phase 4 P0 evidence packets, then checked exactly the listed public first-party URLs for ranks 35–54. The check records public-page reachability and directly documented claims only. It does not establish runtime capability, authority, portability, rights clearance, support, or maintenance. Authenticated behavior remains **U — not tested** for every record.

No login, credentials, client or private data, browser side effect, runtime action, repository clone, source copy, source execution, build, deployment, benchmark, admission, or implementation occurred. Mendix and Creatio current URLs returned reader internal errors and are preserved as thin/inaccessible with no invented capability claims. Amazon Q freshness is preserved as fetched two weeks ago by the reader.

## Inputs

- Phase 3 triage: `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-3/outputs/platform-depth-triage.jsonl` — 117 records — SHA-256 `f83db8203c4bd87521cd9aae5cadb9599516732076aa7bd627b56f084ae7d05e`.
- Phase 4 P0 context (read-only, not modified): `research/actionmodel-builder-research-2026-08-26/phase-4/outputs/platform-p0-evidence-a.md` / `.jsonl` (ranks 1–7) and `platform-p0-evidence-b.md` / `.jsonl` (ranks 8–14).
- This lane is disjoint from P0: ranks 35–54 only.

## Scope index

| Rank | Surface | Access | Evidence | Unknown fields | Source |
|---:|---|---|---|---:|---|
| 35 | WeWeb | public_reader_reached_http_200 | E/D | 11 | https://www.weweb.io/solutions/ai-apps |
| 36 | Glide / GlideOS | public_reader_reached_http_200 | E/D | 13 | https://www.glideapps.com/pricing?version=businesses |
| 37 | Superblocks | public_reader_reached_http_200 | E/D | 11 | https://docs.superblocks.com/getting-started/what-is-superblocks |
| 38 | AppSheet Gemini | public_reader_reached_http_200 | E/D | 13 | https://support.google.com/appsheet/answer/16106353?hl=en |
| 39 | Replit Agent | public_reader_reached_http_200 | E/D | 10 | https://docs.replit.com/learn/build-with-agent |
| 40 | Power Apps/Copilot | public_reader_reached_http_200 | E/D | 13 | https://www.microsoft.com/en-us/power-platform/products/power-apps/pricing/ |
| 41 | Salesforce Agentforce/Lightning | public_reader_reached_http_200 | E/D | 13 | https://www.salesforce.com/agentforce/pricing/ |
| 42 | Mendix | public_reader_internal_error | E/D | 13 | https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/ |
| 43 | Figma Make | public_reader_reached_http_200 | E/D | 11 | https://www.figma.com/solutions/design-to-code/ |
| 44 | Anima | public_reader_reached_http_200 | E/D | 13 | https://docs.animaapp.com/docs/anima-api |
| 45 | Devin Cloud | public_reader_reached_http_200 | E/D | 12 | https://docs.devin.ai/admin/billing |
| 46 | Base44 | public_reader_reached_http_200 | E/D | 13 | https://docs.base44.com/Getting-Started/Quick-start-guide |
| 47 | Augment | public_reader_reached_http_200 | E/D | 11 | https://www.augmentcode.com/pricing |
| 48 | Jules | public_reader_reached_http_200 | E/D | 13 | https://jules.google/docs/usage-limits |
| 49 | Amazon Q | public_reader_reached_fetched_2_weeks_ago | E/D | 11 | https://aws.amazon.com/q/developer/pricing/ |
| 50 | Pipedream | public_reader_reached_http_200 | E/D | 13 | https://pipedream.com/connect |
| 51 | Lindy | public_reader_reached_http_200 | E/D | 11 | https://www.lindy.ai/pricing |
| 52 | Workato | public_reader_reached_http_200 | E/D | 13 | https://docs.workato.com/agentic/agentic.html |
| 53 | Automation Anywhere | public_reader_reached_http_200 | E/D | 13 | https://www.automationanywhere.com/ai |
| 54 | Creatio | public_reader_internal_error | E/D | 13 | https://www.creatio.com/ |

## Normalized evidence records

### Rank 35 — WeWeb

- **Identity:** source record 36; dedupe key `existing::36`; status `canonical_existing`.
- **Source:** [https://www.weweb.io/solutions/ai-apps](https://www.weweb.io/solutions/ai-apps); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party WeWeb AI-app page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page presents AI-powered apps with no-code control and role-aware AI tools and automations.
  - It describes built-in WeWeb Tables for database/auth/storage and connections to Supabase, Xano, and REST APIs.
  - It describes AI/MCP full-stack app building, workflow customization, and publishing or exporting a Vue app for self-hosting.
- **Inferred claims (not capability proof):**
  - The public surface is a plausible full-stack visual app reachability lead, but export, authority, tenancy, rollback, and support capability remain unproven.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (11):** agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Pricing/export/deployment remain; backend/auth parity, API, OEM, support, maintenance, audit, and rollback are `U`. Priority: visual full-stack web app. Falsifier: independent exported deploy. | Matrix U-gap: Backend support. Falsifier: independent deploy.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** independent exported deploy. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party page, then follow only official navigation to the smallest missing export/deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 36 — Glide / GlideOS

- **Identity:** source record 37; dedupe key `existing::37`; status `canonical_existing`.
- **Source:** [https://www.glideapps.com/pricing?version=businesses](https://www.glideapps.com/pricing?version=businesses); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Glide pricing page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page presents Glide as turning spreadsheets into intelligent apps and exposes GlideOS and bring-your-own-agent positioning.
  - It lists inventory, logistics, procurement, warehouse, CRM, and work-order use cases and supply-chain, manufacturing, retail, real-estate, hospitality, and professional-services categories.
  - The page displays compliance badges and an open-source link; those displays do not establish license, provenance, or OEM rights for any artifact.
- **Inferred claims (not capability proof):**
  - The public surface is a data-app/workflow reachability lead, but schema, action authority, export, tenancy, audit, and portability remain unverified.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (13):** data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Pricing/hosted deployment current; source/runtime/API export, OEM, support, maintenance, audit, and rollback are `U`. Priority: data-app/workflow builder. Falsifier: schema/action/permission rebuild without Glide. | Matrix U-gap: Runtime exit. Falsifier: schema/action rebuild.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** schema/action/permission rebuild without Glide. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party pricing page, then follow only official navigation to the smallest missing data/auth, API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 37 — Superblocks

- **Identity:** source record 38; dedupe key `existing::38`; status `canonical_existing`.
- **Source:** [https://docs.superblocks.com/getting-started/what-is-superblocks](https://docs.superblocks.com/getting-started/what-is-superblocks); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Superblocks documentation page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - Superblocks describes a platform to build and govern AI-generated internal apps on company data.
  - The page says IT manages authentication, integrations, access, and auditing.
  - Related official documentation states apps are versioned by default, can roll back, and can integrate with Git repositories for review/testing/security workflows before production; this is vendor documentation, not an empirical test.
- **Inferred claims (not capability proof):**
  - The documentation indicates an enterprise app control-plane reachability lead, but actual client-owned governance, portability, and support behavior remain untested.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (11):** agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Pricing/deployment paths remain; API/export, OEM, support/SLA, maintenance, audit export, and rollback are `U`. Priority: enterprise internal-app control plane. Falsifier: client-owned app/permission/audit/support packet. | Matrix U-gap: Support/audit packet. Falsifier: client-owned bundle.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** client-owned app/permission/audit/support packet. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party getting-started page, then follow only official navigation to the smallest missing deployment/tenancy, authority/audit, export, support/maintenance/OEM, and rollback evidence; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 38 — AppSheet Gemini

- **Identity:** source record 39; dedupe key `existing::39`; status `canonical_existing`.
- **Source:** [https://support.google.com/appsheet/answer/16106353?hl=en](https://support.google.com/appsheet/answer/16106353?hl=en); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Google AppSheet help page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page describes Gemini in AppSheet turning a natural-language process or idea into suggested tables, columns, schema, views, and actions.
  - It states Gemini for App Creation is included in paid AppSheet licenses and that admins can disable it at the team level.
  - It describes Gemini in automations for extraction/categorization, governance policy controls, and credit usage.
- **Inferred claims (not capability proof):**
  - The public documentation indicates natural-language schema/action generation and administrative governance reachability, but data authority, import/export, tenancy, audit, and portability remain unknown.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (13):** data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Pricing/API/connectors current; vendor-neutral export, OEM, support, maintenance, approval, audit, and rollback are `U`. Priority: Google low-code workflow. Falsifier: cross-runtime schema/action/permission fixture. | Matrix U-gap: Cross-runtime. Falsifier: promotion fixture.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** cross-runtime schema/action/permission fixture. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party help page, then follow only official navigation to the smallest missing data/auth, API/MCP, export/deployment/tenancy, authority/audit, support/maintenance/OEM, or lifecycle documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 39 — Replit Agent

- **Identity:** source record 4; dedupe key `existing::4`; status `canonical_existing`.
- **Source:** [https://docs.replit.com/learn/build-with-agent](https://docs.replit.com/learn/build-with-agent); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Replit Agent documentation page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The documentation describes Agent as an AI builder that can plan, write, explain, debug, and improve work while the user coaches it.
  - It instructs users to review, test, and use checkpoints.
  - The documentation describes history, changes, and rollback controls for recovering work; no restore was performed.
- **Inferred claims (not capability proof):**
  - The public documentation indicates a hosted agent lifecycle reachability lead, but execution authority, data handling, tenancy, retention, and independent deployment remain untested.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (10):** data_auth, agent_tool_authority, api_mcp, tenancy, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Pricing/usage and hosted deployment are current; API, complete DB/auth export, OEM, support, retention, and external rollback are `U`. Priority: hosted app/agent lifecycle. Falsifier: checkpoint restore with DB/auth and independent deploy. | Matrix U-gap: DB/auth restore. Falsifier: independent deploy.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** checkpoint restore with DB/auth and independent deploy. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party Agent guide, then follow only official navigation to the smallest missing data/auth, authority, API/MCP, tenancy, audit, portability, maintenance/support, rollback, and OEM documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 40 — Power Apps/Copilot

- **Identity:** source record 40; dedupe key `existing::40`; status `canonical_existing`.
- **Source:** [https://www.microsoft.com/en-us/power-platform/products/power-apps/pricing/](https://www.microsoft.com/en-us/power-platform/products/power-apps/pricing/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Microsoft Power Apps pricing page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page describes Copilot Studio agents across apps, websites, and channels using natural language, including autonomous agents and external channels.
  - It identifies an Azure subscription requirement and prepaid Copilot Credit Commit Units.
  - Official product material describes Dataverse as tenant-level storage with enterprise security, compliance, governance, role-based access, and connectors.
- **Inferred claims (not capability proof):**
  - The public material indicates an enterprise app/agent control-plane reachability lead, but solution promotion, client-owned authority, portability, and rollback remain unverified.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (13):** data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Licensing/deployment current; API/tenant/export parity, OEM, support, maintenance, external audit, and rollback are `U`. Priority: enterprise low-code control plane. Falsifier: solution promotion with auth/approval receipt. | Matrix U-gap: Auth/approval. Falsifier: solution receipt.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** solution promotion with auth/approval receipt. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party pricing page, then follow only official navigation to the smallest missing data/auth, API/MCP, import/export, deployment/tenancy, authority/audit, support/maintenance/OEM, and rollback documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 41 — Salesforce Agentforce/Lightning

- **Identity:** source record 41; dedupe key `existing::41`; status `canonical_existing`.
- **Source:** [https://www.salesforce.com/agentforce/pricing/](https://www.salesforce.com/agentforce/pricing/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Salesforce Agentforce pricing page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page presents Agentforce editions and lists a $550/user/month option with 2.5 million Flex Credits per year.
  - Official pricing material describes Flex Credits as a payment unit drawn down per action across teams, channels, and use cases through a digital wallet.
- **Inferred claims (not capability proof):**
  - The public material indicates a CRM-agent commercial and usage-metering reachability lead, but typed adapters, migration, authority, audit, portability, support, and rollback remain unknown.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (13):** data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Current pricing/usage units remain; API/metadata/export, OEM, support/SLA, maintenance, audit, and recovery are `U`. Priority: CRM-native agent. Falsifier: typed CRM adapter plus migration/audit receipt. | Matrix U-gap: CRM migration/support. Falsifier: typed adapter.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** typed CRM adapter plus migration/audit receipt. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party pricing page, then follow only official navigation to the smallest missing data/auth, API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, and lifecycle documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 42 — Mendix

- **Identity:** source record 43; dedupe key `existing::43`; status `canonical_existing`.
- **Source:** [https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/](https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/); observed 2026-08-27; access `public_reader_internal_error`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Mendix cloud-deploy URL returned an internal reader error on 2026-08-27. No current capability claim was extracted in this lane.
- **Direct claims:**
  - The public first-party Mendix cloud-deploy URL was targeted, but the current reader returned an internal error; reachability is thin and capability is not established here.
- **Inferred claims (not capability proof):**
  - Prior triage retains a documented lifecycle/deployment lead, but it is not revalidated by this current page read and must not be treated as a capability proof.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (13):** data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Pricing/deployment current; API/source/ISV export, OEM, support, maintenance, tenant authority, and recovery are `U`. Priority: model-driven enterprise app. Falsifier: cloud/on-prem data/auth parity. | Matrix U-gap: Promotion/support. Falsifier: cloud/on-prem parity.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** cloud/on-prem data/auth parity. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party cloud-deploy URL or an official Mendix documentation equivalent, record only directly visible claims, and stop at public read-only material; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 43 — Figma Make

- **Identity:** source record 44; dedupe key `existing::44`; status `canonical_existing`.
- **Source:** [https://www.figma.com/solutions/design-to-code/](https://www.figma.com/solutions/design-to-code/); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Figma design-to-code page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page describes Figma Make as using a prompt to turn designs into working, editable code ready to test, share, and refine.
  - It describes visual layouts becoming functional code that can be edited, tested, and exported, with Figma design structure combined with AI.
- **Inferred claims (not capability proof):**
  - The public material indicates a design-context-to-code reachability lead, but generated-code rights, backend behavior, deployment, tenancy, and maintenance remain unknown.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (11):** agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Hosted design/backend integration is visible; API/code/token export, OEM, support, maintenance, production deployment, audit, and rollback are `U`. Priority: design-context generation. Falsifier: token/code/backend distinction fixture. | Matrix U-gap: Backend distinction. Falsifier: token/code fixture.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** token/code/backend distinction fixture. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party design-to-code page, then follow only official navigation to the smallest missing prompt/design/repository-input, export, deployment/tenancy, authority/audit, support/maintenance/OEM, and lifecycle documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 44 — Anima

- **Identity:** source record 47; dedupe key `existing::47`; status `canonical_existing`.
- **Source:** [https://docs.animaapp.com/docs/anima-api](https://docs.animaapp.com/docs/anima-api); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Anima API documentation page was publicly reachable in the reader on 2026-08-27; the page states API access requires contact. No login or contact flow was used.
- **Direct claims:**
  - The page describes the Anima API as turning Figma designs and live websites into clean, production-ready code for automation, AI agents, and developer features.
  - The page states access requires contacting Anima; the linked SDK repository was not opened because this lane is first-party-pages-only.
- **Inferred claims (not capability proof):**
  - The public surface is a gated API reachability lead for design/code automation, but API behavior, rights, support, tenancy, and export semantics remain unknown.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (13):** prompt_design_repo_input, agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label.
- **Triage unknowns:** API/code export claim current; backend/dependency/source maps, OEM, support, maintenance, audit, and rollback are `U`. Priority: API design-to-code. Falsifier: design/token/accessibility round-trip. | Matrix U-gap: Fidelity/support. Falsifier: round-trip.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** design/token/accessibility round-trip. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party API page and, if needed, read only official public API/terms documentation without contacting, logging in, or opening the linked repository; seek the smallest design/token/accessibility round-trip documentation.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 45 — Devin Cloud

- **Identity:** source record 49; dedupe key `existing::49`; status `canonical_existing`.
- **Source:** [https://docs.devin.ai/admin/billing](https://docs.devin.ai/admin/billing); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Devin billing documentation page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page states self-serve plans are billed through included quota and on-demand credits.
  - It states enterprise plans are billed in ACUs through an order form.
- **Inferred claims (not capability proof):**
  - The public material indicates an asynchronous code-agent commercial/usage reachability lead, but task authority, execution isolation, retention, audit, and rollback remain unknown.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (12):** agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label.
- **Triage unknowns:** Pricing/usage current; API/context/secret export, OEM, support, maintenance, audit, postcondition, and recovery are `U`. Priority: async code agent. Falsifier: synthetic ACU/task bundle. | Matrix U-gap: Support/retention. Falsifier: ACU bundle.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** synthetic ACU/task bundle. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party billing page, then follow only official navigation to the smallest missing agent authority, import/export, tenancy, audit, portability, maintenance/support, rollback, lifecycle, or OEM documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 46 — Base44

- **Identity:** source record 5; dedupe key `existing::5`; status `canonical_existing`.
- **Source:** [https://docs.base44.com/Getting-Started/Quick-start-guide](https://docs.base44.com/Getting-Started/Quick-start-guide); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Base44 quick-start documentation page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The documentation describes AI chat in the editor and Discuss/Visual Edit modes.
  - It describes prompting, plan mode, URL and Figma inputs, databases, signups, user permissions, and hosting.
  - The examples include secure booking systems and CRM-style applications.
- **Inferred claims (not capability proof):**
  - The public material indicates a prompt-to-data-app reachability lead, but no build, restore, export, authority, rights, tenancy, or support behavior was tested.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (13):** data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Plan/pricing and hosted deployment are visible; API, schema/secret export, OEM, support, maintenance, and independent rollback are `U`. Priority: prompt-to-data-app surface. Falsifier: export schema/auth/schedules and rebuild. | Matrix U-gap: Portable app packet. Falsifier: schema/auth/schedule rebuild.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** export schema/auth/schedules and rebuild. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party quick-start page, then follow only official navigation to the smallest missing data/auth, API/MCP, export, deployment/tenancy, authority/audit, support/maintenance/OEM, and rollback documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 47 — Augment

- **Identity:** source record 50; dedupe key `existing::50`; status `canonical_existing`.
- **Source:** [https://www.augmentcode.com/pricing](https://www.augmentcode.com/pricing); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Augment pricing page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page lists a $100/month business plan, up to 50 seats, a $100 usage allowance, Context Engine, Coding Agent, CLI, MCP and native tools, and usage analytics.
  - The page also displays vendor security/compliance claims including SOC 2; these claims are not an independent rights, SBOM, or support verification.
- **Inferred claims (not capability proof):**
  - The public material indicates a repo-scale coding-agent and tool-connection reachability lead, but agent authority, export, deployment, audit, maintenance, support, and OEM rights remain unknown.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (11):** agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Pricing current; API/context/provenance export, OEM, support, maintenance, audit, and rollback are `U`. Priority: repo-scale code agent. Falsifier: client-owned agent receipt. | Matrix U-gap: Client trace. Falsifier: agent receipt.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** client-owned agent receipt. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party pricing page, then follow only official navigation to the smallest missing authority, import/export, deployment/tenancy, audit, portability, maintenance/support, rollback, and OEM documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 48 — Jules

- **Identity:** source record 51; dedupe key `existing::51`; status `canonical_existing`.
- **Source:** [https://jules.google/docs/usage-limits](https://jules.google/docs/usage-limits); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Jules usage-limits documentation page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page lists Jules, Jules Pro, and Ultra plans with daily task limits of 15, 100, and 300.
  - It lists concurrency limits of 3, 15, and 60 and identifies model access by plan.
- **Inferred claims (not capability proof):**
  - The public material indicates an asynchronous VM-agent resource-limit reachability lead, but business identity, security, data authority, portability, support, and OEM behavior remain unknown.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (13):** data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Usage/account gates current; API/trace/secret export, OEM, support, maintenance, enterprise, and rollback are `U`. Priority: async GitHub/VM agent. Falsifier: business identity/security receipt. | Matrix U-gap: Account/security. Falsifier: security receipt.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** business identity/security receipt. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party usage-limits page, then follow only official navigation to the smallest missing data/auth, agent authority, API/MCP, import/export, tenancy, audit, portability, maintenance/support, rollback, and OEM documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 49 — Amazon Q

- **Identity:** source record 52; dedupe key `existing::52`; status `canonical_existing`.
- **Source:** [https://aws.amazon.com/q/developer/pricing/](https://aws.amazon.com/q/developer/pricing/); observed 2026-08-27; access `public_reader_reached_fetched_2_weeks_ago`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Amazon Q Developer pricing page was readable, but the web reader reported it was fetched two weeks ago relative to 2026-08-27; this freshness limitation is preserved.
- **Direct claims:**
  - The available first-party material describes Free and Pro monthly lines-of-code limits, including 4,000 LOC for Pro and an over-allocation price of $0.003 per LOC.
  - It identifies IAM, Builder ID, and AWS-account gates in the pricing/access context.
- **Inferred claims (not capability proof):**
  - The public material indicates a cloud code-transformation reachability lead, but current pricing freshness, source/reference/test behavior, authority, portability, support, and OEM rights remain unknown.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (11):** agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Pricing/usage current; API/source/reference export, OEM, support, maintenance, IAM authority, semantic recovery, and rollback are `U`. Priority: cloud code transformation. Falsifier: source/reference/test packet. | Matrix U-gap: Reference/test/support. Falsifier: evidence packet.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** source/reference/test packet. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party pricing page to refresh current claims, then follow only official navigation to the smallest missing source/reference/test, import/export, deployment/tenancy, authority/audit, support/maintenance/OEM, and lifecycle documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 50 — Pipedream

- **Identity:** source record 54; dedupe key `existing::54`; status `canonical_existing`.
- **Source:** [https://pipedream.com/connect](https://pipedream.com/connect); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Pipedream Connect page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page describes production-ready MCP servers that can be self-hosted or remote.
  - It describes Connect Proxy with managed authentication, approved client IDs, durable components, MCP servers, and agentic infrastructure.
- **Inferred claims (not capability proof):**
  - The public material indicates an integration-runtime and MCP reachability lead, but external-user authority, portability, tenant isolation, audit, support, and OEM rights remain unverified.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (13):** data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Pricing/API surface current; credential/tenant export, OEM, support, maintenance, audit, authority, and recovery are `U`. Priority: developer integration runtime. Falsifier: external-user authority receipt. | Matrix U-gap: Authority/support. Falsifier: user-scoped receipt.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** external-user authority receipt. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party Connect page, then follow only official navigation to the smallest missing data/auth, authority, import/export, deployment/tenancy, pricing/usage, audit, portability, support/maintenance, rollback, and OEM documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 51 — Lindy

- **Identity:** source record 55; dedupe key `existing::55`; status `canonical_existing`.
- **Source:** [https://www.lindy.ai/pricing](https://www.lindy.ai/pricing); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Lindy pricing page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page describes credits as measuring work, with credit ranges for everyday, deep, and complex work.
  - It describes dashboards, tools, scheduled workflows, model-agnostic behavior, a shared pool, pausing when credits are exhausted, and no rollover.
- **Inferred claims (not capability proof):**
  - The public material indicates a persistent work-agent and scheduled-workflow reachability lead, but computer-use authority, export, tenancy, audit, support, and OEM rights remain unknown.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (11):** agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Pricing/hosted deployment current; API/credential/trace export, OEM, support, maintenance, replay, and rollback are `U`. Priority: persistent work agent. Falsifier: approved computer-use receipt. | Matrix U-gap: Risk/retention. Falsifier: approved action.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** approved computer-use receipt. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party pricing page, then follow only official navigation to the smallest missing agent authority, import/export, deployment/tenancy, pricing/usage, audit, portability, maintenance/support, rollback, and OEM documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 52 — Workato

- **Identity:** source record 57; dedupe key `existing::57`; status `canonical_existing`.
- **Source:** [https://docs.workato.com/agentic/agentic.html](https://docs.workato.com/agentic/agentic.html); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Workato agentic documentation page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page describes skills that equip genies and logic that executes when invoked by a prompt.
  - It describes connections to Workato apps, custom APIs, data tables, and external MCP servers.
- **Inferred claims (not capability proof):**
  - The public material indicates an enterprise integration registry and prompt-invocation reachability lead, but portable action authority, deployment, tenancy, audit, support, and OEM rights remain unknown.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (13):** data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Enterprise pricing/deployment current; API/credential export, OEM, support/SLA, maintenance, idempotency, audit, and rollback are `U`. Priority: enterprise integration registry. Falsifier: portable registry/action receipt. | Matrix U-gap: Portable registry/support. Falsifier: action receipt.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** portable registry/action receipt. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party agentic page, then follow only official navigation to the smallest missing data/auth, authority, API/MCP, import/export, deployment/tenancy, pricing/usage, audit, portability, maintenance/support, rollback, and OEM documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 53 — Automation Anywhere

- **Identity:** source record 58; dedupe key `existing::58`; status `canonical_existing`.
- **Source:** [https://www.automationanywhere.com/ai](https://www.automationanywhere.com/ai); observed 2026-08-27; access `public_reader_reached_http_200`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Automation Anywhere AI page was publicly reachable in the reader on 2026-08-27; no login or interaction was used.
- **Direct claims:**
  - The page positions goal-based agents as able to think, adapt, and deliver and presents Agentic Process Automation/RPA products.
  - The vendor page invites an evaluation framework and references a May 2026 benchmark; neither was run in this lane.
- **Inferred claims (not capability proof):**
  - The public material indicates an enterprise automation reachability lead, but actor/credential/approval/result authority and rights/support behavior remain unknown.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (13):** prompt_design_repo_input, agent_tool_authority, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, lifecycle, oem_white_label.
- **Triage unknowns:** Credit/licensing current; API/vault/export/provenance, OEM, support, maintenance, approval, and rollback are `U`. Priority: enterprise automation. Falsifier: actor/credential/approval/result receipt. | Matrix U-gap: Credential/action. Falsifier: result bundle.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** actor/credential/approval/result receipt. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party AI page, then follow only official navigation to the smallest missing prompt/design/repository-input, agent authority, import/export, deployment/tenancy, audit, portability, support/maintenance/OEM, and lifecycle documentation; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

### Rank 54 — Creatio

- **Identity:** source record 59; dedupe key `existing::59`; status `canonical_existing`.
- **Source:** [https://www.creatio.com/](https://www.creatio.com/); observed 2026-08-27; access `public_reader_internal_error`.
- **Evidence class:** E/D — public first-party documentation or public reader access observation; no empirical or authenticated behavior was performed.
- **Access / thinness:** Exact first-party Creatio home URL returned an internal reader error on 2026-08-27. No current capability claim was extracted in this lane.
- **Direct claims:**
  - The public first-party Creatio home URL was targeted, but the current reader returned an internal error; reachability is thin and capability is not established here.
- **Inferred claims (not capability proof):**
  - Prior triage retains a documented CRM/workflow lead, but it is not revalidated by this current page read and must not be treated as a capability proof.
- **Reachability vs capability:** A reachable public page or access error does not establish runtime capability, authority, portability, support, or rights clearance. Capability status: `unknown_not_tested`; authenticated behavior: `U — not tested`.
- **Unknown Block Contract fields (13):** data_auth, agent_tool_authority, api_mcp, import_export, deployment, tenancy, pricing_usage, audit, portability, maintenance, support, rollback, oem_white_label.
- **Triage unknowns:** Pricing/hosted CRM current; API/object/source/tenant export, OEM, support, maintenance, audit, idempotency, and recovery are `U`. Priority: CRM/workflow builder. Falsifier: portable vertical CRM atom. | Matrix U-gap: Vertical portability. Falsifier: adapter/migration.
- **Rights/OEM/support/maintenance:** rights/OEM/support/maintenance/exit remain unknown unless directly documented; OEM/C evidence: OEM/C/Ex `U`. License, ownership, provenance, SBOM, support, maintenance, OEM/white-label, attribution, and exit status remain unknown.
- **Falsifier:** portable vertical CRM atom. Not run.
- **Smallest next read-only gate:** Re-open the exact first-party home URL or an official Creatio product/documentation equivalent, record only directly visible claims, and stop at public read-only material; no login or execution.
- **Boundary:** research-only=true; execution=UNEXECUTED; admission=NOT_ADMITTED; implementation_authorized=false; authenticated_behavior=U — not tested.

## Verification record

Initial post-write smoke passed before callback: structural, JSONL, source-link, boundary, report-coverage, Phase 4 unchanged, and `git diff --check` checks. It verified 20 records, ranks 35–54 once, 20 exact first-party URLs, triage field-gap/hash parity, explicit unknown/authenticated flags, and no Phase 4 changes.

## Callback

Fresh resolution used `/Users/shaansisodia/.local/bin/herdr --session herdr-2 pane list`; the CENA pane was verified by content at `w659e02f80e5bb1-1` before sending. The short DONE receipt was initially queued, so the required Enter-only retry was used; after the wait, the receipt was visible/submitted in the CENA pane. No retyping occurred.

`[from: RCH-P5-PLATFORM-P1-B] @CENA: DONE Phase-5 P1-B. Wrote platform-p1-evidence-b.md and .jsonl: exactly 20 normalized records/ranks 35-54, 20 first-party URLs, triage hash/field parity. Structural/JSONL/source-link/boundary/report/git checks PASS; auth U, UNEXECUTED, NOT_ADMITTED, parent active. Full AGENT_PACKET v1 and paths in my pane. 0 blockers.`

Callback status: `sent_and_verified`; CENA pane receipt verified after sleep and Enter-only retry.
