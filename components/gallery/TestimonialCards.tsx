"use client";

import { motion } from "framer-motion";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import ReviewCard from "@/components/ui/ReviewCard";
import { testimonials } from "@/lib/content/testimonials";

export default function TestimonialCards() {
  return (
    <section className="py-16 md:py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSectionTitle
          title="What Our Patients Say"
          subtitle="Real Testimonials"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <ReviewCard testimonial={test} className="h-full bg-altbg/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
