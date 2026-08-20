import Link from "next/link";
import { discountPercent, formatInr } from "@/lib/format";
import type { Course } from "@/lib/types";

export function CourseCard({ course }: { course: Course }) {
  const off = discountPercent(course.price, course.originalPrice);
  return (
    <article className="card-surface flex flex-col min-w-[260px] w-[280px] md:w-[300px] shrink-0">
      <div className="relative">
        <img src={course.thumbnail} alt={course.title} className="w-full aspect-[16/10] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 pointer-events-none" />
        {off > 0 && (
          <span className="absolute top-3 right-3 bg-black/80 text-white text-xs font-semibold rounded-md px-2 py-1">
            {off}% off
          </span>
        )}
        {course.badge === "New Course" && (
          <div className="absolute top-3 left-3">
            <span className="absolute inline-flex h-full w-full animate-ping-custom rounded-full bg-primary opacity-75" />
            <span className="relative bg-primary px-3 py-1.5 w-fit rounded-full font-semibold text-xs text-primary-foreground">
              New Course
            </span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <h3 className="font-semibold leading-snug line-clamp-2 min-h-[2.6em]">{course.title}</h3>
        <div className="mt-auto tracking-tight">
          <p className="mb-0 text-2xl font-bold text-primary">{formatInr(course.price)}</p>
          <p className="text-muted-foreground line-through mb-0 text-lg">{formatInr(course.originalPrice)}</p>
        </div>
        <Link href={`/courses/${course.slug}`} className="btn-outline w-full">
          View Details
        </Link>
      </div>
    </article>
  );
}
