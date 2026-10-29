import { PageIntro } from "@/components/sections/page-intro";
import { TextLink } from "@/components/ui/links";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy & preview information",
  path: "/privacy/",
  description:
    "Understand the local project planner, contact handoff and illustrative concept imagery.",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="YOUR DETAILS, EXPLAINED"
        title={
          <>
            A clear view
            <br /> <em>of this preview.</em>
          </>
        }
      >
        How the project planner, contact links and concept imagery work.
      </PageIntro>
      <section className="container prose section compact">
        <h2>Your project brief</h2>
        <p>
          The project planner assembles your selections in your browser. It does
          not send a request, store your entries on a server, reserve an
          appointment or process payments. No analytics or third-party tracking
          scripts have been added to this preview.
        </p>
        <p>
          “Prepare email” opens your email application with a draft addressed to
          Ajalon Electric. You review and send that message yourself. “Download
          brief” creates a text file on your device. Avoid entering access
          codes, payment details or other sensitive information.
        </p>
        <h2>External links</h2>
        <p>
          Phone, email and map links open separate services. Their own privacy
          practices apply when you use them.
        </p>
        <h2>Design and business details</h2>
        <p>
          This is a private design concept for Ajalon Electric. The proposed
          visual identity and generated photographs are illustrative. Images do
          not document company staff, customer properties or completed work.
        </p>
        <p>
          The business name, service categories, address, phone number and email
          addresses were supplied for this project. The company confirms current
          service coverage, credentials, scope, price, timing and terms
          directly.
        </p>
        <TextLink href="/contact/">Contact Ajalon Electric</TextLink>
      </section>
    </>
  );
}
