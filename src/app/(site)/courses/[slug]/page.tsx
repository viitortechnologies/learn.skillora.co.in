import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, Star } from "lucide-react";
import { findCourse, readDb } from "@/lib/db";
import { formatInr } from "@/lib/format";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { EnrollButton } from "@/components/EnrollButton";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const db = await readDb();
  const course = findCourse(db, slug);
  if (!course) notFound();
  const preview = course.modules[0]?.lessons[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 grid lg:grid-cols-[minmax(0,1fr)_340px] gap-6 lg:gap-8">
      <div className="space-y-6 min-w-0 order-2 lg:order-1">
        <VideoPlaceholder title={preview?.title || course.title} poster={course.banner} />
        <div>
          <p className="text-sm text-primary font-medium mb-1">{course.category}</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight break-words">{course.title}</h1>
          <p className="text-muted-foreground mt-2">{course.subtitle}</p>
          <div className="flex flex-wrap gap-3 mt-3 text-sm">
            <span className="inline-flex items-center gap-1"><Star className="size-4 text-primary" /> {course.rating} ({course.students} students)</span>
            <span className="inline-flex items-center gap-1"><Clock className="size-4" /> {course.duration}</span>
            <span>Valid until: {course.validUntil}</span>
          </div>
        </div>
        <p className="leading-7">{course.description}</p>
        <div>
          <h2 className="text-xl font-bold mb-3">What you&apos;ll learn</h2>
          <ul className="grid md:grid-cols-2 gap-2">
            {course.learnings.map((item) => (
              <li key={item} className="flex gap-2 text-sm">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Curriculum</h2>
          <div className="space-y-3">
            {course.modules.map((mod) => (
              <details key={mod.id} className="rounded-2xl border bg-secondary p-4" open>
                <summary className="font-semibold cursor-pointer">
                  {mod.title} <span className="text-muted-foreground font-normal">· {mod.duration}</span>
                </summary>
                <ul className="mt-3 space-y-2">
                  {mod.lessons.map((lesson) => (
                    <li key={lesson.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-sm border-t pt-2">
                      <span className="pr-2 break-words">
                        {lesson.title}
                        {lesson.isFreePreview && <span className="ml-2 text-xs text-primary">Preview</span>}
                      </span>
                      <span className="text-muted-foreground shrink-0">{lesson.duration}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </div>
      <aside className="lg:sticky lg:top-28 h-fit card-surface p-4 sm:p-5 space-y-4 order-1 lg:order-2">
        <img src={course.thumbnail} alt="" className="rounded-xl w-full aspect-[16/10] object-cover" />
        <div>
          <p className="text-2xl font-bold text-primary">{formatInr(course.price)}</p>
          <p className="text-muted-foreground line-through">{formatInr(course.originalPrice)}</p>
        </div>
        <EnrollButton courseName={course.title} price={course.price} />
        <ul className="text-sm space-y-2">
          {course.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <CheckCircle2 className="size-4 text-primary mt-0.5" /> {h}
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground">Mentor: {course.mentor.name}, {course.mentor.title} ({course.mentor.experience})</p>
      </aside>
    </div>
  );
}
