# First-principles assumption ledger

Vocabulary:

- **Observed:** supported by a direct local receipt or measured artifact.
- **Inferred:** reasoned from observations but not directly tested end to end.
- **Hypothesis:** falsifiable proposition awaiting an experiment.
- **Unknown:** insufficient evidence.
- **Rejected:** contradicted or replaced by stronger reasoning/evidence.

| ID | Assumption or claim | State | What supports or challenges it | Next falsifier |
|---|---|---|---|---|
| A01 | Clients will pay for bounded workflow outcomes faster than for generic app generation | hypothesis | Actionist solution catalogue and public demand signals | Interview/paid pilot around one workflow |
| A02 | Demand across 17 industries compresses into reusable atoms and archetypes | inferred | 12 atoms, 10 archetypes, repeated case/portal/CRM/finance patterns | Blindly classify new industries and measure fit |
| A03 | We need 17 different technical stacks | rejected | Shared archetypes and atoms | None; preserve only industry deltas |
| A04 | A repository is the reusable unit | rejected | Repositories contain multiple capabilities and assumptions | Reuse-shape analysis on representative sources |
| A05 | Every useful source should become the same block shape | rejected | SISOCRM service/transplant/module evidence | Three-shape pilot |
| A06 | Most donor applications need some branding/onboarding/settings/navigation adaptation | observed/inferred | SISOCRM and user observation; donor ownership patterns | Measure adaptation categories across 10 donors |
| A07 | Adaptation is always only 1–2% of the work | unknown | Cosmetic delta may be small; auth/data/runtime changes can be large | Record hours and changed boundaries per pilot |
| A08 | Postgres is the best default for new owned B2B transactional state | inferred | Ecosystem fit, local donor stack, SISOCRM reasoning | Workload-driven data-plane bake-off |
| A09 | Every block must internally use Postgres | rejected | Intact donors and local/ephemeral/file/search state differ | None; standardize typed data ports |
| A10 | One ORM should be part of the universal block contract | rejected | Adapter-local ORM reasoning | Bind one data port to two implementations |
| A11 | One owner per table and migration is mandatory | observed/principle | SISOCRM donor data-layer analysis | Architecture review of any proposed shared table |
| A12 | Shared cross-service views should use events/read models rather than shared-table mutation | inferred | SISOCRM separate-schema/event envelope reasoning | Implement one cross-system read model |
| A13 | The current Block Contract is the correct universal object | rejected | Phase 8 richness plus composition coupling | Thin-contract dry run |
| A14 | Capability, packaging, host binding, qualification and release should be separate records | hypothesis | First-principles ownership separation | Three-shape contract sufficiency test |
| A15 | The ISSO five-area shell is universal | unproven | AutoSaaS convention only | Compare against case/portal archetype task success |
| A16 | Generic dashboards are the best initial niche | rejected as strategic pilot | Supply is saturated; weak differentiation | Use only as tooling/control case |
| A17 | Case/workflow or portal is a stronger framework test | inferred | Demand-rich, template-thin shelf result | Scoped pilot comparison |
| A18 | The local 21st stores provide substantial UI precedent supply | observed | 8,515 joined identities; 3,506 source-bearing legacy entries | Per-item quality and duplication sample |
| A19 | Corpus size equals reusable component supply | rejected | Bundle/metadata/source differences and zero admitted blocks | Qualification funnel metrics |
| A20 | A 1.3M-repository local index exists and is currently queryable | unknown | Operator recollection; no authoritative path in current receipts | Locate owning manifest/query interface |
| A21 | The 850k/80k Mini corpus is the same asset | unknown | Phase 9 could not resolve path or identity | Operator path or machine inventory receipt |
| A22 | GitHub stars predict production adaptation quality | unproven/weak | Broad corpus work did not test source execution or adaptation | Correlate metadata with pilot effort/defects |
| A23 | 17,000 matrix observations meant 1,700 complete reusable repositories | rejected | Only 270 complete pairs at measured baseline | Maintain denominator semantics |
| A24 | The 118-surface competitor register is exhaustive | rejected | Explicit expansion candidates and missing FlutterFlow correction | Declared stopping rule and universe definition |
| A25 | The 144-feature taxonomy is stable and fully mapped to 118 surfaces | unknown | Strict census mostly unknown; 68-vs-144 taxonomy conflict | Canonical taxonomy merge plus evidence review |
| A26 | Connector catalogues can be adopted with their storage layers | rejected | OpenConnector admin token exposed global connections | Own tenant connection store |
| A27 | OpenConnector catalogue/OAuth/action mechanics are reusable | observed at spike level | 1,445 providers, 15,156 actions, auth/action/OAuth execution receipts | Host-scoped connector pilot |
| A28 | Models should compose applications directly from raw retrieval | rejected | Phase 8 plan-then-fill and compatibility reasoning | Keep deterministic elimination layer |
| A29 | A deterministic solver can materially reduce model errors and tokens | hypothesis | 26 fixtures and 10 solver checks are design evidence only | Run solver/model comparative eval |
| A30 | Cheap models can deliver the final assembly once context is constrained | hypothesis | 20-task falsifiable matrix; unexecuted | Authorized model eval with fixed fixtures |
| A31 | Fully automatic repo-to-block conversion is desirable | rejected | Shape choice and semantic adaptation require judgment | Automate evidence, preserve named decision points |
| A32 | Existing mature services should usually remain downstream services | inferred | SISOCRM engine-shaped donor reasoning | Upgrade/maintenance comparison against transplant |
| A33 | Product-defining surfaces should often be owned/transplanted | inferred | Twenty record-surface reasoning | Measure donor-upgrade friction and UX control |
| A34 | The Actionist host can absorb donor identity/settings/navigation cleanly | unknown | Local integrations show partial patterns | Host-contract pilot with one mature donor |
| A35 | Standardized settings, onboarding and branding can be adapter-driven | hypothesis | Repeated donor delta pattern | Define and implement host surface ports |
| A36 | A template is a governed composition recipe, not a copied app | inferred | B2B shelf and composition framework | Build one archetype from independent assets |
| A37 | Production learning will improve retrieval and reuse decisions | hypothesis | AutoSaaS learning loop is procedural, not measured | Persist pilot adaptation/outcome metrics and rerank |
| A38 | More breadth research currently has higher value than depth | rejected for next loop | Repeated breadth exposed same unresolved seams | Freeze broad loops until pilot evidence |
| A39 | Legal/rights should drive this quality architecture discussion | out of scope | Operator explicitly delegated legal to others | Retain evidence separately; do not optimize architecture around it |
| A40 | One representative pilot can validate the entire platform | rejected | It can test contracts, not every industry/runtime | Use staged pilots across reuse shapes |

## Assumptions that should become explicit framework invariants

1. One authoritative owner per stateful resource.
2. One explicit reuse shape per packaged capability.
3. Requirements remain implementation-independent until composition.
4. Models cannot grant themselves data, tenant or side-effect authority.
5. Unknown compatibility returns `UNDERDETERMINED`; it does not become model confidence.
6. A whole workflow must pass before an application is accepted.
7. Every release pins exact capability and binding versions.
8. Every production composition has a recovery or replacement path.
