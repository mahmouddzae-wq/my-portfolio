"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  icon: string;
};

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: "Java Programming",
      issuer: "University Coursework",
      date: "2024",
      icon: "☕",
    },
    {
      title: "Web Development Fundamentals",
      issuer: "Online Learning",
      date: "2024",
      icon: "🌐",
    },
    {
      title: "Git & Version Control",
      issuer: "Self-Study",
      date: "2024",
      icon: "🔀",
    },
    {
      title: "AI & Prompt Engineering",
      issuer: "Self-Study",
      date: "2025",
      icon: "🤖",
    },
    {
      title: "React & Next.js",
      issuer: "Online Learning",
      date: "2025",
      icon: "⚛️",
    },
    {
      title: "Database Management",
      issuer: "University Coursework",
      date: "2024",
      icon: "🗄️",
    },
  ];

  return (
    <section id="certifications" className="scroll-mt-32 py-24 relative z-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Credentials"
          title="Continuous growth."
          subtitle="Certifications and courses that validate my commitment to learning and mastery."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="group relative flex flex-col justify-between rounded-[2rem] border border-border bg-surface p-8 shadow-glass hover:shadow-glow transition-all duration-500 h-full">
                <div className="absolute top-0 right-0 h-[120px] w-[120px] rounded-full bg-accent-teal/5 blur-[60px] transition-all duration-700 group-hover:bg-accent-teal/15" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl">{cert.icon}</span>
                    <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-[10px] font-bold text-slate-500 tracking-widest uppercase">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-teal transition-all duration-500">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    {cert.issuer}
                  </p>
                </div>

                {/* Bottom accent bar */}
                <div className="mt-6 h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
