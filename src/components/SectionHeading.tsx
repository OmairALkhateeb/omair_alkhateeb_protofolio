import Reveal from "./Reveal";

type Props = { eyebrow: string; title: React.ReactNode; intro?: React.ReactNode; align?: "start" | "center" };

export default function SectionHeading({ eyebrow, title, intro, align = "start" }: Props) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="mb-4 font-mono text-[13px] text-accent">// {eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-[44px] sm:leading-[1.15]">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}
