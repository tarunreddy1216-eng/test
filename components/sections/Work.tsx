"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { VideoCard } from "@/components/ui/VideoCard";
import { SocialCard } from "@/components/ui/SocialCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { campaigns, videos, socialAccounts } from "@/lib/data";

type Tab = "campaigns" | "videos" | "social";

const tabs: { id: Tab; label: string }[] = [
  { id: "campaigns", label: "Campaigns" },
  { id: "videos", label: "Videos" },
  { id: "social", label: "Social Media" },
];

const tabContent: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2 } },
};

import type { Variants } from "framer-motion";

export function Work() {
  const [activeTab, setActiveTab] = useState<Tab>("campaigns");

  return (
    <section id="work" className="section-pad px-6 md:px-10 bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="mb-12 md:mb-16">
          <p className="font-mono text-acid text-xs uppercase tracking-widest mb-4">
            Our Work
          </p>
          <h2 className="text-display-lg font-display font-black text-foreground leading-none">
            Stupid Good Results
          </h2>
        </ScrollReveal>

        {/* Tab buttons */}
        <ScrollReveal className="flex flex-wrap gap-0 border border-slate-700 w-fit mb-12 md:mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-mono text-xs uppercase tracking-widest px-6 py-3 transition-all duration-200 border-r border-slate-700 last:border-r-0 ${
                activeTab === tab.id
                  ? "bg-acid text-background"
                  : "text-foreground/50 hover:text-foreground hover:bg-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <m.div
            key={activeTab}
            variants={tabContent}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeTab === "campaigns" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {campaigns.map((campaign) => (
                  <PortfolioCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            )}

            {activeTab === "videos" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            )}

            {activeTab === "social" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {socialAccounts.map((account) => (
                  <SocialCard key={account.id} account={account} />
                ))}
              </div>
            )}
          </m.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
