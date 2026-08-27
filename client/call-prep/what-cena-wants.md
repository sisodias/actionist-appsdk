# What Cena actually wants — demand spec from primary evidence

Every claim here cites the WhatsApp export (`comms/whatsapp-export-2026-08-25/_chat.txt`)
by date. This is the demand side; the supply/architecture side is in PROJECT.md.

## The evolution of the ask (five distinct versions, in order)

**V1 — SaaS cloning factory (17 May 2026).** "Lets say you wanted to clone a SaaS…
in a way that it would take you less than 1 week." Then the reveal: "its not 1. Its
hundreds." Motive stated same night: "I have a marketing strategy… we have 400k users in
actionmodel… one of the missing pieces is having many different SaaS products." His
proposed engagement shape: "I give you 1 SaaS… I'll give you some NFRs along with the
specs. Your goal is to create a repeatable framework. We can then manage a team of
developers, who will be building out the many different apps."

**V2 — Lovable inside the platform (23 Jun 2026).** "We basically want lovable inside of
our platform. We want user to say 'I need a marketing dashboard that does XYZ', agent asks
some more questions, confirms it with the user, and then it goes off and builds it." They
already tried Cloudflare vibesdk: "we tried to implement this but it was pretty shit
apparently. but im not 100% sure i trust that dev." Note both halves: V1 is an *internal
factory*, V2 is a *user-facing feature*. He has never reconciled them — that's call
question #1.

**V3 — the scaffold-library insight (26 Jun 2026, 04:05, unprompted).** "There is no way
they're building anything… They've built all the scaffolds… you could do [it] by scraping
all of GitHub… library of all of the different pieces of functionality… they probably find
a nice base template, and it grabs all these components and pieces it together." This is
him independently converging on Shaan's architecture. When Shaan replied "i thought this
was the end goal anyways?" — meaning alignment was already total.

**V4 — plus the image-gen UI loop (9 Jul 2026).** Shaan pitched: generate UI as images
for client iteration (30s/round vs 10min code rounds), pick themes/wireframes/comps, then
reverse the chosen mockup into code. Cena: "Yeah thats a cool idea… This bit seems like
the easy part though. what about the lovable part 😛" — then the commitment: "Not easy
bro. **If you can build it working and flexible, I'll pay you for it.**" And the one hard
technical constraint, when asked what models it must run on: "**Minimax**" (9 Jul 18:40).

**V5 — the standing offer (29 Jul 2026).** "you wanna be paid or what… **Actionist.ai —
Come tell me if you want to build for something serious.**" Reiterated warm 24 Aug: "You
been top of the list for a minute." Call requested by Shaan (20 min, "get a good base
understanding"), pending as of 25 Aug night — Cena: "Later bro. Just dealing with market
open."

## Requirements he has actually stated (vs. what we're assuming)

Stated by him, quotable:
- Prompt → clarify → confirm → autonomous build ("agent asks some more questions, confirms
  it with the user, and then it goes off and builds it", 23 Jun).
- Runs on MiniMax-class models (9 Jul). Corroborated 6 Jun: "I wanted to buy 50x minimax
  accounts and just juggle between them for users — load balancing etc" → cheap inference
  per end-user action is a core unit-economics assumption of the whole platform.
- "Working and flexible" (9 Jul) — flexibility explicitly valued over polish.
- Repeatable framework, devs as QA layer, scale across many apps (17 May).
- Base framework = "Db, auth, payments, etc… This already exists brw. Just dno where.
  Probably 10 open source repos for this already" (17 May) — he expects OSS reuse, not
  custom infra.
- Speed of delivery matters to him: the original frame was "less than 1 week" per SaaS.

Never stated — do not assume, ask:
- Budget or pricing model (only proxies exist: £10-20k/service + rev-split for the
  onboarding-pages idea, Jan 2025; 25% commission structures on ListLearner).
- Target user of the builder (Actionist end-users? his internal team? ActionFi partners?).
- Tenant/hosting model for generated apps (their cloud? BrowserBase? user-owned?).
- Ownership/IP of the framework and library.
- Timeline beyond "asap" energy.
- Whether $LAM economy wraps generated apps (marketplace sells workflows/agents today;
  apps would be a new asset class).

## What he values / how he decides (evidence-based)

- **Distribution-first thinker.** Every product idea routes through "we have 400k users."
  The builder is a growth asset to him, not a dev tool.
- **Skeptical of hype, convinced by demos.** "Landing page is all buzz words" (2 Mar);
  "Benchmarks just ain't accurate… they rig their models" (23 Feb); tested agent-zero
  claims himself within days. One working prompt→app run will out-sell any deck.
- **Cheap-and-simple bias.** Stayed on OpenClaw because "it does the job" (12 Mar);
  "I dont like installing things" (23 Jun); "cba, too much hassle" (23 May). The builder
  must not require him to adopt Shaan's whole stack — it must dock into theirs.
- **Moves on trust + proof of person.** Forwarded Shaan's messages to his dev (4 Jun);
  said "you a lowkey genius, you just need a mentor" (17 May); the corpus demo ("bro
  thats insane", 25 Jun) is what converted interest into a concrete offer.
- **Deal-fluent.** "Dealing with market open" (25 Aug); token ecosystem; buys/sells IG
  handles. Expect commercial negotiation to be quick and numeric. (Correction from Shaan
  26 Aug: the $1k → $600 @siso handle move was the third-party seller's price change,
  relayed by Cena as a favor — not Cena's own negotiation behavior. Don't cite it as
  anchoring.)

## Trip-wires from the history

- He half-blames a dev for the vibesdk failure ("not 100% sure i trust that dev", 23 Jun).
  If the builder underdelivers, the same lens lands on us — bounded phase-1 with a
  demoable exit is protection for both sides.
- Shaan deferred him three times for Cam's project (9 Jul, 2 Jul, 29 Jul "you taking the
  piss"). Credibility on availability is the soft spot — commit only capacity that's real.
- He shares things fast (forwarded messages to dev; team got bifrost same day). Assume
  anything sent to him circulates to his whole team.
