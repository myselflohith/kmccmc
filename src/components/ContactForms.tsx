'use client'

import React, { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('done')
  }

  return (
    <form className="form-block" onSubmit={handleSubmit}>
      <h3 className="form-title">General Enquiry</h3>
      <label className="form-label">
        Name <span className="required">*</span>
        <input type="text" name="name" className="form-input" required />
      </label>
      <label className="form-label">
        Email <span className="required">*</span>
        <input type="email" name="email" className="form-input" required />
      </label>
      <label className="form-label">
        Phone
        <input type="tel" name="phone" className="form-input" />
      </label>
      <label className="form-label">
        Message <span className="required">*</span>
        <textarea name="message" className="form-input form-textarea" rows={4} required />
      </label>
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : status === 'done' ? 'Sent' : 'Send Message'}
      </button>
    </form>
  )
}

export function AdmissionInquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('done')
  }

  return (
    <form className="form-block" onSubmit={handleSubmit}>
      <h3 className="form-title">Admission Inquiry</h3>
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
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : status === 'done' ? 'Submitted' : 'Submit Inquiry'}
      </button>
    </form>
  )
}
