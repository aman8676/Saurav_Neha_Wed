"use client";

import { motion } from "framer-motion";

export default function DetailsSection() {
  return (
    <section
      id="details"
      className="py-24 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent"
    >
      <div className="container mx-auto max-w-3xl">
        {/* ✨ Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-primary mb-4">
            Wedding Details
          </h2>
          <p className="text-lg text-foreground/50">
            Everything you need to know
          </p>
        </motion.div>

        {/* 💐 Details Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Decorative glow frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50" />

          {/* Main card */}
          <div className="relative bg-gradient-to-br from-background/40 to-card/60 backdrop-blur-md border border-primary/30 rounded-2xl p-8 md:p-12 shadow-xl">
            {/* Corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/40" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/40" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/40" />

            <div className="space-y-8">
              {/* 💞 Couple names */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <h3 className="text-5xl font-serif text-primary mb-1">
                  Sourabh & Neha
                </h3>
                <div className="flex items-center justify-center gap-3 text-primary/60">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/40" />
                  <span className="text-sm tracking-widest">
                    REQUEST THE HONOR
                  </span>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/40" />
                </div>
              </motion.div>

              {/* 💍 Date, Time, Location */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 my-8"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4 py-4 border-y border-primary/20">
                  <div>
                    <p className="text-sm text-foreground/60 uppercase tracking-widest mb-2">
                      Date
                    </p>
                    <p className="text-2xl font-serif text-primary">
                      November 24, 2025
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 uppercase tracking-widest mb-2">
                      Time
                    </p>
                    <p className="text-2xl font-serif text-primary">
                      Evening Ceremony
                    </p>
                  </div>
                </div>

                <div className="py-4">
                  <p className="text-sm text-foreground/60 uppercase tracking-widest mb-2">
                    Location
                  </p>
                  <p className="text-2xl font-serif text-primary">
                    Utsav Upvan Resort
                  </p>
                  <p className="text-foreground/50">Giridih</p>
                </div>

                 <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center text-lg italic mb-6"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  color: "#b94b61",
                }}
              >
                "Join us for an unforgettable evening celebrating love,
                  laughter, and new beginnings"

              </motion.p>
                
              </motion.div>

              {/* 💞 Elegant RSVP Message Above */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center text-lg italic mb-6"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  color: "#b94b61",
                }}
              >
                “Your presence and blessings will make this day even more
                special.” 🌸
              </motion.p>

              {/* RSVP Button + Family */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-3 bg-primary/10 border border-primary/40 text-primary rounded-full text-base font-semibold hover:bg-primary/20 transition-all duration-300"
                >
                  RSVP
                </motion.button>

                {/* Family mention below RSVP */}
                <p
                  className="text-md mt-4"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#555",
                  }}
                >
                  With love & regards,{" "}
                  <span style={{ color: "#e76f51", fontWeight: 600 }}>
                    Jalan & Goyal Family 💐
                  </span>
                </p>

               
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-12"
        />
      </div>
    </section>
  );
}
