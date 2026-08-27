# Actionist Builder — synthesized design v1 — 26 Aug 2026

The single reference doc. Folds: Shaan's three principles (`PRINCIPLES.md`), five research
reports + GitHub recon (`../research/`), client demand spec (`../call-prep/what-cena-wants.md`).
Every design choice below traces to evidence; inference is flagged.

## One-paragraph pitch

A guide agent (chat, later voice) interviews the user into a structured spec, runs
seconds-fast image-gen design rounds until the client approves a visual direction, then
compiles that approval into a design-token contract and assembles the app from a vetted
scaffold + component registry — with conditional retrieval from the GitHub corpus
supplying evidence at each step, cheap models doing bounded adaptation, and validator
gates (build, tests, screenshot-diff, license scan) between every phase. Expensive
models appear only where evidence says they're needed; everything else is MiniMax-class.

## The pipeline

```text
┌─ GUIDE AGENT (P3) — persistent spine: elicits, presents, narrates, collects approvals ─┐
│                                                                                        │
│ 1 SPEC        free chat over structured schema; targeted questions for missing         │
│               interaction/content/style fields; confirm-summarize; assumptions marked  │
│               → BuildSession JSON (approval gate 1)                                    │
│                                                                                        │
│ 2 DESIGN      breadth: 6-10 candidates via FLUX/Ideogram (~$0.25, seconds)             │
│   ROUNDS      refine: style-refs hold visual language; GPT-Image/Recraft for           │
│               text/vector assets (async) → client picks                                │
│               → token contract: vision→IR JSON {color,type,spacing,radius,shadow,      │
│                 layout} + confidence, quantized; client approves TOKENS (gate 2)       │
│                                                                                        │
│ 3 ASSEMBLE    scaffold selected from vetted archetype library (manifest: routes,       │
│               data model, providers, allowed files, tests)                             │
│               per feature: CONDITIONAL retrieval (Repoformer gate) → query bundle      │
│               (APIs/intent, never "similar code") → hybrid search (lexical+embed+AST,  │
│               RRF, top-5 evidence packs) → cheap-model adaptation constrained to       │
│               scaffold interfaces → abstain-and-generate-fresh if gates fail           │
│                                                                                        │
│ 4 VALIDATE    license/provenance (scancode) → deps → typecheck/build → unit →          │
│               browser smoke → screenshot-diff vs approved mockup; repair capped        │
│               2-4 rounds; every transition machine-readable                            │
│                                                                                        │
│ 5 PREVIEW     guide presents delta (voice narrates delta only; screen owns full        │
│               artifact + diff + Approve/Revise) → iterate or ship (gate 3)             │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

## Load-bearing decisions and their evidence

| # | Decision | Evidence |
|---|---|---|
| 1 | Scaffold library is the product boundary; models never invent foundations | v0/registry pattern; vibesdk backend-deploy failure #313; starter kits exist (boxyhq 4.9k⭐ Apache) |
| 2 | Retrieval is conditional, not always-on | Repoformer ICML'24 (~70% speedup, no loss); always-on hurts |
| 3 | Query APIs/contracts/intent — never "similar code" | AllianceCoder study: similar-code injection dropped Pass@1 36.5→19.6 |
| 4 | Hierarchical granularity, AST-aware chunks, top-5, hard context budget | cAST (+4.3 R@5/+2.67 Pass@1); median evidence span 27 lines; lost-in-middle ICLR'25 |
| 5 | Hybrid index RRF-fused (lexical+symbol+embed+AST/graph+metadata) | Agent Retrieval Bench (no single retriever dominates); Blackbird; Sourcegraph off-embeddings at scale |
| 6 | License partition at ingestion; scancode gate on assembled tree; GPL/AGPL reject-by-default; unlicensed=quarantine | GitHub default-copyright docs; ScanCode; ChooseALicense |
| 7 | Image rounds: FLUX/Ideogram breadth + GPT-Image/Recraft specialists; async for slow models | fal pricing/latency; OpenAI pricing (~40s/img); Recraft SVG |
| 8 | Tokens are the design contract; humans approve tokens, not pixels | vision-to-IR research (2603.01460, InfiniteWeb); pixels underdetermine fonts/spacing |
| 9 | Registry-constrained codegen; "faithful within registry," never pixel-perfect | Design2Code (frontier models lag); v0/Relume/Onlook; also what makes MiniMax viable |
| 10 | Chat-first guide over structured spec; fast-default + opt-in interview depth | Wix killed forced questionnaire; ReqElicitGym (elicitation ceiling low → moat); GPT-4o follow-up quality |
| 11 | Voice = WebRTC layer later; narrates deltas; screen owns approvals; silence ≠ approval | voice/screen study 3484221; LiveKit $0.01/min; Shaan sent Cena livekit Mar'26 |
| 12 | Reversible state everywhere (branches/checkpoints, dev-DB forks) | Replit snapshot engine |
| 13 | Deployment contract tests separate from preview | vibesdk #313: sandbox-green ≠ production-green |
| 14 | Eval harness = golden prompts + gates; novel IP | three research lanes each report "no public benchmark exists" |

## Model routing (Cena's MiniMax constraint)

- MiniMax-class: elicitation follow-ups, query-bundle generation, bounded adaptation,
  repair within capped rounds, narration. Viable BECAUSE of decisions 1/3/4/9 (bounded
  action spaces are where weak models hold up — structured-edit literature).
- Frontier calls (rare, budgeted): initial archetype selection on ambiguous specs,
  mockup→code compilation of the approved design (vision), unresolved-repair escalation.
- Image models per matrix. Voice per P3 report (Realtime shortest / LiveKit extensible).

## What we uniquely hold (the moat, evidence-checked ×3)

Every lane exists polished in isolation; nobody composes them. Recon found: zero OSS for
image→design-tokens; nothing mature for elicitation agents; lovable-clones are toys or
unlicensed. Plus: the corpus (850k scraped/80k categorized — pending Mini verification)
and the vetted-archetype curation work nobody else has done.

## Phase-0 dependencies (before any commitment to Cena)

1. Corpus inventory on the Mini (WARP route) — verify scale claims, size the P1 index
   work (license partition → Tree-sitter/AST layer → dedupe → embeddings on clean set).
2. Actionist API access + canonical contract (sdk DNS dead; learn.actionist.ai newer) —
   counterpart Poorya Araghy.
3. Hosting/tenancy decision for generated apps (never discussed with Cena).
4. Scope pick: internal factory (V1) vs user-facing builder (V2) — one for phase 1.
5. Golden-prompt eval set agreed with Cena ("good app" defined mechanically).

## Suggested phase-1 (bounded, demoable — matches his 17 May structure)

One vertical (e.g. marketing dashboard — his own 23 Jun example). Chat guide → spec →
one design round → assembly from ONE archetype + ~50 curated components → validated
preview. Success = prompt→approved-design→working-app in one session, on MiniMax-class
models, with the full artifact trail. Everything after (corpus-wide retrieval, voice,
marketplace listing, factory scale-out) is phase 2+.
