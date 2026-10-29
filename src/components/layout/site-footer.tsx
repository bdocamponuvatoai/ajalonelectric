import Link from "next/link";
import { site } from "@/config/site";
import { Brand } from "@/components/ui/brand";

const { address } = site;

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-top">
        <div>
          <Brand />
          <p>
            Good energy.
            <br /> Right here in Knoxville.
          </p>
        </div>
        <div>
          <h3>Power, your way</h3>
          <Link href="/services/electrical/">Electrical services</Link>
          <Link href="/services/generators/">
            Generator installation & repair
          </Link>
          <Link href="/services/solar/">Solar installation</Link>
          <Link href="/request/">Plan your project</Link>
        </div>
        <div>
          <h3>A little more clarity</h3>
          <Link href="/about/">About Ajalon</Link>
          <Link href="/project-guide/">Project guide</Link>
          <Link href="/faq/">Common questions</Link>
          <Link href="/contact/">Contact & location</Link>
        </div>
        <div>
          <h3>Let’s talk</h3>
          <a className="footer-phone" href={site.phone.href}>
            {site.phone.display}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>
            {address.street}
            <br />
            {` ${address.city}, ${address.region} ${address.postalCode}`}
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{`© ${new Date().getFullYear()} ${site.name}`}</span>
        <Link href="/privacy/">Privacy & preview details</Link>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
