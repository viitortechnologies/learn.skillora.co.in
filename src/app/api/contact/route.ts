import { NextResponse } from "next/server";
import { updateDb } from "@/lib/db";

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  await updateDb((db) => {
    db.contacts.push({
      id: `msg-${Date.now()}`,
      name: String(name),
      email: String(email),
      phone: String(phone || ""),
      message: String(message).slice(0, 120),
      createdAt: new Date().toISOString(),
    });
  });
  return NextResponse.json({ ok: true });
}
