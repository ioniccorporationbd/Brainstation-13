"""Rewrite bn dictionary values from the git-HEAD originals using the merged transliteration map.

Usage: python3 scripts/apply_bn_v2.py [--write]
Reads originals from `git show HEAD:<file>` for each bn shard, then for every
entry decides:
  * value == key (never translated)  -> transliterate the English key
  * value is hand-written Bangla     -> transliterate only its Latin runs
Then writes the shard files back with normalized single-line keys.
"""
import glob
import json
import re
import subprocess
import sys

sys.path.insert(0, "/root/work/Brainstation-13/scripts")
import bn_scriptify as B  # noqa: E402

ROOT = "/root/work/Brainstation-13"
BN = f"{ROOT}/src/i18n/dictionaries/bn/"

ENTRY = re.compile(r'^\s*("(?:[^"\\]|\\.)*")\s*:\s*("(?:[^"\\]|\\.)*")\s*,?\s*$', re.M)
TOKEN = re.compile(r"[A-Za-z][A-Za-z0-9'’./+&]*(?:-[A-Za-z0-9'’./+&]+)*-?(?![A-Za-z0-9_-])")
HEADER = re.compile(r"^(//.*|/\*[\s\S]*?\*/|.*\bconst\s+\w+\s*(?::\s*[^=]+)?=\s*\{|.*\bexport\s+default\s*\{|\};?)\s*$")


def sh(cmd):
    return subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=ROOT).stdout


def load_map():
    m = dict(B.MAP)
    for f in glob.glob("/tmp/bands/band*_map.json") + glob.glob("/tmp/dlg2/*_tokens_map.json"):
        try:
            m.update({k.lower(): v for k, v in json.load(open(f)).items()})
        except Exception as e:
            print("SKIP", f, e)
    return m


def load_phrases():
    p = {}
    for f in glob.glob("/tmp/dlg2/*_phrases_map.json") + glob.glob("/tmp/dlg3/*_map.json"):
        try:
            p.update({re.sub(r"\s+", " ", k).strip(): v for k, v in json.load(open(f)).items()})
        except Exception as e:
            print("SKIP", f, e)
    return p


def norm(s):
    return re.sub(r"\s+", " ", s).strip()


SKIP_SPAN = re.compile(
    r"https?://[^\s)\"']+|www\.[^\s)\"']+|[\w.+-]+@[\w.-]+\.\w+|`[^`]*`|\{[^}]*\}")


def canonical_case(tok):
    low = tok.lower()
    for phr in B.PROTECT_PHRASES:
        if phr.lower() == low:
            return phr
    return tok


def translit_runs(text, MAP):
    spansk = [(m.start(), m.end()) for m in SKIP_SPAN.finditer(text)]

    def in_span(a, b):
        for s, e in spansk:
            if a < e and b > s:
                return True
        return False

    out = []
    last = 0
    for m in TOKEN.finditer(text):
        tok = m.group(0)
        if in_span(m.start(), m.end()):
            continue
        trail = tok.endswith("-")
        core = tok[:-1] if trail else tok
        if B.is_protected(core):
            # keep brand text but normalise to the canonical casing when known
            rep = canonical_case(core)
            if rep != tok:
                out.append(text[last:m.start()]); out.append(rep); last = m.end()
            continue
        # slash-joined acronym lists: payments/SSO/CRM
        parts = core.split("/")
        rep_parts = []
        ok = True
        for part in parts:
            r = MAP.get(part.lower())
            if r is None:
                r = B.rule_translit(part)
            if r is not None and r.lower() == part.lower():
                r = part  # identity brand: keep source casing
            if r is None:
                ok = False
                break
            rep_parts.append(r)
        rep = "/".join(rep_parts)
        if not ok or rep == core:
            continue
        if trail:
            rep += "-"
        out.append(text[last:m.start()])
        out.append(rep)
        last = m.end()
    out.append(text[last:])
    return "".join(out)


def main(write):
    MAP = load_map()
    PHR = load_phrases()
    files = [f for f in sh("git ls-tree --name-only HEAD src/i18n/dictionaries/bn/").split()
             if not f.endswith("index.ts") and not f.endswith("types.ts")]
    total = changed = 0
    leftover = 0
    for f in files:
        orig_src = sh(f"git show HEAD:{f}")
        shard = {}
        order = []
        for m in ENTRY.finditer(orig_src):
            try:
                k = json.loads(m.group(1))
                v = json.loads(m.group(2))
            except Exception:
                continue
            nk = norm(k)
            if nk in shard:
                continue
            shard[nk] = v
            order.append(nk)
        new_lines = []
        in_entries = False
        for nk in order:
            v = shard[nk]
            if norm(v) == norm(nk):
                nv = PHR.get(nk) or translit_runs(nk, MAP)
            else:
                nv = translit_runs(v, MAP)
            if nv == nk and norm(v) == norm(nk):
                # nothing could be transliterated (pure brand / unknown)
                leftover += 1
            if nv != v:
                changed += 1
            total += 1
            new_lines.append((nk, nv))
        # rebuild file: keep header lines before the object literal, regenerate body
        head = []
        for ln in orig_src.split("\n"):
            head.append(ln)
            if re.search(r"=\s*\{\s*$", ln):
                break
        body = []
        for nk, nv in new_lines:
            body.append(f"  {json.dumps(nk, ensure_ascii=False)}: {json.dumps(nv, ensure_ascii=False)},")
        new_src = "\n".join(head) + "\n" + "\n".join(body) + "\n};\n"
        if write:
            open(f"{ROOT}/{f}", "w").write(new_src)
    print(f"entries={total} changed={changed} untouchable={leftover}")
    print(f"map_entries={len(MAP)} phrase_entries={len(PHR)}")


if __name__ == "__main__":
    main(write="--write" in sys.argv)
