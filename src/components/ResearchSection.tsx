import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, FileText, Globe, AlertTriangle } from "lucide-react";

const references = [
  {
    icon: ShieldCheck,
    title: "NIST SP 800-207",
    desc: "Zero Trust Architecture guidelines defining principles, logical components, and deployment models."
  },
  {
    icon: FileText,
    title: "Microsoft Zero Trust Model",
    desc: "Industry implementation guidance focusing on identity, devices, applications, and data protection."
  },
  {
    icon: Globe,
    title: "Google BeyondCorp",
    desc: "Enterprise access model eliminating implicit trust from internal networks."
  },
  {
    icon: AlertTriangle,
    title: "OWASP Top 10",
    desc: "Industry-recognized list of critical web application security risks."
  }
];

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 lg:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono font-medium text-primary tracking-wider uppercase">
            Research & References
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight mb-4">
            Foundations Behind ZeroTrustX
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed mb-12 max-w-2xl mx-auto">
            ZeroTrustX is inspired by established zero trust research, enterprise security models,
            and widely accepted application security standards. This project is conceptual and
            research-driven, built for learning and architectural exploration.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {references.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-card rounded-xl p-6 border border-border text-left card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <r.icon size={18} className="text-primary" />
              </div>

              <h3 className="font-semibold text-sm mb-2">
                {r.title}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResearchSection;