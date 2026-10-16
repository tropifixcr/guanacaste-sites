---
name: Guanacaste AC
description: AC repair lead site built as the split-unit remote every owner holds.
colors:
  remote-plastic: "#eef1ec"
  plastic-deep: "#e1e6df"
  rubber-key: "#d6dcd4"
  key-edge: "#b9c1b6"
  segment-ink: "#1b241d"
  ink-soft: "#3f4a42"
  lcd-glass: "#b9c7b4"
  cool-blue: "#1d5fd0"
  cool-blue-deep: "#164aa4"
  whatsapp-green: "#0b6b4f"
typography:
  display:
    fontFamily: "Archivo Variable (wdth 75-125)"
  body:
    fontFamily: "Archivo Variable"
    fontSize: 17px
    lineHeight: 1.6
  label:
    fontFamily: "DSEG14 / DSEG7 (LCD only)"
rounded:
  key: 14px
  body: 32px
  pill: 999px
---

# Design System: Guanacaste AC

## Overview

**Creative North Star: "The Remote in Your Hand"**

The page is the remote control of a split AC unit: off-white plastic, grey rubber keys with a pressed state, a recessed grey-green LCD that answers in segment type, and one cool blue reserved for the action that sends a request. The visitor presses the key that matches their symptom; nothing on the page is decorative chrome that a remote would not carry.

This site stands alone: no TropiFix branding, and it must not resemble its two sister sites. Light or dark, palette and type are this site's own.

**Key Characteristics:**
- One world carried through nav, buttons, inputs and the request form.
- Phone first: every converting control at least 44px, body and form text at least 16px.
- Honest copy: requests go to a local partner technician; no invented claims.

## Colors

**The One Blue Rule.** Cool blue (#1d5fd0) is only for the primary send action and focus. Everything else is plastic, rubber and ink.

### Palette
- **remote-plastic** (#eef1ec)
- **plastic-deep** (#e1e6df)
- **rubber-key** (#d6dcd4)
- **key-edge** (#b9c1b6)
- **segment-ink** (#1b241d)
- **ink-soft** (#3f4a42)
- **lcd-glass** (#b9c7b4)
- **cool-blue** (#1d5fd0)
- **cool-blue-deep** (#164aa4)
- **whatsapp-green** (#0b6b4f)

## Typography

**Display Font:** Archivo Variable (wdth 75-125)
**Body Font:** Archivo Variable
**Label Font:** DSEG14 / DSEG7 (LCD only)

**The Segment Rule.** DSEG faces appear only inside LCD panels (hero display, interval readout, step keys). Never for body copy or headings.

## Layout

Single column on phones; from 960-1000px the hero splits into text and the signature element side by side. Sections are separated by generous vertical space (clamp 4rem to 8rem) and a rule. Content width caps near 1240-1280px; body text near 64-66ch.

## Elevation & Depth

**The Pressed Key Rule.** Keys sit on a 3px edge shadow and drop 2px when pressed; the pressed state turns the key ink-dark with white text.

- **key-rest** (`box-shadow: 0 3px 0 #b9c1b6, 0 4px 10px -6px rgb(27 36 29 / 0.4)`): Rubber key at rest.
- **remote-body** (`box-shadow: 0 18px 40px -18px rgb(27 36 29 / 0.35), 0 2px 6px rgb(27 36 29 / 0.12)`): The remote body only.
- **lcd-recess** (`box-shadow: inset 0 3px 6px rgb(27 36 29 / 0.28)`): LCD glass recessed into plastic.

## Shapes

Radius scale: key 14px, body 32px, pill 999px.

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
