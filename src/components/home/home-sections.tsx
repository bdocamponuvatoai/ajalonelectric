import Link from "next/link";
import generator from "@/assets/images/generator.webp";
import solar from "@/assets/images/solar.webp";
import { homeFaqs } from "@/content/faq";
import { ordinal } from "@/content/services";
import { FaqList } from "@/components/sections/faq-list";
import { PriorityTool } from "@/components/sections/priority-tool";
import { ServiceCards } from "@/components/sections/service-cards";
import { Icon } from "@/components/ui/icons";
import { ButtonLink, TextLink } from "@/components/ui/links";
import { Photo } from "@/components/ui/photo";
import { Eyebrow } from "@/components/ui/text";

export function IntroStrip() {
  return (
    <section className="container intro-strip">
      <Eyebrow>LOCAL ROOTS. FORWARD THINKING.</Eyebrow>
      <p>
        Life runs on good energy.
        <br />
        {" Let’s make yours "}
        <span>work better.</span>
      </p>
      <Link
        href="/about/"
        aria-label="Get to know Ajalon"
        className="circle-link"
      >
        <Icon name="up" />
      </Link>
    </section>
  );
}

export function Expertise() {
  return (
    <section className="container section expertise">
      <div className="section-heading">
        <div>
          <Eyebrow>THREE WAYS TO MOVE FORWARD</Eyebrow>
          <h2>
            The right expertise.
            <br />
            {" For your "}
            <em>next step.</em>
          </h2>
        </div>
        <p>
          One place to start. Explore the service
          <br /> that fits what you’re planning.
        </p>
      </div>
      <ServiceCards />
    </section>
  );
}

export function BackupSection() {
  return (
    <section className="backup-section">
      <div className="container backup-layout">
        <div className="backup-copy">
          <Eyebrow>A LITTLE PLANNING GOES A LONG WAY</Eyebrow>
          <h2>
            When life pauses,
            <br /> what keeps
            <br /> <em>you going?</em>
          </h2>
          <p>
            A warm room. A full refrigerator. A workday that stays on track. A
            backup-power conversation starts with the things that matter to you.
          </p>
          <TextLink href="/services/generators/">
            Explore generator services
          </TextLink>
          <div className="backup-image">
            <Photo
              src={generator}
              alt="Illustrative standby generator beside a home"
            />
          </div>
        </div>
        <PriorityTool />
      </div>
    </section>
  );
}

const processSteps = [
  {
    title: "Tell us what’s on your mind.",
    copy: "A repair, an upgrade or a new installation. Start with your goal and the details you already know.",
  },
  {
    title: "Talk through the possibilities.",
    copy: "The team reviews your needs and confirms the scope, site requirements, pricing and timing.",
  },
  {
    title: "Move forward with a plan.",
    copy: "Agree on the next step directly with Ajalon Electric before any work or appointment is confirmed.",
  },
];

export function ProcessSection() {
  return (
    <section className="container section process-section">
      <div>
        <Eyebrow>FROM A QUESTION TO A CLEAR PLAN</Eyebrow>
        <h2>
          Less guesswork.
          <br /> <em>More direction.</em>
        </h2>
        <p>
          Know what to share, what to ask,
          <br /> and how to take the next step.
        </p>
        <TextLink href="/project-guide/">Open the project guide</TextLink>
      </div>
      <ol className="process-list">
        {processSteps.map((step, index) => (
          <li key={step.title}>
            <span>{ordinal(index)}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function SolarFeature() {
  return (
    <section className="solar-feature">
      <div>
        <Photo
          src={solar}
          alt="Illustrative rooftop solar installation on a Tennessee home"
        />
      </div>
      <div className="solar-copy">
        <Eyebrow>A BRIGHTER WAY TO LOOK AHEAD</Eyebrow>
        <h2>
          Your roof.
          <br /> Your goals.
          <br /> <em>New possibilities.</em>
        </h2>
        <p>
          Solar starts with the bigger picture: your home, your energy goals,
          and the questions worth asking before you commit.
        </p>
        <ButtonLink href="/services/solar/" variant="light">
          Start exploring solar
        </ButtonLink>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="container section faq-section">
      <div>
        <Eyebrow>LET’S MAKE THINGS CLEAR</Eyebrow>
        <h2>
          A few answers.
          <br /> <em>A better start.</em>
        </h2>
        <TextLink href="/faq/">All your questions</TextLink>
      </div>
      <FaqList items={homeFaqs} />
    </section>
  );
}
