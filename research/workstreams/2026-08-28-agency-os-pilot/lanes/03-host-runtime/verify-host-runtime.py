#!/usr/bin/env python3
"""Fail-closed verification for the product-agnostic Block Host packet."""

import json
import subprocess
import sys
from pathlib import Path

from jsonschema import Draft202012Validator


OWNED = Path(__file__).resolve().parent
REPO = OWNED.parents[4]
REQUIRED = {
    "host-runtime-blueprint.md",
    "resource-budget.schema.json",
    "worked-compositions.json",
    "lane-state.json",
    "verify-host-runtime.py",
}
EXPECTED_PROFILES = {
    "package_in_host",
    "microfrontend",
    "sidecar_service",
    "worker_pool",
    "scheduled_job",
}


def fail(errors, condition, label):
    if not condition:
        errors.append(label)


def close(a, b, tolerance=0.002):
    return abs(a - b) < tolerance


def verify():
    errors = []
    files = {path.name: path for path in OWNED.iterdir() if path.is_file()}
    fail(errors, set(files) == REQUIRED, "owned file set")

    parsed = {}
    for name in REQUIRED - {"host-runtime-blueprint.md", "verify-host-runtime.py"}:
        try:
            parsed[name] = json.loads(files[name].read_text())
        except Exception as exc:  # pragma: no cover - receipt should show the exact failure
            errors.append(f"JSON parse {name}: {exc}")

    schema = parsed.get("resource-budget.schema.json")
    traces_doc = parsed.get("worked-compositions.json")
    state = parsed.get("lane-state.json")
    blueprint = files.get("host-runtime-blueprint.md")

    if schema and traces_doc and state and blueprint:
        try:
            Draft202012Validator.check_schema(schema)
            validator = Draft202012Validator(schema)
            for trace in traces_doc["representative_traces"]:
                validator.validate(trace["budget"])
        except Exception as exc:
            errors.append(f"schema validation: {exc}")

        fail(errors, "Scope correction" in blueprint.read_text(), "scope correction in blueprint")
        fail(errors, traces_doc["status"] == "design_only", "trace status")
        fail(errors, traces_doc["recipe_scope"]["selection_made"] is False, "no recipe selected")
        fail(errors, traces_doc["recipe_scope"]["unique_block_register_count"] == 80, "80 block denominator")
        fail(errors, traces_doc["recipe_scope"]["shared_foundation"]["registered_block_count"] == 31, "31 shared blocks")
        fail(errors, len(traces_doc["recipe_scope"]["overlays"]) == 4, "four overlays")

        traces = traces_doc["representative_traces"]
        fail(errors, len(traces) == 3, "three representative traces")
        fail(errors, all(trace["not_product_composition"] is True for trace in traces), "traces are not product compositions")

        profiles = set()
        for trace in traces:
            trace_id = trace["trace_id"]
            budget = trace["budget"]
            units = budget["runtime_units"]
            pools = budget["connection_pools"]
            queues = budget["queues"]
            calc = budget["calculation"]
            capacity = budget["capacity"]
            headroom = budget["headroom"]
            value_matrix = budget["value_matrix"]
            raw = value_matrix["raw_inputs"]
            factors = value_matrix["normalized_factors"]
            confidence = value_matrix["confidence"]
            profiles.update(module["runtime_profile"] for module in budget["modules"])
            unit_ids = {unit["unit_id"] for unit in units}
            pool_by_id = {pool["pool_id"]: pool for pool in pools}
            fail(errors, len(unit_ids) == len(units), f"{trace_id} unique runtime units")
            fail(errors, all(module["runtime_unit_id"] in unit_ids for module in budget["modules"]), f"{trace_id} module unit refs")
            process_total = sum(unit["replicas"] * unit["processes_per_replica"] for unit in units)
            baseline_ram = sum(unit["replicas"] * unit["processes_per_replica"] * unit["baseline_ram_mb_per_process"] for unit in units)
            peak_ram = sum(unit["replicas"] * unit["processes_per_replica"] * unit["peak_ram_mb_per_process"] for unit in units)
            idle_cpu = sum(unit["replicas"] * unit["processes_per_replica"] * unit["idle_cpu_millicores_per_process"] for unit in units)
            peak_cpu = sum(unit["replicas"] * unit["processes_per_replica"] * unit["peak_cpu_millicores_per_process"] for unit in units)
            persistent = sum(unit["replicas"] * unit["persistent_storage_mb_per_replica"] for unit in units)
            ephemeral = sum(unit["replicas"] * unit["ephemeral_storage_mb_per_replica"] for unit in units)
            connections = sum(pool["max_connections"] for pool in pools)
            queue_peak = sum(queue["max_inflight"] for queue in queues)
            worker_envelope = sum(unit["replicas"] * unit["concurrency"] for unit in units if unit["runtime_profile"] == "worker_pool")
            actual = (calc["process_total"], calc["baseline_ram_mb"], calc["peak_ram_mb"], calc["idle_cpu_millicores"], calc["peak_cpu_millicores"], calc["peak_connections"], calc["persistent_storage_mb"], calc["ephemeral_storage_mb"], calc["storage_required_mb"], calc["queue_inflight_peak"], calc["worker_concurrency_envelope"])
            expected = (process_total, baseline_ram, peak_ram, idle_cpu, peak_cpu, connections, persistent, ephemeral, persistent + ephemeral, queue_peak, worker_envelope)
            fail(errors, actual == expected, f"{trace_id} resource arithmetic")
            for unit in units:
                if unit["processes_per_replica"] == 0:
                    fail(errors, unit["connection_pool_id"] is None, f"{trace_id} static unit pool")
                else:
                    fail(errors, unit["connection_pool_id"] in pool_by_id, f"{trace_id} process unit pool")
            checks = {
                "cpu": peak_cpu + headroom["cpu_millicores"] <= capacity["cpu_millicores"],
                "ram": peak_ram + headroom["ram_mb"] <= capacity["ram_mb"],
                "connections": connections + headroom["connections"] <= capacity["max_connections"],
                "processes": process_total <= capacity["process_limit"],
                "storage": persistent + ephemeral + headroom["storage_mb"] <= capacity["persistent_storage_mb"],
                "queues": queue_peak <= worker_envelope,
            }
            fail(errors, checks == calc["capacity_checks"], f"{trace_id} capacity checks")
            fail(errors, raw["process_total"] == process_total and raw["idle_ram_mb"] == baseline_ram and raw["active_ram_mb"] == peak_ram and raw["peak_connections"] == connections, f"{trace_id} Value Matrix raw links")
            expected_factors = {
                "process_burden": min(5, 5 * process_total / capacity["process_limit"]),
                "idle_memory_burden": min(5, 5 * baseline_ram / capacity["ram_mb"]),
                "active_memory_burden": min(5, 5 * peak_ram / capacity["ram_mb"]),
                "database_burden": min(5, raw["physical_database_count"]),
                "service_burden": min(5, raw["sidecar_process_count"] + raw["managed_dependency_count"] / 2),
                "connection_burden": min(5, 5 * connections / capacity["max_connections"]),
                "migration_ownership_burden": min(5, raw["migration_owner_count"] + raw["dynamic_schema_owner_count"]),
                "worker_burden": min(5, 2 * raw["worker_pool_count"] + 3 * raw["queue_utilization"]),
                "upgrade_burden": min(5, raw["independent_release_units"] + max(0, raw["migration_owner_count"] - 1) + raw["dynamic_schema_owner_count"]),
                "rollback_burden": min(5, raw["independent_release_units"] + raw["irreversible_side_effect_classes"] + raw["known_recovery_gaps"]),
            }
            fail(errors, all(close(factors[key], value) for key, value in expected_factors.items()), f"{trace_id} normalized factors")
            fail(errors, close(confidence["overall"], min(confidence["per_factor"].values()), 0.0001), f"{trace_id} confidence minimum")
            ui = value_matrix["ui_contract"]
            fail(errors, ui["hide_allowed"] is False and ui["display_confidence"] is True and ui["display_refusal_conditions"] is True and ui["machine_decision_source"] == "value_matrix", f"{trace_id} UI disclosure")
            fail(errors, set(ui["display_raw_inputs"]) == set(raw), f"{trace_id} raw disclosure")
            fail(errors, set(ui["display_normalized_factors"]) == set(factors), f"{trace_id} factor disclosure")
            conditions = {condition["code"]: condition for condition in value_matrix["refusal_conditions"]}
            fail(errors, len(conditions) == 11, f"{trace_id} refusal condition count")
            high = any(factors[key] >= 4.5 for key in ("worker_burden", "upgrade_burden", "rollback_burden", "process_burden", "active_memory_burden", "connection_burden"))
            fail(errors, conditions["REFUSE-HIGH-BURDEN-LOW-CONFIDENCE"]["triggered"] == (high and confidence["overall"] < 0.75), f"{trace_id} high burden refusal")
            hard = any(condition["severity"] == "hard" and condition["triggered"] for condition in conditions.values())
            expected_decision = "refuse_for_pilot" if hard or (high and confidence["overall"] < 0.75) else "review_required"
            fail(errors, value_matrix["decision"] == expected_decision, f"{trace_id} Value Matrix decision")

        fail(errors, profiles == EXPECTED_PROFILES, "all five runtime profiles")
        resources = traces_doc["data_ownership_gates"]["stateful_resources"]
        resource_ids = [resource["resource_id"] for resource in resources]
        fail(errors, len(resources) == 14 and len(resource_ids) == len(set(resource_ids)), "14 unique stateful resources")
        for resource in resources:
            fail(errors, bool(resource["authority_owner"]), f"{resource['resource_id']} authority owner")
            fail(errors, len(resource["write_owners"]) == 1 and resource["write_owners"][0] != "*", f"{resource['resource_id']} one writer")
            if resource["state_class"] in {"host_owned_transactional", "donor_native", "mapping", "event_read_model", "cache_or_search"}:
                fail(errors, bool(resource["migration_owner"]), f"{resource['resource_id']} migration owner")
        fail(errors, len(traces_doc["data_ownership_gates"]["gate_ids"]) == 8, "eight data-ownership gates")
        fail(errors, state["scope_correction"]["product_target_selected"] is False and state["scope_correction"]["agency_composition_included"] is False, "scope correction state")
        fail(errors, state["ownership"]["owned_directory"] == str(OWNED), "owned directory state")
        fail(errors, set(state["ownership"]["write_targets"]) == {"host-runtime-blueprint.md", "resource-budget.schema.json", "worked-compositions.json", "lane-state.json"}, "required write target state")
        fail(errors, state["evidence_counts"]["representative_traces"] == 3 and state["evidence_counts"]["runtime_profiles"] == 5 and state["evidence_counts"]["stateful_resources_in_gate_fixture"] == 14 and state["evidence_counts"]["value_matrix_factors"] == 10 and state["evidence_counts"]["refusal_conditions_per_trace"] == 11, "state count receipt")

    status = subprocess.run(["git", "status", "--short", "--untracked-files=all", "--", str(OWNED)], cwd=REPO, text=True, capture_output=True, check=True).stdout.splitlines()
    fail(errors, len(status) == len(REQUIRED) and all("research/workstreams/2026-08-28-agency-os-pilot/lanes/03-host-runtime/" in line for line in status), "owned-path boundary")
    if errors:
        print("FAIL " + "; ".join(errors))
        return 1
    print("PASS json=4 schema=1 traces=3 profiles=5 resources=14 gates=8 arithmetic=3 value_factors=10 refusal_rows=33 ownership_boundary=1")
    return 0


if __name__ == "__main__":
    sys.exit(verify())
