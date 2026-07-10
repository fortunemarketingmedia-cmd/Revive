"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LuxuryButton from "@/components/ui/LuxuryButton";

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Asymmetrical Image Collage (Leaf-like borders) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 max-w-lg mx-auto w-full relative">
            {/* Image 1: Top-Left (rounded top-left & bottom-right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square w-full rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-[0.5rem] rounded-bl-[0.5rem] overflow-hidden border border-border shadow-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80"
                alt="Aesthetic skincare oils and products"
                fill
                sizes="(max-width: 640px) 50vw, 250px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Image 2: Top-Right (rounded top-right & bottom-left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-square w-full rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-[0.5rem] rounded-br-[0.5rem] overflow-hidden border border-border shadow-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80"
                alt="Radiant skincare wellness"
                fill
                sizes="(max-width: 640px) 50vw, 250px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Image 3: Bottom-Left (rounded bottom-left & top-right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-square w-full rounded-bl-[3.5rem] rounded-tr-[3.5rem] rounded-tl-[0.5rem] rounded-br-[0.5rem] overflow-hidden border border-border shadow-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80"
                alt="Facial treatment at Revive Clinic"
                fill
                sizes="(max-width: 640px) 50vw, 250px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Image 4: Bottom-Right (rounded bottom-right & top-left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative aspect-square w-full rounded-br-[3.5rem] rounded-tl-[3.5rem] rounded-tr-[0.5rem] rounded-bl-[0.5rem] overflow-hidden border border-border shadow-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&q=80"
                alt="Clinical beauty serum bottles"
                fill
                sizes="(max-width: 640px) 50vw, 250px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Sparkle decorative icons */}
            <div className="absolute -bottom-6 -left-6 text-[#7C131F]/30 animate-pulse hidden sm:block">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.2 7.2 2.4-7.2 2.4-2.4 7.2-2.4-7.2-7.2-2.4 7.2-2.4z" />
              </svg>
            </div>
          </div>

          {/* Right Column: Left-Aligned Editorial Text, CTA, & Horizontal Stats Pill */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-inter text-xs font-bold uppercase tracking-widest text-[#7C131F] mb-3 block"
            >
              Premium Ingredients & Technology
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-heading leading-[1.12] mb-6"
            >
              We Use Only Premium<br />Beauty Products
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-sm md:text-base text-body leading-relaxed max-w-xl mb-8"
            >
              Indulge in luxurious skin and hair treatments designed to rejuvenate your skin, relax your body, and enhance your natural glow. We use safe, USFDA-cleared medical skincare products specifically chosen for optimal outcomes on Indian skin tones.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10"
            >
              <LuxuryButton href="/treatments" className="bg-[#7C131F] text-white hover:bg-black">
                Our Services
              </LuxuryButton>
            </motion.div>

            {/* Horizontal Stats Pill Container (Reference Image 3 Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="bg-[#7C131F]/5 border border-[#7C131F]/10 rounded-2xl p-6 md:p-8 flex flex-row items-center justify-around w-full shadow-inner"
            >
              <div className="text-center">
                <h4 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#7C131F]">
                  15+
                </h4>
                <p className="font-inter text-[10px] uppercase font-bold tracking-wider text-body/60 mt-1">
                  Expert Years
                </p>
              </div>
              <div className="w-[1px] h-10 bg-[#7C131F]/20" />
              <div className="text-center">
                <h4 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#7C131F]">
                  5k+
                </h4>
                <p className="font-inter text-[10px] uppercase font-bold tracking-wider text-body/60 mt-1">
                  Happy Patients
                </p>
              </div>
              <div className="w-[1px] h-10 bg-[#7C131F]/20" />
              <div className="text-center">
                <h4 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#7C131F]">
                  98%
                </h4>
                <p className="font-inter text-[10px] uppercase font-bold tracking-wider text-body/60 mt-1">
                  Satisfaction
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
