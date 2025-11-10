"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  duration: number
}

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    const createSparkle = () => {
      const id = nextId
      const sparkle: Sparkle = {
        id,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.8,
        duration: Math.random() * 1.2 + 0.8,
      }

      setSparkles((prev) => [...prev, sparkle])
      setNextId((p) => p + 1)

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id))
      }, sparkle.duration * 1000)
    }

    const interval = setInterval(createSparkle, 150)
    return () => clearInterval(interval)
  }, [nextId])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{
            x: `${sparkle.x}%`,
            y: `${sparkle.y}%`,
            scale: 1,
            opacity: 0.5,
          }}
          animate={{
            y: `${sparkle.y - 80}%`,
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: sparkle.duration,
            ease: "easeOut",
          }}
          className="fixed"
        >
          <div
            className="text-yellow-300/60 text-sm"
            style={{
              filter: "drop-shadow(0 0 1px rgba(253, 224, 71, 0.6))",
            }}
          >
            ✨
          </div>
        </motion.div>
      ))}
    </div>
  )
}
