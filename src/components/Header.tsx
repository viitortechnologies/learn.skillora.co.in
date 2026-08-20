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
    <header id="header" className="sticky top-0 p-4 z-50 w-full pointer-events-none">
      <div className="pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between gap-2 rounded-xl bg-secondary px-4 py-2.5 shadow-header backdrop-blur-md sm:gap-4 sm:px-3 md:h-16 md:gap-4 md:px-4 min-h-[52px] md:min-h-[64px]">
        <div className="flex items-center gap-3">
          <button className="btn-ghost lg:hidden shrink-0" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu className="size-5" />
          </button>
          <div className="flex items-center gap-4 lg:gap-6">
            <Link href="/" className="shrink-0">
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
                    <Link href="/blogs" className="block rounded-lg px-3 py-2 text-sm hover:bg-muted" onClick={() => setMore(false)}>
                      Blogs
                    </Link>
                    <Link href="/digital-products" className="block rounded-lg px-3 py-2 text-sm hover:bg-muted" onClick={() => setMore(false)}>
                      Digital Products
                    </Link>
                    <Link href="/#about" className="block rounded-lg px-3 py-2 text-sm hover:bg-muted" onClick={() => setMore(false)}>
                      About Us
                    </Link>
                    <Link href="/#contact" className="block rounded-lg px-3 py-2 text-sm hover:bg-muted" onClick={() => setMore(false)}>
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <form className="max-lg:hidden flex lg:max-w-xs w-full" onSubmit={search}>
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

        <div className="flex items-center gap-2">
          {user ? (
            <>
              {user.role === "admin" && (
                <Link href="/admin" className="btn-outline hidden sm:inline-flex">
                  Upload
                </Link>
              )}
              <Link href="/dashboard" className="btn-primary hidden sm:inline-flex">
                My learning
              </Link>
              <Link href="/dashboard" className="btn-ghost sm:hidden" aria-label="Account">
                <User className="size-5" />
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="btn-outline hidden sm:inline-flex">
                Sign in
              </Link>
              <Link href="/signup" className="btn-primary hidden sm:inline-flex">
                Sign up
              </Link>
              <Link href="/login" className="btn-ghost sm:hidden" aria-label="Login">
                <User className="size-5" />
              </Link>
            </>
          )}
        </div>
      </div>

      {open && (
        <div className="pointer-events-auto fixed inset-0 z-[60] bg-black/40 lg:hidden" onClick={() => setOpen(false)}>
          <aside className="absolute left-0 top-0 h-full w-72 bg-secondary p-5 shadow-header" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <Logo />
              <button className="btn-ghost" onClick={() => setOpen(false)} aria-label="Close">
                <X className="size-5" />
              </button>
            </div>
            <form className="mb-4" onSubmit={search}>
              <input className="field rounded-full" placeholder="search" value={q} onChange={(e) => setQ(e.target.value)} />
            </form>
            <nav className="flex flex-col gap-1 text-sm">
              {[...nav, { href: "/blogs", label: "Blogs" }, { href: "/digital-products", label: "Digital Products" }].map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 hover:bg-muted" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
