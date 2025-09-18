# Use official Node.js LTS as the base image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies in a separate layer for better caching
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Copy .env
# COPY .env ./

# If you use pnpm
# RUN npm install -g pnpm && pnpm install

# If you use npm
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Next.js app
RUN npm run build

# Production image, copy from base
FROM node:18-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Install only production dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm install --omit=dev

# Copy built files and required sources
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Run the Next.js app
CMD ["npm", "start"]