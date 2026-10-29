import { ClosingCta } from "@/components/sections/closing-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { ServiceCards } from "@/components/sections/service-cards";
import { ServiceFinder } from "@/components/services/service-finder";
import { Eyebrow } from "@/components/ui/text";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Expertise for every next step",
  path: "/services/",
  description:
    "Explore Ajalon Electric’s electrical, generator and solar installation services.",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="WHAT WE DO"
        title={
          <>
            Good energy.
            <br /> <em>In every direction.</em>
          </>
        }
      >
        A repair to resolve. A home to improve. A different way to plan ahead.
        Find your starting point.
      </PageIntro>
      <section className="container section compact">
        <ServiceCards />
      </section>
      <section className="container service-finder">
        <div>
          <Eyebrow>FIND YOUR STARTING POINT</Eyebrow>
          <h2>
            What brings
            <br /> <em>you here?</em>
          </h2>
        </div>
        <ServiceFinder />
      </section>
      <ClosingCta />
    </>
  );
}
