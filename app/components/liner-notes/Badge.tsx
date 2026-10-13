import type { ReactNode } from "react";
import { type as t } from "./type";

/** A small ruled tag. It takes the color around it. */
export function Badge({ children }: { children: ReactNode }) {
  return <span className={`${t.labelSmall} inline-block border border-current px-2 py-1`}>{children}</span>;
}
