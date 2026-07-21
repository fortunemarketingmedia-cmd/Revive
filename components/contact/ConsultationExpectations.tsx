"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSearch, FiCompass, FiShield } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

const stepsList = [
  {
    step: "01",
    icon: FiSearch,
    title: "Dermatological Intake",
    desc: "A thorough evaluation of your skin or hair condition using magnification and diagnostic profiling to understand underlying causes.",
  },
  {
    step: "02",
    icon: FiCompass,
    title: "Personalized Program Mapping",
    desc: "Dr. Shraddha Sonanis designs a custom timeline detailing required sessions, active care parameters, and home recovery regimens.",
  },
  {
    step: "03",
    icon: FiShield,
    title: "USFDA Safety Clearance",
    desc: "Before starting any laser or aesthetic program, we check skin sensitivities, medical histories, and patch test if clinical indications warrant.",
  },
];

export default function ConsultationExpectations() {
  return (
    <section className="py-16 md:py-24 bg-background relative z-10 w-full border-t border-border/80">
      {/* Decorative background glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16 relative z-10">
        <AnimatedSectionTitle
          title="Your First Visit"
          subtitle="What to expect during consultation"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1440px] mx-auto mt-12">
          {stepsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-altbg/30 backdrop-blur-sm border border-border/60 hover:border-primary/20 transition-all duration-500 rounded-[2.5rem] p-8 shadow-sm hover:shadow relative overflow-hidden group"
              >
                {/* Step watermarked number */}
                <span className="absolute right-6 top-4 font-playfair text-6xl font-bold text-primary/5 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
                  {item.step}
                </span>

                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl mb-6 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                  <Icon />
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-heading mb-3 tracking-wide">
                  {item.title}
                </h3>
                
                <p className="font-inter text-xs md:text-sm text-body/90 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
