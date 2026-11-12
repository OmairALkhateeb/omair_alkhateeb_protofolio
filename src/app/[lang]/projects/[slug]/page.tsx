import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";
import ScreenGallery from "@/components/ScreenGallery";
import { getNextProject, getProject, projects, screenCount } from "@/data/projects";
import { defaultLocale, hasLocale, locales } from "@/i18n/config";
import { fmt, getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

async function load(props: PageProps<"/[lang]/projects/[slug]">) {
  const { lang: raw, slug } = await props.params;
  const lang = hasLocale(raw) ? raw : defaultLocale;
  const t = getDictionary(lang);
  return { lang, slug, t, p: getProject(slug, t) };
}

export async function generateMetadata(props: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { slug, p } = await load(props);
  if (!p) return {};
  return {
    title: `${p.name}: ${p.tagline}`,
    description: p.intro,
    alternates: { languages: Object.fromEntries(locales.map((l) => [l, `/${l}/projects/${slug}`])) },
    openGraph: { title: p.name, description: p.intro, images: [p.cover] },
  };
}

export default async function ProjectPage(props: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug, t, p } = await load(props);
  if (!p) notFound();
  const next = getNextProject(slug, t);
  const tp = t.project;

  const meta = [
    { k: tp.role, v: p.role },
    { k: tp.platform, v: p.platforms },
    { k: tp.apps, v: p.apps.map((a) => a.label).join(" + ") },
    { k: tp.category, v: p.categoryLabel },
  ];

  return (
    <article style={{ "--p": p.accent } as React.CSSProperties}>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-[72px]">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute -top-32 end-[-5%] h-[520px] w-[620px] rounded-full opacity-35 blur-[120px]"
          style={{ background: `radial-gradient(circle, ${p.accent}, transparent 70%)` }}
          aria-hidden
        />

        <div className="container-x relative pt-10">
          <nav aria-label={tp.breadcrumb} className="flex flex-wrap items-center gap-2 font-mono text-[13px] text-muted">
            <Link href={`/${lang}`} className="inline-flex items-center gap-1.5 hover:text-ink">
              <svg className="rtl:-scale-x-100" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M19 12H5m0 0 6 6m-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {tp.home}
            </Link>
            <span className="opacity-40">/</span>
            <Link href={`/${lang}#work`} className="hover:text-ink">{tp.work}</Link>
            <span className="opacity-40">/</span>
            <span className="text-ink" aria-current="page">{p.name}</span>
          </nav>
        </div>

        <div className="container-x relative grid items-center gap-14 py-12 md:py-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal now>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[12px]" style={{ background: `${p.accent}22`, color: p.accent }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent }} />
                {p.categoryLabel}
              </span>
            </Reveal>
            <Reveal now delay={60}>
              <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                <bdi>{p.name}</bdi>
              </h1>
            </Reveal>
            <Reveal now delay={120}>
              <p className="mt-4 font-display text-xl text-muted sm:text-2xl">{p.tagline}</p>
            </Reveal>
            <Reveal now delay={180}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">{p.intro}</p>
            </Reveal>

            <Reveal now delay={240}>
              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                {meta.map((m) => (
                  <div key={m.k} className="bg-surface p-5">
                    <dt className="font-mono text-[12px] text-muted">{m.k}</dt>
                    <dd className="mt-1.5 text-[15px] font-medium">{m.v}</dd>
                  </div>
                ))}
                <div className="col-span-2 bg-surface p-5">
                  <dt className="font-mono text-[12px] text-muted">{tp.technology}</dt>
                  <dd className="mt-2.5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full bg-surface-2 px-3 py-1 text-sm">{s}</span>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal now delay={300} className="mt-8 flex flex-wrap gap-3">
              <a href="#screens" className="inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium text-white shadow-lg transition hover:brightness-110" style={{ background: p.accent }}>
                {fmt(tp.explore, { n: screenCount(p) })}
              </a>
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener" className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-6 text-sm font-medium transition hover:border-[color:var(--p)]">
                  {l.label} ↗
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal now delay={120} className="relative mx-auto h-[480px] w-full max-w-[480px] sm:h-[580px]">
            <div className="absolute start-0 top-20 w-[37%] -rotate-[7deg]">
              <PhoneFrame src={p.heroScreens[0]} alt="" sizes="200px" />
            </div>
            <div className="absolute end-0 top-20 w-[37%] rotate-[7deg]">
              <PhoneFrame src={p.heroScreens[2]} alt="" sizes="200px" />
            </div>
            <div className="animate-float absolute left-1/2 top-0 z-10 w-[45%] -translate-x-1/2">
              <PhoneFrame src={p.heroScreens[1]} alt={fmt(tp.mainScreenAlt, { name: p.name })} sizes="240px" preload />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="border-y border-line bg-surface/50 py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <p className="font-mono text-[13px]" style={{ color: p.accent }}>// {tp.overviewEyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{tp.overviewTitle}</h2>
            <ul className="mt-8 space-y-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-[15px]">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-white" style={{ background: p.accent }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden><path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted">
            {p.overview.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mb-12 max-w-2xl">
            <p className="font-mono text-[13px]" style={{ color: p.accent }}>// {tp.featuresEyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{tp.featuresTitle}</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f, i) => (
              <Reveal key={f.title} className="card p-7 transition hover:border-[color:var(--p)]">
                <span className="font-mono text-[13px]" style={{ color: p.accent }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SCREENS ================= */}
      <section id="screens" className="border-t border-line py-20 md:py-28" style={{ background: `linear-gradient(180deg, ${p.accent}0d, transparent 40%)` }}>
        <div className="container-x">
          <Reveal className="mb-10 max-w-2xl">
            <p className="font-mono text-[13px]" style={{ color: p.accent }}>// {tp.screensEyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{tp.screensTitle}</h2>
            <p className="mt-4 text-muted">{tp.screensHint}</p>
          </Reveal>
          <ScreenGallery apps={p.apps} accent={p.accent} name={p.name} t={tp} />
        </div>
      </section>

      {/* ================= NEXT PROJECT ================= */}
      <section className="border-t border-line py-20">
        <div className="container-x">
          <p className="mb-6 font-mono text-[13px] text-muted">// {tp.next}</p>
          <Link
            href={`/${lang}/projects/${next.slug}`}
            className="group card relative flex items-center justify-between gap-6 overflow-hidden p-8 sm:p-12"
            style={{ "--p": next.accent } as React.CSSProperties}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
              style={{ background: `radial-gradient(60% 120% at 100% 50%, ${next.accent}33, transparent 70%)` }}
              aria-hidden
            />
            <div className="relative">
              <p className="flex items-center gap-2 font-mono text-[12px] text-muted">
                <span className="h-2 w-2 rounded-full" style={{ background: next.accent }} />
                {next.categoryLabel}
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1 sm:text-6xl">{next.name}</h2>
              <p className="mt-3 text-muted">{next.tagline}</p>
            </div>
            <div className="relative hidden h-40 w-28 shrink-0 sm:block">
              <PhoneFrame src={next.cover} alt="" className="absolute top-0 w-28 rotate-6 transition duration-500 group-hover:rotate-0" sizes="120px" />
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
