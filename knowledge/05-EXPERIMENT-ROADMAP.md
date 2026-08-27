# Evidence-producing experiment roadmap

The next work should turn assumptions into measurements. It should not restart a perpetual breadth loop.

## Loop 0 — contract surgery, no application build

**Goal:** prove the information model can represent heterogeneous reuse cleanly.

Produce synthetic records for:

1. an intact service;
2. an embedded/transplanted UI subsystem;
3. an extracted package;
4. one Actionist-owned capability;
5. one connector.

For each, write only:

- `CapabilityContract`;
- `PackagingProfile`;
- `HostContract` requirements;
- `DataResourceContract`;
- `QualificationDossier` stub;
- `RegistryRecord`.

**Pass:** the composition solver can determine compatibility without implementation source or a giant monolithic contract.  
**Fail:** required semantics remain hidden in prose or runtime-specific fields leak into the capability interface.

## Loop 1 — choose the pilot from outcomes

Score the 17 industries against:

- painful repeated workflow;
- accessible first client;
- measurable economic result;
- archetype reuse across other industries;
- availability of one intact engine and one adaptable product surface;
- bounded data/authority risk;
- ability to complete an end-to-end workflow within weeks.

Prefer a case/workflow or client-portal product because research indicates strong demand and thin template supply. Keep a generic dashboard as a control, not the target.

Candidate pilot shapes to evaluate:

- accounting client document/close workflow;
- construction job/change-order coordination;
- agency/client portal and approval workflow;
- education enrolment/attendance communication;
- service-business lead-to-job operations.

Do not select solely from the public catalogue. Select where an actual client conversation and test data can eventually exist.

## Loop 2 — data-plane bake-off

Use the same bounded workflow against four bindings:

1. Actionist-owned Postgres through typed ports;
2. donor-native service API;
3. event-fed Actionist read model;
4. SQLite/libSQL for local/ephemeral state where applicable.

Measure:

- implementation/adaptation hours;
- query and transaction expressiveness;
- tenancy clarity;
- migration ownership;
- rollback/recovery;
- testability;
- runtime burden;
- amount of storage-specific logic leaking into the capability.

**Decision:** choose Postgres defaults by workload class, not ideology.

## Loop 3 — host absorption pilot

Take one mature donor application and measure the real normalization delta:

| Category | Measure |
|---|---|
| Branding | Files/routes/assets changed |
| Identity | Host-session seam and donor auth removed/disabled |
| Onboarding | Donor onboarding replaced or suppressed |
| Settings | Settings remounted into Actionist hierarchy |
| Navigation | Routes/launchers integrated without duplicate silos |
| Data | Ownership, migrations, events and read models |
| UI | Token bridge, state coverage and visual coherence |
| Operations | Processes, jobs, backups, upgrades and rollback |

This produces the first honest “1–2% adaptation” distribution.

## Loop 4 — mixed-shape application composition

Build one narrow workflow with:

- one intact service;
- one extracted/transplanted capability;
- one custom domain delta;
- one external connector;
- shared host identity/settings/navigation;
- one owned Postgres resource;
- one donor-owned data resource;
- one release/rollback manifest.

Compare three strategies:

1. focused custom build;
2. direct model generation;
3. plan-then-fill assembly from registered capabilities.

Measure outcome success, elapsed time, tokens, changed code, repair loops, defects, runtime burden and maintainability.

## Loop 5 — capability-ranking feedback

After the pilot, update source ranking using observed variables:

- time to understand;
- time to first working seam;
- adaptation surface by category;
- dependency/runtime burden;
- test and workflow pass rate;
- upgrade path;
- product quality;
- client outcome contribution.

Only then should the system select the “top 100” or “top 1,000.” The ranked shelf should optimize observed reuse value, not metadata popularity.

## Stop and kill rules

Stop or redesign if:

- every donor requires bespoke auth/data/navigation surgery with no reusable adapter pattern;
- plan-then-fill costs more time than a focused custom build across representative pilots;
- typed contracts cannot hide storage/runtime differences without becoming donor-specific;
- composed UX remains visibly incoherent after token and shell adaptation;
- operational burden grows approximately linearly with each reused service;
- production outcomes do not improve retrieval or reduce later build effort.

## Definition of learning

Each loop must end with:

1. assumptions confirmed, rejected or still unknown;
2. exact measurements and receipts;
3. contract changes forced by evidence;
4. reusable adaptation recipes;
5. newly discovered failure modes;
6. a decision to proceed, narrow, redesign or stop.

The framework advances only when the loop changes what we know.
