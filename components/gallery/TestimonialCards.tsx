"use client";

import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import ReviewCard from "@/components/ui/ReviewCard";
import { testimonials } from "@/lib/content/testimonials";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TestimonialCards() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false }
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-background relative z-10 w-full overflow-hidden border-t border-border/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16">
        <AnimatedSectionTitle
          title="What Our Patients Say"
          subtitle="Real Testimonials"
        />

        <div className="relative w-full mt-12">
          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev} 
            className="absolute -left-4 md:-left-6 lg:-left-12 top-[45%] -translate-y-1/2 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-[#7C131F] hover:bg-[#7C131F] hover:text-white transition-all z-20"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          
          <button 
            onClick={scrollNext} 
            className="absolute -right-4 md:-right-6 lg:-right-12 top-[45%] -translate-y-1/2 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-[#7C131F] hover:bg-[#7C131F] hover:text-white transition-all z-20"
            aria-label="Next slide"
          >
            <FiChevronRight className="text-2xl" />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing px-2 py-4" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0"
                >
                  <ReviewCard
                    testimonial={test}
                    className="h-full transform hover:scale-[1.015] transition-all duration-300 shadow-luxury"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
