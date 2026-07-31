---
title: Code & Spec Generation
description: Turn an approved contract into a Spring Boot backend, a React/Angular client, or a raw OpenAPI spec.
icon: cog
---

# Code & Spec Generation

Once your endpoints are built (and ideally [approved](/guides/review-workflow)), ContractKit can generate real, downloadable artifacts from them.

<Callout type="info" title="Two generators, one contract">
  ContractKit ships two related but distinct generation paths. Which one runs depends on where you trigger generation from — the difference matters if you're deciding what to expect in your download.
</Callout>

## Full-project generation (the main "Generate" flow)

From a project's dashboard, choose **Generate** and pick a template:

| Template | What you get |
|----------|---------------|
| `spring-boot` | A scaffolded Spring Boot project — not just a controller stub. |
| `react` | A React project scaffold with a generated API client. |
| `angular` | An Angular project scaffold with a generated API client (typed services). |

You can also request the raw contract as `yaml` or `json` instead of a code template. This calls the project's DB-backed endpoint list — modules and endpoints as they're actually stored for that project — and returns a ZIP download named `<project-slug>-<template>.zip`.

## Single-artifact generation (Java / TypeScript)

A lighter path generates just the pieces for the module you currently have open in the builder, without a full project scaffold:

- **Java**: one `@RestController` class plus request/response DTO classes, and a service interface with a stub implementation (`// TODO: Auto-generated method stub` — you fill in real logic). Response DTOs automatically add `createdBy`/`createdDate`/`modifiedBy`/`modifiedDate` audit fields.
- **TypeScript**: `dtos.ts` (interfaces for every schema), `client.ts` (an Axios-based client class with one typed async method per endpoint), and a barrel `index.ts`.
- **Angular**: the Angular equivalent — typed services using Angular's HTTP client.

Field type mapping is consistent across generators: `integer`/`number` → `number`, `boolean` → `boolean`, `object` → a generic object type, everything else → `string`; checking **Array** on a field appends `[]`.

## The OpenAPI spec

Separately from code generation, ContractKit builds a real OpenAPI 3.0 document from your endpoints at any time — this is the same spec used by the module's [docs page](/guides/docs-and-mock-server) and by [GitHub publishing](/guides/publishing-to-github). Download it as JSON or YAML whenever you want a spec to share or feed into another tool, independent of generating any code.

## Annotations in generated code

If you enabled `@PreAuthorize`, `@Loggable`, or `@JsonView` on an endpoint, they appear in the generated Java controller method exactly as configured — see [Annotations](/guides/annotations) for the exact output and the placeholder-import caveat.

## What to do with the download

The generated project or client is a starting point, not a finished service:

1. Unzip it into your actual backend/frontend repository (or as a new one).
2. Fill in the generated service stubs with real business logic.
3. Swap any placeholder annotation imports for your project's real ones.
4. Wire it into your build — the ZIP doesn't include your existing project's build config.
