"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const photos = [
    { src: "/photo_1.jpg", alt: "Sourabh and Neha", title: "Perfect Moments" },
    { src: "/photo_2.jpg", alt: "Happy Couple", title: "Love bloom" },
    { src: "/photo_3.jpg", alt: "Happy Times", title: "Happiness" },
    { src: "/photo_4.jpg", alt: "Celebration", title: "Celebration" },
    {
      src: "/photo_5.jpg",
      alt: "Dance Moment",
      title: "soulmates",
    },
    {
      src: "/photo_6.jpg",
      alt: "Memories",
      title: "Forever Memories",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="gallery"
      className="py-20 px-4 bg-gradient-to-b from-rose-50 via-pink-50 to-white"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-pink-600 mb-4 drop-shadow-sm">
            Gallery of Love 💞
          </h2>
          <p className="text-lg text-gray-600 italic">
            “Moments that sparkle forever in our hearts.”
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.04, y: -4 }}
              onClick={() => setSelectedIndex(index)}
              className="relative h-[28rem] rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <motion.img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Overlay text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                <h3 className="text-white text-2xl font-semibold drop-shadow-md">
                  {photo.title}
                </h3>
              </div>

              {/* Subtle shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full rounded-3xl overflow-hidden"
              >
                <motion.img
                  src={photos[selectedIndex].src}
                  alt={photos[selectedIndex].alt}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold"
                >
                  ✕
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={() =>
                    setSelectedIndex((i) =>
                      i === null ? 0 : i === 0 ? photos.length - 1 : i - 1
                    )
                  }
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center text-3xl"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    setSelectedIndex((i) =>
                      i === null ? 0 : i === photos.length - 1 ? 0 : i + 1
                    )
                  }
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center text-3xl"
                >
                  ›
                </button>

                {/* Caption */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-lg shadow-md">
                  {photos[selectedIndex].title}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
