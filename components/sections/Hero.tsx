"use client";

import { m } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Marquee } from "@/components/ui/Marquee";
import { buttonHover, buttonTap } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden />

      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 max-w-7xl mx-auto w-full pt-28 pb-12">
        {/* Eyebrow */}
        <m.p
          className="font-mono text-acid text-xs uppercase tracking-widest mb-6 md:mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Creative Marketing Agency
        </m.p>

        {/* Headline */}
        <h1 className="text-display-xl font-display font-black text-foreground leading-none mb-6 md:mb-8 max-w-5xl">
          <AnimatedText text="We Make Stupid" once />
          <br />
          <span className="text-acid">
            <AnimatedText text="Ads That" once />
          </span>
          <br />
          <AnimatedText text="Actually Work." once />
        </h1>

        {/* Subline */}
        <m.p
          className="font-mono text-foreground/50 text-sm md:text-base max-w-lg mb-10 md:mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Bold campaigns. Scroll-stopping content. Results that make your competitors
          question their life choices.
        </m.p>

        {/* CTAs */}
        <m.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <m.a
            href="#work"
            className="inline-block bg-acid text-background font-mono text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-foreground transition-colors duration-200"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            See Our Work
          </m.a>
          <m.a
            href="#contact"
            className="inline-block border border-foreground/20 text-foreground font-mono text-sm uppercase tracking-widest px-8 py-4 hover:border-acid hover:text-acid transition-colors duration-200"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Start a Project
          </m.a>
        </m.div>

        {/* Stats row */}
        <m.div
          className="flex flex-wrap gap-10 mt-16 md:mt-20 pt-10 border-t border-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {[
            { number: "50+", label: "Brands Grown" },
            { number: "200M+", label: "Organic Impressions" },
            { number: "4.1x", label: "Average ROAS" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display font-black text-acid text-3xl md:text-4xl">
                {stat.number}
              </p>
              <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </m.div>
      </div>

      {/* Marquee band at bottom of hero */}
      <div className="mt-auto">
        <Marquee />
      </div>
    </section>
  );
}
