import Link from "next/link";
import { readDb } from "@/lib/db";

export default async function BlogsPage() {
  const db = await readDb();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {db.blogs.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`} className="card-surface overflow-hidden hover:shadow-header transition-shadow">
            <img src={post.cover} alt="" className="w-full aspect-[16/9] object-cover" />
            <div className="p-5">
              <p className="text-xs text-primary mb-2">{post.category} · {post.date}</p>
              <h2 className="font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
