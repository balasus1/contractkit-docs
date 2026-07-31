---
title: Docs Page, Mock Server & Testing
description: Every module gets a live docs page you can try requests against, and a mock server your frontend can build against today.
icon: play-circle
---

# Docs Page, Mock Server & Testing

Once you have approved endpoints, ContractKit gives you two ways to actually interact with the contract — not just read it.

## The module docs page

Every module has a docs page at `/docs/<projectId>/<moduleId>`, rendering the module's live OpenAPI spec through Swagger UI with **Try it out** enabled.

<Callout type="warning" title="Only approved endpoints appear">
  The docs page only shows endpoints with `reviewStatus` of `approved` or `auto-approved` — anything still `draft` or `pending` is invisible here, even to you. If an endpoint you just built isn't showing up, check the [review workflow](/guides/review-workflow) first.
</Callout>

Access depends on the project's visibility:

- **Public** projects: anyone with the link can view the docs page (signed-out visitors see a "Powered by ContractKit" footer and a CTA).
- **Private** projects: visitors must sign in and have project access.

Because it's Swagger UI's stock "Try it out" panel, whatever auth scheme your OpenAPI spec declares (bearer token, API key, etc.) is what you'll be prompted for when you try a request — there's no separate custom test-client UI beyond this.

## The mock server

Point a frontend at the mock server to build against realistic responses before a real backend exists:

```text
/mock/<projectId>/<moduleId>/<path>
```

- Supports `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `OPTIONS`, with CORS open by default so you can call it directly from a local frontend dev server.
- Matches your request against the module's approved endpoints and synthesizes a response shaped like the endpoint's response schema, including sample values.
- Add `?count=N` (1–50, default 5) to control how many items come back for list-shaped responses.

<Callout type="tip" title="Verify sign-in requirements before relying on this">
  The mock server currently enforces the same sign-in/project-access check as the rest of the dashboard, even on public projects. If you're building an anonymous demo flow around the mock URL, test it signed-out first rather than assuming it's open.
</Callout>

## The public contract viewer

For sharing a clean, read-only view of a contract (no dashboard chrome), public projects also expose:

```text
/c/<slug>
```

This renders the contract with a standalone API-reference viewer — handy for linking out to partners or in a README, separate from the authenticated docs page.

## Putting it together

A typical loop: build and approve an endpoint → check it renders correctly on the docs page → point your frontend's API client at the mock server URL for that module → develop the UI against realistic mock data → swap the base URL to your real backend once it's implemented from the [generated code](/guides/code-generation).
