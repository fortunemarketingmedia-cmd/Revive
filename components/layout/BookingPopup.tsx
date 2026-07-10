"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCalendar, FiArrowRight } from "react-icons/fi";

export default function BookingPopup() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered25, setHasTriggered25] = useState(false);
  const [hasTriggered50, setHasTriggered50] = useState(false);

  // Reset triggers when pathname changes
  useEffect(() => {
    setHasTriggered25(false);
    setHasTriggered50(false);
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      
      const pct = (window.scrollY / docHeight) * 100;

      // Trigger past 25% but before 50%
      if (pct >= 25 && pct < 50 && !hasTriggered25) {
        setIsOpen(true);
        setHasTriggered25(true);
      }

      // Trigger past 50%
      if (pct >= 50 && !hasTriggered50) {
        setIsOpen(true);
        setHasTriggered50(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasTriggered25, hasTriggered50]);

  const handleAction = () => {
    setIsOpen(false);
    if (pathname === "/contact") {
      const element = document.getElementById("booking-portal");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/contact#booking-portal");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 md:right-8 z-50 w-[calc(100%-3rem)] sm:w-[350px] bg-background/95 backdrop-blur-md border border-border shadow-luxury rounded-2xl p-5 flex flex-col gap-4 text-left pointer-events-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <span className="font-inter text-[10px] font-bold uppercase tracking-widest text-[#B45309]">
                Clinical Consultation
              </span>
              <h3 className="font-playfair text-lg font-bold text-heading mt-1 leading-snug">
                Ready for Transformation?
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-body hover:text-heading p-1.5 rounded-full hover:bg-altbg transition-colors"
              aria-label="Close dialog"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          {/* Description */}
          <p className="font-inter text-xs text-body leading-relaxed">
            Schedule an appointment at Nashik's premier sanctuary for advanced dermatology and laser science.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleAction}
            className="flex items-center justify-center gap-2 bg-primary text-background font-inter text-xs font-semibold px-4 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 group shadow-sm"
          >
            <FiCalendar className="text-sm" />
            <span>Book Appointment Now</span>
            <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
