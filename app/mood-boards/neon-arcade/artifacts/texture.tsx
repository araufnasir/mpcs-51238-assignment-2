import { PixelBox } from "../PixelBox";
import type { Artifact } from "../../../lib/artifact";

const tile = "relative h-44 overflow-hidden bg-na-background";
const layer = "absolute inset-0";

const ditherSteps = ["", "na-dither--half", "na-dither--quarter", "na-dither--sparse"];

const shadowSizes = ["4px", "8px", "12px"];

export const textureArtifacts: Artifact[] = [
  {
    title: "Grid floor",
    span: "md:col-span-4",
    node: (
      <div className={tile}>
        <div className="na-grid absolute -inset-x-1/2 top-4 bottom-0" />
      </div>
    ),
  },
  {
    title: "Scanlines",
    span: "md:col-span-4",
    node: (
      <div className={tile}>
        <div className={`${layer} bg-[linear-gradient(var(--na-text),var(--na-line))]`} />
        <div className={`${layer} na-scanlines`} />
      </div>
    ),
  },
  {
    title: "Dither ramp",
    span: "md:col-span-4",
    node: (
      <div className={`${tile} flex`}>
        {ditherSteps.map((cls) => (
          <div key={cls} className={`na-dither flex-1 ${cls}`} />
        ))}
      </div>
    ),
  },
  {
    title: "Starfield",
    span: "md:col-span-4",
    node: (
      <div className={tile}>
        <div className={`${layer} na-stars`} />
      </div>
    ),
  },
  {
    title: "Dot matrix",
    span: "md:col-span-4",
    node: (
      <div className={tile}>
        <div className={`${layer} na-dots`} />
      </div>
    ),
  },
  {
    title: "Stepped corners, hard shadows",
    span: "md:col-span-4",
    node: (
      <div className={`${tile} flex items-center justify-around !overflow-visible`}>
        {shadowSizes.map((offset) => (
          <PixelBox key={offset} offset={offset} shadowColor="var(--na-line)" className="border-na-text bg-na-surface">
            <div className="flex h-16 w-14 items-end p-1 text-[10px] font-bold">{offset}</div>
          </PixelBox>
        ))}
      </div>
    ),
  },
];
