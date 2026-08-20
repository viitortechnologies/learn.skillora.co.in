import { CourseCard } from "@/components/CourseCard";
import { readDb } from "@/lib/db";

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const db = await readDb();
  const query = q.trim().toLowerCase();
  const courses = db.courses.filter(
    (c) =>
      !query ||
      c.title.toLowerCase().includes(query) ||
      c.subtitle.toLowerCase().includes(query) ||
      c.category.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Courses</h1>
      <p className="text-muted-foreground mb-6">
        Industry-leading programs with live classes, projects and job assistance.
      </p>
      <div className="flex flex-wrap gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
        {courses.length === 0 && <p>No courses matched your search.</p>}
      </div>
    </div>
  );
}
