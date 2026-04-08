import { motion } from "motion/react";

export function ConnectionLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <motion.line
        x1="25%"
        y1="20%"
        x2="50%"
        y2="50%"
        stroke="#00ffff"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.line
        x1="50%"
        y1="50%"
        x2="75%"
        y2="80%"
        stroke="#00ffff"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <motion.line
        x1="25%"
        y1="80%"
        x2="75%"
        y2="20%"
        stroke="#00ffff"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.9 }}
      />
    </svg>
  );
}
