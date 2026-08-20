"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  // The navbar is ALWAYS gold with rounded bottom corners and soft shadows
  const headerBgClass = "h-16 sm:h-20 bg-[#FDBD0E]/95 backdrop-blur-xl px-4 sm:px-8 lg:px-12 shadow-[0_20px_50px_rgba(253,189,14,0.15)] border-none rounded-b-2xl sm:rounded-b-[2rem] pt-[env(safe-area-inset-top)]";

  // Navigation text styles: always primary burgundy on gold
  const linkTextClass = "text-[#7C131F]/85 hover:text-[#7C131F]";

  // Navigation indicator border styles
  const linkActiveBorderClass = "bg-[#7C131F]";

  // Book Appointment CTA styles (Matches the light color CTA button in hero section, turns black on hover)
  const ctaButtonClass = "text-white bg-[#7C131F] hover:bg-black hover:text-white shadow-[0_10px_30px_rgba(124,19,31,0.15)]";

  // Mobile hamburger menu button styles
  const hamburgerClass = "lg:hidden text-2xl text-[#7C131F] focus:outline-none hover:opacity-85 transition-opacity shrink-0";

  return (
    <>
      <header
        className={`site-navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center justify-between ${headerBgClass}`}
      >
        {/* Logo - Premium Vector Brand Logo */}
        <Link href="/" className="flex items-center group focus:outline-none shrink-0">
          <Image
            src="/images/REVIVE_LOGO.svg"
            alt="Revive Skin Hair Clinic & Laser Centre"
            width={190}
            height={56}
            className="h-9 sm:h-12 w-auto max-w-[160px] sm:max-w-none object-contain transition-opacity group-hover:opacity-90"
            priority
          />
        </Link>

        {/* Navigation Links with Hover Underline Animations */}
        <nav className="hidden lg:flex items-center gap-9 xl:gap-11 font-inter">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-semibold tracking-[0.16em] uppercase transition-colors duration-300 group ${linkTextClass}`}
              >
                {link.label}
                {/* Sliding Underline Effect */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] origin-left transition-transform duration-300 ${linkActiveBorderClass} ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA: Deluxe Pill Button with Lift & Scale Effect */}
        <div className="hidden lg:block shrink-0">
          <Link
            href="/contact?book=true"
            className={`group relative inline-flex items-center justify-center gap-2 px-6 py-3 font-inter text-xs font-bold uppercase tracking-[0.16em] rounded-full transition-all duration-500 overflow-hidden hover:scale-105 active:scale-95 ${ctaButtonClass}`}
          >
            {/* Light sweep hover animation */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="relative z-10 flex items-center gap-1.5">
              Book Appointment
              <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        {/* Mobile hamburger menu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`${hamburgerClass} min-h-11 min-w-11 flex items-center justify-center`}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            id="mobile-navigation"
            className="site-navbar fixed inset-0 z-40 bg-[#FDBD0E] flex flex-col justify-start sm:justify-center items-center px-6 pt-24 pb-[max(2rem,env(safe-area-inset-bottom))] overflow-y-auto lg:hidden"
          >
            <div className="flex min-h-full sm:min-h-0 flex-col items-center justify-center gap-5 sm:gap-8 py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`min-h-11 flex items-center font-inter text-sm font-bold uppercase tracking-[0.2em] transition-colors ${
                      isActive ? "text-[#7C131F] font-extrabold" : "text-[#7C131F]/70 hover:text-[#7C131F]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              <Link
                href="/contact?book=true"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 inline-flex items-center justify-center px-8 py-4 font-inter text-xs font-bold uppercase tracking-widest text-white bg-[#7C131F] rounded-full shadow-[0_10px_30px_rgba(124,19,31,0.15)] hover:bg-black hover:scale-105 active:scale-95 transition-all duration-500"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
