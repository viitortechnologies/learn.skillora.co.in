import "server-only";
import fs from "fs";
import path from "path";
import { createSeedDatabase } from "./seed";
import type { Course, Database, Lesson } from "./types";

const isServerless = process.env.VERCEL === "1";
const DATA_DIR = isServerless ? path.join("/tmp", "skillora-data") : path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "db.json");
const UPLOAD_DIR = path.join(DATA_DIR, "uploads");

let memoryDb: Database | null = null;
let writeQueue: Promise<void> = Promise.resolve();

function ensureDirs() {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  } catch {
    // Vercel’s app directory is read-only; /tmp may still be writable.
  }
}

export function getUploadDir() {
  ensureDirs();
  return UPLOAD_DIR;
}

export async function readDb(): Promise<Database> {
  if (memoryDb) return memoryDb;

  try {
    if (fs.existsSync(DB_PATH)) {
      memoryDb = JSON.parse(fs.readFileSync(DB_PATH, "utf8")) as Database;
      return memoryDb;
    }
  } catch {
    // Fall through to in-memory seed.
  }

  memoryDb = await createSeedDatabase();
  try {
    ensureDirs();
    fs.writeFileSync(DB_PATH, JSON.stringify(memoryDb, null, 2));
  } catch {
    // Serve seed from memory when the filesystem cannot be written.
  }
  return memoryDb;
}

export function writeDb(db: Database) {
  memoryDb = db;
  const payload = JSON.stringify(db, null, 2);
  writeQueue = writeQueue.then(() => {
    try {
      ensureDirs();
      fs.writeFileSync(DB_PATH, payload);
    } catch {
      // Persistence is best-effort; catalog pages still work from memory.
    }
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
