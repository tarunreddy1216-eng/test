"use client";

import { m } from "framer-motion";
import type { SocialAccount } from "@/lib/data";

export function SocialCard({ account }: { account: SocialAccount }) {
  return (
    <m.div
      className="border border-slate-700 p-6 hover:border-electric transition-colors duration-300 group relative overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at 0% 0%, ${account.platformColor}15 0%, transparent 60%)` }}
      />

      <div className="relative z-10">
        {/* Platform */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="font-mono text-xs uppercase tracking-widest px-2 py-1"
            style={{ color: account.platformColor, border: `1px solid ${account.platformColor}40` }}
          >
            {account.platform}
          </span>
        </div>

        {/* Handle */}
        <p className="font-display font-bold text-foreground text-lg leading-tight mb-4">
          {account.handle}
        </p>

        {/* Stats */}
        <div className="flex gap-6">
          <div>
            <p className="font-display font-bold text-acid text-2xl">{account.followers}</p>
            <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mt-0.5">
              Followers
            </p>
          </div>
          <div>
            <p className="font-display font-bold text-electric text-lg">{account.growth}</p>
            <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mt-0.5">
              Growth
            </p>
          </div>
        </div>
      </div>
    </m.div>
  );
}
