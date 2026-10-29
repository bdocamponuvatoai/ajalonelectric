import { serviceHref, services } from "./services";

/** Every public page, used for the sitemap. */
export const routes: string[] = [
  "/",
  "/services/",
  ...services.map((service) => serviceHref(service.slug)),
  "/about/",
  "/project-guide/",
  "/faq/",
  "/contact/",
  "/request/",
  "/privacy/",
];
