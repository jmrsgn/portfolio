# Portfolio Engineering Guide

## Project

Personal portfolio built with:

- React
- TypeScript
- styled-components
- React Icons
- Framer Motion

## Design

Follow the established visual language:

- Dark-only UI
- Near-black background
- White/off-white primary text
- Blue as the primary accent
- Minimal visual decoration
- Strong typography
- Generous spacing
- No unnecessary gradients
- No excessive animations
- Responsive across mobile, tablet, and desktop

## Architecture

- Keep components feature/section-oriented.
- Keep section-specific styled-components inside that section.
- Avoid unnecessary dependencies on global components.
- Prefer local styles when a component is only used by one section.
- Keep fixture/data files separate from presentation logic.

## TypeScript

- Use strict TypeScript patterns.
- Avoid `any`.
- Define explicit types for fixture data.
- Prefer reusable types where appropriate.

## Styling

- Use styled-components.
- Reuse existing colors, fonts, and viewport definitions.
- Do not introduce arbitrary colors when an existing design token exists.
- Preserve the established visual language when adding new sections.

## Responsive behavior

Always verify:

- Mobile
- Tablet
- Desktop

Do not assume desktop layouts can simply scale down to tablet.

## Before completing a task

Run the project's available:

- TypeScript checks
- Lint
- Build

Do not consider a task complete if the project no longer builds.