# Docker & Container Deployment Guide

This guide explains how to deploy the Tech Startup application using Docker containers.

## Table of Contents

1. [Docker Basics](#docker-basics)
2. [Local Docker Testing](#local-docker-testing)
3. [Azure Container Instances (ACI)](#azure-container-instances)
4. [Azure Container Registry](#azure-container-registry)
5. [Docker on Azure App Service](#docker-on-azure-app-service)

## Docker Basics

### Prerequisites

- Docker Desktop installed ([Download](https://www.docker.com/products/docker-desktop))
- Docker Compose (included with Docker Desktop)
- Azure CLI (for Azure deployments)
- Environment variables set:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

### Dockerfile Overview

The provided `Dockerfile` uses a multi-stage build process:

1. **Builder Stage**: Node.js Alpine image
   - Installs dependencies
   - Builds the React application
   - Creates optimized dist folder

2. **Production Stage**: Nginx Alpine image
   - Serves built React files
   - Includes optimized nginx configuration
   - Small final image size (~50MB)

## Local Docker Testing

### Build Docker Image Locally

```bash
docker build \
  --build-arg VITE_SUPABASE_URL=your_supabase_url \
  --build-arg VITE_SUPABASE_ANON_KEY=your_supabase_key \
  -t techfriends-app:latest \
  .
```

### Run Docker Container

```bash
# Run the container
docker run -p 80:8080 techfriends-app:latest

# Visit http://localhost in your browser
```

### Using Docker Compose (Recommended for Testing)

```bash
# Create .env file with your variables
cat > .env << EOF
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
EOF

# Start the application
docker-compose up

# Visit http://localhost in your browser
```

### Useful Docker Commands

```bash
# View running containers
docker ps

# View logs
docker logs <container_id>

# Stop container
docker stop <container_id>

# Remove container
docker rm <container_id>

# Remove image
docker rmi techfriends-app:latest
```

## Azure Container Instances

Azure Container Instances (ACI) is the easiest way to run containers without managing infrastructure.

### Method 1: Using Deploy Script (Recommended)

```bash
# Make the script executable
chmod +x scripts/deploy-to-aci.sh

# Set environment variables
export VITE_SUPABASE_URL=your_supabase_url
export VITE_SUPABASE_ANON_KEY=your_supabase_key

# Run the deployment script
scripts/deploy-to-aci.sh [resource-group] [registry-name] [location]

# Example:
scripts/deploy-to-aci.sh techfriends-rg techfriendsacr eastus
```

### Method 2: Manual Azure CLI Deployment

```bash
# Create resource group
az group create \
  --name techfriends-rg \
  --location eastus

# Deploy container
az container create \
  --resource-group techfriends-rg \
  --name techfriends-app \
  --image techfriends-app:latest \
  --port 80 \
  --dns-name-label techfriends-app \
  --environment-variables \
    VITE_SUPABASE_URL=your_url \
    VITE_SUPABASE_ANON_KEY=your_key \
    VITE_APP_ENV=production \
  --cpu 1 \
  --memory 1 \
  --restart-policy Always

# Get the FQDN
az container show \
  --resource-group techfriends-rg \
  --name techfriends-app \
  --query ipAddress.fqdn \
  --output tsv
```

### Monitor ACI Container

```bash
# View logs
az container logs \
  --resource-group techfriends-rg \
  --name techfriends-app

# View container properties
az container show \
  --resource-group techfriends-rg \
  --name techfriends-app

# View events
az container list-logs \
  --resource-group techfriends-rg \
  --name techfriends-app
```

### Delete ACI Container

```bash
az container delete \
  --resource-group techfriends-rg \
  --name techfriends-app \
  --yes
```

## Azure Container Registry

Store and manage Docker images in Azure.

### Create Container Registry

```bash
# Create registry
az acr create \
  --resource-group techfriends-rg \
  --name techfriendsacr \
  --sku Basic

# Get login credentials
az acr credential show \
  --resource-group techfriends-rg \
  --name techfriendsacr
```

### Push Image to Registry

```bash
# Get registry URL
REGISTRY_URL=$(az acr show \
  --resource-group techfriends-rg \
  --name techfriendsacr \
  --query loginServer \
  -o tsv)

# Login to registry
az acr login --name techfriendsacr

# Tag image
docker tag techfriends-app:latest $REGISTRY_URL/techfriends-app:latest

# Push to registry
docker push $REGISTRY_URL/techfriends-app:latest

# List images
az acr repository list --name techfriendsacr
```

### Deploy from Registry to ACI

```bash
az container create \
  --resource-group techfriends-rg \
  --name techfriends-app \
  --image $REGISTRY_URL/techfriends-app:latest \
  --registry-login-server $REGISTRY_URL \
  --registry-username <username> \
  --registry-password <password> \
  --port 80 \
  --dns-name-label techfriends-app \
  --cpu 1 \
  --memory 1
```

## Docker on Azure App Service

Run Docker containers on Azure App Service for more control and scalability.

### Deploy to App Service with Docker

```bash
# Create resource group
az group create \
  --name techfriends-rg \
  --location eastus

# Create App Service Plan (must be Linux)
az appservice plan create \
  --name techfriends-plan \
  --resource-group techfriends-rg \
  --sku B1 \
  --is-linux

# Create Web App with Docker
az webapp create \
  --resource-group techfriends-rg \
  --plan techfriends-plan \
  --name techfriends-app \
  --deployment-container-image-name-user techfriends-app:latest

# Configure Docker image
az webapp config container set \
  --name techfriends-app \
  --resource-group techfriends-rg \
  --docker-custom-image-name $REGISTRY_URL/techfriends-app:latest \
  --docker-registry-server-url https://$REGISTRY_URL \
  --docker-registry-server-user <username> \
  --docker-registry-server-password <password>

# Configure app settings
az webapp config appsettings set \
  --resource-group techfriends-rg \
  --name techfriends-app \
  --settings \
    VITE_SUPABASE_URL=your_url \
    VITE_SUPABASE_ANON_KEY=your_key \
    WEBSITES_PORT=80
```

### Enable continuous deployment from ACR

```bash
az webapp deployment container config \
  --name techfriends-app \
  --resource-group techfriends-rg \
  --enable-cd true
```

## Nginx Configuration

The Dockerfile uses a custom nginx configuration (`nginx.conf`) that:

- Serves the React SPA from the dist folder
- Implements SPA routing (all requests go to index.html)
- Enables GZIP compression
- Sets security headers
- Configures caching for static assets
- Includes health check endpoint at `/health`

### Customize Nginx Configuration

Edit `nginx.conf` to:
- Change port numbers
- Add custom headers
- Modify caching strategies
- Add SSL/TLS configuration

## Performance Optimization

### Docker Image Size

Current image size: ~50MB (optimized)

Reduce further by:
- Using Alpine Linux (already used)
- Multi-stage builds (already used)
- Removing unused dependencies from package.json

### Container Performance

- **CPU**: 1 core recommended minimum
- **Memory**: 512MB-1GB recommended
- **Disk**: 10GB recommended for logging

### Monitoring

```bash
# View resource usage
docker stats

# Check logs
docker logs -f <container_id>

# View processes in container
docker exec <container_id> ps aux
```

## Troubleshooting

### Container won't start

```bash
# Check image
docker image ls

# Check build logs
docker build --progress=plain .

# Run interactive shell
docker run -it techfriends-app:latest /bin/sh
```

### Port already in use

```bash
# Use different port
docker run -p 8080:80 techfriends-app:latest

# Check what's using port 80
lsof -i :80
```

### Access denied errors

```bash
# Check permissions
docker exec <container_id> ls -la /usr/share/nginx/html

# View container logs
docker logs <container_id>
```

## Cost Estimation

### Azure Container Instances
- Pay per second of execution
- ~$0.0000015/second for 1 vCPU, 1GB RAM
- ~$40/month for continuous running

### Azure Container Registry
- Basic: $5/month
- Storage: $0.10 per GB/month

### Azure App Service (Linux)
- B1: ~$13/month
- S1: ~$65/month

## Next Steps

1. Test locally with Docker Compose
2. Deploy to Azure Container Instances
3. Set up continuous deployment from ACR
4. Monitor container performance
5. Scale based on traffic needs

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Azure Container Instances Docs](https://docs.microsoft.com/en-us/azure/container-instances/)
- [Azure Container Registry Docs](https://docs.microsoft.com/en-us/azure/container-registry/)
- [Nginx Documentation](https://nginx.org/en/docs/)
