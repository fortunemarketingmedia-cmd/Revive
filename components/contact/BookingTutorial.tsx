"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMessageSquare, FiFileText, FiMapPin } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import { clinicData } from "@/lib/content/clinic";

const bookingOptions = [
  {
    icon: FiPhone,
    title: "1. Direct Call",
    description: "Speak directly with our clinic representative to find an immediate slot.",
    cta: `Call ${clinicData.mobile}`,
    href: `tel:${clinicData.mobile}`,
  },
  {
    icon: FiMessageSquare,
    title: "2. WhatsApp Text",
    description: "Send us a quick message to coordinate availability and get confirmations.",
    cta: "Chat on WhatsApp",
    href: `https://wa.me/${clinicData.whatsapp}?text=Hi%20Revive%20Skin%20Clinics,%20I'd%20like%20to%20inquire%20about%20an%20appointment.`,
  },
  {
    icon: FiFileText,
    title: "3. Online Request",
    description: "Fill out our digital form below with your preferred date, category, and branch.",
    cta: "Scroll to Form",
    href: "#booking-form",
  },
  {
    icon: FiMapPin,
    title: "4. Walk-In Visit",
    description: "Visit any of our two Nashik branches directly for assistance and scheduling.",
    cta: "View Locations",
    href: "#branches",
  },
];

export default function BookingTutorial() {
  return (
    <section className="py-16 md:py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSectionTitle
          title="Four Simple Ways to Schedule"
          subtitle="Booking Options"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {bookingOptions.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-border shadow-luxury flex flex-col justify-between items-start gap-6 h-full group"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-altbg border border-border flex items-center justify-center text-primary text-xl transition-colors group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-heading font-medium tracking-tight mb-2">
                      {opt.title}
                    </h3>
                    <p className="font-inter text-xs md:text-sm text-body leading-relaxed">
                      {opt.description}
                    </p>
                  </div>
                </div>

                <a
                  href={opt.href}
                  className="font-inter text-[10px] font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:border-primary hover:text-accent1 transition-all"
                >
                  {opt.cta} &rarr;
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
