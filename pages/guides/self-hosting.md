---
title: Self-Hosting / Deployment
description: Run ContractKit yourself — required environment variables, database migrations, and deployment caveats.
icon: server
---

# Self-Hosting / Deployment

ContractKit is a Next.js app backed by Postgres (via Drizzle ORM) and Clerk for auth. This guide covers what it actually takes to run it outside of the hosted product.

## Environment variables

<Callout type="warning" title="The .env.example file is incomplete">
  The repo's `.env.example` is missing several variables the app requires at runtime. Set the fuller list below, not just what's in the example file, or you'll hit runtime errors on GitHub OAuth and token-encryption features specifically.
</Callout>

| Variable | Required for |
|----------|---------------|
| `DATABASE_URL` | Postgres connection (Neon or any Postgres). |
| `NEXT_PUBLIC_CLERK_*` / Clerk secret keys | Authentication (sign-in/sign-up, session). |
| `ENCRYPTION_KEY` | Encrypting stored GitHub OAuth tokens. **Not in `.env.example`.** |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | The GitHub OAuth publish flow. **Not in `.env.example`.** |
| `LINEAR_WEBHOOK_SECRET` | Linear tracker-issue sync, if you use it. **Not in `.env.example`.** |

## Database setup

Migrations are managed with `drizzle-kit`, configured in `drizzle.config.ts` against `src/lib/db/schema.ts`. There's no dedicated `npm run db:migrate` script — invoke drizzle-kit directly:

```bash
npx drizzle-kit push
```

<Callout type="info" title="Ignore prisma/schema.prisma">
  A legacy `prisma/schema.prisma` file exists in the repo but is unused — `prisma` isn't even a dependency. The real schema is the Drizzle one above.
</Callout>

## Running locally

```bash
npm install
npm run dev
```

Requires the environment variables above to be set in `.env.local` first.

## Docker

The included `Dockerfile` builds a 3-stage image (deps → builder → runner) using Next's standalone output. Before you rely on it as-is:

<Callout type="warning" title="Vestigial Prisma step">
  The builder stage runs `npx prisma generate` — leftover from before the schema moved to Drizzle. Since `prisma` isn't a project dependency, this step does nothing useful and just adds build time/network calls. It's safe to remove locally if you're customizing the Dockerfile; it doesn't break the build, but don't treat it as a required step.
</Callout>

## Scheduled jobs

`vercel.json` defines three cron jobs (`sync-tickets` daily, `sla-reminder` daily at 9am, `storage-cleanup` daily at 2am) using Vercel's cron syntax — these only run automatically on Vercel. If you're self-hosting elsewhere, you'll need your own scheduler (cron, a queue, etc.) to call these same routes on the same schedule; they won't fire on their own outside Vercel.

## Tests

Before deploying a change, run the test suite:

```bash
npm test                    # unit tests (Vitest)
npm run test:integration    # integration tests
```
