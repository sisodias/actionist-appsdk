# Actionist base portfolio — 23 base families, 17 overlays, 100 repositories

Date: 2026-08-27  
Status: research shortlist; no base qualified, executed or admitted

## The decision

Actionist should not build 17 unrelated industry applications and should not call 100 repositories “100 bases.” The first workable portfolio has three layers:

1. **23 reusable base families** — recurring application spines and shared platform capabilities.
2. **17 industry overlays** — entities, states, vocabulary, authority and compliance differences applied to those bases.
3. **100-repository candidate bench** — products, frameworks and engines providing multiple options per family.

The number 23 is a portfolio hypothesis, not a permanent ontology. It is large enough to separate genuinely different state/authority models and small enough that every family can own a contract, candidate queue and qualification plan. B23 was added after operator review exposed that a Notion-like collaborative docs+database workspace is not equivalent to either a wiki/CMS or an internal data/admin platform.

## Why this is better than one base per industry

Six industries share case/workflow as their primary spine. Six use a client portal as a secondary spine. Scheduling, support, field operations, finance, inventory, learning and CRM recur across the rest. The industry-specific value belongs mainly in the overlay: entities, states, deadlines, terminology and authority. A law matter, insurance claim and mortgage file are not the same workflow, but they can test whether one configurable case spine survives three different state machines.

The two clearest build decisions remain:

- **Client portal:** Actionist owns the external-identity, scoped-read and request-submission product layer. Existing rows are references, not credible bases.
- **Case/workflow:** borrow a mature workflow/CMMN engine and build the Actionist case surface, party model, deadline model and document set.
- **E-sign:** borrow cryptographic/signing primitives and build signer identity, routing, audit and product workflow.
- **Field operations:** borrow patterns from existing products but expect an owned offline/evidence product layer.

## The 23 base families

| ID | Base family | Layer | Strategy | Initial anchors | Repos in 100-bench |
|---|---|---|---|---|---:|
| B01 | CRM and pipeline | application_spine | select_product_then_transplant_or_bind | marmelab/atomic-crm, twentyhq/twenty | 11 |
| B02 | Case and workflow | application_spine | borrow_engine_build_actionist_product_surface | flowable/flowable-engine, documenso/documenso | 12 |
| B03 | Client portal | application_spine | actionist_owned_authorization_and_surface | open-formulieren/open-forms, nextcloud/server | 2 |
| B04 | Finance and reconciliation operations | application_spine | owned_read_model_plus_selected_finance_engines | frappe/erpnext, Dolibarr/dolibarr | 9 |
| B05 | Inventory and warehouse | application_spine | select_product_or_intact_service | inventree/InvenTree, openboxes/openboxes | 12 |
| B06 | Commerce and order operations | application_spine | bind_headless_engine_plus_actionist_operations_surface | saleor/saleor, medusajs/medusa | 5 |
| B07 | Scheduling and booking | application_spine | embed_or_bind_product | calcom/cal.diy, thunderbird/appointment | 5 |
| B08 | Support and service desk | application_spine | intact_service_or_transplanted_surface | chatwoot/chatwoot, zammad/zammad | 5 |
| B09 | Field operations | application_spine | borrow_patterns_build_actionist_product_surface | openboxes/openboxes, glpi-project/glpi | 5 |
| B10 | Learning and content delivery | application_spine | intact_service_or_archetype_pattern | oppia/oppia, moodle/moodle | 5 |
| B11 | Project and work management | application_spine | intact_service_or_transplanted_surface | kanboard/kanboard, hcengineering/platform | 7 |
| B12 | Data and admin platform | shared_platform | host_data_capability_plus_selected_admin_surface | supabase/supabase, pocketbase/pocketbase, appwrite/appwrite | 11 |
| B13 | Identity and authorization | shared_platform | host_owned_authority_using_selected_identity_engine | keycloak/keycloak, better-auth/better-auth | 7 |
| B14 | Files and document management | shared_platform | object_capability_plus_intact_document_service | owncloud/ocis, paperless-ngx/paperless-ngx | 12 |
| B15 | Forms and intake | shared_platform | extract_form_engine_or_bind_product | surveyjs/survey-library, heyform/heyform | 7 |
| B16 | Analytics and reporting | shared_platform | embed_or_bind_analytics_engine | apache/superset, cube-js/cube | 11 |
| B17 | Search and retrieval | shared_platform | intact_search_service | meilisearch/meilisearch, opensearch-project/OpenSearch | 5 |
| B18 | Connectors and automation | shared_platform | borrow_catalogue_and_runtime_own_tenant_connections | activepieces/activepieces | 7 |
| B19 | Messaging and notifications | shared_platform | embed_notification_runtime_or_bind_service | novuhq/novu, zulip/zulip | 11 |
| B20 | Billing and payments | shared_platform | bind_billing_engine_keep_financial_authority_explicit | killbill/killbill, getlago/lago | 9 |
| B21 | E-sign and document authority | shared_platform | borrow_signing_engine_build_workflow_identity_and_audit_surface | MatthiasValvekens/pyHanko, documenso/documenso | 6 |
| B22 | Knowledge base and CMS | shared_platform | intact_service_or_transplanted_surface | BookStackApp/BookStack, TryGhost/Ghost | 9 |
| B23 | Collaborative workspace (Notion-like) | application_spine | select_workspace_product_or_transplant_docs_database_surface | AppFlowy-IO/AppFlowy, toeverything/AFFiNE | 1 |

## The 17 industry overlays

| Industry | Primary base | Secondary base |
|---|---|---|
| accounting_firms | B04 Finance and reconciliation operations | B02 Case and workflow |
| construction | B09 Field operations | B04 Finance and reconciliation operations |
| course_creators | B10 Learning and content delivery | B03 Client portal |
| ecommerce | B05 Inventory and warehouse | B08 Support and service desk |
| education_training | B10 Learning and content delivery | B02 Case and workflow |
| healthcare_medical_practices | B07 Scheduling and booking | B02 Case and workflow |
| hospitality | B07 Scheduling and booking | B09 Field operations |
| it_services_msps | B08 Support and service desk | B03 Client portal |
| insurance_agencies | B02 Case and workflow | B04 Finance and reconciliation operations |
| law_firms | B02 Case and workflow | B03 Client portal |
| logistics_freight | B09 Field operations | B05 Inventory and warehouse |
| marketing_social_media_agencies | B02 Case and workflow | B03 Client portal |
| mortgage_brokers | B02 Case and workflow | B03 Client portal |
| property_management | B02 Case and workflow | B03 Client portal |
| real_estate | B01 CRM and pipeline | B07 Scheduling and booking |
| recruiting_staffing | B02 Case and workflow | B07 Scheduling and booking |
| saas | B01 CRM and pipeline | B08 Support and service desk |

## How the 100 repos were selected

The source denominator is the P03 200-row verified OSS shelf. Selection is quality-first and deliberately ignores legal suitability as a ranking objective, while preserving its recorded disposition and limitations.

The mechanical score rewards product completeness, active maintenance, stars, tests, CI, containers and composite structure. It penalizes P03 rejects. Every named anchor is included, every family receives its strongest available rows, then the bench is filled by global quality score to exactly 100 unique repositories. One repository may support multiple families; that overlap is leverage, not double-counted identity.

This register is a **bench**, not a final choice. A high score does not establish host fit, tenancy, authority, adaptation cost, runtime or quality under execution.

## What happens next — focused portfolio research

### Wave A: family-definition audit

Falsify the 23-family taxonomy against all 17 industries. For each family define the product bar, required entities/states/authority, exclusions and whether it is an application spine, shared platform or Actionist-owned gap. A Notion-like workspace, for example, requires collaborative documents plus structured databases/views; a wiki or internal admin builder does not pass that bar.

### Wave B: targeted source funnels

For each family, join the current 100 bench with a targeted GitHub sweep, commercial top 10 and local estate. Classify every serious source as product, framework or primitive and name the plausible reuse shape. Do not repeat a generic metadata sweep.

### Wave C: three finalists per family

Choose a preferred product, product alternative and engine/framework fallback—or explicitly mark the family Actionist-owned. Approximately 69 family slots should compress to 20–30 unique repositories because strong composite sources cover multiple families.

### Wave D: module-contract depth

Take the 20–30 unique finalists through source identity, the seven-record module family, normalization-surgery prediction, host-fit checks and the 22 deterministic composer rules. This is where metadata ranking becomes architecture evidence.

### Wave E: representative assembly dry runs

Hand-run three assemblies: case/workflow+portal, CRM+scheduling and inventory/support. Compare complete product reuse, engine+owned-surface and transplant shapes before authorizing source execution.

## Immediate reduction rule

Before implementing the framework against one pilot, reduce each family to:

- one preferred product base;
- one alternative product;
- one engine/framework fallback;
- one explicit “Actionist-owned” gap where no product survives the archetype bar.

Then take the highest-leverage 20–30 repositories—not all 100—through the seven-record module contract and the 22-rule deterministic composer. The remaining repos stay as replacements and pattern references.

## Boundary

Research only. No repository was cloned, read beyond the prior metadata packet, executed, built, benchmarked, deployed, qualified or admitted by this portfolio step.
