import type { StaticImageData } from "next/image";
import electrical from "@/assets/images/electrical.webp";
import generator from "@/assets/images/generator.webp";
import solar from "@/assets/images/solar.webp";
import type { IconName } from "@/components/ui/icons";

export type ServiceSlug = "electrical" | "generators" | "solar";

export type Service = {
  slug: ServiceSlug;
  icon: IconName;
  label: string;
  /** Rendered with a line break between items. */
  titleLines: string[];
  short: string;
  description: string;
  image: StaticImageData;
  alt: string;
  cardLinkLabel: string;
  detail: {
    lead: string;
    intro: string;
    body: string;
    options: { title: string; copy: string }[];
    checklist: string[];
  };
};

export const services: Service[] = [
  {
    slug: "electrical",
    icon: "plug",
    label: "Electrical services",
    titleLines: ["For everything", "you plug into."],
    short: "Keep everyday life connected.",
    description:
      "From a concern that needs a closer look to the improvements you have in mind, start with a clear conversation about your electrical needs.",
    image: electrical,
    alt: "Illustrative electrician reviewing a tablet beside a closed electrical panel",
    cardLinkLabel: "Explore electrical",
    detail: {
      lead: "Keep the everyday connected. Start with the electrical concern you want resolved or the improvement you’ve been thinking about.",
      intro: "The details that power your day.",
      body: "Describe what you’re noticing, where it happens, and what you want to change. A clear project conversation helps the team understand your needs before confirming the next step.",
      options: [
        {
          title: "Something needs attention.",
          copy: "Share the symptoms and location of the concern. The team can discuss the review needed for your property.",
        },
        {
          title: "Time for an improvement.",
          copy: "Lighting, outlets and other electrical changes begin with the way you want to use your space.",
        },
        {
          title: "Planning something new.",
          copy: "Renovating or changing how a room works? Bring your ideas and ask what the electrical project may involve.",
        },
      ],
      checklist: [
        "Your property type and ZIP code",
        "The room or area involved",
        "A description of the concern or change",
        "Any preferred timing or access requirements",
      ],
    },
  },
  {
    slug: "generators",
    icon: "power",
    label: "Generators",
    titleLines: ["A backup plan.", "Peace of mind."],
    short: "Plan for the moments power matters.",
    description:
      "Explore generator installation or get help with an existing system. Put your priorities first, then work through the details with the team.",
    image: generator,
    alt: "Illustrative outdoor residential standby generator",
    cardLinkLabel: "Explore generators",
    detail: {
      lead: "Be ready to talk about backup power. Explore a new generator installation or request help with an existing system.",
      intro: "Start with what matters most.",
      body: "A backup plan should reflect your priorities. Share what you would like to keep running, then discuss equipment, site needs and installation scope with the team. For a repair, start with your existing system details.",
      options: [
        {
          title: "New generator installation.",
          copy: "Explore your priorities and property requirements before equipment selection and installation are agreed.",
        },
        {
          title: "Help with an existing system.",
          copy: "Share the generator’s make, model and what you are noticing so the team can discuss the repair request.",
        },
        {
          title: "A plan around your property.",
          copy: "Access, available space and your priorities belong in the same conversation. The team confirms what is suitable.",
        },
      ],
      checklist: [
        "Your backup priorities",
        "Existing equipment details, if applicable",
        "Your property type and location",
        "The issue or project goal in your own words",
      ],
    },
  },
  {
    slug: "solar",
    icon: "sun",
    label: "Solar installation",
    titleLines: ["Look ahead.", "Let the sun in."],
    short: "Give your next chapter a brighter outlook.",
    description:
      "Turn an interest in solar into a considered project. Bring your goals, property details and questions, and discover what comes next.",
    image: solar,
    alt: "Illustrative Tennessee home with rooftop solar panels",
    cardLinkLabel: "Explore solar installation",
    detail: {
      lead: "A brighter energy future starts with a considered conversation. Explore solar installation around your property and your goals.",
      intro: "Look at the whole picture.",
      body: "Bring your questions about solar together before you commit. Your property, energy use and expectations help shape the conversation; the team confirms feasibility, scope and pricing.",
      options: [
        {
          title: "Your goals come first.",
          copy: "What interests you about solar? Share what you would like to understand or achieve.",
        },
        {
          title: "Get the property in view.",
          copy: "Discuss your roof, available space and any planned changes to your property.",
        },
        {
          title: "Make the proposal clear.",
          copy: "Ask what equipment, work, approvals, timing and ongoing responsibilities are included in the proposed project.",
        },
      ],
      checklist: [
        "Your main reason for exploring solar",
        "Your property type and location",
        "Roof details you already know",
        "Questions about scope, timing and pricing",
      ],
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function serviceHref(slug: ServiceSlug): string {
  return `/services/${slug}/`;
}

export function requestHref(slug?: ServiceSlug): string {
  return slug ? `/request/?service=${slug}` : "/request/";
}

/** Two-digit card number: 1 → "01". */
export function ordinal(index: number): string {
  return `0${index + 1}`;
}
