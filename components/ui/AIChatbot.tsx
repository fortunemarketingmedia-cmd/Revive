"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiX, 
  FiCalendar, 
  FiGrid, 
  FiUser, 
  FiMapPin, 
  FiArrowLeft, 
  FiClipboard, 
  FiPhone, 
  FiExternalLink,
  FiCpu
} from "react-icons/fi";
import { cn } from "@/lib/utils";

// Dialogue option type structure
interface ChatOption {
  label: string;
  nextState: string;
  href?: string;
  iconType: "calendar" | "treatments" | "doctor" | "branches" | "back" | "form" | "phone" | "link";
}

interface ChatNode {
  message: string;
  options: ChatOption[];
}

const dialogueTree: Record<string, ChatNode> = {
  start: {
    message: "Hi! Welcome to Revive Skin Clinics. I'm your AI digital assistant. How can I help you today?",
    options: [
      { label: "Book an Appointment", nextState: "book", iconType: "calendar" },
      { label: "Explore Treatments", nextState: "treatments", iconType: "treatments" },
      { label: "Meet Dr. Shraddha", nextState: "doctor", iconType: "doctor" },
      { label: "Branches & Hours", nextState: "branches", iconType: "branches" },
    ],
  },
  book: {
    message: "Which branch would you like to visit? We have two fully equipped locations in Nashik.",
    options: [
      { label: "Sharanpur Road Branch", nextState: "book_sharanpur", iconType: "branches" },
      { label: "Nashik Road Branch", nextState: "book_nashikroad", iconType: "branches" },
      { label: "Go Back", nextState: "start", iconType: "back" },
    ],
  },
  book_sharanpur: {
    message: "Great! You can request an appointment online using our booking form, or call the Sharanpur Road branch directly at +91-98230-63063.",
    options: [
      { label: "Go to Booking Form", nextState: "start", href: "/contact?book=true", iconType: "form" },
      { label: "Call Sharanpur Branch", nextState: "start", href: "tel:+919823063063", iconType: "phone" },
      { label: "Go Back", nextState: "book", iconType: "back" },
    ],
  },
  book_nashikroad: {
    message: "Excellent choice! You can request an appointment online using our booking form, or call the Nashik Road branch directly at +91-98230-63063.",
    options: [
      { label: "Go to Booking Form", nextState: "start", href: "/contact?book=true", iconType: "form" },
      { label: "Call Nashik Road Branch", nextState: "start", href: "tel:+919823063063", iconType: "phone" },
      { label: "Go Back", nextState: "book", iconType: "back" },
    ],
  },
  treatments: {
    message: "We offer advanced, clinical treatments across multiple categories. Which area interests you?",
    options: [
      { label: "Skin Care (Acne, Pigment...)", nextState: "skin", iconType: "treatments" },
      { label: "Hair Care (PRP, Hair Loss...)", nextState: "hair", iconType: "treatments" },
      { label: "Laser Hair Reduction", nextState: "laser", iconType: "treatments" },
      { label: "Anti-Ageing & Peels", nextState: "antiageing", iconType: "treatments" },
      { label: "Go Back", nextState: "start", iconType: "back" },
    ],
  },
  skin: {
    message: "We specialize in science-backed treatments for Acne, Pigmentation, Eczema, Psoriasis, and Vitiligo. Would you like to view all services?",
    options: [
      { label: "View Skin Treatments", nextState: "start", href: "/treatments", iconType: "link" },
      { label: "Go Back", nextState: "treatments", iconType: "back" },
    ],
  },
  hair: {
    message: "We offer clinical PRP (Platelet-Rich Plasma) restoration, mesotherapy, and advanced hair-loss therapy to restore hair density.",
    options: [
      { label: "View Hair Treatments", nextState: "start", href: "/treatments", iconType: "link" },
      { label: "Go Back", nextState: "treatments", iconType: "back" },
    ],
  },
  laser: {
    message: "We use state-of-the-art USFDA-approved Diode laser systems for painless, permanent hair reduction calibrated for Indian skin.",
    options: [
      { label: "Learn About Laser Treatment", nextState: "start", href: "/treatments/laser-hair-reduction", iconType: "link" },
      { label: "Go Back", nextState: "treatments", iconType: "back" },
    ],
  },
  antiageing: {
    message: "Our anti-ageing services include chemical peels, microdermabrasion, and skin rejuvenation to restore youthful radiance.",
    options: [
      { label: "View Anti-Ageing Services", nextState: "start", href: "/treatments", iconType: "link" },
      { label: "Go Back", nextState: "treatments", iconType: "back" },
    ],
  },
  doctor: {
    message: "Dr. Shraddha Sonanis (MBBS, FCPS, DNB) is a board-certified clinical dermatologist with over 15 years of experience (ex-Kaya Skin Clinic).",
    options: [
      { label: "Read Professional Bio", nextState: "start", href: "/about", iconType: "link" },
      { label: "Go Back", nextState: "start", iconType: "back" },
    ],
  },
  branches: {
    message: "Branches:\n1. Sharanpur Rd: Opp. Hotel Rajiv, 10am-1:30pm & 5pm-8:30pm (Closed Sun)\n2. Nashik Rd: Near Inox, 2pm-4pm (Closed Sun)",
    options: [
      { label: "Get Directions & Maps", nextState: "start", href: "/contact", iconType: "link" },
      { label: "Go Back", nextState: "start", iconType: "back" },
    ],
  },
};

// Helper component to render icons based on type
function OptionIcon({ type }: { type: ChatOption["iconType"] }) {
  const baseClass = "text-sm shrink-0 opacity-80";
  switch (type) {
    case "calendar":
      return <FiCalendar className={baseClass} />;
    case "treatments":
      return <FiGrid className={baseClass} />;
    case "doctor":
      return <FiUser className={baseClass} />;
    case "branches":
      return <FiMapPin className={baseClass} />;
    case "back":
      return <FiArrowLeft className={baseClass} />;
    case "form":
      return <FiClipboard className={baseClass} />;
    case "phone":
      return <FiPhone className={baseClass} />;
    case "link":
      return <FiExternalLink className={baseClass} />;
    default:
      return null;
  }
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentState, setCurrentState] = useState("start");
  const [history, setHistory] = useState<{ sender: "bot" | "user"; text: string }[]>([
    { sender: "bot", text: dialogueTree.start.message },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 1. Listen for scroll to show chatbot icon only after Hero Section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Scroll to bottom of chat history when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleOptionClick = (option: ChatOption) => {
    // Add user's selection to chat history
    setHistory((prev) => [...prev, { sender: "user", text: option.label }]);

    // Set a slight timeout to simulate bot response lag for natural UX
    setTimeout(() => {
      setCurrentState(option.nextState);
      const nextNode = dialogueTree[option.nextState];
      setHistory((prev) => [...prev, { sender: "bot", text: nextNode.message }]);
    }, 450);
  };

  const resetChat = () => {
    setCurrentState("start");
    setHistory([{ sender: "bot", text: dialogueTree.start.message }]);
  };

  return (
    <>
      {/* 1. Floating Action Chatbot Button (Custom AI Sparkles/Cpu Icon) */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-50 h-14 w-14 rounded-full bg-primary text-white shadow-[0_8px_30px_rgba(124,19,31,0.3)] flex items-center justify-center border border-white/10 cursor-pointer focus:outline-none hover:scale-105 active:scale-95 transition-transform"
            aria-label="Ask Revive AI Assistant"
          >
            {isOpen ? <FiX className="text-xl" /> : <FiCpu className="text-xl animate-pulse-slow" />}
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Interactive Chat Window overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-40 right-4 left-4 sm:bottom-20 sm:left-auto sm:right-6 sm:w-[380px] z-50 max-h-[min(500px,calc(100dvh-11rem))] h-[80vh] bg-white rounded-3xl border border-border shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col font-inter"
          >
            {/* Header section with custom AI icon badge */}
            <div className="bg-primary text-white px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white/10 flex items-center justify-center">
                  <FiCpu className="text-secondary text-sm" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-secondary block">Revive AI</span>
                  <span className="text-[9px] text-white/50 block">Ask questions or book</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-altbg/20">
              {history.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col max-w-[80%] rounded-2xl p-4 text-xs leading-relaxed",
                    msg.sender === "bot"
                      ? "bg-white text-body border border-border mr-auto rounded-tl-none whitespace-pre-line"
                      : "bg-primary text-white ml-auto rounded-tr-none"
                  )}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Options Selector panel (Switch-case alternatives with custom icons) */}
            <div className="p-5 border-t border-border bg-white flex flex-col gap-2.5">
              {dialogueTree[currentState]?.options.map((option, idx) => {
                // If it is a redirection link
                if (option.href) {
                  return (
                    <Link
                      key={idx}
                      href={option.href}
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-primary/20 bg-primary/5 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all text-center"
                    >
                      <OptionIcon type={option.iconType} />
                      {option.label}
                    </Link>
                  );
                }

                // If it triggers another dialogue tree node
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className="w-full flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-white text-body text-xs font-semibold hover:border-primary hover:bg-primary/5 hover:text-primary transition-all text-left"
                  >
                    <OptionIcon type={option.iconType} />
                    {option.label}
                  </button>
                );
              })}
              
              {/* Reset dialogue option if deep in nesting */}
              {currentState !== "start" && (
                <button
                  onClick={resetChat}
                  className="w-full flex items-center justify-center gap-1 text-center text-[10px] uppercase font-bold tracking-wider text-body/40 hover:text-primary transition-colors mt-2"
                >
                  <FiArrowLeft className="text-[9px]" /> Restart Conversation
                </button>
              )}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
