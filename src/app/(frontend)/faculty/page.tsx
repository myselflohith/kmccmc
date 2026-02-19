import React from 'react'

export const metadata = {
  title: 'Faculty | Dr V P Kanakaraddi Memorial College Of Nursing',
  description: 'Our teaching philosophy and faculty strengths.',
}

export default function FacultyPage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Faculty</h1>
        <p className="hero-tagline">
          Experienced educators committed to your growth and excellence in nursing.
        </p>
      </section>

      <section className="page-section">
        <h2 className="section-title">Teaching Philosophy</h2>
        <p className="section-subtitle">
          We believe in student-centered learning and evidence-based teaching.
        </p>
        <div className="card" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ marginBottom: '1rem' }}>
            Our faculty members are qualified professionals with clinical and academic experience.
            We focus on interactive teaching, hands-on practice, and mentorship so that every student
            can develop both competence and confidence. Regular training and workshops keep our
            teaching methods aligned with the latest in nursing education and healthcare.
          </p>
          <p style={{ margin: 0 }}>
            We emphasise critical thinking, ethical practice, and compassionate care — preparing
            our graduates not only for exams but for real-world nursing roles in diverse settings.
          </p>
        </div>
        <div className="card" style={{ maxWidth: '720px', margin: '2rem auto 0' }}>
          <h3>Faculty Strengths</h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Qualified and experienced teaching staff</li>
            <li>Clinical expertise across specialties</li>
            <li>Student mentoring and support</li>
            <li>Participation in continuing education and research</li>
          </ul>
        </div>
      </section>
    </>
  )
}
