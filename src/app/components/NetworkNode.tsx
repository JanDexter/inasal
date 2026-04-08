import { motion } from "motion/react";
import { useState } from "react";

interface NetworkNodeProps {
  title: string;
  description: string;
  tech: string[];
  connections: number[];
  index: number;
}

export function NetworkNode({ title, description, tech, connections, index }: NetworkNodeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="border-2 border-[#334155] hover:border-[#00ffff] transition-colors duration-300 bg-[#1e293b] p-6 relative">
        <div className="absolute -top-2 -left-2 w-4 h-4 border-2 border-[#00ffff] bg-[#0f172a]" />
        <div className="absolute -top-2 -right-2 w-4 h-4 border-2 border-[#00ffff] bg-[#0f172a]" />
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-[#00ffff] bg-[#0f172a]" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-2 border-[#00ffff] bg-[#0f172a]" />

        <div className="font-mono mb-2 text-[#00ffff]">{`[NODE_${index.toString().padStart(2, '0')}]`}</div>
        <h3 className="mb-2">{title}</h3>
        <p className="text-[#94a3b8] mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="font-mono text-xs border border-[#334155] px-2 py-1 text-[#00ffff]"
            >
              {t}
            </span>
          ))}
        </div>

        <motion.div
          className="absolute inset-0 border-2 border-[#00ffff] pointer-events-none"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: isHovered ? 0.3 : 0, scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
}
