# Actionist base universe v2 — 68 candidate families

Date: 2026-08-27  
Status: provisional expanded taxonomy; research only; no source executed or qualified

## Correction to the 23-family portfolio

The previous 23-family portfolio was a useful minimum shared spine, but it was not a credible universe of reusable product bases. It inherited P03's narrow 24-capability supply taxonomy and compressed distinct products into generic labels such as "workflow", "finance" and "field operations". That hid ATS, HRIS, contract lifecycle, procurement, ITSM, incident management, marketing automation, social publishing, community, events and genuine vertical operating systems.

The 100-repository cap was also arbitrary. A discovery bench should be sized by family coverage, then compressed after product-versus-framework-versus-primitive review. This v2 starts with **68 families, 167 seed assignments and 144 unique repository seeds**. The old 100-repository shortlist remains attached as a deeper prior-evidence bench; it is no longer presented as exhaustive.

## First-principles inclusion rule

A family is distinct when it owns at least one materially different:

1. durable data/state model;
2. authority or identity boundary;
3. workflow lifecycle and terminal states; or
4. runtime/integration boundary.

Terminology, colours, labels and small entity additions are overlays. An ATS is not merely a case workflow because candidate consent, application stages, interview feedback and offer authority are its core. A hotel PMS is not scheduling plus inventory because room-night state, housekeeping, rate plans and night audit interact as one authority model.

## Portfolio shape

- **38 horizontal products** — recognisable complete systems clients ask for.
- **15 shared capabilities** — engines and host services reused beneath products.
- **15 vertical operating systems** — industry products whose state/authority cannot honestly be reduced to a cosmetic overlay.

## Expanded family register

| ID | Group | Family | Coverage | Initial repository seeds |
|---|---|---|---|---|
| U01 | horizontal product | CRM and revenue pipeline | seeded_not_qualified | twentyhq/twenty, SuiteCRM/SuiteCRM, frappe/crm |
| U02 | horizontal product | Case and workflow product | seeded_not_qualified | open-formulieren/open-forms, ArkCase/arkcase-ce |
| U03 | horizontal product | External client portal | seeded_not_qualified | open-formulieren/open-forms, nextcloud/server |
| U04 | horizontal product | Project and work management | seeded_not_qualified | makeplane/plane, opf/openproject, kanboard/kanboard |
| U05 | horizontal product | Collaborative workspace (Notion-like) | seeded_not_qualified | AppFlowy-IO/AppFlowy, toeverything/AFFiNE, anyproto/anytype-ts |
| U06 | horizontal product | Knowledge base and wiki | seeded_not_qualified | BookStackApp/BookStack, docmost/docmost, requarks/wiki |
| U07 | horizontal product | Customer support desk | seeded_not_qualified | chatwoot/chatwoot, zammad/zammad, freescout-help-desk/freescout |
| U08 | horizontal product | Shared inbox and email operations | seeded_not_qualified | chatwoot/chatwoot, freescout-help-desk/freescout |
| U09 | horizontal product | Scheduling and booking | seeded_not_qualified | calcom/cal.com, alextselegidis/easyappointments, thunderbird/appointment |
| U10 | horizontal product | Events, registration and ticketing | seeded_not_qualified | pretix/pretix, alfio-event/alf.io, eventschedule/eventschedule |
| U11 | horizontal product | Forms, surveys and intake | seeded_not_qualified | formbricks/formbricks, heyform/heyform, LimeSurvey/LimeSurvey |
| U12 | horizontal product | Document management system | seeded_not_qualified | paperless-ngx/paperless-ngx, mayan-edms/Mayan-EDMS, eikek/docspell |
| U13 | horizontal product | E-signature workflow | seeded_not_qualified | documenso/documenso, docusealco/docuseal, OpenSignLabs/OpenSign |
| U14 | horizontal product | Contract lifecycle management | seeded_not_qualified | Open-Source-Legal/OpenContracts, documenso/documenso |
| U15 | horizontal product | Proposal, quote and CPQ | seeded_not_qualified | frappe/erpnext, odoo/odoo |
| U16 | horizontal product | Subscription and usage billing | seeded_not_qualified | getlago/lago, killbill/killbill, openmeterio/openmeter |
| U17 | horizontal product | Accounting and general ledger | seeded_not_qualified | bigcapitalhq/bigcapital, akaunting/akaunting, frappe/erpnext |
| U18 | horizontal product | Expense and receipt management | seeded_not_qualified | midday-ai/midday, firefly-iii/firefly-iii |
| U19 | horizontal product | Inventory and warehouse management | seeded_not_qualified | inventree/InvenTree, openboxes/openboxes, frappe/erpnext |
| U20 | horizontal product | Commerce and order management | seeded_not_qualified | saleor/saleor, medusajs/medusa, bagisto/bagisto |
| U21 | horizontal product | Procurement and vendor management | seeded_not_qualified | frappe/erpnext, odoo/odoo |
| U22 | horizontal product | HRIS and people operations | seeded_not_qualified | frappe/hrms, orangehrm/orangehrm, ever-co/ever-gauzy |
| U23 | horizontal product | Applicant tracking and recruiting | seeded_not_qualified | opencats/OpenCATS, frappe/hrms |
| U24 | horizontal product | Employee onboarding and offboarding | thin_or_missing | frappe/hrms |
| U25 | horizontal product | Learning management and course delivery | seeded_not_qualified | moodle/moodle, frappe/lms, oppia/oppia |
| U26 | horizontal product | Marketing automation | seeded_not_qualified | mautic/mautic, dittofeed/dittofeed |
| U27 | horizontal product | Social media planning and publishing | seeded_not_qualified | gitroomhq/postiz-app, inovector/mixpost, brightbeanxyz/brightbean-studio |
| U28 | horizontal product | Newsletter and audience publishing | seeded_not_qualified | knadh/listmonk, TryGhost/Ghost |
| U29 | horizontal product | Community and membership | seeded_not_qualified | discourse/discourse, NodeBB/NodeBB, forem/forem |
| U30 | horizontal product | Customer success and account health | thin_or_missing | twentyhq/twenty |
| U31 | horizontal product | Customer feedback and product roadmap | seeded_not_qualified | getfider/fider, logchimp/logchimp, makeplane/plane |
| U32 | horizontal product | Website, CMS and site builder | seeded_not_qualified | WordPress/wordpress-develop, strapi/strapi, payloadcms/payload |
| U33 | horizontal product | Data and internal admin platform | seeded_not_qualified | Budibase/budibase, ToolJet/ToolJet, teableio/teable |
| U34 | horizontal product | ITSM, service catalogue and CMDB | seeded_not_qualified | glpi-project/glpi, RotherOSS/otobo, edmozley/freeitsm |
| U35 | horizontal product | Asset, maintenance and CMMS | seeded_not_qualified | snipe/snipe-it, SuperCMMS/Open-Source-CMMS, Shelf-nu/shelf.nu |
| U36 | horizontal product | Observability, incident and on-call | seeded_not_qualified | OneUptime/oneuptime, grafana/oncall, netdata/netdata |
| U37 | horizontal product | Voice, contact centre and AI receptionist | seeded_not_qualified | fonoster/fonoster, wazo-platform/wazo-platform, ictinnovations/ictcore |
| U38 | horizontal product | Digital asset and media production management | seeded_not_qualified | pimcore/pimcore, ResourceSpace/ResourceSpace, phraseanet/phraseanet |
| U39 | shared capability | Identity, tenancy and authorization | seeded_not_qualified | keycloak/keycloak, better-auth/better-auth, ory/kratos |
| U40 | shared capability | Relational data capability | seeded_not_qualified | supabase/supabase, appwrite/appwrite, pocketbase/pocketbase |
| U41 | shared capability | Object and file storage capability | seeded_not_qualified | minio/minio, owncloud/ocis |
| U42 | shared capability | Search and retrieval engine | seeded_not_qualified | meilisearch/meilisearch, opensearch-project/OpenSearch, typesense/typesense |
| U43 | shared capability | Notification delivery | seeded_not_qualified | novuhq/novu, knadh/listmonk |
| U44 | shared capability | Payments and money movement | seeded_not_qualified | juspay/hyperswitch, solidusio/solidus |
| U45 | shared capability | Connector and OAuth catalogue | seeded_not_qualified | activepieces/activepieces, nangoHQ/nango, openintegrationhub/openintegrationhub |
| U46 | shared capability | Workflow, rules and orchestration engine | seeded_not_qualified | flowable/flowable-engine, kestra-io/kestra, temporalio/temporal |
| U47 | shared capability | Analytics and BI engine | seeded_not_qualified | apache/superset, metabase/metabase, cube-js/cube |
| U48 | shared capability | Document and PDF generation | seeded_not_qualified | CarboneIO/carbone, gotenberg/gotenberg, bpampuch/pdfmake |
| U49 | shared capability | OCR and document extraction | seeded_not_qualified | Unstructured-IO/unstructured, PaddlePaddle/PaddleOCR, docling-project/docling |
| U50 | shared capability | Realtime chat and collaboration | seeded_not_qualified | zulip/zulip, mattermost/mattermost, RocketChat/Rocket.Chat |
| U51 | shared capability | Maps, geospatial and routing | seeded_not_qualified | project-osrm/osrm-backend, valhalla/valhalla, maplibre/maplibre-gl-js |
| U52 | shared capability | RPA and browser automation | seeded_not_qualified | Skyvern-AI/skyvern, browser-use/browser-use, aisingapore/TagUI |
| U53 | shared capability | AI assistant and grounded retrieval | seeded_not_qualified | open-webui/open-webui, langgenius/dify, FlowiseAI/Flowise |
| U54 | vertical operating system | Accounting practice operations | seeded_not_qualified | frappe/erpnext, bigcapitalhq/bigcapital |
| U55 | vertical operating system | Construction operations | thin_or_missing | opf/openproject |
| U56 | vertical operating system | Healthcare practice management | seeded_not_qualified | openemr/openemr, Bahmni/bahmni-core, medplum/medplum |
| U57 | vertical operating system | Hospitality property management system | seeded_not_qualified | Qloapps/QloApps, peeraseepat-cell/open-hotel-pms |
| U58 | vertical operating system | MSP service operations | seeded_not_qualified | glpi-project/glpi, RotherOSS/otobo |
| U59 | vertical operating system | Insurance agency, policy and claims operations | thin_or_missing | openimis/openimis-be_py |
| U60 | vertical operating system | Legal practice and matter management | thin_or_missing | ArkCase/arkcase-ce |
| U61 | vertical operating system | Logistics, TMS and fleet operations | seeded_not_qualified | openboxes/openboxes, traccar/traccar |
| U62 | vertical operating system | Mortgage and loan origination | thin_or_missing | apache/fineract |
| U63 | vertical operating system | Property and tenancy management | seeded_not_qualified | microrealestate/microrealestate, open-condo-software/condo |
| U64 | vertical operating system | Real-estate brokerage and listings | thin_or_missing | etewiah/property_web_builder |
| U65 | vertical operating system | Staffing and recruiting agency operations | thin_or_missing | opencats/OpenCATS |
| U66 | vertical operating system | Field service management | seeded_not_qualified | odoo/odoo, frappe/erpnext |
| U67 | vertical operating system | Education administration and SIS | seeded_not_qualified | GibbonEdu/core, frappe/education |
| U68 | vertical operating system | Restaurant, reservation and POS operations | seeded_not_qualified | tastyigniter/TastyIgniter, opensourcepos/opensourcepos |

## Thin families requiring targeted discovery

- **U24 Employee onboarding and offboarding:** Provisioning checklists, documents, access handoffs and completion evidence span systems.
- **U30 Customer success and account health:** Accounts, onboarding, health signals, renewals, playbooks and outcomes form a post-sale lifecycle.
- **U55 Construction operations:** Jobs, schedules, RFIs, change orders, subcontractors, progress claims and site evidence form the core.
- **U59 Insurance agency, policy and claims operations:** Parties, policies, coverages, claims, evidence, renewals and regulated decisions form the core.
- **U60 Legal practice and matter management:** Clients, conflicts, matters, time, documents, deadlines, trust boundaries and billing form the system.
- **U62 Mortgage and loan origination:** Applicants, applications, products, conditions, documents, underwriting and closing form a governed lifecycle.
- **U64 Real-estate brokerage and listings:** Properties, listings, leads, viewings, offers, agents and documents form a specialised sales system.
- **U65 Staffing and recruiting agency operations:** Candidates, clients, jobs, submissions, placements, timesheets and commissions exceed a generic ATS.

"Seeded" means only that at least two plausible repository identities are known. It does not mean either is a good product base. Several seeds are composite ERP products or pattern references and may fail the archetype bar after source reading.

## What happens next

1. **Product-bar pass:** define required entities, states, authority and exclusions for all 68 families.
2. **Coverage sweep:** build a 3–5 candidate funnel per family from the local estate, prior 500-candidate corpus, template sweep and targeted GitHub search. Expect roughly 250–350 assignments before overlap compression.
3. **Tier every source:** complete product, framework/engine, primitive or pattern. A deployable primitive must never count as usable product supply.
4. **Select finalists:** preferred product, product alternative and engine/framework fallback—or an explicit Actionist-owned gap.
5. **Compress overlaps:** only after family coverage, reduce the likely 200+ unique discovery identities to the 40–80 highest-leverage sources and take the deepest 20–30 through module contracts and the deterministic composer.

## Boundary

Research only. The live GitHub checks in this correction establish discovery identities and examples, not source quality, host fit, execution, qualification or admission.
