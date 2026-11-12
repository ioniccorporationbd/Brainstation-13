"""Bangla-mode script normalizer: Latin tokens in bn dictionary values -> Bangla script.
Curated map (/tmp/tmap.json) wins; rule-based transliteration for the tail;
explicit protection for brand names, product names, URLs, emails, paths, code."""
import json, re, sys

MAP = json.load(open("/tmp/tmap.json"))

# ---- protected spans (kept in Latin) ----
PROTECT_PHRASES = [
    "Magnetic Solution Limited", "Magnetic Solution", "Magnetic Solutions", "Magnetic",
    "Shikkha Chat", "Shikkha Pathshala", "Shikkha", "Omnizia", "Proctoring Pro", "Time2Publish",
    "NeuraFlow", "Swapno", "Pathshala", "ERPNext", "Frappe", "Next.js", "NextJS", "React",
    "Node.js", "Shopify", "AWS", "Azure", "Microsoft", "Adobe", "AEM", "SharePoint", "Moodle",
    "Salesforce", "Oracle", "SAP", "Google", "Meta", "OWASP", "ISO 27001", "ISO 9001",
    "AWS Certified", "AB Bank", "ACI Limited", "Aarong", "BATA", "BASIS", "bKash", "Nagad",
    "Grameenphone", "Robi", "Anupom Syam", "Magnetic Solution Limited.",
]
PROTECT_RE = re.compile(
    r"(https?://[^\s)»]+|www\.[^\s)»]+|[\w.+-]+@[\w-]+\.[\w.]+|"
    r"(?:/[\w.-]+){2,}/?|"
    r"[A-Za-z0-9_-]+\.(?:js|ts|tsx|json|py|com|net|io|org|dev|app|bd)\b|"
    r"\b[A-Z]{2,}[0-9]{2,}\b)"
)

# ---- rule-based transliteration ----
CONS = {
    "b":"ব","c":"ক","d":"ড","f":"ফ","g":"গ","h":"হ","j":"জ","k":"ক","l":"ল","m":"ম",
    "n":"ন","p":"প","q":"ক","r":"র","s":"স","t":"ট","v":"ভ","w":"ও","x":"ক্স","z":"জ",
}
DIGRAPH = [
    ("sh","শ"),("ch","চ"),("ck","ক"),("th","থ"),("ph","ফ"),("wh","ওয়"),("gh","ঘ"),
    ("kh","খ"),("gn","ন"),("kn","ন"),("wr","র"),("qu","কু"),("ee","ই"),("ea","ই"),
    ("oo","উ"),("ou","াউ"),("ow","ো"),("ai","াই"),("ay","ে"),("ey","ে"),("oa","ো"),
    ("oo","উ"),("au","অ"),("ei","েই"),("ie","ি"),("ue","ু"),("ui","ুই"),
]
VOWEL_IND = {"a":"আ","e":"এ","i":"ই","o":"ও","u":"উ","y":"ই"}
VOWEL_SIGN = {"a":"া","e":"ে","i":"ি","o":"ো","u":"ু","y":"ি"}

SUFFIX = [
    ("tions","শনস"),("tion","শন"),("sions","শনস"),("sion","শন"),
    ("ation","েশন"),("isation","াইজেশন"),("ization","াইজেশন"),
    ("ities","িটিজ"),("ity","িটি"),("ologies","োলজিস"),("ology","োলজি"),
    ("ments","মেন্টস"),("ment","মেন্ট"),("ness","নেস"),("ously","াসলি"),
    ("ous","াস"),("ives","িভস"),("ive","িভ"),("ables","েবলস"),("able","েবল"),
    ("ible","িবল"),("ingly","িংলি"),("ing","িং"),("edly","েডলি"),("ed","ড"),
    ("ers","ারস"),("er","ার"),("ors","ারস"),("or","ার"),("ally","ালি"),
    ("ally","ালি"),("ial","িয়াল"),("al","াল"),("ic","িক"),("ics","িকস"),
    ("ism","িজম"),("ist","িস্ট"),("ance","ান্স"),("ence","েন্স"),
    ("ant","্যান্ট"),("ent","েন্ট"),("ary","ারি"),("ory","রি"),
    ("ure","ার"),("ly","লি"),("ies","িজ"),("es","েস"),("s","স"),
]

DIG = [
    ("ough","ফ"),("augh","াফ"),("tion","শন"),("sion","শন"),
    ("ch","চ"),("sh","শ"),("th","থ"),("ph","ফ"),("gh","ঘ"),("kh","খ"),
    ("bh","ভ"),("dh","ধ"),("jh","ঝ"),("ng","ং"),("ck","ক"),("qu","কু"),
    ("wh","ওয়"),("kn","ন"),("wr","র"),("gn","ন"),("oo","ু"),("ee","ি"),
    ("ea","ি"),("ai","াই"),("ay","ে"),("ey","ে"),("oa","ো"),("ou","াউ"),
    ("ow","ো"),("oi","য়"),("oy","য়"),("au","অ"),("ei","েই"),("ie","ি"),
    ("ue","ু"),("ui","ুই"),("ya","িয়া"),("yo","িও"),
]
CONS = {"b":"ব","c":"ক","d":"ড","f":"ফ","g":"গ","h":"হ","j":"জ","k":"ক","l":"ল","m":"ম","n":"ন","p":"প","q":"ক","r":"র","s":"স","t":"ট","v":"ভ","w":"ওয়","x":"ক্স","z":"জ","y":"য়"}
VOW = {"a":"া","e":"ে","i":"ি","o":"ো","u":"ু"}
VOW_I = {"a":"অ","e":"এ","i":"ই","o":"ও","u":"উ"}

def _one_word(w):
    w = w.lower()
    # collapse doubled consonants (mm->m, ss->s ...) but keep "ll"->"ল" too
    w = re.sub(r"([bcdfgklmnprstz])\1+", r"\1", w)
    # silent final e after a consonant
    if len(w) > 3 and w.endswith("e") and w[-2] not in "aeiou":
        w = w[:-1]
    # final y after a consonant -> ি
    if len(w) > 2 and w.endswith("y") and w[-2] not in "aeiou":
        w = w[:-1] + "\u0001"
    out = []
    i, n = 0, len(w)
    prev_cons = False
    while i < n:
        hit = None
        for dg, rep in DIG:
            if w.startswith(dg, i):
                hit = (dg, rep); break
        if hit:
            dg, rep = hit
            is_vowelish = rep and rep[-1] in "াইউেওঅিা"
            if prev_cons and (rep[0] in "ািুেো" or rep in ("ু","ি","ে","ো","াই","াউ","েই","ুই","িয়া","িও")):
                pass
            out.append(rep)
            prev_cons = rep[-1] not in "ািুেোঅআইঈউঊএঐওঔ"
            i += len(dg)
            continue
        ch = w[i]
        if ch == "\u0001":
            out.append("ি"); prev_cons = False; i += 1; continue
        if ch == "c":
            nxt = w[i + 1] if i + 1 < n else ""
            c = "স" if nxt in "eiy" else "ক"
            if prev_cons:
                out.append("্")
            out.append(c); prev_cons = True; i += 1; continue
        if ch in VOW:
            v = VOW[ch]
            if ch == "u":
                rest = w[i + 1:]
                if re.match(r"[^aeiou]{2,}", rest) or (len(rest) == 1 and rest not in "aeiou"):
                    v = "া"
            if prev_cons:
                out[-1] = out[-1] + v
            else:
                out.append(VOW_I[ch] if v not in "া" else "আ" if ch == "a" else VOW_I[ch])
            prev_cons = False
        elif ch in CONS:
            c = CONS[ch]
            if prev_cons:
                out.append("্")
            out.append(c)
            prev_cons = True
        elif ch in "0123456789":
            out.append(ch); prev_cons = False
        elif ch in "-/'":
            out.append(ch); prev_cons = False
        i += 1
    s = "".join(out)
    return s

def rule_translit(word: str) -> str:
    if not word or not re.search(r"[A-Za-z]", word):
        return word
    core = word
    suf = ""
    low = core.lower()
    for s_, rep in SUFFIX:
        if low.endswith(s_) and len(low) > len(s_) + 2:
            core = core[: len(core) - len(s_)]
            suf = rep
            break
    body = _one_word(core).rstrip("্")
    return (body + suf) or word

PROTECT_LOWER = {p.lower() for p in PROTECT_PHRASES}

def replace_tokens(text: str, apply_rule=True):
    holds = []
    def hold(m):
        holds.append(m.group(0)); return f"\x00{len(holds)-1}\x00"
    t = PROTECT_RE.sub(hold, text)
    for phrase in sorted(PROTECT_PHRASES, key=len, reverse=True):
        t = re.sub(re.escape(phrase), hold, t, flags=re.IGNORECASE)
    def repl(m):
        tok = m.group(0)
        trail = ""
        core = tok
        while core and core[-1] in "-'":
            trail = core[-1] + trail; core = core[:-1]
        low = core.lower()
        if low in MAP:
            return MAP[low] + trail
        if low in PROTECT_LOWER or core in PROTECT_PHRASES:
            return tok
        if re.fullmatch(r"[A-Z]{2,}", core) and len(core) <= 5:
            # unknown acronym: spell letters in Bangla
            letters = {"a":"এ","b":"বি","c":"সি","d":"ডি","e":"ই","f":"এফ","g":"জি","h":"এইচ","i":"আই","j":"জে","k":"কে","l":"এল","m":"এম","n":"এন","o":"ও","p":"পি","q":"কিউ","r":"আর","s":"এস","t":"টি","u":"ইউ","v":"ভি","w":"ডব্লিউ","x":"এক্স","y":"ওয়াই","z":"জেড"}
            return "".join(letters.get(c.lower(), c) for c in core) + trail
        if apply_rule:
            return rule_translit(core) + trail
        return tok
    t = re.sub(r"[A-Za-z][A-Za-z0-9'’+./&#-]*", repl, t)
    def unhold(m):
        return holds[int(m.group(1))]
    t = re.sub(r"\x00(\d+)\x00", unhold, t)
    return t

if __name__ == "__main__":
    samples = ["Kubernetes", "Prestashop", "Django", "Flutter", "Zoho", "Talabat", "Fintech", "SaaS", "Zendesk"]
    for s in samples:
        print(s, "->", replace_tokens(s))


def is_protected(token: str) -> bool:
    t = token.strip(".,;:()[]{}\"'").lower()
    if not t:
        return False
    if t in PROTECT_LOWER:
        return True
    return any(t == p or t.startswith(p) or t.endswith(p) for p in PROTECT_LOWER)
