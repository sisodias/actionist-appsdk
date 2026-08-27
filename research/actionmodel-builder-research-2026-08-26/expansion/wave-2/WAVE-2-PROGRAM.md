# Action Model Builder — matrix deepening wave 2

**Run:** `actionmodel-builder-research-2026-08-26`  
**Parent phase:** tranche 1 verified; long-run matrix active  
**Wave:** `matrix-wave-2-industry-dimension-deepening`  
**Mode:** research and ideation only; no product implementation, client data, repository copying, or block admission

## Purpose

Tranche 1 established the evidence machinery: 67 company/product surfaces,
500 unique GitHub records, a 17,000-slot observation ledger, 74 public-signal
URLs, a 566-line standards expansion, and a 17-industry niche join. It did not
fill the matrix. Wave 2 deepens the evidence cell-by-cell and preserves every
gap rather than compressing it into another headline.

The long-run contract remains:

```text
17 industries × 10 dimensions × 100 repository observations = 17,000 slots
```

Wave 2 floor:

```text
at least 10 observed/seeded observations per industry×dimension cell
before the wave can pass its floor audit
```

The current ledger has 750 observed slots. The wave may add more than the
minimum where a source is strong, but it may not mark an observation complete
without a repository/source receipt and a cell assignment.

## Ten matrix dimensions

1. `demand_atom_fit` — direct job/trigger/outcome relevance for the industry;
2. `workflow_behavior` — state transitions, queues, schedules, retries, and
   human handoff;
3. `data_model` — entities, schema, tenancy, freshness, permissions, and
   sensitivity;
4. `integration_surface` — API, event, connector, MCP/A2A, import/export, or
   browser boundary;
5. `ui_assembly` — routes, component registry, design tokens, accessibility,
   and visual proof;
6. `agent_authority` — actors, capabilities, approval, egress, and side
   effects;
7. `verification_eval` — tests, evals, tracing, post-condition read-back,
   determinism, and recovery evidence;
8. `provenance_rights` — license, SBOM, source digest, attribution, and
   transformation provenance;
9. `runtime_deployment` — sandbox, tenancy, secrets, rollout, portability,
   deployment, and rollback;
10. `economics_maintenance` — cost units, budgets, support burden, freshness,
    vendor continuity, and exit.

## Shared evidence contract

Every new row must contain:

- stable `slot_id`, `industry_id`, `dimension_id`, and `observation_index`;
- repository or first-party source identity and exact URL/path;
- observed date and evidence class `E`, `D`, `I`, or `U`;
- inspected surface or source section, not only a search snippet;
- capability/atom relation and limitation;
- `observed`, `blocked`, `unobserved`, or `needs_direct_review` status;
- rights/admission boundary; candidate is never admission;
- source query or dossier provenance;
- a falsifier or next gate.

## Lane contracts

### RCH-GITHUB-W2 — matrix evidence ledger

1. Read the tranche ledger and identify every cell below the 10-observation
   wave floor.
2. Create a per-industry/per-dimension query plan grounded in the 17 industries,
   12 atoms, and the ten dimensions.
3. Preserve all 500 tranche rows and canonical repository IDs; never rewrite
   baseline records in place.
4. Search for domain-specific and capability-specific repositories, including
   low-star and source-available candidates, not only popular scaffolds.
5. Inspect README, top-level contents, source paths, API metadata, license, and
   recent activity for every selected observation.
6. Record an observation for the exact cell it supports; one repository may
   support several cells only with separate evidence notes.
7. Fill the three weak tranche industries first: Accounting Firms, Course
   Creators, and SaaS.
8. Fill missing `eval`, `provenance_rights`, `agent_authority`, and
   `economics_maintenance` evidence across every industry.
9. Preserve empty/rate-limited/no-license cells as explicit gaps, never as
   negative evidence.
10. Produce a ledger delta and per-cell counts; do not claim 100-per-cell
    completion in this wave.
11. Run JSONL, uniqueness, slot, count, and baseline-prefix checks.
12. Re-resolve CENA, send a short callback after the artifact is verified, and
    keep the long-run parent goal active.

**Outputs:** `outputs/github-wave-2.jsonl`, `outputs/github-wave-2-report.md`,
`outputs/repo-matrix-wave-2.jsonl`.

### RCH-COMPANIES-W2 — feature dossiers

1. Use the 67-surface census as immutable input and build a dossier index.
2. Group surfaces by product family without hiding distinct products.
3. Inspect first-party product, docs, pricing, API, export, deployment, and
   security pages for each priority surface.
4. Normalize prompt/context, data/auth, integration, UI, source ownership,
   export/import, deployment, usage, approval, audit, rollback, OEM, and exit.
5. Mark each field `E`, `D`, `I`, or `U` with date and URL.
6. Compare vendor claims with the public failure/portability packet.
7. Identify plan, region, waitlist, login, and enterprise-contract gates.
8. Record rebrands, shutdown risk, pricing drift, and continuity/exit signals.
9. Create a private/stealth/contract-only unknown register without inventing
   company facts.
10. Select the highest-reuse surfaces for later synthetic comparison.
11. Verify row counts, duplicate families, URLs, and limitation coverage.
12. Callback with the dossier artifact; no vendor account or private contract.

**Output:** `outputs/company-dossiers-wave-2.md`.

### RCH-PUBLIC-W2 — longitudinal and vertical signals

1. Preserve the 74-URL tranche packet and source identities.
2. Build a dated source ledger by industry, workflow, and signal type.
3. Sample production, failure, migration, cost, security, and rollback reports
   for the 17 industries.
4. Separate vendor claims, operator receipts, community anecdotes, and empirical
   studies.
5. Track attention, adoption, shipped outcome, maintenance, and retention as
   separate states.
6. Expand low-signal verticals without pretending that one result is demand.
7. Search private-builder/agency/internal-tool use cases and record unknowns.
8. Compare portability, API, import/export, audit, approval, and cost claims.
9. Run identity overlap, sponsorship, affiliate, stale-page, and gated-source
   checks.
10. Record falsifiers for the governed-assembly thesis.
11. Validate URL/source counts and access-limit receipts.
12. Callback with the report; no authenticated adoption or client-data claim.

**Output:** `outputs/public-signals-wave-2.md`.

### RCH-STANDARDS-W2 — applicability and evidence receipts

1. Use the 566-line standards expansion as the immutable normative baseline.
2. Map each of the ten dimensions to exact standards/spec versions and local
   Block Contract fields.
3. Separate normative requirements, implementation behavior, empirical results,
   and vendor positioning.
4. Add rights/provenance/SBOM/attestation evidence receipts.
5. Add AST/CST/codemod/retrieval and design-token/visual-proof receipts.
6. Add MCP/A2A/OAuth/policy/approval/authority contract comparisons.
7. Add eval, sandbox, egress, tenancy, deployment, rollback, and recovery
   applicability.
8. State what each standard cannot prove.
9. Add falsifiers and minimum synthetic probe designs.
10. Record version/date/source quality and access limitations.
11. Verify all links and the baseline hash.
12. Callback with the applicability matrix; no executed scan/eval/deploy claim.

**Output:** `outputs/standards-applicability-wave-2.md`.

### RCH-NICHE-W2 — catalogue-to-matrix reconciliation

1. Preserve the 17/12/66/72 catalogue counts and 12-atom schema.
2. Assign every industry×dimension cell to its demand job, trigger, outcome,
   and relevant atoms.
3. Join matrix observations to exact catalogue industries without upgrading
   broad tags to fact.
4. Identify thin, blocked, contradictory, or unserved cells.
5. Join commercial primitives, public signals, standards, and local assets to
   the same cell IDs.
6. Score urgency, repeatability, risk, evidence burden, and reuse separately.
7. Compare operations, finance, CRM/lead, support, healthcare, construction,
   education, ecommerce, and SaaS archetypes.
8. Keep demand, capability, candidate, and admitted-block states distinct.
9. Define the next synthetic read-only pilot and kill criteria per archetype.
10. Produce a machine-readable gap list for GitHub wave 2.
11. Verify all 17 industries, 10 dimensions, and 12 atoms are represented.
12. Callback with the reconciliation artifact; no implementation authorization.

**Output:** `outputs/niche-matrix-join-wave-2.md`.

## Wave completion gate

Wave 2 is complete only when:

- the five output artifacts exist and pass their own receipt checks;
- the matrix has at least 10 observed/seeded slots in every one of the 170
  industry×dimension cells, or each exception is explicitly blocked and
  documented;
- the 500-row baseline prefix is byte-identical;
- no candidate is described as admitted;
- the URL exposes the raw delta, synthesis, and per-cell gaps;
- all five callbacks are verified;
- the parent long-run goal remains active until the 100-per-cell target is
  actually audited.

