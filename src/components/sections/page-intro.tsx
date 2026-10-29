import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/text";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <section className="container page-intro">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
}
