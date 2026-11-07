// Consent, media and capture isolation checks for pending client showcases.
import assert from 'node:assert/strict';
import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {join} from 'node:path';
import {draftMotion} from '../src/drafts/motion/draft-config.mjs';
const root='src/drafts/case-studies/media/motion';
const hash=file=>createHash('sha256').update(readFileSync(file)).digest('hex');
for(const [file,expected] of Object.entries(JSON.parse(readFileSync('scripts/fixtures/approved-motion-sha256.json','utf8'))))assert.equal(hash(file),expected,`Approved public showcase changed: ${file}`);
const allFiles=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?allFiles(join(dir,e.name)):[join(dir,e.name)]);
const productionFiles=allFiles('dist');
const privateHashes=new Set(allFiles(root).map(hash));
for(const file of productionFiles){
 assert.ok(!privateHashes.has(hash(file)),`Pending asset leaked into normal output: ${file}`);
 if(/\.(html|js|json)$/.test(file))assert.doesNotMatch(readFileSync(file,'utf8'),/DEMO-GUIDE-027|john\.watson@example\.com|_motion\/draft-scenes|DedDWqdin_P|Dd7CnuaDBWy/);
}
assert.equal(existsSync('dist/_motion'),false);
const publicRegistry=readFileSync('src/data/customer-stories/showcases.ts','utf8');assert.doesNotMatch(publicRegistry,/drafts|edencare/);
for(const [slug,config] of Object.entries(draftMotion).filter(([,config])=>!config.approved)){
 const html=readFileSync(`outputs/case-study-review/_review/case-studies/${slug}/index.html`,'utf8');
 assert.match(html,/noindex, nofollow, noarchive, nosnippet/);assert.match(html,/Client consent pending/);
 assert.equal((html.match(/<figure[^>]*data-story-showcase/g)??[]).length,1);
 assert.match(html,/Proposed client quote/i);assert.doesNotMatch(html,/<figcaption>\s*<div><strong>[^<]+<\/strong><p>/,'Unrequested explanatory showcase caption');
 for(const format of ['desktop','mobile']){
  const file=`${root}/${slug}-${format}.mp4`,probe=JSON.parse(execFileSync('ffprobe',['-v','quiet','-show_streams','-show_format','-of','json',file],{encoding:'utf8'}));
  assert.equal(probe.streams.length,1);const stream=probe.streams[0];assert.equal(stream.codec_name,'h264');assert.equal(stream.r_frame_rate,'30/1');assert.equal(Number(probe.format.duration),config.duration);assert.equal(stream.width,format==='desktop'?1280:720);assert.equal(stream.height,format==='desktop'?720:900);assert.ok(Number(probe.format.size)<(format==='desktop'?4:2)*1024*1024);
  const media=html.match(new RegExp(`data-${format}="([^"]+)"`))?.[1];assert.ok(media);assert.ok(existsSync(`outputs/case-study-review${media}`));
 }
 for(const [scene,clip] of Object.entries(config.clips)){
  const p=JSON.parse(execFileSync('ffprobe',['-v','quiet','-show_format','-show_streams','-of','json',join(root,clip.file)],{encoding:'utf8'}));assert.ok(p.streams.some(s=>s.codec_type==='video'));assert.ok(clip.start<Number(p.format.duration));
 }
}
for(const name of ['wabi-reel-DedDWqdin_P-source.mp4','wabi-reel-Dd7CnuaDBWy-source.mp4']){
 const p=JSON.parse(execFileSync('ffprobe',['-v','quiet','-show_streams','-of','json',join(root,name)],{encoding:'utf8'}));assert.equal(p.streams.length,1);assert.equal(p.streams[0].codec_type,'video');
 // Source clips remain build inputs; only composed exports should ship even in review builds.
 const clipHash=hash(join(root,name));assert.ok(!allFiles('outputs/case-study-review').some(file=>hash(file)===clipHash),'Raw source Reel shipped in the review build');
}
const stage=readFileSync('src/drafts/motion/draft-scenes.astro','utf8');assert.match(stage,/connect-src 'none'/);assert.match(stage,/form-action 'none'/);assert.match(stage,/script-src 'none'/);assert.doesNotMatch(stage,/<form\b|<script\b|fetch\(|https?:\/\//);
for(const scene of [stage,readFileSync('src/drafts/motion/draft-stages.css','utf8'),readFileSync('src/drafts/motion/draft-fixtures.ts','utf8')])assert.doesNotMatch(scene,/metricool|upgrade|higher plan|heatmap|blogId|userId|subscribers|likes/i);
console.log('PASS: one pending showcase; two silent 10-second exports; clean Reel sources; raw clips and draft scenes excluded; approved public media matches the integrity fixture.');
