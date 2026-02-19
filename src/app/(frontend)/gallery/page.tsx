import React from 'react'
import { Gallery } from '@/components/Gallery'

export const metadata = {
  title: 'Photo Gallery | Dr V P Kanakaraddi Memorial College Of Nursing',
  description: 'Campus and college life in pictures.',
}

export default function GalleryPage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Photo Gallery</h1>
        <p className="hero-tagline">
          Glimpses of campus life, events, and facilities.
        </p>
      </section>

      <section className="page-section">
        <Gallery />
      </section>
    </>
  )
}
