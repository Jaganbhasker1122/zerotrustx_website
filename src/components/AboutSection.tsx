import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Target, BookOpen } from "lucide-react";

const strengths = [
  { icon: Brain, title: "Architecture Thinking", desc: "Designing systems from a security-first perspective, mapping trust boundaries before writing code." },
  { icon: Target, title: "Threat Modeling", desc: "Identifying attack surfaces and building layered defenses using structured frameworks like STRIDE." },
  { icon: BookOpen, title: "ERP Security Interest", desc: "Deep curiosity about how enterprise resource planning systems can be hardened for educational contexts." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono font-medium text-primary tracking-wider uppercase">About</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight mb-4">
            Built by a cybersecurity <span className="gradient-text">student</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-12">
           I'm a cybersecurity student passionate about secure system design and threat modeling. ZeroTrustX represents my exploration into applying Zero Trust principles to real-world academic ERP environments. I’m currently seeking internships and mentorship opportunities in cybersecurity architecture and application security.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="card-hover bg-card rounded-xl p-6 border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <s.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
