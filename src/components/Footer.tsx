import SocialLinks from "./SocialLinks";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Footer({ name, t }: { name: string; t: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {name}. {t.built}
        </p>
        <div className="flex items-center gap-5">
          <SocialLinks />
          <a href="#top" className="inline-flex items-center gap-2 font-mono text-[13px] transition hover:text-ink">
            {t.top}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M12 19V5m0 0-6 6m6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
