"""Wrap bare JSX text expressions in t() for files that already have a translator.

Targets files that render data-array strings without translating them.
Only wraps simple `{ident}` / `{obj.field}` children whose field name looks
textual, in files that already call t().
"""
import re, sys, glob, collections

TEXTY = {
    "title","summary","subtitle","label","description","text","body","who","tab",
    "aspect","quote","tag","category","use","value","name","points","feature",
    "content","caption","detail","details","desc","pointsList","highlight",
    "highlights","role","company","industry","sub","subtitle2","note","answer",
    "question","heading","paragraph","intro","outro","line","copy","blurb",
}
SKIP_FIELD = {
    "icon","image","imageAlt","src","slug","hex","logo","url","href","className",
    "width","height","w","h","alt","color","bg","id","num","number","year",
    "count","total","delay","size","key","value2","hrefText","img","path",
}
SKIP_VAR = {"index","i","idx","isLast","isOpen","open","active","key","length","props"}

CAND = re.compile(r"\{\s*([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)?)\s*\}")

def has_translator(src):
    return "getTranslator" in src or "useTranslation" in src

def patch_file(path, write=True):
    src = open(path).read()
    if not has_translator(src):
        return 0, "no-t"
    lines = src.split("\n")
    n = 0
    out = []
    for ln in lines:
        if "className=" in ln and "{" not in ln.split(">")[0]:
            pass
        def repl(m):
            nonlocal n
            expr = m.group(1)
            root = expr.split(".")[0]
            field = expr.split(".")[-1] if "." in expr else None
            if root in SKIP_VAR or root in SKIP_VAR:
                return m.group(0)
            if field is not None:
                if field.lower() in {f.lower() for f in SKIP_FIELD}:
                    return m.group(0)
                if field.lower() not in {f.lower() for f in TEXTY}:
                    return m.group(0)
            # only wrap when this expression is a JSX child: preceded by '>' or line start
            start = m.start()
            before = ln[:start].rstrip()
            if not (before.endswith(">") or before == "" or before.endswith("}") or before.endswith("&nbsp;")):
                return m.group(0)
            n += 1
            return "{t(" + expr + ")}"
        new = CAND.sub(repl, ln)
        out.append(new)
    if n and write:
        open(path, "w").write("\n".join(out))
    return n, "ok"

if __name__ == "__main__":
    files = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not files:
        files = sorted(set(glob.glob("/root/work/Brainstation-13/src/**/*.tsx", recursive=True)))
    total = 0
    skipped = []
    for f in files:
        c, why = patch_file(f, write="--dry" not in sys.argv)
        if c:
            print(f"{c:3d}  {f}")
            total += c
        elif why == "no-t":
            skipped.append(f)
    print(f"TOTAL wrapped={total}  files_without_translator={len(skipped)}")
    for f in skipped[:40]:
        print("  no-t:", f)
