"use client";

import { motion } from "framer-motion";

export default function HaldiPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundColor: "#fffdf8",
        backgroundImage: `
          radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
          radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)
        `,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-4xl md:text-6xl font-bold text-yellow-700 drop-shadow-lg"
        >
          Photos Coming Soon 📸✨
        </motion.h1>

        <p className="mt-4 text-lg text-gray-600 font-medium">
          Haldi moments are being prepared…
        </p>
      </motion.div>
    </div>
  );
}
