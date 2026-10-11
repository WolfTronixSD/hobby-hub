// Sanity checks for Hobby Hub. Run: node scripts/check_site.mjs
// Fails (exit 1) on broken data so a bad edit never reaches the live site.
import { readFileSync } from "node:fs";

const read = (f) => readFileSync(new URL("../" + f, import.meta.url), "utf8");
const errors = [];
const fail = (msg) => errors.push(msg);

const load = (file, names) => new Function(read(file) + `\nreturn { ${names} };`)();
const { APP_VERSION, CHANGELOG } = load("version.js", "APP_VERSION, CHANGELOG");
const { HOBBIES } = load("data.js", "HOBBIES");

// Version is consistent everywhere
if (CHANGELOG[0].version !== APP_VERSION) fail(`CHANGELOG top is ${CHANGELOG[0].version}, APP_VERSION is ${APP_VERSION}`);
const html = read("index.html");
const busts = [...html.matchAll(/\?v=([\d.]+)/g)].map((m) => m[1]);
if (busts.length < 4 || busts.some((v) => v !== APP_VERSION)) fail(`index.html ?v= params ${busts.join(",")} should all be ${APP_VERSION}`);
if (!read("CHANGELOG.md").includes(APP_VERSION)) fail(`CHANGELOG.md has no entry for ${APP_VERSION}`);
if (!read("sw.js").includes(`hobby-hub-${APP_VERSION}`)) fail(`sw.js CACHE name should be hobby-hub-${APP_VERSION}`);

// Hobby data is complete
const ids = new Set();
const leaves = [];
const checkUrl = (where, url) => { if (!/^https:\/\/\S+$/.test(url || "")) fail(`${where}: bad URL ${url}`); };
const checkLeaf = (h, path) => {
  for (const k of ["id", "name", "icon"]) if (!h[k]) fail(`${path}: missing ${k}`);
  for (const k of ["podcasts", "youtube", "newsSources"]) {
    if (!Array.isArray(h[k]) || !h[k].length) { fail(`${path}: ${k} is empty`); continue; }
    h[k].forEach((x, i) => { if (!x.name) fail(`${path}.${k}[${i}]: missing name`); checkUrl(`${path}.${k}[${i}]`, x.url); });
  }
  leaves.push(h.id);
};
for (const h of HOBBIES) {
  for (const x of [h, ...(h.subs || [])]) {
    if (ids.has(x.id)) fail(`duplicate id ${x.id}`);
    ids.add(x.id);
  }
  if (!h.accent) fail(`${h.id}: missing accent`);
  if (h.subs) h.subs.forEach((s) => checkLeaf(s, `${h.id}/${s.id}`));
  else checkLeaf(h, h.id);
}

// Every page has a news feed configured
const feeds = read("scripts/fetch_news.py");
for (const id of leaves) if (!feeds.includes(`"${id}":`)) fail(`scripts/fetch_news.py has no feeds for "${id}"`);

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n  ` + errors.join("\n  "));
  process.exit(1);
}
console.log(`✓ v${APP_VERSION}: ${HOBBIES.length} hobbies, ${leaves.length} pages, all checks passed`);
