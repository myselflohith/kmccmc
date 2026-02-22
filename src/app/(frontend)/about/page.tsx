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
        <div className="card about-intro-card">
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
          Messages fraom our leadership team.
        </p>

        <div className="message-block">
          <h3 className="message-block-title">Director&apos;s Message</h3>
          <div className="message-body">
            <p>
              Dear Principal, faculty &amp; students greeting of peace to all of you &amp; heartly welcome to The
              Dr V P Kanakaraddi Memorial College Of Nursing. A unit of Om Sai Education Society&apos;s.
            </p>
            <p>
              We welcome the future noble professionals to this temple of learning. Dr V P Kanakaraddi
              Memorial College Of Nursing with our tradition of introducing high quality services. Our
              alumni are our ambassadors who spread the fame of Dr V P Kanakaraddi Memorial
              College Of Nursing. Our strengths are our best infrastructure, dedicated faculties and
              fully fledged Laboratory and Library.
            </p>
            <p className="message-signature">
              <strong>Dr Sharvani Ajit Kanakaraddi</strong><br />
              Director
            </p>
          </div>
        </div>

        <div className="message-block message-block-alt">
          <h3 className="message-block-title">Management Message</h3>
          <div className="message-body">
            <p>
              Nurses collaborate with patients, families, and other health team members to plan and
              provide nursing care that will achieve an optimal level of health and wellness, or when this
              is not possible, support the experience of loss and death.
            </p>
            <p>
              Our aim is to help you become dedicated healthcare professionals to serve the sick and
              needy members of our society responsibly, respectfully and competently while being
              morally sensitive for the betterment of their health.
            </p>
            <p>
              The methods of instruction at our institution are as per the Rajiv Gandhi University of Health
              Sciences and Indian Nursing Council. We believe success in education depends on better
              infrastructure, finer resources for learning and effective discussion among faculty and
              students. We select a class of people with high ethical standards and academic
              performance from a range of work experiences, backgrounds, and personal characteristics who
              display a commitment to serve people through our nursing education.
            </p>
          </div>
        </div>

        <div className="message-block">
          <h3 className="message-block-title">Principal&apos;s Message</h3>
          <div className="message-body">
            <p>
              It is my pleasure to welcome you to The Dr V P Kanakaraddi Memorial College Of Nursing, an
              institution that was started with the noble mission of alleviating the pain of the sick and needy.
              We aim for excellence in the field of nursing education and practice, constantly working
              towards raising the bar for students of the nursing profession, such that our students can face
              the exacting demands of the health care sector.
            </p>
            <p>
              We, at The Dr V P Kanakaraddi Memorial College Of Nursing, have excellent infrastructure,
              competent teaching faculty with years of experience and follow innovative methods of teaching
              to convey the importance of the course that the students have embarked upon. We also make
              sure that the student&apos;s all round development as an intelligent, alert member of society, is
              nourished. We provide an arena of extracurricular activities which brings out the best in the
              student.
            </p>
            <p>
              We welcome you to the family of The Dr V P Kanakaraddi Memorial College Of Nursing for a
              memorable stay to pursue and successfully complete your education and to achieve higher
              goals in life.
            </p>
            <p className="message-signature">
              <strong>Best Of Luck</strong><br />
              Principal
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
