# Mydues — Split expenses smartly with friends

Mydues is a Next.js app to track shared expenses, split bills (equal/percent/exact), manage groups, and settle up easily.

## Tech Stack
- Next.js 15 (App Router) + React 19
- Tailwind CSS 4 with `@tailwindcss/postcss` (see `postcss.config.mjs` and `tailwind.config.js`)
- Clerk for authentication and route protection (see `middleware.js`)
- Convex for backend/database and actions (see `convex/`)
- Inngest for background jobs/cron (see `lib/inngest/*` and `app/api/inngest/route.js`)
- shadcn/ui + Radix UI + Lucide icons

## Features
- Expense splitting with friends/groups
- Split types: equal, percentage, exact amounts
- Group management with admin/member roles
- Settlement tracking between users
- Authenticated dashboard with summaries and charts
- Automated emails: payment reminders (daily) & monthly spending insights (AI-powered with Gemini)

## Project Structure
- `app/` — App Router pages, layouts, API routes, global styles
  - `(Auth)/…` Clerk auth pages
  - `(main)/dashboard`, `expenses/new`, `contacts`, `groups/[id]`, `person/[id]`, `settlement/[type]/[id]`
  - `api/inngest/route.js` — Inngest handler
  - `globals.css` — Tailwind v4 + utilities
- `components/` — UI primitives and app components (shadcn/ui wrappers)
- `convex/` — Convex schema and functions (DB + actions)
- `lib/inngest/` — Inngest client & cron functions
- `hooks/` — React hooks (Convex + user state)
- `public/` — Static assets

## Environment Variables
Create `.env.local` with the following (examples only):
```
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Convex
NEXT_PUBLIC_CONVEX_URL=https://<your-convex-deployment>.convex.cloud

# Email (Resend)
RESEND_API_KEY=re_...

# Google Gemini (Spending insights)
GEMINI_API_KEY=AIza...
```

Used in code:
- Clerk in `app/layout.js` and `middleware.js`
- Convex URL in `components/convex-client-provider.jsx` and `lib/inngest/*`
- Resend key in `lib/inngest/payment-reminders.js` and `lib/inngest/spending-insights.js`
- Gemini key in `lib/inngest/spending-insights.js`

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Configure environment
   - Copy `.env.local` template above and fill with your keys
3. Start dev server
   ```bash
   npm run dev
   # opens http://localhost:3000
   ```

## NPM Scripts
- `dev` — Next dev (Turbopack)
- `build` — Next build
- `start` — Next start
- `lint` — Next lint

## Authentication & Protected Routes
Clerk protects these paths via `middleware.js`:
- `/dashboard`, `/expenses`, `/contacts`, `/groups`, `/person`, `/settlements` (and nested)
Unauthenticated users are redirected to Clerk sign-in.

## Database (Convex)
- Schema in `convex/schema.js` with tables: `users`, `expenses`, `groups`, `settlements`
- Convex client is provided via `components/convex-client-provider.jsx` using `NEXT_PUBLIC_CONVEX_URL`
- Server functions in `convex/*.js` (queries, mutations, actions like email)

## Background Jobs (Inngest)
- Inngest client in `lib/inngest/client.js`
- Route handler at `app/api/inngest/route.js`
- Cron functions:
  - `send-payment-reminders` (daily 10:00 UTC) — `lib/inngest/payment-reminders.js`
  - `generate-spending-insights` (1st of month 08:00 UTC) — `lib/inngest/spending-insights.js` (uses Gemini + sends email via Convex action)

## Styling (Tailwind CSS 4)
- PostCSS plugin: `@tailwindcss/postcss` configured in `postcss.config.mjs`
- Content scanning paths in `tailwind.config.js`
- Global styles and utilities in `app/globals.css` (e.g., `gradient`, `gradient-title`)

## UI
- Components in `components/ui/*` (shadcn/radix wrappers)
- App components like `Header`, `expense-list`, `group-balances`, etc.

## Deployment
- Recommended: Vercel (Next.js) + Convex (DB) + Clerk (Auth) + Resend (Email)
- Set all env vars in your hosting provider
- Ensure Inngest route (`/api/inngest`) is deployed and cron permissions configured in your Inngest account

## License
Proprietary — all rights reserved (update if you intend to open-source).
