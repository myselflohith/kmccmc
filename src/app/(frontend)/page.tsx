import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-intro">
            <h1 className="hero-title">Dr V P Kanakaraddi Memorial College Of Nursing</h1>
            <p className="hero-tagline">
              Shaping future healthcare professionals with excellence in nursing education and practice.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-outline">
                Enquire Now
              </Link>
              <Link href="/admissions" className="btn btn-primary">
                Apply for Admissions
              </Link>
            </div>
          </div>
          <div className="highlights">
          <span className="highlight-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m22 4-2.09 2.09L16 8" />
            </svg>
            Affiliated to RGUHS
          </span>
          <span className="highlight-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m22 4-2.09 2.09L16 8" />
            </svg>
            Recognized by Govt of Karnataka
          </span>
          <span className="highlight-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m22 4-2.09 2.09L16 8" />
            </svg>
            Approved by Karnataka Nursing Council
          </span>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">Vision, Mission & Philosophy</h2>
        <p className="section-subtitle">
          Our guiding principles for nursing education and community health.
        </p>
        <div className="card-grid">
          <div className="card">
            <h3>Vision</h3>
            <p>
              To be a leading institution in nursing education, producing competent and compassionate
              healthcare professionals who serve the community with excellence and integrity.
            </p>
          </div>
          <div className="card">
            <h3>Mission</h3>
            <p>
              To provide quality nursing education through innovative teaching, clinical practice, and
              research, fostering holistic development and ethical values in every student.
            </p>
          </div>
          <div className="card">
            <h3>Philosophy</h3>
            <p>
              We believe in the dignity of every individual and the power of nursing to promote health,
              prevent illness, and restore wellness through evidence-based, patient-centered care.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--color-off-white)' }}>
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          What sets our college apart in nursing education.
        </p>
        <div className="card-grid">
          <div className="card">
            <h3>Modern Infrastructure</h3>
            <p>
              Well-equipped classrooms, smart learning facilities, and a conducive environment for
              academic and practical learning.
            </p>
          </div>
          <div className="card">
            <h3>Dedicated Faculty</h3>
            <p>
              Experienced and qualified teaching staff committed to mentoring and nurturing every
              student&apos;s potential.
            </p>
          </div>
          <div className="card">
            <h3>Advanced Labs</h3>
            <p>
              State-of-the-art nursing labs and simulation facilities for hands-on training and
              skill development.
            </p>
          </div>
          <div className="card">
            <h3>Rich Library</h3>
            <p>
              Comprehensive library with books, journals, and digital resources to support learning
              and research.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
