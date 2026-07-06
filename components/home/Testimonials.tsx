"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import ReviewCard from "@/components/ui/ReviewCard";
import { testimonials } from "@/lib/content/testimonials";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSectionTitle
          title="Patient Stories of Transformation"
          subtitle="Testimonials"
        />

        {/* Slider viewport */}
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
                >
                  <ReviewCard testimonial={testimonial} className="h-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary bg-white shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="text-lg shrink-0" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary bg-white shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 focus:outline-none"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="text-lg shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
