import type { CSSProperties, ReactNode } from "react";
import { Newsreader } from "next/font/google";
import { paletteVars } from "../../directions";
import "./library.css";

const text = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], variable: "--face-ln" });

/** Loads the typeface, sets the palette tokens and lays a faint paper tooth over the page. */
export function LinerTheme({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${text.variable} min-h-screen bg-ln-background font-ln text-lg text-ln-text`}
      style={paletteVars("liner-notes", "ln") as CSSProperties}
    >
      {children}
      <div aria-hidden className="lnu-tooth pointer-events-none fixed inset-0 z-50 opacity-25 mix-blend-multiply" />
    </div>
  );
}
