"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Course } from "@/lib/types";

export function AdminUploader({ courses }: { courses: Course[] }) {
  const router = useRouter();
  const [courseId, setCourseId] = useState(courses[0]?.id ?? "");
  const course = courses.find((c) => c.id === courseId);
  const lessons = useMemo(
    () => course?.modules.flatMap((m) => m.lessons.map((l) => ({ ...l, module: m.title }))) ?? [],
    [course]
  );
  const [lessonId, setLessonId] = useState(lessons[0]?.id ?? "");

  useEffect(() => {
    setLessonId(lessons[0]?.id ?? "");
  }, [courseId, lessons]);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("video") as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !lessonId) return;
    setBusy(true);
    setStatus("Uploading...");
    const body = new FormData();
    body.set("courseId", courseId);
    body.set("lessonId", lessonId);
    body.set("video", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body });
    setBusy(false);
    if (!res.ok) {
      setStatus("Upload failed. Try a smaller file or check server logs.");
      return;
    }
    setStatus("Uploaded. Placeholder replaced for this lesson.");
    input.value = "";
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border bg-secondary p-6 space-y-4">
      <label className="block text-sm font-medium">
        Course
        <select className="field mt-1" value={courseId} onChange={(e) => { setCourseId(e.target.value); setLessonId(""); }}>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>{c.title}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium">
        Lesson
        <select className="field mt-1" value={lessonId} onChange={(e) => setLessonId(e.target.value)} required>
          <option value="">Select a lesson</option>
          {lessons.map((l) => (
            <option key={l.id} value={l.id}>
              {l.module} — {l.title} {l.videoFileName ? "(video uploaded)" : "(placeholder)"}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium">
        Video file
        <input className="field mt-1 py-1.5" type="file" name="video" accept="video/*" required />
      </label>
      <button className="btn-primary" disabled={busy}>Upload & replace placeholder</button>
      {status && <p className="text-sm">{status}</p>}
    </form>
  );
}
