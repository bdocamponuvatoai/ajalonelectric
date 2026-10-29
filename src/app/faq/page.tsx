import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqList } from "@/components/sections/faq-list";
import { PageIntro } from "@/components/sections/page-intro";
import { allFaqs } from "@/content/faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Questions, clearly answered",
  path: "/faq/",
  description:
    "Find answers about services, project planning, backup priorities, service coverage and the request planner.",
});

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="A LITTLE CLARITY GOES A LONG WAY"
        title={
          <>
            Good questions.
            <br /> <em>A better beginning.</em>
          </>
        }
      >
        Get familiar with the process, then bring your own questions to the
        conversation.
      </PageIntro>
      <section className="container section compact faq-page">
        <FaqList items={allFaqs} />
      </section>
      <ClosingCta />
    </>
  );
}
