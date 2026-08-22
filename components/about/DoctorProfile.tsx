"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import { doctorData } from "@/lib/content/clinic";

export default function DoctorProfile() {
  const bioParagraphs = doctorData.bio.split("\n\n");
  const firstHalfBio = bioParagraphs.slice(0, 2);
  const secondHalfBio = bioParagraphs.slice(2);

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16 flex flex-col gap-20 lg:gap-24">
        
        {/* ROW 1: Doctor Profile Image (Left) & Title + Bio Intro (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Profile Photo */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] max-w-[420px] rounded-[30px] overflow-hidden shadow-luxury border border-border bg-altbg"
            >
              <Image
                src="/images/about/DR3.webp"
                alt="Dr. Shraddha Sonanis"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover transition-transform duration-700 hover:scale-103"
              />
            </motion.div>
            
            {/* Absolute background accent elements */}
            <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full bg-secondary/15 -z-10 filter blur-2xl" />
          </div>

          {/* Right Column: Title and Bio Part 1 */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <AnimatedSectionTitle
              title="Clinical Leader & Founder"
              subtitle="Meet Dr. Shraddha Sonanis"
              align="left"
              className="mb-8"
            />
            
            <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent2 mb-6">
              {doctorData.title} &bull; {doctorData.specialization}
            </p>

            <div className="font-inter text-sm md:text-base text-body leading-relaxed flex flex-col gap-6">
              {firstHalfBio.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

        </div>

        {/* ROW 2: Bio Part 2 + Credentials (Left) & Clinic Consultation Room Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center">
          
          {/* Left Column: Bio Details, Academic Background, and Special Interests */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <div className="font-inter text-sm md:text-base text-body leading-relaxed flex flex-col gap-6 mb-10 w-full">
              {secondHalfBio.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Special Interests list */}
            <div className="w-full">
              <h4 className="font-playfair text-lg text-heading font-medium tracking-wide mb-4">Areas of Special Clinical Interest</h4>
              <div className="flex flex-wrap gap-2.5">
                {doctorData.specialInterests.map((interest, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="font-inter text-[10px] uppercase font-bold tracking-widest text-primary border border-primary/10 bg-altbg px-4 py-2 rounded-full"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clinic Consultation Room Image (Exact same size as Row 1 Image) */}
          <div className="lg:col-span-5 relative w-full flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] max-w-[420px] rounded-[30px] overflow-hidden shadow-luxury border border-border bg-altbg"
            >
              <Image
                src="/images/about/DR2.webp"
                alt="Revive Skin Clinic consultation and laser rooms"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover transition-transform duration-700 hover:scale-103"
              />
            </motion.div>
            
            {/* Absolute background accent elements */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full bg-secondary/15 -z-10 filter blur-2xl" />
          </div>

        </div>

      </div>
    </section>
  );
}
