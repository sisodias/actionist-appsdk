# Lovable Feature Census — August 2026

## Scope and method

This is an itemized census of Lovable’s documented product surface as of August 2026, mapped to the supplied 144-key taxonomy. Each row in `lovable-features.jsonl` carries first-party evidence URLs where a capability claim was sourced. The taxonomy contains 144 keys across 18 domains; this census records 110 sourced product-feature rows, including multiple distinct Lovable features that map to the same closest taxonomy key.

## Must-have shortlist for Action Model

- **Chat-driven constrained code generation** — natural-language requests against one fixed schema, design system, and app shape.
- **Build mode** — autonomous multi-step execution with bounded file changes, diagnostics, diffs, and receipts.
- **Sandbox preview environment** — interactive preview iframe before publication.
- **Managed auto-hosting** — one owned runtime/deploy target with generated subdomain publishing.
- **Human review gate** — preview, diff, approval, and explicit publish controls.
- **Git-backed versions** — commit/version per generation, with source rollback and a published-version marker.
- **Project/workspace tenancy** — client/project isolation and basic owner/editor permissions.
- **Persistent knowledge/context** — fixed schema, component library, design system, and project instructions supplied on every request.
- **Error diagnostics and bounded repair** — logs/build errors plus a constrained “try to fix” loop.
- **Prompt-to-change lineage** — retain chat history and link a generated version back to its request.
- **CRUD over platform-owned data** — generated reads/writes against Action Model’s schema, without exposing arbitrary backend generation.

## Census by domain

### Identity and lifecycle

Lovable presents a unified browser product around projects and workspaces. Workspaces contain projects, members, billing, and settings; project state moves through editing, versioning, and publishing. The scoped clone should preserve the lifecycle and tenant boundary, not copy Lovable’s entire account/product identity surface.

### Intent and input

The primary interface is **Chat with Lovable**, with Build and Plan modes sharing a conversation. Lovable also supports file/connector/project references, multimodal attachments, Figma input, and incremental edits. Existing repository bootstrap is a boundary: Lovable documents export and sync, but not starting from existing GitHub code.

### Artifacts and intermediate representations

Build output is editable full-stack web application source, typically standard Vite + React. Paid users can use Dev Mode/code editing. Details view exposes file diffs and summaries; Plan view exposes structured plan diffs. Lovable’s visual-edit architecture uses stable JSX IDs, a client-side AST, Tailwind generation, and HMR to map preview changes to source.

### UI, design, and accessibility

Lovable generates visual interfaces, supports design systems/themes and design guidance, offers templates, and provides mobile viewport preview. The preview toolbar is the current visual-editing surface, replacing the older Visual Edits positioning in the teardown. Human design review is supported through preview, diffs, drafts, and publication controls.

### Data and backend

Lovable Cloud is the managed backend surface: database, authentication, storage, functions, and related runtime services configured from the project. Cloud supports schema/migration and CRUD generation, but code-only version rollback does not roll back database data or migrations. Action Model should retain CRUD over its own schema while deleting generalized Cloud provisioning, arbitrary migrations, and external backend portability.

### Auth and authority

Lovable Cloud supports user authentication and row-level security, while workspace/project roles govern editing, publishing, administration, and transfers. Secrets and service credentials are managed outside source. Question cards and Plan approval add explicit consent points. In Action Model, platform-owned identity, schema, and policy should replace generated-app auth/RLS generation.

### Integrations and connectors

Lovable documents project/app connectors, chat connectors, app-user connectors, custom connectors, “any API” integration, MCP, and payment integrations. Product/blog material describes a catalog approaching roughly 100 connectors, with examples including Perplexity, ElevenLabs, Firecrawl, Miro, Shopify, Stripe, PostHog, Paddle, and WordPress. This is a major Lovable surface but explicitly deleted for the scoped clone because the platform owns the database, runtime, and relevant integrations.

### Agent execution

**Build mode** is autonomous execution and is active by default. **Plan mode** investigates and plans without code changes, costs one credit per message, and hands off to Build only after approval. Lovable also documents subagents (Researcher, Reviewer, Synthesiser), persistent Knowledge, Skills/slash commands, self-debugging, stop/undo/wrap-up controls, verification tooling, and timeline/activity receipts. Action Model needs constrained Build execution, persistent context, stopping, diagnostics, and receipts; broad subagent orchestration can wait.

### Preview and testing

The managed preview environment is core. Browser smoke testing, logs/network inspection, security views, external security scanning, and human review are all documented. Lovable’s security surface includes project/workspace security, sensitive-data scanning, Wiz, and Aikido. The teardown’s scoped verdict removes the broad security program because platform-owned schema/policies eliminate the main generalized LLM-RLS risk.

### Deployment and runtime

Lovable Cloud provides managed production hosting, automatic deployments, SSL, global delivery, backend/infrastructure, and runtime AI provider access. Publishing keeps a lovable.app URL and can use a generated subdomain; custom domains are paid, DNS-verified, and automatically TLS-provisioned. External hosting/self-hosting of generated apps is documented, while the Lovable editor/agent platform itself cannot be self-hosted. SEO/AEO and SSR are documented but irrelevant to Action Model dashboards. The scoped clone should implement one managed target plus wildcard-DNS subdomain publishing.

### Exit and portability

Lovable supports source code download, GitHub/GitLab sync, and partial backend portability through managed/self-hosted Supabase. GitHub sync is two-way for one active branch and supports branch operations and PR creation, but Lovable cannot start from an existing repository. Backend exit has feature-parity gaps and requires rebuilding services outside Supabase. Action Model needs Git-backed source ownership/versioning, not general provider portability.

### Recovery

History is automatic: every change becomes a version, with preview, diff, originating-message navigation, bookmarks, and revert. Revert is code-only, all-or-nothing at version scope, and may be unavailable for very old or remixed Cloud-backed states. Remix/fork creates an independent unpublished copy; code/schema can carry over, while data, secrets, domains, collaborators, connectors, and history do not. The scoped clone should keep source/deployment rollback and can defer full remix semantics.

### Governance and audit

Lovable preserves prompt history, supports collaboration drafts, and documents audit logs plus enterprise governance. Workspace/project roles and draft acceptance provide approval boundaries. Action Model should keep prompt lineage and a human publish gate; enterprise audit, SSO, SCIM, and full draft collaboration are outside initial scope.

### Security and tenancy

Workspace/project permissions form Lovable’s tenant model. Cross-project references are read-only and permission-bound. Secrets, connector credentials, sandbox environments, region/residency options, security centers, and admin controls address generalized platform operation. Action Model should keep tenant isolation and a rented sandbox boundary, while using its own platform-owned data/policy model and one deployment region.

### Economics

Lovable uses workspace subscription plans plus credits. Credits cover Build/Plan usage and, for Cloud-hosted apps, runtime and AI usage; collaborators share the owner workspace’s balance. Plan messages cost one credit; Build cost varies with files, complexity, exploration, and tool usage; there is no upfront Build estimate. Owners/admins can set credit limits. The teardown treats unified build+run metering as a Lovable pain point and recommends flat per-seat or no metering for Action Model.

### Maintenance and operability

Lovable documents logs, usage/cost views, automatic deployments, error diagnostics, and managed operations. Hosted operation removes CI/CD, SSL, scaling, backup, and monitoring work from users. The scoped clone should provide basic logs and bounded diagnostics while relying on rented sandbox/hosting infrastructure.

### Commercial/distribution rights

The reviewed first-party sources document hosted URLs, exports, and preview surfaces but do not document a white-label/OEM/API contract. The census records that capability as `unknown` rather than converting the absence of a reviewed source into a definitive legal claim. Action Model is building its own product, so Lovable resale/white-label semantics are irrelevant.

### Public signals

Lovable maintains first-party documentation and a product blog describing these capabilities. These are evidence of documented product claims, not independent proof of implementation quality or operational outcomes.

## What Action Model does not need because its scope deletes it

- General-purpose connectors, connector catalog breadth, per-user OAuth connectors, and custom API integration.
- Lovable Cloud-style arbitrary database/schema/migration generation.
- Generated-app authentication, RLS policy authoring, storage provisioning, edge functions, and jobs.
- Lovable’s broad Wiz/Aikido/security-center program; platform-owned schema and policy remove the central generalized risk.
- Multi-region Cloud residency and region migration concerns.
- External hosting/self-hosting portability and backend migration machinery.
- SEO/AEO, SSR, Search Console, and marketing-site optimization.
- Native/mobile companion app distribution; responsive preview is enough.
- Enterprise SSO, SCIM, audit-log administration, branded workspace URLs, and full enterprise governance.
- Unified build/run/AI credit economics and opaque metering; use flat per-seat or no metering.
- Full parallel subagent fleet; use one constrained agent first.
- Figma import and generative image/video tooling in the first dashboard-focused release.
- Full remix/fork semantics and broad collaborator drafts in the first release.
- White-label/OEM resale semantics; Action Model owns its own branded builder.

## Evidence boundary

The machine-readable companion is the source of truth for row-level status and URLs. One reviewed capability — white-label/OEM — remains `unknown` because no first-party contract was found in the reviewed sources. The prior teardown also flags pre-June-2026 changelog details and v0 API per-call pricing as gaps; those are not asserted here as sourced product capabilities.


## Opus audit 2026-08-27

Independent re-verification of the Luna-era census by an Opus auditor. Sample: 25 of 110 rows
— all 11 `hardness=very_hard`, all 6 `taxonomy_fit=approx` (16 unique after overlap), plus 9
random (seed 27). Every sampled row had at least one `evidence_urls` entry fetched and checked
against its `what_it_does` / `how_it_works` text.

**Result: 19 VERIFIED, 6 OVERSTATED, 0 WRONG, 0 URL-DEAD.** No dead links: all 26 distinct URLs
fetched returned live first-party content. No row was fabricated — every OVERSTATED row had a
real feature underneath and a real source; the defect was embellishment beyond what the cited
page says, not invention.

| Row | Feature | Verdict | What the source actually says |
|---|---|---|---|
| 39 | Subagents | OVERSTATED | Claimed roles "Researcher, Reviewer, and Synthesiser". `features/subagents` names only *generic subagents* and *Explore*; synthesis happens in the main agent, and subagents are read-only. Role names were not in the source. |
| 35 | Connector catalog | OVERSTATED | Claimed "roughly one hundred connectors" and named Shopify/Stripe/PostHog/Paddle/WordPress. No cited URL states any connector count; the ai-connectors post launches four (Perplexity, ElevenLabs, Firecrawl, Miro); none of those five services appear on the cited pages. |
| 91 | App connectors | OVERSTATED | Claimed an app-vs-project connector split and the same five services. `integrations/app-connectors` describes one unified app+chat connector type and names only Slack, HubSpot, Google Sheets. |
| 31 | Lovable AI gateway | OVERSTATED | Claimed a "Google Gemini-powered layer". `features/ai` states the connector "currently offers models from Google and OpenAI". Gemini is the documented default, not the only provider. |
| 52 | Lovable subdomains | OVERSTATED | "Wildcard platform DNS" is inference, not documentation. `features/custom-domain` documents an A record to edge IP `185.158.133.1` for custom domains and describes no wildcard mechanism. Feature claim verified; mechanism reclassified to `direct_plus_inferred_mechanism`. |
| 82 | Templates hub | OVERSTATED | "Searchable" — discovery is via filter links (category / 20 subcategories / 14 personas), no text search box; "remixable" detail pages not confirmed on the hub page itself. |

Verified without change (19): rows 8, 9, 25, 33, 37, 38, 40, 48, 55, 58, 69, 72, 73, 83, 84, 86,
93, 99, 105. Notable confirmations: `.lovable/plan.md` + archive-on-approval + one credit per Plan
message (row 37, all five sub-claims quoted verbatim); the 10,000-character Knowledge cap (row 40);
region lock on Cloud remix (row 73); Enterprise-only audit logs (row 99); per-user OAuth with
per-user encrypted token storage (row 93). Row 83 (white-label) correctly remains `unknown` with an
empty URL list — that is the contract behaving as designed, not a defect.

Two rows carry honest, correctly-labelled limits worth keeping: row 72 (sandbox) attributes the
Modal claim to the teardown, not to docs — confirmed, `features/projects/preview` names no vendor
and says only "a temporary cloud environment"; and row 25's "download the project codebase" is
better sourced than cited, since `git-sync-overview` documents an explicit **Download codebase**
control on paid plans separate from Git sync.

### Verdict-boundary review — three flips

Reviewed 5 `deleted_by_scope` (22, 29, 35, 53, 86) and 5 `must_have` (1, 13, 27, 62, 80) against
the scope rule (platform owns DB/design/deploy; clients build dashboards on actionmodel.com
subdomains). **All five `must_have` rows survive** — tenancy, diffs, roles, version rollback, and
the error-repair loop are each load-bearing for a constrained builder, and rows 62 and 80 match the
teardown's own minimal 80%-value set. Rows 86 (Lovable Cloud), 53 (external hosting), 22 (storage),
and 29 (secrets) are correctly deleted: the platform owning the DB, deploy target, and credential
store genuinely removes each.

The connector rows are the exception, and they are flipped:

| Row | Feature | Was | Now | Reason |
|---|---|---|---|---|
| 35 | Connector catalog | deleted_by_scope | nice_to_have | Premise retracted upstream. |
| 91 | App connectors | deleted_by_scope | nice_to_have | A deployed client dashboard reaching Gmail/Slack/Stripe is real client value. |
| 93 | App-user connectors | deleted_by_scope | nice_to_have | Deferrable by phasing, not deleted by scope; weakest of the three. |

The reason is provenance, not taste. All three rows cited the teardown's "platform owns the DB"
verdict — and that verdict was **retracted in the teardown itself** under "CORRECTION 27 Aug 2026 —
the connectors row was wrong", which states that owning Actionist's own Postgres "says nothing about
a client dashboard wanting Gmail, Slack, Stripe, HubSpot or Notion". The census was written at 09:40;
the correction landed at 11:18. The census inherited a premise that no longer holds. `connectors-licensing-2026-08-27.md`
adds that these are importable rather than hand-written — activepieces is MIT outside `packages/ee/**`
with 113 OAuth2 connectors — while Nango and Airbyte are ELv2 and cannot ship in a hosted Actionist.

Rows 32, 34, 36, 71, and 94 rest on the same retracted premise but were **not** in the sample and
were deliberately left untouched under the audit's no-touch rule. They should be re-reasoned in a
follow-up pass; rows 34 (custom connectors) and 71 (credential isolation) look like the strongest
further flip candidates.

### Headline numbers

110 rows and 31 must_have survive unchanged. **27 `deleted_by_scope` does not** — it is now **24**,
with `nice_to_have` rising 38 → 41, entirely from the three connector flips above. No other counts
moved: `hardness` (6/40/53/11) and `taxonomy_fit` (104 exact / 6 approx) are unchanged, and all 110
lines still parse as JSON.
