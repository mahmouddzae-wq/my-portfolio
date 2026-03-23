"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { SECTIONS, type SectionId } from "@/lib/sections";

export default function Navbar() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActive(visible[0].target.id as SectionId);
      },
      { root: null, threshold: [0.1, 0.5], rootMargin: "-20% 0px -40% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const onSelect = (id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 md:bottom-10"
    >
      <nav className="flex items-center gap-0.5 sm:gap-1 rounded-full border border-border bg-surface/50 px-1.5 py-1.5 backdrop-blur-2xl shadow-glass">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onSelect(s.id)}
              className="group relative rounded-full px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-medium transition-colors outline-none"
            >
              <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-background" : "text-slate-400 group-hover:text-slate-200"}`}>
                {s.label}
              </span>
              {isActive && (
                <motion.span
                  layoutId="navbar-active"
                  className="absolute inset-0 rounded-full bg-accent-teal shadow-glow"
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </motion.div>
  );
}
