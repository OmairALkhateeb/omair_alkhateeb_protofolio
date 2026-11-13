import { isLive, type Project } from "@/data/projects";

/** Market + release status pill, e.g. "Saudi Arabia · Live on Google Play". Renders nothing when neither is set. */
export default function StatusBadge({ project, className = "" }: { project: Project; className?: string }) {
  const { status, statusLabel, marketLabel } = project;
  if (!statusLabel && !marketLabel) return null;
  const live = status ? isLive(status) : false;

  return (
    <p className={`inline-flex w-fit flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-line bg-surface px-3 py-1.5 text-[13px] ${className}`}>
      {marketLabel && (
        <span className="inline-flex items-center gap-1.5 font-medium">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className="text-muted">
            <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          {marketLabel}
        </span>
      )}
      {marketLabel && statusLabel && <span className="opacity-40">·</span>}
      {statusLabel && (
        <span className="inline-flex items-center gap-1.5 text-muted">
          <span className={`h-2 w-2 shrink-0 rounded-full ${live ? "bg-emerald-400" : "bg-amber-400"}`} aria-hidden />
          {statusLabel}
        </span>
      )}
    </p>
  );
}
