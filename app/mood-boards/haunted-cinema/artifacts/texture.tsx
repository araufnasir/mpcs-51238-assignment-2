import type { Artifact } from "../../../lib/artifact";

const tile = "relative h-44 overflow-hidden";
const layer = "absolute inset-0";

export const textureArtifacts: Artifact[] = [
  {
    title: "Film grain",
    span: "md:col-span-4",
    node: (
      <div className={`${tile} bg-hc-surface`}>
        <div className={`${layer} hc-grain opacity-40`} />
      </div>
    ),
  },
  {
    title: "Halftone shadow",
    span: "md:col-span-4",
    node: (
      <div className={`${tile} bg-hc-background`}>
        <div className={`${layer} hc-halftone`} />
      </div>
    ),
  },
  {
    title: "Vignette",
    span: "md:col-span-4",
    node: (
      <div className={`${tile} bg-hc-muted`}>
        <div className={`${layer} hc-vignette`} />
      </div>
    ),
  },
  {
    title: "Film scratches",
    span: "md:col-span-4",
    node: (
      <div className={`${tile} bg-hc-background`}>
        <div className={`${layer} hc-scratches`} />
      </div>
    ),
  },
  {
    title: "Projector beam",
    span: "md:col-span-4",
    node: <div className={`${tile} hc-spotlight`} />,
  },
  {
    title: "Poster frame",
    span: "md:col-span-4",
    node: (
      <div className={`${tile} p-3`}>
        <div className="hc-frame flex h-full items-center justify-center">
          <p className="font-hc-label text-lg font-semibold uppercase tracking-[0.3em]">Now showing</p>
        </div>
      </div>
    ),
  },
  {
    title: "Marquee bulbs",
    span: "md:col-span-12",
    node: <div className="hc-marquee h-12 bg-hc-surface" />,
  },
];
