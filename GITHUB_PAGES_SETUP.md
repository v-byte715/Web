# 🚀 GitHub Pages Setup - Quick Guide

Your **Robotable** app is now fully configured for GitHub Pages deployment!

## 📋 What's Been Configured

✅ Next.js static export enabled (`output: 'export'`)
✅ GitHub Actions workflow created (`.github/workflows/deploy.yml`)
✅ `.nojekyll` file added to public folder
✅ App icons and PWA manifest ready
✅ Static build tested successfully

## 🎯 Steps to Deploy

### 1. Push Your Code to GitHub

Use the Git tab in your editor or run:

```bash
git add .
git commit -m "Add Robotable timetable app with GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on **GitHub.com**
2. Click **Settings** (top navigation)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"** (not Branch)
5. Save (no other configuration needed!)

### 3. Wait for Deployment

- Go to the **Actions** tab in your repository
- You'll see a workflow running called "Deploy to GitHub Pages"
- Wait 2-3 minutes for it to complete
- Look for a green checkmark ✅

### 4. Access Your App! 🎉

Your app will be live at:

```
https://[your-username].github.io/[repository-name]/
```

**Example**: If your username is `roboticsstudent` and repo is `robotable`:
```
https://roboticsstudent.github.io/robotable/
```

## 🔍 Finding Your URL

After deployment completes:
1. Go to **Settings** → **Pages** in your repository
2. You'll see: "Your site is live at [URL]"
3. Click the URL to open your app!

## 🎨 What Your App Includes

- ✨ Dark-themed timetable interface
- 📅 Batch 1 and Batch 2 schedules
- 📱 PWA support (installable on phones/tablets)
- ⚡ Offline functionality
- 🎯 Current class highlighting
- 🌈 Color-coded subjects

## 🔄 Updating Your App

Whenever you want to update the deployed app:

1. Make changes to your code
2. Commit: `git commit -m "Update timetable"`
3. Push: `git push origin main`
4. GitHub Actions will automatically rebuild and redeploy!

## ⚠️ Troubleshooting

### "Actions" tab shows an error
- Click on the failed workflow to see error details
- Usually just needs a retry (click "Re-run all jobs")

### App shows 404 error
- Make sure you selected "GitHub Actions" (not "Deploy from a branch")
- Wait a few minutes - DNS can take time
- Clear browser cache and try again

### PWA not installing
- GitHub Pages must use HTTPS (it does automatically)
- Try opening in Chrome or Edge on desktop
- On mobile, use "Add to Home Screen" from browser menu

## 📱 Sharing Your App

Once deployed, share the link with:
- Classmates
- Department faculty
- Other batches

They can:
- View the timetable instantly
- Install as an app on their phones
- Use it offline after first load

## 🎓 For Your Department

This timetable app is perfect for:
- Quick schedule reference
- Lab timing checks
- Batch coordination
- Mobile access during college hours

---

**Need help?** Check the main [README.md](./README.md) or [DEPLOYMENT.md](./DEPLOYMENT.md) for more details.

**Ready to deploy?** Just push to GitHub and enable Pages! 🚀
