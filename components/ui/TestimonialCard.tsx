import type { Testimonial } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

export function TestimonialCard({
  testimonial,
  delay = 0,
}: {
  testimonial: Testimonial;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay} className="border border-slate-700 p-8 md:p-10 flex flex-col gap-6">
      {/* Big quote mark */}
      <span
        className="font-display font-black text-acid leading-none select-none"
        style={{ fontSize: "clamp(4rem, 8vw, 7rem)", lineHeight: 1 }}
        aria-hidden
      >
        "
      </span>

      {/* Quote */}
      <blockquote className="font-display font-bold text-foreground leading-tight flex-1"
        style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
        {testimonial.quote}
      </blockquote>

      {/* Attribution */}
      <div className="border-t border-slate-700 pt-6">
        <p className="font-display font-bold text-foreground text-sm">{testimonial.author}</p>
        <p className="font-mono text-xs text-acid uppercase tracking-widest mt-1">
          {testimonial.role} · {testimonial.company}
        </p>
      </div>
    </ScrollReveal>
  );
}
