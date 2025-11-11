# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY Techfriends.tech/package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY Techfriends.tech/ .

# Build application
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ARG VITE_APP_ENV=production
ARG VITE_APP_URL

RUN npm run build

# Production stage - Use nginx to serve the static files
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy staticwebapp.config.json for reference (informational)
COPY staticwebapp.config.json /usr/share/nginx/html/

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/index.html || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
