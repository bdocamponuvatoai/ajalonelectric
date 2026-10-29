import { site } from "@/config/site";
import { Icon } from "@/components/ui/icons";

export function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <span>
          <Icon name="pin" />
          Rooted in Knoxville, Tennessee
        </span>
        <a href={site.phone.href}>{`Let’s talk: ${site.phone.display}`}</a>
      </div>
    </div>
  );
}
