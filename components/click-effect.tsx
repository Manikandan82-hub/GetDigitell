"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  color: string
  angle: number
  velocity: number
  size: number
}

const colors = [
  "hsl(var(--primary))",
  "#00627d",
  "#0891b2",
  "#06b6d4",
  "#22d3ee",
]

export function ClickEffect() {
  const [particles, setParticles] = useState<Particle[]>([])

  const createParticles = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    
    // Check if clicked on an interactive element
    const isInteractive = target.closest('button, a, [role="button"], input, textarea, select, [data-click-effect]')
    
    if (!isInteractive) return

    const newParticles: Particle[] = []
    const particleCount = 12

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: (360 / particleCount) * i + Math.random() * 30,
        velocity: 80 + Math.random() * 60,
        size: 4 + Math.random() * 4,
      })
    }

    setParticles(prev => [...prev, ...newParticles])

    // Clean up particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)))
    }, 800)
  }, [])

  useEffect(() => {
    window.addEventListener("click", createParticles)
    return () => window.removeEventListener("click", createParticles)
  }, [createParticles])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {particles.map((particle) => {
          const radians = (particle.angle * Math.PI) / 180
          const endX = Math.cos(radians) * particle.velocity
          const endY = Math.sin(radians) * particle.velocity

          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: particle.x,
                top: particle.y,
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              }}
              initial={{ 
                scale: 1, 
                opacity: 1,
                x: 0,
                y: 0,
              }}
              animate={{ 
                scale: 0,
                opacity: 0,
                x: endX,
                y: endY,
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut",
              }}
            />
          )
        })}
      </AnimatePresence>
    </div>
  )
}
