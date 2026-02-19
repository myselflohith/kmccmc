import React from 'react'

export const metadata = {
  title: 'Student Life | Dr V P Kanakaraddi Memorial College Of Nursing',
  description: 'Student activities, cultural events, and anti-ragging policy.',
}

export default function StudentLifePage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Student Life</h1>
        <p className="hero-tagline">
          Learning beyond the classroom — activities, events, and a safe campus.
        </p>
      </section>

      <section className="page-section">
        <h2 className="section-title">Student Activities & Cultural Events</h2>
        <p className="section-subtitle">
          We encourage holistic development through extracurricular and cultural programmes.
        </p>
        <div className="card-grid">
          <div className="card">
            <h3>Cultural Events</h3>
            <p>
              Annual day, festivals, and cultural programmes that bring students together and
              celebrate diversity and talent.
            </p>
          </div>
          <div className="card">
            <h3>Sports & Wellness</h3>
            <p>
              Opportunities for sports and physical activities to promote health and teamwork
              among students.
            </p>
          </div>
          <div className="card">
            <h3>Professional Development</h3>
            <p>
              Workshops, seminars, and guest lectures to supplement classroom learning and
              prepare students for their careers.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--color-off-white)' }}>
        <h2 className="section-title">Anti-Ragging Policy & Committee</h2>
        <p className="section-subtitle">
          Our campus is ragging-free. We are committed to a safe and respectful environment for all.
        </p>
        <div className="card" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ marginBottom: '1rem' }}>
            The college has a strict anti-ragging policy in line with UGC and Supreme Court
            guidelines. Ragging in any form is prohibited and can lead to serious disciplinary
            action, including expulsion.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            An Anti-Ragging Committee is in place to prevent ragging, receive complaints, and
            take prompt action. Students and parents can report any incident to the committee or
            the college administration in confidence.
          </p>
          <p style={{ margin: 0 }}>
            We encourage every student to focus on studies and positive interactions, and to
            report any form of ragging without fear.
          </p>
        </div>
      </section>
    </>
  )
}
