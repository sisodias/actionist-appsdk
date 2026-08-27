# Call brief — Cena (Sina Yamani), 25/26 Aug 2026

> **Deep-dive addendum (25 Aug, late):** three research lanes completed after this brief
> was first written. Full reports in `../research/`:
> `actionist-teardown-2026-08-25.md`, `builder-architecture-intel-2026-08-25.md`,
> `sina-company-intel-2026-08-25.md`, plus the demand spec `what-cena-wants.md`.
> The five highest-leverage new facts:
>
> 1. **vibesdk failure was structural, not his dev.** Cloudflare's own hosted instance
>    reproduces the backend-deploy break (repo issue #313): sandbox-green ≠
>    production-green, plus entitlement-coupled deploy failures (#162) and heavy paid
>    platform requirements. Clearing his dev on the call = instant credibility + sets up
>    our differentiator (deployment as a separately-tested subsystem).
> 2. **v0 is the existence proof for our architecture.** Vercel publicly runs
>    registry-as-JSON components + composite models (frontier for big gens, cheap model
>    for narrow edits, dedicated AutoFix model). "MiniMax-primary with structured edits"
>    is production-proven, not a bet. Lovable's own blog adds curated-retrieval as the
>    cheap-loop stabilizer.
> 3. **$LAM is not live** (CryptoRank: isTraded:false, no TGE date) and **no disclosed
>    funding exists** — the "$100M+ raised" docs line is about the team's prior projects.
>    So: fiat, milestone-based, named entity, paid phase-1. Their $100/hour apply-page
>    terms claim workflow IP for Action Model — expect the same instinct in our contract;
>    the corpus/library stays ours, they license outputs.
> 4. **Technical counterpart is Poorya Araghy (Technical Lead);** Parsa Yamani is on
>    the team as Automation Engineer (warm channel). Integration surface per
>    learn.actionist.ai docs: agent/skill + MCP connector + credentials vault + approval
>    gates; their "Projects" flow (goal→plan→phases→approval) is already the builder's
>    UX skeleton. But sdk.actionmodel.com DNS is dead and openapi.json 404s — ask which
>    contract is canonical, and get API access as a named phase-0 dependency.
> 5. **They ship daily, low-QA** (extension v0.32.0 updated today; today's marketing page
>    has placeholder copy). Demo-first culture confirmed from the outside. Also: docs
>    trail the product by 12-18 months everywhere — trust the live product and the call,
>    not their docs.

You asked for 20 minutes to "get a good base understanding of what we tryna do here."
He said later tonight ("dealing with market open"). This is everything you need in one page,
plus backup depth.

## What he actually wants (from the chat, in his own words)

The project has been circling since **17 May 2026** and has sharpened each time:

1. **17 May:** "Lets say you wanted to clone a SaaS… in less than 1 week." Then: "It's not 1.
   It's hundreds." He has a marketing strategy where the missing piece is "having many
   different SaaS products," and 400k Action Model users as distribution. His proposed
   structure: he gives you 1 SaaS + NFRs/specs, you build a **repeatable framework**, then a
   dev team scales it across many apps. Devs as QA gates, agents do ~99%.
2. **23 Jun:** "We basically want **Lovable inside of our platform**. User says 'I need a
   marketing dashboard that does XYZ', agent asks questions, confirms, goes off and builds
   it." They tried Cloudflare's vibesdk and it flopped (he half-blames the dev).
3. **26 Jun (his key insight, agrees with yours):** Lovable isn't building from scratch — it's
   thousands of **vetted scaffolds/templates** pieced together. Scraping GitHub to build that
   library "is what you need to rebuild something like Lovable."
4. **9 Jul:** You pitched the image-gen UI iteration loop (mockups in 30s instead of 10-min
   code iterations) + GitHub sourcebank as the moat. His response: "If you can build it
   working and flexible, **I'll pay you for it**." Constraint he named: it must run on
   **MiniMax-class models** — cheap inference, not Opus.
5. **29 Jul:** "You wanna be paid or what… **Actionist.ai** — come tell me if you want to
   build for something serious." This is the offer on the table.

So the ask = **a builder module inside Actionist**: prompt → clarify → confirm → build,
powered by (a) a curated scaffold/component library mined from GitHub and (b) a fast
UI-mockup iteration loop, executable by cheap models. Your 850k-repo corpus (80k+
categorized, ~300 categories) is exactly the asset he doesn't have.

## Why you're uniquely positioned (say this, don't undersell)

- The corpus exists **today**: ~850k repos scraped, 80k+ categorized, value-mining pipeline
  designed. He called it "insane." Nobody on his team is doing this.
- You already prototyped the framing he later repeated back as his own insight (templates >
  codegen). You're aligned on architecture before the call even starts.
- He's watched you ship infra for 18 months (bifrost, CMUX, agent teams, the MiniMax
  pipeline). Trust is established; he forwarded your messages to his dev.
- Cheap-model constraint plays to your strength: your whole stack is built around routing
  bulk work to cheap models with quality gates, which is exactly what "Lovable on MiniMax"
  needs.

## What to pin down on the call (the 5 that matter)

1. **Scope + surface:** Does the builder live inside Actionist (user-facing "build me an
   internal tool") or is it an internal factory producing the "hundreds of SaaS" for his
   distribution play? These are different products; he has described both. Get one first target.
2. **First deliverable:** Propose a bounded phase-1 — e.g. scaffold library v1 (top N
   categories: dashboard, CRM, auth+billing base, admin panel) + one working
   prompt-to-app path on a single vertical. He responds well to "1 SaaS first, then
   repeatable framework" — that was his own proposal on 17 May.
3. **Commercials:** He's said "I'll pay you" twice, never a number. He floated "£10-20k each,
   split revenue" for a different service in Jan 2025, so he thinks in those ranges.
   Decide your floor before the call: retainer + milestone, or equity/rev-share on the
   builder. Cam's project is ~80-90% done — you can honestly say you have capacity now.
4. **Model + infra constraints:** Confirm MiniMax-class is a hard constraint, what inference
   budget per build, and whether it runs in their cloud (they already use BrowserBase for
   Actionist cloud browsers) or yours.
5. **Who else touches it:** He mentioned "my dev" and a dev team as QA. Get clarity on
   whether you're architect + builder or handing a framework to their team — changes how
   you price and how you protect the corpus.

## Leverage & posture notes

- **Don't hand over the corpus.** The scraped/categorized GitHub corpus is your moat in this
  deal. Sell access/output (curated scaffold library, builder pipeline), not the raw asset.
- He negs playfully ("you're doing the wrong shit", "you need a mentor", "taking the piss").
  It's rapport, but it's also anchoring. The 24 Aug messages show him warm: "You been top of
  the list for a minute."
- He's technical enough to smell vapor (called out buzzword landing pages, distrusts
  benchmarks) but is NOT deep in agent infra — he stayed on OpenClaw because "it does the
  job." Demo > architecture talk. If you can show one prompt→working-app run, even rough,
  that closes harder than any diagram.
- Web3 context: Action Model is a token ecosystem ($LAM, pre-TGE by public docs). Building
  the Actionist builder module is clean SaaS work, but before any public association or
  equity-style comp, skim `../research/actionmodel-deep-dive/risks-and-questions.md` —
  P0s are the privacy surface of the extension and unresolved legal entity/token status.
  For a services engagement, invoice a defined entity and get paid in fiat.

## Product hook for the call: "Actionist Builder" already exists

Their own YouTube has "How **Actionist Builder** Works | Workflow Editor with No Code or APIs
Needed" — Builder is already a branded surface, but today it means the no-code *workflow*
editor (visual nodes, branches, loops, MCP/REST/webhooks). What Cena is asking you for is
the step-change: Builder that produces *apps*, not workflows. Frame it that way on the call —
"you already have Builder for workflows; I'm proposing Builder for apps, powered by a vetted
scaffold library" — it slots into their existing product language and marketplace mechanics
(creators sell workflows/agents for $LAM; generated apps could join the same economy).
Their docs also lag the product badly (docs still say private beta / 2025 roadmap dates
while actionist.ai ships pricing + demo), so don't assume docs reflect current internals —
ask what the workflow editor's codegen layer actually does today.

## Their business right now (from the research pack — 30-second version)

- **Action Model:** Chrome extension, users contribute browser-action data to train a "Large
  Action Model," earn points/$LAM. ~80-90k store installs, "500k+ people" claimed on site.
- **ActionFi:** partner layer paying users for verified real product usage (launched SIXR
  Cricket campaign w/ claimed $100k pool — announced today, 25 Aug).
- **Actionist (actionist.ai):** the SaaS — "AI employees," desktop free / Basic $55 / Pro
  $155/mo, workflow editor, marketplace (10k+ workflows claimed), cloud via BrowserBase.
  **This is where your builder would live.**
- Team claim: 20+ engineers, exec/advisor roster from NEAR/Arbitrum/Polkadot/etc.
  Founder: Sina Yamani, London; prior: Flytask, ListLearner.

## Open follow-ups

- The chat mentions a DocSend deck (`actionmodel.docsend.com/view/t97d954726jtn8df`, sent
  Aug 2025) and a Google Doc he was sent 23 Aug — worth opening before the call if links
  are still live.
- A `sk-cp-…` key (CapSolver-style) sits in the chat plaintext from 18 Aug — treat as
  burned/rotate.
