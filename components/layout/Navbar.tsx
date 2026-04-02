"use client";

import { useEffect, useState } from "react";
import { m, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <m.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      animate={{
        backgroundColor: scrolled ? "rgba(8, 8, 8, 0.85)" : "rgba(8, 8, 8, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottomColor: scrolled ? "rgba(42, 42, 42, 1)" : "rgba(42, 42, 42, 0)",
      }}
      style={{ borderBottomWidth: 1 }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-black text-foreground tracking-tighter text-lg md:text-xl hover:text-acid transition-colors duration-200"
        >
          ADS OF STUPID
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px bg-acid w-0 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-acid text-background font-mono text-xs font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-foreground transition-colors duration-200"
        >
          Start a Project
        </a>
      </nav>
    </m.header>
  );
}
