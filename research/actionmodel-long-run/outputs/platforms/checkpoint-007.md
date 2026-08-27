# AM-PLATFORMS checkpoint-007 — Lovable API, branding, and rollback reconciliation

**Run:** `actionmodel-long-run-2026-08-26`  
**Lane:** `AM-PLATFORMS`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Scope:** close local holds about Lovable API/OEM, branded delivery, and rollback  
**Status:** documented first-party review; no authenticated product session; no runtime code edits

## Headline

The local Lovable teardown’s “NO white-label/OEM/API” line is now too broad. First-party documentation describes an open-beta **Build with URL API** that creates apps from prompt, image, and web-page references; it can be embedded in a website/internal tool and automated through links. Lovable also documents a research-preview MCP server for managing Lovable projects through natural language. Business/Enterprise workspaces can publish branded URL patterns, and projects can use custom domains.

Those capabilities still do not establish an OEM/white-label product contract. Branded URLs are workspace-level `lovable.app` URLs or custom-domain delivery, not proof that a third party can license/rebrand the builder UI, API, billing, tenancy, or runtime. Rollback is also partial: current docs support version-history/revert workflows, while the changelog explicitly says a revert after a migration does not revert the database.

## Evidence status

| Claim class | Result |
|---|---|
| Catalogue | Lovable positions itself as a full-stack natural-language development/deployment platform. |
| Documented | Build-with-URL API, MCP research preview, cross-project references, branded URLs, custom domains, publish/security checks, and version-history/revert guidance. |
| Authenticated/live | Not tested; no Lovable account or API session used. |
| Implemented in Actionist | No evidence. |
| Held | OEM/white-label licensing, database rollback equivalence, exact API price/limits, and arbitrary GUI operation. |

## First-party evidence

- Lovable API docs say the first API release, Build with URL, can generate apps from shareable URLs, embed buttons on another site/app, integrate into internal tools/scripts, and automate app creation. The technical page says the feature is in open beta and accepts prompt, raster images, and web-page references.
- The same API docs list an MCP server at `https://mcp.lovable.dev` as a research preview for AI clients to manage Lovable projects through natural language. This is a project-management/build context surface, not proof of arbitrary external software GUI operation.
- Branded app URL docs state that Business/Enterprise workspaces can publish apps as `{app-name}.{workspace-subdomain}.lovable.app`, require a verified domain, provision DNS/SSL, and can coexist with custom domains. Disabling branded URLs requires unpublishing apps using them.
- Publish docs describe a Publish modal, public/default `lovable.app` URLs, custom domains, workspace-branded URLs, access settings, security checks, live publish/update, and post-publish SEO/live checks.
- Cross-project references allow the agent to read/reuse code, assets, files, chat history, components, layout systems, auth flows, API integrations, and feature implementations from other permitted workspace projects. This is a first-party retrieval/context capability, with permissions and access controls.
- Debugging docs support Plan mode and version-history/revert guidance. The changelog records Versioning 2.0 and explicitly warns that reverting a past edit after a migration does not revert the database. This is evidence for a recovery boundary, not a full rollback guarantee.

## Comparison matrix reconciliation

| Capability | Finding | Level/confidence |
|---|---|---|
| Intent capture | Prompt, image, and web-page references can start app generation; natural-language editing is documented. | `D`; high |
| Planning | Plan mode and debugging-before-build guidance are documented; API Build with URL itself is a direct generation trigger. | `D*`; medium |
| Retrieval | Cross-project references, chat connectors/MCP, API/web-page references, and images provide context paths. | `D`; high |
| Scaffold selection | Templates and existing project references are mentioned in broader product docs; a public registry/admission contract is not established here. | `B`; medium |
| Design tokens | Visual edits and app CSS-variable/branding reuse are documented; portable registry token slots are not. | `D* / B`; medium |
| Schema binding | Full-stack/backend/database/auth/integration generation and Lovable Cloud are documented; external schema import/binding remains unclear. | `D* / U`; medium |
| Execution environment | Hosted preview/published apps, Lovable Cloud, and generated code are documented. | `D`; high |
| Browser operation | Web-page references and MCP/chat connectors provide context/tools during build; arbitrary third-party GUI operation is not documented. | `B / U`; high |
| Approvals | Workspace/project access, publish security review, and permissions are documented; per-side-effect approval is not. | `D* / U`; medium |
| Testing | Preview, security scan, SEO/live checks, and debugging guidance are documented; a portable build/browser contract gate is not. | `D*`; medium |
| Deployment | Publish/update, branded workspace URLs, custom domains, DNS/SSL provisioning, and live checks are documented. | `D`; high |
| Rollback | Version history and revert workflows are documented; database rollback after migrations is explicitly excluded/partial. | `D* / H`; high |
| Auditability | Project history, comments/annotations, connectors, security views, and monitoring exist; no immutable end-to-end action ledger is established. | `D*`; medium |
| Cost | Local teardown contains plan/credit claims, but this pass did not verify current price or API usage schedule. | `U`; high |
| Extensibility | Build with URL, MCP research preview, API integrations, GitHub/GitLab, connectors, custom domains, and cross-project references are documented. | `D`; high |

## Reconciliation against local claims

| Local claim | First-party result | Decision |
|---|---|---|
| “Lovable: no white-label/OEM/API” (`lovable-teardown-2026-08-26.md:42-54`) | Build with URL API and MCP research preview are now documented. | Correct to “no documented OEM/white-label contract; API exists in open beta.” |
| “Branded autosubmit URL only” | Build with URL supports prompt, images, web-page references, embedded buttons, internal tools, and automation; branding also has workspace/custom-domain docs. | Replace with the narrower API/branding facts. |
| “Version history is code-only and does not roll back DB” | Current docs support revert/history; changelog explicitly warns migrations are not reverted with the database. | Keep the partial-recovery warning; do not imply all history is code-only or all state is rollback-safe. |
| “Lovable lacks API extensibility” | API integrations, chat/app connectors, Build with URL, MCP research preview, GitHub/GitLab, and cross-project references are documented. | Reject the blanket claim; keep exact surface/status tags. |
| “MCP preview = agent operates external software” | MCP is documented as project-management/context integration during Lovable use. | Hold arbitrary GUI-operation inference. |

## What remains genuinely differentiated

Lovable has now closed more of the generic build-plane gap: it accepts multimodal references, reuses project context, embeds generation into external surfaces, offers branded delivery, and exposes a growing API/MCP surface. Action Model therefore should not position “we can embed a prompt-to-app link” as the moat.

The remaining wedge is the stricter cross-plane contract: an agent can build a client-specific tool, then operate legacy/API-less systems with explicit authority, approval, verification, rollback boundary, and evidence. Lovable’s documented build API and branding do not prove that loop.

## Held/rejected claims

- **Held:** “Lovable offers OEM/white-label builder licensing.” Branded workspace URLs and custom domains are documented; an OEM/rebrand/tenant/API entitlement is not.
- **Rejected as stale:** “Lovable has no API.” Build with URL is open beta; MCP is a research preview; other integrations are documented.
- **Held:** “Lovable rollback is full application/database rollback.” Official changelog warns that a revert after a migration does not revert the database.
- **Held:** “Lovable MCP is arbitrary computer use.” Reviewed docs position it as a project-management/context surface for Lovable projects.
- **Held:** exact current API pricing, quotas, and authenticated success rates.
- **Not claimed:** authenticated/live behavior, Actionist implementation, or vendor-neutral deployment.

## Sources, dates, and receipts

All pages below were read/searched on **2026-08-26**; source pages may show older crawl/publication ages, so the lane records the observation date and separates dated changelog facts from current docs.

- [Lovable API overview](https://docs.lovable.dev/integrations/lovable-api) — Build with URL, embed/internal-tool/automation use cases, MCP research preview.
- [Build with URL technical guide](https://docs.lovable.dev/integrations/build-with-url) — open beta, prompt/image/web-page parameters, reference limits and link generation.
- [Branded workspace URLs](https://docs.lovable.dev/features/branded-workspace-urls) — Business/Enterprise workspace subdomain, DNS/SSL, custom-domain precedence, unpublish prerequisite.
- [Publish your project](https://docs.lovable.dev/features/publish) — publish/update, access, security review, custom domains and branded URL pattern.
- [Cross-project referencing](https://docs.lovable.dev/features/cross-project-referencing) — project code/assets/chat/context reuse and permissions.
- [Lovable integrations](https://docs.lovable.dev/integrations/introduction) — app/chat/API connectors and protected authenticated API integrations.
- [Debugging prompts](https://docs.lovable.dev/prompting/prompting-debugging) — Plan mode, version history, revert guidance; observed 2026-08-26.
- [Lovable changelog](https://docs.lovable.dev/changelog?page=1) — Versioning 2.0, migration/database rollback warning, MCP/connectors/visual edits; observed 2026-08-26.
- Local source reconciled: `research/lovable-teardown-2026-08-26.md:42-54,83-84`; `research/builder-architecture-intel-2026-08-25.md:9-19`.

No credentials or live product session was used. No runtime application or shared schema was changed.

## Next gate

P-013: adversarial cross-dossier comparison of authority, recovery, and evidence planes using the first-party packets now on disk. Keep P-010 held until its stack/token/proof blocker is resolved under an explicitly permitted path.
