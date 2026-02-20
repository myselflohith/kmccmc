import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-intro">
            <h1 className="hero-title">DR V P Kanakaraddi Memorial College Of Nursing</h1>
            <p className="hero-tagline">Care, Compassion, Excellence</p>
            <div className="hero-cta">
              <Link href="/admissions" className="btn btn-hero">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-highlights">
          <div className="hero-highlight-block">
            <span className="hero-highlight-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
                <path d="M12 3 2 9l10 6 10-6-10-6z" />
                <path d="M12 15v6" />
              </svg>
            </span>
            <span>Affiliated to RGUHS</span>
          </div>
          <div className="hero-highlight-block">
            <span className="hero-highlight-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            <span>Recognized by Govt. of Karnataka</span>
          </div>
          <div className="hero-highlight-block">
            <span className="hero-highlight-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M2 12h20" />
              </svg>
            </span>
            <span>Approved by Karnataka Nursing Council</span>
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
        <div className="why-choose-grid">
          <div className="why-choose-card">
            <div className="why-choose-card-image">
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600"
                alt="Modern Infrastructure"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="why-choose-card-bar">
              <h3>Modern Infrastructure</h3>
              <p>Well-equipped classrooms and smart learning facilities.</p>
            </div>
          </div>
          <div className="why-choose-card">
            <div className="why-choose-card-image">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600"
                alt="Expert Faculty"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="why-choose-card-bar">
              <h3>Expert Faculty</h3>
              <p>Experienced teaching staff committed to your growth.</p>
            </div>
          </div>
          <div className="why-choose-card">
            <div className="why-choose-card-image">
              <Image
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600"
                alt="Advanced Labs"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="why-choose-card-bar">
              <h3>Advanced Labs</h3>
              <p>State-of-the-art labs and simulation facilities.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
