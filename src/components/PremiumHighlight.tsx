import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PremiumHighlight = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-20 h-20 border border-gold/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 lg:px-12 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-6">
            Our Promise
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
            Your Comfort Is
            <br />
            <span className="text-shimmer italic font-medium">Our Priority</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto">
            Every detail has been thoughtfully curated for an unforgettable stay.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumHighlight;
