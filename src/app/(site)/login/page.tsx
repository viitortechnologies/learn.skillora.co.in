"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import { Logo } from "@/components/Logo";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
      }),
    });
    setBusy(false);
    if (!res.ok) {
      setError("Invalid email or password.");
      return;
    }
    const data = await res.json();
    router.push(params.get("next") || (data.user.role === "admin" ? "/admin" : "/dashboard"));
    router.refresh();
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl grid md:grid-cols-2 rounded-2xl border bg-secondary shadow-header overflow-hidden">
        <div className="relative hidden md:block min-h-[420px]">
          <img src="/banners/workshop.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10" />
          <p className="absolute bottom-6 left-6 right-6 text-white text-lg font-semibold">
            Learn at Skillora — live classes and Hi-Tech City workshops
          </p>
        </div>
        <form onSubmit={onSubmit} className="p-8 space-y-4">
        <div className="flex justify-center mb-2">
          <Logo />
        </div>
        <h1 className="text-2xl font-bold text-center">Sign in</h1>
        <p className="text-sm text-muted-foreground text-center">
          Admin can upload videos. Students can access enrolled courses.
        </p>
        <input className="field" type="email" name="email" placeholder="Email" required />
        <input className="field" type="password" name="password" placeholder="Password" required />
        {error && <p className="text-sm text-destructive">{error}</p>}
        <button className="btn-primary w-full h-11" disabled={busy}>
          {busy ? "Signing in..." : "Sign in"}
        </button>
        <p className="text-xs text-muted-foreground">
          Instructor: admin@skillora.co.in / Skillora@Admin
          <br />
          Student: student@skillora.co.in / Student@123
        </p>
        <p className="text-sm text-center">
          New here? <Link href="/signup" className="text-primary font-medium">Sign up</Link>
        </p>
      </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
