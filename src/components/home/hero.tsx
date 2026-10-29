import Link from "next/link";
import hero from "@/assets/images/hero.webp";
import { site } from "@/config/site";
import { ordinal, serviceHref, services } from "@/content/services";
import { Icon } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/links";
import { Photo } from "@/components/ui/photo";

export function Hero() {
  return (
    <section className="hero-wrap">
      <div className="hero">
        <Photo
          src={hero}
          alt="Illustrative Knoxville-style home with warm exterior lighting at dusk"
          className="hero-photo"
          eager
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="eyebrow">
            <span className="orange-dot"></span>
            {" KNOXVILLE’S NEXT CHAPTER IN POWER"}
          </span>
          <h1>
            Powering the
            <br />
            {" way you "}
            <em>live.</em>
          </h1>
          <p>
            The everyday essentials. The unexpected moments.
            <br /> Electrical, generator and solar services
            <br /> for whatever comes next.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/request/">Let’s start your project</ButtonLink>
            <a className="hero-call" href={site.phone.href}>
              <Icon name="phone" />
              {site.phone.display}
            </a>
          </div>
          <span className="hero-caption">GOOD ENERGY STARTS AT HOME.</span>
        </div>
        <div className="hero-index" aria-hidden="true">
          KNOXVILLE
          <br /> TENNESSEE
        </div>
        <div className="hero-services">
          {services.map((service, index) => (
            <Link key={service.slug} href={serviceHref(service.slug)}>
              <span>{ordinal(index)}</span>
              <Icon name={service.icon} />
              <b>{service.label}</b>
              <Icon name="arrow" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
