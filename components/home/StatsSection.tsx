"use client";

import { motion } from "framer-motion";
import StatCounter from "@/components/ui/StatCounter";
import { clinicData } from "@/lib/content/clinic";

export default function StatsSection() {
  return (
    <section className="bg-primary text-white py-20 relative overflow-hidden">
      {/* Editorial detail: diagonal background accent line */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.01)_50%,rgba(255,255,255,0.01)_75%,transparent_75%,transparent)] bg-[size:40px_40px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center text-center">
          {clinicData.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              {/* Force text-white class to override default text-primary class in StatCounter */}
              <div className="[&>span]:text-secondary font-playfair mb-2">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="w-8 h-[1px] bg-secondary/30 my-3" />
              <p className="font-inter text-xs font-bold uppercase tracking-widest text-white/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
