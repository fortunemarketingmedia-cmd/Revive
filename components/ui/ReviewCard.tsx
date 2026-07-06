import { FiStar } from "react-icons/fi";
import { Testimonial } from "@/lib/content/testimonials";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function ReviewCard({ testimonial, className }: ReviewCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-8 border border-border shadow-luxury flex flex-col justify-between h-full relative overflow-hidden group",
        className
      )}
    >
      {/* Editorial aesthetic quote element */}
      <span className="font-playfair text-8xl text-secondary/15 absolute -top-4 -left-2 select-none pointer-events-none">
        “
      </span>

      <div className="relative z-10 flex flex-col gap-6">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <FiStar
              key={idx}
              className={cn(
                "w-4 h-4",
                idx < testimonial.rating
                  ? "text-secondary fill-secondary"
                  : "text-border"
              )}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="font-inter text-sm md:text-base text-body leading-relaxed italic">
          &ldquo;{testimonial.review}&rdquo;
        </p>
      </div>

      {/* Patient info */}
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border relative z-10">
        <div className="w-10 h-10 rounded-full bg-altbg border border-border flex items-center justify-center font-playfair font-semibold text-primary text-sm shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-playfair font-medium text-heading text-sm md:text-base leading-tight">
            {testimonial.name}
          </h4>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-inter text-[10px] uppercase font-bold tracking-wider text-primary">
              {testimonial.treatment}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-inter text-[10px] text-body/60 uppercase tracking-widest">
              via {testimonial.source}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
