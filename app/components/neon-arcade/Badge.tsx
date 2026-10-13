import type { ReactNode } from "react";
import { type as t } from "./type";

/** A small filled tag. */
export function Badge({ children }: { children: ReactNode }) {
  return <span className={`${t.labelSmall} inline-block bg-na-text px-2 py-1.5 text-na-background`}>{children}</span>;
}
