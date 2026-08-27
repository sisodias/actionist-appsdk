# Social and community deep dive

## Canonical handles

The [official Linktree](https://linktr.ee/ActionModel) is the strongest canonical-link source. It links the Action Model dashboard, Chrome Store, docs, ambassador flow, explainer video, Discord, Telegram, X, YouTube, Instagram and TikTok.

| Channel | Official URL | Observed audience / status | Confidence |
|---|---|---:|---|
| X / Twitter | [@ActionModelAI](https://x.com/ActionModelAI) | ~60K followers; 968 tweets; following 28 in a recent indexed snapshot | Third-party snapshot; direct page 403 |
| LinkedIn | [Action Model AI](https://www.linkedin.com/company/actionmodelai/) | ~4,625 followers in a recent indexed snapshot | Search/company snapshot; fluctuates |
| Telegram group | [@actionmodel](https://t.me/actionmodel) | ~13,313 members; ~938 online at observation | Live public count; fluctuates |
| Telegram updates | [@actionmodelupdates](https://t.me/actionmodelupdates) | ~18.9K subscribers in an 16 Aug 2026 indexed snapshot | Third-party snapshot |
| YouTube | [@ActionModelAI](https://www.youtube.com/@ActionModelAI/videos) | 12 public videos enumerated | Read-only playlist inventory |
| Instagram | [@actionmodelai](https://www.instagram.com/actionmodelai/) | Handle verified through official link graph; count unavailable | Direct page throttled |
| TikTok | [@actionmodelai](https://www.tiktok.com/@actionmodelai) | Handle inferred from official link graph/search; count unavailable | Robots/access blocked |
| Reddit | [r/ActionModel](https://www.reddit.com/r/ActionModel/) | Small public subreddit; subscriber count not visible | Visible posts/rules only |
| Discord | [Action Model invite](https://discord.com/invite/actionmodelai) | Invite surfaced; membership/content not inspected | Private/login-gated |

The X snapshot varies quickly: an older index showed roughly 766 tweets/42K followers, a later one 952/59K, and the most recent one 968/60K. That suggests genuine growth, but it is still an indexed counter and not an analytics export.

## X / Twitter content analysis

Direct [X access](https://x.com/ActionModelAI) returned 403 in this environment, so the “all posts” request could not be completed. The [TwStalker mirror](https://www.twstalker.com/ActionModelAI) and search-index snippets supplied current counts and representative themes.

### Recurring content pillars

1. **ActionFi launches and partner campaigns** — reward pools, verified actions, partner tokens/stablecoins, leaderboards and lotteries.
2. **Actionist product education** — Builder, no-code workflows, agents, marketplace and computer-use automation.
3. **Community ownership / AI politics** — Big Tech concentration, AI labor displacement, “fractional ownership,” and taking control of the future.
4. **Growth mechanics** — referral/ambassador onboarding, quests, points and training rewards.
5. **Founder/community media** — livestreams, podcasts, partner spaces and replies/quote tweets.
6. **AI/Web3 commentary** — topical news used as a bridge back to Action Model’s ownership and reward thesis.

### Engagement interpretation

The highest-share narrative is not always the most product-specific. Fear/ownership framing provides reach; tutorials and campaign instructions convert attention into extension installs, referrals and ActionFi activity. This is an effective community funnel, but engagement should be segmented into organic discussion, incentive tasks, partner campaign activity and product feedback.

## LinkedIn content analysis

The [official LinkedIn page](https://www.linkedin.com/company/actionmodelai/) presents itself as a public-company-style Action Model AI page. Indexed snapshots show roughly 4.6K followers and company metadata of 51–200 employees / Cayman headquarters, which should be treated as self-reported.

Visible recent content includes:

- the 25 August 2026 ActionFi/SIXR Cricket launch and reported $100K reward pool;
- Actionist and Action Model product explainers;
- AI ownership, employment and “AI replacing jobs” commentary;
- tutorials about points and training;
- referral/quest/ambassador acquisition instructions;
- launch retrospectives with rapidly changing milestone numbers.

One indexed growth post describes passive extension training, ActionFi, referrals and social quests such as following X, watching an explainer and liking Instagram. This is direct evidence that social activity is part of the acquisition system, not merely brand publishing.

## Telegram

[Action Model](https://t.me/actionmodel) functions as the main public community group. The observed member/online counters indicate a materially larger community than the subreddit or LinkedIn page, but Telegram counts can include dormant or low-intent members.

[Action Model Updates](https://t.me/actionmodelupdates) is a separate public broadcast channel. Indexed posts show launch announcements, missions, partner updates and Actionist messaging. A complete post export was not attempted in this run; use Telegram’s public history/API or authenticated browser for a full chronology.

## YouTube inventory

The official channel exposed 12 public videos. The machine-readable list is [data/youtube-video-inventory.tsv](data/youtube-video-inventory.tsv).

The titles reveal the content funnel:

- thesis/urgency: “AI Is Coming for 1 Billion Jobs”;
- product education: Actionist, workflow editor, marketplace and training;
- ActionFi activation: how-to tutorial, incentive platform, system explanation;
- conceptual education: LAMs versus LLMs and AI income/ownership.

The channel is an unusually clean view of the funnel because it moves from problem framing to product mechanics to task activation.

## Actionist social graph

The [Actionist about page](https://actionist.ai/about) lists:

- Instagram `@actionist.ai`;
- YouTube `@Actionist_AI`;
- X `@Actionist_ai`;
- LinkedIn `Actionist`;
- TikTok `@actionist.ai`.

The Actionist graph should be analyzed separately from Action Model because it targets automation buyers rather than contributors/crypto participants. The likely content split is:

| Action Model | Actionist |
|---|---|
| AI ownership, training, points, ActionFi, token/community | Work completed for the user, agents, workflows, integrations, approvals, SaaS pricing |
| Contributor and partner acquisition | Automation buyer and creator acquisition |
| Web3 and labor/ownership narrative | Practical productivity and business use cases |

## Public-community health

The public [Reddit community](https://www.reddit.com/r/ActionModel/) was created in March 2025 and showed only a small number of visible posts in the run. Its rules prohibit scams, spam, low-effort promotions and unofficial links. Visible topics include official launch messaging and user questions about training/reward delays.

This is not necessarily a weakness: the company appears to concentrate community activity in Telegram, Discord and X. It does mean Reddit is not currently a strong independent support or sentiment channel.

## Full social scrape limitation

The requested full scrape of every X post, Instagram/TikTok post and all Telegram history was not completed because the direct surfaces were blocked, throttled, or login-gated. The pack records canonical links, available counters, representative content pillars and the YouTube inventory. A second pass with authenticated browser/API access should produce a dated export with post IDs, timestamps, text, media links, engagement, and campaign labels.
