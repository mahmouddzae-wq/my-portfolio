"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Pharmacy Management System",
      description: "A comprehensive management system to handle day-to-day pharmacy operations, streamlining inventory and sales processes efficiently.",
      tech: ["Java", "OOP", "Database"],
      href: "#"
    },
    {
      title: "Library Management System",
      description: "An efficient desktop application for managing library resources, tracking book issuances, returns, and organizing the catalog.",
      tech: ["Java", "GUI", "Desktop"],
      href: "#"
    },
    {
      title: "Task Manager",
      description: "A full-stack task management application designed to organize workflows, track progress, and boost daily productivity.",
      tech: ["Spring Boot", "JS", "CSS", "HTML"],
      href: "#"
    },
    {
      title: "Portfolio Engine",
      description: "This exact reusable portfolio UI kit. Loaded with animated cards, precise interactions, and a fully custom 3D math engine under the hood.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      href: "#"
    }
  ];

  return (
    <section id="projects" className="scroll-mt-32 py-24 relative z-10 bg-background/50">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="My Work"
          title="Designed for depth."
          subtitle="Selected explorations across systems programming and top-tier user interfaces."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Project Card */}
              <a 
                href={p.href}
                className="group relative block overflow-hidden rounded-[2.5rem] border border-border bg-surface p-1 shadow-glass transition-transform duration-500 hover:scale-[1.02]"
              >
                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-accent-teal/0 via-accent-violet/10 to-accent-teal/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-xl" />
                
                {/* Content Container */}
                <div className="relative h-full rounded-[2.3rem] border border-white/5 bg-[#080808] p-8 sm:p-12">
                  <div className="flex items-center justify-between mb-8">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent-teal/10 animate-pulse-slow">
                      <div className="h-4 w-4 rounded-full bg-accent-teal shadow-glow" />
                    </div>
                    {/* Arrow Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-transform duration-500 group-hover:-rotate-45 group-hover:border-accent-teal/50">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-accent-teal">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-500 transition-all duration-500">
                    {p.title}
                  </h3>
                  
                  <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-sm">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-white/5 px-4 py-2 font-medium text-slate-300 shadow-glass">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
