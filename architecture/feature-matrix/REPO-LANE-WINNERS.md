# Repo lane winners — which OSS repo does each builder subsystem best

Scope: the 8 must-have builder subsystems. Every row below was checked by opening repo
source via `gh api`, not by reading a README badge. Stars/licenses re-verified live
27 Aug 2026. Rows: `repo-capability-matrix.jsonl`.

Gate: **LIFT** = declared permissive, code may be copied under the block contract's
provenance rule. **STUDY** = no declared license or copyleft, architecture only.
**AVOID** = do not use.

## Winners

| # | Lane | Winner | ⭐ | SPDX | Gate | Runner-up |
|---|---|---|---|---|---|---|
| 1 | chat/agent loop + planning + bounded repair | get-convex/chef | 4,603 | Apache-2.0 | LIFT | tastyeffectco/sandboxd (MIT) |
| 2 | sandbox/preview runtime | tastyeffectco/sandboxd | 918 | MIT | LIFT | e2b-dev/dashboard (Apache-2.0) |
| 3 | codegen constrained by a component registry | facebook/astryx | 12,471 | MIT | LIFT | google-labs-code/design.md (Apache-2.0) |
| 4 | templates + scaffold library | get-convex/chef | 4,603 | Apache-2.0 | LIFT | tastyeffectco/sandboxd (MIT) |
| 5 | data layer over platform-owned Postgres | doable-me/Doable | 27 | MIT | LIFT | tastyeffectco/sandboxd (MIT) |
| 6 | multi-tenancy + secret isolation | doable-me/Doable | 27 | MIT | LIFT | tastyeffectco/sandboxd (MIT) |
| 7 | deploy: publish, wildcard subdomains, DNS/TLS | tastyeffectco/sandboxd | 918 | MIT | LIFT | doable-me/Doable (MIT) |
| 8 | version history / rollback / checkpoints | tastyeffectco/sandboxd | 918 | MIT | LIFT | dyad-sh/dyad `src/version_preview/` (Apache-2.0 — see carve-out) |

### One line why

1. **chef** — its agent loop exists to *delete generality*: `chef-agent/prompts/solutionConstraints.ts` names the one permitted backend and declares specific files LOCKED, and `ChatContextManager.ts` bounds context to 16 relevant files. That is the scoped-clone thesis already in production. Runner-up sandboxd contributes the better *prompt*: `internal/agentprompt/prompt.md`'s "what the platform handles for you (do not fight it)".
2. **sandboxd** — a complete Go control plane (cgroup, egress, reaper, wake, idlock, loopback, snapshot), not a wrapper over a rented API; `snapshot/take.go` holds a per-id lock precisely so a snapshot cannot race a wake.
3. **astryx** — the only repo that *measures* whether an agent uses the design system correctly: `internal/vibe-tests/` (128 files), hidden `expectedComponents` ground truth, a plain-HTML control arm, escape-hatch rate, and a 10-turn degradation probe.
4. **chef** — one golden template (`template/`) with auth/DB/registry pre-wired plus `make-bootstrap-snapshot.js` for cold starts, rather than a template zoo. Runner-up sandboxd shows how a hub stays cheap: snapshot-as-template.
5. **Doable** — a numbered forward-only SQL chain over one platform Postgres with `workspace_id`-scoped **views** (`075_vigil_sandbox_views.sql`) as the tenant read boundary.
6. **Doable** — `069_workspace_keys.sql`: a DEK per workspace wrapped by a process-env KEK, with `key_version`/`rotated_at`/`active` for rotation and a non-breaking coexistence path off the old global key.
7. **sandboxd** — `internal/traefik/traefik.go` routes `s-<id>-<port>.preview.<domain>` with TLS but **no per-router certresolver**, serving every preview from one shared wildcard cert so Let's Encrypt's 50-certs-per-domain-per-week limit is never hit. That rate-limit trap is where naive implementations die.
8. **sandboxd** — separates checkpoint (`0009_snapshots.sql`, snapshots-as-templates, tenant-scoped by `owner_token` **not** the untrusted `user_id`) from durable history (`0010_git_remote.sql`, host-side push with the token injected outside the sandbox).

## The three repos that actually matter

The pool has 500 repos; three carry almost all the signal, and they are complementary
rather than competing:

- **tastyeffectco/sandboxd** (MIT, 918★, pushed 2026-08-26) — the *infrastructure*.
  Wins lanes 2, 7, 8; runner-up in 1, 4, 5, 6. Best secret isolation in the pool.
- **get-convex/chef** (Apache-2.0, 4,603★) — the *agent discipline*. Wins 1 and 4.
- **doable-me/Doable** (MIT, 27★, pushed 2026-07-21) — the *tenancy schema*. Wins 5 and 6.

Doable at 27 stars beating repos 500× its size is the headline: it is the only repo in
the pool with per-workspace envelope encryption in an actual migration.

### Best single idea found: the auth proxy

`sandboxd/control-plane/internal/authproxy/proxy.go` — the agent is given a **dummy**
API key and pointed at a control-plane proxy that strips it and injects the real
credential on the wire. No credential is ever mounted or env-injected into the sandbox.
Its own comment states the threat model: mounting the raw credential "exposed it to the
untrusted workspace AND let a CLI mutate/erase the shared file on a failed refresh."
This one decision removes secret exfiltration by generated code as a threat class.
Adopt it before anything else on this page.

## License findings

### dyad is NOT uniformly unusable — correction

The brief carried "dyad is NOASSERTION + FSL `src/pro` => STUDY". Verified this pass,
that is right only for `src/pro/`. `dyad-sh/dyad/LICENSE` reads: portions under
`src/pro/` take `src/pro/LICENSE` (**FSL-1.1-ALv2**); "Content outside of the above
mentioned directories ... is available under the **Apache 2** license." `src/pro/` does
exist (CONTRIBUTING.md, LICENSE, main, shared, ui). GitHub reports NOASSERTION only
because the dual-license file defeats its classifier.

Consequence: **`src/version_preview/` is outside `src/pro/`, therefore Apache-2.0 and
liftable** with attribution. It is the best rollback code in the pool — a 16-file state
machine (~110KB of tests) that models dirty trees, detached HEAD, in-flight
merge/rebase/cherry-pick/revert/bisect, and a *resumable* restore step chain recording
`preRestoreHead` so the restore is itself undoable. Take the state machine (its
`state.ts` is deliberately dependency-free); leave the Electron transport and every
byte of `src/pro/`.

### Confirmed study-only / rejected

- **beam-cloud/lovable-clone** (292★) — `license: null` confirmed live, default
  copyright => **STUDY**. Also stale (pushed 2025-08-25).
- **kuluruvineeth/codecapsule** (21★) — `license: null`, pushed 2026-07-30 => **STUDY**.
  **Not present in `repo-pool.jsonl`** (checked).
- **somdipto/open-lovable** — MIT but **0 stars, no description, pushed 2025-09-04**
  (~12 months stale), and **not in `repo-pool.jsonl`**. It is a personal fork of the
  Firecrawl open-lovable lineage, not an independent implementation => **AVOID**; go
  upstream if that lineage is wanted. The permissive license is real but there is no
  distinct capability to take.

## LANES WITH NO GOOD ANSWER IN THE POOL

These gaps are the finding, not a failure to search.

**Lane 8 (version history / rollback) has no dedicated repo at all.**
A regex over all 500 pool rows for `checkpoint|rollback|version histor|time.?travel|
undo|snapshot|git sync|isomorphic-git|revert|restore|diff|branch` across repo name,
description and tags returns **3 hits, all irrelevant** (a mirror of leaked Claude Code
source, an ATS project, an estate-agency site) and **none permissive**. The capability
exists in the pool only as a *subsystem inside builders* — sandboxd's snapshots,
Doable's `024_git_versioning.sql`, dyad's `version_preview`. There is no "checkpointing
for AI builders" library to adopt. **Build it; the prior-run answer of `containerd`
ranked #1 here was a category error** (container checkpoints are not app version
history).

**Lane 5's row-security half is unsolved.** Doable wins the lane on scoped views and
migrations, but nothing in the pool implements *generated-app* row security over a
platform-owned Postgres. Doable's views are for platform observability
(`v_sandbox_posture`, `v_sandbox_oom_7d`), not for constraining tenant app queries. No
pool repo shows an agent authoring RLS policies safely. chef sidesteps it entirely by
never letting the model write schema — which is the strongest available answer, but it
presumes Convex. **This is the biggest genuine architecture gap for a Postgres-backed
scoped clone.**

**Lane 2's rented-runtime path is thin.** sandboxd wins by self-hosting. For the
*rented* case in the brief (E2B, Modal, Daytona, WebContainers) the pool holds only
consumers and consoles — `e2b-dev/dashboard` (Apache-2.0, management UI, no runtime),
`e2b-dev/desktop`, `code-sandbox-mcp` (MIT but pushed 2025-03-23, stale). No repo shows
a *provider-abstracted* sandbox layer that swaps E2B for Modal for Daytona. If the
platform wants provider independence, that adapter is unwritten.

**Lane 3's input side is a spec, not an implementation.** astryx measures compliance and
`design.md` specifies the format, but neither generates a design system from a brand.
Consistent with prior recon: "design tokens from image" returned zero repos.

**Lane 7's DNS/registrar automation is absent.** sandboxd solves wildcard TLS and
routing; Doable models `custom_domains` as rows. Nothing in the pool automates
registrar/DNS record provisioning or domain-ownership verification.

## Composition (what to actually build)

No single repo is the clone. The defensible assembly is:

- **chef** for the loop discipline (locked files, bounded context, tiny tool surface,
  one golden template) and its `test-kitchen/chefScorer.ts` `1/numDeploys` metric.
- **sandboxd** for the runtime, the auth proxy, fail-closed egress, wildcard-TLS
  previews, idle-reap/wake economics, and snapshot+git-sync checkpointing.
- **Doable** for the tenancy schema — `workspace_keys` envelope encryption and
  `workspace_id`-scoped views.
- **astryx**'s vibe-test harness as the `eval` proof that Block Contract v0 *requires*
  of every block. This is the missing assembly-builder benchmark named in
  `VERIFIED-FACTS.md`; it does not need to be invented, it needs to be adapted.
- **dyad `src/version_preview/`** (Apache-2.0 files only) for restore correctness.

All five are permissive and liftable. Every one of the eight lanes has at least one
LIFT-gated answer; the open work is the four gaps above, not the subsystems.

## Provenance note on the prior run

The earlier lane run's 60 rows were moved to `repo-capability-matrix.PRIOR-RUN-QUARANTINE.jsonl`
rather than deleted. They are not merged because they violate CONTRACT.md §1: most cite
only `#readme` yet are labelled `evidence_class: direct`, and several are substantively
wrong (`containerd` #1 for builder version history; Doable's multi-tenancy win sourced
to its README when the actual schema evidence exists in `069_workspace_keys.sql`). The
28 rows in `repo-capability-matrix.jsonl` all cite an opened file, a live `gh api` result,
or an explicit negative result over the pool.
