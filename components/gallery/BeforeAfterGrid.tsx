"use client";

import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function BeforeAfterGrid() {
  return (
    <section className="py-16 md:py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSectionTitle
          title="Clinical Case Comparisons"
          subtitle="Before & After Results"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Slider 1: Acne Scars */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-xl text-heading font-medium tracking-tight">
              Er:YAG Laser Acne Scar Treatment
            </h3>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
              beforeLabel="Before (Deep Pitted Scars)"
              afterLabel="After (4 Sessions)"
            />
            <p className="font-inter text-xs md:text-sm text-body/70 leading-relaxed mt-1">
              Er:YAG fractional laser resurfacing stimulates new skin collagen, flattening pitted acne scars and smoothing texture.
            </p>
          </div>

          {/* Slider 2: Laser Photofacial */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-xl text-heading font-medium tracking-tight">
              Laser Photofacial for Melasma
            </h3>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80"
              beforeLabel="Before (Uneven Pigmentation)"
              afterLabel="After (6 Sessions)"
            />
            <p className="font-inter text-xs md:text-sm text-body/70 leading-relaxed mt-1">
              Q-switched Nd:YAG laser sessions target stubborn dermal pigments to achieve an even skin tone.
            </p>
          </div>

          {/* Slider 3: PRP Hair Therapy */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-xl text-heading font-medium tracking-tight">
              PRP Hair Restoration (Scalp)
            </h3>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
              beforeLabel="Before (Visible Thinning)"
              afterLabel="After (6 Sessions)"
            />
            <p className="font-inter text-xs md:text-sm text-body/70 leading-relaxed mt-1">
              Platelet-rich plasma growth factor injections trigger follicle activity, thickening hair shafts.
            </p>
          </div>

          {/* Slider 4: Chemical Peels */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-xl text-heading font-medium tracking-tight">
              Aesthetic Chemical Peels for Glow
            </h3>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80"
              beforeLabel="Before (Dull Texture)"
              afterLabel="After (Series of Peels)"
            />
            <p className="font-inter text-xs md:text-sm text-body/70 leading-relaxed mt-1">
              Superficial glycolic peels exfoliate dry surface cells, revealing radiant, hydrated skin layers underneath.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
