import assert from "node:assert/strict";
import {readFileSync,readdirSync,existsSync} from "node:fs";
import {join} from "node:path";
import {execFileSync} from "node:child_process";
const files=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?files(join(dir,entry.name)):[join(dir,entry.name)]);
assert.equal(existsSync('dist/_motion'),false,'Local scene routes leaked into production');
for(const file of files('dist')){
 if(/\.(html|js|json)$/.test(file))assert.doesNotMatch(readFileSync(file,'utf8'),/DEMO-FAMILY-041|DEMO-EVENT-073|DEMO-001|john\.watson@example\.com|maya\.bennett@example\.com|emma\.carter@example\.com|_motion\/scenes|motion\/pool-fixtures/,'Scene fixtures or contact details leaked into production markup/scripts');
}
const stories={ 'pool-yetis':'pool-yetis', 'first-achievers-childcare':'first-achievers', 'the-warehouse-by-black-creek':'warehouse', 'wabi-blobi':'wabi-blobi', 'eden-elevations-3':'eden-elevations-3' };
for(const [slug,asset] of Object.entries(stories)){
 const html=readFileSync(`dist/customer-stories/${slug}/index.html`,'utf8');
 assert.equal((html.match(/<figure[^>]*\bdata-story-showcase(?:[=\s>])/g)??[]).length,1,`Missing public showcase: ${slug}`);
 assert.match(html,/data-desktop="[^"]+-desktop\.[^"]+\.mp4"/);
 assert.match(html,/data-mobile="[^"]+-mobile\.[^"]+\.mp4"/);
 assert.doesNotMatch(html,/Local motion prototype|noindex, nofollow, noarchive/);
 for(const format of ['desktop','mobile']){
  const probe=JSON.parse(execFileSync('ffprobe',['-v','quiet','-show_format','-show_streams','-of','json',`src/assets/customer-stories/motion/${asset}-${format}.mp4`],{encoding:'utf8'}));
  assert.equal(Number(probe.format.duration),slug==='wabi-blobi'?15:10);assert.equal(probe.streams.length,1);
  const stream=probe.streams[0];assert.equal(stream.codec_name,'h264');assert.equal(stream.r_frame_rate,'30/1');
  assert.equal(stream.width,format==='desktop'?1280:720);assert.equal(stream.height,format==='desktop'?720:900);
  assert.ok(Number(probe.format.size)<(format==='desktop'?4:2)*1024*1024);
 }
}
console.log('PASS: five approved public showcases, ten silent 10/15-second exports; local scene routes and fictional fixture code remain outside production.');
