import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/sections/closing-cta";
import { PriorityTool } from "@/components/sections/priority-tool";
import { Icon } from "@/components/ui/icons";
import { ButtonLink, TextLink } from "@/components/ui/links";
import { Photo } from "@/components/ui/photo";
import { Eyebrow, Lines } from "@/components/ui/text";
import {
  getService,
  ordinal,
  requestHref,
  serviceHref,
  services,
} from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({
    title: service.label,
    path: serviceHref(service.slug),
    description: service.detail.lead,
  });
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const { detail } = service;

  return (
    <>
      <section className="container detail-hero">
        <div>
          <Link href="/services/" className="back-link">
            ← All expertise
          </Link>
          <Eyebrow>{service.label}</Eyebrow>
          <h1>
            <Lines lines={service.titleLines} />
          </h1>
          <p>{detail.lead}</p>
          <ButtonLink href={requestHref(service.slug)}>
            Plan this project
          </ButtonLink>
        </div>
        <div className="detail-photo">
          <Photo src={service.image} alt={service.alt} eager />
          <span className="photo-label">
            <Icon name={service.icon} />
            {service.label}
          </span>
        </div>
      </section>
      <section className="container section split-copy">
        <h2>{detail.intro}</h2>
        <p>{detail.body}</p>
      </section>
      <section className="container option-grid">
        {detail.options.map((option, index) => (
          <article key={option.title}>
            <span className="option-number">{ordinal(index)}</span>
            <h3>{option.title}</h3>
            <p>{option.copy}</p>
          </article>
        ))}
      </section>
      {service.slug === "generators" && (
        <section className="container section generator-tool">
          <div>
            <Eyebrow>MAKE IT PERSONAL</Eyebrow>
            <h2>
              A backup plan
              <br />
              {" starts with "}
              <em>you.</em>
            </h2>
            <p>Select priorities to bring into your project brief.</p>
          </div>
          <PriorityTool />
        </section>
      )}
      <section className="container section preparation">
        <div>
          <Eyebrow>BEFORE WE TALK</Eyebrow>
          <h2>
            A few details.
            <br /> <em>A clearer conversation.</em>
          </h2>
          <TextLink href={requestHref(service.slug)}>
            Build my project brief
          </TextLink>
        </div>
        <ul className="check-list">
          {detail.checklist.map((item) => (
            <li key={item}>
              <Icon name="check" />
              {item}
            </li>
          ))}
        </ul>
      </section>
      <ClosingCta />
    </>
  );
}
