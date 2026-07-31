---
title: REST API Overview
description: The /api/v1 surface behind both the web dashboard and the ckit CLI.
icon: plug
---

# REST API Overview

The web dashboard and the [`ckit` CLI](/guides/ckit-cli) both talk to the same `/api/v1` REST API — there is no separate CLI-only backend. Anything the CLI can do, you're hitting one of the routes below.

## Authentication

| Caller | Auth method |
|--------|--------------|
| Web dashboard | Clerk session cookie, checked per-route (there's no single global auth middleware — each route calls Clerk's server-side `auth()` helper itself). |
| `ckit` CLI / CI / scripts | `x-api-key: <key>` header, using a key from **Dashboard → Settings → API Keys**. |

An invalid or revoked key returns a 401 with `Invalid or revoked API key`.

## Key routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/v1/builder/state` | GET | Loads the current user's projects/modules/endpoints for the dashboard. |
| `/api/v1/ai/generate-endpoint` | POST | AI-assisted single-endpoint generation from a text prompt. |
| `/api/v1/ai/build-project` | POST | AI-assisted whole-project generation. |
| `/api/v1/endpoints/[id]/submit` | POST | Submit an endpoint for review (`draft` → `pending`). |
| `/api/v1/generate/java` | POST | Single-artifact Java controller/DTO generation from in-memory builder state. |
| `/api/v1/generate/typescript` | POST | Single-artifact TypeScript client generation. |
| `/api/v1/projects/[id]/generate` | POST | Full-project generation (`spring-boot`/`react`/`angular` template, or raw `yaml`/`json` spec), returns a ZIP. |
| `/api/v1/import/openapi` | POST | Import a spec from file/URL/git, with OpenAPI + Postman auto-detection. |
| `/api/v1/docs/[projectId]/[moduleId]/openapi.json` | GET | The live OpenAPI doc for a module's docs page, built from approved endpoints only. |
| `/api/v1/publish` | POST | Trigger a GitHub publish run for selected endpoints in a module. |
| `/api/v1/publish/callback` | POST | Called by the GitHub Actions workflow ContractKit pushes, to report publish-run completion. |
| `/api/v1/api-keys` | POST/GET/DELETE | Issue, list, and revoke API keys. |
| `/api/v1/github/oauth/start` / `/callback` | GET | The GitHub OAuth publish-connection flow. |
| `/api/v1/github/app-installations` | GET | GitHub App installations linked for spec discovery. |
| `/api/v1/public/contract/[slug]` | GET | Backs the public `/c/[slug]` contract viewer — no auth required. |

## Request/response shape

Every route that returns generated code (`/generate/*`, `/projects/[id]/generate`) responds with a binary ZIP and a `Content-Disposition: attachment` header rather than JSON. All other routes return JSON.

## Rate limits and quotas

Free-tier workspaces are capped (for example, 10 endpoints total — see [Building Endpoints & Schemas](/guides/endpoints-and-schemas)). Requests beyond a plan's limits return an error describing the limit rather than partially succeeding.

## Where to go next

- For a task-oriented walkthrough of the same functionality: [Using the ckit CLI](/guides/ckit-cli).
- For the exact shape of the data these routes operate on: [Configuration & Data Model](/reference/data-model).
