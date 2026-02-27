'use client'

import Image from 'next/image'
import React, { useState } from 'react'

/** Number of image slots in the first row before the "+ N" button (button is the last cell of the first row). */
const FIRST_ROW_IMAGE_COUNT = 2

export type GalleryImageItem = {
  id: string
  src: string
  alt: string
}

export type GalleryFunctionItem = {
  id: string
  name: string
  description?: string | null
  images: GalleryImageItem[]
}

type GalleryProps = {
  /** When provided, gallery is shown function-wise (one section per function). */
  functions?: GalleryFunctionItem[]
  /** Legacy: flat list of images (shown in a single grid if no functions). */
  images?: GalleryImageItem[]
}

export function Gallery({ functions, images }: GalleryProps) {
  const functionWise = functions?.length ? functions : (images?.length ? null : null)
  const flatImages = functionWise ? functionWise.flatMap((f) => f.images) : (images?.length ? images : [])
  const [lightboxAt, setLightboxAt] = useState<{ funcIndex: number; imgIndex: number } | null>(null)
  const [expandedFuncIds, setExpandedFuncIds] = useState<Set<string>>(new Set())

  const open = (funcIndex: number, imgIndex: number) => setLightboxAt({ funcIndex, imgIndex })
  const close = () => setLightboxAt(null)
  const loadMore = (funcId: string) => setExpandedFuncIds((prev) => new Set(prev).add(funcId))

  const showByFunction = functionWise !== null && functionWise.length > 0

  const currentLightboxImage =
    lightboxAt === null
      ? null
      : showByFunction
        ? functionWise![lightboxAt.funcIndex]?.images[lightboxAt.imgIndex]
        : flatImages[lightboxAt.imgIndex]

  if (!showByFunction && flatImages.length === 0) {
    // No gallery content available from CMS; render nothing
    return null
  }

  return (
    <>
      {showByFunction ? (
        <div className="gallery-by-function">
          {functionWise!.map((func, funcIndex) => {
            const isExpanded = expandedFuncIds.has(func.id)
            const firstRowImages = func.images.slice(0, FIRST_ROW_IMAGE_COUNT)
            const visibleImages = isExpanded ? func.images : firstRowImages
            const hasMore = func.images.length > FIRST_ROW_IMAGE_COUNT
            const moreCount = func.images.length - FIRST_ROW_IMAGE_COUNT
            const previewImage = hasMore ? func.images[FIRST_ROW_IMAGE_COUNT] : undefined

            return (
              <section key={func.id} className="gallery-function-section">
                <h3 className="gallery-function-title">{func.name}</h3>
                {func.description && <p className="gallery-function-description">{func.description}</p>}
                <div className="gallery-grid">
                  {visibleImages.map((img, imgIndex) => (
                    <button
                      key={img.id}
                      type="button"
                      className="gallery-item"
                      onClick={() => open(funcIndex, imgIndex)}
                      aria-label={`View ${img.alt}`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={400}
                        height={280}
                        className="gallery-img"
                        unoptimized={!img.src.startsWith('https://images.unsplash.com')}
                      />
                    </button>
                  ))}
                  {!isExpanded && hasMore && (
                    <button
                      type="button"
                      className="gallery-item gallery-load-more"
                      onClick={() => loadMore(func.id)}
                      aria-label={`Load ${moreCount} more images`}
                    >
                      {previewImage && (
                        <span className="gallery-load-more-bg">
                          <Image
                            src={previewImage.src}
                            alt={previewImage.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="gallery-load-more-img"
                            unoptimized={!previewImage.src.startsWith('https://images.unsplash.com')}
                          />
                        </span>
                      )}
                      <span className="gallery-load-more-overlay" />
                      <span className="gallery-load-more-icon">+</span>
                      <span className="gallery-load-more-count">{moreCount}</span>
                    </button>
                  )}
                </div>
              </section>
            )
          })}
        </div>
      ) : (
        <div className="gallery-grid">
          {flatImages.map((img, index) => (
            <button
              key={img.id}
              type="button"
              className="gallery-item"
              onClick={() => setLightboxAt({ funcIndex: 0, imgIndex: index })}
              aria-label={`View ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={280}
                className="gallery-img"
                unoptimized={!img.src.startsWith('https://images.unsplash.com')}
              />
            </button>
          ))}
        </div>
      )}

      {currentLightboxImage && (
        <div
          className="lightbox-overlay"
          onClick={close}
          onKeyDown={(e) => e.key === 'Escape' && close()}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          tabIndex={0}
        >
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
            ×
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentLightboxImage.src}
              alt={currentLightboxImage.alt}
              width={900}
              height={600}
              className="lightbox-img"
              unoptimized={!currentLightboxImage.src.startsWith('https://images.unsplash.com')}
            />
            <p className="lightbox-caption">{currentLightboxImage.alt}</p>
          </div>
        </div>
      )}
    </>
  )
}
