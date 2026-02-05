# AGENTS.md - Ask Mode

This file provides guidance to agents when working with code in this repository.

## Non-Obvious Documentation Rules
- Path alias `@/*` maps to project root, NOT `./src/*` - this is counterintuitive for Next.js projects
- `SectionName` type is derived from `links` array in `lib/data.ts` via const assertion - not explicitly defined
- Active section tracking uses `timeOfLastClick` state to disable observer temporarily (1000ms) - hidden state management
- Email sending uses `React.createElement()` for React Email components (not JSX) - non-standard pattern
- Dark mode is class-based (add/remove `"dark"` class on `document.documentElement`) - not Tailwind's default
- No testing framework configured - tests would need to be set up from scratch
