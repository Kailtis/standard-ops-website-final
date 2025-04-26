# Tech Context (April 26, 2025)

## Technologies Used
- **Language:** TypeScript
- **Framework/Library:** React
- **Build Tool:** Vite
- **Package Manager:** Bun (indicated by `bun.lockb`) and potentially npm/yarn (indicated by `package-lock.json`) - need clarification if both are actively used.
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **UI Components:** Likely Shadcn/ui (based on file structure `src/components/ui/` and `components.json`). Specific components observed: `GlareCard`, `MagneticButton`. Lucide React icons are used.

## Development Setup
- **Local Server:** Started via `bun run dev` (or potentially `npm run dev`/`yarn dev`).
- **Linting/Formatting:** ESLint configured (`eslint.config.js`). PostCSS is used (`postcss.config.js`), likely for Tailwind. Prettier might be used implicitly via editor integration or scripts.
- **TypeScript Configuration:** Separate configs for app (`tsconfig.app.json`) and Node environment (`tsconfig.node.json`), extending a base `tsconfig.json`.

## Technical Constraints
- Standard web browser compatibility.
- Performance considerations typical for React/Vite apps.

## Dependencies
- Core: `react`, `react-dom`
- Styling: `tailwindcss`, `postcss`, `autoprefixer`
- Animation: `framer-motion`
- Icons: `lucide-react`
- UI (Likely): `@radix-ui/*` (common with Shadcn), `class-variance-authority`, `clsx`, `tailwind-merge`
- Dev: `@types/react`, `@types/react-dom`, `@vitejs/plugin-react`, `eslint`, `typescript`, `vite`

## Tool Usage Patterns
- Components are defined as functional components using TypeScript (`.tsx`).
- Tailwind classes are applied directly in JSX.
- Images are imported into components.
- Motion components from Framer Motion wrap elements for animation.
