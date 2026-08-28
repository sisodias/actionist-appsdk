# Cross-vertical block dependency and priority map

**Packet:** `2026-08-28-agency-os-pilot / 01-demand-product`  
**Observed:** 2026-08-28  
**Status:** research and blueprint only; no vertical is selected as the pilot

## Course correction

The earlier intended deliverable was an Agency OS demand/product decision. That direction is superseded. This packet makes no Agency OS product decision, produces no concrete product blueprint, and does not rank marketing agencies above the other recipes. It answers the narrower foundry question:

> Which blocks are shared control foundations, which blocks carry vertical meaning, which can wait, how do they depend on one another, and what is the smallest closed set that can test the foundry across all five recipes?

The machine-readable companion is [`block-dependency-priority-map.json`](block-dependency-priority-map.json). The canonical hub inputs are the [`block register`](../../../../../knowledge/block-hub/block-register.json), [`composition recipes`](../../../../../knowledge/block-hub/composition-recipes.json), [`master synthesis`](../../../../../knowledge/00-MASTER-SYNTHESIS.md), [`decision timeline`](../../../../../knowledge/07-DECISION-TIMELINE.md), and [`Block Hub README`](../../../../../knowledge/block-hub/README.md).

## Decision

Use a two-level map:

1. Treat the 31 blocks shared by all five hub recipes as the **shared recipe baseline**, but do not mistake all 31 for the first foundry proof.
2. Define a smaller **universal foundation** of 12 blocks that is sufficient to establish tenant identity, human authority, host coherence, evidence, external binding, intake and delivery.
3. Add vertical spines only where they introduce a distinct state/authority model: SaaS commercial access and product operations; ecommerce transaction and fulfilment; marketing client service and approval; course learning and learner delivery.
4. Keep useful but non-load-bearing shared blocks as optional enhancements, and defer high-risk or gap-heavy capabilities until the foundry proves its seams.

This is a priority map, not a repository list, runtime plan, implementation plan or admission decision.

## Recipe reconciliation

The hub currently defines five recipes with exact required-block counts:

| Recipe | Required blocks | Cross-vertical reading |
|---|---:|---|
| `digital_business_os` | 31 | Shared operating baseline; no independent vertical spine in this map. |
| `saas` | 45 | Baseline plus commercial access, provisioning, usage, product operations and retention. |
| `ecommerce` | 50 | Baseline plus catalogue, checkout, inventory, orders and fulfilment. |
| `marketing_agency` | 48 | Baseline plus client service, campaign production, approval, publishing, margin and reporting. |
| `course_creator` | 50 | Baseline plus authoring, enrolment, learning progress, community, paid access and media. |

The recipe counts are requirements mapped from the hub. They are not qualification, implementation or production-readiness counts. The hub itself records **80 blocks, 66 seeded-candidate-supply rows, 14 thin-or-gap rows, and no admitted block**.

## Classification policy

The four labels below are mutually exclusive *priority classes in this packet*. A block can be required by a recipe without being in the smallest foundry set.

| Class | Meaning | Decision rule |
|---|---|---|
| `universal_foundation` | Cross-vertical control/evidence contract. | Without it, a vertical result cannot be isolated, attributed, composed or reviewed. |
| `vertical_spine` | Domain-defining state, authority or transaction contract. | It is the smallest meaningful proof that an overlay is not merely a relabelled dashboard. |
| `optional_enhancement` | Valuable supporting or breadth capability. | It improves the product after the foundry seams are proven, but its absence does not falsify the assembly thesis. |
| `deferred` | High-risk, high-scope or currently gap-heavy capability. | It should not be used to make the first foundry proof look complete; deferral is not rejection. |

The shared `digital_business_os` recipe is deliberately broader than `universal_foundation`: it includes public content, support, communications and collaboration surfaces that all five overlays may eventually share. That is a recipe-membership fact, not a reason to load every surface into the first proof.

## Universal foundation — 12 blocks

These blocks are the minimum cross-vertical seam set. Their dependency order is identity → authority → host/evidence → external binding → intake/work delivery.

| ID | Block | Why it is universal | Direct prerequisites / consumers |
|---|---|---|---|
| B001 | Workspace identity and tenancy | Separates every actor, record, connection and evidence stream by tenant. | Root; consumed by every block. |
| B002 | Users, teams and employee directory | Represents employees, teams, contractors and assignments as first-class actors. | B001; consumed by roles, tasks and vertical ownership. |
| B003 | Roles and permissions | Makes view/change/approve/publish/admin authority explicit. | B001; gates B007, B011, B012, B014, B021 and B028. |
| B006 | Application shell and navigation registry | Presents composed capabilities as one host rather than disconnected products. | B001; mounts shared and vertical surfaces. |
| B007 | Audit and activity history | Makes consequential state changes attributable and reviewable. | B001+B003; consumed by approvals, connectors and side effects. |
| B010 | Files and object storage | Gives documents, assets, evidence and media a host-owned namespace. | B001; consumed by portals, assets, reports and learning media. |
| B011 | Workflow, rules and approvals engine | Encodes state transitions, deadlines, approval gates and exceptions. | B001+B003; consumed by all vertical state machines. |
| B012 | Connector and OAuth catalogue | Binds external systems with tenant-safe identity and observable receipts. | B001+B003; consumed by metrics, channel, commerce and messaging edges. |
| B013 | Analytics and reporting engine | Converts source-linked events into attributable evidence and comparison. | B001+B012; consumed by vertical reports and health views. |
| B014 | Internal admin and data operations | Gives trusted operators bounded inspection and correction authority. | B001+B003; supports safe review and recovery. |
| B021 | Forms, surveys and intake | Turns an external request, event or file into a structured work item. | B001+B003; feeds CRM, briefs, portals and enrolment. |
| B028 | Projects, tasks and assignments | Carries work ownership, deadlines and delivery state across teams. | B001+B002+B003+B011; feeds calendars, capacity and vertical work. |

## Vertical spine — 34 blocks

Vertical spine means the state and authority that makes each overlay materially different. The four lists are disjoint and together contain 34 blocks.

### SaaS spine — 8

| ID | Block | Distinctive invariant |
|---|---|---|
| B032 | Pricing, plans and packaging | A commercial offer is explicit before access is granted. |
| B033 | Subscription billing | Subscription state has a lifecycle separate from usage or access. |
| B034 | Entitlements and feature access | Commercial state deterministically gates product capability. |
| B035 | Trials and customer provisioning | A customer environment can be created, activated, suspended and retired. |
| B036 | Usage metering | Usage is attributed to stable identities and measured independently of billing. |
| B039 | Feature flags and controlled rollout | Release exposure is scoped by tenant/cohort/percentage, not guessed by the model. |
| B041 | Feedback and product roadmap | Customer feedback becomes a traceable product decision, not an orphaned message. |
| B043 | API keys, webhooks and developer access | Programmatic access and event delivery are bounded, revocable and observable. |

### Ecommerce spine — 7

| ID | Block | Distinctive invariant |
|---|---|---|
| B045 | Product catalogue and PIM | Products, variants, attributes and merchandising have a clear owner. |
| B046 | Storefront and product discovery | Customer discovery presents catalogue truth without changing order authority. |
| B047 | Cart and checkout | A selected basket becomes a priced, authorized order candidate. |
| B048 | Inventory and availability | Stock is quantity-at-location with reservation/race semantics. |
| B049 | Order management | Order state is independent of payment and fulfilment providers. |
| B052 | Fulfilment and warehouse execution | A paid order becomes warehouse or supplier work with explicit exceptions. |
| B053 | Shipping, tracking and delivery | Carrier activity and delivery evidence are connected without owning carrier truth. |

### Marketing agency spine — 10

| ID | Block | Distinctive invariant |
|---|---|---|
| B058 | Client portal | An untrusted external identity sees only its client scope and permitted actions. |
| B059 | Briefs and campaign intake | Ambiguous client intent becomes structured scope and acceptance conditions. |
| B060 | Proposals, quotes and retainers | Commercial scope, price and recurring commitment are explicit. |
| B061 | Contracts and signatures | Signed scope is distinct from an unsigned proposal or draft. |
| B062 | Campaign and content calendar | Multi-channel work is scheduled against client commitments. |
| B064 | Client approval and revision workflow | Approval attaches to an exact version; changes reopen the gate. |
| B065 | Social publishing and channel operations | A governed channel action follows approval and retains a receipt. |
| B066 | Client reporting and performance decks | Source metrics become a client-specific, period-bounded deliverable. |
| B067 | Time, capacity and resource planning | Staff and contractor effort is planned and attributed to delivery. |
| B068 | Retainer invoicing and agency finance | Contract, work, cost and invoice state can be reconciled without silent leakage. |

### Course creator spine — 9

| ID | Block | Distinctive invariant |
|---|---|---|
| B070 | Course authoring and lesson delivery | Authored structure is separable from learner progress. |
| B071 | Cohorts, enrolment and learner progress | Access, participation and progress are attributable to a learner/enrolment. |
| B072 | Community and membership | Membership/entitlement controls ongoing community interaction. |
| B073 | Live sessions and events | Events attach to a cohort or audience with registration and attendance state. |
| B074 | Assignments, feedback and completion | Submitted work and completion require explicit educational authority. |
| B075 | Certificates and learner documents | A certificate is derived from verified completion, not a generic PDF. |
| B076 | Creator memberships and paid access | Payment state is joined to learning/community access. |
| B079 | Learner portal | External learner identity sees learning, progress and support scope only. |
| B080 | Media library and delivery | Video/audio/download delivery has a controlled asset and access boundary. |

## Optional enhancement — 26 blocks

These blocks remain useful, and many are required by the eventual full recipes, but they should not be allowed to obscure the first composability proof.

| ID | Block | Why it can wait |
|---|---|---|
| B004 | Employee onboarding and offboarding | Important lifecycle hygiene; not needed to demonstrate an initial cross-vertical state binding. |
| B005 | Collective settings registry | Host-wide precedence and provenance are valuable but can be held until seam ownership is observed. |
| B008 | Notifications and delivery preferences | Delivery improves throughput after recipient, authority and state contracts are stable. |
| B009 | Search and command retrieval | Cross-module retrieval is a scale multiplier, not the first proof of semantic compatibility. |
| B016 | Website and CMS | Public content is broad shared surface area rather than a foundry boundary. |
| B017 | Landing page system | Conversion surface can remain a later recipe layer while product seams are tested. |
| B018 | Blog and editorial publishing | Editorial breadth does not test vertical state ownership. |
| B019 | Documentation and knowledge publishing | Useful support/acquisition surface; no first-test dependency. |
| B020 | Testimonials, case studies and proof | Evidence surface is useful but not the same as operational evidence. |
| B022 | Newsletter and audience publishing | Lifecycle communication can follow identity, consent and delivery proof. |
| B023 | CRM and revenue pipeline | Valuable cross-vertical commercial context, but the first test can use typed intake without a full CRM. |
| B024 | Scheduling and booking | Concurrency and timezone semantics deserve a separate focused proof. |
| B025 | Customer support desk | Support/SLA state is a strong later archetype test, not required for the first five-recipe slice. |
| B026 | Shared inbox and communications | Communication threading and outbound authority add another seam after core work state is proven. |
| B027 | Knowledge base and wiki | Retrieval/content lifecycle is orthogonal to the first state-machine proof. |
| B029 | Collaborative workspace and notes | Rich collaboration can follow files, identity and comments with proven ownership. |
| B031 | Document and PDF generation | Output generation is useful after the source state and approval evidence are reliable. |
| B037 | Product onboarding and activation | Activation is an overlay on a stable product/learner/client state model. |
| B038 | Product analytics and behavior | More detailed behavioral instrumentation follows the basic evidence/reporting contract. |
| B040 | Customer success and account health | Health is a derived view over delivery and commercial evidence. |
| B042 | Incident, status and on-call | Operational resilience is important but not a first vertical value proof. |
| B044 | Lifecycle marketing and churn recovery | Retention automation follows consent, identity and reliable lifecycle state. |
| B056 | Reviews and user-generated proof | Attribution/moderation is a separate trust loop. |
| B057 | Abandoned-cart and browse recovery | Recovery is a derived commerce behavior after order/consent state is reliable. |
| B063 | Digital assets and media production | Shared asset production spans marketing and course work, but can be represented by files in the minimal proof. |
| B078 | Learner communication and sequences | Sequencing follows learner state and notification delivery. |

## Deferred — 8 blocks

Deferred blocks are not rejected. They are held out because their authority, financial, rights or arbitrary-editing burden can make a first proof misleading.

| ID | Block | Deferral reason |
|---|---|---|
| B015 | AI assistant and grounded help | Model assistance must not become an authority path before the underlying contracts and audit are proven. |
| B030 | Payments and money movement | Payment provider state, ledger ownership, refunds and read-back require a dedicated control proof. |
| B050 | Tax, duties and pricing calculation | Jurisdiction-sensitive correctness is too consequential for a generic first foundry fixture. |
| B051 | Fraud and payment risk | Risk decisions need provider-specific evidence and human review boundaries. |
| B054 | Returns, exchanges and refunds | Reverse flows cross inventory, payment and fulfilment authorities. |
| B055 | Discounts, loyalty and promotions | Pricing incentives can corrupt commercial authority if introduced before order truth. |
| B069 | Bounded client site and campaign editor | Even bounded editing risks arbitrary content/layout authority and needs a separate safety proof. |
| B077 | Affiliate and referral management | Attribution and commission settlement are specialist financial/evidence flows with a current hub gap. |

## Dependency map

The dependency graph is intentionally expressed as semantic edges, not runtime components. The complete edge list is in [`block-dependency-priority-map.json`](block-dependency-priority-map.json); the backbone is:

```text
B001 identity/tenancy
  ├── B002 actors/teams ──┐
  ├── B003 authority ─────┼── B007 audit
  ├── B006 host shell ────┤
  ├── B010 files ──────────┼── B011 workflow/approval
  ├── B012 connectors ─────┼── B013 evidence/reporting
  ├── B014 admin ──────────┤
  ├── B021 intake ─────────┴── B028 tasks/assignments
  └──────────────────────────────┬──────────────────────┐
                                  │                      │
                SaaS: B032→B033→B034→B036/B039          │
        Ecommerce: B045→B046→B047→B048/B049→B052/B053   │
     Marketing: B059→B060→B061→B062→B064→B065→B066     │
       Courses: B070→B071→B074→B075 and B071→B079      │
                                  │                      │
                    B067/B068 or other derived views ←─┘
```

### Hard versus soft edges

- **Hard edge:** the downstream contract cannot be interpreted safely without the upstream identity, authority or state. Missing it should produce `INFEASIBLE`, not an inferred substitute.
- **Soft edge:** the downstream block can exist without the upstream block but loses useful context, automation or evidence. Missing it should be visible as a gap or `UNDERDETERMINED`, not silently filled.
- **Source-of-truth rule:** a dependency does not transfer ownership. For example, channel metrics remain channel-source truth, payment state remains payment-provider/ledger truth, and learner progress remains the learning-domain truth.
- **One-owner rule:** one authoritative owner per table, migration, file namespace and event stream remains a composition invariant from the existing synthesis.

### Overlay chains

| Overlay | Hard dependency chain to test first | Important negative edge |
|---|---|---|
| SaaS | B001+B003 → B032 → B033 → B034; B012+B013 → B036 | Usage must not grant access when entitlement is absent. |
| Ecommerce | B001+B003+B011+B012 → B048; order/availability must retain separate authority | A payment or stock signal must not silently mutate an order without an explicit owner. |
| Marketing agency | B001+B003+B006+B007+B010+B011 → B058; B058+B063/B010 → B064 | A client or contractor must not approve an unexposed or changed version. |
| Course creator | B001+B003+B006+B010+B011 → B070; B070 → B071 | Learner access must not imply completion or certificate eligibility. |

## Smallest representative foundry set — 17 blocks

The first foundry proof should use **17 blocks**, not the full 80-block hub:

| Slice | IDs | Count | What it proves |
|---|---|---:|---|
| Universal foundation | B001, B002, B003, B006, B007, B010, B011, B012, B013, B014, B021, B028 | 12 | Tenant isolation, actor authority, host coherence, files, workflow, external binding, evidence, admin, intake and delivery. |
| SaaS anchor | B036 | 1 | Stable-identity usage measurement and external evidence binding. |
| Ecommerce anchor | B048 | 1 | Quantity-at-location and availability state without collapsing source authority. |
| Marketing anchors | B058, B064 | 2 | Untrusted external client scope plus exact-version approval/revision. |
| Course anchor | B070 | 1 | Authored learning structure distinct from the shared work state. |
| **Total** |  | **17** | Four distinct vertical state pressures over one shared foundation. |

This set is dependency-closed for the selected anchors under the hard-edge map. The two marketing anchors are intentional: one portal alone does not prove approval authority, and a generic approval engine alone does not prove an external client boundary. The set also exercises the three reuse modes named in the decision timeline without selecting a source or designing a runtime:

1. `intact_service` boundary: B012 connector/catalogue.
2. `embedded_or_transplanted_surface` boundary: B058 client or external learner-style portal semantics.
3. `engine_plus_owned_surface` boundary: B011 workflow/evidence semantics bound to B036, B048, B064 and B070 domain state.

### Minimal foundry probes

The 17-block set should be judged on synthetic, privacy-safe cases only:

1. A record from tenant A is denied to tenant B even when a shared surface requests it.
2. An employee can act inside an assigned scope; a contractor cannot see unassigned client/learner/order state.
3. A client can approve only a visible content version; editing that version invalidates the approval.
4. A connector receipt retains tenant, actor, source identity, timestamp and freshness.
5. A stale or missing external signal becomes an explicit exception rather than a healthy value.
6. SaaS usage, ecommerce availability, marketing approval and course authoring each retain their own state semantics.
7. Removing any hard prerequisite yields `INFEASIBLE`; the composer does not invent a replacement.
8. Evidence that cannot establish compatibility yields `UNDERDETERMINED`; the composer does not promote it to feasible.

The kill condition is not “all 80 blocks are present.” The foundry fails if it cannot preserve tenant/authority boundaries, exact state identity, source provenance, or explicit infeasible/underdetermined outcomes across the 17-block set.

## Repository Value Matrix input contract

The block map determines what should be tested. A separate Value Matrix determines whether a source is worth considering for that block, recipe and reuse shape. The row grain is:

```text
(source identity, reuse shape, recipe, block, workflow)
```

There is deliberately no repository-wide score or rank. A repository may be valuable as an intact service, unusable as a transplant, and useful only as a generated pattern. The matrix therefore compares rows only when `reuse_shape`, `recipe_id` and `block_id` are held constant.

### Five demand/reuse inputs

| Input | Type | Required evidence | Scale / rule |
|---|---|---|---|
| `outcome_importance` | Demand | Named outcome, affected actor, terminal owner, economic/operational metric, demand receipt and evidence class. | 0–5: cosmetic/no outcome → local efficiency → workflow/SLA/margin → revenue/retention/risk → critical continuity/regulated outcome. Catalogue mention is a signal, not validated demand. |
| `block_universality` | Reuse role | Canonical block ID, map class, hub-required recipes, layer and stage. | Structured, not a popularity score: preserve `universal_foundation`, `vertical_spine`, `optional_enhancement` or `deferred`, plus canonical recipe count. Hub membership does not prove source fit. |
| `workflow_completeness` | Reuse evidence | Workflow ID and receipts for trigger/input, identity/data, state transition, authority, exception/recovery and verification/receipt. | 0–5: no workflow → outcome only → trigger + happy path → states/actor → exception/provenance → negative path + recovery/read-back + receipt. |
| `cross_recipe_reuse_breadth` | Reuse evidence | One semantic-fit receipt per recipe, with variant delta, source-of-truth fit and authority fit. | 0–5 count of evidence-backed fits across the five recipes. Do not count tags, stars, generic descriptions or family labels. |
| `user_visible_vs_engine_only` | Value mode | Observed surface/API behavior, workflow/engine behavior, actor receipt and shape evidence. | Preserve `user_visible_score` and `engine_only_score` (each 0–5) plus a mode: `engine_only`, `mostly_engine`, `mixed`, `mostly_user_visible` or `user_visible_and_engine`. Engine-only value is not discounted when it unlocks visible workflows. |

`UNKNOWN` is not zero. Missing evidence stays unknown, reduces evidence completeness, and blocks a shape-specific decision when it is a hard gate. The matrix also records shape-specific rights state, licence or clean-room reimplementation cost, adaptation cost by category, authority/data ownership, integration surface, runtime burden, qualification evidence, maintenance owner and rollback/exit evidence.

### Per-shape valuation

The five inputs are weighted only after a reuse shape is selected. The following profiles define what “high value” means for that shape; they do not create a global repository score:

| Reuse shape | High-value signal | Value emphasis | Typical hard gates |
|---|---|---|---|
| `intact_service` | Complete capability behind a stable identity-bound API/event surface with retained source data authority. | Outcome + workflow + engine leverage. | Identity/tenancy, contract/read-back, authority/data owner, recovery. |
| `embedded_module` | Bounded user-visible surface that can share host identity, navigation, settings and permissions without donor leakage. | User-visible value + host handoff. | Session handoff, scoped visibility, authority, surface state/error evidence. |
| `transplanted_subsystem` | Product-defining subsystem with bounded dependency closure and explicit migration/data authority. | Workflow completeness + mixed visible/engine value. | Dependency closure, data/migration owner, semantic adaptation, rollback/exit. |
| `extracted_package` | Small portable capability with high block or recipe breadth and low dependency drag. | Block universality + cross-recipe breadth. | Small closure, portable contract, testable state, rights/maintenance owner. |
| `adapter` | Source remains authoritative while the adapter supplies mapping, idempotency, provenance, freshness and safe read-back. | Outcome + integration/reuse breadth + engine value. | Source of truth, identity mapping, idempotency, freshness/error receipts. |
| `generated_pattern` | Observed interaction or architecture can be reproduced without inheriting source code and remains tied to a tested contract. | Universality + workflow + reproducibility. | Pattern provenance, held-out replay, authority preservation, bounded generation. |
| `template_archetype` | Composition envelope has a data spine, authority model, variant delta and explicit missing blocks. | Workflow completeness + visible composition. | Data spine, variant delta, required/missing blocks, rights/maintenance owner. |
| `custom_delta` | No source is better than a bounded custom implementation for the explicit gap. | Not a repository score. | Explicit gap, measurable outcome, bounded scope, ownership. |

The score, if later computed, is a weighted index for one fixed `(block, recipe, shape)` row and must be shown with its evidence completeness and blockers. Licence cost and clean-room reimplementation cost are recorded as trade-offs; neither is an automatic rejection and neither can rescue missing workflow or authority evidence.

### Positive calibration anchors

The operator-supplied anchors are calibration references, not admissions or global rankings. Their exact source records are in the [`capability source registry`](../../../../../knowledge/capability-shelf/source-registry.jsonl).

| Anchor | Registry/source ID | Shape-specific positive signal | Matrix lesson | Explicit limit |
|---|---|---|---|---|
| AFFiNE | `SRC-0002` / `toeverything/AFFiNE` | Native workspace rendered in the host; authenticated host-session handoff, document creation and reload persistence passed; separate donor/runtime ownership was observed. | Positive `embedded_module`/transplanted-surface signal for user-visible workspace value and host handoff. | `NOT_QUALIFIED`, `NOT_ADMITTED`; cross-recipe breadth and rights clearance remain unproven. |
| Twenty | `SRC-0064` / `twentyhq/twenty` | Product-base CRM identity and active-maintenance/domain alignment. | Positive user-visible domain-product and outcome-importance calibration for a CRM block; shape-specific runtime evidence must still be gathered. | `UNEXECUTED`, `NOT_QUALIFIED`, `NOT_ADMITTED`; do not infer transplant fit or breadth from the label. |
| Chatwoot | `SRC-0001` / `chatwoot/chatwoot` | Native Inbox, exact-origin SSO, wrong-origin/replay denial and restart persistence passed; three bounded donor changes were recorded. | Positive `intact_service` signal for workflow, identity-bound handoff and recovery; adaptation cost belongs to that row. | `NOT_QUALIFIED`, `NOT_ADMITTED`; open-core rights posture and production gates remain separate. |
| Plane | `SRC-0005` / `makeplane/plane` | Native Projects surface, create/move/restart persistence/delete, authenticated browser/runtime checks passed; donor remained unchanged. | Positive universal-block/project workflow and `intact_service` boundary calibration. | `NOT_QUALIFIED`, `NOT_ADMITTED`; Node compatibility repair is shape-specific adaptation evidence, not a global penalty. |

These anchors establish what a positive source/shape receipt can look like. They do not establish that the four repositories are selected, reusable in every recipe, licence-cleared, admitted or suitable for any untested shape.

## Priority consequences

- Do not start with the largest recipe or a generic dashboard. The first proof must be the shared foundation plus four vertical pressures.
- Do not use recipe membership as evidence that a block is reusable, qualified or admitted. The hub status remains requirements mapped and sources unqualified.
- Do not collapse vertical spines into a universal schema. SaaS entitlement, ecommerce stock, marketing approval and course completion carry different authorities and falsifiers.
- Do not let deferred money, tax, fraud, refunds, arbitrary editing, AI or referral capabilities become hidden dependencies of the first proof.
- Do not select repositories or vendors from this map. The four anchors are calibration inputs only; source selection remains a later evidence task after the block contracts and representative fixtures are settled.

## Evidence and limits

The map reconciles the current local evidence spine:

- [`00-MASTER-SYNTHESIS.md`](../../../../../knowledge/00-MASTER-SYNTHESIS.md): five planes, 18 domains, thin linked contracts, one-owner data rule and three-shape pilot requirement.
- [`07-DECISION-TIMELINE.md`](../../../../../knowledge/07-DECISION-TIMELINE.md): five recipes, shared foundation, vertical overlays, three real reuse shapes and no locked pilot industry.
- [`block-hub/README.md`](../../../../../knowledge/block-hub/README.md): six block levels, lifecycle organization, shared foundation, four overlays and qualification boundary.
- [`block-register.json`](../../../../../knowledge/block-hub/block-register.json): exact 80-block register and coverage counts.
- [`composition-recipes.json`](../../../../../knowledge/block-hub/composition-recipes.json): exact recipe membership and counts 31/45/50/48/50.
- [`capability-shelf/source-registry.jsonl`](../../../../../knowledge/capability-shelf/source-registry.jsonl): four operator-supplied positive calibration anchors with shape-specific local precedent and explicit qualification/admission limits.
- [`industry-atom-specifications.md`](../../../../actionmodel-builder-research-2026-08-26/phase-2/outputs/industry-atom-specifications.md): 17 industries, 12 teams, 66 use cases, 72 ideas, 12 atoms; all industry-level validated demand remains unknown.
- [`niche-atom-block-join.md`](../../../../actionmodel-builder-research-2026-08-26/expansion/outputs/niche-atom-block-join.md): 34 industry/archetype variants, case-workflow and portal concentration, and explicit distinction between demand signal and validated demand.
- [`b2b-template-shelf-report.md`](../../../../actionmodel-builder-research-2026-08-26/phase-8/lanes/03-b2b-template-shelf/outputs/b2b-template-shelf-report.md): 10 archetypes, 17 shelf rows, 4 candidate/8 reference/5 hold dispositions; no template admitted.

Limits remain explicit: no demand validation, source execution, rights/SBOM scan, runtime proof, build, deployment, client-private data or block admission was performed here. The map records licence/reimplementation risk as a later trade-off; no licence is treated as an automatic rejection, and no candidate is selected.
