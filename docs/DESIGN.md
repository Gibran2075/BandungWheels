---
name: Bandung Prestige Drive
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#43474e'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#aa3000'
  on-secondary: '#ffffff'
  secondary-container: '#d43f00'
  on-secondary-container: '#fffbff'
  tertiary: '#1b2127'
  on-tertiary: '#ffffff'
  tertiary-container: '#30363c'
  on-tertiary-container: '#989fa6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59e'
  on-secondary-fixed: '#3a0b00'
  on-secondary-fixed-variant: '#852400'
  tertiary-fixed: '#dde3eb'
  tertiary-fixed-dim: '#c1c7cf'
  on-tertiary-fixed: '#161c22'
  on-tertiary-fixed-variant: '#41474e'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style

The brand personality for this design system is **Professional, Reliable, and Executive**. It targets business travelers, upscale tourists, and locals looking for premium vehicle solutions in Bandung. The visual language evokes a sense of high-end service through clean structures, significant whitespace, and a "Corporate Modern" aesthetic that prioritizes clarity and efficiency.

The style leverages:
- **Corporate / Modern:** Utilizing a systematic approach to hierarchy, clear iconography, and a structured layout inspired by industry-leading travel platforms.
- **Precision:** Sharp attention to alignment and consistent spacing to reflect the reliability of the rental service.
- **Subtle Luxury:** Using high-quality imagery of vehicles against a backdrop of balanced neutrals and deep blues to convey a premium experience without being overly decorative.

## Colors

The palette is anchored in trust and energy. 
- **Primary (#1A365D):** A deep "Midnight Blue" used for headers, key UI anchors, and primary branding to establish authority and professionalism.
- **Secondary (#FF4D00):** A vibrant "Sunset Orange" used exclusively for calls-to-action (CTAs), price highlights, and active states to guide user conversion.
- **Neutral (#1E293B & #F8FAFC):** A range of slate grays for text and off-whites for section backgrounds to ensure high legibility and a clean, layered look.

The default color mode is **Light**, which provides the best readability for information-dense booking forms and car specifications.

## Typography

This design system uses a dual-font strategy to balance character and utility. 
- **Manrope** is used for headlines. Its geometric but refined structure provides a modern, premium tech feel.
- **Hanken Grotesk** is used for body text and labels. It offers exceptional legibility at smaller sizes and maintains a contemporary, professional tone.

**Scale & Hierarchy:**
Use `headline-xl` for hero sections and main value propositions. `headline-lg` serves as the primary section header. For mobile devices, `headline-xl` should scale down to `headline-lg-mobile` to maintain visual balance. All body text follows a standard 1.5x line height to ensure comfortable reading of car details and terms of service.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to ensure a consistent, professional reading experience centered on the screen.

- **Grid System:** A 12-column grid with a 1200px maximum container width. Gutters are fixed at 24px to provide ample breathing room between content cards.
- **Sectioning:** Vertical rhythm is maintained with 80px padding between major sections to define clear boundaries between the hero, car listings, and FAQs.
- **Mobile Adaptivity:** On mobile, the grid collapses to 1 column. Margins shift to 16px. Hero elements and CTA buttons become full-width to accommodate thumb-friendly interaction.
- **Consistency:** Use the `stack` units for internal component spacing (e.g., 8px between an icon and text, 16px between a headline and its description).

## Elevation & Depth

Visual hierarchy is established through a **Tonal Layering** and **Soft Ambient Shadows** approach.

- **Backgrounds:** The primary background is white (#FFFFFF). Secondary sections use a light tint (#F1F5F9) to create subtle depth without the need for borders.
- **Shadows:** Use a single, consistent shadow style for interactive elements like car cards and booking forms: `0px 4px 20px rgba(0, 0, 0, 0.05)`. This creates a lifted effect that feels light and modern.
- **Floating Elements:** The booking widget (the "Search Bar") should have a higher elevation to signify its importance, using a slightly more pronounced shadow: `0px 10px 30px rgba(0, 0, 0, 0.08)`.
- **Glassmorphism (Selective):** Use a 10px backdrop blur with 80% opacity for navigation bars when scrolling to maintain context of the content beneath.

## Shapes

The shape language is defined as **Rounded**, striking a balance between the friendliness of rounded corners and the professional "edge" of a corporate service.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Car image containers and main content blocks use `rounded-lg` (16px) to soften the overall layout.
- **Icon Backgrounds:** Use circles or `rounded-xl` (24px) for feature icons to make them feel approachable.

## Components

**Buttons:**
- **Primary:** Solid `Primary Color` with white text. 8px radius. High emphasis.
- **CTA:** Solid `Secondary Color` (Orange). Reserved strictly for "Book Now" or "Check Availability."
- **Outline:** 1px border of `Primary Color`. Used for secondary actions like "View Details."

**Input Fields:**
- Use a light gray background (#F8FAFC) with a 1px border (#E2E8F0). On focus, the border transitions to the `Primary Color`. Labels sit above the field in `label-bold`.

**Cards (Car Listing):**
- Features a top-aligned car image, followed by the car name in `headline-md`. Include a horizontal row of "Chips" for specifications (e.g., "Automatic", "5 Seats"). The price should be highlighted in the bottom right using the `Secondary Color`.

**Chips/Badges:**
- Small, rounded-pill containers with a light gray background. Used for car features, fuel type, or "Available" status.

**Booking Widget:**
- A horizontal or grouped vertical set of inputs. This component should always be the most prominent element on the page, using a white background and the "Floating" elevation shadow described in the Elevation section.