'use client'

import { useState } from 'react'

export default function NapsterWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleWidget = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div 
      id="napster-ai-widget" 
      className="fixed bottom-0 right-5 z-[999999999]"
      style={{
        width: isOpen ? '300px' : '0px',
        height: isOpen ? '360px' : '0px',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Toggle Button */}
      <button
        id="napster-toggle"
        onClick={toggleWidget}
        className="flex items-center justify-center absolute -top-8 right-0 w-8 h-8 border-none rounded-t-lg cursor-pointer transition-colors"
        style={{
          background: '#1a1a2e'
        }}
        aria-label="Toggle Napster AI assistant"
        title="Toggle Napster AI"
      >
        {/* Icon changes based on open/closed state */}
        {isOpen ? (
          // Close icon (chevron down)
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        ) : (
          // Open icon (chevron up - to match their implementation)
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="18,15 12,9 6,15"></polyline>
          </svg>
        )}
      </button>

      {/* Widget Content with transparent background */}
      {isOpen && (
        <div className="w-full h-full">
          <iframe
            id="napster-iframe"
            src="https://mentorsite-embed.ciscape.com/?id=NDY5NWU5ODEtZmIzOC00MmE4LWI5NDItMjhhZDRkNDM3MTA5OmY3NWExYWM3LWJjMDctNDZjZC1hMDMxLTdjYTczMDhhNWNiNA=="
            className="w-full h-full border-0"
            style={{ 
              background: 'transparent',
              height: '100%'
            }}
            title="Napster AI Assistant"
            allow="microphone; camera; geolocation"
          />
        </div>
      )}
    </div>
  )
}