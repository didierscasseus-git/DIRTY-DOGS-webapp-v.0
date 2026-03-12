# Diagnosis & Requirements: Pamphlet Mechanic

## Object Vision

* **Form**: Tri-fold editorial brochure.
* **Orientation**: Horizontal artifact.
* **Timeline**: Vertical scroll = time axis.
* **Narrative Structure**:
    1. **Cover**: Hook / Intrigue.
    2. **Interior Spread**: Substance / Value.
    3. **Back Panel**: Conversion / Resolution.

## Experience Architecture

* **Spatial Model**: Single continuous object. Viewport acts as a camera tracking the scroll-driven unfold progression.
* **Unfolding Logic**: `[Cover/Panel 1]` → `[Center Panel]` → `[Right/Panel 2]`. This avoids cognitive inversion by unfolding from the center anchor.
* **Reverse Logic**: Scrolling up mirrors the closure.

## Visual Direction: Editorial Paper Realism

* **Material**: Warm off-white paper (`#F6F4EF`), subtle fiber texture, tonal unevenness, and soft-edge ink absorption.
* **Lighting Model**: Top-left soft editorial key light with fold shadow occlusion and grazing light across creases.
* **Fold Treatment**: Compressed highlight ridges, inner occlusion shadows, and subtle curvature during motion with "crease memory."

## Technical & Interaction Spec

* **Scroll Mapping**: progress = `scrollY / scrollableHeight`.
  * `0.00 – 0.33`: Panel 1 hinge rotation.
  * `0.33 – 0.66`: Panel 2 hinge rotation.
  * `0.66 – 1.00`: Micro flatten + parallax settle.
* **Hinge Physics**: `rotateY` transforms with `transform-origin` at the fold edge. Cubic easing (`easeOutQuart`) with 2–3° overshoot and micro-rebound for material resistance.
* **Tech Stack**: GSAP + ScrollTrigger (for deterministic timeline control and precise progress segmentation).

## Performance & UX Best Practices

* **GPU Offloading**: Use `will-change: transform` on active panels to promote them to their own compositor layers, preventing layout recalculations during scroll.
* **Texture Optimization**: Avoid heavy SVG filters (like `feTurbulence`) for real-time scrolling grain. Use a low-opacity, tiled noise texture (WEBP) to simulate paper fiber with minimal CPU impact.
* **Paint Minimization**: Use `backface-visibility: hidden` to avoid rendering the reverse side of panels when they are perpendicular to the "camera."
* **Scrub Sensitivity**: Set `scrub: 1.5` to 2.0 to simulate "material weight" while maintaining visual smoothness.
* **Sub-pixel Rendering**: Apply `transform: translateZ(0)` to the main brochure container to force hardware acceleration and eliminate flickering on high-DPI displays.
* **Accessibility (A11y)**: Ensure contents of folded panels are hidden from the accessibility tree when folded (`aria-hidden`) and revealed upon unfolding.
