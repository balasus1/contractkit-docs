---
title: Roles & Access Control
description: Set up your workspace, invite your team, assign roles, and issue API keys.
icon: shield-check
---

# Roles & Access Control

This guide is for the person setting up ContractKit for a team — usually whoever creates the workspace first.

## One workspace per account

Every account gets a single workspace (name, slug, description, icon color) created on first sign-up. The underlying data model supports multiple workspaces, but the workspace-creation UI currently blocks creating a second one — you'll see "Workspace limit reached" if you try. Plan your team structure around **one workspace containing all your projects**, distinguished by project name and visibility rather than separate workspaces.

## The three roles

<Callout type="info" title="Where roles apply">
  Roles are granted per project, not just globally — a person can be a Developer on one project and a Reviewer on another.
</Callout>

| Role | Can do | Cannot do |
|------|--------|-----------|
| **Admin** | Everything a Developer and Reviewer can, plus: connect/manage GitHub integration, issue and revoke API keys, manage feature flags, view the admin dashboard. | — |
| **Developer** | Create/edit projects and modules, build endpoints and schemas, submit endpoints for review, generate code. | Approve or reject endpoints they submitted; manage workspace-level integrations. |
| **Reviewer** | Approve or reject `pending` endpoints, comment on endpoints, view review status across projects. | Edit endpoint contents directly (endpoints lock once submitted). |

## Inviting members and granting project access

Project-level access is tracked per member (`projectMembers` + `projectMemberAccess`), so access is explicit rather than "everyone in the workspace sees everything":

1. Open a project's settings.
2. Add the teammate by their account and choose their role for that project (Developer or Reviewer).
3. Repeat per project — a Developer added to Project A has no access to Project B until also added there.

Admins always have workspace-wide visibility and don't need to be added project-by-project.

## Issuing API keys (for the CLI and CI)

The [`ckit` CLI](/guides/ckit-cli) and any CI pipeline authenticate with an API key instead of a browser session:

1. Go to **Dashboard → Settings → API Keys**.
2. Click **Generate Key**. The raw key (`ck_live_...`) is shown once — copy it immediately, since only its hash is stored server-side afterward.
3. Distribute it to the person or CI system that needs it. Revoke a key from the same screen at any time; revoked keys are rejected immediately (`Invalid or revoked API key`).

<Callout type="warning" title="Treat API keys as secrets">
  A key inherits the permissions of the account it was issued to. Store it in your CI provider's secret manager, never in a committed file — the same rule as any other credential.
</Callout>

## Connecting GitHub (Admin)

GitHub publishing (used by [Publishing to GitHub](/guides/publishing-to-github)) is connected once per workspace, by an Admin, via OAuth — not by pasting a personal access token. From the Integrations view, **Connect GitHub** requests `repo` and `workflow` scopes; the resulting token is encrypted at rest. A separate, optional **GitHub App installation** can also be linked to auto-discover existing OpenAPI specs in a repo — that's a distinct integration from the OAuth publish connection, and does not require the `repo`/`workflow` OAuth scopes.

## The admin dashboard

Admins get an additional dashboard view (not visible to Developers/Reviewers) surfacing workspace-wide activity: project status across the workspace, review throughput, and integration health. Use it to spot projects stuck in review or endpoints that have been `pending` for a long time.
