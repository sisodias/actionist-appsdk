# AM-PLATFORMS checkpoint-006 — v0 Platform API and registry review

**Run:** `actionmodel-long-run-2026-08-26`  
**Lane:** `AM-PLATFORMS`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Scope:** close the local v0 Platform API, registry, pricing, and white-label/scope gaps  
**Status:** documented first-party review; no authenticated API call; no runtime code edits

## Headline

The v0 Platform API and registry model are genuine, documented platform surfaces—not merely local synthesis. The API can create projects and chats, initialize chats from files/repositories/registries/zip inputs, attach instructions and environment variables, return generated files/demo URLs, expose hooks, rate/billing/usage endpoints, and connect projects to Vercel deployments. The design-system docs explicitly define registries as a structured way to pass components, blocks, and design tokens to AI models.

The review does **not** establish three stronger local claims: an OEM/white-label contract, vendor-neutral deployment, or API-level rollback to an older generated version. The API is Vercel-linked in the reviewed docs, rate/billing endpoints expose limits/usage but not a per-call price schedule, and the SDK itself labels the developer preview as beta. v0 is therefore a credible reference/integration surface for Action Model’s build plane, with portability and recovery boundaries still requiring product decisions and tests.

## Evidence status

| Claim class | Result |
|---|---|
| Catalogue | v0 is positioned as natural-language code/UI generation and full-stack/Vercel deployment. |
| Documented | Platform API endpoints, registry contract, project/chat context, hooks, rate limits, billing, and Vercel deployment are documented in first-party docs. |
| Authenticated/live | Not tested; no API key used. |
| Implemented in Actionist | No evidence; this is research only. |
| Held | OEM/white-label, per-call API price, vendor-neutral deploy, and rollback semantics. |

## First-party evidence

- `chats.init` accepts `files`, `repo`, `registry`, and `zip` initialization types and returns chat/project/version/file/demo metadata. It requires a v0 API key and documents authorization/error responses.
- `chats.create` accepts a user message, optional system context, attachments, project ID, model configuration, chat privacy, and sync/async response mode. This is a schema/context injection seam, not proof of a complete planning/repair loop.
- Projects can hold a description, icon, environment variables, instructions, privacy, and linked Vercel project ID. The project response includes latest chat version status and demo URL fields.
- The design-systems page documents custom registries, Tailwind config/CSS variables, shadcn defaults, registry tokens/components/blocks, `registry.json`, dependency/file/target metadata, registry deployment, and “Open in v0” context transfer.
- Hooks can subscribe to chat/message lifecycle events. Rate-limit, billing, usage, and user-activity APIs expose operational/account telemetry, but the reviewed pages do not provide a per-request API price.
- Vercel’s v0 docs describe project creation as creating a corresponding Vercel project and deployment through the v0 interface. This is strong evidence of Vercel-coupled delivery, not vendor-neutral output deployment.
- The `vercel/v0-sdk` repository is source-available under Apache 2.0 according to its `LICENSE` file. GitHub API metadata returned `NOASSERTION`, so the license should be read from the file/commit rather than inferred from API metadata alone. The README calls the SDK a developer preview/beta and lists build/test/type-check scripts.

## Comparison matrix reconciliation

| Capability | Finding | Level/confidence |
|---|---|---|
| Intent capture | Natural-language chat creation and text-to-app positioning. | `D`; high |
| Planning | Project instructions/system context and async chat modes support steering/context; a formal plan artifact is not documented in the reviewed API pages. | `B`; medium |
| Retrieval | Chat init accepts files, repositories, registries, and zip archives; attachments are supported. | `D`; high |
| Scaffold selection | Projects, registry items, custom blocks, and registry dependencies provide starting contexts. | `D`; high |
| Design tokens | Custom registry, Tailwind/CSS variables, and registry tokens are explicitly documented. | `D`; high |
| Schema binding | Files, environment variables, integrations, and project context are documented; a portable Postgres/ORM schema contract is not. | `B`; medium |
| Execution environment | Generated demo/preview plus Vercel-linked project infrastructure. | `D`; high |
| Browser operation | No arbitrary external browser/computer-use operation in the reviewed API/docs. | `U`; high |
| Approvals | Chat privacy/team modes and API auth exist; per-side-effect approval is not documented. | `B / U`; medium |
| Testing | Deployment error/log API and async version status are documented; no universal build/browser contract gate. | `B`; medium |
| Deployment | Vercel project creation and v0/Vercel deployment are documented. | `D`; high |
| Rollback | Version/latestVersion metadata and Vercel deployment concepts exist, but no reviewed API endpoint restores an older generated version. | `U`; high |
| Auditability | Hooks, usage, user activity, billing, chat/message events, and status fields provide telemetry; immutable adaptation/audit evidence is not established. | `B`; medium |
| Cost | Official plan/credit page documents Free, Premium, Plus, Business, Enterprise and credit usage; per-call Platform API pricing remains unverified. | `D* / U`; high |
| Extensibility | SDK, OpenAPI-generated package, React package, AI tools, hooks, MCP integrations, registries, and Vercel ecosystem are documented. | `D`; high |

## Reconciliation against local claims

| Local claim | First-party result | Decision |
|---|---|---|
| “v0 is the closest public analogue; registry + tokens + specialized models + repair/lint” (`builder-architecture-intel-2026-08-25.md:28-34`) | Registry/design-token contract and API are directly supported; specialized model/repair details are not all in the API pages reviewed here. | Keep as supported synthesis, with source links in this packet. |
| “White-labeled builders are explicitly supported; `chats.init()` is a schema-injection hook” (`lovable-teardown-2026-08-26.md:46-52`) | `chats.init()` file/repo/registry context is supported. The reviewed official docs do not show an OEM/white-label entitlement or branding contract. | Split: context injection = documented; OEM/white-label = held. |
| “Vercel-only deploys” (`lovable-teardown-2026-08-26.md:50-52`) | Official docs show Vercel-linked projects/deployment. The reviewed pages do not prove that every API output must deploy only to Vercel, but no alternate deploy target is documented. | Use “Vercel-coupled in reviewed evidence,” not absolute “Vercel-only.” |
| “Per-call pricing unpublished” (`lovable-teardown-2026-08-26.md:51-52,83`) | Plan/credit pricing and billing/rate-limit endpoints are public; no per-call API price schedule was found in the reviewed sources. | Keep per-call price `unverified`. |
| “Rollback/branch/PR/deploy” local synthesis | API exposes versions/status/demo metadata and deployment/error surfaces; no rollback endpoint was found. | Do not equate version metadata or Vercel deployments with external rollback. |

## What is genuinely differentiated after this review

v0 validates a practical build-plane pattern: a model can receive an existing code/design-system context through a structured registry or file/repo seed, generate into a project, and hand off to a hosted deployment surface. The differentiator for Action Model cannot be “we have a registry” alone. The remaining wedge is the stricter contract around:

- source/license/provenance admission before registry exposure;
- one stack/data/token dialect with typed adaptation and abstention;
- separate preview, build, deployment, and rollback gates;
- approval and verification of external side effects; and
- evidence packets that survive client handoff.

The v0 API is a possible optional integration, not the Actionist architecture boundary: it is authenticated, Vercel-coupled in reviewed docs, and has no established Actionist-owned rollback or evidence ledger.

## Held/rejected claims

- **Held:** “v0 provides an official white-label/OEM builder contract.” No first-party entitlement, branding, or multi-tenant OEM guarantee was found in the reviewed sources.
- **Held:** “v0 has vendor-neutral deployment.” Reviewed official docs tie projects/deployments to Vercel; no alternate deploy target was documented.
- **Held:** “v0 API pricing is known.” User plan/credit pricing is documented; per-call API pricing is not.
- **Held:** “v0 can restore any previous generated version through its API.” Version/latestVersion fields and demo URLs are documented, but no restore endpoint was found in the reviewed API pages.
- **Held:** “v0’s SDK is production-stable.” GitHub README calls the SDK a developer preview/beta; it should be pinned and independently tested.
- **Not claimed:** authenticated/live API behavior, exact quotas for the current account/plan, or Actionist implementation.

## Sources, dates, and receipts

All web sources below were read/searched on **2026-08-26**; pages sometimes show older publication/crawl ages, so the lane records the observation date and treats exact behavior as current-doc evidence only.

- [v0 design systems](https://v0.dev/docs/design-systems) — custom registry, Tailwind/CSS variables, tokens, components, blocks, dependencies, deployment, Open in v0.
- [v0 initialize chat](https://v0.dev/docs/v0-platform-api/chats/chats.init) — files/repo/registry/zip initialization, API key, response/version fields.
- [v0 create chat](https://v0.dev/docs/v0-platform-api/chats/chats.create) — messages, system context, attachments, project/model/privacy/async fields.
- [v0 create project](https://v0.dev/docs/v0-platform-api/projects/projects.create) — project instructions, environment variables, privacy, linked Vercel project.
- [v0 rate limits](https://v0.dev/docs/v0-platform-api/ratelimits/rateLimits.find) — limit/remaining/reset and free-user daily-limit fields.
- [v0 billing](https://v0.dev/docs/v0-platform-api/user/user.getBilling) — authenticated billing/usage/quota endpoint.
- [v0 hooks](https://v0.dev/docs/v0-platform-api/hooks/hooks.create) — chat/message lifecycle webhooks.
- [Vercel v0 docs](https://vercel.com/docs/v0) — v0 project/Vercel deployment relationship; page last-updated label observed in source.
- [v0 pricing](https://api2.v0.dev/docs/pricing) — plan/credit pricing observed 2026-08-26; not API per-call pricing.
- [v0 SDK repository](https://github.com/vercel/v0-sdk) — SDK packages, beta/developer-preview warning, examples, CI scripts; observed 2026-08-26.
- [v0 SDK Apache license](https://github.com/vercel/v0-sdk/blob/main/LICENSE) — source file read via GitHub API on 2026-08-26; GitHub API metadata returned `NOASSERTION`.
- GitHub API receipt on 2026-08-26: `vercel/v0-sdk`, default `main`, SHA `276e1c235d14416f36649da6f97ae4719e7c1e31`, `pushed_at=2026-08-22T02:26:44Z`, `license=NOASSERTION`; the checked `LICENSE` file is Apache 2.0.
- Local sources reconciled: `research/builder-architecture-intel-2026-08-25.md:28-34`; `research/lovable-teardown-2026-08-26.md:46-52,83`; `research/actionmodel-long-run/outputs/platforms/checkpoint-002.md`.

No API key or authenticated product session was used. No runtime application or shared schema was changed.

## Next gate

P-012: direct first-party review of Lovable’s current API/white-label and rollback boundary, or resolve the held P-010 candidate admission if an explicitly permitted isolated proof path becomes available. Keep the lane `active` with the single P-010 blocker recorded rather than upgrading any held claim.
