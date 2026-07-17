"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiAlertCircle, FiPhoneCall, FiCheck, FiSquare } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

interface ChecklistItem {
  id: string;
  title: string;
  desc: string;
}

const preCareList: ChecklistItem[] = [
  {
    id: "pre-1",
    title: "Avoid Direct Sun Exposure",
    desc: "Stay out of direct sunlight or tanning booths for 10-14 days prior to your laser session to prevent skin hyper-sensitivity.",
  },
  {
    id: "pre-2",
    title: "Pause High-Strength Actives",
    desc: "Discontinue using high-strength skincare acids (Retinol, Vitamin C, Salicylic Acid, glycolic peels) 3 to 5 days before your appointment.",
  },
  {
    id: "pre-3",
    title: "No Waxing or Plucking",
    desc: "Do not pluck, wax, thread, or use hair removal creams on target skin areas within 7 days. Shaving is permitted if advised.",
  },
  {
    id: "pre-4",
    title: "Keep Skin Hydrated",
    desc: "Moisturize skin twice daily and drink ample water to ensure a healthy skin barrier during treatment.",
  },
];

const postCareList: ChecklistItem[] = [
  {
    id: "post-1",
    title: "Apply Sunscreen Every 3 Hours",
    desc: "Strictly apply a broad-spectrum SPF 50+ sunscreen every 3 hours during daylight hours, even when indoors.",
  },
  {
    id: "post-2",
    title: "Cleanse Gently with Cool Water",
    desc: "Use a gentle, soap-free cleanser and cool water. Gently pat dry with a clean towel; do not scrub or rub.",
  },
  {
    id: "post-3",
    title: "Avoid Heat & Heavy Sweat",
    desc: "Avoid hot water baths, steam rooms, saunas, swimming, and intense exercise for 24 to 48 hours to minimize skin irritation.",
  },
  {
    id: "post-4",
    title: "Pause Makeup & Acid Serums",
    desc: "Refrain from applying cosmetics or strong active serums for at least 48 hours to give your skin barrier time to recover.",
  },
];

export default function TreatmentCareGuide() {
  const [activeTab, setActiveTab] = useState<"pre" | "post">("pre");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentList = activeTab === "pre" ? preCareList : postCareList;

  return (
    <section className="py-16 md:py-24 bg-background relative z-10 border-t border-border w-full overflow-hidden">
      {/* Decorative background glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-secondary/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSectionTitle
          title="Interactive Recovery Guidelines"
          subtitle="Pre & Post Treatment Care"
        />

        {/* Tab Buttons Toggles - beautiful, modern, easy-to-use UX */}
        <div className="flex justify-center mt-12 mb-10">
          <div className="flex items-center gap-2 p-1.5 bg-altbg/80 border border-border/40 rounded-full">
            <button
              onClick={() => setActiveTab("pre")}
              className={`font-inter text-xs md:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 relative focus:outline-none flex items-center gap-2 ${
                activeTab === "pre" ? "text-white" : "text-body hover:text-primary"
              }`}
            >
              {activeTab === "pre" && (
                <motion.div
                  layoutId="activeCareTab"
                  className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <FiAlertCircle className="text-sm shrink-0" />
              <span>Before Session (Pre-Care)</span>
            </button>

            <button
              onClick={() => setActiveTab("post")}
              className={`font-inter text-xs md:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 relative focus:outline-none flex items-center gap-2 ${
                activeTab === "post" ? "text-white" : "text-body hover:text-primary"
              }`}
            >
              {activeTab === "post" && (
                <motion.div
                  layoutId="activeCareTab"
                  className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <FiCheckCircle className="text-sm shrink-0" />
              <span>After Session (Post-Care)</span>
            </button>
          </div>
        </div>

        {/* Interactive Checklist Panel */}
        <div className="bg-[#FAF8F5] rounded-[2.5rem] p-6 md:p-10 border border-[#EBE3D5] shadow-luxury relative overflow-hidden min-h-[420px]">
          {/* Subtle watermark badge */}
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/5 flex items-center justify-center pointer-events-none">
            {activeTab === "pre" ? (
              <FiAlertCircle className="text-4xl text-primary/10" />
            ) : (
              <FiCheckCircle className="text-4xl text-primary/10" />
            )}
          </div>

          <div className="relative z-10">
            <h3 className="font-playfair text-xl md:text-2xl font-semibold text-heading mb-2">
              {activeTab === "pre" ? "Pre-Treatment Checklist" : "Post-Treatment Recovery"}
            </h3>
            <p className="font-inter text-xs md:text-sm text-body/80 mb-8 max-w-2xl leading-relaxed">
              {activeTab === "pre"
                ? "Tap on each item to prepare your skin for a safe and effective clinical procedure."
                : "Tap on each item to track your recovery and protect your skin's healing results."}
            </p>

            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {currentList.map((item) => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleCheck(item.id)}
                        className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isChecked
                            ? "bg-white/90 border-primary/45 shadow-sm opacity-70"
                            : "bg-white/40 border-[#EBE3D5] hover:border-primary/20 hover:bg-white/60"
                        }`}
                      >
                        {/* Custom Interactive Checkbox */}
                        <div className="mt-1 shrink-0">
                          {isChecked ? (
                            <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-background border border-primary">
                              <FiCheck className="text-xs stroke-[3.5]" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded border border-secondary/40 hover:border-primary flex items-center justify-center text-transparent">
                              <FiSquare className="text-xs" />
                            </div>
                          )}
                        </div>

                        {/* Text Details */}
                        <div>
                          <h4
                            className={`font-playfair text-base font-semibold text-heading transition-all duration-300 ${
                              isChecked ? "text-body/55" : ""
                            }`}
                          >
                            {item.title}
                          </h4>
                          <p
                            className={`font-inter text-xs md:text-sm text-body/90 leading-relaxed mt-1 transition-all duration-300 ${
                              isChecked ? "text-body/50" : ""
                            }`}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Emergency/Assistance Support Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mt-8 bg-altbg/40 border border-border/60 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary border border-primary/10 shrink-0">
              <FiPhoneCall className="text-lg" />
            </div>
            <div>
              <h4 className="font-playfair text-base font-semibold text-heading">
                Have a post-care question or concerns?
              </h4>
              <p className="font-inter text-xs text-body/85 mt-0.5">
                Our clinical support desk is available to assist you with any redness, irritation, or healing queries.
              </p>
            </div>
          </div>
          <a
            href="tel:+919823063063"
            className="bg-heading text-background font-inter text-xs font-semibold px-6 py-3 rounded-full hover:bg-primary hover:text-background transition-colors duration-300 shadow-sm whitespace-nowrap"
          >
            Call Clinical Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
