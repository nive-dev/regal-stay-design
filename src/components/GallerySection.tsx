import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Eye, X } from "lucide-react";

import roomBedroom from "@/assets/room-bedroom.jpg";
import roomBathroom from "@/assets/room-bathroom.jpg";
import roomSeating from "@/assets/room-seating.jpg";
import roomWindow from "@/assets/room-window.jpg";
import hotelExterior from "@/assets/hotel-exterior.jpg";
import hotelReception from "@/assets/hotel-reception.jpg";

const images = [
  { src: roomBedroom, label: "Deluxe Bedroom", span: "md:col-span-2 md:row-span-2" },
  { src: roomBathroom, label: "Luxury Bathroom", span: "" },
  { src: hotelReception, label: "Grand Reception", span: "" },
  { src: roomSeating, label: "Lounge Area", span: "md:col-span-2" },
  { src: roomWindow, label: "City View", span: "" },
  { src: hotelExterior, label: "Hotel Exterior", span: "" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
              Gallery
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Explore <span className="text-shimmer">Our Spaces</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${img.span}`}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full min-h-[200px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-deep/0 group-hover:bg-primary-deep/60 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <Eye className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                    <p className="font-body text-sm text-primary-foreground font-medium">{img.label}</p>
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
          className="fixed inset-0 z-[100] bg-primary-deep/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center">
            <X className="w-5 h-5 text-primary-foreground" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].label}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
          />
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
