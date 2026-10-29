import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { ButtonLink } from "@/components/ui/links";

export const metadata: Metadata = {
  title: { absolute: "Let’s get you connected | Ajalon Electric" },
  description: "Find your next step with Ajalon Electric.",
};

export default function NotFound() {
  return (
    <>
      <PageIntro
        eyebrow="THIS CONNECTION NEEDS A FRESH START"
        title={
          <>
            Let’s get you
            <br /> <em>back on track.</em>
          </>
        }
      >
        That page could not be found. Your next project starts right here.
      </PageIntro>
      <div className="container section compact">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </>
  );
}
