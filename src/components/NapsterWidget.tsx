'use client'

import { useState } from 'react'

export default function NapsterWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleWidget = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Widget Container */}
      <div 
        id="napster-ai-widget"
        className={`relative transition-all duration-300 ${
          isOpen ? 'w-96 h-[500px]' : 'w-0 h-0'
        }`}
      >
        {/* Toggle Button */}
        <button
          id="napster-toggle"
          onClick={toggleWidget}
          className="flex items-center justify-center absolute -top-12 right-0 w-12 h-12 bg-gray-800 border-none rounded-t-xl cursor-pointer transition-colors hover:bg-gray-700"
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
            // Open icon (message circle)
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
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          )}
        </button>

        {/* Widget Content */}
        {isOpen && (
          <div className="w-full h-full bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gray-800 text-white p-4">
              <h3 className="font-semibold text-sm">AmmoReady AI Assistant</h3>
              <p className="text-xs text-gray-300 mt-1">Ask about products, pricing, and availability</p>
            </div>

            {/* Iframe - Napster embed */}
            <iframe
              id="napster-iframe"
              src="https://mentorsite-embed.ciscape.com/?id=NDY5NWU5ODEtZmIzOC00MmE4LWI5NDItMjhhZDRkNDM3MTA5OmY3NWExYWM3LWJjMDctNDZjZC1hMDMxLTdjYTczMDhhNWNiNA=="
              className="w-full h-full border-0"
              style={{ height: 'calc(100% - 80px)' }}
              title="Napster AI Assistant"
              allow="microphone; camera; geolocation"
            />
          </div>
        )}
      </div>
    </div>
  )
}