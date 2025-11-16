// {/* <div className="min-h-screen w-full bg-[#fefcff] relative">
//   {/* Dreamy Sky Pink Glow */}
//   <div
//     className="absolute inset-0 z-0"
//     style={{
//       backgroundImage: `
//         radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
//         radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
//     }}
//   />
//     {/* Your Content/Components */}
// </div>
//  */}


"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/hero"
import CountdownTimer from "@/components/countdown-timer"
import PhotoGallery from "@/components/photo-gallery"
import InvitationSection from "@/components/invitation_section";
// import Navigation from "@/components/navigation"
import Sparkles from "@/components/sparkles"
import DetailsSection from "@/components/details-section"
import SangeetSection from "@/components/SangeetSection"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#fefcff] relative">
      {/* Dreamy Sky Pink Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
          radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />
      {/* Your Content/Components */}
      <Sparkles />
      {/* <Navigation /> */}
      <Hero />
      <CountdownTimer weddingDate="2025-11-24T00:00:00" />
      <PhotoGallery />
      <InvitationSection />
      <SangeetSection />
      <DetailsSection />

      {/* Footer */}
      <footer
        className="backdrop-blur-md border-t border-primary/20 py-12 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #fff6f7 0%, #fffafb 50%, #fff5f6 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 relative z-10"
        >
          {/* 💞 Names and Date */}
          <h3
            className="text-4xl mb-2"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: "#e76f51",
              textShadow: "0 0 10px rgba(255,182,193,0.4)",
            }}
          >
            Sourabh & Neha
          </h3>

          <p
            className="text-lg mb-1"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#555",
            }}
          >
            November 24, 2025 💫
          </p>

          <p
            className="text-sm mb-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#777",
            }}
          >
            Together, forever 💞
          </p>

          {/* ✨ Beautiful Hashtag */}
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-3xl mb-6"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: "#d84b6c",
              letterSpacing: "1px",
              textShadow: "0 0 12px rgba(255,182,193,0.6)",
            }}
          >
            #SourabhNeKiHaa 💍
          </motion.h4>

          {/* 💐 Family Mention */}

          {/* ❤️ Made by Aman */}
          <p
            className="text-sm mt-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#999",
              letterSpacing: "0.5px",
            }}
          >
            Made with <span className="text-pink-500">💖</span>{" "}
            <span
              style={{
                color: "#e76f51",
                fontWeight: "600",
                textShadow: "0 0 8px rgba(255,182,193,0.5)",
              }}
            >
            </span>
          </p>
        </motion.div>

        {/* 🌸 Soft gradient overlay at the bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-24"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255,182,193,0.15) 100%)",
          }}
        />
      </footer>
    </div>
  );
}
