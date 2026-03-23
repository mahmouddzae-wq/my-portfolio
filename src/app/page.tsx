"use client";

import { motion, useSpring, useScroll } from "framer-motion";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import React from "react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent"
      aria-hidden="true"
    >
      <motion.div
        style={{ scaleX }}
        className="h-full origin-left bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300"
      />
    </motion.div>
  );
}

export default function Page() {
  return (
    <div className="relative">
      <Background />
      <ScrollProgress />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        <footer className="py-10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-6 backdrop-blur-md md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-slate-300">
                © {new Date().getFullYear()} Mahmoud. Built with Next.js, Tailwind, and Framer Motion.
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a href="#home" className="text-slate-200/90 transition hover:text-white">
                  Back to top
                </a>
                <span className="text-slate-500/60">•</span>
                <a
                  href="https://github.com/mahmouddzae-wq"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-200/90 transition hover:text-white"
                >
                  GitHub
                </a>
                <span className="text-slate-500/60">•</span>
                <a
                  href="https://www.instagram.com/mahmoud.beneddine/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-200/90 transition hover:text-white"
                >
                  Instagram
                </a>
                <span className="text-slate-500/60">•</span>
                <a
                  href="https://www.facebook.com/mahmoud.beneddine"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-200/90 transition hover:text-white"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

