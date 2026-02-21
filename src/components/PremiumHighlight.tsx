import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const PremiumHighlight = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-primary-deep relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-20 h-20 border border-primary-foreground/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-deep-foreground leading-tight mb-8">
            Your Comfort Is
            <br />
            <span className="italic font-medium opacity-80">Our Priority</span>
          </h2>
          <p className="font-body text-primary-deep-foreground/70 text-lg max-w-lg mx-auto mb-16">
            Every detail has been thoughtfully curated for an unforgettable stay.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-16"
        >
          <div className="text-center">
            <p className="font-heading text-5xl md:text-6xl font-bold text-primary-deep-foreground">
              <Counter target={12} />
            </p>
            <p className="font-body text-primary-deep-foreground/60 mt-2 uppercase text-sm tracking-wider">
              Deluxe Rooms
            </p>
          </div>
          <div className="text-center">
            <p className="font-heading text-5xl md:text-6xl font-bold text-primary-deep-foreground">
              <Counter target={24} suffix="H" />
            </p>
            <p className="font-body text-primary-deep-foreground/60 mt-2 uppercase text-sm tracking-wider">
              Check-In
            </p>
          </div>
          <div className="text-center">
            <p className="font-heading text-5xl md:text-6xl font-bold text-primary-deep-foreground">
              <Counter target={100} suffix="%" />
            </p>
            <p className="font-body text-primary-deep-foreground/60 mt-2 uppercase text-sm tracking-wider">
              Satisfaction
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumHighlight;
