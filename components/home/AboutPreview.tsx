"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import LuxuryButton from "@/components/ui/LuxuryButton";
import StatCounter from "@/components/ui/StatCounter";

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-stretch">
          
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatedSectionTitle
              title="Where Clinical Science Meets Aesthetic Excellence"
              subtitle="The Revive Philosophy"
              align="left"
              className="mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-base text-body leading-relaxed mb-6"
            >
              Founded by Dr. Shraddha Sonanis, Revive Skin Clinics represents the pinnacle of dermatology in Nashik. We believe that healthy, radiant skin is built on clinical integrity and personalized care.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-inter text-base text-body leading-relaxed mb-10"
            >
              With over 15 years of board-certified expertise spanning Seth GS Medical College, KEM Hospital Mumbai, and Kaya Skin Clinic, we combine advanced medical dermatology, state-of-the-art USFDA lasers, and non-surgical aesthetic enhancements under one luxurious roof.
            </motion.p>

            {/* In-view stats counters */}
            <div className="grid grid-cols-3 gap-6 w-full mb-10 pt-8 border-t border-border">
              <div>
                <div className="flex items-baseline">
                  <StatCounter value={15} suffix="+" />
                </div>
                <p className="font-inter text-[10px] uppercase font-bold tracking-wider text-body/60 mt-1">
                  Years of Expertise
                </p>
              </div>
              <div>
                <div className="flex items-baseline">
                  <StatCounter value={5} suffix="k+" />
                </div>
                <p className="font-inter text-[10px] uppercase font-bold tracking-wider text-body/60 mt-1">
                  Happy Patients
                </p>
              </div>
              <div>
                <div className="flex items-baseline">
                  <StatCounter value={98} suffix="%" />
                </div>
                <p className="font-inter text-[10px] uppercase font-bold tracking-wider text-body/60 mt-1">
                  Satisfaction Rate
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <LuxuryButton href="/about" variant="outline">
                Meet Dr. Shraddha Sonanis
                <FiArrowRight className="text-sm shrink-0 transition-transform group-hover:translate-x-0.5" />
              </LuxuryButton>
            </motion.div>
          </div>

          {/* Right Column: Image (Stretches dynamically to match Left Column height on desktop) */}
          <div className="lg:col-span-5 relative w-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full h-[350px] sm:h-[450px] lg:h-full rounded-3xl overflow-hidden shadow-luxury border border-border bg-altbg"
            >
              <Image
                src="/images/home/1stimg.webp"
                alt="Revive Skin Clinic interior"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
            
            {/* Absolute background accent card */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl bg-secondary/10 -z-10 filter blur-xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
