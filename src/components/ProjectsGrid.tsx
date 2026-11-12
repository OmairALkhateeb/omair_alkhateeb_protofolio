"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { CategoryKey, Project } from "@/data/projects";
import type { Dictionary } from "@/i18n/dictionaries";

type Filter = "all" | CategoryKey;

type Props = {
  projects: Project[];
  categories: { key: CategoryKey; label: string }[];
  /** Shown in its own block above, so "All" leaves it out. */
  featuredSlug?: string;
  lang: string;
  t: Dictionary["work"];
};

export default function ProjectsGrid({ projects, categories, featuredSlug, lang, t }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const list = (f: Filter) =>
    f === "all" ? projects.filter((p) => p.slug !== featuredSlug) : projects.filter((p) => p.category === f);
  const filters = [
    { key: "all" as Filter, label: t.all },
    ...categories.filter((c) => projects.some((p) => p.category === c.key)),
  ];
  const shown = list(filter);

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center gap-2" role="tablist" aria-label={t.filterLabel}>
        <span className="me-2 font-mono text-[13px] text-muted">{t.filterBy}</span>
        {filters.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={filter === f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              filter === f.key ? "border-ink bg-ink text-bg" : "border-line bg-surface text-muted hover:text-ink"
            }`}
          >
            {f.label}
            <sup className="ms-1 font-mono text-[10px] opacity-70">{String(list(f.key).length).padStart(2, "0")}</sup>
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} href={`/${lang}/projects/${p.slug}`} t={t} />
        ))}
      </div>
    </>
  );
}
