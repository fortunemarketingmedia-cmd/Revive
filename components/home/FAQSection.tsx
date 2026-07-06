"use client";

import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqs } from "@/lib/content/faqs";

export default function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSectionTitle
          title="Frequently Asked Questions"
          subtitle="Support & Information"
        />
        
        {/* Accordion container */}
        <FAQAccordion items={faqs} className="max-w-4xl mx-auto" />
      </div>
    </section>
  );
}
