import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const subtitleText = "Premium Deluxe AC Rooms | 24 Hours Check-in | Queen Bed Comfort";

const Particle = ({ delay, left }: { delay: number; left: number }) => (
  <div
    className="absolute w-1 h-1 rounded-full bg-primary-foreground/30 animate-particle"
    style={{ left: `${left}%`, bottom: 0, animationDelay: `${delay}s` }}
  />
);

const HeroSection = () => {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const particles = useMemo(
    () => Array.from({ length: 20 }, (_, i) => ({ delay: i * 0.4, left: Math.random() * 100 })),
    []
  );

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(subtitleText.slice(0, i + 1));
      i++;
      if (i >= subtitleText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/80 via-primary/60 to-primary-deep/90" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <Particle key={i} delay={p.delay} left={p.left} />
        ))}
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-primary-foreground/10 animate-float" />
      <div className="absolute bottom-32 left-16 w-40 h-40 rounded-full border border-primary-foreground/5 animate-float-slow" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-sm uppercase tracking-[0.4em] text-gold mb-6"
        >
          ★ Premium Luxury Hotel ★
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] mb-4"
        >
          Welcome to
          <br />
          <span className="text-shimmer">RK Residency</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-body text-lg md:text-xl text-primary-foreground/80 mb-12 h-8"
        >
          {typed}
          <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#booking"
            className="bg-gold text-gold-foreground px-10 py-4 rounded-lg font-body font-semibold text-base tracking-wide animate-pulse-glow hover:scale-105 transition-transform duration-300"
          >
            Book Now
          </a>
          <a
            href="#rooms"
            className="border-2 border-primary-foreground/40 text-primary-foreground px-10 py-4 rounded-lg font-body font-semibold text-base tracking-wide hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300"
          >
            Explore Rooms
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-gold animate-scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
