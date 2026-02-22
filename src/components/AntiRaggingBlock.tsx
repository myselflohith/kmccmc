'use client'

import React, { useState } from 'react'

type AntiRaggingBlockProps = {
  children: React.ReactNode
}

export function AntiRaggingBlock({ children }: AntiRaggingBlockProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="anti-ragging-block-wrapper">
      <div className={`anti-ragging-content ${expanded ? 'anti-ragging-content--expanded' : ''}`}>
        {children}
      </div>
      <div className="anti-ragging-actions">
        <button
          type="button"
          className="anti-ragging-read-more-btn"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      </div>
    </div>
  )
}
