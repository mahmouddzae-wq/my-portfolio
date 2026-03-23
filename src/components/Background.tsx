"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Crisp minimal grid */}
      <div 
        className="absolute inset-0 bg-grid-pattern [background-size:4rem_4rem] opacity-30"
        style={{ maskImage: "radial-gradient(circle at center, black, transparent 80%)" }}
      />
      
      {/* Massive blurred orbs for global lighting */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] left-[10%] h-[800px] w-[800px] rounded-full bg-accent-teal/10 blur-[120px]"
      />
      
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] right-[10%] h-[900px] w-[900px] rounded-full bg-accent-violet/10 blur-[120px]"
      />

      <div className="absolute inset-0 bg-background/50 backdrop-blur-[100px]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] opacity-80" />
    </div>
  );
}
