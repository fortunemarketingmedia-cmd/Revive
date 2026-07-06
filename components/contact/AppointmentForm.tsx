"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiLoader } from "react-icons/fi";
import AnimatedSectionTitle from "@/components/ui/AnimatedSectionTitle";
import { treatments, TreatmentCategory } from "@/lib/content/treatments";
import { clinicData } from "@/lib/content/clinic";

export default function AppointmentForm() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "" as TreatmentCategory | "",
    treatment: "",
    branch: "",
    date: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Populate fields from search params
  useEffect(() => {
    const isBook = searchParams.get("book") === "true";
    const treatmentParam = searchParams.get("treatment");
    
    if (isBook && treatmentParam) {
      const match = treatments.find((t) => t.slug === treatmentParam);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          category: match.category,
          treatment: match.slug,
        }));
      }
    }
  }, [searchParams]);

  // Dynamically filter treatments based on selected category
  const filteredTreatments = formData.category
    ? treatments.filter((t) => t.category === formData.category)
    : [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // Reset specific treatment if category changes
      if (name === "category") {
        updated.treatment = "";
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    try {
      // Form submission configured for easy CRM/Webhook integration later
      const crmWebhookUrl = process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL;
      
      if (crmWebhookUrl) {
        const response = await fetch(crmWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
          throw new Error("Failed to send data to CRM");
        }
      } else {
        // Fallback simulated network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        category: "",
        treatment: "",
        branch: "",
        date: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setErrorMsg("An error occurred. Please try again or call the clinic directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="booking-form" className="py-16 md:py-24 bg-altbg relative z-10 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSectionTitle
          title="Request a Consultation"
          subtitle="Appointment Request"
        />

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury border border-border">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-inter text-xs font-semibold uppercase tracking-wider text-heading">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="font-inter text-sm border border-border/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-altbg/10"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-inter text-xs font-semibold uppercase tracking-wider text-heading">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter phone number"
                    className="font-inter text-sm border border-border/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-altbg/10"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-inter text-xs font-semibold uppercase tracking-wider text-heading">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className="font-inter text-sm border border-border/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-altbg/10"
                  />
                </div>

                {/* Date */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="font-inter text-xs font-semibold uppercase tracking-wider text-heading">
                    Preferred Date <span className="text-primary">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="font-inter text-sm border border-border/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-altbg/10"
                  />
                </div>

                {/* Category */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="category" className="font-inter text-xs font-semibold uppercase tracking-wider text-heading">
                    Treatment Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="font-inter text-sm border border-border/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-altbg/10 appearance-none"
                  >
                    <option value="">Select Category</option>
                    <option value="skin">Skin care</option>
                    <option value="hair">Hair Treatments</option>
                    <option value="laser">Laser Treatments</option>
                    <option value="anti-ageing">Anti Ageing</option>
                  </select>
                </div>

                {/* Specific Treatment */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="treatment" className="font-inter text-xs font-semibold uppercase tracking-wider text-heading">
                    Specific Procedure
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    disabled={!formData.category}
                    className="font-inter text-sm border border-border/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-altbg/10 appearance-none disabled:opacity-50"
                  >
                    <option value="">Select Treatment</option>
                    {filteredTreatments.map((t) => (
                      <option key={t.slug} value={t.slug}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Branch */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="branch" className="font-inter text-xs font-semibold uppercase tracking-wider text-heading">
                    Preferred Branch <span className="text-primary">*</span>
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    required
                    className="font-inter text-sm border border-border/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-altbg/10 appearance-none"
                  >
                    <option value="">Select Branch</option>
                    {clinicData.branches.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="message" className="font-inter text-xs font-semibold uppercase tracking-wider text-heading">
                    Additional Message / Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter any details or questions"
                    className="font-inter text-sm border border-border/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-altbg/10 resize-none"
                  />
                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <p className="font-inter text-xs text-primary font-semibold md:col-span-2 text-center">
                    {errorMsg}
                  </p>
                )}

                {/* Submit button */}
                <div className="md:col-span-2 mt-4 flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 font-inter text-xs font-bold uppercase tracking-widest text-white bg-primary rounded-full hover:bg-accent1 hover:shadow-lg disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 min-w-[200px]"
                  >
                    {isLoading ? (
                      <FiLoader className="animate-spin text-sm shrink-0" />
                    ) : (
                      "Request Booking"
                    )}
                  </button>
                </div>

              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <FiCheckCircle className="text-6xl text-primary mb-6" />
                <h3 className="font-playfair text-2xl md:text-3xl text-heading font-medium tracking-tight mb-3">
                  Appointment Request Sent
                </h3>
                <p className="font-inter text-sm md:text-base text-body max-w-md mb-8 leading-relaxed">
                  Thank you for contacting Revive. Our representative will call or WhatsApp you shortly to confirm your booking slot.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="font-inter text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all"
                >
                  Send another request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
