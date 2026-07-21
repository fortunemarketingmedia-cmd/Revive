"use client";

import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function BeforeAfterSection() {
  return (
    <section className="py-20 md:py-28 bg-altbg relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16 relative z-10">
        <AnimatedSectionTitle
          title="Clinical Results That Speak Volumes"
          subtitle="Before & After"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Example 1: Skin resurfacing */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-xl text-heading font-medium tracking-tight text-center">
              Acne Scar Laser Treatment
            </h3>
            <BeforeAfterSlider
              beforeImage="/images/treatments/acne_b.webp"
              afterImage="/images/treatments/acne_a.webp"
              beforeLabel="Before (Deep Scars)"
              afterLabel="After (4 Sessions)"
            />
            <p className="font-inter text-xs text-body/70 text-center leading-relaxed max-w-md mx-auto">
              Significant reduction in rolling and pitted acne scars using Er:YAG fractional laser resurfacing.
            </p>
          </div>

          {/* Example 2: Laser Photofacial */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-xl text-heading font-medium tracking-tight text-center">
              Laser Photofacial (Pigmentation)
            </h3>
            <BeforeAfterSlider
              beforeImage="/images/treatments/laser_Photofacial_b.webp"
              afterImage="/images/treatments/laser_Photofacial_a.webp"
              beforeLabel="Before (Melasma & spots)"
              afterLabel="After (6 Sessions)"
            />
            <p className="font-inter text-xs text-body/70 text-center leading-relaxed max-w-md mx-auto">
              Evened complexion and cleared skin spots following custom-calibrated light photofacial treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
