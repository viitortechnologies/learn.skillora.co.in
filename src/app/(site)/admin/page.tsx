import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { readDb } from "@/lib/db";
import { AdminUploader } from "@/components/AdminUploader";

export default async function AdminPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.role !== "admin") redirect("/dashboard");
  const db = await readDb();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Upload videos</h1>
      <p className="text-muted-foreground mb-6">
        Replace placeholders with your recordings. Files are stored on this server. Payment gateway will be added after content is ready.
      </p>
      <AdminUploader courses={db.courses} />
    </div>
  );
}
