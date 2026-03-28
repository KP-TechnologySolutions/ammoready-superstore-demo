'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Html, Text } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'
import { Handgun, Rifle, AmmoBox, RedDotSight, Shotgun, TacticalHolster } from './3DModels'
import dynamic from 'next/dynamic'

const ARExperience = dynamic(() => import('./ARExperience'), { ssr: false })

interface Product3DViewerProps {
  isOpen: boolean
  onClose: () => void
  productType: 'handgun' | 'rifle' | 'ammo' | 'optic' | 'shotgun' | 'accessory'
  productName: string
}

function Product3DModel({ productType }: { productType: Product3DViewerProps['productType'] }) {
  const [exploded, setExploded] = useState(false)
  
  const getModel = () => {
    switch (productType) {
      case 'handgun': return <Handgun exploded={exploded} />
      case 'rifle': return <Rifle exploded={exploded} />
      case 'ammo': return <AmmoBox exploded={exploded} />
      case 'optic': return <RedDotSight exploded={exploded} />
      case 'shotgun': return <Shotgun exploded={exploded} />
      case 'accessory': return <TacticalHolster exploded={exploded} />
      default: return <Handgun exploded={exploded} />
    }
  }

  return (
    <group>
      {getModel()}
      
      {/* Interactive hotspots */}
      <Html position={[1, 1, 0]} distanceFactor={8}>
        <button
          onClick={() => setExploded(!exploded)}
          className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors shadow-lg"
        >
          {exploded ? 'Assemble' : 'Explode View'}
        </button>
      </Html>
    </group>
  )
}

function ViewerControls({ onClose, productName, onARRequest }: { 
  onClose: () => void, 
  productName: string,
  onARRequest: () => void
}) {
  const [viewMode, setViewMode] = useState('3d')
  const [showSpecs, setShowSpecs] = useState(false)

  return (
    <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{productName}</h3>
        <div className="flex space-x-2 mb-3">
          <button
            onClick={() => setViewMode('3d')}
            className={`px-3 py-1 rounded text-sm ${
              viewMode === '3d' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            3D View
          </button>
          <button
            onClick={onARRequest}
            className="px-3 py-1 rounded text-sm bg-purple-600 text-white hover:bg-purple-700"
          >
            AR View
          </button>
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className={`px-3 py-1 rounded text-sm ${
              showSpecs 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Specs
          </button>
        </div>
        
        {showSpecs && (
          <div className="text-xs text-gray-600 space-y-1">
            <div><strong>Caliber:</strong> 9mm Luger</div>
            <div><strong>Barrel:</strong> 4.02" Cold Hammer Forged</div>
            <div><strong>Capacity:</strong> 15+1 rounds</div>
            <div><strong>Weight:</strong> 23.65 oz (unloaded)</div>
            <div><strong>Safety:</strong> Safe Action System</div>
          </div>
        )}
      </div>

      <button
        onClick={onClose}
        className="bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

function LoadingScene() {
  return (
    <Html center>
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading 3D Experience...</p>
        <p className="text-white/70 text-sm">Preparing interactive model</p>
      </div>
    </Html>
  )
}

export default function Product3DViewer({ isOpen, onClose, productType, productName }: Product3DViewerProps) {
  const [showAR, setShowAR] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleARRequest = () => {
    setShowAR(true)
  }

  const closeAR = () => {
    setShowAR(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <ViewerControls onClose={onClose} productName={productName} onARRequest={handleARRequest} />
      
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [4, 2, 4], fov: 60 }}
          className="w-full h-full"
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={['#0a0a0a']} />
          
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            castShadow
          />
          <spotLight
            position={[-5, 5, 5]}
            intensity={0.6}
            color="#4FC3F7"
            angle={Math.PI / 6}
            penumbra={0.5}
          />
          
          <Suspense fallback={<LoadingScene />}>
            <Product3DModel productType={productType} />
          </Suspense>
          
          <ContactShadows 
            position={[0, -2, 0]} 
            opacity={0.6} 
            scale={20} 
            blur={2} 
            far={8} 
          />
          
          <Environment files="/hdri/studio.hdr" />
          
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            minDistance={2}
            maxDistance={12}
            autoRotate={false}
            dampingFactor={0.05}
            enableDamping
          />
        </Canvas>
      </Suspense>
      
      {/* Bottom controls */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-sm text-gray-600 mb-2">
            🖱️ Drag to rotate • 🔍 Scroll to zoom • 📱 Pinch on mobile
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Add to Cart - $549.99
            </button>
            <button 
              onClick={handleARRequest}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Try in AR
            </button>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Compare
            </button>
          </div>
        </div>
      </div>

      {/* AR Experience Modal */}
      <ARExperience
        isOpen={showAR}
        onClose={closeAR}
        productName={productName}
        productType={productType}
      />
    </div>
  )
}