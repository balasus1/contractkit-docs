---
title: Configuration & Data Model
description: Precise field-by-field reference for Workspace, Project, Module, and Endpoint.
icon: database
---

# Configuration & Data Model

This is the exact shape of ContractKit's core entities, as defined in the application's real schema (Drizzle ORM — not the legacy, unused `prisma/schema.prisma` file that also exists in the source tree).

## Workspace

| Field | Type | Notes |
|-------|------|-------|
| `name` | string | |
| `slug` | string | URL-safe identifier. |
| `description` | string | Optional. |
| `iconColor` | string | Cosmetic, shown in the workspace switcher. |
| `isDefault` | boolean | One workspace per account today — see [Roles & Access Control](/guides/roles-and-access). |

## Project

| Field | Type | Notes |
|-------|------|-------|
| `name` | string | |
| `slug` | string | |
| `copyrightOwner` | string | Written into generated file headers. |
| `licenseName` / `licenseUrl` / `licenseSpdxId` | string | Set from the license picker at project creation. |
| `status` | enum | Defaults to `DRAFT`. |
| `visibility` | `"public"` \| `"private"` | Controls who can view the module docs page. |
| `skipApproval` | boolean | If true, endpoints in this project auto-approve instead of requiring manual review. |
| `workspaceId` | FK | Owning workspace. |
| `githubOwner` / `githubRepo` | string | Linked publish target, if configured. |
| `specFilePath` / `specFormat` | string | Where/how the spec is discovered via the GitHub App integration. |

## Module

| Field | Type | Notes |
|-------|------|-------|
| `name` | string | e.g. "Core Module" (auto-created on project creation). |
| `apiVersion` | string | Defaults to `"v1"`. |
| `skipApproval` | boolean | Same auto-approve behavior as the project-level flag, scoped to this module. |
| `projectId` | FK | |

## Endpoint

| Field | Type | Notes |
|-------|------|-------|
| `name` | string | |
| `method` | enum | `GET`/`POST`/`PUT`/`DELETE`/`PATCH` in the schema — see the [endpoints guide](/guides/endpoints-and-schemas) for the current UI's method-selector limitation. |
| `path` | string | e.g. `/users/{id}`. |
| `basePackage` / `baseMapping` | string | Java package + `@RequestMapping` prefix. |
| `controllerName` / `serviceName` | string | Generated class name overrides. |
| `annotations` | jsonb | `preAuthorizeEnabled`/`preAuthorizeExpression`, `loggableEnabled`/`loggableAction`, `jsonViewEnabled`/`jsonViewClass` — see [Annotations](/guides/annotations). |
| `requestFields` / `responseFields` | jsonb array | Each field: `fieldName`, `type` (`string`/`integer`/`number`/`boolean`/`object`), `isArray`, `sampleValue`, optional `comment`. |
| `reviewStatus` | enum | `draft`/`pending`/`approved`/`rejected`/`auto-approved` — see [Review & Approval Workflow](/guides/review-workflow). |
| `reviewedBy` / `assignedReviewerId` | FK | |
| `ticketRef` | string | Link to an external tracker issue. |
| `submitConformanceResult` | jsonb | Validation result captured at submission time. |

## Related entities worth knowing about

| Table | Purpose |
|-------|---------|
| `endpointComments` | Reviewer/developer comments on a specific endpoint. |
| `endpointSnapshots` | Versioned history of an endpoint's contract over time. |
| `publishRuns` | One row per [GitHub publish](/guides/publishing-to-github) attempt — status, changelog, rollback data. |
| `projectMembers` / `projectMemberAccess` | Per-project role grants (Developer/Reviewer) — see [Roles & Access Control](/guides/roles-and-access). |
| `apiKeys` | Hashed API keys used by the [ckit CLI](/guides/ckit-cli) and REST API. |
| `githubConnections` | Encrypted OAuth token per user, for publishing. |
| `githubAppInstallations` | Separate GitHub App installs, used for spec discovery rather than publishing. |
| `notifications` / `auditEvents` | In-app notifications and an audit trail of workspace activity. |
