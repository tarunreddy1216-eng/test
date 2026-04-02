"use client";

import { m } from "framer-motion";
import type { VideoItem } from "@/lib/data";

export function VideoCard({ video }: { video: VideoItem }) {
  const isPlaceholder = video.embedId.startsWith("PLACEHOLDER");

  return (
    <m.div
      className="group relative overflow-hidden border border-slate-700 hover:border-acid transition-colors duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="aspect-video bg-slate-800 relative overflow-hidden">
        {isPlaceholder ? (
          // Placeholder — replace with actual embed or thumbnail when ready
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full border-2 border-acid/40 flex items-center justify-center group-hover:border-acid transition-colors duration-300">
              <svg
                className="w-5 h-5 text-acid/60 group-hover:text-acid transition-colors duration-300 ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="font-mono text-xs text-foreground/20 uppercase tracking-widest">
              {/* TODO: Replace PLACEHOLDER_VIDEO_ID_{n} in lib/data.ts */}
              Video Coming Soon
            </span>
          </div>
        ) : (
          // Real YouTube embed — uncomment when embedId is set
          <iframe
            src={`https://www.youtube.com/embed/${video.embedId}?rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>

      <div className="p-4">
        <p className="font-display font-bold text-foreground text-sm">{video.title}</p>
        <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mt-1">
          {video.client}
        </p>
      </div>
    </m.div>
  );
}
