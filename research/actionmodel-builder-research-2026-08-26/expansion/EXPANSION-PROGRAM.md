# Action Model Builder Research — phase 2 expansion

**Run:** `actionmodel-builder-research-2026-08-26`  
**Phase:** `expansion-2026-08-26`  
**Mode:** research/ideation only; no product implementation or client-data use  
**Baseline:** the first pass is immutable at `../outputs/` and is evidence, not completion.

## Why this phase exists

The first pass met the bounded minimums, but it was too easy to mistake a good
first corpus for “everything.” This phase expands toward the upper bounds and
fills the missing join between client niches, solution atoms, and reusable code.

## Expansion targets

The 500-repository figure below is the first expansion tranche, not the
terminal definition of “everything.” The original brief sets a larger matrix:
17 catalogue industries × 10 capability dimensions × 100 repository
observations per dimension/industry = **17,000 evidence slots**. A repository
may appear in more than one slot only when it is independently inspected for
that industry and dimension; the pack must report both unique repositories and
repo×industry×dimension observations so overlap cannot be mistaken for new
evidence. This phase establishes the machinery and fills the first tranche;
subsequent waves continue against the matrix until the run is explicitly
stopped or a documented coverage boundary is reached.

- **Companies:** expand the canonical census to at least 50 distinct
  commercial, private, enterprise, open-core, and stealth-adjacent product
  surfaces in the first tranche, then keep a dated unknown/gap register and
  continue category sweeps rather than treating 50 as a universe ceiling.
- **GitHub first tranche:** expand toward 500 total content-inspected unique
  repositories, with explicit per-industry and capability coverage. The 284
  baseline rows are retained and deduped, not silently replaced.
- **GitHub long-run matrix:** maintain a machine-readable observation ledger
  for the 17,000 repo×industry×dimension slots. Each observation needs the
  repository identity, industry, dimension, inspected paths, evidence class,
  rights/licence status, and disposition. Empty or blocked slots are recorded
  as gaps, never silently omitted.
- **Public evidence:** broaden and de-duplicate Reddit, X, YouTube, blogs,
  Hacker News, Indie Hackers, product documentation, pricing, migration, and
  failure signals with source quality and access limitations.
- **Standards/science:** close applicability gaps and distinguish normative
  standards, implementation frameworks, empirical papers, and vendor claims.
- **Niche→block join:** map the full vertical catalogue and priority workflows
  to solution atoms, required capabilities, candidate repositories/primitives,
  evidence status, and whitespace.
- **Presentation:** preserve raw packets and update the local/public-safe room
  so the expanded evidence is discoverable from one URL.

## Evidence rules

Every load-bearing claim must retain a URL or local path, observation date,
evidence class (`E`, `D`, `I`, `U`), confidence, and limitation. Search snippets,
stars, marketing claims, and agent status are discovery signals only. A GitHub
candidate is not a block until source, rights, contract, build, proof, owner, and
recovery evidence exist.

## Lane ownership and outputs

| Lane | Scope | Output |
|---|---|---|
| `RCH-COMPANIES-EXP` | Expand and adversarially reconcile the commercial/private platform census | `outputs/company-census-expansion.md` |
| `RCH-GITHUB-EXP` | Add per-industry/capability repository coverage toward 500 total and establish the long-run slot ledger | `outputs/github-expansion.jsonl`, `outputs/github-expansion-report.md`, `outputs/repo-matrix-observations.jsonl` |
| `RCH-PUBLIC-EXP` | Expand public adoption, failure, pricing, portability, and handoff signals | `outputs/public-signals-expansion.md` |
| `RCH-STANDARDS-EXP` | Extend the standards/science applicability and evidence-bundle map | `outputs/standards-expansion.md` |
| `RCH-NICHE-BLOCK-JOIN` | Build the demand→atom→capability→candidate join and pilot whitespace map | `outputs/niche-atom-block-join.md` |

## Long-run matrix contract

The first expansion wave owns the first 500-repository tranche and the
machine-readable schema. Later waves must extend, not overwrite, the same
ledger. The ten dimensions are:

1. builder/scaffold generation;
2. UI/component registry and design-token translation;
3. AST/CST parsing, codemod, and semantic transformation;
4. data/backend/schema/authentication primitives;
5. browser/computer-use and workflow execution;
6. sandbox, tenancy, egress, and runtime isolation;
7. evaluation, tracing, observability, and recovery;
8. provenance, licensing, SBOM, and supply-chain evidence;
9. deployment, portability, import/export, and rollback;
10. vertical workflow primitives for the selected industry.

The matrix is a research target, not permission to claim that 17,000 slots are
complete. The coordinator may only mark a slot verified after its source and
inspection receipt are present. The web room must expose the raw ledger and
the per-industry/per-dimension gap counts, not only a condensed narrative.

## Twelve task slots per lane

### RCH-COMPANIES-EXP

1. Audit gaps in the 31-row baseline taxonomy.  
2. Enumerate missing product categories and naming variants.  
3. Search first-party sources for new commercial/private builders.  
4. Cover hosted, self-hosted, enterprise, open-core, design-to-code, agent,
   browser, workflow, and execution surfaces.  
5. Consolidate company families without hiding distinct products.  
6. Record current pricing/usage/API/export/import/deployment/white-label claims.  
7. Record authority, recovery, tenancy, and portability evidence separately.  
8. Adversarially compare vendor claims with limitations and public counter-signals.  
9. Refresh fast-moving rows and mark stale/gated pages.  
10. Identify private/behind-login/contract-only unknowns without inventing them.  
11. Produce a new canonical census with 50+ total rows or a documented coverage
    boundary if the source universe saturates first.  
12. Verify links, counts, dedupe, task ledger, and callback.

### RCH-GITHUB-EXP

1. Build a query matrix from all 17 industries, 12 teams, 66 use-case cards,
   12 atoms, and the capability taxonomy.  
2. Add vertical-specific queries for finance, operations, CRM/lead, support,
   healthcare, construction, education, ecommerce, accounting, HR, and other
   catalogue areas.  
3. Run authenticated GitHub searches with visible retries and rate-limit logs.  
4. Preserve the 284 baseline records and dedupe by canonical owner/name.  
5. Inspect README, repository API metadata, top-level contents, source paths,
   license declarations, and activity for every new selected record.  
6. Maintain per-industry and per-capability quotas rather than star-only ranking.  
7. Separate direct candidates, references, holds, rejects, and unknowns.  
8. Tag extraction, registry, AST, data, browser, sandbox, eval, provenance, and
   vertical relevance signals.  
9. Record no-license, copyleft, source-available, and mixed-asset uncertainty.  
10. Reconcile candidate coverage with the niche→block join lane.  
11. Expand toward 500 total unique content-inspected records and report any
    remaining whitespace honestly.  
12. Validate every JSONL line, uniqueness, lane/vertical coverage, report counts,
    and callback.

### RCH-PUBLIC-EXP

1. Expand the source inventory and sampling frame beyond the first packet.  
2. Search Reddit for launches, failures, credit burn, migrations, lock-in,
   security, and niche workflows.  
3. Search X with direct/search-indexed access labels and author/vendor context.  
4. Search YouTube walkthroughs, transcripts, comments, and production handoffs.  
5. Search Hacker News, Indie Hackers, technical forums, and newsletters.  
6. Search blogs and independent comparisons, preserving affiliate/sponsorship
   disclosures.  
7. Cover private-builder demand, agency use, internal tools, CRM, finance,
   inventory, portals, quoting, and vertical workflows.  
8. Compare first-party claims against user-reported receipts and failures.  
9. Extend pricing, usage-meter, portability, import/export, API, rollback, and
   deployment evidence.  
10. Separate attention, adoption, shipped outcome, and retention claims.  
11. Run an adversarial bias/staleness/astroturfing and identity-overlap pass.  
12. Verify citations, record access limits, write the report, and callback.

### RCH-STANDARDS-EXP

1. Audit the first standards matrix for missing contract families.  
2. Deepen rights/provenance: SPDX, REUSE, OpenChain, SBOM, SLSA, in-toto,
   SCITT, Scorecard, and file-level attribution.  
3. Compare registries, OCI, manifests, attestations, and trust-root models.  
4. Extend AST/CST, codemod, retrieval, and semantic-transform science.  
5. Extend DTCG, design-token translation, visual proof, and component registry
   applicability.  
6. Extend OpenAPI, JSON Schema, AsyncAPI, Pact, CloudEvents, and data contracts.  
7. Extend MCP, OAuth/RAR, policy engines, authority, and approval semantics.  
8. Extend eval science for repository, GUI, tool, recovery, and repeated-pass
   reliability.  
9. Extend sandbox, tenancy, egress, deployment, rollout, and rollback science.  
10. Distinguish normative text, implementation behavior, empirical results, and
    vendor positioning.  
11. Produce a gap-to-Block-Contract applicability matrix with falsifiers.  
12. Verify source quality, version/date, links, task ledger, and callback.

### RCH-NICHE-BLOCK-JOIN

1. Reconcile the current industry/team/use-case/idea catalogue and count
   contradictions explicitly.  
2. Deep-dive all catalogue industries at the job/trigger/outcome level.  
3. Normalize the solution-atom schema: state, decision, side effect, authority,
   verification, recovery, and audit.  
4. Map every priority atom to required capabilities and contract families.  
5. Join atoms to the baseline and expansion GitHub candidate records.  
6. Join atoms to commercial/private platform primitives and public demand signals.  
7. Inventory local assets and existing SISO precedents per priority vertical.  
8. Name negative space where no candidate or primitive is adequate.  
9. Score urgency, repeatability, risk, evidence burden, and reuse across niches.  
10. Compare finance, operations, CRM/lead, support, and other leading archetypes.  
11. Define the smallest falsifiable synthetic pilot and its kill criteria.  
12. Produce the demand→atom→block join, report gaps, verify, and callback.

## Non-goals

- Do not build the Actionist product.
- Do not clone or copy repository code.
- Do not use client data or claim a private Actionist contract without first-party
  evidence.
- Do not turn “candidate” into “admitted.”
- Do not declare a literal exhaustive census of the entire internet; report the
  bounded coverage, search limits, and remaining unknowns.
