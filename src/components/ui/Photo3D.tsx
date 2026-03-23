"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Photo3D() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for a fluid 3D tilt
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["18deg", "-18deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-18deg", "18deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize to -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto w-[280px] md:w-[320px] aspect-square rounded-[2rem]"
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="relative h-full w-full rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-300/20 via-fuchsia-300/10 to-indigo-300/20 opacity-80" />

        {/* The Profile Image popping out */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center p-4 pointer-events-none"
          style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/my photo.png"
            alt="Profile"
            className="h-full w-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        {/* Floating status tag with even more 3D depth */}
        <motion.div 
          className="absolute bottom-6 left-1/2 z-20 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#050816]/70 backdrop-blur-md px-4 py-3 shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
          style={{ transform: "translateZ(110px)" }}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-slate-300">Status</span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold text-cyan-300 tracking-wide">Learning & Shipping</span>
            </div>
          </div>
        </motion.div>

        {/* Soft edge highlights */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/[0.08]" />
      </motion.div>
    </motion.div>
  );
}
