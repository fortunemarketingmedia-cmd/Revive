"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiDroplet, FiCalendar } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

const policiesList = [
  {
    icon: FiClock,
    title: "10-Min Arrival Buffer",
    desc: "First-time visitors are advised to arrive 10-15 minutes prior to their scheduled slot to complete the clinical intake chart and skin profiling records.",
  },
  {
    icon: FiDroplet,
    title: "Clean Skin & Face Prep",
    desc: "For dermatological consultations, please avoid wearing heavy cosmetics, foundations, or sunscreen creams on target areas, as this allows clean magnification analysis.",
  },
  {
    icon: FiCalendar,
    title: "24-Hour Rescheduling",
    desc: "If you need to postpone or cancel, please notify us at least 24 hours in advance. This helps our team re-allocate the slot to patients on our priority waiting list.",
  },
];

export default function BookingPolicies() {
  return (
    <section className="py-16 md:py-24 bg-altbg/30 relative z-10 w-full border-t border-border/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSectionTitle
          title="Important Guidelines"
          subtitle="Pre-appointment policies"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {policiesList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-background border border-border/60 hover:border-primary/20 transition-all duration-300 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-secondary/15 flex items-center justify-center text-primary text-lg mb-6">
                    <Icon />
                  </div>
                  
                  <h3 className="font-playfair text-lg font-semibold text-heading mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  
                  <p className="font-inter text-xs text-body/90 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
