#!/usr/bin/env python3
"""Build an attributable Luna-token snapshot from Phase 9 rollout receipts."""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parent
SESSION_DAY = Path.home() / ".codex/sessions/2026/08/27"
OUT = ROOT / "luna-token-ledger.jsonl"
SUMMARY = ROOT / "luna-token-summary.json"
TARGET = 100_000_000
DISPATCHES = (
    ROOT / "wave-1-dispatch-receipt.json",
    ROOT / "wave-2-dispatch-receipt.json",
    ROOT / "wave-3-dispatch-receipt.json",
    ROOT / "wave-4-dispatch-receipt.json",
    ROOT / "wave-5-dispatch-receipt.json",
    ROOT / "wave-6-dispatch-receipt.json",
    ROOT / "wave-7-dispatch-receipt.json",
    ROOT / "wave-8-dispatch-receipt.json",
    ROOT / "wave-9-dispatch-receipt.json",
    ROOT / "wave-10-dispatch-receipt.json",
    ROOT / "wave-11-dispatch-receipt.json",
    ROOT / "wave-12-dispatch-receipt.json",
)


def load_dispatches() -> list[dict]:
    agents = []
    for wave, path in enumerate(DISPATCHES, 1):
        data = json.loads(path.read_text(encoding="utf-8"))
        for item in data["agent_receipts"]:
            agents.append({"wave": wave, **item})
    return agents


def rollout_for(agent_id: str) -> Path:
    matches = list(SESSION_DAY.glob(f"rollout-*-{agent_id}.jsonl"))
    assert len(matches) == 1, (agent_id, matches)
    return matches[0]


def inspect_rollout(agent: dict) -> dict:
    path = rollout_for(agent["agent_id"])
    role = None
    model = None
    latest_usage = None
    latest_timestamp = None
    with path.open(encoding="utf-8") as handle:
        for line in handle:
            event = json.loads(line)
            payload = event.get("payload") or {}
            if event.get("type") == "session_meta":
                role = (((payload.get("source") or {}).get("subagent") or {}).get("thread_spawn") or {}).get("agent_role") or role
            if event.get("type") == "turn_context":
                model = payload.get("model") or model
            if event.get("type") == "event_msg" and payload.get("type") == "token_count":
                usage = ((payload.get("info") or {}).get("total_token_usage"))
                if usage:
                    latest_usage = usage
                    latest_timestamp = event.get("timestamp")
    assert role == "luna_worker", (agent["agent_id"], role)
    assert model == "gpt-5.6-luna", (agent["agent_id"], model)
    assert latest_usage is not None, agent["agent_id"]
    return {
        "schema_version": 1,
        "agent_id": agent["agent_id"],
        "nickname": agent.get("nickname"),
        "lane": agent["lane"],
        "wave": agent["wave"],
        "agent_role": role,
        "model": model,
        "rollout_path": str(path),
        "observed_at": latest_timestamp,
        "input_tokens": latest_usage.get("input_tokens", 0),
        "cached_input_tokens": latest_usage.get("cached_input_tokens", 0),
        "output_tokens": latest_usage.get("output_tokens", 0),
        "reasoning_output_tokens": latest_usage.get("reasoning_output_tokens", 0),
        "total_tokens": latest_usage.get("total_tokens", 0),
        "status_at_dispatch_receipt": agent.get("status"),
        "attribution": "Phase 9 Actionist research lane",
    }


def main() -> None:
    rows = [inspect_rollout(agent) for agent in load_dispatches()]
    assert len(rows) == sum(len(json.loads(path.read_text(encoding="utf-8"))["agent_receipts"]) for path in DISPATCHES)
    assert len({row["agent_id"] for row in rows}) == len(rows)
    OUT.write_text("".join(json.dumps(row, sort_keys=True) + "\n" for row in rows), encoding="utf-8")
    total = sum(row["total_tokens"] for row in rows)
    summary = {
        "schema_version": 1,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "scope": "Phase 9 native Luna worker rollouts only",
        "agent_count": len(rows),
        "waves": len(DISPATCHES),
        "attributable_total_tokens": total,
        "target_tokens": TARGET,
        "progress_percent": total / TARGET * 100,
        "remaining_tokens": max(TARGET - total, 0),
        "all_agent_roles_verified": all(row["agent_role"] == "luna_worker" for row in rows),
        "all_models_verified": all(row["model"] == "gpt-5.6-luna" for row in rows),
        "ledger": OUT.name,
        "boundary": "This ledger excludes coordinator, Opus, Herdr and pre-Phase-9 usage unless separately attributed.",
    }
    SUMMARY.write_text(json.dumps(summary, indent=2) + "\n", encoding="utf-8")
    print(
        f"LUNA_TOKEN_LEDGER_PASS agents={len(rows)} total={total} "
        f"progress={summary['progress_percent']:.4f}% remaining={summary['remaining_tokens']}"
    )


if __name__ == "__main__":
    main()
