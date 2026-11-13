"use client";

/**
 * An inline script that runs during HTML parsing (before first paint).
 * Rendered as executable on the server and as inert `text/plain` on the client,
 * so React doesn't warn about rendering a <script> during client renders.
 * Must be a Client Component: as a Server Component `typeof window` is always
 * "undefined", so the client would receive `text/javascript` and React warns.
 * Pattern from Next.js docs: guides/preventing-flash-before-hydration.
 */
export default function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
