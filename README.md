# 🤖 Robotable

A modern, dark-themed timetable web application for the **Robotics and Automation Department** (Semester VI, 2024-2025). Built with Next.js, React, and Tailwind CSS, featuring a sleek Google Calendar-inspired interface.

![Robotable Preview](https://img.shields.io/badge/status-live-success) ![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black) ![React](https://img.shields.io/badge/React-19.2.0-blue) ![PWA](https://img.shields.io/badge/PWA-enabled-purple)

## ✨ Features

- 📅 **Weekly Timetable View** - Beautiful day-by-day schedule display
- 🎨 **Dark Theme** - Stunning dark mode with glassmorphism effects
- 🔄 **Batch Switching** - Instant toggle between Batch 1 and Batch 2
- ⏰ **Live Class Tracking** - Automatically highlights current ongoing class
- 📱 **Progressive Web App** - Install and use offline on any device
- 🎯 **Responsive Design** - Optimized for mobile, tablet, and desktop
- 🌈 **Color-Coded Classes** - Each subject has unique soft pastel gradients
- ⚡ **Fast & Lightweight** - Built with Next.js 16 and Tailwind CSS v4

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Static Export (for GitHub Pages)

```bash
# Build static site
npm run build

# Output will be in the 'out' directory
```

## 🌐 Deployment

This app is configured for **GitHub Pages** deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Deploy:**
1. Push code to GitHub
2. Enable GitHub Pages in repository settings (Source: GitHub Actions)
3. Your app will be live at: `https://[username].github.io/[repo-name]/`

## 📱 Progressive Web App (PWA)

Robotable is a fully functional PWA:

- **Installable**: Click "Get App" button to install on your device
- **Offline Support**: Works without internet after first load
- **App Icons**: Custom icon for home screen
- **Fast Loading**: Cached assets for instant access

## 🎯 Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 5.x
- **PWA**: Service Worker + Web Manifest
- **Icons**: SVG with Sharp image processing

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main application page
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles and themes
├── components/
│   ├── Header.tsx            # App header with logo and actions
│   ├── DateSelector.tsx      # Day selection pills
│   ├── BatchSelector.tsx     # Batch toggle buttons
│   ├── ClassCard.tsx         # Individual class display
│   ├── ScheduleView.tsx      # Main schedule container
│   └── PWAHandler.tsx        # Service worker registration
├── data/
│   └── timetable.ts          # Timetable data and types
├── hooks/
│   └── useCurrentClass.ts    # Hook for live class detection
└── lib/
    └── utils.ts              # Utility functions
```

## 🎨 Features Breakdown

### Class Cards
- **Time Display**: Start and end times with 24-hour format
- **Subject Info**: Code and full name
- **Lab Badge**: Special indicator for 2-hour lab sessions
- **Room Details**: Room number and block information
- **Gradient Overlays**: Unique colors per subject

### Color Scheme
- **ME23612**: Blue/Cyan gradient
- **RO23631**: Purple/Violet gradient
- **RO23632**: Orange/Amber gradient
- **RO23633**: Pink/Rose gradient
- **GE23627**: Green/Emerald gradient

### Smart Features
- **Auto Day Selection**: Defaults to current day
- **Current Class Highlighting**: Purple border around ongoing class
- **Empty State**: Friendly message for days with no classes
- **Smooth Animations**: Fade and slide transitions

## 📊 Timetable Coverage

- **Days**: Monday to Saturday
- **Time Range**: 08:00 to 17:00
- **Batches**: 2 (identical schedules)
- **Class Types**: Theory (50 min) and Lab (1.5-2 hours)
- **Total Subjects**: 5 core subjects

## 🛠️ Configuration

### Next.js Config (`next.config.ts`)
```typescript
{
  output: 'export',        // Static site generation
  images: {
    unoptimized: true      // For GitHub Pages
  }
}
```

### PWA Config (`public/manifest.json`)
- App name, description, and branding
- Icon sizes: 192x192 and 512x512
- Theme color: #667eea (purple)
- Display mode: standalone

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Development

Built for the **Robotics and Automation Department** with modern web technologies.

**Version**: 1.0.0

---

Made with ❤️ for robotics students
