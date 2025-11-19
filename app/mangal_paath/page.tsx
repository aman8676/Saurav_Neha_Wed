"use client";

import { useState } from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763527448/mangal_photo_2_uniu3d.jpg",
    alt: "Mangal photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763527448/mangal_photo_g8wsgf.jpg",
    alt: "Mangal photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763501124/magal_2_xxwyum.jpg",
    alt: "Mangal photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763501123/magal_1_sbnyr8.jpg",
    alt: "Mangal photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763528181/mangal_photo5_j2gacf.jpg",
    alt: "Mangal photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763528180/mangal_photo6_nrxjnd.jpg",
    alt: "Mangal photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763528179/mangal_photo4_zsyf1f.jpg",
    alt: "Mangal photo",
  },
  {
    src: "https://res.cloudinary.com/dleljx98b/image/upload/v1763528921/mangal_7_njsxj4.jpg",
    alt: "Mangal photo",
  },
];

export default function Mangal_Path_Page() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main
      className="min-h-screen w-full py-16 px-4"
      style={{
        backgroundColor: "#fffdf8",
        backgroundImage: `
          radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
          radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)
        `,
      }}
    >
      {/* ---------------- HEADING ---------------- */}
      <div className="text-center mb-14 fade-in-up">
        <h1 className="text-5xl md:text-6xl font-light text-amber-900 tracking-wide mb-4 drop-shadow-sm">
          Mangal Paath Photos
        </h1>

        <p className="text-amber-900/80 text-lg max-w-3xl mx-auto leading-relaxed tracking-wide">
          Timeless emotions captured in soft light and warm memories.
        </p>
      </div>

      {/* ---------------- GALLERY ---------------- */}
      <div className="mx-auto max-w-7xl grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedImage(img)}
            className="group relative overflow-hidden cursor-pointer rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
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

            {/* Download Button */}
            {/* <a
              href={img.src}
              download
              className="absolute bottom-3 right-3 bg-white/95 text-amber-900 text-xs px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              Download
            </a> */}
          </div>
        ))}
      </div>

      {/* ---------------- LIGHTBOX POPUP ---------------- */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-[90%]">
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

            {/* Download in popup */}
            <a
              href={selectedImage.src}
              download
              className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-lg text-sm font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              Download Image
            </a>
          </div>
        </div>
      )}

      {/* ---------- ANIMATIONS ---------- */}
      <style jsx>{`
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
