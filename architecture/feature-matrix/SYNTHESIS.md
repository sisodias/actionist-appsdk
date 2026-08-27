# Action Model builder — synthesis

Date: 2026-08-27 · Research-only · NOT_ADMITTED · no implementation authorized

Sources: this directory. Every count below re-derived in the main session at write time.


## The headline for Cena

Lovable's product surface censused at **110 features** (31 must-have, 
38 nice-to-have, 27 deleted by scope, 
14 irrelevant).

**27 features are deleted outright by the scoped setup, and 24 of those
 are rated hard or very_hard.** That is the quantified version of the teardown's
two-column verdict: the scope is not a discount on effort, it is a discount on the
*hardest* effort. What disappears is the entire backend-provisioning and connector
estate — Lovable Cloud, the connector catalog, RLS, secrets, payments, security
scanning — because the platform already owns the database, the policies and the
deploy target.

Cena's instinct that Lovable is near-impossible to replicate is correct **for general
Lovable**. It is wrong for his case, and this census says by how much.


## The real build list (31 must-have, by hardness)

**very_hard (2):** Build mode, Managed sandbox execution

**hard (11):** Prompt-based app building, Incremental editing, Full-stack web application output, AI visual generation, Backend queries and mutations, Cloud preview environment, Managed runtime ownership, GitHub and GitLab sync, Project and workspace isolation, Error diagnostics, Managed operations

**moderate (16):** Projects and workspaces, File and plan diffs, Design systems and themes, Preview review and manual acceptance, Roles and permissions, Knowledge and project context, Stop, undo, and wrap-up controls, Timeline and activity receipt, Human review, Lovable Cloud auto-hosting, Version history and code revert, Published-version rollback, Chat and prompt history, Workspace tenancy, Chat with Lovable, Publish control

**commodity (2):** Project lifecycle and publishing state, Lovable subdomains


Only 2 must-haves are very_hard: **Build mode** (the autonomous multi-step agent loop)
and **managed sandbox execution**. The second is a rent, not a build — Lovable itself
abandoned its own sandbox fleet for Modal. That leaves the agent loop as the single
genuinely hard thing you own.


## What the scope deletes (27)

- [hard] Existing repository import
- [hard] Generated database schema
- [hard] Cloud database provisioning
- [hard] Schema migrations
- [moderate] Managed file storage
- [hard] External Supabase backend
- [hard] Built-in user authentication
- [hard] Row-level security
- [hard] Secrets and service credentials
- [hard] Webhooks and external API actions
- [hard] Custom connectors
- [very_hard] Connector catalog
- [hard] Any API integration
- [very_hard] Security scanning
- [moderate] External hosting
- [moderate] Self-hosted generated app
- [hard] Backend export / Supabase portability
- [hard] Database rollback boundary
- [hard] Credential isolation
- [very_hard] Lovable Cloud (managed Supabase backend)
- [hard] Lovable Cloud Storage
- [hard] Lovable Cloud Jobs
- [hard] Lovable Edge Functions
- [very_hard] App connectors
- [very_hard] App-user connectors
- [hard] Stripe and Paddle payments
- [hard] Sensitive data scanning

## Architecture verdict

**TypeScript for v1. Not Rust.** Independently sampled twice: the main session drew a
random 45 of 302 permissive repos (TypeScript 14, Python 9, Go 4, Rust 3); the
architecture lane drew a stratified 45 (TypeScript 12, Rust 3). Different method,
same shape.

The finding that matters: **"probably Rust" and "rob it first" are mutually exclusive
for v1**, and rob-first is the more valuable half. A Rust v1 hand-writes what the
corpus would otherwise hand you. Rob-first-rewrite-later is achievable *per subsystem*,
never globally, and the rewrite trigger must be a measured SLO failure on a
contract-stable subsystem that renting and ordinary optimisation cannot fix. No such
measurement exists today, so no Rust rewrite is justified today.

CAVEAT: 45-of-302 supports "TypeScript-dominant". It does not support a percentage.


## White-space scoreboard (corrected)

| Claim | Prior | Verdict |
|---|---|---|
| C1 image → design tokens | zero OSS | **SURVIVES** |
| C2 requirements-elicitation agents | nothing mature | falls as an existence claim |
| C3 assembly-builder benchmark | none exists | falls as an existence claim |

C1 was reported as failing and is not. `czl9707/token-aware-image` runs
`Prompt → components → PNG` — **tokens to image**, the opposite direction — and is a
coding-agent skill plugin, not an extraction engine. The claim was image → tokens.
This is the gap tied to principle P2, i.e. the one it would be costliest to write off.

C3 falling is *useful*: `guardiavault-oss/App-Builder-Benchmark` is **MIT = LIFT**, with
a real harness, scoring and frozen prompt pool. It drops straight into the `eval` field
that Block Contract v0 requires and that all 38 census repos currently lack.


## Open / unverified

1. **Repo-capability matrix incomplete** — first lane died, rerun in flight on Opus.
   Blocks the `block_contribution` fields in the Phase-8 census packet.
2. **Sina's repo is still empty** (`9f182b6 Initial commit`, zero tracked files). So
   "the platform owns the schema and policies" — the claim the whole security
   asymmetry rests on — remains INFERRED. This is the Phase-0 unblocker.
3. **Schema-migration risk has no incumbent incident behind it.** Architectural
   reasoning, correctly labelled inferred by the arch lane. Still the severe one:
   the platform schema is a shared ABI across N generated apps.
4. 18 of 38 builder repos cannot be code sources (16 no-license, 1 AGPL, 1
   NOASSERTION). The most famous entries are the least usable.

---

## Repo capability matrix — COMPLETE (added 2026-08-27, Opus lane)

28 rows, 8 lanes, 0 malformed. Gate integrity PASS: no LIFT without a declared
permissive licence. Three winners re-verified live by the main session:
`facebook/astryx` 12,471* MIT, `get-convex/chef` 4,603* Apache-2.0,
`tastyeffectco/sandboxd` 918* MIT — all three confirmed present in the 500-repo pool.

### Lane winners

| Lane | Winner | Licence | Gate |
|---|---|---|---|
| 1. chat/agent loop + planning + bounded repair | `get-convex/chef` | Apache-2.0 | LIFT |
| 2. sandbox/preview runtime | `tastyeffectco/sandboxd` | MIT | LIFT |
| 3. codegen constrained by a component registry / design system | `facebook/astryx` | MIT | LIFT |
| 4. templates + scaffold library | `get-convex/chef` | Apache-2.0 | LIFT |
| 8. version history / rollback / checkpoints / git sync | `tastyeffectco/sandboxd` | MIT | LIFT |

**Two repos carry the build: `chef` and `sandboxd`.** chef wins both the agent loop
and the template shelf; sandboxd wins both sandbox runtime and version history. That
concentration is good news — it means the robbing is coherent rather than a
frankenstein of 8 unrelated codebases.

### The four gaps — this is where you BUILD, not rob

The lane explicitly recorded `gate: n/a` rows where nothing in 500 repos works. These
are the highest-value findings in the whole exercise:

**5. data layer over platform-owned Postgres**
- NO POOL REPO implements row security for GENERATED apps over a platform-owned Postgres. Doable's views (075_vigil_sandbox_views.sql) are platform observability (v_sandbox_posture, v_sandbox_oom_7d), not tenant query constraints. No pool repo shows an agent authoring RLS policies safely. chef avoids the problem by never letting the model write schema, which presumes Convex.
- *Steal:* Nothing available — must be designed. Closest pattern is chef's 'model writes handlers in a blessed dir where identity comes from a platform helper, never raw queries'.

**7. deploy: hosted publish, wildcard subdomains, DNS/TLS**
- NO POOL REPO automates registrar/DNS record provisioning or domain-ownership verification. sandboxd solves wildcard TLS + routing for *previews*; Doable models custom_domains as rows. The step between 'user types their domain' and 'certificate served' is unimplemented in the pool.
- *Steal:* Nothing available. Note that per-customer custom domains DO need per-host ACME, so sandboxd's wildcard trick does not extend to them — that is a separate cert path.

**2. sandbox/preview runtime**
- NO POOL REPO provides a provider-abstracted sandbox layer that swaps E2B / Modal / Daytona / WebContainers behind one interface. The pool holds only consumers and consoles: e2b-dev/dashboard (Apache-2.0, management UI, no runtime), e2b-dev/desktop, Automata-Labs-team/code-sandbox-mcp (MIT but pushed 2025-03-23, stale).
- *Steal:* Nothing available. sandboxd's sandboxspec/ + manifest/ (sandbox.yaml with web.command/port/health_path) is the closest thing to a provider-neutral run contract and is the right shape to generalise.

**6. multi-tenancy + secret isolation**
- Lane 6 has no single winner covering both halves. Doable owns per-tenant DATA keys (workspace_keys envelope encryption at rest); sandboxd owns RUNTIME secret isolation (authproxy so credentials never enter the workspace, AES-256-GCM config sealing, fail-closed nftables egress). Adopt BOTH; neither alone is sufficient.
- *Steal:* Doable's workspace_keys schema + sandboxd's authproxy, together.

Three of these four independently corroborate findings reached by other lanes from
different directions:

- **RLS over a platform-owned Postgres is unsolved in OSS.** This is precisely the
  security asymmetry the teardown identified as our advantage over Lovable — and it
  turns out nobody has built it. It must be designed, not lifted. chef sidesteps it
  by never letting the model write schema, which presumes Convex.
- **Wildcard TLS ≠ custom domains.** sandboxd's wildcard trick covers *previews*; per-
  customer domains need per-host ACME, a separate cert path. The step from 'user types
  their domain' to 'certificate served' is unimplemented across the entire pool.
- **No provider-abstracted sandbox layer exists.** The pool holds consumers and
  consoles only. Since the architecture verdict is *rent, don't build* sandboxes,
  the abstraction that lets you swap E2B/Modal/Daytona is itself a thing you write.
- **Multi-tenancy needs BOTH halves.** Doable owns per-tenant data keys
  (`workspace_keys` envelope encryption); sandboxd owns runtime secret isolation
  (authproxy, AES-256-GCM sealing, fail-closed nftables egress). Neither alone suffices.

---

## Quarantine of the prior lane run (verified by main session, 2026-08-27)

The Opus lane declined to merge the earlier 13-lane run's 65 rows and moved them to
`repo-capability-matrix.PRIOR-RUN-QUARANTINE.jsonl`. Main session verified that call
rather than accepting it:

```text
rows with evidence_class=direct but README-only evidence : 39 of 65
version-history rank-1 repo                              : containerd/containerd
Doable multi-tenancy evidence                            : ['...doable-me/Doable#readme']
```

All three of the lane's stated reasons check out. 39/65 rows assert DIRECT evidence from
a README, violating CONTRACT.md rule 1. `containerd` — a container runtime — ranked #1
for *builder* version history is a category error. Doable's tenancy win, which is real,
was sourced to a README when the actual evidence sits in `069_workspace_keys.sql`.

Quarantine, not deletion, is the right disposition: the rows are recoverable if a later
pass wants to re-evidence them. **Do not merge this file.** The authoritative matrix is
`repo-capability-matrix.jsonl` (28 rows, every row citing an opened file, a live `gh api`
result, or an explicit negative over the pool).

Lesson for future lanes: a lane reporting rich-sounding metadata is not the same as a
lane meeting the evidence contract. The peer's own warning — "do NOT use my earlier
65-row script output blindly" — was accurate and should have been the first signal.

## Composition verdict (five permissive repos)

`chef` loop discipline + `sandboxd` runtime/secrets/TLS + `Doable` tenancy schema +
`astryx` vibe-test harness as the Block Contract `eval` proof + `dyad src/version_preview/`
(Apache-2.0 files only) for restore correctness. All five LIFT. Every one of the eight
lanes has at least one LIFT-gated answer, so the open work is the four gaps, not the
subsystems.

---

## Opus audit pass + connectors correction (2026-08-27, supersedes counts above)

Two Opus auditors re-verified the Luna-era documents at Shaan's direction. Features
census: 25/110 rows sampled, every evidence URL fetched live. **19 VERIFIED, 6
OVERSTATED (fixed in place), 0 fabricated, 0 dead URLs.** The overstatements were
embellishments past the source (invented subagent role names, a connector count and
service list not on the page, "Gemini-powered" vs Google+OpenAI, wildcard-DNS stated
as fact, "searchable" templates that are filter-only).

**The bigger finding: the teardown retracted its own connectors reasoning** (CORRECTION
27 Aug, verified in file: platform owning its own Postgres says nothing about client
dashboards wanting Gmail/Slack/Stripe). Eight census rows sat on that retracted premise:
the auditor flipped 3 in-sample (connector catalog, app connectors, per-user OAuth) and
flagged 5 out-of-sample; the main session verified the retraction and completed those 5
(webhooks, custom connectors, any-API, credential isolation, Stripe/Paddle payments).

**Audited headline: 110 features → 31 must-have · 46 nice-to-have · 19 deleted by scope
(16 of them hard/very-hard) · 14 irrelevant.** The scope discount narrows from 27 to 19
— still real, still concentrated in the hardest tier, but connectors are now correctly
REAL WORK, deferred by phasing. Mitigation already in hand: activepieces is MIT outside
its ee/ carve-out with 728 connectors (113 OAuth2) — importable, not hand-writable —
while Nango/Airbyte are ELv2 and cannot ship in hosted Actionist
(research/connectors-licensing-2026-08-27.md).

Lesson recorded: a downstream artifact citing an upstream doc inherits that doc's
corrections. The census was written 09:40; the teardown was corrected 09:42. Nothing
re-checked the dependency until the audit.

---

## Second Opus audit: gaps + architecture (2026-08-27)

Both Luna documents survived, with corrections applied in place.

**ARCHITECTURE.md:** language-sample command re-run unedited — all 45 rows reproduced
line for line (TypeScript 12, Rust 3). TypeScript-v1 verdict now measured three ways
(Luna stratified, main-session random, Opus re-run) with identical shape; the gap
deep-dive strengthened it further (computesdk is TypeScript, Caddy deploys as a Go
binary — neither argues Rust). Receipt correction: vibesdk #313/#359/#162 are all now
CLOSED — the preview/production lesson stands as a documented past incident, not an
open defect. Eleven `[updated post gap deep-dive 2026-08-27]` amendments reconcile the
subsystem table with the deep-dive: LIFT ComputeSDK (not build a broker), Caddy
on_demand_tls + costed Cloudflare switch, Daytona struck everywhere, Phase 0 narrowed
to E2B behind the ComputeSDK contract.

**GAPS-AND-DIFFERENTIATION.md sections A/B:** 5/5 Lovable failure claims verified
against live first-party sources, quotes at the cited locations. One claim understated
at source: ML6 says Lovable has "no native concept of environments" — stronger than our
"no dev/prod separation."

**Standing process lessons from the audit round:** (1) downstream artifacts silently
inherit upstream corrections — re-check dependencies when an upstream doc changes;
(2) receipts age — issue-state citations must carry their observation date.

---

## Eval harness design landed + a synthesis self-correction (2026-08-27)

`design/EVAL-HARNESS-DESIGN.md` (33KB) completes the arc: block-level eval record
schema (cases[] + eval_provenance, proposed as an on-paper delta to Block Contract
v0), build-level adversarial protocol, cost-per-successful-build fields, and an
honestly-minimal day-one (runner + two-tenant Grist fixture + the worked Grist CRUD
block passing).

**CORRECTION to this file's earlier claim (observed 2026-08-27):** App-Builder-Benchmark
does NOT "drop straight into the eval field." Inspection receipts: 31 commits in a
17-minute window; results/ contains only two fixtures; 4/4 CI runs failed; frozen
entrant guardiavault-oss/vibeflo 404s. BUT its scorer is real and was executed locally:
one cross_tenant_leakage entry forces 90/100 → 0/100 NO_SHIP exit 1. Verdict: lift the
PROTOCOL (especially the critical-failure cap, which maps directly onto the RLS moat
gap), not the results. astryx's vibe-tests are fully real (193 files, 1,100-line
deterministic scorer, frozen battery, pushed 2026-08-27): lift the evaluator design.

Rule-5 note: this correction is itself an instance of the aging-receipts lesson — the
earlier claim cited real files but inferred maturity from their existence.
