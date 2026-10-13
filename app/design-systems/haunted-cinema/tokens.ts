/** Spacing, borders and shadow. The components use the matching Tailwind classes. */
export const spacing = [
  { token: "1", px: 4, use: "Inside badges, icon gaps" },
  { token: "2", px: 8, use: "Between a label and its control" },
  { token: "3", px: 12, use: "Control padding, row gaps" },
  { token: "4", px: 16, use: "Between related controls" },
  { token: "6", px: 24, use: "Card and panel padding" },
  { token: "8", px: 32, use: "Between groups" },
  { token: "12", px: 48, use: "Between sections on mobile" },
  { token: "16", px: 64, use: "Between sections on desktop" },
];

export const borders = [
  { name: "Hairline", px: 1, use: "Dividers between list rows" },
  { name: "Control", px: 2, use: "Buttons, inputs, cards, chips" },
  { name: "Frame", px: 3, use: "Detail panel, error notice: plus a 1px outline 4px out" },
  { name: "Focus ring", px: 3, use: "Bone outline, 3px away from the control" },
];

export const shadows = [
  { name: "None", value: "", css: "none", use: "At rest, and while pressed" },
  { name: "Lift", value: "4px 4px 0 Bone", css: "4px 4px 0 var(--hc-text)", use: "Hover on buttons. Hard edge, never blurred" },
];
