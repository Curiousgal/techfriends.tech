#!/bin/bash

# Azure Container Instances Deployment Script
# This script deploys the application to Azure Container Instances

set -e

# Configuration
RESOURCE_GROUP=${1:-"techfriends-rg"}
REGISTRY_NAME=${2:-"techfriendsacr"}
IMAGE_NAME="techfriends-app"
CONTAINER_NAME="techfriends-app"
CONTAINER_GROUP_NAME="techfriends-aci"
LOCATION=${3:-"eastus"}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Azure Container Instances Deployment Script${NC}"
echo "================================================"

# Check prerequisites
if ! command -v az &> /dev/null; then
    echo -e "${RED}Azure CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Create resource group if it doesn't exist
echo -e "${YELLOW}Creating resource group: $RESOURCE_GROUP${NC}"
az group create --name "$RESOURCE_GROUP" --location "$LOCATION" || true

# Create container registry if it doesn't exist
echo -e "${YELLOW}Creating container registry: $REGISTRY_NAME${NC}"
az acr create \
  --resource-group "$RESOURCE_GROUP" \
  --name "$REGISTRY_NAME" \
  --sku Basic \
  --admin-enabled true || true

# Get registry credentials
REGISTRY_URL=$(az acr show --resource-group "$RESOURCE_GROUP" --name "$REGISTRY_NAME" --query loginServer -o tsv)
REGISTRY_USERNAME=$(az acr credential show --resource-group "$RESOURCE_GROUP" --name "$REGISTRY_NAME" --query username -o tsv)
REGISTRY_PASSWORD=$(az acr credential show --resource-group "$RESOURCE_GROUP" --name "$REGISTRY_NAME" --query "passwords[0].value" -o tsv)

echo -e "${GREEN}Registry URL: $REGISTRY_URL${NC}"

# Build and push Docker image
echo -e "${YELLOW}Building Docker image...${NC}"
docker build \
  --build-arg VITE_SUPABASE_URL="${VITE_SUPABASE_URL}" \
  --build-arg VITE_SUPABASE_ANON_KEY="${VITE_SUPABASE_ANON_KEY}" \
  -t "$REGISTRY_URL/$IMAGE_NAME:latest" \
  .

echo -e "${YELLOW}Pushing Docker image to registry...${NC}"
docker login "$REGISTRY_URL" -u "$REGISTRY_USERNAME" -p "$REGISTRY_PASSWORD"
docker push "$REGISTRY_URL/$IMAGE_NAME:latest"

# Deploy to Azure Container Instances
echo -e "${YELLOW}Deploying to Azure Container Instances...${NC}"
az container create \
  --resource-group "$RESOURCE_GROUP" \
  --name "$CONTAINER_GROUP_NAME" \
  --image "$REGISTRY_URL/$IMAGE_NAME:latest" \
  --registry-login-server "$REGISTRY_URL" \
  --registry-username "$REGISTRY_USERNAME" \
  --registry-password "$REGISTRY_PASSWORD" \
  --port 80 \
  --protocol TCP \
  --dns-name-label "$CONTAINER_NAME" \
  --environment-variables \
    VITE_SUPABASE_URL="${VITE_SUPABASE_URL}" \
    VITE_SUPABASE_ANON_KEY="${VITE_SUPABASE_ANON_KEY}" \
    VITE_APP_ENV="production" \
    VITE_APP_URL="http://${CONTAINER_NAME}.${LOCATION}.azurecontainer.io" \
  --cpu 1 \
  --memory 1

# Get the public IP
echo -e "${YELLOW}Retrieving application URL...${NC}"
FQDN=$(az container show --resource-group "$RESOURCE_GROUP" --name "$CONTAINER_GROUP_NAME" --query ipAddress.fqdn -o tsv)

echo -e "${GREEN}Deployment successful!${NC}"
echo -e "${GREEN}Application URL: http://${FQDN}${NC}"
echo ""
echo "To view logs:"
echo "  az container logs --resource-group $RESOURCE_GROUP --name $CONTAINER_GROUP_NAME"
echo ""
echo "To delete the container:"
echo "  az container delete --resource-group $RESOURCE_GROUP --name $CONTAINER_GROUP_NAME --yes"
