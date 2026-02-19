import React from 'react'

const facilities = [
  {
    title: 'Smart Classrooms',
    description: 'Technology-enabled classrooms with audio-visual aids and digital boards for effective teaching and learning.',
    icon: 'screen',
  },
  {
    title: 'Laboratory',
    description: 'Well-equipped nursing labs for fundamentals, anatomy, community health, and specialty practice to build clinical skills.',
    icon: 'lab',
  },
  {
    title: '100-Bedded Hospital',
    description: 'Our affiliated hospital provides real-world clinical experience for students under expert supervision.',
    icon: 'hospital',
  },
  {
    title: 'Hostel',
    description: 'Safe and comfortable hostel accommodation for outstation students with essential amenities and mess facilities.',
    icon: 'hostel',
  },
  {
    title: 'Multipurpose Hall',
    description: 'Spacious hall for seminars, workshops, cultural events, and examinations.',
    icon: 'hall',
  },
]

const iconPaths: Record<string, React.ReactNode> = {
  screen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 22h8M12 18v4" />
    </svg>
  ),
  lab: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 2v6l4 4 4-4V2" />
      <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
      <path d="M12 10v10" />
    </svg>
  ),
  hospital: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h6M9 13h6" />
    </svg>
  ),
  hostel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M3 6l9-4 9 4" />
    </svg>
  ),
  hall: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M8 4v16M16 4v16M2 10h20M2 14h20" />
    </svg>
  ),
}

export const metadata = {
  title: 'Facilities | Dr V P Kanakaraddi Memorial College Of Nursing',
  description: 'Smart classrooms, labs, hospital, hostel, and more.',
}

export default function FacilitiesPage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Facilities</h1>
        <p className="hero-tagline">
          Modern infrastructure to support learning, practice, and student life.
        </p>
      </section>

      <section className="page-section">
        <div className="card-grid">
          {facilities.map(({ title, description, icon }) => (
            <div key={title} className="card facility-card">
              <div className="facility-icon" aria-hidden>
                {iconPaths[icon]}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
