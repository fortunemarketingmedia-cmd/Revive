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
        "bg-[#7C131F]/90 backdrop-blur-[14px] border-2 border-white/80 rounded-[2rem] p-8 shadow-[0_15px_35px_rgba(0,0,0,0.18)] flex flex-col justify-between h-full relative overflow-hidden group text-white",
        className
      )}
    >
      {/* Editorial aesthetic quote element */}
      <span className="font-playfair text-8xl text-white/10 absolute -top-4 -left-2 select-none pointer-events-none">
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
                  ? "text-[#FDBD0E] fill-[#FDBD0E]"
                  : "text-white/20"
              )}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="font-inter text-sm md:text-base text-white/90 leading-relaxed italic">
          &ldquo;{testimonial.review}&rdquo;
        </p>
      </div>

      {/* Patient info */}
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10 relative z-10">
        <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center font-playfair font-semibold text-white text-sm shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-playfair font-medium text-white text-sm md:text-base leading-tight">
            {testimonial.name}
          </h4>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-inter text-[10px] uppercase font-bold tracking-wider text-[#FDBD0E]">
              {testimonial.treatment}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/25" />
            <span className="font-inter text-[10px] text-white/60 uppercase tracking-widest">
              via {testimonial.source}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
