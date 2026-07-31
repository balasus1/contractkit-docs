---
title: Security Model
description: How authentication, secrets, and untrusted-input handling actually work in ContractKit.
icon: lock
---

# Security Model

## Authentication

ContractKit has two authentication mechanisms, used by two different callers:

- **Clerk session** — the web dashboard. Checked per-route via Clerk's server-side `auth()` helper, since there's no global auth middleware (see [Architecture](/concepts/architecture)). This means route-level protection is a per-route responsibility, not a blanket guarantee.
- **API keys** (`x-api-key` header) — the [`ckit` CLI](/guides/ckit-cli) and CI. Keys are hashed server-side; only the raw value is ever shown to you, once, at creation. Revoking a key takes effect immediately.

Treat an API key exactly like a password: store it in your CI secret manager, never in a committed file. See [Roles & Access Control](/guides/roles-and-access) for issuing and revoking keys.

## GitHub tokens are encrypted at rest

When an Admin connects GitHub for [publishing](/guides/publishing-to-github), the OAuth access token is stored **encrypted**, not in plaintext, keyed to that user. This is separate from the token-less [GitHub App installation](/guides/publishing-to-github) used for spec discovery.

## Protecting against SSRF on contract import

[Importing a contract](/guides/importing-contracts) from a URL means the server fetches a URL you supply — a classic SSRF risk if unguarded. ContractKit blocks requests to internal/private address ranges (localhost, loopback, link-local, RFC 1918 private ranges) before fetching.

<Callout type="info" title="Two separate implementations exist">
  There are currently two independent SSRF guards in the codebase — one on the import route (a simpler string-prefix check) and one on the OpenAPI proxy route (a more rigorous check that resolves DNS and inspects the resulting IP, catching DNS-rebinding attacks the simpler check would miss). Functionally both block the obvious cases; if you're evaluating this for a compliance review, ask which route your integration actually uses.
</Callout>

## Review as a security control, not just a workflow step

The `draft → pending → approved` lifecycle isn't only for correctness — it's what keeps unreviewed contract changes out of your published docs and mock server. Only `approved`/`auto-approved` endpoints are ever surfaced publicly; a `draft` or `pending` endpoint (even one with a security-sensitive `@PreAuthorize` change) is invisible to anyone consuming the module externally until a Reviewer signs off. See [Review & Approval Workflow](/guides/review-workflow).

## A known inconsistency worth knowing about

The [mock server](/guides/docs-and-mock-server) currently enforces the same sign-in/project-access check as the rest of the dashboard, even for modules belonging to a public project. If you're building a flow that assumes an anonymous visitor can hit the mock server URL directly, verify that behavior yourself first rather than assuming it from the public docs page context.

## Annotations aren't a substitute for real authorization review

`@PreAuthorize` expressions you configure in [Annotations](/guides/annotations) are generated verbatim into your Spring Boot controller — ContractKit doesn't validate that the expression is actually secure or correct for your domain. Review generated authorization logic the same way you'd review any other security-sensitive code before shipping it.
