// Business details and navigation. Safe to import from client components.

export const site = {
  name: "Ajalon Electric",
  phone: {
    display: "(865) 253-5885",
    href: "tel:+18652535885",
    e164: "+18652535885",
  },
  email: "dabzcollc@gmail.com",
  additionalEmail: "ajalonpops1@gmail.com",
  address: {
    street: "3010 Brooks Ave",
    city: "Knoxville",
    region: "TN",
    postalCode: "37914",
    country: "United States",
    countryCode: "US",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=3010+Brooks+Ave+Knoxville+TN+37914",
  themeColor: "#f8f7f3",
} as const;

type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Our expertise", href: "/services/" },
  { label: "Why Ajalon", href: "/about/" },
  { label: "Project guide", href: "/project-guide/" },
  { label: "Get in touch", href: "/contact/" },
];
