"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function Typing({
  words,
  className,
  cursorClassName,
  typingMs = 40,
  deletingMs = 25,
  pauseMs = 900
}: {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typingMs?: number;
  deletingMs?: number;
  pauseMs?: number;
}) {
  const reducedMotion = useReducedMotion();
  const normalizedWords = useMemo(() => words.filter(Boolean), [words]);

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion || normalizedWords.length === 0) return;

    const currentWord = normalizedWords[wordIndex % normalizedWords.length] ?? "";
    const atEnd = charIndex >= currentWord.length;
    const atStart = charIndex <= 0;

    const delay = isDeleting ? deletingMs : typingMs;

    const timer = window.setTimeout(() => {
      if (!isDeleting && atEnd) {
        window.setTimeout(() => setIsDeleting(true), pauseMs);
        return;
      }

      if (isDeleting && atStart) {
        setIsDeleting(false);
        setWordIndex((v) => (v + 1) % normalizedWords.length);
        return;
      }

      setCharIndex((v) => v + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [
    charIndex,
    deletingMs,
    isDeleting,
    normalizedWords,
    pauseMs,
    typingMs,
    wordIndex,
    reducedMotion
  ]);

  const currentWord = normalizedWords[wordIndex % normalizedWords.length] ?? "";
  const typed = reducedMotion ? currentWord : currentWord.slice(0, charIndex);

  return (
    <span className={className}>
      {typed}
      {!reducedMotion && (
        <span
          className={
            cursorClassName ??
            "ml-0.5 inline-block h-[1.1em] w-[0.12em] -translate-y-[0.08em] rounded bg-cyan-300 opacity-90 shadow-neonStrong"
          }
          aria-hidden="true"
        />
      )}
    </span>
  );
}

