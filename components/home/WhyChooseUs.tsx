"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Experienced Doctor",
      description: "Led by Dr. Shraddha Sonanis, holding FCPS and DNB board certifications.",
      position: "left-top",
    },
    {
      title: "USFDA-Approved Lasers",
      description: "Advanced, clinically proven medical laser systems ensuring safety.",
      position: "right-top",
    },
    {
      title: "Personalised Care",
      description: "Thorough dermatological diagnostics and customized treatment plans.",
      position: "left-bottom",
    },
    {
      title: "Safe for Indian Skin",
      description: "Calibrated protocols for safe, optimal results on Indian skin tones.",
      position: "right-bottom",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#7c131f02_1px,transparent_1px)] [background-size:32px_32px] opacity-80" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16 relative z-10">
        <AnimatedSectionTitle
          title="Expert Care with Premium Personalized Beauty"
          subtitle="Why Choose Revive"
        />

        {/* Responsive Layout wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-6 max-w-[1500px] mx-auto mt-8">
          
          {/* Left Column (Desktop only, Cards 1 & 3) */}
          <div className="hidden lg:flex flex-col justify-center gap-10 w-[36%] items-end text-right">
            {/* Card 1: Experienced Doctor */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white/90 backdrop-blur-md rounded-[2rem] p-8 min-h-[190px] border-2 border-white shadow-[0_12px_30px_rgba(124,19,31,0.06)] flex items-start gap-5 w-full max-w-[440px] text-right"
            >
              <div className="flex-grow">
                <h4 className="font-playfair font-semibold text-heading text-xl mb-3">
                  {cards[0].title}
                </h4>
                <p className="font-inter text-sm text-body leading-relaxed">
                  {cards[0].description}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7C131F]/10 border border-[#7C131F]/20 text-[#7C131F] flex items-center justify-center shrink-0 mt-1">
                <FiCheck className="text-xs stroke-[3]" />
              </div>
            </motion.div>

            {/* Card 3: Personalised Care */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="bg-white/90 backdrop-blur-md rounded-[2rem] p-8 min-h-[190px] border-2 border-white shadow-[0_12px_30px_rgba(124,19,31,0.06)] flex items-start gap-5 w-full max-w-[440px] text-right"
            >
              <div className="flex-grow">
                <h4 className="font-playfair font-semibold text-heading text-xl mb-3">
                  {cards[2].title}
                </h4>
                <p className="font-inter text-sm text-body leading-relaxed">
                  {cards[2].description}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7C131F]/10 border border-[#7C131F]/20 text-[#7C131F] flex items-center justify-center shrink-0 mt-1">
                <FiCheck className="text-xs stroke-[3]" />
              </div>
            </motion.div>
          </div>

          {/* Center Column: Vertical Oval Image */}
          <div className="relative flex justify-center items-center w-full sm:w-auto lg:w-[28%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[280px] h-[380px] sm:w-[310px] sm:h-[430px] rounded-full overflow-hidden border-8 border-white shadow-[0_15px_45px_rgba(0,0,0,0.12)] bg-altbg"
            >
              <Image
                src="/images/home/oval.webp"
                alt="Personalized aesthetic care at Revive"
                fill
                priority
                sizes="310px"
                className="object-cover"
              />
            </motion.div>
            
            {/* Absolute background accent glow */}
            <div className="absolute inset-0 rounded-full bg-secondary/5 -z-10 filter blur-2xl" />
          </div>

          {/* Right Column (Desktop only, Cards 2 & 4) */}
          <div className="hidden lg:flex flex-col justify-center gap-10 w-[36%] items-start text-left">
            {/* Card 2: USFDA-Approved Lasers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-white/90 backdrop-blur-md rounded-[2rem] p-8 min-h-[190px] border-2 border-white shadow-[0_12px_30px_rgba(124,19,31,0.06)] flex items-start gap-5 w-full max-w-[440px] text-left"
            >
              <div className="w-8 h-8 rounded-full bg-[#7C131F]/10 border border-[#7C131F]/20 text-[#7C131F] flex items-center justify-center shrink-0 mt-1">
                <FiCheck className="text-xs stroke-[3]" />
              </div>
              <div>
                <h4 className="font-playfair font-semibold text-heading text-xl mb-3">
                  {cards[1].title}
                </h4>
                <p className="font-inter text-sm text-body leading-relaxed">
                  {cards[1].description}
                </p>
              </div>
            </motion.div>

            {/* Card 4: Safe for Indian Skin */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="bg-white/90 backdrop-blur-md rounded-[2rem] p-8 min-h-[190px] border-2 border-white shadow-[0_12px_30px_rgba(124,19,31,0.06)] flex items-start gap-5 w-full max-w-[440px] text-left"
            >
              <div className="w-8 h-8 rounded-full bg-[#7C131F]/10 border border-[#7C131F]/20 text-[#7C131F] flex items-center justify-center shrink-0 mt-1">
                <FiCheck className="text-xs stroke-[3]" />
              </div>
              <div>
                <h4 className="font-playfair font-semibold text-heading text-xl mb-3">
                  {cards[3].title}
                </h4>
                <p className="font-inter text-sm text-body leading-relaxed">
                  {cards[3].description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mobile & Tablet Fallback (Grid layout, visible below lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl lg:hidden mt-4">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 min-h-[170px] border-2 border-white shadow-[0_8px_20px_rgba(0,0,0,0.03)] flex items-start gap-4"
              >
                <div className="w-5 h-5 rounded-full bg-[#7C131F]/10 border border-[#7C131F]/20 text-[#7C131F] flex items-center justify-center shrink-0 mt-1">
                  <FiCheck className="text-xs stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-playfair font-semibold text-heading text-lg mb-2">
                    {card.title}
                  </h4>
                  <p className="font-inter text-sm text-body leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
