import type { CSSProperties } from "react";
import type { Artifact } from "../../../lib/artifact";

const tile = "relative h-44 overflow-hidden border border-ln-muted/60 bg-ln-surface";

const screens = [
  { dot: "8px", ink: "var(--ln-text)" },
  { dot: "5px", ink: "var(--ln-text)" },
  { dot: "8px", ink: "var(--ln-accent)" },
];

const rules = [
  { label: "Hairline 1px", cls: "border-t" },
  { label: "Heavy 3px", cls: "border-t-[3px]" },
  { label: "Double 3px", cls: "border-t-[3px] border-double" },
  { label: "Dotted", cls: "border-t border-dotted" },
];

export const textureArtifacts: Artifact[] = [
  {
    title: "Paper tooth",
    span: "md:col-span-3",
    node: (
      <div className={tile}>
        <div className="ln-tooth absolute inset-0 mix-blend-multiply" />
      </div>
    ),
  },
  {
    title: "Rules",
    span: "md:col-span-3",
    node: (
      <div className={`${tile} flex flex-col justify-around px-4`}>
        {rules.map(({ label, cls }) => (
          <div key={label}>
            <p className="ln-smallcaps mb-1 text-sm">{label}</p>
            <div className={`${cls} border-ln-text`} />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Gatefold crease",
    span: "md:col-span-3",
    node: (
      <div className={tile}>
        <div className="ln-crease absolute inset-0" />
      </div>
    ),
  },
  {
    title: "Print screens",
    span: "md:col-span-5",
    node: (
      <div className="grid grid-cols-3 gap-3">
        {screens.map(({ dot, ink }) => (
          <div
            key={`${dot}-${ink}`}
            className="ln-screen h-44 border border-ln-muted/60"
            style={{ "--dot": dot, "--ink": ink } as CSSProperties}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Misregistration",
    span: "md:col-span-4",
    node: (
      <div className={`${tile} flex items-center justify-center`}>
        <p className="relative text-6xl font-light leading-none tracking-tight">
          <span aria-hidden className="absolute translate-x-[3px] translate-y-[2px] text-ln-accent">Thriller</span>
          <span className="relative mix-blend-multiply">Thriller</span>
        </p>
      </div>
    ),
  },
  {
    title: "Grid overlay",
    span: "md:col-span-9",
    node: (
      <div className="relative border border-ln-muted/60 bg-ln-surface p-6">
        <div aria-hidden className="pointer-events-none absolute inset-6 grid grid-cols-12 gap-3 md:gap-6">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="bg-ln-muted/15 pt-1 text-center text-xs tabular-nums text-ln-muted">{i + 1}</div>
          ))}
        </div>
        <div className="relative grid grid-cols-12 gap-3 pt-8 md:gap-6">
          <h3 className="col-span-8 text-3xl font-light leading-tight md:text-5xl">Eight columns of headline</h3>
          <p className="col-span-4 text-sm leading-snug md:text-base">Four columns of text, set to the same grid as everything else.</p>
        </div>
      </div>
    ),
  },
];
