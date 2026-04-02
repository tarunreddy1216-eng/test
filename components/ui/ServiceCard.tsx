"use client";

import { m } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import type { Service } from "@/lib/data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <m.div
      variants={staggerItem}
      className="group border border-slate-700 p-8 hover:border-acid transition-colors duration-300 relative overflow-hidden"
    >
      {/* Hover background */}
      <div className="absolute inset-0 bg-acid/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <span className="font-mono text-acid text-sm tracking-widest">{service.number}</span>
        <h3 className="font-display font-bold text-foreground mt-4 mb-3 text-xl md:text-2xl leading-tight">
          {service.title}
        </h3>
        <p className="text-foreground/50 text-sm leading-relaxed">{service.description}</p>

        {/* Arrow */}
        <div className="mt-6 flex items-center gap-2 text-acid text-sm font-mono">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Learn more
          </span>
          <m.span
            className="text-lg"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            →
          </m.span>
        </div>
      </div>
    </m.div>
  );
}
