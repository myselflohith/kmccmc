import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Gallery } from '@/components/Gallery'
import { LeadershipMessages } from '@/components/LeadershipMessages'
import { AntiRaggingBlock } from '@/components/AntiRaggingBlock'
import { AdmissionInquiryForm } from '@/components/ContactForms'
import { getGalleryFunctions } from '@/lib/gallery'

const facilities = [
  { title: 'Smart Class Rooms', description: 'Classrooms are designed for accomodating 40-60 students which fullfills the guidlince given by the regulatory bodies. Every classroom is provided with ergonomically designed seating arrangement, smart board and cctv camera. Each batch has separate classroom with necessary facilities.', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600' },
  { title: 'Laboratory', description: 'Inovative teaching methods are used with the help of Laboratories according to the specialities furthur more enhancing the learning experience and along with well equiped computer lab.', image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600' },
  { title: 'Hospital', description: 'College is attached with 100 bedded parent Hospital in campus along with attached Hospital for specialities.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600' },
  { title: 'Hostel', description: 'Provision for safe and secure inhouse hostel facilities with mess services. Keeping in mind, "Cleanliness is Godliness". Hostel are equipped with CCTV, safe drinking water and security with efficient warden available 24/7.', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600' },
  { title: 'Multipurpose Hall', description: 'Available to conduct events, workshop and seminar.', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600' },
]

const address = { line1: 'Dr V P Kanakaraddi Memorial College Of Nursing', line2: 'Campus Address', city: 'Karnataka', phone: '+91 98765 43210', email: 'info@vpkmcn.edu.in' }

// Revalidate so new gallery functions (and other CMS content) show without redeploying.
export const revalidate = 60

export default async function HomePage() {
  const galleryFunctions = await getGalleryFunctions()
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-intro">
            <h1 className="hero-title">DR V P Kanakaraddi Memorial College Of Nursing</h1>
            <p className="hero-tagline">Care, Compassion, Excellence</p>
            <div className="hero-cta">
              <Link href="/admissions" className="btn btn-hero">Apply Now</Link>
            </div>
          </div>
        </div>
        <div className="hero-highlights">
          <div className="hero-highlight-block">
            <span className="hero-highlight-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" /><path d="M12 3 2 9l10 6 10-6-10-6z" /><path d="M12 15v6" /></svg>
            </span>
            <span>Affiliated to RGUHS</span>
          </div>
          <div className="hero-highlight-block">
            <span className="hero-highlight-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
            </span>
            <span>Recognized by Govt. of Karnataka</span>
          </div>
          <div className="hero-highlight-block">
            <span className="hero-highlight-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>
            </span>
            <span>Approved by Karnataka Nursing Council</span>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">Vision, Mission & Philosophy</h2>
        <p className="section-subtitle">Our guiding principles for nursing education and community health.</p>
        <div className="card-grid">
          <div className="card"><h3>Vision</h3><p>To be a leading institution in nursing education, producing competent and compassionate healthcare professionals who serve the community with excellence and integrity.</p></div>
          <div className="card"><h3>Mission</h3><p>To provide quality nursing education through innovative teaching, clinical practice, and research, fostering holistic development and ethical values in every student.</p></div>
          <div className="card"><h3>Philosophy</h3><p>We believe in the dignity of every individual and the power of nursing to promote health, prevent illness, and restore wellness through evidence-based, patient-centered care.</p></div>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--color-off-white)' }}>
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">What sets our college apart in nursing education.</p>
        <div className="why-choose-grid">
          <div className="why-choose-card">
            <div className="why-choose-card-image">
              <Image src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600" alt="Modern Infrastructure" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="why-choose-card-bar"><h3>Modern Infrastructure</h3><p>Well-equipped classrooms and smart learning facilities.</p></div>
          </div>
          <div className="why-choose-card">
            <div className="why-choose-card-image">
              <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600" alt="Expert Faculty" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="why-choose-card-bar"><h3>Expert Faculty</h3><p>Experienced teaching staff committed to your growth.</p></div>
          </div>
          <div className="why-choose-card">
            <div className="why-choose-card-image">
              <Image src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600" alt="Advanced Labs" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="why-choose-card-bar"><h3>Advanced Labs</h3><p>State-of-the-art labs and simulation facilities.</p></div>
          </div>
        </div>
      </section>

      <section id="about" className="page-section scroll-section">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">College profile, leadership, and affiliations.</p>
        <div className="about-intro-card">
          <p>Dr V P Kanakaraddi Memorial College Of Nursing is affiliated to RGUHS, recognized by the Government of Karnataka, and approved by the Karnataka State Nursing Council (KSNC). We offer a four-year B.Sc Nursing programme. A unit of Om Sai Education Society&apos;s.</p>
          <p>Our founders and management are committed to providing quality infrastructure, experienced faculty, and a supportive learning environment for every student.</p>
        </div>
        <div className="about-leadership">
          <LeadershipMessages
            directorImage="/media/director.jpeg"
            director={
              <>
                <p>Dear Principal, faculty &amp; students greeting of peace to all of you &amp; heartly welcome to The Dr V P Kanakaraddi Memorial College Of Nursing. A unit of Om Sai Education Society&apos;s.</p>
                <p>We welcome the future noble professionals to this temple of learning. Dr V P Kanakaraddi Memorial College Of Nursing with our tradition of introducing high quality services. Our alumini are our ambassadors who spread the fame of Dr V P Kanakaraddi Memorial College Of Nursing. Our strength are upholds, best infrastructure , dedicated faculties and fully fledged Lobarotory and Library.</p>
                <p className="leadership-signature"><strong>Dr Sharvani Ajit Kanakaraddi</strong></p>
              </>
            }
            management={
              <>
                <p>Nurses collaborate with patients, families, and other health team members to plan and provide nursing care that will achieve an optimal level of health and wellness, or when this is not possible, support the experience of loss and death.</p>
                <p>Our aim is to help you become dedicated healthcare professionals to serve the sick and needy members of our society responsibly, respectfully and competently while being morally sensitive for the betterment of their health.</p>
                <p>The methods of instruction at our institution are as per the Rajiv Gandhi University of Health Sciences and Indian Nursing Council. We believe success in education depends on better infrastructure, finer resources for learning and effective discussion among faculty and students. We select a class of people with high ethical standards and academic performance from arrange of work experiences, backgrounds, personal characteristics who display a commitment to serve people with our nursing education.</p>
              </>
            }
            principal={
              <>
                <p>It is my pleasure to welcome you to The Dr v p Kanakaraddi Memorial College Of Nursing, an institution that was started with the noble mission of alleviating the pain of the sick and needy. We aim for excellence in the field of nursing education and practice, constantly working towards raising the bar for students of the nursing profession, such that our students can face the exacting demands of the health care sector.</p>
                <p>We, at The Dr v p Kanakaraddi Memorial College Of Nursing, have excellent infrastructure, competent teaching faculty with years of experience and follow innovative methods of teaching to convey the importance of the course that the students have embarked upon. We also make sure that the student&apos;s all round development as an intelligent, alert member of society, is nourished. We provide an arena of extracurricular activities which brings out the best in the student.</p>
                <p>We welcome you to the family of The Dr v p Kanakaraddi Memorial College Of Nursing for a memorable stay to pursue and successfully complete your education and to achieve higher goals in life.</p>
                <p className="leadership-signature"><strong>Best Of Luck</strong><br />Principal</p>
              </>
            }
          />
        </div>
        <h2 className="section-title about-affiliation-title">Affiliation & Approvals</h2>
        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '1rem' }}>
          <div className="card" style={{ textAlign: 'center' }}><h3 style={{ marginBottom: '0.5rem' }}>KSNC</h3><p style={{ fontSize: '0.9rem', margin: 0 }}>Karnataka State Nursing Council</p></div>
          <div className="card" style={{ textAlign: 'center' }}><h3 style={{ marginBottom: '0.5rem' }}>Govt of Karnataka</h3><p style={{ fontSize: '0.9rem', margin: 0 }}>Government Recognized</p></div>
          <div className="card" style={{ textAlign: 'center' }}><h3 style={{ marginBottom: '0.5rem' }}>RGUHS</h3><p style={{ fontSize: '0.9rem', margin: 0 }}>Rajiv Gandhi University of Health Sciences</p></div>
        </div>
      </section>

      <section id="course" className="page-section scroll-section course-section">
        <h2 className="section-title">Course</h2>
        <p className="section-subtitle">B.Sc Nursing programme — duration, admission criteria, eligibility, and required documents.</p>
        <div className="course-card">
          <div className="course-intro">
            <h3 className="course-programme-title">B.Sc Nursing</h3>
            <p className="course-intro-text">The course of study shall extend over a period of 4 academic years from the date of commencement of his/her study of the subjects comprising the nursing curriculum to the date of completion of examination. Terms and vacations shall be as notified by the university from time to time.</p>
          </div>
          <div className="course-subsection">
            <h4 className="course-subheading">Admission Criteria</h4>
            <ol className="course-list course-list-numbered">
              <li>The minimum age for admission shall be 17 years on or before 31st December of the year of admission.</li>
              <li>The minimum educational requirements shall be the passing of: Higher Secondary school certificate Examination (12 years course), or Senior School certificate Examination (10+2), Pre-degree Examination (10+2), or an equivalent with 12 years schooling from a recognized board or university with Science (Physics, Chemistry, Biology) and English with minimum of 50% aggregate marks (PCBE).</li>
              <li>Candidate shall be Medically Fit.</li>
            </ol>
          </div>
          <div className="course-subsection">
            <h4 className="course-subheading">Admission for B.Sc — Eligibility</h4>
            <p className="course-lead">A Candidate seeking admission shall have:</p>
            <ul className="course-list course-list-bullet">
              <li>A pass in 10th / +2 Examination.</li>
              <li>Pass in Two year PUC equivalent recognized by RGUHS with Science subjects viz. Physics, Biology, Chemistry.</li>
              <li>Obtained 45% marks in Physics, Biology, Chemistry and English. In case of SC/ST/OBC, relaxed to 40%.</li>
              <li>Age — completed 17 Years.</li>
              <li>Fair knowledge in English is essential. Should be physically fit with sound mental health.</li>
            </ul>
          </div>
          <div className="course-subsection course-subsection-last">
            <h4 className="course-subheading">Certificates Required for Admission</h4>
            <p className="course-lead">Attested copies of the following certificates to be sent along with the application form.</p>
            <ul className="course-list course-list-bullet">
              <li>Marks card of the qualifying examination (II PUC/ PDC).</li>
              <li>SSLC marks card (with date of birth).</li>
              <li>Transfer Certificate.</li>
              <li>Migration Certificate.</li>
              <li>Conduct Certificate from Institution Last Attended.</li>
              <li>SC/ST/OBC Certificate (applicable only if it is attested).</li>
              <li>Eligibility Certificate.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="facilities" className="page-section scroll-section">
        <h2 className="section-title">Facilities</h2>
        <p className="section-subtitle">Infrastructure to support learning, practice and student life.</p>
        <div className="facilities-image-grid">
          {facilities.map(({ title, description, image }) => (
            <div key={title} className="facility-image-card">
              <div className="facility-image-card-img">
                <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="facility-image-card-bar">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faculty" className="page-section scroll-section" style={{ background: 'var(--color-off-white)' }}>
        <h2 className="section-title">Our Faculties</h2>
        <div className="content-with-image">
          <div className="content-with-image-media">
            <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600" alt="Nursing education" fill sizes="(max-width: 768px) 100vw, 40vw" />
          </div>
          <div className="content-with-image-body">
            <p>Our Faculties believe in providing nursing education based and built on scientific principles and sound educational theory and practice in order to prepare professionally qualified nurses, who will be able to function as a team member, in all health care agencies in the role of a practicing nurse. The graduate with experience can rapidly move into leadership positions in Nursing Education, Nursing Service and Administration.</p>
            <p>We promote all-round development of the students with special emphasis on human, moral, psychological, cultural, intellectual and spiritual aspects which is required to prepare a professional nurse who will be a contributing citizen and an effective &quot;change agent&quot; in an ever changing society.</p>
          </div>
        </div>
      </section>

      <section id="student-life" className="page-section scroll-section">
        <h2 className="section-title">Student Life</h2>
        <div className="student-life-inner">
          <div className="students-activities-block student-life-card">
            <div className="students-activities-image">
              <Image src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200" alt="Students activities and cultural events" fill sizes="100vw" />
            </div>
            <div className="students-activities-body content-block">
              <h3 className="content-heading">Students Activities</h3>
              <p>Our college provides a platform for students to exhibit and develop their talents. Each year, a wide variety of artistic and other creative talents are identified and recognized through a month-long series of interclass competitions. Students are also provided opportunities to win more accolades in intercollegiate competitions. Celebrations of Theme Week, Ethnic Day, Colours Week and the Annual College Day, a colourful extravaganza of music, dance and drama which marks the high point of each academic year, make a vibrant college environment.</p>
            </div>
          </div>
          <div className="content-block anti-ragging-outer student-life-card">
          <h3 className="content-heading">Anti Ragging</h3>
          <AntiRaggingBlock>
            <p>As per the notification issued by Medical Council of India (No. MCI-34(1)/2009-Med./25453, Section 33 of the Indian Medical Council Act, 1956 (102 of 1956)), Dr v p Kanakaraddi Memorial College Of Nursing, Mahalingpur dist Bagalkote has constituted anti-ragging committee in order to safeguard the bright future of students.</p>
            <p>Drvpkcon Mahalingpur banned ragging from any or group of students in the college premises like college campus, class rooms, laboratory, hospital, toilets, canteen, hostel, sports ground etc.</p>
            <p>The rules and regulations of Drvpkcon Mahalingpur anti-ragging committee are listed as below.</p>
            <ol className="numbered-list regulation-list">
              <li>These regulations may be called Prevention and Prohibition of Ragging in college premises.</li>
              <li>To eradicate ragging from college campus by law, preventing its occurrence by following the provisions of these Regulations and punishing those who indulge in ragging as provided for in these Regulations and the appropriate law in force.</li>
              <li>&quot;Head of the institution&quot; means the Dean/Principal/Director of the college/institution.</li>
              <li><strong>Ragging means</strong> — any conduct whether by words spoken or written or by an act which has the effect of harassing, teasing, treating or handling with rudeness any other student, indulging in rowdy or undisciplined activities which causes or is likely to cause annoyance, hardship or psychological harm or to raise fear or apprehension thereof in a fresher or a junior student or asking the students to do any act or perform something which such student will not in the ordinary course and which has the effect of causing or generating a sense of shame or embarrassment so as to adversely affect the physique or psyche of a fresher or a junior student.</li>
              <li><strong>Punishment.</strong> Depending upon the nature and gravity of the offence as established by the Anti-Ragging Committee of the institution, the possible punishments for those found guilty of ragging at the institution level shall be any one or any combination of the following:
                <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                  <li>Suspension from attending classes and academic privileges.</li>
                  <li>Withholding / withdrawing scholarship / fellowship and other benefits.</li>
                  <li>Debarring from appearing in any test/ examination or other evaluation Process.</li>
                  <li>Withholding results.</li>
                  <li>Debarring from representing the institution in any regional, national or international meet, tournament, youth festival, etc.</li>
                  <li>Suspension/ expulsion from the hostel.</li>
                  <li>Cancellation of admission.</li>
                  <li>Rustication from the institution for period ranging from 1 to 4 semesters.</li>
                  <li>Expulsion from the institution and consequent debarring from admission to any other institution for a specific period.</li>
                  <li>Fine of Rs. 25,000/- to Rs. 1 lakh.</li>
                </ul>
              </li>
            </ol>
          </AntiRaggingBlock>
          </div>
        </div>
      </section>

      <section id="gallery" className="page-section scroll-section" style={{ background: 'var(--color-off-white)' }}>
        <h2 className="section-title">Photo Gallery</h2>
        <p className="section-subtitle">Glimpses of campus life, events, and facilities.</p>
        <Gallery functions={galleryFunctions} />
      </section>

      <section id="contact" className="page-section scroll-section">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Reach out for admissions, enquiries, or general information.</p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>College Address</h3>
            <address className="contact-address">
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p>{address.city}</p>
              <p><a href={`tel:${address.phone.replace(/\s/g, '')}`}>{address.phone}</a></p>
              <p><a href={`mailto:${address.email}`}>{address.email}</a></p>
            </address>
            <div className="contact-map">
              <iframe title="College location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6918165999997!2d77.594614314!3d12.934690990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c49c040309%3A0x6553433f72187b94!2sBangalore%2C%2BKarnataka!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="220" style={{ border: 0, borderRadius: 'var(--radius)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="contact-forms">
            <div id="admission"><AdmissionInquiryForm whatsappNumber={address.phone} /></div>
          </div>
        </div>
      </section>
    </>
  )
}
