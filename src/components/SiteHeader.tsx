'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-lawn-green rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <div>
            <span className="text-xl font-bold text-gray-800">
              Lawn Doctor <span className="text-lawn-green">AI</span>
            </span>
            <p className="text-xs text-gray-500 hidden sm:block">Smart lawn diagnosis</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-lawn-green transition-colors">Diagnose</Link>
          <Link href="/lawn-problems" className="hover:text-lawn-green transition-colors">Lawn Problems</Link>
          <Link href="/blog" className="hover:text-lawn-green transition-colors">Blog</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-green-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-green-100 bg-white px-4 py-3 flex flex-col gap-3 text-sm font-medium text-gray-600">
          <Link href="/" onClick={() => setMobileOpen(false)} className="py-1 hover:text-lawn-green">Diagnose</Link>
          <Link href="/lawn-problems" onClick={() => setMobileOpen(false)} className="py-1 hover:text-lawn-green">Lawn Problems</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="py-1 hover:text-lawn-green">Blog</Link>
        </nav>
      )}
    </header>
  );
}
