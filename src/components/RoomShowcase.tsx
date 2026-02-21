import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Wind, Wifi, Car, Clock, BedDouble, Users, Flame, ArrowUpRight } from "lucide-react";

import roomBedroom from "@/assets/room-bedroom.jpg";
import roomBathroom from "@/assets/room-bathroom.jpg";
import roomSeating from "@/assets/room-seating.jpg";
import roomWindow from "@/assets/room-window.jpg";
import hotelExterior from "@/assets/hotel-exterior.jpg";

const roomImages = [
  { src: roomBedroom, label: "Bedroom" },
  { src: roomBathroom, label: "Bathroom" },
  { src: roomSeating, label: "Seating Area" },
  { src: roomWindow, label: "Window View" },
  { src: hotelExterior, label: "Exterior" },
];

const amenities = [
  { icon: Wind, label: "AC Room" },
  { icon: BedDouble, label: "Queen Bed" },
  { icon: Users, label: "4 Members" },
  { icon: Wifi, label: "WiFi" },
  { icon: Car, label: "Parking" },
  { icon: Flame, label: "Heater" },
  { icon: ArrowUpRight, label: "Ventilation" },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % roomImages.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + roomImages.length) % roomImages.length), []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="relative overflow-hidden rounded-t-xl group/slider">
      <div className="relative h-[280px] md:h-[340px]">
        {roomImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.label}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 to-transparent" />
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-primary-foreground/20"
      >
        <ChevronLeft className="w-5 h-5 text-primary-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-primary-foreground/20"
      >
        <ChevronRight className="w-5 h-5 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {roomImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-6" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Label */}
      <div className="absolute top-4 left-4">
        <span className="bg-gold text-gold-foreground px-3 py-1 rounded-md font-body text-xs font-semibold uppercase tracking-wider">
          Deluxe AC
        </span>
      </div>
    </div>
  );
};

const RoomCard = ({ index }: { index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card rounded-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-border-glow border-2"
    >
      <ImageSlider />

      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-foreground mb-2">
          Premium Deluxe Room
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4">
          Spacious air-conditioned room with queen-size bed, modern furnishings, and premium amenities.
        </p>

        {/* Amenity icons */}
        <div className="flex flex-wrap gap-3 mb-5">
          {amenities.map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-1.5 text-muted-foreground group/icon"
              title={a.label}
            >
              <a.icon className="w-4 h-4 text-primary group-hover/icon:animate-bounce-subtle" />
              <span className="font-body text-xs">{a.label}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href="#booking"
            className="flex-1 bg-gold text-gold-foreground text-center py-2.5 rounded-lg font-body font-semibold text-sm glow-gold-hover hover:scale-[1.02] transition-transform duration-300"
          >
            Book Now
          </a>
          <button className="flex-1 border-2 border-primary/30 text-primary py-2.5 rounded-lg font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const RoomShowcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rooms" className="py-28 bg-secondary relative bg-grain">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
            Our Rooms
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Deluxe <span className="text-shimmer">Collection</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            12 premium rooms designed for your ultimate comfort and relaxation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[0, 1, 2].map((i) => (
            <RoomCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;
