"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

type EducationItem = {
  degree: string;
  school: string;
  period: string;
  description: string;
  highlights: string[];
};

export default function Education() {
  const education: EducationItem[] = [
    {
      degree: "Computer Science Engineering",
      school: "University of saida dr. moulay taher",
      period: "2025 — Present",
      description:
        "Pursuing a rigorous CS engineering degree with deep focus on algorithms, data structures, systems architecture, and software development.",
      highlights: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Operating Systems",
      ],
    },

  ];

  return (
    <section id="education" className="scroll-mt-32 py-24 relative z-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Learning Path"
          title="Academic journey."
          subtitle="Building rigorous foundations to power real-world engineering."
        />

        <div className="mt-16 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-teal/60 via-accent-violet/40 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-8 h-4 w-4 rounded-full border-2 border-accent-teal bg-background shadow-[0_0_12px_rgba(56,189,248,0.5)] hidden md:block" />

                <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 sm:p-10 shadow-glass hover:shadow-glow transition-shadow duration-500">
                  <div className="absolute top-0 right-0 h-[150px] w-[150px] rounded-full bg-accent-teal/5 blur-[80px] transition-all duration-700 group-hover:bg-accent-teal/15" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-accent-teal font-semibold tracking-wide mt-1">
                        {edu.school}
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex items-center rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-400 tracking-widest uppercase">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-slate-400 leading-relaxed text-base mb-6">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 border border-white/5 transition-colors group-hover:border-accent-violet/30"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
