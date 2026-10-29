"use client";

import { useState } from "react";
import { prepChecklist } from "@/content/guides";
import { Eyebrow } from "@/components/ui/text";

export function PrepChecklist() {
  const [ready, setReady] = useState(0);

  return (
    <section className="container prep-checklist">
      <div>
        <Eyebrow>YOUR PRE-CONVERSATION CHECKLIST</Eyebrow>
        <h2>
          Four small steps.
          <br /> <em>A clearer brief.</em>
        </h2>
        <p id="prep-count" role="status">
          {`${ready} of ${prepChecklist.length} ready`}
        </p>
      </div>
      <div>
        {prepChecklist.map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              name="prep"
              onChange={(event) =>
                setReady((count) => count + (event.target.checked ? 1 : -1))
              }
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
