"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiPlay, FiInstagram } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import { clinicData } from "@/lib/content/clinic";

const mockReels = [
  { title: "Diode Laser Hair Reduction Explained", views: "12k", treatment: "Laser" },
  { title: "Understanding Chemical Peels for Glow", views: "8k", treatment: "Skin Care" },
  { title: "Why PRP is the Best Hair Restoration", views: "15k", treatment: "Hair Loss" },
  { title: "HIFU Non-Surgical Facelift Timeline", views: "24k", treatment: "Anti-Ageing" },
  { title: "Dr. Shraddha's Acne Skin Care Tips", views: "9k", treatment: "Dermatology" },
];

export default function InstagramReels() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSectionTitle
          title="Clinical Insights & Tips on Reels"
          subtitle="Education & Socials"
        />

        {/* Carousel viewport */}
        <div className="overflow-hidden max-w-5xl mx-auto px-4" ref={emblaRef}>
          <div className="flex -ml-6">
            {mockReels.map((reel, idx) => (
              <div
                key={idx}
                className="flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] pl-6"
              >
                <a
                  href={clinicData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[9/16] rounded-3xl overflow-hidden shadow-luxury border border-border bg-gradient-to-tr from-primary/90 via-primary/40 to-secondary/30 group cursor-pointer"
                >
                  {/* Glowing organic blobs */}
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary/20 filter blur-xl group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 text-white">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-[9px] uppercase font-bold tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                        {reel.treatment}
                      </span>
                      <FiInstagram className="text-lg text-white/80" />
                    </div>

                    {/* Play Icon (Animated on Hover) */}
                    <div className="self-center w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-lg transition-transform duration-300 group-hover:scale-110">
                      <FiPlay className="ml-0.5" />
                    </div>

                    {/* Bottom Details */}
                    <div>
                      <h4 className="font-playfair text-base font-semibold leading-tight text-white mb-2">
                        {reel.title}
                      </h4>
                      <p className="font-inter text-[10px] text-white/60 tracking-wider">
                        {reel.views} Views &bull; Watch on Instagram
                      </p>
                    </div>
                  </div>

                  {/* Dark hover layer */}
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
