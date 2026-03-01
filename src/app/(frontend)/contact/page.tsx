import React from 'react'
import { AdmissionInquiryForm } from '@/components/ContactForms'

export const metadata = {
  title: 'Contact | Dr V P Kanakaraddi Memorial College Of Nursing',
  description: 'Get in touch — address, phone, email, and inquiry forms.',
}

const address = {
  line1: 'The Dr V P Kanakaraddi Memorial College Of Nursing',
  line2: 'Main Road, Venkatesh Hospital, Mahalingpur',
  city: 'Bagalkote - 587312',
  phones: [
    { display: '08350-271236', tel: '+918350271236' },
    { display: '08350-200106', tel: '+918350200106' },
    { display: '8792616004', tel: '+918792616004' },
    { display: '8722350513', tel: '+918722350513' },
  ],
  email: 'info@vpkmcn.edu.in',
}

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Contact Us</h1>
        <p className="hero-tagline">
          Reach out for admissions, enquiries, or general information.
        </p>
      </section>

      <section className="page-section">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>College Address</h2>
            <address className="contact-address">
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p>{address.city}</p>
              <p>
                {address.phones.map(({ display, tel }) => (
                  <span key={tel}>
                    <a href={`tel:${tel.replace(/\s/g, '')}`}>{display}</a>
                    <br />
                  </span>
                ))}
              </p>
              <p>
                <a href={`mailto:${address.email}`}>{address.email}</a>
              </p>
            </address>
            <div className="contact-map">
              <iframe
                title="College location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6918165999997!2d77.594614314!3d12.934690990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c49c040309%3A0x6553433f72187b94!2sBangalore%2C%2BKarnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: 'var(--radius)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="contact-forms">
            <div id="admission">
              <AdmissionInquiryForm whatsappNumber="+91 87223 50513" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
