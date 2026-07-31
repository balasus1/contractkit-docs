---
title: CLI Commands
description: Every ckit command and flag.
icon: square-terminal
---

# CLI Commands

Config is stored at `~/.ckit/config.json`. For a task-oriented walkthrough, see [Using the ckit CLI](/guides/ckit-cli).

## ckit login

```bash
ckit login --key <key> [--host <url>]
```

| Flag | Required | Description |
|------|----------|--------------|
| `--key <key>` | Yes | API key, starts with `ck_live_...`. |
| `--host <url>` | No | ContractKit instance URL. Defaults to `https://contractkit.balashan.dev` — override for a self-hosted instance. |

## ckit whoami

```bash
ckit whoami
```

Shows the currently authenticated user. No options.

## ckit ls

```bash
ckit ls [options]
```

| Flag | Description |
|------|--------------|
| `--projects` | List all projects with their workspace. |
| `--workspaceId <id>` | Filter projects by workspace ID. |
| `--projectId <id>` | List modules in a project. |
| `--moduleName <name>` | Find modules by name across all projects. |
| `--moduleId <id>` | List endpoints in a module. |

## ckit status

```bash
ckit status [options]
```

| Flag | Description |
|------|--------------|
| `--project <id>` | Status for all endpoints in a project. |
| `--module <id>` | Status for all endpoints in a module. |
| `--endpoints <ids>` | Comma-separated endpoint IDs. |
| `--pending` / `--approved` / `--rejected` | Filter to one review state. |
| `--summary` | Print summary counts only, no per-endpoint rows. |

## ckit submit

```bash
ckit submit [options]
```

Developer command. Moves endpoints from `draft` to `pending`.

| Flag | Description |
|------|--------------|
| `--project <id\|name>` | Project ID or name. |
| `--module <id\|name>` | Module ID or name (requires `--project` if using a name). |
| `--endpoints <ids>` | Comma-separated endpoint IDs. Defaults to all `draft` endpoints in scope. |

## ckit approve

```bash
ckit approve [options]
```

Reviewer command.

| Flag | Description |
|------|--------------|
| `--project <id>` | Approve all pending endpoints in a project. |
| `--module <id>` | Approve all pending endpoints in a module. |
| `--endpoint <id>` | Approve a single endpoint. |
| `--endpoints <ids>` | Comma-separated endpoint IDs. |
| `--message <msg>` | Optional approval message. |

## ckit reject

```bash
ckit reject --comment "<reason>" [options]
```

Reviewer command.

<Callout type="warning" title="--comment is mandatory">
  Every rejection requires `--comment` — there are no exceptions. The CLI errors immediately if it's missing.
</Callout>

| Flag | Description |
|------|--------------|
| `--comment <text>` | **Required.** Rejection reason. |
| `--project <id>` | Reject all pending endpoints in a project. |
| `--module <id>` | Reject all pending endpoints in a module. |
| `--endpoint <id>` | Reject a single endpoint. |
| `--endpoints <ids>` | Comma-separated endpoint IDs. |

## ckit validate

```bash
ckit validate <file>
```

Validates an OpenAPI spec file. Takes one positional argument: the path to the spec.

## ckit diff

```bash
ckit diff <old> <new> [--json]
```

Diffs two OpenAPI spec files and reports added/removed/modified endpoints and breaking changes.

| Flag | Description |
|------|--------------|
| `--json` | Output raw JSON instead of formatted text — useful for piping into CI logic. |

## ckit generate

```bash
ckit generate --from <file> [--lang <langs>]
```

| Flag | Required | Description |
|------|----------|--------------|
| `--from <file>` | Yes | Source file — a `manifest.json` or `openapi.yaml`/`.yml`. |
| `--lang <langs>` | No | Comma-separated target languages: `java`, `typescript`. Defaults to `java`. |

## ckit publish

```bash
ckit publish --module <id> --owner <owner> --repo <repo> --backend-repo <repo> --frontend-repo <repo> [--tag <tag>] [--endpoints <ids>]
```

Publishes approved endpoints to GitHub as a PR. See [Publishing to GitHub](/guides/publishing-to-github) for what happens after this triggers.

| Flag | Required | Description |
|------|----------|--------------|
| `--module <id>` | Yes | Module to publish. |
| `--owner <owner>` | Yes | GitHub owner (user or org). |
| `--repo <repo>` | Yes | Spec repository name. |
| `--backend-repo <repo>` | Yes | Backend repository name. |
| `--frontend-repo <repo>` | Yes | Frontend repository name. |
| `--tag <tag>` | No | Release tag. Defaults to `v1.0.0`. |
| `--endpoints <ids>` | No | Comma-separated endpoint IDs. Defaults to all approved endpoints in the module. |

## Role restrictions

| Role | Allowed commands |
|------|--------------------|
| Developer | `submit`, `status`, `publish` |
| Reviewer | `approve`, `reject`, `status` |
| Admin | All commands |
