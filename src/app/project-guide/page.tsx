import { GuideTabs } from "@/components/project-guide/guide-tabs";
import { PrepChecklist } from "@/components/project-guide/prep-checklist";
import { ClosingCta } from "@/components/sections/closing-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "A clearer guide to your next project",
  path: "/project-guide/",
  description:
    "Prepare the right questions for an electrical, generator or solar project with Ajalon Electric.",
});

export default function ProjectGuidePage() {
  return (
    <>
      <PageIntro
        eyebrow="YOUR PROJECT, A LITTLE CLEARER"
        title={
          <>
            Know what to ask.
            <br /> <em>Know where to start.</em>
          </>
        }
      >
        A practical starting point for a better conversation about your next
        project.
      </PageIntro>
      <section className="container section compact guide-layout">
        <GuideTabs />
      </section>
      <PrepChecklist />
      <ClosingCta />
    </>
  );
}
