import { site } from "@/config/site";
import { Icon } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/links";

/** Fixed bottom bar shown at phone widths (see components/mobile-action.css). */
export function MobileActionBar() {
  return (
    <div className="mobile-action">
      <ButtonLink href="/request/" variant="small">
        Plan my project
      </ButtonLink>
      <a href={site.phone.href} aria-label="Call Ajalon Electric">
        <Icon name="phone" />
      </a>
    </div>
  );
}
