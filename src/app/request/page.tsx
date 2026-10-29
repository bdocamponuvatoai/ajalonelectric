import { Suspense } from "react";
import { PresetPlanner } from "@/components/request/preset-planner";
import { ProjectPlanner } from "@/components/request/project-planner";
import { PageIntro } from "@/components/sections/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Plan your project",
  path: "/request/",
  description:
    "Prepare an electrical, generator or solar project brief for Ajalon Electric, then download it or share it through your email app.",
});

export default function RequestPage() {
  return (
    <>
      <PageIntro
        eyebrow="A FEW DETAILS. A BETTER START."
        title={
          <>
            Let’s put your
            <br /> <em>project in motion.</em>
          </>
        }
      >
        Prepare a clear brief, then share it with the team. Scope, pricing and
        timing are confirmed directly.
      </PageIntro>
      <Suspense fallback={<ProjectPlanner />}>
        <PresetPlanner />
      </Suspense>
    </>
  );
}
