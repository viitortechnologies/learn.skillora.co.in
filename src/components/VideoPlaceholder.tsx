import { Play } from "lucide-react";

export function VideoPlaceholder({ title, poster }: { title: string; poster?: string }) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900 text-white flex items-center justify-center">
      {poster ? (
        <img src={poster} alt="" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(107,58,212,0.35),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(0,195,255,0.25),transparent_45%)]" />
      )}
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-white/15 border border-white/30 backdrop-blur-sm">
          <Play className="size-7 fill-white" />
        </span>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-white/80">Video placeholder — upload from the admin login when ready</p>
      </div>
    </div>
  );
}
