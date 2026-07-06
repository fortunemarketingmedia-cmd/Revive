"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiInstagram } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { clinicData } from "@/lib/content/clinic";

const instagramPhotos = [
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
];

export default function InstagramPreview() {
  return (
    <section className="py-20 md:py-28 bg-altbg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSectionTitle
          title="Inside the Clinic Experience"
          subtitle="Follow @revive_skinclinic_laser"
        />

        {/* Masonry-style or equal grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          {instagramPhotos.map((photo, idx) => (
            <motion.a
              key={idx}
              href={clinicData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-border group block bg-background"
            >
              <Image
                src={photo}
                alt="Clinic Treatment Instagram preview"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              
              {/* Instagram Icon overlay */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-2xl backdrop-blur-[2px]">
                <FiInstagram />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center">
          <LuxuryButton href={clinicData.instagram} variant="outline" className="gap-2">
            <FiInstagram className="text-sm shrink-0" />
            Follow us on Instagram
          </LuxuryButton>
        </div>
      </div>
    </section>
  );
}
