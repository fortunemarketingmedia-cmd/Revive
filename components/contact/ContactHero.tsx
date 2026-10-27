"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

export default function ContactHero() {
  return (
    <section className="page-hero relative min-h-[100vh] flex items-center pt-32 pb-20 md:pt-44 md:pb-28 bg-black overflow-hidden border-b border-border w-full">
      {/* Full-bleed background image */}
      <Image
        src="/images/contact/contact-hero.webp"
        alt="Revive Clinic Lobby Reception"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center site-cover z-0"
      />

      <div className="absolute inset-0 z-[1] bg-black/45 sm:bg-black/25 pointer-events-none" />

      <div className="page-hero-copy max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16 w-full relative z-10 flex flex-col items-start text-left [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-inter text-xs md:text-sm font-semibold tracking-widest text-[#7C131F] uppercase bg-[#FDBD0E]/95 border border-[#FDBD0E] px-4 py-2 rounded-full mb-6 inline-block [text-shadow:none]"
        >
          Contact & Booking • Nashik Branches
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.15] mb-6"
        >
          Book a Skin Consultation <br />
          <span className="italic text-[#FDBD0E] font-light">in Nashik.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-inter text-sm md:text-base text-white/95 font-medium leading-relaxed max-w-2xl mb-8"
        >
          Ready to schedule your consult or have a clinical query? Reach out to one of our branches below.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#booking-form"
            className="group relative flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto font-inter text-xs font-bold uppercase tracking-widest text-white bg-[#7C131F] rounded-full shadow-[0_10px_30px_rgba(124,19,31,0.15)] transition-all duration-500 hover:bg-black hover:text-white hover:scale-105 active:scale-95"
          >
            <FiCalendar className="text-base shrink-0" />
            <span>Intake Portal</span>
            <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <Link
            href="/treatments"
            className="flex w-full sm:w-auto items-center justify-center bg-black/35 backdrop-blur-sm border border-white/70 text-white font-inter text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#FDBD0E] hover:border-[#FDBD0E] hover:text-[#7C131F] transition-all duration-300 [text-shadow:none]"
          >
            <span>Explore Treatments</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
