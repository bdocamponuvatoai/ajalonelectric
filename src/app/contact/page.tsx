import hero from "@/assets/images/hero.webp";
import { site } from "@/config/site";
import { ClosingCta } from "@/components/sections/closing-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { Icon } from "@/components/ui/icons";
import { ButtonLink, TextLink } from "@/components/ui/links";
import { Photo } from "@/components/ui/photo";
import { Eyebrow } from "@/components/ui/text";
import { pageMetadata } from "@/lib/metadata";

const { address } = site;

export const metadata = pageMetadata({
  title: "Contact & location",
  path: "/contact/",
  description: `Call Ajalon Electric at ${site.phone.display} or prepare a project brief. Based at ${address.street}, ${address.city}, ${address.region} ${address.postalCode}.`,
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="LET’S TALK ABOUT WHAT’S NEXT"
        title={
          <>
            A good connection
            <br /> <em>starts here.</em>
          </>
        }
      >
        Tell Ajalon Electric what you have in mind. The team confirms project
        fit, coverage and next steps directly.
      </PageIntro>
      <section className="container section compact contact-layout">
        <div className="contact-main">
          <Eyebrow>CALL AJALON ELECTRIC</Eyebrow>
          <a className="big-phone" href={site.phone.href}>
            {site.phone.display}
          </a>
          <div className="contact-line">
            <Icon name="mail" />
            <div>
              <h3>Email your project.</h3>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <p className="fine">
                {"Additional contact: "}
                <a href={`mailto:${site.additionalEmail}`}>
                  {site.additionalEmail}
                </a>
              </p>
            </div>
          </div>
          <div className="contact-line">
            <Icon name="pin" />
            <div>
              <h3>Rooted in Knoxville.</h3>
              <p>
                {address.street}
                <br />
                {` ${address.city}, ${address.region} ${address.postalCode}, ${address.country}`}
              </p>
              <TextLink href={site.mapUrl} external>
                View location
              </TextLink>
              <p className="fine">
                Call to confirm service for your address and arrange any visit.
              </p>
            </div>
          </div>
        </div>
        <aside className="contact-card">
          <Photo
            src={hero}
            alt="Illustrative illuminated Knoxville-style home"
          />
          <div>
            <Eyebrow>MAKE THE FIRST CONVERSATION COUNT</Eyebrow>
            <h2>
              Bring a
              <br /> <em>clearer brief.</em>
            </h2>
            <p>
              Gather your service, property details and priorities into one
              simple project request.
            </p>
            <ButtonLink href="/request/">Build my project brief</ButtonLink>
          </div>
        </aside>
      </section>
      <ClosingCta />
    </>
  );
}
