# Block Host/Runtime Contract

**Packet:** `2026-08-28-agency-os-pilot / lane 03-host-runtime`  
**Status:** `DESIGN_ONLY; RESEARCH_AND_BLUEPRINT_ONLY; NOT_ADMITTED`  
**Observed:** 2026-08-28 (ICT)  
**Scope:** a product-agnostic host for stacking heterogeneous blocks across the four Block Hub overlays.  
**Owned artifact directory:** `research/workstreams/2026-08-28-agency-os-pilot/lanes/03-host-runtime/`

## Scope correction

The original brief called this lane “Agency OS host and runtime.” That wording is
superseded by the user correction on 2026-08-28. This packet does **not** select,
compose, or recommend an Agency OS product. “Agency OS” remains only in the
historical workstream path. The object defined here is the **Block Host/Runtime
Contract**: the minimum host boundary that can bind a block from any of the four
recipe overlays without making the host a second copy of the block.

No repository was cloned, no candidate source was executed, no build or benchmark
was run, no deployment was attempted, and no client-private data was used. A
candidate may be useful as a measured precedent without being selected for a
future product.

## Executive contract

A block is admitted to a host only when its capability, packaging, data, authority,
runtime and release records bind to these host-owned interfaces:

```text
Block
  -> identity + version + evidence
  -> typed ports and declared actions
  -> one explicit data/tenancy owner
  -> one host runtime profile
  -> host identity/context and authority ceiling
  -> host settings/navigation registrations
  -> event and read-model contract
  -> resource budget and connection pool allocation
  -> observability and recovery hooks
  -> release lock + rollback object
```

The host supplies shared context and control. It does not silently absorb a
donor's migrations, credentials, route ownership, policy decisions or canonical
records. A block may remain an intact service, become a mounted module, or expose
an engine port; those are different bindings with different resource and data
obligations.

## Evidence ledger

The labels below are deliberately conservative:

- **Measured precedent** — a local artifact records a runtime result, count or
  observed behavior. It is evidence for a shape, not proof that the shape
  generalizes.
- **Inference** — an architecture rule derived from multiple observations. It
  needs the falsifier recorded in this packet.
- **Unknown** — not measured, not settled, or contradicted by local evidence.

| Finding | Class | Decisive evidence and limit |
|---|---|---|
| The hub contains 80 blocks in five recipes; the shared `digital_business_os` foundation has 31 blocks and the four overlays contain 45, 50, 48 and 50 blocks respectively. | Measured precedent | `knowledge/block-hub/block-register.json`; `knowledge/block-hub/composition-recipes.json`. These are mapped requirements and source joins, not admitted blocks. |
| The four product-neutral overlays are `saas`, `ecommerce`, `marketing_agency` and `course_creator`; the shared foundation is a common dependency, not four separate stacks. | Measured precedent + inference | `knowledge/block-hub/composition-recipes.json`; the “one composed product, not ten SaaS stacks” decision in `knowledge/07-DECISION-TIMELINE.md`. No overlay is selected here. |
| Five runtime profiles are the current design vocabulary: package in host, microfrontend, sidecar service, worker and scheduled job. | Measured precedent | `knowledge/07-DECISION-TIMELINE.md`; `research/actionmodel-builder-research-2026-08-26/phase-8/lanes/05-composition-agent-evals/outputs/composition-agent-architecture.md`. The profile density remains unmeasured. |
| A signed host-to-module identity handoff has a defined shape: audience-bound token, short expiry, single-use `jti`, safe return path and donor-native session. | Measured protocol precedent | `apps/SISOCRM/verticals/business-broker/AUTH-AND-CONTEXT-INTEGRATION-CONTRACT.md`; the protocol spike is proven, while donor adapters are explicitly deferred. |
| A single Postgres database can contain host and donor-owned namespaces, but schema placement can be donor-specific. | Measured precedent + inference | Teable persistence proof in `apps/SISOCRM/verticals/business-broker/TEABLE-ABSORPTION-PLAN.md` (§§6a, 8c, 8d) shows `public`, `siso` and per-base schemas in one database. The older runtime baseline records `separateDonorDatabases: true` in `apps/SISOCRM/integrations/combined-route-runtime.json`; this contradiction means the general rule must be conditional, not absolute. |
| One owner per table and migration, and event-fed host projections instead of cross-donor mutation, are the safe data boundary. | Measured precedent + inference | `apps/SISOCRM/verticals/business-broker/OWNERSHIP-AND-DATA-LAYER-DECISIONS.md`; `WIRING-SPEC-DONOR-INTEGRATION.md`; `knowledge/02-ASSUMPTION-LEDGER.md` (A11–A12). A general pilot still has to prove the boundary with negative writes. |
| Teable ran twelve BullMQ queues in one NestJS process; dev mode was measured at roughly 200% CPU across two processes and roughly 2 GB, while production loads were 0.65 s cold and 0.23 s warm. | Measured precedent | `apps/SISOCRM/verticals/business-broker/TEABLE-ABSORPTION-PLAN.md` (§6, §8b, §8d). These values calibrate pooling and dev/prod separation; they are not budgets for another block. |
| OpenConnector's catalogue/OAuth/action mechanics were exercised, but its flat connection store exposed connections across named tenants and its global configuration/salt do not satisfy host tenancy. | Measured precedent | `research/openconnector-spike-2026-08-27.md`; `research/actionmodel-builder-research-2026-08-26/phase-8/external-opus-inputs/connectors/connector-research-summary.md`. Reuse of catalogue mechanics is separate from owning connection storage. |
| The host can cleanly absorb identity, settings, navigation and runtime boundaries for arbitrary mature donors. | Unknown | `knowledge/02-ASSUMPTION-LEDGER.md` A34–A35 and `knowledge/04-OPEN-QUESTIONS.md` §§17–21 keep this open. This packet defines a falsifiable contract; it does not claim the contract is implemented. |
| The resource figures in `worked-compositions.json` are production estimates. | Unknown | They are deliberately design fixtures, not measurements. An authorized pilot must replace them with process, RAM, CPU, connection, queue and storage receipts. |

## Recipe-neutral scope

The Block Hub is the denominator for this contract:

| Recipe record | Registered blocks | Role in this packet |
|---|---:|---|
| `digital_business_os` | 31 | Shared host/platform foundation. |
| `saas` | 45 | Overlay contract; no SaaS product is chosen. |
| `ecommerce` | 50 | Overlay contract; no commerce product is chosen. |
| `marketing_agency` | 48 | Overlay contract; no agency product is chosen. |
| `course_creator` | 50 | Overlay contract; no course product is chosen. |
| Unique block register | 80 | Registry denominator; repeated foundation blocks are deduplicated by stable block ID. |

Stacking means that one future application may bind a subset of these registered
capabilities to one host. It does **not** mean that all 80 blocks, or all four
overlays, are live at once. A product specification chooses the subset later;
this lane only defines what every chosen subset must declare.

## Host contract surface

The host contract is a set of linked records rather than a monolithic block
object. A future binding packet must contain at least:

```yaml
host_contract:
  host_id: stable-host-id
  contract_version: semver
  recipe_context:
    recipe_id: digital_business_os | saas | ecommerce | marketing_agency | course_creator
    selected_block_ids: [block-id@version]
  tenancy:
    tenant_id: required
    workspace_id: required
    principal_id: required
    employee_team_client_context: explicit
  identity:
    session_issuer: host-owned
    module_audience: exact
    launch_context: typed
  authority:
    ceiling: read | stage | write | message | deploy
    capabilities: typed and deny-by-default
    approvals: artifact/action-bound
  settings: host registry + scoped provenance
  navigation: route/launcher ownership + health fallback
  data: typed resources + one owner/writer/migration owner
  events: versioned envelope + outbox/inbox + read-model policy
  connectors: catalogue / connection store / executor separation
  runtime: one of the five profiles + health + resource unit
  observability: correlation, traces, logs, metrics, audit and cost
  release: immutable lock, compatibility, upgrade and recovery records
```

The semantic capability contract says what the block does. The host contract
says what the block may depend on. The resource and release records prove what a
particular binding costs and how it can be undone. Keeping these records separate
prevents a runtime detail such as a process port from leaking into a capability's
meaning.

## Tenancy, employee/team/client context

### Canonical context

The host uses stable opaque IDs, never email addresses or display names, as
foreign keys or authorization subjects:

```text
tenant (contractual/security boundary)
  └─ workspace (operating/product context)
       ├─ employee principal(s)
       ├─ team(s)                         # grouping; not isolation by default
       ├─ client account(s)               # external customer/buyer/learner/member alias
       └─ project/case/resource scopes
```

The domain recipe may call an external account a customer, shopper, client,
buyer, learner or member. That vocabulary belongs in the `DomainPack`; the host
uses `client_account_id`/`external_account_id` as a typed scope only when the
block exposes an external party. It must not create a new authentication or
database tenancy model for each vocabulary choice.

Every request, event, job and audit record must carry or resolve:

```yaml
context:
  tenant_id: uuid
  workspace_id: uuid
  principal_id: uuid | service-principal
  principal_kind: employee | client | service | system
  team_ids: [uuid]
  client_account_ids: [uuid]
  resource_scope: typed selector
  correlation_id: stable request/workflow id
```

Rules:

1. `tenant_id` is the hard security boundary. `workspace_id` must belong to that
   tenant and is checked server-side.
2. Employees can have memberships in several workspaces; membership is an
   explicit relation, not inferred from an email domain.
3. Teams are an assignment and policy scope. A team does not automatically make
   all of its rows visible to every team member.
4. Client principals receive a client-account scope and only the actions declared
   for that account. A client route is not authorization; the policy check is.
5. A row that is visible to an external account carries an explicit
   `client_account_id` or an approved relation. A `tenant_id` alone is not enough
   to prove client isolation.
6. Cross-tenant reads, writes or events fail closed. An unknown tenant mapping is
   `UNDERDETERMINED`, never “probably the same workspace.”

### Identity and authority

The host is the issuer of the canonical session and the module launch context.
The current local protocol provides the implementation target:

- a module-specific audience (`aud`) prevents a token for one module opening
  another;
- `exp - iat` is at most 120 seconds, with 60 seconds the preferred production
  target;
- `jti` is persisted and atomically consumed once;
- `returnPath` is a relative same-origin path;
- the token carries identity, workspace and record context, but never passwords,
  API keys, private keys or donor cookies;
- the donor may map/provision its native user, but donor authorization remains
  authoritative and the handoff cannot grant a role the donor mapping forbids.

This is a **protocol precedent**, not a claim that adapters for every future
block exist. A block declares one of `host-native`, `signed-handoff-adapter`,
`oidc` or `none`; a missing adapter is a blocking unknown.

Authority is an ordered ceiling:

```text
read < stage < write < message < deploy
```

The effective authority of a composition is the intersection of host session,
block declaration, resource policy and approval—not the union of all member
capabilities. Workers receive a short-lived, capability-scoped service token and
must re-check current tenant/membership/revocation before a consequential action.
An approval binds to `assembly_id`, artifact hash, action idempotency key and
scope; silence or an expired approval is not consent.

## Collective settings registry

Settings are a host-owned registry contribution, not an unbounded map shared by
all blocks. A setting definition declares:

```yaml
setting_definition:
  key: namespace.setting-name
  value_schema: json-schema-ref
  owner: host | block-id
  sensitivity: public | internal | confidential | secret-ref-only
  allowed_scopes: [system, tenant, workspace, team, client_account, module, principal]
  default: typed value or absent
  merge: replace | append | set-union | custom-reviewed
  write_capability: capability-id
  audit_required: true
```

Secret material is never a setting value; only a vault `secret_ref` is allowed.

Resolution is deterministic. The host evaluates the request context from broad
to narrow: `system → tenant → workspace → team/client_account → module →
principal`. A key's definition may narrow that order. Two values at the same
specificity are a conflict and return `UNDERDETERMINED`; they are not merged by
last-write time. The resolved response includes value, source scope, owner,
version, effective time and audit provenance.

Blocks register settings, but only the declared owner writes them. An intact
donor's private settings remain donor-owned behind its adapter. The host can
register a link and display provenance without creating a second writable copy.

## Navigation and host surface ownership

The host owns the global route/launcher registry. A block contributes declarations:

```yaml
navigation_registration:
  route_id: stable-block-route
  path_pattern: /w/:workspace_id/<block>
  owner_block: block-id
  mount: host | microfrontend | service-origin
  required_context: [tenant_id, workspace_id, principal_id]
  visibility_capability: capability-id
  settings_ids: [namespace.setting-name]
  search_provider: provider-id | null
  create_actions: [action-id]
  notification_topics: [topic-id]
  health_binding: health-id
  unavailable_surface: host-owned fallback
```

The following invariants are hard gates:

- one owner per route pattern and one launcher per route;
- a module cannot edit the global rail directly;
- a module may retain contextual secondary navigation inside its mount;
- route visibility is evaluated from current policy, not URL obscurity;
- an unhealthy or disabled block produces a typed unavailable/degraded surface,
  never a raw connection error, blank iframe or unexplained login page;
- command search, create actions, notifications and settings use host registries,
  even when execution remains module-owned.

The old fixed five-area shell is not a host invariant. Shell archetypes belong to
the product specification; this contract only provides the stable mount and
registration seams.

## Typed data ownership

### State classes

Every stateful resource is assigned one class before a block is bound:

| State class | Canonical owner | Host treatment |
|---|---|---|
| `host_owned_transactional` | Host or named Actionist domain module | Typed ports; host migrations and policy. |
| `donor_native` | Intact service/module | Donor schema and migrations remain intact; host uses API, adapter or approved read role. |
| `event_read_model` | Host projection owner | Rebuilt from versioned events; never a second canonical writer. |
| `mapping` | Host integration spine | Stable canonical-to-external IDs; no email/display-name joins. |
| `cache_or_search` | Named derived-data owner | Rebuildable; not product truth; staleness is visible. |
| `object_namespace` | File/object capability | Scoped keys and short-lived URLs; metadata and bytes have separate ownership. |
| `external_api_state` | External provider | Host stores connection state/receipts, not an unapproved mirror of provider truth. |
| `secret_material` | Secret manager | Host stores only `secret_ref`, metadata and rotation status. |

The minimum `DataResourceContract` is:

```yaml
data_resource:
  resource_id: stable-resource-id
  state_class: host_owned_transactional | donor_native | event_read_model | cache_or_search | object_namespace | external_api_state
  authority_owner: module-or-host-id
  write_owners: [exactly-one-or-empty-for-immutable/external]
  migration_owner: module-or-host-id | null
  tenant_keys: [tenant_id, workspace_id, client_account_id?]
  isolation: row_policy | schema | database | provider | none
  physical_locator: cluster/database/schema/table-or-external-id
  read_port: typed-interface-ref
  write_port: typed-interface-ref | null
  event_stream: event-stream-id | null
  sensitivity: public | internal | confidential | pii | unknown
  retention_and_deletion: policy-ref
  backup_and_recovery: policy-ref
```

`write_owners` must contain no more than one entry. “The host and donor both
write the same table” is not a composition strategy. A host projection may write
its own `read_model` table from donor events; that is a different resource and
does not transfer ownership of the donor record.

### One managed Postgres cluster, conditionally

The default target is one managed Postgres **cluster** with one application
database and separate owner namespaces where compatibility permits:

```text
managed cluster
└─ actionist database
   ├─ host              # identity, tenancy, settings, navigation
   ├─ integration       # external refs, inbox/outbox, approvals, mappings
   ├─ read_model        # event-fed projections; host-owned
   ├─ audit             # append-only activity/security receipts
   ├─ connector         # connection metadata + secret refs; no secret material
   └─ block_<id>        # one schema only when the block owns its tables here
```

Use the same database/schema plane only when all of these are true:

1. PostgreSQL major version, encoding/collation and required extensions are
   compatible.
2. The block can use a qualified namespace or a documented search path without
   reading or mutating another owner's tables.
3. The block's runtime and migration history can use a dedicated role and ledger.
4. No block requires superuser, uncontrolled `CREATE` or unbounded dynamic DDL.
5. Backup, restore, retention and incident ownership can be shared without
   making one block's recovery invalidate another's contract.

If a donor is compatible with the cluster but cannot live in a named schema, it
may receive a separate database on the **same managed cluster**. This preserves
backup and connection-pool economies while forbidding cross-database joins.
Cross-database product views use APIs/events/read models.

If a donor requires incompatible extensions, version, collation, superuser
behavior, or isolation, use a separate managed cluster. That is a resource and
operations cost, not an automatic quality rejection. It must be declared before
the host is promised.

Teable is the important local exception precedent: runtime evidence found that
its metadata path required `public`, while its data plane created a schema per
base, and that twelve queues lived in one NestJS process. The host contract must
represent such a donor-specific namespace and migration owner rather than
pretend that every donor accepts `block_<id>`.

### Roles and migration boundaries

The names are illustrative stable roles; a deployment may prefix them with an
environment identifier.

| Role | May do | Must not do |
|---|---|---|
| `host_runtime` | Typed CRUD on host-owned resources; `USAGE` on approved schemas; set transaction-local tenant context. | DDL, migration ledger writes, donor-table writes or raw generated SQL. |
| `host_migrator` | DDL and migration ledger updates for `host`, `integration`, `read_model` and `audit` only. | Serve request traffic or migrate a block it does not own. |
| `block_<id>_runtime` | Typed reads/writes in the block's declared namespace or its own provider adapter. | Write host or another block's canonical tables. |
| `block_<id>_migrator` | DDL for that block's schema/database and its own migration ledger. | Change shared schemas or another migration ledger. |
| `event_ingest` | Insert signed envelopes into an inbox/outbox boundary. | Mutate canonical block records as a side effect of receipt. |
| `read_model_writer` | Upsert only host-owned projection resources, idempotently. | Write donor canonical records or use a projection as a source of truth. |
| `connector_runtime` | Ask the vault for a short-lived scoped credential and call an allow-listed provider action. | Read plaintext secret tables, retain credentials in jobs/logs, or widen action scope. |
| `donor_<id>_runtime` | Use only the donor's own native data and declared adapter boundary. | Assume host policy, route or migration authority. |

Migrations are append-only/forward-compatible by default and owned by the same
owner as their tables. Use expand/contract, compatibility views and a
versioned resource API for breaking changes. A generated application never gets
host migration credentials. A donor's migration ledger is not merged into the
host ledger merely because the tables share a cluster.

The Teable evidence shows why this is a real boundary: it has metadata migrations,
a data-plane migration system and a brokerage migration owner, with runtime DDL
and advisory locks. A pilot must preserve each owner rather than collapse them
into one generic “Postgres migration” step.

## Event-fed read models

### Event contract

The current local event envelope already requires a version, event ID, type,
source module, workspace, actor, occurred time, correlation ID, causation ID and
payload (`apps/SISOCRM/integrations/contracts/event-envelope.schema.json`). The
general multi-tenant host adds a required `tenant_id` (or a verifiable
workspace-to-tenant resolution) and, where needed, `client_account_id` and
aggregate sequence. The existing v1 schema's omission is an explicit contract
gap, not an invitation to infer tenant scope from payload text.

```yaml
host_event:
  schema_version: semver
  event_id: immutable-id
  type: namespace.event.vN
  source_module: block-id
  tenant_id: uuid
  workspace_id: uuid
  actor_id: principal-or-service
  client_account_id: uuid | null
  occurred_at: timestamp
  correlation_id: workflow-id
  causation_id: event-id | null
  aggregate: {type, id, sequence}
  payload: typed-minimal-data
  payload_hash: digest
```

Each stateful owner writes its outbox in the same transaction as its canonical
change where possible. A relay delivers the envelope to a host inbox/broker;
consumers use `(source_module, event_id)` as an idempotency key and persist a
receipt before acknowledging. Retries use bounded backoff and a dead-letter
queue. Signatures, correlation/causation IDs and minimal payloads are required
for externally delivered or confidential events.

Use a synchronous typed API/transaction when a workflow must confirm a state
before performing a consequential action. Use events/read models for:

- global search and command retrieval;
- dashboards, analytics and scheduled reports;
- notifications and “needs attention” views;
- cross-module activity/timeline views;
- derived client/account summaries;
- eventual synchronization where bounded staleness is acceptable.

Every read model records `source_version`, `last_event_id`, `last_event_at`,
`projection_lag_ms`, `rebuild_cursor` and `staleness_state`. A stale projection
is labelled or falls back to its typed source; it is never silently presented as
current. A read model has one projection writer and can be rebuilt from the
event stream without touching the donor canonical tables.

## Connector and secret boundary

The host separates three blocks even when they are deployed together:

1. **Catalogue:** provider/action/trigger definitions and setup-form schemas.
2. **Connection store:** host-owned tenant/workspace/client connection metadata,
   grants, health, refresh locks and secret references.
3. **Executor:** short-lived action runtime with egress, authority, idempotency,
   rate-limit and receipt controls.

OpenConnector is a measured precedent for catalogue generation, credential
verification, encryption-at-rest, OAuth authorization URL generation and action
execution. It is also a measured negative precedent for adopting a flat connection
store: two named tenant connections were returned together, OAuth client config
was global per service, and key derivation used a global salt. The host therefore
owns a connection store even if it reuses catalogue/OAuth mechanics. Provider icon
licensing remained unverified in the source report.

The host-owned record is shaped like:

```yaml
connection:
  connection_id: uuid
  tenant_id: uuid
  workspace_id: uuid
  client_account_id: uuid | null
  provider_id: stable-provider
  external_account_id: opaque
  secret_ref: vault-reference
  granted_scopes: [scope]
  status: pending | active | degraded | revoked | expired
  expires_at: timestamp | null
  refresh_lock: lease-ref | null
  last_verified_at: timestamp | null
  created_by: principal-id
  audit_ref: event-id
```

Non-negotiable secret rules:

- plaintext credentials, refresh tokens, OAuth client secrets and private keys
  never enter Git, model context, browser JavaScript, events or ordinary logs;
- vault encryption uses tenant/workspace/provider AAD and key rotation metadata;
- OAuth state is one-use, expiring and stored hashed/encrypted as appropriate;
- workers receive a short-lived capability token, not a reusable connection secret;
- every external action declares `read`, `write` or `message`, idempotency,
  approval, retry, rate-limit and egress policy;
- action receipts record provider, connection ID, actor, correlation, request
  hash, outcome and redacted error without copying secret material.

Licence or reimplementation cost is recorded per block shape. A permissive
catalogue may reduce provider-definition work; it does not grant the catalogue's
storage or tenancy design. A provider with only a scripted integration may cost
more to reimplement than a declarative long-tail provider. Quality and boundary
fit remain the selection criteria; licence obligations are recorded and gated,
not used as an automatic quality rejection.

## Runtime profiles and efficient stacking

The host supports exactly five first-class runtime profiles. A block selects one
before binding; changing profile reopens the binding and resource/recovery
receipts.

| Profile | Process/listener shape | Best fit | Host boundary | Main failure mode |
|---|---|---|---|---|
| `package_in_host` | Zero additional listener; code runs in host process. | Pure UI, typed adapter, small domain logic, host-owned capability. | Shared dependency/runtime, host route and data ports. | Global state/dependency collision. |
| `microfrontend` | Static bundle mounted by host; normally zero backend process. | A bounded UI surface whose API is host-owned or remote. | Mount contract, context bridge, error boundary, token scope. | Browser/runtime incompatibility or duplicate navigation. |
| `sidecar_service` | Separate process/origin, optionally separate database on same cluster. | Intact donor application or independently scalable API. | Auth handoff, contextual route, health, API/events, data ownership. | Login/session, drift, process/RAM and migration burden. |
| `worker_pool` | Shared queue workers; many blocks use one bounded pool. | Event projection, imports, connector actions, media and async workflows. | Queue contract, service identity, idempotency, retries and egress. | Unbounded concurrency or duplicate side effects. |
| `scheduled_job` | Scheduler stores due work and dispatches to a worker pool; no daemon per block. | Reports, renewals, sync, cleanup and periodic checks. | Schedule owner, lease, misfire policy, idempotency and audit. | Duplicate/missed schedules and hidden resource spikes. |

An iframe is a temporary product probe, not a sixth host profile. The local
absorption evidence shows that cross-origin framing blocks token inheritance,
deep-linking, session flow and parts of normal browser behavior. If a framed
probe remains, it must be declared as a service-origin boundary with an explicit
unavailable/recovery surface; it does not receive host CSS or authority by
assumption.

### Process grouping rule

Logical block count is not process count. The host groups blocks by compatible
runtime unit:

```text
N logical blocks
  -> 1 host web process (packages + static mounts)
  -> 0..K sidecar services (only for real isolation/ownership boundaries)
  -> 1 pooled worker deployment (replicas set by queue load)
  -> 1 scheduler deployment (leases work; does not execute every job itself)
```

Blocks share a process only when language/runtime, dependency graph, global state,
route ownership, failure isolation and migration boundaries are compatible. A
block does not earn a new process merely because it is a separate registry row.
Conversely, a service remains separate when sharing would require changing its
canonical data owner, security model, or upgrade contract.

Workers and schedulers are pooled by class, not by recipe or block. Recommended
classes are `event_projection`, `connector_action`, `document_media`,
`notification`, `analytics_report` and `maintenance`; a first pilot may combine
classes only when their egress, priority, retry and memory behavior are bounded.
Each queue declares max in-flight work, retry limit, visibility/lease timeout,
per-job memory class, external side-effect class and a dead-letter destination.

## Resource-budget method

`resource-budget.schema.json` is the machine-readable contract for a binding's
budget. `worked-compositions.json` deliberately contains **representative
service/module/engine traces**, not product compositions. Its numbers are
arithmetic fixtures used to prove the schema and formulas; all are labelled
`design_estimate`/`inference`.

### Required accounting units

The budget counts application runtime units separately from managed dependencies:

- `runtime_units`: host web, sidecars, worker pools and scheduler instances;
- `connection_pools`: logical pool caps, each associated with one runtime unit;
- `queues`: in-flight and retry limits, including external side-effect class;
- `capacity`: CPU, RAM, storage, max database connections and process limit;
- `headroom`: explicit reserve, not an unstated percentage;
- `calculation`: derived totals plus formula strings and queue peak.

Managed Postgres, Redis, object storage, telemetry and an external provider are
recorded as dependencies with their own capacity/price/SLO owner. They are not
silently counted as local application processes. Their limits remain an
unknown until the selected managed service and plan are named.

### Estimation formulas

For every runtime unit `u`, with replicas `r`, processes per replica `p`:

```text
process_total       = Σ(r × p)
baseline_ram_mb     = Σ(r × p × baseline_ram_mb_per_process)
peak_ram_mb         = Σ(r × p × peak_ram_mb_per_process)
idle_cpu_mcpu       = Σ(r × p × idle_cpu_millicores_per_process)
peak_cpu_mcpu       = Σ(r × p × peak_cpu_millicores_per_process)
connections_peak    = Σ(connection_pool.max_connections)
persistent_storage  = Σ(r × persistent_storage_mb_per_replica)
ephemeral_storage   = Σ(r × ephemeral_storage_mb_per_replica)
storage_required    = persistent_storage + ephemeral_storage
queue_inflight_peak = Σ(queue.max_inflight)
```

The acceptance inequalities are explicit, not implied by a green health check:

```text
peak_cpu_mcpu + headroom.cpu_mcpu <= capacity.cpu_mcpu
peak_ram_mb   + headroom.ram_mb  <= capacity.ram_mb
connections_peak + headroom.connections <= capacity.max_connections
process_total <= capacity.process_limit
storage_required + headroom.storage_mb <= capacity.persistent_storage_mb
queue_inflight_peak <= declared queue/worker concurrency envelope
```

The numbers in a design fixture are not a benchmark. The measurement method for
an authorized pilot is:

1. Pin host, block, package-lock, image, database plan, browser and environment.
2. Enumerate logical blocks and collapse them into runtime units before starting
   anything. Record zero-process static/package mounts separately.
3. Warm the host, then measure idle and steady-state p50/p95/p99 RSS, CPU,
   listener/process count, queue depth and Postgres pool usage per unit.
4. Drive the declared workload at the planned tenant/workspace concurrency,
   including one burst and one recovery/replay scenario. Record peak RSS rather
   than only an average.
5. Measure database active/idle connections by role, transaction duration,
   lock/wait time and pool saturation. A pool cap is not the same as active use.
6. Measure persistent and ephemeral storage growth, event backlog, dead letters,
   connector egress and object bytes.
7. Replace the fixture's `inference` values with receipts carrying tool/image
   versions and a falsifier. If any resource is not observable, record `unknown`,
   not zero.

The Teable precedent makes the dev/prod split especially important: its measured
dev pipeline was dramatically heavier than its compiled production path. Resource
budgets therefore require separate `environment` records; a dev process is not a
production capacity claim.

### Value Matrix inputs and normalized burden factors

The resource budget is also an input contract for the repository Value Matrix.
The Value Matrix must expose operating burden as a vector; a single “quality” or
“reuse” score cannot average away a dangerous migration or rollback boundary.
`resource-budget.schema.json` requires these raw inputs for every trace or future
block binding:

```yaml
value_matrix.raw_inputs:
  process_total: integer
  idle_ram_mb: integer
  active_ram_mb: integer
  physical_database_count: integer
  sidecar_process_count: integer
  managed_dependency_count: integer
  peak_connections: integer
  migration_owner_count: integer
  dynamic_schema_owner_count: integer
  worker_pool_count: integer
  queue_count: integer
  queue_utilization: 0..1
  independent_release_units: integer
  irreversible_side_effect_classes: integer
  known_recovery_gaps: integer
```

The v1 factors are normalized to `0..5`, where `0` is no burden at the declared
scope and `5` is the maximum/comparable refusal band. The raw values remain
visible beside the factors. `clamp(x, 0, 5)` is applied after each formula:

```text
process_burden              = clamp(5 × process_total / capacity.process_limit)
idle_memory_burden          = clamp(5 × idle_ram_mb / capacity.ram_mb)
active_memory_burden        = clamp(5 × active_ram_mb / capacity.ram_mb)
database_burden              = clamp(physical_database_count)
service_burden               = clamp(sidecar_process_count + managed_dependency_count / 2)
connection_burden            = clamp(5 × peak_connections / capacity.max_connections)
migration_ownership_burden   = clamp(migration_owner_count + dynamic_schema_owner_count)
worker_burden                = clamp(2 × worker_pool_count + 3 × queue_utilization)
upgrade_burden                = clamp(independent_release_units
                                      + max(0, migration_owner_count - 1)
                                      + dynamic_schema_owner_count)
rollback_burden               = clamp(independent_release_units
                                      + irreversible_side_effect_classes
                                      + known_recovery_gaps)
```

These formulas are a **comparison index**, not a claim that 5 units of RAM have
the same economic meaning as 5 release units. The vector is therefore retained;
an aggregate may be used for sorting only after the component factors, raw inputs
and confidence are shown.

Confidence is attached per factor, not just to the row:

| Confidence | Meaning |
|---:|---|
| `1.00` | Direct measurement with a pinned environment and reproducible receipt. |
| `0.75` | Independently repeated measurement or two concordant receipts. |
| `0.50` | Architecture inference or arithmetic fixture from a measured precedent. |
| `0.25` | Partial/gated evidence; useful for discovery, not pilot eligibility. |
| `0.00` | Unknown or absent; never treated as zero burden. |

Overall confidence is the minimum of factor confidence after applying any explicit
unknown penalty. Confidence is not an average that lets eight confident fields
hide one unknown migration or rollback field.

### Machine refusal conditions

The Value Matrix emits refusal conditions as structured rows. A polished UI may
sort or filter rows, but it may not hide the raw inputs, factor vector, confidence,
or triggered refusal rows (`ui_contract.hide_allowed` is `false`).

Hard refusal for a product pilot occurs when any of these is triggered:

| Code | Trigger | Result |
|---|---|---|
| `REFUSE-CAPACITY-OVERFLOW` | Any CPU, RAM, storage, connection, process or queue capacity inequality fails. | `refuse_for_pilot` |
| `REFUSE-DUAL-WRITER` | A stateful resource has more than one writer or a second migration owner. | `refuse_for_pilot` |
| `REFUSE-UNOWNED-MIGRATION` | A mutable physical resource has no named migration/DDL owner. | `refuse_for_pilot` |
| `REFUSE-TENANCY-UNKNOWN` | Tenant/client isolation is absent, contradictory or not negative-tested. | `refuse_for_pilot` |
| `REFUSE-UNBOUNDED-WORKER` | Queue in-flight work exceeds worker concurrency, retry/lease behavior is unbounded, or a side-effecting job lacks idempotency. | `refuse_for_pilot` |
| `REFUSE-SECRET-IN-DATA` | Plaintext secret material can enter the database, event, log, browser or model plane. | `refuse_for_pilot` |
| `REFUSE-NO-ROLLBACK` | A release, schema, read model, connector or external side effect has no named recovery action. | `refuse_for_pilot` |
| `REFUSE-HIGH-BURDEN-LOW-CONFIDENCE` | Any process, active-memory, connection, worker, upgrade or rollback factor is `>= 4.5` while its confidence is `< 0.75`. | `refuse_for_pilot` |

Soft review conditions do not disappear; they prevent an `eligible` verdict:

| Code | Trigger | Result |
|---|---|---|
| `REVIEW-UNMEASURED-BURDEN` | Any factor confidence is below `0.75`. | `review_required` unless a hard refusal also applies. |
| `REVIEW-DYNAMIC-SCHEMA` | A donor creates schemas/tables at runtime or assumes a namespace the host cannot qualify. | `review_required`; require a named exception. |
| `REVIEW-MANAGED-LIMIT` | A managed Postgres/Redis/object/telemetry/provider limit or cost is plan-specific/unmeasured. | `review_required`; do not render “low cost.” |
| `REVIEW-EXTERNAL-SIDE-EFFECT` | The trace can send a message, payment or provider mutation whose reversal is not atomic. | `review_required`; require approval and compensation evidence. |

Decision rule:

```text
if any hard condition is triggered:
    decision = refuse_for_pilot
else if any soft condition is triggered or overall confidence < 0.75:
    decision = review_required
else:
    decision = eligible
```

`worked-compositions.json` intentionally demonstrates this rule: its service and
engine fixtures have high worker/upgrade/rollback factors with inference-level
confidence, so they are refused for pilot use; the module fixture remains review
required because its budget is still a design estimate. This is an honest
architecture fixture, not a product recommendation.

## Observability contract

Every request, event, job, connector action, migration, release and recovery
operation propagates:

```yaml
observation_context:
  trace_id: id
  span_id: id
  correlation_id: workflow-id
  causation_id: event-id | null
  tenant_id: redacted/hashed label where needed
  workspace_id: redacted/hashed label where needed
  block_id: block-id
  runtime_unit_id: unit-id
  release_id: release-id
  resource_id: resource-id | null
  actor_kind: employee | client | service | system
```

Required signals:

- liveness/readiness and dependency health per runtime unit;
- request/error/latency and queue depth/age/retry/dead-letter metrics;
- CPU, RSS, event-loop or runtime pressure, process restarts and connection pool
  saturation;
- database locks, migration duration, projection lag and read-model rebuild
  progress;
- connector action outcome, egress, rate-limit, refresh and approval denials;
- audit events for identity, policy denial, setting change, route change,
  migration, release, rollback, secret rotation and revocation;
- cost attribution by `release_id`, `block_id`, runtime unit, queue and provider.

Dashboards are grouped by host, runtime unit and block. A green host metric must
not hide a red block: every block has a health state and a user-visible fallback.
Telemetry must redact secret values and minimize tenant/client identifiers.

## Upgrade and multi-object rollback

### Release object

A release manifest binds an immutable:

```yaml
release:
  release_id: id
  host_contract_version: semver
  block_lock: [block-id@version + digest]
  runtime_units: [unit-id + image/package digest]
  data_resource_versions: [resource-id + schema/api version]
  migration_plan: expand-contract receipt refs
  event_contract_versions: [event-type@version]
  read_model_versions: [projection + source cursor]
  settings_snapshot: digest
  navigation_snapshot: digest
  connector_policy_snapshot: digest
  secret_refs: [ref + version, never plaintext]
  resource_budget_id: budget-id
  verification_receipts: [receipt-id]
  prior_known_good: release-id | null
```

### Upgrade sequence

1. Resolve the new block lock against host runtime, authority, data ownership,
   event, settings, navigation and resource contracts.
2. Run the no-dual-writer and migration-owner checks before any DDL.
3. Add additive schema/API/event compatibility (expand); deploy code that can
   read both versions if necessary.
4. Rebuild or catch up read models from the event cursor; do not copy canonical
   data into a second writable table.
5. Register new routes/settings as shadow or disabled until health and policy
   checks pass; preserve the old route owner until cutover.
6. Pin a new immutable release and perform a canary for the declared tenant or
   workspace scope. Observe resource and projection budgets.
7. Cut over atomically at the route/artifact/config layer, then contract old
   schema/API only after all dependent releases have moved.

### Rollback is multi-object, not just a Git revert

Each object has its own recovery operation:

| Object | Rollback/recovery action | Boundary |
|---|---|---|
| Host/block artifact | Route to prior immutable package/image; quarantine bad release. | Does not undo data or external effects. |
| Host settings/navigation | Restore prior versioned snapshot and registration owner. | Audited; current user sessions may need refresh. |
| Owned schema/API | Stop contraction; use compatibility view or forward compensating migration. | Never assume a down migration restores business data. |
| Read model | Pin prior projection or rebuild from event cursor/log. | Canonical donor data is untouched. |
| Donor service | Disable launch/route or restore prior donor image/config. | Donor-native recovery remains donor-owned. |
| Connector policy/config | Disable action, revoke/rotate connection, restore prior policy. | An already-sent email/payment/API call cannot be unsent; record it. |
| Secrets | Revoke compromised version, rotate, rebind `secret_ref`. | Do not restore plaintext from a backup. |
| Worker/scheduler | Pause queues, cancel/lease-expire safe jobs, replay only idempotent work. | External side effects need receipts/compensation. |

The release controller records an object-level verdict (`restored`, `forward_fixed`,
`disabled`, `manual_action_required`) and refuses to call a partially restored
release “rolled back.” A full rollback requires every required object to have a
known recovery result; external side effects are explicitly non-atomic.

## Licence and reimplementation cost

This contract records rights and cost without turning licence into an automatic
quality verdict:

| Shape | Typical reuse cost | Typical reimplementation cost | Host decision pressure |
|---|---|---|---|
| `intact_service` | Adapter, identity/context, route, health and release integration; upstream obligations remain. | High for a mature product/engine. | Keep separate when upstream maintenance or security value outweighs coupling. |
| `embedded_module` / `microfrontend` | Context/provider, token, route and data seams; native behavior can be preserved. | Medium to high depending on state/realtime closure. | Choose only with a closed mount and error boundary. |
| `extracted_package` | Dependency closure, token/data ports and adaptation receipts. | Medium for a bounded feature; high if the boundary is false. | Prefer a package when no separate process or donor migration is needed. |
| `engine` | Typed API/event adapter, worker/runtime budget and authority policy. | High for workflow/search/connector engines. | Do not rewrite a security-critical or deeply engineered engine casually. |
| `reference_only` | Read and record an independent behavior/specification. | Cost is paid in clean-room implementation, but no source is reproduced. | A productive result when code reuse or obligations are not acceptable. |

The rights state, source identity, obligation boundary and reimplementation estimate
are separate fields. A permissive licence does not compensate for unprovable
tenancy or rollback; a copyleft or unclear source is not silently copied, but may
still be retained as a service/reference subject to the appropriate review.

## Representative host traces

These traces are intentionally **not recipe compositions**. They exercise the
three boundary shapes that a future product—regardless of which overlay it uses—
must support. Full machine-readable fixtures and resource arithmetic live in
`worked-compositions.json`.

### Service trace: `trace-intact-service`

```text
host session/context
  -> module-specific signed handoff
  -> sidecar service route
  -> donor-owned data + native migration owner
  -> typed API/event adapter
  -> host event inbox -> read_model projection
  -> host search/notification/audit registration
```

The host owns the launch, route registration, external-ID mapping, event
projection and recovery surface. The service owns its native session/data and
may retain contextual secondary navigation. A service stop is a typed degraded
state, not a cross-schema write or a new login authority.

### Module trace: `trace-embedded-module`

```text
host route/context
  -> package or static microfrontend mount
  -> provider/context bridge + host error boundary
  -> typed data port (host-owned or explicitly donor-owned)
  -> host settings/navigation/search registrations
```

The module adds no listener when it is a package/static mount. A module that needs
realtime or a backend must declare that as a separate service/worker dependency;
it cannot hide it in the browser bundle. The module's UI state and token scope
are bounded to its mount, and the host cannot claim donor data ownership merely
because the UI is mounted natively.

### Engine trace: `trace-engine`

```text
host capability port
  -> engine API or pooled worker
  -> typed action/event contract
  -> idempotent result receipt
  -> host-owned read model/audit/notification
```

An engine has no implied global route or user-facing settings. It receives a
scoped service token and explicit data/resource references. External side effects
require an approval and idempotency key. Analytics/search/workflow engines may
be shared by multiple blocks only when their queue, authority, schema and
upgrade contracts remain independently attributable.

## Pre-pilot gates

These are mandatory design gates before any product pilot selects a block. They
are not claimed to pass in this research packet.

### Host and authority gates

1. Block identity, immutable revision, packaging mode and license/obligation
   state are recorded.
2. Host runtime profile, route owner, health path, mount/error surface and
   unavailable behavior are declared.
3. Tenant/workspace/principal/client-account context is typed and tested for
   missing, mismatched and revoked scopes.
4. Authority ceiling, action class, approval, idempotency and recovery are
   explicit; no composition expands authority by union.
5. Settings/search/notifications/create/navigation registrations have exactly one
   host route/launcher owner and owner-scoped writes.

### Data ownership gates

1. Every stateful resource names exactly one authority owner and at most one
   writer.
2. Every physical table/schema/object namespace/event stream names exactly one
   migration or producer owner; derived read models name one projection writer.
3. Tenant keys and isolation mechanism are explicit; a `tenant_id` column without
   a policy/negative test is not proof.
4. Postgres cluster/database/schema placement passes the compatibility checklist;
   donor dynamic DDL and `public` assumptions are documented as exceptions.
5. No generated/client block holds host migration credentials or arbitrary DSNs;
   data access is through typed ports, qualified names and allow-lists.
6. Cross-module joins use canonical IDs, mapping resources, APIs or events; no
   shared-table mutation and no silent duplicate canonical records.
7. Event consumers are idempotent, replayable and staleness-visible; read models
   can be rebuilt without writing donor truth.
8. Backup, deletion/retention, restore and forward-repair owners are named for
   each resource.

### Resource and operations gates

1. Every runtime unit and queue has a design budget or an explicit `unknown`;
   zero is never a substitute for an unmeasured value.
2. Process, RAM, CPU, storage, queue and connection arithmetic satisfies the
   inequalities in this packet with explicit reserve.
3. Runtime units have bounded concurrency, retry, lease, timeout, egress and
   dead-letter behavior; schedulers dispatch idempotent jobs to pools.
4. Managed dependency limits and cost/SLO ownership are recorded separately from
   application process counts.
5. Traces/logs/metrics/audit receipts correlate tenant/workspace, block, runtime
   unit, resource, release and action without exposing secrets.
6. Upgrade and rollback objects cover code, schema, read model, route/settings,
   donor service, worker/scheduler, connector policy and secret versions.
7. A release cannot be called green from a preview/build check alone; its
   production boundary, recovery receipt and current resource budget are known.

## Falsifiers and unresolved questions

The contract is falsified or must be narrowed if any of these occurs in a future
authorized pilot:

- a block can write a resource without appearing as its sole declared writer;
- a route, launcher, migration ledger or event stream has two owners;
- a client/workspace context can be omitted or swapped without a denied result;
- a composed action exceeds the host/block/approval authority intersection;
- a read model requires cross-schema mutation or cannot replay idempotently;
- the same connection/secret is visible across tenant scopes;
- package/microfrontend mounts require hidden listeners or donor global state;
- a service/module/engine cannot be upgraded or disabled without invalidating
  unrelated block records;
- measured p95/p99 resources exceed the declared budget after reserve, or process
  count grows one-for-one with every logical block despite pooling;
- a release is labelled rolled back while an object-level recovery is still
  unknown or an external side effect is unaccounted for;
- one of the four recipe overlays requires a different host identity/tenancy/data
  contract rather than a domain-level extension.

Still unknown before a pilot:

- the minimum event envelope version that safely carries tenant and client scope;
- whether one Postgres cluster can host each selected donor without extension,
  collation or dynamic-DDL conflicts;
- the process/RAM/connection distribution for representative package, module,
  service and engine blocks in production mode;
- whether a pooled worker can meet the latency and isolation SLOs for mixed job
  classes without separate pools;
- whether one settings and navigation registry is sufficient for all four recipe
  overlays without donor-specific surgery;
- the exact cost and legal treatment of each chosen source and service boundary;
- whether multi-object rollback can meet the required recovery period when an
  external connector has already produced an irreversible side effect.

## Source register

Required project state and hub inputs:

- `AGENTS.md`
- `CURRENT_STATE.md`
- `knowledge/README.md`
- `knowledge/00-MASTER-SYNTHESIS.md`
- `knowledge/07-DECISION-TIMELINE.md`
- `knowledge/01-DOMAIN-MAP.md`
- `knowledge/02-ASSUMPTION-LEDGER.md`
- `knowledge/04-OPEN-QUESTIONS.md`
- `knowledge/05-EXPERIMENT-ROADMAP.md`
- `knowledge/block-hub/README.md`
- `knowledge/block-hub/block-register.json`
- `knowledge/block-hub/composition-recipes.json`

Direct host/runtime/data precedents:

- `architecture/feature-matrix/ARCHITECTURE.md`
- `research/packs/source-files/reusable-block-framework-report.md`
- `research/actionmodel-builder-research-2026-08-26/phase-8/lanes/01-universal-block-framework/outputs/universal-block-framework.md`
- `research/actionmodel-builder-research-2026-08-26/phase-8/lanes/04-repo-to-block-mechanics/outputs/repo-to-block-pipeline.md`
- `research/actionmodel-builder-research-2026-08-26/phase-8/lanes/05-composition-agent-evals/outputs/composition-agent-architecture.md`
- `research/actionmodel-builder-research-2026-08-26/phase-8/external-opus-inputs/connectors/connector-research-summary.md`
- `research/openconnector-spike-2026-08-27.md`
- `apps/SISOCRM/integrations/contracts/auth-handoff.schema.json`
- `apps/SISOCRM/integrations/contracts/event-envelope.schema.json`
- `apps/SISOCRM/integrations/contracts/module-manifest.schema.json`
- `apps/SISOCRM/integrations/contracts/runtime-baseline.json`
- `apps/SISOCRM/integrations/combined-route-runtime.json`
- `apps/SISOCRM/verticals/business-broker/AUTH-AND-CONTEXT-INTEGRATION-CONTRACT.md`
- `apps/SISOCRM/verticals/business-broker/OWNERSHIP-AND-DATA-LAYER-DECISIONS.md`
- `apps/SISOCRM/verticals/business-broker/WIRING-SPEC-DONOR-INTEGRATION.md`
- `apps/SISOCRM/verticals/business-broker/BUILD-INTEGRATION-CONTRACT.md`
- `apps/SISOCRM/verticals/business-broker/TEABLE-ABSORPTION-PLAN.md`

The cited sources contain measured precedents, design proposals and unresolved
questions. This packet preserves those distinctions and does not promote a
precedent to a product capability.
