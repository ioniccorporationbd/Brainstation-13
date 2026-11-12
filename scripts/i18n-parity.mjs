#!/usr/bin/env node
/**
 * i18n parity guard.
 *
 * Fails (exit 1) when a `t("...")` literal in the source tree has no Bangla
 * dictionary entry. A build with drifted dictionaries renders English in
 * Bangla mode on the server while a newer client bundle renders Bangla —
 * exactly the SSR/client hydration mismatch this guard prevents from shipping.
 *
 * Usage: node scripts/i18n-parity.mjs        (npm run verify:i18n)
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
const traverse = _traverse.default ?? _traverse;

const ROOT = process.cwd();
const SRC = join(ROOT, "src");
const DICT_DIR = join(SRC, "i18n/dictionaries/bn");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next") continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if ([".ts", ".tsx"].includes(extname(p))) out.push(p);
  }
  return out;
}

// 1) dictionary keys
const dictKeys = new Set();
for (const file of readdirSync(DICT_DIR).filter((f) => f.endsWith(".ts"))) {
  const src = readFileSync(join(DICT_DIR, file), "utf8");
  const re = /^\s*("(?:[^"\\]|\\.)*")\s*:/gm;
  let m;
  while ((m = re.exec(src))) {
    try {
      dictKeys.add(JSON.parse(m[1]));
    } catch {
      /* skip malformed line — tsc covers syntax */
    }
  }
}

// 2) literal t("...") keys
const usedKeys = new Map(); // key -> first file
const files = walk(SRC).filter((f) => !f.startsWith(DICT_DIR));
for (const file of files) {
  const code = readFileSync(file, "utf8");
  if (!code.includes("t(")) continue;
  let ast;
  try {
    ast = parse(code, {
      sourceType: "module",
      plugins: ["typescript", "jsx"],
      errorRecovery: true,
    });
  } catch {
    continue;
  }
  traverse(ast, {
    CallExpression(path) {
      const callee = path.node.callee;
      const isT =
        (callee.type === "Identifier" && callee.name === "t") ||
        (callee.type === "MemberExpression" &&
          callee.object.type === "Identifier" &&
          callee.object.name === "tFor");
      const arg = path.node.arguments[0];
      if (isT && arg && arg.type === "StringLiteral" && arg.value.trim()) {
        if (!usedKeys.has(arg.value)) usedKeys.set(arg.value, file);
      }
    },
  });
}

const missing = [...usedKeys.keys()].filter((k) => !dictKeys.has(k));
console.log(
  `[i18n] dictionary entries: ${dictKeys.size} | literal t() keys: ${usedKeys.size} | missing: ${missing.length}`,
);
if (missing.length) {
  console.error("[i18n] missing Bangla entries (first 40):");
  for (const k of missing.slice(0, 40)) {
    console.error(`  ${JSON.stringify(k)}  <- ${usedKeys.get(k).replace(ROOT + "/", "")}`);
  }
  process.exit(1);
}
console.log("[i18n] OK — every literal translation key has a Bangla entry.");
