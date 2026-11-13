import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const source = await readFile(new URL('../branding/source/cyber-genie-job-done.svg', import.meta.url), 'utf8');
const { info } = await sharp(Buffer.from(source)).trim().toBuffer({ resolveWithObject: true });
const pad = 28;
const x = Math.max(0, -info.trimOffsetLeft - pad), y = Math.max(0, -info.trimOffsetTop - pad);
const w = info.width + pad * 2, h = info.height + pad * 2;
const paths = source.match(/<path[\s\S]*<\/svg>/)[0].replace(/<\/svg>$/, '');
const mark = (color = '#182823') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x} ${y} ${w} ${h}" fill="currentColor" color="${color}"><title>Cyber Genie</title>${paths}</svg>`;
const write = (name, content) => writeFile(new URL(`../${name}`, import.meta.url), content);
await mkdir(new URL('../public/branding/', import.meta.url), { recursive: true });
await write('public/brand-mark.svg', mark());
await write('public/branding/genie-reversed.svg', mark('#ffffff'));
await sharp(Buffer.from(mark())).resize({ width: 1200 }).png().toFile(new URL('../public/branding/genie-transparent.png', import.meta.url).pathname);
await sharp(Buffer.from(mark('#ffffff'))).resize({ width: 1200 }).png().toFile(new URL('../public/branding/genie-reversed.png', import.meta.url).pathname);
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" rx="56" fill="#e7f5f0"/><svg x="26" y="18" width="204" height="220" viewBox="${x} ${y} ${w} ${h}" fill="#182823">${paths}</svg></svg>`;
await write('public/favicon.svg', icon);
const iconPng = await sharp(Buffer.from(icon)).resize(32).png().toBuffer();
await write('public/favicon-32.png', iconPng);
await sharp(Buffer.from(icon)).resize(180).png().toFile(new URL('../public/apple-touch-icon.png', import.meta.url).pathname);
await sharp(Buffer.from(icon)).resize(512).png().toFile(new URL('../public/branding/icon-512.png', import.meta.url).pathname);
const ico = Buffer.alloc(22); ico.writeUInt16LE(1, 2); ico.writeUInt16LE(1, 4); ico[6] = 32; ico[7] = 32; ico.writeUInt16LE(1, 10); ico.writeUInt16LE(32, 12); ico.writeUInt32LE(iconPng.length, 14); ico.writeUInt32LE(22, 18);
await write('public/favicon.ico', Buffer.concat([ico, iconPng]));
const wordmark = (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 130" color="${color}" fill="currentColor"><title>Cyber Genie</title><svg x="0" y="0" width="110" height="130" viewBox="${x} ${y} ${w} ${h}">${paths}</svg><text x="128" y="84" font-family="Manrope,Arial,sans-serif" font-weight="700" font-size="59" letter-spacing="-3">Cyber Genie</text></svg>`;
await write('public/brand-logo.svg', wordmark('#182823'));
await write('public/branding/wordmark-reversed.svg', wordmark('#ffffff'));
const cards = [
 ['default', ['Get the outcome,', 'not the software.'], 'More done. Less to manage.'],
 ['essential-website', ['Your website.', 'Taken care of.'], 'Essential Website · $300 billed annually'],
 ['evolving-website', ['Your web application.', 'Always improving.'], 'Evolving Web Application · $99/month'],
 ['technology-partner', ['Your tools, connected.', 'The work, handled.'], 'Technology Partner · $499/month'],
 ['customer-os', ['Your customers.', 'One connected place.'], 'Customer OS · Included with an active paid service'],
];
for (const [slug, lines, subtitle] of cards) {
 const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#fbfaf7"/><path d="M0 620H1200" stroke="#0f766e" stroke-width="20"/><circle cx="970" cy="310" r="180" fill="#e7f5f0"/><circle cx="970" cy="310" r="205" fill="none" stroke="#dde5df"/><svg x="840" y="140" width="250" height="330" viewBox="${x} ${y} ${w} ${h}" fill="#182823">${paths}</svg><g font-family="Arial,sans-serif" fill="#182823"><text x="66" y="88" font-size="29" font-weight="700">Cyber Genie</text><text x="66" y="253" font-size="62" font-weight="700" letter-spacing="-2">${lines[0]}</text><text x="66" y="330" font-size="62" font-weight="700" letter-spacing="-2">${lines[1]}</text><text x="66" y="407" font-size="23" fill="#57655f">${subtitle}</text><text x="66" y="553" font-size="20" fill="#0f766e">getcybergenie.com</text></g></svg>`;
 await write(`src/assets/social/og-${slug}.svg`, svg);
 await sharp(Buffer.from(svg)).png().toFile(new URL(`../public/og-${slug}.png`, import.meta.url).pathname);
}

const homeCard = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="paper" x1="0" y1="0" x2="1" y2="0.86" gradientUnits="objectBoundingBox">
      <stop stop-color="#e2f2e6"/>
      <stop offset=".52" stop-color="#f2f8ee"/>
      <stop offset=".78" stop-color="#fbfaf3"/>
      <stop offset="1" stop-color="#fbfaf3"/>
    </linearGradient>
    <radialGradient id="wash" cx=".55" cy=".48" r=".67">
      <stop stop-color="#9dd3b0" stop-opacity=".74"/>
      <stop offset=".46" stop-color="#a7dabb" stop-opacity=".43"/>
      <stop offset="1" stop-color="#dcf2e6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="flute" x1="0" y1="0" x2="176" y2="0" gradientUnits="userSpaceOnUse">
      <stop stop-color="#689b7e" stop-opacity=".13"/>
      <stop offset=".22" stop-color="#b0d6b8" stop-opacity=".12"/>
      <stop offset=".62" stop-color="#fff" stop-opacity="0"/>
      <stop offset=".94" stop-color="#fff" stop-opacity=".68"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".95"/>
    </linearGradient>
    <pattern id="flutes" width="176" height="630" patternUnits="userSpaceOnUse" patternTransform="rotate(32)">
      <rect width="176" height="630" fill="url(#flute)"/>
    </pattern>
    <linearGradient id="flute-fade">
      <stop stop-color="#fff" stop-opacity=".64"/>
      <stop offset=".43" stop-color="#fff" stop-opacity=".36"/>
      <stop offset=".64" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <mask id="texture"><rect width="1200" height="630" fill="url(#flute-fade)"/></mask>
    <filter id="soft-wash" x="-.25" y="-.3" width="1.5" height="1.6">
      <feGaussianBlur stdDeviation="28"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#paper)"/>
  <path d="M-40 552C-121 464 22 385 75 307C126 236 71 174 138 119C203 66 338 101 418 50C519-15 683 72 705 159C735 275 579 312 596 409C615 513 668 556 564 607C454 658 377 558 276 592C170 628 20 621-40 552Z" fill="url(#wash)" filter="url(#soft-wash)"/>
  <rect width="1200" height="630" fill="url(#flutes)" mask="url(#texture)"/>
  <svg x="785" y="86" width="324" height="456" viewBox="${x} ${y} ${w} ${h}" color="#182823" fill="currentColor">${paths}</svg>
  <svg x="65" y="53" width="34" height="48" viewBox="${x} ${y} ${w} ${h}" color="#182823" fill="currentColor">${paths}</svg>
  <g font-family="Arial, sans-serif">
    <text x="112" y="86" font-size="29" font-weight="700" letter-spacing="-1.05" fill="#182823">Cyber Genie</text>
    <path d="M321 301C404 290 522 290 604 292C612 292 612 297 605 300C530 310 405 311 321 306Z" fill="#99d7bf"/>
    <g fill="#182823" font-size="76" font-weight="700" letter-spacing="-3.8">
      <text x="63" y="287">Get the <tspan fill="#0f766e">outcome</tspan>,</text>
      <text x="63" y="371">not the software.</text>
    </g>
    <text x="67" y="436" font-size="24" font-weight="700" fill="#38564a">Built for busy small-business owners.</text>
    <text x="67" y="565" font-size="21" fill="#38564a">getcybergenie.com</text>
  </g>
</svg>`;
await write('src/assets/social/og-home.svg', homeCard);
await sharp(Buffer.from(homeCard)).png().toFile(new URL('../public/og-home.png', import.meta.url).pathname);

console.log(`Generated trimmed monochrome artwork, lockups, icons and ${cards.length + 1} social images; viewBox ${x} ${y} ${w} ${h}`);
