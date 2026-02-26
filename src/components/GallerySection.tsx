import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import room4 from "@/assets/room-4.jpg";
import room5 from "@/assets/room-5.jpg";
import room6 from "@/assets/room-6.jpg";
import room7 from "@/assets/room-7.jpg";
import room8 from "@/assets/room-8.jpg";

const rooms = [
  { src: room1, alt: "Deluxe Room - Queen bed with floral bedding" },
  { src: room2, alt: "Deluxe Room - Spacious queen bed with wooden frame" },
  { src: room3, alt: "Deluxe Room - AC equipped room with queen bed" },
  { src: room4, alt: "Deluxe Room - Bright room with window view" },
  { src: room5, alt: "Deluxe Room - Cozy turquoise room with shelving" },
  { src: room6, alt: "Deluxe Room - Green room with natural light" },
  { src: room7, alt: "Deluxe Room - Turquoise room with wooden furniture" },
  { src: room8, alt: "Deluxe Room - AC room with colorful bedding" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + rooms.length) % rooms.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % rooms.length : null));

  return (
    <>
      <section id="gallery" className="py-32 relative bg-grain">
        <div className="container mx-auto px-6 lg:px-12" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Our Spaces
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-deep">
              Room <span className="italic text-primary">Gallery</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer overflow-hidden rounded-xl border border-transparent hover:border-primary/30 transition-all duration-500"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={room.src}
                    alt={room.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary-deep/0 group-hover:bg-primary-deep/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-body text-sm font-medium backdrop-blur-sm">
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-primary-deep/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={rooms[lightbox].src}
            alt={rooms[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/70 font-body text-sm">
            {lightbox + 1} / {rooms.length}
          </p>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
