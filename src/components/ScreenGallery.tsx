"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import PhoneFrame from "./PhoneFrame";
import type { AppGroup } from "@/data/projects";
import { fmt, type Dictionary } from "@/i18n/dictionaries";

type Props = { apps: AppGroup[]; accent: string; name: string; t: Dictionary["project"] };

export default function ScreenGallery({ apps, accent, name, t }: Props) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const screens = apps[active].screens;

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (d: number) => setLightbox((i) => (i === null ? i : (i + d + screens.length) % screens.length)),
    [screens.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    // In RTL the "next" screen is to the left.
    const forward = document.documentElement.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
    const back = forward === "ArrowLeft" ? "ArrowRight" : "ArrowLeft";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === forward) step(1);
      if (e.key === back) step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, step]);

  return (
    <div>
      {apps.length > 1 && (
        <div className="mb-10 inline-flex rounded-full border border-line bg-surface p-1" role="tablist" aria-label={t.chooseApp}>
          {apps.map((a, i) => (
            <button
              key={a.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${active === i ? "text-white" : "text-muted hover:text-ink"}`}
              style={active === i ? { background: accent } : undefined}
            >
              {a.label}
              <span className="ms-2 font-mono text-[11px] opacity-75">{a.screens.length}</span>
            </button>
          ))}
        </div>
      )}

      <div key={active} className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {screens.map((sc, i) => (
          <button
            key={sc.src}
            type="button"
            onClick={() => setLightbox(i)}
            className="group text-start"
            aria-label={fmt(t.openScreen, { title: sc.title })}
          >
            <PhoneFrame
              src={sc.src}
              alt={`${name}: ${sc.title}`}
              className="transition duration-300 group-hover:-translate-y-2"
              sizes="(min-width:1024px) 260px, (min-width:640px) 30vw, 45vw"
            />
            <p className="mt-4 flex items-baseline gap-2 text-sm">
              <span className="font-mono text-[11px] text-muted">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-medium">{sc.title}</span>
            </p>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={screens[lightbox].title}
          onClick={close}
        >
          <button className="absolute end-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label={t.close} onClick={close}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
          <button
            className="absolute start-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:start-8"
            aria-label={t.prev}
            onClick={(e) => { e.stopPropagation(); step(-1); }}
          >
            <svg className="rtl:-scale-x-100" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><path d="m15 6-6 6 6 6" /></svg>
          </button>
          <figure className="flex max-h-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[9/19.5] h-[78vh] max-h-[860px] overflow-hidden rounded-[28px] border border-white/10 bg-black">
              <Image src={screens[lightbox].src} alt={`${name}: ${screens[lightbox].title}`} fill sizes="420px" className="object-cover object-top" />
            </div>
            <figcaption className="mt-4 text-sm text-white/80">
              <span className="font-mono text-white/50" dir="ltr">{lightbox + 1} / {screens.length}</span> · {screens[lightbox].title}
            </figcaption>
          </figure>
          <button
            className="absolute end-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:end-8"
            aria-label={t.nextScreen}
            onClick={(e) => { e.stopPropagation(); step(1); }}
          >
            <svg className="rtl:-scale-x-100" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><path d="m9 6 6 6-6 6" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}
