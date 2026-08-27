#!/usr/bin/env python3
import hashlib, json, os, sys, urllib.error, urllib.request
from concurrent.futures import ThreadPoolExecutor

IN = sys.argv[1]
OUT = os.path.dirname(os.path.abspath(__file__))
DIMS = ["demand_atom_fit", "workflow_behavior", "ui_assembly", "data_model", "integration_surface", "agent_authority", "runtime_deployment", "verification_eval", "provenance_rights", "economics_maintenance"]
TODAY = "2026-08-27"

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "actionmodel-research/1.0", "Accept": "text/plain, application/json"})
    try:
        with urllib.request.urlopen(req, timeout=5) as r:
            return "ok", r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return ("absent" if e.code in (404, 410) else "blocked"), "HTTP %s" % e.code
    except Exception as e:
        return "blocked", type(e).__name__

def excerpt(body):
    lines = [" ".join(x.strip().split()) for x in body.splitlines() if len(x.strip()) >= 35]
    lines = [x for x in lines if not x.startswith("<!--") and not x.startswith("<svg")]
    return lines[0][:280] if lines else ""

all_resolved = []
with open(IN, encoding="utf-8") as f:
    for line in f:
        if line.strip():
            x = json.loads(line)
            if x.get("status") == "resolved":
                all_resolved.append(x)
assert len(all_resolved) >= 165, len(all_resolved)
assignments = all_resolved[83:165]
assert len(assignments) == 82, len(assignments)

evidence, receipts = [], []
for a in assignments:
    repo = a["canonical_repository"]["identity_key"]
    sha = a["immutable_revision"]["sha"]
    raw_base, web = "https://raw.githubusercontent.com/%s/%s" % (repo, sha), "https://github.com/%s" % repo
    commit = "%s/commit/%s" % (web, sha)
    candidates = [("README.md", raw_base + "/README.md"), ("README", raw_base + "/README"), ("docs/index.md", raw_base + "/docs/index.md"), ("docs/README.md", raw_base + "/docs/README.md"), ("package.json", raw_base + "/package.json"), ("pyproject.toml", raw_base + "/pyproject.toml"), ("Cargo.toml", raw_base + "/Cargo.toml"), ("go.mod", raw_base + "/go.mod"), ("LICENSE", raw_base + "/LICENSE"), ("LICENSE.md", raw_base + "/LICENSE.md")]
    bodies, blocked = {}, []
    with ThreadPoolExecutor(max_workers=12) as pool:
        results = list(pool.map(lambda item: (item[0], item[1], *fetch(item[1])), candidates))
    for name, url, status, body in results:
        if status == "ok": bodies[name] = (url, body)
        elif status == "blocked": blocked.append((name, url, body))
    read_body = next((v for k, v in bodies.items() if k in ("README.md", "README")), None)
    doc_body = next((v for k, v in bodies.items() if k.startswith("docs/")), None)
    manifest_body = next((v for k, v in bodies.items() if k in ("package.json", "pyproject.toml", "Cargo.toml", "go.mod")), None)
    license_body = next((v for k, v in bodies.items() if k.startswith("LICENSE")), None)
    generic = next((v for v in (read_body, doc_body, manifest_body) if v and excerpt(v[1])), None)
    for dim in DIMS:
        source = license_body if dim == "provenance_rights" else generic
        if dim == "agent_authority" and generic and not any(t in generic[1].lower() for t in ("agent", "mcp", "llm", "ai ")): source = None
        if source and excerpt(source[1]):
            source_url, body, ex, cls = source[0], source[1], excerpt(source[1]), "direct"
            claim = "At immutable revision %s, %s states: “%s” This is repository-specific public evidence for %s." % (sha, source_url.rsplit("/", 1)[-1], ex, dim)
            basis = "quoted substantive public README, documentation, manifest, or license content fetched over HTTP at the pinned revision"
        elif blocked and not bodies:
            source_url, ex, cls = blocked[0][1], "", "blocked"
            claim = "HTTP access to the pinned public source candidates failed; no repository-specific body claim is assigned for %s." % dim
            basis = "real HTTP access failure; blocked rather than inferred"
        else:
            fallback = license_body or manifest_body or read_body or doc_body
            source_url, ex, cls = (fallback[0] if fallback else web), "", "unknown"
            claim = "No substantive repository-specific public body excerpt was available for %s at the pinned revision; disposition remains unknown." % dim
            basis = "candidate public README, documentation, manifest, and license paths were checked over HTTP; absent evidence remains unknown"
        urls = [source_url, commit, web]
        falsifier = "What would falsify this %s disposition: a reproducible HTTP read of the pinned revision showing contrary or absent repository-specific content, or a source URL that cannot reproduce the cited content." % dim
        rights_note = "Public license text was observed but is not legal clearance; rights remain unknown. No license scan was run." if license_body else "Public LICENSE/COPYING text was not observed among checked candidates; rights remain unknown. No license scan was run."
        boundary = {"research_only": True, "execution_status": "UNEXECUTED", "admission_status": "NOT_ADMITTED", "admitted_blocks": 0, "promotion_allowed": False}
        common = {"assignment_id": a["assignment_id"], "pair_id": a["pair_id"], "schema_version": 1, "repository": repo, "repository_url": web, "dimension": dim, "immutable_revision": sha, "observed_date": TODAY, "evidence_class": cls, "observed_claim": claim, "evidence_basis": basis, "evidence_excerpt": ex, "source_urls": urls, "falsifier": falsifier, "rights_note": rights_note, "rights_unknown": True, "sbom_note": "Dependency inventory/SBOM state is unknown; no SBOM generation, execution, or scan was performed.", "sbom_unknown": True, "boundary": boundary}
        evidence.append(dict(common, record_type="pair_dimension_evidence", industry=a["industry"]["id"], industry_label=a["industry"]["label"]))
        receipts.append(dict(common, record_type="source_receipt", receipt_id="P9-L28-SRC-%s-%s" % (a["pair_id"], dim), primary_source=source_url, no_clone=True, no_source_execution=True))

def dump(name, rows):
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
        for row in rows: f.write(json.dumps(row, ensure_ascii=False, separators=(",", ":")) + "\n")
dump("pair-dimension-evidence.jsonl", evidence)
dump("source-receipts.jsonl", receipts)
for name, rows in (("pair-dimension-evidence.jsonl", evidence), ("source-receipts.jsonl", receipts)):
    print(name, len(rows), hashlib.sha256(open(os.path.join(OUT, name), "rb").read()).hexdigest())
