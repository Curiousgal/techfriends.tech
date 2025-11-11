#!/bin/bash

# Azure App Service Deployment Script
# This script deploys the application to Azure App Service

set -e

# Configuration
RESOURCE_GROUP=${1:-"techfriends-rg"}
APP_SERVICE_PLAN=${2:-"techfriends-plan"}
WEB_APP_NAME=${3:-"techfriends-app"}
LOCATION=${4:-"eastus"}
SKU=${5:-"B1"}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Azure App Service Deployment Script${NC}"
echo "========================================"

# Check prerequisites
if ! command -v az &> /dev/null; then
    echo -e "${RED}Azure CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Create resource group
echo -e "${YELLOW}Creating resource group: $RESOURCE_GROUP${NC}"
az group create \
  --name "$RESOURCE_GROUP" \
  --location "$LOCATION" || true

# Create App Service Plan
echo -e "${YELLOW}Creating App Service Plan: $APP_SERVICE_PLAN${NC}"
az appservice plan create \
  --name "$APP_SERVICE_PLAN" \
  --resource-group "$RESOURCE_GROUP" \
  --sku "$SKU" \
  --is-linux || true

# Create Web App
echo -e "${YELLOW}Creating Web App: $WEB_APP_NAME${NC}"
az webapp create \
  --resource-group "$RESOURCE_GROUP" \
  --plan "$APP_SERVICE_PLAN" \
  --name "$WEB_APP_NAME" \
  --runtime "NODE|18-lts" || true

# Configure app settings
echo -e "${YELLOW}Configuring app settings...${NC}"
az webapp config appsettings set \
  --resource-group "$RESOURCE_GROUP" \
  --name "$WEB_APP_NAME" \
  --settings \
    VITE_SUPABASE_URL="${VITE_SUPABASE_URL}" \
    VITE_SUPABASE_ANON_KEY="${VITE_SUPABASE_ANON_KEY}" \
    VITE_APP_ENV="production" \
    VITE_APP_URL="https://${WEB_APP_NAME}.azurewebsites.net" \
    NODE_ENV="production"

# Configure startup command
echo -e "${YELLOW}Configuring startup command...${NC}"
az webapp config set \
  --resource-group "$RESOURCE_GROUP" \
  --name "$WEB_APP_NAME" \
  --startup-file "web.config"

# Enable logging
echo -e "${YELLOW}Enabling logging...${NC}"
az webapp log config \
  --resource-group "$RESOURCE_GROUP" \
  --name "$WEB_APP_NAME" \
  --web-server-logging filesystem \
  --level verbose

# Build and prepare for deployment
echo -e "${YELLOW}Building application...${NC}"
cd Techfriends.tech
npm ci
npm run build:azure

# Deploy using ZIP
echo -e "${YELLOW}Preparing deployment package...${NC}"
zip -r -q deploy.zip dist web.config

echo -e "${YELLOW}Deploying to Azure App Service...${NC}"
az webapp deployment source config-zip \
  --resource-group "$RESOURCE_GROUP" \
  --name "$WEB_APP_NAME" \
  --src deploy.zip

# Clean up
rm deploy.zip

# Get the app URL
APP_URL="https://${WEB_APP_NAME}.azurewebsites.net"

echo -e "${GREEN}Deployment successful!${NC}"
echo -e "${GREEN}Application URL: $APP_URL${NC}"
echo ""
echo "To view logs:"
echo "  az webapp log tail --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME"
echo ""
echo "To configure custom domain:"
echo "  az webapp config hostname add --resource-group $RESOURCE_GROUP --webapp-name $WEB_APP_NAME --hostname your-domain.com"
