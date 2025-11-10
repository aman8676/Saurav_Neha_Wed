"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // 🎥 Auto play background video
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => console.warn("Video autoplay prevented"));
    }
  }, []);

  // 🎵 Auto play music when visible
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // prepare the audio muted first so autoplay is allowed
    audio.loop = true;
    audio.muted = true;
    audio.volume = 0.5;
    audio.play().catch(() => console.log("Audio waiting for gesture"));

    // once the user interacts with page, unmute
    const enableSound = () => {
      if (audio.paused) audio.play().catch(() => {});
      audio.muted = false;
      console.log("Audio unmuted after user interaction");
      document.removeEventListener("click", enableSound);
      document.removeEventListener("scroll", enableSound);
      document.removeEventListener("touchstart", enableSound);
    };

    document.addEventListener("click", enableSound);
    document.addEventListener("scroll", enableSound);
    document.addEventListener("touchstart", enableSound);

    // stop / start on scroll visibility
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (visible) {
        if (audio.paused) audio.play().catch(() => {});
      } else {
        if (!audio.paused) audio.pause();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("scroll", enableSound);
      document.removeEventListener("touchstart", enableSound);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-[calc(100%-3rem)] h-[calc(100vh-3rem)] overflow-hidden border-[8px] border-[#e7a06f] rounded-3xl m-8 shadow-[0_0_25px_rgba(231,160,111,0.6)]"
    >
      {/* 🎬 Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center rounded-2xl brightness-[0.9] saturate-[1.1]"
          playsInline
          muted
          loop
          autoPlay
        >
          <source src="/bg_video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fff1e6]/80 via-[#ffe3d4]/30 to-transparent rounded-2xl"></div>
      </div>

      {/* 🎵 Background Music */}
      <audio ref={audioRef} playsInline loop>
        <source src="/bg_song.mp3" type="audio/mpeg" />
      </audio>

      {/* 🌸 Floral Decorations */}
      <motion.img
        src="/flower_top_left.png"
        alt=""
        className="absolute top-4 left-4 w-36 opacity-90 animate-float-slow"
        initial={{ rotate: -5, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.img
        src="/flower_bottom_right.png"
        alt=""
        className="absolute bottom-4 right-4 w-40 opacity-90 animate-float-slow delay-300"
        initial={{ rotate: 5, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* 💞 Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl font-poiret text-gray-700 font-semibold tracking-wide mb-8 leading-relaxed"
        >
          Two hearts, one journey. The countdown to forever begins.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#e78b6f] drop-shadow-[0_0_40px_rgba(231,160,111,0.6)] mb-8"
        >
          Sourabh <span className="text-gray-700 font-light">&</span> Neha
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-4xl font-poiret text-gray-700 font-bold mb-10"
        >
          A Journey of Love 💞
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-700 font-poiret font-bold mb-12 max-w-2xl leading-relaxed"
        >
          Celebrating the union of two hearts on <br />
          <span className="text-[#e78b6f] text-3xl md:text-4xl font-serif">
            November 24, 2025
          </span>
        </motion.p>
      </div>

      {/* ✨ Border Glow */}
      <div className="absolute inset-0 border-[8px] border-transparent rounded-3xl animate-borderGlow pointer-events-none"></div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        @keyframes borderGlow {
          0% {
            box-shadow: 0 0 15px rgba(231, 160, 111, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(231, 160, 111, 0.9);
          }
          100% {
            box-shadow: 0 0 15px rgba(231, 160, 111, 0.5);
          }
        }
        .animate-borderGlow {
          animation: borderGlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
