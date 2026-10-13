import type { CSSProperties } from "react";
import { Abril_Fatface, Barlow_Condensed, Source_Serif_4 } from "next/font/google";
import { paletteVars } from "../../directions";
import "./haunted-cinema.css";

const display = Abril_Fatface({ subsets: ["latin"], weight: "400", variable: "--face-hc-display" });
const body = Source_Serif_4({ subsets: ["latin"], variable: "--face-hc-body" });
const label = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--face-hc-label",
});

export default function HauntedCinemaLayout({ children }: LayoutProps<"/mood-boards/haunted-cinema">) {
  return (
    <div
      className={`${display.variable} ${body.variable} ${label.variable} min-h-screen bg-hc-background font-hc-body text-hc-text`}
      style={paletteVars("haunted-cinema", "hc") as CSSProperties}
    >
      {children}
      <div aria-hidden className="hc-grain pointer-events-none fixed inset-0 z-50 opacity-[0.07]" />
    </div>
  );
}
