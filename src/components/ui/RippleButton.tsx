"use client";

import { useMemo, useState } from "react";

type Ripple = { id: string; x: number; y: number };

export default function RippleButton({
  onClick,
  className,
  children,
  type = "button",
  disabled
}: {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const baseClass =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-3 text-sm font-medium transition-transform active:scale-[0.99]";

  const rippleColorClass = useMemo(() => {
    if (className?.includes("from-cyan-300")) return "bg-cyan-300/25";
    if (className?.includes("from-fuchsia-300")) return "bg-fuchsia-300/25";
    return "bg-white/15";
  }, [className]);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={(e) => {
        if (disabled) return;

        const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
        setRipples((prev) => [...prev, { id, x, y }]);
        window.setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 650);

        onClick?.();
      }}
      className={`${baseClass} ${className ?? ""}`}
    >
      {children}

      {ripples.map((r) => (
        <span
          key={r.id}
          className={`pointer-events-none ripple-span absolute left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 ${rippleColorClass}`}
          style={{ left: r.x, top: r.y }}
          aria-hidden="true"
        />
      ))}
    </button>
  );
}

