---
title: Review & Approval Workflow
description: How an endpoint moves from draft to approved, and why that status gates everything downstream.
icon: badge-check
---

# Review & Approval Workflow

Every endpoint carries a `reviewStatus`. Understanding this lifecycle is the key to understanding ContractKit's whole workflow — it's the gate between "someone built this" and "this is safe to generate code from, publish, or show in docs."

## The states

```text
draft → pending → approved
              ↘ rejected → (back to draft, editable again)
```

There's also `auto-approved`, used when a project/module is configured to skip manual review — treated identically to `approved` everywhere downstream.

| State | Meaning | Editable? |
|-------|---------|-----------|
| `draft` | Being built by a Developer. | Yes |
| `pending` | Submitted, awaiting a Reviewer. | No — locked |
| `approved` / `auto-approved` | Reviewed and signed off. | No — locked |
| `rejected` | Sent back with feedback. | Yes — editable again |

## Submitting for review (Developer)

Once an endpoint's method, path, and schemas are ready, click **Submit for Review**. This immediately:

1. Moves `reviewStatus` from `draft` to `pending`.
2. Locks every field in the endpoint editor.
3. Adds it to the Reviewer's queue.

If you need to change something after submitting, you can't edit directly — wait for a rejection (which reopens editing) or ask your Reviewer to reject it back to you.

## Reviewing (Reviewer)

Open the review inbox to see everything `pending` across the projects you have Reviewer access to. For each endpoint you can:

- **Read the full contract** — method, path, every schema field and sample value, and any annotations (`@PreAuthorize`, `@Loggable`, `@JsonView`).
- **Leave a comment** on the endpoint — useful for explaining a rejection or flagging something to double check.
- **Approve** — moves it to `approved`. It's now eligible for code generation, GitHub publishing, and will appear in the module's docs page and mock server.
- **Reject** — moves it back to `draft` (editable) so the Developer can fix it and resubmit.

Endpoints can also carry a `ticketRef` linking back to an external tracker issue, so a reviewer can cross-reference the original requirement while reviewing.

## Why this gate matters downstream

- The [docs page and mock server](/guides/docs-and-mock-server) for a module only ever show `approved`/`auto-approved` endpoints — a draft or pending endpoint is invisible to anyone consuming the docs, even if the project itself is public.
- [Publishing to GitHub](/guides/publishing-to-github) and [code generation](/guides/code-generation) work from whatever endpoints you select, but treat approval as your team's real signal that an endpoint is safe to ship — don't publish or generate from endpoints still in review as a matter of process.

## Doing this from the CLI

The same lifecycle is available from [`ckit`](/guides/ckit-cli): a Developer runs `ckit submit`, a Reviewer runs `ckit approve`/`ckit reject`, and anyone can check `ckit status` — useful for gating a CI pipeline on "all endpoints in this module are approved" before it's allowed to publish.
