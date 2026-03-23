"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
      >
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-teal/30 bg-accent-teal/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent-teal shadow-glow">
            {eyebrow}
          </div>
        ) : null}

        <h2 className="text-4xl font-black tracking-tighter sm:text-5xl lg:text-6xl text-white">
          {title}
        </h2>

        {subtitle ? (
          <p className="max-w-2xl text-lg leading-relaxed text-slate-400 mt-2">
            {subtitle}
          </p>
        ) : null}
      </motion.div>
    </div>
  );
}
