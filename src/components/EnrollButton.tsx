"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PaymentModal } from "./PaymentModal";

export function EnrollButton({ courseId, loggedIn }: { courseId: string; loggedIn: boolean }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  async function enroll() {
    if (!loggedIn) {
      router.push(`/login?next=/courses`);
      return;
    }
    setBusy(true);
    const res = await fetch("/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId }),
    });
    setBusy(false);
    setOpen(false);
    if (res.ok) router.refresh();
  }

  return (
    <>
      <button className="btn-primary w-full" disabled={busy} onClick={() => (loggedIn ? setOpen(true) : router.push("/login"))}>
        {loggedIn ? "Buy now" : "Sign in to enroll"}
      </button>
      <PaymentModal open={open} onClose={() => setOpen(false)} onContinue={enroll} />
    </>
  );
}
