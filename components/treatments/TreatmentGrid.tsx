"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TreatmentCard from "@/components/ui/TreatmentCard";
import { treatments, TreatmentCategory } from "@/lib/content/treatments";

const categories: { id: "all" | TreatmentCategory; label: string }[] = [
  { id: "all", label: "All Treatments" },
  { id: "skin", label: "Skin care" },
  { id: "hair", label: "Hair Treatments" },
  { id: "laser", label: "Laser Treatments" },
  { id: "anti-ageing", label: "Anti Ageing" },
];

export default function TreatmentGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<"all" | TreatmentCategory>("all");

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (searchParams) {
      const categoryParam = searchParams.get("category");
      if (categoryParam) {
        const matched = categories.find((c) => c.id === categoryParam);
        if (matched) {
          setActiveCategory(matched.id);
        }
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Reset slider position when active category filter changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(0);
    }
  }, [activeCategory, emblaApi]);

  const handleCategorySelect = (id: "all" | TreatmentCategory) => {
    setActiveCategory(id);
    if (id === "all") {
      router.push("/treatments", { scroll: false });
    } else {
      router.push(`/treatments?category=${id}`, { scroll: false });
    }
  };

  const filteredTreatments =
    activeCategory === "all"
      ? treatments
      : treatments.filter((t) => t.category === activeCategory);

  return (
    <section id="treatments-list" className="py-16 md:py-24 bg-background relative z-10 w-full overflow-hidden scroll-mt-24">
      {/* Decorative background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16 relative z-10">
        
        {/* Navigation & Tabs Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12 md:mb-16">
          {/* Category Tabs / Filter */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <div className="flex items-center gap-2 p-1.5 bg-altbg/60 border border-border/30 rounded-full shrink-0">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`font-inter text-xs md:text-sm font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 relative focus:outline-none shrink-0 ${
                      isActive ? "text-white" : "text-body hover:text-primary"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className={`w-12 h-12 rounded-full border border-border flex items-center justify-center text-heading transition-all duration-300 ${
                prevBtnDisabled
                  ? "opacity-45 cursor-not-allowed"
                  : "hover:bg-primary hover:border-primary hover:text-background"
              }`}
              aria-label="Previous treatments"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className={`w-12 h-12 rounded-full border border-border flex items-center justify-center text-heading transition-all duration-300 ${
                nextBtnDisabled
                  ? "opacity-45 cursor-not-allowed"
                  : "hover:bg-primary hover:border-primary hover:text-background"
              }`}
              aria-label="Next treatments"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport - full-width horizontal sliding with vertical padding to prevent hover clipping */}
        <div className="overflow-hidden w-full py-6 -my-6" ref={emblaRef}>
          <div className="flex -ml-6">
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.slug}
                className="flex-[0_0_82%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] xl:flex-[0_0_24%] pl-6 shrink-0"
              >
                <TreatmentCard treatment={treatment} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
