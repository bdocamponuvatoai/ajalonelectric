"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { projectGuides } from "@/content/guides";
import { requestHref, services, type ServiceSlug } from "@/content/services";
import { Icon } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/links";
import { Eyebrow } from "@/components/ui/text";

/** Markup of the panel before any choice, as in the original page. */
function InitialPanel() {
  return (
    <>
      <Eyebrow>ELECTRICAL PROJECTS</Eyebrow>
      <h2>
        Start with what
        <br /> you’re noticing.
      </h2>
      <p>{projectGuides.electrical.description}</p>
      <ol>
        {projectGuides.electrical.questions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ol>
      <ButtonLink href={requestHref("electrical")}>
        {projectGuides.electrical.action}
      </ButtonLink>
    </>
  );
}

/** Markup of a panel after a choice; the original script rendered it this way. */
function ChosenPanel({ slug }: { slug: ServiceSlug }) {
  const guide = projectGuides[slug];
  return (
    <>
      <span className="eyebrow">{guide.eyebrow}</span>
      <h2>{guide.title}</h2>
      <p>{guide.description}</p>
      <ol>
        {guide.questions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ol>
      <Link className="button" href={requestHref(slug)}>
        {`${guide.action} →`}
      </Link>
    </>
  );
}

export function GuideTabs() {
  const [selected, setSelected] = useState<ServiceSlug>("electrical");
  // The first panel keeps its server-rendered markup until a choice is made.
  const [chosen, setChosen] = useState(false);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const choose = (slug: ServiceSlug) => {
    setSelected(slug);
    setChosen(true);
  };

  // Arrow keys, Home and End move between the options and select them.
  const onKeyDown = (event: KeyboardEvent, index: number) => {
    const last = services.length - 1;
    const next = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowRight: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    buttons.current[next]?.focus();
    choose(services[next].slug);
  };

  return (
    <>
      <div
        className="guide-tabs"
        role="group"
        aria-label="Choose a project guide"
      >
        {services.map((service, index) => (
          <button
            key={service.slug}
            ref={(element) => {
              buttons.current[index] = element;
            }}
            type="button"
            aria-pressed={service.slug === selected}
            onClick={() => choose(service.slug)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            <Icon name={service.icon} />
            {service.label}
          </button>
        ))}
      </div>
      <div id="guide-content" aria-live="polite">
        {chosen ? <ChosenPanel slug={selected} /> : <InitialPanel />}
      </div>
    </>
  );
}
