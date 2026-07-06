"use client";

import { motion } from "framer-motion";
import { FiPhone, FiCalendar } from "react-icons/fi";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { clinicData } from "@/lib/content/clinic";

export default function CTABanner() {
  return (
    <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
      {/* Editorial detail: diagonal background accent line */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.01)_50%,rgba(255,255,255,0.01)_75%,transparent_75%,transparent)] bg-[size:40px_40px] opacity-10" />

      {/* Floating background blur elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/10 filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-inter text-xs md:text-sm font-semibold tracking-widest text-secondary uppercase mb-4 block"
        >
          Your Journey to Radiance Starts Here
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6"
        >
          Ready to Transform Your Skin?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-sm md:text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Book a personalised skin, hair, or laser consultation with Dr. Shraddha Sonanis at one of our Nashik branches today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <LuxuryButton href="/contact?book=true" variant="secondary" className="gap-2">
            <FiCalendar className="text-sm shrink-0" />
            Book Appointment
          </LuxuryButton>
          
          <LuxuryButton
            href={`tel:${clinicData.mobile}`}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5 hover:border-white gap-2"
          >
            <FiPhone className="text-sm shrink-0" />
            Call {clinicData.mobile}
          </LuxuryButton>
        </motion.div>
      </div>
    </section>
  );
}
