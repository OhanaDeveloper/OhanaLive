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
        color="#10b981"
        emissive="#10b981"
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
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} color="#10b981" intensity={0.3} />

        <Stars radius={50} depth={100} count={5000} factor={4} fade speed={0.5} />

        {/* Floating accent orbs */}
        <FloatingOrb position={[-3, 2, -2]} color="#10b981" speed={0.8} />
        <FloatingOrb position={[3, -1, -3]} color="#34d399" speed={1.2} />
        <FloatingOrb position={[2, 2, -4]} color="#059669" speed={1} />

        {/* Subtle glowing ring */}
        <GlowingRing position={[0, 0, -5]} />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxDistance={10}
          minDistance={3}
        />
      </Canvas>
    </div>
  )
}