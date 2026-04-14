import { type JSX } from "react";

export function Tag({
  label,
  className,
}: {
  label: string;
  className?: string;
}): JSX.Element {
  return <span className={className}>{label}</span>;
}
