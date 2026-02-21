import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BedDouble, Wind, Clock, DoorOpen } from "lucide-react";

const features = [
  { icon: DoorOpen, label: "12 Premium Rooms", value: 12 },
  { icon: BedDouble, label: "Queen Size Beds", value: 12 },
  { icon: Wind, label: "Fully Air Conditioned", value: 100, suffix: "%" },
  { icon: Clock, label: "24/7 Check-In", value: 24, suffix: "H" },
];

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

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gold/60" />

      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
            About Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Retreat of <span className="text-gradient-purple italic">Elegance</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Nestled in comfort, RK Residency offers a premium stay experience with
            thoughtfully designed rooms, modern amenities, and round-the-clock service.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="font-heading text-3xl font-bold text-primary mb-1">
                <Counter target={item.value} suffix={item.suffix} />
              </p>
              <p className="font-body text-muted-foreground font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
