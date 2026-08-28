#!/usr/bin/env python3
"""Build top-companies.jsonl for P06 (Actionist design-taste preference learner).

Evidence discipline
-------------------
`observed`   fact read on a vendor page or vendor doc fetched 2026-08-27.
`inferred`   fact from a credible secondary source (engineering blog, press,
             vendor marketing describing a flow rather than showing it).
`hypothesis` surface is known to exist but its mechanics were not verified.

Consumer style quizzes are overwhelmingly client-side JS behind bot protection.
Question counts and adaptivity for those are NOT verifiable by fetch and are
marked `hypothesis` or left "unknown" rather than guessed.
"""
import json

O, I, H = "observed", "inferred", "hypothesis"
D = "2026-08-27"
ROWS = []


def add(i, name, url, cat, ev, source, claim, lim, disp):
    ROWS.append({"id": i, "kind": "company", "name": name, "url": url,
                 "category": cat, "evidence_class": ev, "source": source,
                 "observed": D, "claim": claim, "limitations": lim,
                 "disposition": disp})


# ---------------------------------------------------------------- media cold-start
add("C001", "Netflix title picker", "https://help.netflix.com/en/node/100639",
    "media-cold-start", O, "Netflix Help Centre 'How Netflix's Recommendations System Works'",
    "Multi-select grid of titles at profile creation; explicitly OPTIONAL — skipping falls back to "
    "a diverse popular set; later engagement 'supersedes' the initial picks, recent outweighing old. "
    "Count unstated; single screen, non-adaptive.",
    "Vendor help page describes behaviour but does not state a title count or how the seed is weighted.",
    "STEAL — the documented supersession rule is the cleanest published answer to preference drift")
add("C002", "Netflix Taste Preferences survey", "https://help.netflix.com/en/node/100639",
    "media-cold-start", O, "Netflix Help Centre",
    "Separate always-available survey under Account > My Profile covering Moods, Genre, Release Date, "
    "Language; user-initiated, no stopping rule.",
    "Mechanics beyond the category list not documented.",
    "study — precedent for a re-entrant preference surface distinct from onboarding")
add("C003", "Spotify onboarding artist picker", "https://community.spotify.com/t5/Android/Where-can-I-find-the-starting-artist-choosing-screen-after/td-p/5181629",
    "media-cold-start", I, "Spotify Community thread + two PM teardowns (Medium)",
    "Multi-select grid, minimum 3 artists, presented before first home screen; described as cyclic "
    "(selection then refinement). No documented outside option.",
    "NOT vendor-documented. The minimum-3 figure comes from community/PM posts, not Spotify docs. "
    "Community thread confirms the screen is not re-accessible later.",
    "study — the non-re-entrant design is a documented user complaint worth avoiding")
add("C004", "Apple Music bubble picker", "https://www.apple.com/apple-music/",
    "media-cold-start", H, "known surface; not verified this session",
    "Genre/artist bubble multi-select at onboarding, tap-to-grow weighting.",
    "NOT VERIFIED. Mechanics, counts and current existence unconfirmed.",
    "drop unless verified")
add("C005", "Pandora thumbs", "https://www.pandora.com/", "media-cold-start", H,
    "known surface; not verified this session",
    "Continuous binary thumb up/down on played tracks feeding station personalisation.",
    "NOT VERIFIED this session.", "reference only")
add("C006", "YouTube Music onboarding", "https://music.youtube.com/", "media-cold-start", H,
    "not verified", "Artist multi-select at first run.", "NOT VERIFIED.", "drop unless verified")
add("C007", "Tidal onboarding", "https://tidal.com/", "media-cold-start", H, "not verified",
    "Artist/genre selection at signup.", "NOT VERIFIED.", "drop unless verified")
add("C008", "Deezer Flow onboarding", "https://www.deezer.com/", "media-cold-start", H,
    "not verified", "Genre selection seeding Flow.", "NOT VERIFIED.", "drop unless verified")
add("C009", "Last.fm scrobble-based taste", "https://www.last.fm/", "media-cold-start", H,
    "not verified", "Purely revealed-preference (listening history), no elicitation step.",
    "NOT VERIFIED.", "contrast — the pure revealed-preference pole")

# ---------------------------------------------------------------- fashion / apparel
add("C010", "Stitch Fix Style Shuffle",
    "https://newsroom.stitchfix.com/blog/10-billion-interactions-and-counting-on-style-shuffle-the-data-powering-your-personalized-shopping-experience/",
    "fashion", O, "Stitch Fix Newsroom",
    "Binary thumbs up/down on garment images, launched Mar 2018, ~10B interactions, ~1M players/month "
    "(~25% of active clients). Ratings update the 'Latent Style' model in REAL TIME; feeds a Style Graph "
    "distilling 10B data points into 10M coordinates. Unbounded — no fixed N, user-terminated. Batched ~10 "
    "items, a few batches/day.",
    "Vendor newsroom (marketing-adjacent). Batch size and cadence come from press coverage, not the product.",
    "STEAL — closest large-scale proof that binary image preference converges to a usable latent vector")
add("C011", "Stitch Fix 'candy vs medicine' item selection",
    "https://qz.com/quartzy/1603872/how-stitch-fixs-style-shuffle-learns-your-style",
    "fashion", I, "Quartz reporting on Stitch Fix",
    "Shown items are deliberately mixed: 'candy' (near-certain thumbs-up, engagement) and 'medicine' "
    "(items the model specifically needs information about). This is explicit exploration/exploitation "
    "balancing inside a consumer UI.",
    "Press characterisation of an internal practice; not vendor-documented. No ratio published.",
    "STEAL — the engagement/information tradeoff is exactly our re-roll-vs-information problem")
add("C012", "Stitch Fix onboarding Style Profile", "https://www.stitchfix.com/", "fashion", H,
    "403 bot-wall on quiz and support pages",
    "Long-form intake covering sizes, price bands, style preferences before first Fix.",
    "COULD NOT VERIFY — 403. Question count unknown.", "study if access obtained")
add("C013", "Thread", "https://www.thread.com/", "fashion", H, "not verified",
    "Style quiz feeding a stylist+algorithm hybrid.", "NOT VERIFIED.", "drop unless verified")
add("C014", "Wantable style quiz", "https://www.wantable.com/", "fashion", H, "not verified",
    "Edit-based style quiz before curated box.", "NOT VERIFIED.", "drop unless verified")
add("C015", "Nuuly", "https://www.nuuly.com/", "fashion", H, "not verified",
    "Rental subscription with style preferences.", "NOT VERIFIED.", "drop unless verified")
add("C016", "DailyLook", "https://www.dailylook.com/", "fashion", H, "not verified",
    "Style quiz feeding stylist box.", "NOT VERIFIED.", "drop unless verified")
add("C017", "Armoire", "https://www.armoire.style/", "fashion", H, "not verified",
    "Rental with algorithmic closet personalisation.", "NOT VERIFIED.", "drop unless verified")
add("C018", "Rent the Runway", "https://www.renttherunway.com/", "fashion", H, "not verified",
    "Size/fit and style preference capture.", "NOT VERIFIED.", "drop unless verified")
add("C019", "Nordstrom Trunk Club", "https://www.nordstrom.com/", "fashion", H, "not verified",
    "Stylist intake questionnaire.", "NOT VERIFIED; service repositioned since 2020.", "drop")
add("C020", "Frank And Oak style plan", "https://www.frankandoak.com/", "fashion", H,
    "not verified", "Style quiz feeding subscription box.", "NOT VERIFIED.", "drop unless verified")

# ---------------------------------------------------------------- interest pickers
add("C021", "Pinterest interest picker",
    "https://medium.com/pinterest-engineering/personalizing-pinterests-new-user-experience-abroad-60f8f55177ac",
    "interest-picker", I, "Pinterest Engineering blog + Appcues teardown",
    "Mandatory multi-select of >=5 topics from an image+keyword grid; single screen, non-adaptive; "
    "framed as 'Follow 5 topics' with an explicit promise of a custom home feed. Localising the topic "
    "set per country/gender produced a large activation lift and 5-10% higher return rate.",
    "Engineering blog, not a product doc. The >=5 figure is from secondary teardowns.",
    "STEAL — the localisation result is the strongest evidence that STIMULUS CHOICE, not model, "
    "drives elicitation quality")
add("C022", "Pinterest user-interest clusters (UIC)",
    "https://medium.com/pinterest-engineering/pinner-progression-better-use-case-representation-driving-weekly-active-user-growth-at-pinterest-bd2131ab238a",
    "interest-picker", I, "Pinterest Engineering 2026",
    "Pinterest REPLACED onboarding followed-interests as a retrieval condition with user interest "
    "clusters derived from actual engagement, because the onboarding signal 'skewed heavily toward "
    "dominant interests' and was 'static, not evolving with behavior'.",
    "Engineering blog. Timing and scope of the replacement not fully specified.",
    "CRITICAL COUNTER-EVIDENCE — a major platform deprecated its stated-preference onboarding signal "
    "in favour of revealed preference")
add("C023", "Reddit onboarding topic picker", "https://www.reddit.com/", "interest-picker", H,
    "not verified", "Topic multi-select seeding the home feed.", "NOT VERIFIED.", "drop unless verified")
add("C024", "TikTok interest select", "https://www.tiktok.com/", "interest-picker", H,
    "not verified", "Category multi-select at signup; famously superseded fast by watch behaviour.",
    "NOT VERIFIED.", "study if verified — another stated-vs-revealed case")
add("C025", "Substack onboarding", "https://substack.com/", "interest-picker", H, "not verified",
    "Topic selection seeding recommendations.", "NOT VERIFIED.", "drop unless verified")
add("C026", "Medium topic follow", "https://medium.com/", "interest-picker", H, "not verified",
    "Topic multi-select at signup.", "NOT VERIFIED.", "drop unless verified")
add("C027", "Flipboard topic picker", "https://flipboard.com/", "interest-picker", H,
    "not verified", "Topic selection building a magazine feed.", "NOT VERIFIED.", "drop unless verified")
add("C028", "Quora topic selection", "https://www.quora.com/", "interest-picker", H,
    "not verified", "Topic multi-select at signup.", "NOT VERIFIED.", "drop unless verified")

# ---------------------------------------------------------------- interior / furniture
add("C029", "Havenly interior design style quiz",
    "https://havenly.com/interior-design-style-quiz", "interiors", O,
    "Havenly quiz page fetched; corroborated by Apartment Therapy review",
    "Grid of ~48 room inspiration images, multi-select with NO cap ('Select the rooms that make you "
    "swoon' / 'Pick as many as you want'), and an explicit outside option: 'I don't like these. Skip.' "
    "Output is a style profile with a primary style plus sub-styles, handed to a matched designer.",
    "Total screen count not determinable from the page. The '10 questions' figure is a third-party "
    "review, and Havenly's own copy says ~10 minutes — these are not the same claim.",
    "STEAL — the explicit 'I don't like these' outside option in a live consumer flow is direct "
    "precedent for our re-roll")
add("C030", "Wayfair design style quiz",
    "https://www.wayfair.com/sca/ideas-and-advice/styles/design-style-quiz-whats-your-design-style-T21651",
    "interiors", I, "Wayfair Ideas & Advice page via search",
    "Choose favourite photo from FOUR options per question, tally letters to a named style "
    "(boho, modern, ...). Fixed sequence, self-scored, no adaptivity, no outside option. Results "
    "funnel to shoppable category links.",
    "Retrieved via search summary rather than direct fetch. Question count not stated.",
    "STUDY — a 4-up image forced choice at consumer scale, but non-adaptive and self-scored")
add("C031", "Jordan's Furniture Find Your Style", "https://www.jordans.com/shop/style/style-quiz",
    "interiors", I, "vendor page via search",
    "5-step flow, select up to 2 images per step, validation blocks progress without a selection "
    "(i.e. NO outside option). Output is a prose style description.",
    "Via search summary, not direct fetch.",
    "study — the forced-selection validation is the anti-pattern our outside option avoids")
add("C032", "Modsy", "https://www.modsy.com/", "interiors", H,
    "known to have shut down (2022)", "Style quiz feeding 3D room renders.",
    "SERVICE DISCONTINUED — historical only.", "drop — do not present as a live competitor")
add("C033", "CORT Furniture style quiz", "https://www.cortfurnitureoutlet.com/style-quiz",
    "interiors", I, "via search", "Quiz results lead to curated product lists per named style.",
    "Via search summary.", "reference only")
add("C034", "Furnitureland South style quiz", "https://www.furniturelandsouth.com/style-quiz/",
    "interiors", I, "via search", "Short instinct-based style quiz.", "Via search summary.",
    "reference only")
add("C035", "Waypoint Living Spaces cabinet quiz",
    "https://www.waypointlivingspaces.com/design-inspirations/style-quiz", "interiors", I,
    "via search", "Hybrid text/image quiz over colour palettes, chair preference, patterns; "
    "emails results as lead capture.", "Via search summary.", "reference only")
add("C036", "IKEA room style tools", "https://www.ikea.com/", "interiors", H, "not verified",
    "Room planner and style inspiration surfaces.", "NOT VERIFIED.", "drop unless verified")
add("C037", "Article", "https://www.article.com/", "interiors", O,
    "Baymard furniture UX study coverage; no public style quiz surfaced",
    "NO public image-based style quiz found; personalisation is via catalogue browse and filters.",
    "Absence of evidence from this sweep, not proof of absence.",
    "NEGATIVE RESULT — a major furniture retailer with no style quiz")
add("C038", "Joybird", "https://joybird.com/", "interiors", O,
    "Furniture Fair / Apartment Therapy coverage; no public style quiz surfaced",
    "NO public image-based style quiz found; personalisation is via heavy per-product customisation "
    "(fabrics, cushion feel, legs) plus a free design service.",
    "Absence from this sweep only.",
    "NEGATIVE RESULT — chooses configuration over elicitation")
add("C039", "Houzz", "https://www.houzz.com/", "interiors", H, "not verified",
    "Photo save/ideabook behaviour as implicit style signal.", "NOT VERIFIED.", "study if verified")
add("C040", "Room & Board", "https://www.roomandboard.com/", "interiors", H, "not verified",
    "Design services intake.", "NOT VERIFIED.", "drop unless verified")

# ---------------------------------------------------------------- eyewear / physical goods
add("C041", "Warby Parker frames quiz", "https://www.warbyparker.com/quiz/frames",
    "physical-goods", I, "vendor page + Warby Parker promo video description",
    "Short quiz ('a few quick questions'); a company promo described 5 questions. Output is frame "
    "recommendations by colour, shape, style, feeding Home Try-On (5 frames free).",
    "403 on direct quiz fetch. The '5 questions' figure is from marketing video copy, not the live "
    "quiz — DO NOT quote it as the current count.",
    "study — short-quiz-to-physical-trial is the commercial pattern, count unverified")
add("C042", "Glasses.com virtual try-on", "https://www.glasses.com/", "physical-goods", H,
    "not verified", "Face-scan plus style preference capture.", "NOT VERIFIED.", "drop unless verified")
add("C043", "Sherwin-Williams ColorSnap", "https://www.sherwin-williams.com/", "physical-goods", H,
    "not verified", "Colour discovery and palette tools.", "NOT VERIFIED.", "drop unless verified")
add("C044", "Behr colour tools", "https://www.behr.com/", "physical-goods", H,
    "403 bot-wall", "Colour selection and palette tools.", "COULD NOT VERIFY — 403.", "drop")

# ---------------------------------------------------------------- consumables / beauty
add("C045", "Prose hair consultation", "https://prose.com/", "beauty", I,
    "Forbes 2019 + Thingtesting coverage",
    "Consultation covering 85+ data points (hair type, porosity, wash frequency, zip code for "
    "humidity/water hardness/pollution, diet, stress). Fixed non-adaptive intake; output is a "
    "bespoke formula.",
    "Press coverage, not vendor docs. Formula-count claims (50 billion / 79 trillion) are marketing "
    "and vary by source — do not quote.",
    "CONTRAST — the maximalist pole: 85+ questions. Shows what we are choosing NOT to do")
add("C046", "Function of Beauty quiz", "https://functionofbeauty.com/", "beauty", I,
    "Thingtesting comparative coverage; vendor page returned JS shell only",
    "Materially SHORTER quiz than Prose — skips age, location, hair length, shedding, wash frequency; "
    "focuses on hair type and goals plus fragrance/bottle colour. Reportedly drives 80% of business.",
    "Quiz is JS-rendered and invisible to fetch; question count unverified. The 80% figure is press.",
    "study — the short-quiz counterpoint to Prose in the same category")
add("C047", "Curology", "https://curology.com/", "beauty", H, "not verified",
    "Skin intake plus photos feeding a prescriber.", "NOT VERIFIED; no question count found.",
    "drop unless verified")
add("C048", "Care/of", "https://takecareof.com/", "beauty", H, "not verified",
    "Supplement quiz.", "NOT VERIFIED.", "drop unless verified")
add("C049", "Atlas Coffee Club quiz", "https://atlascoffeeclub.com/", "beauty", H,
    "404 on quiz URL attempted", "Coffee taste quiz feeding subscription.",
    "COULD NOT VERIFY — 404.", "drop")
add("C050", "Firstleaf wine", "https://www.firstleaf.com/", "beauty", H, "not verified",
    "Taste quiz plus per-bottle rating feedback loop — a genuine ongoing preference learner.",
    "NOT VERIFIED.", "study if verified — the rating feedback loop is architecturally close to ours")
add("C051", "Winc wine quiz", "https://www.winc.com/", "beauty", H, "not verified",
    "Palate profile quiz.", "NOT VERIFIED.", "drop unless verified")

# ---------------------------------------------------------------- dating
add("C052", "Hinge Most Compatible",
    "https://techcrunch.com/2018/07/11/hinge-employs-new-algorithm-to-find-your-most-compatible-match-for-you/",
    "dating", I, "TechCrunch 2018 + Bustle interview with Hinge",
    "NO explicit elicitation step. Preference rankings are INFERRED by ML from like/pass behaviour over "
    "a rolling 24h window, then Gale-Shapley produces a stable matching. Refreshes every 24h.",
    "Press coverage of an internal algorithm. The '8x phone-number exchange' figure is a vendor claim "
    "reported in press, not independently verified.",
    "STUDY — the purest revealed-preference architecture in the denominator; the 24h rolling window is "
    "a concrete drift-handling design")
add("C053", "OkCupid question weighting", "https://www.okcupid.com/", "dating", H,
    "not verified", "User answers questions AND states importance weight AND the acceptable answer "
    "from a partner — a rare three-part elicitation.", "NOT VERIFIED this session.",
    "study if verified — explicit importance weighting is directly relevant to per-knob weighting")
add("C054", "Tinder swipe", "https://tinder.com/", "dating", H, "not verified",
    "Binary swipe as continuous implicit preference signal.", "NOT VERIFIED.", "reference only")
add("C055", "Coffee Meets Bagel", "https://coffeemeetsbagel.com/", "dating", H, "not verified",
    "Curated daily matches from stated plus revealed preference.", "NOT VERIFIED.", "drop unless verified")

# ---------------------------------------------------------------- design / brand tooling
add("C056", "Midjourney Style Creator",
    "https://docs.midjourney.com/hc/en-us/articles/41308374558221-Style-Creator", "design-tooling", O,
    "Midjourney official docs (retrieved via search index of docs page; direct fetch 403)",
    "SHIPPED ADAPTIVE VISUAL PREFERENCE ELICITOR. User picks from a grid of style images; the tool uses "
    "'the styles you pick (and the ones you don't!)' to build a --sref code. Each regenerated preview set "
    "is one refinement round. Documented convergence: early rounds vary a lot, 'Most styles stabilize "
    "after 5-10 rounds', rounds 10-15 add detail, 'Past round 15, changes are small and subtle'. Skipping "
    "is available but explicitly NON-informative: 'skipping does not affect your style development'. "
    "Output is a reusable style code. User-terminated via End Session.",
    "Direct docs fetch returned 403; content came from the search index of the official docs page and is "
    "quoted from that. Grid size per round not stated. No published accuracy or user study.",
    "STEAL — the single closest shipped analogue to P06. Note we should DIVERGE on one point: they make "
    "skipping non-informative; we should treat the outside option as weak negative evidence")
add("C057", "Midjourney Style Tuner (/tune, legacy)",
    "https://midlibrary.io/midguide/midjourney-style-tuner-explained", "design-tooling", I,
    "Midlibrary guide",
    "Two modes: PAIRWISE (two styles at a time, click the preferred one, leave the middle box selected "
    "to SKIP the pair) or grid 'pick favourites'. 32-pair generation typical. Even a single pick "
    "generates a style; fewer picks produce a bolder style.",
    "Third-party guide, not vendor docs. Legacy Discord feature superseded by Style Creator.",
    "STEAL — an explicit three-way pairwise-with-neutral-middle control is exactly the outside-option "
    "affordance we need, and it shipped")
add("C058", "Figma First Draft style controls",
    "https://help.figma.com/hc/en-us/articles/23955143044247-Use-First-Draft-with-Figma-AI",
    "design-tooling", O, "Figma Help Centre",
    "NOT elicitation — DIRECT MANIPULATION. Theme controls expose light/dark toggle, preset colours or "
    "colour wheel, a border-radius SLIDER, a spacing SLIDER, and title/body/label font selection. No "
    "comparisons, no learning, no stopping rule.",
    "Vendor help page. Custom design-system support not documented in this article.",
    "CONTRAST — the closest design-tool competitor solves the same problem with sliders instead of "
    "preference learning. Our differentiator is that a client does not know their radius in pixels")
add("C059", "Looka logo maker style quiz", "https://looka.com/logo-maker/", "design-tooling", I,
    "third-party walkthroughs (Shotkit, Medium, lumance.ai); 403 on direct fetch",
    "Fixed sequence: business name + industry, then select logo STYLES from visual examples, then up to "
    "THREE colours, then icon concepts. Non-adaptive: 'the AI works within a structured decision tree'. "
    "Constrains the solution space BEFORE generation. Under five minutes.",
    "403 on vendor fetch; all mechanics from third-party reviews. No question count published.",
    "STUDY — closest commercial 'visual picks constrain a generator' flow, but non-adaptive and "
    "explicitly criticised for having no box for unusual blends")
add("C060", "Canva Brand Kit + on-brand generation",
    "https://www.canva.com/help/create-on-brand-designs/", "design-tooling", O,
    "Canva Help Centre",
    "NOT elicitation. A stored brand layer (logos, colours, fonts, templates) is APPLIED to designs; "
    "Canva AI can extract brand context from a public website URL. Brand Controls can restrict a design "
    "to only Brand Kit colours and fonts.",
    "Vendor help pages. No preference-learning component.",
    "STEAL the CONSTRAINT model — 'Brand Controls' restricting a design to only kit values is exactly "
    "our closed-world token guarantee, shipped")
add("C061", "Base44 workspace design systems",
    "https://docs.base44.com/Building-your-app/Design-system", "design-tooling", I,
    "prior token-pack research (verified 2026-08-27 in that lane)",
    "A default design system is preselected before a new app's first prompt; users can choose another "
    "via chat. Stores brand basics, colours, fonts, logo, radius, shadows, spacing, components.",
    "Carried from the token-pack-science report rather than re-fetched this session.",
    "STUDY — closest AI-builder precedent for pre-build design-system selection, but selection not "
    "elicitation")
add("C062", "Wix ADI style step", "https://www.wix.com/", "design-tooling", O,
    "prior lane verification: retired 10 Nov 2024",
    "HISTORICAL. ADI's fixed style-question flow was RETIRED 10 Nov 2024 and is unavailable for new "
    "sites; the current Wix builder is prompt-based ('Describe your vision').",
    "Verified as discontinued by the commercial worker before it was blocked.",
    "NEGATIVE RESULT — must not be cited as a live competitor; a style-quiz onboarding was retired in "
    "favour of prompting")
add("C063", "v0", "https://v0.dev/", "design-tooling", I, "prior token-pack research",
    "React/Tailwind/shadcn generation with reusable style presets and design-system instructions; "
    "no closed pre-build token-pack gallery confirmed.",
    "NOT VERIFIED as having a pre-build picker; absence from reviewed sources only.",
    "contrast")
add("C064", "Lovable", "https://lovable.dev/", "design-tooling", I, "prior token-pack research",
    "Screenshot/Figma import and visual edits documented; no pre-build finite preset gallery confirmed.",
    "NOT VERIFIED either way.", "contrast")
add("C065", "Bolt", "https://bolt.new/", "design-tooling", I, "prior token-pack research",
    "Prompt generation, imports, deployment; no finite pre-build theme picker confirmed.",
    "NOT VERIFIED either way.", "contrast")
add("C066", "Replit Agent / Design Mode", "https://replit.com/products/design", "design-tooling", I,
    "prior token-pack research",
    "Visual Editor/Design Mode and Figma import; cited custom-theme docs concern the editor's own "
    "appearance, not generated-app tokens.",
    "NOT VERIFIED as an app-token picker.", "contrast")
add("C067", "Uizard", "https://uizard.io/", "design-tooling", H, "not verified",
    "Theme generation and style extraction from screenshots.", "NOT VERIFIED.", "drop unless verified")
add("C068", "Galileo AI", "https://www.usegalileo.ai/", "design-tooling", H, "not verified",
    "Prompt-to-UI generation.", "NOT VERIFIED.", "drop unless verified")
add("C069", "Relume", "https://www.relume.io/", "design-tooling", H, "not verified",
    "Sitemap-to-wireframe generation with style application.", "NOT VERIFIED.", "drop unless verified")
add("C070", "Durable", "https://durable.co/", "design-tooling", H, "not verified",
    "AI website builder with rapid theme regeneration.", "NOT VERIFIED.", "drop unless verified")
add("C071", "Hostinger AI builder", "https://www.hostinger.com/", "design-tooling", H,
    "not verified", "Prompt-based site generation with theme options.", "NOT VERIFIED.",
    "drop unless verified")
add("C072", "Tailor Brands", "https://www.tailorbrands.com/", "design-tooling", H, "not verified",
    "Logo/brand quiz with style selection.", "NOT VERIFIED.", "drop unless verified")
add("C073", "Brandmark", "https://brandmark.io/", "design-tooling", H, "not verified",
    "Keyword plus colour/style selection generating logo sets.", "NOT VERIFIED.", "drop unless verified")
add("C074", "Squarespace onboarding", "https://www.squarespace.com/", "design-tooling", H,
    "not verified", "Goal and category selection preceding template recommendation.",
    "NOT VERIFIED.", "drop unless verified")
add("C075", "Framer marketplace", "https://www.framer.com/marketplace/", "design-tooling", I,
    "prior token-pack research", "Curated template browse and customise; template not token pack.",
    "Carried from prior lane.", "reference")
add("C076", "Webflow templates", "https://webflow.com/templates/all", "design-tooling", I,
    "prior token-pack research",
    "Browse/search/preview; 'Preview in Designer' allows trying edits without saving; selecting creates "
    "a new project.", "Carried from prior lane.",
    "STEAL the PREVIEW-BEFORE-COMMIT pattern — reduces commitment anxiety at the pick moment")
add("C077", "Wix Templates", "https://www.wix.com/website/templates", "design-tooling", I,
    "prior token-pack research", "Card to View/Edit to customise; very clear non-technical picker UX.",
    "Carried from prior lane.", "reference")
add("C078", "ThemeForest / Envato", "https://themeforest.net/search/marketplace", "design-tooling", I,
    "prior token-pack research", "Faceted search, sales/rating metadata, separate live preview.",
    "Carried from prior lane.", "reference")
add("C079", "tweakcn", "https://tweakcn.com/editor/theme", "design-tooling", I,
    "prior token-pack research", "Live visual editing of shadcn/Tailwind themes with code export; "
    "direct manipulation, not elicitation.", "Carried from prior lane.", "contrast")

# ---------------------------------------------------------------- formal measurement vendors
add("C080", "Sawtooth MaxDiff",
    "https://sawtoothsoftware.com/help/lighthouse-studio/manual/maxdiff-designing-study.html",
    "measurement-vendor", O, "Sawtooth Lighthouse Studio manual, fetched and quoted verbatim",
    "THE HARDEST SIZING RULE IN THE DENOMINATOR. 'we recommend displaying either four or five items at "
    "a time (per set or question)'; never more than half the study's item count per set; ask enough sets "
    "'such that each item has the opportunity to appear from three to five times per respondent'; formula "
    "'3K/k' where K = total items and k = items per set. Beyond ~5 items per set 'The gains in precision "
    "of the estimates are minimal.' Assumes HB estimation. Sparse MaxDiff relaxes this to population "
    "coverage (each item seen 500-1000 times across the population).",
    "This is a design guideline for ITEM SCALING (rank K items), not for locating a point in a "
    "continuous knob space — the mapping to our problem is by analogy, not identity.",
    "ADOPT-METHOD — 3K/k is the most defensible published question-count formula available, and the "
    "'4-5 per screen' guidance independently corroborates our 4-up recommendation")
add("C081", "Sawtooth ACBC",
    "https://sawtoothsoftware.com/help/lighthouse-studio/manual/sections-and-flow-for-adaptive-cbc.html",
    "measurement-vendor", O, "Sawtooth manual + product page",
    "Genuinely ADAPTIVE three-phase design: BYO configuration, then a screening phase, then choice "
    "tasks. Screening presents 3-5 concepts per page and periodically asks whether a level is a "
    "'Must-Have'; once a cutoff is set, all further concepts satisfy it. Also captures 'Unacceptables'. "
    "Length ~7-15 min, 2-3x a standard CBC. Output is part-worth utilities PLUS explicit "
    "non-compensatory rules.",
    "No none-option confirmed on the pages read. Sawtooth reports respondents find it more engaging, "
    "but academic sources note longer duration raises fatigue and the enjoyment evidence is mixed. "
    "Section value varies by study — in one, BYO was most valuable; in another, least.",
    "STEAL the MUST-HAVE / UNACCEPTABLE mechanism — a hard constraint that permanently prunes the "
    "stimulus space is exactly how brand constraints should enter our elicitation")
add("C082", "Sawtooth CBC", "https://sawtoothsoftware.com/conjoint-analysis/cbc",
    "measurement-vendor", I, "Sawtooth product pages",
    "Choice-based conjoint: typically four concepts per task, orthogonal/balanced design, HB utilities "
    "per respondent. Non-adaptive.",
    "Task count and none-option NOT stated on the pages read — recorded as unknown, not assumed.",
    "reference — the non-adaptive baseline our adaptive design must beat")
add("C083", "Conjointly", "https://conjointly.com/", "measurement-vendor", H,
    "404 on the MaxDiff guide URL attempted",
    "Conjoint and MaxDiff survey platform.", "COULD NOT VERIFY — 404.", "drop unless verified")
add("C084", "Qualtrics Conjoint", "https://www.qualtrics.com/", "measurement-vendor", I,
    "Qualtrics docs via prior worker",
    "Choice-based conjoint capped at <10k responses.",
    "Page specifies NONE of: concepts per task, task count, none-option, adaptivity. Useful mainly as "
    "a negative.", "reference")
add("C085", "1000minds PAPRIKA", "https://www.1000minds.com/", "measurement-vendor", H,
    "404 on both URLs attempted",
    "PAPRIKA method: adaptive pairwise ranking of partial profiles, eliminating implied pairs by "
    "transitivity — algorithmically the closest commercial method to our adaptive design.",
    "COULD NOT VERIFY — 404 on both attempted paths; the method description here is from general "
    "knowledge and MUST be verified before use.",
    "HIGH PRIORITY TO VERIFY — transitivity-based pair elimination is directly applicable")
add("C086", "Displayr", "https://www.displayr.com/", "measurement-vendor", H, "not verified",
    "MaxDiff and conjoint analysis platform.", "NOT VERIFIED.", "drop unless verified")
add("C087", "Q Research Software", "https://www.qresearchsoftware.com/max-diff-experimental-design-q",
    "measurement-vendor", I, "surfaced in MaxDiff search",
    "MaxDiff experimental design tooling.", "Not directly fetched.", "reference")
add("C088", "Alchemer", "https://www.alchemer.com/", "measurement-vendor", H, "not verified",
    "Survey platform with conjoint support.", "NOT VERIFIED.", "drop unless verified")
add("C089", "QuestionPro conjoint", "https://www.questionpro.com/", "measurement-vendor", H,
    "not verified", "Conjoint and MaxDiff modules.", "NOT VERIFIED.", "drop unless verified")
add("C090", "SKIM", "https://skimgroup.com/", "measurement-vendor", H, "not verified",
    "Choice-modelling consultancy.", "NOT VERIFIED.", "drop unless verified")
add("C091", "Kantar", "https://www.kantar.com/", "measurement-vendor", H, "not verified",
    "Market research including conjoint.", "NOT VERIFIED.", "drop unless verified")
add("C092", "Protobrand", "https://protobrand.com/", "measurement-vendor", H, "not verified",
    "Metaphor-elicitation and implicit association research.", "NOT VERIFIED.",
    "study if verified — implicit/projective elicitation is a genuinely different family")

# ---------------------------------------------------------------- experimentation platforms
add("C093", "Optimizely contextual bandits",
    "https://support.optimizely.com/hc/en-us/articles/29328842964109-Contextual-bandits",
    "experimentation", I, "Optimizely support + developer docs via search",
    "PER-USER, not population: 'contextual bandits pick a winning variation for each user based on "
    "their contextual profile'. Model starts at 100% exploration then exploits. NO sticky bucketing — "
    "each visitor gets the best variation for them at that moment. No statistical significance is "
    "calculated. User attributes cannot be added or removed once started.",
    "Retrieved via search summary of vendor docs rather than direct fetch.",
    "STUDY — the no-sticky-bucketing and no-significance properties are the honest cost of per-user "
    "personalisation, and we inherit both")
add("C094", "Statsig Autotune AI", "https://www.statsig.com/perspectives/personalized-testing-at-scale",
    "experimentation", I, "Statsig perspectives page via search",
    "Contextual bandits positioned between A/B tests and full ML; hourly model retraining. Explicit "
    "caveat that bandits 'excel at choosing between known options based on context but won't generate "
    "new content'.",
    "Vendor thought-leadership content.",
    "study — 'choosing between known options' is precisely our closed-pack framing")
add("C095", "Spotify separate personalisation/experimentation stacks",
    "https://engineering.atspotify.com/2026/1/why-we-use-separate-tech-stacks-for-personalization-and-experimentation",
    "experimentation", I, "Spotify Engineering 2026 via search",
    "Argues bandits and experiments are NOT substitutes: with a contextual bandit there is no single "
    "'best button', only a 'best system', so you still need an experiment comparing it to the static "
    "baseline. The bandit is a feature you built, not an experimental method.",
    "Engineering blog.",
    "CRITICAL METHOD NOTE — our preference learner must itself be A/B tested against a static "
    "default pack, or we cannot claim it works")
add("C096", "Dynamic Yield", "https://www.dynamicyield.com/lesson/contextual-bandit-optimization/",
    "experimentation", I, "vendor lesson page via search",
    "Multi-armed and contextual bandit optimisation for commerce personalisation.",
    "Vendor educational content.", "reference")
add("C097", "Kameleoon", "https://www.kameleoon.com/blog/contextual-bandits", "experimentation", I,
    "vendor blog via search", "Contextual bandit personalisation.", "Vendor blog.", "reference")
add("C098", "VWO", "https://vwo.com/", "experimentation", H, "not verified",
    "A/B and personalisation platform.", "NOT VERIFIED.", "drop unless verified")
add("C099", "GrowthBook", "https://www.growthbook.io/", "experimentation", H, "not verified",
    "Open-source feature flagging and experimentation.", "NOT VERIFIED.", "drop unless verified")
add("C100", "Amplitude Experiment", "https://amplitude.com/experiment", "experimentation", H,
    "not verified", "Experimentation with adaptive allocation.", "NOT VERIFIED.", "drop unless verified")
add("C101", "LaunchDarkly", "https://launchdarkly.com/", "experimentation", H, "not verified",
    "Feature management with experimentation.", "NOT VERIFIED.", "drop unless verified")
add("C102", "Monetate", "https://monetate.com/", "experimentation", H, "not verified",
    "Commerce personalisation platform.", "NOT VERIFIED.", "drop unless verified")

# ---------------------------------------------------------------- local prior art
add("C103", "Actionist taste picker demo", "https://actionist-taste.pages.dev/", "local-prior-art", O,
    "fetched 2026-08-27",
    "OUR OWN EXISTING PROTOTYPE. Four rendered interface cards per round ('every card is a bundle of "
    "five knobs — your pick is evidence about each one'), with an explicit outside option labelled "
    "'none of these' plus 'start over'. ~10 picks total; later rounds target the 'least-resolved knob', "
    "holding other inferred preferences steady. Five knobs varied (palette, radius, type, density, "
    "shadow) of a seven-knob schema. Live belief panel headed 'What the system believes about you'. "
    "Statistics are win-rate counting with Laplace smoothing — a zeroth-order Bradley-Terry; the page "
    "itself names choix or a GP preference model as the production intent.",
    "A demo, not a measured system. The '~10 picks' and 'converges in ~10 instead of ~50' claims are "
    "the prototype's own assertions with NO measurement behind them. The 'pick 1 of 10' label conflicts "
    "with four cards being shown — a UI inconsistency worth fixing.",
    "ADOPT the interaction model — it already implements the recommended format, outside option and "
    "least-resolved-knob targeting; replace the estimator and add a real stopping rule")

with open("top-companies.jsonl", "w") as f:
    for r in ROWS:
        f.write(json.dumps(r, ensure_ascii=False) + "\n")

# ------------------------------------------------------- top 10, ranked for Actionist
TOP = [
    ("C056", 1, "The only shipped, documented, adaptive VISUAL preference elicitor found anywhere. It "
     "uses non-picks as evidence, publishes a convergence range (5-10 rounds to stabilise, 10-15 for "
     "detail, past 15 negligible) that independently corroborates both our derivation and the SIGGRAPH "
     "user studies, and outputs a reusable parameter (--sref) rather than an asset. Its one design "
     "choice we should reject is making skips non-informative."),
    ("C080", 2, "The most rigorous published question-count guidance in commercial practice, quoted "
     "verbatim from the vendor manual: 4-5 items per screen, 3K/k questions, diminishing precision past "
     "5 per screen. Independently corroborates our 4-up recommendation from an entirely different "
     "tradition, and gives us a defensible sizing formula to show Cena."),
    ("C010", 3, "The largest-scale proof that binary image preference converges to a usable latent "
     "vector: 10B interactions, ~1M monthly players, real-time model updates into a 10M-coordinate "
     "Style Graph. Establishes that the whole category works at scale, and that unbounded elicitation "
     "is viable when it is entertaining."),
    ("C081", 4, "The must-have / unacceptable mechanism is the missing piece for brand constraints. A "
     "hard cutoff that permanently prunes the stimulus space — 'once identified, all further concepts "
     "satisfy those requirements' — is exactly how a regulated client's non-negotiables should enter "
     "elicitation, rather than being learned as a soft preference."),
    ("C029", 5, "Direct consumer precedent for our outside option: a live flow with an explicit 'I "
     "don't like these. Skip.' next to an uncapped multi-select image grid. Proves the affordance is "
     "commercially acceptable and does not have to read as failure."),
    ("C022", 6, "The most important negative result in the sweep. Pinterest REPLACED onboarding "
     "followed-interests as a retrieval signal because it 'skewed heavily toward dominant interests' "
     "and was 'static, not evolving with behavior'. A major platform deprecated exactly the kind of "
     "stated-preference onboarding we are building. Our answer must be the closed-pack output plus "
     "explicit re-elicitation, not a permanent profile."),
    ("C103", 7, "Our own prototype already implements the recommended format (4-up, outside option, "
     "least-resolved-knob targeting). It is the fastest path to a measured protocol — but its "
     "convergence claims are unmeasured assertions and its estimator is a zeroth-order stand-in. "
     "Treating its numbers as evidence would be the exact error this project was warned about."),
    ("C058", 8, "The closest design-tool competitor, and it solves the problem with SLIDERS not "
     "learning. That is our differentiator stated crisply: a client cannot set a border-radius slider "
     "because they do not know their taste in pixels; they can only recognise it. Figma's approach is "
     "the fallback our approach must beat."),
    ("C095", 9, "Forces methodological honesty: a personalisation system is a feature, not an "
     "experimental method, so the preference learner must itself be A/B tested against a static "
     "default pack before we can claim it works. This becomes a gate in the protocol."),
    ("C060", 10, "Canva's Brand Controls — restricting a design to only Brand Kit colours and fonts — "
     "is our closed-world token guarantee already shipped at consumer scale. Useful proof to Cena that "
     "the constraint model is accepted by non-technical users rather than experienced as a limitation."),
]
byid = {r["id"]: r for r in ROWS}
with open("top-companies.jsonl", "a") as f:
    for cid, rank, rationale in TOP:
        r = dict(byid[cid])
        r["id"] = cid + "-TOP10"
        r["refers_to"] = cid
        r["rank"] = rank
        r["rationale"] = rationale
        f.write(json.dumps(r, ensure_ascii=False) + "\n")

print("companies:", len(ROWS), "+ top10:", len(TOP))
from collections import Counter
print(Counter(r["evidence_class"] for r in ROWS))
