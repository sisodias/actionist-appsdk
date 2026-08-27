# Actionist Solutions → repeatable discovery and block-sweep spec

**Date:** 26 Aug 2026  
**Status:** draft research contract; no platform or client claims are implied

## Why this exists

The public Actionist Solutions surface is already a demand taxonomy, not just
marketing copy. It separates the market into industry, team, use case, idea,
and app surfaces. The builder research should use those surfaces as the keys
for repeatable discovery, then reduce each one to atomic workflows and
admissible building blocks.

Source pages reviewed:

- https://actionist.ai/solutions
- https://actionist.ai/solutions/industries
- https://actionist.ai/solutions/teams
- https://actionist.ai/solutions/use-cases
- https://actionist.ai/solutions/ideas

## Current public taxonomy

| Surface | Current observed population | Meaning |
|---|---:|---|
| Industries | 17 | Vertical operating contexts |
| Teams | 12 | Department or owner of the work |
| Use cases | 66 | Specific jobs an agent performs |
| Use-case categories | 9 | Email, communication, productivity, projects, support, developer, AI, meetings/video, monitoring/alerts |
| Ideas | 72 | Businesses a person could start and operate with Actionist |
| Idea expertise filters | 28 | Skills or advantages the user brings |
| Apps | Separate App Store surface | Systems the agent can operate, with or without an API |

The use-case catalogue currently presents six concrete examples and marks the
remaining sixty as “Coming soon”. That distinction is useful evidence: the
catalogue is a roadmap/demand map, not proof that every advertised workflow is
implemented.

## First-principles product split

Do not collapse these into one “AI app builder” problem:

```text
Agent-operation plane
  perceive existing app → decide → operate UI → request approval → verify result

Builder plane
  understand client job → choose scaffold/blocks → adapt schema/tokens → build app
  → verify preview/deployment → publish a client-specific tool

Evidence/registry plane
  discover source → license/provenance gate → normalize → prove → release → measure
```

Actionist’s public differentiation is currently strongest in the first plane:
agents operating software like a person, including systems without APIs. The
new Actionist Builder belongs in the second plane, but should reuse the
approval, logging, authority, and app-catalog concepts from the first.

The atomic unit is not “a repo” or “an industry”. It is a bounded workflow:

```text
outcome + trigger + source state + observation + decision + side effect
        + authority/approval + verification + recovery + audit evidence
```

## Standard discovery record

Every industry/team/use-case/idea sweep should emit one record per atomic
workflow, not one paragraph per repository.

```yaml
solution_atom:
  id: <surface>/<slug>
  surface: industry | team | use_case | idea | app
  vertical: <industry or null>
  owner_team: <team or null>
  actors:
    requester: <person, role, or system>
    operator: <agent or human>
    approver: <person, role, or null>
    data_owner: <person, role, or system>
  capability_status: catalog | documented | authenticated | implemented | unverified
  job: <one sentence>
  outcome_metric: <time, revenue, risk, quality, or throughput measure>
  trigger: <event, schedule, threshold, or human request>
  systems_read: []
  systems_written: []
  source_of_truth: <system/entity>
  idempotency_key: <field or event identity, or null>
  rollback_boundary: <reversible action boundary or null>
  browser_only: true | false | unknown
  data_entities: []
  decisions: []
  approval_points: []
  failure_modes: []
  recovery_strategy: []
  business_loop: <recurring operating loop or null>
  monetization_event: <billable or value-realization event, or null>
  candidate_repos: []
  candidate_blocks: []
  evidence_urls: []
  evidence_date: YYYY-MM-DD
  confidence: observed | supported | inferred | unverified
  next_gate: discovery | direct_source_review | extract | build | smoke | reject
```

## Crosswalk and status requirements

The campaign must maintain an explicit many-to-many crosswalk across
`industry × team × use_case × idea`. A catalogue card is demand evidence, not
proof of a working capability. Track catalogue presence separately from
documented behavior, authenticated/live behavior, implementation status, and
unverified inference.

Keep these distinctions explicit in every result:

- a repository candidate is not an admitted block;
- a license label is not legal clearance;
- a UI builder is not a GUI-operating agent;
- a system-of-record write is different from a derived read model;
- a reversible action is different from an external side effect;
- an idea needs a business loop and monetization event, not just a feature list.

Each crosswalk edge should point to the capability atoms it reuses, the
candidate repositories or blocks that could implement them, the evidence that
supports the mapping, and the next gate required to make the mapping real.

## GitHub and web sweep protocol

### 1. Normalize the job before searching

Turn a catalogue card into 3–8 short capability queries. Search for the
underlying primitives, not the marketing phrase. For example:

```text
“invoice follow-up”
  → document extraction
  → accounts-receivable workflow
  → email/browser operation
  → approval queue
  → payment reconciliation
  → audit trail
```

Long natural-language GitHub queries over-constrain search. Use several short
variants, then merge/dedupe by canonical repository and capability.

### 2. Search in this order

1. First-party SISO sources and existing block candidates.
2. Local SISO Awesome catalog (`catalog_full.sqlite`).
3. Foundry identity/value data when its external data plane is mounted.
4. Existing Action Model sweep results (`research/github-sweep/`).
5. Direct GitHub search for gaps and freshness checks.
6. Web/product research for private/commercial systems and failure modes.

The existing Action Model sweep has **41 lane files and 389 merged candidates**
across app builders, CRUD/admin generators, registries, scaffolds, sandboxes,
schema tools, generative UI, and token systems. Reuse it; do not restart that
same search under new names.

### 3. Run bounded lanes

Each campaign should have explicit ownership and a non-overlapping lane:

- **Demand lane:** industry/team/use-case workflow decomposition.
- **Product lane:** commercial/private platforms and their actual operating model.
- **Scaffold lane:** app builders, admin shells, CRUD/resource systems, tenancy,
  auth, billing, deployment.
- **UI lane:** registries, design systems, image-to-code, token extraction,
  preview/review surfaces.
- **Agent lane:** browser/computer-use operation, planning, approvals, recovery,
  schedules, memory, and audit.
- **Evidence lane:** license detection, source provenance, repo freshness,
  security, maintenance, and proof harnesses.

Every lane returns a compact JSON/Markdown receipt, not a raw repo dump.

## Candidate admission rule

A repository becomes a block candidate only when the record has:

- canonical URL and pinned commit;
- machine-recognized license and copyright/provenance evidence;
- clear adoption mode: whole, API, sidecar, extract, reimplement, reference,
  or reject;
- stack/runtime and dependency compatibility;
- identified inputs, outputs, interfaces, and data ownership;
- an adaptation log;
- build command and smoke test;
- screenshot/contract evidence where UI is involved; and
- an explicit owner and rollback path.

No license is not “probably permissive”; it is reference-only until cleared.
GPL/AGPL and mixed-license boundaries require their own review rather than a
silent copy into client output.

## The block conversion pipeline

```text
catalog card
  → workflow atom
  → candidate set
  → source/license review
  → extraction boundary
  → stack/data/token/interface normalization
  → Block Contract v0
  → isolated build + smoke + visual proof
  → human admission
  → Great Library release/source inventory
```

The local [Block Contract v0](../design/block-contract.schema.json) is the
current machine-readable seam. It requires provenance, stack contract,
provided routes/components/migrations/events, consumed tokens, and evaluation
commands. One real block still needs to pass through it before the schema is
treated as stable.

## First-principles decomposition of the builder

The platform problem should be evaluated as these separate capabilities:

1. **Intent and elicitation:** turn a vague job into a structured spec without
   forcing a long questionnaire.
2. **Environment discovery:** identify the client’s apps, browser access,
   databases, auth, roles, files, and deployment boundary.
3. **Scaffold selection:** select a known-good app shell and compatible blocks.
4. **Data normalization:** bind the client schema or produce bounded Postgres
   migrations and read models.
5. **Design contract:** approve tokens and component IDs, not raw pixels alone.
6. **Assembly:** perform typed, allow-listed changes and generate only glue.
7. **Execution environment:** preview in isolation with reversible state.
8. **Validation:** build, typecheck, route smoke, browser smoke, screenshot and
   deployment checks as separate gates.
9. **Authority and recovery:** approvals, sensitive actions, rollback, retries,
   and audit evidence.
10. **Distribution:** release a reusable app/block/agent package into the
    Actionist App Store or a client-specific deployment.

This prevents a Lovable comparison from hiding the actual Actionist moat:
operating long-tail software through the UI, then using that same authority,
approval, and audit layer to deliver semi-custom client tools.

## Immediate research order

1. Build the crosswalk from all 17 industries and 12 teams to the 66 use cases;
   do not run 17 completely independent research programmes.
2. Cluster the 66 use cases into reusable workflow atoms: intake, triage,
   extraction, classification, follow-up, scheduling, reconciliation, reporting,
   monitoring, approval, and publishing.
3. Deep-dive the platform competitors and open-source candidates by capability
   lane, with Lovable, Manus, Replit, v0, Bolt, Base44, Airtable, Zapier,
   NocoBase, Dyad, bolt.diy, screenshot-to-code, CopilotKit, and registry-based
   systems as the initial comparison set.
   Priority gaps from the first audit are first-party dossiers for Manus,
   Airtable Omni, Zapier Interfaces, and Base44; an Onlook visual-builder
   review; source reviews for NocoBase and CopilotKit; a proof of
   image-to-design-token extraction; and one real Block Contract admission.
4. Pick three representative verticals—one document/finance-heavy, one
   operations-heavy, and one CRM/lead-heavy—and convert one workflow from each
   into a Block Contract candidate.
5. Only after those pilots pass should the campaign expand to every advertised
   industry and idea.

## Known boundaries

- The public Actionist page is a catalogue and positioning surface; it does not
  prove that all “Coming soon” workflows or private platform APIs exist.
- The Actionist technical teardown found no public API/SDK contract. Product
  integration assumptions need confirmation from the Actionist team.
- The 1.358M-card Foundry identity database remains external/private; the local
  Awesome catalog is the immediately usable repo-discovery source.
- The Action Model project has research candidates, not a proven end-to-end
  app-builder implementation yet.
