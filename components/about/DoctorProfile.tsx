"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import { doctorData } from "@/lib/content/clinic";

export default function DoctorProfile() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-start">
          
          {/* Left Column: Doctor Image (Large) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] max-w-[420px] rounded-[30px] overflow-hidden shadow-luxury border border-border bg-altbg"
            >
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                alt="Dr. Shraddha Sonanis"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover transition-transform duration-700 hover:scale-103"
              />
            </motion.div>
            
            {/* Absolute background accent elements */}
            <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full bg-secondary/15 -z-10 filter blur-2xl" />
          </div>

          {/* Right Column: Complete Bio and Credentials */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <AnimatedSectionTitle
              title="Clinical Leader & Founder"
              subtitle="Meet Dr. Shraddha Sonanis"
              align="left"
              className="mb-8"
            />
            
            <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent2 mb-6">
              {doctorData.title} &bull; {doctorData.specialization}
            </p>

            {/* Split bio text into readable paragraphs */}
            <div className="font-inter text-sm md:text-base text-body leading-relaxed flex flex-col gap-6 mb-10">
              {doctorData.bio.split("\n\n").map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Qualifications / Timeline list */}
            <div className="w-full mb-10">
              <h4 className="font-playfair text-lg text-heading font-medium tracking-wide mb-6">Academic Background</h4>
              <div className="flex flex-col gap-4">
                {doctorData.credentials.map((cred, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex justify-between items-start border-b border-border pb-3 last:border-0"
                  >
                    <div>
                      <p className="font-playfair text-base text-heading font-medium">{cred.degree}</p>
                      <p className="font-inter text-xs text-body/70 mt-0.5">{cred.institution}</p>
                      {cred.subject && <p className="font-inter text-[10px] uppercase font-bold tracking-wider text-primary mt-1">{cred.subject}</p>}
                    </div>
                    <span className="font-playfair text-sm text-primary font-bold italic shrink-0 ml-4">{cred.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Special Interests list */}
            <div className="w-full">
              <h4 className="font-playfair text-lg text-heading font-medium tracking-wide mb-4">Areas of Special Clinical Interest</h4>
              <div className="flex flex-wrap gap-2.5">
                {doctorData.specialInterests.map((interest, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="font-inter text-[10px] uppercase font-bold tracking-widest text-primary border border-primary/10 bg-altbg px-4 py-2 rounded-full"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
