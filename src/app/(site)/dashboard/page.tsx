import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { readDb } from "@/lib/db";
import { LogoutButton } from "@/components/LogoutButton";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const db = await readDb();
  const user = db.users.find((u) => u.id === session.id);
  const courses = db.courses.filter((c) => session.role === "admin" || user?.enrolledCourseIds.includes(c.id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-3xl font-bold">My learning</h1>
          <p className="text-muted-foreground">Welcome back, {session.name}</p>
        </div>
        <div className="flex gap-2">
          {session.role === "admin" && (
            <Link href="/admin" className="btn-outline">Upload videos</Link>
          )}
          <LogoutButton />
        </div>
      </div>
      {courses.length === 0 ? (
        <p>
          No courses yet. <Link href="/courses" className="text-primary">Browse courses</Link>
        </p>
      ) : (
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
      )}
    </div>
  );
}
