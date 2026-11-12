"""Wrap leftover English UI strings in t(...) and inject the translator.

Usage: python3 scripts/wrap_v2.py files.txt [--dry]

Handles two common leftovers from the first wrapping pass:
  1. raw JSX text nodes  (<p>Some English text</p>)
  2. bare JSX expression children  ({item.desc}, {study.title})

Server components get an async default export + `const { t } = await
getTranslator();`; client components get `const { t } = useTranslation();`.
"""
import json
import re
import sys

BLACK = {
    "className", "src", "href", "alt", "key", "id", "style", "icon", "image",
    "img", "logo", "url", "link", "href_", "slug", "duration_", "count",
    "index", "idx", "i", "n", "color", "bg", "width", "height", "size",
    "delay", "duration", "year", "date_", "num", "total", "length", "map",
    "children", "props", "ref", "value_", "type_", "href", "target", "aria",
    "role_", "as", "data", "items", "list", "arr", "obj", "flag", "open",
    "set", "state", "err", "error_", "res", "resp", "json_", "html", "text_",
}

TEXT_EXPR = re.compile(r"\{\s*([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)\s*\}")
PROP_EXPR = re.compile(r"\b(title|label|subtitle|desc|description|text|content|heading|placeholder|summary|eyebrow|role|company|quote|name|kicker|tagline|intro|body|headingText|labelText)\s*=\s*\{\s*([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)\s*\}")
JSXTEXT = re.compile(r">([^<>{}]*[A-Za-z][^<>{}]*)<")


def wrap_file(src, client):
    changed = [0, 0]

    holder = [src]

    def text_sub(m):
        raw = m.group(1)
        # skip text that is just punctuation / short fragments / already bangla
        t = re.sub(r"\s+", " ", raw).strip()
        if len(t) < 3 or not re.search(r"[A-Za-z]{2,}", t):
            return m.group(0)
        if re.search(r"[\u0980-\u09FF]", t):
            return m.group(0)
        if t.startswith("//") or t.startswith("/*"):
            return m.group(0)
        changed[0] += 1
        return ">{" + "t(" + json.dumps(t, ensure_ascii=False) + ")}<"

    def expr_sub(m):
        before = holder[0][max(0, m.start() - 40):m.start()]
        # skip import/export lines and attribute/binding contexts
        ln = before.split("\n")[-1]
        if ln.lstrip().startswith(("import", "export", "//", "*")):
            return m.group(0)
        nearm = re.search(r"(\S)\s*$", before)
        prev = nearm.group(1) if nearm else ""
        if prev in "=,:(?&|[]":
            return m.group(0)
        expr = m.group(1)
        last = expr.split(".")[-1]
        if last.lower() in BLACK or expr in ("t",):
            return m.group(0)
        if not expr.endswith("_") and "." not in expr and expr.lower() in BLACK:
            return m.group(0)
        changed[1] += 1
        return "{t(" + expr + ")}"

    out = []
    pos = 0
    n = len(src)
    # protect code fences/strings loosely: operate line-wise but allow text
    # nodes spanning lines by working on the whole file for the text pass
    body = src
    if False and "<" in body:  # raw JSX text nodes handled manually
        body = JSXTEXT.sub(text_sub, body)
    holder[0] = body
    body = TEXT_EXPR.sub(expr_sub, body)

    def prop_sub(m):
        prop, expr = m.group(1), m.group(2)
        last = expr.split(".")[-1]
        if last.lower() in BLACK:
            return m.group(0)
        changed[1] += 1
        return f"{prop}={{t({expr})}}"

    body = PROP_EXPR.sub(prop_sub, body)
    return body, changed


def ensure_import(src, client):
    if client:
        if "useTranslation" in src:
            return src, False
        m = re.search(r'^(import .*?;)\n', src, re.M)
        add = 'import { useTranslation } from "@/i18n/LanguageProvider";\n'
        if "LanguageProvider\"" in src or "LanguageProvider';" in src:
            return src, False
        return (src[: m.end()] + add + src[m.end():]) if m else (add + src), True
    if "getTranslator" in src:
        return src, False
    m = re.search(r'^(import .*?;)\n', src, re.M)
    add = 'import { getTranslator } from "@/i18n/server";\n'
    return (src[: m.end()] + add + src[m.end():]) if m else (add + src), True


def inject_t(src, client):
    if "const { t } = useTranslation();" in src or "const { t } = await getTranslator();" in src:
        return src
    if client:
        pat = re.compile(r"(export default function [\w$]+\s*\([^)]*\)\s*(?::\s*[^{]+)?\{\n)")
        m = pat.search(src)
        if m:
            return src[: m.end()] + "  const { t } = useTranslation();\n" + src[m.end():]
        pat2 = re.compile(r"(export default \([\s\S]{0,200}?\)\s*=>\s*\{\n)")
        m = pat2.search(src)
        if m:
            return src[: m.end()] + "  const { t } = useTranslation();\n" + src[m.end():]
        return src
    pat = re.compile(r"(export\s+(?:default\s+)?(?:async\s+)?function\s+[\w$]+\s*\([^)]*\)\s*(?::\s*[^{]+)?\{\n)")
    m = pat.search(src)
    if not m:
        return src
    head = m.group(1)
    newhead = head
    if "async" not in head.split("function")[0]:
        newhead = re.sub(r"export(\s+)default(\s+)function", r"export\1default\2async function", head)
        if newhead == head:
            newhead = re.sub(r"export(\s+)function", r"export\1async function", head)
    return src[: m.start()] + newhead + "  const { t } = await getTranslator();\n" + src[m.start() + len(head):]


def main():
    dry = "--dry" in sys.argv
    files = [a for a in sys.argv[1:] if not a.startswith("--")]
    tot = [0, 0]
    report = {}
    for f in files:
        src = open(f).read()
        client = ('"use client"' in src[:400]) or ("'use client'" in src[:400])
        body, ch = wrap_file(src, client)
        if ch[0] + ch[1] == 0:
            continue
        body, _ = ensure_import(body, client)
        body = inject_t(body, client)
        report[f] = ch
        tot[0] += ch[0]
        tot[1] += ch[1]
        if not dry:
            open(f, "w").write(body)
    print(f"text_wrapped={tot[0]} expr_wrapped={tot[1]} files={len(report)}")
    json.dump(report, open("/tmp/wrap_v2_report.json", "w"), indent=1)


if __name__ == "__main__":
    main()
