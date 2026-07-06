"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 bg-hero-gradient overflow-hidden border-b border-border">
      {/* Decorative blurred background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/15 filter blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-inter text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-4 block"
        >
          Our Story
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-heading max-w-4xl mx-auto mb-8 leading-tight"
        >
          Crafting Confidence, <br />
          <span className="italic text-primary font-light">One Skin at a Time.</span>
        </motion.h1>

        {/* Thin elegant separator line */}
        <div className="w-full flex items-center justify-center mt-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-primary/30"
          />
          <span className="w-1.5 h-1.5 mx-2 rounded-full bg-accent2" />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] bg-primary/30"
          />
        </div>
      </div>
    </section>
  );
}
