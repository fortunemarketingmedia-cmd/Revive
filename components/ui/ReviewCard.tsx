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
        "bg-white border border-[#F06722]/25 rounded-[2rem] p-8 shadow-card flex flex-col justify-between h-full relative overflow-hidden group text-heading",
        className
      )}
    >
      {/* Editorial aesthetic quote element */}
      <span className="font-playfair text-8xl text-[#F06722]/5 absolute -top-4 -left-2 select-none pointer-events-none">
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
                  ? "text-[#7C131F] fill-[#7C131F]"
                  : "text-black/10"
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
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-black/5 relative z-10">
        <div className="w-10 h-10 rounded-full bg-[#F06722]/10 border border-[#F06722]/20 flex items-center justify-center font-playfair font-semibold text-[#7C131F] text-sm shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-playfair font-medium text-heading text-sm md:text-base leading-tight">
            {testimonial.name}
          </h4>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-inter text-[10px] uppercase font-bold tracking-wider text-[#7C131F]">
              {testimonial.treatment}
            </span>
            <span className="w-1 h-1 rounded-full bg-black/10" />
            <span className="font-inter text-[10px] text-body/60 uppercase tracking-widest">
              via {testimonial.source}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
