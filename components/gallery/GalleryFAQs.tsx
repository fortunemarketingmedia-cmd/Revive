"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

interface FAQItem {
  q: string;
  a: string;
}

const faqList: FAQItem[] = [
  {
    q: "When will I begin to see results from my treatment?",
    a: "Results vary by treatment type. Skin glowing peels show immediate effects, while collagen-building treatments like MNRF and HIFU show progressive results over 2 to 3 months. Laser Hair Reduction shows noticeable reduction in hair density after 3 to 4 sessions.",
  },
  {
    q: "Are the before-and-after photos on this page real patients?",
    a: "Yes. Every image shown represents a real patient treated at Revive Skin Hair Clinic & Laser Centre, Nashik, who has voluntarily consented to share their healing journey for educational and transparency purposes.",
  },
  {
    q: "How are before-and-after photographs taken and standardized?",
    a: "Photographs are taken during the initial consultation (Day 0) and at specific post-treatment checkups. We utilize standardized patient positioning, camera distance, and clinical polarized lighting to ensure direct, objective comparability.",
  },
  {
    q: "Can I request not to have my photographs shared?",
    a: "Absolutely. Patient privacy is our highest priority. Photographs are captured primarily for medical chart tracking, and are never shared publicly without your explicit, written consent.",
  },
];

export default function GalleryFAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 md:py-24 bg-altbg/30 relative z-10 w-full border-t border-border/80">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSectionTitle
          title="Transformation FAQs"
          subtitle="Gallery & Results Guidance"
        />

        <div className="space-y-4 max-w-3xl mx-auto mt-12">
          {faqList.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-background rounded-3xl border border-border/60 hover:border-primary/20 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-playfair text-base md:text-lg font-semibold text-heading tracking-wide pr-4">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isOpen ? "bg-primary text-background border-primary" : "text-body"
                  }`}>
                    {isOpen ? <FiMinus className="text-xs" /> : <FiPlus className="text-xs" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 font-inter text-xs md:text-sm text-body/90 leading-relaxed border-t border-border/10">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
