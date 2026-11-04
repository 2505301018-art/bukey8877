---
name: Haute Botanique & Café
colors:
  surface: '#1d100d'
  surface-dim: '#1d100d'
  surface-bright: '#463532'
  surface-container-lowest: '#170b09'
  surface-container-low: '#261815'
  surface-container: '#2a1c19'
  surface-container-high: '#362623'
  surface-container-highest: '#41312e'
  on-surface: '#f7ddd7'
  on-surface-variant: '#d9c1c4'
  inverse-surface: '#f7ddd7'
  inverse-on-surface: '#3c2d29'
  outline: '#a18c8e'
  outline-variant: '#534245'
  surface-tint: '#ffb1c0'
  primary: '#ffb1c0'
  on-primary: '#5b172b'
  primary-container: '#641e32'
  on-primary-container: '#e48599'
  inverse-primary: '#954458'
  secondary: '#a8cfc0'
  on-secondary: '#11372c'
  secondary-container: '#2c5044'
  on-secondary-container: '#9ac1b2'
  tertiary: '#e2c383'
  on-tertiary: '#402d00'
  tertiary-container: '#483402'
  on-tertiary-container: '#ba9d61'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#ffb1c0'
  on-primary-fixed: '#3f0117'
  on-primary-fixed-variant: '#782d41'
  secondary-fixed: '#c3ebdb'
  secondary-fixed-dim: '#a8cfc0'
  on-secondary-fixed: '#002118'
  on-secondary-fixed-variant: '#294d42'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#e2c383'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#594310'
  background: '#1d100d'
  on-background: '#f7ddd7'
  surface-variant: '#41312e'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  title-editorial:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.04em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.18em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.06em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
  space-2xl: 5rem
---

## Brand & Style

This design system expresses a Parisian luxury salon aesthetic where heritage floristry meets artisanal espresso culture. It borrows from high-fashion editorial publishing, French interior architecture, and vintage menu design:

- **Aesthetic Direction:** Editorial minimalism meets tactile Parisian grandeur. Surfaces recall cold marble, heavy cream paper stock, velvet upholstery, and brushed champagne hardware.
- **Audience:** Discerning patrons seeking sensorial indulgence, luxury gift buyers, and lifestyle connoisseurs expecting an haute-couture retail experience.
- **Atmospheric Quality:** Quietly dramatic, unhurried, fragrant, and meticulously arranged. Rich dark grounds create gallery-like staging for floral photography and culinary craft.

## Colors

The palette relies on velvet-depth contrast, anchored in espresso and illuminated with champagne gold:

- **Primary (`#641E32` — Deep Burgundy):** Reserved for signature actions, focal accents, seasonal campaign highlights, and brand prestige markers.
- **Secondary (`#183D32` — Forest Green):** Represents botanical origins; applied to foliage callouts, subscription pathways, and secondary category treatments.
- **Tertiary (`#D6B779` — Champagne Gold):** Emulates hot-stamped gold foil. Used sparingly for hairline dividers, badge borders, active states, and decorative monograms.
- **Neutral Canvas (`#291B18` — Dark Espresso):** The primary structural ground. Warmer than pure black, providing deep tactile undertones.
- **Surface Tint (`#F6F0E6` — Warm Cream):** Applied as primary text on dark canvas, or inverted as an editorial broadsheet surface for long-form menus and checkout receipts.

## Typography

The type scale mimics luxury editorial publications like *Vogue Paris* or high-end auction catalogues:

- **Headlines & Display:** Playfair Display introduces literary character, high vertical stroke contrast, and poetic elegance. Headlines lean light to medium weights, pairing naturally with delicate champagne flourishes.
- **Body & Captions:** Plus Jakarta Sans delivers pristine legibility at delicate optical weights, keeping product descriptions, brewing recipes, and floral care instructions modern without clutter.
- **Label Tokens (`label-caps`):** Must always be styled in uppercase with generous tracking (`0.18em`) for catalog categories, origins, botanical classifications, and metadata badges.

## Layout & Spacing

A restrained, generous rhythm governed by editorial framing and generous negative space:

- **Grid Architecture:** 12-column fluid grid system on desktop (`>1024px`) with `2.5rem` gutters and minimum `4rem` outer canvas margins. 4-column system on mobile (`<640px`) with `1.25rem` outer margins.
- **Compositional Rhythm:** Elements are given abundant breathing room to evoke an unhurried, private salon experience. Imagery frequently breaks symmetry across 7/5 or 8/4 column spans.
- **Vertical Spacing:** Generous section separations (`space-2xl`) isolate botanical creations and café menu selections like individual museum installations.

## Elevation & Depth

Visual hierarchy uses layered surface tints, tactile foils, and low-contrast borders instead of traditional drop shadows:

- **Surface Tiering:** The baseline background sits at `#291B18` (Dark Espresso). Surface Level 1 shifts slightly lighter to `#33221E`. Surface Level 2 (overlays, modal sheets) adopts `#3D2924`.
- **Gold Foil Fillets:** Containers are structured using 1px hairline outlines tinted in Champagne Gold at low opacities (`rgba(214, 183, 121, 0.25)` resting, `rgba(214, 183, 121, 0.65)` active/hover).
- **Ambient Glow:** Floating components (such as luxury reservation drawers and sensory tasting carts) utilize a soft, colored ambient plume: `0 24px 48px -12px rgba(100, 30, 50, 0.35)` (infused with burgundy tone).
- **Glass Accents:** Translucent cart summary sheets and sticky top bars employ `backdrop-filter: blur(16px)` over `rgba(41, 27, 24, 0.82)`.

## Shapes

The design uses an architectural, ultra-crisp profile (`0` roundedness):

- **Architectural Edges:** All buttons, cards, imagery frames, and dropdown sheets feature pure 90-degree right angles, evoking French beveled glass, classical framing, and premium packaging boxes.
- **Editorial Micro-Accents:** Visual softness comes from floral photography and graceful serif letterforms rather than rounded digital container corners.

## Components

- **Buttons:**
  - *Primary Couture:* Solid Burgundy (`#641E32`) fill, Warm Cream (`#F6F0E6`) uppercase text (`label-caps`), bordered with a 1px Champagne Gold (`#D6B779`) stroke. Hover shifts background to Forest Green (`#183D32`).
  - *Secondary Foil:* Transparent background, sharp 1px outline in Champagne Gold, text in Warm Cream. Hover introduces subtle burgundy wash (`rgba(100, 30, 50, 0.2)`).
  - *Text Action:* Underlined in Champagne Gold with a 4px gap between text baseline and hairline stroke.

- **Cards (Bouquet & Blend Showcases):**
  - Crisp, borderless container or framed in low-opacity champagne hairline (`rgba(214, 183, 121, 0.2)`).
  - High-aspect-ratio photography (4:5 or 3:4 portrait).
  - Price points presented in Champagne Gold; botanical or single-origin flavor profile notes styled in `label-caps`.

- **Input Fields & Selectors:**
  - Minimalist bottom-line or boxed hairline fields in dark espresso with champagne borders on focus.
  - Floating or persistent uppercase field labels (`label-caps`) in Warm Cream at 70% opacity.
  - Custom calendar pickers for bespoke flower delivery and café table reservations, designed with crisp borders and burgundy active-day markers.

- **Chips & Tags:**
  - Rectangular, sharp tags.
  - Solid dark tint with 1px gold border and tracked uppercase typography.
  - Used for descriptors: "LIMITED HARVEST", "NOTES OF BERGAMOT", "PARISIAN ROAST".

- **Checkboxes & Radios:**
  - Sharp square checkboxes and nested diamond radio indicators.
  - Active checkmark rendered in Champagne Gold over Burgundy ground.

- **Bespoke Components:**
  - *Botanical Note Accordion:* Thin champagne rule dividers separating tasting notes, origin terroir, and floral care instructions.
  - *Curated Pairing Ribbon:* Split 50/50 dual card binding an artisanal espresso bean roast to its matched floral arrangement.