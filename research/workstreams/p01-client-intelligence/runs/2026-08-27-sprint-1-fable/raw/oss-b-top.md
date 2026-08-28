# OSS Survey B — Workflow Mining & Client-Intelligence Precompute: Top 8 Dossiers

Observed 2026-08-27. Sprint-1 lane S1-L1, part P01. Research-only; no cloning, no execution, no authenticated access.

Selection rule for the top 8: fetched from source (not search-only), licence body or repo-page licence actually read, and a defensible mapping to the precompute-before-ask thesis. Two entries with strong pattern value were kept despite disqualifying flags (GraphRAG maintenance mode, traffic2openapi's 3 stars) and the flags are stated up front rather than buried.

---

## 1. OpenAdaptAI/OpenAdapt — task-mining — MIT

**Evidence it extracts.** A user performs a task once; OpenAdapt captures the demonstration across browser, Windows, macOS, Linux, RDP and Citrix/VDI surfaces and compiles it into a deterministic, locally executable program. The compiler retains structural, accessibility, visual, OCR, spatial and transition evidence — so the artifact is not a pixel-coordinate macro but an inspectable workflow bundle with reasons attached to each step. Companion `openadapt-capture` handles native screen, mouse, keyboard, timing and window-scope capture.

**Input requirements.** The client must install software on a working machine and consent to full screen, keyboard and OCR capture during the demonstration. That is the maximum-invasiveness end of the spectrum: everything visible during the recording is captured, including whatever else is on screen.

**Maturity.** 1.7k stars, 263 forks, 1,157 commits, and actively splitting a pre-1.0 monolith (v0.46.0, now frozen under `legacy/`) into separate flow, capture, privacy and desktop repos. Real project, unstable API surface. Adopting today means tracking a moving multi-repo target.

**Pattern Actionist could adopt.** The governing discipline, stated in the README as a design claim: zero generative-model calls on healthy runs, governed repair, and halting instead of guessing. That is exactly the right posture for precomputed client context — when the evidence runs out, produce a gap and stop, rather than letting a model fill it in plausibly. A precompute layer that halts and marks an unknown is one Cena can trust; one that interpolates is not.

**Privacy/authority boundary.** PII/PHI scrubbing lives in an optional `[privacy]` extra and a separate `openadapt-privacy` repo, meaning the safe configuration is opt-in rather than default — a deployment that forgets the extra captures raw screens. The architecture is otherwise well-drawn: raw recordings stay local, data crosses a boundary only through explicit sanitization and exact-byte approval, and the hosted path carries only status values and counts. The boundary to negotiate with a client is not technical but organizational: recording one employee's screen captures their colleagues' and customers' data too, and that employee cannot consent on those people's behalf.

---

## 2. xlang-ai/OpenCUA — task-mining — MIT (research, educational **and** commercial)

**Evidence it extracts.** AgentNetTool is a cross-platform GUI recorder (Windows, macOS, Ubuntu) capturing synchronized screen video, mouse/keyboard events and accessibility trees. Processing performs action reduction — merging low-level events into semantic PyAutoGUI-level actions — plus state-action matching and synthesized reflective chain-of-thought. The published AgentNet dataset is 22.6K human-annotated tasks across 200+ applications on three operating systems.

**Input requirements.** Same class of consent as OpenAdapt: an installed recorder with screen and accessibility-tree access. The accessibility tree is the sharper concern, because it yields structured text of every field on screen, including ones the user never looked at.

**Maturity.** NeurIPS 2025 spotlight with credible artifacts: 826 stars, dated updates through 2026-01-17, third-party contributions (Meituan's vLLM support, a community exllamav2 quantization), and OpenCUA-72B ranked #1 among open-source models on OSWorld-Verified at 45.0%. The models are strong; the *tool* is instrumental to the research agenda, so expect research-grade ergonomics.

**Pattern Actionist could adopt.** Two things. First, action reduction: raw event streams are unusable as evidence, and collapsing them into semantic actions is what makes a demonstration legible to both a model and a human reviewer. Second, and more important, the browser-based review-trim-submit gate. The recording is not evidence until the person who made it has seen it, cut what should not leave, and pressed submit. That is the consent architecture Actionist should copy wholesale for any client capture — consent to *this specific captured artifact*, granted after seeing it, not blanket consent to a recording process.

**Privacy/authority boundary.** MIT explicitly permits commercial use, which distinguishes it from screenrpa's CC BY-NC and makes it the best-licensed recorder found. The boundary is the accessibility tree: it is the most complete text capture of the three streams and the least visible to the person being recorded, who reasonably models "screen recording" as "what I can see" rather than "every DOM node in every open window."

---

## 3. ActivityWatch/activitywatch — task-mining — MPL-2.0

**Evidence it extracts.** `aw-watcher-window` logs the focused application and its window title; `aw-watcher-afk` infers active versus idle from keyboard and mouse input; the `aw-watcher-web` browser extension records the active tab's title and URL. Editor plugins add coding-time attribution. The output is a timeline of attention across applications and sites.

**Input requirements.** Install a lightweight local agent plus a browser extension. Far below the consent bar of screen recording — no pixels, no keystrokes, no screen text.

**Maturity.** The most mature capture project in this survey by a wide margin: 18.7k stars, 991 forks, 1,130 commits, an active Rust server rewrite slated to become the default, and a decade-old community of third-party watchers. 169 open issues is a normal backlog at that scale.

**Pattern Actionist could adopt.** This is the pragmatic tier-1 sensor. Application names and tab URLs are enough to answer the questions that otherwise burn the first client meeting: which CRM do you actually use, how much of the day sits in email versus the ticketing system, which tools did you say you use but never open. Precomputing those answers converts an hour of low-value discovery questions into a five-minute confirmation. The architectural lesson is the tiering itself — start with the least invasive sensor that answers the question, and escalate to screen capture only for the specific workflow that needs it.

**Privacy/authority boundary.** Window titles leak far more than the category "app usage" suggests: document filenames, customer names, email subject lines, CRM record names. The strongest evidence for this is that a research fork exists (`simonperneel/activitywatch_ERC`) built specifically to disable window-title tracking and keep only coarse site categories — someone with an ethics review concluded the default was too revealing. If Actionist deploys this, titles should be hashed or category-mapped at the edge by default. MPL-2.0 is file-level copyleft: modifications to ActivityWatch's own files must be published, but it will not reach into surrounding proprietary code.

---

## 4. process-intelligence-solutions/pm4py — process-mining — AGPL-3.0 (dual-licensed) ⚠

**Evidence it extracts.** Given an event log with case ID, activity and timestamp, pm4py discovers the actual process model — Alpha, Heuristics and Inductive miners producing Petri nets, BPMN or process trees — and then performs conformance checking (alignment-based, Earth Mover Distance, LTL) to measure how far reality diverges from the intended process. It reads XES and supports OCEL 2.0 including object-centric discovery and conformance.

**Input requirements.** The client must supply an event log, and this is the real barrier. Every state transition needs a case identifier, an activity name and a timestamp. CRM stage-change histories, ticket transitions, order-status tables and ERP audit logs all qualify in principle; in practice extracting and correlating them is the bulk of the work, and the mining step is comparatively trivial.

**Maturity.** 1.0k stars, 355 forks, 9,616 commits, Python 3.9-3.14, maintained by a Fraunhofer FIT spin-off with an academic citation record. Genuinely the reference implementation.

**Pattern Actionist could adopt.** Conformance checking is the idea worth taking even if the code is not. The output that changes a client conversation is not the discovered map but the divergence: here is the process you described, here is the one your logs show, and here are the rework loops and skipped approvals in between. That gap is precomputed, evidence-backed, and impossible for the client to produce about themselves — which is exactly the asymmetry the precompute-before-ask thesis is trying to create.

**Privacy/authority boundary.** Two boundaries, one legal and one ethical. **Legal, and this is the one that costs money:** the GitHub version is AGPL-3.0 and the maintainers sell a separate commercial licence specifically for closed-source use. AGPL's network clause plausibly reaches a hosted Actionist service that uses it. A licence-badge glance reading "open source" is precisely the trap this project's evidence standard exists to catch — do not build a client deliverable on pm4py without either buying the commercial licence or routing the analysis through permissively-licensed bupaR (see `oss-b-003`, licence still to be confirmed from DESCRIPTION). **Ethical:** event logs are per-person performance data. A discovered process showing which employee's cases loop is a surveillance artifact regardless of intent, and it should be aggregated before anyone at the client sees it.

---

## 5. firecrawl/fire-enrich — enrichment — MIT (over paid APIs)

**Evidence it extracts.** From an email address alone: company name, website, industry and sub-category, business model and market segment, employee count, founding year, HQ, funding stage, total raised, investors, tech stack, plus arbitrary user-defined fields — each field carrying source URLs. Specialized agents (Discovery, Company Profile, Financial Intel, Tech Stack) run in phases and GPT-4o synthesizes. Personal email domains are skipped automatically.

**Input requirements.** One email address. Nothing from the client, no permission, no installation — this runs entirely on public data before first contact.

**Maturity.** 1.3k stars and 314 forks against only **35 commits**. That ratio tells the real story: this is a demo-scale showcase for Firecrawl's paid API that got popular, not a maintained library.

**Pattern Actionist could adopt.** The per-field source citation, and it is the most portable idea in this survey. Every precomputed fact about a client should arrive with the URL it came from, so Cena can check the ones that matter and discard the ones that are wrong. Without that, precomputed context is a model's confident guess and the first error destroys trust in the whole dossier. With it, an error is a bad source rather than a broken system. The phased multi-agent decomposition is also worth copying — a Tech Stack agent and a Financials agent have genuinely different search strategies and success criteria.

**Privacy/authority boundary.** MIT covers the orchestration shell only; the capability is rented. It will not run without a Firecrawl key and an OpenAI key, so both the cost and the data flow sit with third parties — and every domain enriched is a domain disclosed to two vendors. This is structurally the same trap as the Composio finding from 27 Aug: a permissive licence over a paid hosted dependency, where the badge describes the wrapper and not the product. Second boundary: synthesis is GPT-4o-mediated, so field values are model outputs conditioned on scraped pages, not scraped facts — the citation shows where the model looked, not that the model read it correctly.

---

## 6. getzep/graphiti — org-graph — Apache-2.0

**Evidence it extracts.** Builds and queries temporal knowledge graphs incrementally, ingesting user interactions plus structured and unstructured data without full recomputation. Facts carry validity windows and are bi-temporally tracked, so contradictions invalidate rather than delete — the README's phrasing is that old facts are invalidated, not deleted. Provenance runs through "episodes" (raw ingested data), so every derived fact traces to its source. Retrieval is hybrid: semantic embeddings, BM25 keyword and graph traversal. Ontology is user-defined through Pydantic entity and edge types, or learned from data.

**Input requirements.** Client documents and conversation transcripts, plus a graph database and an LLM key. Nothing invasive — this operates on material the client hands over deliberately.

**Maturity.** 30.3k stars, 3.1k forks, 952 commits, and it powers Zep's commercial product. Very active, though 206 open PRs against 285 open issues indicates contribution outpacing review.

**Pattern Actionist could adopt.** Two properties map directly onto precompute-before-ask, and no other project here has both. **Bi-temporal invalidation:** a client's situation changes — they switch CRM, the ops lead leaves, the pricing model moves. A precompute store that overwrites loses the fact that it used to believe something else and when that stopped being true; one that invalidates can answer "what changed since we last spoke," which is a question worth asking. **Episode provenance:** identical in spirit to fire-enrich's field citations but built into the data model rather than bolted onto an output, so it survives derivation and aggregation. Together they give a client-context store where every fact has a source and a valid-from/valid-to window. That is the right substrate.

**Privacy/authority boundary.** Open-core — the engine under a paid product, so the roadmap serves Zep, and features that would cannibalize the commercial offering are unlikely to land. Operationally: it needs a real graph database (Neo4j 5.26, FalkorDB, or Neptune plus OpenSearch Serverless), because the lightweight embedded option (Kuzu) is deprecated for being unmaintained upstream — there is no cheap local backend, so per-client infrastructure is a real cost. And ingestion requires an LLM call per episode, meaning every client document sent into the graph is a document sent to a model provider. For a client's contracts and internal SOPs, that needs to be an explicit, named permission, not a footnote.

---

## 7. scikit-activeml/scikit-activeml — active-learning — BSD-3-Clause

**Evidence it extracts.** Nothing directly — this is policy machinery, not a sensor. It implements 60+ query strategies from 40+ papers for deciding which unlabeled item is most worth labelling next, across both pool-based settings (all candidates available at once) and stream-based settings (candidates arrive sequentially under a labelling budget), with deep active learning via skorch/PyTorch.

**Input requirements.** A model of what is unknown about the client and a way to score candidate questions. The library supplies the selection strategies; the domain modelling is Actionist's to build.

**Maturity.** 201 stars, 24 forks, 2,531 commits, BSD-3-Clause, with a July 2025 preprint. Small community for the surface area, but permissively licensed, actively developed and better maintained than modAL — whose CI badges still point at travis-ci.org, retired years ago, alongside a 94-issue backlog and a 2018 citation.

**Pattern Actionist could adopt.** The **stream-based** formulation, specifically, and this is the insight worth carrying out of this survey. A client conversation is not a pool where you rank all possible questions and pick the best; it is a stream where each candidate question surfaces in context and must be asked-or-skipped immediately, under a hard budget (the client's patience). That is textbook stream-based active learning with a labelling budget — the default in scikit-activeml is a 10% budget, meaning label one in ten arrivals. Framing question selection this way turns "which questions did the precompute make unnecessary" from a hand-written rule list into a scored policy: precomputed evidence lowers the uncertainty on a topic, and the topic falls below the ask-threshold on its own.

**Privacy/authority boundary.** No direct privacy surface — it processes whatever representation you build. The honest limitation is conceptual and should be stated to Cena rather than papered over: these strategies rank items by *model uncertainty*, which is a proxy for question value, not a measure of it. Nothing in the library models the cost of asking, how intrusive a question is, or whether the client can even answer it. A question about revenue split may be maximally informative and completely unaskable in a first call. Adopt the framing and the selection loop; expect to write the value function, including an intrusiveness penalty, from scratch.

---

## 8. grokify/traffic2openapi — introspection — MIT ⚠ 3 stars

**Evidence it extracts.** Normalizes HTTP traffic from HAR files, Postman collections, Playwright/Puppeteer/Cypress captures, mitmproxy and Charles logs, and Go `http.Client` into a versioned intermediate representation (`ir.v1`), then infers OpenAPI 3.0/3.1/3.2 specs — detecting path and query parameters, type and format inference (email, UUID, date-time, URI, IPv4/IPv6), Bearer/Basic/API-key auth schemes, and pagination patterns; it also diffs two specs to surface breaking changes.

**Input requirements.** A HAR file. That is the whole ask — the client exports one from browser DevTools during a normal working session, with no agent installed, no cluster access, and no admin credentials.

**Maturity.** This is the flag: **3 stars, 0 forks, 0 watchers, no tagged releases.** Engineering hygiene is genuinely strong for a project that size — Go CI, lint, CodeQL SAST, MkDocs site, CHANGELOG, ROADMAP, security policy, a versioned JSON Schema contract, and adapters in three languages — but hygiene is not adoption, and this is a single maintainer pre-1.0. Include it as a pattern and a possible reference implementation, not as a dependency to build a client deliverable on.

**Pattern Actionist could adopt.** The authority arbitrage. Compare it to APIClarity (`oss-b-023`), which does the same job better and is Apache-2.0, but was archived on 29 May 2026 and requires deploying a traffic tap inside the client's production Kubernetes cluster. traffic2openapi gets a meaningful fraction of the same evidence — which internal and third-party APIs the client's tools actually call, with what auth and what shapes — from an artifact the client can generate themselves in thirty seconds. When precomputing client context, the tool that needs the least authority to produce usable evidence usually wins, even when a more capable tool exists.

**Privacy/authority boundary.** A HAR file is a credential-bearing secret. It contains live session cookies, bearer tokens, API keys in headers, and full response bodies including whatever customer records were on screen. Requesting one from a client without saying this clearly is a real failure of care, and storing one unscrubbed is worse. Any adoption must scrub auth headers and bodies at ingest, before the file touches durable storage, and the client should be told plainly what they are handing over. Second limitation, non-obvious: a single session's HAR reveals only the endpoints that session happened to touch, so absence of an integration in the capture is not evidence of its absence in the client's stack.

---

## Segment honesty: where this survey is thin

**introspection — thin, and thin for a structural reason.** The single best tool in the segment (APIClarity, Apache-2.0, shadow/zombie API detection from reconstructed specs) was archived on 29 May 2026 and is now unmaintained CVE surface in a security-adjacent tool. Of the remainder, one is a 3-star pre-release project, and the credible SaaS-discovery routes are a 29-star Google Sheets add-on requiring client super-admin, a PowerShell gist with no licence or maintainer, and composable infrastructure (osquery, Zeek) that requires fleet-agent or network-tap deployment. Search results were explicit that no turnkey open-source shadow-SaaS discovery product exists — the category is commercial (Nudge, Zluri, Torii, Reco, Stitchflow), and the OSS story is "compose Zeek plus ELK yourself." Nine of the twelve introspection rows are search-only. Treat this segment's denominator as weak evidence.

**active-learning — adequate library coverage, but a domain-fit gap that no library closes.** The two general libraries (modAL, scikit-activeml) were fetched and verified; the six Bayesian experimental design entries are search-only and, more importantly, all come from chemistry, physics-instrumentation and industrial-process-optimization backgrounds. Their fit to question-selection over a client model is by analogy, not by construction. Nothing found models the cost or intrusiveness of asking a human a question — the actual problem. This segment supplies a frame and a loop, not a solution.

**process-mining — good tools, hostile licensing, and an input problem.** Only three of six rows fetched. The reference implementation is AGPL-3.0 with a commercial upsell; the platform alternative (ApromoreCore) is archived, self-declared deprecated, and reserves conformance checking, dashboards and root-cause analysis for the paid Enterprise Edition; the permissive escape hatch (bupaR) has a **licence I could not confirm from the LICENSE body** — it is a two-line R stub naming only year and copyright holder, so MIT is inferred from convention and must be read from DESCRIPTION before anyone quotes it. Underneath all of that sits the harder problem: process mining needs a case/activity/timestamp event log, and most SMB clients do not have one.

**task-mining — the strongest segment.** Five of seven rows fetched, spanning the full invasiveness range from window titles (ActivityWatch, MPL-2.0, 18.7k stars) to full screen and accessibility capture (OpenAdapt, OpenCUA, both MIT). Note the licence landmine caught here: `RPA-US/screenrpa`, the closest academic match to screen-based task mining, is **CC BY-NC 4.0** — non-commercial, therefore unusable for Action Model work despite reading as open source at a glance.

**enrichment — decent, with one recurring structural caveat.** Three of seven fetched. The pattern across every OSS project in this segment is self-host-the-shell, rent-the-data: fire-enrich needs Firecrawl and OpenAI keys, web-check needs nine optional third-party keys for full coverage, OpenOutreach buys from a licensed data provider. The permissive licences are real but they cover orchestration, not capability. The exception is `specfy/stack-analyser` (MIT, 425 stars, semver'd detection rules), which genuinely runs standalone — but only against a client codebase, which most clients do not have.

**org-graph — broad but duplicative.** Three of eight fetched. Apparent breadth is partly illusion: `aimaster-dev/knowledge-graph-construction` appears to be a fork or mirror of `robert-mcdermott/ai-knowledge-graph`, and several entries are individual portfolio-scale projects wrapping the same extract-triplets-with-an-LLM pattern. The two serious options are Graphiti (Apache-2.0, active, open-core) and GraphRAG — and **GraphRAG is in maintenance mode by its maintainers' own declaration**: no new PRs, no new features, bug fixes and CVE updates only, with 33 open PRs against 3 open issues. Its 35.7k stars are a claim about the past, not about whether it is safe to build on. DeepKE (MIT, 4.5k stars, updates through July 2026) is the only source of trained extraction models rather than LLM prompting, but carries a layered-licence caveat: the toolkit is MIT while the models it pulls inherit their base-model terms.

---

## Cross-cutting observations

**The licence badge failed four times in fifty rows, and each failure would have cost something.** pm4py's AGPL-3.0 with a commercial upsell; screenrpa's CC BY-NC non-commercial restriction; fire-enrich's MIT over two paid API dependencies; DeepKE's MIT toolkit over base-model-licensed weights. Add two archived-but-still-listed projects (APIClarity, ApromoreCore, both archived within the last year, both still surfacing in search results as live options) and a deliberately unstated one (bupaR, whose LICENSE file names no licence at all). The rule that caught these was reading the LICENSE body and the archive banner rather than the badge — the same rule that caught Composio on 27 Aug.

**Star counts inverted usefulness at both ends.** web-check has 34.6k stars and tells you nothing about how a client works internally. traffic2openapi has 3 stars and answers a question no other cheap tool answers. GraphRAG has 35.7k stars and is feature-frozen. Where stars did track quality — ActivityWatch, Graphiti — the corroborating evidence was commit cadence and third-party contribution, not the star number.

**The strongest architectural finding is the invasiveness ladder.** Ordered by what the client must grant: public data only (fire-enrich, web-check — nothing) → self-generated artifact (traffic2openapi — a HAR export) → declared dependencies (stack-analyser — repo access) → connected-app inventory (DoiT AdminPulse — super-admin) → attention telemetry (ActivityWatch — a local agent) → full screen capture (OpenAdapt, OpenCUA — everything visible). Each rung answers different questions at a step-change in trust cost. A precompute-before-ask system should climb only as far as the specific unknown requires, and should be able to say which rung produced each fact — because the honest answer to "how do you know that about us" differs enormously between rung one and rung six.
