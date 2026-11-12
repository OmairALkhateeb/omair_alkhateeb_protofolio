import type { ReactNode, ElementType, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  /** Animate on page load (for above-the-fold content) instead of on scroll. */
  now?: boolean;
  className?: string;
};

/**
 * Pure-CSS entrance animation. Content is always visible without JS;
 * browsers that support scroll-driven animations get a fade/slide on scroll.
 */
export default function Reveal({ children, as: Tag = "div", delay = 0, now = false, className = "" }: Props) {
  return (
    <Tag className={`${now ? "rise" : "reveal"} ${className}`} style={{ "--delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
