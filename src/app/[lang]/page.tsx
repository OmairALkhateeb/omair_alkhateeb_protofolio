import HoverCard from "@/components/HoverCard";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectsGrid from "@/components/ProjectsGrid";
import CopyEmail from "@/components/CopyEmail";
import SocialLinks from "@/components/SocialLinks";
import StatusBadge from "@/components/StatusBadge";
import { categoryKeys, localizedProjects } from "@/data/projects";
import { experienceMeta, profile } from "@/data/profile";
import { defaultLocale, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const Arrow = () => (
  <svg className="rtl:-scale-x-100" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function Home(props: PageProps<"/[lang]">) {
  const { lang: raw } = await props.params;
  const lang = hasLocale(raw) ? raw : defaultLocale;
  const t = getDictionary(lang);

  const projects = localizedProjects(t);
  const featured = projects.find((p) => p.slug === "yalla")!;
  const categories = categoryKeys.map((key) => ({ key, label: t.categories[key] }));

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-[72px]">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute -top-40 end-[-10%] h-[520px] w-[520px] rounded-full opacity-40 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
          aria-hidden
        />
        <div className="container-x relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal now delay={80}>
              <h1 className="font-display text-[44px] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[76px]">
                {t.name}
              </h1>
            </Reveal>
            <Reveal now delay={140}>
              <p className="mt-4 font-display text-2xl font-medium sm:text-3xl">
                <span className="text-gradient">{t.hero.roleLong}</span>
              </p>
            </Reveal>
            <Reveal now delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.headline}</p>
            </Reveal>
            <Reveal now delay={260} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-white shadow-lg shadow-accent/30 transition hover:brightness-110">
                {t.hero.viewWork} <Arrow />
              </a>
              <a href="#contact" className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-6 text-sm font-medium transition hover:border-accent">
                {t.hero.getInTouch}
              </a>
            </Reveal>
            <Reveal now delay={320} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <p className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px] text-muted">
                <span>📍 {t.hero.location}</span>
                <span dir="ltr">
                  @ <a href={profile.company.url} target="_blank" rel="noopener" className="underline-offset-4 hover:text-ink hover:underline">{profile.company.name}</a>
                </span>
              </p>
              <SocialLinks />
            </Reveal>
          </div>

          {/* phone stack */}
          <Reveal now delay={150} className="relative mx-auto h-[460px] w-full max-w-[460px] sm:h-[560px]">
            <div className="absolute start-0 top-16 w-[38%] -rotate-[8deg]">
              <PhoneFrame src="/projects/cargox-driver/03_home-map.jpg" alt="CargoX Driver" sizes="200px" />
            </div>
            <div className="absolute end-0 top-16 w-[38%] rotate-[8deg]">
              <PhoneFrame src="/projects/aazer/01_home.jpg" alt="Aazer" sizes="200px" />
            </div>
            <div className="animate-float absolute left-1/2 top-0 z-10 w-[46%] -translate-x-1/2">
              <PhoneFrame src="/projects/yalla/rider/02_home.png" alt="Yalla" sizes="240px" preload />
            </div>
          </Reveal>
        </div>

        {/* stats */}
        <div className="container-x relative pb-8">
          <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.label} className="bg-surface p-6">
                <p className="font-display text-3xl font-semibold tracking-tight" dir="ltr">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ================= WORK ================= */}
      <section id="work" className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} intro={t.work.intro} />

          {/* featured */}
          <Reveal>
            <HoverCard href={`/${lang}/projects/${featured.slug}`} accent={featured.accent} className="mb-6 grid lg:grid-cols-2">
              <div className="relative z-[3] flex flex-col justify-center gap-5 p-8 sm:p-12">
                <span className="w-fit rounded-full px-3 py-1 font-mono text-[12px]" style={{ background: `${featured.accent}22`, color: featured.accent }}>
                  {t.work.featured}
                </span>
                <h3 className="pcard-title font-display text-4xl font-semibold tracking-tight sm:text-5xl">{featured.name}</h3>
                <p className="text-lg text-muted">{featured.intro}</p>
                <StatusBadge project={featured} />
                <ul className="flex flex-wrap gap-2">
                  {featured.highlights.map((h) => (
                    <li key={h} className="rounded-full border border-line px-3 py-1 text-[13px] text-muted">{h}</li>
                  ))}
                </ul>
                <span className="mt-2 inline-flex items-center gap-2 font-medium">
                  {t.work.viewCase} <span className="pcard-arrow"><Arrow /></span>
                </span>
              </div>
              <div className="relative h-[380px] overflow-hidden lg:h-auto lg:min-h-[480px]">
                <div className="pcard-bg" aria-hidden />
                <div className="pcard-phones" style={{ "--c": "27%", "--s": "43%" } as React.CSSProperties}>
                  <PhoneFrame src={featured.heroScreens[0]} alt="" className="pc-l w-[24cqw] max-w-[138px]" sizes="150px" />
                  <PhoneFrame src={featured.heroScreens[1]} alt={featured.name} className="pc-c w-[31cqw] max-w-[180px]" sizes="190px" />
                  <PhoneFrame src={featured.heroScreens[2]} alt="" className="pc-r w-[24cqw] max-w-[138px]" sizes="150px" />
                </div>
              </div>
            </HoverCard>
          </Reveal>

          <ProjectsGrid projects={projects} categories={categories} featuredSlug={featured.slug} lang={lang} t={t.work} />
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section id="expertise" className="border-y border-line bg-surface/50 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={t.expertise.eyebrow} title={t.expertise.title} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.expertise.items.map((e, i) => (
              <Reveal key={e.title} className="card flex flex-col p-7">
                <span className="font-mono text-[13px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{e.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{e.body}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {e.tags.map((tag) => (
                    <li key={tag} className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted">{tag}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} intro={t.experience.summary} />
            <Reveal className="card p-6">
              <p className="font-mono text-[12px] text-accent">// {t.experience.educationLabel}</p>
              <p className="mt-3 font-display text-lg font-semibold">{t.experience.education.degree}</p>
              <p className="text-muted">{t.experience.education.school}</p>
              <p className="mt-1 text-sm text-muted">{t.experience.education.detail}</p>
              <p className="mt-5 font-mono text-[12px] text-accent">// {t.experience.languagesLabel}</p>
              <p className="mt-2 text-sm text-muted">{t.experience.languages.join("  ·  ")}</p>
            </Reveal>
          </div>

          <ol className="relative border-s border-line ps-8">
            {t.experience.items.map((x, i) => {
              const meta = experienceMeta[i];
              return (
                <Reveal as="li" key={x.role} className="relative pb-14 last:pb-0">
                  <span className="absolute -start-[41px] top-1.5 grid h-5 w-5 place-items-center rounded-full border border-line bg-bg">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <p className="font-mono text-[13px] text-muted">
                    {x.period} · {x.location}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{x.role}</h3>
                  <p className="mt-1 text-accent">
                    {meta.url ? (
                      <a href={meta.url} target="_blank" rel="noopener" className="hover:underline" dir="ltr">@ {meta.company}</a>
                    ) : (
                      <span dir="ltr">@ {meta.company}</span>
                    )}
                    {x.note && <span className="text-muted"> ({x.note})</span>}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-muted">
                    {x.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {x.tags.map((tag) => (
                      <li key={tag} className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted">{tag}</li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="border-y border-line bg-surface/50 py-24 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />
          <Reveal className="card divide-y divide-line">
            {t.skills.groups.map((g) => (
              <div key={g.group} className="grid gap-3 p-6 sm:grid-cols-[220px_1fr] sm:items-center">
                <p className="font-mono text-[13px] text-muted">{g.group}</p>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li key={it} className="rounded-full bg-surface-2 px-3 py-1.5 text-sm">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative overflow-hidden py-24 md:py-36">
        <div
          className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
          aria-hidden
        />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="font-mono text-[13px] text-accent">// {t.contact.eyebrow}</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.1]">
              {t.contact.title} <span className="text-gradient">{t.contact.titleAccent}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">{t.contact.body}</p>
          </Reveal>
          <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${profile.email}`} dir="ltr" className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-white shadow-lg shadow-accent/30 transition hover:brightness-110">
              {profile.email}
            </a>
            <CopyEmail email={profile.email} labels={{ copy: t.contact.copy, copied: t.contact.copied }} />
            <a href={profile.whatsapp} target="_blank" rel="noopener" className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-medium transition hover:border-accent">
              {t.contact.whatsapp} · <span dir="ltr">{profile.phone}</span>
            </a>
            <a href={profile.cv} target="_blank" rel="noopener" className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-medium transition hover:border-accent">
              {t.contact.resume}
            </a>
          </Reveal>
          <Reveal className="mt-6 flex justify-center">
            <SocialLinks />
          </Reveal>
        </div>
      </section>
    </>
  );
}
