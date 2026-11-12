"""Apply the merged Latin->Bangla-script map to every bn dictionary value."""
import json, re, sys, glob, os
sys.path.insert(0, "/root/work/Brainstation-13/scripts")
import bn_scriptify as B

# merge curated + subagent bands
for f in sorted(glob.glob("/tmp/bands/band*_map.json")):
    try:
        add = json.load(open(f))
    except Exception as e:
        print("SKIP", f, e); continue
    B.MAP.update({k.lower(): v for k, v in add.items()})

ENTRY = re.compile(r'^(\s*)("(?:[^"\\]|\\.)*")(\s*:\s*)("(?:[^"\\]|\\.)*")(,?)\s*$')

def main(write=True):
    total = changed = 0
    leftovers = {}
    for path in sorted(glob.glob("/root/work/Brainstation-13/src/i18n/dictionaries/bn/*.ts")):
        if path.endswith("index.ts"):
            continue
        lines = open(path).read().split("\n")
        out = []
        nchg = 0
        for ln in lines:
            m = ENTRY.match(ln)
            if not m:
                out.append(ln); continue
            total += 1
            key = json.loads(m.group(2)); val = json.loads(m.group(4))
            # skip identity values that are pure protected names handled by replace_tokens
            new = B.replace_tokens(val)
            if new != val:
                nchg += 1
                ln = m.group(1) + m.group(2) + m.group(3) + json.dumps(new, ensure_ascii=False) + m.group(5)
            for t in re.findall(r"[A-Za-z][A-Za-z0-9'’+./&#-]*", json.loads(m.group(4)) if not m.group(5) else json.loads(m.group(4))):
                pass
            out.append(ln)
        changed += nchg
        if write and nchg:
            open(path, "w").write("\n".join(out))
        print(f"{os.path.basename(path)}: {nchg}/{len(lines)} lines changed")
    print(f"TOTAL entries={total} changed={changed}")

if __name__ == "__main__":
    main(write="--dry" not in sys.argv)
