import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 100,
  className,
  delay = 0,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

 useEffect(() => {
  if (!started) return;

  const interval = setInterval(() => {
    setDisplayedText((prev) => {
      // Use prev.length to find the next character index
      if (prev.length >= text.length) {
        clearInterval(interval);
        return prev;
      }
      return prev + text.charAt(prev.length);
    });
  }, speed);

  return () => clearInterval(interval);
}, [text, speed, started]);

  return (
    <motion.span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
      />
    </motion.span>
  );
};
