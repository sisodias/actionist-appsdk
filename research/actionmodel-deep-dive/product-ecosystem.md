# Product and ecosystem deep dive

## 1. Training extension / Large Action Model

### User promise

The Action Model Chrome extension is positioned as passive, opt-in participation: browse normally, contribute anonymized action data, and earn points or future `$LAM`. It can also record workflows such as uploading documents, checking analytics, managing email, and filling forms.

Primary sources: [Chrome Web Store listing](https://chromewebstore.google.com/detail/action-model/lhciigpkocgkbnbjimbbiejpfijdbcag?hl=en-GB), [LAM browser-extension overview](https://docs.actionmodel.com/the-large-action-model-lam/browser-extension-overview), [security and privacy docs](https://docs.actionmodel.com/the-large-action-model-lam/security-and-privacy).

### Claimed training loop

The docs describe a sequence of screenshots or screen regions, user actions, context, and outcomes. The resulting data is used to build an Action Tree: a model/policy for deciding which GUI action to take next. The model is therefore intended to learn interaction sequences rather than only text completion.

### Privacy and security surface

The public privacy docs say the system can record items such as click coordinates and targets, navigation, form interactions, scroll behavior, timing, URLs excluding query parameters, DOM information, selected screenshot regions, viewport size, country, and performance data. They say the system should not capture passwords, credentials, card data, SSNs, health information, private messages, raw form input, files, clipboard, camera, microphone, or precise location.

The Chrome Store declares handling of **user activity** and **website content**. Chrome Stats reports permissions including `storage`, `alarms`, `cookies`, `tabs`, `activeTab`, `scripting`, `notifications`, host access to `<all_urls>`, and content scripts on `<all_urls>`. That is a sensitive permission surface even if the runtime logic masks or excludes protected data.

The required validation is behavioral, not rhetorical: inspect the installed manifest and bundles, exercise pause/opt-out and sensitive-field masking, observe outbound requests on representative sites, verify retention/deletion, and compare actual behavior against both the Chrome-specific and general privacy policies.

### Product signals

- Store rating is high and installation scale is meaningful, but extension feedback repeatedly asks for clearer activity/points visibility and broader coverage.
- Chrome Stats records permission-history changes involving host access and the addition of alarms; the current permission picture should be verified from a fresh install because store mirrors may lag or normalize manifests.
- The extension is a data-acquisition product as much as a user utility. Its trust UX, consent copy, pause control, and reward accounting are core product features.

## 2. ActionFi

### What it is

ActionFi is the partner-facing verified-action layer. A platform defines a task or campaign; a real person performs the action through a browser or desktop GUI; Action Model verifies evidence of the action; the user receives a reward, points, partner token or stablecoin depending on the campaign.

Sources: [ActionFi overview](https://docs.actionmodel.com/actionfi/actionfi-overview), [for platforms](https://docs.actionmodel.com/actionfi/for-platforms), [for ecosystem partners](https://docs.actionmodel.com/actionfi/for-ecosystem-partners), [partner landing page](https://actionmodel.com/actionfi/partner).

### Differentiator

The company contrasts ActionFi with InfoFi, social engagement farming and API-only attribution. Its stated goal is to reward product usage or other verifiable real-world/browser actions rather than likes, impressions, or low-value clicks.

### Partner integration

The public white-label docs describe a private Partner SDK and a CDN bundle at `https://sdk.actionmodel.com/sdk/latest/actionmodel-sdk.umd.js`. Initialization uses a `partnerId` and can include domain, bounty, external user identity, metadata, theme and event callbacks. Events include widget initialization, extension discovery/unavailability, tasks loaded, training started/finished/failed, and query submission. Webhooks are described as “coming soon” and the docs need expansion.

This creates a material attribution and privacy surface. A partner should ask what identity data is exchanged, whether email is optional, how an external ID is hashed/retained, what happens when the extension is unavailable, and how a partner reconciles completed actions to payouts.

### Current launch signal

Indexed current social messaging on [Action Model’s X mirror](https://www.twstalker.com/ActionModelAI) and related LinkedIn results announces a SIXR Cricket launch and a reported $100K ActionFi reward pool on 25 August 2026. Treat the reward-pool amount and “first partner” language as current company messaging until the official campaign dashboard and partner contract are reviewed.

## 3. Actionist

### Current public product

[Actionist](https://actionist.ai/) is the clearest SaaS surface. Its current site presents AI employees that use apps, follow schedules, return completed work for approval, and expose history/transcripts. The public demo shows connected-app examples including HubSpot, Gmail, Google Sheets, Google Drive and Slack, plus agent templates for community management, lead generation, SEO, reception, legal, support, operations, HR screening, social media, analytics, recruiting and bookkeeping.

Its public operating model is:

```text
Describe → Plan → Act → Approve → Repeat
```

The product is composed publicly as Skills, Memory, Apps, Schedules, Agents, Channels, Cloud and Reactions. The docs add triggers, tool usage and history.

### Execution modes

- **Desktop:** free local application, one agent per device, stops when the laptop is closed.
- **Cloud/VPC:** paid isolated instances, intended for parallel or 24/7 operation.
- **Workflow editor:** no-code/natural-language generation, visual nodes, branches, loops, parallelism, extraction, document/email/database actions, MCP/REST/GraphQL/webhooks and custom scripts.
- **Marketplace:** community workflows and agents with subscriptions, pay-per-action and lifetime purchase examples.

### Current pricing snapshot

From [Actionist pricing](https://actionist.ai/pricing):

| Tier | Public snapshot |
|---|---|
| Desktop | Free; one agent per device |
| Basic | $55/month; 1 seat, 5 active agents, 5GB, 1,000 reactions, no cloud browser |
| Pro | $155/month; 2 seats, 20 active agents, 15GB, 5,000 reactions, 10 hours of BrowserBase cloud browser |
| Add-ons | Extra Pro seat $10/month; extra agent $1/month; storage $1/GB; reactions $10/5,000; cloud browser $5/10 hours |

Verify prices, taxes, usage caps, data residency and cancellation terms before using this as a commercial benchmark.

### Maturity contradiction

The current Actionist site looks like a live product with pricing and a demo. The older docs still call Actionist a private beta, say Linux is coming, and describe an Actionist browser extension as “Coming Soon” with 2025 roadmap dates. The FAQ on the main site also describes a standalone Actionist extension as planned for 2026. This may be normal documentation drift, but it should be resolved before a client recommendation.

## 4. Marketplace

The docs claim a marketplace with 10,000+ workflows and a separate agent marketplace. Workflows are reusable sequences; agents add memory, decision-making, personality, schedules and richer interfaces. Public examples include monthly subscriptions of 500/1,000/2,500 `$LAM`, pay-per-action around 0.1 `$LAM`, and lifetime ranges from 5,000 to 75,000 `$LAM`.

The monetization thesis is creator supply plus token consumption. The diligence questions are discovery quality, workflow safety, creator verification, refund/dispute rules, IP ownership, model/tool costs, and whether quoted creator earnings are actual payouts or illustrative copy.

## 5. Token and reward mechanics

Public [token utility docs](https://docs.actionmodel.com/tokenomics/token-utility) describe `$LAM` as the fuel for GUI actions, with a stated distribution of roughly 33% creators, 34% burn and 33% ecosystem in one model. The docs describe training contribution rewards, ActionFi rewards, subscriptions and partner buyback/burn loops.

Public [referral docs](https://docs.actionmodel.com/tokenomics/referrals-and-affiliates) describe ongoing affiliate bonuses of 5–25% based on qualified referrals, one-time point rewards, a three-layer referral network, and social tactics. The rules prohibit bots and duplicate accounts. This is a meaningful acquisition mechanism; it also means organic review volume, social activity and referral-driven growth need to be analyzed together.

### Internal inconsistencies to resolve

- One token-utility section uses `$0.01/action` as an example for LAM-1; a later formal model uses `$0.10/action`.
- The public site, LinkedIn posts and docs use different user/download/training-hour milestones without a shared definition.
- Current Actionist marketing and older docs imply different maturity states.
- Docs use future/roadmap language for browser extensions with dates that have already passed.

## 6. Adjacent and owned surfaces

The official link graph includes `actionmodel.com`, `docs.actionmodel.com`, `start.actionmodel.com`, `train.actionmodel.com`, `actionist.ai`, `demo.actionist.ai`, `sdk.actionmodel.com`, the Chrome Store, Discord, Telegram, X, YouTube, Instagram and TikTok. Older store/permission history also references `api.actionmodel.com` and `clerk.actionmodel.com`.

The Apple listing titled “Actionist - A Doing App” is a different product by Andrew Radcliff with two ratings; it should be recorded as a name collision, not an Action Model app. No verified official Action Model iOS/Android listing was found in the research run.
