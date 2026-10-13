import type { CSSProperties } from "react";
import { Press_Start_2P, Space_Mono } from "next/font/google";
import { paletteVars } from "../../directions";
import "./neon-arcade.css";

const display = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--face-na-display" });
const body = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--face-na-body" });

export default function NeonArcadeLayout({ children }: LayoutProps<"/mood-boards/neon-arcade">) {
  return (
    <div
      className={`na ${display.variable} ${body.variable} min-h-screen bg-na-background font-na-body text-na-text`}
      style={paletteVars("neon-arcade", "na") as CSSProperties}
    >
      {children}
      <div aria-hidden className="na-scanlines pointer-events-none fixed inset-0 z-50" />
    </div>
  );
}
