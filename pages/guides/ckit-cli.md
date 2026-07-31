---
title: Using the ckit CLI
description: Do the same review/publish workflow from your terminal or CI pipeline, using the same API and permissions as the web dashboard.
icon: terminal
---

# Using the ckit CLI

`ckit` is a terminal client for the exact same backend the web dashboard uses — same Workspace → Project → Module → Endpoint model, same permissions, same review lifecycle. It's the natural fit for CI pipelines and scripting.

## Install and log in

```bash
npm install -g ckit
ckit login --key ck_live_...
```

The key comes from **Dashboard → Settings → API Keys** (an Admin issues these — see [Roles & Access Control](/guides/roles-and-access)). It's stored locally at `~/.ckit/config.json`. Confirm it worked with:

```bash
ckit whoami
```

## Everyday commands

| Command | What it does | Typical role |
|---------|---------------|---------------|
| `ckit ls` | List projects/modules/endpoints you have access to. | Any |
| `ckit validate` | Validate a contract against schema/business rules. | Developer |
| `ckit diff` | Compare a contract against the last published version — the same diff used for breaking-change detection. | Developer |
| `ckit generate` | Generate code/spec artifacts from the command line. | Developer |
| `ckit submit` | Submit an endpoint/module for review. | Developer |
| `ckit status` | Check review/publish status. | Any |
| `ckit approve` | Approve pending endpoints. | Reviewer |
| `ckit reject` | Reject pending endpoints with feedback. | Reviewer |
| `ckit publish` | Trigger a GitHub publish run. | Developer/Admin |

Each command respects the same role restrictions as the dashboard — an API key issued to a Developer-only account can't `approve` or `reject`, for example.

## A CI example: gate a merge on contract validation

```yaml
# .github/workflows/contract-check.yml
- name: Validate contract
  run: |
    ckit login --key ${{ secrets.CKIT_API_KEY }}
    ckit validate --project my-api
    ckit diff --project my-api --module core
```

Fail the job if `ckit validate` or `ckit diff` reports a breaking change your team hasn't signed off on — this catches contract drift before it reaches a reviewer, not just after.

## A CI example: gate a deploy on approval

```bash
ckit status --project my-api --module core --require-approved
```

Use this as a pre-deploy check so a pipeline can't ship a backend built against endpoints that were never actually approved.

## Troubleshooting

An `Invalid or revoked API key` error means the key was revoked (or never valid) — ask your workspace Admin to check **Settings → API Keys** and issue a fresh one if needed.
