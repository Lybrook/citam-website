"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  return (
    <motion.span initial={{ opacity: 1 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      {value}{suffix}
    </motion.span>
  );
}
