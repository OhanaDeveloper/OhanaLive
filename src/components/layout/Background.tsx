"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"

export default function Background() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <Stars radius={50} depth={100} count={5000} factor={4} fade />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    )
}