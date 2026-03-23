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

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex items-center gap-4"
            >
              {/* GitHub */}
              <a
                href="https://github.com/mahmouddzae-wq"
                target="_blank"
                rel="noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/50 backdrop-blur-sm transition-all duration-300 hover:border-accent-teal/50 hover:bg-accent-teal/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                <svg className="h-5 w-5 text-slate-400 transition-colors group-hover:text-accent-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/mahmoud.beneddine/"
                target="_blank"
                rel="noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/50 backdrop-blur-sm transition-all duration-300 hover:border-fuchsia-400/50 hover:bg-fuchsia-400/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(232,121,249,0.3)]"
              >
                <svg className="h-5 w-5 text-slate-400 transition-colors group-hover:text-fuchsia-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/mahmoud.beneddine"
                target="_blank"
                rel="noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-400/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]"
              >
                <svg className="h-5 w-5 text-slate-400 transition-colors group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z"/>
                </svg>
              </a>
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
