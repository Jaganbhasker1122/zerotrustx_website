import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "var(--gradient-primary)",
      }}
    />
  );
};

export default ScrollProgress;
