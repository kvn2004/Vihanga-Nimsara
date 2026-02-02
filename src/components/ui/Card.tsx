import React from "react";
import { cn } from "../../lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

const CARD_ANIMATION = {
  whileHover: { y: -5 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
} as const;

export const Card = React.memo<CardProps>(
  ({ className, children, ...props }) => {
    return (
      <motion.div
        {...CARD_ANIMATION}
        className={cn(
          "bg-surface border border-white/5 rounded-xl overflow-hidden shadow-lg",
          "hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300",
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);
