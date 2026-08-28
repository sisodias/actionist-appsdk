# Agent Zero dispatch — Actionist repository topology

Date: 2026-08-28
Agent: `ACTIONIST-REPO-TOPOLOGY`
Coordinator: CENA

## OUTCOME

Design an evidence-backed multi-repository publication and ownership topology for Actionist. Treat `https://github.com/Sinamun/Actionist-AppSDK` as the client-facing index/control-plane repository unless evidence falsifies that design. Determine where the knowledge graph, framework registry, block registry, reusable block implementations, UI/component corpus, generated metadata and large binary/source-bearing assets should live and how all repositories link into the SISO Great Library.

Produce a migration/publication plan only. Do not create repositories, push commits, change remotes, publish private material, rewrite history or move/delete data.

## OWNERSHIP

Write only inside:

- `research/agent-zero/2026-08-28-repository-topology/**`

`ORIGINAL-PROMPT.md` and `DISPATCH.md` are coordinator-owned and read-only.

## Required evidence

Read project instructions and canonical state first. Then inspect, read-only:

- the current repository and `Actionist-AppSDK` remotes, branches and tracked inventories;
- `Actionist-AppSDK/SNAPSHOT-MANIFEST.md`, README and current branch contents;
- current `knowledge/`, `architecture/`, `site/`, `blocks/`, `research/` and workstream outputs;
- the framework-registry and block implementation dispatches;
- local 21st.dev / `siso-ui-base` corpus receipts and actual disk topology;
- local Great Library registry/lifecycle structures and existing repository-link conventions;
- GitHub repositories/organizations visible through authenticated read-only `gh` commands when useful;
- Git/GitHub size limits and appropriate use of Git LFS, release assets or object storage from primary documentation if current details are needed.

Distinguish observed local/remote facts from proposed ownership choices.

## Deliverables

1. `repository-topology.md`
   - recommended repository boundaries and why;
   - client-facing index repository contract;
   - SISO-owned reusable infrastructure repositories;
   - what must not be Git-tracked;
   - public/private/generated/source-of-truth distinctions;
   - contribution and handoff model for Sina.
2. `repository-manifest.json`
   - proposed repo ID, purpose, owner, visibility recommendation, source paths, artifact classes, upstream/downstream links, publication method and lifecycle.
3. `actionist-index-contract.md`
   - exact files and machine-readable indexes Sina's repository should contain;
   - link health/version/digest expectations;
   - how a human or agent finds every external artifact from one starting point.
4. `great-library-join.md`
   - how each repository and released block maps into the Great Library identity, source, release, evidence and lifecycle records;
   - identify missing Great Library fields or adapters without editing it.
5. `large-asset-strategy.md`
   - measured local sizes;
   - Git suitability by artifact class;
   - sharding/indexing strategy for UI components and generated corpora;
   - clone/fetch ergonomics and reproducibility.
6. `publication-plan.md`
   - safe ordered steps with dry-run checks, rollback and approval gates;
   - explicitly separate actions CENA can take from actions needing the operator or Sina.
7. `current-remote-receipt.json`
   - current remote URLs, branches and commit anchors; redact credentials/tokens.
8. `run-state.json`
   - status, evidence, blockers, decisions, output hashes and boundary.
9. `verify.mjs`
   - JSON validity, manifest uniqueness, source-path existence where local, link/reference coverage, required sections, no secrets, and owned-path boundary.

## Decision principles

- Split repositories by ownership, release cadence, artifact type and failure/blast radius—not merely because a directory is large.
- Sina's index must remain useful if one external repository moves or becomes unavailable: pin identities, versions and digests.
- Avoid Git submodules unless evidence shows their operational cost is justified.
- Generated corpora and multi-gigabyte stores should have compact manifests and reproducible retrieval, not necessarily millions of ordinary Git objects.
- Preserve a clear public provenance chain. Do not use publication as a substitute for an explicit collaboration/ownership agreement.
- Existing private client communications and credentials must never be published.
- The Actionist-AppSDK remote is currently a client-owned upstream. No push is authorized in this lane.

## VERIFY

Run `node research/agent-zero/2026-08-28-repository-topology/verify.mjs` and report its exact exit code. Verify no writes occurred outside the owned run directory.

## HARD STOP

Stop and report before any repository creation, remote mutation, commit, push, public visibility change, Git LFS migration, data move/deletion, or publication of material not already public.

## RETURN

Return exactly:

```text
status: done | blocked | failed
result: one sentence
evidence: exact artifact paths and key measured facts
verify: exact command and exit code
artifact: run directory
```

## Callback

Finishing silently is failure. Write the artifacts first, then re-resolve and verify CENA in named Herdr session `herdr-2`, send a status message of at most six lines, read it back after two seconds, and press Enter only if queued.

