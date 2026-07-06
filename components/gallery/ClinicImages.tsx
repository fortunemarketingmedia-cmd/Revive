"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMaximize2 } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

const clinicPhotos = [
  { url: "", label: "Treatment Room" },
  { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", label: "Doctor Consultation" },
  { url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80", label: "Laser Technology Setup" },
  { url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80", label: "Clinical Equipment" },
  { url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80", label: "Aesthetic Treatment" },
  { url: "https://images.unsplash.com/photo-1608248597481-496100c8c836?w=800&q=80", label: "Premium Skincare Products" },
];

export default function ClinicImages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-altbg relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSectionTitle
          title="Our Clinical Environment"
          subtitle="Inside Revive Skin Clinics"
        />

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clinicPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              onClick={() => setSelectedImage(photo.url)}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-luxury border border-border bg-background group cursor-pointer"
            >
              <Image
                src={photo.url}
                alt={photo.label}
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white backdrop-blur-[2px]">
                <FiMaximize2 className="text-xl self-end" />
                <span className="font-playfair text-lg font-medium tracking-wide">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-dark/90 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl focus:outline-none"
                aria-label="Close Lightbox"
              >
                <FiX />
              </button>

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Enlarged clinic view"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
