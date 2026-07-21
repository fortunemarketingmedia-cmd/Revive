"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";

const teamRoles = [
  {
    title: "Certified Laser Technicians",
    responsibilities: [
      "Operate USFDA-approved laser systems under direct medical supervision.",
      "Conduct patch tests and evaluate patient skin response before procedures.",
      "Adhere strictly to laser safety guidelines (protective eyewear, system calibration)."
    ],
    experience: "5+ Years Average Experience",
    bio: "Our technicians undergo regular training updates directly from equipment manufacturers to maintain global standards in clinical safety."
  },
  {
    title: "Clinical Estheticians",
    responsibilities: [
      "Perform medical-grade facials, skin resurfacing, and chemical peel treatments.",
      "Provide in-depth patient education on pre-care preparation and post-care recovery.",
      "Administer hydrating therapies and assist the doctor in outpatient minor procedures."
    ],
    experience: "Advanced Esthetic Certifications",
    bio: "Specialized in clinical skin-barrier repair and post-procedure soothing treatments to optimize patient recovery times."
  },
  {
    title: "Patient Care Coordinators",
    responsibilities: [
      "Manage scheduling, treatment follow-up calls, and patient queries.",
      "Coordinate medical histories and organize clinical photography files.",
      "Ensure patient comfort, sanitization standards, and seamless clinic flow."
    ],
    experience: "Dedicated Clinical Support",
    bio: "Your primary point of contact from scheduling your first consultation to helping you navigate your post-care recovery plan."
  }
];

export default function ClinicTeam() {
  return (
    <section className="py-16 md:py-24 bg-background relative z-10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 2xl:px-16 relative z-10">
        <AnimatedSectionTitle
          title="Clinical Support Team"
          subtitle="Trained Specialists & Care Coordinators"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1440px] mx-auto mt-12">
          {teamRoles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-altbg/60 rounded-3xl p-8 border border-border/60 flex flex-col justify-between"
            >
              <div>
                <span className="font-inter text-[9px] uppercase font-bold tracking-wider text-primary bg-primary/5 border border-primary/10 px-3 py-1 rounded-full inline-block mb-6">
                  {role.experience}
                </span>

                <h4 className="font-playfair text-xl font-medium tracking-tight text-heading mb-4">
                  {role.title}
                </h4>

                <p className="font-inter text-xs md:text-sm text-body/80 leading-relaxed mb-6 italic">
                  "{role.bio}"
                </p>

                <div className="w-full h-[1px] bg-border/80 mb-6" />

                <h5 className="font-inter text-[10px] uppercase font-bold tracking-widest text-secondary mb-4">
                  Core Responsibilities
                </h5>

                <ul className="space-y-3 font-inter text-xs md:text-sm text-body">
                  {role.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
