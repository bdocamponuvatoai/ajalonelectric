import Link from "next/link";
import { ordinal, serviceHref, services } from "@/content/services";
import { Icon } from "@/components/ui/icons";
import { TextLink } from "@/components/ui/links";
import { Photo } from "@/components/ui/photo";
import { Lines } from "@/components/ui/text";

export function ServiceCards() {
  return (
    <div className="service-grid">
      {services.map((service, index) => {
        const href = serviceHref(service.slug);
        return (
          <article key={service.slug} className="service-card">
            <Link className="service-photo" href={href}>
              <Photo src={service.image} alt={service.alt} />
              <span className="image-arrow">
                <Icon name="up" />
              </span>
            </Link>
            <div className="service-meta">
              <span className="eyebrow">{`${ordinal(index)} / ${service.label}`}</span>
              <Icon name={service.icon} />
            </div>
            <h3>
              <Link href={href}>
                <Lines lines={service.titleLines} />
              </Link>
            </h3>
            <p>{service.description}</p>
            <TextLink href={href}>{service.cardLinkLabel}</TextLink>
          </article>
        );
      })}
    </div>
  );
}
