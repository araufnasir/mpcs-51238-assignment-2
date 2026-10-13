import type { CSSProperties } from "react";
import { Newsreader } from "next/font/google";
import { paletteVars } from "../../directions";
import "./liner-notes.css";

const text = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], variable: "--face-ln" });

export default function LinerNotesLayout({ children }: LayoutProps<"/mood-boards/liner-notes">) {
  return (
    <div
      className={`${text.variable} min-h-screen bg-ln-background font-ln text-lg text-ln-text`}
      style={paletteVars("liner-notes", "ln") as CSSProperties}
    >
      {children}
      <div aria-hidden className="ln-tooth pointer-events-none fixed inset-0 z-50 opacity-25 mix-blend-multiply" />
    </div>
  );
}
