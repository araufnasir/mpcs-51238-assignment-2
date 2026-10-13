import type { CSSProperties, ReactNode } from "react";
import { Press_Start_2P, Space_Mono } from "next/font/google";
import { paletteVars } from "../../directions";
import "./library.css";

const display = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--face-na-display" });
const body = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--face-na-body" });

/** Loads the fonts, sets the palette tokens and lays scanlines over the page. */
export function NeonTheme({ children }: { children: ReactNode }) {
  return (
    <div
      className={`na nau-theme ${display.variable} ${body.variable} min-h-screen bg-na-background font-na-body text-na-text`}
      style={paletteVars("neon-arcade", "na") as CSSProperties}
    >
      {children}
      <div aria-hidden className="nau-scanlines pointer-events-none fixed inset-0 z-50" />
    </div>
  );
}
