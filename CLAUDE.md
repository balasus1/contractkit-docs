# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A documentation site for "ContractKit" built with **Tome** (`@tomehq/cli` / `@tomehq/theme`), a Markdown-to-static-site framework. There is no application code here — the entire repo is docs content (`pages/`) plus Tome configuration. Content authoring is the primary task in this repo, not software engineering.

## Commands

```bash
npm run dev      # tome dev   — start dev server with hot reload (default port 3000)
npm run build    # tome build — produce static output in out/
npm run deploy   # tome deploy — deploy to Tome Cloud (requires TOME_TOKEN)
```

There is no test suite, linter, or type checker configured in this repo.

## Architecture

- **`pages/`** — all site content, one `.md` or `.mdx` file per page. File-system routing: `pages/guides/config.md` → `/guides/config`. `index.md` in a directory is that directory's root. Files prefixed `_` are ignored. Structure follows the Diataxis model: `tutorials/` (learning), `guides/` (tasks), `reference/` (information), `concepts/` (understanding).
- **`tome.config.js`** — site name, theme preset/mode, and the `navigation` array (sidebar groups/order). Note: a page existing in `pages/` does not mean it's in the sidebar — it must be listed under `navigation` here. Full option reference is documented in `pages/reference/config.md`.
- **`.tome/entry.tsx`** — generated entry point wired up by the Tome CLI; not something to hand-edit as part of normal content work.
- **`index.html`** — static shell that mounts the Tome app into `#tome-root`.
- **Build pipeline**: Tome's Vite plugin turns Markdown/MDX into React components at build time; `@tomehq/theme` provides the shell (sidebar, search, dark mode). `tome build` emits static HTML/CSS/JS to `out/`, plus `llms.txt`, `search.json`, `mcp.json`, and `robots.txt` for agent/LLM and crawler consumption.
- **MDX components**: `.mdx` files get built-in components with no imports needed — `Callout`, `Tabs`, `Card`/`CardGroup`, `Steps`, `Accordion`. Plain `.md` files do not support these; rename to `.mdx` to use them. See `pages/guides/components.mdx` for usage patterns.

## Deployment

Two deploy paths exist side by side:
- **GitHub Actions** (`.github/workflows/deploy.yml`): on PRs to `main` runs `tome deploy --preview`; on push to `main` runs `tome deploy` (Tome Cloud, needs `TOME_TOKEN` secret).
- **Vercel** (`vercel.json`): `outputDirectory` is set to `out`, i.e. Vercel serves the static output of `tome build`.
