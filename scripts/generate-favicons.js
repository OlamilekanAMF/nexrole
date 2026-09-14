const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const svgLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="nexrole-bg" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1D4ED8" />
      <stop offset="50%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
    <linearGradient id="inner-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#93C5FD" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#1E40AF" stop-opacity="0.2" />
    </linearGradient>
  </defs>

  <!-- Squircle Emblem -->
  <rect x="24" y="24" width="464" height="464" rx="112" fill="url(#nexrole-bg)" />
  <rect x="24" y="24" width="464" height="464" rx="112" fill="none" stroke="url(#inner-stroke)" stroke-width="16" />

  <!-- Lucide Sparkles Star Emblem -->
  <g transform="translate(116, 116) scale(11.666)" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" fill="#FFFFFF" fill-opacity="0.2" />
    <path d="M20 2v4" />
    <path d="M22 4h-4" />
    <circle cx="4" cy="20" r="2" fill="#F59E0B" stroke="#F59E0B" />
  </g>
</svg>`;

async function run() {
  const publicDir = path.join(__dirname, "..", "public");
  const appDir = path.join(__dirname, "..", "app");

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  // 1. Write SVGs
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), svgLogo);
  fs.writeFileSync(path.join(publicDir, "icon.svg"), svgLogo);
  fs.writeFileSync(path.join(appDir, "icon.svg"), svgLogo);
  console.log("SVG favicons generated.");

  // 2. Generate PNGs using Sharp
  const buffer = Buffer.from(svgLogo);
  const p16 = await sharp(buffer).resize(16, 16).png().toBuffer();
  const p32 = await sharp(buffer).resize(32, 32).png().toBuffer();
  const p48 = await sharp(buffer).resize(48, 48).png().toBuffer();
  const p180 = await sharp(buffer).resize(180, 180).png().toBuffer();
  const p192 = await sharp(buffer).resize(192, 192).png().toBuffer();
  const p512 = await sharp(buffer).resize(512, 512).png().toBuffer();

  fs.writeFileSync(path.join(publicDir, "apple-touch-icon.png"), p180);
  fs.writeFileSync(path.join(publicDir, "icon-192.png"), p192);
  fs.writeFileSync(path.join(publicDir, "icon-512.png"), p512);
  fs.writeFileSync(path.join(publicDir, "favicon-32x32.png"), p32);
  fs.writeFileSync(path.join(publicDir, "favicon-16x16.png"), p16);

  // 3. Build Multi-Resolution ICO
  const images = [
    { width: 16, height: 16, buf: p16 },
    { width: 32, height: 32, buf: p32 },
    { width: 48, height: 48, buf: p48 }
  ];

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(images.length, 4); // Count

  let offset = 6 + (images.length * 16);
  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width, 0);
    entry.writeUInt8(img.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.buf.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += img.buf.length;
  }

  const icoBuf = Buffer.concat([header, ...dirEntries, ...images.map(i => i.buf)]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), icoBuf);

  // 4. Web Manifest
  const manifest = {
    name: "NexRole Global Executive Recruitment",
    short_name: "NexRole",
    description: "Premium Global Recruitment & Executive CV Agency",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAFC",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
  fs.writeFileSync(path.join(publicDir, "site.webmanifest"), JSON.stringify(manifest, null, 2));

  console.log("All favicon and manifest assets generated successfully!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
