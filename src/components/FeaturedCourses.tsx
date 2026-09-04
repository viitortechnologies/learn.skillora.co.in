"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Course } from "@/lib/types";
import { CourseCard } from "./CourseCard";

export function FeaturedCourses({ courses }: { courses: Course[] }) {
  const ref = useRef<HTMLDivElement>(null);

  function scroll(dir: number) {
    ref.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">Featured</h2>
        <div className="flex gap-2">
          <button className="btn-outline size-10 p-0" onClick={() => scroll(-1)} aria-label="Previous">
            <ChevronLeft className="size-5" />
          </button>
          <button className="btn-outline size-10 p-0" onClick={() => scroll(1)} aria-label="Next">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
      <div ref={ref} className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
