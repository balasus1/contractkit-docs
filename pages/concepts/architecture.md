---
title: Architecture
description: How ContractKit is actually built — stack, data flow, and the two parallel code-generation paths.
icon: layers
---

# Architecture

This is how ContractKit is put together under the hood — useful if you're debugging unexpected behavior, self-hosting, or just curious.

## Stack

- **Frontend/backend**: Next.js (App Router), React, TailwindCSS.
- **Client state**: Zustand stores (project, workspace, app-level UI state).
- **Persistence**: Postgres via Drizzle ORM (`src/lib/db/schema.ts`) — this is the real schema. A `prisma/schema.prisma` file also exists in the repo but is unused legacy; don't design integrations against it.
- **Auth**: Clerk.
- **Validation**: Zod.

## Data flow: builder state

Project/module/endpoint edits in the dashboard sync to Postgres as the source of truth, with a `localStorage` mirror as an offline/fallback cache — not the other way around. If you see stale data after switching devices, the DB copy is authoritative.

## Two generation code paths

ContractKit has two separate implementations of "turn a contract into code," and they're not interchangeable:

1. **Client-side single-artifact generators** (`JavaGenerator`, `TypeScriptGenerator`, `AngularGenerator` in `src/lib/services/generators/`) — operate on whatever's currently in the in-memory builder state for one module, and produce a single controller/DTO file or client file. Reached via `/api/v1/generate/java` and `/api/v1/generate/typescript`.
2. **Server-side full-project builders** (`SpringBootProjectBuilder`, `ReactProjectBuilder`, `AngularProjectBuilder`) — load a project's modules/endpoints from the database and scaffold a complete, runnable project. Reached via `/api/v1/projects/[id]/generate`, this is what the dashboard's main "Generate" action actually calls.

If you're extending or debugging generation behavior, check which path you're actually looking at before assuming a change to one affects the other. See [Code & Spec Generation](/guides/code-generation) for the user-facing behavior of both.

## OpenAPI generation is a third, separate concern

The OpenAPI document builder (`src/lib/openapi/`) is independent of both generator paths above — it's what powers the [docs page](/guides/docs-and-mock-server) and [GitHub publishing](/guides/publishing-to-github), and can be produced without generating any code at all.

## Auth model: no global middleware

There is no single `middleware.ts` enforcing authentication across the app. Every page and API route calls Clerk's `auth()` helper itself and handles the unauthenticated case individually. In practice this means:

- Public surfaces (a public project's docs page, the `/c/[slug]` viewer) are public because their specific route explicitly allows it, not because of a blanket policy.
- Adding a new route means remembering to add its own auth check — there's no fallback that protects it for you.

See [Security Model](/concepts/security) for the implications of this.

## GitHub integration is two systems, not one

An OAuth connection (`repo`/`workflow` scopes) drives publishing; a separate GitHub App installation drives spec discovery in existing repos. They're stored and used independently — see [Publishing to GitHub](/guides/publishing-to-github) for the practical distinction.
