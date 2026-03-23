"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

export default function Experience() {
  const experience: ExperienceItem[] = [
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2025 — Present",
      description:
        "Building modern, responsive websites and web applications for clients using Next.js, React, and Tailwind CSS. Focused on delivering pixel-perfect, performant solutions.",
      skills: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    },
    {
      role: "Desktop Application Developer",
      company: "Personal Projects",
      period: "2025 — Present",
      description:
        "Developed Java-based desktop applications including a Pharmacy Management System and Library Management System with full CRUD operations and database integration.",
      skills: ["Java", "OOP", "Database", "GUI"],
    },
    {
      role: "AI & Automation Explorer",
      company: "Self-Learning",
      period: "2025 — Present",
      description:
        "Exploring LLM integration, prompt engineering, and agentic development workflows to build smarter, AI-assisted applications.",
      skills: ["LLMs", "Prompt Engineering", "Agentic Patterns"],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-32 py-24 relative z-10 bg-background/50">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="What I Do"
          title="Real-world impact."
          subtitle="Hands-on experience building systems that solve problems and delight users."
        />

        <div className="mt-16 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-violet/60 via-accent-teal/40 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.role}
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
                <div className="absolute left-[18px] top-8 h-4 w-4 rounded-full border-2 border-accent-violet bg-background shadow-[0_0_12px_rgba(167,139,250,0.5)] hidden md:block" />

                <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 sm:p-10 shadow-glass hover:shadow-glow transition-shadow duration-500">
                  <div className="absolute top-0 right-0 h-[150px] w-[150px] rounded-full bg-accent-violet/5 blur-[80px] transition-all duration-700 group-hover:bg-accent-violet/15" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-accent-violet font-semibold tracking-wide mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex items-center rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-400 tracking-widest uppercase">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-400 leading-relaxed text-base mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 border border-white/5 transition-colors group-hover:border-accent-teal/30"
                      >
                        {s}
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
