import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const review = "outputs/case-study-review";
const production = "dist";
const studySource = readFileSync("src/drafts/case-studies/studies.ts", "utf8");
const slugs = [...studySource.matchAll(/(?:slug|"slug"):\s*"([^"]+)"/g)].map(match => match[1]);
assert.ok(slugs.length > 0, "No draft slugs found");
assert.equal(new Set(slugs).size, slugs.length, "Duplicate draft slugs");
const privateTitles = [...studySource.matchAll(/^ {4}(?:title|"title"):\s*"([^"]+)"/gm)].map(match => match[1]);
const routes = ["_review/case-studies", ...slugs.map(slug => `_review/case-studies/${slug}`)];
for (const route of routes) {
  const file = join(review, route, "index.html");
  assert.ok(existsSync(file), `Build the review first: ${file}`);
  const html = readFileSync(file, "utf8");
  assert.match(html, /name="robots" content="noindex, nofollow, noarchive, nosnippet"/);
  assert.match(html, /Client consent pending/);
  assert.equal(existsSync(join(production, route, "index.html")), false, `${route} leaked into dist`);
}
assert.equal(existsSync(join(production, "_review")), false, "Review directory leaked into dist");
for (const directory of [review, production]) {
  assert.doesNotMatch(readFileSync(join(directory, "sitemap.xml"), "utf8"), /_review|case-studies/);
}
function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}
const digest = path => createHash("sha256").update(readFileSync(path)).digest("hex");
const privateMediaHashes = new Set(files("src/drafts/case-studies/media").map(digest));
for (const file of files(production)) {
  assert.ok(!privateMediaHashes.has(digest(file)), `Private media leaked into dist: ${file}`);
  if (file.endsWith(".html")) {
    const productionHtml = readFileSync(file, "utf8");
    for (const title of privateTitles) assert.ok(!productionHtml.includes(title), `Draft title leaked into ${file}`);
    assert.doesNotMatch(productionHtml, /_review\/case-studies|Her vision\. Our team\.|A memorable entrance\./, `Draft content/link leaked into ${file}`);
  }
}
console.log("Passed: all noindex draft pages, sitemap exclusion, no production draft routes/content/links, and no draft media in dist.");
