"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, Search, User, X } from "lucide-react";
import type { SessionUser } from "@/lib/types";
import { Logo } from "./Logo";

const nav = [
  { href: "/", label: "Home Page" },
  { href: "/courses", label: "All Courses" },
  { href: "/ebooks", label: "E-Books" },
];

const extra = [
  { href: "/blogs", label: "Blogs" },
  { href: "/digital-products", label: "Digital Products" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact Us" },
];

export function Header({ user }: { user: SessionUser | null }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  const [q, setQ] = useState("");

  function search(e: React.FormEvent) {
    e.preventDefault();
    router.push(q.trim() ? `/courses?q=${encodeURIComponent(q.trim())}` : "/courses");
    setOpen(false);
  }

  return (
    <header id="header" className="sticky top-0 z-50 w-full p-2 sm:p-4 pointer-events-none">
      <div className="pointer-events-auto mx-auto flex w-full max-w-7xl min-w-0 items-center justify-between gap-2 rounded-xl bg-secondary px-2.5 py-2 shadow-header backdrop-blur-md sm:gap-4 sm:px-3 md:h-16 md:px-4 min-h-[52px] md:min-h-[64px]">
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
          <div className="lg:hidden shrink-0">
            <button className="btn-ghost size-9" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Menu className="size-5" />
            </button>
          </div>
          <Link href="/" className="shrink-0 min-w-0">
            <Logo />
          </Link>
          <div className="hidden min-w-0 gap-4 lg:gap-6 items-center lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center transition-all whitespace-nowrap no-underline text-foreground text-sm ${
                  pathname === item.href ? "" : "opacity-80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="relative">
              <button
                type="button"
                className="flex items-center transition-all whitespace-nowrap no-underline text-foreground text-sm opacity-80 gap-1 outline-none"
                onClick={() => setMore((v) => !v)}
              >
                More <ChevronDown className="h-3 w-3" />
              </button>
              {more && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border bg-secondary shadow-header p-2 z-50">
                  {extra.map((item) => (
                    <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-muted" onClick={() => setMore(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <form className="max-lg:hidden flex lg:max-w-xs w-full min-w-0" onSubmit={search}>
          <div className="relative w-full">
            <Search className="pointer-events-none absolute top-1/2 left-2 size-5 -translate-y-1/2 text-foreground" />
            <input
              type="search"
              placeholder="search"
              aria-label="search input"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full rounded-full border-0 bg-muted h-9 py-1 px-3 pl-10 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            />
          </div>
        </form>

        <div className="flex items-center gap-2 shrink-0">
          {user ? (
            <>
              {user.role === "admin" && (
                <div className="hidden lg:block">
                  <Link href="/admin" className="btn-outline">
                    Upload
                  </Link>
                </div>
              )}
              <div className="hidden lg:block">
                <Link href="/dashboard" className="btn-primary">
                  My learning
                </Link>
              </div>
              <div className="lg:hidden">
                <Link href="/dashboard" className="btn-ghost size-9" aria-label="Account">
                  <User className="size-5" />
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="hidden lg:flex items-center gap-2">
                <Link href="/login" className="btn-outline">
                  Sign in
                </Link>
                <Link href="/signup" className="btn-primary">
                  Sign up
                </Link>
              </div>
              <div className="lg:hidden">
                <Link href="/login" className="btn-ghost size-9" aria-label="Login">
                  <User className="size-5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {open && (
        <div className="pointer-events-auto fixed inset-0 z-[60] bg-black/40 lg:hidden" onClick={() => setOpen(false)}>
          <aside className="absolute left-0 top-0 h-full w-[min(18rem,88vw)] bg-secondary p-5 shadow-header overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <Logo />
              <button className="btn-ghost size-9" onClick={() => setOpen(false)} aria-label="Close">
                <X className="size-5" />
              </button>
            </div>
            <form className="mb-4" onSubmit={search}>
              <input className="field rounded-full" placeholder="search" value={q} onChange={(e) => setQ(e.target.value)} />
            </form>
            <nav className="flex flex-col gap-1 text-sm">
              {[...nav, ...extra].map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2.5 hover:bg-muted" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-2">
              {user ? (
                <Link href="/dashboard" className="btn-primary w-full" onClick={() => setOpen(false)}>
                  My learning
                </Link>
              ) : (
                <>
                  <Link href="/login" className="btn-outline w-full" onClick={() => setOpen(false)}>
                    Sign in
                  </Link>
                  <Link href="/signup" className="btn-primary w-full" onClick={() => setOpen(false)}>
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
