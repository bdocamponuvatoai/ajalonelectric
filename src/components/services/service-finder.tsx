"use client";

import Link from "next/link";
import { useState } from "react";
import { finderOptions } from "@/content/guides";
import { briefServiceLabels } from "@/content/planner";
import { requestHref, type ServiceSlug } from "@/content/services";
import { Icon } from "@/components/ui/icons";

export function ServiceFinder() {
  const [selected, setSelected] = useState<ServiceSlug | null>(null);
  const result = finderOptions.find((option) => option.slug === selected);

  return (
    <div className="finder-options">
      {finderOptions.map((option) => (
        <button
          key={option.slug}
          type="button"
          // No pressed state until a choice is made, as in the original.
          aria-pressed={selected ? option.slug === selected : undefined}
          onClick={() => setSelected(option.slug)}
        >
          {option.prompt}
          <Icon name="arrow" />
        </button>
      ))}
      <div id="finder-result" aria-live="polite" hidden={!result}>
        {result && (
          <>
            <h3>{briefServiceLabels[result.slug]}</h3>
            <p>{result.recommendation}</p>
            <Link href={requestHref(result.slug)} className="text-link">
              Build this project brief →
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
