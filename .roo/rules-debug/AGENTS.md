# AGENTS.md - Debug Mode

This file provides guidance to agents when working with code in this repository.

## Non-Obvious Debug Rules
- Active section observer is disabled for 1000ms after clicks via `timeOfLastClick` state in `context/active-section-context.tsx`
- Theme state persists in `localStorage` under key `"theme"` - check this if theme issues occur
- Context providers throw errors if hooks used outside provider - check provider hierarchy in `app/layout.tsx`
- Email sending requires `RESEND_API_KEY` environment variable - contact form will fail silently without it
- Image remote patterns only allow `jkovac.eu` domain - external images will fail to load
