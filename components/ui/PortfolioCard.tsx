"use client";

import { m } from "framer-motion";
import { overlayVariant, imageScaleVariant } from "@/lib/animations";
import type { Campaign } from "@/lib/data";

export function PortfolioCard({ campaign }: { campaign: Campaign }) {
  return (
    <m.div
      className="group relative overflow-hidden cursor-pointer"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      {/* Image area — replace bg with actual <Image /> when you have screenshots */}
      <div className="overflow-hidden aspect-[4/3]">
        <m.div
          variants={imageScaleVariant}
          className="w-full h-full bg-slate-800 flex items-center justify-center"
        >
          {/* TODO: Replace with actual campaign screenshot
              <Image src="/images/campaigns/campaign-1.jpg" alt={campaign.title} fill className="object-cover" /> */}
          <span
            className="font-mono text-xs tracking-widest opacity-30 uppercase"
            style={{ color: campaign.color }}
          >
            {campaign.tag}
          </span>
        </m.div>
      </div>

      {/* Hover overlay */}
      <m.div
        variants={overlayVariant}
        className="absolute inset-0 bg-background/90 flex flex-col justify-end p-6"
      >
        <span
          className="font-mono text-xs tracking-widest uppercase mb-2"
          style={{ color: campaign.color }}
        >
          {campaign.tag}
        </span>
        <h3 className="font-display font-bold text-foreground text-lg leading-tight mb-2">
          {campaign.title}
        </h3>
        <p className="text-foreground/60 text-sm leading-relaxed">{campaign.brief}</p>
        <p className="text-foreground/30 text-xs font-mono mt-3 uppercase tracking-widest">
          {campaign.client}
        </p>
      </m.div>
    </m.div>
  );
}
