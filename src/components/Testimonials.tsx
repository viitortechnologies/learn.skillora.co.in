"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/lib/types";

export function Testimonials({ items }: { items: Testimonial[] }) {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStart((s) => (s + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items.length]);

  const visible = [0, 1, 2].map((offset) => items[(start + offset) % items.length]);

  return (
    <section className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {visible.map((item, i) => (
          <article
            key={`${item.id}-${start}`}
            className={`rounded-2xl border bg-secondary p-5 sm:p-6 flex-col gap-3 min-h-0 md:min-h-[280px] ${
              i === 0 ? "flex" : "hidden md:flex"
            }`}
          >
            {item.photo ? (
              <img src={item.photo} alt={item.name} className="size-12 rounded-full object-cover" />
            ) : (
              <div className="size-12 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold">
                {item.name.charAt(0)}
              </div>
            )}
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-6">{item.quote}</p>
            <p className="mt-auto text-xs text-primary font-medium">{item.course} · {item.trainer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
