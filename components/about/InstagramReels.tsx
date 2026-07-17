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
  const [playingReelId, setPlayingReelId] = useState<string | null>(null);
  const [loadedReels, setLoadedReels] = useState<Record<string, boolean>>({});

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
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-8">
        <AnimatedSectionTitle
          title="Clinical Insights & Tips on Reels"
          subtitle="Education & Socials"
        />
      </div>

      {/* Full-Bleed Carousel Viewport */}
      <div className="overflow-hidden w-full relative z-10 px-4 md:px-8" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6">
          {clinicReels.map((reel) => {
            const isPlaying = playingReelId === reel.id;
            const isLoaded = loadedReels[reel.id] || false;
            return (
              <div
                key={reel.id}
                className="flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_23%] xl:flex-[0_0_18%] pl-4 md:pl-6 select-none"
              >
                {/* Taller card aspect ratio and softer rounded corners to prevent icon clipping */}
                <div className="relative w-full aspect-[9/16.8] rounded-[1.5rem] overflow-hidden shadow-luxury border border-border bg-[#0c0c0c] group">
                  {isPlaying ? (
                    <div className="absolute inset-0 w-full h-full bg-[#0c0c0c] z-30 overflow-hidden">
                      {/* Direct unzoomed player with black background */}
                      <iframe
                        src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                        className="absolute inset-0 w-full h-full border-0 z-10 bg-[#0c0c0c]"
                        allowFullScreen
                        scrolling="no"
                        onLoad={() => setLoadedReels((prev) => ({ ...prev, [reel.id]: true }))}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />

                      {/* Premium Loading Spinner Overlay to hide iframe white flash */}
                      {!isLoaded && (
                        <div className="absolute inset-0 bg-[#0c0c0c] z-20 flex flex-col items-center justify-center gap-3">
                          <img
                            src={reel.thumbnail}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover opacity-35 filter blur-md"
                          />
                          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin relative z-10" />
                          <span className="font-inter text-[10px] text-white/80 tracking-wider font-semibold uppercase relative z-10">
                            Loading... Tap Video to Play
                          </span>
                        </div>
                      )}

                      {/* Close button positioned cleanly on the card */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlayingReelId(null);
                          setLoadedReels((prev) => ({ ...prev, [reel.id]: false }));
                        }}
                        className="absolute top-4 right-4 z-40 w-8 h-8 rounded-full bg-black/75 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-colors duration-300 shadow-lg"
                        title="Close Video"
                      >
                        <FiX className="text-sm" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => setPlayingReelId(reel.id)}
                      className="absolute inset-0 w-full h-full cursor-pointer"
                    >
                      {/* Local Cover Thumbnail Image */}
                      <img
                        src={reel.thumbnail}
                        alt={reel.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Gradient shading overlay for text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10 transition-colors duration-300 group-hover:from-black/90" />

                      {/* Content overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between z-20 text-white">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <span className="font-inter text-[9px] uppercase font-bold tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                            {reel.treatment}
                          </span>
                          <FiInstagram className="text-lg text-white/80" />
                        </div>

                        {/* NO play button overlaid on the cover to keep it 100% clean and neat */}
                        <div />

                        {/* Bottom Details */}
                        <div>
                          <h4 className="font-playfair text-base font-semibold leading-tight text-white mb-2 group-hover:text-[#7C131F] transition-colors">
                            {reel.title}
                          </h4>
                          <p className="font-inter text-[10px] text-white/60 tracking-wider">
                            {reel.views} Views &bull; Click to Watch
                          </p>
                        </div>
                      </div>
                    </div>
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
