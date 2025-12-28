# Robotable - GitHub Pages Deployment Guide

This guide will help you deploy Robotable to GitHub Pages, making it accessible via a URL like:
`https://[your-username].github.io/[repository-name]/`

## Prerequisites

- A GitHub account
- This repository pushed to GitHub

## Deployment Steps

### Step 1: Push Code to GitHub

Make sure all your code is committed and pushed to the `main` branch of your GitHub repository.

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. In the left sidebar, click on **Pages**
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Click **Save**

### Step 3: Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Trigger on every push to the `main` branch
- Install dependencies
- Build the Next.js static export
- Deploy to GitHub Pages

### Step 4: Access Your App

After the workflow completes (usually 2-3 minutes), your app will be available at:

```
https://[your-username].github.io/[repository-name]/
```

For example, if your username is `johndoe` and repo is `robotable`:
```
https://johndoe.github.io/robotable/
```

## Manual Build (Optional)

To test the static export locally:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

You can test them locally with:

```bash
npx serve out
```

## Configuration Files

- **next.config.ts**: Configured for static export with `output: 'export'`
- **.github/workflows/deploy.yml**: GitHub Actions workflow for automatic deployment
- **public/.nojekyll**: Prevents GitHub Pages from ignoring Next.js files

## Troubleshooting

### Build Fails
- Check the Actions tab in your GitHub repository
- Review the error logs
- Ensure all dependencies are in `package.json`

### 404 Error
- Verify GitHub Pages is enabled in repository settings
- Check that the workflow completed successfully
- Wait a few minutes for DNS propagation

### App Not Loading
- Check browser console for errors
- Verify the correct URL format
- Clear browser cache

## PWA Features

The app includes PWA (Progressive Web App) features:
- **Install Button**: Click "Get App" in the header
- **Offline Support**: Works after first load even without internet
- **App Icons**: Custom Robotable icon for home screen

## Updates

To update the deployed app:
1. Make changes to your code
2. Commit and push to the `main` branch
3. GitHub Actions will automatically rebuild and redeploy

---

**Robotable** - Timetable for Robotics and Automation Department
Version 1.0.0
