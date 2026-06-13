import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "success";
}

export default function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
        variant === "default" && "bg-[#1E3A5F]/10 text-[#1E3A5F]",
        variant === "accent" && "bg-[#7A9B8E]/15 text-[#7A9B8E]",
        variant === "success" && "bg-emerald-50 text-emerald-700",
        className
      )}
    >
      {children}
    </span>
  );
}
