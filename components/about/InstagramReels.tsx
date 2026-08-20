"use client";

import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiInstagram, FiPlay } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

// List of the 10 real Instagram reels with their respective WebP thumbnails
const clinicReels = [
  {
    id: "DahgWgMhblI",
    title: "Minoxidil for Hair Fall Control",
    treatment: "Hair Loss",
    thumbnail: "/images/reels/DahgWgMhblI.webp",
  },
  {
    id: "DaCe0aICLhr",
    title: "Skincare Myths & Facts: Part 1",
    treatment: "Education",
    thumbnail: "/images/reels/DaCe0aICLhr.webp",
  },
  {
    id: "DaARtElAhIh",
    title: "Vitiligo Awareness & Support",
    treatment: "Aesthetics",
    thumbnail: "/images/reels/DaARtElAhIh.webp",
  },
  {
    id: "DZ9gNm8CTCK",
    title: "Finasteride for Hair Loss",
    treatment: "Hair Loss",
    thumbnail: "/images/reels/DZ9gNm8CTCK.webp",
  },
  {
    id: "DZzaYk_EaLh",
    title: "Skincare Myths & Facts: Part 2",
    treatment: "Education",
    thumbnail: "/images/reels/DZzaYk_EaLh.webp",
  },
  {
    id: "DZg7RrkCMHM",
    title: "PCOS/PCOD & Hormonal Skin Issues",
    treatment: "Hormonal Skin",
    thumbnail: "/images/reels/DZg7RrkCMHM.webp",
  },
  {
    id: "DZNMm5TNBEr",
    title: "Laser Pigmentation Treatment",
    treatment: "Laser Care",
    thumbnail: "/images/reels/DZNMm5TNBEr.webp",
  },
  {
    id: "DZHLaWqNmH6",
    title: "Clinical Microneedling Therapy",
    treatment: "Skin Texture",
    thumbnail: "/images/reels/DZHLaWqNmH6.webp",
  },
  {
    id: "DZCT8IFgpiM",
    title: "Advanced MNRF for Acne Scars",
    treatment: "Acne Scars",
    thumbnail: "/images/reels/DZCT8IFgpiM.webp",
  },
  {
    id: "DYZAjHpEdZD",
    title: "Dubai Lip Carbon Laser Treatment",
    treatment: "Lip Care",
    thumbnail: "/images/reels/DYZAjHpEdZD.webp",
  },
];

export default function InstagramReels() {
  const [activeReelId, setActiveReelId] = useState<string | null>(null);
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
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-border bg-white shadow-md">
                  {activeReelId === reel.id ? (
                    <iframe
                      src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                      title={reel.title}
                      className="absolute inset-0 h-full w-full border-0 bg-white"
                      allowFullScreen
                      scrolling="no"
                      loading="eager"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveReelId(reel.id)}
                      className="group absolute inset-0 h-full w-full overflow-hidden text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FDBD0E] focus-visible:ring-inset"
                      aria-label={`Play ${reel.title}`}
                    >
                      <Image
                        src={reel.thumbnail}
                        alt={reel.title}
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 23vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/5" />
                      <span className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FDBD0E] text-2xl text-[#7C131F] shadow-xl transition-transform group-hover:scale-110">
                        <FiPlay className="ml-1" />
                      </span>
                      <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
                        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FDBD0E] px-3 py-1.5 font-inter text-[10px] font-bold uppercase tracking-wider text-[#7C131F]">
                          <FiInstagram /> {reel.treatment}
                        </span>
                        <h3 className="font-playfair text-xl font-semibold leading-snug text-white group-hover:text-[#FDBD0E] transition-colors">
                          {reel.title}
                        </h3>
                      </div>
                    </button>
                  )}
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
          className="w-10 h-10 rounded-full border border-border bg-background hover:bg-[#FDBD0E] hover:border-[#FDBD0E] hover:text-[#7C131F] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
          aria-label="Previous Reel"
        >
          <FiChevronLeft className="text-xl" />
        </button>
        <button
          onClick={scrollNext}
          className="w-10 h-10 rounded-full border border-border bg-background hover:bg-[#FDBD0E] hover:border-[#FDBD0E] hover:text-[#7C131F] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
          aria-label="Next Reel"
        >
          <FiChevronRight className="text-xl" />
        </button>
      </div>
    </section>
  );
}
