"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, Sphere } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function FloatingOrb({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Sphere ref={meshRef} args={[0.15, 32, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </Sphere>
  )
}

function GlowingRing({ position }: { position: [number, number, number] }) {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.3
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <mesh ref={ringRef} position={position}>
      <torusGeometry args={[0.8, 0.02, 16, 100]} />
      <meshStandardMaterial
        color="#2dd4bf"
        emissive="#2dd4bf"
        emissiveIntensity={0.8}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Deep purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-purple-900/50 to-purple-950" />

      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <pointLight position={[-10, -10, -10]} color="#2dd4bf" intensity={0.2} />
        <pointLight position={[5, -5, 5]} color="#d97706" intensity={0.15} />

        <Stars radius={50} depth={100} count={3000} factor={4} fade speed={0.3} />

        {/* Floating accent orbs - teal */}
        <FloatingOrb position={[-3, 2, -2]} color="#2dd4bf" speed={0.8} />
        <FloatingOrb position={[3, -1, -3]} color="#5eead4" speed={1.2} />

        {/* Gold accent orb */}
        <FloatingOrb position={[2, 2, -4]} color="#d97706" speed={1} />

        {/* Subtle glowing ring */}
        <GlowingRing position={[0, 0, -5]} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
          maxDistance={10}
          minDistance={3}
        />
      </Canvas>
    </div>
  )
}
