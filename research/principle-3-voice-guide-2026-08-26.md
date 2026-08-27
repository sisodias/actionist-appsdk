# P3 research — conversational/voice guide agent — 26 Aug 2026

Agent: luna-voice. Confidence 89%. Verdict: **chat-first with structured spec state,
voice as a WebRTC layer on top; voice narrates deltas, screen owns approvals.**

## Stack matrix (published capability + cost signals)

| Stack | Notes | Cost signal |
|---|---|---|
| OpenAI Realtime | WebRTC for browser, function/MCP tools, VAD interruption; WebRTC auto-truncates unplayed audio | audio $32/$64 per 1M tokens (mini $10/$20); per-minute cost must be benchmarked, not quoted |
| LiveKit Agents/Cloud | WebRTC rooms, sync/background tools, frontend RPC, agent handoff | $0.01/active-agent-minute hosting (billed per second); STT/LLM/TTS separate |
| Pipecat | OSS Python, transports incl. LiveKit/Daily/SmallWebRTC; max provider flexibility | OSS; cloud usage-priced |
| Vapi | Fastest managed embed; client-side tools can drive browser UI | $0.05/min platform + passthrough |
| Retell | Polished managed voice | $0.055/min infra; total $0.07-0.31/min |
| Deepgram/ElevenLabs/Cartesia | Primitives under LiveKit/Pipecat | STT ~$0.005-0.009/min; TTS ~$0.03-0.05/min-ish |
| Anthropic | No API audio in/out (consumer voice mode only) | pair Claude text + third-party STT/TTS |

10-min session arithmetic: LiveKit hosting ~$0.10; Vapi platform ~$0.50; Retell ~$0.55 —
before model/voice costs. Cheap enough that stack choice is about control, not cost.

## Precedents — the shape that survived

- **Wix retired ADI's rigid questionnaire (Nov 2024)** → current builder: free-form
  description + revise-through-chat + direct pixel editing. Rigid interview flows die.
- **Durable**: 3 inputs → site in ~30s. Opposite pole: speed-first, no interview.
- → Design: **fast default + opt-in "interview me" depth mode**, never a forced long
  interview.

## Elicitation research (the P3 differentiation case)

- LLMs are currently *bad* at eliciting implicit requirements: ReqElicitGym — 7 models,
  101 scenarios, best IRE 0.32, all under half of implicit requirements; style
  requirements worst. https://arxiv.org/html/2602.18306
- But guided questioning works: GPT-4o follow-up questions ≥ human-question quality,
  improving further when primed with known interviewer mistakes.
  https://arxiv.org/html/2507.02858
- Voice elicitation early study (n=5): OpenAI-based voice agent covered 77.5% of
  requirements vs 35% (Gemma); usability 4.0 vs 3.3. Small-n, directional.
- → Pattern: free conversation over a **structured spec schema**; targeted questions
  only for missing fields (interaction/content/style); periodic confirm-summarize with
  assumptions marked; fatigue-aware stopping; **silence ≠ approval**.
- Matches our GitHub recon: no mature OSS elicitation agent exists — quality here is
  differentiable moat, consistent with ReqElicitGym showing the ceiling is low.

## Voice+screen co-presentation (research-backed UX law)

Voice increases turn-taking/engagement but screen reads at the user's pace
(https://dl.acm.org/doi/10.1145/3484221). → **Voice narrates only the delta** ("changed
the hero, added booking flow"); screen shows full artifact + diff + transcript + one
explicit Approve/Revise control; pause audio when preview opens; approvals recorded from
visual review, never auditory memory. Durable structured approval state, not chat prose.

## Recommended rollout for Actionist builder

1. **Chat-first (phase 1):** one canonical BuildSession/spec JSON; guide runs free chat +
   deterministic tools (save_requirement, generate_preview, run_validation, create_diff);
   three approval gates: requirements → design round → publish. Mirror events to
   Telegram/Slack (Actionist Channels already exist).
2. **Voice upgrade (phase 2):** WebRTC, not raw WebSocket. Shortest path = OpenAI
   Realtime + ephemeral browser credential. Extensibility path = **LiveKit Cloud Agents**
   — fits tool-heavy builder UI (RPC/state events), Shaan already knows LiveKit (sent
   livekit/livekit to Cena Mar 2026), $0.01/min additive. Start managed; self-host only
   when economics demand.
3. Before defaulting: 20-session benchmark — time-to-first-audio, interruption recovery,
   tool completion, spec coverage, approval corrections.

GAPS: no public controlled evidence that voice beats chat for spec quality (our
benchmark would be novel); Realtime per-session cost needs measurement.
