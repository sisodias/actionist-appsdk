# GitHub recon — live `gh` API searches, 26 Aug 2026

Direct GitHub API searches (not corpus — the corpus DB is on the Mini, unverified).
Star counts and licenses as returned 26 Aug. Supplements
`builder-architecture-intel-2026-08-25.md` (which covered dyad, bolt.diy, open-lovable,
refine, Plasmic/shadcn-registry).

## Working lovable-clone references (fresh finds)

| Repo | ⭐ | License | Why it matters |
|---|---|---|---|
| beam-cloud/lovable-clone | 292 | none | Lovable clone via BAML + FastMCP + Beam — MCP-native, closest to Actionist's MCP surface |
| kuluruvineeth/codecapsule | 21 | none | "Describe an app, watch it run" — multi-model gen into live E2B sandboxes, Next.js/Vue/Streamlit templates = mini template-first builder |
| abhayymishraa/webbuilder | 12 | none | LangGraph multi-agent lovable clone, E2B isolation, WebSocket streaming, multi-provider LLM |
| Jisap/next15-lovable-clone | 20 | none | Inngest + Clerk + tRPC + Prisma — same auth (Clerk) as Actionist |
| sanidhyy/lovable-clone | 20 | MIT | Next.js 16 chat-to-app |

⚠️ Most lovable-clones are unlicensed (= default copyright, study-only, no code lifting).
MIT ones can be lifted.

## Image→code lane

- abi/screenshot-to-code — ⭐74,465, MIT, active (updated 25 Aug). The canonical
  screenshot→HTML/Tailwind/React/Vue repo. Direct P2 building block (mockup→code leg).
- bernaferrari/FigmaToCode — ⭐5,154 but GPL-3.0 (viral — reference only, no lifting).
- d01000100/figma-token-engine — MIT, Figma design tokens → code transforms (P2 token leg).
- "design tokens from image" returned **zero repos** — the image→design-tokens step has
  no off-the-shelf OSS. **This is a genuine gap = differentiation opportunity for P2.**

## Scaffold/starter lane (assembly bases)

- boxyhq/saas-starter-kit — ⭐4,916, Apache-2.0, active — enterprise SaaS base (Next.js),
  license-safe.
- juicycleff/ultimate-backend — ⭐2,903, MIT — multi-tenant CQRS/GraphQL microservices.
- webdevcody/wdc-saas-starter-kit — ⭐1,347, MIT.
- moasq/production-saas-starter — ⭐530, MIT — Go + Next.js hexagonal.
- (Plus refine ⭐MIT from prior report.) Verdict: Cena's "probably 10 open source repos"
  for the base = confirmed; the vetted-library work is curation + manifests, not
  invention.

## Sandbox/preview lane

- e2b-dev/desktop — ⭐1,456, Apache-2.0 — desktop-in-sandbox for computer use;
  interesting adjacency to Actionist's computer-use runtime.
- e2b-dev/dashboard — ⭐179, Apache-2.0 — sandbox management, Next.js 16 + Supabase.
- juancgarza/claude-in-a-box — ⭐51, MIT — artifacts-style UI over sandboxed Claude Code.

## License-compliance lane (P1 hard requirement)

- aboutcode-org/scancode-toolkit — ⭐2,612 — the industry-standard license/copyright
  scanner; scancode.io (Apache-2.0) adds pipeline automation. **This is the license gate
  for any corpus-harvested code entering client apps.**
- SiteWarming/Comply — ⭐1 — AI usage-aware license analysis w/ MCP server; early but
  watches the exact problem (does the obligation trigger for our distribution model).

## Voice lane

- daily-co/nimble-pipecat — ⭐87 — Pipecat voice-agent framework (daily.co official).
- Skylark (LiveKit RTC + AgentScope, Apache-2.0), edgevox (offline, Apache-2.0) — options
  beyond livekit/livekit which Shaan already sent Cena in Mar 2026.
- Requirements-elicitation agents: essentially nothing mature (two ⭐0 repos).
  **Another genuine gap = the P3 guide agent's elicitation quality is differentiable.**

## Empty lanes (searched, nothing usable)

"app builder agent" (all ⭐≤9, toys) · "requirements elicitation agent" (⭐0s) ·
"design tokens from image" (zero) · "prompt to app" (⭐≤61) · "component library ai"
(⭐≤9). The polished pieces exist per-lane; nobody has composed them into an
assembly-first, image-gen-fronted, guided builder. Differentiation claim survives
first contact with the API.

## Search-method note

`gh search repos` ANDs all terms — multi-word phrases over-constrain (four queries
returned empty on first pass and needed re-phrasing). For corpus queries the same
lesson applies: generate multiple short query variants per step, not one long phrase.
