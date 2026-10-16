---
name: Guanacaste Roofing
description: Roof leak and new roof lead site built as a rain radar of the coast.
colors:
  radar-night: "#0e1a24"
  night-2: "#13232f"
  night-3: "#1b3040"
  coastline: "#a9bccb"
  land: "#172a37"
  text: "#f2f6f9"
  text-soft: "#b8c7d3"
  rain-green: "#3bb273"
  rain-yellow: "#f4d35e"
  rain-orange: "#e4572e"
  orange-deep: "#c94420"
typography:
  display:
    fontFamily: "Barlow Semi Condensed"
  body:
    fontFamily: "Barlow"
    fontSize: 17px
    lineHeight: 1.6
  label:
    fontFamily: "Barlow Semi Condensed (map labels)"
rounded:
  chip: 999px
  choice: 14px
  panel: 22px
---

# Design System: Guanacaste Roofing

## Overview

**Creative North Star: "The Rain Radar"**

The page is a rain radar of the coast from Tamarindo to Papagayo: night ground, a pale coastline, range rings, a slow sweep and a drifting rain band in green, yellow and orange. Rain intensity colors double as the page palette: orange for the urgent leak action, yellow for selection and focus, green for steady elements. The season strip reads the year the way owners live it.

This site stands alone: no TropiFix branding, and it must not resemble its two sister sites. Light or dark, palette and type are this site's own.

**Key Characteristics:**
- One world carried through nav, buttons, inputs and the request form.
- Phone first: every converting control at least 44px, body and form text at least 16px.
- Honest copy: requests go to a local partner technician; no invented claims.

## Colors

**The Intensity Rule.** Orange is the urgent leak action, yellow is selection and focus, green is steady state. Never mix their roles.

### Palette
- **radar-night** (#0e1a24)
- **night-2** (#13232f)
- **night-3** (#1b3040)
- **coastline** (#a9bccb)
- **land** (#172a37)
- **text** (#f2f6f9)
- **text-soft** (#b8c7d3)
- **rain-green** (#3bb273)
- **rain-yellow** (#f4d35e)
- **rain-orange** (#e4572e)
- **orange-deep** (#c94420)

## Typography

**Display Font:** Barlow Semi Condensed
**Body Font:** Barlow
**Label Font:** Barlow Semi Condensed (map labels)

**The Weather Desk Rule.** Headings and map labels in Barlow Semi Condensed bold; body in Barlow regular. No other faces.

## Layout

Single column on phones; from 960-1000px the hero splits into text and the signature element side by side. Sections are separated by generous vertical space (clamp 4rem to 8rem) and a rule. Content width caps near 1240-1280px; body text near 64-66ch.

## Elevation & Depth

**The Living Map Rule.** The sweep and band move slowly, pause off screen and stop under reduced motion. Nothing else on the page animates continuously.

None. The system is flat.

## Shapes

Radius scale: chip 999px, choice 14px, panel 22px.

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
