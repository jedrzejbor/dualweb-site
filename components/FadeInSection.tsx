"use client";

import { motion } from "framer-motion";
import type React from "react";

interface FadeInSectionProps
  extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  delay?: number;
}

export function FadeInSection({
  children,
  className,
  delay = 0,
  ...rest
}: FadeInSectionProps) {
  return (
    <motion.section
      {...rest}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
