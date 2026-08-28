# Repository Value Matrix — block qualification funnel

Observed: 2026-08-28. Corrected scope: universal and vertical-spine supply across SaaS, ecommerce, marketing agencies, and course creators. This is a research/blueprint packet only: no cloning, source execution, build, deployment, admission, or product-pilot selection.

## Course correction and preservation

The first lane brief was Agency OS module supply. The operator correction makes the repository Value Matrix the central selection method and widens the funnel. The earlier 12-area Agency OS work is preserved as a retained watchlist and local-receipt set below; it is not deleted, overwritten, or converted into a product-pilot assumption.

The corrected funnel uses 10 deterministic decisions across 14 block IDs and 30 block/source edges:

- Universal: B001 identity/tenancy, B011 workflow/approvals, B013+B038 analytics/reporting and behavior, B023 CRM, B025+B026 support/shared inbox, B028 projects/tasks.
- Vertical/common: B032+B033 pricing/plans/packaging and subscription billing.
- Ecommerce: B045 product catalogue/PIM.
- Marketing agency: B062+B065 campaign/content calendar and social publishing.
- Course creator: B070 course authoring and lesson delivery.

Inputs are the 191-source registry, block register, composition recipes, P03 source/structure records and local runtime receipts. The exact machine-readable packet is `value-matrix.json`; `module-shortlist.jsonl` is its 30-edge ranked projection.

## Machine-usable schema

The matrix schema is `actionist.repository-value-matrix.v1`. Each assessment has:

`assessment_id`, `block_ids[]`, `source_id`, `url`, `source_class` in {product, framework, primitive}, `reuse_shape`, `score_profile`, `dimension_scores` with all 10 required dimensions, `diamond_score`, `normalization_surgery`, `api_event_seams`, `runtime_data_burden`, `quality_evidence`, `unresolved_source_reading_gates[]`, `rights_reimplementation_cost`, and `falsifier`.

The decision-unit key is `block_id × source_id × reuse_shape`. A source is not a module merely because its repository row exists. Product/framework/primitive classification is carried per assessment and is not inferred from stars or row counts.

## Shape-specific Diamond Score

All dimensions use a 0–100 utility score where higher is better. Runtime burden and adaptation/normalization cost are inverted: low burden and low surgery receive higher utility.

For profile (s):

`G_s = 100 × exp(Σ_i w_{s,i} × ln(max(d_i/100, 0.01)))`

`C = 0.5 + 0.5 × (evidence_confidence/100)`

`m_s = min_i min(1, d_i/(gate_{s,i}+20))`

`DiamondScore_s = G_s × C × m_s` only when every hard gate passes; otherwise `gate_status=BLOCKED` and score `0`. If a required hard-gate value is missing, the status is `UNDERDETERMINED` and the score is `null`, with no rank.

The geometric mean makes the score sensitive to weak dimensions; the minimum-sensitive gate makes a fatal weakness non-averagable. Role selection applies a role-specific shape profile and eligibility filter first, then ranks by Diamond Score. Ties break by evidence confidence, architecture/source quality, then lower runtime burden. The matrix therefore yields decisions from explicit inputs rather than an unscored subjective pick.

### Profiles and fatal gates

| profile | visual treatment | representative hard gates |
| --- | --- | --- |
| intact service | low visual weight; UI is required only for a user-facing product surface | functional ≥60; out-of-box ≥50; architecture ≥50; seams ≥50; surgery ≥40; runtime ≥25; maintenance ≥45; evidence ≥55 |
| transplant/embedded module | UI and seam quality matter; host boundary must be explicit | functional ≥55; visual ≥40; out-of-box ≥45; architecture ≥50; seams ≥60; surgery ≥40; runtime ≥35; maintenance ≥45; evidence ≥55 |
| engine plus owned surface | visual weight/gate is zero because Actionist owns the UI | functional ≥55; out-of-box ≥40; architecture ≥50; seams ≥60; surgery ≥40; runtime ≥30; maintenance ≥45; evidence ≥55 |
| pattern/reference | UI is informative but never a product-surface eligibility gate | functional ≥35; architecture ≥45; seams ≥35; surgery ≥25; runtime ≥20; maintenance ≥35; evidence ≥40 |

A product surface must also have `source_class=product`, `visual_ui_quality≥55`, `evidence_confidence≥55`, and a passing UI-bearing profile. A poor or old UI can still rank as an engine or pattern; it cannot rank as a user-facing product surface.

### Input evidence ladder and bands

- 0–20: absent or contradicted.
- 25–39: discovery-only identity/description.
- 40–54: live metadata/top-level structure.
- 55–69: source-read with limited support.
- 70–84: source read plus strong structural/operator evidence.
- 85–100: bounded runtime or accepted receipt for the named shape.

Score bands: 80–100 `anchor_grade`; 70–79.99 `strong_candidate`; 55–69.99 `conditional_candidate`; 40–54.99 `watch_or_pattern`; 0–39.99 `gap_or_blocked`. A missing required evidence field is `underdetermined`, not a guessed numeric score.

Rights and provenance are recorded as a separate gate. A copyleft or open-core source is not automatically rejected: it may remain an intact service or pattern, while transplant/module eligibility can be blocked by the exact licence/SBOM boundary.

## Operator-positive anchor calibration

The anchors are calibration references for shape-specific scoring, not admission claims:

| source | anchor type | profile | Diamond Score | band | evidence |
| --- | --- | --- | ---: | --- | --- |
| toeverything/AFFiNE | operator_positive_native_runtime_anchor | transplant_or_embedded_module | 65.39 | conditional_candidate | runtime receipt |
| twentyhq/twenty | operator_positive_architecture_anchor | intact_service | 56.61 | conditional_candidate | architecture/source evidence |
| chatwoot/chatwoot | operator_positive_runtime_anchor | intact_service | 79.45 | strong_candidate | runtime receipt |
| makeplane/plane | operator_positive_runtime_anchor | intact_service | 79.20 | strong_candidate | runtime receipt |

AFFiNE is positive for a native framed workspace boundary, but mixed frontend/backend rights and heavy runtime keep that shape-specific score below the service anchors. Twenty is positive as an architecture/product reference, while its lack of a runtime receipt keeps evidence confidence below Chatwoot/Plane. Chatwoot and Plane are positive service anchors because the local receipts prove bounded handoff, persistence and protected paths for one host. These anchors do not authorize a different host, tenant model, or source-derived shape.

## Ranked primary/backup/pattern decisions

The role filter and profile are part of the machine data. “Primary” means highest eligible score for the stated shape/scope; it does not mean qualified, admitted, or chosen for a pilot.

| decision | tranche | block | primary (score) | backup (score) | pattern/reference (score) | block IDs |
| --- | --- | --- | --- | --- | --- | --- |
| U01 | universal | Workspace identity and tenancy | keycloak/keycloak (45.09) | better-auth/better-auth (44.69) | appwrite/appwrite (54.74) | B001 |
| U02 | universal | Workflow, rules and approvals engine | flowable/flowable-engine (65.68) | activepieces/activepieces (56.13) | kestra-io/kestra (55.92) | B011 |
| U03 | universal | Analytics/reporting and product behavior | apache/superset (54.67) | umami-software/umami (66.17) | cube-js/cube (44.54) | B013+B038 |
| U04 | universal | CRM and revenue pipeline | twentyhq/twenty (56.61) | marmelab/atomic-crm (52.04) | frappe/crm (49.53) | B023 |
| U05 | universal | Customer support desk and shared inbox | chatwoot/chatwoot (79.45) | zammad/zammad (39.11) | freescout-help-desk/freescout (48.86) | B025+B026 |
| U06 | universal | Projects, tasks and assignments | makeplane/plane (79.20) | kanboard/kanboard (43.42) | gitlabhq/gitlabhq (35.07) | B028 |
| V01 | vertical_common | Pricing, plans, packaging and subscription billing | getlago/lago (42.24) | killbill/killbill (42.11) | TryGhost/Ghost (57.31) | B032+B033 |
| V02 | vertical_ecommerce | Ecommerce product catalogue and PIM | saleor/saleor (43.06) | bagisto/bagisto (43.12) | medusajs/medusa (49.41) | B045 |
| V03 | vertical_marketing_agency | Agency campaign/content calendar and social publishing | gitroomhq/postiz-app (57.81) | makeplane/plane (51.31) | activepieces/activepieces (64.43) | B062+B065 |
| V04 | vertical_course_creator | Course authoring and lesson delivery | oppia/oppia (39.78) | moodle/moodle (0.00) | frappe/lms (38.28) | B070 |

## Complete 30-edge funnel

| rank | decision | role | source | class | reuse shape | Diamond | band | gate | user-facing surface |
| ---: | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
| 1 | U01 | primary | keycloak/keycloak | product | intact_service | 45.09 | watch_or_pattern | PASS | yes |
| 2 | U01 | backup | better-auth/better-auth | primitive | extracted_package | 44.69 | watch_or_pattern | PASS | yes |
| 3 | U01 | pattern_reference | appwrite/appwrite | product | pattern_reference | 54.74 | watch_or_pattern | PASS | no |
| 4 | U02 | primary | flowable/flowable-engine | primitive | engine_plus_owned_surface | 65.68 | conditional_candidate | PASS | no |
| 5 | U02 | backup | activepieces/activepieces | product | embedded_module | 56.13 | conditional_candidate | PASS | yes |
| 6 | U02 | pattern_reference | kestra-io/kestra | product | pattern_reference | 55.92 | conditional_candidate | PASS | no |
| 7 | U03 | primary | apache/superset | product | intact_service | 54.67 | watch_or_pattern | PASS | yes |
| 8 | U03 | backup | umami-software/umami | product | intact_service | 66.17 | conditional_candidate | PASS | yes |
| 9 | U03 | pattern_reference | cube-js/cube | primitive | embedded_module | 44.54 | watch_or_pattern | PASS | no |
| 10 | U04 | primary | twentyhq/twenty | product | intact_service | 56.61 | conditional_candidate | PASS | yes |
| 11 | U04 | backup | marmelab/atomic-crm | product | transplant | 52.04 | watch_or_pattern | PASS | yes |
| 12 | U04 | pattern_reference | frappe/crm | product | pattern_reference | 49.53 | watch_or_pattern | PASS | no |
| 13 | U05 | primary | chatwoot/chatwoot | product | intact_service | 79.45 | strong_candidate | PASS | yes |
| 14 | U05 | backup | zammad/zammad | product | intact_service | 39.11 | gap_or_blocked | PASS | yes |
| 15 | U05 | pattern_reference | freescout-help-desk/freescout | product | pattern_reference | 48.86 | watch_or_pattern | PASS | no |
| 16 | U06 | primary | makeplane/plane | product | intact_service | 79.20 | strong_candidate | PASS | yes |
| 17 | U06 | backup | kanboard/kanboard | product | intact_service | 43.42 | watch_or_pattern | PASS | yes |
| 18 | U06 | pattern_reference | gitlabhq/gitlabhq | product | pattern_reference | 35.07 | gap_or_blocked | PASS | no |
| 19 | V01 | primary | getlago/lago | product | intact_service | 42.24 | watch_or_pattern | PASS | yes |
| 20 | V01 | backup | killbill/killbill | primitive | engine_plus_owned_surface | 42.11 | watch_or_pattern | PASS | no |
| 21 | V01 | pattern_reference | TryGhost/Ghost | product | pattern_reference | 57.31 | conditional_candidate | PASS | no |
| 22 | V02 | primary | saleor/saleor | product | intact_service | 43.06 | watch_or_pattern | PASS | no |
| 23 | V02 | backup | bagisto/bagisto | product | intact_service | 43.12 | watch_or_pattern | PASS | yes |
| 24 | V02 | pattern_reference | medusajs/medusa | framework | embedded_module | 49.41 | watch_or_pattern | PASS | no |
| 25 | V03 | primary | gitroomhq/postiz-app | product | intact_service | 57.81 | conditional_candidate | PASS | yes |
| 26 | V03 | backup | makeplane/plane | product | intact_service | 51.31 | watch_or_pattern | PASS | yes |
| 27 | V03 | pattern_reference | activepieces/activepieces | product | embedded_module | 64.43 | conditional_candidate | PASS | no |
| 28 | V04 | primary | oppia/oppia | product | intact_service | 39.78 | gap_or_blocked | PASS | yes |
| 29 | V04 | backup | moodle/moodle | product | intact_service | 0.00 | gap_or_blocked | BLOCKED | no |
| 30 | V04 | pattern_reference | frappe/lms | product | pattern_reference | 38.28 | gap_or_blocked | PASS | no |

Top-five source reads are Chatwoot, Plane, Atomic CRM, Flowable, and Activepieces. Their current GitHub root/README reads were performed on 2026-08-28 without cloning or executing sources. Local receipts are linked in the matrix; they remain host-specific precedents.

## Source-read top five and foundry dry-run shapes

1. **Chatwoot — intact service.** Root/README expose Rails app/db/enterprise/swagger/Docker, omnichannel inbox, integrations and reports. The local receipt proves exact-origin 200, wrong-origin 403, replay 401, restart persistence and native Inbox/Conversation. Remaining gates are tenant/data/API/event ownership, dependency/SBOM, upgrade and rollback.
2. **Plane — intact service/proxy.** Root/README expose apps/packages, Docker/Kubernetes self-hosting and work items/cycles/modules/views/pages/analytics. The local receipt proves SSO, API proxy, CRUD/move/restart/delete and browser route integrity. Remaining gates are tenant/API/event/migration ownership and fresh pinned reproducibility.
3. **Atomic CRM — transplant.** Root/README expose a TypeScript Vite app, Supabase, e2e and registry; contacts/tasks/notes/deals, OAuth, API and custom fields are claimed. The smallest transplant closure, RLS, auth and migration ownership remain unread.
4. **Flowable — engine plus Actionist-owned surface.** Root/README expose Java modules/pom/Docker/K8s/QA and BPMN/CMMN/DMN engines with embedded/service and REST paths. The Actionist-owned case/approval surface, authority model, task events, persistence and replay still need a named host contract.
5. **Activepieces — embedded connector/approval module.** Root/README expose TypeScript packages, worker image, Compose, type-safe pieces, versioned flows and human-in-loop. Current GitHub API says `NOASSERTION` while the P03 licence-body read says MIT core plus commercial EE; the file-level rights and credential/event seams are unresolved.

## Preserved Agency OS watchlist

The initial 12-area packet remains represented by these source joins and decisions:

| area | retained source joins | corrected-funnel treatment |
| --- | --- | --- |
| CRM | SRC-0064 / SRC-0111 / SRC-0072 | already represented by U04 |
| projects/tasks | SRC-0005 / SRC-0077 / SRC-0074 | already represented by U06 |
| collaborative workspace/docs | SRC-0002 / SRC-0071 / SRC-0069 | retained local AFFiNE precedent; outside 30-edge cap |
| support/shared inbox | SRC-0001 / SRC-0099 / SRC-0054 | already represented by U05 |
| social publishing | SRC-0020 / SRC-0005 / SRC-0010 | already represented by V03 |
| analytics/reporting | SRC-0012 / SRC-0006 / SRC-0070 | already represented by U03 |
| marketing automation | SRC-0058 / SRC-0134 / SRC-0010 | retained gap/watchlist; no qualified source |
| billing/payments | SRC-0055 / SRC-0057 / SRC-0039 | represented by V01; payment routing remains a gap |
| CMS/site builder | SRC-0063 / SRC-0098 / SRC-0172 | retained for a later public-web tranche |
| forms/intake | SRC-0011 / SRC-0075 / SRC-0079 | retained; not selected in this cap |
| client portal/approval | SRC-0037 / SRC-0060 / SRC-0053 | portal product layer remains scarce; Flowable engine is U02 |
| employee/team operations | SRC-0035 / SRC-0045 / SRC-0169 | B004 remains thin; ChiefOnboarding is evidence-only gap lead |

No retained row is silently converted into a qualified module. The local receipts preserved are Chatwoot, Plane, AFFiNE and Umami at these exact paths:

- `/Users/shaansisodia/SISO_Workspace/bykonz-archive-2026-08-23/bykonz-local-operator-bundle/verification/chatwoot-w1-acceptance/AMENDED-RECEIPT.json`
- `/Users/shaansisodia/SISO_Workspace/bykonz-archive-2026-08-23/bykonz-local-operator-bundle/verification/plane-runtime-receipt.json`
- `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/fahmy-2026-08/docs/client-platform/implementation-manager/evidence/affine-existing-final/receipt.json`
- `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/fahmy-2026-08/docs/client-platform/implementation-manager/evidence/umami-final/RECEIPT.json`

## Explicit gaps

The block register has 80 blocks: 66 seeded, 2 thin, and 12 `actionist_owned_or_targeted_gap`. The 12 gap blocks are B005 settings, B006 shell/navigation, B034 entitlements, B035 trials/provisioning, B039 feature flags, B043 API keys/webhooks, B050 tax/duties/pricing calculation, B051 fraud/payment risk, B054 returns/refunds, B055 promotions, B056 reviews/proof, and B077 affiliate/referral management. The thin blocks are B004 employee onboarding and B040 customer success/account health.

P03 evidence also leaves the portal product layer as a scarce gap: `open-formulieren/open-forms` and `nextcloud/server` are copyleft references, not clean permissive client-portal supply. Case/workflow has a permissive engine but no clean product layer; that is why Flowable is deliberately an engine-plus-owned-surface dry run rather than a product-pilot assumption.

Current GitHub was queried only for true gaps: Postiz (selected primary evidence-only candidate), Mixpost (social backup lead), DittoFeed (marketing automation lead), ChiefOnboarding (employee-onboarding lead), and Hyperswitch (payment-routing lead). These reads do not create registry admission or qualify a source. Their current-read facts and unresolved gates are recorded in the matrix packet’s decision notes.

## Falsifiers and stop rule

The matrix is falsified or must be re-scored when a source read shows incomplete product scope, no stable API/event/embedding seam, incompatible licence/SBOM, unacceptable runtime burden, stale/unmaintainable upstream, failed tenant/authority tests, or a local anchor receipt that does not reproduce on a fresh pinned source. The stop rule is to leave the candidate as `UNDERDETERMINED`, pattern/reference, or explicit gap; never average missing evidence into a build recommendation.

No product pilot is assumed. The next gate outside this lane is a named-host seven-record reconstruction plus deterministic composition check for the selected foundry dry-run shapes.

