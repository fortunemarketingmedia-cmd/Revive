"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useTransform, useInView, animate } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ value, suffix = "", duration = 2 }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  
  // Format value depending on if it's integer or float
  const isFloat = value % 1 !== 0;
  const rounded = useTransform(count, (latest) => {
    if (isFloat) {
      return latest.toFixed(1);
    }
    return Math.round(latest);
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
      return controls.stop;
    }
  }, [inView, count, value, duration]);

  // Read value updates directly into innerText to avoid React re-render overhead
  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString() + suffix;
      }
    });
  }, [rounded, suffix]);

  // Render the real final value up front so slow connections and crawlers
  // never see a literal "0" before the count-up animation replaces it.
  const initialDisplay = isFloat ? value.toFixed(1) : Math.round(value);

  return (
    <span ref={ref} className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary">
      {initialDisplay}{suffix}
    </span>
  );
}
