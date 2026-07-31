---
title: Importing Contracts
description: Bring an existing OpenAPI spec or Postman collection into ContractKit instead of starting from scratch.
icon: file-input
---

# Importing Contracts

If an API already exists — even just as a spec — you don't need to rebuild it endpoint by endpoint. **Import** parses an existing contract and maps it into ContractKit's project/module/endpoint model.

## Starting an import

Open **Import** and choose one of three sources:

| Source | How it works |
|--------|---------------|
| **File** | Upload a spec file directly (up to 5MB). |
| **URL** | Paste a link to a publicly reachable spec. |
| **Git repo URL** | Point at a repository; ContractKit locates and fetches the spec file inside it. |

Whatever the source, the file is validated as a real OpenAPI document before anything is mapped — invalid specs are rejected with a validation error rather than silently imported.

<Callout type="tip" title="Postman collections work too">
  If the uploaded file looks like a Postman Collection rather than an OpenAPI spec, ContractKit detects it automatically and maps it into the same project structure — you don't need to convert it first.
</Callout>

## Reviewing before you commit

Before anything is created, you get a **preview**: the spec's title, version, and how many modules/endpoints it will produce. Nothing is written to your workspace until you confirm.

From the preview you choose:

- **Create as a new project** — the imported spec becomes a brand-new project.
- **Merge into an existing project** — endpoints are added into a project you already have. Duplicate endpoints (same method + path) are detected and flagged so you don't end up with two copies of the same operation.

## A note on URL safety

When importing from a URL, ContractKit blocks requests to internal/private addresses (localhost, loopback, link-local, and private IP ranges) before fetching — this prevents the import feature from being used to probe your own internal network. If your spec genuinely lives on an internal-only host, use the **File** upload option instead of a URL.

## After importing

Imported endpoints land in `draft` status just like anything else you build by hand — they still need to go through [review](/guides/review-workflow) before they're eligible for code generation, docs, or publishing. Treat an import as a fast starting point, not a finished, approved contract.
