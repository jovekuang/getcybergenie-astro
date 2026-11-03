import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const review = "outputs/case-study-review";
const production = "dist";
// Only these clients have publication approval, confirmed by the owner on November 3, 2026.
const approved = ["first-achievers-childcare", "the-warehouse-by-black-creek"];
const pending = ["edencare-360", "eden-elevations-3", "wabi-blobi", "pool-yetis"];
const studySource = readFileSync("src/drafts/case-studies/studies.ts", "utf8");
const slugs = [...studySource.matchAll(/(?:slug|"slug"):\s*"([^"]+)"/g)].map(match => match[1]);
assert.deepEqual([...slugs].sort(), [...pending].sort(), "Pending draft list changed without updating the consent boundary");
const privateTitles = [...studySource.matchAll(/^ {4}(?:title|"title"):\s*"([^"]+)"/gm)].map(match => match[1]);
for (const route of ["_review/case-studies", ...slugs.map(slug => `_review/case-studies/${slug}`)]) {
  const file = join(review, route, "index.html");
  assert.ok(existsSync(file), `Build the review first: ${file}`);
  const html = readFileSync(file, "utf8");
  assert.match(html, /name="robots" content="noindex, nofollow, noarchive, nosnippet"/);
  assert.match(html, /Client consent pending/);
  assert.equal(existsSync(join(production, route, "index.html")), false, `${route} leaked into dist`);
}
assert.equal(existsSync(join(production, "_review")), false, "Review directory leaked into dist");
const publicRoutes = ["customer-stories", ...approved.map(slug => `customer-stories/${slug}`)];
assert.deepEqual(readdirSync(join(production, "customer-stories"), { withFileTypes: true }).filter(entry => entry.isDirectory()).map(entry => entry.name).sort(), [...approved].sort());
for (const directory of [review, production]) {
  const sitemap = readFileSync(join(directory, "sitemap.xml"), "utf8");
  assert.doesNotMatch(sitemap, /_review|case-studies/);
  for (const route of publicRoutes) {
    const html = readFileSync(join(directory, route, "index.html"), "utf8");
    assert.doesNotMatch(html, /name="robots" content="[^"]*noindex/);
    assert.match(html, new RegExp(`<link rel="canonical" href="https://getcybergenie.com/${route}/"`));
    assert.doesNotMatch(html, /Proposed client quote|Awaiting .{0,20}approval|Client consent pending|Draft for review|_review\/case-studies/);
    assert.ok(sitemap.includes(`https://getcybergenie.com/${route}/`), `Approved route missing from sitemap: ${route}`);
    if (route !== "customer-stories") {
      assert.equal((html.match(/data-quote-approval="approved"/g) ?? []).length, 3, `Approved quotes missing: ${route}`);
      assert.equal((html.match(/<h1>/g) ?? []).length, 1);
      assert.match(html, /"@type":"Article"/);
    }
  }
  const redirects = readFileSync(join(directory, "_redirects"), "utf8");
  for (const slug of approved) {
    assert.ok(!existsSync(join(directory, `_review/case-studies/${slug}/index.html`)), `Published story still built as a draft: ${slug}`);
    assert.ok(redirects.includes(`/_review/case-studies/${slug}/ https://getcybergenie.com/customer-stories/${slug}/ 301`));
  }
}
for (const slug of approved) {
  const source = readFileSync(`src/data/customer-stories/${slug}.ts`, "utf8");
  assert.match(source, /consent: "approved"/);
  assert.match(source, /"approval": "approved"/);
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
  assert.ok(!privateMediaHashes.has(digest(file)), `Unapproved media leaked into dist: ${file}`);
  if (file.endsWith(".html")) {
    const html = readFileSync(file, "utf8");
    for (const title of privateTitles) assert.ok(!html.includes(title), `Unapproved title leaked into ${file}`);
    assert.doesNotMatch(html, /_review\/case-studies/, `Draft link leaked into ${file}`);
    for (const slug of pending) assert.ok(!html.includes(`/customer-stories/${slug}/`), `Unapproved public story linked: ${file}`);
  }
}
const home = readFileSync(join(production, "index.html"), "utf8");
assert.match(home, /id="customer-stories-title"/);
for (const slug of approved) assert.ok(home.includes(`/customer-stories/${slug}/`));
console.log("Passed: exactly two approved public stories, indexable canonical routes, approved quotes, sitemap and homepage inclusion; four noindex review drafts and their media remain outside production.");
