import React from 'react'
import { Gallery } from '@/components/Gallery'
import { getGalleryFunctions } from '@/lib/gallery'

export const metadata = {
  title: 'Photo Gallery | Dr V P Kanakaraddi Memorial College Of Nursing',
  description: 'Campus and college life in pictures.',
}

export const revalidate = 60

export default async function GalleryPage() {
  const galleryFunctions = await getGalleryFunctions()
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Photo Gallery</h1>
        <p className="hero-tagline">
          Glimpses of campus life, events, and facilities.
        </p>
      </section>

      <section className="page-section">
        <Gallery functions={galleryFunctions} />
      </section>
    </>
  )
}
