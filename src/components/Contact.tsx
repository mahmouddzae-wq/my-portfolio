"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => {
      const { name, email, message } = formData;
      const to = "you@example.com";
      const subject = `Portfolio contact - ${name}`;
      const body = `Message:\n${message}\n\nFrom:\n${name}\n${email}`;
      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setStatus("sent");
    }, 650);
  };

  return (
    <section id="contact" className="scroll-mt-32 py-24 relative z-10 mb-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-16 text-center">
          <SectionHeading
            eyebrow="Reach Out"
            title="Let's build the future."
            subtitle="I'm open to discussing software architecture, frontend physics, or anything in between."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-2xl mx-auto rounded-[3rem] border border-border bg-surface p-8 sm:p-12 shadow-glowViolet"
        >
          <div className="absolute top-0 right-0 w-full h-[50%] bg-accent-violet/5 blur-[80px] rounded-t-[3rem] pointer-events-none" />

          <form onSubmit={onSubmit} className="relative z-10 space-y-8 flex flex-col">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-border py-2 text-lg text-white placeholder:text-slate-600 outline-none transition-colors focus:border-accent-violet"
                  placeholder="your name"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-border py-2 text-lg text-white placeholder:text-slate-600 outline-none transition-colors focus:border-accent-teal"
                  placeholder="youremail.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full resize-none bg-transparent border-b border-border py-2 text-lg text-white placeholder:text-slate-600 outline-none transition-colors focus:border-white"
                placeholder="What are we building?"
              />
            </div>

            <div className="pt-4 flex justify-between items-center flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <a href="https://github.com/mahmouddzae-wq" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">GitHub</a>
                <a href="https://www.instagram.com/mahmoud.beneddine/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Instagram</a>
                <a href="https://www.facebook.com/mahmoud.beneddine" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Facebook</a>
              </div>

              <button
                type="submit"
                disabled={status !== "idle" && status !== "sent"}
                className="relative overflow-hidden rounded-full bg-white px-10 py-4 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                {status === "sending" ? "Opening mail..." : status === "sent" ? "Sent" : "Submit →"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
