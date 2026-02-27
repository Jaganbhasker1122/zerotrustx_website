const keywords = [
  "ZERO TRUST",
  "MICRO-SEGMENTATION",
  "IDENTITY-AWARE",
  "LEAST PRIVILEGE",
  "CONTINUOUS VERIFICATION",
  "POLICY ENGINE",
  "THREAT MODELING",
  "ERP SECURITY",
  "ACCESS CONTROL",
  "NETWORK ISOLATION",
];

const MarqueeStrip = () => {
  const items = [...keywords, ...keywords];

  return (
    <div className="marquee-strip py-4 overflow-hidden select-none relative">
      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 z-10" style={{ background: "linear-gradient(to right, hsl(var(--dark)), transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10" style={{ background: "linear-gradient(to left, hsl(var(--dark)), transparent)" }} />
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((word, i) => (
          <span
            key={i}
            className="mx-6 text-xs font-mono font-medium tracking-widest opacity-50"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
