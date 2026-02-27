import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldAlert,
  Lock,
  Users,
  Network,
  Eye,
  AlertTriangle,
} from "lucide-react";
import TiltCard from "./TiltCard";

const problems = [
  { icon: ShieldAlert, title: "Flat Network Trust", desc: "Legacy campus networks treat all internal traffic as trusted — a single breach compromises everything." },
  { icon: Lock, title: "Weak Access Boundaries", desc: "Role-based access in ERP systems often grants excessive privileges with no context awareness." },
  { icon: Users, title: "Insider Threat Blind Spots", desc: "Monitoring rarely distinguishes between normal and anomalous behavior from authenticated users." },
  { icon: Network, title: "No Micro-Segmentation", desc: "Academic ERPs lack logical isolation between modules like finance, records, and admissions." },
  { icon: Eye, title: "Limited Visibility", desc: "Audit trails are incomplete, making incident response and forensic analysis extremely difficult." },
  { icon: AlertTriangle, title: "Compliance Gaps", desc: "Institutions struggle to meet data protection standards without a zero trust posture." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 } as const,
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-24 lg:py-32 section-surface" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono font-medium text-primary tracking-wider uppercase">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
              Academic ERPs are <span className="gradient-text">often rely on implicit internal trust</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground text-base leading-relaxed self-end"
          >
            Traditional perimeter-based security models were never designed for modern academic institutions. ERP systems hold the most sensitive data — student records, financial transactions, research — yet rely on implicit trust.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {problems.map((p, i) => (
            <motion.div key={i} variants={itemVariants}>
              <TiltCard className="card-hover gradient-border-top bg-card rounded-xl p-6 border border-border h-full">
                <span className="font-mono text-xs text-muted-foreground/50">0{i + 1}</span>
                <p.icon size={22} className="text-primary mt-3 mb-3" />
                <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
