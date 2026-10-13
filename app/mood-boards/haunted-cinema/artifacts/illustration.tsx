import { Art, Bats, FilmStrip, MoonAndTree, Sky } from "../../../components/haunted-cinema/illustrations";
import type { Artifact } from "../../../lib/artifact";

export const illustrationArtifacts: Artifact[] = [
  {
    title: "Moon and bare tree",
    span: "md:col-span-6",
    node: <MoonAndTree />,
  },
  {
    title: "Graveyard",
    span: "md:col-span-6",
    node: (
      <Art viewBox="0 0 300 200" label="Crooked headstones and an iron gate at dusk">
        <Sky id="sky-yard" height={200} />
        <g fill="var(--hc-background)">
          <path d="M0 200V150Q80 125 150 150T300 140V200z" />
          <path d="M30 160v-30a14 14 0 0 1 28 0v30zM90 168v-22a12 12 0 0 1 24 0v22zM190 160v-34a15 15 0 0 1 30 0v34z" />
          <path d="M250 165v-48h8v14h14v8h-14v26zM142 135v-36h7v10h12v7h-12v19z" />
        </g>
        <g stroke="var(--hc-background)" strokeWidth="3">
          <path d="M0 140h300M0 128v34M16 128v34M32 128v34M48 128v34" transform="translate(0 20)" />
          <path d="M255 110V60a22 22 0 0 1 44 0v50" fill="none" strokeWidth="5" transform="translate(-20 20)" />
        </g>
      </Art>
    ),
  },
  {
    title: "Reaching hand",
    span: "md:col-span-4",
    node: (
      <Art viewBox="0 0 200 240" label="A hand reaching out of the ground in front of a red sun">
        <circle cx="100" cy="100" r="85" fill="var(--hc-accent)" />
        <g fill="none" stroke="var(--hc-background)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
          <path d="M82 178 60 152 55 130M88 162 80 112 84 80M100 160V102l4-34M112 162l8-52 6-26M122 170l18-38 10-18" />
        </g>
        <g fill="var(--hc-background)">
          <ellipse cx="100" cy="178" rx="29" ry="30" />
          <path d="M76 190 70 240h60l-6-50z" />
          <path d="M0 240v-20Q50 205 100 222T200 215v25z" />
        </g>
      </Art>
    ),
  },
  {
    title: "Eye",
    span: "md:col-span-8",
    node: (
      <Art viewBox="0 0 300 160" label="A wide-open eye with a red iris">
        <defs>
          <clipPath id="eye-lid">
            <path d="M10 80Q150-10 290 80Q150 170 10 80z" />
          </clipPath>
        </defs>
        <g clipPath="url(#eye-lid)">
          <rect width="300" height="160" fill="var(--hc-text)" />
          <g stroke="var(--hc-accent)" strokeWidth="1.5" fill="none" opacity=".6">
            <path d="M10 80Q60 76 100 82M290 80Q240 76 200 82M30 62 90 76M270 98l-60-14M40 100l55-14" />
          </g>
          <circle cx="150" cy="80" r="46" fill="var(--hc-accent)" />
          <circle cx="150" cy="80" r="20" fill="var(--hc-background)" />
          <circle cx="161" cy="68" r="6" fill="var(--hc-text)" />
        </g>
        <path d="M10 80Q150-10 290 80Q150 170 10 80z" fill="none" stroke="var(--hc-background)" strokeWidth="4" />
      </Art>
    ),
  },
  {
    title: "Bats",
    span: "md:col-span-6",
    node: <Bats />,
  },
  {
    title: "Film strip",
    span: "md:col-span-6",
    node: <FilmStrip />,
  },
];
