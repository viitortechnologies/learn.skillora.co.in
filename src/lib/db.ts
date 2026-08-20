import "server-only";
import fs from "fs";
import path from "path";
import { createSeedDatabase } from "./seed";
import type { Course, Database, Lesson } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "db.json");
const UPLOAD_DIR = path.join(DATA_DIR, "uploads");

let writeQueue: Promise<void> = Promise.resolve();

function ensureDirs() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export function getUploadDir() {
  ensureDirs();
  return UPLOAD_DIR;
}

export async function readDb(): Promise<Database> {
  ensureDirs();
  if (!fs.existsSync(DB_PATH)) {
    const seed = await createSeedDatabase();
    fs.writeFileSync(DB_PATH, JSON.stringify(seed, null, 2));
    return seed;
  }
  return JSON.parse(fs.readFileSync(DB_PATH, "utf8")) as Database;
}

export function writeDb(db: Database) {
  ensureDirs();
  const payload = JSON.stringify(db, null, 2);
  writeQueue = writeQueue.then(() => {
    fs.writeFileSync(DB_PATH, payload);
  });
  return writeQueue;
}

export async function updateDb(mutator: (db: Database) => void) {
  const db = await readDb();
  mutator(db);
  await writeDb(db);
  return db;
}

export function findCourse(db: Database, slugOrId: string) {
  return db.courses.find((c) => c.slug === slugOrId || c.id === slugOrId) ?? null;
}

export function findLesson(course: Course, lessonId: string): Lesson | null {
  for (const module of course.modules) {
    const lesson = module.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return null;
}
