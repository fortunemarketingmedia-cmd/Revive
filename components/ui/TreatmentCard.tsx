"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Treatment } from "@/lib/content/treatments";

interface TreatmentCardProps {
  treatment: Treatment;
  index: number;
}

export default function TreatmentCard({ treatment, index }: TreatmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl border border-border shadow-luxury overflow-hidden flex flex-col h-full group"
    >
      {/* Image with reveal mask animation */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-altbg">
        <Image
          src={treatment.image}
          alt={treatment.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-primary bg-background/90 px-3 py-1.5 rounded-full border border-border/10 backdrop-blur-sm shadow-sm">
            {treatment.categoryLabel}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <span className="text-accent2 text-xs font-semibold uppercase tracking-widest mb-2 block">
          {treatment.tagline}
        </span>
        <h3 className="font-playfair text-xl md:text-2xl text-heading font-medium tracking-tight mb-3 transition-colors group-hover:text-primary">
          {treatment.name}
        </h3>
        <p className="font-inter text-sm text-body leading-relaxed mb-6 flex-grow">
          {treatment.description}
        </p>

        {/* Action button */}
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <span className="font-inter text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-accent1 transition-colors">
            Learn More
          </span>
          <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
            <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
      
      {/* Full card link overlay */}
      <Link href={`/treatments/${treatment.slug}`} className="absolute inset-0 z-10" aria-label={`Learn more about ${treatment.name}`} />
    </motion.div>
  );
}
