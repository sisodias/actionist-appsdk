# S1-L4 checkpoint 1 — prior-evidence audit

Agent: ACTIONIST-S1-L4-HOST (Fable 5[1m]) · Date: 2026-08-27 · Parts: P09, P10, P11 only

## What was actually read (complete files unless noted)

Program/context: dispatch S1-L4, SPRINT-1-PROGRAM.md, AGENTS.md, CURRENT_STATE.md,
knowledge/README.md, 00-MASTER-SYNTHESIS.md, 01-DOMAIN-MAP.md, 02-ASSUMPTION-LEDGER.md,
03-EVIDENCE-MAP.md, 04-OPEN-QUESTIONS.md, 05-EXPERIMENT-ROADMAP.md,
site/system-map/data/parts.json (all 15 part records incl. owned P09/P10/P11),
sprint-state.json.

P09 evidence: SISOCRM OWNERSHIP-AND-DATA-LAYER-DECISIONS.md (full),
TEABLE-ABSORPTION-BRIEF.md (full), reusable-block-framework-report.md (lines 1-200:
landscape, block dossier shape, Postgres boundary primitives),
architecture/feature-matrix/ARCHITECTURE.md (lines 1-250: subsystem table, data
contract, state machine).

P10 evidence: Teable absorption brief (host-session seam, one-owner-per-table),
lovable-teardown-2026-08-26.md (full, incl. 27 Aug connector correction),
ARCHITECTURE.md host/tenant rows.

P11 evidence: connector-research-summary.md (full), openconnector-spike-2026-08-27.md
(full), connectors-licensing-2026-08-27.md (full, 637 lines — licensing map, auth-mix
counts, adversarial verification, second sweep incl. jentic CC0 4,140 vendors, EE
boundary reading, patterns-worth-stealing).

## Key carried-forward facts (receipts, not synthesis)

- One owner per table and migration (A11, observed/principle, SISOCRM).
- One Postgres server / separate schemas per donor chosen over shared-schema and
  per-donor servers; cross-schema joins traded for event-fed read models (SISOCRM).
- Postgres default for new owned transactional data is inferred, not universal (A08/A09).
- OpenConnector: 1,445 providers / 15,156 actions generated locally; encryption real
  (AES-256-GCM) but silently degrades to plaintext without env key; connections table
  has NO tenant column; one OAuth app per service globally; salt hardcoded; 3 env vars
  needed. Adopt catalog+OAuth engine, never the store.
- Auth-mix: API-key dominates every catalog (OC 1,302/1,445; AP 374+ of 761;
  Nango 323 API_KEY). OAuth subsets: OC 103, AP 96 (API count), Nango 425.
- ELv2 (Nango, Airbyte) bars hosted use; Composio MIT covers SDK only; dify bars
  multi-tenant; jentic-public-apis CC0-1.0 with 4,140 vendor OpenAPI specs.
- Activepieces MIT except ee/**: connect-dialog UI on our stack; OAuth runtime files
  import across EE boundary → reimplement ~200 lines, don't vendor.
- Host absorption deltas (master synthesis): branding, onboarding, identity injection,
  settings relocation, navigation reconciliation, tenant data binding, CSS scoping,
  route narrowing, migration/service ownership. Cosmetic vs boundary adaptation is the
  load-bearing distinction (A06/A07).
- A34 (host can absorb donor identity/settings/navigation cleanly) is UNKNOWN — this
  lane's central P10 question.
- Loop 2 (data bake-off) and Loop 3 (host absorption pilot) in 05-EXPERIMENT-ROADMAP
  are the experiment shells my decision tables must feed.

## Boundaries confirmed

Research only; no cloning/execution; owned writes limited to my three run dirs and
S1-L4 lane files; historical research immutable; subagents Opus-only.

## Next

Checkpoint 2: commercial survey (~100 surfaces across the three parts, domain-split);
then OSS/local-estate survey; then first-principles synthesis + smoke.
