// Local renderer for these three storyboards. Approved exports render to scratch for review.
import {execFileSync} from 'node:child_process';
import {mkdirSync,readFileSync,statSync,renameSync,writeFileSync} from 'node:fs';
import {resolve,join} from 'node:path';
import sharp from 'sharp';
import {draftMotion} from '../src/drafts/motion/draft-config.mjs';
const story=process.argv.find(a=>a.startsWith('--story='))?.split('=')[1];
const config=draftMotion[story];if(!config)throw Error('Unknown draft story');
const captures=resolve(`outputs/motion/captures/${story}`),scratch=resolve(`outputs/motion/render/${story}`),sourceMedia=resolve('src/drafts/case-studies/media/motion');
const destination=config.approved?join(scratch,'exports'):sourceMedia;
mkdirSync(scratch,{recursive:true});mkdirSync(destination,{recursive:true});
const run=args=>execFileSync('ffmpeg',['-y','-hide_banner','-loglevel','error','-filter_complex_threads','1',...args],{stdio:'inherit'});
for(const format of (process.argv.includes('--mobile-only')?['mobile']:['desktop','mobile'])){
 const [width,height]=format==='desktop'?[1280,720]:[720,900];
 const sceneFiles=[];const durations=config.scenes.map((_,i)=>i===3?config.duration-config.starts[i]+.3:config.starts[i+1]-config.starts[i]+.6);
 for(let i=0;i<config.scenes.length;i++){
  const scene=config.scenes[i],plate=join(captures,`${format}-${scene}.png`),file=join(scratch,`${format}-${scene}.mp4`),duration=durations[i];
  const image=await sharp(plate).metadata();if(image.width!==width||image.height!==height)throw Error(`Bad capture dimensions ${plate}`);
  const input=['-loop','1','-framerate','30','-i',plate];let filter;
  if(config.clips[scene]){
   const clip=config.clips[scene];const geometry=JSON.parse(readFileSync(join(captures,`${format}-${scene}.json`),'utf8')).video;
   if(!geometry)throw Error(`Missing captured video geometry: ${scene}`);
   const {x,y}=geometry; const w=Math.floor(geometry.width/2)*2,h=Math.floor(geometry.height/2)*2;
   input.push('-ss',String(clip.start),'-i',join(sourceMedia,clip.file));
   const radius=scene.startsWith('reel-')?20:scene==='production'?11:0;
   let maskFilter='';
   if(radius){
    const mask=join(scratch,`${format}-${scene}-mask.png`);
    await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><path fill="white" d="M0 0H${w}V${h-radius}Q${w} ${h} ${w-radius} ${h}H${radius}Q0 ${h} 0 ${h-radius}Z"/></svg>`)).flatten({background:'#000'}).png().toFile(mask);
    input.push('-loop','1','-framerate','30','-i',mask);maskFilter='[clip][2:v]alphamerge[rounded];';
   }
   filter=`[0:v]trim=duration=${duration},setpts=PTS-STARTPTS,format=yuv420p[plate];[1:v]setpts=(PTS-STARTPTS)/${clip.speed},fps=30,scale=${w}:${h}:force_original_aspect_ratio=decrease:force_divisible_by=2,pad=${w}:${h}:(ow-iw)/2:(oh-ih)/2:color=0xf8f8f2,setsar=1,trim=duration=${duration},tpad=stop_mode=clone:stop_duration=${duration},format=yuv420p[clip];${maskFilter}[plate][${radius?'rounded':'clip'}]overlay=${x}:${y}:shortest=1,trim=duration=${duration},fps=30,format=yuv420p[out]`;
  }else{
   filter=`[0:v]scale=${width*2}:${height*2},zoompan=z='1+0.014*sin(PI*on/${Math.round(duration*30)})':x='iw/2-iw/zoom/2':y='ih/2-ih/zoom/2':d=1:s=${width}x${height}:fps=30,trim=duration=${duration},setpts=PTS-STARTPTS,format=yuv420p[out]`;
  }
  run([...input,'-filter_complex',filter,'-map','[out]','-an','-c:v','libx264','-preset','fast','-crf','17','-t',String(duration),file]);sceneFiles.push(file);
 }
 const inputs=sceneFiles.flatMap(f=>['-i',f]);
 const filter=[`[0:v]split=2[start][returnSource]`,`[start][1:v]xfade=transition=smoothleft:duration=0.6:offset=${config.starts[1]}[x1]`,`[x1][2:v]xfade=transition=fade:duration=0.6:offset=${config.starts[2]}[x2]`,`[x2][3:v]xfade=transition=smoothleft:duration=0.6:offset=${config.starts[3]}[x3]`,`[returnSource]trim=duration=0.6,setpts=PTS-STARTPTS[loop]`,`[x3][loop]xfade=transition=fade:duration=0.3:offset=${config.duration-.3},trim=duration=${config.duration},fps=30,format=yuv420p[out]`].join(';');
 const temp=join(scratch,`${story}-${format}.mp4`),target=join(destination,`${story}-${format}.mp4`);
 run([...inputs,'-filter_complex',filter,'-map','[out]','-an','-c:v','libx264','-preset','slow','-crf','22','-maxrate',format==='desktop'?'1500k':'850k','-bufsize','2000k','-movflags','+faststart','-t',String(config.duration),temp]);
 const p=JSON.parse(execFileSync('ffprobe',['-v','quiet','-show_format','-show_streams','-of','json',temp],{encoding:'utf8'}));const v=p.streams[0];
 if(p.streams.length!==1||v.codec_type!=='video'||v.codec_name!=='h264'||Number(p.format.duration)!==config.duration||v.width!==width||v.height!==height||v.r_frame_rate!=='30/1'||statSync(temp).size>(format==='desktop'?4:2)*1024*1024)throw Error('Draft media contract failed');
 renameSync(temp,target);await sharp(join(captures,`${format}-${config.scenes[0]}.png`)).webp({quality:85}).toFile(join(destination,`${story}-${format}-poster.webp`));
 console.log(`${story}/${format}: ${config.duration}s, ${width}×${height}, silent H.264, ${(statSync(target).size/1024/1024).toFixed(2)} MB`);
}
writeFileSync(join(scratch,'manifest.json'),JSON.stringify({story,...config,transition:.6,loopFade:.3,approval:config.approved?'Published story; this render is a local candidate only.':'Client consent pending. Local owner review only.',source:'CUA captures of disconnected local fictional scenes; original client-owned video overlays.'},null,2)+'\n');
