---
name: Guanacaste Bug Control
description: Pest control lead site built as a naturalist plate of the pests owners actually meet.
colors:
  plate-sage: "#dce5d3"
  plate-deep: "#cdd9c2"
  plate-frame: "#b7c6aa"
  forest-ink: "#1c2a21"
  ink-soft: "#3c4c40"
  rust-figure: "#a4471f"
  rust-deep: "#823616"
  leaf: "#2f4a37"
  slip: "#eef3ea"
typography:
  display:
    fontFamily: "Bodoni Moda"
  body:
    fontFamily: "Figtree Variable"
    fontSize: 17px
    lineHeight: 1.6
  label:
    fontFamily: "Bodoni Moda Italic (figure numbers, Latin names)"
rounded:
  none: 0
  pill: 999px
---

# Design System: Guanacaste Bug Control

## Overview

**Creative North Star: "The Field Guide Plate"**

The page is a plate from a naturalist field guide: sage plate paper, forest ink, hairline double frames, and rust reserved for figure numbers and the report action. Specimens are figures with numbers and Latin names; the guide entries below are the plate legend. The visitor finds the creature they saw and reports it.

This site stands alone: no TropiFix branding, and it must not resemble its two sister sites. Light or dark, palette and type are this site's own.

**Key Characteristics:**
- One world carried through nav, buttons, inputs and the request form.
- Phone first: every converting control at least 44px, body and form text at least 16px.
- Honest copy: requests go to a local partner technician; no invented claims.

## Colors

**The Rust Mark Rule.** Rust (#a4471f) marks figure numbers, the selected specimen and the report action. It never fills large areas.

### Palette
- **plate-sage** (#dce5d3)
- **plate-deep** (#cdd9c2)
- **plate-frame** (#b7c6aa)
- **forest-ink** (#1c2a21)
- **ink-soft** (#3c4c40)
- **rust-figure** (#a4471f)
- **rust-deep** (#823616)
- **leaf** (#2f4a37)
- **slip** (#eef3ea)

## Typography

**Display Font:** Bodoni Moda
**Body Font:** Figtree Variable
**Label Font:** Bodoni Moda Italic (figure numbers, Latin names)

**The Legend Rule.** Every specimen on the plate has a matching entry with Signs, How urgent and What the technician does, linked by its figure number.

## Layout

Single column on phones; from 960-1000px the hero splits into text and the signature element side by side. Sections are separated by generous vertical space (clamp 4rem to 8rem) and a rule. Content width caps near 1240-1280px; body text near 64-66ch.

## Elevation & Depth

**The Flat Paper Rule.** No shadows. Depth comes from hairline frames (1px and 0.5px ink) and paper tone shifts.

None. The system is flat.

## Shapes

Radius scale: none 0, pill 999px.

## Components

See `.impeccable/design.json` for the canonical button, chip, field and signature component snippets. The request form markup is shared across the three sites (`shared/RequestForm.astro`); each site styles it in its own world.

## Do's and Don'ts

### Do:
- **Do** keep the primary action color for the send or report action only.
- **Do** keep every request path one tap from WhatsApp.
- **Do** mark placeholder imagery clearly until real or approved images exist.

### Don't:
- **Don't** add TropiFix branding or link to the sister sites.
- **Don't** add testimonials, ratings, prices or response times unless Loic confirms them.
- **Don't** use stock photos; images come from Higgsfield (approved) or real local photos.
