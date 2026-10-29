"use client";

import { useState } from "react";
import { backupPriorities } from "@/content/planner";
import { backupPlanHref, priorityCountText } from "@/lib/brief";
import { Icon } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/links";
import { Eyebrow } from "@/components/ui/text";

/** Backup-priority picker that hands its selection to the generator planner. */
export function PriorityTool() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (label: string, checked: boolean) =>
    setSelected((current) =>
      // Keep the on-screen order, as the original did.
      backupPriorities
        .map((item) => item.label)
        .filter((item) => (item === label ? checked : current.includes(item))),
    );

  return (
    <div className="priority-tool">
      <Eyebrow>BUILD YOUR BACKUP BRIEF</Eyebrow>
      <h3>What would you keep running?</h3>
      <p>Pick the things you’d like to discuss.</p>
      <div className="priority-grid">
        {backupPriorities.map(({ icon, label }) => (
          <label key={label}>
            <input
              type="checkbox"
              name="backup"
              value={label}
              checked={selected.includes(label)}
              onChange={(event) => toggle(label, event.target.checked)}
            />
            <span className="priority-icon">
              <Icon name={icon} />
            </span>
            <span>{label}</span>
            <span className="priority-check">
              <Icon name="check" />
            </span>
          </label>
        ))}
      </div>
      <div className="priority-bottom">
        <p role="status">{priorityCountText(selected.length)}</p>
        <ButtonLink href={backupPlanHref(selected)} variant="small">
          Plan my backup
        </ButtonLink>
      </div>
      <p className="fine">
        A starting point for a conversation. This does not calculate electrical
        loads or select equipment.
      </p>
    </div>
  );
}
