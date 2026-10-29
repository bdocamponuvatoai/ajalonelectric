import type { ServiceSlug } from "./services";

/** Project-guide panels shown on /project-guide/. */
export const projectGuides: Record<
  ServiceSlug,
  {
    eyebrow: string;
    title: string;
    description: string;
    questions: string[];
    action: string;
  }
> = {
  electrical: {
    eyebrow: "ELECTRICAL PROJECTS",
    title: "Start with what you’re noticing.",
    description:
      "Put the concern or improvement into your own words. You don’t need a technical diagnosis to start a useful conversation.",
    questions: [
      "Which area of the property is involved?",
      "What have you noticed, and when did it begin?",
      "What would you like the finished project to achieve?",
      "What should the team know about access or timing?",
    ],
    action: "Plan an electrical project",
  },
  generators: {
    eyebrow: "GENERATOR PROJECTS",
    title: "Put your priorities into the plan.",
    description:
      "A useful starting point is the equipment you already have, or the things you would like to keep running. Leave sizing and equipment decisions to the professional review.",
    questions: [
      "Is this a new installation or help with an existing generator?",
      "Which appliances or activities matter most to you?",
      "For repairs, what is the make, model and concern?",
      "What site review, installation work and follow-up are included?",
    ],
    action: "Plan a generator project",
  },
  solar: {
    eyebrow: "SOLAR PROJECTS",
    title: "Bring the bigger picture into focus.",
    description:
      "Your goals and property details give the solar conversation a useful starting point. Ask for a clear explanation of the proposed work before you commit.",
    questions: [
      "What would you like to understand or achieve with solar?",
      "What do you already know about the roof and property?",
      "What equipment, approvals and installation work are included?",
      "What assumptions, ongoing responsibilities and costs should you review?",
    ],
    action: "Plan a solar project",
  },
};

/** Service-finder answers on /services/. */
export const finderOptions: {
  slug: ServiceSlug;
  prompt: string;
  recommendation: string;
}[] = [
  {
    slug: "electrical",
    prompt: "I have an electrical project or concern.",
    recommendation:
      "Start with the concern or improvement you have in mind. The team will help clarify what your project needs.",
  },
  {
    slug: "generators",
    prompt: "I want to plan for backup power.",
    recommendation:
      "Start with your backup priorities or existing generator details. The team confirms equipment and project requirements.",
  },
  {
    slug: "solar",
    prompt: "I’m curious about solar for my property.",
    recommendation:
      "Start with your property and energy goals. The team confirms the possibilities, scope and pricing with you.",
  },
];

export const prepChecklist = [
  "Choose the service that best fits your goal.",
  "Note your property type and ZIP code.",
  "Write down your main priorities or questions.",
  "Confirm scope, price and timing directly with the team.",
];
