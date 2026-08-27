# Action Model Builder Research Program

**Run:** `actionmodel-builder-research-2026-08-26`  
**Mode:** research and ideation only — no product implementation authorized  
**Horizon:** two-day long-running research goal  
**Coordinator:** parent Codex lane  
**Workspace:** dedicated Herdr team workspace in named `herdr-2` session

## Objective

Build the evidence base for a framework that standardizes and composes code from
GitHub and the wider internet into governed, niche-aware client software.

The program must investigate:

- 20–50 commercial/private companies building prompt-to-app, agent-builder,
  computer-use, workflow, internal-tool, design-to-code, or code-composition
  products.
- 200–500 relevant GitHub repositories actually inspected and classified, not
  merely listed.
- Public discussion and adoption signals across GitHub, Reddit, X/Twitter,
  YouTube, official docs, blogs, papers, standards, and public communities.
- Frameworks and standards for provenance, licensing, AST transformation,
  design tokens, registries, SBOM/supply-chain, agent actions, evals,
  deployment/rollback, and evidence-backed composition.
- A first-principles decomposition of the problem down to atomic capabilities,
  contracts, risks, economics, and decision gates.

## Non-goals

- No application implementation.
- No dependency admission or repo copying without a separate evidence gate.
- No claim that a company capability is live unless the source and observation
  date support it.
- No use of unverified corpus-size claims as client-facing facts.
- No silent flattening of source reports into a leaderboard.

## Required program outputs

1. `outputs/company-landscape.md` — canonical 20–50 company matrix with source
   links, capability taxonomy, evidence level, maturity, pricing/positioning
   where observable, and open questions.
2. `outputs/github-corpus.jsonl` — 200–500 inspected repo records. Every record
   needs: repo URL, owner/name, observed date, source query/lane, license state,
   activity/health notes, capability tags, relevance to a vertical/atom,
   disposition (`candidate`, `reference`, `hold`, `reject`, `unknown`), and
   reason/evidence pointers.
3. `outputs/github-corpus-report.md` — corpus methods, cluster counts, review
   quality, top candidates, false positives, and coverage gaps.
4. `outputs/public-signals.md` — Reddit/X/YouTube/web findings with direct URLs,
   dates, claim/evidence separation, adoption/friction patterns, and source
   limitations.
5. `outputs/standards-and-science.md` — standards/framework/paper map with
   applicability to the Actionist block contract.
6. `outputs/first-principles-framework.md` — atomic problem tree, system
   contracts, capability graph, research-to-build gates, and falsifiable claims.
7. `outputs/research-synthesis.md` — coordinator-ready synthesis that merges
   the other packets without erasing their source boundaries.
8. `outputs/status.json` — machine-readable run status, counts, blockers, and
   last completed task per lane.

## Evidence classes

- `E`: directly inspected primary source or repository artifact.
- `D`: documented first-party claim, not independently authenticated.
- `I`: inference from multiple evidence points.
- `U`: unknown or unverified.

Every meaningful claim needs an evidence class, source URL/path, observed date,
and confidence. “Reviewed” means the worker opened the source and recorded a
content-backed disposition; search snippets do not count.

## Lane ownership

| Lane | Scope | Primary output | No-overlap boundary |
|---|---|---|---|
| `RCH-COMPANIES` | Commercial/private builder and agent-company landscape | `company-landscape.md` | Does not own repo-level classification or first-principles synthesis |
| `RCH-GITHUB` | 200–500 repo inspection and capability clusters | `github-corpus.jsonl`, `github-corpus-report.md` | Does not make product-market conclusions or copy code |
| `RCH-STANDARDS` | Standards, papers, protocols, frameworks, science | `standards-and-science.md` | Does not own vendor matrix or repo dispositions |
| `RCH-SOCIAL` | Reddit, X, YouTube, blogs, public adoption/friction signals | `public-signals.md` | Does not treat sentiment as capability proof |
| `RCH-FIRST-PRINCIPLES` | Atomic decomposition, standardization framework, gates, economics/questions | `first-principles-framework.md` | Reads other outputs as evidence but does not rewrite their source records |

## Twelve task slots per lane

Each lane must maintain a visible queue of twelve bounded tasks, ping at the
urgent-half boundary, and write a report before going idle. Tasks may be
reordered only with a note in the lane report.

### RCH-COMPANIES

1. Normalize the company taxonomy.
2. Map prompt-to-app builders.
3. Map agent-plus-runtime builders.
4. Map internal-tool/data-native builders.
5. Map design-to-code/image-to-app builders.
6. Map browser/computer-use platforms.
7. Map workflow/agent orchestration platforms.
8. Map code-native AI companies and IDE agents.
9. Inspect 20–50 first-party dossiers and product surfaces.
10. Record pricing, export, API, white-label, deployment, and marketplace claims.
11. Run an adversarial comparison: what is documented versus inferred.
12. Produce the canonical company matrix and next research queue.

### RCH-GITHUB

1. Define repo search taxonomy and deduplication rules.
2. Search app builders and Lovable alternatives.
3. Search scaffolds, admin panels, CRUD, and SaaS starters.
4. Search registries, design systems, tokens, and component extraction.
5. Search AST/codemod/transformation tooling.
6. Search database/schema/API introspection and adapters.
7. Search sandboxes, previews, deploy, tenancy, and rollback.
8. Search browser/computer-use and workflow execution.
9. Search eval, provenance, license, SBOM, and supply-chain tooling.
10. Inspect and classify 200–500 repos with content-backed records.
11. Build vertical-atom → candidate joins and identify whitespace.
12. Produce corpus report, top candidates, holds, rejects, and coverage gaps.

### RCH-STANDARDS

1. Define the standardization problem in protocol terms.
2. Review SPDX/ license and attribution standards.
3. Review SBOM, SLSA, in-toto, Scorecard, and supply-chain standards.
4. Review AST, codemod, schema, and contract standards.
5. Review DTCG/design-token/registry standards.
6. Review OpenAPI, JSON Schema, Pact, MCP, and tool contracts.
7. Review agent action, approval, audit, and provenance patterns.
8. Review eval/benchmark/trace/reproducibility science.
9. Review deployment, sandbox, tenancy, and rollback patterns.
10. Review primary research on code retrieval, synthesis, and GUI agents.
11. Map standards to the proposed Block Contract and evidence gates.
12. Produce a standards applicability matrix and unresolved gaps.

### RCH-SOCIAL

1. Define source reliability and sampling rules.
2. Search Reddit for builder adoption, failures, pricing, and workflows.
3. Search X/Twitter for launches, complaints, demos, and developer practice.
4. Search YouTube for long-form walkthroughs and real build behavior.
5. Search blogs, newsletters, forums, and public communities.
6. Collect direct user friction and failure stories.
7. Collect evidence of actual shipped outcomes, not demos.
8. Compare community narratives with first-party company claims.
9. Track recurring requests: imports, GitHub reuse, export, APIs, rollback,
   collaboration, deployment, and cost.
10. Identify private-builder demand signals by niche.
11. Run an adversarial pass for selection bias, astroturfing, and stale claims.
12. Produce a cited public-signals report and research gaps.

### RCH-FIRST-PRINCIPLES

1. Strip away product names and state the atomic user outcome.
2. Decompose identity, transformation, composition, grounding, verification,
   authority, operation, and economics.
3. Define the standardized code/block unit.
4. Define source, host, data, UI, action, and evidence contracts.
5. Define a capability graph from client niche → atoms → blocks → workflows.
6. Define admission, quarantine, repair, release, and rollback states.
7. Define cheap-model/frontier-model responsibilities without assuming success.
8. Define retrieval timing, evidence budgets, and license-clean context.
9. Define the eval harness and falsifiable success criteria.
10. Define security, prompt-injection, secret-egress, and tenant threats.
11. Define economics and the smallest credible pilot.
12. Produce the first-principles framework and coordinator synthesis inputs.

## Callback and handoff

Every lane must write its full report to its assigned output path first, then
actively ping the coordinator through the Herdr callback protocol. A pane going
idle without an artifact and callback is not completion. Every final packet must
include: completed task slots, counts, evidence quality, top findings, blockers,
next actions, and commands/sources used.

## Completion gate

The two-day research goal is not complete until all five lane reports exist,
the GitHub corpus is within the inspected target range or has an explicit
external blocker, the company matrix has 20–50 entries or a documented coverage
reason, standards and first-principles reports are present, and a synthesis
identifies what is safe to claim versus what still requires direct proof.
