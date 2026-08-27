# Domain and contract map

The detailed first-principles derivation is preserved in [the original 18-domain map](../research/actionmodel-builder-research-2026-08-26/FIRST-PRINCIPLES-DOMAIN-MAP.md). This file is the compact navigation layer.

## Five planes, eighteen owners

| ID | Domain | Owns | Canonical output |
|---|---|---|---|
| D01 | Outcome and demand | Buyer, pain, outcome, constraints, value measure | `OutcomeSpec` |
| D02 | Industry/domain ontology | Entities, events, roles, vocabulary, invariants, atoms | `DomainPack` |
| D03 | Product specification | Workflows, screens, actions, failure states, acceptance | `ProductSpec` |
| D04 | Source intelligence | Discovery, indexing, dedupe, classification, retrieval | `SourceCandidate` |
| D05 | Capability mining | Source architecture, capability boundaries and seams | `CapabilityMap` |
| D06 | Reuse shape and ownership | Service/module/transplant/package/adapter/pattern/custom decision | `ReuseDecision` |
| D07 | Extraction and adaptation | Dependency closure, transforms, packaging and upgrade recipe | `PackagedAsset` |
| D08 | Thin capability contract | Semantic ports, configuration and compatibility | `CapabilityContract` |
| D09 | Registry and resolution | Identity, version, graph, compatibility, lifecycle | `RegistryRecord` |
| D10 | Data plane | State classes, data ports, schema/migration ownership, events/files | `DataResourceContract` |
| D11 | Identity and authority | User/workspace identity, tenancy, permission, secrets, audit | `AuthorityContract` |
| D12 | Connectors | Provider catalogue, actions/triggers, OAuth, tenant connections | `ConnectorContract` |
| D13 | UI and taste | Tokens, components, states, accessibility, previews, preference | `DesignSystemContract` |
| D14 | Archetypes and shells | Application-level skeletons and industry variation points | `ArchetypeTemplate` |
| D15 | Composition planner | Constraint resolution, candidate choice, bindings, glue budget | `AssemblyPlan` |
| D16 | Runtime and host | Runtime profiles, isolation, host APIs, preview and jobs | `HostContract` |
| D17 | Verification and qualification | Capability, binding, workflow and system evidence | `QualificationDossier` |
| D18 | Release and learning | Deployment, rollback, operations, economics and feedback | `ReleaseManifest` |

## Core information flow

```text
OutcomeSpec
  -> DomainPack + ProductSpec
  -> SourceCandidates
  -> CapabilityMaps
  -> ReuseDecisions
  -> PackagedAssets + CapabilityContracts
  -> Registry
  -> ArchetypeTemplate + Host/Data/Authority/Connector/UI contracts
  -> AssemblyPlan
  -> QualificationDossier
  -> ReleaseManifest
  -> production learning back into demand, retrieval and scoring
```

## Ownership rules

1. Requirements never inherit implementation constraints from a candidate repository.
2. Every stateful resource has one authoritative owner.
3. Every reused capability gets an explicit reuse shape before adaptation begins.
4. Semantic capability contracts do not contain all qualification and release evidence.
5. Host concerns—identity, settings, navigation, secrets, data and runtime—are bound through host interfaces.
6. Models may propose and adapt; deterministic systems validate contracts and compatibility.
7. Whole-workflow acceptance outranks isolated build success.
8. Production outcomes update rankings; corpus popularity does not become quality by repetition.

## Cross-domain danger zones

| Junction | Recurring failure |
|---|---|
| D03 ↔ D04 | Letting available templates define the product |
| D05 ↔ D06 | Mistaking “contains feature” for “cheaply reusable feature” |
| D06 ↔ D07 | Extracting a service-shaped engine into an owned fork |
| D08 ↔ D16 | Putting runtime-specific details into semantic interfaces |
| D10 ↔ donor systems | Two migration owners or silent data duplication |
| D11 ↔ D12 | Provider catalogue reused with globally scoped credentials |
| D13 ↔ D14 | Treating components as complete product UX |
| D14 ↔ D15 | Treating a template as the final client specification |
| D15 ↔ model | Asking a model to resolve undeclared compatibility or authority |
| D17 ↔ D18 | Calling a build receipt production evidence |

## Block framework placement

“Block” should mean the reusable capability package formed by D06-D09. It is consumed by D15 and bound into D10-D16. D17 qualifies it and D18 releases a particular application composition.

This placement keeps the block important without making it a synonym for the entire Actionist platform.
