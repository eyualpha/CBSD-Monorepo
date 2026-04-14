import { type JSX } from "react";

type PanelProps = {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
};

export function Panel({
  title,
  eyebrow,
  children,
  className,
}: PanelProps): JSX.Element {
  return (
    <section className={className}>
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
