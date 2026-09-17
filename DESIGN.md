---
name: Stargaze
description: A daily cutting bench for NASA imagery and space news
colors:
  void: "#000000"
  flag-orange: "#e85d04"
  flag-orange-bright: "#ff7a1a"
  flag-orange-dim: "#c44d03"
  paper: "#ffffff"
  text-muted: "rgba(255, 255, 255, 0.60)"
  text-body: "rgba(255, 255, 255, 0.80)"
  text-dim: "rgba(255, 255, 255, 0.50)"
  text-faint: "rgba(255, 255, 255, 0.40)"
  border-soft: "rgba(255, 255, 255, 0.20)"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.875rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.875rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.12em"
spacing:
  page-x: "1rem"
  page-x-md: "2.5rem"
  section-y: "2.5rem"
  content-max: "72rem"
  content-narrow: "48rem"
  shell-nav: "56px"
  shell-footer: "52px"
components:
  button-primary:
    backgroundColor: "{colors.flag-orange}"
    textColor: "{colors.void}"
    padding: "12px 0"
  button-primary-hover:
    backgroundColor: "{colors.flag-orange-bright}"
    textColor: "{colors.void}"
    padding: "12px 0"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    padding: "12px 0"
  button-outline-hover:
    backgroundColor: "transparent"
    textColor: "{colors.flag-orange}"
    padding: "12px 0"
  nav-link:
    backgroundColor: "transparent"
    textColor: "rgba(255, 255, 255, 0.70)"
    padding: "0"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.flag-orange}"
    padding: "0"
  input-field:
    backgroundColor: "{colors.void}"
    textColor: "{colors.paper}"
    padding: "12px 16px"
  card-hung-trim:
    backgroundColor: "{colors.void}"
    textColor: "{colors.paper}"
    padding: "16px"
---

# Design System: Stargaze

## Overview

**Creative North Star: "Film Cutting Bench"**

Stargaze is an analog editing bench for cosmic imagery — today's APOD is the frame flagged with orange tape on a perforated select rail; the archive is the strip you scrub frame by frame; headlines hang below like trims pinned to the bench. The atmosphere is brutally editorial: true black ground, flag orange ink, white type, and a persistent film-grain overlay. NASA photography breaks through the austerity; the UI frames it like physical film stock, not glass cards.

Every migrated route (home, gallery, gallery detail, news, about, sign-in, sign-up) shares one surface language. Section labels speak bench vocabulary — CAPTION WINDOW, RECENT SELECTS, HUNG TRIMS, ADJACENT FRAMES — and the shell wraps all pages in perforated film rails above the nav and above the footer.

**Key Characteristics:**
- True black (`#000000`) canvas with fixed film-grain overlay at 12% opacity
- Flag orange (`#e85d04`) as the sole chromatic accent — rails, tape flags, CTAs, active states, dates
- Barlow Condensed throughout; uppercase labels with wide letter-spacing via `.label-caps`
- Perforated film edges, flagged frames with orange tape, horizontal film-strip rails, hung-trim news cards
- Sharp rectangular geometry — 2px white borders, zero border-radius on interactive surfaces
- Shell: 56px nav with orange bottom rule, 52px footer, `max-w-6xl` content column
- No icon library on migrated pages; meaning carried by type, borders, and bench metaphors

## Colors

A two-ink palette on infinite black: white for structure and readable copy, flag orange for selection, navigation emphasis, and action.

### Primary
- **Flag Orange** (`#e85d04`): Perforated-rail accents, nav bottom border, section kickers, active film-frame borders, tape flags, primary buttons, dates, links, focus borders, error text.
- **Flag Orange Bright** (`#ff7a1a`): Primary button hover fill.

### Neutral
- **Void** (`#000000`): Page ground, card interiors, input backgrounds, film-frame matte.
- **Paper** (`#FFFFFF`): Primary headings, structural borders (`border-2 border-white`), film-window matte, nav logo.
- **Text Body** (`white/80`): APOD explanations, hero excerpt, readable paragraphs.
- **Text Muted** (`white/60`–`white/75`): Supporting copy, nav inactive links, footer metadata.
- **Text Dim** (`white/50`): Credits, timestamps, placeholder-adjacent metadata.
- **Text Faint** (`white/40`): Loading states, empty-state copy, footer copyright.
- **Border Soft** (`white/20`): Section dividers, credit separators, footer top rule.

### Named Rules
**The Flag Orange Rule.** `#e85d04` is the only chromatic accent across migrated surfaces. Reserve it for selection, rails, tape, CTAs, and emphasis — roughly one-third of visible UI ink.

**The True Black Rule.** Backgrounds stay `#000000`. Depth comes from photography, grain, and borders — never gray page fills or glass translucency stacks.

**The Opacity Hierarchy Rule.** Differentiate supporting copy with white opacity steps (`/80`, `/60`, `/50`, `/40`) — not `text-gray-*` utilities.

## Typography

**Display Font:** Barlow Condensed (next/font/google, weights 400/500/600/700)
**Body Font:** Barlow Condensed (same family)
**Label Font:** Barlow Condensed via `.label-caps` utility

**Character:** Condensed, industrial, and editorial. Headlines and titles are bold uppercase with tight tracking; bench labels use the `.label-caps` preset (0.7rem, 600 weight, 0.12em tracking, uppercase). Body copy stays sentence case at comfortable line-height.

### Hierarchy
- **Display** (700, `text-3xl`–`text-5xl`, uppercase, tracking-tight): Page titles — Archive Strip, Headlines, About.
- **Headline** (700, `text-2xl`–`text-3xl`, uppercase): Hero flagged-frame title, gallery detail title, auth column headings.
- **Title** (600–700, `text-xl`–`text-2xl`, uppercase): APOD caption titles, featured headline titles, hung-trim article titles.
- **Body** (400, `text-base`–`text-lg`, line-height 1.625, max-w-prose): Explanations, summaries, about intro.
- **Label** (600, 0.7rem, 0.12em tracking, uppercase): Section kickers, nav links, dates, credits, CTAs, form labels.

### Named Rules
**The Barlow-Only Rule.** No secondary typeface. Weight, case, and tracking create hierarchy.

**The Bench Label Rule.** Section landmarks and navigation use `.label-caps` uppercase with wide tracking. Content titles within sections use bold uppercase at larger sizes without the label preset.

## Layout

**Shell:** Perforated `perf-edge` strip → navbar (56px, `border-b-2` flag orange) → scrollable main (`flex-1`) → perforated strip → footer (52px, `border-t border-white/20`). Film-grain overlay is `position: fixed` at `z-index: 50` across all routes.

**Home flow:**
1. Hero — rail line, flagged `film-window` + metadata column with dual CTAs
2. Caption Window — bordered APOD editorial split (`border-2 border-white`)
3. Recent Selects — horizontal `film-strip` rail
4. Hung Trims — 2→3 column grid of news cards

**Padding rhythm:** `px-4 md:px-10` horizontal; `py-10` section vertical. Content constrained to `max-w-6xl` (about uses `max-w-3xl`).

**Grids:** Hero `lg:grid-cols-[1fr_280px]`; APOD caption `lg:grid-cols-2`; news grids `sm:grid-cols-2 lg:grid-cols-3` with `gap-8`. Film strip scrolls horizontally with `scroll-snap-type: x mandatory`; gallery archive wraps frames in a flex strip.

**Auth layout:** Split `lg:flex-row` — left info column (`border-r-2 border-white`), right form column. Form sits in `max-w-md` panel (`border-2 border-white p-8`). Mobile stacks with horizontal border between halves.

**Section dividers:** Major breaks use `border-t-2 border-[#e85d04]`; lighter breaks use `border-t border-white/20`.

## Elevation & Depth

Depth is material and photographic, not shadow-driven. Migrated surfaces do not use `box-shadow`, `backdrop-blur`, or glass stacks.

- **Film grain:** SVG noise overlay at 12% opacity, `mix-blend-mode: overlay`, covers the viewport.
- **Film window:** White matte (`background: #ffffff`) behind imagery with inset `2px` void border pseudo-element; perforated edges top and bottom.
- **Tape flag:** Absolute orange tab with slight rotation, subtle `box-shadow: 0 1px 0 rgba(0,0,0,0.4)`, optional `flag-pulse` animation on active frames.
- **Active frame:** `border-color: flag` + `box-shadow: 0 0 0 2px flag` on `film-frame--active`.
- **Hung trim:** Pin line (`2px × 10px` white bar above card); hover shifts border from white to flag orange.
- **Rail line:** Full-width `2px` flag-orange horizontal rule preceding page titles.

### Named Rules
**The Flat Bench Rule.** Cards and panels are flat black with 2px borders. No drop shadows on migrated surfaces.

**The Grain Always Rule.** The film-grain overlay stays active on every page; it is ambient texture, not a hero-only effect.

## Shapes

- **Corners:** Square everywhere on migrated UI — buttons, inputs, cards, and panels have zero border-radius.
- **Borders:** `2px solid white` for structural frames (film windows, caption splits, auth panels, about fact stack). `1px`–`2px` flag orange for rails and focus states.
- **Film frame:** `aspect-ratio: 4/3` inner cell with `2px` white border; active state turns border flag orange.
- **Film window:** `aspect-ratio: 16/10` (hero) or `4/3` (caption/detail); white matte with perforated edges.
- **Hung trim:** Rectangular card with top pin line; image area flush inside border.
- **Perforation:** Repeating 6px void / 8px gap gradient strip, 8px tall, at shell top and bottom.

## Components

### Buttons
- **Primary:** Flag orange fill, black bold uppercase text, `py-3`, full-width or auto, sharp corners. Hover → `#ff7a1a`. Used for SCRUB ARCHIVE, Sign in, Create account, error retry.
- **Outline:** `border-2 border-white`, white uppercase text, sharp corners. Hover → flag-orange border and text. Used for HEADLINES hero CTA.
- **Nav auth:** `border border-white/40`, label-caps. Hover → flag-orange border and text.
- **Text link:** Label-caps flag-orange text; hover → white. Used for back navigation and footer links.

### Film Window (signature)
- White matte container with perforated top/bottom edges and inset void border
- Optional `tape-flag` (orange, rotated −2°) on today's/active frame
- Image or video fills inner aspect box with `object-cover`

### Film Strip / Frame
- Horizontal scroll container with thin flag-orange scrollbar
- Each frame: 180–200px wide, `4/3` inner border, date in label-caps below, title in uppercase
- Active frame gets tape flag and orange border ring
- Gallery archive reuses strip as a wrapping flex grid

### Hung Trim (news card)
- `2px` white border on void background, pin line centered above
- Image top (`h-36`–`h-40` or `aspect-[16/10]` for featured), title uppercase, date in label-caps
- Hover: border → flag orange; title → flag orange; image slight opacity dip on home rail

### APOD Caption Block
- Two-column `border-2 border-white` grid: film window left, black text panel right (`p-6 md:p-8`)
- Title uppercase white; date label-caps flag orange; explanation `white/80`; credit row with `border-t border-white/20`

### Inputs / Fields
- `bg-black border-2 border-white`, white text, `placeholder-white/35`
- Focus: `outline-none`, `border-color: #e85d04`
- Search and auth fields share this pattern; labels use `.label-caps text-white/60`

### Auth Form Panel
- `border-2 border-white p-8 bg-black max-w-md`
- Centered uppercase form title (white); stacked labeled fields; full-width primary submit
- Split-page intro column with uppercase `text-4xl` heading and `white/60` body

### Navigation
- Logo: bold uppercase `tracking-[0.08em]`, white
- Desktop links: `.label-caps`, inactive `white/70`, active flag orange, hover white
- Mobile: compact ARCHIVE + NEWS links only
- Shell nav bar: `border-b-2 border-[#e85d04]` on black

### Page Title Pattern
- Rail line above, then bold uppercase white headline (`text-3xl md:text-5xl tracking-tight`)
- Optional `white/60` subtitle beneath
- Section kickers use `.label-caps text-[#e85d04]` instead of oversized titles where labeled

## Do's and Don'ts

### Do:
- **Do** frame today's APOD in a `film-window` with perforated edges and an orange tape flag.
- **Do** use flag orange for rails, section kickers, active frame states, and primary CTAs.
- **Do** keep all migrated surfaces on true black with 2px white structural borders and square corners.
- **Do** use `.label-caps` for navigation, section labels, dates, and form labels.
- **Do** structure home as bench workflow: flagged select → caption window → strip → hung trims.
- **Do** maintain the film-grain overlay and perforated shell rails on every page.
- **Do** use `max-w-prose` on long explanatory copy for comfortable reading measure.

### Don't:
- **Don't** use border-radius, glass blur, or drop shadows on new migrated surfaces.
- **Don't** introduce accent colors beyond flag orange (except photography itself).
- **Don't** use icon libraries or glyph decorations on migrated pages — the bench metaphor carries wayfinding.
- **Don't** use `text-gray-*` utilities — use white opacity steps.
- **Don't** revert to the prior Orbitron/violet observatory glass system on migrated routes.
- **Don't** stack deprioritized legacy sections (missions, timeline, community) on the home bench.
