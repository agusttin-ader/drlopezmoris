"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "up" | "fade" | "soft";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  variant?: Variant;
};

const initialFor: Record<Variant, { opacity: number; y?: number; filter?: string }> = {
  up: { opacity: 0, y: 32 },
  fade: { opacity: 0 },
  soft: { opacity: 0, y: 18, filter: "blur(6px)" },
};

const animateFor: Record<Variant, { opacity: number; y?: number; filter?: string }> = {
  up: { opacity: 1, y: 0 },
  fade: { opacity: 1 },
  soft: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={initialFor[variant]}
      whileInView={animateFor[variant]}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
