"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheck, FiClock, FiCalendar, FiShield, FiPhoneCall, FiArrowRight } from "react-icons/fi";
import { Treatment, treatments, treatmentCategories } from "@/lib/content/treatments";

// Category type matching the content structure
export interface Category {
  id: string;
  label: string;
  description: string;
  icon: string;
  count: number;
  image: string;
}

interface TreatmentModalContextType {
  openTreatment: (treatment: Treatment) => void;
  closeTreatment: () => void;
  openCategory: (categoryId: string) => void;
  closeCategory: () => void;
}

const TreatmentModalContext = createContext<TreatmentModalContextType | undefined>(undefined);

export function useTreatmentModal() {
  const context = useContext(TreatmentModalContext);
  if (!context) {
    throw new Error("useTreatmentModal must be used within a TreatmentModalProvider");
  }
  return context;
}

export default function TreatmentModalProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [activeTreatment, setActiveTreatment] = useState<Treatment | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  // Close modals on route changes
  useEffect(() => {
    setActiveTreatment(null);
    setActiveCategory(null);
  }, [pathname]);

  // Scroll lock when modal is open
  useEffect(() => {
    if (activeTreatment || activeCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeTreatment, activeCategory]);

  const openTreatment = (treatment: Treatment) => {
    setActiveCategory(null);
    setActiveTreatment(treatment);
  };

  const closeTreatment = () => {
    setActiveTreatment(null);
  };

  const openCategory = (categoryId: string) => {
    const category = treatmentCategories.find((c) => c.id === categoryId);
    if (category) {
      setActiveTreatment(null);
      setActiveCategory(category as Category);
    }
  };

  const closeCategory = () => {
    setActiveCategory(null);
  };

  const handleBookingRedirect = () => {
    if (!activeTreatment) return;
    const slug = activeTreatment.slug;
    closeTreatment();
    router.push(`/contact?book=true&treatment=${slug}`);
  };

  // Get treatments belonging to the active category
  const activeCategoryTreatments = activeCategory
    ? treatments.filter((t) => t.category === activeCategory.id)
    : [];

  return (
    <TreatmentModalContext.Provider value={{ openTreatment, closeTreatment, openCategory, closeCategory }}>
      {children}

      <AnimatePresence>
        {/* 1. Category Treatments List Modal - Premium Grid Layout */}
        {activeCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCategory}
              className="absolute inset-0 bg-[#0c0c0c]/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 25 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="category-modal-title"
              className="relative w-full max-w-7xl h-[calc(100dvh-1rem)] sm:h-[85vh] md:h-[80vh] bg-background border border-border/80 rounded-2xl sm:rounded-[2.5rem] shadow-luxury flex flex-col overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={closeCategory}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50 text-body hover:text-heading min-h-11 min-w-11 flex items-center justify-center rounded-full bg-background border border-border shadow-sm hover:bg-altbg transition-colors"
                aria-label="Close"
              >
                <FiX className="text-xl" />
              </button>

              {/* Title Header Section */}
              <div className="p-5 pr-16 sm:p-8 md:p-10 border-b border-border/60 bg-altbg/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 filter blur-3xl pointer-events-none" />
                <span className="font-playfair text-sm w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary shadow-sm mb-4">
                  {activeCategory.icon}
                </span>
                <h3 id="category-modal-title" className="font-playfair text-2xl sm:text-3xl font-bold text-heading tracking-tight">
                  {activeCategory.label}
                </h3>
                <p className="font-inter text-xs md:text-sm text-body/90 leading-relaxed mt-2 max-w-2xl">
                  {activeCategory.description}
                </p>
              </div>

              {/* Scrollable Treatments Grid (2 columns on desktop) */}
              <div 
                className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-8 md:p-10 space-y-4 sm:space-y-6"
                data-lenis-prevent
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {activeCategoryTreatments.map((t, idx) => (
                    <motion.div
                      key={t.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.04 }}
                      onClick={() => openTreatment(t)}
                      className="flex gap-3 sm:gap-4 p-3 sm:p-5 rounded-2xl sm:rounded-2.5xl border border-border bg-background hover:border-primary/40 hover:shadow-luxury hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group items-center"
                    >
                      {/* Thumbnail frame */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-altbg border border-border shadow-sm">
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          sizes="80px"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <span className="font-inter text-[9px] uppercase tracking-wider text-[#B45309] font-semibold mb-1 block">
                          {t.tagline}
                        </span>
                        <h4 className="font-playfair text-base md:text-lg font-bold text-heading leading-tight truncate group-hover:text-primary transition-colors">
                          {t.name}
                        </h4>
                        <p className="font-inter text-xs text-body/80 line-clamp-1 mt-1 leading-relaxed">
                          {t.description}
                        </p>
                      </div>
                      {/* Arrow */}
                      <div className="w-9 h-9 rounded-full border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-background flex items-center justify-center text-body transition-all duration-300 shadow-sm shrink-0">
                        <FiArrowRight className="text-sm shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* 2. Treatment Details Modal - Large Luxury Editorial Layout */}
        {activeTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeTreatment}
              className="absolute inset-0 bg-[#0c0c0c]/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 25 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="treatment-modal-title"
              className="relative w-full max-w-[1600px] h-[calc(100dvh-1rem)] sm:h-[92vh] md:h-[90vh] bg-background border border-border/80 rounded-2xl sm:rounded-[2.5rem] shadow-luxury flex flex-col md:flex-row overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={closeTreatment}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50 text-body hover:text-heading min-h-11 min-w-11 flex items-center justify-center rounded-full bg-background border border-border shadow-sm hover:bg-altbg transition-colors"
                aria-label="Close details"
              >
                <FiX className="text-xl" />
              </button>

              {/* Left Side: Full-height Visual Cover (40% width) */}
              <div className="relative w-full h-[190px] sm:h-[260px] md:h-full md:w-[40%] shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-border/60 bg-altbg">
                <Image
                  src={activeTreatment.image}
                  alt={activeTreatment.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center"
                />
                {/* Visual fading gradient bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                
                {/* Overlaid tagline on the image column */}
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                  <span className="font-inter text-[9px] uppercase tracking-widest text-[#7C131F] font-bold">
                    {activeTreatment.categoryLabel}
                  </span>
                  <h4 className="font-playfair text-xl md:text-2xl font-semibold leading-tight text-white mt-1">
                    {activeTreatment.name}
                  </h4>
                  <p className="font-inter text-xs text-white/70 leading-relaxed mt-2 line-clamp-2">
                    {activeTreatment.tagline}
                  </p>
                </div>
              </div>

              {/* Right Side: Scrollable detailed information with data-lenis-prevent */}
              <div 
                className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-8 md:p-12 space-y-8 sm:space-y-10 flex flex-col"
                data-lenis-prevent
              >
                
                {/* Header Title Section */}
                <div className="space-y-4">
                  <span className="font-inter text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B45309] bg-[#B45309]/5 border border-[#B45309]/10 px-4 py-2 rounded-full inline-block">
                    Clinical Program
                  </span>
                  <h2 id="treatment-modal-title" className="font-playfair text-2xl sm:text-3xl md:text-5xl text-heading font-medium tracking-tight leading-tight">
                    {activeTreatment.name}
                  </h2>
                  <p className="font-inter text-sm md:text-base text-body/90 leading-relaxed border-l-2 border-[#B45309]/30 pl-5 py-0.5">
                    {activeTreatment.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column: Details Timeline & Benefits */}
                  <div className="lg:col-span-7 space-y-10">
                    
                    {/* Clinical Overview */}
                    <div className="space-y-4">
                      <h4 className="font-playfair text-xl md:text-2xl text-heading font-semibold tracking-tight">
                        Clinical Overview
                      </h4>
                      <div className="font-inter text-xs md:text-sm text-body leading-relaxed space-y-4">
                        {activeTreatment.longDescription.split('\n\n').map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>
                    </div>

                    {/* Benefits Card Grid */}
                    <div className="space-y-5 bg-altbg/30 rounded-[2rem] p-6 md:p-8 border border-border/80">
                      <h4 className="font-playfair text-lg md:text-xl text-heading font-semibold tracking-tight">
                        Treatment Benefits
                      </h4>
                      <div className="grid grid-cols-1 gap-3.5">
                        {activeTreatment.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex gap-3 items-start bg-background rounded-2xl p-4 border border-border/60">
                            <span className="w-5.5 h-5.5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs shrink-0 mt-0.5 border border-primary/20">
                              <FiCheck />
                            </span>
                            <p className="font-inter text-xs text-body leading-relaxed font-medium">
                              {benefit}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Journey Timeline */}
                    <div className="space-y-6">
                      <h4 className="font-playfair text-lg md:text-xl text-heading font-semibold tracking-tight">
                        Your Treatment Journey
                      </h4>
                      <div className="flex flex-col gap-6 relative pl-6 border-l border-primary/15 ml-3.5">
                        {activeTreatment.procedure.map((step, idx) => (
                          <div key={idx} className="relative">
                            <span className="absolute -left-[32px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-sm" />
                            <h5 className="font-playfair text-sm font-bold text-heading mb-1.5">
                              Step {idx + 1}
                            </h5>
                            <p className="font-inter text-xs md:text-sm text-body leading-relaxed">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Parameters & Fast Details */}
                  <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-0">
                    <div className="bg-[#FAF8F5] rounded-[2rem] p-6 md:p-8 border border-[#EBE3D5] space-y-6 shadow-sm">
                      <div className="flex items-center gap-3 pb-4 border-b border-[#EBE3D5]">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                          <FiShield className="text-lg" />
                        </div>
                        <div>
                          <h4 className="font-playfair text-base font-semibold text-heading leading-none">
                            Clinical Specs
                          </h4>
                          <span className="font-inter text-[9px] text-primary tracking-wider uppercase font-bold mt-1.5 block">
                            Fast Parameters
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4 font-inter text-xs">
                        <div>
                          <span className="flex items-center gap-2 text-heading text-[10px] font-bold uppercase tracking-wider mb-1.5">
                            <FiClock className="text-secondary" />
                            Downtime & Recovery
                          </span>
                          <p className="text-xs text-body/90 leading-relaxed bg-white/60 rounded-xl p-3 border border-[#EBE3D5]">
                            {activeTreatment.recovery}
                          </p>
                        </div>

                        {activeTreatment.sessions && (
                          <div>
                            <span className="flex items-center gap-2 text-heading text-[10px] font-bold uppercase tracking-wider mb-1.5">
                              <FiCalendar className="text-secondary" />
                              Recommended Program
                            </span>
                            <p className="text-xs text-body/90 leading-relaxed bg-white/60 rounded-xl p-3 border border-[#EBE3D5]">
                              {activeTreatment.sessions}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="pt-3 border-t border-[#EBE3D5]">
                        <button
                          onClick={handleBookingRedirect}
                          className="w-full flex items-center justify-center gap-2 bg-black text-white font-inter text-xs font-semibold px-4 py-3.5 rounded-full hover:bg-primary hover:text-background transition-all duration-300 group shadow-sm"
                        >
                          <span>Request Appointment</span>
                          <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-altbg/60 border border-border/80 rounded-2.5xl p-5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <FiPhoneCall className="text-secondary text-base shrink-0 animate-pulse" />
                        <div>
                          <h5 className="font-playfair text-[11px] font-bold text-heading">
                            Clinical Assistance
                          </h5>
                          <p className="font-inter text-[9px] text-body/80 mt-0.5">
                            +91 98230 63063
                          </p>
                        </div>
                      </div>
                      <a
                        href="tel:+919823063063"
                        className="bg-heading hover:bg-primary text-background font-inter text-[10px] font-bold px-4 py-2 rounded-full transition-colors duration-300"
                      >
                        Call
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </TreatmentModalContext.Provider>
  );
}
