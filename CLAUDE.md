# Dirty Dogs Webapp - Development Standards

## Project Overview
- **Brand**: Dirty Dogs (Original Street Food, Montreal)
- **Tech Stack**: React 19, Vite 7, Framer Motion, React Router 7
- **Deployment**: Firebase App Hosting
- **Project ID**: `dirty-dogs-52d89`

## Environment Setup
- **Node Version**: >=22 (Pinned for Cloud Build stability)
- **VITE Variables**:
  - `VITE_APP_TITLE`: App Display Name
  - `VITE_API_URL`: Backend API URL
  - `VITE_ENABLE_ANALYTICS`: Analytics Toggle

## Branding Guidelines
- **Core Aesthetic**: High-energy, urban street food, premium industrial.
- **Typography**: Inter (Primary), Roboto (Secondary).
- **Colors**: Use curated palettes (avoid generic red/blue). Use HSL-tailored dark modes.
- **Components**: Reusable, micro-animated with Framer Motion.

## Commands
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Test**: `npm run test`
- **E2E**: `npx playwright test`

## Environment Improvement Log
- **2026-04-23**: Synchronized Firebase MCP, added engines to package.json, initialized CLAUDE.md and .prettierrc.
