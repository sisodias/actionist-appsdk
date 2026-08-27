# Action Model — Research Synthesis (first-principles director report)

**Maintained by:** RESEARCH-SYNTHESIS (Fable, pane `w659e97bee4b2b4-4`)
**Updated:** 2026-08-26 (rev 2 — folded in REUSABLE-BLOCKS finance-operations lane report)
**Mode:** read-only synthesis. No build decision is authorized; nothing here is one.
**Evidence classes:** `E` = directly inspected file/pane/first-party source · `I` = inference from evidence · `U` = unknown/unverified. A lane report is treated as a claim about its own evidence, never as proof of a capability.

---

## 1. What was inspected (sources)

| Source | Kind | State when read |
|---|---|---|
| `research/actionmodel-long-run/` — AM-PLATFORMS (9 checkpoints), AM-CORPUS (7), AM-VERTICALS (3), AM-SYNTHESIS (6 + decision ledger) | E — lane CURRENT/ledger files read directly | All four panes live in `ACTION-MODEL-LONG-RUN`; statuses idle/done |
| Builder Research `builder-ecosystem-report.md` (ECOSYSTEM-COMMERCIAL) | E — artifact read in full | Commercial matrix v1, coverage ledger v2, OSS map v1, provisional pilot stack v1 |
| Builder Research `builder-ecosystem-sweep.md` | E — artifact read in full | Second commercial matrix adding Cursor, Claude Code web, Copilot cloud agent, Bubble, Retool, Google AI Studio/Firebase Studio/Antigravity |
| Builder Research `reusable-block-framework-report.md` (REUSABLE-BLOCKS) | E — artifact read in full | Landscape complete; framework draft (block dossier, eligibility gates, staged adaptation, rejection policy); final recommendation pending |
| SAAS-CATALOGUE pane | E (pane exists, status `working`) / U (no artifact yet) | No output file in the outputs directory at read time |
| Builder Research `finance-ops-research.md` (REUSABLE-BLOCKS, landed after rev 1) | E — artifact read in full; final status re-verified from file (all four milestones complete/audited 2026-08-26) | 15-rank candidate matrix, source-read dossiers, local-asset inventory, coverage ledger, staged-adaptation gates; 0 admitted, 0 blockers |
| `research/laptop-asset-sweep-2026-08-26.md` | E — read in full | siso-ui-base, design-schema, Great Library, trader-platform-research verdicts |
| `PROJECT.md`, `README.md`, decision context | E | Mini/corpus access BLOCKED; 850k/80k scale claims unverified |
| Herdr live map | E | 5 workspaces; BUILDER-RESEARCH has 3 codex workers + this pane; ACTION-MODEL-LONG-RUN has 4 named workers |

Contradictions found and carried, not resolved: AM-PLATFORMS `CURRENT.md` vs `status.json` blocker counts (reconciled in checkpoint-009 per lane's own note); AM-VERTICALS crosswalk JSON coverage declaration vs independent unique-ID count (synthesis lane retains 39 use-case/24 idea figures); AM-CORPUS cumulative 0/114/1 vs the ecosystem report's older 0/84/1 snapshot (same ladder, different date — corpus figure is later). laptop sweep internal note: SKILL.md palette count (49) vs index (67) — index trusted by the sweep's own re-derivation.

---

## 2. The problem, reconstructed from first principles

Strip away product names. The goal is: **take substantial existing software (OSS SaaS systems, scaffolds, components) and convert it into governed, reusable building blocks that cheap agents can compose into client tools and then operate — safely, provably, and repeatably.** That decomposes into eight irreducible sub-problems; everything in every lane maps onto one of them:

1. **Identity** — what is a "block"? A versioned, installable unit with pinned source, license clearance, declared host contract, ports, data mode, proof receipts, owner, rollback. (Block Contract v0 + REUSABLE-BLOCKS dossier draft are the two current answers; they need merging.)
2. **Transformation** — mechanically turning a repo slice into that unit: extraction, AST edits, token normalization, port insertion. Evidence says syntax-local edits are automatable; semantic equivalence, authorization behavior, and business invariants are not.
3. **Composition** — assembling admitted blocks into a working app inside a host scaffold, with bounded diffs a cheap model can produce and a machine can verify.
4. **Grounding** — binding to real data/auth/deployment (Postgres modes, read-only defaults, tenant keys, RLS decisions, Actionist's actual contract — currently unknown).
5. **Verification** — build, contract, browser smoke, screenshot, deployment-distinct-from-preview, repair budgets, machine-readable receipts.
6. **Authority** — approval before side effects, idempotency, rollback objects (code/DB/deploy/credentials/external effects as *separate* rollback objects), audit ledger.
7. **Operation** — agents driving the resulting tool and adjacent API-less software (browser/computer use) under the same authority plane.
8. **Economics** — cost per successful build under a MiniMax-class budget, license risk cost, maintenance burden, and what a client pays for.

The strategic wedge every lane independently converges on (`I`, consistent across ECOSYSTEM-COMMERCIAL, AM-PLATFORMS checkpoint-008/009, AM-SYNTHESIS ledger): the build plane (1–3) is crowded and converging commercially; the defensible seams are **provenance-gated admission (1), grounding (4), and the authority/verification/operation planes (5–7)** composed into one governed loop. This remains an inference — no incumbent was proven to lack it via authenticated testing, and Actionist's own side is unproven.

---

## 3. Coverage matrix

Status legend: ✅ substantively researched with sources · ◐ partial/one-sided · ⬜ effectively unowned · 🔒 blocked.

| # | Capability area | Status | What exists (evidence) | Material gap |
|---|---|---|---|---|
| 1 | Code transformation / AST | ◐ | jscodeshift/ast-grep/ts-morph mechanisms + automation-boundary table (REUSABLE-BLOCKS §2, §7) | No transform has been *run* on a real candidate; no fixture corpus; semantic-boundary claims untested in practice |
| 2 | Component/module boundaries & registries | ✅ | shadcn registry contract, Bit, pnpm workspaces, Changesets (REUSABLE-BLOCKS); payload-components held reference (AM-CORPUS); siso-ui-base 7.9k harvest + 33-repo manifest (laptop sweep) | siso-ui-base not reconciled into the corpus admission pipeline; extraction-vs-reimplement decision never exercised end-to-end |
| 3 | Design tokens / image→token | ◐ | DTCG 2025.10, Style Dictionary, token stages (REUSABLE-BLOCKS §Stage 3); image→token composition gap documented (AM-PLATFORMS ckpt-004); design-schema approval-loop precedent (laptop sweep) | The raster → confidence-bearing token IR → human approval → registry chain exists nowhere reviewed; P2 moat is still a hypothesis with a named negative result |
| 4 | Data / Postgres boundary | ◐ | Four data modes, information-schema/RLS/privilege primitives, Drizzle introspection, Refine data-provider port (REUSABLE-BLOCKS §Stage 4); dbcli held read-model candidate (AM-CORPUS) | No disposable-Postgres fixture test run; migration/backfill/expand-contract research thin; **Actionist's real data contract unknown** |
| 5 | APIs / integrations / contracts | ◐ | OpenAPI/Pact/JSON-Schema mechanisms; v0 Platform API as best-documented context seam; MCP surfaces across vendors | No contract test executed; no OAuth/secrets/idempotency deep-dive; v0 spike blocked on API key (PROJECT.md) |
| 6 | Browser / computer-use operation | ◐ | Browserbase/Stagehand/Skyvern/Playwright documented (both ecosystem reports); OSS-6 sweep defined | No typed action/approval/idempotency/recovery comparison executed; Actionist's claimed operation capability has zero authenticated dossiers |
| 7 | Agent orchestration / build state machine | ◐ | bolt.diy/Chef/Dyad/sandboxd/LaunchKit control-plane patterns; BuildSession state-machine candidate (pilot stack); Langflow/Dify/Gumloop approval fragments | No reimplementation-boundary comparison (OSS-2 not run); repair-loop budget and phase/checkpoint semantics undesigned in detail |
| 8 | Testing / evals / verification gates | ◐ | Playwright visual, Storybook, gate ordering (REUSABLE-BLOCKS §Stage 6); verify-gate concept in every design doc | **No golden-prompt set, no benchmark harness, no eval of anything.** Zero executed receipts across the entire programme |
| 9 | Security / sandboxing | ◐ | E2B/Modal/Daytona/WebContainers documented with pricing fragments; code-sandbox-mcp held | No threat model for untrusted generated code, prompt injection into the builder, tenant isolation, secret egress; OSS-3 matrix not built |
| 10 | Provenance / licensing / supply chain | ✅ design, ⬜ execution | ScanCode/ORT/SPDX/in-toto/SLSA mapped; license-gate policy; Great Library work.schema as vetting shape; hard gates drafted | **No license scanner installed; zero scans run** (AM-CORPUS preflight). This single tool gap holds the entire admission ladder |
| 11 | Deployment / domains / rollback | ◐ | Vendor deploy surfaces compared; separate-rollback-objects principle (Replit-derived); Vercel-as-adapter stance | No deployment executed; wildcard-subdomain/white-label/tenancy sweep lanes came back empty (github-sweep lane3/4 empty files); DNS/tenant contract with Actionist unknown |
| 12 | SaaS inventory (what to convert) | 🔒/◐ | 389-record sweep clustered (114 held); Horizon/ixartz/refine/shadcn/BoxyHQ pinned; verticals demand crosswalk (66 use cases) | SAAS-CATALOGUE lane still running, no artifact; 850k/80k corpus on the Mini **unreachable and unverified**; no demand→candidate join yet (verticals atoms not mapped to corpus candidates) |
| 13 | Knowledge / process assets (local) | ✅ | Laptop sweep: siso-ui-base pipeline, design-schema loop, Great Library schemas, trader-platform stack.json pattern | Found but not integrated: no lane owns folding siso-ui-base's forge/gate/judge loop into the block admission design |
| 14 | Demand / verticals / pilots | ✅ catalogue layer | 17/12/66/72 inventory, 12 atoms, 3 scored pilot archetypes, 10 offers (AM-VERTICALS); **finance archetype now has a full vertical deep-dive** (finance-ops-research.md): 15 ranked OSS candidates with source-read dossiers, a non-negotiable finance control contract, a commission-lifecycle gap statement, and a smallest-pilot shape (staged evidence/reconciliation block, client ledger stays authoritative) | All inferred; no authenticated Actionist environment; crosswalk metadata inconsistency unrepaired; operations and CRM/lead archetypes have no equivalent deep-dive yet |
| 15 | Commercial landscape | ✅ | Two independent matrices covering ~25 products with D/P/U/I evidence tags and pricing | OEM/white-label/enterprise entitlements unverified everywhere; no authenticated session anywhere |
| 16 | Economics / unit cost | ⬜ | Plan-price fragments only | **No cost-per-successful-build model, no MiniMax-class token budget estimate, no client pricing frame.** Unowned |
| 17 | Cheap-model capability | ⬜ | The architectural bet ("cheap models only orchestrate/adapt/glue") is asserted in PROJECT.md and every design doc | **Never tested.** No lane evaluates whether a MiniMax-class model can actually produce bounded diffs against a known scaffold at acceptable repair rates. This is the load-bearing assumption of the whole architecture |
| 18 | Actionist first-party contract | ⬜/🔒 | Verticals blocker #1; platforms: 0 authenticated dossiers | API/SDK, auth, data, deployment, approval, and token contracts all unknown; requires Cena, not research |

---

## 4. Decision ledger (programme level)

Mirrors and extends the AM-SYNTHESIS ledger; nothing below is upgraded beyond its evidence.

| # | Decision | Verdict | Position |
|---|---|---|---|
| D1 | Build authorization | **NOT GRANTED** | Explicit rule in AM-SYNTHESIS: no pilot until one candidate shows the full pinned-source → license → adaptation → contract → isolated build → smoke/visual → owner → rollback → human-admission ladder. Nothing has. |
| D2 | Wedge: scoped governed builder over general Lovable clone | PARTIAL (I) | Converged on independently by three lanes; still a design hypothesis pending Actionist contract facts. |
| D3 | Assembly-over-generation | PARTIAL (I) | Supported by market pattern + siso-ui-base's existence; **unfalsified but untested** — depends on D17 (cheap-model capability) which no one owns. |
| D4 | Build vs buy (v0 spike) | PARTIAL | Optional bounded spike, blocked on API key; adapter-only, never the contract boundary. |
| D5 | First pilots: finance / operations / CRM-lead | PARTIAL | Scored 28/27/28 on inferred data; operations flagged safer sandbox; all `unverified`. Finance now has the deepest evidence base (finance-ops lane): no OSS finance core is admissible as a block; OpenBooks/Accounted are control-contract references (both AGPL, both unaudited/jurisdiction-bound); the pilot shape narrows to a native staged evidence/reconciliation plane with invoice2data-class parsing behind quarantine. Its stated first follow-on is client authority + jurisdiction discovery — same dependency as D8/ACTIONIST-CONTRACT. |
| D6 | Corpus admission threshold (evidence ladder) | ADOPTED as rule | The one genuinely settled thing: the ladder itself. Both the sweep-spec and REUSABLE-BLOCKS dossier encode compatible versions; they should be unified into Block Contract v1. |
| D7 | Two contract drafts exist (Block Contract v0 vs REUSABLE-BLOCKS dossier) | OPEN | Dossier adds status/data-capability/sensitivity/ownership/rollback fields v0 lacks. Merge is a bounded design task, not research. |

---

## 5. First-principles gap analysis — unowned and overlooked

**Unowned questions (no lane, no artifact):**

1. **Cheap-model assembly capability (the load-bearing bet).** Every design assumes MiniMax-class models can orchestrate/adapt/glue against known scaffolds. Zero evidence either way. A 20-task bounded-diff benchmark (fixed scaffold, fixed block set, machine-verifiable acceptance) would confirm or kill the core architecture cheaply. Highest-leverage single experiment available.
2. **Economics.** No cost-per-successful-build model exists; without it, "cheap models" and "£10–20k/service" cannot be connected to a viable margin.
3. **Security threat model.** Sandbox vendor comparison is scoped (OSS-3) but nobody owns: prompt injection via retrieved corpus content into the assembler, license-laundering via generation, secret egress from build sandboxes, or cross-tenant blast radius.
4. **Eval/benchmark harness.** Multiple lanes reference a "golden prompt set" and "20-session benchmark"; none exists. All future capability claims will be unverifiable until it does.
5. **Demand→candidate join.** Verticals produced 12 atoms; corpus produced 114 held candidates; no artifact maps atoms to the blocks that would implement them. This join *is* the product thesis and is currently nobody's output.
6. **Migration/backfill/data-evolution** research beyond "non-destructive for the pilot" — thin everywhere.

**Overlooked or under-integrated assets:**

7. **siso-ui-base** is a running instance of the exact loop being designed (harvest → gate → judge → bless), with the licensing stance already solved ("approaches, never markup"). No lane has reconciled its pipeline, taxonomy, or 33-repo manifest with the corpus lane's admission design. Risk: the programme re-derives what already runs on this laptop.
8. **Great Library `work.schema.json`** is staged as the provenance schema donor and its estate inventory already marks siso-ui-base `extract/high` — cited in the sweep, absorbed nowhere.
9. **Empty sweep lanes are signal:** lane3/lane4 files for wildcard-subdomain deploy, static-site deploy API, monorepo extraction, AST codemods, and lovable-alternative are 0–3 bytes. Those queries failing is coverage information the corpus lane hasn't acted on (re-query or mark as genuine OSS whitespace).
10. **The Mini corpus** remains the largest claimed asset and is unreachable (WARP route dead, Tailscale switch needs Shaan). Until inventoried, all "850k/80k" language should stay quarantined from client-facing material — it currently is, correctly.
11. **New local assets surfaced by the finance lane** (not in the laptop sweep): SISOCRM gap-radar finance matrix (27 candidates, 2026-07-30), AutoSaaS finance process run (13 finance atoms, explicitly `build allowed false`), SISOCRM Stripe payment-event schema (idempotency/duplicate-guard precedent), Dispo Loyverse receipt adapter + tenant-aware Drizzle schema (no-credential contract-test pattern). These are real code-boundary precedents the block-contract merge (UNIFY-CONTRACT) should cite. It also confirms other verticals likely have similar unswept local assets.
12. **AGPL/GPL legal interpretation is now load-bearing:** the top finance references (OpenBooks, Accounted, LineLedger, BigCapital, InvoiceShelf, Lago) are all AGPL/GPL or source-available. The programme's permissive-harvest default means the *best control-contract evidence* sits behind licenses that forbid the default reuse mode. A bounded counsel-grade review of AGPL network/embedding boundaries (and Accounted's extension exception) is now a named gap, not a footnote.
13. **Standards not yet consulted:** SPDX 3.0 profiles for AI/dataset provenance (relevant to generated-code attribution), OpenSSF Scorecard as a cheap candidate-health gate, and the W3C DTCG resolver work — each a small bounded read that could slot directly into existing gates.

**Contradiction watch:** the two commercial matrices (ecosystem-report vs ecosystem-sweep) overlap on Lovable/Bolt/v0/Replit/Base44 with mostly consistent but differently-scoped claims (e.g. sweep says Lovable "cannot import existing GitHub repos" — not in the first report; report has API/pricing detail the sweep lacks). They need a merge pass with per-claim source dates before either is quoted downstream.

---

## 6. Research backlog (bounded, prioritized — no implementation authorized)

| P | Track | Bounded question | Owner suggestion | Exit artifact |
|---|---|---|---|---|
| P0 | **MODEL-EVAL** | Can a MiniMax-class model produce acceptable bounded diffs against a pinned scaffold? 20 tasks, machine-graded | New lane (nothing owns it) | Pass/fail matrix + repair-round distribution |
| P0 | **LICENSE-EXEC** | Install ScanCode; run on one fixture tree + Horizon pinned checkout | AM-CORPUS (its own next gate) | Machine-readable license/SBOM receipt |
| P0 | **ACTIONIST-CONTRACT** | Obtain API/auth/data/deploy/approval facts from Cena (call agenda item, not research); finance lane adds: client legal entity, jurisdiction/tax regime, chart of accounts, approval delegation | Shaan | First-party contract notes; unblocks 5 lanes |
| P1 | **UNIFY-CONTRACT** | Merge Block Contract v0 + REUSABLE-BLOCKS dossier into v1 | Design task, REUSABLE-BLOCKS | v1 schema + changelog |
| P1 | **SISO-UI-BASE-RECON** | Reconcile siso-ui-base pipeline/taxonomy/manifest with corpus admission design | AM-CORPUS | Delta report: reuse / adapt / ignore per subsystem |
| P1 | **ATOM-BLOCK-JOIN** | Map 12 vertical atoms → held candidates that could implement each | AM-VERTICALS + AM-CORPUS | Join table with gaps named |
| P1 | **OSS-3 EXEC-PLANE** | Sandbox isolation/cost/state matrix (E2B/Modal/Daytona/WebContainers) | ECOSYSTEM-COMMERCIAL | Comparison + non-production smoke plan |
| P2 | **ECON-MODEL** | Cost-per-successful-build model under 3 token-price scenarios | New | Spreadsheet-grade model with stated unknowns |
| P2 | **THREAT-MODEL** | Injection/egress/tenant/licence-laundering threat model for the pipeline | New | STRIDE-style doc feeding admission gates |
| P2 | **OSS-6 OPERATION** | Typed action/approval/idempotency/recovery comparison for browser operation | AM-PLATFORMS | Capability table; no "automation = moat" shortcut |
| P2 | **MATRIX-MERGE** | Reconcile the two commercial matrices with per-claim dates | ECOSYSTEM-COMMERCIAL | Single canonical matrix |
| P3 | **MINI-INVENTORY** | Corpus DB inventory once the Mini route is restored | Blocked on Shaan/hardware | Verified scale + schema notes |
| P3 | **EVAL-HARNESS** | Golden prompt set + requirement-coverage scoring design | New | Benchmark spec (feeds MODEL-EVAL and voice/guide question) |
| P3 | **STANDARDS-READ** | SPDX 3.0 AI profile, OpenSSF Scorecard, DTCG resolver | Any | 1-page applicability notes |
| P2 | **LICENSE-LEGAL** | AGPL/GPL network+embedding boundary and Accounted extension exception, counsel-grade | Shaan → counsel | Written reuse-mode ruling per license class |
| P2 | **VERTICAL-DEEPDIVE-OPS/CRM** | Repeat the finance-lane method (local inventory → bounded primary-source sweep → control contract → smallest-pilot shape) for operations and CRM/lead archetypes | REUSABLE-BLOCKS pattern, new dispatches | Per-vertical lane reports matching finance-ops-research.md |

**Gate to a build decision** (restating the settled rule): one named candidate through the complete evidence ladder with human admission, plus P0 tracks closed. MODEL-EVAL is deliberately first — if cheap models fail the bounded-diff test, the architecture changes *before* any conversion work is sunk.

---

## 7. Standing posture

- The programme's discipline is genuinely good: every lane separates claims from receipts, and the zero-admitted-blocks count is honest, not a failure.
- The single most striking programme-level fact: **hundreds of pages of well-sourced desk research, zero executed receipts of any kind** (no scan, no build, no eval, no API call). The next unit of value is almost entirely in execution-class evidence, not more reading.
- The finance-ops lane (landed after rev 1) is the first vertical deep-dive and validates the method: local inventory first, bounded primary-source sweep, control contract, explicit unknowns, smallest-pilot shape, zero admissions. It should be the template for operations and CRM/lead.
- This report will be updated after: SAAS-CATALOGUE lands its artifact, any P0 track closes, or a lane posts a checkpoint that changes a verdict above.
