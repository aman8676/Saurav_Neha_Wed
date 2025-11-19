"use client";

import { motion } from "framer-motion";

export default function SangeetPage() {
  // floating notes animation
  const notes = ["🎵", "🎶", "✨"];

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: "#fffdf8",
        backgroundImage: `
          radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
          radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)
        `,
      }}
    >
      {/* Floating notes */}
      {notes.map((note, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          initial={{ x: -50, y: 100 + i * 80, opacity: 0 }}
          animate={{ x: "120vw", opacity: 1 }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {note}
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="text-center"
      >
        <motion.h1
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-4xl md:text-6xl font-bold text-purple-700 drop-shadow-md"
        >
          Sangeet Photos Coming Soon 🎤💃✨
        </motion.h1>

        <p className="mt-4 text-lg text-gray-700 font-medium">
          Beautiful dance memories are loading…
        </p>
      </motion.div>
    </div>
  );
}
