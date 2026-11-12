import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale } from "@/i18n/config";

// not-found.tsx receives no params, so it uses the default language.
export default function NotFound() {
  const t = getDictionary(defaultLocale).notFound;
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-[72px] text-center">
      <p className="font-mono text-[13px] text-accent">// 404</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight">{t.title}</h1>
      <p className="mt-4 text-muted">{t.body}</p>
      <Link href={`/${defaultLocale}`} className="mt-8 inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-medium text-white">
        {t.back}
      </Link>
    </section>
  );
}
