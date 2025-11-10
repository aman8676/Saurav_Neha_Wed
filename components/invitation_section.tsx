"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Invitation: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showUnmutePrompt, setShowUnmutePrompt] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // required for autoplay
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay blocked:", err));
    }
  }, []);

  const enableSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play().catch(() => {});
      setShowUnmutePrompt(false);
    }
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="invitation-video"
      className="relative flex flex-col md:flex-row justify-between items-center overflow-hidden px-6 md:px-12 py-8 md:py-0"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(115deg, #fff1f3 0%, #ffe3eb 40%, #fff8f9 100%)",
      }}
    >
      {/* 🌸 Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: "120%", opacity: 0 }}
            animate={{
              y: "-20%",
              opacity: [0.3, 0.8, 0.3],
              x: [0, (i % 2 === 0 ? 1 : -1) * 40],
            }}
            transition={{
              duration: 10 + i,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              fontSize: `${18 + Math.random() * 22}px`,
              color: i % 2 === 0 ? "#ff9ab7" : "#ffc2d1",
            }}
          >
            ❤️
          </motion.span>
        ))}
      </div>

      {/* 💞 LEFT SIDE - Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full md:w-[45%] text-center md:text-left flex flex-col items-center md:items-start mt-10 md:mt-0"
      >
        <h2
          className="text-[42px] md:text-[58px]"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: "#e76f51",
            textShadow: "0 0 15px rgba(255,182,193,0.6)",
            marginBottom: "12px",
          }}
        >
          You're Invited 💍
        </h2>

        <p
          className="text-[16px] md:text-[18px] leading-relaxed"
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: "#444",
            maxWidth: "500px",
            marginBottom: "20px",
          }}
        >
          With hearts full of love and joy, we invite you to witness the most
          beautiful chapter of our story. 💞
        </p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="text-[18px] md:text-[22px]"
          style={{
            fontFamily: "'Dancing Script', cursive",
            color: "#b94b61",
            fontStyle: "italic",
            lineHeight: "1.6",
            marginBottom: "25px",
            borderLeft: "4px solid rgba(255,182,193,0.6)",
            paddingLeft: "16px",
            maxWidth: "500px",
          }}
        >
          “Two souls, one heart, one promise — to share a lifetime of love and
          laughter.”
        </motion.blockquote>

        <h3
          className="text-[36px] md:text-[48px]"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: "#e85d75",
            marginBottom: "10px",
          }}
        >
          Sourabh ❤️ Neha
        </h3>

        <p
          className="text-[14px] md:text-[16px]"
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          On <strong>November 24, 2025</strong>
          <br />
          We’d be honored to have you bless our union and celebrate with us 🌷
        </p>

        {/* 💎 Download Button */}
        <motion.a
          href="/invitation.mp4"
          download="Sourabh_Neha_Wedding_Invitation.mp4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-20 inline-block mt-2 md:mt-0"
          style={{
            fontFamily: "'Poppins', sans-serif",
            textDecoration: "none",
            background: "linear-gradient(90deg, #e76f51, #ffb4a2)",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "50px",
            fontSize: "14px",
            boxShadow: "0 4px 15px rgba(231,111,81,0.3)",
            transition: "0.3s ease",
          }}
        >
          ⬇️ Download Invitation Video
        </motion.a>
      </motion.div>

      {/* 🎬 RIGHT SIDE - Video Display */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full md:w-[50%] flex justify-center items-center mt-10 md:mt-0"
      >
        <div
          className="relative p-2 md:p-4 rounded-2xl w-[90%] sm:w-[80%] md:w-auto"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.6), rgba(255,230,230,0.3))",
            boxShadow:
              "inset 0 0 30px rgba(255,255,255,0.5), 0 10px 25px rgba(255,182,193,0.4)",
            backdropFilter: "blur(12px)",
          }}
        >
          <video
            ref={videoRef}
            playsInline
            autoPlay
            loop
            style={{
              width: "100%",
              borderRadius: "20px",
              border: "3px solid rgba(255, 182, 193, 0.8)",
              boxShadow:
                "0 0 40px rgba(255, 182, 193, 0.45), 0 0 70px rgba(231,111,81,0.3)",
              backgroundColor: "#000",
              objectFit: "contain",
            }}
          >
            <source src="/invitation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* 🎛 Floating Play/Pause Button */}
          <motion.button
            onClick={handlePlayPause}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 md:top-5 md:right-8 flex justify-center items-center"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,182,193,0.9), rgba(231,111,81,0.8))",
              boxShadow: "0 0 15px rgba(231,111,81,0.6)",
              color: "#fff",
              fontSize: "22px",
              cursor: "pointer",
              border: "none",
              transition: "all 0.3s ease",
            }}
          >
            {isPlaying ? "⏸" : "▶️"}
          </motion.button>

          {/* 🔊 Tap to Unmute Overlay */}
          {showUnmutePrompt && (
            <motion.div
              onClick={enableSound}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.45)] cursor-pointer rounded-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-white text-[16px] md:text-[20px] font-poppins text-center"
              >
                🔊 Tap to Unmute
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Invitation;
