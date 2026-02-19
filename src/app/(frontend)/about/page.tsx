import React from 'react'

export const metadata = {
  title: 'About Us | Dr V P Kanakaraddi Memorial College Of Nursing',
  description: 'College profile, leadership messages, and affiliation details.',
}

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-tagline">
          Dr V P Kanakaraddi Memorial College Of Nursing — committed to excellence in nursing education since 2023.
        </p>
      </section>

      <section className="page-section">
        <h2 className="section-title">College Profile</h2>
        <p className="section-subtitle">
          Founded in 2023, our college is built on a legacy of dedication to healthcare education.
        </p>
        <div className="card" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ marginBottom: '1rem' }}>
            Dr V P Kanakaraddi Memorial College Of Nursing is affiliated to Rajiv Gandhi University of
            Health Sciences (RGUHS), recognized by the Government of Karnataka, and approved by the
            Karnataka State Nursing Council (KSNC). We offer a four-year B.Sc Nursing programme
            designed to prepare competent and caring nursing professionals.
          </p>
          <p style={{ margin: 0 }}>
            Our founders and management are committed to providing quality infrastructure, experienced
            faculty, and a supportive learning environment for every student.
          </p>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--color-off-white)' }}>
        <h2 className="section-title">Leadership</h2>
        <p className="section-subtitle">
          Messages from our leadership team.
        </p>
        <div className="card-grid">
          <div className="card">
            <h3>Director&apos;s Message</h3>
            <p><strong>Dr Sharvani Ajit Kanakaraddi</strong></p>
            <p>
              It is my privilege to lead an institution that stands for quality and compassion in
              nursing education. We strive to create an environment where every student can grow into
              a confident, competent, and caring healthcare professional.
            </p>
          </div>
          <div className="card">
            <h3>Management Message</h3>
            <p>
              Our management is dedicated to supporting the college with the best resources,
              infrastructure, and policies so that our students and faculty can focus on learning
              and teaching excellence.
            </p>
          </div>
          <div className="card">
            <h3>Principal&apos;s Message</h3>
            <p>
              As Principal, I am committed to upholding academic standards and fostering a culture
              of respect, integrity, and continuous improvement. Together we build the future of
              nursing.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">Affiliation & Approvals</h2>
        <p className="section-subtitle">
          Recognized by leading regulatory and academic bodies.
        </p>
        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>KSNC</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Karnataka State Nursing Council</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Govt of Karnataka</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Government Recognized</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>RGUHS</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Rajiv Gandhi University of Health Sciences</p>
          </div>
        </div>
      </section>
    </>
  )
}
