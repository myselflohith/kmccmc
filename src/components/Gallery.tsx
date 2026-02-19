'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const placeholderImages = [
  { id: '1', src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600', alt: 'Nursing education' },
  { id: '2', src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600', alt: 'Clinical practice' },
  { id: '3', src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600', alt: 'Campus' },
  { id: '4', src: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600', alt: 'Laboratory' },
  { id: '5', src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600', alt: 'Students' },
  { id: '6', src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600', alt: 'Library' },
]

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open = (index: number) => setLightboxIndex(index)
  const close = () => setLightboxIndex(null)

  return (
    <>
      <div className="gallery-grid">
        {placeholderImages.map((img, index) => (
          <button
            key={img.id}
            type="button"
            className="gallery-item"
            onClick={() => open(index)}
            aria-label={`View ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={280}
              className="gallery-img"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={close}
          onKeyDown={(e) => e.key === 'Escape' && close()}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          tabIndex={0}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={placeholderImages[lightboxIndex].src}
              alt={placeholderImages[lightboxIndex].alt}
              width={900}
              height={600}
              className="lightbox-img"
            />
            <p className="lightbox-caption">{placeholderImages[lightboxIndex].alt}</p>
          </div>
        </div>
      )}
    </>
  )
}
