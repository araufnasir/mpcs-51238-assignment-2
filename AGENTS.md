# Project
A tribute to Michael Jackson's Thriller, as a small static site. Original content only: track titles and facts are fine, but no lyrics and no real cover art. All art is drawn by me or the agent in SVG/CSS. For: fans and curious visitors who want to browse the album track by track.

# Structure (routes)
- / : the hub. Links to 3 mood boards, 3 design systems and the site.
- /mood-boards/haunted-cinema, /mood-boards/neon-arcade, /mood-boards/liner-notes
- /design-systems/haunted-cinema, /design-systems/neon-arcade, /design-systems/liner-notes
- /thriller : the site, in the one style I pick.
Names may change after I approve the directions.

# Mood boards
Each has a mood name and 25-30 artifacts: type specimens, color swatches, CSS textures, original SVG illustrations, interface pieces. The three must look clearly different from each other and must not look like a default dark mode or default Tailwind template.
Starting directions (to refine with me before building):
1. Haunted Cinema: 80s horror poster, black, blood red, film grain, dramatic serif.
2. Neon Arcade: 80s neon, pixel type, glow.
3. Liner Notes: editorial, cream paper, magazine grid, calm serif.

# Design systems
One per mood board, a UI library. Each has: color roles with contrast ratios (background, surface, text, muted, border, accent); type roles (display, heading, body, label) with sizes and weights; spacing scale, corners, borders, shadow; components (primary/secondary buttons, link, text input, select, checkbox, radio, toggle, tabs, filter chips, card with a track, list rows, badge, modal or detail panel); control states (rest, hover, focus, pressed, selected, disabled); UI states (empty, loading, error, success).

# Site (/thriller)
Built from the chosen design system: a track-by-track browser. At least 2 faked browser interactions (for example a filter and a detail panel). Every control in its states. Accent used only for the primary action. Responsive at 390px and 1440px. Nothing saved.

# Design requirements (apply to everything)
- Visual hierarchy: it's clear what to look at first.
- Type: a few sizes and weights, used the same way throughout, comfortable to read.
- Color: a small palette where each color has a purpose.
- Accessibility: text contrast is legible.
- Layout: intentional alignment, related elements grouped, works on desktop and mobile.
- Affordances: interactions are obvious.
- States: controls respond to hover, focus and press.
- Visual style: looks like the chosen style, not the agent's default.
- Simplicity: nothing extra. If a word or image doesn't help, remove it.

# Rules
Static site. Push back if I suggest or you want to add a database, backend or unneeded package. Simple, readable code with no repetition. Work one step at a time and commit after each step.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
