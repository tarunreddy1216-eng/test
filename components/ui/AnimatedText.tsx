"use client";

import { m } from "framer-motion";
import { wordRevealParent, wordRevealChild } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export function AnimatedText({ text, className, once = true }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <m.span
      className={`inline ${className ?? ""}`}
      variants={wordRevealParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden"
          style={{ marginRight: "0.25em" }}
        >
          <m.span
            className="inline-block will-change-transform"
            variants={wordRevealChild}
          >
            {word}
          </m.span>
        </span>
      ))}
    </m.span>
  );
}
