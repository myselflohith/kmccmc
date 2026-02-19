'use client'

import Link from 'next/link'
import React from 'react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/course', label: 'Course' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/student-life', label: 'Student Life' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-block">
            <h3 className="footer-title">Dr V P Kanakaraddi Memorial College Of Nursing</h3>
            <p className="footer-tagline">Excellence in Nursing Education</p>
            <p className="footer-contact">
              <a href="tel:+919876543210">+91 98765 43210</a>
              <br />
              <a href="mailto:info@vpkmcn.edu.in">info@vpkmcn.edu.in</a>
            </p>
          </div>
          <div className="footer-block">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-block">
            <h4 className="footer-heading">Affiliations & Approvals</h4>
            <div className="footer-badges">
              <span className="footer-badge">RGUHS</span>
              <span className="footer-badge">Govt of Karnataka</span>
              <span className="footer-badge">KSNC</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Dr V P Kanakaraddi Memorial College Of Nursing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
