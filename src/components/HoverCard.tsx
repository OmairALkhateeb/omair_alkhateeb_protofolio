"use client";

import Link from "next/link";
import { useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  href: string;
  accent: string;
  className?: string;
  children: ReactNode;
};

/**
 * Project card link with a cursor-following spotlight.
 * The pointer position is written to CSS variables directly (no React re-render),
 * and all motion lives in globals.css under `.pcard`.
 */
export default function HoverCard({ href, accent, className = "", children }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const frame = useRef(0);

  function onPointerMove(e: React.PointerEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - r.left}px`);
      el.style.setProperty("--my", `${clientY - r.top}px`);
    });
  }

  return (
    <Link
      ref={ref}
      href={href}
      onPointerMove={onPointerMove}
      className={`pcard group card relative overflow-hidden ${className}`}
      style={{ "--p": accent } as CSSProperties}
    >
      <span className="pcard-spot" aria-hidden />
      {children}
    </Link>
  );
}
