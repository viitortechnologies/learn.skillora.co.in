import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "db.json");
if (!fs.existsSync(dbPath)) process.exit(0);
const db = JSON.parse(fs.readFileSync(dbPath, "utf8"));

for (const course of db.courses || []) {
  if (typeof course.thumbnail === "string") course.thumbnail = course.thumbnail.replace(/\.svg$/i, ".webp");
  if (typeof course.banner === "string") course.banner = course.banner.replace(/\.svg$/i, ".webp");
}

const ebookCovers = {
  "eb-1": "/ebooks/devops.webp",
  "eb-2": "/ebooks/java.webp",
  "eb-3": "/ebooks/python.webp",
};
for (const book of db.ebooks || []) {
  book.cover = ebookCovers[book.id] || book.cover || "/ebooks/devops.webp";
}

const blogCovers = {
  "non-it-to-devops": "/banners/devsecops.webp",
  "why-live-classes-beat-recordings": "/banners/java.webp",
  "hitech-city-workshops": "/banners/workshop.webp",
};
for (const post of db.blogs || []) {
  post.cover = blogCovers[post.slug] || post.cover || "/banners/workshop.webp";
}

const photos = {
  t1: "/avatars/sridhar.webp",
  t2: "/avatars/shiva.webp",
  t3: "/avatars/eshwari.webp",
  t4: "/avatars/vara.webp",
};
for (const item of db.testimonials || []) {
  item.photo = photos[item.id] || item.photo || "/avatars/sridhar.webp";
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log("updated data/db.json image paths");
