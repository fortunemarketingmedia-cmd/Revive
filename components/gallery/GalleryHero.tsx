"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

export default function GalleryHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 md:pt-44 md:pb-28 bg-[#FDFBF7] overflow-hidden border-b border-border w-full">
      {/* Full-bleed background image */}
      <Image
        src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1600&q=80"
        alt="Revive Patient Transformations"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center z-0"
      />

      {/* Left-to-right blending mask overlay limited to 40% width */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/85 via-[25%] to-[#FDFBF7]/0 to-[40%] z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 flex flex-col items-start text-left">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-inter text-xs md:text-sm font-semibold tracking-widest text-[#B45309] uppercase bg-[#B45309]/5 border border-[#B45309]/20 px-4 py-2 rounded-full mb-6 inline-block"
        >
          Visual Portfolio • Real Results
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.15] mb-6"
        >
          Clinical Truth, <br />
          <span className="italic text-[#B45309] font-light">Through Real Results.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-inter text-sm md:text-base text-black/80 font-medium leading-relaxed max-w-2xl mb-8"
        >
          Explore genuine, unretouched skin and hair transformations completed by our specialists in Nashik.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-black text-white font-inter text-sm font-semibold px-6 py-3.5 rounded-full shadow-luxury hover:bg-[#B45309] hover:text-white transition-all duration-300 group"
          >
            <FiCalendar className="text-base" />
            <span>Book Transformation</span>
            <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href="#before-after-gallery"
            className="flex items-center justify-center bg-transparent border border-black/20 text-black font-inter text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-black/5 transition-all duration-300"
          >
            <span>View Case Studies</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
