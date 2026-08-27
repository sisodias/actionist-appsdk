# Actionist Builder — master synthesis

Date: 2026-08-27  
Purpose: compress the overnight research, prior AutoSaaS work, local laptop assets and first-principles reasoning into one coherent problem statement.

## The project in one sentence

Actionist should become a semi-custom software assembly system that turns a bounded client outcome into a maintainable application by selecting, adapting and composing the best existing capabilities, then generating only the missing product-specific delta.

That is different from recreating Lovable. Lovable begins with an open prompt and tries to generate an arbitrary application. Actionist can know the client, industry, host, data boundaries, design language, deployment target and common workflows. This narrower problem permits much more reuse, more deterministic planning and less model-written code.

## The actual problem

The problem is not “find lots of GitHub repositories.” It is not “turn every repository into a block.” It is not “put everything on Postgres.” Those are possible tactics.

The underlying problem is how to transform heterogeneous software supply into repeatable client value. A client asks for an outcome such as managing leads, running projects, collecting documents, handling support, operating a portal, tracking inventory or reconciling finance. The internet contains thousands of products and millions of code artifacts related to those jobs, but they differ in architecture, quality, scope, runtime, data model, identity assumptions, UI, operational burden and adaptation cost. A useful system must know what to reuse, at what granularity, in what shape, and how to bind it to the rest of the product without creating an unmaintainable fork.

This creates nine irreducible jobs:

1. Understand the buyer, workflow and measurable outcome.
2. Express the required product independently of a chosen repository or framework.
3. Discover relevant complete systems, engines, features, components, patterns and precedents.
4. Understand what each source actually provides and where its seams are.
5. Choose the correct reuse shape: service, embedded module, transplant, package, adapter, pattern, template or custom build.
6. Standardize only the interfaces required for interoperability.
7. Compose capabilities into one coherent application across data, identity, connectors, UI and runtime.
8. Prove the capability and the complete workflow work in the intended host.
9. Learn from production so later builds use better assets and require less bespoke work.

## What the research established

### Demand is broad but compressible

The research catalogued 17 industries, 12 teams, 66 use cases, 72 business ideas and 12 recurring solution atoms. Later template work grouped demand into roughly ten B2B archetypes. This means we should not build 17 unrelated technical stacks. Industries differ in entities, vocabulary, authority, obligations and workflow details, but many share product skeletons: case/workflow management, client portals, CRM, finance operations, scheduling, inventory, support, field operations, learning/content and marketplace-like coordination.

The supply/demand result is counterintuitive. Generic dashboards, admin starters and CRM boilerplates are abundant. Case/workflow systems and client portals appear repeatedly in demand yet have thinner clean, adaptable template supply. A generic dashboard is therefore an easy demonstration but a weak test of the real thesis. A case/workflow or portal pilot tests whether the system can turn reusable atoms into differentiated value.

### Discovery supply is enormous; qualified supply is not

The main GitHub work produced a 500-candidate prioritized corpus and a 17,000-slot industry-by-dimension matrix. Phase 7 exposed a counting error in the interpretation: 17,000 observations did not mean 1,700 complete industry-repository pairs. Only 270 pairs covered all ten dimensions at the measured baseline, leaving a 1,430-pair deficit against that specific research invariant. Subsequent waves added evidence and identities, but did not magically convert metadata breadth into proven reusable systems.

The user also recalls a much larger local index of roughly 1.3 million repositories, and prior prompts referred to an 850k/80k “Mini corpus.” Current research artifacts do not establish the exact path or authoritative manifest for those claims. This matters operationally, but it does not alter the architecture: a million indexed repositories improve discovery; they do not remove the need for capability understanding, reuse-shape decisions, adaptation and system verification.

### The laptop contains real leverage

The strongest local assets are complementary:

- **AutoSaaS** already defines an outer company/product factory: opportunity intake, research, specification, source mapping, shell mapping, build waves, verification, launch and learning.
- **The Block Contract and Phase 8 work** provide a rich vocabulary for identity, packaging, ports, data, tenancy, runtime, evidence, maintenance and rollback.
- **Great Library** provides registry, lifecycle, work/release/source and evidence structures.
- **`siso-ui-base` and the legacy 21st store** provide a large UI precedent corpus and a working `brief → forge → gate → judge → bless` loop. The two stores join to 8,515 unique identities; 3,506 legacy entries are source-bearing while much of the newer 7,949-entry harvest is bundle/metadata oriented.
- **SISOCRM** is the best local proof that heterogeneous open systems can be combined. It distinguishes engines kept as services from product-defining surfaces that are owned or transplanted. Its Teable, Twenty, Plane, AFFiNE, Documenso and Activepieces work contains more operational truth than an abstract universal-block schema.
- **Connector research** measured OpenConnector, Activepieces, Nango and Jentic. OpenConnector generated 1,445 provider definitions and 15,156 actions locally, but its global connection storage failed the required tenancy model. Catalogue and OAuth mechanics can be reused without inheriting its storage ownership.
- **The platform census** assembled 118 registered product surfaces and a 144-feature taxonomy. A strict 16,992-cell census remains overwhelmingly unknown when only feature-specific first-party proof counts. Later deep-dossier waves add useful claims, but the census is still evidence-depth work rather than a complete map of every platform on earth.
- **The composition research** produced a plan-then-fill architecture, deterministic compatibility solver direction and 26 fixtures with positive, negative and zero-tolerance cases.

### Existing software rarely drops in untouched

The user's observation is correct: even high-quality applications require a normalization layer. Typical adaptation includes removing donor branding, replacing donor onboarding, injecting host identity, relocating settings into the Actionist shell, reconciling navigation, mapping terminology, binding tenant-aware data, scoping CSS/tokens, narrowing routes and deciding which migrations and background services remain donor-owned.

The “one or two percent” can be tiny in line count and still architecturally important. Replacing a logo is trivial. Replacing authentication, settings ownership or database migration authority is not. The system must distinguish cosmetic adaptation from boundary adaptation.

This is why reuse needs explicit shapes:

- **Intact service:** retain the upstream runtime and data ownership behind a protocol.
- **Embedded module or microfrontend:** mount a bounded UI/capability inside the host.
- **Transplanted subsystem:** own the product-defining code and deliberately leave upstream.
- **Extracted package:** isolate a reusable feature/component with a small dependency closure.
- **Adapter:** retain an external system and expose the host's typed interface.
- **Generated from pattern:** reproduce the proven architecture or interaction without inheriting the whole source.
- **Template/archetype:** reuse an application-level composition recipe.
- **Custom delta:** write what is truly specific to the client or niche.

A repository is therefore a source container, not the reusable unit.

## Where the inherited framework is wrong or incomplete

### The Block Contract is too large

The current contract attempts to describe capability semantics, packaging, host binding, data, rights, evidence, economics, maintenance, authority and admission in one object. That creates a comprehensive dossier but a poor interoperability interface.

The cleaner design is a family of linked contracts:

- `CapabilityContract`: what the capability provides and requires.
- `PackagingProfile`: service, module, package, transplant, pattern or template.
- `HostContract`: data, identity, secrets, files, events, UI mount and runtime capabilities.
- `BindingPlan`: how one capability binds to a particular host/application.
- `QualificationDossier`: tests, quality evidence, screenshots, performance and review.
- `RegistryRecord`: identity, versions, dependencies, compatibility and lifecycle.
- `ReleaseManifest`: the exact deployed composition and rollback path.

This preserves the good Phase 8 work while preventing every composer from reasoning over a giant governance document.

### Postgres is a default, not the universal contract

Postgres is likely the best default for new transactional B2B data we own. It is mature, relational, operationally familiar and compatible with much of the source ecosystem. But forcing every donor onto Postgres or one ORM creates unnecessary forks.

The universal layer should be a typed data capability. New Actionist-owned data can bind that port to Postgres. An intact donor can retain its native store and migrations. Cross-service product views can consume events into Actionist-owned read models. Local or ephemeral tools can use SQLite/libSQL. Files belong behind a file/object capability. Search, analytics and realtime systems should be introduced only for workloads that require them.

The governing rule from SISOCRM is stronger than “use Postgres”: **one owner per table and migration, never two**. ORM selection belongs inside an adapter, not in the capability contract.

### A fixed five-area shell is a hypothesis

AutoSaaS inherited an ISSO five-area shell and made exactly five top-level areas the default. That may work for operational dashboards, but it should not become a constitutional constraint. A support queue, client portal, scheduling application and case-management system have different natural information architectures. Shells should be archetype-level assets tested against workflow comprehension and activation, with shared Actionist identity, settings and navigation primitives underneath.

### Repo-to-block conversion is only one subsystem

The Phase 8 repo-to-block pipeline correctly found that source identity, shape choice, dependency closure, adaptation and admission are distinct stages, and that shape choice and semantic adaptation require judgment. But conversion is not the whole moat. A perfect converter can fill a shelf with capabilities no client needs.

The defensible system is the graph connecting demand to proven supply and production outcomes. It knows which capability works for which workflow, in which packaging shape, with which host bindings, and at what adaptation and maintenance cost.

## The complete system

The first-principles decomposition contains five planes and eighteen domains:

1. Demand: outcomes, industry ontology, product specification.
2. Supply: discovery, capability mining, reuse-shape decisions, extraction, thin contracts and registry.
3. Composition: data, identity, connectors, UI, archetypes and planning.
4. Runtime: host/isolation and verification/promotion.
5. Learning: release, operations, economics and feedback.

No single domain should own another domain's truth. Product specifications should not choose database implementations. Repositories should not define product requirements. Models should not grant authority or invent compatibility. Qualification evidence should not mutate semantic interfaces. A runtime should not silently become the registry.

The contracts between these domains are the actual framework. Models operate within them; they do not replace them.

## Role of agents and deterministic systems

The research supports a plan-then-fill architecture:

```text
interpret demand
  → retrieve candidates
  → eliminate incompatible options deterministically
  → choose among feasible alternatives
  → generate bounded adaptation and glue
  → verify each binding and complete workflow
```

Deterministic systems should own identities, dependency graphs, schema validation, namespace conflicts, declared ports, tenant requirements, build/test execution and release manifests. Models are best used for interpreting ambiguous demand, understanding unfamiliar source architecture, proposing reuse shapes, mapping semantics, writing bounded transforms/glue and comparing trade-offs. Humans remain responsible for product equivalence, important UX decisions, destructive authority and final client acceptance.

Cheap models are not the first principle. They are an economic hypothesis: once retrieval and constraints make the problem small enough, can a cheaper model choose and adapt correctly? The 20-task/26-fixture eval work provides a way to test that without making the model the architecture.

## What remains unknown

The most important unknowns are not another broad list of repositories:

- Whether the 1.3-million-repository index has a current authoritative path, schema and query interface.
- Which evidence predicts adaptation quality and maintenance cost better than popularity metadata.
- Whether the proposed thin contracts are sufficient across three genuinely different reuse shapes.
- Whether one host identity/settings/navigation layer can cleanly absorb mature donor applications.
- Which data capability interface is expressive enough without leaking Postgres or donor internals.
- How much adaptation is really required for branding, onboarding, settings, tenancy, navigation, data and deployment across a representative sample.
- Whether case/workflow or client-portal archetypes can be assembled from existing supply with less effort than a focused custom build.
- Which runtime profiles are required: package, microfrontend, sidecar, service, worker and scheduled job.
- Whether the deterministic solver materially improves first-pass build success and reduces tokens.
- What one accepted build and one maintained client actually cost.
- Which production feedback should promote or demote a capability or archetype.

## The next loop

The next loop should be empirical and deliberately small. Do not start by ranking a thousand repositories from metadata. Pick one industry and one high-value workflow, then select three different reuse shapes that force the framework to prove its boundaries.

A strong pilot would be an industry-specific case/workflow or client portal containing:

1. one intact engine/service;
2. one extracted or transplanted product surface;
3. one Actionist-owned domain delta;
4. one connector;
5. one shared host identity/settings/navigation layer;
6. one owned Postgres data resource plus one donor-owned data source;
7. a complete acceptance workflow and rollback path.

Before implementation, write the OutcomeSpec, ProductSpec, HostContract, three CapabilityContracts, PackagingProfiles, DataResourceContracts and AssemblyPlan. Then measure adaptation hours by category, changed code, glue size, failed assumptions, model tokens, runtime burden, workflow defects and maintenance surface.

That loop will answer more than another billion metadata tokens because it tests the central claim: can Actionist preserve the quality of mature code while standardizing only enough of the seams to make semi-custom products fast and repeatable?

## Current strategic thesis

Actionist should not be “Lovable with a bigger repository corpus.” It should be a software assembly operating system with four compounding assets:

1. a demand graph of industries, workflows, atoms and archetypes;
2. a capability graph of reusable systems and their correct reuse shapes;
3. a host and composition framework that standardizes data, identity, connectors, UI and runtime at explicit seams;
4. a production learning loop that records which compositions delivered client outcomes at what cost.

The standardized Actionist block is still useful, but it should be clean and thin. It should say what a capability does, what it needs and how it can bind. The original code should remain as intact as its chosen reuse shape permits. Actionist-specific identity, settings, navigation, data and operations should be supplied by host contracts and adapters. Qualification and release evidence should remain linked rather than fused into the semantic interface.

The project has completed a substantial problem-understanding run. It has not yet proven the assembly system. The next milestone is not more breadth. It is one representative, measured composition loop that forces every important boundary to become concrete.
