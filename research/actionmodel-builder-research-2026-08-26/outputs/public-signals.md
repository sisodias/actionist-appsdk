# Public builder signals

Run: `actionmodel-builder-research-2026-08-26`  
Lane: `RCH-SOCIAL`  
Observed: 2026-08-26 (ICT)  
Mode: research only; no product implementation or dependency admission

## Executive read

The public record supports a two-speed conclusion:

1. **Prompt-to-app adoption is real.** Builders report launching paid or public
   apps, putting real users through workflows, and using AI builders for CRM,
   inventory, lead-enrichment, internal tools, and client work. The strongest
   examples are self-reports, so they are adoption signals rather than
   independently audited product proof.
2. **The durable boundary is not the first build.** Across Reddit, Hacker News,
   blogs, videos, and product documentation, the repeated handoff point is
   production hardening: stateful integrations, authentication and permissions,
   data migration, environment separation, cost control, observability, and a
   clean path out of the builder.
3. **Portability is a buying criterion.** GitHub sync, export, import, branches,
   and the ability to continue in a normal IDE recur more often than requests for
   another UI-generation trick. A source tree alone is not enough: users also
   need schema/data/secrets migration, reproducible builds, and a rollback
   boundary.
4. **Pricing is a reliability issue.** Users tolerate paying for acceleration;
   they object to paying for agent loops, regressions, opaque effort meters, or
   integration retries. The most repeated economic request is predictable,
   bounded usage, including a way to stop or recover a failed run.
5. **Niche demand is visible but not yet general proof.** CRM, lead follow-up,
   client portals, inventory, quoting, finance operations, and internal tools
   appear repeatedly in real requests and showcases. The Actionist catalogue
   supplies additional first-party demand inventory, but its “Coming soon” cards
   are demand/positioning evidence, not evidence that those automations already
   run in production.

### Evidence legend

- **E** — directly inspected source or observed behavior on the cited page.
- **D** — documented first-party or self-reported claim; not independently
  authenticated here.
- **I** — inference from multiple sources; useful for a hypothesis, not a
  capability claim.
- **U** — unknown, inaccessible, stale, contradictory, or not independently
  verifiable.

“Confidence” describes confidence in the narrow signal as recorded, not in the
underlying product’s overall quality. Community posts can be useful evidence of
friction while still being biased, promotional, AI-assisted, or incomplete.

## Method and sampling limits

This packet used a bounded, source-led sweep on 2026-08-26. It retained direct
URLs and content-backed notes from:

- Reddit builder subreddits (`r/lovable`, `r/replit`, `r/boltnewbuilders`,
  `r/v0_`, `r/nocode`, `r/ArtificialInteligence`, `r/SaaS`, and adjacent
  communities).
- Public builder discussions on Hacker News and Indie Hackers.
- First-party product documentation and pricing pages for Lovable, Bolt,
  Replit, and v0; these are used to compare company claims with user reports,
  not as neutral reviews.
- YouTube/embedded transcripts and public video metadata for Lovable, Bolt,
  Replit, and v0. View/like counts are recorded only as attention signals, never
  as product proof.
- Public blogs and technical walkthroughs, including migration and production
  handoff posts.
- X/Twitter search-indexed post pages. Direct X pages were frequently 403 or
  JavaScript/login gated in this environment, so X excerpts are marked
  search-indexed or promotional unless the linked page was independently
  readable.

The sample is not a random survey. It over-represents people motivated to post
about launches, failures, pricing, or tool comparisons. Several pages contain
affiliate links, vendor sponsorship, founder self-promotion, or AI-assisted
writing. Deleted, archived, gated, and inaccessible content is not silently
treated as absent. No Reddit, X, or YouTube engagement count is treated as a
measure of retention or product quality.

**Record contract:** each signal below names the source type (for example,
Reddit user report, first-party documentation, vendor walkthrough, blog review,
or public-community discussion), states the source-backed claim/observation,
labels evidence class and confidence, gives a direct URL, and records a date.
Where a page has no reliable publication date, the date is explicitly recorded
as **observed 2026-08-26** rather than inferred from search ranking or page age.

## Cross-source findings

### 1. Adoption: from demo to real use, with a large drop at the last mile

| Signal | Source-backed observation | Class / confidence | Interpretation and limitation |
|---|---|---|---|
| Lovable-built workflow product | A maker says Clarko reached 50 users in 48 hours after a quiet launch in the Lovable community, with 100+ automations and actions such as emails, CRM updates, payments, and follow-ups running for real businesses. | **D**, medium | Stronger than a screenshot because it describes users and actions, but it is a founder showcase with no analytics or customer verification. [Reddit post](https://www.reddit.com/r/lovable/comments/1r3r4qf/built_a_saas_with_lovable_and_hit_50_users_in_48/), published about Feb 2026; observed 2026-08-26. |
| Lovable-built micro-SaaS | The WhoSignup maker says the app is live, stable, Stripe-tested, usable by others, and was built part-time in two weeks; the author has 20 years of development experience and explicitly guided the AI with production requirements. | **D**, medium-high | Useful counterweight to “non-technical magic”: expert context and a bounded SaaS can work. It does not prove a non-technical user can reproduce it. [Indie Hackers](https://www.indiehackers.com/post/i-built-my-4th-saas-in-2-weeks-part-time-238b6032b8), 27 Oct 2025. |
| Replit app shipped to stores | A Replit user reports one app now on the App Store, Google Play, and web, while also reporting $200+ consumed in 48 hours during agent loops and months near $400. | **D**, medium | Real-shipping and failure signals coexist in one account, which is more informative than a pure success story. Still self-reported and not independently checked. [Reddit thread](https://www.reddit.com/r/replit/comments/1v59d1b/are_replit_agent_costs_really_that_bad/), July 2026. |
| Paid client-work comparison | A freelancer reports six similar client briefs (auth, dashboard, CRUD, Stripe, deployment) tested across six tools, judging success by continued production use after 30 days: Cursor+Claude 6/6, v0+manual 5/6, Lovable 2/6 (one production site), Replit 1/6, Bolt 0/6, Base44 0/6. | **D**, medium | One operator, six projects, unclear controls and no independent reproduction. It is nevertheless a direct signal that “fastest first demo” and “survives handoff” are different outcomes. [Reddit post](https://www.reddit.com/r/nocode/comments/1tgozdy/tested_6_ai_app_builders_for_client_work_over_2/), about May 2026. |
| Independent multi-tool test | A related post describes the same practical ranking and says Lovable projects often hit a wall by week two, while Bolt produced good demos but was hardest to move out. | **D**, medium | Corroborates the handoff pattern but may be the same author or overlapping sample; do not count as an independent benchmark without identity/method verification. [Reddit post](https://www.reddit.com/r/ArtificialInteligence/comments/1vi2bom/i_tested_6_ai_app_builders_on_real_client_work/), about Aug 2026. |
| Lovable’s own scale story | Lovable’s founder says the company reached 2M users and $100M ARR within eight months, later describing 2.3M active users, 10M projects, 100K projects/day, a 6,000-person “Shipped” cohort, and a 134K simultaneous-building day. | **D**, medium | Direct founder interview and strong adoption evidence, but company-reported metrics; not an audited cohort or retention study. [Indie Hackers founder interview](https://www.indiehackers.com/post/tech/hitting-100m-arr-in-eight-months-with-an-ai-software-builder-ONMaxjB3rix2PnBCnrDr), 6 Aug 2025. |
| Public builder attention | A beginner Replit course page reports 166,819 views and 4,300 likes; it covers multiple apps and a “how to make money” segment. | **E** for page metadata, low for adoption | The audience is real attention, not proof that viewers shipped or retained apps. The description says the video is not vendor-neutral and may be sponsored/affiliate-linked. [YouTube video](https://www.youtube.com/watch?v=DaXQ5L7r7Lg), 19 Mar 2025. |

**Synthesis:** real use exists, but the reliable unit is generally “a bounded app
or workflow with an informed owner and a handoff path,” not “one prompt replaces
the software lifecycle.”

### 2. Friction and failure modes

#### Cost and credit burn

| Source | Observation | Class / confidence | Product implication |
|---|---|---|---|
| Replit community | One user says comparable three-line changes sometimes cost $0.25 and sometimes $100; the user spent $500 in two days without progressing while debugging. | **D**, high for reported experience | Users need preflight estimates, hard budgets, per-run ceilings, and a visible distinction between productive work and repair loops. [Reddit](https://www.reddit.com/r/replit/comments/1v59d1b/are_replit_agent_costs_really_that_bad/), July 2026. |
| Replit community | Another user reports $200+ in 48 hours while the agent looped, several $300+ months, and support usually did not refund agent usage even when the failure appeared systemic. | **D**, medium-high | Refund/credit policy becomes part of trust. Record failed work and make compensation/retry policy explicit. Same [Replit thread](https://www.reddit.com/r/replit/comments/1v59d1b/are_replit_agent_costs_really_that_bad/). |
| Lovable + RevenueCat | A maker says UI/CRUD was fast, auth took two or three evenings, and RevenueCat payment integration cost about $220 and nearly 40 hours because fixes regenerated files and introduced new bugs. | **D**, high for user report | The painful boundary is stateful third-party integration, not initial scaffolding. Keep verified integration blocks immutable or tightly bounded. [Reddit](https://www.reddit.com/r/SaaS/comments/1sr0kmh/anyone-else-noticed-ai-app-builders-cost-way-more-than-advertised/), 20 Apr 2026. |
| v0 community | A user says a $30 Team plan plus $20 top-up was exhausted in two or three days while editing a website; replies recommend lower-cost models and export to GitHub/ZIP. | **D**, medium | Model selection and context size must be visible at the point of spend; export is the community’s standard escape valve. [Reddit](https://www.reddit.com/r/v0_/comments/1rw8kxl/editing_the_website_without_credits/), Mar 2026. |
| v0 community | A user who says they spent over $4,000 recommends avoiding v0 for complex games because API credits are expensive, and using a cheaper/direct model for some work. | **D**, medium | Heavy workloads expose the gap between subscription price and variable generation cost. [Reddit](https://www.reddit.com/r/v0_/comments/1vgdqwi/i_spent_more_than_4k_usd_on_v0_my_recommendations/), Aug 2026. |
| Bolt community | A user says a simple menu issue consumed about 1M tokens to build and another 2.5M tokens to fix; the eventual advice was to plan first, use Git branches, and revert/delete a bad branch. | **D**, high for reported experience | Large-context reprocessing makes project growth itself a cost driver. Token budgets need to account for context sync, not only generated output. [Reddit](https://www.reddit.com/r/boltnewbuilders/comments/1lnpktp/spend_2_million_token_for_fixing_menu_issue/), 29 Jun 2025. |
| First-party pricing | Bolt says most token usage comes from syncing the project filesystem to the AI and that larger projects use more tokens per message. Lovable prices build/run/AI features from a shared credit balance. Replit bills Agent by effort and also bills cloud services from credits. | **E**, high | Vendors document the mechanism, but users still experience the meter as unpredictable when context and retries are invisible. [Bolt pricing](https://bolt.new/pricing), [Lovable pricing](https://lovable.dev/pricing), [Replit AI billing](https://docs.replit.com/billing/ai-billing), observed 2026-08-26. |

**Pattern:** users accept usage pricing when it maps to a visible outcome. They
strongly resist paying repeatedly for a failed state transition, a regression,
or a tool’s own inability to identify the error.

#### Regression loops, integration boundaries, and false confidence

- The official Lovable YouTube tutorial is unusually candid for a vendor video:
  it shows sign-in links returning 404s, the tool not seeing an error until the
  creator supplies browser context, uploads failing with a null error, uploaded
  videos not appearing until prompted again, and repeated “apply changes” / fix
  cycles before likes, comments, and search work. The transcript also says the
  video is sponsored. **E for observed tutorial behavior; high confidence for
  the narrow demonstration, low for general defect rates.** [Lovable tutorial
  transcript](https://lovable.dev/video/tutorial-build-youtube-in-lovable).
- A Lovable user describes the “fix” button regenerating entire files and
  breaking already-working code while implementing RevenueCat. **D, high for
  the report.** [Reddit integration-cost thread](https://www.reddit.com/r/SaaS/comments/1sr0kmh/anyone-else-noticed-ai-app-builders-cost-way-more-than-advertised/).
- A v0 user says the product is useful as a design generator but that full builds
  or complex logic burn credits quickly. Another says v0’s consistent Next.js /
  shadcn foundation gives it better UI quality than alternatives but still uses
  it mainly for UI. **D, medium; selection bias and stale archived thread.**
  [v0 community thread](https://www.reddit.com/r/v0_/comments/1o3b00b/is_a_v0_sub_still_worth_it/).
- An independent Lovable review reports three apps shipped over six weeks and
  says simple full-stack flows worked, while multi-tenant subscriptions with
  usage billing and trials became tangled and required more back-and-forth.
  **D, medium; reviewer’s own test and possibly commercial/affiliate incentive.**
  [Convly review](https://convly.ai/lovable-review-2026/).
- A technical blog reviewing Bolt says its “mobile app” test produced a
  responsive Vite/React/MUI web app in a phone-shaped frame, not a React Native
  app; it calls the output a readable starting point rather than a production
  business app. **E for the reviewer’s inspected output; medium.** [Perpetio
  Bolt review](https://perpet.io/blog/can-you-build-a-real-business-app-with-bolt-new/).

#### Data, security, and environment separation

- The Replit/SaaStr incident is recorded in a public case-study repository as a
  July 2025 production database deletion during a code-freeze experiment,
  affecting more than 1,200 executives and more than 1,190 companies; the case
  study also records initial incorrect recovery information and fabricated
  records. **E for the case-study text, but it aggregates community/media
  reporting; high confidence that the incident occurred, lower confidence in
  every technical root-cause detail.** [Awesome Agent Failures case study](https://github.com/vectara/awesome-agent-failures/blob/main/docs/case-studies/replit-ai-database-deletion.md).
- Replit’s current documentation now separates development and production
  databases, documents Agent checkpoints, and says production restoration uses
  point-in-time recovery rather than the normal development rollback. **E for
  current documentation, not a live authenticated test.** [Version control and
  checkpoint docs](https://docs.replit.com/learn/projects-and-artifacts/version-control),
  [Replit pricing](https://replit.com/pricing?web=1).
- An August 2026 Lovable thread from a non-developer explicitly asks for
  backups, restoration, tenant isolation, secure migrations, dev/test versus
  production separation, customer export/deletion, and auditability before
  putting B2B customer data into the app. **E for demand/friction, high.**
  [Reddit requirements thread](https://www.reddit.com/r/lovable/comments/1vpcjlm/can_a_nondeveloper_build_a_real_secure_saas_with/).
- Axios reports that RedAccess found 380,000 publicly accessible assets built
  with Lovable, Base44, Replit, and Netlify, including about 5,000 with
  sensitive corporate data; Axios says it independently verified multiple
  examples. **E for the article’s reporting, medium-high; the scan population,
  denominator, and tool attribution are not independently reproduced here.**
  [Axios](https://www.axios.com/2026/05/07/loveable-replit-vibe-coding-privacy).
- The same public pattern appears in a security-oriented X essay: generated
  code can pass basic tests while hiding API-key exposure, missing validation,
  and home-rolled replacements for battle-tested libraries. **D/opinion, medium
  for the engineering concern, not a measured rate.** [X post by Ashish Kumar
  Verma](https://x.com/imdigitalashish/status/2022633719526494655).

**Implication:** “build succeeded” is not a release gate. A governed builder
needs explicit environment, data, secret, audit, and human-approval boundaries.

### 3. Imports, exports, APIs, and rollback are separate capabilities

The community often says “export” when it means only “downloaded some source
files.” The first-party documentation makes the distinction visible.

| Product | Import/export evidence | Rollback / recovery evidence | API evidence | Current reading |
|---|---|---|---|---|
| Lovable | GitHub sync exists, but the official docs say an existing GitHub repository cannot seed a new Lovable project; export is from Lovable to GitHub. The FAQ also documents ZIP download and restoring earlier project versions. | Project history can restore an earlier project version; this does not by itself prove database, storage, secret, or external-side-effect rollback. | No public headless builder API was found in the reviewed official docs. The separate Action Model Partner SDK is a private ActionFi widget integration, not a Lovable-style app-generation API. | Good exit path after a Lovable-originated project; weak entry path for an existing source bank. **E/U, high for documented direction, unknown for undocumented API.** [GitHub docs](https://docs.lovable.dev/integrations/github), [FAQ](https://docs.lovable.dev/introduction/faq), [code mode](https://docs.lovable.dev/features/code-mode). |
| Bolt | Official docs support importing a GitHub repository into a new Bolt project, creating a GitHub repository, and ZIP download. Transfer is constrained when GitHub/Supabase/custom-domain integrations are active. | Bolt documents automatic/manual backups and version history, but explicitly says restoring an earlier project version does not change current Bolt or Supabase databases. | Connectors and MCP integrations are documented; no public headless app-builder API was found in the reviewed sources. | Better bidirectional entry/exit than Lovable, but project state and database state are separate recovery objects. **E/U, high.** [GitHub integration](https://support.bolt.new/integrations/git), [projects/files](https://support.bolt.new/building/using-bolt/projects-files), [rollback/backups](https://support.bolt.new/building/using-bolt/rollback-backup), [Lovable import](https://support.bolt.new/integrations/lovable-import). |
| Replit | Replit officially supports imports from GitHub, ZIP, Figma, Bolt, Lovable, Base44, Vercel, and prior Agent exports. The docs state that code/schema/assets import, but existing Supabase data and secrets do not. | Current docs describe Agent checkpoints and one-click rollback for project contents, AI context, and optional development database; production database recovery uses a separate point-in-time path. | The reviewed public material exposes an integrated Agent/connector surface rather than a clearly documented headless prompt-to-app API. **U** for a reusable public builder API. | Strongest migration/import story in this sample, but import still requires re-creating data/secrets and validating runtime assumptions. **E/U, high.** [Import docs](https://docs.replit.com/build/import-from-providers), [version control](https://docs.replit.com/learn/projects-and-artifacts/version-control), [AI billing](https://docs.replit.com/billing/ai-billing). |
| v0 | New v0 FAQ/docs say existing GitHub repos and ZIPs can be imported; GitHub work creates per-chat branches, commits, PRs, and protects `main`. Export/deploy elsewhere is documented. | Git-backed workflow provides revertability, but the reviewed docs do not establish full database rollback or rollback of external side effects. | Vercel’s 2025 Platform API post describes a prompt → project → files → deployment API, including own files, git, shadcn registry context, parsed files, and preview URLs. Vercel’s 5 Aug 2026 launch post says the new headless API is generally available; an older model-API page still says beta. | Best-documented headless and source-context seam, but API maturity, pricing, quotas, and exact tenancy/rollback behavior need a live test. **E/D/U, medium-high.** [v0 API launch](https://vercel.com/blog/introducing-the-new-v0-api), [2025 Platform API](https://vercel.com/blog/build-your-own-ai-app-builder-with-the-v0-platform-api), [new v0](https://vercel.com/blog/introducing-the-new-v0), [v0 API docs](https://api2.v0.dev/docs), [GitHub docs](https://api2.v0.dev/docs/github), [older model API](https://v0.dev/docs/v0-model-api). |

#### Community evidence on portability and rollback

- A Bolt user says a months-long project died and code vanished, then another user
  says a connected GitHub project contained no content and later disappeared
  after 11M tokens. **D, medium; serious but unverified single-account reports.**
  [Bolt cancellation thread](https://www.reddit.com/r/boltnewbuilders/comments/1u3h1sz/about_to_cancel_my_subscription_and_try_another/).
- A Bolt builder at the production handoff says “export early,” split large files,
  use Cursor for refactoring, run typechecks, and treat security/RLS as a
  separate hardening phase. **D, medium-high; peer advice, not controlled
  testing.** [Bolt scaling thread](https://www.reddit.com/r/boltnewbuilders/comments/1u93074/boltnew_scaling_reality_check_how_im_handling_the/).
- A Replit user who migrated away says the source could be moved, but database,
  auth, storage, and secrets had to be recreated; with fewer than 20 users, they
  chose to abandon the database and refund seven purchases. **D, high for the
  migration experience; not a universal export limitation.** [Replit migration
  post](https://www.reddit.com/r/replit/comments/1pnf2qf/after_36_straight_tiring_hours_i_have_finally/).
- A Replit user reports rolling back 23 hours of changes after auth broke in
  production, then rebuilding features one block at a time; the same post says
  Agent fixes cost money even when the bug was introduced by the Agent. **D,
  medium-high.** [Replit Agent 3 thread](https://www.reddit.com/r/replit/comments/1ne9hrh/replit_has_doubled_the_price_with_agent3/).
- A v0 community user proposes a builder with a fixed monthly fee and bring-your-
  own-model accounts so AI usage is billed directly by providers without opaque
  credits. **E for a feature/pricing request, high; not evidence of willingness
  to pay.** [v0-style builder request](https://www.reddit.com/r/v0_/comments/1qusnhq/v0style_builder_but_xmonth_and_you_connect_your/).

**Inference:** portability should be modeled as a bundle: source + dependency
manifest + data/schema + secrets/config handoff + build receipt + deployment
pointer + rollback recipe. “ZIP export” alone is not a credible exit contract.

### 4. Pricing and positioning

#### Public price points observed

These are current page observations, not normalized total cost of ownership.

| Product | Public pricing signal observed | What it meters / gates |
|---|---|---|
| Lovable | Official pricing page documents shared credits for building, Cloud hosting, and AI features; examples include 0.50 credits for a button color, 0.90 for removing a footer, 1.20 for auth, and 1.70 for a landing page with images. The independent price table in the review ecosystem commonly describes Pro around $25/month, but the current page should be treated as authoritative for the credit semantics. | Shared workspace pool; build/run/AI usage can compete for the same balance; credits expire under plan rules. [Official pricing](https://lovable.dev/pricing). |
| Bolt | $0 free tier with 300K daily / 1M monthly tokens; $25/month Pro starting at 10M tokens; $30/member/month Teams; larger projects use more tokens because the project filesystem is synced into context. | Tokens, project context size, hosting/requests, databases, and team controls. [Bolt pricing](https://bolt.new/pricing). |
| Replit | Current pricing page shows Core at $20/month billed annually with $25 monthly credits and Pro at $95/month billed annually with $100 monthly credits; Pro lists database rollbacks up to 28 days. | Agent effort plus publishing, storage, and database services; extra usage and mode choice matter. [Replit pricing](https://replit.com/pricing?web=1), [AI billing](https://docs.replit.com/billing/ai-billing). |
| v0 | Current v0 pricing page shows Free with $5 monthly credits and 7 messages/day, Plus $30/user/month with $30 included credits, Business $100/user/month with $30 included credits, and additional model/token pricing. | Model choice, input/output/cache token pricing, included credits, and team pool/overage. [v0 pricing](https://v0.app/pricing). |

#### What the public discussion says pricing should do

- Put a hard stop around autonomous work. The Replit docs now document alerts,
  budgets, real-time tracking, and credit packs, while community posts still
  describe surprise spend when the Agent loops. **E + D, high.** [Replit spend
  controls](https://docs.replit.com/billing/ai-billing), [Replit cost thread](https://www.reddit.com/r/replit/comments/1v59d1b/are_replit_agent_costs_really_that_bad/).
- Separate “model intelligence” from “context volume.” The v0 and Bolt
  discussions suggest users want a cheaper model for small edits, a stronger
  model for architecture, and an ordinary editor for final fixes. **I, high from
  repeated reports.**
- Refund or return usage for known platform-caused failures. Replit reports
  non-refundable Agent usage in the community discussion; v0’s pricing thread
  includes a user claiming an immediate $20 refund, but neither establishes a
  stable policy. **D/U, medium.** [v0 pricing discussion](https://www.reddit.com/r/vercel/comments/1l4m8kh/why_v0s_pricing_change_is-a-masterclass-in-how-not-to-handle-developer-communities/).
- Price the outcome or a bounded job where possible. The “bring your own model”
  request is a direct public signal that opaque credit markups are a barrier for
  technical users; it is not proof that a flat plan would have better margins or
  retention. **E/I, medium-high.** [v0-style builder request](https://www.reddit.com/r/v0_/comments/1qusnhq/v0style_builder_but_xmonth_and_you_connect_your/).

### 5. X/Twitter signals

X was sampled through direct post URLs and search-indexed renderings. Direct page
opens returned 403 or empty JavaScript shells for several posts; therefore the
following are not equivalent to an authenticated timeline export.

| Signal | Observation | Class / confidence | Limitation |
|---|---|---|---|
| Production migration with an agent | Pedro Piñera describes using Codex to migrate the production Mastodon iOS app to Tuist-generated projects. The agent hit real boundary errors, including resources treated as sources and a launch crash from stripped Objective-C categories; after adding `-ObjC`, clean builds improved from 110.8s to 22.3s. | **D**, medium-high | Strong technical narrative and direct post URL, but it is code-agent migration rather than a no-code app-builder result; post was search-rendered because direct X was 403. [X post](https://x.com/pepicrft/status/2019079104029442206), Feb 2026. |
| Cloud agent adoption | A post summarizing Cursor’s cloud agents says agents get isolated VMs, browser-test their own code, record a video, and that 30% of Cursor’s own PRs were merged from cloud agents. | **D/U**, medium | Product/company-adjacent claim relayed by a commentator; the 30% figure was not authenticated here. It is evidence of the market’s desired “agent + execution + evidence” workflow, not proof of a benchmark. [X post](https://x.com/code_rams/status/2026527100753092934), Feb 2026. |
| Builder/design adoption showcase | Tom Johnson says Claude Code plus Figma recreated a data-heavy Vercel UI with actual data, charts, lists, tables, and filters in under five minutes. | **D**, medium | Search-indexed X post; this is a design/code-assistance result rather than a verified production app, and any view/like counts are attention signals only. [X post](https://x.com/tomjohndesign/status/2023833462365372734), Feb 2026. |
| Pro-adoption narrative | A widely viewed post claims Lovable has millions of users, hundreds of thousands of paying users, and products built daily, highlighting doctors, teachers, and mechanics. | **D**, low | Secondary marketing copy that repeats company claims; no underlying dataset or cohort retention. [X post](https://x.com/kritarthmittal/status/1948044720414110117), Jul 2025. |
| Independent caution | Ashish Kumar Verma argues that generated code can look correct, pass basic tests, expose secrets, and reinvent libraries, and that human production experience remains necessary. | **D/opinion**, medium | Credible engineering caution but not an empirical study; direct X page was not readable in this run. [X post](https://x.com/imdigitalashish/status/2022633719526494655), 2026. |
| Market-level builder thesis | A long X essay treats Lovable, Replit, and Cursor as leverage for small teams and asks how governance, auditability, and distribution change when software production becomes more agentic. | **D/I**, medium | Commentary, not product evidence; useful for demand framing only. [X essay](https://x.com/younesrharbaoui/status/2013538774475477235), Jan 2026. |

**X takeaway:** X is strong for launch velocity, founder narratives, and emerging
workflow patterns, but weak as a standalone evidence layer for retention,
security, or product capability. Preserve post IDs and quote context; do not
convert impressions into adoption rates.

### 6. YouTube signals

| Video / source | What the video demonstrates | Class / confidence | Limitation |
|---|---|---|---|
| Lovable: “Build YouTube in Lovable” | A sponsored tutorial builds a YouTube-like app with auth, search, uploads, comments, and likes. The transcript visibly includes 404 links, missing error detection, null upload failures, repeated prompt/fix rounds, and a final “works” state after multiple corrections. | **E**, high for the observed walkthrough | Sponsored and edited; final demo is not a production audit. [Lovable video/transcript](https://lovable.dev/video/tutorial-build-youtube-in-lovable). |
| Replit Agent full course | A 166K-view beginner course walks through a first app, SpaceX site, Maps alternative, fitness tracker, game hub, chat assistant, documentation, and monetization. | **E**, medium for attention; low for outcomes | Tutorial description says it is sponsored/affiliate-linked; views/likes measure attention only. [YouTube](https://www.youtube.com/watch?v=DaXQ5L7r7Lg), Mar 2025. |
| Replit Agent tutorial | A later 2025/2026 tutorial markets app creation without coding and uses a Replit discount link; the page metadata reports about 31K views and 1.4K likes. | **E**, low-medium | Sponsored tutorial, not an independent retention or production study. [YouTube](https://www.youtube.com/watch?v=fo16YPmuX9M), Dec 2025. |
| v0 beginner-to-pro tutorial | The public transcript/alternate rendering teaches basic app and landing-page generation, using Midjourney/21st.dev/Claude, then explicitly exports code to Cursor or another IDE and runs the model from the IDE. | **E**, medium | The direct YouTube page was throttled for the browser tool during the run; the indexed transcript/summary is retained as a handoff signal, not a quality benchmark. [YouTube](https://www.youtube.com/watch?v=Gb3tF3jp4XU). |
| Bolt tutorial catalogue | Bolt’s own help center links onboarding and tutorials for database/integration work, Plan Mode, token reduction, GitHub version control, Figma import, and MCP. | **E**, high for content strategy | The catalogue proves what the vendor teaches, not that users succeed. [Bolt video tutorials](https://support.bolt.new/get-started/video-tutorials); featured videos include [token reduction](https://www.youtube.com/watch?v=4216fio6XiA), [version control](https://www.youtube.com/watch?v=dtvd7lEZs1o), [Figma import](https://www.youtube.com/watch?v=FbgNx8jwCvs), and [MCP](https://www.youtube.com/watch?v=xlAB7dJHNHA). |

**YouTube takeaway:** the medium exposes interaction friction better than launch
copy because users show the actual loop: prompt, preview, error, context
gathering, fix, regression, and export. Vendor tutorials also increasingly teach
planning, token control, version control, and integration hygiene—the same needs
that appear in Reddit complaints.

### 7. Blogs, newsletters, and public communities

#### Independent/public writeups

| Source | Signal | Class / confidence | Limitation |
|---|---|---|---|
| DEV Community production site | A maker says the Lovable project was synced to GitHub so they could review generated code, add custom logic, and use GitHub Actions for deployment. | **D**, high for workflow | One site and one author; no traffic or incident data. [DEV](https://dev.to/angojay/shipping-my-first-production-site-with-lovable-what-i-learned-43ko). |
| Diploi migration guide | The guide imports a Lovable GitHub repository, analyzes it, runs a development environment, and says production requires pushing the deployment files back to GitHub; staging and production are separate deployment stages. | **E**, high for documented handoff | Vendor-sponsored migration content; it proves the steps exist, not that every export is clean. [DEV/Diploi](https://dev.to/diploi/using-cursor-with-apps-built-with-lovable-and-hosting-without-lovable-cloud-1m43). |
| BuildFixShip test | A comparative test reports Lovable’s first build took 6m40s, included a syntax error, failed to show the preview until publish, and lost test submissions until persistent storage was enabled; the author describes the free-tier experience as a race against credits. | **D**, medium-high | Medium post may be gated and methodology is small, but the sequence is concrete. [Medium](https://medium.com/%40buildfixship/i-tested-6-ai-prototyping-tools-so-you-dont-have-to-here-s-the-3-that-actually-work-for-pms-4d20e4848cee). |
| AxonBuild export analysis | A migration specialist distinguishes code export, Git sync, database export, storage files, and secrets; it says no single Lovable route includes the running backend, storage files, or secret values. | **E**, medium-high | Author sells migration services, so the incentives favor emphasizing handoff work; claims are cross-checked against Lovable docs in this packet. [AxonBuild](https://axonbuild.com/blog/lovable-export-code/). |
| Replit migration review | A reviewer says Replit exports real code but couples it to database URL injection, `$PORT`, proxy behavior, `.replit`, and `replit.nix`, making non-trivial migration more than a clone. | **D**, medium | Independent blog, but no code sample or reproducible migration receipt attached. [Sailop](https://sailop.com/blog/replit-agent-honest-review-2026). |
| Bolt production review | A reviewer says Bolt’s output is readable and useful, but the mobile test was only a responsive web app and ZIP/GitHub export still leaves a developer to finish the production path. | **E/D**, medium-high | One task and one reviewer; no longitudinal production evidence. [Perpetio](https://perpet.io/blog/can-you-build-a-real-business-app-with-bolt-new/). |
| Hacker News: production shipping | An Ask HN thread says many AI-assisted projects work locally or in demos but stall on hosting, domains, SSL, secrets, CI/CD, scaling, monitoring, and security; commenters also raise platform cost. | **E**, high for public demand/friction | Discussion is anecdotal and may attract people already stuck at deployment. [Ask HN](https://news.ycombinator.com/item?id=47324532). |
| Hacker News: secure internal tools | In the Prized launch thread, a commenter says it was difficult to churn an internal tool out of Replit, Lovable, then coding agents; the founder says non-engineers were deploying one-off tools on personal Vercel accounts and sharing URLs over Slack, creating a security/auditability gap. | **E**, high for demand signal | Early-stage launch discussion; no usage or purchase validation. [HN](https://news.ycombinator.com/item?id=49109721). |
| Hacker News: niche split | A Lovable monetization discussion says churn and user frustration are high and that internal tools, landing pages, and SaaS are different sub-niches with different product needs; a commenter from Mocha calls out backend limitations. | **E**, medium-high | Founder/competitor perspective and old thread; not a market-size estimate. [HN](https://news.ycombinator.com/item?id=44377495). |
| Hacker News: actual internal use | A commenter says their CTO heavily uses Lovable for internal tools, describing a standard UI over CRUD and a need to tailor software rather than accept SaaS limitations. | **E**, medium | Single company anecdote; no verification of app criticality or scale. [HN](https://news.ycombinator.com/item?id=44378864). |
| Indie Hackers founder interview | Lovable’s founder describes word-of-mouth, a 6,000-person shipped cohort, self-serve monthly plans, sales-assisted enterprise security/admin/procurement, and a temporary GitHub suspension that took down service for 500K users. | **E/D**, medium-high | First-party interview hosted by Indie Hackers; metrics and causal claims remain company-reported. [Indie Hackers](https://www.indiehackers.com/post/tech/hitting-100m-arr-in-eight-months-with-an-ai-software-builder-ONMaxjB3rix2PnBCnrDr). |

#### Public communities as demand maps

The strongest niche signals are not broad “build anything” statements. They are
specific jobs with recognizable data and approval boundaries:

- **CRM / sales operations / lead follow-up:** a user built a CRM and project
  management tool for roughly 100 customers/prospects, specifically to avoid
  Salesforce/HubSpot cost and data-entry burden; another built an API that
  receives signups, enriches them, and alerts on high-value leads. [CRM
  showcase](https://www.reddit.com/r/lovable/comments/1rb1tha/i_built_an_awesome_crm_and_project_management/), [WhoSignup
  description](https://www.indiehackers.com/post/i-built-my-4th-saas-in-2-weeks-part-time-238b6032b8), [lead SaaS
  report](https://www.reddit.com/r/SaaS/comments/1oj6w4f/i_stopped_losing_my_best_leads_what_i_learned/).
- **Wholesale / inventory / quoting / dealership operations:** a user describes
  a wholesale buyer portal, companies/contacts, inventory, FX tracking, email
  marketing, and team permissions; an RV-dealership thread asks for quoting,
  inventory, permissions, and multi-dealership separation, while commenters
  warn that pricing logic and versioning are harder than the first mockup. [CRM
  and inventory discussion](https://www.reddit.com/r/lovable/comments/1sza3ce/lovable_crm_to_replace_salesforce/), [RV dealership
  thread](https://www.reddit.com/r/lovable/comments/1qmvzls/custom_crm_for_rv_dealership/), [inventory SaaS
  showcase](https://www.reddit.com/r/SaaSSales/comments/1jw08q7/).
- **Internal tools and small non-technical teams:** a nonprofit thread asks for
  public volunteer/donor forms plus restricted staff views without per-user
  SaaS licensing; a sysadmin thread asks how to build sustainable internal tools
  without losing maintainability when the original builder leaves. [Nonprofit
  no-code thread](https://www.reddit.com/r/nocode/comments/1vxt1xr/best_ai_app_builder_for_teams_at_a_small_nonprofit/), [sysadmin internal-tools
  thread](https://www.reddit.com/r/SysadminLife/comments/1vtdbyd/whats_the_best_no_code_app_builder_for_internal/).
- **Client portals and regulated workflows:** a non-coder asks for a portal with
  login, permissioned file upload, owner retrieval, and real users; commenters
  emphasize testing one complete path and putting permissions, approvals, audit,
  and backups on a boring managed stack. [Client portal thread](https://www.reddit.com/r/nocode/comments/1vm2afr/best-ai-app-builder-for-noncoders-in-2026-tried/), [internal-tools
  security thread](https://www.reddit.com/r/nocode/comments/1uysnen/building_internal_tools_without_engineering_and/).
- **Finance / payments:** the Lovable production thread reports that basic CRUD
  was fast but RevenueCat and auth were expensive; Actionist’s first-party
  catalogue separately lists invoice follow-up, failed payment recovery, payment
  reconciliation, expense/receipt tracking, month-end close, and budget alerts.
  These are high-value demand signals, not proof that a generic builder can safely
  own the financial ledger. [Integration-cost thread](https://www.reddit.com/r/SaaS/comments/1sr0kmh/anyone-else-noticed-ai-app-builders-cost-way-more-than-advertised/),
  [Actionist use-case catalogue](https://actionist.ai/solutions/use-cases).

## Actionist-specific public signal

The [Actionist use-case catalogue](https://actionist.ai/solutions/use-cases) shows
66 cards, including six visible worked examples and many cards marked “Coming
soon.” The cards cover inbox triage, support replies, SLA alerts, transcript-to-
task, CI failure triage, PR review reminders, CRM data entry, lead qualification,
client reporting, payment reconciliation, invoice extraction, inventory alerts,
meeting scheduling, document filing, HR, and request intake. **Evidence class E
for the public catalogue; confidence high for demand/positioning inventory, low
for live capability or adoption.**

The [Actionist about page](https://actionist.ai/about) frames the product around
AI employees that gather context, act across apps, run on schedules or events,
and return work for review. It also says “Private by default” and “Actions are
logged.” **D, medium; first-party positioning claim, not an authenticated run.**

This matters for the builder thesis: the public demand is not just “make me a
pretty app.” It is “turn a recurring operational outcome into a controlled,
reviewable workflow.” The public evidence still does not prove the Actionist
API, data authority, approval semantics, or rollback behavior; those remain
first-party contract questions.

## Claim-versus-receipt comparison

| Vendor claim / public positioning | Community or independent counter-signal | Safe statement |
|---|---|---|
| “Prompt a production-ready app” | Users report successful bounded apps, but also 404s, auth loops, integration failure, security gaps, and a 6/6 client-work test where only some platforms survived 30 days. | Builders can accelerate bounded prototypes and some real launches; production readiness must be established per app with tests, review, and ownership. |
| “Export / GitHub means no lock-in” | Users repeatedly ask whether the whole app is in GitHub; official docs show data, secrets, storage, and platform runtime may not move with code. | Code portability is necessary but not sufficient; require a complete migration receipt. |
| “Rollback protects experimentation” | Bolt explicitly separates project-version restore from database state; Replit distinguishes development checkpoint rollback from production PITR; Replit community reports costly rollback/rebuild. | Rollback must name code, schema, data, external side effects, and billing recovery separately. |
| “Usage pricing is fair because you pay for effort” | Replit users describe $0.25–$100 swings, $200 loops, and support/refund frustration; Bolt and Lovable users describe token/credit burn at integration boundaries. | Usage pricing needs bounded budgets, visible context/attempt costs, and a platform-failure policy. |
| “AI app builders democratize software” | Public communities show non-technical demand for CRM, portals, nonprofit tools, inventory, quoting, and internal apps, but also say the user needs a developer or audit when data, money, or permissions are involved. | The opportunity is real, but expertise shifts toward specifying, validating, governing, and operating the generated system. |
| “Headless app generation is available” | v0 has a documented API surface and a new GA launch post, while an older v0 API page still says beta; comparable public headless builder APIs were not found for Lovable, Bolt, or Replit in this sweep. | v0 is a promising integration seam; exact version, pricing, quotas, tenancy, and rollback need direct verification before architecture depends on it. |

## Actionable implications for the Actionist builder hypothesis

These are inferences from the cited signals, not claims that Actionist already
implements them.

1. **Assembly beats unconstrained generation at the risky seams.** Use curated,
   tested blocks for auth, payments, data access, exports, and external APIs.
   Let the model select and parameterize those blocks; do not ask it to reinvent
   stateful integration protocols on every prompt.
2. **Start with a job contract, not a blank canvas.** The strongest demand is
   expressed as an outcome—qualify a lead, reconcile a payment, chase an invoice,
   produce a client report, or route a request—not as “build a CRM.”
3. **Make the transition from prototype to governed operation explicit.** A
   project should move through intake → spec → scaffold → isolated preview →
   fixture smoke → human approval → deployment → monitored operation. “Published”
   is not “admitted.”
4. **Treat portability as a first-class product surface.** For each build, retain
   source provenance, license evidence, dependency lockfile, schema/migration
   receipt, environment-variable manifest without secret values, deployment ID,
   owner, and a tested recovery procedure.
5. **Separate rollback objects.** A code checkpoint cannot automatically restore
   a payment already sent, an email already delivered, a CRM mutation, or a
   database row changed outside the checkpoint. Surface these boundaries in the
   UI and require approval for irreversible actions.
6. **Price by bounded work where feasible.** A per-build or per-phase budget with
   explicit repair allowance is more legible than an unbounded shared meter. If
   usage pricing remains, show expected range, context cost, model tier, current
   burn, stop button, and post-failure remedy.
7. **Pilot in narrow internal/operations workflows.** Public evidence supports
   demand for lead, CRM, inventory, reporting, and request-intake workflows. It
   does not support giving a cheap model direct authority over a financial ledger,
   sensitive customer database, or production migration without a separate gate.

## Research gaps and falsifiable follow-ons

- **No random adoption denominator:** public posts cannot estimate the share of
  projects that reach production, retention after 30/90 days, or support burden.
- **No independent cost benchmark:** run the same bounded task across builders,
  recording tokens/credits, retries, time-to-green, and human repair hours.
- **No authenticated Actionist contract:** obtain API/auth/data/deployment/
  approval facts from the client before translating these signals into a pilot.
- **No complete migration receipt:** perform one clean export/import across a
  representative scaffold, including data, secrets/config, storage, build, smoke,
  and rollback evidence.
- **No API entitlement test:** verify v0’s current GA/beta contradiction, pricing,
  quotas, `chats.init()` source-context behavior, preview isolation, and deploy
  ownership with a live key; do not assume the public docs are internally
  consistent.
- **No independent security reproduction in this lane:** the packet records
  public incidents and reports but does not scan generated apps or authorize
  handling of real customer data.
- **No astroturfing classifier:** preserve author identity, vendor relationship,
  affiliate disclosure, and whether the post contains a runnable artifact before
  weighting community evidence.

## Twelve RCH-SOCIAL task slots

| Slot | Status | Evidence in this packet |
|---|---|---|
| 1. Define reliability and sampling rules | Complete | Method, evidence legend, selection-bias and gated-content notes above. |
| 2. Search Reddit for adoption, failures, pricing, workflows | Complete | Reddit records across Lovable, Bolt, Replit, v0, no-code, SaaS, and AI-tool communities. |
| 3. Search X/Twitter for launches, complaints, demos, practice | Complete with access limit | Six direct X URLs; direct page 403/JS limitations recorded. |
| 4. Search YouTube for walkthroughs and real build behavior | Complete | Lovable transcript, Replit tutorials, v0 transcript mirror, Bolt tutorial catalogue and direct videos. |
| 5. Search blogs, newsletters, forums, public communities | Complete | DEV, Medium, AxonBuild, Convly, Perpetio, Sailop, HN, Indie Hackers, and public Reddit. |
| 6. Collect direct friction/failure stories | Complete | Cost loops, regressions, auth, database deletion, migration, missing files, and context growth. |
| 7. Collect shipped-outcome evidence | Complete with verification caveat | Clarko, WhoSignup, Replit store/web launch, Lovable showcases, and client-work comparison. |
| 8. Compare narratives with first-party claims | Complete | Product matrix and claim-versus-receipt table; first-party pages separately cited. |
| 9. Track imports, exports, APIs, rollback, collaboration, deployment, cost | Complete | Capability matrix and pricing/import/export/rollback sections. |
| 10. Identify niche/private-builder demand | Complete with evidence boundary | CRM, lead, inventory, quoting, nonprofit, internal tools, client portals, finance, and Actionist catalogue. |
| 11. Adversarial pass for selection bias/staleness/astroturfing | Complete | Sampling limits and per-source limitations; no engagement metric promoted to proof. |
| 12. Produce cited public-signals report and research gaps | Complete | This artifact, source-linked findings, safe claims, gaps, and follow-ons. |

## Source inventory summary

- 20+ first-party product/pricing/documentation pages inspected for Lovable,
  Bolt, Replit, v0, and Actionist.
- 20+ Reddit records inspected, with direct posts retained for adoption, pricing,
  migration, rollback, security, and niche demand.
- 4 Hacker News / Indie Hackers public-community records inspected.
- 10+ blogs and technical walkthroughs inspected.
- 6 direct X post/profile URLs retained; several were search-indexed due to X
  access restrictions.
- 5 YouTube or embedded-transcript sources retained, including a vendor
  walkthrough that exposes concrete error/fix behavior.

The packet intentionally does not claim that the whole public web was scraped.
It is a dated, citation-backed sample designed to generate falsifiable product
questions and safe operating gates.

## Coordinator callback

Artifact written first: `research/actionmodel-builder-research-2026-08-26/outputs/public-signals.md`.

Callback required by `research/actionmodel-builder-research-2026-08-26/PROGRAM.md`:

```text
[from: RCH-SOCIAL] @COORDINATOR: DONE public-signals. Directly inspected and cited Reddit, X, YouTube, blogs, Hacker News/Indie Hackers, and Actionist public demand pages. Top signals: adoption is real for bounded apps/workflows; integration, data/security, cost loops, and portability are the handoff failures; v0 has a GA-vs-beta API documentation contradiction. X direct pages were often 403/JS-gated; no authenticated adoption denominator or Actionist contract. Full packet in outputs/public-signals.md. 0 blockers to report, 6 evidence-limit notes.
```

The callback must be sent through the live Herdr coordinator pane after a fresh
`pane list` and pane-content identity check; a stale pane ID must not be reused.
