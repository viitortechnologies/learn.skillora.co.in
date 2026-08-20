import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { setSessionCookie, toSessionUser } from "@/lib/auth";
import { updateDb } from "@/lib/db";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  if (!name || !email || !password || String(password).length < 6) {
    return NextResponse.json({ error: "Name, email and a 6+ character password are required." }, { status: 400 });
  }
  try {
    const db = await updateDb((data) => {
      if (data.users.some((u) => u.email.toLowerCase() === String(email).toLowerCase())) {
        throw new Error("exists");
      }
      data.users.push({
        id: `u-${Date.now()}`,
        name: String(name),
        email: String(email).toLowerCase(),
        passwordHash: bcrypt.hashSync(String(password), 10),
        role: "student",
        enrolledCourseIds: [],
        createdAt: new Date().toISOString(),
      });
    });
    const user = db.users.find((u) => u.email === String(email).toLowerCase());
    if (!user) throw new Error("failed");
    const session = toSessionUser(user);
    await setSessionCookie(session);
    return NextResponse.json({ user: session });
  } catch (err) {
    if (err instanceof Error && err.message === "exists") {
      return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
    }
    return NextResponse.json({ error: "Could not create account." }, { status: 500 });
  }
}
