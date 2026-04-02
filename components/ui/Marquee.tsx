import { marqueeItems } from "@/lib/data";

interface MarqueeProps {
  speed?: "normal" | "slow";
  inverted?: boolean;
}

export function Marquee({ speed = "normal", inverted = false }: MarqueeProps) {
  const items = [...marqueeItems, ...marqueeItems]; // doubled for seamless loop

  return (
    <div
      className={`w-full overflow-hidden border-y py-4 ${
        inverted
          ? "border-background bg-acid text-background"
          : "border-slate-700 bg-transparent text-foreground"
      }`}
    >
      <div
        className={`flex whitespace-nowrap will-change-transform ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className={`mx-8 font-mono text-sm uppercase tracking-widest ${
              inverted ? "text-background" : "text-foreground/60"
            }`}
          >
            {item}
            <span className={`mx-8 ${inverted ? "text-background/40" : "text-acid"}`}>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
