import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Search | Dr V P Kanakaraddi Memorial College Of Nursing',
  description: 'Search the college website.',
}

export default function SearchPage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Search</h1>
        <p className="hero-tagline">
          Find information about courses, facilities, admissions, and more.
        </p>
      </section>

      <section className="page-section">
        <div className="card" style={{ maxWidth: '560px', margin: '0 auto' }}>
          <p style={{ marginBottom: '1rem' }}>
            Use the navigation menu to explore our website. Key sections:
          </p>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li><Link href="/">Home</Link> — Overview and highlights</li>
            <li><Link href="/about">About</Link> — College profile and leadership</li>
            <li><Link href="/course">Course</Link> — B.Sc Nursing details and eligibility</li>
            <li><Link href="/facilities">Facilities</Link> — Infrastructure</li>
            <li><Link href="/faculty">Faculty</Link> — Teaching and faculty</li>
            <li><Link href="/student-life">Student Life</Link> — Activities and policies</li>
            <li><Link href="/gallery">Gallery</Link> — Photos</li>
            <li><Link href="/contact">Contact</Link> — Address and inquiry forms</li>
          </ul>
        </div>
      </section>
    </>
  )
}
