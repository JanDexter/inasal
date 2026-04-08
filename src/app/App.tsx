import { motion } from "motion/react";
import { CircuitTraces } from "./components/CircuitTraces";
import { NetworkNode } from "./components/NetworkNode";
import { PacketFlow } from "./components/PacketFlow";
import { ConnectionLines } from "./components/ConnectionLines";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function App() {
  const projects = [
    {
      title: "Enterprise Firewall Solution",
      description: "Built custom firewall rules engine handling 10M+ packets/sec with zero-day threat detection",
      tech: ["iptables", "Snort", "Python", "C"],
      connections: [1, 2],
    },
    {
      title: "Network Monitoring Platform",
      description: "Real-time traffic analysis dashboard with ML-powered anomaly detection",
      tech: ["Wireshark", "ELK", "Go", "React"],
      connections: [0, 2, 3],
    },
    {
      title: "Penetration Testing Framework",
      description: "Automated security assessment toolkit for enterprise networks",
      tech: ["Metasploit", "Nmap", "Bash", "Ruby"],
      connections: [1, 3],
    },
    {
      title: "Zero Trust Architecture",
      description: "Implemented microsegmentation and identity-based access control system",
      tech: ["Kubernetes", "Istio", "Vault", "Terraform"],
      connections: [1, 2],
    },
  ];

  const skills = [
    { skill: "Network Security", level: 95 },
    { skill: "Penetration Testing", level: 90 },
    { skill: "Incident Response", level: 85 },
    { skill: "Cloud Security", level: 80 },
    { skill: "Threat Intelligence", level: 85 },
    { skill: "Security Automation", level: 90 },
  ];

  const socials = [
    { icon: Github, label: "GitHub", prefix: "git://", url: "#" },
    { icon: Linkedin, label: "LinkedIn", prefix: "https://", url: "#" },
    { icon: Terminal, label: "Blog", prefix: "ssh://", url: "#" },
    { icon: Mail, label: "Email", prefix: "smtp://", url: "mailto:" },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0] relative overflow-hidden">
      <CircuitTraces />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#334155] bg-[#0f172a]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-mono text-[#00ffff]">{"<YourName />"}</div>
          <div className="flex gap-8">
            <a href="#work" className="hover:text-[#00ffff] transition-colors">Work</a>
            <a href="#skills" className="hover:text-[#00ffff] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[#00ffff] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="max-w-4xl text-center z-10">
          <motion.div
            className="font-mono text-[#00ffff] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            $ whoami
          </motion.div>

          <motion.h1
            className="mb-6"
            style={{ fontSize: "4rem", fontWeight: 700, lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your Name Here
          </motion.h1>

          <motion.div
            className="text-xl text-[#94a3b8] mb-8 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Network & Security Engineer
          </motion.div>

          <motion.p
            className="text-[#cbd5e1] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Designing resilient networks and hardening systems against evolving threats. Specializing in zero-trust architectures, penetration testing, and security automation.
          </motion.p>
        </div>
      </section>

      <section id="work" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[#00ffff] mb-2">{"// PROJECTS"}</div>
            <h2 style={{ fontSize: "3rem", fontWeight: 700 }}>Network Topology</h2>
          </motion.div>

          <div className="relative">
            <ConnectionLines />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {projects.map((project, index) => (
                <NetworkNode key={index} {...project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-6 bg-[#1e293b]/30 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[#00ffff] mb-2">{"// CAPABILITIES"}</div>
            <h2 style={{ fontSize: "3rem", fontWeight: 700 }}>Packet Analysis</h2>
          </motion.div>

          <div className="border border-[#334155] bg-[#0f172a]/50 p-8">
            {skills.map((skill, index) => (
              <PacketFlow key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[#00ffff] mb-2">{"// CONNECT"}</div>
            <h2 className="mb-16" style={{ fontSize: "3rem", fontWeight: 700 }}>
              Protocol Endpoints
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="border-2 border-[#334155] hover:border-[#00ffff] bg-[#1e293b] p-6 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <social.icon className="w-8 h-8 mx-auto mb-4 text-[#00ffff]" />
                <div className="font-mono text-sm text-[#64748b] mb-2">{social.prefix}</div>
                <div className="group-hover:text-[#00ffff] transition-colors">{social.label}</div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="mt-16 font-mono text-[#64748b]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            $ uptime: Always online | ping: &lt;1ms
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#334155] py-8 px-6 text-center">
        <div className="font-mono text-[#64748b]">
          © 2026 Your Name Here. Built with React + Motion + Tailwind.
        </div>
      </footer>
    </div>
  );
}