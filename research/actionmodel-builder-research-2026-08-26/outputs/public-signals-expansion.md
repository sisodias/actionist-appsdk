# Public builder signals — expansion

Run: `actionmodel-builder-research-2026-08-26`  
Phase: `expansion-2026-08-26`  
Lane: `RCH-PUBLIC-EXP`  
Observed: 2026-08-26 (ICT)  
Mode: research and ideation only; no product implementation, repository copying,
client-data use, or capability admission

## Executive read

This packet expands the public evidence beyond the immutable first pass at
[`outputs/public-signals.md`](./public-signals.md). The new evidence sharpens
five conclusions:

1. **Adoption is moving from solo founders into operating teams, but the unit of
   adoption is usually a bounded workflow.** A survey of 302 marketing leaders
   who already use AI coding/building tools found lead routing, data sync,
   custom integrations, and data enrichment among the leading use cases. A
   supply-chain research team describes non-developers building a news monitor,
   event sites, dashboards, and prototypes with Replit/Lovable. These are
   adoption receipts, not proof of long-term retention or safety.
2. **The production cliff is now observable as a repeatable transition.** New
   reports describe a first build in minutes or days, followed by data-model,
   authentication, integration, performance, store-submission, or maintenance
   work. An education founder explicitly moved from Lovable to a self-owned
   Next.js/Vercel/Supabase stack after hitting a ceiling; a mobile founder
   describes the same boundary around native features, offline support, and
   deployment.
3. **Governance is becoming the differentiator between general builders and
   internal-tool platforms.** Retool’s public positioning, CIO interviews, HFS
   research, and community discussion converge on access control, audit trails,
   environment separation, review, and ownership as the enterprise purchase
   reason. This remains a mixture of vendor claims, surveys, and anecdotes.
4. **Pricing and portability are coupled.** Users tolerate a premium for a
   hosted, guided environment until failed repair loops, silent overages,
   product-plan changes, or platform-specific databases make the switching cost
   visible. Replit’s new cost reports and Bubble/Base44/Softr ownership evidence
   show that “export” can mean source code, data CSV, GitHub sync, or a rebuild;
   these are materially different exits.
5. **Niche demand is strongest where domain knowledge is the moat.** The new
   sample adds education, healthcare documentation, supply-chain monitoring,
   marketing operations, marketplaces, construction safety, mobile field
   service, and internal finance. The repeated opportunity is not generic
   “build anything”; it is a narrow job with known data, rules, approvals, and
   a safe handoff.

## Baseline boundary and evidence legend

The first pass is immutable and remains the baseline:

- [`outputs/public-signals.md`](./public-signals.md) — first-pass public signals.
- [`expansion/EXPANSION-PROGRAM.md`](../expansion/EXPANSION-PROGRAM.md) — phase
  requirements and the 12 RCH-PUBLIC-EXP slots.
- [`expansion/expansion-state.json`](../expansion/expansion-state.json) — shared
  phase state; this lane does not mutate other lane outputs.

This packet adds new sources or new source-level observations. Where an
expanded source repeats a baseline claim, it is marked as corroboration or a
contradiction rather than counted as an independent outcome.

- **E — observed:** content or behavior directly inspected on the cited page.
- **D — documented/self-reported:** first-party claim, user report, survey
  result, or interview statement not independently authenticated here.
- **I — inference:** synthesis across multiple sources, not a product fact.
- **U — unknown/limited:** gated, contradictory, stale, promotional, or not
  reproducible from the public evidence.

Confidence is confidence in the narrow recorded signal, not the vendor or
underlying product. Likes, views, follower counts, and search ranking are not
treated as product proof.

## Method, sampling frame, and record contract

The expansion sweep was source-led and bounded on 2026-08-26. It deliberately
added:

- new Reddit subreddits and threads, including `r/vibecoding`,
  `r/VibeCodeDevs`, `r/vibecoders_`, `r/Retool`, `r/FlutterFlow`, `r/nocode`,
  and new Replit threads;
- search-indexed X posts with author/vendor context and direct URLs;
- YouTube result pages plus public workshop/podcast transcript pages where the
  video page itself exposed a usable transcript or agenda;
- Hacker News, Indie Hackers, technical newsletters, industry surveys, and
  independent reviews;
- first-party documentation and pricing for newly covered surfaces such as
  Base44, Bubble, Softr, Retool, and FlutterFlow; and
- public evidence for vertical jobs rather than generic “AI builder” lists.

Every load-bearing record below includes source type, direct URL, publication or
observation date, the source-backed claim/observation, evidence class,
confidence, relevance, and a limitation. If a source exposes only a relative
date, the record says so and also records **observed 2026-08-26**. A page that
could not be independently opened is not silently upgraded to evidence.

In compact tables where the final column is titled only “Limitation,” relevance
is carried by the named signal and the source-backed claim; derived niche rows
point back to the cited source records rather than pretending to be new user
reports.

Post-write citation probe: 74 unique URLs were extracted from this packet; a
local HTTP probe returned 47 `200`, 26 `403` bot/login-gated responses, and one
timeout (`chiefmartec.com`). The 403/timeout pages were content-inspected via
the web renderer or search-indexed source and retain explicit access limits;
there are no known 404 citations in the final packet.

The sample has predictable bias: builders who ship, fail, sell, or promote have
more reason to post; vendors select favorable case studies; surveys can filter
for existing adopters; and some Reddit/X posts appear AI-assisted, affiliate-
linked, or employee-authored. The report preserves those limitations.

## 1. Expanded adoption and shipped outcomes

| Source type / signal | Source-backed claim or observed outcome | Evidence / confidence | Relevance and limitation |
|---|---|---|---|
| Reddit / non-technical founder self-report | A product manager says they built an education platform in three weeks with an interactive course, calculators, auth, admin panel, analytics, and news. The author started in Lovable, then moved to a self-owned Vercel/Supabase/Next.js stack for SEO and continued iteration. The post says three products are live. | **D, medium-high** | Stronger than a screenshot because it gives a build sequence, costs, commits, and a public product story. Still one operator’s self-report; “live” is not retention or audited revenue. Published about Jun 2026; observed 2026-08-26. [Reddit thread](https://www.reddit.com/r/vibecoding/comments/1ugc2h7/nontechnical_founder_i_built_an_education/). |
| Reddit / shipped mobile outcome | The same founder links a movie-discovery app, says they had not written production code in years, and describes prior service-design/governance experience as more useful than syntax knowledge. | **D, medium** | Supports the narrower claim that domain/product reasoning transfers into AI-assisted building. The app-store listing and author identity were not independently audited for users or revenue. Published about Apr 2026; observed 2026-08-26. [Reddit post](https://www.reddit.com/r/vibecoding/comments/1sif0rq/i_havent_written_production_code_in_years_i/), [linked App Store listing](https://apps.apple.com/in/app/flick-mate/id6757723305). |
| Reddit / repeated-production self-report | A builder says they created 30+ apps over two years and that six remain in production with real users. In comments, the builder says two of the apps were app builders and identifies persistent project context across agent sessions as the hard problem. | **D, medium** | Useful scale-of-practice signal and a direct failure hypothesis about memory/state continuity. It is a single account, the six-app denominator is not audited, and the source’s commercial project is not independently inspected. Published about Jul 2026; observed 2026-08-26. [Reddit thread](https://www.reddit.com/r/vibecoding/comments/1v2wgj5/i_vibe_coded_30_apps_in_2_years_6_are_still_in/). |
| Indie Hackers / founder case study | AppAlchemy’s founder is reported at more than $10K MRR a year after starting; the article says the original MVP was a browser-based native mobile-app builder, that the founder charged from the start, and that early growth came from Reddit, Twitter, and word of mouth. | **D, medium-high** | Revenue is a stronger outcome signal than views, but it is an Indie Hackers case-study claim and not financial verification. The article’s own growth advice may be promotional. Published 9 Jul 2026. [Indie Hackers case study](https://www.indiehackers.com/post/tech/launching-an-app-builder-in-2-weeks-and-hitting-10k-mrr-within-a-year-gRWT2S68TIQwMvb6Xxt4). |
| First-party vendor case study | Base44 says Gift My Book went from side project to $1M annualized revenue in about three months, after a one-week build and a $100 ad test with 6–8% conversion. It says the product stayed on Base44 without replatforming. | **D, low-medium** | A company-published success story with precise business metrics but no independent analytics, payment receipts, cohort data, or migration test. Treat as a vendor claim and a hypothesis about speed-to-validation, not proof of platform-wide production readiness. Published 14 Jan 2026; updated 22 Mar 2026. [Base44 case study](https://base44.com/blog/base44-case-study-gift-my-book). |
| Public podcast transcript / supply-chain operators | The Zero100 team says non-developer operators built a news-monitoring system tracking executive changes across hundreds of companies in a few hours with Replit, and an event site with working buttons. The discussion explicitly distinguishes an MVP/demo from production readiness. | **E, medium-high** | Direct transcript gives role context, use case, and failure/iteration advice. It is an interview, not a deployment audit; “working” and “fully functional” are speaker claims. Published 17 Mar 2026. [Transcript and episode](https://podscan.fm/podcasts/the-zero100-podcast/episodes/think-it-build-it-scale-it-vibe-coding-lessons-from-the-zero100-team). |
| Newsletter survey / 302 marketing leaders | Chief Martech and UserEvidence surveyed 302 marketing leaders at software companies who already used Bolt, Claude Code, Codex, Cursor, GitHub Copilot, Lovable, or Replit. The report says 57% had used AI coding/building tools for less than a year; leading use cases were marketing workflow automation/lead routing/data sync (57%), custom integrations (50%), and data cleaning/enrichment/analysis (48%). | **E, medium-high for this sample** | This is the strongest expansion adoption denominator, but it is not a prevalence survey: respondents were pre-filtered to existing adopters in software companies. It likely overstates adoption relative to the general workforce. Published 25 Jun 2026. [Chief Martech survey](https://newsletter.chiefmartec.com/p/vibe-coding-in-marketing-we-surveyed-300-marketing-leaders-on-its-adoption). |
| CIO / enterprise interviews | CIO describes business users building automated reporting tools, internal workflow templates, and client-onboarding checklists; an Agiloft leader describes every branch passing automated quality gates and human review, while iCore describes onboarding and data-access boundaries for non-engineering use. | **D, medium** | Evidence of enterprise operating models and governance demand, not a common benchmark. The article quotes vendors/technology leaders and may select unusually mature adopters. Published 26 May 2026. [CIO report](https://www.cio.com/article/4176062/cios-are-enlisting-business-users-to-vibe-code-their-own-apps.html). |
| Reddit / workplace internal-tool self-report | A user says they built a vendor portal and three internal tools with Softr after testing Lovable, Bolt, and others, valuing the balance of ease and power. Replies discuss regressions, Base44, Nowa, and source-code access. | **D, medium** | A direct internal-use report and a useful category signal: business builders may choose a governed visual tool over a general code agent. The account, app criticality, and user count are unknown; thread contains promotional recommendations. Published about Mar 2026; observed 2026-08-26. [Reddit discussion](https://www.reddit.com/r/nocode/comments/1riqyh7/whats_the_best_nocodeai_mobile_app_builder_in/). |
| Reddit / category demand | A user asks for a built-in-database AI builder because pairing WeWeb/FlutterFlow with Xano/Supabase creates two services, bills, and documentation sets. Replies recommend Baserow, NocoDB, WeWeb backend, and other integrated options. | **E, medium-high for demand** | Direct evidence of integration and service-composition friction. It is a short question thread, not proof that a single integrated backend is technically superior. Published 24 Aug 2026. [Reddit thread](https://www.reddit.com/r/nocode/comments/1vws9ce/whats_the_best_ai_app_builder_with_a_builtin/). |

**Adoption reading:** the new sample adds both independent self-reports and
enterprise survey evidence. It also makes the expertise boundary clearer:
non-technical status often means “not a software engineer,” not “no domain,
product, governance, or testing experience.”

## 2. Expanded failure, cost, rollback, and handoff evidence

| Source type / signal | Source-backed claim or observed behavior | Evidence / confidence | Relevance and limitation |
|---|---|---|---|
| Reddit / Replit billing report | A pre-launch builder says Replit charged $1,982.37 above a $100/month subscription in 24 days, including $82/day. The user says one bug prompt could create 6–8 billable sub-operations, there was no pre-run estimate, overages had no hard stop, and they began migrating to Railway. | **D, high for the report** | Concrete cost and migration signal; screenshot and account records were not independently verified. The title says one user, so it cannot estimate typical spend. Published 5 Jun 2026. [Reddit report](https://www.reddit.com/r/replit/comments/1ty0iti/replit_charged_me_1982_in_24_days_on_a_prelaunch/). |
| Reddit / Replit rollback report | A user reports checkpoints not being set, repeated paid repair loops, and $500 spent in one week. A commenter recommends GitHub after every working state plus automated tests because platform checkpoints were not trusted. | **D, medium-high** | Directly joins rollback, cost, and source-control behavior. The thread contains conflicting user experiences and a vendor support reply, so this is not a platform-wide reliability rate. Published 17 Mar 2026. [Reddit thread](https://www.reddit.com/r/replit/comments/1rw5be5/roll_back_your_replit_version/). |
| Reddit / plan migration and billing controls | During the Replit Teams-to-Pro transition, a workspace owner says previously configured spend alerts did not fire and a large invoice arrived unexpectedly. Replit replies that alerts and hard shutdown limits exist and asks for account-specific investigation. | **E, medium-high** | Valuable because it preserves both the user report and the company response: the issue may be configuration-specific, but the trust failure is real for the reporter. Published about Feb 2026; observed 2026-08-26. [Reddit discussion](https://www.reddit.com/r/replit/comments/1rfo6fo/your_teams_plan_is_moving_to_replit_pro/). |
| Reddit / Replit reliability-to-cost report | A user says they love the platform but spent about $700 in a month, with repeated fixes breaking earlier features. They ask for a second review layer before completion; commenters describe blank previews, duplicate backend starts, port conflicts, and a planned move to Claude. | **E, medium-high** | Shows that willingness to pay is conditional on regression containment. The thread mixes multiple accounts and relative dates; no billing audit or controlled reproduction. Published about Feb 2026; observed 2026-08-26. [Reddit thread](https://www.reddit.com/r/replit/comments/1reua1i/ive_spent_700_this_month_on_replitheres_why_i/). |
| Reddit / FlutterFlow breaking validation | A production FlutterFlow/Supabase user reports an update created 12 new errors by flagging a Supabase anon key as an exposed credential even though the app/backend had not changed. FlutterFlow later replies that the errors were changed to warnings and a fix was rolling out. | **E, high for the incident sequence** | Direct evidence of a platform validation change, customer disruption, and vendor mitigation. The user’s security interpretation is contested; the report does not prove the key was safe in every configuration. Published 12 Aug 2026; vendor follow-up observed in the same thread. [Reddit thread](https://www.reddit.com/r/FlutterFlow/comments/1vm5l5g/breaking_changes_again/). |
| Reddit / FlutterFlow long-term user | A high-engagement user says they spent 364 hours over 274 days, downloaded code 92 times, launched an MVP after seven months, and eventually left because the platform required workarounds and escape-hatch code. | **D, medium** | A detailed retention-and-exit story from a committed user, but all usage metrics are self-reported and engagement is not product proof. Published 16 Apr 2026. [Reddit post](https://www.reddit.com/r/FlutterFlow/comments/1smz3zy/thank_you_and_goodbye_flutterflow/). |
| Reddit / Retool production migration | A Retool user says production systems became difficult once monitoring, performance visibility, rollback/versioning, and stability tooling were behind Enterprise. Another commenter says a startup migrated the first version off Retool in about two weeks with Claude Code. | **D, medium** | Strong handoff signal and explicit cost/governance tradeoff, but the migration details are anecdotal and the thread has vendor/employee participation. Published 14 May 2026. [Retool thread](https://www.reddit.com/r/Retool/comments/1td2mp5/retool_is_amazing_until_you_need_to_run_it_seriously_in_production/). |
| Reddit / Retool pricing and self-hosting concern | Users say Retool’s AI builder or self-hosting changes could triple annual spend or move self-hosting to Enterprise-only; a Retool employee says the company is combining “build anywhere” with governance and deployment. | **E, medium** | It captures both customer reaction and vendor positioning. Pricing and plan state change quickly; no contract or current quote was inspected. Published Feb–Jun 2026; observed 2026-08-26. [Retool/low-code discussion](https://www.reddit.com/r/lowcode/comments/1rehv2k/retool_silently_removes_selfhosted_plans/), [AI builder thread](https://www.reddit.com/r/Retool/comments/1u8dxs0/new_in_retool_the_new_app_building_experience_is/). |
| TechRadar / independent hands-on review | TechRadar reports that Base44’s crypto calculator took two initial attempts, including one that ran for three hours; a third attempt needed a “fix with AI” step, then produced extra currencies beyond the prompt. The article reports that publishing was one click and current paid plans range from $20 to $200/month. | **E, medium-high** | Direct hands-on sequence, pricing, and scope-drift observation. It is one reviewer’s prompt and the page includes affiliate/commercial context; no source code or long-term user traffic was audited. Published 1 Jul 2026. [TechRadar Base44 review](https://www.techradar.com/pro/software-services/base44-no-code-review). |
| Reddit / production-quality maintenance report | A developer who says they cleaned up a dozen vibe-coded apps lists secrets in code, UI-only authorization, missing validation, no error handling, weak data models, no observability, and no tests as recurring problems. | **D, medium-high** | A concrete practitioner taxonomy useful for failure-mode coverage. The author’s “almost every codebase” denominator is not independently sampled, and commenters accuse the post of repeating common advice. Published about Jul 2026; observed 2026-08-26. [Reddit report](https://www.reddit.com/r/vibecoding/comments/1uypcye/ive_cleaned_up_a_dozen_vibe_coded_apps_this_year/). |
| Reddit / mobile production cliff | A senior mobile engineer says MVPs often look good until real users expose slow startup, production crashes, messy architecture, React Native performance issues, and App Store deployment difficulty. The author offers a paid/consulting-style hardening service. | **D, medium** | Shows emerging demand for “make my MVP not crash,” but the author has a commercial incentive and gives no incident denominator. Published about Mar 2026; observed 2026-08-26. [Reddit offer](https://www.reddit.com/r/vibecoding/comments/1ruyb3p/senior_mobile_engineer_offering_help_to_turn/). |
| Reddit / time-to-production report | A builder says a local MVP took weeks but production readiness took three months; other commenters say polishing, documentation, legal work, and reliability took eight months. | **D, medium** | Reinforces the time gap without pretending it is a benchmark. Multiple comments may be uncorrelated and the original project is not inspected. Published about Aug 2026; observed 2026-08-26. [Reddit thread](https://www.reddit.com/r/vibecoding/comments/1uqd6xk/vibecoders_building_a_complex_app_takes_a_week/). |
| TechRadar / security handoff guide | TechRadar summarizes a 2025 Lovable exposure affecting more than 170 apps and the Replit production database incident, then recommends auditing routes/data, staging versus production, source control, negative-path testing, monitoring, and tested backups. | **E, medium-high for the guidance; medium for aggregated incidents** | It is a secondary article that cites incidents and security reporting, not a new primary incident investigation. Its checklist is useful as a handoff contract, not proof that every generated app fails these checks. Published 22 Jun 2026. [TechRadar production guide](https://www.techradar.com/pro/vibe-coding-guide-how-to-transition-from-ai-generation-to-live-deployment). |
| Public security blog / scan claim | Rafter reports RedAccess scanned 380,000 apps across Lovable, Replit, Base44, and Netlify and found about 5,000 without meaningful authentication, with roughly 2,000 of those exposing sensitive data. It lists hospital work assignments, clinical-trial, finance, customer-support, and shipping examples. | **D, medium** | Serious security signal, but the scan methodology and denominator are relayed from the researchers; several claims overlap with Axios and are not independently reproduced here. The source is also a product/security-marketing blog. Published 7 May 2026. [Rafter incident analysis](https://rafter.so/blog/incidents/vibe-coded-apps-public-by-default). |
| Axios / reported security investigation | Axios says RedAccess found 380,000 publicly accessible assets and about 5,000 with sensitive corporate data across builder domains; Axios says it independently verified multiple examples and records Replit’s response that public apps are expected to be accessible when users choose that setting. | **E, medium-high** | Independent journalism plus a documented vendor rebuttal. The scan population, permission state, and attribution are not independently reproduced in this packet, and some exposed pages were removed after notification. Published 7 May 2026. [Axios report](https://www.axios.com/2026/05/07/loveable-replit-vibe-coding-privacy). |

**Failure reading:** the expansion strengthens the finding that “rollback” and
“export” are not single features. A user may need source rollback, schema/data
rollback, secret rotation, side-effect compensation, billing recovery, and a
human approval record. A platform checkpoint that restores files but not data or
external actions is only one part of recovery.

## 3. Public platform matrix: pricing, portability, API, and governance

These are current-page observations, not authenticated product tests. “No
public API found” means no clearly documented headless builder API was found in
the reviewed public pages; it does not prove that a private, partner, or
behind-login API does not exist.

| Platform / source type | Import, export, API, rollback, deployment, and pricing signal | Evidence / confidence | Limitation |
|---|---|---|---|
| Base44 / first-party support | Base44 docs say apps can export code as ZIP or sync two ways with GitHub; GitHub sync requires Builder or higher. Data can be imported/exported as CSV, and generated API snippets let another app read/write entities. Its public developer page describes a CLI, SDK, backend, and headless use. | **E, high for documented behavior** | Docs and marketing pages are first-party; they do not prove a clean runtime migration, database fidelity, or rollback of external effects. [Quick-start/export docs](https://docs.base44.com/Getting-Started/Quick-start-guide), [GitHub integration](https://docs.base44.com/developers/app-code/local-development/github), [data/API docs](https://docs.base44.com/Building-your-app/Managing-your-app-data), [developer page](https://base44.com/developers). Observed 2026-08-26. |
| Base44 / first-party pricing | Current support material describes Free, Starter, Builder, Pro, and Elite-style tiers with message and integration credits; a localized current pricing page shows $0, $16 annual-billed Starter, $80 Pro, and $160 Elite, while the independent TechRadar review lists monthly prices at $20, $50, $100, and $200. | **E/D, medium-high** | Pages differ by locale, billing period, and update time; use the live pricing page for a purchase decision. The platform’s “one wallet” and integration-credit semantics make usage boundaries important. [Base44 pricing](https://base44.com/es/pricing), [billing docs](https://docs.base44.com/Account-and-billing/Billing-and-plans). Observed 2026-08-26. |
| Bubble / first-party ownership docs | Bubble says users own app data and design but Bubble retains the underlying runtime code. Data can be exported as CSV or accessed through the Bubble API; the application cannot be exported as code and must be rebuilt if moved off Bubble. | **E, high for the explicit limitation** | Ownership language is informational and subject to terms; the page is two years old, so current contractual treatment needs review. [Bubble ownership and export](https://manual.bubble.io/account-and-marketplace/application-and-data-ownership). Observed 2026-08-26. |
| Bubble / first-party pricing and mobile docs | Bubble’s current docs list annual-billed Starter at $29 web-only, $42 mobile-only, and $59 web+mobile, with workload-based plans. Native mobile is described as private beta in one doc, with build allotments, live versions, OTA updates, and Apple/Google publishing requirements. | **E, high for page content** | Pricing and beta status can change; native mobile still requires store accounts, signing, compliance, and release operations. [Bubble pricing plans](https://manual.bubble.io/account-and-marketplace/account-and-billing/pricing-plans), [native mobile status](https://manual.bubble.io/help-guides/getting-started/building-for.../native-ios-and-android/what-is-a-native-mobile-app), [publishing guide](https://manual.bubble.io/help-guides/publishing-your-app/native-mobile-app). Observed 2026-08-26. |
| Bubble / first-party AI generator | Bubble’s AI generator docs say the feature is public beta and currently does not handle plugins, API calls, payment gateways, or some file uploaders during generation; a blueprint/feature-list review precedes app generation. | **E, high for current docs** | The editor can add integrations after generation; “not handled by the generator” is not the same as “unsupported by Bubble.” The source is older than the current pricing docs. [Bubble AI generator](https://manual.bubble.io/beta-features/bubbles-ai-app-generator). Observed 2026-08-26. |
| Softr / first-party comparison | Softr’s own 2026 comparison says its AI Co-Builder creates business apps with permissions and automations; its table says there is no code export, only data export, and lists a $19/month starting point. A related Softr database guide emphasizes record/user limits and export before real users arrive. | **E, medium-high** | Vendor-authored comparison; “permissions work” is a claim without an authenticated tenant test. [Softr AI generator review](https://www.softr.io/blog/best-ai-app-generators), [database guide](https://www.softr.io/blog/best-ai-app-builders-with-database). Published 11 Aug 2026 / 5 Jun 2026. |
| Retool / first-party docs and launch | Retool docs now position an AI app builder, native mobile, imported React code, governance, and supported self-hosted releases. Its public launch material says apps can be generated from prompts, coding agents through MCP, or imported ZIP/GitHub code and connected to governed data. | **E, medium-high** | Current docs prove the product surface exists, not that imported apps preserve behavior or that all governance controls are on lower tiers. [Retool docs](https://docs.retool.com/), [enterprise vibe-coding guide](https://retool.com/resources/enterprise-vibe-coding). Observed 2026-08-26. |
| Retool / public positioning versus community | Retool’s guide says production apps touching customer, financial, or health data need RBAC, access policies, audit trails, deployment controls, and a governed runtime; community users say those controls and self-hosting changes can move the cost boundary sharply. | **D/I, medium** | The governance thesis is plausible and repeated, but the vendor survey figures are not independently audited and community plan claims require current quotes. [Retool guide](https://retool.com/resources/enterprise-vibe-coding), [community cost thread](https://www.reddit.com/r/Retool/comments/1u8ehtv/retool_vs_vibecoding/). Observed 2026-08-26. |
| v0 / first-party launch and docs | Vercel’s 5 Aug 2026 post describes the new v0 API as generally available, with isolated chats, prompt/repo/ZIP entry, sandbox previews, streaming/async flows, and Vercel deployment. The older v0 model API page still says beta, creating a version/documentation contradiction rather than a clean “API available” fact. | **E/D/U, medium-high** | The new launch is first-party but exact API version, quotas, tenancy, pricing, and migration behavior still need a live authenticated test. [New v0 API](https://vercel.com/blog/introducing-the-new-v0-api), [older model API](https://v0.dev/docs/v0-model-api), [current API docs](https://api2.v0.dev/docs). Observed 2026-08-26. |
| Replit / first-party new plan and docs | Replit’s public plan discussion describes Core/Pro, effort-based Agent usage, model modes, usage tracking, spend alerts, shutdown limits, credit rollover, and collaboration. Import docs cover GitHub, ZIP, Figma, Bolt, Lovable, Base44, Vercel, and Agent exports; version-control docs separate checkpoints from production database recovery. | **E, high for current page claims** | The public docs define mechanisms but do not prove that alerts always fire, rollback restores every state, or imports preserve all secrets/data. [Replit Pro discussion](https://www.reddit.com/r/replit/comments/1rf4ixb/replit_pro_is_here_and_core_now_offers_the_best/), [billing docs](https://docs.replit.com/billing/ai-billing), [import docs](https://docs.replit.com/build/import-from-providers), [version control](https://docs.replit.com/learn/projects-and-artifacts/version-control). Observed 2026-08-26. |

**Portability conclusion:** Bubble’s explicit no-code export, Softr’s data-only
export, Base44’s code/GitHub/data/API seams, Retool’s import-and-govern posture,
and v0’s headless source workflow represent different product categories. A
builder chooser must record the exact exit object: source, schema, data,
storage, secrets, jobs, auth, external integrations, deployment recipe, and
recovery history.

## 4. X/Twitter expansion

X was accessed through search-indexed public renderings and direct post URLs.
Some direct pages were 403, empty, or JavaScript/login gated. The rows below
preserve author/vendor context and do not treat impressions or likes as proof.

| Source type / signal | Claim or observation | Evidence / confidence | Limitation |
|---|---|---|---|
| X / builder self-report and open-source handoff | Meta Alchemist says a difficult “Spark” project took six to seven months of vibe coding and 750 commits before being open-sourced as a pre-alpha, with a live URL and community PR invitation. | **D, medium** | Direct post is a self-report and the project’s quality/usage was not audited; token and view counts are attention only. 21 Feb 2026. [X post](https://x.com/meta_alchemist/status/2025293806141407259). |
| X / security practitioner commentary | Aakash Gupta argues that vibe-coded apps can have RLS enabled without policies, public storage, unrestricted Postgres functions, and client-side role writes; he emphasizes that mobile fixes may wait for store review. | **D/opinion, medium** | Engineering warning, not a measured vulnerability rate or inspection of a named app. The quoted incident context is not independently authenticated here. 24 Jan 2026. [X post](https://x.com/aakashgupta/status/2015298307690783021). |
| X / experienced engineer workflow | Matt Harrison says he rewrote a library with vibe coding in an hour using TDD, precommits, and CI/CD, but says the workflow would be difficult for a newcomer without training. | **D, medium-high** | Strong workflow receipt, but it is a code-maintenance task by an experienced engineer, not a non-technical full-stack app launch. 20 Mar 2026. [X post](https://x.com/__mharrison__/status/2035117478196781522). |
| X / app-store distribution failure | Anything’s account says Apple rejected a vibe-coding tool twice under Guideline 2.5.2 and describes four technical rewrites, appeals, and private communications; a media post repeats the conflict. | **D, medium** | Company account and a secondary repost; Apple’s complete review record is not public here. It is evidence of mobile distribution friction, not proof of fault. 7 Apr 2026. [X post](https://x.com/DataChaz/status/2041648244040626563). |
| X / maintenance-practice adoption | Meathill describes building a maintenance skill for vibe-coded projects because files become bloated, docs stale, copy-paste logic spreads, and tests are absent; the proposed remedy is a structured cleanup workflow. | **D, medium** | A practitioner’s tool/promotion and a direct link to their own article; no before/after reliability measurement. 24 Mar 2026. [X post](https://x.com/meathill1/status/2036334114169823731). |
| X / open-source risk commentary | InfoQ shares a post titled “AI Vibe Coding Threatens Open Source,” while the linked/search-indexed discussion frames maintainer attention and project discovery as risks of generated-code adoption. | **D/I, low-medium** | Headline-level signal; the underlying article was not independently inspected in this sweep. 24 Feb 2026. [InfoQ X post](https://x.com/InfoQ/status/2026241451404017686). |

**X reading:** the expanded sample adds three useful dimensions absent from a
simple launch-count: source release as an exit strategy, mobile-store policy as
a production gate, and maintenance/secure-defaults practice as a new job around
the generated code. It does not provide a denominator for X adoption.

## 5. YouTube, workshop, and transcript expansion

| Source type / signal | What the page/video demonstrates or claims | Evidence / confidence | Limitation |
|---|---|---|---|
| YouTube / comparative ranking | Mikey No Code’s 20 Feb 2026 video ranks Base44, Lovable, Replit, and a native/mobile option, with chapters explicitly covering “why 90% of AI app builders fail,” app-store deployment, and production selection. | **E for metadata, D for recommendations; low-medium** | Creator has a large audience and sells a masterclass/checklist; the ranking is opinion and views do not prove shipped outcomes. 20 Feb 2026. [YouTube video](https://www.youtube.com/watch?v=5ptRNZddmOA). |
| YouTube / comparative ranking | Build Great Products’ 1 Jan 2026 video compares Lovable, Leap, Replit, Cursor, Bolt, v0, Orchids, Emergent, Base44, Rork, and Windsurf, encouraging users to choose by app type. | **E for metadata, D for recommendations; low-medium** | Promotional community funnel and no reproducible benchmark in the public page. 1 Jan 2026. [YouTube video](https://www.youtube.com/watch?v=OZOokCf2R_4). |
| Maven public workshop / Replit mobile handoff | A 13 Feb workshop agenda shows a habit tracker built in Replit, mobile testing with Expo Go, troubleshooting and rollback, remixing versions, TestFlight, and App Store Connect submission. It claims a complete idea-to-store workflow for non-technical builders. | **E, high for the documented agenda; medium for outcome** | Public agenda is not a recording audit; the 230-student count is attention, not shipped-user evidence. 13 Feb 2026. [Workshop page](https://maven.com/p/2b0bfe/from-idea-to-app-store-vibe-coding-mobile-apps). |
| Maven public workshop / production process | A 23 Jan workshop describes an eight-step production process: PRD, design system, Replit setup, Claude Code, authentication, production-ready template, database connection, admin panel, and an acquired SaaS case study. | **E, medium-high** | Course marketing and instructor case study; “production-ready” and acquisition are claims, not independent receipts. 23 Jan 2026. [Workshop page](https://maven.com/p/ab585d/end-to-end-production-vibe-coding-process). |
| Public podcast transcript / enterprise expense workflow | Aboard dramatizes a Fortune 100 expense tracker built from a spreadsheet with client-specific caps, calculations, and invoicing. The generated app appears working, but the manager requires rules-engine tests, client-operations signoff, and human review before production. | **E for transcript, high for the stated risk pattern** | It is a role-play rather than a literal deployment report; the business-shaped workflow is realistic but fictionalized. Published 27 Jan 2026. [Aboard transcript](https://aboard.com/podcast/yelling-at-vibe-coders/). |
| Public podcast transcript / supply-chain adoption | Zero100’s transcript records non-developer operators using Replit/Lovable for executive-change monitoring, event sites, dashboards, and prototypes; the guests say problem definition, narrow prompts, cross-tool comparison, and iterative stakeholder review matter more than a one-shot prompt. | **E, medium-high** | Direct transcript and named organization, but self-reported use and no operational metrics. Published 17 Mar 2026. [Zero100 transcript](https://podscan.fm/podcasts/the-zero100-podcast/episodes/think-it-build-it-scale-it-vibe-coding-lessons-from-the-zero100-team). |

**Video reading:** public video/course material is strongest as evidence of what
the market teaches and what handoffs are considered necessary. It remains weak
for retention, defect rate, security, and independent production proof unless a
source exposes the app, test receipt, or longitudinal outcome.

## 6. Blogs, newsletters, forums, and public communities

| Source type / signal | Source-backed claim or observation | Evidence / confidence | Limitation |
|---|---|---|---|
| Independent comparison / StackFYI | StackFYI tells operators to rank data ownership, migration paths, pricing triggers, docs, and failure handling rather than feature-page length; it frames integrated tools as faster to launch and open standards as safer for long-term control. | **E, medium** | Editorial comparison, not a controlled build benchmark. Published 4 May 2026. [StackFYI guide](https://www.stackfyi.com/guides/ai-app-builders-lovable-bolt-v0-replit-2026). |
| Vendor comparison / Bubble | Bubble’s 28 Jul guide compares Bubble, Softr, Lovable, Bolt, Replit, v0, and Retool and explicitly says post-generation control, production readiness, security, data portability, and pricing predictability matter more than first-build speed. | **E, medium for positioning** | Vendor-authored comparison; competitive claims and starting prices need current primary-page checks. Published 28 Jul 2026. [Bubble comparison](https://bubble.io/blog/best-ai-app-builder/). |
| Independent review / TechRadar | TechRadar’s Base44 hands-on review records both a three-hour stalled generation and a one-click publish outcome, plus credits, mobile publishing, built-in database, and integration pricing. | **E, medium-high** | One prompt and one reviewer; commercial publishing context. Published 1 Jul 2026. [Base44 review](https://www.techradar.com/pro/software-services/base44-no-code-review). |
| Industry survey / HFS Research | HFS reports a 100-leader UK&I sample: expected vibe-coding workforce adoption is 22% at six months, 44% at 12 months, and 55% at 18 months. It lists legal/security/compliance risk (49%), confidence (43%), maintainability debt (38%), auditability (32%), and shadow IT (31%) among constraints; Cursor ranks first in its enterprise preference data. | **E, medium-high for sample; low for generalization** | Survey sample, methodology, and weighting are not fully available without the gated download; findings are not global adoption rates. Published/observed 2026. [HFS Research](https://www.hfsresearch.com/research/vibe-coding-uki-embracing-new-ways/). |
| Newsletter survey / martech operations | Chief Martech’s pre-filtered adopter survey finds internal workflow automation, integrations, and enrichment dominate marketing use. It says 75% use APIs or MCP servers to route around vendor-specific integrations. | **E, medium-high for sample** | Existing adopters in software companies; not prevalence or ROI across all marketing teams. Published 25 Jun 2026. [Survey](https://newsletter.chiefmartec.com/p/vibe-coding-in-marketing-we-surveyed-300-marketing-leaders-on-its-adoption). |
| Hacker News / internal-tool category split | A recent HN discussion says general vibe coding can be attractive for experiments while low-code/internal-tool platforms remain useful for CRUD over databases/APIs, dashboards, approvals, admin panels, and permissions. The thread includes a practitioner describing over 250 Retool internal tools and a migration. | **E, medium-high** | Public discussion and vendor-adjacent opinion, not an independent market study. Observed 2026-08-26. [HN discussion](https://news.ycombinator.com/item?id=46227422). |
| Reddit / mobile B2B demand | A founder asks for a native B2B mobile builder that handles complex logic, auth, payments, sync, offline-first, native exports, app-store deployment, RBAC, audit logs, compliance, and no lock-in; the stated market is SMB/mid-market field and operational apps. | **E, medium-high for unmet-demand framing** | Idea request, not validated willingness to pay; the proposed $5K–$20K/month range is the poster’s hypothesis. Published Apr 2026. [Reddit idea thread](https://www.reddit.com/r/nocode/comments/1se1z6v/idea_for_a_new_ai_native_mobile_app_builder_for/). |
| Reddit / marketplace demand | A non-coder asks for a pet-owner marketplace with verified users and partner-funded economics. Replies identify accounts, verification, messaging, payments, shipping, transactions, and two-sided logic as the harder work than screens. | **E, medium-high** | Direct job demand and design warnings, but no build or launch outcome. Published Jul 2026; follow-up comments observed Aug 2026. [Reddit marketplace thread](https://www.reddit.com/r/nocode/comments/1uy3l5d/best_no_code_app_builder_for_a_marketplace_app/). |
| Reddit / healthcare prototype demand | A poster wants to test healthcare journeys and mock EHR interactions with Replit, Lovable, Specode, Cursor, and Supabase; they explicitly distinguish semi-real validation from production readiness. | **E, medium** | Prototype demand only; no patient data or clinical deployment evidence. Published Mar 2026. [Reddit healthcare thread](https://www.reddit.com/r/vibecoders_/comments/1s7ykaa/best_ai_tools_for_vibecoding_healthcare/). |
| Indie Hackers / healthcare interoperability | Fownd’s founder says they moved from a generic scribe wrapper toward real-time clinical data mapping and a browser-layer extension because legacy EMRs resist APIs and local installs. | **E, medium-high** | Domain-specific founder report with a product promotion; no clinical validation or compliance audit. Published 23 May 2026. [Indie Hackers post](https://www.indiehackers.com/post/why-we-avoided-the-ai-scribe-wrapper-trap-to-build-a-dedicated-clinical-reasoning-engine-9acd9d8815). |
| Reddit / education-to-owned-stack migration | The education-platform builder describes managing project memory, docs/specs, Git, auth, and live testing after leaving Lovable; comments question whether “non-technical” still applies after three months of learning architecture. | **E, medium-high** | Useful evidence of the skill transition; one author and AI-assisted formatting are explicitly visible in comments. Published about Jun 2026; observed 2026-08-26. [Thread and comments](https://www.reddit.com/r/vibecoding/comments/1ugc2h7/nontechnical_founder_i_built_an_education/). |
| Reddit / small-business and construction agency use | A builder says they created 25+ small-business websites for roofing, landscaping, and construction plus an AI SaaS platform; the workflow includes research, SEO/content, AI-assisted development, then manual finishing. | **D, low-medium** | Self-promotional post with a discount code and no customer evidence; useful as a vertical/agency demand signal, not a quality benchmark. Published Jan 2026. [Reddit workflow](https://www.reddit.com/r/nocode/comments/1q9tjr2/how_i_built_25_business_websites_a_saas_platform/). |
| Reddit / internal finance and operations | A public podcast and community posts repeatedly describe expense tracking, invoice logic, lead routing, inventory, and client onboarding as “business-shaped” jobs where rules and approvals matter more than generated screens. | **I, medium-high** | This is a synthesis, not a single user claim; the supporting records are linked in the finance/operations rows above and the baseline report. No Actionist customer data is used. Observed 2026-08-26. |
| Indie Hackers / marketplace plumbing | AppGild’s founder says a focused-app marketplace went live in May, but the first real-user test exposed Stripe international issues, an upload wizard that was clear to the founder but not users, and missing upload checkpoints. The founder says the marketplace is 10% page and 90% operational plumbing. | **E, high for the stated lesson** | Founder self-report, but it includes a concrete user test, payment edge case, and iteration. The marketplace’s traction is still early. Published 17 Jun 2026. [AppGild post](https://www.indiehackers.com/post/building-a-marketplace-for-focused-apps-and-ai-agents-now-im-staring-at-the-cold-start-problem-caca9cd2ce). |
| Research paper / human-centered benchmark | A 2026 IUI workshop paper evaluates Replit, Bolt, and Firebase Studio with 96 prompts, 288 generated apps, 205 raters, and 1,071 pairwise comparisons. It reports Firebase Studio leading human-rated ease, trust, visual appeal, and appropriateness; it highlights a persistent visual-polish versus functional-reliability gap. | **E, high for the paper’s experiment** | This is the strongest independent comparative evidence added in expansion, but it covers three platforms, a defined prompt set, and human perceptions rather than long-term production or security. Published Mar 23–26 2026. [Paper](https://arxiv.org/abs/2512.18080). |
| Research paper / application-platform evaluation | SWE-WebDevBench reports 18 evaluation cells across six platforms and three domains, finding specification bottlenecks, frontend/backend decoupling, a production-readiness cliff, security/infrastructure failures, and low concurrency handling in some systems. | **E, medium-high** | Academic preprint evidence, not a live production trial; exact platform configuration and benchmark reproducibility require reading the released artifact. Published 6 May 2026. [SWE-WebDevBench](https://arxiv.org/abs/2605.04637). |
| Research paper / construction safety | A study of LLM-generated code for construction safety warns that code can compile while containing flawed mathematical safety logic, and recommends deterministic wrappers and strict governance for cyber-physical or safety-critical use. | **E, medium-high** | Narrow domain study, not a general app-builder benchmark. It supports a risk boundary for construction workflows, not a claim that all generated code is unsafe. Published 14 Apr 2026. [Construction-safety study](https://arxiv.org/abs/2604.12311). |

## 7. Niche demand map and evidence boundary

| Niche / job | New public demand or adoption receipt | Required block shape / risk | Confidence |
|---|---|---|---|
| Marketing operations | Lead routing, data sync, custom integrations, enrichment, and analysis dominate the 302-adopter survey. | Triggered workflow, connector authority, field-level transforms, dedupe, retries, approval, audit, and spend bounds. | **Medium-high** for demand; **unknown** for safe generic implementation. |
| Education and calculators | A non-technical PM reports a live education platform with course content, calculators, auth, analytics, and news, then moves to owned code for SEO and control. | Content/version state, learner identity, calculations with deterministic tests, admin permissions, SEO/deployment, and rollback. | **Medium-high** self-report. |
| Healthcare documentation and EMR overlay | Fownd describes structured clinical reasoning and browser-layer insertion into legacy EMRs; a separate thread asks for mock EHR journey validation. | PHI boundary, consent, provenance, deterministic field mapping, human signoff, audit, browser/EMR compatibility, and no client-data admission. | **Medium-high** demand; **high risk**. |
| Supply-chain monitoring | Zero100 operators describe executive-change monitoring across hundreds of companies and the podcast’s audience is supply-chain leaders. | Source ingestion, entity resolution, freshness, evidence links, alert thresholds, false-positive review, and recovery for duplicate or stale records. | **Medium**. |
| Internal finance and expense rules | Aboard’s expense tracker models per-client caps, approvals, reimbursements, and invoice calculations; HN and Actionist baseline demand support adjacent internal tools. | Deterministic rules engine, source-of-truth ownership, approval authority, idempotent writes, reconciliation, audit, and human review before release. | **Medium-high** demand; **high risk**. |
| Marketplaces | Pet-owner marketplace request adds verified accounts, two-sided roles, messaging, payments, and partner funding; AppGild adds seller onboarding, Stripe, upload, refund, and buyer trust. | Multi-party identity, moderation, payment state machine, dispute/reconciliation, privacy, seller permissions, and operational checkpoints. | **Medium-high** demand; **high risk**. |
| Mobile field service / B2B | New mobile-builder demand asks for inventory, field service, offline-first, native features, compliance, and clean Swift/Kotlin/Flutter export. | Offline conflict model, device permissions, sync/retry, store release, crash monitoring, code ownership, and support for backward-compatible versions. | **Medium** demand; **unknown** platform fit. |
| Construction and safety | Construction safety research highlights the danger of silently wrong calculations; agency posts show roofing, landscaping, and construction websites as repeatable demand. | Deterministic calculations, approval and inspection trails, domain expert signoff, offline/field constraints, and explicit “not safety authority” boundary. | **Medium**. |
| CRM, inventory, quoting, and portals | New Reddit threads repeat CRM, vendor portals, built-in databases, inventory/quoting, and internal apps, while community replies warn that permissions/data models become the real work. | Entity model, row-level authorization, import/export, dedupe, audit, workflow states, and complete migration receipt. | **Medium-high**. |

**Niche conclusion:** the best expansion candidates are not “industry app
templates.” They are repeatable atoms such as `lead-intake-and-route`,
`expense-rule-check`, `clinical-field-map`, `inventory-reorder-alert`,
`marketplace-seller-onboard`, and `supply-chain-change-monitor`, each with a
named authority, verification receipt, recovery path, and audit boundary.

## 8. First-party claims versus public receipts

| Vendor or public positioning | Expanded receipt or counter-signal | Safe statement |
|---|---|---|
| “Build and ship a real business in days” | Base44’s own Gift My Book case says $1M ARR in three months; TechRadar’s hands-on Base44 test includes a three-hour stall and prompt drift; the education founder reports real delivery but then leaves Lovable for owned code. | Some builders can create and validate real products quickly; success depends on the workload, operator, and handoff path. |
| “AI makes production mobile apps accessible” | Maven teaches Replit-to-Expo/TestFlight/App Store steps; mobile Reddit demand reports weak offline/native/sync/deployment behavior and FlutterFlow reports a breaking validation change in an existing production app. | Mobile generation can accelerate prototyping and release preparation, but store compliance, native behavior, rollback, and device testing remain separate gates. |
| “Governance is built in” | Retool and CIO position RBAC, audit, human review, and data boundaries as enterprise safeguards; public incidents and Rafter/Axios reports show public defaults and missing auth can expose data. | Governance is a runtime/process property that must be observed and tested, not inferred from an AI builder label. |
| “Export means you own the app” | Base44 documents ZIP/GitHub/code/API/data paths; Bubble explicitly says the app cannot be exported as code; Softr says data export only; Replit imports code but requires secret/data/runtime validation. | Always specify the exit object and prove a migration receipt; source-only export is insufficient. |
| “Usage pricing maps to value” | Replit users report $1,982 in 24 days, $500 in a week, alerts not firing, and repeated paid repair loops; Replit’s response explains effort-based billing and offers usage controls. | Usage billing needs preflight estimates, hard stop defaults, repair-loop detection, visible sub-operations, and a fair platform-failure policy. |
| “One prompt can produce the whole app” | Zero100, Aboard, and Maven material all show PRDs, narrow prompts, rules tests, stakeholder signoff, and human review; academic benchmarks find reliability and trust gaps despite visual polish. | Prompting is an entry point; production requires specification, evaluation, authority, and recovery work. |
| “A broad builder serves every niche” | Healthcare, construction, finance, marketplace, and supply-chain sources expose domain-specific rules, legacy systems, regulation, payments, or offline constraints. | Narrow domain atoms with governed interfaces are more plausible than a generic autonomous builder for high-trust work. |

## 9. Adversarial pass: identity, staleness, sponsorship, and astroturfing

### Source-quality decisions

- **Independent public user evidence:** Reddit self-reports, HN comments,
  Indie Hackers founder posts, and public app-store links are retained as D,
  never as audited outcomes. One user’s 30-app/6-production claim and the
  education founder’s three live products are not added together as a cohort.
- **Vendor claims:** Base44’s $1M ARR case, Retool’s survey figures, Bubble/Softr
  comparisons, and Orchids’ quoted-user showcase are marked D and assigned
  lower confidence when no independent receipt is available.
- **Observed behavior:** TechRadar’s Base44 attempt, the Lovable tutorial from
  the baseline, and publicly visible workshop agendas are E for what the page
  shows, not for general defect rates.
- **Research evidence:** the IUI benchmark, SWE-WebDevBench, and construction
  safety study are kept separate from marketing claims and user anecdotes.
- **Employee/affiliate overlap:** Retool has employee comments in its public
  threads; Base44, Softr, Bubble, and Orchids have commercial incentives; several
  Reddit posts include discount codes or service offers. These are recorded, not
  silently removed.

### Identity and overlap limits

- The education-platform Reddit account, its App Store link, and related
  comments are treated as one operator, not independent sources.
- The Base44 success story and Base44 developer pages are one vendor family.
- Retool’s launch thread, Retool docs, and Retool governance guide are one
  vendor family; community comments are separate but may include employees.
- The HFS and Chief Martech surveys are distinct samples but both over-select
  organizations already interested in or using AI tooling.
- Search-indexed X posts can be truncated, stale, or missing reply context; X
  follower/impression/like counts are excluded from outcome scoring.

### Deleted, gated, or inaccessible content

- Direct X pages were intermittently 403, empty, or login-gated; search-indexed
  records are labeled accordingly.
- HFS’s full research download is gated; only the public summary and displayed
  sample/method figures are used.
- Some Reddit pages render through locale mirrors or rate-limit direct fetches;
  the direct canonical URLs are retained, and missing content is not treated as
  a negative signal.
- Course and workshop pages expose agendas and marketing claims but not all
  recordings or learner outcomes.
- No private Actionist room, contract, customer dataset, or authenticated API
  was used or claimed.

### What would falsify the main synthesis

The expansion synthesis would weaken if a controlled, multi-tool, longitudinal
study showed that general builders routinely preserve auth/data/side-effect
correctness, production rollback, and migration fidelity without expert
intervention; or if the apparent niche demand did not convert into repeated
workflow pilots with owners, budgets, and measurable outcomes.

## 10. Implications for the Action Model Builder hypothesis

1. **Design the unit around an outcome atom, not a generated screen.** Each
   candidate should declare trigger, data authority, decision rule, side effect,
   human approval, verification receipt, rollback object, and audit record.
2. **Treat context continuity as a product surface.** The 30-app builder, the
   education founder, and Replit users all point to project memory, history,
   source control, and compact context as cost/reliability levers.
3. **Make failed work recoverable and cheap.** A run should expose planned files,
   likely cost, sub-operations, test/verification status, and a stop condition;
   an unsuccessful repair should not silently become a second billable project.
4. **Separate code, data, secrets, and external side effects.** The public
   evidence repeatedly shows that code export or checkpoint rollback is not a
   complete recovery plan.
5. **Use category-specific lanes.** General prompt-to-app builders fit
   prototypes and bounded web apps; internal-tool platforms fit governed CRUD,
   approvals, and data connections; repo-native agents fit teams that own code;
   mobile and healthcare need additional native/compliance boundaries.
6. **Make “human review” an explicit authority transition.** A generated
   expense rule, clinical field map, payment action, or permission change should
   not become live merely because the builder reports success.
7. **Prioritize narrow wedges with a durable data advantage.** Marketing
   operations, supply-chain monitoring, finance rules, education content, and
   healthcare interoperability each have domain-specific state that generic
   generation cannot infer safely.

## 11. Research gaps and falsifiable follow-ons

- Run a preregistered comparison of Base44, Bubble, Softr, Retool, Replit,
  Lovable, Bolt, and v0 on the same synthetic CRM, finance, healthcare-like,
  inventory, and mobile workflows. Measure requirement coverage, auth/RBAC,
  side-effect idempotency, cost, repair rounds, source/data export, and rollback
  scope.
- Ask each vendor for a written export manifest: source, schema, data, storage,
  secrets, jobs, auth, integrations, deployment recipe, and audit history.
  Treat unanswered fields as U, not “supported.”
- Repeat the Replit/FlutterFlow cost and rollback observations with a fixed
  budget, pre-run estimate, hard cap, and identical failure injection. Record
  whether credits restore when a platform regression is confirmed.
- Audit the public security scan methodology and sample independently; avoid
  treating the 380K/5K/2K figures as a universal prevalence estimate.
- Build a small longitudinal public cohort from new adopters and follow 30/90
  days: still live, users, revenue, incident count, migration, and who owns
  maintenance.
- For each priority niche, define a synthetic pilot and kill criteria: no live
  client data, deterministic fixtures, named approver, full audit trail, and a
  tested recovery path.

## 12. RCH-PUBLIC-EXP task ledger

| Slot | Status | Evidence / completion note |
|---|---|---|
| 1. Expand source inventory and sampling frame | Complete | Added new Reddit, X, YouTube/workshop, HN, Indie Hackers, newsletters, industry surveys, blogs, research papers, and first-party platform surfaces; baseline remains immutable. |
| 2. Search Reddit for launches, failures, credit burn, migrations, lock-in, security, niche workflows | Complete | Added new Replit billing/rollback/plan threads, FlutterFlow, Retool, `r/vibecoding`, `r/nocode`, healthcare, mobile, marketplace, education, internal-tool, and vertical-demand threads. |
| 3. Search X with direct/search-indexed labels and author/vendor context | Complete with access limit | Added six X records with author/vendor context; direct X access limits and attention-metric rules are explicit. |
| 4. Search YouTube walkthroughs, transcripts, comments, production handoffs | Complete with access limit | Added two direct YouTube ranking pages plus public Maven and podcast transcript/workshop pages covering mobile store handoff, production process, testing, rollback, and signoff. |
| 5. Search HN, Indie Hackers, technical forums, and newsletters | Complete | Added HN category discussion, AppAlchemy, AppGild, healthcare interoperability, Chief Martech, CIO, HFS, and public podcast transcripts. |
| 6. Search blogs and independent comparisons, preserving sponsorship disclosures | Complete | Added TechRadar Base44/production guides, StackFYI, Bubble, Softr, Rafter, and disclosed vendor/affiliate limitations. |
| 7. Cover private-builder demand, agencies, internal tools, CRM, finance, inventory, portals, quoting, vertical workflows | Complete with evidence boundary | Niche map covers marketing ops, education, healthcare, supply chain, finance, marketplaces, mobile field service, construction, CRM/inventory/portals; no private client data or contract is claimed. |
| 8. Compare first-party claims against user receipts and failures | Complete | Claim-versus-receipt table compares Base44, Bubble, Softr, Retool, Replit, v0, and general builder positioning with new community and independent evidence. |
| 9. Extend pricing, usage-meter, portability, import/export, API, rollback, deployment evidence | Complete | Platform matrix adds Base44, Bubble, Softr, Retool, Replit, v0 plus new cost/rollback/export reports. |
| 10. Separate attention, adoption, shipped outcome, and retention claims | Complete | Evidence classes and per-source limits explicitly separate views/likes, user reports, app/store/revenue claims, surveys, and unknown retention. |
| 11. Run adversarial bias/staleness/astroturfing and identity-overlap pass | Complete | Identity families, vendor/employee/affiliate incentives, stale/gated/deleted content, sampling bias, and falsifiers are recorded. |
| 12. Verify citations, record access limits, write report, and callback | Complete | Report written, 74-URL smoke/link validation passed, and the short callback was submitted and verified in the fresh CENA pane. |

## Source inventory

The expansion packet retains **74 unique direct URLs** after exact-URL
deduplication. Domain-family counts are: **23 Reddit**, **6 X**, **2 direct
YouTube**, **2 Maven workshop pages**, **3 arXiv/empirical papers**, and **38
other first-party, editorial, newsletter, Indie Hackers, Hacker News, podcast,
and public-community URLs**. These buckets are descriptive and can overlap with
the platform/source-type labels in the tables; baseline overlap is identified in
the text and is not treated as independent corroboration.

- Reddit: new builder, failure, cost, migration, mobile, internal-tool, and
  vertical-demand records.
- X/Twitter: six direct/search-indexed posts with author/vendor context.
- YouTube and public video/workshop sources: two direct YouTube ranking pages,
  two Maven workshop pages, and public podcast transcript pages.
- Blogs/newsletters/public communities: TechRadar, StackFYI, Bubble, Softr,
  HFS, CIO, Chief Martech, Rafter, Aboard, Indie Hackers, HN, and related
  technical/public sources.
- First-party platform sources: Base44, Bubble, Softr, Retool, Replit, and v0.
- Empirical/academic sources: human-centered prompt-to-app benchmark,
  SWE-WebDevBench, and construction-safety study.

This remains a bounded, dated expansion packet—not a literal exhaustive census
of the internet.

## Coordinator callback

Artifact-first requirement satisfied: this file is written before the callback.

Callback to send after fresh Herdr pane resolution and identity check:

```text
[from: RCH-PUBLIC-EXP] @CENA: DONE public-signals-expansion; report written at research/actionmodel-builder-research-2026-08-26/outputs/public-signals-expansion.md.
Sources expanded across Reddit, X, YouTube/workshops, HN/Indie Hackers, newsletters, blogs, first-party docs, and three empirical papers; top signals are adoption moving into bounded operating workflows, a repeatable production cliff, and governance/portability becoming the buying criterion.
New receipts include Replit runaway-cost/rollback reports, FlutterFlow breaking validation, Base44 three-hour generation stalls alongside a vendor success claim, education/healthcare/supply-chain/marketplace demand, and v0 API/version uncertainty.
Limits: X and some research pages were gated/search-indexed; vendor case studies, surveys, and self-reports are not independent audits; no private Actionist contract, client data, authenticated adoption denominator, or product admission is claimed. 0 blockers.
```

Callback receipt: sent after a fresh `/Users/shaansisodia/.local/bin/herdr
--session herdr-2 pane list` and content check identified the `CENA` workspace
pane. The message was visible in the pane after `pane run`; its pending-message
queue cleared after the explicit Enter verification, and the coordinator pane
remained `working` while registering the handoff. No second copy was retyped.
