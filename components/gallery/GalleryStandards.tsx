"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCamera, FiUserCheck, FiShield } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

const standardsList = [
  {
    icon: FiCamera,
    title: "Zero Digital Retouching",
    desc: "All before & after photographs are captured under standardized clinical polarized lighting. We enforce a strict zero-touchup, zero-filter policy to present true clinical progress.",
  },
  {
    icon: FiUserCheck,
    title: "Doctor-Led Supervision",
    desc: "Every clinical transformation journey depicted is personally diagnosed, monitored, and cleared by Dr. Shraddha Sonanis, adapting laser and medical settings to individual skin responses.",
  },
  {
    icon: FiShield,
    title: "USFDA-Cleared Suite",
    desc: "We exclusively invest in USFDA-cleared diagnostic and laser treatment technologies. Your skin health transformations are backed by strict medical safety guidelines.",
  },
];

export default function GalleryStandards() {
  return (
    <section className="py-16 md:py-24 bg-background relative z-10 w-full border-t border-border/80">
      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSectionTitle
          title="Behind the Results"
          subtitle="Our Clinical transparency Standards"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {standardsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-altbg/30 backdrop-blur-sm border border-border/60 hover:border-primary/25 hover:bg-altbg/50 transition-all duration-500 rounded-[2rem] p-8 shadow-sm hover:shadow group"
              >
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
