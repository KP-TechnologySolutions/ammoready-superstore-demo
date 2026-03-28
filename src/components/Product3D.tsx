'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Text, Box, Sphere, Cylinder } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { Vector3 } from 'three'

interface Product3DProps {
  productType: 'handgun' | 'rifle' | 'ammo' | 'optic' | 'shotgun' | 'accessory'
  className?: string
}

function Handgun() {
  return (
    <group>
      {/* Barrel */}
      <Cylinder
        args={[0.03, 0.03, 1.2, 16]}
        position={[0.6, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial color="#2a2a2a" roughness={0.2} metalness={0.8} />
      </Cylinder>
      
      {/* Frame */}
      <Box args={[0.8, 0.5, 0.15]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.7} />
      </Box>
      
      {/* Grip */}
      <Box args={[0.3, 0.8, 0.12]} position={[-0.2, -0.4, 0]}>
        <meshStandardMaterial color="#333" roughness={0.5} metalness={0.3} />
      </Box>
      
      {/* Trigger guard */}
      <Cylinder
        args={[0.15, 0.15, 0.03, 16]}
        position={[-0.1, -0.2, 0]}
      >
        <meshStandardMaterial color="#2a2a2a" roughness={0.2} metalness={0.8} />
      </Cylinder>
      
      {/* Sight */}
      <Box args={[0.05, 0.03, 0.02]} position={[0.9, 0.15, 0]}>
        <meshStandardMaterial color="#ff6b35" roughness={0.1} metalness={0.9} />
      </Box>
    </group>
  )
}

function Rifle() {
  return (
    <group>
      {/* Barrel */}
      <Cylinder
        args={[0.025, 0.025, 2.5, 16]}
        position={[1.25, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial color="#2a2a2a" roughness={0.1} metalness={0.9} />
      </Cylinder>
      
      {/* Upper receiver */}
      <Box args={[1.5, 0.3, 0.15]} position={[0, 0.1, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
      </Box>
      
      {/* Lower receiver */}
      <Box args={[1.2, 0.4, 0.12]} position={[-0.1, -0.2, 0]}>
        <meshStandardMaterial color="#333" roughness={0.3} metalness={0.7} />
      </Box>
      
      {/* Stock */}
      <Box args={[0.8, 0.3, 0.1]} position={[-1, 0, 0]}>
        <meshStandardMaterial color="#4a4a4a" roughness={0.6} metalness={0.2} />
      </Box>
      
      {/* Handguard */}
      <Cylinder
        args={[0.08, 0.08, 1.0, 12]}
        position={[0.5, -0.1, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial color="#333" roughness={0.4} metalness={0.6} />
      </Cylinder>
    </group>
  )
}

function AmmoBox() {
  return (
    <group>
      {/* Ammo box */}
      <Box args={[1, 0.6, 0.3]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8B4513" roughness={0.8} metalness={0.1} />
      </Box>
      
      {/* Label */}
      <Box args={[0.8, 0.4, 0.01]} position={[0, 0, 0.16]}>
        <meshStandardMaterial color="#fff" roughness={0.9} metalness={0} />
      </Box>
      
      {/* Individual rounds */}
      {[...Array(5)].map((_, i) => (
        <Cylinder
          key={i}
          args={[0.045, 0.045, 0.4, 16]}
          position={[-0.3 + i * 0.15, 0.4, 0]}
          rotation={[0, 0, 0]}
        >
          <meshStandardMaterial color="#DAA520" roughness={0.1} metalness={0.9} />
        </Cylinder>
      ))}
    </group>
  )
}

function RedDotSight() {
  return (
    <group>
      {/* Main body */}
      <Cylinder
        args={[0.15, 0.15, 0.3, 16]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
      </Cylinder>
      
      {/* Lens */}
      <Cylinder
        args={[0.12, 0.12, 0.02, 16]}
        position={[0, 0.16, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="#87CEEB" transparent opacity={0.8} roughness={0} metalness={0.1} />
      </Cylinder>
      
      {/* Mount rail */}
      <Box args={[0.4, 0.05, 0.08]} position={[0, -0.2, 0]}>
        <meshStandardMaterial color="#333" roughness={0.3} metalness={0.7} />
      </Box>
      
      {/* Red dot (glowing) */}
      <Sphere args={[0.003]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} />
      </Sphere>
    </group>
  )
}

function Shotgun() {
  return (
    <group>
      {/* Barrel */}
      <Cylinder
        args={[0.04, 0.04, 2, 16]}
        position={[1, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial color="#2a2a2a" roughness={0.1} metalness={0.9} />
      </Cylinder>
      
      {/* Action */}
      <Box args={[1, 0.35, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
      </Box>
      
      {/* Stock */}
      <Box args={[1.2, 0.4, 0.15]} position={[-0.8, 0, 0]}>
        <meshStandardMaterial color="#8B4513" roughness={0.7} metalness={0.1} />
      </Box>
      
      {/* Pump */}
      <Box args={[0.3, 0.25, 0.18]} position={[0.3, -0.3, 0]}>
        <meshStandardMaterial color="#333" roughness={0.4} metalness={0.6} />
      </Box>
    </group>
  )
}

function TacticalHolster() {
  return (
    <group>
      {/* Main holster body */}
      <Box args={[0.4, 0.8, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.7} />
      </Box>
      
      {/* Belt clip */}
      <Box args={[0.1, 0.3, 0.05]} position={[-0.3, 0, 0]}>
        <meshStandardMaterial color="#333" roughness={0.2} metalness={0.8} />
      </Box>
      
      {/* Retention strap */}
      <Box args={[0.45, 0.05, 0.02]} position={[0, 0.3, 0.12]}>
        <meshStandardMaterial color="#654321" roughness={0.8} metalness={0.1} />
      </Box>
    </group>
  )
}

function Product3DModel({ productType }: { productType: Product3DProps['productType'] }) {
  const [hovered, setHovered] = useState(false)
  
  const getModel = () => {
    switch (productType) {
      case 'handgun': return <Handgun />
      case 'rifle': return <Rifle />
      case 'ammo': return <AmmoBox />
      case 'optic': return <RedDotSight />
      case 'shotgun': return <Shotgun />
      case 'accessory': return <TacticalHolster />
      default: return <Handgun />
    }
  }

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
      rotation={[0, hovered ? Math.PI / 6 : 0, 0]}
    >
      {getModel()}
    </group>
  )
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full bg-gray-100 rounded-xl">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm">Loading 3D Model...</p>
      </div>
    </div>
  )
}

export default function Product3D({ productType, className = "" }: Product3DProps) {
  return (
    <div className={`h-64 w-full rounded-xl overflow-hidden ${className}`}>
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [3, 2, 3], fov: 50 }}
          className="bg-gradient-to-br from-gray-100 to-gray-200"
        >
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.8}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            castShadow
          />
          <pointLight position={[-3, 2, 3]} intensity={0.4} color="#4FC3F7" />
          
          <Product3DModel productType={productType} />
          
          <ContactShadows 
            position={[0, -1, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={4} 
          />
          
          <Environment preset="studio" />
          
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minDistance={2}
            maxDistance={8}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}