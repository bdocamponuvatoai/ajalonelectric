import { Hero } from "@/components/home/hero";
import {
  BackupSection,
  Expertise,
  FaqSection,
  IntroStrip,
  ProcessSection,
  SolarFeature,
} from "@/components/home/home-sections";
import { ClosingCta } from "@/components/sections/closing-cta";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-json-ld";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Powering the way you live",
  path: "/",
  description:
    "Ajalon Electric in Knoxville: electrical services, generator installation and repair, and solar installation. Explore your options and prepare your project brief.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <Expertise />
      <BackupSection />
      <ProcessSection />
      <SolarFeature />
      <FaqSection />
      <ClosingCta />
      <LocalBusinessJsonLd />
    </>
  );
}
