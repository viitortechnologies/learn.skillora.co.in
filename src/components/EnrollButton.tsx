"use client";

import { whatsappBuyLink } from "@/lib/format";

export function EnrollButton({ courseName, price }: { courseName: string; price: number }) {
  const href = whatsappBuyLink(courseName, price);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="btn-primary w-full text-center"
    >
      Enroll Now
    </a>
  );
}
