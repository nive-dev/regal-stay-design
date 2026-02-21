import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wind, Wifi, Car, Clock, BedDouble, Users } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free WiFi", desc: "High-speed internet" },
  { icon: Car, label: "Car Parking", desc: "Secure parking facility" },
  { icon: Wind, label: "AC Deluxe Rooms", desc: "Climate-controlled comfort" },
  { icon: Clock, label: "24/7 Check-In", desc: "Flexible arrivals" },
  { icon: BedDouble, label: "Queen Beds", desc: "Spacious & luxurious" },
  { icon: Users, label: "Family Friendly", desc: "Welcoming for all" },
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-primary-deep">
      {/* Floating shapes */}
      <div className="absolute top-10 right-10 w-40 h-40 border border-primary-foreground/10 rounded-full animate-float" />
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-primary-foreground/5 rounded-full animate-float-slow" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-foreground/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            Premium <span className="italic text-gold">Amenities</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {amenities.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass rounded-xl p-8 text-center group hover:bg-primary-foreground/20 transition-all duration-500 hover:scale-105"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary-foreground/10 flex items-center justify-center animate-float-slow" style={{ animationDelay: `${i * 0.5}s` }}>
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-1">
                {item.label}
              </h3>
              <p className="font-body text-sm text-primary-foreground/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
