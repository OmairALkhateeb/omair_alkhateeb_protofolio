import HoverCard from "./HoverCard";
import PhoneFrame from "./PhoneFrame";
import StatusBadge from "./StatusBadge";
import { type Project, screenCount } from "@/data/projects";
import { fmt, type Dictionary } from "@/i18n/dictionaries";

type Props = { project: Project; href: string; t: Dictionary["work"] };

export default function ProjectCard({ project, href, t }: Props) {
  const [left, center, right] = project.heroScreens;
  return (
    <HoverCard href={href} accent={project.accent} className="flex h-full flex-col">
      {/* visual */}
      <div className="relative h-[300px] overflow-hidden sm:h-[340px]">
        <div className="pcard-bg" aria-hidden />
        <div className="pcard-phones">
          <PhoneFrame src={left} alt="" className="pc-l w-[23cqw] max-w-[130px]" sizes="140px" />
          <PhoneFrame src={center} alt={fmt(t.appScreenAlt, { name: project.name })} className="pc-c w-[28cqw] max-w-[160px]" sizes="170px" />
          <PhoneFrame src={right} alt="" className="pc-r w-[23cqw] max-w-[130px]" sizes="140px" />
        </div>
      </div>

      {/* meta */}
      <div className="relative z-[2] flex flex-1 flex-col gap-3 border-t border-line p-6">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[12px] text-muted">
          <span className="pcard-dot h-2 w-2 rounded-full" style={{ background: project.accent }} />
          {project.categoryLabel}
          <span className="opacity-40">·</span>
          {project.apps.length > 1 ? fmt(t.apps, { n: project.apps.length }) : t.oneApp}
          <span className="opacity-40">·</span>
          {fmt(t.screens, { n: screenCount(project) })}
        </div>
        <h3 className="pcard-title font-display text-2xl font-semibold tracking-tight">{project.name}</h3>
        <p className="text-muted">{project.tagline}</p>
        <StatusBadge project={project} />
        <span className="pcard-cta mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium">
          {t.viewCase}
          <svg className="pcard-arrow rtl:-scale-x-100" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </HoverCard>
  );
}
