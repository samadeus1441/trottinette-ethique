'use client'

import { useState } from 'react'

const navLinks = [
  { href: '#constat', label: 'Le constat' },
  { href: '#ethique', label: 'Éthique' },
  { href: '#charte', label: 'La charte' },
  { href: '#engagement', label: 'Je signe' },
  { href: '#petition', label: 'Pétition' },
  { href: '#medias', label: 'Médias' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-black text-xl tracking-tight">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-ethic-red text-white text-sm">
              T
            </span>
            <span>
              Trottinette<span className="text-ethic-red">Éthique</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-ethic-red transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#engagement"
              className="px-4 py-2 bg-ethic-red text-white rounded-full hover:bg-red-700 transition-colors"
            >
              Signer
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-4 py-3 gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 hover:text-ethic-red"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
