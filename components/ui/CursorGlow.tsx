"use client";

import { useEffect, useRef } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const glowX = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const glowY = useSpring(mouseY, { stiffness: 400, damping: 40 });

  const dotX = useSpring(mouseX, { stiffness: 800, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Glow blob */}
      <m.div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: glowX,
          top: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,255,0,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Dot */}
      <m.div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: dotX,
          top: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#C8FF00",
        }}
      />
    </>
  );
}
