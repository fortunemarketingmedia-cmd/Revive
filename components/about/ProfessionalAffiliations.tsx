"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

const affiliations = [
  {
    acronym: "IADVL",
    name: "Indian Association of Dermatologists, Venereologists and Leprologists",
    description: "The primary national body representing Indian dermatologists, ensuring clinical excellence, regular scientific exchanges, and adherence to rigorous ethical standards.",
    credential: "Member",
  },
  {
    acronym: "IMA",
    name: "Indian Medical Association",
    description: "India's leading national organization representing medical professionals and promoting high standards in medical ethics, education, and patient care.",
    credential: "Member",
  },
];

export default function ProfessionalAffiliations() {
  return (
    <section className="py-16 md:py-24 bg-altbg relative z-10 border-t border-b border-border">
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16 relative z-10">
        <AnimatedSectionTitle
          title="Professional Affiliations"
          subtitle="Medical Credentials & Authority"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1440px] mx-auto mt-12">
          {affiliations.map((aff, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-background rounded-3xl p-8 border border-border/80 shadow-luxury flex flex-col justify-between group transition-all duration-300 hover:border-primary/20 hover:-translate-y-1"
            >
              <div>
                {/* Board acronym badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-playfair text-3xl font-semibold tracking-wide text-primary">
                    {aff.acronym}
                  </span>
                  <span className="font-inter text-[10px] uppercase font-bold tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/15">
                    {aff.credential}
                  </span>
                </div>

                <h4 className="font-playfair text-lg font-semibold leading-snug text-heading mb-4 group-hover:text-primary transition-colors duration-300">
                  {aff.name}
                </h4>
                
                <p className="font-inter text-sm text-body/80 leading-relaxed mb-6">
                  {aff.description}
                </p>
              </div>

              {/* Minimal clinical verify line */}
              <div className="h-[2px] w-12 bg-secondary/35 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
