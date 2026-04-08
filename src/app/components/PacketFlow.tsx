import { motion } from "motion/react";

interface PacketFlowProps {
  skill: string;
  level: number;
}

export function PacketFlow({ skill, level }: PacketFlowProps) {
  const packets = Array.from({ length: Math.ceil(level / 20) }, (_, i) => i);

  return (
    <div className="flex items-center gap-4 py-4 border-b border-[#334155] last:border-b-0">
      <div className="font-mono text-[#00ffff] w-48">{skill}</div>

      <div className="flex-1 relative h-8">
        <div className="absolute inset-0 border border-[#334155] bg-[#1e293b]" />
        <motion.div
          className="absolute inset-0 bg-[#00ffff] opacity-20"
          initial={{ width: "0%" }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <div className="absolute inset-0 flex items-center gap-2 px-2 overflow-hidden">
          {packets.map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 border-2 border-[#00ffff] bg-[#0f172a] flex-shrink-0"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="font-mono text-[#64748b] w-16 text-right">{level}%</div>
    </div>
  );
}
