---
title: Creating Projects & Modules
description: Start a new API contract, understand what each field means, and organize it into modules.
icon: folder-plus
---

# Creating Projects & Modules

A **project** is one versioned API. Everything you build — modules, endpoints, generated code, published releases — belongs to a project.

## Creating a project

From the dashboard, click **New Project** and fill in:

| Field | Notes |
|-------|-------|
| **Project Name** | Required. Shown throughout the dashboard and in generated artifact filenames. |
| **API Version** | Defaults to `1.0.0`. Bump this yourself when you ship breaking changes — ContractKit doesn't auto-increment it. |
| **License** | Choose from `MIT`, `Apache-2.0`, `GPL-3.0`, `ISC`, `BSD-2-Clause`, `BSD-3-Clause`, or `UNLICENSED`. Written into generated project metadata. |
| **Copyright Owner** | Free text, used in generated file headers. |

<Callout type="info" title="A workspace must exist first">
  You can't create a project until your account's workspace exists — it's created automatically the first time you sign up.
</Callout>

On submit, ContractKit creates the project with `status: DRAFT` and `visibility: private` by default, and auto-creates one module named **"Core Module"** so you have somewhere to start adding endpoints immediately.

## What's configured later, not at creation

The project-creation form is intentionally short. A larger set of code-generation settings exists but is edited later, per module or per endpoint, rather than up front:

- `basePackage`, `controllerName`, `serviceName` — Java package/class naming.
- `groupId` / `artifactId`, `javaVersion` (defaults to 17), `springBootVersion` (defaults to 3.2.2).
- `dependencies` — defaults to `web`, `validation`, `lombok`.
- `backendFramework` / `frontendFramework` — which generators are relevant for this project.

You'll encounter these when you get to [Code & Spec Generation](/guides/code-generation) — you don't need to think about them yet.

## Modules

A module groups related endpoints under one `apiVersion` (defaults to `v1`). Use modules to split a large API into logical, independently reviewable chunks — for example, a `users` module and a `billing` module inside the same project, each with its own version.

To add a module:

1. Open the project.
2. Click **New Module**, give it a name.
3. Start adding endpoints inside it — see [Building Endpoints & Schemas](/guides/endpoints-and-schemas).

Every module you generate code from, publish, or expose via the docs page/mock server is scoped independently — approving endpoints in one module has no effect on another.

## Cloning and versioning a project

Rather than editing a shipped project in place, clone it and bump the version — this keeps a clean history of what was actually published at each version, and lets in-flight review work on the new version continue without blocking consumers of the old one.
