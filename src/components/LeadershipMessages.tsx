'use client'

import Image from 'next/image'
import React, { useState } from 'react'

type TabId = 'director' | 'management' | 'principal'

const TABS: { id: TabId; label: string }[] = [
  { id: 'director', label: "Director's Message" },
  { id: 'management', label: 'Management Message' },
  { id: 'principal', label: "Principal's Message" },
]

type LeadershipMessagesProps = {
  director: React.ReactNode
  management: React.ReactNode
  principal: React.ReactNode
  /** Optional image URL for the Director (e.g. /media/director.jpeg). */
  directorImage?: string
}

export function LeadershipMessages({ director, management, principal, directorImage }: LeadershipMessagesProps) {
  const [active, setActive] = useState<TabId>('director')
  const [expandedPanels, setExpandedPanels] = useState<Set<TabId>>(new Set())

  const content = {
    director,
    management,
    principal,
  }

  const toggleExpand = (id: TabId) => {
    setExpandedPanels((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="leadership-messages">
      <div className="leadership-tabs" role="tablist" aria-label="Leadership messages">
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active === id}
            aria-controls={`panel-${id}`}
            id={`tab-${id}`}
            className={`leadership-tab ${active === id ? 'leadership-tab-active' : ''}`}
            onClick={() => setActive(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="leadership-panels">
        {TABS.map(({ id }) => {
          const isExpanded = expandedPanels.has(id)
          const isActive = active === id
          const showDirectorImage = id === 'director' && directorImage
          return (
            <div
              key={id}
              id={`panel-${id}`}
              role="tabpanel"
              aria-labelledby={`tab-${id}`}
              hidden={!isActive}
              className="leadership-panel"
            >
              <div
                className={`leadership-panel-inner ${!isExpanded ? 'leadership-panel-inner--collapsed' : ''} ${showDirectorImage ? 'leadership-panel-inner--with-image' : ''}`}
              >
                {showDirectorImage && (
                  <div className="leadership-panel-image">
                    <Image
                      src={directorImage}
                      alt="Director"
                      width={240}
                      height={280}
                      className="leadership-photo"
                      unoptimized={!directorImage.startsWith('https://')}
                    />
                  </div>
                )}
                <div className="leadership-panel-content">{content[id]}</div>
              </div>
              <div className="leadership-panel-actions">
                <button
                  type="button"
                  className="leadership-show-more-btn"
                  onClick={() => toggleExpand(id)}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
