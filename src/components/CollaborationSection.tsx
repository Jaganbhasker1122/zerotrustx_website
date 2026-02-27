import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Code2, Shield, GraduationCap, Check, Info } from "lucide-react";
import TiltCard from "./TiltCard";

const personas = [
  { icon: Server, title: "IT Admins", desc: "Who manage campus networks and can validate security assumptions." },
  { icon: Code2, title: "ERP Developers", desc: "Who understand ERP architecture and can evaluate segmentation feasibility." },
  { icon: Shield, title: "Security Professionals", desc: "Who can review threat models and share real-world insights." },
  { icon: GraduationCap, title: "Mentors", desc: "Who can guide this project toward academic or professional rigor." },
];

const contributions = [
  "A structured Zero Trust architecture proposal tailored for academic ERPs",
  "Documented threat models and attack surface analysis",
  "Open architecture diagrams and decision rationale",
  "Willingness to learn, iterate, and collaborate openly",
];

const clarifications = [
  "This is a student-led exploratory project, not production software",
  "The framework is conceptual — no guarantees of completeness",
  "Feedback and critique are actively encouraged",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 } as const,
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const CollaborationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collaborate" className="py-24 lg:py-32 section-surface" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-medium text-primary tracking-wider uppercase">Collaborate</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
           Looking for <span className="gradient-text">technical feedback and validation from</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {personas.map((p, i) => (
            <motion.div key={i} variants={itemVariants}>
              <TiltCard className="card-hover bg-card rounded-xl p-6 border border-border text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <p.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
              <Check size={16} className="text-primary" /> What I Contribute
            </h3>
            <ul className="space-y-2">
              {contributions.map((c, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
              <Info size={16} className="text-accent" /> What I'm Clear About
            </h3>
            <ul className="space-y-2">
              {clarifications.map((c, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
