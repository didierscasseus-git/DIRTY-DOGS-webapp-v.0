# TECHNICAL HANDOVER DOSSIER
**DIRTY DOGS MTL | THE HIGH-FIDELITY INFRASTRUCTURE**

## 1. THE CORE STACK
The platform is built on a modern, high-performance architecture designed for sub-second latency and maximum developer ergonomics.
- **Frontend Engine**: React 19 (Production RC) for cutting-edge component lifecycle management.
- **Build Orchestration**: Vite 7 providing instantaneous Hot Module Replacement (HMR).
- **Styling Architecture**: Vanilla CSS 3 with Custom Properties (Design Tokens) for brand-level consistency.

## 2. DATA ARCHITECTURE & AUTONOMY
The menu system is decoupled from the UI, allowing for safe, autonomous updates.
- **Artisan Menu Schema**: Located in `src/data/menuData.js`.
- **Logic**: The application dynamically iterates through this JSON structure to render categories, pricing, and variant savings.
- **Client Action**: To update prices or add items, modify `menuData.js` and push to production.

## 3. UI SYSTEMS & BRAND TOKENS
The visual language is codified through a set of technical design tokens:
- **Geometry**: Apple-standard 38px "Squircle" (Continuous Curvature) used on all cards and interactive elements.
- **Legibility Engine**: `mix-blend-mode: difference` implemented on the navigation bar to ensure 100% visibility (Logo/Icons) over any background media.
- **Aesthetics**: Glassmorphism (24px backdrop-blur) with premium translucent overlays.
- **Custom Iconography**: High-fidelity SVG system for category navigation (Canteen, Bar, and the custom-engineered `LoadedFriesIcon` for Salchipapas).

## 4. INFRASTRUCTURE & DEPLOYMENT
Powered by a serverless, global-scale backend for zero-maintenance scaling.
- **Hosting**: Firebase App Hosting with an integrated Global Edge CDN.
- **SSL/Security**: Automatic Let's Encrypt SSL orchestration and security header hardening.
- **Deployment Flow**: 
  1. `npm run build` (Generates optimized /dist)
  2. `firebase deploy` (Propagates changes to the global CDN)

## 5. PERFORMANCE & SEO ECOSYSTEM
- **Semantic Shadow**: Exhaustive metadata orchestration in `index.html` covering the full range of Dirty Dogs offerings.
- **PWA Infrastructure**: Service workers configured for offline-ready performance and "Add to Home Screen" capabilities.
- **Asset Optimization**: Adaptive image serving for Retina and mobile displays.

---
**TECHNICAL VERIFICATION**: This infrastructure is production-ready and optimized for the "Modern Street" premium brand positioning.
