import "server-only";

// Deployment settings, read at build time. See .env.example.

function resolveSiteUrl(): string {
  const explicit = process.env.SITE_URL?.trim();
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const url =
    explicit || (vercel ? `https://${vercel}` : "http://localhost:3000");
  return url.replace(/\/+$/, "");
}

export const siteUrl = resolveSiteUrl();

/** Search engines may index the site only when explicitly enabled. */
export const isIndexable = process.env.SITE_INDEXABLE === "true";

if (isIndexable && /^https?:\/\/(localhost|127\.0\.0\.1)(:|$)/.test(siteUrl)) {
  throw new Error(
    "SITE_INDEXABLE=true requires SITE_URL (or VERCEL_PROJECT_PRODUCTION_URL) to be the public domain.",
  );
}
