import type { ReactNode } from "react";
import { type as t } from "./type";

/** A small outlined tag. It takes the color of its surroundings, so it works on any row or card. */
export function Badge({ children }: { children: ReactNode }) {
  return <span className={`${t.labelSmall} inline-block border border-current px-2 py-1.5`}>{children}</span>;
}
