# Azure Deployment Guide for Tech Startup

This guide explains how to deploy the Tech Startup application to Microsoft Azure.

## Overview

The Tech Startup application is a React + Vite SPA (Single Page Application) designed to be hosted on Azure. Two deployment options are provided:

1. **Azure Static Web Apps** (Recommended) - Best for SPAs, serverless, auto-scaling
2. **Azure App Service** - Traditional hosting, more control, supports custom API backends

## Prerequisites

- Microsoft Azure subscription
- Node.js 16+ and npm installed locally
- Git repository with GitHub or Azure DevOps
- Supabase account (for backend services)

## Option 1: Azure Static Web Apps (Recommended)

Azure Static Web Apps is the best choice for this React SPA application. It provides:
- Zero-cost static hosting tier available
- Automatic CI/CD through GitHub Actions
- Global content delivery
- Built-in serverless API support

### Step 1: Create Azure Static Web App

```bash
# Option A: Using Azure Portal
1. Go to https://portal.azure.com
2. Click "Create a resource"
3. Search for "Static Web App"
4. Click "Create"
5. Configure:
   - Resource group: Create new or select existing
   - Name: Choose your app name (e.g., techfriends-app)
   - Region: Select closest to your users
   - Plan type: Free (or Standard if you need more features)
   - GitHub account: Connect your account
   - Organization: Select your GitHub organization
   - Repository: Select techfriends.tech
   - Branch: Select main (or your primary branch)
   - Build presets: React
   - App location: Techfriends.tech
   - API location: (leave empty unless you have serverless functions)
   - Output location: dist
6. Click "Review + Create" then "Create"
```

### Step 2: GitHub Secrets Configuration

After creation, Azure will auto-generate a GitHub Actions workflow. You also need to set environment secrets:

```bash
# In your GitHub repository:
1. Go to Settings → Secrets and variables → Actions
2. Add these secrets:
   - SUPABASE_URL: Your Supabase project URL
   - SUPABASE_ANON_KEY: Your Supabase anonymous key
   - APP_URL: Your Azure Static Web App URL (provided after deployment)
```

### Step 3: Deploy

Deployment happens automatically when you push to the configured branch.

```bash
# Push to trigger deployment
git push origin main
```

Monitor the deployment in:
- GitHub: Your repository → Actions tab
- Azure Portal: Your Static Web App resource

### Step 4: Verify Deployment

1. Go to your Static Web App in Azure Portal
2. Click on the URL to visit your application
3. Test all functionality to ensure it works correctly

## Option 2: Azure App Service

Use this option if you need more control or plan to add custom backend services.

### Step 1: Create App Service Plan

```bash
# Using Azure CLI
az group create --name techfriends-rg --location eastus

az appservice plan create \
  --name techfriends-plan \
  --resource-group techfriends-rg \
  --sku B1 \
  --is-linux
```

### Step 2: Create Web App

```bash
az webapp create \
  --resource-group techfriends-rg \
  --plan techfriends-plan \
  --name techfriends-app \
  --runtime "NODE|18-lts"
```

### Step 3: Configure Deployment

```bash
# Using GitHub deployment
az webapp deployment source config \
  --name techfriends-app \
  --resource-group techfriends-rg \
  --repo-url https://github.com/YOUR_USERNAME/techfriends.tech \
  --branch main \
  --manual-integration

# Or configure continuous deployment via Azure Portal
```

### Step 4: Configure Environment Variables

In Azure Portal → App Service → Configuration:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_APP_ENV=production
VITE_APP_URL=https://techfriends-app.azurewebsites.net
```

### Step 5: Deploy

```bash
# Using Git push deployment
git push azure main
```

## Environment Variables

The application uses these environment variables. Set them in your deployment platform:

### Required
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

### Optional
- `VITE_APPINSIGHTS_INSTRUMENTATION_KEY` - For Azure Application Insights monitoring
- `VITE_APP_ENV` - Set to "production"
- `VITE_APP_URL` - Your application URL

## Building Locally

To test the production build locally:

```bash
cd Techfriends.tech

# Install dependencies
npm install

# Build for production
npm run build:azure

# Preview production build
npm run preview
```

## Monitoring & Logging

### Azure Static Web Apps
- Monitor in Azure Portal → Resource Overview
- View logs in Azure Portal → Log stream
- Set up Application Insights for detailed analytics

### Azure App Service
- Azure Portal → App Service → Monitoring
- Log Stream: View real-time application logs
- Application Insights: Set up for detailed monitoring
- Application Insights → Alerts: Create alerts for errors/performance

## Continuous Deployment (CI/CD)

The provided GitHub Actions workflow (`.github/workflows/azure-static-web-apps-deploy.yml`) handles:

1. Building the React application
2. Running any tests
3. Deploying to Azure Static Web Apps
4. Cleaning up preview environments when PRs are closed

### Customizing the Workflow

Edit `.github/workflows/azure-static-web-apps-deploy.yml` to:
- Add tests: `npm run test` before build step
- Change trigger branches
- Add additional build steps

## Troubleshooting

### Static Web App shows "Are you lost" page
- Check staticwebapp.config.json is in the root directory
- Verify app_location in workflow is set to "Techfriends.tech"
- Clear browser cache and reload

### Environment variables not loading
- GitHub: Check secrets are set correctly in Settings → Secrets
- App Service: Check Configuration settings in Azure Portal
- Ensure variable names match exactly (VITE_* prefix is important)

### Build fails in GitHub Actions
1. Check GitHub Actions logs in your repository
2. Verify Node.js version compatibility
3. Ensure all dependencies are in package.json
4. Check that the build command works locally

### Supabase connection errors
- Verify VITE_SUPABASE_URL is correct (include https://)
- Check VITE_SUPABASE_ANON_KEY is valid
- Ensure Supabase project is active
- Check Supabase authentication policies

## Performance Optimization

### For Static Web Apps
- Content is automatically cached and delivered via CDN
- No additional configuration needed
- Check performance in Azure Portal → Overview

### For App Service
1. Enable compression in web.config (already configured)
2. Use browser caching with HTTP headers
3. Consider adding Application Insights for monitoring
4. Monitor performance metrics in Azure Portal

## Cost Estimation

### Azure Static Web Apps
- Free tier: Up to 100 GB bandwidth/month, great for development
- Standard tier: More features, higher limits

### Azure App Service
- B1 plan: ~$10/month (basic hosting)
- Scale up as traffic increases
- Add Application Insights for monitoring (~$2-10/month depending on usage)

## Cleanup

To delete resources and stop charges:

### Static Web App
```bash
# Azure Portal or CLI
az staticwebapp delete --name techfriends-app --resource-group techfriends-rg
```

### App Service
```bash
# Delete resource group (deletes all resources)
az group delete --name techfriends-rg
```

## Support & Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Azure App Service Documentation](https://docs.microsoft.com/en-us/azure/app-service/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Supabase Documentation](https://supabase.com/docs)

## Next Steps

1. Deploy to Azure using Option 1 (Static Web Apps)
2. Monitor application performance
3. Set up custom domain (optional)
4. Configure SSL/TLS certificate (auto-configured by Azure)
5. Implement CI/CD pipeline improvements as needed
