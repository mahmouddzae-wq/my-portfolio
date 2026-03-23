"use client";

import { motion } from "framer-motion";
import React from "react";
import Typing from "@/components/ui/Typing";
import RippleButton from "@/components/ui/RippleButton";
import Photo3D from "@/components/ui/Photo3D";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const headlineWords = [
    "CS Engineering Student",
    "Systems Thinking",
    "AI Enthusiast",
    "Web Developer",
    "Desktop Developer",
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center pt-20 pb-32">
      <div className="mx-auto max-w-7xl px-4 w-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_400px] items-center gap-12 lg:gap-16">
          {/* Main Text Content */}
          <div className="flex flex-col items-start z-10 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-accent-teal/30 bg-accent-teal/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent-teal shadow-glow"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
              </span>
              Based in reality. Building for the future.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-[5.5rem] leading-[1.1]"
            >
              Hi, I am Mahmoud. <br />
              <div className="mt-3 text-slate-500 h-[1.3em] overflow-hidden text-3xl sm:text-5xl lg:text-[4.5rem] w-full">
                <Typing words={headlineWords} />
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
            >
              I bridge the gap between low-level systems architecture and stunning user interfaces.
              Focused on performance, aesthetics, and writing highly intentional code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="group relative overflow-hidden rounded-full bg-slate-100 px-8 py-4 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-white/40" />
                </div>
                View My Work
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="rounded-full border border-border bg-surface/50 px-8 py-4 text-sm font-semibold text-slate-300 transition-all hover:bg-white/5 hover:text-white active:scale-95 shadow-glass"
              >
                Reach Out
              </button>
            </motion.div>
          </div>

          {/* 3D Photo Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex w-full justify-center lg:block z-10 mb-4 lg:mb-0"
          >
            {/* The 3D Photo from the previous step */}
            <Photo3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
