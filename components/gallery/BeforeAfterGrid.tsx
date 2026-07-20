"use client";

import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function BeforeAfterGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false, watchDrag: false }
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const comparisons = [
    {
      title: "Er:YAG Laser Acne Scar Treatment",
      beforeImage: "/images/treatments/acne_b.webp",
      afterImage: "/images/treatments/acne_a.webp",
      beforeLabel: "Before (Deep Pitted Scars)",
      afterLabel: "After (4 Sessions)",
      description: "Er:YAG fractional laser resurfacing stimulates new skin collagen, flattening pitted acne scars and smoothing texture."
    },
    {
      title: "Laser Photofacial for Melasma",
      beforeImage: "/images/treatments/laser_Photofacial_b.webp",
      afterImage: "/images/treatments/laser_Photofacial_a.webp",
      beforeLabel: "Before (Uneven Pigmentation)",
      afterLabel: "After (6 Sessions)",
      description: "Q-switched Nd:YAG laser sessions target stubborn dermal pigments to achieve an even skin tone."
    },
    {
      title: "PRP Hair Restoration (Scalp)",
      beforeImage: "/images/treatments/prp_scalp_b.webp",
      afterImage: "/images/treatments/prp_scalp_a.webp",
      beforeLabel: "Before (Visible Thinning)",
      afterLabel: "After (6 Sessions)",
      description: "Platelet-rich plasma growth factor injections trigger follicle activity, thickening hair shafts."
    },
    {
      title: "Aesthetic Chemical Peels for Glow",
      beforeImage: "/images/treatments/chemical_b.webp",
      afterImage: "/images/treatments/chemical_a.webp",
      beforeLabel: "Before (Dull Texture)",
      afterLabel: "After (Series of Peels)",
      description: "Superficial glycolic peels exfoliate dry surface cells, revealing radiant, hydrated skin layers underneath."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSectionTitle
          title="Clinical Case Comparisons"
          subtitle="Before & After Results"
        />

        <div className="relative max-w-6xl mx-auto mt-12">
          {/* Navigation Buttons (Desktop only, positioned outside) */}
          <button 
            onClick={scrollPrev} 
            className="absolute -left-4 md:-left-12 top-[40%] -translate-y-1/2 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-[#7C131F] hover:bg-[#7C131F] hover:text-white transition-all z-20"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          
          <button 
            onClick={scrollNext} 
            className="absolute -right-4 md:-right-12 top-[40%] -translate-y-1/2 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-[#7C131F] hover:bg-[#7C131F] hover:text-white transition-all z-20"
            aria-label="Next slide"
          >
            <FiChevronRight className="text-2xl" />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {comparisons.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] pl-6 pb-6">
                  <div className="flex flex-col gap-4 h-full">
                    <h3 className="font-playfair text-xl text-heading font-medium tracking-tight h-14 flex items-end pb-2">
                      {item.title}
                    </h3>
                    <div className="rounded-2xl overflow-hidden shadow-sm">
                      <BeforeAfterSlider
                        beforeImage={item.beforeImage}
                        afterImage={item.afterImage}
                        beforeLabel={item.beforeLabel}
                        afterLabel={item.afterLabel}
                      />
                    </div>
                    <p className="font-inter text-xs md:text-sm text-body/70 leading-relaxed mt-2 h-16">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
