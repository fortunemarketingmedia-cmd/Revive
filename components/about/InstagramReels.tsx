"use client";

import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight, FiInstagram, FiX } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

// List of the 10 real Instagram reels with their respective WebP thumbnails
const clinicReels = [
  {
    id: "DahgWgMhblI",
    title: "Minoxidil for Hair Fall Control",
    views: "14k",
    treatment: "Hair Loss",
    thumbnail: "/images/reels/DahgWgMhblI.webp",
  },
  {
    id: "DaCe0aICLhr",
    title: "Skincare Myths & Facts: Part 1",
    views: "19k",
    treatment: "Education",
    thumbnail: "/images/reels/DaCe0aICLhr.webp",
  },
  {
    id: "DaARtElAhIh",
    title: "Vitiligo Awareness & Support",
    views: "11k",
    treatment: "Aesthetics",
    thumbnail: "/images/reels/DaARtElAhIh.webp",
  },
  {
    id: "DZ9gNm8CTCK",
    title: "Finasteride for Hair Loss",
    views: "8k",
    treatment: "Hair Loss",
    thumbnail: "/images/reels/DZ9gNm8CTCK.webp",
  },
  {
    id: "DZzaYk_EaLh",
    title: "Skincare Myths & Facts: Part 2",
    views: "22k",
    treatment: "Education",
    thumbnail: "/images/reels/DZzaYk_EaLh.webp",
  },
  {
    id: "DZg7RrkCMHM",
    title: "PCOS/PCOD & Hormonal Skin Issues",
    views: "27k",
    treatment: "Hormonal Skin",
    thumbnail: "/images/reels/DZg7RrkCMHM.webp",
  },
  {
    id: "DZNMm5TNBEr",
    title: "Laser Pigmentation Treatment",
    views: "15k",
    treatment: "Laser Care",
    thumbnail: "/images/reels/DZNMm5TNBEr.webp",
  },
  {
    id: "DZHLaWqNmH6",
    title: "Clinical Microneedling Therapy",
    views: "18k",
    treatment: "Skin Texture",
    thumbnail: "/images/reels/DZHLaWqNmH6.webp",
  },
  {
    id: "DZCT8IFgpiM",
    title: "Advanced MNRF for Acne Scars",
    views: "16k",
    treatment: "Acne Scars",
    thumbnail: "/images/reels/DZCT8IFgpiM.webp",
  },
  {
    id: "DYZAjHpEdZD",
    title: "Dubai Lip Carbon Laser Treatment",
    views: "25k",
    treatment: "Lip Care",
    thumbnail: "/images/reels/DYZAjHpEdZD.webp",
  },
];

export default function InstagramReels() {
  // Manual carousel alignment only - no autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden w-full">
      {/* Decorative background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 filter blur-3xl pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16 relative z-10 mb-8">
        <AnimatedSectionTitle
          title="Clinical Insights & Tips on Reels"
          subtitle="Education & Socials"
        />
      </div>

      {/* Full-Bleed Carousel Viewport */}
      <div className="overflow-hidden w-full relative z-10 px-4 md:px-8" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6">
          {clinicReels.map((reel) => {
            return (
              <div
                key={reel.id}
                className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_28%] xl:flex-[0_0_23%] pl-4 md:pl-6 select-none"
              >
                {/* Simple Reel Container matching Instagram's native embed aspect ratio */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-white">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                    className="w-full h-[600px] border-0"
                    allowFullScreen
                    scrolling="no"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slider Navigation Buttons at Bottom Center */}
      <div className="flex justify-center gap-4 mt-8 relative z-20">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full border border-border bg-background hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
          aria-label="Previous Reel"
        >
          <FiChevronLeft className="text-xl" />
        </button>
        <button
          onClick={scrollNext}
          className="w-10 h-10 rounded-full border border-border bg-background hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
          aria-label="Next Reel"
        >
          <FiChevronRight className="text-xl" />
        </button>
      </div>
    </section>
  );
}
