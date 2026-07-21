"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import { treatmentCategories } from "@/lib/content/treatments";
import { useTreatmentModal } from "@/components/providers/TreatmentModalProvider";

export default function TreatmentCategories() {
  const { openCategory } = useTreatmentModal();

  return (
    <section className="py-20 md:py-28 bg-altbg relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#7c131f03_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16 relative z-10">
        <AnimatedSectionTitle
          title="Clinical Solutions for Every Skin & Hair Need"
          subtitle="Treatment Categories"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {treatmentCategories.map((category, idx) => {
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="relative w-full min-h-[420px] sm:min-h-[460px] flex flex-col justify-end rounded-[2rem] border-2 border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.18)] overflow-hidden group bg-altbg"
              >
                {/* Background Image */}
                <Image
                  src={category.image}
                  alt={category.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
                />

                {/* Glassmorphic Fading Frosted Blend Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[65%] rounded-b-[2rem] frosted-blend pointer-events-none z-10" />

                {/* Pill Icon Badge top left */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="font-playfair text-xs w-8 h-8 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center font-semibold text-white shadow-sm">
                    {category.icon}
                  </span>
                </div>

                {/* Text Content Overlay (Smoothly integrated in z-20) */}
                <div className="relative z-20 p-6 md:p-8 pt-12 flex flex-col w-full text-white">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-playfair text-xl md:text-2xl text-white font-medium tracking-tight group-hover:text-[#7C131F] transition-colors">
                        {category.label}
                      </h3>
                      <span className="font-inter text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white bg-white/20 px-3 py-1 rounded-full border border-white/20">
                        {category.count} Procedures
                      </span>
                    </div>
                    <p className="font-inter text-xs md:text-sm text-white/75 leading-relaxed mb-6">
                      {category.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-inter text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#7C131F] group-hover:text-white transition-colors">
                      View Treatments
                    </span>
                    <span className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white group-hover:text-black group-hover:bg-[#7C131F] group-hover:border-[#7C131F] transition-all duration-300">
                      <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>

                {/* Card Link Overlay replaced with custom Modal trigger button */}
                <div
                  onClick={() => openCategory(category.id)}
                  className="absolute inset-0 z-25 cursor-pointer"
                  role="button"
                  aria-label={`View ${category.label}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
