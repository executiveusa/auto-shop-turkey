# Build stage
FROM node:26-alpine AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json ./
RUN npm install -g npm@latest && npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Production stage
FROM node:26-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/scripts ./scripts

RUN npm install -g vercel@latest railway@latest @shopify/cli@latest

EXPOSE 3000

CMD ["/bin/sh", "-c", "npm run build && npm start"]
