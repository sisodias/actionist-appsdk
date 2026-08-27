#!/bin/sh
set -eu
out_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
test "$(find "$out_dir" -maxdepth 1 -type f \( -name '*.pyc' -o -name '*.pyo' -o -name '*.class' \) -print | wc -l | tr -d ' ')" = 0
python3 -B - "$out_dir" <<'PY'
import json, pathlib, sys
p=pathlib.Path(sys.argv[1])
for f in ["local-asset-block-join.jsonl","rights-and-source-gap-ledger.jsonl"]:
    for n,line in enumerate((p/f).read_text().splitlines(),1): json.loads(line)
d=json.loads((p/"mini-corpus-location-receipt.json").read_text())
assert d["resolution"] == "UNKNOWN" and d["broad_disk_sweep"] is False
assert json.loads((p/"lane-state.json").read_text())["admitted_blocks"] == 0
print("PASS no-bytecode/json/boundary")
PY
