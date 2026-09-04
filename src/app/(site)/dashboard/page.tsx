import Link from "next/link";
import { readDb } from "@/lib/db";

export default async function DashboardPage() {
  const db = await readDb();
  const courses = db.courses;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">All Courses</h1>
          <p className="text-muted-foreground">Browse and start learning</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Link key={course.id} href={`/learn/${course.slug}`} className="card-surface overflow-hidden hover:shadow-header">
            <img src={course.thumbnail} alt="" className="w-full aspect-video object-cover" />
            <div className="p-4">
              <h2 className="font-semibold">{course.title}</h2>
              <p className="text-sm text-muted-foreground">{course.duration}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
