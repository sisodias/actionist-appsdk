# S1-L2 Checkpoint 1 — prior-evidence audit

Lane: ACTIONIST-S1-L2-SUPPLY · Run: 2026-08-27-sprint-1-fable · Part: P03 only
Observed: 2026-08-27 · Status: checkpoint after prior-evidence audit

## What was actually read (complete files unless noted)

| Source | Path | Key extraction |
|---|---|---|
| Sprint program | research/workstreams/2026-08-27-sprint-1/SPRINT-1-PROGRAM.md | Depth/boundary/schema/checkpoint contracts |
| Dispatch | research/workstreams/2026-08-27-sprint-1/dispatch/S1-L2-capability-supply.md | P03 scope, provenance-lane rule, CENA callback (coordinator override 2026-08-27) |
| Master synthesis | knowledge/00-MASTER-SYNTHESIS.md | 8 reuse shapes; repo ≠ reusable unit; thin-contract family |
| Assumption ledger | knowledge/02-ASSUMPTION-LEDGER.md | A04/A05/A19/A22/A23 directly constrain P03 |
| Evidence map | knowledge/03-EVIDENCE-MAP.md | Route table used; no recursive ingest |
| P03 part record | site/system-map/data/parts.json (P03 object) | Owns top-100 shelf, capability descriptions, quality/adaptation scoring, reuse shapes |
| 500-candidate priority | phase-3/outputs/github-candidate-priority.md | 500 unique candidates, bands A/B/C = 117/195/188; score ranks inspection value only |
| GitHub expansion | expansion/outputs/github-expansion-report.md | 500 rows = 284 baseline + 216 new; 9 capability families; disposition candidate=231/hold=237/reference=21/reject=10/unknown=1; license states incl. 137 no_declared_license |
| Matrix ledger | expansion/outputs/repo-matrix-observations.jsonl (wc + sample) | 17,000 slots = 750 observed + 16,250 unobserved; NOT 1,700 complete pairs (270 complete per Phase-7/9) |
| Local corpus join | phase-8/lanes/02-local-corpus-join/outputs/local-corpus-join-report.md | 8,515 UI union; 3,506 source-bearing legacy; 2,942 intersection; rights 2/11,549 license fields; both 21st stores summarize-only under harvest rule 6; Mini 850k/80k UNRESOLVED |
| Corpus→block join | phase-9/lanes/03-local-corpus-block-join/outputs/local-corpus-block-join.md | Strict gates all 0; 70 template seeds; 17 shelf rows preserved as denominators |
| B2B template shelf | phase-8/lanes/03-b2b-template-shelf/outputs/b2b-template-shelf-report.md | 10 archetypes; 34 industry-archetype variants; 17 pinned rows (4 candidate/8 reference/5 hold); 29% license-assumption failure on direct query; case_workflow+portal = demand-rich, supply-thin |
| Niche→atom→block join | expansion/outputs/niche-atom-block-join.md (lines 1-120) | 17/12/66/72 catalogue; 12 atoms; per-industry atom mapping table |
| Connector summary | phase-8/external-opus-inputs/connectors/connector-research-summary.md | OpenConnector 1,445 providers/15,156 actions (1,302 API-key vs 103 OAuth2); Activepieces 761 pieces; Nango 982 providers (895 declarative/87 scripted); tenancy falsifier |
| Sprint state | research/workstreams/2026-08-27-sprint-1/sprint-state.json | Lane registry, opus-only subagent policy |

## Binding constraints carried forward

1. Repositories are source containers; every shelf entry needs capability decomposition + reuse-shape recommendation (A04/A05).
2. Stars/metadata ≠ quality; license badge ≠ rights (29% failure rate observed in Phase-8 direct re-query; ELv2/AGPL traps documented in project CLAUDE.md).
3. 17,000 matrix observations ≠ 1,700 complete pairs; quote 270 complete pairs at baseline.
4. User-provided SaaS/repo lists = distinct provenance lane, never silently merged.
5. 1.3M / 850k-80k corpora: investigate authoritative local interface; do not invent access (A20/A21).
6. Boundary: no clone, build, execute, benchmark, admission. GitHub metadata/README/LICENSE reads via API are in-bounds (precedented in expansion lane).
7. Subagents: Opus only.
8. Final callback → Herdr agent CENA (coordinator override supersedes dispatch §"send to S1-L3"); persist callback-pending.md if unavailable; no sprint-completion claim.

## Gaps the prior evidence does NOT cover (drives this run's new work)

- No capability-level decomposition of any top candidate (what's inside Twenty/Cal.com/Chatwoot etc. as separable capabilities).
- No overlap graph between candidates (which repos ship the same capability).
- No commercial denominator scoped to *capability supply* (embeddable/headless vendors, component ecosystems) — the 118-surface census is builder-competitor scoped, different question.
- No quality-first ranking: prior 0-100 score ranks "inspection value" from metadata, explicitly not quality/adaptation value.
- 500-corpus is skewed by its query lanes (eval/provenance/browser tooling heavy; thin on portal/case-workflow app supply) — the A-band top-25 contains mostly non-app-capability repos. The shelf must NOT inherit this ranking.
