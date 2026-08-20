import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { updateDb } from "@/lib/db";

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  const { courseId } = await request.json();
  const db = await updateDb((data) => {
    const user = data.users.find((u) => u.id === session.id);
    if (!user) throw new Error("missing");
    if (!data.courses.some((c) => c.id === courseId)) throw new Error("course");
    if (!user.enrolledCourseIds.includes(courseId)) user.enrolledCourseIds.push(courseId);
  });
  return NextResponse.json({ ok: true, enrolled: db.users.find((u) => u.id === session.id)?.enrolledCourseIds });
}
