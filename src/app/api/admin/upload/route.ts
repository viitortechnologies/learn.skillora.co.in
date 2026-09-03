import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getSession } from "@/lib/auth";
import { findCourse, findLesson, getUploadDir, updateDb } from "@/lib/db";

export const runtime = "nodejs";
export const maxDuration = 300;

export async function POST(request: Request) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Admin only" }, { status: 403 });
  }

  const form = await request.formData();
  const courseId = String(form.get("courseId") || "");
  const lessonId = String(form.get("lessonId") || "");
  const file = form.get("video");
  if (!courseId || !lessonId || !(file instanceof File)) {
    return NextResponse.json({ error: "Missing upload fields" }, { status: 400 });
  }

  const ext = path.extname(file.name || "").toLowerCase() || ".mp4";
  const safeExt = [".mp4", ".webm", ".mov", ".mkv", ".m4v"].includes(ext) ? ext : ".mp4";
  const fileName = `${lessonId}${safeExt}`;
  const dest = path.join(getUploadDir(), fileName);
  const buffer = Buffer.from(await file.arrayBuffer());
  try {
    fs.writeFileSync(dest, buffer);
  } catch {
    return NextResponse.json(
      { error: "Video storage is not available on this host. Upload videos from a local admin session." },
      { status: 503 }
    );
  }

  await updateDb((db) => {
    const course = findCourse(db, courseId);
    if (!course) throw new Error("course");
    const lesson = findLesson(course, lessonId);
    if (!lesson) throw new Error("lesson");
    lesson.videoFileName = fileName;
  });

  return NextResponse.json({ ok: true, fileName });
}
