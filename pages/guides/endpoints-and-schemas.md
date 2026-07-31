---
title: Building Endpoints & Schemas
description: Define an endpoint's method, path, and request/response schema — by hand or with AI assistance.
icon: route
---

# Building Endpoints & Schemas

An endpoint is the unit everything else in ContractKit operates on: review, code generation, docs, and publishing all work at the endpoint level.

## Adding an endpoint

Inside a module, click **Add Endpoint** and set:

| Field | Notes |
|-------|-------|
| **Endpoint Name** | A readable label, e.g. "Get User by ID". |
| **Method** | `GET`, `POST`, `PUT`, or `DELETE`. |
| **Path** | e.g. `/users/{id}`. |
| **Base Package** | Java package for the generated controller, e.g. `com.acme.api.users`. |
| **Base Mapping** | The `@RequestMapping` prefix for the controller class. |
| **Controller Name** / **Service Name** | Override the generated class names if you don't want the default. |

<Callout type="warning" title="PATCH isn't selectable yet">
  The data model supports `PATCH`, but the current endpoint form's method dropdown only offers `GET`/`POST`/`PUT`/`DELETE`. If you need `PATCH` semantics today, model it as a `PUT` and note the distinction in your description field.
</Callout>

## Building the schema

Each endpoint has a **request schema** and a **response schema**, edited as a table of fields. For each field, set:

- **Field Name**
- **Type** — `string`, `integer`, `number`, `boolean`, or `object`.
- **Array** — a checkbox, not a separate type. Check it to make any of the above a list (e.g. `string` + array = `string[]`).
- **Sample Value** — used in generated docs and mock responses; the placeholder hint changes based on the type you picked.

Use **Duplicate** on a row to quickly add a similar field, and the remove button to delete one. Click **Save Request** / **Save Response** once you're happy — this sets a client-side "saved" indicator; the actual persistence happens automatically as part of the project's ongoing sync to your workspace.

## Generating a schema with AI

If you'd rather describe the endpoint than build it field by field, use **Generate with AI**: type a plain-English description (e.g. "an endpoint that returns a paginated list of orders with id, status, and total") and ContractKit drafts the method, path, and both schemas for you to review and edit.

<Callout type="tip" title="Free plan limit">
  Free workspaces are capped at 10 endpoints total across all projects. Upgrade if you hit the limit while building out a larger API.
</Callout>

## Locking after submission

Once you submit an endpoint for review, every field — method, path, schema, annotations — becomes read-only. This is intentional: it guarantees a Reviewer approves exactly what was submitted, not something edited afterward. If it comes back rejected, it unlocks for editing again. See [Review & Approval Workflow](/guides/review-workflow).

## Next steps

Add [annotations](/guides/annotations) if your generated Spring Boot code needs `@PreAuthorize`, `@Loggable`, or `@JsonView`, then submit for review.
