"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTABanner() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to Revive newsletter!");
  };

  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] relative overflow-hidden border-t border-border/40">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#7c131f01_1px,transparent_1px)] [background-size:24px_24px] opacity-75" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Skincare Products Image (Tilted Leaf-Parallelogram Border) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] max-w-[420px] rounded-[2rem] rounded-tr-[5.5rem] rounded-bl-[5.5rem] overflow-hidden border border-border shadow-luxury bg-altbg"
            >
              <Image
                src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&q=80"
                alt="Premium skincare products at Revive Clinic"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Right Column: News & Subscribe */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-inter text-xs font-bold uppercase tracking-widest text-[#7C131F] mb-3 block"
            >
              News & Skincare Guides
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-heading leading-[1.12] mb-4"
            >
              Beauty Tips & Care
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-sm md:text-base text-body leading-relaxed max-w-xl mb-8"
            >
              Expert skincare tips for radiant, glowing skin. Subscribe to receive medical skincare advice, clinic updates, and exclusive guides directly from Dr. Shraddha Sonanis.
            </motion.p>

            {/* Subscribe capsule form (Reference Image 1) */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center w-full max-w-md bg-white border border-border/80 rounded-full p-1 sm:p-1.5 shadow-sm focus-within:border-[#7C131F]/30 transition-all duration-300"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-heading placeholder-body/40 pl-5 pr-2 py-2 outline-none border-none flex-grow font-inter text-sm w-full min-w-0"
                required
              />
              <button
                type="submit"
                className="bg-[#c27854] text-white font-inter text-xs uppercase font-bold tracking-wider px-6 py-2.5 sm:py-3 rounded-full hover:bg-black transition-colors shrink-0"
              >
                Subscribe
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
}
