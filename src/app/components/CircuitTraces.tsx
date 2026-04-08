import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Trace {
  id: number;
  d: string;
  delay: number;
}

export function CircuitTraces() {
  const [traces] = useState<Trace[]>([
    {
      id: 1,
      d: "M0 100 L300 100 L350 150 L600 150",
      delay: 0,
    },
    {
      id: 2,
      d: "M100 0 L100 200 L150 250 L150 400",
      delay: 0.3,
    },
    {
      id: 3,
      d: "M800 50 L600 50 L550 100 L400 100",
      delay: 0.6,
    },
    {
      id: 4,
      d: "M1200 300 L900 300 L850 350 L700 350",
      delay: 0.9,
    },
    {
      id: 5,
      d: "M1400 150 L1100 150 L1050 200 L900 200",
      delay: 1.2,
    },
  ]);

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      style={{ minHeight: "100%" }}
    >
      {traces.map((trace) => (
        <motion.path
          key={trace.id}
          d={trace.d}
          stroke="#00ffff"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: [0, 1, 0.6],
          }}
          transition={{
            pathLength: { duration: 2, delay: trace.delay, ease: "easeInOut" },
            opacity: { duration: 2, delay: trace.delay },
          }}
        />
      ))}
      {traces.map((trace) => (
        <motion.circle
          key={`node-${trace.id}`}
          cx={trace.d.split(" ")[0].substring(1)}
          cy={trace.d.split(" ")[1]}
          r="4"
          fill="#00ffff"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: trace.delay + 2, duration: 0.3 }}
        />
      ))}
    </svg>
  );
}
