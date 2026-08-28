#!/usr/bin/env python3
"""Build the P03 capability overlap graph from the two survey files.

Nodes: repos/vendors + capability kinds. Edges: supplies(source, kind).
Emits overlap-graph.json and prints the stats the lane report quotes.
Run from the run directory.
"""
import json, collections, sys

def load(path):
    out = []
    for line in open(path):
        line = line.strip()
        if not line:
            continue
        r = json.loads(line)
        if str(r.get("id", "")).upper() in ("SUMMARY", "COM-SUMMARY") or r.get("record_type") == "summary":
            continue
        out.append(r)
    return out

repos = load("top-repos.jsonl")
coms = load("top-companies.jsonl")

# Normalise commercial kind labels onto the OSS snake_case vocabulary so the
# two denominators can be compared. Unmapped labels are reported, never dropped.
KIND_MAP = {
    "low-code data platform": "admin_data",
    "auth/identity": "auth_identity",
    "messaging/notifications": "messaging_notifications",
    "connectors/iPaaS": "connectors",
    "spreadsheet-database": "airtable_data",
    "analytics/BI embeds": "analytics_bi",
    "chat/comments/collaboration": "chat_collaboration",
    "file storage/management": "files_documents",
    "AI-agent platform": "ai_agent_platform",
    "approvals/workflow": "approvals_workflow",
    "notes/docs editing": "notes_docs",
    "support desk/helpdesk": "support_desk",
    "search": "search",
    "video/meetings embed": "video_meetings",
    "billing/payments": "billing",
    "email infra": "email_infra",
    "forms/surveys": "forms",
    "document generation/PDF": "doc_generation",
    "project/case management": "project_management",
    "calendar/scheduling": "calendar_scheduling",
    "CRM": "crm",
    "e-signature": "e_sign",
    "client portals": "portal",
    "inventory/commerce headless": "inventory",
    "LMS": "lms",
}

unmapped = set()
edges = []          # (source_id, source_label, lane, kind, reuse_shape, license_class, disposition)

for r in repos:
    for k in (r.get("capability_kinds") or []):
        edges.append({
            "source_id": r.get("id"), "source": r.get("repo"), "lane": "oss",
            "kind": k, "reuse_shape": r.get("reuse_shape_recommendation"),
            "license_class": r.get("license_class"), "disposition": r.get("disposition"),
        })

for r in coms:
    for k in (r.get("capability_kinds") or []):
        nk = KIND_MAP.get(k)
        if nk is None:
            unmapped.add(k)
            nk = k
        edges.append({
            "source_id": r.get("id"), "source": r.get("vendor"), "lane": "commercial",
            "kind": nk, "reuse_shape": "commercial_" + str(r.get("embed_mode", "unknown")).split()[0],
            "license_class": "commercial", "disposition": r.get("disposition"),
            "whitelabel": r.get("whitelabel"), "pricing_class": r.get("pricing_class"),
        })

kinds_per_source = collections.Counter()
for e in edges:
    kinds_per_source[(e["lane"], e["source_id"])] += 1
sources_per_kind = collections.defaultdict(lambda: {"oss": 0, "commercial": 0})
for e in edges:
    sources_per_kind[e["kind"]][e["lane"]] += 1

# "Clean" OSS supply = permissive-ish AND disposition candidate. This is the
# number that actually decides build-vs-borrow, not the raw row count.
clean = collections.Counter()
for e in edges:
    if e["lane"] == "oss" and e["license_class"] in ("permissive", "permissive-open-core") \
       and e["disposition"] == "candidate":
        clean[e["kind"]] += 1

# Commercial supply usable for resale: white-label yes, not per-end-user priced.
resale_ok = collections.Counter()
for e in edges:
    if e["lane"] == "commercial" and e.get("whitelabel") == "yes" \
       and "end-user" not in str(e.get("pricing_class", "")).lower() \
       and "end user" not in str(e.get("pricing_class", "")).lower():
        resale_ok[e["kind"]] += 1

dist = collections.Counter(kinds_per_source.values())
composite = {k: v for k, v in kinds_per_source.items() if v >= 3}

# Kinds outside the 24-kind CLIENT-capability taxonomy are tracked but never
# classified — a developer-facing kind with no supply is not a client supply gap.
NON_CLIENT_KINDS = {"developer_docs_rendering"}

all_kinds = sorted(k for k in sources_per_kind if k not in NON_CLIENT_KINDS)
excluded_kinds = sorted(k for k in sources_per_kind if k in NON_CLIENT_KINDS)
rows = []
for k in all_kinds:
    rows.append({
        "kind": k,
        "oss_sources": sources_per_kind[k]["oss"],
        "commercial_sources": sources_per_kind[k]["commercial"],
        "clean_oss_candidates": clean.get(k, 0),
        "resale_ok_commercial": resale_ok.get(k, 0),
    })

def classify(r):
    """commodity / scarce / missing — must cite BOTH denominators (invariant 4)."""
    if r["clean_oss_candidates"] >= 3 or (r["clean_oss_candidates"] >= 1 and r["resale_ok_commercial"] >= 3):
        return "commodity"
    if r["clean_oss_candidates"] == 0 and r["resale_ok_commercial"] == 0:
        return "missing"
    if r["oss_sources"] == 0 or r["commercial_sources"] == 0:
        return "UNDERDETERMINED_one_sided"
    return "scarce"

for r in rows:
    r["classification"] = classify(r)

out = {
    "schema": "actionist.p03.overlap-graph.v1",
    "observed_date": "2026-08-27",
    "nodes": {
        "oss_sources": len({e["source_id"] for e in edges if e["lane"] == "oss"}),
        "commercial_sources": len({e["source_id"] for e in edges if e["lane"] == "commercial"}),
        "capability_kinds": len(all_kinds),
    },
    "edges_total": len(edges),
    "kinds_per_source_distribution": dict(sorted(dist.items())),
    "composite_sources_3plus_kinds": len(composite),
    "max_kinds_on_one_source": max(kinds_per_source.values()) if kinds_per_source else 0,
    "unmapped_commercial_kind_labels": sorted(unmapped),
    "excluded_non_client_kinds": excluded_kinds,
    "per_kind": rows,
    "classification_counts": dict(collections.Counter(r["classification"] for r in rows)),
    "method_note": "Edges are supplies(source, kind) claims from the two survey files. "
                   "clean_oss_candidates counts permissive/permissive-open-core rows with disposition=candidate. "
                   "resale_ok_commercial counts white-label vendors without per-end-user pricing. "
                   "Classification requires BOTH denominators; one-sided kinds return UNDERDETERMINED. "
                   "Kinds outside the 24-kind client-capability taxonomy are tracked in "
                   "excluded_non_client_kinds and never classified: a developer-facing kind with no "
                   "supply is not a client supply gap.",
}

json.dump(out, open("overlap-graph.json", "w"), indent=1)

print(f"nodes: {out['nodes']}")
print(f"edges: {out['edges_total']}")
print(f"kinds-per-source distribution: {out['kinds_per_source_distribution']}")
print(f"composite sources (>=3 kinds): {out['composite_sources_3plus_kinds']}, max kinds on one source: {out['max_kinds_on_one_source']}")
if unmapped:
    print(f"UNMAPPED commercial kind labels (kept verbatim): {sorted(unmapped)}")
print(f"classification: {out['classification_counts']}")
print()
print(f"{'kind':<26}{'oss':>5}{'clean':>7}{'com':>5}{'resale':>8}  class")
for r in sorted(rows, key=lambda x: (x["classification"], -x["clean_oss_candidates"])):
    print(f"{r['kind']:<26}{r['oss_sources']:>5}{r['clean_oss_candidates']:>7}"
          f"{r['commercial_sources']:>5}{r['resale_ok_commercial']:>8}  {r['classification']}")
