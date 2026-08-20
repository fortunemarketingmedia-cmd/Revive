"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slideshowPhotos = [
  {
    url: "/images/gallery/room.webp",
    label: "Main Consultation & Advisory Suite",
  },
  {
    url: "/images/gallery/dermatology-room.webp",
    label: "Advanced Medical Dermatology Clinic Room",
  },
  {
    url: "/images/gallery/clinic.webp",
    label: "Clinical Reception & Lobby Area",
  },
  {
    url: "/images/gallery/diagnos.webp",
    label: "Private Diagnosis Room",
  },
  {
    url: "/images/gallery/usfda.webp",
    label: "USFDA Laser Technology Setup Room",
  },
  {
    url: "/images/gallery/machine.webp",
    label: "Sterilized Medical-Grade Equipment Desk",
  },
  {
    url: "/images/gallery/skinbarrier.webp",
    label: "Aesthetic Treatment & Skin-Barrier Therapy Room",
  },
];

export default function ClinicImages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slideshowPhotos.length);
    }, 4500); // 4.5 seconds interval
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handleNext = () => {
    stopTimer();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slideshowPhotos.length);
    startTimer();
  };

  const handlePrev = () => {
    stopTimer();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slideshowPhotos.length) % slideshowPhotos.length);
    startTimer();
  };

  const handleDotClick = (idx: number) => {
    stopTimer();
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
    startTimer();
  };

  // Cross-fade variants
  const backgroundVariants = {
    initial: {
      opacity: 0,
      scale: 1.05,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 1.2, ease: "easeInOut" as const },
        scale: { duration: 1.8, ease: "easeOut" as const },
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.2, ease: "easeInOut" as const },
    },
  };

  return (
    <section className="relative w-full h-[460px] sm:h-[550px] md:h-[650px] overflow-hidden flex flex-col justify-between py-10 sm:py-16 md:py-20 text-white z-10 bg-black">
      
      {/* Immersive Slideshow Background Images */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentIndex}
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slideshowPhotos[currentIndex].url}
              alt={slideshowPhotos[currentIndex].label}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark Vignette Overlay for maximum readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75 z-10 pointer-events-none" />

      {/* 1. TOP HEADER OVERLAY AREA */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-14 sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-inter text-xs font-semibold tracking-widest text-[#7C131F] uppercase mb-2 block"
        >
          Inside Revive Skin Clinics
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-playfair text-3xl md:text-5xl font-medium tracking-tight text-white"
        >
          Our Clinical Environment
        </motion.h2>

        <div className="w-full flex items-center justify-center mt-4">
          <div className="h-[1px] bg-white/20 w-16" />
          <span className="w-1.5 h-1.5 mx-2 rounded-full bg-[#7C131F]" />
          <div className="h-[1px] bg-white/20 w-16" />
        </div>
      </div>

      {/* 2. BOTTOM INFO & DOTS AREA */}
      <div className="relative z-20 text-center max-w-3xl mx-auto px-14 sm:px-6">
        {/* Large active description text */}
        <AnimatePresence mode="wait">
          <motion.h3
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="font-playfair text-xl md:text-3xl font-medium text-white tracking-wide mb-6"
          >
            {slideshowPhotos[currentIndex].label}
          </motion.h3>
        </AnimatePresence>

        {/* Interactive Progress Indicator Dots (Pills) */}
        <div className="flex justify-center items-center gap-2 sm:gap-3">
          {slideshowPhotos.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`min-h-11 min-w-6 flex items-center justify-center rounded-full transition-all duration-500 ease-out focus:outline-none after:block after:h-2.5 after:rounded-full after:transition-all ${
                  isActive
                    ? "after:w-8 after:bg-[#7C131F] after:shadow-sm"
                    : "after:w-2.5 after:bg-white/30 hover:after:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* 3. EDGE MANUAL NAVIGATION ARROWS */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-25 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl sm:text-2xl hover:bg-[#7C131F] hover:border-[#7C131F] hover:text-black transition-all duration-300 shadow-lg"
        aria-label="Previous slide"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-25 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl sm:text-2xl hover:bg-[#7C131F] hover:border-[#7C131F] hover:text-black transition-all duration-300 shadow-lg"
        aria-label="Next slide"
      >
        <FiChevronRight />
      </button>

    </section>
  );
}
