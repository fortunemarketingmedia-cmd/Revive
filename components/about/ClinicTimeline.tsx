"use client";

import { motion } from "framer-motion";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import { doctorData } from "@/lib/content/clinic";

export default function ClinicTimeline() {
  return (
    <section className="py-20 md:py-28 bg-altbg relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSectionTitle
          title="Milestones of Excellence"
          subtitle="Our Timeline"
        />

        {/* Timeline container */}
        <div className="relative mt-16 md:mt-20">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-primary/20 -translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-16">
            {doctorData.timeline.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row relative w-full items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline point */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent2 border-2 border-white -translate-x-1/2 translate-y-2 z-10 shadow-sm" />

                  {/* Empty spacer side for desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`pl-10 md:pl-0 w-full md:w-1/2 ${
                      isEven ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"
                    }`}
                  >
                    <span className="font-playfair text-xl md:text-2xl text-primary font-bold italic mb-1.5 block">
                      {milestone.year}
                    </span>
                    <h3 className="font-playfair text-lg text-heading font-medium tracking-tight mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-inter text-xs md:text-sm text-body leading-relaxed max-w-md md:ml-auto md:mr-0">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
