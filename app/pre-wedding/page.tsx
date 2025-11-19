"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763532094/pre_6_fwty2l.jpg",
    alt: "Pre-wedding photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763532095/pre_10_yg3d8m.jpg",
    alt: "Pre-wedding photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763532095/pre_9_y1grd3.jpg",
    alt: "Pre-wedding photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763532094/pre_8_zyp2m5.jpg",
    alt: "Pre-wedding photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763532094/pre_7_cpd6ss.jpg",
    alt: "Pre-wedding photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763532094/pre_4_twinlp.jpg",
    alt: "Pre-wedding photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763532093/pre_2_urmm7x.jpg",
    alt: "Pre-wedding photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763532093/pre_5_dk4ime.jpg",
    alt: "Pre-wedding photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763532093/pre_1_arb0ei.jpg",
    alt: "Pre-wedding photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763532093/pre_3_kkvqas.jpg",
    alt: "Pre-wedding photo",
  },
  // add more like you did in mangal section
];

export default function PreWeddingPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main
      className="min-h-screen w-full py-16 px-4 relative overflow-hidden"
      style={{
        backgroundColor: "#fffdf8",
        backgroundImage: `
          radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
          radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)
        `,
      }}
    >
      {/* Floating soft hearts */}
      {["💗", "💞", "💖"].map((heart, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-50"
          initial={{ x: Math.random() * 300, y: 900, opacity: 0.3 }}
          animate={{ y: -50, opacity: [0.3, 0.9, 0.3] }}
          transition={{
            duration: 7 + i,
            repeat: Infinity,
            delay: i * 1.5,
          }}
        >
          {heart}
        </motion.div>
      ))}

      {/* ---------------- HEADING ---------------- */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="text-5xl md:text-6xl font-light tracking-wide mb-4 drop-shadow-sm"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#cc2e6e",
          }}
        >
          Pre-Wedding Gallery ✨💖
        </h1>

        <motion.p
          className="text-gray-700/90 text-lg max-w-3xl mx-auto leading-relaxed tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Capturing magical moments before the big day…
        </motion.p>
      </motion.div>

      {/* ---------------- GALLERY ---------------- */}
      <div className="mx-auto max-w-7xl grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {IMAGES.map((img, i) => (
          <motion.div
            key={i}
            onClick={() => setSelectedImage(img)}
            className="group relative overflow-hidden cursor-pointer rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-200/30"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>

      {/* ---------------- LIGHTBOX POPUP ---------------- */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100]"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-3xl w-[90%]"
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1100}
              height={1100}
              unoptimized
              className="rounded-xl shadow-2xl"
            />

            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black/80 rounded-full px-3 py-1 text-sm"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Download */}
            {/* <a
              href={selectedImage.src}
              download
              className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-lg text-sm font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              Download Image
            </a> */}
          </motion.div>
        </div>
      )}
    </main>
  );
}
