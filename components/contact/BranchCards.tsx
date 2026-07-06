"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiPhone, FiExternalLink } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import { clinicData } from "@/lib/content/clinic";

export default function BranchCards() {
  return (
    <section id="branches" className="py-16 md:py-24 bg-background relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSectionTitle
          title="Visit Our Locations"
          subtitle="Clinic Branches"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {clinicData.branches.map((branch, idx) => {
            const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              branch.name + " " + branch.address
            )}`;

            return (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-border shadow-luxury flex flex-col gap-6 overflow-hidden h-full"
              >
                {/* Branch Info */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-playfair text-xl md:text-2xl text-primary font-medium tracking-tight">
                    {branch.name}
                  </h3>
                  
                  <div className="flex flex-col gap-3 font-inter text-sm text-body">
                    <div className="flex gap-3 items-start">
                      <FiMapPin className="text-primary shrink-0 mt-1" />
                      <div>
                        <p className="leading-relaxed">{branch.address}</p>
                        <p className="text-xs text-body/50 mt-1">Landmark: {branch.landmark}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <FiClock className="text-primary shrink-0" />
                      <p className="text-xs">{branch.timings}</p>
                    </div>

                    <div className="flex gap-3 items-center">
                      <FiPhone className="text-primary shrink-0" />
                      <a href={`tel:${branch.mobile}`} className="hover:text-primary transition-colors font-medium">
                        {branch.mobile} / {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map Embed Frame */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-altbg/30 shadow-inner">
                  <iframe
                    src={branch.mapUrl}
                    title={`${branch.name} location map`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Directions CTA */}
                <div className="flex justify-start">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-inter text-[10px] font-bold uppercase tracking-widest text-primary hover:text-accent1 transition-colors border-b border-primary/20 pb-1"
                  >
                    <FiExternalLink className="text-xs" />
                    Get Directions on Google Maps
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
