# AM-PLATFORMS checkpoint-005 — candidate admission gate: screenshot-to-code

**Run:** `actionmodel-long-run-2026-08-26`  
**Lane:** `AM-PLATFORMS`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Scope:** read-only admission readiness review for `abi/screenshot-to-code`  
**Status:** held; one admission blocker; no runtime code edits

## Verdict

`abi/screenshot-to-code` is a strong image→code reference and a plausible extraction starting point, but it is **not admitted** as a Block Contract in this checkpoint.

The candidate clears identity and source/license gates but fails the current Action Model admission boundary because:

1. it is a whole screenshot-to-code application, not an extracted bounded block;
2. its documented stack is React/Vite + FastAPI with multiple output stacks, while the current Block Contract target is Next.js/React/Tailwind CSS variables/Postgres;
3. the inspected source does not expose the required `tokens_consumed` contract or a token-slot-normalized component boundary;
4. build, smoke, and screenshot-baseline evidence were not executed in the fetched source snapshot; the upstream app requires model-provider keys for its QA/e2e path; and
5. no adaptation log or visual diff against the Actionist scaffold exists.

**Admission result:** `HELD`, not `accepted`, `implemented`, or `rejected`.  
**Blocker count:** 1 compound evidence blocker (stack/adaptation/proof boundary).

## Candidate evidence

| Field | Evidence | Confidence/status |
|---|---|---|
| Canonical URL | [github.com/abi/screenshot-to-code](https://github.com/abi/screenshot-to-code) | verified; high |
| Pinned upstream commit | `d026163f586dfa8c5c10d28c36edd59a9d3b0e88` from GitHub API `commits/main`, observed 2026-08-26 | verified; high |
| License | GitHub API reports `MIT`; fetched snapshot contains `LICENSE` with MIT text and copyright `Abi Raja`, 2023 | verified for source; legal distribution boundary still requires normal review |
| Source snapshot | `research/actionmodel-long-run/outputs/platforms/source-reference/abi-screenshot-to-code` → `/Users/shaansisodia/.opensrc/repos/github.com/abi/screenshot-to-code/main` | read-only evidence; high |
| Input/output | README documents screenshots, mockups, Figma designs, screen recordings → HTML/Tailwind/CSS, React/Tailwind, Vue/Tailwind, Bootstrap, Ionic/Tailwind | documented; high |
| Runtime | React/Vite frontend and FastAPI backend; local README requires provider keys and Chromium for optional screenshot preview | documented; high |
| Design-system surface | `backend/tests/test_design_systems.py` exercises CRUD persistence for named design-system content | documented source behavior; not a token-slot contract |
| Visual proof surface | `backend` supports screenshot preview; `frontend/src/tests/qa.test.ts` defines screenshot, URL, update, code-action, and version-selection E2E scenarios | documented source test; not run in this lane |
| Actionist implementation | None | not claimed |

## Comparison matrix reconciliation

| Capability | Candidate finding | Level/confidence |
|---|---|---|
| Intent capture | README supports screenshot/mockup/Figma/recording inputs and text/URL flows in QA. | `D`; high |
| Planning | No Actionist-style structured build plan or approval spec in inspected files. | `U`; medium |
| Retrieval | Asset extraction/provider logic exists; reusable corpus/scaffold retrieval is not established. | `B / U`; medium |
| Scaffold selection | Multiple output stacks are supported, but no vetted Actionist archetype registry. | `B`; high |
| Design tokens | Design-system CRUD exists, but no `color.*`/`space.*`/`type.*` slot contract or raster→token IR. | `U`; high |
| Schema binding | No Postgres/ORM/block migration boundary in the inspected candidate evidence. | `U`; high |
| Execution environment | Local React/Vite + FastAPI, with optional Chromium screenshot preview. | `D`; high |
| Browser operation | Headless browser can render/check generated pages; this is not arbitrary third-party GUI operation. | `B`; high |
| Approvals | Settings/terms/UI flows are present; no side-effect approval contract. | `U`; medium |
| Testing | Unit/backend tests and a gated QA E2E suite are present in source. | `D*`; high |
| Deployment | README links to a hosted product and local/Docker run; no portable client deployment contract was established. | `B / U`; medium |
| Rollback | QA test exercises generated version selection (`v2`, `v3`); no database/external-side-effect rollback. | `B`; medium |
| Auditability | Local design-system persistence and QA hooks exist; no immutable build/adaptation/audit ledger. | `U`; high |
| Cost | Provider keys and hosted-product pricing were not normalized. | `U`; high |
| Extensibility | Multiple model providers and output stacks, local setup, backend/frontend split, and design-system records are documented. | `D*`; medium |

## Gate-by-gate admission record

| Block Contract gate | Result | Reason |
|---|---|---|
| Canonical URL + pinned commit | pass | GitHub URL and `d026163f...` receipt recorded above. |
| License/copyright/provenance | pass with review note | MIT file and copyright present; source snapshot is read-only; no legal clearance beyond repository text. |
| Adoption mode | held | Proposed mode is `extract` or `reference`, not `whole`; extraction boundary has not been defined. |
| Stack contract | fail/held | Candidate supports React/Vite + FastAPI and multiple output stacks; current schema requires Next.js/React/Tailwind CSS vars/Postgres. |
| Inputs/outputs/interfaces | partial | Screenshot and code outputs are clear; Actionist block routes/migrations/events/auth interfaces are not. |
| `tokens_consumed` | fail/held | No fixed token-slot manifest; design-system content is free-form text in the inspected test. |
| Adaptation log | missing | No extraction, rename, detach-wiring, DB-normalize, tokenize-styles, or interface-swap record. |
| Build command | documented, not run | Root `package.json` declares `pnpm test`; frontend declares `pnpm build`; dependency installation was not performed. |
| Smoke test | documented, not run | QA E2E exists but needs local services and provider configuration; no exit code in this packet. |
| Screenshot baseline/diff | missing | The repo’s QA can produce screenshots, but no Actionist scaffold baseline or comparison result exists. |
| Admission verdict | held | Not safe to call this a reusable block until the failed/partial gates are resolved. |

## Why the candidate still matters

The source is useful as a reference for the P2 leg: multi-input visual reconstruction, multi-stack output, asset extraction, design-system persistence, headless preview, and an explicit correction/version test shape. It should inform a future narrow adapter that produces `tokens_consumed`, component IDs, and a screenshot baseline inside the Actionist scaffold. The current evidence does not authorize copying or vendoring the whole application.

## Held/rejected claims

- **Held:** “screenshot-to-code is an admitted Actionist block.” It is a source-cleared candidate only.
- **Held:** “screenshot-to-code extracts design tokens from raster images.” The inspected source supports design-system records and code generation; the required token IR/slot contract was not found.
- **Held:** “the repo is production-ready for Actionist.” No stack adaptation, isolated build, smoke exit, or visual diff was recorded.
- **Held:** “the upstream main snapshot equals the pinned commit.” The `opensrc` snapshot is a read-only tree without `.git`; the pin comes from the GitHub API and is recorded separately.
- **Rejected for current Block Contract:** whole-repo adoption. The candidate must be extracted/reimplemented behind the target stack and token interfaces first.
- **Not claimed:** authenticated/live hosted-product behavior, current pricing, or an Actionist runtime implementation.

## Source and verification receipts

All source observations and API checks were made on **2026-08-26**.

- [Upstream repository](https://github.com/abi/screenshot-to-code) — first-party source, observed 2026-08-26.
- [Pinned commit](https://github.com/abi/screenshot-to-code/commit/d026163f586dfa8c5c10d28c36edd59a9d3b0e88) — GitHub API `commits/main`, commit date 2026-07-30, observed 2026-08-26.
- [Upstream MIT license](https://github.com/abi/screenshot-to-code/blob/d026163f586dfa8c5c10d28c36edd59a9d3b0e88/LICENSE) — mirrored in the read-only source snapshot.
- `research/actionmodel-long-run/outputs/platforms/source-reference/index.md` — generated by the approved source-reference helper; source snapshot path is recorded in the candidate table.
- `research/actionmodel-long-run/outputs/platforms/source-reference/abi-screenshot-to-code/README.md` — supported stacks, setup, provider-key, and screenshot-preview behavior.
- `research/actionmodel-long-run/outputs/platforms/source-reference/abi-screenshot-to-code/package.json` — root test scripts and `pnpm@10.32.1`.
- `research/actionmodel-long-run/outputs/platforms/source-reference/abi-screenshot-to-code/frontend/package.json` — build/test/QA commands.
- `research/actionmodel-long-run/outputs/platforms/source-reference/abi-screenshot-to-code/backend/tests/test_design_systems.py` — design-system persistence test.
- `research/actionmodel-long-run/outputs/platforms/source-reference/abi-screenshot-to-code/frontend/src/tests/qa.test.ts` — screenshot/URL/update/version-selection QA scenarios.
- GitHub API receipt: `license=MIT`, `pushed_at=2026-08-14T17:20:50Z`, `updated_at=2026-08-26T01:23:49Z`, `stargazers_count=74502`.
- Serena limitation: native `query_project` for the fetched source returned HTTP 500; exact files were read directly as a narrow fallback, with no symbol-level claims.

## Next queue

P-010 remains held until the stack/adaptation/proof boundary can be resolved under lane authority. P-011 is next: direct first-party source review of the v0 Platform API and registry injection to close the local pricing/scope gap without treating local synthesis as live evidence.
