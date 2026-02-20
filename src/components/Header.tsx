'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#course', label: 'Course' },
  { href: '/#facilities', label: 'Facilities' },
  { href: '/#faculty', label: 'Faculty' },
  { href: '/#student-life', label: 'Student Life' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#contact', label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-brand">
          <Link href="/" className="header-brand-link">
            <span className="header-logo" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
                <path d="M12 3 2 9l10 6 10-6-10-6z" />
                <path d="M12 15v6" />
              </svg>
            </span>
            <span className="header-college-name">
              Dr V P Kanakaraddi Memorial College Of Nursing
            </span>
          </Link>
        </div>
        <button
          type="button"
          className="header-menu-btn"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="header-menu-icon" />
          <span className="header-menu-icon" />
          <span className="header-menu-icon" />
        </button>
        <div className="header-actions">
          <Link href="/search" className="header-action-link">
            <svg className="header-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            Search
          </Link>
          <span className="header-divider" />
          <Link href="/admissions" className="header-action-link">
            <svg className="header-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Admissions
          </Link>
          <a href="tel:+919876543210" className="header-phone-btn">
            <svg className="header-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +91 98765 43210
          </a>
        </div>
      </div>
      <nav className={`header-nav ${menuOpen ? 'header-nav-open' : ''}`} aria-label="Main navigation">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="header-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
