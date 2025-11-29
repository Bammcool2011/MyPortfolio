---
mode: 'agent'
description: 'Organize Comments & Documentation (concise)'
---

# Organize Comments & Documentation — Concise Agent Template

Purpose: tidy comments so other agents and contributors can quickly understand code. Move long explainers to headers/JSDoc/.github/docs and keep inline comments short.

Keep edits minimal and never change runtime behavior.

---

## Quick Reference

## Inputs

- paths: ["path/or/glob/**"]
- style: "thai-only" | "thai-short-emoji" | "english-jsdoc" | "custom"
- scope: "comments-only" | "comments+format" | "aggressive"
- moveLongExplainersTo: "header" | "JSDoc" | "docs"
- docsFolder: ".github/docs"

## Required rules (short)

1. Never change runtime behavior.
2. Classify comments: header, section, inline, TODO/FIXME, long-explainer (>3 lines).
3. Comment language rule: All inline and section comments should be written in Thai and be clear, except for logic-header comments (imports, computed, constants, reactive declarations, and similar technical headers) which must be in English.
4. Move long explainers to configured destination; leave a one-line pointer in code.
5. Preserve license/author headers.
6. One patch per file.

## Steps (concise)

1. Read files in `paths` and classify comments.
2. Move long explainers to header/JSDoc/docs; leave one-line pointers in code.
3. Shorten inline comments to 1–2 lines according to `style`.
4. Preserve `.vue` block order: `<template>`, `<script>`, `<style>`.
5. Commit one patch per file; pause after 3–5 files to report progress.
6. Run `npm run type-check` and `npm run lint` after edits; fix only trivial lint/format issues.

### 🎯 Strategy Selection

- Small files (<100 lines): Use Global Ordering (Imports → Types → Constants → Logic)
- Large files (>200 lines): Use Functional Grouping (group related code together)
- Vue Composition API: Imports → Types → Components → Composables → Constants → Props → Refs → Methods → Lifecycle
- Vue Options API: Imports → Components → Props → Data → Computed → Watchers → Methods → Lifecycle

### 🛠️ Tools & Automation

- ESLint rules: `import/order`, `sort-imports`, `sort-keys`
- Prettier: consider `prettier-plugin-sort-imports` for import ordering
- VS Code extensions: Import Organizer, Sort Lines
- CLI tools: `import-sort`, `eslint --fix`

### 📝 Comment Styles

- Thai + emoji (team preference): `// 🏗️ Built-in imports (Vue core APIs)`
- English JSDoc: `/** @param {string} id - User ID */`
- Section headers: `// ===== Feature Group =====`

### ⚡ Common Patterns

- Import groups: external libs → Vue/Nuxt built-ins → UI components → project imports → relative imports → styles
- Vue script order: imports → types → components → composables → constants → props → state → methods → lifecycle
- Nuxt specifics: `useHead`, `$fetch`, `defineEventHandler`, `createError`, `useDatabase`

---

## Template Inputs (fill before running)

- paths: ["path/or/glob/1", "path/or/glob/2"] # files to process
- style: "thai-only" | "thai-short-emoji" | "english-jsdoc" | "custom" # comment style (default: "thai-only")
- scope: "comments-only" | "comments+format" | "aggressive" # aggressive may add JSDoc/types
- moveLongExplainersTo: "header" | "JSDoc" | "docs" # default: header
- docsFolder: ".github/docs" # where to put extracted long explainers when using docs

---

## Goals / Rules (must follow)

1. Never change code logic. If needed, stop and request approval.
2. Classify comments: header, section, inline, TODO/FIXME, long-explainer (>3 lines).
3. Move long explainers to header/JSDoc/docs; leave a one-line summary in code. If context would be lost, allow up to 8 lines or use JSDoc/header.
4. Keep license/author comments at the top unchanged.
5. Make minimal edits; one patch per file.
6. Keep TODO/FIXME as-is; add a suggested issue title if possible.
7. You may delete/modify comments (except license/author, TODO/FIXME). For each change, add a one-line rationale (in the patch description or as a header comment). Never change runtime behavior.
8. When instructed by the repository maintainer, the assistant may overwrite, delete, or modify existing comments as long as those changes do not alter runtime behavior.

---

## Step-by-step assistant instructions

1. Load files specified in `paths` and parse sections.
2. Extract and classify all comments.
3. For long explainers (>3 lines):
   - Move them to header/JSDoc/docs as configured; leave a one-line summary or a pointer like "See docs: <path>" in the code.
4. Shorten inline comments to one line per the selected `style`.
5. For `.vue` files, preserve block order: `<template>`, `<script>`, `<style>`.
6. Make one patch per file; pause after every 3–5 files to report progress.
7. After edits, run `npm run type-check` and `npm run lint` and report any errors. Fix only formatting/lint issues if needed.

---

## Recommended ordering inside `<script>` block

### Guidelines for ordering imports in `<script>`

To keep code readable, group and order imports as follows:

1. Vue built-in imports first (e.g., `ref`, `computed`, `onMounted`)
2. UI components (from `components/` or external UI libraries), sorted alphabetically
3. Composables, helpers, utilities (e.g., `useApi`, `useAuth`)
4. Other imports (CSS, mock data, assets)

Example comment group:

```js
// 🏗️ Built-in imports (Vue core APIs)
import { ref, computed, onMounted } from 'vue';

// 🧩 UI Components (alphabetical)
import Header from '~/components/layouts/Header.vue';
import Sidebar from '~/components/layouts/Sidebar.vue';

// 🛠️ Composables & Helpers
import useApi from '~/composables/useApi';
import useAuth from '~/composables/useAuth';

// 🎨 CSS/Assets/Mocks
import '~/assets/styles/main.scss';
```

Next sections: types, composables, props/defines, state (refs/reactive), methods, lifecycle hooks, exports.

---

### Code organization strategies: global vs functional grouping

Use global ordering for small utilities and functional grouping for large components. Prefer readability and team conventions.

---

### Vue/Nuxt-specific examples

Refer to the examples below for common patterns (Composition API, Nuxt pages, server routes, Options API). Keep comments concise and place them near related code.

---

### UI comment guideline (short)

- Comment complex logic: conditions, calculations, dynamic rendering.
- Also add short comments for high-level layout elements: `header`, `footer`, main nav, primary buttons.
- Keep inline comments 1–2 lines; use Thai+emoji for Thai files, English for English files.
- Move verbose explainers (>3 lines) to header/JSDoc/docs and leave a one-line pointer.
- Preserve TODO/FIXME markers.

Language rule reminder: write comments in Thai and keep them clear. Use English only for logic-header comments (imports, computed, constants, reactive declarations, types/signatures) so tools and other agents parse them easily.

Short examples:

```html
<!-- 📋 Orders table: filter out drafts -->
<table :data="ordersFiltered" />

<!-- 🔀 Edit button visible only to admins -->
<UButton v-if="canEdit">Edit</UButton>

<!-- 🏠 Page header -->
<header />
```

---

## Troubleshooting

### 🔧 Common issues & solutions

#### ESLint conflicts

If import ordering or lint rules conflict with helpful comment placement, prefer adding targeted ESLint disables with an inline rationale, e.g.:

```js
// eslint-disable-next-line import/order -- grouping for readability in this file
import { useAuth } from '~/composables/useAuth';
```

#### Large files performance

- Split large components into smaller modules
- Use functional grouping to reduce cognitive load
- Consider lazy loading for heavy features

#### Team conventions

- Document decisions in `.github/CONTRIBUTING.md`
- Use shared ESLint/Prettier configs to maintain consistency

---

## Output expectations

After running the assistant, expect:

- One patch per file changed (small, focused commits)
- Long explainers moved to `.github/docs` or file headers when requested
- Inline comments shortened to 1–2 concise lines

## Comment examples / templates (pick based on `style`)

### File header (short + emoji)

```template
<!-- 🗂️ File: src/components/foo/Bar.vue -->
<!-- 📝 Displays product card and key details -->
<!-- 📄 Details: moved to .github/docs/Bar.md -->
```

### Section header

```js
// � ====== State & Computeds ======
// 🧾 Short purpose note
```

### Inline short comment examples

```ts
// �️ latest note content
const latest = notes?.[0]?.content;

// � fallback for numeric amount
const amount = props.card.amount ?? 0;
```

### JSDoc example

```ts
/**
 * 📝 Fetch all notes for a card ID
 * @param {string} cardId - card identifier
 * @returns {Promise<Array<Note>>}
 */
async function getAllNotes(cardId) { ... }
```

---

## Quick QA commands

```powershell
npm run lint
npm run type-check
```

---

## Commit message guidance

- One commit per logical change (per file or small group). Suggested message:
  `chore(refactor): tidy comments in <folder/file> — move long explainers to <header|docs|JSDoc>`

---

## Safety & escalation

- If a transformation requires non-comment code edits that could affect behavior, stop and request explicit confirmation.
- If the repo contains special conventions (for example, `.github/instructions`), follow them.

---

## Minimal example usage

```
paths: ["components/pages/sale-pipeline/**/ui-sale/*.vue"]
style: "thai-only"
scope: "comments-only"
moveLongExplainersTo: "docs"
docsFolder: ".github/docs/components/sale-pipeline"
```

---

Note: This is a concise agent-focused template. Use the longer template when more examples or extended guidance are needed.

End of template.

---

## Completion checklist (one-line summary)

Summary: This template organizes and standardizes comments and code ordering without changing runtime behavior — move long explainers to headers/JSDoc/docs, shorten inline comments to 1–2 lines, and ensure logic headers remain in English while general comments are Thai.

Checklist:

- [ ] Classified all comments (header, section, inline, TODO/FIXME, long-explainer).
- [ ] Moved long explainers (>3 lines) to the configured destination and left a one-line pointer in the code (or header JSDoc when context required).
- [ ] Shortened inline comments to 1–2 lines following selected `style`.
- [ ] Ensured logic-header comments (imports, computed, constants, reactive, types/signatures) are in English.
- [ ] Ensured general inline and section comments are in Thai (clear, short, emoji allowed per style).
- [ ] Preserved license/author headers and TODO/FIXME markers (added suggested issue title for each TODO/FIXME when possible).
- [ ] Maintained `.vue` block order and did not change runtime code.
- [ ] Created one patch per file and recorded a one-line rationale for each comment change in the patch description.

### Small clarifications & edge-cases

- Vue `<script setup>`: follow the same ordering rules; place `defineProps`/`defineEmits` immediately after imports and add English logic-header comments for them.
- TypeScript files (`<script lang="ts">` or `.ts`): keep type signatures and interfaces grouped near the top; prefer English for type names and their header comments to help downstream tools.
- TODO/FIXME: do not remove; optionally add a one-line suggested issue title as a comment above the marker, e.g. `// SUGGESTED ISSUE: fix productPrice rounding in X component`.
- Storage path for moved explainers: when `docsFolder` is used, create a clear filename derived from the original file path (for example `.github/docs/components/foo/Bar.md`) and include a link/pointer in the original file.
- Import-order lint conflicts: if ESLint autofix conflicts with preferred grouping, prefer ESLint's rule unless the file maintainer requested otherwise; add an inline `eslint-disable-next-line` with a short rationale when intentionally deviating.
