# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Non-Obvious Patterns
- Server actions in `actions/` must use `"use server"` directive at top
- Client components must use `"use client"` directive (context providers, hooks, interactive components)
- Path alias `@/*` maps to project root, NOT `./src/*`
- Email sending in `actions/sendEmail.ts` uses `React.createElement()` for React Email components (not JSX)
- Active section observer is disabled for 1000ms after clicks via `timeOfLastClick` state
- Theme state persists in `localStorage` under key `"theme"`
- `SectionName` type is derived from `links` array in `lib/data.ts` via const assertion
- Use `useFormStatus()` from `react-dom` for form pending state (see `components/submit-btn.tsx`)
- Custom `useSectionInView()` hook in `lib/hooks.ts` wraps `react-intersection-observer`

## Configuration
- Dark mode: class-based (add/remove `"dark"` class on `document.documentElement`)
- Custom Tailwind colors: `linkedin: #0a66c2`, `github: #cd5c5c`
- Image remote patterns only allow `jkovac.eu` domain
- Resend API key required: `RESEND_API_KEY` environment variable
- No testing framework configured

## Context Usage
- Context providers throw errors if hooks used outside provider (e.g., `useThemeContext()`, `useActiveSectionContext()`)
- Both providers wrap children in `app/layout.tsx`: `ThemeContextProvider` → `ActiveSectionContextProvider`
