import type { Metadata } from "next";
import hero from "@/assets/images/hero.webp";
import { site } from "@/config/site";

type PageMetadataInput = {
  title: string;
  /** Route path with trailing slash, e.g. "/about/". */
  path: string;
  description?: string;
};

/** Per-page title, description, canonical URL and Open Graph tags. */
export function pageMetadata({
  title,
  path,
  description,
}: PageMetadataInput): Metadata {
  return {
    title: { absolute: `${title} | ${site.name}` },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      images: [{ url: hero.src, width: hero.width, height: hero.height }],
    },
  };
}
