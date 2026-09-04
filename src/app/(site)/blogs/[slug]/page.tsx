import { notFound } from "next/navigation";
import { readDb } from "@/lib/db";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const db = await readDb();
  const post = db.blogs.find((b) => b.slug === slug);
  if (!post) notFound();
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 sm:py-10">
      <img src={post.cover} alt="" className="w-full rounded-2xl aspect-[16/9] object-cover mb-6" />
      <p className="text-sm text-primary mb-2">{post.category} · {post.date}</p>
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 break-words">{post.title}</h1>
      <p className="leading-7">{post.content}</p>
    </article>
  );
}
