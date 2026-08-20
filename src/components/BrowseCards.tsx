import Link from "next/link";
import { BookOpen, Globe, Newspaper, ShoppingBag } from "lucide-react";

const items = [
  { href: "/courses", label: "All Courses", icon: BookOpen },
  { href: "/ebooks", label: "E-Books", icon: Globe },
  { href: "/blogs", label: "Blogs", icon: Newspaper },
  { href: "/digital-products", label: "Digital Products", icon: ShoppingBag },
];

export function BrowseCards() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Browse</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {items.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center justify-center gap-3 rounded-2xl border bg-secondary p-6 hover:shadow-header transition-shadow"
          >
            <Icon className="text-primary size-8" />
            <span className="font-medium text-sm md:text-base">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
