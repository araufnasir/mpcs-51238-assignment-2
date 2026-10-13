export type Role = "background" | "surface" | "text" | "muted" | "accent" | "secondary";

export type Swatch = { name: string; role: Role; hex: string };

export type Direction = {
  slug: string;
  name: string;
  feel: [string, string, string];
  palette: Swatch[];
  /** Colors added for the design system only, where a role needs one the mood board palette lacks. */
  extras?: Swatch[];
  moodBoardReady: boolean;
  designSystemReady: boolean;
};

export const directions: Direction[] = [
  {
    slug: "haunted-cinema",
    name: "Haunted Cinema",
    feel: ["ominous", "theatrical", "tactile"],
    palette: [
      { name: "Ink", role: "background", hex: "#0B0807" },
      { name: "Soot", role: "surface", hex: "#1A1412" },
      { name: "Bone", role: "text", hex: "#EDE3D0" },
      { name: "Ash", role: "muted", hex: "#8A7F73" },
      { name: "Blood", role: "accent", hex: "#B3121B" },
    ],
    moodBoardReady: true,
    designSystemReady: true,
  },
  {
    slug: "neon-arcade",
    name: "Neon Arcade",
    feel: ["electric", "playful", "kinetic"],
    palette: [
      { name: "Night", role: "background", hex: "#140B2E" },
      { name: "Panel", role: "surface", hex: "#231552" },
      { name: "Moonlight", role: "text", hex: "#F4F0FF" },
      { name: "Magenta", role: "accent", hex: "#FF2E93" },
      { name: "Cyan", role: "secondary", hex: "#2EE6F0" },
    ],
    extras: [{ name: "Dusk", role: "muted", hex: "#9B8FCC" }],
    moodBoardReady: true,
    designSystemReady: false,
  },
  {
    slug: "liner-notes",
    name: "Liner Notes",
    feel: ["warm", "considered", "editorial"],
    palette: [
      { name: "Paper", role: "background", hex: "#F3EBDC" },
      { name: "Card stock", role: "surface", hex: "#FBF7EE" },
      { name: "Ink", role: "text", hex: "#231C16" },
      { name: "Rule", role: "muted", hex: "#6E6254" },
      { name: "Oxblood", role: "accent", hex: "#8C2F1B" },
    ],
    moodBoardReady: true,
    designSystemReady: false,
  },
];

export function findDirection(slug: string): Direction {
  const direction = directions.find((d) => d.slug === slug);
  if (!direction) throw new Error(`Unknown direction: ${slug}`);
  return direction;
}

export function swatchOf(slug: string, role: Role): Swatch {
  const direction = findDirection(slug);
  const swatch = [...direction.palette, ...(direction.extras ?? [])].find((s) => s.role === role);
  if (!swatch) throw new Error(`${slug} has no ${role} color`);
  return swatch;
}

export function colorOf(slug: string, role: Role): string {
  return swatchOf(slug, role).hex;
}

/** CSS custom properties like --hc-accent, one per color role, extras included. */
export function paletteVars(slug: string, prefix: string): Record<string, string> {
  const direction = findDirection(slug);
  return Object.fromEntries([...direction.palette, ...(direction.extras ?? [])].map((s) => [`--${prefix}-${s.role}`, s.hex]));
}
