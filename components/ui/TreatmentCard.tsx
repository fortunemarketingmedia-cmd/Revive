"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Treatment } from "@/lib/content/treatments";
import { useTreatmentModal } from "@/components/providers/TreatmentModalProvider";

interface TreatmentCardProps {
  treatment: Treatment;
  index: number;
}

export default function TreatmentCard({ treatment, index }: TreatmentCardProps) {
  const { openTreatment } = useTreatmentModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.015 }}
      onClick={() => openTreatment(treatment)}
      className="relative w-full min-h-[480px] lg:min-h-[510px] flex flex-col justify-end rounded-[2rem] border-2 border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.18)] overflow-hidden group bg-altbg cursor-pointer"
    >
      {/* Background Image (Covers full card background) */}
      <Image
        src={treatment.image}
        alt={treatment.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
      />

      {/* Glassmorphic Fading Frosted Blend Overlay (Impilo Health Style) */}
      <div className="absolute bottom-0 left-0 right-0 h-[65%] rounded-b-[2rem] frosted-blend pointer-events-none z-10" />

      {/* Pill Badge top left */}
      <div className="absolute top-5 left-5 z-20">
        <span className="font-inter text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white bg-white/20 px-4 py-2 rounded-full border border-white/35 backdrop-blur-md shadow-sm">
          {treatment.categoryLabel}
        </span>
      </div>

      {/* Text Content Overlay (Smoothly integrated on top of the blend) */}
      <div className="relative z-20 p-6 md:p-8 pt-12 flex flex-col w-full text-white">
        <span className="text-[#F06722] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-1.5 block">
          {treatment.tagline}
        </span>
        <h3 className="font-playfair text-xl md:text-2xl text-white font-medium tracking-tight mb-2 transition-colors group-hover:text-[#7C131F]">
          {treatment.name}
        </h3>
        <p className="font-inter text-xs md:text-sm text-white/75 leading-relaxed mb-6 line-clamp-3">
          {treatment.description}
        </p>

        {/* Action Button */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="font-inter text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#7C131F] group-hover:text-white transition-colors">
            Learn More
          </span>
          <span className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white group-hover:text-black group-hover:bg-[#7C131F] group-hover:border-[#7C131F] transition-all duration-300">
            <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
