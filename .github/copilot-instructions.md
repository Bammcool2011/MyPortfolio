<!-- Copilot / AI agent instructions for this Nuxt 3 portfolio project -->

# Project snapshot (what to know fast)

- Framework: Nuxt 3 (app/ directory structure).
- Styling: Tailwind utility classes used throughout; `assets/css/global.css` is included via config.
- Components: grouped into `app/components/pages/` (page-specific) and `app/components/ui/` (reusable).
- Content: simple JSON content files live in `data/` (e.g. `data/projectData.json`) and are imported by components.
- Build & run: standard Nuxt scripts in `package.json` (`dev`, `build`, `preview`). See [my-portfolio-nuxt/package.json](my-portfolio-nuxt/package.json).

# Architecture and conventions (do this first)

- Single-package Nuxt site. The app uses Nuxt 3's `app/` directory (pages, components, assets).
- `nuxt.config.ts` sets:
  - `components.dirs` to `~/components`, `~/components/pages`, `~/components/ui` — use these folders for component placement.
  - `imports.autoImport: false` — composables are NOT auto-imported; explicitly import composables/util functions where used.
  - `modules`: `@nuxt/eslint`, `@nuxt/image`, `@nuxt/ui` — Nuxt UI components may be available globally (see `UButton` usage in `app/components/Navbar.vue`).

- Use `<script setup lang="ts">` + Composition API in components (TypeScript enabled in the project).
- Global CSS: `assets/css/global.css` is included via `nuxt.config.ts` — prefer Tailwind classes in templates.

# Developer workflows & commands

- Install: `npm install` (or `pnpm / yarn / bun` per README). See [my-portfolio-nuxt/README.md](my-portfolio-nuxt/README.md).
- Dev: `npm run dev` — starts Nuxt dev server (port 3000 by default).
- Build: `npm run build` then `npm run preview` for a local production preview.
- Postinstall: project runs `nuxt prepare` as a `postinstall` step.

# MCP & package-manager notes

- This repo includes an MCP (Model Context Protocol) configuration at `.vscode/mcp.json` that lists local and remote MCP servers used by developer tools. Inspect that file for exact runner commands and environment variables — examples in the file use `npx`, `uvx`, and HTTP endpoints. Do NOT commit or expose secret keys from that file.
- Common MCP entries present: `clear-thought-two`, `context7`, `serena`, `deepwiki`, `nuxt-ui`, `chrome-devtools`, `brave-search`, and `exa`. Some are started via `npx -y <pkg>` or `uvx <pkg>`; others are remote `http` endpoints.
- Preferred package manager: while the README lists `npm`, `pnpm`, `yarn`, and `bun`, this workspace is compatible with `bun` (you can use `bun install` and `bun run dev`) — if your CI or contributors prefer a single manager, document it in the repo root. When using `bun`, keep an eye on native package compatibility (Nuxt 4 and some native node modules).

# Patterns & project-specific gotchas

- Content-driven components: page sections load static JSON from `data/` (example: `data/projectData.json`). Edit JSON for content updates rather than adding logic in components.
- Manual imports: because `imports.autoImport` is disabled, do not assume composables are auto-imported — import them explicitly. Example: if you add `useMyComposable()`, import it where used.
- Global UI components (Nuxt UI): components like `UButton` are used without explicit imports (they come from `@nuxt/ui`). If you add new UI libraries, register them in `nuxt.config.ts` or import explicitly.
- DOM interactions: some components (e.g., `app/components/Navbar.vue`) use direct DOM queries and `window.scrollTo` for anchor navigation. Keep that pattern if modifying navbar scroll behavior.

# Files to inspect when changing layout or content

- Layout and top-level entry: `app/app.vue` and `app/pages/index.vue`.
- Global styles: `assets/css/global.css`.
- Component groups: `app/components/pages/` and `app/components/ui/` (examples: [my-portfolio-nuxt/app/components/Navbar.vue](my-portfolio-nuxt/app/components/Navbar.vue)).
- Data/content: `data/*.json` (aboutData.json, projectData.json, hobbyData.json, activitiesData.json).

# Code style and tooling

- TypeScript is used; keep `lang="ts"` in `script setup` blocks.
- Formatting: `prettier` + `prettier-plugin-tailwindcss` are part of repo tooling — prefer Prettier formatting before commits.
- Linting: `@nuxt/eslint` present in `nuxt.config.ts`; run configured linting via your editor or CI (no explicit npm lint script present).

# When adding features or components

- Place page-specific sections in `app/components/pages/` and generic controls in `app/components/ui/`.
- If a component needs data, prefer importing the matching JSON from `data/` rather than inlining large content.
- Export reusable UI pieces as simple props-driven Vue components (see `TextLoop.vue` for an example of a small UI widget).

# Quick examples (copyable)

- Start dev server:

```bash
npm run dev
```

- Build & preview:

```bash
npm run build
npm run preview
```

# Questions for maintainers (if unclear)

- Should composables be enabled for auto-import? Current config disables it intentionally (`imports.autoImport: false`).
- Confirm preferred package manager (README lists multiple; CI may expect one).

---

If anything above is incomplete or you want more specific examples (component wiring, a composable example, or a suggested ESLint script), tell me which area to expand.
