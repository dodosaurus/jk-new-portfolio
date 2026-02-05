# AGENTS.md - Architect Mode

This file provides guidance to agents when working with code in this repository.

## Non-Obvious Architecture Rules
- Context providers wrap children in `app/layout.tsx`: `ThemeContextProvider` → `ActiveSectionContextProvider` (order matters)
- Active section tracking uses `timeOfLastClick` state to temporarily disable intersection observer (1000ms) - prevents scroll-jump after nav clicks
- Theme state is persisted in `localStorage` under key `"theme"` - client-side only persistence
- Email sending via Resend requires `RESEND_API_KEY` environment variable - external dependency
- Image optimization in `next.config.js` only allows `jkovac.eu` domain for remote images - security constraint
- No testing framework configured - tests would need to be set up from scratch
