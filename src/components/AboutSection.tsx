import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BedDouble, Wind, Clock, DoorOpen } from "lucide-react";

const features = [
  { icon: DoorOpen, label: "12 Premium Deluxe Rooms" },
  { icon: BedDouble, label: "Queen Size Bed" },
  { icon: Wind, label: "Fully Air Conditioned" },
  { icon: Clock, label: "24/7 Flexible Check-In" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-card relative overflow-hidden">
      {/* Thin purple divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-primary/40" />

      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            About Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-deep mb-6">
            A Retreat of <span className="italic text-primary">Elegance</span>
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
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-heading text-lg font-semibold text-primary-deep">
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
