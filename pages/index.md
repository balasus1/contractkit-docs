---
title: Welcome
description: ContractKit — design, review, and generate API contracts from a single source of truth.
icon: house
---

# ContractKit Documentation

**ContractKit** makes the API contract the single source of truth for your team. Instead of a backend team defining an API, a frontend team guessing at its shape, and docs quietly drifting out of sync, everyone designs, reviews, and generates from the same contract.

## What ContractKit gives you

- **A visual contract builder** — define endpoints, request/response schemas, and Spring annotations (`@PreAuthorize`, `@Loggable`, `@JsonView`) without hand-writing YAML.
- **A review workflow** — endpoints move through `draft → pending → approved` before they're generated, published, or shown in docs, with dedicated Developer and Reviewer roles.
- **Code & spec generation** — download a Spring Boot backend, a React or Angular client, or a raw OpenAPI spec, generated straight from your approved contract.
- **Contract import** — pull in an existing OpenAPI spec or Postman collection instead of starting from scratch.
- **Live docs & a mock server** — every module gets a Swagger UI docs page and a mock API your frontend can build against before the real backend exists.
- **GitHub publishing** — push versioned OpenAPI specs and generated SDKs to a GitHub release, with automatic breaking-change detection.
- **A CLI (`ckit`)** — the same workflow from your terminal or CI pipeline.

## Where to start

| If you are... | Start here |
|----------------|------------|
| New to ContractKit | [Getting Started](/tutorials/getting-started) |
| Setting up a workspace for your team | [Roles & Access Control](/guides/roles-and-access) |
| Building your first contract | [Creating Projects & Modules](/guides/projects-and-modules) |
| Reviewing endpoints someone else built | [Review & Approval Workflow](/guides/review-workflow) |
| Automating contracts in CI | [Using the ckit CLI](/guides/ckit-cli) |

## How the docs are organized

- **Tutorials** — learning-oriented, walks you through a first task end to end.
- **Guides** — task-oriented how-tos for each part of the product.
- **Reference** — the data model, CLI commands, and REST API, described precisely.
- **Concepts** — how ContractKit actually works under the hood, and its security model.
