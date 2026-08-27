#!/usr/bin/env python3
import datetime, hashlib, json, os, sys, urllib.error, urllib.request
from concurrent.futures import ThreadPoolExecutor

IN = sys.argv[1]
OUT = os.path.dirname(os.path.abspath(__file__))
DIMS = ["demand_atom_fit", "workflow_behavior", "ui_assembly", "data_model", "integration_surface", "agent_authority", "runtime_deployment", "verification_eval", "provenance_rights", "economics_maintenance"]
TODAY = "2026-08-27"

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "actionmodel-research/1.0", "Accept": "text/plain, application/json"})
    try:
        with urllib.request.urlopen(req, timeout=4) as r:
            return ("ok", r.read().decode("utf-8", "replace"))
    except urllib.error.HTTPError as e:
        return ("absent" if e.code in (404, 410) else "blocked", "HTTP %s" % e.code)
    except Exception as e:
        return ("blocked", type(e).__name__)

def excerpt(body):
    lines = [" ".join(x.strip().split()) for x in body.splitlines() if len(x.strip()) >= 35]
    lines = [x for x in lines if not x.startswith("<!--") and not x.startswith("<svg")]
    if not lines:
        return ""
    return lines[0][:280]

assignments = []
with open(IN, encoding="utf-8") as f:
    for line in f:
        if not line.strip():
            continue
        x = json.loads(line)
        if x.get("status") == "resolved":
            assignments.append(x)
        if len(assignments) == 83:
            break
assert len(assignments) == 83

evidence = []
receipts = []
for a in assignments:
    repo = a["canonical_repository"]["identity_key"]
    sha = a["immutable_revision"]["sha"]
    raw_base = "https://raw.githubusercontent.com/%s/%s" % (repo, sha)
    web = "https://github.com/%s" % repo
    commit = "%s/commit/%s" % (web, sha)
    api_url = "https://api.github.com/repos/%s" % repo
    candidates = [("README.md", raw_base + "/README.md"), ("docs/index.md", raw_base + "/docs/index.md"),
                  ("package.json", raw_base + "/package.json"), ("pyproject.toml", raw_base + "/pyproject.toml"),
                  ("LICENSE", raw_base + "/LICENSE")]
    bodies = {}
    blocked = []
    with ThreadPoolExecutor(max_workers=12) as pool:
        fetched = list(pool.map(lambda c: (c, fetch(c[1])), candidates + [("repo_metadata", api_url)]))
    for (name, url), (status, body) in fetched:
        if status == "ok":
            bodies[name] = (url, body)
        elif status == "blocked":
            blocked.append((name, url, body))
    read_body = next((v for k, v in bodies.items() if k in ("README.md", "README")), None)
    doc_body = next((v for k, v in bodies.items() if k.startswith("docs/")), None)
    manifest_body = next((v for k, v in bodies.items() if k in ("package.json", "pyproject.toml", "Cargo.toml", "go.mod")), None)
    license_body = next((v for k, v in bodies.items() if k.startswith("LICENSE")), None)
    generic = next((v for v in (read_body, doc_body, manifest_body) if v and excerpt(v[1])), None)
    for dim in DIMS:
        source = generic
        if dim == "provenance_rights":
            source = license_body
        if dim == "agent_authority" and generic and not any(t in generic[1].lower() for t in ("agent", "mcp", "llm", "ai ")):
            source = None
        if source and excerpt(source[1]):
            source_url, body = source
            ex = excerpt(body)
            cls = "direct"
            claim = "At immutable revision %s, %s states: “%s” This is repository-specific public evidence for %s." % (sha, source_url.rsplit("/", 1)[-1], ex, dim)
            basis = "quoted substantive public README, documentation, manifest, or license content fetched over HTTP at the pinned revision"
        elif blocked and not bodies:
            cls = "blocked"
            source_url = blocked[0][1]
            ex = ""
            claim = "HTTP access to the pinned public source candidates failed; no repository-specific body claim is assigned for %s." % dim
            basis = "real HTTP access failure; blocked rather than inferred"
        else:
            cls = "unknown"
            source_url = (license_body or manifest_body or read_body or doc_body or (None, None))[0] if (license_body or manifest_body or read_body or doc_body) else web
            ex = ""
            claim = "No substantive repository-specific public body excerpt was available for %s at the pinned revision; disposition remains unknown." % dim
            basis = "candidate public README, documentation, manifest, and license paths were checked over HTTP; absent evidence remains unknown"
        urls = [source_url, commit, web]
        falsifier = "What would falsify this %s disposition: an authorized read-only review of the pinned revision showing contrary or absent repository-specific content, or a source URL that cannot reproduce the cited content." % dim
        rights_note = "Public LICENSE/COPYING text was not observed among checked candidates; rights remain unknown. No license scan was run." if not license_body else "Public license text was observed but is not legal clearance; rights remain unknown. No license scan was run."
        boundary = {"research_only": True, "execution_status": "UNEXECUTED", "admission_status": "NOT_ADMITTED", "admitted_blocks": 0, "promotion_allowed": False}
        row = {"assignment_id": a["assignment_id"], "pair_id": a["pair_id"], "record_type": "pair_dimension_evidence", "schema_version": 1, "repository": repo, "repository_url": web, "industry": a["industry"]["id"], "industry_label": a["industry"]["label"], "dimension": dim, "evidence_class": cls, "immutable_revision": sha, "observed_date": TODAY, "observed_claim": claim, "evidence_basis": basis, "evidence_excerpt": ex, "source_urls": urls, "falsifier": falsifier, "rights_note": rights_note, "rights_unknown": True, "sbom_note": "Dependency inventory/SBOM state is unknown; no SBOM generation, execution, or scan was performed.", "sbom_unknown": True, "boundary": boundary}
        evidence.append(row)
        receipt = {"assignment_id": a["assignment_id"], "pair_id": a["pair_id"], "record_type": "source_receipt", "schema_version": 1, "receipt_id": "P9-L27-SRC-%s-%s" % (a["pair_id"], dim), "primary_source": source_url, "source_urls": urls, "repository": repo, "dimension": dim, "immutable_revision": sha, "observed_date": TODAY, "evidence_class": cls, "observed_claim": claim, "evidence_basis": basis, "evidence_excerpt": ex, "falsifier": falsifier, "rights_note": rights_note, "rights_unknown": True, "sbom_note": "Dependency inventory/SBOM state is unknown; no SBOM generation, execution, or scan was performed.", "sbom_unknown": True, "no_clone": True, "no_source_execution": True, "boundary": boundary}
        receipts.append(receipt)

def dump(path, rows):
    with open(path, "w", encoding="utf-8") as f:
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False, separators=(",", ":")) + "\n")
dump(os.path.join(OUT, "pair-dimension-evidence.jsonl"), evidence)
dump(os.path.join(OUT, "source-receipts.jsonl"), receipts)
for name, rows in (("pair-dimension-evidence.jsonl", evidence), ("source-receipts.jsonl", receipts)):
    h = hashlib.sha256(open(os.path.join(OUT, name), "rb").read()).hexdigest()
    print(name, len(rows), h)
