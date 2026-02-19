import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Admissions | Dr V P Kanakaraddi Memorial College Of Nursing',
  description: 'Apply for B.Sc Nursing — eligibility, process, and inquiry.',
}

export default function AdmissionsPage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Admissions</h1>
        <p className="hero-tagline">
          Begin your journey in nursing. Apply for B.Sc Nursing at VP Kanakaraddi Memorial College.
        </p>
        <div className="hero-cta">
          <Link href="/contact#admission" className="btn btn-outline">
            Admission Inquiry Form
          </Link>
          <Link href="/course" className="btn btn-primary" style={{ marginLeft: '1rem' }}>
            Course & Eligibility
          </Link>
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">Admission Process</h2>
        <p className="section-subtitle">
          Follow the steps below or get in touch for assistance.
        </p>
        <div className="card" style={{ maxWidth: '640px', margin: '0 auto' }}>
          <ol style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>Check eligibility (10+2 with PCB, minimum marks as per norms).</li>
            <li style={{ marginBottom: '0.75rem' }}>Fill the admission inquiry form or visit the college office.</li>
            <li style={{ marginBottom: '0.75rem' }}>Submit required certificates and complete the application process.</li>
            <li style={{ margin: 0 }}>Complete counselling/selection as per college and university guidelines.</li>
          </ol>
          <p style={{ marginTop: '1.5rem', marginBottom: 0 }}>
            <Link href="/contact" className="btn btn-primary">Contact Us for Enquiry</Link>
          </p>
        </div>
      </section>
    </>
  )
}
