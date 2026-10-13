import type { ColorRoleDef, ControlNotes, Tokens, TypeRoleDef } from "../shared/types";

export const colorIntro = "Five colors, six jobs. Each role has one use, and oxblood is the rarest: the primary action and nothing else. Ratios are computed from the palette.";

export const colorNote = "No color is added for this system. Rule serves as both the muted text and the border, as it did on the mood board.";

export const colorRoles: ColorRoleDef[] = [
  { name: "Background", swatch: "background", token: "ln-background", use: "The page, with a faint paper tooth over it.", pairs: [["text", "background"]] },
  { name: "Surface", swatch: "surface", token: "ln-surface", use: "Cards, panels, and a row under the pointer.", pairs: [["text", "surface"]] },
  { name: "Text", swatch: "text", token: "ln-text", use: "All reading text, rules, controls and the focus ring.", pairs: [["text", "background"], ["text", "surface"]] },
  { name: "Muted text", swatch: "muted", token: "ln-muted", use: "Captions, hints, placeholders and disabled text.", pairs: [["muted", "background"], ["muted", "surface"]] },
  { name: "Border", swatch: "muted", token: "ln-border", use: "Quiet rules between rows and under tabs. Needs 3:1.", pairs: [["muted", "background"]], ui: true },
  {
    name: "Accent",
    swatch: "accent",
    token: "ln-accent",
    use: "The primary action, and nothing else: a fill with Paper text on it. It would pass as text, but it is kept for the action alone.",
    pairs: [["background", "accent"], ["accent", "background"]],
  },
];

export const typeIntro = "Four roles in one typeface. Weight and size do the work: light for the large, regular for the read, small caps for the labels.";

export const typeRoles: TypeRoleDef[] = [
  {
    name: "Display",
    role: "display",
    spec: [["Font", "Newsreader"], ["Size", "128 (60 on mobile)"], ["Line height", "0.9"], ["Weight", "300, tracking -2%"]],
    use: "One per page: the title, or a track name in the detail panel.",
    sample: "Thriller",
  },
  {
    name: "Heading",
    role: "heading",
    spec: [["Font", "Newsreader"], ["Size", "30"], ["Line height", "1.25"], ["Weight", "400"]],
    use: "Card titles and the titles of states.",
    sample: "Billie Jean",
  },
  {
    name: "Body",
    role: "body",
    spec: [["Font", "Newsreader"], ["Size", "18 (16 for hints and errors)"], ["Line height", "1.65"], ["Weight", "400, italic for notes"]],
    use: "Everything read at length. Keep lines under 60 characters.",
    sample: "Track four and the title song, written by Rod Temperton. The album came out in 1982.",
  },
  {
    name: "Label",
    role: "label",
    spec: [["Font", "Newsreader"], ["Size", "18 (16 for badges)"], ["Weight", "400"], ["Style", "Small caps, +8%"]],
    use: "Buttons, tabs, chips, field labels and badges. Track numbers use extra light (200), set large.",
    sample: "Track 04 · Single",
  },
];

export const tokens: Tokens = {
  intro: "A 4px step with a 24px gutter, like a magazine grid. Corners are square, lines are hairlines, and there is no shadow at all.",
  spacingUsage: "Pick the nearest step. 24px is the gutter between columns.",
  spacing: [
    { px: 4, use: "Inside badges, icon gaps" },
    { px: 8, use: "Between a label and its control" },
    { px: 12, use: "Control padding, row gaps" },
    { px: 16, use: "Between related controls" },
    { px: 24, use: "The column gutter; card and panel padding" },
    { px: 32, use: "Between groups" },
    { px: 48, use: "Between sections on mobile" },
    { px: 96, use: "Between sections on desktop" },
  ],
  cornersUsage: "Square. Radios are the one round shape, so they read as radios.",
  corners: [
    { label: "0 · everything", sample: <div className="size-16 border border-ln-text" /> },
    { label: "Round · radio only", sample: <div className="size-16 rounded-full border border-ln-text" /> },
  ],
  bordersUsage: "Rules, as in print. Weight and style say what the line is for.",
  borders: [
    { name: "Hairline", px: 1, use: "Dividers, control outlines, cards", sample: <div className="w-40 border-t border-ln-text" /> },
    { name: "Heavy", px: 3, use: "The selected tab and the selected row", sample: <div className="w-40 border-t-[3px] border-ln-text" /> },
    { name: "Double", px: 3, use: "Panels, section starts and errors, above and below", sample: <div className="w-40 border-t-[3px] border-double border-ln-text" /> },
    { name: "Dotted", px: 1, use: "Anything disabled or empty", sample: <div className="w-40 border-t border-dotted border-ln-muted" /> },
  ],
  shadowUsage: "There are none. Depth comes from rules, a tint of Card stock, and white space.",
  shadows: [
    { name: "None", use: "Always. A card is a ruled box on a slightly lighter page", sample: <div className="h-16 border border-ln-text bg-ln-surface" /> },
  ],
};

export const controlNotes: ControlNotes = {
  "Primary button": "Oxblood darkens and underlines on hover, darkens more and drops 1px when pressed.",
  "Secondary button": "Hover inverts to Ink. Pressed is a shade lighter and drops 1px.",
  Link: "Hover thickens the underline and tints the ground. A disabled link is dotted.",
  "Text input": "A ruled line. Hover and focus tint the ground; focus adds a ring.",
  Select: "Follows the text input.",
  Checkbox: "Selected fills with Ink and draws a check.",
  Radio: "Selected fills with Ink and a Paper dot.",
  Toggle: "On fills the track with Ink and slides the knob across.",
  Tab: "Selected gets a heavy Ink underline and full-strength text.",
  "Filter chip": "Selected fills with Ink.",
  "List row": "Hover tints the row and underlines the title. Selected adds a heavy bar and sets the title in italic.",
};
