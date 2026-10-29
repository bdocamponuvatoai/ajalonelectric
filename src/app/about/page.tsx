import electrical from "@/assets/images/electrical.webp";
import { ClosingCta } from "@/components/sections/closing-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { Icon, type IconName } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/links";
import { Photo } from "@/components/ui/photo";
import { Eyebrow } from "@/components/ui/text";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Get to know Ajalon Electric",
  path: "/about/",
  description:
    "Meet Ajalon Electric, based in Knoxville, Tennessee, for electrical, generator and solar installation projects.",
});

const values: { icon: IconName; title: string; copy: string }[] = [
  {
    icon: "plug",
    title: "Everyday electrical needs.",
    copy: "A starting point for repairs, improvements and the electrical questions around your space.",
  },
  {
    icon: "power",
    title: "A plan for backup power.",
    copy: "Generator installation and repair conversations shaped by your property and priorities.",
  },
  {
    icon: "sun",
    title: "A view of what’s next.",
    copy: "Solar installation planning that begins with your goals and the details worth discussing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="AJALON ELECTRIC / KNOXVILLE, TN"
        title={
          <>
            Local roots.
            <br /> <em>Everyday possibilities.</em>
          </>
        }
      >
        Electrical services, generator installation and repair, and solar
        installation—from one Knoxville business.
      </PageIntro>
      <section className="container about-feature">
        <div>
          <Photo
            src={electrical}
            alt="Illustrative electrician reviewing project information"
            eager
          />
          <p className="image-note">
            Illustrative service photography. Not an Ajalon staff portrait.
          </p>
        </div>
        <div>
          <Eyebrow>GOOD ENERGY STARTS WITH A CONVERSATION</Eyebrow>
          <h2>
            Your project.
            <br /> <em>Our starting point.</em>
          </h2>
          <p>
            Some projects begin with a problem. Others begin with an idea.
            Ajalon Electric gives you a place to start the conversation about
            the power behind your home or workplace.
          </p>
          <p>
            Based at 3010 Brooks Ave in Knoxville, the business brings
            electrical, generator and solar installation services together. Tell
            the team what you need, and confirm the right next step for your
            property.
          </p>
          <ButtonLink href="/contact/">Get in touch</ButtonLink>
        </div>
      </section>
      <section className="container section values">
        {values.map((value) => (
          <article key={value.title}>
            <Icon name={value.icon} />
            <h3>{value.title}</h3>
            <p>{value.copy}</p>
          </article>
        ))}
      </section>
      <ClosingCta />
    </>
  );
}
