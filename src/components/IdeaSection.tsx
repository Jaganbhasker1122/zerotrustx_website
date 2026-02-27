import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Fingerprint, Layers, ShieldCheck, Activity, Database } from "lucide-react";

const features = [
  { icon: Fingerprint, title: "Identity-First Access", desc: "Every request is authenticated and authorized based on user identity, device posture, and context.", progress: 92 },
  { icon: Layers, title: "Logical Micro-Segmentation", desc: "ERP modules are isolated into segments — finance, records, HR — each with independent access policies.", progress: 85 },
  { icon: ShieldCheck, title: "Continuous Verification", desc: "Trust is never assumed. Sessions are continuously evaluated against dynamic risk signals.", progress: 78 },
  { icon: Activity, title: "Behavioral Analytics", desc: "Anomalous user behavior triggers step-up authentication or automatic session termination.", progress: 70 },
  { icon: Database, title: "Policy-Driven Governance", desc: "Access decisions are made by a centralized policy engine, not scattered ACL configurations.", progress: 88 },
];

const erpModules = ["Student Records", "Finance", "HR & Payroll", "Admissions", "Research", "Library", "Exams"];

const ProgressBar = ({ value, inView }: { value: number; inView: boolean }) => (
  <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden mt-2">
    <motion.div
      className="h-full rounded-full"
      style={{ background: "var(--gradient-primary)" }}
      initial={{ width: 0 }}
      animate={inView ? { width: `${value}%` } : { width: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    />
  </div>
);

const IdeaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="idea" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Sticky intro */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono font-medium text-primary tracking-wider uppercase">The Idea</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight mb-4">
                A <span className="gradient-text">conceptual zero trust blueprint</span> for campus ERP environments
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                This concept applies zero trust principles — never trust, always verify — to the unique architecture of academic ERP platforms. Each module becomes a micro-perimeter.
              </p>
            </motion.div>

            {/* ERP Module Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 sm:grid-cols-4 gap-2"
            >
              {erpModules.map((mod) => (
                <div
                  key={mod}
                  className="text-center text-xs font-mono py-3 px-2 rounded-lg bg-secondary border border-border hover:border-primary/30 hover:scale-105 transition-all cursor-default"
                >
                  {mod}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Feature list */}
          <div className="space-y-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex gap-4 items-start"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                  <f.icon size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  <ProgressBar value={f.progress} inView={isInView} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;
