"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import TreatmentCard from "@/components/ui/TreatmentCard";
import { treatments, TreatmentCategory } from "@/lib/content/treatments";

const categories: { id: "all" | TreatmentCategory; label: string }[] = [
  { id: "all", label: "All Treatments" },
  { id: "skin", label: "Skin care" },
  { id: "hair", label: "Hair Treatments" },
  { id: "laser", label: "Laser Treatments" },
  { id: "anti-ageing", label: "Anti Ageing" },
];

export default function TreatmentGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<"all" | TreatmentCategory>("all");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const matched = categories.find((c) => c.id === categoryParam);
      if (matched) {
        setActiveCategory(matched.id);
      }
    }
  }, [searchParams]);

  const handleCategorySelect = (id: "all" | TreatmentCategory) => {
    setActiveCategory(id);
    if (id === "all") {
      router.push("/treatments", { scroll: false });
    } else {
      router.push(`/treatments?category=${id}`, { scroll: false });
    }
  };

  const filteredTreatments =
    activeCategory === "all"
      ? treatments
      : treatments.filter((t) => t.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Category Tabs / Filter */}
        <div className="flex justify-center mb-16 md:mb-20 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 bg-altbg/60 border border-border/30 rounded-full shrink-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`font-inter text-xs md:text-sm font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 relative focus:outline-none shrink-0 ${
                    isActive ? "text-white" : "text-body hover:text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((treatment, idx) => (
              <motion.div
                key={treatment.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TreatmentCard treatment={treatment} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
