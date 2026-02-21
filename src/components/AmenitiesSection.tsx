import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wind, Wifi, Car, Clock, BedDouble, Sparkles } from "lucide-react";

const amenities = [
  { icon: Wind, label: "Air Conditioning", desc: "Climate-controlled comfort" },
  { icon: Wifi, label: "Free WiFi", desc: "High-speed internet" },
  { icon: Car, label: "Car Parking", desc: "Secure parking facility" },
  { icon: Clock, label: "24/7 Check-In", desc: "Flexible arrivals" },
  { icon: BedDouble, label: "Queen Size Bed", desc: "Spacious & luxurious" },
  { icon: Sparkles, label: "Clean Rooms", desc: "Impeccably maintained" },
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-deep">
            Premium <span className="italic text-primary">Amenities</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {amenities.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-card rounded-xl p-8 text-center group hover:shadow-lg transition-all duration-500 glow-hover"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300 group-hover:animate-bounce-subtle">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary-deep mb-1">
                {item.label}
              </h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
