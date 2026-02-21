import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-room.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grain">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-heading text-[12vw] font-bold text-foreground/[0.03] whitespace-nowrap">
          RK Residency
        </span>
      </div>

      {/* Floating lavender shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-primary/[0.07] blur-3xl" />

      {/* Purple overlay tint */}
      <div className="absolute inset-0 bg-purple-overlay pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-card/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src={heroImage}
                alt="Luxury deluxe room at RK Residency"
                className="w-full h-[400px] lg:h-[550px] object-cover animate-slow-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/20 to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
              Welcome to RK Residency
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-deep leading-[1.1] mb-6">
              Experience
              <br />
              <span className="italic font-medium text-primary">Refined</span>
              <br />
              Comfort
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-md mx-auto lg:mx-0">
              Deluxe AC Rooms with 24-Hour Check-In — your serene escape awaits.
            </p>
            <a
              href="#booking"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-body font-semibold text-base tracking-wide glow-hover hover:scale-105 transition-transform duration-300"
            >
              Reserve Your Stay
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-primary animate-scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
