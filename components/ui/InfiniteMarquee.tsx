"use client";

import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export default function InfiniteMarquee({
  items,
  reverse = false,
  className,
  speed = "slow",
}: InfiniteMarqueeProps) {
  const speedClasses = {
    slow: reverse ? "animate-marquee-reverse [animation-duration:35s]" : "animate-marquee [animation-duration:35s]",
    normal: reverse ? "animate-marquee-reverse [animation-duration:25s]" : "animate-marquee [animation-duration:25s]",
    fast: reverse ? "animate-marquee-reverse [animation-duration:15s]" : "animate-marquee [animation-duration:15s]",
  };

  return (
    <div className={cn("overflow-hidden w-full flex whitespace-nowrap select-none", className)}>
      <div className={cn("flex gap-8 items-center py-4 shrink-0", speedClasses[speed])}>
        {/* Render the items */}
        {items.map((item, idx) => (
          <span key={`item-1-${idx}`} className="font-playfair text-xl md:text-2xl font-light uppercase tracking-widest text-white flex items-center gap-8">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
          </span>
        ))}
      </div>
      
      {/* Duplicate set for seamless looping */}
      <div className={cn("flex gap-8 items-center py-4 shrink-0", speedClasses[speed])} aria-hidden="true">
        {items.map((item, idx) => (
          <span key={`item-2-${idx}`} className="font-playfair text-xl md:text-2xl font-light uppercase tracking-widest text-white flex items-center gap-8">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
