# Eval harness design — Block Contract `eval`, build-level scoring, and the cost metric

Date: 2026-08-27 · Design document · Research + design only · no implementation, no schema edits

Scope: define what satisfies the `eval` field that `design/block-contract.schema.json` marks
REQUIRED on every block (line 7: `"required": ["id", "kind", "provenance", "stack_contract",
"provides", "eval"]`), design the build-level adversarial protocol for a composed app, define the
cost-per-successful-build metric, and phase the work.

Evidence rules from `feature-matrix/CONTRACT.md` bind this document: every claim about a source
harness carries the file path read, and DIRECT (observed) is distinguished from INFERRED.

---

## 0. Verdict on the two source harnesses, before anything is designed

This matters first, because one of the two turned out to be substantially less than the research
pass assumed, and that changes the design.

### astryx `internal/vibe-tests/` — REAL. Lift the evaluator design, not the harness.

DIRECT. 193 blobs under `internal/vibe-tests/`, including 1,100 lines of deterministic scoring in
`internal/vibe-tests/src/universal-eval.ts`, a 42,711-byte frozen prompt battery at
`internal/vibe-tests/test-sets/default.json`, and a 66-image ideal-screenshot corpus under
`internal/vibe-tests/ideals/`. MIT, 12,473 stars, pushed 2026-08-27. This is a working, maintained
harness, not a scaffold.

```
$ gh api "repos/facebook/astryx/git/trees/HEAD?recursive=1" --jq '[.tree[] | select(.type=="blob" and (.path|startswith("internal/vibe-tests/")))] | length'
193
$ gh api repos/facebook/astryx --jq '.license.spdx_id'
MIT
```

### App-Builder-Benchmark — REAL CODE, ZERO REAL RUNS. Lift the protocol, not the results.

This needs saying plainly, because `SYNTHESIS.md` line 103-106 describes it as "a real harness,
scoring and frozen prompt pool" that "drops straight into the `eval` field". The first half is
true. The second half overstates what is there.

**What is real (DIRECT):** the scorer at `scoring/score.mjs` is genuine executable code and its
critical-failure cap genuinely works. Verified by running it locally on both shipped fixtures:

```
$ node abb/scoring/score.mjs abb/results/EXAMPLE-noship/run.json
Intent fidelity          20/20
Core workflows           25/25
Correction burden        20/20
Change resilience        15/15
Security                  5/15
Accessibility             5/5

UNCAPPED:                90/100
TOTAL:                   0/100
...
DECISION: NO_SHIP
EXIT=1

$ node abb/scoring/score.mjs abb/results/EXAMPLE-ship/run.json
UNCAPPED:                88/100
TOTAL:                   88/100
DECISION: SHIP
EXIT=0
```

A 90/100 app is forced to 0/100 and exit code 1 by one `cross_tenant_leakage` entry. The
mechanism the README claims is the mechanism the code implements. The prompt pool is real and
frozen: 4 categories × 3 candidates = 12 prompts, each carrying `acceptanceChecks` and a
`changeRequest`.

**What is not there (DIRECT):**

```
$ gh api repos/guardiavault-oss/App-Builder-Benchmark --jq '{stars,size,created,pushed}'
{"created":"2026-07-09T05:07:15Z","pushed":"2026-07-09T05:25:38Z","size":48,"stars":0}

$ gh api "repos/.../commits" --jq '.[] | "\(.sha[0:7]) \(.commit.author.date)"'
9a95eb9 2026-07-09T05:25:38Z      (31 commits total)
b665c7f 2026-07-09T05:08:59Z

$ gh api "repos/.../contents/results" --jq '.[].name'
EXAMPLE-noship
EXAMPLE-ship

$ gh api "repos/.../actions/runs" --jq '.workflow_runs[] | "\(.conclusion)"'
failure
failure
failure
failure

$ gh api repos/guardiavault-oss/vibeflo --jq '.full_name'
{"message":"Not Found", "status":"404"}
```

Thirty-one commits inside a 17-minute window. Zero real results — both `results/` entries are
fixtures. All four CI runs failed. `selection.commit.json` still reads
`"status": "UNCOMMITTED_FOR_SEASON_ZERO"` with `"round": "<future-round>"`. And the single frozen
entrant in `entrants.frozen.json` — `guardiavault-oss/vibeflo`, pinned to commit
`d5a3905` — **does not exist**; the repo 404s.

**Classification: a well-specified protocol that has never been executed against a real builder.**
It is not vaporware in the dishonest sense — the code does what it says, the SPEC is coherent, and
the author was explicit that Season Zero had not started. But it carries zero empirical validation.

**What this changes:** the design must not treat ABB as a proven harness to adopt. It is a
*protocol specification* to adapt, and every operational assumption in it (that adapters are
writable per builder, that three correction rounds is the right cap, that human dimension-scoring
is tractable at scale) is untested. Where this document lifts from ABB, it lifts the *shape* and
supplies our own execution.

### The load-bearing structural finding

DIRECT, and it drives the whole block-level design. In ABB, **the harness and the scorer are not
connected.** `harness/contract-runner.mjs` produces per-check booleans and writes
`contract-results.json`. `scoring/score.mjs` reads a hand-authored `run.json` whose `scoring`
object contains six human-assigned integers. Nothing computes `intentFidelity: 20` from harness
output — `schema/result.schema.json` simply requires the integer to be present and in range.

That means ABB's 100-point score is a **human judgement recorded in a machine-checkable envelope**,
not a machine-computed score. The only genuinely automatic parts are the range validation and the
critical-failure cap.

For our purposes that is the key lesson: the registry gate must be built on the parts that are
mechanical (boolean checks, the cap, exit codes), and must not depend on the parts that are
editorial (0-20 subjective dimensions). A block-level `eval` that required a human to assign six
integers would not be a gate; it would be a review queue.

astryx made the opposite choice and it is the better one for us. `universal-eval.ts` line 7-8
states its own contract: "All analyzers are pure functions: (code, target) → score. No LLM calls —
deterministic and fast." Its correctness dimension is anchored to a real compiler:
`scoreTscErrors` computes `Math.max(0, 100 - tscResult.errorCount * 15)` from `build-errors.json`
(`universal-eval.ts:104`). That number is reproducible by anyone with the same code.

---

## 1. Block-level eval — what fills the `eval` field

### 1.1 The design constraint

The current schema (`block-contract.schema.json:163-183`) requires only `build_cmd` and
`smoke_test`, both free-form strings. Two problems for a registry gate:

- A string command is not a *test case*. It cannot say what was asserted, so a block can pass by
  running `true`. There is no way to tell a real proof from a nominal one by reading the record.
- There is no provenance on the eval itself. `provenance` covers where the *code* came from; the
  schema has no field saying who wrote the test, or whether the block author graded their own work.

Both are fixable without abandoning the existing shape. `build_cmd` and `smoke_test` stay; the
addition is a structured `cases` array and an `eval_provenance` object.

### 1.2 The eval record — four tiers, only three of which gate

Every block eval has four tiers. Tiers 0-2 are mechanical and gate admission. Tier 3 is advisory
and never blocks.

**Tier 0 — Builds.** `build_cmd` exits 0 inside the base scaffold. Binary. This already exists in
the schema and needs no change beyond being run.

**Tier 1 — Typechecks clean.** Adapted from astryx. `tsc --noEmit` over the composed scaffold+block
produces zero errors. astryx penalises 15 points per error and floors at 0
(`universal-eval.ts:104`); at block level we do not need a gradient — a block entering the registry
with type errors should simply not enter. **Threshold: `errorCount === 0`.**

DIRECT on the mechanism, INFERRED on the threshold: astryx uses a gradient because it is *comparing*
design systems, where relative score is the output. We are *admitting or rejecting*, where a
boolean is the output. Same measurement, different decision rule.

**Tier 2 — Behavioural cases pass.** This is the new part and the reason the schema needs
extending. Each case is a named assertion with a machine-readable outcome, structurally borrowed
from ABB's `acceptanceChecks` (`prompts/pool.json`) and its runner's return contract
(`harness/contract-runner.mjs`, `normalizeCheckResult`), which requires every check to return
`{ passed: boolean, observed: string }` and **rejects a check that does not describe what it
observed**:

```js
if (typeof value.passed !== "boolean") throw new Error(`${check.id} must return { passed: boolean, observed: string }`)
if (typeof value.observed !== "string" || !value.observed.trim()) throw new Error(`${check.id} must describe what was observed`)
```

That `observed` requirement is the single best idea in ABB and it is free to adopt. It makes
"passed: true" unfalsifiable-by-default impossible: a check must state what it saw.

Cases carry a `kind` that determines whether failure is fatal:

- `kind: "functional"` — normal assertion. Failure = block rejected.
- `kind: "isolation"` — a tenant/authorization assertion. Failure = block rejected **and** flagged
  `NO_SHIP` in the registry, by the same forcing rule as build level (§2). A block that leaks
  across tenants is not a low-scoring block; it is a disqualified one.

**Tier 3 — Advisory dimensions.** astryx's other four dimensions (accessibility, code quality,
efficiency, maintainability — `universal-eval.ts:1027-1033`) are recorded as numbers and never
gate. They are useful for ranking two candidate blocks that both pass; they are not fit to reject
on, because astryx's own README documents deliberate scoring asymmetries between targets
(`internal/vibe-tests/README.md`, "Known Accepted Asymmetries"). A metric its own authors call
slightly unfair is a comparison instrument, not a gate.

### 1.3 Eval provenance — who graded the homework

Not present in either source harness, and it is the gap that matters most for a registry that will
eventually be fed by an agent. ABB addresses the analogous problem socially (freeze entrants before
the beacon; public submissions; "run the protocol, publish the evidence"). A registry needs it
structurally.

Three fields:

- `authored_by`: `harvester` | `registry` | `upstream` — who wrote the cases. `upstream` means the
  cases came from the source repo's own test suite, which is the strongest form.
- `upstream_tests_found`: boolean — did the source repo ship tests for this code at all? A block
  harvested from a repo with no tests, whose eval was written by the same agent that harvested it,
  is the highest-risk combination in the registry and should be visible as such.
- `graded_at` / `graded_commit`: when the eval last actually ran, against which block commit. A
  stale pass is not a pass. This is the structural version of the CONTRACT.md audit note that
  "receipts age — issue-state citations must carry their observation date."

### 1.4 Proposed schema delta (ON PAPER — do not apply)

Against `block-contract.schema.json:163-183`. `build_cmd`, `smoke_test`, `screenshot_baseline` and
`admission` are unchanged; `cases` and `eval_provenance` are added, and `cases` becomes required.

```json
"eval": {
  "type": "object",
  "required": ["build_cmd", "smoke_test", "cases", "eval_provenance"],
  "properties": {
    "build_cmd":  { "type": "string" },
    "smoke_test": { "type": "string" },
    "typecheck": {
      "type": "object",
      "properties": {
        "cmd":                { "type": "string", "default": "tsc --noEmit" },
        "max_errors":         { "type": "integer", "const": 0 }
      }
    },
    "cases": {
      "type": "array", "minItems": 1,
      "items": {
        "type": "object",
        "required": ["id", "kind", "assertion", "runner"],
        "additionalProperties": false,
        "properties": {
          "id":        { "type": "string", "pattern": "^[a-z0-9-]+\\.[0-9]+$" },
          "kind":      { "enum": ["functional", "isolation"] },
          "assertion": { "type": "string", "minLength": 10,
                         "description": "Plain-language statement of what must be true. Frozen; the runner may not rewrite it." },
          "runner":    { "enum": ["node", "playwright", "sql"] },
          "fixture":   { "type": "string", "description": "Seed data / tenant fixture the case needs" }
        }
      }
    },
    "eval_provenance": {
      "type": "object",
      "required": ["authored_by", "upstream_tests_found"],
      "additionalProperties": false,
      "properties": {
        "authored_by":          { "enum": ["harvester", "registry", "upstream"] },
        "upstream_tests_found": { "type": "boolean" },
        "graded_at":            { "type": "string", "format": "date-time" },
        "graded_commit":        { "type": "string", "pattern": "^[0-9a-f]{7,40}$" }
      }
    },
    "screenshot_baseline": { "type": "string" },
    "admission": { "…unchanged…" }
  }
}
```

Note one thing the delta deliberately does **not** do: it adds no 0-100 dimension scores to the
block record. That is the ABB lesson from §0 — scores that a human assigns are not a gate.

### 1.5 The registry gate, as a command

The gate is `exit 0` from a single runner over one block record, in this order, failing fast:

1. `build_cmd` exits 0 → else `FAIL_BUILD`
2. `typecheck.cmd` reports 0 errors → else `FAIL_TYPES`
3. every `cases[]` entry returns `{passed: true, observed: "…"}` → else `FAIL_CASE:<id>`
4. any failing case with `kind: "isolation"` → `NO_SHIP:<id>`, which is distinct from and worse
   than `FAIL_CASE` (it blocks the block *and* records a security finding)
5. `eval_provenance.graded_commit` equals the block's current commit → else `STALE_EVAL`

Exit codes, borrowed from ABB's convention where the scorer exits 1 specifically on `NO_SHIP`
(`scoring/score.mjs`, `process.exit(out.decision === "SHIP" ? 0 : 1)`): `0` admit, `1` no-ship,
`2` ordinary failure, `3` stale.

---

## 2. Worked example — the Grist CRUD block, end to end

The block: an editable CRUD surface over a platform-owned Grist table, embedded in a generated app.
Grist is the WRAP verdict in `feature-matrix/PLATFORM-WRAP-MATRIX.md:187` — "the one that clears
every gate" — because `?style=singlePage` is editable and follows Grist access rules
(`PLATFORM-WRAP-MATRIX.md:197`, DIRECT), on Apache-2.0 we may host commercially.

Re-verified live at write time:

```
$ gh api repos/gristlabs/grist-core --jq '"\(.full_name) license=\(.license.spdx_id) stars=\(.stargazers_count) pushed=\(.pushed_at)"'
gristlabs/grist-core license=Apache-2.0 stars=11624 pushed=2026-08-26T14:34:41Z
$ gh api repos/gristlabs/grist-ee --jq '.full_name'
{"message":"Not Found", "status":"404"}
```

This block is the right first worked example precisely because it is where our **RLS gap** is
load-bearing. `SYNTHESIS.md:151` records that no pool repo out of 500 implements row security for
generated apps over a platform-owned Postgres. The Grist wrap does not eliminate that problem — it
relocates it into Grist access rules. Which means the isolation cases below are not ceremonial;
they are testing the exact mechanism the moat rests on, in the one place we can test it early.

```json
{
  "id": "siso/grist-crud@0.1.0",
  "kind": "feature",
  "eval": {
    "build_cmd": "pnpm --filter @siso/block-grist-crud build",
    "smoke_test": "pnpm --filter @siso/block-grist-crud test:smoke",
    "typecheck": { "cmd": "tsc --noEmit -p tsconfig.block.json", "max_errors": 0 },

    "cases": [
      {
        "id": "grist-crud.1",
        "kind": "functional",
        "assertion": "A row created through the embedded editable view appears in the underlying Grist table via the REST API within one poll interval.",
        "runner": "playwright",
        "fixture": "tenant-a-seed"
      },
      {
        "id": "grist-crud.2",
        "kind": "functional",
        "assertion": "Editing a cell in the embedded view persists after a full page reload.",
        "runner": "playwright",
        "fixture": "tenant-a-seed"
      },
      {
        "id": "grist-crud.3",
        "kind": "functional",
        "assertion": "Deleting a row removes it from the API listing and the row count decrements by exactly one.",
        "runner": "playwright",
        "fixture": "tenant-a-seed"
      },
      {
        "id": "grist-crud.4",
        "kind": "functional",
        "assertion": "The block renders correctly with every design token slot reassigned to non-default values.",
        "runner": "playwright",
        "fixture": "token-shuffle"
      },
      {
        "id": "grist-crud.5",
        "kind": "isolation",
        "assertion": "Tenant B, authenticated as itself, cannot read any row belonging to Tenant A through the embedded view.",
        "runner": "playwright",
        "fixture": "two-tenant-seed"
      },
      {
        "id": "grist-crud.6",
        "kind": "isolation",
        "assertion": "Substituting Tenant A's document identifier into Tenant B's embed URL returns an authorization error, not Tenant A's data.",
        "runner": "playwright",
        "fixture": "two-tenant-seed"
      },
      {
        "id": "grist-crud.7",
        "kind": "isolation",
        "assertion": "A direct REST call to the Grist API with Tenant B's credentials against Tenant A's table is refused by access rules, with no row payload in the response body.",
        "runner": "node",
        "fixture": "two-tenant-seed"
      }
    ],

    "eval_provenance": {
      "authored_by": "registry",
      "upstream_tests_found": true,
      "graded_at": "2026-08-27T00:00:00Z",
      "graded_commit": "0000000"
    },

    "screenshot_baseline": "eval/baselines/grist-crud-default.png"
  }
}
```

Three things to notice about this record.

**Cases 5-7 are the block.** A Grist CRUD block that renders beautifully and leaks Tenant A's rows
to Tenant B is worth less than nothing — it is a liability shipped to a client. Marking them
`isolation` means a failure returns `NO_SHIP`, not a low score. This is ABB's forcing rule applied
one level down, and it is the direct mechanical expression of the security asymmetry the teardown
identified as our advantage.

**Case 7 tests the API path, not just the UI path.** ABB's C1 acceptance checks include exactly
this distinction — "Changing a URL or direct object identifier does not bypass owner isolation"
(`prompts/pool.json`, C1) — and its own `EXAMPLE-noship` fixture is a 90/100 app that failed on
precisely that: "Owner A could open Owner B's maintenance request by changing the request
identifier in the URL" (`results/EXAMPLE-noship/run.json`). Testing only the rendered UI would have
scored that app 90.

**Case 4 exists because of the token contract.** `block-contract.schema.json:158-162` says the
block "must render correctly under ANY value assignment" of the token slots it consumes. That is a
stated requirement with no test behind it; case 4 is the test. INFERRED that a shuffle fixture is
the right shape — this is our design decision, not lifted from either source.

---

## 3. Build-level eval — the adversarial protocol for a composed app

### 3.1 What lifts from ABB as-is

DIRECT, all four verified in source:

1. **The critical-failure cap.** `scoring/score.mjs` computes `uncapped`, filters
   `criticalFailures` for `present === true`, and sets `total = capped ? 0 : uncapped` with
   `decision: "NO_SHIP"`. Both numbers stay visible. This is ~15 lines and works; adopt verbatim.
2. **Publishing uncapped alongside total.** `scoring/scoring.md`: keeping both "prevents a critical
   failure from hiding the app's other strengths while refusing to call an unsafe app shippable."
   That is the right posture for a client-facing report — Cena can see the app was good *and* that
   it must not ship.
3. **The frozen-assertion / swappable-adapter split.** `harness/ARCHITECTURE.md` §4 is candid about
   why: "Claiming one hard-coded test file can operate all of them would be fake rigor." Assertions
   central and frozen, locators per-target and published.
4. **`observed` as a required string on every check** (`contract-runner.mjs`, above). Cheap,
   and it is what stops a check from silently asserting nothing.

### 3.2 What must be rewritten for our deploy target

**The six 0-N dimensions and the whole `run.json` grading envelope.** As established in §0, these
are human-assigned. A benchmark comparing competitors once a season can afford an editor; a build
gate that fires on every agent-assembled app cannot. Replace `intentFidelity`, `coreWorkflows`,
`changeResilience`, and `accessibility` with mechanical equivalents: acceptance-check pass rate for
core workflows, re-run of the original check set after the change request for change resilience,
and an axe-core run for accessibility. `correctionBurden` is already mechanical if the agent loop
counts its own rounds (§4). `intentFidelity` is the one that genuinely resists automation — hold it
as an advisory LLM-judged number that never gates, mirroring how astryx keeps
`design-judge.ts` separate from the deterministic `universal-eval.ts`.

**The free-plan league and the public beacon.** ABB SPEC §3 and §5 exist to make a *competitive*
benchmark ungameable by an adversarial third party. We are testing our own builder against our own
blocks. The beacon adds ceremony without adding truth here. Keep prompt-pool freezing (it stops us
tuning the builder to the test); drop drand, entrant freezing, and the free-quota rules.

**The three-round correction cap.** ABB SPEC §6 Phase 3 caps at three. Untested — no run has ever
exercised it. Adopt the *shape* (bounded repair rounds, each counted) and treat 3 as a starting
parameter to calibrate, not a finding.

**Critical-failure detection must become active, not observational.** ABB's `criticalFailures` is
an array a human fills in after watching a recording. Ours must be produced by adversarial probes
that run unattended: authenticate as Tenant B, attempt to read Tenant A's rows through both UI and
API, attempt identifier substitution, attempt unauthorized mutation. This is the piece with no
prior art in either harness and it is the piece the moat depends on. `SYNTHESIS.md:151` — nothing in
500 repos does this.

**Deploy target.** ABB assumes a reachable `APP_URL` from a hosted builder and takes it as an env
var (`contract-runner.mjs`, `requireEnv("APP_URL")`). We control the deploy target, so the harness
should provision an ephemeral instance, seed two tenants, run, and tear down. That makes the
two-tenant fixture reliable rather than something a human sets up by hand — which is the single
biggest reason ABB's protocol has never actually run.

### 3.3 Critical-failure codes

ABB's six (`scoring/scoring.md`) transfer almost unchanged: `cross_tenant_leakage`,
`cross_user_leakage`, `authentication_bypass`, `unauthorized_destructive_mutation`,
`fake_core_functionality`, `fundamental_wrong_product`. The last two are LLM-judged and should
remain advisory until we have evidence a judge calls them reliably. The first four are mechanically
probeable and should force `NO_SHIP`.

One addition ours needs that ABB has no concept of: **`block_contract_violation`** — the composed
app contains a block whose registry eval is failing or stale at build time. ABB has no registry, so
no such failure mode.

---

## 4. The economics hook — cost per successful build

### 4.1 The source metric, verified

DIRECT. `get-convex/chef`, Apache-2.0, 4,603 stars. The entire scorer is 13 lines
(`test-kitchen/chefScorer.ts`):

```ts
export async function chefScorer(props: braintrust.EvalScorerArgs<string, ChefResult, void>) {
  return [
    { name: '1/Deploys', score: props.output.success ? 1 / Math.max(1, props.output.numDeploys) : 0 },
    { name: 'isSuccess', score: props.output.success ? 1 : 0 },
  ];
}
```

The design in it: **cost is only meaningful on success.** A failed run scores 0 regardless of how
few deploys it burned, so the metric cannot be gamed by giving up early. And `1/numDeploys` is
already the right shape for a per-build cost ratio.

`test-kitchen/types.ts` shows chef already carries the raw material:

```ts
export type ChefResult = {
  success: boolean;
  numDeploys: number;
  usage: LanguageModelUsage;
  files: Record<string, string>;
};
```

`usage` is the AI SDK's token-usage object. So token accounting and deploy counting are already
adjacent in chef's result type — we are extending a pattern, not inventing one.

### 4.2 Why this metric is the client-facing one

`GAPS-AND-DIFFERENTIATION.md` establishes credit burn as Lovable's leading complaint. Cena's
counter-claim is "cheap per build." Right now that is an assertion. The harness makes it a number,
and the number has to be *per successful build* — cost per attempt is the metric that rewards a
builder for failing fast, which is exactly the wrong incentive.

### 4.3 The fields the harness must emit

Every build run emits a `cost` record. Tokens are broken out by tier because the whole routing
argument depends on cheap tiers carrying bulk work — a single blended token count would hide the
thing being optimised.

```json
"cost": {
  "outcome": "success" | "failure" | "abandoned",

  "model_tokens": {
    "planning":  { "model": "…", "input": 0, "output": 0, "cached_input": 0 },
    "codegen":   { "model": "…", "input": 0, "output": 0, "cached_input": 0 },
    "repair":    { "model": "…", "input": 0, "output": 0, "cached_input": 0 },
    "judge":     { "model": "…", "input": 0, "output": 0, "cached_input": 0 }
  },

  "sandbox_seconds":      0,
  "sandbox_provider":     "e2b",

  "deploys_attempted":    0,
  "deploys_succeeded":    0,
  "repair_rounds":        0,
  "build_errors":         0,
  "eval_runs":            0,

  "usd": {
    "model":   0.0,
    "sandbox": 0.0,
    "total":   0.0,
    "rate_card_version": "2026-08"
  },

  "derived": {
    "cost_per_successful_build": 0.0,
    "deploy_efficiency":         0.0,
    "first_pass_rate":           0.0
  }
}
```

Definitions, so these cannot drift:

- `cost_per_successful_build` = `usd.total / deploys_succeeded`, **null when
  `deploys_succeeded === 0`**. Never 0, never infinity — a failed build has no cost-per-build, and
  recording it as 0 would make the worst runs look best. This is the direct analogue of chef
  scoring 0 on failure.
- `deploy_efficiency` = `1 / max(1, deploys_attempted)` when `outcome === "success"`, else 0.
  chef's metric verbatim.
- `first_pass_rate` = fraction of runs in a suite with `repair_rounds === 0`. This is the honest
  version of "it just works," and it is the number most directly comparable to ABB's correction-
  burden dimension — but computed, not assigned.
- `cached_input` is separate because prompt caching is the main lever on codegen cost, and folding
  it into `input` would make the lever invisible.
- `rate_card_version` because USD figures age. A quoted cost with no rate-card date is the same
  failure the CONTRACT.md audit flagged about undated receipts.

INFERRED: the tier split (planning/codegen/repair/judge) is our design, matching the loop stages
the architecture work already assumes. chef does not break usage down by stage — it records one
`usage` object per run.

---

## 5. Phasing

### Day one — runnable against the FIRST block, before any agent loop exists

The test of whether this is genuinely minimal: it must run today, against one hand-converted block,
with no agent, no sandbox provisioning, and no scoring model. Three things:

1. **A block eval runner.** Reads one block record, runs `build_cmd`, runs `typecheck`, runs each
   `cases[]` entry, exits with the codes in §1.5. Roughly ABB's `contract-runner.mjs` restructured
   to read our block record instead of a prompt pool — the file is 4,317 bytes, so this is small.
2. **A two-tenant Grist fixture.** One Grist instance, two orgs, access rules configured, seed rows
   for each. This is the only real infrastructure day one needs, and it exists to make cases 5-7
   above meaningful. Without it the isolation cases are decorative.
3. **The Grist CRUD block record from §2, actually filled and actually passing.**

Explicitly **not** day one: the 100-point score, the LLM design judge, the beacon, adversarial
build-level probes, the sandbox layer, cost tracking. Day one produces one number that matters:
does the first block admit, yes or no.

Why cost tracking is not day one, despite §4: with no agent loop there are no tokens to count. The
`cost` schema should be *designed* now (it is, above) so the loop emits it from its first run — but
there is nothing to instrument yet.

### Phase 2 — when the agent loop exists

Add cost emission (§4) from the first agent run, so there is no period where builds happen
uninstrumented. Add `correctionBurden`/`repair_rounds` counting. Add the composed-app acceptance-
check runner over a real deploy.

### Phase 3 — the adversarial suite

Add the automated tenant-isolation probes and the `NO_SHIP` forcing rule at build level. Add the
frozen prompt pool for composed apps (our own, ABB-shaped). Add change-resilience re-runs. This is
the phase that produces the claim "our builds are safe by construction, and here is the harness
that proves it" — which is a client-facing asset, not just an internal gate.

### Phase 4 — advisory scoring

astryx-style dimension scores for ranking, the LLM design judge, screenshot-diff gates. Never
gating, always advisory.

---

## 6. Residual risks

**The eval-authorship risk is real and unsolved by any prior art.** Once an agent harvests blocks,
the same system writes the code and the test that proves the code. `eval_provenance.authored_by`
makes that visible but does not fix it. The only real mitigation is `upstream_tests_found: true` —
preferring blocks from repos that shipped their own tests. INFERRED, no source harness addresses
this; ABB's analogue is social (public submission + adversarial challenge), which does not
transfer to an internal registry.

**ABB's protocol is unvalidated.** Everything lifted from it in §3.1 is lifted from code that has
never run against a real builder. The four mechanisms adopted are each small and independently
verifiable, which is why they are safe to take — but no operational parameter from ABB (the
three-round cap, the dimension weights, the category structure) should be treated as calibrated.

**Case 4's token-shuffle fixture may be under-specified.** "Renders correctly under any value
assignment" is easy to state and hard to assert mechanically. Day one should probably narrow it to
a screenshot-diff against a handful of named token sets rather than a genuine shuffle, and the
narrowing should be recorded rather than quietly dropped.

**Grist access rules are the untested load-bearing assumption.** `PLATFORM-WRAP-MATRIX.md:196`
records DIRECT that access rules are in the free Community edition. It does not establish that they
hold under the specific embed path (`?style=singlePage`) with a substituted document identifier —
which is exactly what case 6 asserts. Until that case runs green against a real instance, the
security story of the Grist wrap is INFERRED, and it is the single most valuable thing day one can
convert to DIRECT.

---

## Sources read

| Claim area | File actually opened |
|---|---|
| ABB protocol, phases, critical failures | `guardiavault-oss/App-Builder-Benchmark:SPEC.md` |
| Scorer + NO_SHIP cap (and executed locally) | `…:scoring/score.mjs`, `…:scoring/scoring.md` |
| Human-assigned dimensions | `…:schema/result.schema.json`, `…:results/EXAMPLE-noship/run.json`, `…:results/EXAMPLE-ship/run.json` |
| Check return contract, adapter boundary | `…:harness/contract-runner.mjs`, `…:harness/adapters/template.mjs`, `…:harness/ARCHITECTURE.md` |
| Neutral evidence collection | `…:harness/tests/evidence.spec.mjs` |
| Frozen prompts, C1 acceptance checks | `…:prompts/pool.json` |
| Never-run status | `…:entrants.frozen.json`, `…:selection.commit.json`, `gh api` commits / runs / results |
| Deterministic 5-dimension scoring, tsc anchor | `facebook/astryx:internal/vibe-tests/src/universal-eval.ts` |
| Fairness invariants, accepted asymmetries | `facebook/astryx:internal/vibe-tests/README.md` |
| Harness scripts, runner requirements | `facebook/astryx:internal/vibe-tests/package.json`, `…/src/validate-previews.ts` |
| `1/numDeploys`, usage fields | `get-convex/chef:test-kitchen/chefScorer.ts`, `…/types.ts`, `…/initialGeneration.eval.ts` |
| Grist WRAP verdict, access rules, embed | `SISO/design/feature-matrix/PLATFORM-WRAP-MATRIX.md:187-206` |
| RLS gap (nothing in 500 repos) | `SISO/design/feature-matrix/SYNTHESIS.md:151` |
| `eval` required on every block | `SISO/design/block-contract.schema.json:7,163-183` |
