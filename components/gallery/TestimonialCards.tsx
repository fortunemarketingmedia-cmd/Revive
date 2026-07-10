"use client";

import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import ReviewCard from "@/components/ui/ReviewCard";
import { testimonials } from "@/lib/content/testimonials";

export default function TestimonialCards() {
  // Triple the list of testimonials to create a seamless infinite looping illusion
  const loopedList = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 bg-background relative z-10 w-full overflow-hidden border-t border-border/80">
      
      {/* Self-contained CSS Marquee Loop Animation */}
      <style>{`
        @keyframes testimonial-scroll-lane {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .testimonial-lane-track {
          display: flex;
          width: max-content;
          animation: testimonial-scroll-lane 75s linear infinite;
        }
        .testimonial-lane-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSectionTitle
          title="What Our Patients Say"
          subtitle="Real Testimonials"
        />
      </div>

      {/* Infinite Horizontal Loop Container - Single Lane */}
      <div className="w-full relative py-6 mt-4">

        {/* Scrolling Lane track */}
        <div className="w-full overflow-hidden">
          <div className="testimonial-lane-track px-4">
            {loopedList.map((test, idx) => (
              <div
                key={`${test.id}-${idx}`}
                className="w-[310px] sm:w-[350px] md:w-[420px] px-3 shrink-0 select-none"
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

    </section>
  );
}
