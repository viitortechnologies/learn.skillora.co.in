"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Logo } from "@/components/Logo";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
      }),
    });
    setBusy(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Could not create account.");
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl grid md:grid-cols-2 rounded-2xl border bg-secondary shadow-header overflow-hidden">
        <div className="relative hidden md:block min-h-[420px]">
          <img src="/banners/java.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10" />
          <p className="absolute bottom-6 left-6 right-6 text-white text-lg font-semibold">
            Join 10,000+ professionals learning with Skillora
          </p>
        </div>
        <form onSubmit={onSubmit} className="p-8 space-y-4">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h1 className="text-2xl font-bold text-center">Sign up</h1>
        <input className="field" name="name" placeholder="Name" required />
        <input className="field" type="email" name="email" placeholder="Email" required />
        <input className="field" type="password" name="password" placeholder="Password (min 6 characters)" minLength={6} required />
        {error && <p className="text-sm text-destructive">{error}</p>}
        <button className="btn-primary w-full h-11" disabled={busy}>
          {busy ? "Creating..." : "Create account"}
        </button>
        <p className="text-sm text-center">
          Already have an account? <Link href="/login" className="text-primary font-medium">Sign in</Link>
        </p>
      </form>
      </div>
    </div>
  );
}
