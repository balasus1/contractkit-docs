# contractkit-docs

> Documentation site powered by [Tome](https://tome.dev)

## Overview

This is the documentation for **contractkit-docs**. It is a static documentation site with full-text search, structured data, and machine-readable formats.

## Available Resources

| Resource | Path | Description |
|----------|------|-------------|
| llms.txt | /llms.txt | Lightweight page index with titles, descriptions, and URLs |
| llms-full.txt | /llms-full.txt | Full raw markdown content of all pages |
| MCP manifest | /mcp.json | Machine-readable page metadata with headings and tags |
| skill.md | /skill.md | This file — agent capabilities and site structure |
| robots.txt | /robots.txt | Crawler directives with AI agent permissions |
| Search API | /search.json | Pagefind search index metadata for programmatic search |

## Site Structure

### Pages

- **[File Routing](/concepts/file-routing)** — How files in the pages directory map to URLs on your site.
- **[How Tome Works](/concepts/how-tome-works)** — Understand the architecture behind Tome — from Markdown files to a running documentation site.
- **[Using Components](/guides/components)** — Add interactive elements like callouts, tabs, cards, and steps to your documentation.
- **[Customizing Your Site](/guides/configuration)** — Change your site name, theme, colors, and navigation layout.
- **[Welcome](/)** — Documentation for contractkit-docs, powered by Tome.
- **[CLI Reference](/reference/cli)** — Every command and flag available in the Tome CLI.
- **[Component Reference](/reference/components)** — API reference for every built-in MDX component.
- **[Configuration](/reference/config)** — Complete reference for every option in tome.config.js.
- **[Deploy Your Site](/tutorials/deploy)** — Build your docs for production and deploy to any static hosting provider.
- **[Getting Started](/tutorials/getting-started)** — Build your first documentation page from scratch — from writing content to seeing it in the browser.

## How to Use This Site

### For AI Agents

1. **Quick overview**: Read `/llms.txt` for a page index with titles and URLs
2. **Full content**: Read `/llms-full.txt` for complete raw markdown of all pages
3. **Structured data**: Parse `/mcp.json` for machine-readable metadata including headings, tags, and content
4. **Search**: Use Pagefind search at `/pagefind/pagefind.js` or check `/search.json` for index metadata

### Capabilities

- **Search provider**: local
