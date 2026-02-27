import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Fingerprint, Settings, Database, Activity } from "lucide-react";

const nodes = [
  { icon: User, label: "User Request", desc: "Incoming access attempt" },
  { icon: Fingerprint, label: "Identity Validation", desc: "MFA & device posture" },
  { icon: Settings, label: "Policy Engine", desc: "Context-aware decisions" },
  { icon: Database, label: "Segmented Module", desc: "Isolated ERP zone" },
  { icon: Activity, label: "Monitoring Layer", desc: "Continuous telemetry" },
];

const ArchitectureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="py-24 lg:py-32 section-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-medium text-primary tracking-wider uppercase">Architecture</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Conceptual <span className="gradient-text">trust pipeline</span>
          </h2>
          <p className="text-sm text-dark-foreground/60 mt-3 max-w-md mx-auto">
            A five-stage flow modeling how each request is evaluated — from initiation to continuous monitoring.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {nodes.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="flex items-center"
            >
              <div className="relative flex flex-col items-center text-center w-36">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 animate-pulse">
                  <n.icon size={24} className="text-primary" />
                </div>
                <h4 className="text-xs font-semibold mb-0.5">{n.label}</h4>
                <p className="text-[10px] text-dark-foreground/50">{n.desc}</p>
              </div>
              {i < nodes.length - 1 && (
                <div className="hidden md:block w-8 h-px bg-primary/30 mx-1" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-[11px] font-mono text-dark-foreground/40 mt-12"
        >
          ⚠ This is a research-driven conceptual architecture. It has not been deployed, audited, or production-tested.
        </motion.p>
      </div>
    </section>
  );
};

export default ArchitectureSection;
