"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface FAQAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQAccordionItemProps) {
  return (
    <div className="border-b border-border last:border-0 py-6">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center text-left gap-4 group focus:outline-none"
      >
        <span className="font-playfair text-lg md:text-xl font-medium text-heading transition-colors group-hover:text-primary">
          {question}
        </span>
        <span className="text-primary text-xl shrink-0 p-1 rounded-full border border-border group-hover:border-primary/30 transition-colors duration-300">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>

      {/*
       * The answer is always mounted in the DOM (never conditionally
       * rendered) so it's present in the page's initial HTML for search
       * crawlers and FAQ rich-result eligibility — only its visible
       * height/opacity are animated when toggled. See site audit: FAQ
       * accordions previously injected answer text only on click.
       */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pt-4 font-inter text-sm md:text-base text-body leading-relaxed max-w-4xl pr-8">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

interface FAQAccordionProps {
  items: { id: number; question: string; answer: string }[];
  className?: string;
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn("w-full border-t border-border", className)}>
      {items.map((item) => (
        <FAQItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
