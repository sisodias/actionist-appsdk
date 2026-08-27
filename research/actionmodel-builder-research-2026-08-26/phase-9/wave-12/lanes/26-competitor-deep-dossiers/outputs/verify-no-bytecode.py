#!/usr/bin/env python3
"""No-bytecode verifier for the research-only P9-L26 lane."""
import sys
from pathlib import Path
root = Path(__file__).resolve().parent
bad = [str(p) for p in root.rglob("*") if p.is_file() and (p.suffix in {".pyc", ".pyo"} or "__pycache__" in p.parts)]
if bad:
    print("FAIL: bytecode artifacts found")
    print("\n".join(bad))
    sys.exit(1)
print("PASS: no bytecode artifacts")
