"use client";

import React from "react";

const tickerNames = [
  "Dr. Shraddha Sonanis",
  "Certified Laser Technicians",
  "Clinical Estheticians",
  "Patient Care Coordinators",
  "Aesthetic Therapists",
  "Dermato-Surgeons",
];

export default function TeamTicker() {
  return (
    <div className="w-full bg-background border-t border-b border-border/80 py-4 overflow-hidden flex whitespace-nowrap select-none relative z-15">
      {/* Container holding animating text */}
      <div className="flex gap-12 items-center animate-marquee shrink-0 [animation-duration:25s]">
        {tickerNames.map((name, idx) => (
          <span
            key={`ticker-1-${idx}`}
            className="font-playfair text-base md:text-lg font-light uppercase tracking-[0.25em] text-primary flex items-center gap-12"
          >
            {name}
            <span className="w-2 h-2 rounded-full bg-secondary/35 shrink-0" />
          </span>
        ))}
      </div>

      {/* Duplicate container for seamless looping */}
      <div
        className="flex gap-12 items-center animate-marquee shrink-0 [animation-duration:25s]"
        aria-hidden="true"
      >
        {tickerNames.map((name, idx) => (
          <span
            key={`ticker-2-${idx}`}
            className="font-playfair text-base md:text-lg font-light uppercase tracking-[0.25em] text-primary flex items-center gap-12"
          >
            {name}
            <span className="w-2 h-2 rounded-full bg-secondary/35 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
