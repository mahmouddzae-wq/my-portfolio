"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

function SkillCard({ label, level, desc }: { label: string, level: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col rounded-[2rem] border border-border bg-surface p-8 shadow-glass hover:shadow-glow"
    >
      <div className="text-3xl font-black text-white/5 tracking-tighter absolute right-6 top-4 transition-colors group-hover:text-white/10 select-none">
        {level}
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="h-3 w-3 rounded-full bg-accent-violet group-hover:shadow-[0_0_15px_rgba(167,139,250,0.8)] transition-all" />
        <h3 className="text-xl font-bold text-slate-100">{label}</h3>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed font-medium">
        {desc}
      </p>
    </motion.div>
  );
}

export default function Skills() {
  const skills = [
    { label: "Java", level: "01", desc: "My primary foundation for object-oriented design and backend logic." },
    { label: "React / Next.js", level: "02", desc: "Used extensively for crafting interactive, highly optimized frontends." },
    { label: "C Fundamentals", level: "03", desc: "Understanding memory, pointers, and low-level system behaviors." },
    { label: "Tailwind CSS", level: "04", desc: "Styling engine of choice for rapidly building premium, scalable designs." },
    { label: "Advanced UI/UX", level: "05", desc: "Framer Motion, animations, and typography to build pixel-perfect interfaces." },
    { label: "AI & Tools", level: "06", desc: "Integrating LLMs, prompt engineering, and utilizing agentic developers." },
    { label: "Git & GitHub", level: "07", desc: "Version control, source code management, and collaborative development." }
  ];

  return (
    <section id="skills" className="scroll-mt-32 py-24 relative z-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="My Toolbox"
          title="Mastering the stack."
          subtitle="A refined set of highly tailored skills that map to pure performance and premium visuals."
        />

        {/* Infinite Marquee Banner */}
        <div className="mt-16 w-full overflow-hidden whitespace-nowrap border-y border-border py-4 bg-background [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="inline-block animate-marquee w-fit">
             {[...Array(2)].map((_, i) => (
                <span key={i} className="inline-flex items-center gap-10 mx-6 text-sm font-semibold tracking-widest text-slate-600 uppercase">
                  <span>Algorithms</span> <span className="text-accent-teal">/</span>
                  <span>Data Structures</span> <span className="text-accent-teal">/</span>
                  <span>Systems Architecture</span> <span className="text-accent-teal">/</span>
                  <span>Clean Code</span> <span className="text-accent-teal">/</span>
                  <span>Performance</span> <span className="text-accent-teal">/</span>
                  <span>Version Control</span> <span className="text-accent-teal">/</span>
                </span>
             ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <SkillCard label={s.label} level={s.level} desc={s.desc} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
