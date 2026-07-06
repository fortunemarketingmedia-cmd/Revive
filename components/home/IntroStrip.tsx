import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

const marqueeItems = [
  "Skin Rejuvenation",
  "Laser Hair Reduction",
  "PRP Hair Restoration",
  "Anti-Ageing Treatments",
  "Botox & Dermal Fillers",
  "Chemical Peels",
  "HIFU Facelift",
  "Acne Scar Resurfacing",
  "Melasma Treatment",
  "Tattoo Removal",
];

export default function IntroStrip() {
  return (
    <div className="bg-primary py-4 overflow-hidden relative z-20 shadow-md">
      {/* Editorial detail: fine gold-like borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />

      <div className="flex flex-col gap-2">
        <InfiniteMarquee items={marqueeItems} speed="slow" />
      </div>
    </div>
  );
}
