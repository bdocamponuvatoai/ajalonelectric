import { Fragment, type ReactNode } from "react";

/**
 * Joins lines with `<br>` followed by a space, matching the original markup
 * (`First<br> second`). Each line stays a single text node.
 */
export function Lines({ lines }: { lines: string[] }) {
  return lines.map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {index > 0 ? ` ${line}` : line}
    </Fragment>
  ));
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}
