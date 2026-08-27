# Actionist technical teardown — 25 Aug 2026

Produced by deep-research agent (luna-actionist), public surfaces only. Observations vs
inference labeled. Companion to `actionmodel-deep-dive/` (diligence) and
`../call-prep/` (client demand).

## Load-bearing findings

1. **No public API/SDK contract exists right now.** `sdk.actionmodel.com` fails DNS;
   `docs.actionmodel.com/api-reference/openapi.json` 404s; no official GitHub org/repo
   found. Integration must be contract-discovered with their team — a builder cannot be
   scoped against public surfaces alone. (Strong negative finding; ask Cena for API access
   on the call.)
2. **Stack:** actionist.ai = Next.js/React on Vercel behind Cloudflare (headers:
   `x-vercel-cache`, `/_next/static`, RSC payloads). Auth = Clerk
   (`clerk.actionmodel.com` → frontend-api.clerk.services). api.actionmodel.com is
   Google-fronted (35.244.242.214, `via: 1.1 google`), 403 to public. Marketing site
   (actionmodel.com) is Framer — completely separate. Cloud browser = BrowserBase
   (Pro tier, $5/10h add-on).
3. **Current product = orchestration, not app-building.** AI employees (Skills, Memory,
   Apps, Schedules, Agents, Channels, Cloud, Reactions), Projects (goal → phased plan,
   owners, dependencies, approval queue, Kanban/List/Dependencies views), Schedules
   (±60s precision, 3 retries, 90-day history, Telegram/Slack delivery). App catalog:
   878 apps, ~40 categories — but no visible developer publish/install flow.
4. **Docs describe an n8n-like workflow editor** (drag/drop, test mode, node versioning,
   if/loops/merge/parallel, LLM/document/database/email tools, typed variables, scripts,
   REST/GraphQL/Webhooks/MCP, Ask Human checkpoints) — documented capability; live-UI
   parity unverifiable without login.
5. **Model story is proprietary-LAM marketing; no configurable providers documented.**
   No public MiniMax/BYOK/model-selection docs — Cena's MiniMax constraint is
   private knowledge, not public architecture. The 50x-MiniMax-load-balancing idea
   (chat, 6 Jun) suggests model routing is still unsolved on their side.

## Integration seams for the app-builder (agent's assessment, inference)

1. **Projects as the intake surface** — goal → draft app spec → phases → approval gates
   maps 1:1 onto prompt → clarify → confirm → build. The UX pattern Cena described
   already exists in his own product.
2. **Workflow custom tool / MCP node** — expose "generate app" as a node; outputs =
   artifact/repo/deploy handles consumed downstream.
3. **App Store / Marketplace as distribution** — 878-app catalog is the natural shelf for
   generated apps, but publish APIs aren't public; start with internal manifest + manual
   review.
4. **Cloud runtime for verification** — BrowserBase browsers + encrypted credentials +
   transcripts = the acceptance-test rig for generated apps.
5. **Generated apps as triggerable workers** — emit webhook/reaction/schedule definitions;
   route results to Channels/Projects approval queue.

## Stale/contradictory public claims (use to calibrate what they say on the call)

- Docs say "private beta"; live site has pricing, demo, 878-app store.
- Docs Cloud VPC: $149-199/mo dedicated Mac/Windows VMs, Linux coming; live pricing:
  BrowserBase hours instead. Infra story is non-unified.
- Docs tool marketplace "Coming Soon" vs live App Store.
- Extension docs still carry Q1/Q2 2025 targets (18+ months stale).
- Retention: docs 30-day + tier system vs pricing 7-day Pro backups.
- actionmodel.com/actionist page published 25 Aug 2026 with placeholder copy
  ("Subtext? Try Actionist") — shipped-fast, low-QA signal.

## Evidence

Saved page sources: scratchpad `actionist-home.html`, `actionmodel-home.html` (session
scratchpad, ephemeral). All claims carry URLs in the agent transcript; key sources:
actionist.ai/{,pricing,projects,schedules,cloud,app-store},
docs.actionmodel.com/actionist/* (overview, agents-and-workflows, agent-tool-usage,
cloud-vpc, agent-memory, triggers, actionist-browser-extension, agent-history).
Agent confidence: 89%; would rise with authenticated access or a restored SDK/OpenAPI.
