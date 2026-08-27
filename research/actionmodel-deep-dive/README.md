# Action Model — public-source deep-dive pack

**As of:** 25 August 2026 (Asia/Ho_Chi_Minh)  
**Target:** [actionmodel.com](https://actionmodel.com/)  
**Method:** public-web research, official documentation, public store pages, indexed social pages, and a read-only YouTube playlist inventory.

## Executive brief

Action Model is presenting a Web3/AI ecosystem rather than a single application:

```text
Browser training extension → ActionFi verified-task/reward layer → Actionist computer-use agents
                                      ↓
                         workflow / agent marketplace + $LAM economy
```

The commercial thesis is that people contribute browser-action data to train a Large Action Model (LAM), earn points or token-linked rewards, and later use or sell automations. ActionFi extends that loop to partner campaigns where a real user performs a verifiable task. Actionist is the monetizable automation product: local desktop agents, paid cloud/VPC execution, workflows, memory, schedules, triggers, and a marketplace.

The strongest diligence opportunities are:

- A differentiated “real usage rather than vanity engagement” proposition for Web3 partners.
- A large community-growth loop combining passive training, ActionFi campaigns, referrals, quests, ambassadors, and social content.
- A potentially valuable proprietary dataset of GUI actions and context, if consent, privacy, quality, and retention claims withstand technical review.
- Actionist’s clearer SaaS monetization: free local desktop use, paid seats/storage/reactions/cloud-browser capacity, and workflow/agent marketplace economics.

The main risks are:

- Public numbers are mixed together: Chrome Store counts, third-party snapshots, company-reported milestones, and illustrative dashboard figures are not equivalent evidence.
- The extension declares access to user activity and website content; third-party manifest data reports broad browser permissions and `<all_urls>` content scripts. This needs an install-time and network-level audit.
- The review footprint is very positive, but the public mirror shows a large same-day burst of generic reviews. Referral and quest programs explicitly reward social activity and referrals, so ratings and engagement should not be treated as independent validation without a provenance check.
- Actionist’s polished current website conflicts with older docs that still say “private beta,” “coming soon,” or contain stale roadmap dates. Token docs also contain a material `$0.01/action` versus `$0.10/action` inconsistency.
- Corporate, token, security-audit, funding, and legal-entity details are not sufficiently clear in the public pack.

## Evidence key

- **Verified public fact:** directly visible on an official or third-party platform page at the observation date.
- **Self-reported claim:** company marketing, dashboard, blog, LinkedIn, or social copy; useful but not independently validated.
- **Third-party signal:** store mirror, review site, community page, or media coverage; useful for triangulation, not a formal audit.
- **Open / blocked:** the page was inaccessible, dynamic, login-gated, robots-blocked, or only an aggregate was exposed.

## Key public metrics captured

| Surface | Observation | Confidence / caveat |
|---|---:|---|
| Chrome Web Store | 80,000 users; 4.9/5 from 398 ratings; v0.30.0; updated 3 May 2026 | Official store aggregate; counts can change |
| Chrome Stats snapshot | 90,000 users on 2 Aug 2026; 4.87/398 | Third-party snapshot; not an official analytics export |
| X / Twitter | about 60K followers, 968 tweets, 28 following in a recent indexed snapshot | Third-party index; direct X page returned 403; dynamic counts |
| LinkedIn | about 4,625 followers in a recent indexed snapshot | Company page/search snapshot; self-reported company metadata |
| Telegram `@actionmodel` | about 13,313 members and 938 online when observed | Live group count; fluctuates |
| Telegram `@actionmodelupdates` | about 18.9K subscribers in an Aug 16, 2026 index | Third-party snapshot |
| YouTube | 12 public videos enumerated | `yt-dlp` playlist inventory; view/date metadata was not exposed in the run |
| Actionist pricing | Basic $55/mo; Pro $155/mo; desktop free tier | Official current pricing page; verify at contracting time |

The public site also claims “500,000+ people” and other growth milestones. Those are recorded as company claims, not reconciled user counts. See [company.md](company.md) and [risks-and-questions.md](risks-and-questions.md).

## What is and is not in this pack

Included:

- Official site and product architecture.
- Complete public docs index from `docs.actionmodel.com/llms.txt`, with section summaries.
- Chrome extension store metadata, permissions, public review themes, and review-quality caveats.
- Actionist, ActionFi, marketplace, token, referral, and partner surfaces.
- Public social handles, available follower/member snapshots, content pillars, and a 12-video YouTube inventory.
- Official blog inventory and external coverage.
- Contradictions, risk register, and a prioritized diligence question list.

Not claimed:

- This is not a claim that every X, Instagram, TikTok, Telegram, LinkedIn, or Chrome review item was fully enumerated. X returned 403, Instagram/TikTok were throttled or robots-blocked, and the official Chrome page exposed the aggregate rather than a complete export. Public mirrors exposed only a review subset.
- No account login, private Discord inspection, private SDK access, extension installation, binary reverse engineering, packet capture, token-contract audit, legal opinion, or penetration test was performed.
- No claim that any review is fake. The burst/generic pattern is a diligence flag only.

## Pack contents

- [index.html](index.html) — the all-in-one linked report for local or Cloudflare Pages viewing.
- [sources.md](sources.md) — source inventory and evidence map.
- [company.md](company.md) — identity, people, corporate signals, claims, and business model.
- [product-ecosystem.md](product-ecosystem.md) — product-by-product analysis.
- [docs-index.md](docs-index.md) — public docs index and notable contradictions.
- [extension-and-reviews.md](extension-and-reviews.md) — Chrome extension, permissions, review evidence, and app-store checks.
- [socials.md](socials.md) — official handles, count snapshots, content themes, and scrape limitations.
- [blog-and-content.md](blog-and-content.md) — blog inventory, narrative analysis, and external coverage.
- [risks-and-questions.md](risks-and-questions.md) — diligence backlog, validation tests, and client-meeting questions.
- [data/youtube-video-inventory.tsv](data/youtube-video-inventory.tsv) — machine-readable public YouTube video list.
- [manifest.json](manifest.json) — machine-readable pack metadata.
- [CLOUDFLARE.md](CLOUDFLARE.md) — direct-upload and Wrangler handoff.

## Recommended next diligence wave

1. Get a sandbox account or test invite, install the extension in a disposable Chrome profile, inspect the exact manifest, permissions, storage, outbound requests, masking, pause/opt-out behavior, and deletion flow.
2. Request legal entity, token contract/TGE status, privacy/DPA/subprocessor documents, security audits, data-retention schedule, and a reconciled KPI export.
3. Obtain authenticated or API-level exports for X, LinkedIn, Telegram, Chrome reviews, and Actionist usage so the social and review sections can be upgraded from indexed snapshots to complete datasets.
