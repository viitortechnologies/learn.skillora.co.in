import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const items = [
  { file: "ai-ml", title: "AI / ML", sub: "Python · TensorFlow · Job-ready projects", c1: "#4C1D95", c2: "#06B6D4" },
  { file: "devsecops", title: "Multi Cloud DevSecOps", sub: "AWS · Azure · GCP · Terraform", c1: "#1E3A8A", c2: "#22D3EE" },
  { file: "java", title: "Java Full Stack + AI", sub: "Spring Boot · React · DSA", c1: "#5B21B6", c2: "#F59E0B" },
  { file: "web", title: "Full Stack Web", sub: "React · Node.js · MongoDB", c1: "#0F766E", c2: "#38BDF8" },
  { file: "python", title: "Python Full Stack", sub: "Django · React · PostgreSQL", c1: "#1D4ED8", c2: "#34D399" },
  { file: "data-science", title: "Data Science & ML", sub: "Analytics · TensorFlow · Power BI", c1: "#6D28D9", c2: "#FB7185" },
];

function banner({ title, sub, c1, c2 }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 700">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="700" fill="url(#g)"/>
  <circle cx="1320" cy="120" r="220" fill="rgba(255,255,255,0.08)"/>
  <circle cx="200" cy="620" r="180" fill="rgba(255,255,255,0.08)"/>
  <text x="90" y="250" fill="white" font-family="Georgia, serif" font-size="42">skillORA</text>
  <text x="90" y="370" fill="white" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="72" font-weight="800">${escapeXml(title)}</text>
  <text x="90" y="440" fill="rgba(255,255,255,0.9)" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="32">${escapeXml(sub)}</text>
  <rect x="90" y="500" rx="28" width="280" height="64" fill="white"/>
  <text x="230" y="542" text-anchor="middle" fill="${c1}" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="24" font-weight="700">Watch placeholder</text>
</svg>`;
}

function thumb({ title, c1, c2 }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#g)"/>
  <text x="40" y="80" fill="rgba(255,255,255,0.8)" font-family="Georgia, serif" font-size="22">skillORA</text>
  <text x="40" y="280" fill="white" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="42" font-weight="800">${escapeXml(title)}</text>
  <text x="40" y="430" fill="rgba(255,255,255,0.85)" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="20">Video placeholder</text>
</svg>`;
}

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

const banners = path.join(__dirname, "public", "banners");
const thumbs = path.join(__dirname, "public", "thumbs");
fs.mkdirSync(banners, { recursive: true });
fs.mkdirSync(thumbs, { recursive: true });
for (const item of items) {
  fs.writeFileSync(path.join(banners, `${item.file}.svg`), banner(item));
  fs.writeFileSync(path.join(thumbs, `${item.file}.svg`), thumb(item));
}
console.log("wrote banners and thumbs");
