#!/bin/sh
set -euo pipefail

echo "Running post-deploy migrations"
npx prisma migrate deploy
