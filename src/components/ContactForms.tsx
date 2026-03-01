'use client'

import React, { useState } from 'react'

/** Normalize phone to WhatsApp format: digits only, with country code (e.g. 918722350513) */
function toWhatsAppNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10 && !phone.startsWith('+')) return '91' + digits
  return digits
}

type AdmissionInquiryFormProps = {
  /** College WhatsApp number (e.g. +91 87223 50513). Enquiry is sent to this number. */
  whatsappNumber?: string
}

const DEFAULT_WHATSAPP = '918722350513'

export function AdmissionInquiryForm({ whatsappNumber }: AdmissionInquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'opening' | 'done'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim()
    const course = (form.elements.namedItem('course') as HTMLSelectElement).value
    const qualification = (form.elements.namedItem('qualification') as HTMLTextAreaElement).value.trim()

    const lines = [
      '*Admission Inquiry*',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Course: ${course === 'bsc-nursing' ? 'B.Sc Nursing' : course}`,
      qualification ? `Qualification: ${qualification}` : '',
    ].filter(Boolean)

    const text = lines.join('\n')
    const number = whatsappNumber ? toWhatsAppNumber(whatsappNumber) : DEFAULT_WHATSAPP
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`

    setStatus('opening')
    window.open(url, '_blank', 'noopener,noreferrer')
    setStatus('done')
  }

  return (
    <form className="form-block" onSubmit={handleSubmit}>
      <h3 className="form-title">Admission Inquiry</h3>
      <p className="form-hint">Submit to send your details via WhatsApp to the college.</p>
      <label className="form-label">
        Name <span className="required">*</span>
        <input type="text" name="name" className="form-input" required />
      </label>
      <label className="form-label">
        Email <span className="required">*</span>
        <input type="email" name="email" className="form-input" required />
      </label>
      <label className="form-label">
        Phone <span className="required">*</span>
        <input type="tel" name="phone" className="form-input" required />
      </label>
      <label className="form-label">
        Course of interest
        <select name="course" className="form-input">
          <option value="bsc-nursing">B.Sc Nursing</option>
        </select>
      </label>
      <label className="form-label">
        Qualification details
        <textarea name="qualification" className="form-input form-textarea" rows={3} placeholder="e.g. 12th PCMB, year, board" />
      </label>
      <button type="submit" className="btn btn-primary" disabled={status === 'opening'}>
        {status === 'opening' ? 'Opening WhatsApp…' : status === 'done' ? 'Open WhatsApp' : 'Submit via WhatsApp'}
      </button>
    </form>
  )
}
