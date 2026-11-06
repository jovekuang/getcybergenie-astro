// Local-only media assembly. Input PNGs are captured from isolated fictional scenes through CUA.
import { execFileSync } from "node:child_process";
import { mkdirSync, existsSync, statSync, writeFileSync, renameSync } from "node:fs";
import { resolve, join } from "node:path";
import sharp from "sharp";
const story = process.argv.find(arg => arg.startsWith("--story="))?.split("=")[1] ?? "pool-yetis";
if (["eden-elevations-3", "edencare-360", "wabi-blobi"].includes(story)) { await import("./render-draft-story-motion.mjs"); process.exit(0); }
if (!["pool-yetis", "first-achievers", "warehouse"].includes(story)) throw new Error("Unknown approved motion story");
const captures = resolve(process.argv.slice(2).find(arg => !arg.startsWith("--")) ?? `outputs/motion/captures/${story}`);
const destination = resolve("src/assets/customer-stories/motion");
const scratch = resolve(`outputs/motion/render/${story}`);
mkdirSync(destination, { recursive: true }); mkdirSync(scratch, { recursive: true });
const durations = [3.1, 3.1, 3.1, 2.8]; // Scene changes every 2.5s; preserve .6s transitions and the .3s loop fade.
const scenes = story === "pool-yetis" ? ["overview", "detail", "sms", "followup"] : story === "first-achievers" ? ["website", "inquiry", "calendar", "followup"] : ["website", "inquiry", "hold", "calendar"];
for (const format of (process.argv.includes("--mobile-only") ? ["mobile"] : ["desktop", "mobile"])) {
  const [width, height] = format === "desktop" ? [1280,720] : [720,900];
  const inputs = [];
  for (const scene of (story === "pool-yetis" ? [...scenes, "sms-pending"] : scenes)) {
    const file = join(captures, `${format}-${scene}.png`);
    if (!existsSync(file)) throw new Error(`Missing clean CUA capture: ${file}`);
    const info = await sharp(file).metadata();
    if (info.width !== width || info.height !== height) throw new Error(`Wrong capture size: ${file}`);
    inputs.push("-loop", "1", "-framerate", "30", "-i", file);
  }
  if (story === "pool-yetis") {
  const dot = join(scratch, "signal-dot.png");
  await sharp(Buffer.from('<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" fill="#effcf9" fill-opacity=".85"/><circle cx="9" cy="9" r="4.5" fill="#158c78"/></svg>')).png().toFile(dot);
  inputs.push("-loop", "1", "-framerate", "30", "-i", dot);
  }
  const filters = [];
  // Subtle camera movement within clean static compositions keeps type and real UI legible.
  for (let i=0;i<4;i++) {
    if (story === "pool-yetis" && i === 2) continue;
    filters.push(`[${i}:v]scale=${width*2}:${height*2},zoompan=z='1+0.014*sin(PI*on/${Math.round(durations[i]*30)})':x='iw/2-iw/zoom/2':y='ih/2-ih/zoom/2':d=1:s=${width}x${height}:fps=30,trim=duration=${durations[i]},setpts=PTS-STARTPTS,format=yuv420p[v${i}]`);
  }
  if (story === "pool-yetis") {
  // The notification and contact appear only after a signal reaches the shared workspace.
  filters.push(`[4:v]trim=duration=3.1,setpts=PTS-STARTPTS,format=yuv420p[empty]`);
  filters.push(`[2:v]trim=duration=3.1,setpts=PTS-STARTPTS,format=yuv420p[full]`);
  filters.push(`[empty][full]blend=all_expr='A*(1-min(max((T-1.2)/0.35,0),1))+B*min(max((T-1.2)/0.35,0),1)'[graph]`);
  const coords = format === "desktop" ? { a:590,b:695,y:365,c:914,d:1022,z:365 } : { a:153,b:153,y:400,c:285,d:375,z:568 };
  const x=`if(lt(t,0.9),${coords.a}-9+(${coords.b-coords.a})*(t-0.2)/0.6,${coords.c}-9+(${coords.d-coords.c})*(t-1.0)/0.55)`;
  const y=format === "desktop" ? `if(lt(t,0.9),${coords.y-9},${coords.z-9})` : `if(lt(t,0.9),391+57*(t-0.2)/0.6,${coords.z-9})`;
  filters.push(`[graph][5:v]overlay=x='${x}':y='${y}':enable='between(t,0.2,0.8)+between(t,1.0,1.55)':shortest=1[v2]`);
  }
  filters.push("[v0][v1]xfade=transition=smoothleft:duration=0.6:offset=2.5[x1]");
  filters.push("[x1][v2]xfade=transition=fade:duration=0.6:offset=5.0[x2]");
  filters.push("[x2][v3]xfade=transition=smoothleft:duration=0.6:offset=7.5[x3]");
  // Return to the opening composition for a seamless, deliberate loop.
  filters.push(`[0:v]trim=duration=0.6,setpts=PTS-STARTPTS,format=yuv420p[loop]`);
  filters.push("[x3][loop]xfade=transition=fade:duration=0.3:offset=9.7,trim=duration=10,fps=30,format=yuv420p[out]");
  const publishedVideo = join(destination, `${story}-${format}.mp4`);
  const video = join(scratch, `${story}-${format}.mp4`);
  if (!(process.argv.includes("--reuse-render") && existsSync(video))) execFileSync("ffmpeg", ["-y", "-hide_banner", "-loglevel", "error", "-filter_complex_threads", "1", ...inputs, "-filter_complex", filters.join(";"), "-map", "[out]", "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "22", "-maxrate", format === "desktop" ? "1500k" : "850k", "-bufsize", "2000k", "-movflags", "+faststart", "-t", "10", video], { stdio:"inherit" });
  await sharp(join(captures, `${format}-${scenes[0]}.png`)).webp({quality:85}).toFile(join(destination, `${story}-${format}-poster.webp`));
  const probe = JSON.parse(execFileSync("ffprobe", ["-v","quiet","-show_format","-show_streams","-of","json",video],{encoding:"utf8"}));
  const stream=probe.streams.find(stream=>stream.codec_type==="video");
  if(probe.streams.some(stream=>stream.codec_type==="audio") || Number(probe.format.duration)!==10 || stream.width!==width || stream.height!==height || stream.r_frame_rate!=="30/1") throw new Error("Media contract failed");
  const limit = (format === "desktop" ? 4 : 2)*1024*1024;
  if(statSync(video).size>limit) throw new Error(`Video exceeds size budget: ${video}`);
  renameSync(video, publishedVideo);
  console.log(`${story}/${format}: 10s, ${width}×${height}, 30fps, silent H.264, ${(statSync(publishedVideo).size/1024/1024).toFixed(2)} MB`);
}
writeFileSync(join(scratch,"manifest.json"),JSON.stringify({source:"Fictional local demo screens captured using the built-in browser",duration:10,story,scenes,approval:"Owner authorized deployment of the three approved stories"},null,2)+"\n");
