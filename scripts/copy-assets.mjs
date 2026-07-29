// Run: npm run copy-assets  (must be run from project root)
import { readdir, stat, mkdir, copyFile } from "node:fs/promises";
import { join, basename, resolve } from "node:path";

const ROOT = resolve(process.cwd());

async function main() {
  const brands = [
    { name: "SanGo",       src: "assets/Branding design /SanGo" },
    { name: "LOWKEY",      src: "assets/Branding design /LOWKEY" },
    { name: "Bonne Pooch", src: "assets/Branding design /bonne pooch" },
    { name: "Laura Leone", src: "assets/Branding design /Laura leone (PHOTOGRAPHER)" },
    { name: "Leticia Barreto", src: "assets/Branding design /Leticia Barreto (VET)" },
    { name: "Fernanda Vasques", src: "assets/Branding design /Fernanda Vasques (HandCraft)" },
    { name: "MehConnect",  src: "assets/Branding design /MehConnect" },
    { name: "Open Studios", src: "assets/Branding design /Open Studios" },
  ];

  console.log(`Copying assets from ${ROOT}/assets/ to public/images/projects/...\n`);
  let total = 0;

  for (const b of brands) {
    const srcDir = join(ROOT, b.src);
    const destDir = join(ROOT, "public/images/projects/branding-visual-experiments", b.name);

    // Get all files recursively
    let files = [];
    try {
      const entries = await readdir(srcDir, { recursive: true });
      for (const entry of entries) {
        if (typeof entry !== "string") continue;
        const parts = entry.split(".");
        const ext = parts[parts.length - 1]?.toLowerCase();
        if (!ext || !["png", "jpg", "jpeg", "gif", "webp"].includes(ext)) continue;

        const fullPath = join(srcDir, entry);
        try {
          const s = await stat(fullPath);
          if (!s.isFile()) continue;
          files.push({ src: fullPath, name: basename(entry) });
        } catch {}
      }
    } catch (e) {
      console.log(`  - ${b.name}: not found`);
      continue;
    }

    await mkdir(destDir, { recursive: true });

    for (const file of files) {
      try {
        await copyFile(file.src, join(destDir, file.name));
      } catch {}
    }

    console.log(`${files.length} images from ${b.name}`);
    total += files.length;
  }

  console.log(`\nTotal: ${total} images copied to public/images/projects/branding-visual-experiments/\n`);
}

main().catch(console.error);
