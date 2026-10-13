import type { ColorRoleDef, ControlNotes, Tokens, TypeRoleDef } from "../shared/types";

export const colorIntro = "Five colors, six jobs. Each role has one use. Ratios are computed from the palette, so they stay true if a color changes.";

export const colorRoles: ColorRoleDef[] = [
  { name: "Background", swatch: "background", token: "hc-background", use: "The page behind everything.", pairs: [["text", "background"]] },
  { name: "Surface", swatch: "surface", token: "hc-surface", use: "Cards, panels, and a row under the pointer.", pairs: [["text", "surface"]] },
  { name: "Text", swatch: "text", token: "hc-text", use: "All reading text, strong borders and the focus ring.", pairs: [["text", "background"], ["text", "surface"]] },
  { name: "Muted text", swatch: "muted", token: "hc-muted", use: "Captions, hints, placeholders and disabled text.", pairs: [["muted", "background"], ["muted", "surface"]] },
  { name: "Border", swatch: "muted", token: "hc-border", use: "Dividers and the resting outline of a control. Needs 3:1.", pairs: [["muted", "background"]], ui: true },
  {
    name: "Accent",
    swatch: "accent",
    token: "hc-accent",
    use: "The primary action, and nothing else. A fill with Bone text on it; never text, never the only edge.",
    pairs: [["text", "accent"], ["accent", "background"]],
  },
];

export const typeIntro = "Four roles in three typefaces. A role is always set the same way; nothing is sized ad hoc.";

export const typeRoles: TypeRoleDef[] = [
  {
    name: "Display",
    role: "display",
    spec: [["Font", "Abril Fatface"], ["Size", "72 (48 on mobile)"], ["Line height", "0.95"], ["Weight", "400"]],
    use: "One per screen: the page title, or a track name in the detail panel.",
    sample: "Thriller",
  },
  {
    name: "Heading",
    role: "heading",
    spec: [["Font", "Abril Fatface"], ["Size", "32"], ["Line height", "1.1"], ["Weight", "400"]],
    use: "Card titles and section titles.",
    sample: "Billie Jean",
  },
  {
    name: "Body",
    role: "body",
    spec: [["Font", "Source Serif 4"], ["Size", "18 (16 for hints and errors)"], ["Line height", "1.6"], ["Weight", "400"]],
    use: "Everything read at length. Keep lines under 60 characters.",
    sample: "Track four and the title song, written by Rod Temperton. The album came out in 1982.",
  },
  {
    name: "Label",
    role: "label",
    spec: [["Font", "Barlow Condensed"], ["Size", "16 (14 for badges and captions)"], ["Weight", "600"], ["Tracking", "+14%, all caps"]],
    use: "Buttons, tabs, chips, field labels and badges.",
    sample: "Track 04 · Single",
  },
];

export const tokens: Tokens = {
  intro: "Everything sits on a 4px step. Corners are square, borders are flat, and the only shadow is a hard offset.",
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
  cornersUsage: "Square. Radios are the one round shape, so they read as radios.",
  corners: [
    { label: "0 · everything", sample: <div className="size-16 border-2 border-hc-text" /> },
    { label: "Round · radio only", sample: <div className="size-16 rounded-full border-2 border-hc-text" /> },
  ],
  bordersUsage: "Flat lines in Bone or Ash. Width tells you what the line is for.",
  borders: [
    { name: "Hairline", px: 1, use: "Dividers between list rows", sample: <div className="w-40 border-t border-hc-text" /> },
    { name: "Control", px: 2, use: "Buttons, inputs, cards, chips", sample: <div className="w-40 border-t-2 border-hc-text" /> },
    { name: "Frame", px: 3, use: "Detail panel, error notice: plus a 1px outline 4px out", sample: <div className="w-40 border-t-[3px] border-hc-text" /> },
    { name: "Focus ring", px: 3, use: "Bone outline, 3px away from the control", sample: <div className="w-40 border-t-[3px] border-hc-text" /> },
  ],
  shadowUsage: "A hard offset, never a blur. It means 'this lifts when you reach for it'.",
  shadows: [
    { name: "None", use: "At rest, and while pressed", sample: <div className="h-16 border-2 border-hc-text bg-hc-surface" /> },
    { name: "Lift", value: "4px 4px 0 Bone", use: "Hover on buttons. Hard edge, never blurred", sample: <div className="h-16 border-2 border-hc-text bg-hc-surface shadow-[4px_4px_0_var(--hc-text)]" /> },
  ],
};

export const controlNotes: ControlNotes = {
  "Primary button": "Lifts with a hard Bone shadow, sinks and darkens when pressed.",
  "Secondary button": "Same lift. The fill moves from clear to Soot.",
  Link: "Hover inverts it. A disabled link is plain, dotted text.",
  "Text input": "The border goes from Ash to Bone, then gains a ring.",
  Select: "Follows the text input.",
  Checkbox: "Selected fills with Bone and draws a check.",
  Radio: "Selected fills with Bone and a dot.",
  Toggle: "On fills the track with Bone and moves the knob.",
  Tab: "Selected gets a heavy Bone underline and full-strength text.",
  "Filter chip": "Selected inverts to Bone.",
  "List row": "Hover adds a bar and Soot. Selected inverts to Bone.",
};
