import type { ReactNode } from "react";

export type Artifact = {
  title: string;
  /** Tailwind column-span classes for the 12-column board grid. */
  span: string;
  node: ReactNode;
};
