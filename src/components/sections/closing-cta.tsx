import { site } from "@/config/site";
import { Icon } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/links";
import { Eyebrow } from "@/components/ui/text";

export function ClosingCta() {
  return (
    <section className="container closing">
      <div>
        <Eyebrow>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
        <h2>
          Let’s put good
          <br /> <span>energy into it.</span>
        </h2>
      </div>
      <div>
        <p>
          A repair, a backup plan, or a fresh start with solar. Tell us what you
          have in mind.
        </p>
        <ButtonLink href="/request/">Start your project</ButtonLink>
        <a className="closing-phone" href={site.phone.href}>
          {site.phone.display}
        </a>
      </div>
      <span className="closing-bolt" aria-hidden="true">
        <Icon name="bolt" />
      </span>
    </section>
  );
}
