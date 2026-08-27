# App-builder architecture intel — 25 Aug 2026

Produced by deep-research agent (luna-lovable). Public evidence; inference labeled.
Purpose: ground the Actionist Builder design in what Lovable/Bolt/v0/Replit actually do,
why Cloudflare vibesdk failed for Cena's team, and which OSS to steal from.

## How the incumbents actually work

**Lovable** — grew from open-source gpt-engineer. Current stack per their FAQ: TanStack
Start/SSR for new apps (since May 2026), older apps React+Vite, Tailwind, Lovable
Cloud or Supabase backend, GitHub sync, hosted previews, Build/Plan modes. They shipped
"pre-built, customizable templates" deliberately. Best engineering disclosure is their
"Vent Tool" post: LLM judges detect stuck projects, a classifier retrieves curated
internal knowledge ("Lovable Stack Overflow" — human-reviewed, A/B-dropped, pruned
because stale knowledge polluted context), synthesizes a compact context file, injects it
pre-loop. **Cena's scaffold-theory is directionally right but unproven publicly** — likely
deterministic stack/templates + generated glue + retrieval, not a pure template catalog.
Sources: lovable.dev/gpt-engineer, docs.lovable.dev/introduction/faq,
lovable.dev/blog/we-gave-our-agent-a-vent-tool.

**Bolt.new** — the moat is WebContainers (Node-in-browser via WASM, in-memory FS, virtual
TCP, iframe previews; no remote VM). bolt.diy (MIT) exposes the control plane: Vercel AI
SDK multi-provider, file locks, diffs, snapshots/revert. Public issues show users stuck in
repair loops — **runtime isolation alone doesn't solve agent convergence**. Commercial
WebContainers use needs a license. Sources: blog.stackblitz.com WebContainers posts,
github.com/stackblitz-labs/bolt.diy, bolt.new issues #1058/#8381.

**v0 (Vercel) — closest public analogue to our thesis.** Registry-backed design systems:
shadcn registries serve components/blocks as model-readable JSON. Composite model family:
frontier model for large generations, cheap "Quick Edit" model for narrow edits, streaming
AutoFix model for error repair, then lint. Platform API runs chats in isolated sandboxes
with branch/PR/deploy. **Registry + token context + specialized edit/repair models = the
proven assembly-over-generation pattern.** Sources: vercel.com/blog/v0-composite-model-family,
vercel.com/blog/ai-powered-prototyping-with-design-systems, github.com/vercel/v0-sdk.

**Replit Agent** — plan mode decomposition, regular testing, rollback checkpoints.
Snapshot engine: immutable 16-MiB GCS chunks, manifest-only copy-on-write forks, dev/prod
DB separation so the agent can't touch production. **The reference for cheap-model
safety: reversible isolated state + validation, not trust in patches.** Sources:
docs.replit.com/replitai/agent, replit.com/blog/inside-replits-snapshot-engine.

## Why vibesdk failed Cena's team (public failure modes)

Architecture: Understand → Build (per-project workspace DO) → restore point → deploy →
verify preview → repair loop; AI Gateway for routing. Known breakages:
- Sandbox unavailable → static analysis stuck at 0/4, files generated but review dead
  (issue #359, no confirmed root cause).
- **Frontend-only deploys work; backend Worker apps break after deploy while green in
  sandbox — reproduced on Cloudflare's own hosted instance** (#313). Sandbox-green ≠
  production-green.
- One-click deploy fails with API 10023 even on paid plans — entitlement/dispatch
  namespace/token coupling (#162).
- Setup demands paid Workers for Platforms + Advanced Certificate Manager + wildcard
  domain + dashboard toggles — heavy platform coupling.

**Call value:** we can tell Cena precisely why vibesdk was "pretty shit" — it wasn't
(necessarily) his dev. It's Cloudflare-shaped: deep platform coupling and a
preview/production verification gap. Our design treats deployment as its own tested
subsystem.

## OSS to study/steal (shortlist)

| Base | Take | Watch out |
|---|---|---|
| dyad (github.com/dyad-sh/dyad) | Local-first isolation, BYOK provider abstraction, Vitest+Playwright+eval harness | core Apache-2.0 but `src/pro` is FSL |
| bolt.diy | Model adapter layer, workspace UX (locks/diffs/snapshots) | MIT, but WebContainers commercial license if used |
| open-lovable (somdipto/open-lovable) | E2B sandboxed execution, targeted file discovery | web-cloning is a separate capability |
| refine (refinedev/refine) | **Declarative resource schema + auto-CRUD + 15+ data providers as deterministic scaffold primitives** — Shaan already sent this to Cena 29 May | MIT |
| Plasmic + shadcn registry-template | Registry contract, slots/variants, tokenized styling, codegen | — |

## The 8 load-bearing design decisions (agent's synthesis)

1. **Scaffold library is the product boundary.** Versioned, vetted archetypes (dashboard,
   CRUD, auth, billing, marketing) with manifests: routes, data model, providers,
   allowed files, tests. Cheap models select and parameterize — never invent foundations.
2. **Typed resources + registry items** for UI/backend: component JSON, tokens, slots,
   provider adapters; only allow-listed composition ops. (v0/shadcn/Plasmic pattern.)
3. **Phase state machine:** clarify → plan → assemble → targeted edit → build/test →
   preview → repair → checkpoint. Bounded, resumable phases. (vibesdk/Replit pattern.)
4. **Model split:** cheap models for routing/extraction/local edits; escalation reserved
   for architectural ambiguity. Synthesize compact retrieval context (Lovable LSO
   pattern). Maps directly onto MiniMax-primary with rare frontier calls.
5. **Structured minimal edits:** file locks, named resource ops, AST-aware transforms,
   bounded diffs. Research: weaker models gain disproportionately from structured action
   spaces (arxiv 2604.05407) and minimal-patch repair (arxiv 2604.05963).
6. **Validator-gate every transition:** typecheck/build, route smoke tests, browser
   checks, contract tests → machine-readable failures; cap repair at 2-4 rounds (gains
   concentrate in first rounds — arxiv 2607.05197, 2604.10508).
7. **Reversible state, isolated envs:** per-task branches/checkpoints, dev-DB forks,
   append-only history. (Replit snapshot-engine reference.)
8. **Deployment contract tests separate from preview** — the exact gap that killed
   vibesdk for them (#313).

## Fit against Cena's constraints

- MiniMax-only → decisions 1, 2, 4, 5, 6 are what make cheap models viable at all.
- "Working and flexible" → archetype manifests + registry = flexibility without free-form
  codegen.
- "1 week per SaaS" → assembly + validator gates is the only credible path to that cycle
  time.
- His "probably 10 open source repos already" instinct → refine/dyad/bolt.diy/registries
  confirm it; the moat isn't the parts, it's the vetted library + the harness.
