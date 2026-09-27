// Deterministic sizing/format packaging only; the source artwork is unchanged.
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('.', import.meta.url));
const png = 'source/panda-seated-original.png';
const alpha = 'source/panda-seated-transparent.png';
const face = 'source/panda-face-original.png';
function convert(source, args, dest) {
  mkdirSync(path.dirname(path.join(root, dest)), { recursive: true });
  execFileSync('convert', [path.join(root, source), ...args, '-strip', path.join(root, dest)]);
}
for (const size of [64, 128, 256, 512, 1024]) {
  convert(alpha, ['-resize', `${size}x${size}`], `logo-${size}.png`);
}
for (const size of [16, 32, 48, 96]) {
  convert(face, ['-resize', `${size}x${size}`], `web/favicon-${size}x${size}.png`);
}
convert(face, ['-define', 'icon:auto-resize=256,128,64,48,32,16'], 'web/favicon.ico');
for (const size of [192, 512]) {
  convert(png, ['-resize', `${size}x${size}`, '-alpha', 'off'], `web/icon-${size}.png`);
}
convert(png, ['-resize', '180x180', '-alpha', 'off'], 'web/apple-touch-icon.png');
// Inset the full panda for circular and squircle launcher crops.
convert(png, ['-resize', '358x358', '-background', 'white', '-gravity', 'center', '-extent', '512x512', '-alpha', 'off'], 'web/maskable-512.png');
convert(png, ['-resize', '1024x1024', '-alpha', 'off'], 'app/app-icon-1024.png');
convert(png, ['-resize', '1024x1024', '-alpha', 'off'], 'app/ios/AppIcon.appiconset/AppIcon-1024.png');
writeFileSync(path.join(root, 'app/ios/AppIcon.appiconset/Contents.json'), JSON.stringify({
  images: [{ filename: 'AppIcon-1024.png', idiom: 'universal', platform: 'ios', size: '1024x1024' }],
  info: { author: 'xcode', version: 1 }
}, null, 2) + '\n');
for (const [density, size] of Object.entries({ mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 })) {
  convert(png, ['-resize', `${size}x${size}`, '-alpha', 'off'], `app/android/mipmap-${density}/ic_launcher.png`);
}
const files = [];
function walk(dir) {
  for (const e of readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(png|ico)$/.test(p)) files.push(p);
  }
}
walk('');
writeFileSync(path.join(root, 'SHA256SUMS'), files.sort().map(p =>
  `${createHash('sha256').update(readFileSync(path.join(root, p))).digest('hex')}  ${p}`
).join('\n') + '\n');
console.log(`Packaged ${files.length} panda assets; source masters were not edited.`);
