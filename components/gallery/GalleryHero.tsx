"use client";

import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-24 bg-hero-gradient overflow-hidden border-b border-border">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-secondary/15 filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-inter text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-4 block"
        >
          Visual Portfolio
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-heading mb-6"
        >
          Transformation & <br />
          <span className="italic text-primary font-light">Clinic Gallery</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-sm md:text-base text-body max-w-xl mx-auto leading-relaxed"
        >
          View real results of skin, hair, and laser treatments at Revive, alongside photos of our clinical environment and patient experiences.
        </motion.p>
      </div>
    </section>
  );
}
