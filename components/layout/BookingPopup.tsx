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
          className="fixed bottom-6 right-6 md:right-8 z-50 w-[calc(100%-2rem)] sm:w-[420px] min-h-[480px] bg-background/95 backdrop-blur-md border border-border shadow-luxury rounded-[2.5rem] p-8 flex flex-col justify-between text-left pointer-events-auto"
        >
          {/* Top Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-inter text-xs font-bold uppercase tracking-widest text-[#7C131F]">
                  Clinical Consultation
                </span>
                <h3 className="font-playfair text-2xl font-bold text-heading mt-1.5 leading-snug">
                  Ready for Transformation?
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-body hover:text-heading p-1.5 rounded-full hover:bg-altbg transition-colors shrink-0"
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
              className="w-full flex items-center justify-center gap-2 bg-primary text-background font-inter text-sm font-semibold px-5 py-3.5 rounded-full hover:bg-black hover:text-white transition-all duration-300 group shadow-sm"
            >
              <FiCalendar className="text-base" />
              <span>Book Appointment Now</span>
              <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
