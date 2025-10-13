# Everett Auto Works SaaS Boilerplate

A localized, multi-tenant Next.js SaaS starter tailored for auto shops across Everett, WA and beyond. Forked conceptually from [ixartz/SaaS-Boilerplate](https://github.com/ixartz/SaaS-Boilerplate) and extended with service pages, multilingual content, AI agent hooks, and Shopmonkey integration scaffolding.

## Features

- ⚡️ **Next.js 14 + TypeScript** with Tailwind CSS and shadcn/ui-ready components
- 🌍 **Internationalization** via `next-intl` with English, Spanish, Turkish, and Ukrainian locales
- 🧰 **Auto-service pages** for engine repair, body shop, diagnostics, custom wraps, painting, and more
- 🗓️ **Appointment, quote, and inquiry forms** wired for Shopmonkey API synchronization
- 🤖 **AI customer service hooks** prepared for MCP-compatible agent frameworks and Voiceflow IVR
- 🚀 **Dockerized multi-stage build** with preinstalled Vercel, Railway, and Shopify CLIs for one-click deploy
- 🔄 **CI/CD templates** for GitHub Actions, Vercel, and Railway, plus infrastructure-as-code stubs
- 🛠️ **Prisma data models** for tenants, appointments, quotes, and reviews
- 📣 **Local SEO content** optimized for Everett, WA (98204) with Google Reviews embed and seasonal campaigns

## Getting Started

```bash
npm install
npm run dev
```

Environment variables live in `.env`; copy `.env.example` and update secrets (`SHOPMONKEY_API_KEY`, `DATABASE_URL`, etc.).

### Prisma

```bash
npx prisma generate
npx prisma migrate dev
```

## Docker

Build and run using the provided multi-stage Dockerfile:

```bash
docker build -t everett-auto .
docker run -p 3000:3000 everett-auto
```

The runtime image auto-runs `npm run build && npm start`, enabling “one-click” deployments.

## Deployment

- **Vercel**: deploy using `vercel deploy` inside the container or via GitHub integration.
- **Railway**: use `railway up` with the included CLI for infrastructure automation.
- **GitHub Actions**: see `.github/workflows/ci.yml` for automated testing and container builds.

## MCP & Agent Integrations

- Voiceflow, LemonAI, and AutoAgent can connect via the MCP pipelines defined under `config/mcp/` (stubs included for customization).
- Shopmonkey API scaffolding lives in `integrations/shopmonkey.ts` with REST hooks under `src/pages/api`.

## File Tree

```
.
├── Dockerfile
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── prisma/
│   └── schema.prisma
├── public/
│   └── locales/
├── src/
│   ├── pages/
│   ├── components/
│   ├── lib/
│   └── styles/
├── .github/workflows/ci.yml
└── config/
    └── deployment/
```

Customize colors, copy, or white-label assets to adapt the SaaS for additional regions or partner shops.
