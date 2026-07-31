---
title: Core Concepts
description: The Workspace → Project → Module → Endpoint hierarchy, and the three roles that operate it.
icon: shapes
---

# Core Concepts

Before building anything in ContractKit, it helps to understand two things: how contracts are organized, and who does what.

## The hierarchy

ContractKit organizes everything into four nested levels:

```text
Workspace
└── Project
    └── Module
        └── Endpoint
```

- **Workspace** — the top-level container for your account. Each account currently supports **one active workspace** (the UI blocks creating a second one, even though the data model supports more).
- **Project** — a versioned API you're building: a name, a version, a license, and (optionally) a linked GitHub repo it publishes to. A project has a `status` (starts as `DRAFT`) and a `visibility` (`public` or `private`) that controls who can view its generated docs.
- **Module** — a logical grouping of endpoints inside a project, with its own `apiVersion` (defaults to `v1`). Every new project starts with one module named "Core Module."
- **Endpoint** — a single HTTP operation: method, path, request/response schema fields, annotations, and a review state. This is the unit that gets reviewed, generated, and published.

This hierarchy exists so a large API (many endpoints) can be versioned and reviewed in manageable, independently-approvable pieces (modules) inside one project.

## Endpoint review states

Every endpoint carries a `reviewStatus`: `draft → pending → approved` (or `rejected`). This matters more than it looks:

- Only `approved` (or `auto-approved`) endpoints appear in the module's public docs page and mock server.
- Once an endpoint is `pending` or `approved`, its fields lock in the builder UI — you can't silently edit something that's already been reviewed.
- Publishing to GitHub and generating code both operate on the endpoints you explicitly select, but downstream consumers (the docs page, the mock server) only ever see approved work.

See [Review & Approval Workflow](/guides/review-workflow) for the full lifecycle.

## The three roles

ContractKit's permission model maps directly onto how contract-first teams actually work:

| Role | Typical responsibility | Where they operate |
|------|------------------------|---------------------|
| **Admin** | Owns the workspace: invites members, connects GitHub, manages API keys, feature flags, billing. | [Roles & Access Control](/guides/roles-and-access) |
| **Developer** | Builds and edits projects, modules, and endpoints; submits work for review. | [Creating Projects & Modules](/guides/projects-and-modules), [Building Endpoints & Schemas](/guides/endpoints-and-schemas) |
| **Reviewer** | Approves or rejects submitted endpoints before they can be published or generated. | [Review & Approval Workflow](/guides/review-workflow) |

The same three roles apply whether you're working in the web dashboard or through the [`ckit` CLI](/guides/ckit-cli) — a Developer can `ckit submit`, a Reviewer can `ckit approve`, an Admin can do both plus manage API keys.

## Contract-first, not code-first

The core philosophy: the contract (endpoint definitions, schemas, annotations) is authored and approved *before* code is generated. Generated Spring Boot controllers, TypeScript/Angular clients, and OpenAPI specs are all downstream artifacts of that one approved contract — never the other way around. If you need to change behavior, you change the contract, get it re-reviewed, and regenerate.
