---
title: Publishing to GitHub
description: Push a versioned OpenAPI spec and generated SDKs to a GitHub release, with automatic breaking-change detection.
icon: github
---

# Publishing to GitHub

Publishing turns an approved contract into a real, versioned GitHub release — a spec file, and optionally a generated Spring Boot JAR and Angular package, attached as release assets.

## Two GitHub connections — know which is which

ContractKit uses GitHub in two independent ways. Don't confuse them:

| Connection | Purpose | Set up by |
|------------|---------|-----------|
| **OAuth connection** (`repo`, `workflow` scopes) | Required to **publish** — create repos, push a workflow file, create releases. | An Admin, once per workspace, in [Roles & Access Control](/guides/roles-and-access). |
| **GitHub App installation** | Optional — lets ContractKit **discover** existing OpenAPI specs already committed in a repo, for linking a project to source. | Installed on specific repos, separate from the OAuth connection. |

You only need the OAuth connection to follow this guide.

## Publishing a module

From a module with approved endpoints, choose **Publish** and provide:

- **GitHub owner/org** and **repo** — where the release goes. If the repo doesn't exist yet, ContractKit creates it for you (public, auto-initialized).
- **Tag** — a semver tag, e.g. `v1.2.0`.
- **Group ID / npm scope** (optional) — used to namespace the generated Java/npm artifacts.

<Callout type="info" title="Only approved endpoints publish">
  Select which approved endpoints from the module to include. Endpoints still in `draft` or `pending` aren't publishable — approve them first via the [review workflow](/guides/review-workflow).
</Callout>

## What happens when you publish

1. ContractKit generates the OpenAPI document from your selected endpoints.
2. It diffs the new spec against the previously published version for this module, computing a changelog and flagging any breaking changes.
3. A publish run is created and tracked (queued → running → completed/failed) — visible in your publish history, with rollback support if something goes wrong.
4. If needed, ContractKit creates (or reuses) a dedicated artifacts repo under your chosen owner, and pushes a GitHub Actions workflow file into it (`.github/workflows/contractkit-generate.yml`) — you don't write this workflow yourself.
5. A GitHub Release is created for your tag, with the OpenAPI spec uploaded as an asset.
6. The pushed workflow is triggered remotely: it runs `openapi-generator-cli` inside **your** repo to produce a real Spring Boot JAR and an Angular npm package, and attaches both to the same release.
7. When that workflow finishes, it calls back into ContractKit to mark the publish run complete (or failed) — you'll see the final status without needing to watch GitHub Actions yourself.

## Breaking changes

If the diff against the previous published spec detects a breaking change (a removed field, a changed type, etc.), workspace admins are notified automatically. Treat a flagged breaking change as a prompt to double-check downstream consumers before you let this release go out, not just an informational note.

## Requirements checklist

- An Admin has connected GitHub via OAuth for the workspace (scopes `repo workflow`).
- You have permission to create/write to the target owner/org.
- GitHub Actions is enabled on the target repo (ContractKit's pushed workflow needs it to run) — you're trusting the workflow ContractKit generates, since you don't author it yourself.
