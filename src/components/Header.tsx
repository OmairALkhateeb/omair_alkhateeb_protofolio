"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Avatar from "./Avatar";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = { lang: Locale; name: string; nav: Dictionary["nav"] };

export default function Header({ lang, name, nav }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${lang}#work`, label: nav.work },
    { href: `/${lang}#expertise`, label: nav.expertise },
    { href: `/${lang}#experience`, label: nav.experience },
    { href: `/${lang}#contact`, label: nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Link href={`/${lang}`} className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Avatar size={42} alt={name} className="transition duration-300 group-hover:scale-105" />
          <span className="hidden font-display text-[15px] font-semibold tracking-tight sm:block">{name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-2 font-mono text-[13px] text-muted transition hover:bg-surface-2 hover:text-ink"
            >
              <span className="text-accent">//</span> {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher lang={lang} label={nav.language} />
          <ThemeToggle labels={{ toLight: nav.toLight, toDark: nav.toDark }} />
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener"
            className="hidden h-10 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-bg transition hover:opacity-85 sm:inline-flex"
          >
            {nav.resume}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
              <path d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface lg:hidden"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="container-x flex flex-col gap-1 pb-5 lg:hidden" aria-label="Mobile">
          {links.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-mono text-sm text-muted hover:bg-surface-2 hover:text-ink"
            >
              <span className="text-accent">//</span> {n.label}
            </a>
          ))}
          <a href={profile.cv} target="_blank" rel="noopener" className="mt-2 rounded-xl bg-ink px-4 py-3 text-center text-sm font-medium text-bg">
            {nav.downloadResume}
          </a>
        </nav>
      )}
    </header>
  );
}
