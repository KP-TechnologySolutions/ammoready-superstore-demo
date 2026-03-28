'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Cylinder, Sphere, Cone } from '@react-three/drei'
import { Group } from 'three'

interface ModelProps {
  exploded?: boolean
}

export function Handgun({ exploded = false }: ModelProps) {
  const groupRef = useRef<Group>(null)
  
  const explosionOffset = exploded ? 1 : 0
  
  return (
    <group ref={groupRef}>
      {/* Barrel */}
      <group position={[0.6 + explosionOffset * 0.5, 0, 0]}>
        <Cylinder
          args={[0.03, 0.03, 1.2, 16]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#2a2a2a" roughness={0.1} metalness={0.9} />
        </Cylinder>
        
        {/* Muzzle */}
        <Cylinder
          args={[0.035, 0.03, 0.1, 16]}
          position={[0.65, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.9} />
        </Cylinder>
      </group>
      
      {/* Slide */}
      <group position={[0, 0, explosionOffset * 0.3]}>
        <Box args={[0.8, 0.3, 0.12]}>
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
        </Box>
        
        {/* Ejection port */}
        <Box args={[0.2, 0.15, 0.02]} position={[0.2, 0, 0.08]}>
          <meshStandardMaterial color="#000" roughness={0.1} metalness={1} />
        </Box>
      </group>
      
      {/* Frame */}
      <group position={[0, 0, -explosionOffset * 0.3]}>
        <Box args={[0.7, 0.5, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#333" roughness={0.3} metalness={0.7} />
        </Box>
        
        {/* Trigger guard */}
        <Cylinder
          args={[0.15, 0.15, 0.03, 16]}
          position={[-0.1, -0.2, 0]}
        >
          <meshStandardMaterial color="#2a2a2a" roughness={0.2} metalness={0.8} />
        </Cylinder>
        
        {/* Trigger */}
        <Box args={[0.05, 0.1, 0.02]} position={[-0.1, -0.15, 0]}>
          <meshStandardMaterial color="#DAA520" roughness={0.1} metalness={0.9} />
        </Box>
      </group>
      
      {/* Grip */}
      <group position={[-0.2, -0.4 - explosionOffset * 0.2, 0]}>
        <Box args={[0.3, 0.8, 0.12]}>
          <meshStandardMaterial color="#2d2d2d" roughness={0.6} metalness={0.2} />
        </Box>
        
        {/* Grip texture */}
        {[...Array(8)].map((_, i) => (
          <Box key={i} args={[0.31, 0.02, 0.01]} position={[0, -0.3 + i * 0.08, 0.07]}>
            <meshStandardMaterial color="#1a1a1a" roughness={0.8} metalness={0.1} />
          </Box>
        ))}
      </group>
      
      {/* Magazine */}
      <group position={[-0.2, -0.8 - explosionOffset * 0.4, 0]}>
        <Box args={[0.25, 0.4, 0.1]}>
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
        </Box>
        
        {/* Magazine baseplate */}
        <Box args={[0.27, 0.08, 0.12]} position={[0, -0.22, 0]}>
          <meshStandardMaterial color="#333" roughness={0.3} metalness={0.7} />
        </Box>
      </group>
      
      {/* Sights */}
      <Box args={[0.05, 0.04, 0.02]} position={[0.9, 0.2, 0]}>
        <meshStandardMaterial color="#ff6b35" emissive="#ff4500" emissiveIntensity={0.3} />
      </Box>
      <Box args={[0.05, 0.03, 0.02]} position={[-0.3, 0.2, 0]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} />
      </Box>
    </group>
  )
}

export function Rifle({ exploded = false }: ModelProps) {
  const explosionOffset = exploded ? 1.5 : 0
  
  return (
    <group>
      {/* Barrel */}
      <group position={[1.25 + explosionOffset * 0.4, 0, 0]}>
        <Cylinder
          args={[0.025, 0.025, 2.5, 16]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#2a2a2a" roughness={0.1} metalness={0.9} />
        </Cylinder>
        
        {/* Muzzle device */}
        <Cylinder
          args={[0.035, 0.025, 0.15, 16]}
          position={[1.3, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.9} />
        </Cylinder>
      </group>
      
      {/* Upper receiver */}
      <group position={[0, 0.1, explosionOffset * 0.2]}>
        <Box args={[1.5, 0.3, 0.15]}>
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
        </Box>
        
        {/* Charging handle */}
        <Box args={[0.1, 0.05, 0.08]} position={[-0.6, 0.2, 0]}>
          <meshStandardMaterial color="#333" roughness={0.3} metalness={0.7} />
        </Box>
      </group>
      
      {/* Lower receiver */}
      <group position={[-0.1, -0.2 - explosionOffset * 0.2, 0]}>
        <Box args={[1.2, 0.4, 0.12]}>
          <meshStandardMaterial color="#333" roughness={0.3} metalness={0.7} />
        </Box>
        
        {/* Magazine well */}
        <Box args={[0.25, 0.3, 0.1]} position={[0.1, -0.25, 0]}>
          <meshStandardMaterial color="#000" roughness={0.1} metalness={0.9} />
        </Box>
        
        {/* Trigger */}
        <Box args={[0.05, 0.1, 0.02]} position={[0, -0.1, 0]}>
          <meshStandardMaterial color="#DAA520" roughness={0.1} metalness={0.9} />
        </Box>
      </group>
      
      {/* Magazine */}
      <group position={[0, -0.7 - explosionOffset * 0.3, 0]}>
        <Box args={[0.3, 0.8, 0.1]}>
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
        </Box>
      </group>
      
      {/* Stock */}
      <group position={[-1 - explosionOffset * 0.3, 0, 0]}>
        <Box args={[0.8, 0.3, 0.1]}>
          <meshStandardMaterial color="#4a4a4a" roughness={0.6} metalness={0.2} />
        </Box>
        
        {/* Buttpad */}
        <Box args={[0.05, 0.35, 0.12]} position={[-0.42, 0, 0]}>
          <meshStandardMaterial color="#2a2a2a" roughness={0.8} metalness={0.1} />
        </Box>
      </group>
      
      {/* Handguard */}
      <group position={[0.5, -0.1, 0]}>
        <Cylinder
          args={[0.08, 0.08, 1.0, 12]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#333" roughness={0.4} metalness={0.6} />
        </Cylinder>
        
        {/* Rails */}
        {[0, Math.PI/2, Math.PI, 3*Math.PI/2].map((angle, i) => (
          <Box 
            key={i}
            args={[1, 0.01, 0.01]} 
            position={[0, Math.cos(angle) * 0.085, Math.sin(angle) * 0.085]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <meshStandardMaterial color="#666" roughness={0.2} metalness={0.8} />
          </Box>
        ))}
      </group>
      
      {/* Sights */}
      <Box args={[0.05, 0.06, 0.03]} position={[1.8, 0.25, 0]}>
        <meshStandardMaterial color="#ff6b35" emissive="#ff4500" emissiveIntensity={0.3} />
      </Box>
      <Box args={[0.05, 0.04, 0.03]} position={[-0.3, 0.25, 0]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} />
      </Box>
    </group>
  )
}

export function AmmoBox({ exploded = false }: ModelProps) {
  const explosionOffset = exploded ? 1 : 0
  
  return (
    <group>
      {/* Main box */}
      <Box args={[1, 0.6, 0.3]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8B4513" roughness={0.8} metalness={0.1} />
      </Box>
      
      {/* Label */}
      <Box args={[0.8, 0.4, 0.01]} position={[0, 0, 0.16]}>
        <meshStandardMaterial color="#fff" roughness={0.9} metalness={0} />
      </Box>
      
      {/* Individual rounds */}
      {[...Array(5)].map((_, i) => (
        <group key={i} position={[-0.3 + i * 0.15, 0.4 + explosionOffset * (0.3 + i * 0.1), 0]}>
          {/* Casing */}
          <Cylinder
            args={[0.045, 0.045, 0.3, 16]}
            rotation={[0, 0, 0]}
          >
            <meshStandardMaterial color="#DAA520" roughness={0.1} metalness={0.9} />
          </Cylinder>
          
          {/* Bullet */}
          <Cone
            args={[0.043, 0.1, 16]}
            position={[0, 0.2, 0]}
          >
            <meshStandardMaterial color="#C0C0C0" roughness={0.1} metalness={0.9} />
          </Cone>
          
          {/* Primer */}
          <Cylinder
            args={[0.02, 0.02, 0.01, 16]}
            position={[0, -0.16, 0]}
          >
            <meshStandardMaterial color="#8B4513" roughness={0.3} metalness={0.7} />
          </Cylinder>
        </group>
      ))}
    </group>
  )
}

export function RedDotSight({ exploded = false }: ModelProps) {
  const explosionOffset = exploded ? 0.5 : 0
  
  return (
    <group>
      {/* Main body */}
      <group position={[0, 0, explosionOffset * 0.2]}>
        <Cylinder
          args={[0.15, 0.15, 0.3, 16]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
        </Cylinder>
      </group>
      
      {/* Front lens */}
      <group position={[0, 0.16 + explosionOffset * 0.3, 0]}>
        <Cylinder
          args={[0.12, 0.12, 0.02, 16]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial 
            color="#87CEEB" 
            transparent 
            opacity={0.8} 
            roughness={0} 
            metalness={0.1} 
          />
        </Cylinder>
      </group>
      
      {/* Rear lens */}
      <group position={[0, -0.16 - explosionOffset * 0.3, 0]}>
        <Cylinder
          args={[0.12, 0.12, 0.02, 16]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial 
            color="#87CEEB" 
            transparent 
            opacity={0.8} 
            roughness={0} 
            metalness={0.1} 
          />
        </Cylinder>
      </group>
      
      {/* Mount rail */}
      <group position={[0, -0.2 - explosionOffset * 0.4, 0]}>
        <Box args={[0.4, 0.05, 0.08]}>
          <meshStandardMaterial color="#333" roughness={0.3} metalness={0.7} />
        </Box>
      </group>
      
      {/* Red dot (glowing) */}
      <Sphere args={[0.003]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#ff0000" 
          emissive="#ff0000" 
          emissiveIntensity={3} 
        />
      </Sphere>
      
      {/* Controls */}
      {['brightness', 'windage', 'elevation'].map((control, i) => (
        <Cylinder
          key={control}
          args={[0.02, 0.02, 0.08, 8]}
          position={[0.12 - i * 0.12, 0.12, 0.08]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial color="#444" roughness={0.4} metalness={0.6} />
        </Cylinder>
      ))}
    </group>
  )
}

export function Shotgun({ exploded = false }: ModelProps) {
  const explosionOffset = exploded ? 1.2 : 0
  
  return (
    <group>
      {/* Barrel */}
      <group position={[1 + explosionOffset * 0.3, 0, 0]}>
        <Cylinder
          args={[0.04, 0.04, 2, 16]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#2a2a2a" roughness={0.1} metalness={0.9} />
        </Cylinder>
        
        {/* Choke */}
        <Cylinder
          args={[0.042, 0.04, 0.1, 16]}
          position={[1.05, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.9} />
        </Cylinder>
      </group>
      
      {/* Action/Receiver */}
      <group position={[0, 0, explosionOffset * 0.15]}>
        <Box args={[1, 0.35, 0.2]}>
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
        </Box>
        
        {/* Loading port */}
        <Box args={[0.2, 0.1, 0.15]} position={[-0.3, -0.15, 0]}>
          <meshStandardMaterial color="#000" roughness={0.1} metalness={0.9} />
        </Box>
      </group>
      
      {/* Magazine tube */}
      <group position={[0.3, -0.25 - explosionOffset * 0.2, 0]}>
        <Cylinder
          args={[0.02, 0.02, 1.5, 16]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#2a2a2a" roughness={0.2} metalness={0.8} />
        </Cylinder>
      </group>
      
      {/* Stock */}
      <group position={[-0.8 - explosionOffset * 0.4, 0, 0]}>
        <Box args={[1.2, 0.4, 0.15]}>
          <meshStandardMaterial color="#8B4513" roughness={0.7} metalness={0.1} />
        </Box>
        
        {/* Buttpad */}
        <Box args={[0.05, 0.45, 0.18]} position={[-0.62, 0, 0]}>
          <meshStandardMaterial color="#2a2a2a" roughness={0.8} metalness={0.1} />
        </Box>
      </group>
      
      {/* Pump/Forend */}
      <group position={[0.3, -0.3 - explosionOffset * 0.3, 0]}>
        <Box args={[0.3, 0.25, 0.18]}>
          <meshStandardMaterial color="#333" roughness={0.4} metalness={0.6} />
        </Box>
        
        {/* Pump grooves */}
        {[...Array(6)].map((_, i) => (
          <Box 
            key={i} 
            args={[0.32, 0.01, 0.01]} 
            position={[0, 0, -0.08 + i * 0.03]}
          >
            <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
          </Box>
        ))}
      </group>
      
      {/* Trigger guard */}
      <Cylinder
        args={[0.1, 0.1, 0.02, 16]}
        position={[-0.2, -0.2, 0]}
      >
        <meshStandardMaterial color="#2a2a2a" roughness={0.2} metalness={0.8} />
      </Cylinder>
      
      {/* Trigger */}
      <Box args={[0.05, 0.08, 0.02]} position={[-0.2, -0.15, 0]}>
        <meshStandardMaterial color="#DAA520" roughness={0.1} metalness={0.9} />
      </Box>
    </group>
  )
}

export function TacticalHolster({ exploded = false }: ModelProps) {
  const explosionOffset = exploded ? 0.8 : 0
  
  return (
    <group>
      {/* Main holster body */}
      <group position={[0, 0, 0]}>
        <Box args={[0.4, 0.8, 0.2]}>
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.7} />
        </Box>
        
        {/* Interior padding */}
        <Box args={[0.38, 0.78, 0.18]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#8B4513" roughness={0.8} metalness={0.1} />
        </Box>
      </group>
      
      {/* Belt clip */}
      <group position={[-0.3 - explosionOffset * 0.3, 0, 0]}>
        <Box args={[0.1, 0.3, 0.05]}>
          <meshStandardMaterial color="#333" roughness={0.2} metalness={0.8} />
        </Box>
        
        {/* Screws */}
        {[-0.1, 0.1].map((y, i) => (
          <Cylinder
            key={i}
            args={[0.01, 0.01, 0.06, 8]}
            position={[0, y, 0]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <meshStandardMaterial color="#C0C0C0" roughness={0.1} metalness={0.9} />
          </Cylinder>
        ))}
      </group>
      
      {/* Retention strap */}
      <group position={[0, 0.3 + explosionOffset * 0.2, 0.12]}>
        <Box args={[0.45, 0.05, 0.02]}>
          <meshStandardMaterial color="#654321" roughness={0.8} metalness={0.1} />
        </Box>
        
        {/* Snap */}
        <Cylinder
          args={[0.015, 0.015, 0.01, 8]}
          position={[0.2, 0, 0.01]}
        >
          <meshStandardMaterial color="#C0C0C0" roughness={0.1} metalness={0.9} />
        </Cylinder>
      </group>
      
      {/* Brand logo area */}
      <Box args={[0.15, 0.08, 0.001]} position={[0, 0.2, 0.101]}>
        <meshStandardMaterial color="#ff6b35" roughness={0.1} metalness={0.8} />
      </Box>
    </group>
  )
}