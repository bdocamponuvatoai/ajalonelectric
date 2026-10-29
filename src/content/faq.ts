export type FaqItem = { question: string; answer: string };

const faqs = {
  services: {
    question: "What can Ajalon Electric help with?",
    answer:
      "Ajalon Electric’s service areas are electrical work, generator installation and repair, and solar installation. Share your project details so the team can confirm the exact scope.",
  },
  generatorRepair: {
    question: "Do you offer generator repair as well as installation?",
    answer:
      "Yes. Both generator installation and repair are included in the service information provided for Ajalon Electric. For an existing system, have its make, model and a description of the concern ready.",
  },
  backupSystem: {
    question: "How do I know which backup system I need?",
    answer:
      "Start by listing what you want to keep running. Equipment selection and sizing need a professional review of your property, appliances and project requirements. The priority selector here prepares a conversation, not an equipment recommendation.",
  },
  solarPrice: {
    question: "Can I get a solar price from this website?",
    answer:
      "Solar pricing depends on the property and the agreed project scope. This preview prepares your questions and project details; it does not calculate a quote, savings estimate or incentive eligibility.",
  },
  serviceArea: {
    question: "Do you serve my address?",
    answer:
      "Ajalon Electric is based at 3010 Brooks Ave in Knoxville. Add your ZIP code to your brief or call the team to confirm service for your exact address.",
  },
  booking: {
    question: "Does the project planner book an appointment?",
    answer:
      "No. It prepares a brief you can download or open in your email app. The team confirms scope, pricing and timing directly. No request is automatically submitted from this preview.",
  },
} satisfies Record<string, FaqItem>;

export const allFaqs: FaqItem[] = Object.values(faqs);

export const homeFaqs: FaqItem[] = [
  faqs.services,
  faqs.generatorRepair,
  faqs.serviceArea,
  faqs.booking,
];
