"use client";

import { useState } from "react";

export default function CopyEmail({ email, labels }: { email: string; labels: { copy: string; copied: string } }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-medium transition hover:border-accent"
      aria-live="polite"
    >
      {copied ? labels.copied : labels.copy}
    </button>
  );
}
