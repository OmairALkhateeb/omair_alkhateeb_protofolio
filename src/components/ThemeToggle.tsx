"use client";

import { useLayoutEffect, useState } from "react";

type Theme = "light" | "dark";

function savedTheme(): Theme {
  try {
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export default function ThemeToggle({ labels }: { labels: { toLight: string; toDark: string } }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Re-apply the saved theme before paint. In development React resets <html>
  // attributes on remount, which would otherwise drop the light theme; no-op in production.
  useLayoutEffect(() => {
    const t = savedTheme();
    document.documentElement.dataset.theme = t;
    setTheme(t);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? labels.toLight : labels.toDark}
      className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-accent hover:text-accent"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {theme === "light" ? (
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        )}
      </svg>
    </button>
  );
}
