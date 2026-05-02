'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const { mouse } = useThree()

  const [positions, sizes] = useMemo(() => {
    const count = 280
    const pos = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 18
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
      sz[i] = Math.random() * 0.025 + 0.008
    }
    return [pos, sz]
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    // Gentle drift
    ref.current.rotation.y = t * 0.018 + mouse.x * 0.12
    ref.current.rotation.x = mouse.y * -0.06 + Math.sin(t * 0.1) * 0.04
    // Breathe
    ref.current.position.y = Math.sin(t * 0.25) * 0.08
  })

  return (
    <Points ref={ref} positions={positions} sizes={sizes} stride={3}>
      <PointMaterial
        transparent
        color="#14b8a6"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function GlowOrbs() {
  const group = useRef<THREE.Group>(null!)

  const orbs = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      pos: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 4 - 2,
      ] as [number, number, number],
      scale: Math.random() * 0.18 + 0.08,
      speed: Math.random() * 0.4 + 0.2,
      phase: (i / 12) * Math.PI * 2,
      color: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#14b8a6' : '#5eead4',
    })),
  [])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.children.forEach((child, i) => {
      const orb = orbs[i]
      child.position.y = orbs[i].pos[1] + Math.sin(t * orb.speed + orb.phase) * 0.4
      child.position.x = orbs[i].pos[0] + Math.cos(t * orb.speed * 0.7 + orb.phase) * 0.2
      ;(child as THREE.Mesh).scale.setScalar(
        orb.scale * (1 + Math.sin(t * orb.speed + orb.phase) * 0.15)
      )
    })
  })

  return (
    <group ref={group}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.pos}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.18} />
        </mesh>
      ))}
    </group>
  )
}

function LotusRing() {
  const ref = useRef<THREE.Group>(null!)
  const petalCount = 8

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.06
    ref.current.rotation.x = 0.3 + Math.sin(state.clock.getElapsedTime() * 0.15) * 0.05
  })

  return (
    <group ref={ref} position={[0, 0, -3]}>
      {Array.from({ length: petalCount }, (_, i) => {
        const angle = (i / petalCount) * Math.PI * 2
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 2.2, Math.sin(angle) * 2.2, 0]}
            rotation={[0, 0, angle + Math.PI / 2]}
            scale={[0.5, 1, 1]}
          >
            <circleGeometry args={[1.0, 8]} />
            <meshBasicMaterial color="#14b8a6" transparent opacity={0.07} side={THREE.DoubleSide} />
          </mesh>
        )
      })}
      {/* Center glow */}
      <mesh>
        <circleGeometry args={[0.6, 32]} />
        <meshBasicMaterial color="#14b8a6" transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.5]}
      frameloop="always"
      aria-hidden="true"
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[4, 4, 4]} color="#14b8a6" intensity={1.5} />
      <pointLight position={[-4, -2, 2]} color="#a855f7" intensity={0.8} />
      <LotusRing />
      <GlowOrbs />
      <ParticleField />
    </Canvas>
  )
}
