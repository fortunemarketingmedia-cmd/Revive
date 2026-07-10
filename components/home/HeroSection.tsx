"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Generate 25 floating particles with random sizes, coordinates, and float speeds
const particlesData = Array.from({ length: 25 }).map((_, i) => ({
  id: i,
  size: [2, 4, 6][Math.floor(Math.random() * 3)],
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 12 + Math.random() * 18,
  delay: Math.random() * -15,
}));

const words = ["confidence.", "radiance.", "expertise.", "elegance.", "excellence."];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full min-h-screen bg-[#7C131F] flex items-center justify-center overflow-hidden select-none pt-32 pb-16 lg:pt-36 lg:pb-16">
      
      {/* LAYER 1 & 2: Animated Mesh Gradients & Organic Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft lighting glows */}
        <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-[#DC1F26]/15 filter blur-[120px] mix-blend-screen pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-[5%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#F06722]/10 filter blur-[140px] mix-blend-screen pointer-events-none animate-pulse-slow" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-[35%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-[#F7BDA9]/8 filter blur-[100px] mix-blend-screen pointer-events-none animate-pulse-slow" style={{ animationDelay: "5s" }} />
      </div>

      {/* LAYER 3: Subtle Noise Overlay */}
      <div className="noise-bg opacity-[0.03] z-0 pointer-events-none" />

      {/* LAYER 4: Continuous SVG Editorial Curves (strokeDashoffset drawing) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M-100,350 C350,150 700,750 1100,450 C1300,300 1500,550 1600,400"
            stroke="white"
            strokeWidth="1.5"
            className="animate-draw-curve-1"
          />
          <path
            d="M-50,650 C400,400 800,850 1200,550 C1400,400 1550,700 1650,600"
            stroke="white"
            strokeWidth="1.5"
            className="animate-draw-curve-2"
          />
        </svg>

        {/* CSS Motion Path Flowing Pills (Impilo Health Style) */}
        <div className="flowing-pill-1 hidden lg:block" />
        <div className="flowing-pill-2 hidden lg:block" />
      </div>

      {/* LAYER 5 & 6: Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {particlesData.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white rounded-full opacity-5"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* LAYER 7: Enlarged Outline Illustration (100% visible, 38% width, subtle hover) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: "-50%", rotate: 0 }}
        animate={{
          opacity: 1.0,
          scale: 1,
          y: "-50%",
          rotate: 0,
        }}
        whileHover={{
          scale: 1.025,
          y: "-51.5%",
          rotate: -0.5,
        }}
        transition={{
          opacity: { duration: 1.6, ease: "easeOut" },
          scale: { duration: 0.6, ease: "easeOut" },
          y: { duration: 0.6, ease: "easeOut" },
          rotate: { duration: 0.6, ease: "easeOut" },
        }}
        className="absolute left-[2%] top-1/2 w-[38vw] max-w-[580px] aspect-square pointer-events-auto z-0 mix-blend-screen hidden lg:block cursor-default"
        style={{ originY: 0.5 }}
      >
        <Image
          src="/images/hero-illustration.webp"
          alt="Revive Clinical Laser Outline Sketch"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 38vw"
          className="object-contain"
        />
      </motion.div>

      {/* Mobile background illustration fallback */}
      <div className="absolute inset-0 z-0 pointer-events-none lg:hidden opacity-[0.45] flex items-center justify-center mix-blend-screen">
        <div className="relative w-[85vw] h-[85vw] max-w-[420px] max-h-[420px]">
          <Image
            src="/images/hero-illustration.webp"
            alt="Revive Clinical Laser Outline Sketch"
            fill
            priority
            sizes="(max-width: 768px) 85vw, 420px"
            className="object-contain"
          />
        </div>
      </div>

      {/* LAYER 8: Content & Typography Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">
        
        {/* Right column container holding typography (Shifted right: starting at col 6) */}
        <div className="lg:col-span-7 lg:col-start-6 flex flex-col items-center lg:items-start text-center lg:text-left text-white w-full">
            
          {/* Heading Staggered entrance */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-[86px] leading-[1.08] font-bold tracking-tight text-white mb-2"
          >
            Making skin &<br />
            hair care
          </motion.h1>

          {/* Highlight word container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border border-dashed border-white/25 rounded-[28px] px-8 py-3 my-4 inline-flex items-center justify-center bg-white/5 backdrop-blur-md overflow-hidden min-w-[280px] sm:min-w-[340px] md:min-w-[420px] lg:min-w-[560px] h-[64px] sm:h-[80px] md:h-[90px] lg:h-[110px]"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-[86px] leading-none font-bold italic tracking-tight text-[#F7BDA9]"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Clinic description paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.75, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-inter text-sm sm:text-base leading-[1.8] max-w-[420px] text-white/90 mb-10 mt-4"
          >
            Expert dermatological solutions and aesthetic care with board-certified clinical excellence. Led by Dr. Shraddha Sonanis.
          </motion.p>

          {/* Luxury CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto"
          >
            <Link
              href="/contact?book=true"
              className="group relative flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto font-inter text-xs font-bold uppercase tracking-widest text-primary bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-500 hover:bg-black hover:text-white hover:scale-105 active:scale-95"
            >
              Book Appointment
              <FiArrowRight className="text-sm shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            
            <Link
              href="/treatments"
              className="flex items-center justify-center px-8 py-4 w-full sm:w-auto font-inter text-xs font-bold uppercase tracking-widest text-white border border-white/20 rounded-full hover:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-500"
            >
              Explore Treatments
            </Link>
          </motion.div>
        </div>

      </div>

    </section>
  );
}