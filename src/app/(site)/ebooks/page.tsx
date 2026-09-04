import Link from "next/link";
import { readDb } from "@/lib/db";
import { discountPercent, formatInr, whatsappBuyLink } from "@/lib/format";

export default async function EbooksPage() {
  const db = await readDb();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">E-Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {db.ebooks.map((book) => (
          <article key={book.id} className="card-surface p-4 sm:p-5 flex flex-col gap-3 min-w-0">
            <Link href={`/ebooks/${book.slug}`} className="relative aspect-[3/4] w-full rounded-xl overflow-hidden block bg-white">
              <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm line-clamp-2">{book.title}</p>
            </Link>
            <Link href={`/ebooks/${book.slug}`}>
              <h2 className="font-semibold break-words">{book.title}</h2>
            </Link>
            {book.authors?.length ? (
              <p className="text-xs text-muted-foreground line-clamp-2">{book.authors.join(" · ")}</p>
            ) : null}
            <p className="text-sm text-muted-foreground flex-1 line-clamp-4">{book.description}</p>
            <p className="text-xl font-bold text-primary">{formatInr(book.price)}</p>
            <p className="text-muted-foreground line-through">{formatInr(book.originalPrice)}</p>
            <p className="text-xs text-primary">{discountPercent(book.price, book.originalPrice)}% off</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href={`/ebooks/${book.slug}`} className="btn-outline w-full text-center">
                View Details
              </Link>
              <a
                href={whatsappBuyLink(book.title, book.price)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full text-center"
              >
                Buy Now
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
