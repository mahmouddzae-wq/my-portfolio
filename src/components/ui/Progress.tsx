"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function Progress({
  label,
  value,
  gradient = "from-cyan-300 to-fuchsia-300"
}: {
  label: string;
  value: number; // 0..100
  gradient?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="mb-6" ref={ref}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-200">{label}</span>
        <span className="text-xs text-slate-400">{value}%</span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${gradient} shadow-neon`}
        />
      </div>
    </div>
  );
}

