import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";

const cycleWords = [
  "ERP Systems",
  "Academic Networks",
  "Institutional Data",
  "Insider Threats",
];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % cycleWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      
      {/* Background Effects */}
      <ParticleNetwork />
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-mono text-muted-foreground mb-8">
            <Shield size={14} className="text-primary" />
            Conceptual Security Architecture
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            Zero<span className="gradient-text">Trust</span>X
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Applying Zero Trust principles to academic ERP environments
          </p>

          <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-3">
            Exploring micro-segmentation and identity-aware access for{" "}
            <span className="gradient-accent-text font-semibold inline-block min-w-[180px]">
              {cycleWords[wordIndex]}
            </span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-8 mb-16"
        >
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Explore Architecture <ArrowRight size={16} />
          </a>

          <a
            href="#collaborate"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-foreground font-semibold text-sm border border-border hover:bg-muted transition-colors"
          >
            Collaborate With Me
          </a>
        </motion.div>

        {/* Architecture Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-semibold mb-2">
              Identity-Aware Access Model
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Access decisions are based on verified identity, device posture,
              and contextual risk evaluation.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-semibold mb-2">
              Logical Micro-Segmentation Design
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              ERP modules are logically isolated with independent policy
              enforcement zones.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-semibold mb-2">
              Continuous Verification Pipeline
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sessions are continuously evaluated against behavioral anomalies
              and dynamic risk signals.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;