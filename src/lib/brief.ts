// Framework-free builders for the project brief, its email draft and the
// backup-priority hand-off link.
import { site } from "@/config/site";
import { briefServiceLabels } from "@/content/planner";
import type { ServiceSlug } from "@/content/services";

export type BriefValues = {
  service: ServiceSlug;
  property: string;
  zip: string;
  projectType: string;
  timing: string;
  contactMethod: string;
  notes: string;
  customerName: string;
  replyTo: string;
  priorities: string[];
};

export type BriefEntry = [term: string, value: string];

/** Values as the brief shows them: free text trimmed. */
function trimmed(values: BriefValues): BriefValues {
  return {
    ...values,
    zip: values.zip.trim(),
    notes: values.notes.trim(),
    customerName: values.customerName.trim(),
    replyTo: values.replyTo.trim(),
  };
}

export function summaryEntries(values: BriefValues): BriefEntry[] {
  const v = trimmed(values);
  return [
    ["Service", briefServiceLabels[v.service]],
    ["Property", v.zip ? `${v.property} · ${v.zip}` : v.property],
    ["Timing", v.timing],
  ];
}

export function reviewEntries(values: BriefValues): BriefEntry[] {
  const v = trimmed(values);
  const entries: BriefEntry[] = [
    ["Service", briefServiceLabels[v.service]],
    ["Project", v.projectType],
    ["Property", `${v.property} · ZIP ${v.zip}`],
    ["Timeframe", v.timing],
  ];
  if (v.service === "generators") {
    entries.push([
      "Backup priorities",
      v.priorities.join(", ") || "To be discussed",
    ]);
  }
  entries.push(
    ["Project details", v.notes],
    ["Preferred contact", v.contactMethod],
  );
  if (v.customerName) entries.push(["Name", v.customerName]);
  if (v.replyTo) entries.push(["Reply details", v.replyTo]);
  return entries;
}

export function briefText(entries: BriefEntry[]): string {
  return (
    "AJALON ELECTRIC — PROJECT BRIEF\n\n" +
    entries.map(([term, value]) => `${term}: ${value}`).join("\n\n") +
    "\n\nPlease confirm service coverage, project scope, pricing and the next available appointment. This brief is a request for discussion, not a confirmed booking.\n\nPrepared using the Ajalon Electric private design preview."
  );
}

export function briefMailto(values: BriefValues): string {
  const subject = `Project inquiry — ${briefServiceLabels[values.service]}`;
  const body = briefText(reviewEntries(values));
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Link from the backup-priority selector into the generator planner. */
export function backupPlanHref(selected: string[]): string {
  const params = new URLSearchParams({ service: "generators" });
  if (selected.length) params.set("priorities", selected.join("|"));
  return `/request/?${params.toString()}`;
}

export function priorityCountText(count: number): string {
  if (!count) return "No priorities selected yet";
  return `${count}${count === 1 ? " priority" : " priorities"} for your conversation`;
}
