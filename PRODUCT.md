# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is the curious general public — people who open Stargaze casually to see what is happening in space today. They are not professional astronomers or deep hobbyists; they want a low-friction, visually engaging way to browse daily imagery and stay lightly informed without needing prior knowledge.

## Product Purpose

Stargaze is a daily space portal that brings NASA's Astronomy Picture of the Day, space news, and a browsable APOD archive together in one place. Success means a visitor can land, see something remarkable about the universe, optionally read a headline or two, and explore the gallery — all without signing up or learning how astronomy tools work.

## Positioning

One beautiful daily destination for space imagery and news — not a social network, not an education platform, not a mission tracker. The differentiator is curation and presentation: real NASA APOD data and live space news, unified into a single scrollable experience rather than scattered across NASA.gov, news sites, and image archives.

## Operating Context

Visitors arrive via direct navigation or shared links. The primary journey is: home (today's APOD + news highlights) → gallery (search and browse historical APOD) → news (full article grid). Authentication exists but is optional and not required for the core browsing experience. Content is sourced from external APIs (NASA APOD, Spaceflight News API) and a local MongoDB cache for APOD records.

## Capabilities and Constraints

**Core (in scope):**
- Daily Astronomy Picture of the Day with image/video and explanation
- APOD gallery with title search and detail pages
- Space news feed from Spaceflight News API
- Responsive web layout (Next.js App Router)

**Explicitly deprioritized (experiments, not product truth):**
- Community contributions feed (client-side mock only)
- Contact form on About page (simulated submission)
- Featured missions section (not wired to a real missions API)
- Astronomy events and space timeline (static/sample data)
- "Save favorites" and social features mentioned in copy but not implemented
- User accounts add sign-up/sign-in but do not gate or personalize core content

**Technical constraints:**
- Next.js 15, React 19, Tailwind CSS, NextAuth (credentials), MongoDB via Mongoose
- Requires `DB_URL`, NASA API key, and network access to external APIs
- APOD images served from NASA; news images from Spaceflight News API

**Terminology:**
- "Stargaze" / "StarGaze" — product name (both spellings appear in codebase; standardize in future work)
- APOD — NASA Astronomy Picture of the Day

## Brand Commitments

- Product name: Stargaze
- Tagline territory: "Explore the Cosmos, One Picture at a Time" and rotating hero lines about daily cosmic wonder
- Voice: approachable, wonder-driven, not academic or technical
- Orbitron typeface is in use for the overall site feel

## Evidence on Hand

- NASA APOD data via API routes (`src/app/api/data/`) and MongoDB cache (`src/models/apodModel.js`)
- Space news from `api.spaceflightnewsapi.net`
- Static timeline data in `public/sample`
- Local APOD dataset in `public/data.js`
- No real testimonials, case studies, user counts, or press coverage — future work must not fabricate these

## Product Principles

1. **Wonder first** — every visit should surface something visually striking about the universe.
2. **Zero friction** — core content is free to browse without an account.
3. **One place** — APOD, news, and gallery live together; visitors should not need to leave for daily space content.
4. **Honest scope** — ship and polish the portal experience; do not imply social, educational, or personalization features that are not built.
5. **Real data** — content comes from NASA and established space news sources, not invented copy.

## Accessibility & Inclusion

No product-specific accessibility standard confirmed. General web accessibility (readable contrast on dark backgrounds, keyboard-navigable UI, alt text on images) should be maintained as the interface is refined.
