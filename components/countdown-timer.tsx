"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  weddingDate: string;
}

export default function CountdownTimer({ weddingDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(weddingDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="relative flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 
      rounded-2xl bg-gradient-to-br from-white/70 to-pink-50/50 border border-pink-200/50 
      shadow-[0_0_25px_rgba(255,182,193,0.25)] backdrop-blur-md"
      animate={{
        y: [0, -5, 0],
        boxShadow: [
          "0 0 25px rgba(255,182,193,0.25)",
          "0 0 40px rgba(255,182,193,0.35)",
          "0 0 25px rgba(255,182,193,0.25)",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      }}
    >
      {/* Soft shimmer background overlay */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute inset-0 rounded-2xl opacity-60 bg-[linear-gradient(120deg,rgba(255,182,193,0.3),rgba(255,255,255,0.5),rgba(255,182,193,0.3))]"
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Number */}
      <motion.span
        animate={{
          opacity: [0.9, 1, 0.9],
          scale: [1, 1.04, 1],
          textShadow: [
            "0 0 8px rgba(231,111,81,0.3)",
            "0 0 16px rgba(231,111,81,0.4)",
            "0 0 8px rgba(231,111,81,0.3)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="text-4xl md:text-5xl font-bold text-[#e76f51] select-none z-10"
      >
        {String(value).padStart(2, "0")}
      </motion.span>

      {/* Label */}
      <motion.span
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="mt-2 text-sm md:text-base font-medium text-[#b94b61] tracking-wide z-10"
      >
        {label}
      </motion.span>
    </motion.div>
  );

  return (
    <section
      id="countdown"
      className="relative py-28 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #fff3f5 0%, #fff9fb 40%, #ffe6eb 100%)",
      }}
    >
      {/* Floating sparkles for background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: "120%", opacity: 0 }}
            animate={{
              y: "-20%",
              opacity: [0.2, 0.6, 0.2],
              x: [0, (i % 2 === 0 ? 1 : -1) * 30],
            }}
            transition={{
              duration: 14 + i * 0.6,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 18}px`,
              color: i % 2 === 0 ? "#ffb3c6" : "#ffd6e0",
            }}
          >
            ✨
          </motion.span>
        ))}
      </div>

      {/* Gradient overlay drift */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-pink-100/30 via-white/40 to-pink-200/30"
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h2
            className="text-5xl md:text-6xl font-serif mb-3"
            style={{
              color: "#e76f51",
              textShadow: "0 0 10px rgba(255,182,193,0.4)",
            }}
          >
            The Big Day Awaits 💍
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{
              color: "#b94b61",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Countdown to the most beautiful beginning 💞
          </p>
        </motion.div>

        {/* Countdown Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-10 md:gap-16"
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
        </motion.div>

        {/* Subtle divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-pink-300/70 to-transparent mt-16"
        />
      </div>
    </section>
  );
}
