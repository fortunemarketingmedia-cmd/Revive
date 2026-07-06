"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import { treatmentCategories } from "@/lib/content/treatments";

export default function TreatmentCategories() {
  return (
    <section className="py-20 md:py-28 bg-altbg relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#7c131f03_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSectionTitle
          title="Clinical Solutions for Every Skin & Hair Need"
          subtitle="Treatment Categories"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {treatmentCategories.map((category, idx) => {
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-border flex flex-col sm:flex-row h-full group"
              >
                {/* Image side */}
                <div className="relative aspect-[4/3] sm:aspect-square sm:w-2/5 shrink-0 overflow-hidden bg-background">
                  <Image
                    src={category.image}
                    alt={category.label}
                    fill
                    sizes="(max-width: 640px) 100vw, 250px"
                    className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-playfair text-xs w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-border flex items-center justify-center font-semibold text-primary">
                      {category.icon}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-playfair text-xl md:text-2xl text-heading font-medium tracking-tight group-hover:text-primary transition-colors">
                        {category.label}
                      </h3>
                      <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-primary bg-secondary/20 px-2.5 py-1 rounded-full">
                        {category.count} Procedures
                      </span>
                    </div>
                    <p className="font-inter text-sm text-body leading-relaxed mb-6">
                      {category.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="font-inter text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-accent1 transition-colors">
                      View Treatments
                    </span>
                    <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>

                {/* Card Link Overlay */}
                <Link
                  href={`/treatments?category=${category.id}`}
                  className="absolute inset-0 z-10"
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
