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
      const element = document.getElementById("booking-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/contact#booking-form");
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
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-popup-title"
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 md:right-8 z-50 w-auto sm:w-[420px] max-h-[calc(100dvh-2rem)] min-h-0 sm:min-h-[480px] overflow-y-auto bg-background/95 backdrop-blur-md border border-border shadow-luxury rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 flex flex-col justify-between gap-6 text-left pointer-events-auto"
        >
          {/* Top Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-inter text-xs font-bold uppercase tracking-widest text-[#7C131F]">
                  Clinical Consultation
                </span>
                <h3 id="booking-popup-title" className="font-playfair text-xl sm:text-2xl font-bold text-heading mt-1.5 leading-snug">
                  Ready for Transformation?
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-body hover:text-heading min-h-11 min-w-11 flex items-center justify-center rounded-full hover:bg-altbg transition-colors shrink-0"
                aria-label="Close dialog"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Premium Clinic Philosophy Quote (Fills height beautifully) */}
            <div className="py-2">
              <p className="font-playfair italic text-sm md:text-base text-body/90 leading-relaxed border-l-2 border-[#7C131F]/30 pl-4">
                "Advanced clinical dermatology meets personalized science to restore your skin's natural health and radiance."
              </p>
              <span className="font-inter text-[10px] text-body/65 tracking-wider uppercase font-semibold mt-2 block pl-4">
                — Dr. Shraddha Sonanis
              </span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-5 pt-4 border-t border-border/60">
            <p className="font-inter text-xs text-body/95 leading-relaxed">
              Schedule your appointment at Nashik's premier clinical dermatology, hair restoration, and laser skin sanctuary.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleAction}
              className="w-full group relative flex items-center justify-center gap-2 px-8 py-4 font-inter text-xs font-bold uppercase tracking-widest text-white bg-[#7C131F] rounded-full shadow-[0_10px_30px_rgba(124,19,31,0.15)] transition-all duration-500 hover:bg-black hover:text-white hover:scale-105 active:scale-95"
            >
              <FiCalendar className="text-base shrink-0" />
              <span>Book Appointment Now</span>
              <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
