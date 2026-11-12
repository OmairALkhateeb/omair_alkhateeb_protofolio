import Image from "next/image";
import { photo } from "@/data/social";

/** Small round portrait with a soft accent ring. */
export default function Avatar({ alt, size = 56, className = "" }: { alt: string; size?: number; className?: string }) {
  return (
    <span
      className={`relative inline-block shrink-0 rounded-full p-[2px] ${className}`}
      style={{ width: size, height: size, background: "linear-gradient(135deg, var(--accent), transparent 70%)" }}
    >
      <Image
        src={photo}
        alt={alt}
        width={size * 2}
        height={size * 2}
        preload
        className="h-full w-full rounded-full border-2 border-bg object-cover"
      />
    </span>
  );
}
