# P9-L15 competitor deep dossiers

Observed 2026-08-27. Research-only first-party source analysis for PS-011–PS-020. The lane preserves source depth differences and does not pad the ontology to 144 cells. Documented claims are in `feature-claim-receipts.jsonl`; absence and unresolved boundaries remain explicit in each dossier.

| Surface | Product boundary | Strongest evidence | Key unresolved boundary |
|---|---|---|---|
| PS-011 | ToolJet low-code internal-app builder | AI context, granular access control, self-hosted AI gateway | generated artifact schema, restore, tenant/audit depth |
| PS-012 | NocoBase AI business-system builder | natural-language end-to-end build, React/Git portal, ACL/audit | economics, restore, production deployment semantics |
| PS-013 | Appsmith internal-app builder | widgets, queries, APIs, JavaScript, open-source deployment | AI workflow, collaboration, recovery, current economics |
| PS-014 | Builder.io visual CMS/design-to-code | design/component/CMS context to frontend code | runtime, backend, governance and deterministic artifacts |
| PS-015 | Visily AI design/prototype to code | React/Vue/HTML ZIP export with README and AI/static layout modes | runtime, backend, recovery, enterprise controls |
| PS-016 | Uizard AI design/prototyping | Autodesigner text generation, React/CSS handoff, quotas | runtime, backend, restore and detailed security |
| PS-017 | Locofy design-to-frontend-code | Figma URL import, Builder/Agent refinement, CLI/MCP/GitHub export | backend, bidirectional sync, recovery, economics |
| PS-018 | Modal programmable secure sandboxes | isolation, network policy, resources, snapshots | app artifact model, governance, external side effects |
| PS-019 | Daytona composable agent sandboxes | isolated container/VM/GPU runtimes, persistence, forks, volumes | human review, full audit/residency, portability |
| PS-020 | E2B AI-agent sandbox/runtime | hosted sandbox boundary, session/concurrency and usage pricing | snapshot/recovery, network/security detail, export |

## Contradictions and evidence discipline

- Reachability or a broad registry identity is not treated as feature proof; Appsmith, Builder.io and E2B retain narrow claims where the reviewed first-party pages are narrow.
- NocoBase has materially different output semantics: database-stored no-code configuration versus local React source in AI Portal.
- Locofy documents GitHub push/team workflow but also documents that generated Builder code does not sync back from GitHub.
- Modal snapshots restore state but terminate the sandbox and do not transparently restore open connections/background processes.
- Daytona persistence varies by runtime class, and linked sandboxes are explicitly ephemeral; shared volumes are not transactional.
- Visily calls exported code a development starting point; Uizard’s React/CSS handoff remains design handoff, not proof of a deployable backend.

## Scope and canonical state

No client data, vendor login, cloning/copying into the project, source execution, package installation, build, deploy, benchmark, license scan, SBOM or admission occurred. Parent remains active; `research_only=true`; `implementation=false`; execution `UNEXECUTED`; admission `NOT_ADMITTED`; admitted `0`; promotion `false`.
