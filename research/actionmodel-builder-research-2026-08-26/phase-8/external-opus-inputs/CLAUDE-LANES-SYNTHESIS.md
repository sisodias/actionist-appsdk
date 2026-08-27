# Claude lane synthesis — connectors, Lovable, heavy templates, and UI preference science

Observed: 2026-08-27. This document folds the actual Herdr pane transcripts and Claude conversation JSONLs into the Action Model research pack. It is a discussion and architecture aid, not an implementation or admission claim.

## Source conversations

| Lane | Claude session | Herdr state when read | Original objective |
|---|---|---|---|
| CONNECTOR | `24428e11-4359-4bb4-816c-c70e6821db18` | idle/done | Find OSS catalogs, OAuth/credential engines, connection UI, and registries capable of reproducing Lovable's connector surface without hand-writing 100 integrations. |
| LOVABLE | `302a88d0-5321-4a9e-8619-05ca5910b6e7` | idle/done | Itemize Lovable's features, map each subsystem to the best repositories, identify unsolved gaps, and reason about the architecture and implementation language. |
| TEMPLATES | `8a8fa106-283b-440f-92c3-e0659ec8e18b` | idle/persisted | Find mature B2B SaaS templates and heavyweight open products—not cosmetic boilerplates—that can contribute real schemas, workflows, permissions, and plugin patterns. |
| UI | `625a73d0-b440-4f16-ab91-9d64e30b4d43` | working | Build a deterministic design-token/component preference system and ground the ten-click client taste elicitation loop in preference-learning science. |

Conversation files are under `~/.claude/projects/-Users-shaansisodia/<session>.jsonl`. The findings below were read from those JSONLs and corroborated against the persisted artifacts listed here.

## What each lane established

### Connectors

- OpenConnector supplies 1,445 Apache-2.0 provider definitions plus a working OAuth/credential runtime.
- A live local spike encrypted a credential at rest, made an authenticated GitHub request, and generated a Google OAuth consent URL.
- The critical missing layer is tenant isolation; OpenConnector is not itself a safe multi-tenant Actionist connector plane.
- Activepieces supplies a mature connect-account UI and connector/plugin patterns.
- Jentic contributes roughly 4,140 public-domain OpenAPI vendor specifications as a long tail.
- Nango's provider catalogue demonstrates the value of declarative connector manifests, but its current licensing prevents treating the whole runtime as a client-hosted building block.
- n8n, Airbyte, Pipedream, and several other famous products are architectural references rather than safe embedded runtime dependencies under the intended hosting model.
- Strategic conclusion: import catalogs and protocol patterns; build the Actionist tenancy, authority, secret-reference, and receipt layer. Start with API-key connectors, then add OAuth vendors deliberately.

Primary artifacts:

- `SISO/research/packs/connectors.html`
- `SISO/research/actionmodel-builder-research-2026-08-26/phase-8/external-opus-inputs/connectors/connector-research-receipt.json`
- private repository `sisodias/siso-connector-research`

### Lovable subsystem decomposition

- The census contains 110 Lovable features. For the narrower Actionist case, 19 cloud/platform responsibilities can be removed because Actionist controls the data and deployment substrate; 31 remain must-have.
- The most useful code/pattern sources were reported as `chef` for the agent loop and templates, `sandboxd` for runtime/version mechanics, `astryx` for constrained code generation/evaluation patterns, and Grist as the strongest wrap-compatible data layer in the tested matrix.
- Of the four supposed white-space gaps, public precedents were found for three: Caddy on-demand TLS, ComputeSDK-style model/runtime lifting, and Infisical plus sandbox isolation for secrets. The unsolved problem is stronger: permit an agent to build over a platform-owned Postgres database without granting authority to widen tenant access.
- TypeScript is the practical v1 language because that is where the liftable ecosystem exists. Rust is a later subsystem rewrite only after a measured SLO justifies it.
- App-Builder-Benchmark has a real deterministic kill-rule protocol but no credible production result history. Lift the protocol, not its maturity claims. Astryx offers a more substantial evaluator design precedent.
- The proposed first implementation gate is a two-tenant synthetic data fixture with a deterministic runner and a `cross_tenant_leakage => NO_SHIP` rule. Implementation remains unauthorized in the research state.

Primary artifacts:

- `SISO/design/feature-matrix/SYNTHESIS.md`
- `SISO/design/feature-matrix/ARCHITECTURE.md`
- `SISO/design/feature-matrix/PLATFORM-WRAP-MATRIX.md`
- `SISO/design/EVAL-HARNESS-DESIGN.md`
- `SISO/research/actionmodel-builder-research-2026-08-26/phase-8/external-opus-inputs/lovable-clones/lovable-clone-census.md`

### Heavy B2B shelf and templates

- The existing 833-repository builder corpus contains very few heavyweight B2B products because its vocabulary targeted builders, scaffolds, and automation—not mature operating software.
- The important architecture shelf is product-class software: Twenty, NocoBase, Cal.com, ERPNext, Chatwoot, Documenso/DocuSeal, Formbricks, Polar, Ever Gauzy, InvenTree, Plane, AppFlowy/AFFiNE, NocoDB/Teable/Baserow/Mathesar, ToolJet/Budibase, PostHog, and related products.
- Twenty demonstrates metadata-defined objects and fields.
- NocoBase demonstrates plugin-composed business applications.
- Cal.com demonstrates a package/app split plus an installable integration registry.
- NocoDB, Teable, Directus, and Supabase demonstrate database introspection and generated administration surfaces.
- n8n and Activepieces demonstrate node/action registries and connector composition.
- Mature finished products are disproportionately AGPL, BSL, fair-code, or split-license. They are valuable architectural study material, but rights still decide whether code can be embedded, wrapped as a service, rewritten from patterns, or used only as reference.

Primary artifact: `SISO/research/heavy-shelf-2026-08-27.md`.

### Deterministic UI and preference learning

- UI aesthetics can be represented as a small mechanical knob vector rather than named vibes: contrast delta, radius, shadow character, border weight, typography class, density, and chroma policy.
- DTCG defines the token interchange structure; an Actionist profile must define required semantic/component/state paths, modes, aliases, and no-literal rules.
- The 21st.dev corpus is suitable for deterministic preview and selection, but the harvested bundles do not automatically provide reusable source code or rights.
- Static DOM parsing is not viable because the harvested bundles are Vite application shells. Class-name signals plus fixed-enum vision extraction is the viable metadata path.
- Client taste elicitation is a known active-preference-learning problem. `sequential-gallery` demonstrates Bayesian sequential gallery selection; `choix` implements Bradley–Terry/Luce choice models.
- Learn a preference vector in knob space, not a favorite pack ID. Packs can then grow without retraining the elicitation model.
- Four alternatives per round plus an explicit “none/re-roll” outside option produces informative comparisons while avoiding forced-choice pollution.
- The interactive prototype is public at `https://actionist-taste.pages.dev`.

Primary artifacts:

- `SISO/design/packs/CHECKPOINT-2026-08-27.md`
- `SISO/research/ui-pick-to-spec-2026-08-27.md`

## The framework implied by all four lanes

No single repository solves the Actionist problem. The coherent framework is a composition of established engineering models:

1. **Domain-driven bounded contexts** — each business block owns its data and invariants.
2. **Microkernel/plugin architecture** — a small Actionist kernel loads independently versioned blocks.
3. **Hexagonal ports and adapters** — imported repos/services connect through declared command, query, event, UI, and file ports.
4. **CQRS selectively** — typed commands for writes and stable read models/views for cross-block reads; not full event sourcing.
5. **Transactional outbox** — database changes and emitted events commit atomically.
6. **Capability-based security** — agents receive narrow command capabilities, never ambient database authority.
7. **Metadata-driven UI/data descriptions** — objects, fields, relations, actions, views, and component slots are structured data where useful.
8. **Schema registry and compatibility gates** — every block declares versions, migrations, dependencies, receipts, rollback, rights, and host compatibility.

This combination should be named the **Actionist Block Runtime**. PostgreSQL is the shared data plane; the Block Contract is the interoperability layer.

## Three integration modes

Do not force every repository into one database model.

### Native block

The capability is adapted into the shared Postgres runtime. It owns a namespaced schema and exposes typed ports. Best for cleanly separable domain logic and rights-compatible code.

### Wrapped service block

The external product retains its own runtime/database. An anti-corruption adapter exposes Actionist commands, events, and read projections. Best for heavyweight applications whose internals should not be merged into the shared schema.

### UI/pattern block

Only a UI surface, interaction pattern, schema idea, or generated specification is reused. It has no database ownership. Best for local UI components, design packs, and study-only products.

`packaging_mode` must preserve this distinction: `native_block`, `wrapped_service`, `generated_from_pattern`, `ui_only`, or `reference_only`.

## Shared Postgres substrate

The kernel owns only universal primitives:

- tenants, users, actors, memberships, roles, and capabilities;
- block definitions, installations, versions, and migrations;
- commands, events, jobs, receipts, audit records, and idempotency keys;
- files, secret references, external accounts, and connector installations.

Each native business block owns a Postgres schema such as `crm`, `finance`, or `support`. Every tenant-owned row carries `tenant_id`; row-level security is installed from deterministic policy templates and cannot be broadened by the composing agent.

Blocks communicate through:

- **command ports** for requested state changes;
- **event ports** for facts that already happened;
- **query ports** for stable read models;
- **UI ports** for pages, panels, forms, and component slots;
- **file/secret ports** for controlled external resources.

Cross-block direct writes are prohibited. Cross-block reads use declared views/projections. This prevents the “shared database” from degenerating into shared mutable internals.

## Composition flow

1. Elicit the client's industry, jobs, data ownership, and aesthetic preferences.
2. Convert requirements into capability atoms.
3. Resolve admitted blocks and wrapped services that provide those atoms.
4. Produce a deterministic dependency/port graph.
5. Validate schema compatibility, tenant authority, rights, cost, migrations, and rollback without a model.
6. Let an agent fill configuration and bounded code gaps.
7. Run functional and two-tenant isolation fixtures.
8. Apply zero-tolerance kill rules such as cross-tenant leakage.
9. Admit the composed app only with complete receipts.

The decisive moat is not code generation. It is safely composing existing capability into a shared client system while the agent lacks authority to violate tenant, data, rights, cost, and rollback constraints.

## Open questions for discussion

- Whether Actionist should begin with its own minimal kernel or adapt NocoBase/Grist as the initial host.
- How Sina's intended schema and hosting model constrain the shared Postgres contract; the inspected repo did not yet prove this.
- Which blocks must be native versus wrapped services.
- The exact Block Contract schema for data ownership, command authority, event compatibility, and migrations.
- Whether the first implementation should be the two-tenant eval harness before any real block conversion.

Boundary: research synthesis only. No implementation, source admission, or rights clearance is asserted.
