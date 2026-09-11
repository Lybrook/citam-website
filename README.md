# CITAM Kitale Website

A responsive Next.js website for CITAM Kitale, built with the App Router, TypeScript, Tailwind CSS, and reusable Radix/shadcn-style components.

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run production checks with:

```bash
npm run lint
npm run build
npm start
```

## Main routes

- `/` — homepage
- `/about` — church information
- `/contact` — contact form and church contact information
- `/events` — upcoming events and local registration pages
- `/gallery` — image gallery
- `/give` — M-Pesa giving flow
- `/ministries` — ministry directory
- `/sermons` — sermon directory and local detail pages
- `/media` — media library

## Integrations and security

The donation endpoint uses Safaricom Daraja STK Push. Set all `MPESA_*` variables in the deployment provider's encrypted environment-variable store. `MPESA_ENVIRONMENT=production` is the default; set it to `sandbox` only for testing. The callback URL must be publicly reachable over HTTPS and should point to `/api/donate/callback`. The callback route accepts an optional `x-mpesa-callback-token` value when `MPESA_CALLBACK_TOKEN` is configured.

The public contact and newsletter endpoints validate input, cap field lengths, avoid echoing personal data, and apply lightweight per-IP rate limiting. They currently acknowledge submissions locally; connect them to the church's approved mail provider or database before relying on them for operational record-keeping.

Never commit `.env`, `.env.local`, Daraja credentials, payment tokens, donor data, or callback payloads. Use `.env.example` as a template only.

## Content and assets

Page content is maintained in `src/app/data`. Images are served from `public/`. Replace dated event/sermon records with approved church content before launch.

## Deployment

Deploy to a Node-compatible Next.js host such as Vercel. Configure production environment variables, set `MPESA_CALLBACK_URL` to the deployed HTTPS URL, and verify a small test donation with the church finance team before announcing online giving.
