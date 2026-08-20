import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getSession } from "@/lib/auth";
import { findLesson, getUploadDir, readDb } from "@/lib/db";

export const runtime = "nodejs";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const db = await readDb();
  const user = db.users.find((u) => u.id === session.id);
  let fileName: string | null = null;
  let allowed = session.role === "admin";

  for (const course of db.courses) {
    const lesson = findLesson(course, id);
    if (!lesson) continue;
    fileName = lesson.videoFileName;
    if (user?.enrolledCourseIds.includes(course.id) || lesson.isFreePreview) allowed = true;
    break;
  }

  if (!allowed || !fileName) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const filePath = path.join(getUploadDir(), fileName);
  if (!fs.existsSync(filePath)) return NextResponse.json({ error: "Missing file" }, { status: 404 });

  const stat = fs.statSync(filePath);
  const range = request.headers.get("range");
  const ext = path.extname(fileName).toLowerCase();
  const type = ext === ".webm" ? "video/webm" : ext === ".mov" ? "video/quicktime" : "video/mp4";

  if (range) {
    const match = /bytes=(\d+)-(\d*)/.exec(range);
    const start = match ? Number(match[1]) : 0;
    const end = match?.[2] ? Number(match[2]) : stat.size - 1;
    const chunk = fs.readFileSync(filePath).subarray(start, end + 1);
    return new NextResponse(chunk, {
      status: 206,
      headers: {
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": String(chunk.length),
        "Content-Type": type,
      },
    });
  }

  const data = fs.readFileSync(filePath);
  return new NextResponse(data, {
    headers: {
      "Content-Type": type,
      "Content-Length": String(stat.size),
      "Accept-Ranges": "bytes",
    },
  });
}
