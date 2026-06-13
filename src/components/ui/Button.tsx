"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E3A5F] disabled:opacity-50 disabled:cursor-not-allowed",
          variant === "primary" &&
            "bg-[#1E3A5F] text-white hover:bg-[#152c4a] shadow-sm hover:shadow-md",
          variant === "secondary" &&
            "bg-[#7A9B8E] text-white hover:bg-[#6a8a7d] shadow-sm hover:shadow-md",
          variant === "ghost" &&
            "bg-transparent text-[#1E3A5F] hover:bg-[#1E3A5F]/5",
          variant === "outline" &&
            "border border-[#1E3A5F]/20 text-[#1E3A5F] hover:bg-[#1E3A5F]/5 bg-transparent",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
