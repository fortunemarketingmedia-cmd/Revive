"use client";

import { motion } from "framer-motion";
import { FiShield, FiAward, FiUserCheck, FiHeart, FiCpu, FiSmile } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import { clinicData } from "@/lib/content/clinic";

const iconMap = {
  shield: FiShield,
  award: FiAward,
  "user-check": FiUserCheck,
  heart: FiHeart,
  cpu: FiCpu,
  smile: FiSmile,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-altbg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSectionTitle
          title="Clinical Excellence Designed Around You"
          subtitle="Why Choose Revive"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clinicData.whyChooseUs.map((item, idx) => {
            // Safe lookup of icons
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || FiShield;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 border border-border/40 shadow-luxury flex flex-col items-start gap-5 hover:border-primary/20 transition-all duration-300 group"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-altbg border border-border flex items-center justify-center text-primary text-xl transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                  <IconComponent />
                </div>
                
                <div>
                  <h3 className="font-playfair text-lg md:text-xl text-heading font-medium tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter text-xs md:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
