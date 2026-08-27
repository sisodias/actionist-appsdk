# S1-L3 checkpoint 1 — prior-evidence audit

Lane: S1-L3 (P05, P06, P08). Agent: ACTIONIST-S1-L3-EXPERIENCE. Run: 2026-08-27-sprint-1-fable.
Written: 2026-08-27. Status: prior-evidence audit complete for lane core; per-part deep audits delegated to Opus subagents.

## Files actually read by the lane owner (complete)

| Path | What it contributed |
|---|---|
| `research/workstreams/2026-08-27-sprint-1/dispatch/S1-L3-experience-science.md` | Lane objective, owned outputs, callback contract |
| `research/workstreams/2026-08-27-sprint-1/SPRINT-1-PROGRAM.md` | Depth contract, boundary, packet schema, checkpoints |
| `research/workstreams/2026-08-27-sprint-1/sprint-state.json` | Run ID, opus-only subagent policy, unpromoted status |
| `AGENTS.md` | Evidence discipline, canonical paths, verification scripts |
| `CURRENT_STATE.md` | Current decisions incl. five-area shell = unproven hypothesis |
| `knowledge/README.md` | Canonicality rules, evidence-state vocabulary |
| `knowledge/00-MASTER-SYNTHESIS.md` | System thesis; reuse shapes; shell-as-archetype-asset position |
| `knowledge/02-ASSUMPTION-LEDGER.md` | A15 (five-area shell unproven), A18 (21st stores observed), A19 (corpus≠supply, rejected), A06/A07 (adaptation), A34 (host absorption unknown) |
| `knowledge/03-EVIDENCE-MAP.md` | Routed source packets for UI/shell/preference domains |
| `site/system-map/data/parts.json` (P01–P10 windows) | P05/P06/P08 owns/known/open/inputs/outputs/deps/resources |
| `research/21st-corpus-audit-2026-08-27.md` | Full deterministic-picker feasibility audit: counts, tagging truth (7,279/7,949 tagged; 670 untagged), preview health, bundle self-containment, de-theming 86.7% tokenised, WebGL/v3 exclusions, no-source finding, build order |
| `research/actionmodel-builder-research-2026-08-26/phase-8/lanes/02-local-corpus-join/outputs/local-corpus-join-report.md` | Two-store reconciliation: 7,949 bundle store, 3,508 legacy (3,506 source-bearing), 2,942 intersection, 8,515 union; rights coverage 2/11,549; terms findings; missing-path drift MG-01..MG-05; joins J-1..J-6 |

## Key prior-evidence facts the lane treats as observed (with receipts)

- Two complementary 21st stores: bundle store `siso-ui-base/registry/21st` (7,949 dirs; 7,828 with bundle + 121 without; 7,678 previews; verify-harvest.mjs PASS) and legacy source store `SISO_Knowledge/design-system/library/21st-dev` (3,508 dirs, 3,506 with real `.tsx`). Intersection 2,942 on author+slug; union 8,515.
- Tagging: 7,279/7,949 (91.6%) tagged; `stats.untagged=3998` is a stale field; provenance tiers page 3,951 / api 692 / local 2,636 (weakest).
- De-theming of compiled bundles is ~87% mechanical via the shadcn `:root` token block; WebGL (~16% of a n=25 sample) and Tailwind-v3 builds (8.3% of n=60) need exclusion/special handling; the split is mechanically detectable (eligibility gate design exists).
- Component source is NOT in the 7,949-store (demo.tsx is a 3-line wrapper; metered endpoint); source exists for 3,506 components in the legacy store. Constraint is rate, not availability.
- Rights: effectively zero machine-checkable license records (2/11,549); 21st.dev terms prohibit the harvest mechanism; SISO's own harvest rule makes both stores summarize-only today. Counsel gate required before admission — outside this lane's authority.
- P06 priors: mechanical knob set (contrast, radius, shadow, border, typography, density, chroma), Bradley–Terry/Luce relevance, forced-choice-without-none pollutes the model; taste-picker demo exists at actionist-taste.pages.dev; open question whether the minimum is 7/14/other comparisons.
- P08 priors: 10 B2B archetypes identified; case/workflow + portal demand-rich but template-thin; five-area ISSO shell is an unproven hypothesis (A15); host-absorbs-donor-navigation is unknown (A34).

## Deferred to per-part subagent audits (named files, exact paths passed to agents)

P05: `AutoSaaS/process/10-ui-component-library-requirements.md`. P06: `research/ui-pick-to-spec-2026-08-27.md`, `research/token-pack-science-2026-08-27.md`, `phase-8/external-opus-inputs/CLAUDE-LANES-SYNTHESIS.md`. P08: `phase-8/lanes/03-b2b-template-shelf/outputs/b2b-template-shelf-report.md`, `AutoSaaS/framework/autosaas-method.md`, `AutoSaaS/framework/source-graph-template-strategy.md`, `phase-2/outputs/industry-atom-specifications.md`, SISOCRM ownership/Teable briefs, ISSO dashboard evidence.

## Boundary confirmation

Research only. No cloning, execution of candidate source, build, deploy, admission or production mutation. Writes restricted to the three owned run dirs and `lanes/S1-L3/`. Existing research immutable. Subagents: Opus only.
