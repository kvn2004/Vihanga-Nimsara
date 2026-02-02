import React from "react";
import { cn } from "../../lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const BUTTON_VARIANTS = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
  secondary:
    "bg-surface text-gray-100 hover:bg-surface/80 border border-white/10",
  outline: "border border-primary text-primary hover:bg-primary/10",
  ghost: "hover:bg-white/5 text-gray-300 hover:text-white",
} as const;

const BUTTON_SIZES = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
} as const;

const ANIMATION_CONFIG = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
} as const;

export const Button = React.memo<ButtonProps>(
  ({
    className,
    variant = "primary",
    size = "md",
    children,
    disabled,
    ...props
  }) => {
    return (
      <motion.button
        {...ANIMATION_CONFIG}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          BUTTON_VARIANTS[variant],
          BUTTON_SIZES[size],
          className,
        )}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
