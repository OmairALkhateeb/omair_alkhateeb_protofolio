"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, localeNames, LOCALE_COOKIE, type Locale } from "@/i18n/config";

/** Same page, different language: swaps the first path segment. */
function swapLocale(pathname: string, to: Locale) {
  const parts = pathname.split("/");
  parts[1] = to;
  return parts.join("/") || `/${to}`;
}

export default function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function remember(l: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={label}
        className="flex h-10 items-center gap-1.5 rounded-full border border-line bg-surface px-3 font-mono text-[12px] uppercase text-ink transition hover:border-accent hover:text-accent"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
        </svg>
        {lang}
      </button>

      {open && (
        <ul role="menu" className="card absolute end-0 top-12 z-50 min-w-[160px] overflow-hidden p-1.5">
          {locales.map((l) => (
            <li key={l} role="none">
              <Link
                role="menuitem"
                href={swapLocale(pathname, l)}
                hrefLang={l}
                lang={l}
                onClick={() => remember(l)}
                aria-current={l === lang ? "true" : undefined}
                className={`flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-sm transition hover:bg-surface-2 ${
                  l === lang ? "text-accent" : "text-ink"
                }`}
              >
                {localeNames[l]}
                <span className="font-mono text-[11px] uppercase text-muted">{l}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
