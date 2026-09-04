import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Building2, Calendar, Hash } from "lucide-react";
import { findEbook, readDb } from "@/lib/db";
import { discountPercent, formatInr, whatsappBuyLink } from "@/lib/format";

export default async function EbookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const db = await readDb();
  const book = findEbook(db, slug);
  if (!book) notFound();
  const off = discountPercent(book.price, book.originalPrice);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-[1fr_340px] gap-8">
      <div className="space-y-6">
        <p className="text-sm text-primary font-medium">E-Book</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{book.title}</h1>
        {book.authors?.length ? (
          <p className="text-muted-foreground">{book.authors.join(", ")}</p>
        ) : null}
        <p className="leading-7">{book.description}</p>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {book.publisher && (
            <span className="inline-flex items-center gap-1">
              <Building2 className="size-4" /> {book.publisher}
            </span>
          )}
          {book.isbn && (
            <span className="inline-flex items-center gap-1">
              <Hash className="size-4" /> ISBN {book.isbn}
            </span>
          )}
          {book.publishedAt && (
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-4" /> {book.publishedAt}
            </span>
          )}
        </div>
        {book.authorBios?.length ? (
          <div>
            <h2 className="text-xl font-bold mb-3">About the authors</h2>
            <div className="space-y-4">
              {book.authorBios.map((author) => (
                <article key={author.name} className="rounded-2xl border bg-secondary p-4">
                  <h3 className="font-semibold">{author.name}</h3>
                  <p className="text-sm text-primary mt-1">{author.role}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-6">{author.bio}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}
        <Link href="/ebooks" className="text-sm text-primary inline-flex items-center gap-1">
          <BookOpen className="size-4" /> Back to all e-books
        </Link>
      </div>
      <aside className="lg:sticky lg:top-28 h-fit card-surface p-5 space-y-4">
        <img src={book.cover} alt={book.title} className="rounded-xl w-full aspect-[3/4] object-cover bg-white" />
        <div>
          <p className="text-2xl font-bold text-primary">{formatInr(book.price)}</p>
          <p className="text-muted-foreground line-through">{formatInr(book.originalPrice)}</p>
          {off > 0 && <p className="text-xs text-primary mt-1">{off}% off</p>}
        </div>
        <a
          href={whatsappBuyLink(book.title, book.price)}
          target="_blank"
          rel="noreferrer"
          className="btn-primary w-full text-center"
        >
          Buy Now
        </a>
      </aside>
    </div>
  );
}
