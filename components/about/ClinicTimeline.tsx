"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

export default function ClinicTimeline() {
  const standards = [
    {
      num: "01",
      title: "Clinical Integrity",
      description: "We prioritize evidence-based medical dermatology, diagnosing root causes before recommending aesthetic therapies.",
    },
    {
      num: "02",
      title: "Artistic Precision",
      description: "Aesthetic work is an art. We strive for natural-looking results that respect and highlight your unique anatomy.",
    },
    {
      num: "03",
      title: "USFDA Standards",
      description: "Zero compromises on safety. We only invest in gold-standard, USFDA-cleared medical lasers and equipment.",
    },
    {
      num: "04",
      title: "Patient Sanctuary",
      description: "Dermatological care deserves comfort. Our spaces are designed to provide a serene, luxurious, and stress-free retreat.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden text-white min-h-[600px] flex items-center">
      {/* Background Image Wrapper (Section only) */}
      <div className="absolute inset-0 -z-20 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=80"
          alt="Revive Clinic Luxury Interior Backdrop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay with backdrop-blur */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[6px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <AnimatedSectionTitle
          title="The Standards of Revive Care"
          subtitle="Our Clinical Philosophy"
          align="center"
          className="mb-16 text-white [&>h2]:text-white [&>span]:text-[#7C131F]"
        />

        {/* 4 Interactive Frosted Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {standards.map((std, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white/10 backdrop-blur-[12px] border border-white/20 rounded-[2rem] p-8 shadow-[0_15px_35px_rgba(0,0,0,0.25)] flex flex-col justify-start hover:bg-white/15 hover:border-white/35 transition-all duration-300 group"
            >
              <span className="font-playfair text-2xl font-bold text-[#7C131F] italic mb-4 block">
                {std.num}
              </span>
              <h3 className="font-playfair text-xl font-medium tracking-tight text-white mb-3 group-hover:text-[#7C131F] transition-colors">
                {std.title}
              </h3>
              <p className="font-inter text-xs sm:text-sm text-white/75 leading-relaxed">
                {std.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
