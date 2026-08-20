import fs from "fs";
import path from "path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");

const jobs = [
  { dir: "banners", width: 1600 },
  { dir: "thumbs", width: 900 },
  { dir: "ebooks", width: 800 },
  { dir: "products", width: 1200 },
  { dir: "avatars", width: 360 },
];

for (const job of jobs) {
  const folder = path.join(publicDir, job.dir);
  for (const file of fs.readdirSync(folder).filter((f) => f.endsWith(".png"))) {
    const input = path.join(folder, file);
    const output = path.join(folder, file.replace(/\.png$/i, ".webp"));
    await sharp(input)
      .resize({ width: job.width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(output);
    fs.unlinkSync(input);
    console.log(output);
  }
}
