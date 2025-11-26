"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function SubtleOrb({ position, color, speed = 1, size = 0.08 }: {
  position: [number, number, number]
  color: string
  speed?: number
  size?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.08
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        transparent
        opacity={0.4}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

function DelicateRing({ position }: { position: [number, number, number] }) {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.15
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <mesh ref={ringRef} position={position}>
      <torusGeometry args={[0.6, 0.015, 16, 100]} />
      <meshStandardMaterial
        color="#14b8a6"
        emissive="#14b8a6"
        emissiveIntensity={0.4}
        transparent
        opacity={0.3}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  )
}

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Refined dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-900/30 to-black" />

      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Softer lighting */}
        <ambientLight intensity={0.12} />
        <pointLight position={[10, 10, 10]} intensity={0.25} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.15} color="#14b8a6" />
        <pointLight position={[5, -5, 5]} intensity={0.08} color="#a855f7" />

        {/* Fewer, more refined stars */}
        <Stars
          radius={60}
          depth={80}
          count={1500}
          factor={2.5}
          saturation={0.3}
          fade
          speed={0.15}
        />

        {/* Elegant floating orbs - teal theme */}
        <SubtleOrb position={[-2.5, 1.5, -3]} color="#14b8a6" speed={0.6} size={0.08} />
        <SubtleOrb position={[2.8, -0.8, -4]} color="#2dd4bf" speed={0.8} size={0.06} />
        <SubtleOrb position={[0.5, 2, -3.5]} color="#0d9488" speed={0.7} size={0.07} />

        {/* Purple accent orb */}
        <SubtleOrb position={[-1.8, -1.5, -4.5]} color="#a855f7" speed={0.65} size={0.05} />

        {/* Gold accent orb */}
        <SubtleOrb position={[2, 1.8, -5]} color="#f59e0b" speed={0.75} size={0.05} />

        {/* Delicate teal ring */}
        <DelicateRing position={[0, 0, -6]} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.1}
          maxDistance={8}
          minDistance={4}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}
