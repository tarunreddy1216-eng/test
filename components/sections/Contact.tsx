"use client";

import { m } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { buttonHover, buttonTap } from "@/lib/animations";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad px-6 md:px-10 bg-background border-t border-slate-700"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: headline + info */}
          <div>
            <p className="font-mono text-acid text-xs uppercase tracking-widest mb-6">
              Let's Work
            </p>
            <h2 className="text-display-lg font-display font-black text-foreground leading-none mb-8">
              <AnimatedText text="Let's Make" />
              <br />
              <span className="text-acid">
                <AnimatedText text="Something" />
              </span>
              <br />
              <AnimatedText text="Stupid." />
            </h2>

            <p className="text-foreground/50 font-body text-base leading-relaxed mb-10 max-w-sm">
              Big ambitions, tight deadlines, ridiculous ideas welcome. Tell us what you
              need and we'll tell you how we'd do it differently.
            </p>

            <div className="space-y-3">
              <p className="font-mono text-xs text-foreground/30 uppercase tracking-widest">
                Email us directly
              </p>
              {/* TODO: Replace with real email */}
              <a
                href="mailto:hello@adsofstupid.com"
                className="font-display font-bold text-acid text-xl md:text-2xl hover:text-foreground transition-colors duration-200 block"
              >
                hello@adsofstupid.com
              </a>
            </div>
          </div>

          {/* Right: form */}
          <ScrollReveal>
            {/* TODO: Wire up form action (Formspree / serverless function / Next.js API route) */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs text-foreground/40 uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-800 border border-slate-700 focus:border-acid text-foreground font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder-foreground/20"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-foreground/40 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full bg-slate-800 border border-slate-700 focus:border-acid text-foreground font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder-foreground/20"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-foreground/40 uppercase tracking-widest mb-2">
                  Company / Brand
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  className="w-full bg-slate-800 border border-slate-700 focus:border-acid text-foreground font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder-foreground/20"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-foreground/40 uppercase tracking-widest mb-2">
                  Project Brief
                </label>
                <textarea
                  name="brief"
                  required
                  rows={5}
                  placeholder="Tell us about your project, goals, and budget..."
                  className="w-full bg-slate-800 border border-slate-700 focus:border-acid text-foreground font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder-foreground/20 resize-none"
                />
              </div>

              <m.button
                type="submit"
                className="w-full bg-acid text-background font-mono text-sm font-bold uppercase tracking-widest py-4 hover:bg-foreground transition-colors duration-200"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                Send It →
              </m.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
