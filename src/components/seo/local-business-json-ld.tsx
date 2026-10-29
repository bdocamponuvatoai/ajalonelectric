import hero from "@/assets/images/hero.webp";
import { siteUrl } from "@/config/deployment";
import { site } from "@/config/site";

/** schema.org business details, limited to facts supplied by the business. */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: site.name,
    url: `${siteUrl}/`,
    image: `${siteUrl}${hero.src}`,
    telephone: site.phone.e164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
  };
  return (
    <script
      type="application/ld+json"
      // Escape "<" so the payload cannot close the script element.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
