import { PixelBox } from "../../components/neon-arcade";
import type { ColorRoleDef, ControlNotes, Tokens, TypeRoleDef } from "../shared/types";

export const colorIntro = "Six roles and a seventh for cyan. Each role has one use, and the two bright colors are rationed: magenta for the primary action, cyan for focus and selection. Ratios are computed from the palette.";

export const colorNote = "Dusk is added for this system. The mood board palette had no muted text or border color, and Moonlight at reduced strength looked washed out. Dusk is a lilac that reads as 'quiet' on both Night and Panel.";

export const colorRoles: ColorRoleDef[] = [
  { name: "Background", swatch: "background", token: "na-background", use: "The screen behind everything.", pairs: [["text", "background"]] },
  { name: "Surface", swatch: "surface", token: "na-surface", use: "Cards, panels, and a row under the pointer.", pairs: [["text", "surface"]] },
  { name: "Text", swatch: "text", token: "na-text", use: "All reading text and strong borders.", pairs: [["text", "background"], ["text", "surface"]] },
  { name: "Muted text", swatch: "muted", token: "na-muted", use: "Captions, hints, placeholders and disabled text. Added for this system.", pairs: [["muted", "background"], ["muted", "surface"]] },
  { name: "Border", swatch: "muted", token: "na-border", use: "The resting outline of a control and card. Needs 3:1.", pairs: [["muted", "background"]], ui: true },
  {
    name: "Accent",
    swatch: "accent",
    token: "na-accent",
    use: "The primary action, and nothing else, with its glow. A fill with Night text on it.",
    pairs: [["background", "accent"]],
  },
  {
    name: "Focus and selected",
    swatch: "secondary",
    token: "na-secondary",
    use: "Cyan, only for the focus ring and for anything selected, checked or on.",
    pairs: [["secondary", "background"], ["background", "secondary"]],
  },
];

export const typeIntro = "Four roles in two typefaces. Pixel type is for short headings only; everything that is read is monospace.";

export const typeRoles: TypeRoleDef[] = [
  {
    name: "Display",
    role: "display",
    spec: [["Font", "Press Start 2P"], ["Size", "36 (24 on mobile)"], ["Line height", "1.3"], ["Weight", "400"]],
    use: "One per screen, and short: the page title or a score.",
    sample: "THRILLER",
  },
  {
    name: "Heading",
    role: "heading",
    spec: [["Font", "Press Start 2P"], ["Size", "16"], ["Line height", "1.5"], ["Weight", "400"]],
    use: "Two or three words. Track names are too long, so they are set in bold body (20).",
    sample: "TRACK 04",
  },
  {
    name: "Body",
    role: "body",
    spec: [["Font", "Space Mono"], ["Size", "16 (14 for hints and errors)"], ["Line height", "1.75"], ["Weight", "400"]],
    use: "Everything read at length. Keep lines under 60 characters.",
    sample: "Track four and the title song, written by Rod Temperton. The album came out in 1982.",
  },
  {
    name: "Label",
    role: "label",
    spec: [["Font", "Space Mono"], ["Size", "14 (12 for badges and captions)"], ["Weight", "700"], ["Tracking", "+10%, all caps"]],
    use: "Buttons, tabs, chips, field labels and badges.",
    sample: "Track 04 · Single",
  },
];

const stepped = "nau-pixel size-16 border-4 border-na-text";
const rule = (width: string) => <div className={`w-40 border-t-4 border-na-text ${width}`} />;

export const tokens: Tokens = {
  intro: "Everything sits on a 4px step, and 4px is also the border and the corner step. Nothing is blurred and nothing is round.",
  spacingUsage: "Pick the nearest step. Never a value in between.",
  spacing: [
    { px: 4, use: "Inside badges, icon gaps" },
    { px: 8, use: "Between a label and its control" },
    { px: 12, use: "Control padding, row gaps" },
    { px: 16, use: "Between related controls" },
    { px: 24, use: "Card and panel padding" },
    { px: 32, use: "Between groups" },
    { px: 48, use: "Between sections on mobile" },
    { px: 64, use: "Between sections on desktop" },
  ],
  cornersUsage: "Stepped, never rounded. Each corner loses a 4px square. Radios take two steps.",
  corners: [
    { label: "Stepped · 4px", sample: <div className={stepped} /> },
    { label: "Octagon · radio", sample: <div className="nau-octagon size-16 border-4 border-na-text" /> },
  ],
  bordersUsage: "Every border is 4px. Color and style say what the line is doing.",
  borders: [
    { name: "Rest", px: 4, use: "Dusk. Controls and cards at rest", sample: <div className="w-40 border-t-4 border-na-border" /> },
    { name: "Strong", px: 4, use: "Moonlight. Hover, panels and buttons", sample: rule("") },
    { name: "Disabled", px: 4, use: "Dashed Dusk", sample: <div className="w-40 border-t-4 border-dashed border-na-border" /> },
    { name: "Focus ring", px: 4, use: "Cyan outline, 4px away from the control", sample: <div className="w-40 border-t-4 border-na-secondary" /> },
  ],
  shadowUsage: "A hard offset in a flat color, never a blur. The one soft thing is the magenta glow on the primary button.",
  shadows: [
    { name: "None", use: "While pressed, and on disabled controls", sample: <div className={`${stepped} w-40`} /> },
    { name: "Offset", value: "4px", use: "Buttons at rest", sample: <PixelBox offset="4px" shadowColor="var(--na-border)" className="h-16 w-40 border-na-text bg-na-surface"><span /></PixelBox> },
    { name: "Lift", value: "7px", use: "Hover: the button moves up and left", sample: <PixelBox offset="7px" shadowColor="var(--na-border)" className="h-16 w-40 border-na-text bg-na-surface"><span /></PixelBox> },
  ],
};

export const controlNotes: ControlNotes = {
  "Primary button": "Lifts on a taller hard shadow, sinks and darkens when pressed. The only magenta.",
  "Secondary button": "Same lift. The face moves from Night to Panel.",
  Link: "Hover inverts it to a Moonlight block. A disabled link is plain, dotted text.",
  "Text input": "The border goes from Dusk to Moonlight, then cyan with a ring.",
  Select: "Follows the text input.",
  Checkbox: "Selected fills with cyan and draws a pixel check.",
  Radio: "Selected fills with cyan and a Night square.",
  Toggle: "On fills the track with cyan and steps the knob across.",
  Tab: "Selected gets a cyan underline and full-strength text.",
  "Filter chip": "Selected fills with cyan.",
  "List row": "Hover adds a bar and Panel. Selected gets a cyan bar and arrow.",
};
