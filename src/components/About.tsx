"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-32 py-24 relative z-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="My Approach"
          title="Building with intention."
          subtitle="A computer science engineering student obsessed with the intersection of performant systems and beautiful design."
        />

        {/* Bento Grid Layout */}
        <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* Main Large Bento Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 shadow-glass lg:col-span-2"
          >
            <div className="absolute top-0 right-0 h-[200px] w-[200px] rounded-full bg-accent-teal/10 blur-[100px] transition-transform duration-700 group-hover:bg-accent-teal/20" />

            <h3 className="text-2xl font-bold tracking-tight text-white mb-4">The core philosophy</h3>
            <p className="text-slate-400 leading-relaxed text-lg max-w-xl relative tracking-wide">
              I began with fundamentals: algorithms, memory management, and process architecture. This built a crucial intuition for how code behaves behind the scenes.
              Now, I apply those rigorous concepts to modern development—building interactive web applications that don't just look perfect, but run flawlessly under the hood.
            </p>
          </motion.div>

          {/* Small Bento Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden flex flex-col justify-end rounded-[2rem] border border-border bg-surface p-8 shadow-glass min-h-[300px]"
          >
            <div className="absolute bottom-0 right-0 h-[300px] w-[300px] border border-accent-violet/20 rounded-full opacity-0 scale-50 transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

            <div className="relative z-10">
              <span className="block text-4xl font-light text-accent-violet mb-2">99.9%</span>
              <p className="text-sm font-semibold text-white tracking-widest uppercase mb-1">Attention to Detail</p>
              <p className="text-xs text-slate-500">Leaving nothing to chance.</p>
            </div>
          </motion.div>

          {/* Small Bento Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col justify-between rounded-[2rem] border border-border bg-[#050505] p-8 shadow-glass"
          >
            <div className="flex flex-wrap gap-2">
              {["Agentic patterns", "Profilers", "AI integration"].map(t => (
                <span key={t} className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-slate-300 transition-colors group-hover:border-accent-teal/50">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-2">Current Explores</h3>
              <p className="text-sm text-slate-400">Expanding into AI agent workflows and heavy performance profiling.</p>
            </div>
          </motion.div>

          {/* Medium Bento Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-surface to-background p-8 shadow-glass lg:col-span-2"
          >
            <div className="absolute inset-0 bg-grid-pattern [background-size:2rem_2rem] opacity-[0.03]" />
            <div className="relative z-10 grid gap-8 sm:grid-cols-3 h-full items-center">
              {[
                { k: "Strength", v: "Problem solving" },
                { k: "Style", v: "Clean & reusable code" },
                { k: "Drive", v: "Ship meaningful logic" },
              ].map(item => (
                <div key={item.k} className="relative before:absolute before:-left-4 before:top-2 before:h-8 before:w-[2px] before:bg-accent-teal/40">
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">{item.k}</div>
                  <div className="mt-2 text-lg font-bold text-white tracking-wide">{item.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
