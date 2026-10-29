import type { IconName } from "@/components/ui/icons";
import type { ServiceSlug } from "./services";

/** Service names used in the live summary, review and email subject. */
export const briefServiceLabels: Record<ServiceSlug, string> = {
  electrical: "Electrical services",
  generators: "Generator installation / repair",
  solar: "Solar installation",
};

export const projectTypes: Record<ServiceSlug, string[]> = {
  electrical: [
    "Repair or troubleshooting",
    "Lighting or outlet project",
    "Electrical improvement",
    "New project / let’s discuss",
  ],
  generators: [
    "New generator installation",
    "Existing generator repair",
    "Explore backup options",
  ],
  solar: [
    "Explore a new solar installation",
    "Discuss a planned project",
    "Understand the possibilities",
  ],
};

export const backupPriorities: { icon: IconName; label: string }[] = [
  { icon: "fridge", label: "Refrigeration" },
  { icon: "light", label: "Essential lighting" },
  { icon: "wifi", label: "Internet & charging" },
  { icon: "climate", label: "Heating & cooling" },
  { icon: "work", label: "Home office" },
  { icon: "more", label: "Other essentials" },
];

export const propertyOptions = ["Home", "Business", "Other / let’s discuss"];

export const timingOptions = [
  "As soon as available",
  "Within the next month",
  "Planning a future project",
  "Just exploring options",
];

export const contactMethods = ["Email", "Phone"];

export const briefFileName = "Ajalon-Electric-Project-Brief.txt";
