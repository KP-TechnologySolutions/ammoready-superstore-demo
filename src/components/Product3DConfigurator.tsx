'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { Handgun, Rifle, RedDotSight } from './3DModels'

interface ConfiguratorOption {
  id: string | null
  name: string
  price: number
  color?: string
  material?: string
}

interface Product3DConfiguratorProps {
  isOpen: boolean
  onClose: () => void
  productType: 'handgun' | 'rifle' | 'optic'
  productName: string
}

function ConfigurableHandgun({ finish, sight, grip }: any) {
  return (
    <group>
      <Handgun />
      {/* Add configurable components based on selections */}
      {sight && (
        <group position={[0.9, 0.25, 0]} scale={0.3}>
          <RedDotSight />
        </group>
      )}
    </group>
  )
}

function ConfigurableRifle({ finish, optic, stock }: any) {
  return (
    <group>
      <Rifle />
      {optic && (
        <group position={[0.5, 0.4, 0]} scale={0.8}>
          <RedDotSight />
        </group>
      )}
    </group>
  )
}

export default function Product3DConfigurator({ 
  isOpen, 
  onClose, 
  productType, 
  productName 
}: Product3DConfiguratorProps) {
  const [configuration, setConfiguration] = useState({
    finish: 'black',
    sight: null,
    grip: 'standard',
    optic: null,
    stock: 'standard'
  })

  const [totalPrice, setTotalPrice] = useState(549.99)

  const finishOptions: ConfiguratorOption[] = [
    { id: 'black', name: 'Matte Black', price: 0, color: '#1a1a1a' },
    { id: 'fde', name: 'Flat Dark Earth', price: 25, color: '#8B7355' },
    { id: 'od-green', name: 'OD Green', price: 25, color: '#4B5320' },
    { id: 'tungsten', name: 'Tungsten Gray', price: 50, color: '#6C7B7F' }
  ]

  const sightOptions: ConfiguratorOption[] = [
    { id: null, name: 'Iron Sights (Included)', price: 0 },
    { id: 'trijicon', name: 'Trijicon Night Sights', price: 89 },
    { id: 'ameriglo', name: 'AmeriGlo I-Dot Pro', price: 65 }
  ]

  const opticOptions: ConfiguratorOption[] = [
    { id: null, name: 'No Optic', price: 0 },
    { id: 'aimpoint', name: 'Aimpoint Micro T-2', price: 799 },
    { id: 'eotech', name: 'EOTech EXPS3', price: 659 },
    { id: 'vortex', name: 'Vortex Razor AMG UH-1', price: 449 }
  ]

  const updateConfiguration = (category: string, option: any) => {
    setConfiguration(prev => ({ ...prev, [category]: option?.id || null }))
    
    // Recalculate price
    let newPrice = 549.99 // Base price
    if (option?.price) newPrice += option.price
    setTotalPrice(newPrice)
  }

  const getConfiguredModel = () => {
    switch (productType) {
      case 'handgun':
        return <ConfigurableHandgun {...configuration} />
      case 'rifle':
        return <ConfigurableRifle {...configuration} />
      default:
        return <ConfigurableHandgun {...configuration} />
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="h-full flex">
        {/* Left Panel - 3D View */}
        <div className="flex-1 bg-gray-900 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-4 py-2 rounded-lg">
            <h3 className="font-bold">{productName}</h3>
            <p className="text-sm text-gray-300">3D Configurator</p>
          </div>

          <Suspense fallback={<div className="h-full flex items-center justify-center text-white">Loading 3D Model...</div>}>
            <Canvas
              camera={{ position: [4, 2, 4], fov: 60 }}
              className="w-full h-full"
            >
              <color attach="background" args={['#111111']} />
              
              <ambientLight intensity={0.4} />
              <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
              />
              <spotLight
                position={[-5, 5, 5]}
                intensity={0.6}
                color="#4FC3F7"
                angle={Math.PI / 6}
                penumbra={0.5}
              />
              
              {getConfiguredModel()}
              
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

          {/* View Controls */}
          <div className="absolute bottom-4 left-4 z-10 space-y-2">
            <button className="block bg-white/20 text-white px-3 py-2 rounded hover:bg-white/30 text-sm">
              Reset View
            </button>
            <button className="block bg-white/20 text-white px-3 py-2 rounded hover:bg-white/30 text-sm">
              Exploded View
            </button>
          </div>
        </div>

        {/* Right Panel - Configuration */}
        <div className="w-96 bg-white overflow-y-auto">
          <div className="p-6">
            <div className="sticky top-0 bg-white pb-4 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Configure Your {productName}</h2>
              <div className="mt-2 flex items-center space-x-4">
                <span className="text-3xl font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
                <span className="text-sm text-gray-500">Base: $549.99</span>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {/* Finish Options */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Finish</h3>
                <div className="space-y-2">
                  {finishOptions.map(option => (
                    <label key={option.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="finish"
                        value={option.id || ''}
                        checked={configuration.finish === option.id}
                        onChange={() => updateConfiguration('finish', option)}
                        className="text-blue-600"
                      />
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: option.color }}
                      ></div>
                      <div className="flex-1">
                        <div className="font-medium">{option.name}</div>
                        <div className="text-sm text-gray-500">
                          {option.price > 0 ? `+$${option.price}` : 'Included'}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sight Options */}
              {productType === 'handgun' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Sights</h3>
                  <div className="space-y-2">
                    {sightOptions.map(option => (
                      <label key={option.id || 'none'} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="sight"
                          value={option.id || ''}
                          checked={configuration.sight === option.id}
                          onChange={() => updateConfiguration('sight', option)}
                          className="text-blue-600"
                        />
                        <div className="flex-1">
                          <div className="font-medium">{option.name}</div>
                          <div className="text-sm text-gray-500">
                            {option.price > 0 ? `+$${option.price}` : 'Included'}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Optic Options for Rifles */}
              {productType === 'rifle' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Optics</h3>
                  <div className="space-y-2">
                    {opticOptions.map(option => (
                      <label key={option.id || 'none'} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="optic"
                          value={option.id || ''}
                          checked={configuration.optic === option.id}
                          onChange={() => updateConfiguration('optic', option)}
                          className="text-blue-600"
                        />
                        <div className="flex-1">
                          <div className="font-medium">{option.name}</div>
                          <div className="text-sm text-gray-500">
                            {option.price > 0 ? `+$${option.price}` : 'No additional cost'}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="sticky bottom-0 bg-white pt-6 mt-8 border-t">
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Add to Cart - ${totalPrice.toFixed(2)}
                </button>
                <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                  Save Configuration
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 text-sm">
                    Try in AR
                  </button>
                  <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 text-sm">
                    Share Config
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}