"use client";

import { m } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="section-pad px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="mb-16 md:mb-20">
          <p className="font-mono text-acid text-xs uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="text-display-lg font-display font-black text-foreground max-w-2xl leading-none">
            Services Built to Break Through
          </h2>
        </ScrollReveal>

        {/* Grid */}
        <m.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-700"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <div key={service.id} className="bg-background">
              <ServiceCard service={service} />
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
