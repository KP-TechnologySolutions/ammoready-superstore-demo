'use client'

import { useState, useEffect } from 'react'

interface ARExperienceProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  productType: string
}

export default function ARExperience({ isOpen, onClose, productName, productType }: ARExperienceProps) {
  const [isARSupported, setIsARSupported] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for WebXR AR support
    if ('xr' in navigator) {
      // @ts-ignore - WebXR is experimental
      navigator.xr?.isSessionSupported('immersive-ar').then((supported: boolean) => {
        setIsARSupported(supported)
        setIsLoading(false)
      }).catch(() => {
        setIsARSupported(false)
        setIsLoading(false)
      })
    } else {
      setIsARSupported(false)
      setIsLoading(false)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">AR Experience</h3>
          <p className="text-gray-600">{productName}</p>
        </div>

        {isLoading ? (
          <div>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Checking AR capabilities...</p>
          </div>
        ) : isARSupported ? (
          <div>
            <div className="mb-6">
              <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-800 text-sm font-medium">AR Ready!</span>
                </div>
                <p className="text-green-700 text-sm mt-1">Your device supports augmented reality</p>
              </div>

              <div className="space-y-3 text-sm text-gray-600 text-left">
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">📱</span>
                  <span>Point your camera where you want to place the {productType}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">👆</span>
                  <span>Tap to place and interact with the 3D model</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">🔄</span>
                  <span>Pinch to scale, drag to rotate</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                // In a real implementation, this would launch WebXR
                alert('AR session would launch here. This demo shows the interface.')
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 mb-3"
            >
              Launch AR Experience
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-orange-800 text-sm font-medium">Limited AR Support</span>
                </div>
                <p className="text-orange-700 text-sm mt-1">Your device has limited or no AR capabilities</p>
              </div>

              <div className="space-y-4">
                <div className="text-left">
                  <h4 className="font-medium text-gray-900 mb-2">Alternative Options:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">🔄</span>
                      <span>Try the full 3D viewer instead</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">📱</span>
                      <span>Use a newer mobile device for AR</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">🖥️</span>
                      <span>View detailed specifications and photos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3"
            >
              Back to 3D Viewer
            </button>
          </div>
        )}

        <button 
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Close
        </button>

        <div className="mt-4 text-xs text-gray-500">
          AR requires compatible device and browser
        </div>
      </div>
    </div>
  )
}