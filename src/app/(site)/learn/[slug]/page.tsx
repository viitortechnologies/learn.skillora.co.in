import Link from "next/link";
import { notFound } from "next/navigation";
import { findCourse, findLesson, readDb } from "@/lib/db";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";

export default async function LearnPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lesson?: string }>;
}) {
  const { slug } = await params;
  const { lesson: lessonId } = await searchParams;
  const db = await readDb();
  const course = findCourse(db, slug);
  if (!course) notFound();

  const allLessons = course.modules.flatMap((m) => m.lessons);
  const current = (lessonId && findLesson(course, lessonId)) || allLessons[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-6">
      <div className="min-w-0">
        {current?.videoFileName ? (
          <video key={current.id} className="w-full rounded-2xl bg-black aspect-video" controls src={`/api/videos/${current.id}`} />
        ) : (
          <VideoPlaceholder title={current?.title || "Lesson"} poster={course.banner} />
        )}
        <h1 className="text-xl sm:text-2xl font-bold mt-4 break-words">{current?.title}</h1>
        <p className="text-muted-foreground">{course.title}</p>
      </div>
      <aside className="rounded-2xl border bg-secondary p-4 h-fit">
        <h2 className="font-semibold mb-3">Course content</h2>
        <div className="space-y-3">
          {course.modules.map((mod) => (
            <div key={mod.id}>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{mod.title}</p>
              <ul className="space-y-1">
                {mod.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <Link
                      href={`/learn/${course.slug}?lesson=${lesson.id}`}
                      className={`block rounded-lg px-3 py-2 text-sm ${
                        lesson.id === current?.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      {lesson.title}
                      {!lesson.videoFileName && <span className="block text-[11px] opacity-80">Placeholder</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
