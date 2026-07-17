"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LuxuryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "text";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function LuxuryButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled = false,
}: LuxuryButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-inter text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-500 overflow-hidden relative group disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-[#7C131F] text-white border border-[#7C131F] px-8 py-4 hover:bg-black hover:border-black hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-500",
    secondary: "bg-secondary text-primary border border-secondary px-8 py-3.5 hover:bg-black hover:text-white hover:border-black hover:shadow-md hover:scale-[1.02]",
    outline: "bg-transparent text-primary border border-primary/20 px-8 py-3.5 hover:bg-black hover:text-white hover:border-black hover:scale-[1.02]",
    text: "bg-transparent text-primary px-0 py-2 border-b border-transparent hover:border-primary rounded-none hover:text-accent1",
  };

  const content = (
    <>
      {/* Light sweep hover animation on non-text variants */}
      {variant !== "text" && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], className)}
    >
      {content}
    </button>
  );
}
