import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import roomImage from "@/assets/room-2.jpg";

const RoomShowcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rooms" className="py-32 relative bg-grain">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Our Rooms
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-deep">
            Deluxe <span className="italic text-primary">Collection</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-xl overflow-hidden shadow-xl group border border-transparent hover:border-primary/30 transition-all duration-500">
            <div className="relative overflow-hidden">
              <img
                src={roomImage}
                alt="Deluxe AC Room with Queen Bed"
                className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-lg font-body text-sm font-medium backdrop-blur-sm">
                  Deluxe AC Room
                </span>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="font-heading text-2xl font-bold text-primary-deep mb-3">
                Premium Deluxe Room
              </h3>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                Spacious air-conditioned rooms featuring queen-size beds, modern furnishings,
                and thoughtful amenities designed for your comfort and relaxation.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Queen Bed", "AC", "Free WiFi", "En-suite"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-accent-foreground px-4 py-1.5 rounded-lg font-body text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#booking"
                className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold tracking-wide glow-hover hover:scale-105 transition-transform duration-300"
              >
                View Details
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomShowcase;
