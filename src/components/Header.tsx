'use client'

import { useState, useEffect } from 'react'

export function Header() {
  const [showInstallButton, setShowInstallButton] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallButton(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowInstallButton(false)
    }

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    // Show the install prompt
    deferredPrompt.prompt()

    // Wait for the user's response
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      setShowInstallButton(false)
    }

    // Clear the deferred prompt
    setDeferredPrompt(null)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left section: Logo + Title + Status */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>

          {/* Title and Status */}
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-white leading-tight">Robotable</h1>
            <p className="text-[11px] text-gray-500 leading-tight">Updated recently</p>
          </div>
        </div>

        {/* Right section: Actions */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle placeholder (always dark in this version) */}
          <button
            className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Theme toggle"
          >
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          {/* Get App button (PWA install) */}
          {showInstallButton && (
            <button
              onClick={handleInstallClick}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Get App
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
