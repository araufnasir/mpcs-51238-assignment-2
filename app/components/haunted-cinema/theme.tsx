import type { CSSProperties, ReactNode } from "react";
import { Abril_Fatface, Barlow_Condensed, Source_Serif_4 } from "next/font/google";
import { paletteVars } from "../../directions";
import "./library.css";

const display = Abril_Fatface({ subsets: ["latin"], weight: "400", variable: "--face-hc-display" });
const body = Source_Serif_4({ subsets: ["latin"], variable: "--face-hc-body" });
const label = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600"], variable: "--face-hc-label" });

/** Loads the fonts, sets the palette tokens and lays the film grain over the page. */
export function HauntedTheme({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${display.variable} ${body.variable} ${label.variable} min-h-screen bg-hc-background font-hc-body text-hc-text`}
      style={paletteVars("haunted-cinema", "hc") as CSSProperties}
    >
      {children}
      <div aria-hidden className="hcu-grain pointer-events-none fixed inset-0 z-50 opacity-[0.07]" />
    </div>
  );
}
