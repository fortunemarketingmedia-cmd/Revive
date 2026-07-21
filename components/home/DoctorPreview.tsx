"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { doctorData } from "@/lib/content/clinic";

export default function DoctorPreview() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Image with parallax container */}
          <div className="lg:col-span-5 relative w-full flex justify-center order-last lg:order-first">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] max-w-[400px] rounded-[30px] overflow-hidden shadow-luxury border border-border bg-altbg"
            >
              <Image
                src="/images/home/DR.webp"
                alt="Dr. Shraddha Sonanis"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Soft backdrop radial accent blob */}
            <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-secondary/10 -z-10 filter blur-2xl" />
          </div>

          {/* Right Column: Doctor Info */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <AnimatedSectionTitle
              title="Meet Our Lead Consultant"
              subtitle="Expertise You Can Trust"
              align="left"
              className="mb-8"
            />

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-playfair text-2xl md:text-3xl text-primary font-medium tracking-tight mb-1"
            >
              {doctorData.name}
            </motion.h3>
            <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent2 mb-6">
              {doctorData.title} &bull; {doctorData.specialization}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative pl-6 border-l border-primary/20 mb-8"
            >
              <span className="font-playfair text-4xl text-primary/30 absolute left-0 -top-2 select-none">&ldquo;</span>
              <p className="font-playfair text-lg md:text-xl text-heading font-light italic leading-relaxed">
                {doctorData.quote}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-inter text-sm md:text-base text-body leading-relaxed mb-8"
            >
              {doctorData.shortBio}
            </motion.p>

            {/* List of key memberships/credentials */}
            <div className="flex flex-wrap gap-3 mb-10">
              {doctorData.memberships.map((membership, idx) => (
                <span
                  key={idx}
                  className="font-inter text-[10px] uppercase font-bold tracking-widest text-primary border border-primary/20 bg-primary/5 px-4 py-2 rounded-full"
                >
                  Member of {membership}
                </span>
              ))}
              <span className="font-inter text-[10px] uppercase font-bold tracking-widest text-primary border border-primary/20 bg-primary/5 px-4 py-2 rounded-full">
                15+ Years Clinical Practice
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <LuxuryButton href="/about" variant="primary">
                Read Doctor Profile
                <FiArrowRight className="text-sm shrink-0 transition-transform group-hover:translate-x-0.5" />
              </LuxuryButton>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
