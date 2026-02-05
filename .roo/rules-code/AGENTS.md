# AGENTS.md - Code Mode

This file provides guidance to agents when working with code in this repository.

## Non-Obvious Coding Rules
- Server actions in `actions/` must use `"use server"` directive at top
- Client components must use `"use client"` directive (context providers, hooks, interactive components)
- Path alias `@/*` maps to project root, NOT `./src/*`
- Email sending in `actions/sendEmail.ts` uses `React.createElement()` for React Email components (not JSX)
- Use `useFormStatus()` from `react-dom` for form pending state (see `components/submit-btn.tsx`)
- Custom `useSectionInView()` hook in `lib/hooks.ts` wraps `react-intersection-observer`
- `SectionName` type is derived from `links` array in `lib/data.ts` via const assertion

## Context Provider Requirements
- Context providers throw errors if hooks used outside provider
- Both providers wrap children in `app/layout.tsx`: `ThemeContextProvider` → `ActiveSectionContextProvider`
