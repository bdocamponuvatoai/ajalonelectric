"use client";

import { useSearchParams } from "next/navigation";
import { backupPriorities } from "@/content/planner";
import { getService } from "@/content/services";
import { ProjectPlanner, type PlannerPreset } from "./project-planner";

const priorityNames = backupPriorities.map((item) => item.label);

/**
 * Applies `?service=` and `?priorities=a|b` presets. Rendered inside
 * <Suspense>, so the static HTML holds the default planner as the fallback.
 */
export function PresetPlanner() {
  const params = useSearchParams();
  const service = getService(params.get("service") ?? "")?.slug;
  const priorities = (params.get("priorities") ?? "")
    .split("|")
    .filter((value) => priorityNames.includes(value));
  const preset: PlannerPreset = { service, priorities };

  return (
    <ProjectPlanner
      key={`${service}|${priorities.join("|")}`}
      preset={preset}
    />
  );
}
