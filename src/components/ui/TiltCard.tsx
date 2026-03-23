"use client";

import { useReducedMotion } from "framer-motion";
import React, { useMemo, useRef, useState } from "react";

export default function TiltCard({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<{ transform: string; glare: string }>(() => ({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    glare: "radial-gradient(500px circle at 50% 0%, rgba(56,189,248,0.20), transparent 60%)"
  }));

  const maxDeg = 10;

  const cardClass =
    "group relative h-full w-full rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md transition-shadow duration-300 group-hover:shadow-neonStrong";

  const mergedClass = useMemo(() => `${cardClass} ${className ?? ""}`, [className]);

  return (
    <div
      ref={ref}
      className={mergedClass}
      style={{
        transform: reducedMotion ? undefined : style.transform
      }}
      onPointerMove={(e) => {
        if (reducedMotion) return;
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width; // 0..1
        const py = (e.clientY - rect.top) / rect.height; // 0..1

        const rotY = (px - 0.5) * maxDeg * 2; // -max..max
        const rotX = -(py - 0.5) * maxDeg * 2;

        const glareX = px * 100;
        const glareY = py * 100;

        setStyle({
          transform: `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(0)`,
          glare: `radial-gradient(500px circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(56,189,248,0.26), transparent 55%)`
        });
      }}
      onPointerLeave={() => {
        if (reducedMotion) return;
        setStyle({
          transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          glare: "radial-gradient(500px circle at 50% 0%, rgba(56,189,248,0.20), transparent 60%)"
        });
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{ backgroundImage: style.glare }}
        aria-hidden="true"
      />
      <div className="relative p-6">{children}</div>
    </div>
  );
}

