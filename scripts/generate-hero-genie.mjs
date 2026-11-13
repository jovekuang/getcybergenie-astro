import { readFile } from "node:fs/promises";
import sharp from "sharp";

// Animate the approved artwork as a unit, with the glints on a separate layer.
const mark = await readFile(new URL("../public/brand-mark.svg", import.meta.url), "utf8");
const viewBox = mark.match(/viewBox="([^"]+)"/)?.[1];
const paths = mark.match(/<path\b[\s\S]*?(?=<\/svg>)/)?.[0];
if (!viewBox || !paths) throw new Error("Could not read the approved Genie artwork");

const width = 344;
const height = 380;
const frameCount = 66;
const delay = 60;
const output = new URL("../public/branding/", import.meta.url);

function glint(x, y, radius, color) {
  return `<path fill="${color}" d="M ${x} ${y - radius} Q ${x + 1} ${y - 1} ${x + radius} ${y}
    Q ${x + 1} ${y + 1} ${x} ${y + radius} Q ${x - 1} ${y + 1} ${x - radius} ${y}
    Q ${x - 1} ${y - 1} ${x} ${y - radius} Z"/>`;
}

function frame(index) {
  const phase = index / frameCount;
  const rise = 0.5 - 0.5 * Math.cos(phase * 2 * Math.PI);
  const sparkles = [
    { x: 296, y: 109, radius: 12, start: .24, color: "#398a73" },
    { x: 320, y: 138, radius: 6, start: .30, color: "#64aa91" },
    { x: 285, y: 88, radius: 5, start: .33, color: "#77b49d" },
  ].map(({ x, y, radius, start, color }) => {
    const progress = (phase - start) / .31;
    if (progress <= 0 || progress >= 1) return "";
    const size = radius * Math.sin(Math.PI * progress);
    return size < 1.5 ? "" : glint(x + progress * 3, y - progress * 13, size, color);
  }).join("");

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <g transform="translate(${rise * 3} ${-rise * 12}) rotate(${-3 + rise * 3} 172 190)">
      <svg x="56" y="35" width="222" height="317" viewBox="${viewBox}" fill="#182823">${paths}</svg>
    </g>
    ${sparkles}
  </svg>`);
}

await sharp(frame(0)).png().toFile(new URL("genie-hero-still.png", output).pathname);

const frames = [];
for (let index = 0; index < frameCount; index++) {
  frames.push(await sharp(frame(index)).ensureAlpha().raw().toBuffer());
}

await sharp(Buffer.concat(frames), {
  raw: { width, height: height * frameCount, channels: 4, pageHeight: height },
}).gif({ loop: 0, delay: Array(frameCount).fill(delay), dither: 0, colours: 32 })
  .toFile(new URL("genie-hero.gif", output).pathname);
