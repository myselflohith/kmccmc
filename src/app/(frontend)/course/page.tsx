import React from 'react'

export const metadata = {
  title: 'Academics / Course | Dr V P Kanakaraddi Memorial College Of Nursing',
  description: 'B.Sc Nursing programme, eligibility, and admission criteria.',
}

export default function CoursePage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Academics & Course</h1>
        <p className="hero-tagline">
          B.Sc Nursing — A four-year degree programme preparing you for a rewarding career in nursing.
        </p>
      </section>

      <section className="page-section">
        <h2 className="section-title">B.Sc Nursing Programme</h2>
        <p className="section-subtitle">
          Four-year undergraduate degree in nursing as per INC and university norms.
        </p>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3>Programme Overview</h3>
          <p>
            The Bachelor of Science in Nursing (B.Sc Nursing) is a four-year programme that combines
            theoretical knowledge with extensive clinical practice. The curriculum is designed to
            produce competent nurses who can provide quality care in hospitals, community settings,
            and other healthcare organisations.
          </p>
          <h3 style={{ marginTop: '1.5rem' }}>Duration</h3>
          <p>4 years (8 semesters)</p>
          <h3 style={{ marginTop: '1.5rem' }}>Eligibility & Admission Criteria</h3>
          <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
            <li>Candidates must have passed 10+2 or equivalent with Physics, Chemistry, Biology and English.</li>
            <li>Minimum aggregate marks as prescribed by the university/regulatory body.</li>
            <li>Minimum age 17 years as on 31st December of the year of admission.</li>
            <li>Medical fitness as per norms.</li>
          </ul>
          <h3 style={{ marginTop: '1.5rem' }}>Required Certificates (at admission)</h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>10th and 12th marks cards</li>
            <li>Transfer certificate</li>
            <li>Conduct certificate</li>
            <li>Migration certificate (if applicable)</li>
            <li>Identity proof (Aadhar, etc.)</li>
            <li>Passport-size photographs</li>
            <li>Medical fitness certificate</li>
          </ul>
        </div>
      </section>
    </>
  )
}
