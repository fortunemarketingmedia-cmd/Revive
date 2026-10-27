import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import Image from "next/image";

const comparisons = [
  {
    title: "PRP Hair Restoration (Scalp)",
    beforeImage: "/images/treatments/prp_scalp_b.webp",
    afterImage: "/images/treatments/prp_scalp_a.webp",
    beforeLabel: "Before (Visible Thinning)",
    afterLabel: "After (6 Sessions)",
    description: "Platelet-rich plasma growth factor injections trigger follicle activity, thickening hair shafts.",
  },
  {
    title: "MNRF Treatment",
    beforeImage: "/images/gallery/before-after/mnrf-before.webp",
    afterImage: "/images/gallery/before-after/mnrf-after.webp",
    beforeLabel: "Before MNRF",
    afterLabel: "After MNRF",
    description: "A clinical comparison showing the visible result following microneedling radiofrequency treatment.",
  },
  {
    title: "Xanthelasma Treatment",
    beforeImage: "/images/gallery/before-after/xanthelasma-before.webp",
    afterImage: "/images/gallery/before-after/xanthelasma-after.webp",
    beforeLabel: "Before Treatment",
    afterLabel: "After Treatment",
    description: "A before-and-after comparison showing the treated eye area following xanthelasma removal.",
  },
  {
    title: "Radiofrequency Treatment",
    beforeImage: "/images/gallery/before-after/rf-before.webp",
    afterImage: "/images/gallery/before-after/rf-after.webp",
    beforeLabel: "Before RF",
    afterLabel: "After RF",
    description: "A clinical comparison showing the visible result following radiofrequency treatment.",
  },
  {
    title: "Blepharoplasty",
    beforeImage: "/images/gallery/before-after/blepharoplasty-before.webp",
    afterImage: "/images/gallery/before-after/blepharoplasty-after.webp",
    beforeLabel: "Before Procedure",
    afterLabel: "After Procedure",
    description: "A before-and-after comparison of the eye area following blepharoplasty.",
  },
  {
    title: "Laser Hair Reduction",
    beforeImage: "/images/gallery/before-after/lhr-before.webp",
    afterImage: "/images/gallery/before-after/lhr-after.webp",
    beforeLabel: "Before LHR",
    afterLabel: "After LHR",
    description: "A before-and-after comparison showing reduced hair growth following laser hair reduction.",
  },
  {
    title: "HIFU Treatment",
    beforeImage: "/images/gallery/before-after/hifu-before.webp",
    afterImage: "/images/gallery/before-after/hifu-after.webp",
    beforeLabel: "Before HIFU",
    afterLabel: "After HIFU",
    description: "A clinical comparison showing the visible lifting and contouring result following HIFU treatment.",
  },
  {
    title: "Botox Treatment",
    beforeImage: "/images/gallery/before-after/botox-before.webp",
    afterImage: "/images/gallery/before-after/botox-after.webp",
    beforeLabel: "Before Botox",
    afterLabel: "After Botox",
    description: "A before-and-after comparison showing the visible result following Botox treatment.",
  },
  {
    title: "Dermal Filler Treatment",
    beforeImage: "/images/gallery/before-after/filler-before.webp",
    afterImage: "/images/gallery/before-after/filler-after.webp",
    beforeLabel: "Before Filler",
    afterLabel: "After Filler",
    description: "A clinical comparison showing the visible result following dermal filler treatment.",
  },
  {
    title: "Microblading",
    beforeImage: "/images/gallery/before-after/microblading-before.webp",
    afterImage: "/images/gallery/before-after/microblading-after.webp",
    beforeLabel: "Before Microblading",
    afterLabel: "After Microblading",
    description: "A before-and-after comparison showing enhanced eyebrow shape and definition following microblading.",
  },
];

export default function BeforeAfterGrid() {
  return (
    <section id="before-after-gallery" className="py-16 md:py-24 bg-background relative z-10 scroll-mt-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16">
        <AnimatedSectionTitle
          title="Clinical Case Comparisons"
          subtitle="Before & After Results"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1440px] mx-auto mt-12">
          {comparisons.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
            >
              <div className="grid grid-cols-2 gap-px bg-border">
                {[
                  { image: item.beforeImage, label: item.beforeLabel, stage: "Before" },
                  { image: item.afterImage, label: item.afterLabel, stage: "After" },
                ].map((photo) => (
                  <figure
                    key={photo.stage}
                    className="relative aspect-square overflow-hidden bg-[#f7f4f1]"
                  >
                    <Image
                      src={photo.image}
                      alt={`${photo.stage} ${item.title}`}
                      fill
                      sizes="(max-width: 767px) 50vw, 25vw"
                      className="object-contain"
                    />
                    <figcaption className="absolute inset-x-2 bottom-2 rounded-md bg-[#681621]/85 px-2 py-1.5 text-center font-inter text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm sm:inset-x-auto sm:left-3 sm:bottom-3 sm:px-3 sm:text-xs">
                      {photo.label}
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="p-5 md:p-6">
                <h3 className="font-playfair text-xl text-heading font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="font-inter text-xs md:text-sm text-body/70 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
