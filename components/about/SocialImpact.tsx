"use client";

import { motion } from "framer-motion";
import { FiHeart, FiShield, FiBookOpen } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

export default function SocialImpact() {
  const initiatives = [
    {
      icon: FiHeart,
      title: "Free Medical Camps",
      description: "Organizing and conducting regular dermatological and health check-up camps for underprivileged women and children in Nashik community.",
    },
    {
      icon: FiShield,
      title: "De-stigmatization Advocacy",
      description: "Dedicated clinical counseling and public advocacy to dismantle social stigmas surrounding chronic skin diseases like Vitiligo and Leprosy.",
    },
    {
      icon: FiBookOpen,
      title: "Public Health Education",
      description: "Writing regular educational columns and informative medical articles in local newspapers to spread awareness about preventive skincare.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-secondary/5 -z-10 filter blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16 relative z-10">
        <AnimatedSectionTitle
          title="Social Responsibility & Awareness"
          subtitle="Giving Back to Nashik"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1440px] mx-auto">
          {initiatives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/10 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#7C131F]/5 text-[#7C131F] flex items-center justify-center text-xl mb-6 group-hover:bg-[#7C131F] group-hover:text-white transition-all duration-300">
                  <Icon />
                </div>
                <h3 className="font-playfair text-lg md:text-xl text-heading font-medium tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="font-inter text-xs md:text-sm text-body leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
