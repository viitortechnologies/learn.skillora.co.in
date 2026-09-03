import Link from "next/link";
import { readDb } from "@/lib/db";
import { discountPercent, formatInr, whatsappBuyLink } from "@/lib/format";

export default async function EbooksPage() {
  const db = await readDb();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">E-Books</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {db.ebooks.map((book) => (
          <article key={book.id} className="card-surface p-5 flex flex-col gap-3">
            <div className="relative aspect-[3/4] max-h-72 rounded-xl overflow-hidden">
              <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm">{book.title}</p>
            </div>
            <h2 className="font-semibold">{book.title}</h2>
            <p className="text-sm text-muted-foreground flex-1">{book.description}</p>
            <p className="text-xl font-bold text-primary">{formatInr(book.price)}</p>
            <p className="text-muted-foreground line-through">{formatInr(book.originalPrice)}</p>
            <p className="text-xs text-primary">{discountPercent(book.price, book.originalPrice)}% off</p>
            <a
              href={whatsappBuyLink(book.title, book.price)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full text-center"
            >
              Buy Now
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
