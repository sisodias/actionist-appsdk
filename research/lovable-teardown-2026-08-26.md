# Lovable teardown — 26 Aug 2026

Agent: opus-lovable. Full sourced report in agent transcript. Verdict up front:
**Cena's "near-impossible" is right about GENERAL Lovable and wrong about his scoped
case.** Lovable's hard problems are problems of generality; Actionist's constraints
delete most of them.

## The single most important data point

**Lovable built their own sandbox fleet on AWS/K8s, got it working, then ABANDONED it
and bought Modal** (1M+ sandboxes in a 48h window). The $6.6B company decided sandbox
infra wasn't worth owning. → We rent (E2B/Modal/Daytona) from day one; never build.

## Product surface (Aug 2026, condensed)

Build Mode (autonomous multi-step, self-debugging) + Plan Mode (1 credit/revision,
section-level plan diffs) + parallel subagents (Researcher/Reviewer/Synthesiser).
Preview toolbar replaced Visual Edits (select/inline-edit/annotate/comment). Dev Mode
editor paid-only. NO branching; version history is code-only (doesn't roll back DB).
Lovable Cloud = managed Supabase, region-LOCKED once enabled, no migration path out.
Lovable AI = LLM gateway inside generated apps (Gemini 3.7 Flash default). ~100
connectors in 6 months. Git export one-way (can't start from existing code). Deep SEO
(Semrush, Search Console, SSR via TanStack Start). Wiz + Aikido scanning native.

## Economics

$25/mo Pro = 100 credits; Business $50 = SAME credits (pay double for SSO/governance).
Credit examples: gray a button 0.5, auth 1.2, landing page 1.7. **Jun 2026: build and
RUN credits unified into one balance — live apps drain the build pool** and users can't
tell what caused spend. #1 2026 complaint: credit burn on the model's own mistakes
(60-150 credits lost to AI-introduced bugs). Small app ≈ $25-75 to build, meter never
stops. Free tier ≈ 3 interactions/day.

## Real failure modes

Fix-one-break-another loops; good at layouts/CRUD, breaks at multi-step business logic
(wrong arithmetic shipped); generic visual convergence; no mobile, no model choice, no
tests. ML6 architectural critique: browser talks near-directly to Postgres via
PostgREST, **RLS policies are LLM-authored (known data-leak class)**, no dev/prod
separation, everything publicly addressable, thin observability, "context rot" drift.

## White-label / buy-vs-build — decisive

**Lovable: NO white-label/OEM/API** (just a branded autosubmit URL + an MCP preview).
Bolt/Base44/Softgen/Create: all dead ends for licensing.
**v0 Platform API (Vercel) is purpose-built for our use case and GA:** REST
projects/chats/messages + deployments; `chats.init()` seeds from files/repo at no token
cost (= schema-injection hook); responses return parsed files + a demo URL for iframes;
custom design systems via shadcn registry injection; white-labeled builders are an
explicitly supported use case. Quotas: 10k req/day, 1k chat msgs/day, 100 deploys/day.
Caveats to test: Vercel-only deploys, frontend-first (no auth/ORM/business-logic gen),
per-call pricing unpublished — verify in billing.
OSS scaffolds if building: freestyle-sh/adorable (git-backed, bidirectional GitHub
sync), open-lovable (MIT, E2B), dyad, beam-cloud/lovable-clone.

## The two-column verdict

| Genuinely hard in Lovable (months-years) | Commodity for scoped clone (days-weeks) |
|---|---|
| Sandbox fleet at scale (they gave up → Modal) | Rent E2B/Modal per-second |
| LLM load balancing, B tokens/min, cache-preserving | Single provider + retry + stable prompt prefix |
| Codegen for ANY app/domain | Codegen against ONE schema + design system + app shape |
| ~100 OAuth connectors w/ credential isolation | NOT zero — but importable, see note |
| Multi-region managed Postgres/auth/storage/cron | Scoped views onto the platform DB |
| Unified build+run+AI credit metering | Flat per-seat or none |
| Vent-Tool self-improvement loop | Curated few-shot + fixed system prompt |
| Wiz/Aikido/CTF-swarm security program | LLM-RLS risk REMOVED: platform owns schema+policies |
| SEO/SSR/Semrush | Irrelevant for dashboards |
| Visual Edits DOM→source mapping | Skippable v1; chat-only captures most value |
| 8M users / 1M projects-week tenancy | Hundreds of tenants on infra they already run |
| — | Subdomain deploys = wildcard DNS + build upload |
| — | Version history = git commit per generation |

**Minimal 80%-value set:** chat → constrained codegen (fixed schema + component
library) → sandbox preview iframe → git-backed versions → subdomain publish.
Weeks-to-months on rented sandboxes. NOT years.

**Security asymmetry worth quoting to Cena:** Lovable's worst production risk
(LLM-authored RLS on a public database) is a *non-issue* in the scoped version because
the platform owns schema and policies. Constraining the problem removes Lovable's
biggest liability, not just its cost.

GAPS: v0 per-call pricing unverified; pre-Jun-2026 changelog secondary-sourced;
metering/multi-tenancy "solved-but-unglamorous" is inference from absence.

## CORRECTION 27 Aug 2026 — the connectors row was wrong

The table above scored connectors **ZERO** for the scoped case, reasoning "platform
already owns the DB". That conflates two different things. Owning Actionist's *own*
Postgres removes the need to connect to *it* — it says nothing about a client dashboard
wanting Gmail, Slack, Stripe, HubSpot or Notion. Those are still real work.

But the row was wrong in our favour on the second point: connectors are **importable, not
hand-writable**. `activepieces/activepieces` is MIT outside its `ee/` carve-out and ships
**728 connectors (113 OAuth2, 508 API-key)** — the OAuth subset alone already exceeds
Lovable's ~100 — plus the OAuth2 refresh logic, AES-256-CBC credential encryption, and a
complete shadcn "connect account" dialog set on our own stack.

Full evidence, licensing map (Nango/Airbyte are ELv2 = **cannot** be used in a hosted
Actionist; Composio's MIT covers only an SDK to a paid hosted service), the MIT/EE
boundary inside the credential runtime, and a build order:
`connectors-licensing-2026-08-27.md`.

Method note for future teardowns: this row was scored from first-principles reasoning
without a search. The 389-repo `github-sweep` had zero connector lanes, so nothing
contradicted it. **A confident "ZERO" in a buy-vs-build table deserves one search before
it ships.**
