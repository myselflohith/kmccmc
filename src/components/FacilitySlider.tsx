'use client'

import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export type FacilityItem = {
  title: string
  description: string
  image: string
}

const SLIDE_WIDTH_VW = 100 / 3

export function FacilitySlider({ facilities }: { facilities: FacilityItem[] }) {
  const len = facilities.length
  const [index, setIndex] = useState(len)
  const [noTransition, setNoTransition] = useState(false)
  const isResetting = useRef(false)

  // Three copies: we live in the middle copy (len .. 2*len-1), reset from 2*len to len
  const slides = [...facilities, ...facilities, ...facilities]
  const totalSlides = slides.length

  const goNext = useCallback(() => {
    if (len <= 1) return
    setIndex((i) => i + 1)
  }, [len])

  const goPrev = useCallback(() => {
    if (len <= 1) return
    if (index === len) {
      isResetting.current = true
      setNoTransition(true)
      setIndex(2 * len)
      requestAnimationFrame(() => {
        setNoTransition(false)
        setIndex(2 * len - 1)
        isResetting.current = false
      })
    } else {
      setIndex((i) => i - 1)
    }
  }, [len, index])

  const handleTransitionEnd = useCallback(() => {
    if (isResetting.current) return
    if (index === 2 * len) {
      isResetting.current = true
      setNoTransition(true)
      setIndex(len)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransition(false)
          isResetting.current = false
        })
      })
    }
  }, [index, len])

  useEffect(() => {
    if (len <= 1) return
    const id = setInterval(goNext, 5000)
    return () => clearInterval(id)
  }, [len, goNext])

  if (!facilities.length) return null

  const translateVw = 33.334 - index * SLIDE_WIDTH_VW
  const displayIndex = index % len

  return (
    <div className="facility-slider facility-slider-three">
      <div className="facility-slider-viewport">
        <div
          className="facility-slider-track facility-slider-track-three"
          style={{
            transform: `translateX(${translateVw}vw)`,
            transition: noTransition ? 'none' : undefined,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map(({ title, description, image }, i) => {
            const isCenter = i === index
            const isSide = i === (index - 1 + totalSlides) % totalSlides || i === (index + 1) % totalSlides
            const slideClass = [
              'facility-slider-slide',
              'facility-slider-slide-three',
              isCenter && 'facility-slider-slide-center',
              isSide && 'facility-slider-slide-side',
            ].filter(Boolean).join(' ')
            return (
              <div key={`${title}-${i}`} className={slideClass}>
                <div className="facility-image-card facility-slider-card">
                  <div className="facility-image-card-img">
                    <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="facility-image-card-bar">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {len > 1 && (
        <>
          <button
            type="button"
            className="facility-slider-btn facility-slider-btn-prev"
            onClick={goPrev}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            type="button"
            className="facility-slider-btn facility-slider-btn-next"
            onClick={goNext}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
          <div className="facility-slider-dots">
            {facilities.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`facility-slider-dot ${i === displayIndex ? 'active' : ''}`}
                onClick={() => setIndex(len + i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
