import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Marquee } from "@/components/ui/Marquee";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad bg-background border-t border-slate-700"
    >
      {/* Header */}
      <div className="px-6 md:px-10 max-w-7xl mx-auto mb-16 md:mb-20">
        <ScrollReveal>
          <p className="font-mono text-acid text-xs uppercase tracking-widest mb-4">
            Client Love
          </p>
          <h2 className="text-display-lg font-display font-black text-foreground leading-none max-w-xl">
            Don't Take Our Word For It
          </h2>
        </ScrollReveal>
      </div>

      {/* Testimonial cards */}
      <div className="px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={i * 0.12} />
          ))}
        </div>
      </div>

      {/* Inverted marquee band */}
      <div className="mt-20 md:mt-28">
        <Marquee inverted />
      </div>
    </section>
  );
}
