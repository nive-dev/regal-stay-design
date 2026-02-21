import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);
  const [ripple, setRipple] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
  };

  return (
    <section id="booking" className="py-28 relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-primary-deep">
      <div className="absolute top-10 right-10 w-40 h-40 border border-primary-foreground/5 rounded-full animate-float" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gold/5 rounded-full blur-[60px]" />

      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
            Reserve
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            Book Your <span className="italic text-gold">Stay</span>
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4">
            Book Your Stay at RK Residency Today
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto glass rounded-xl p-8 md:p-12"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "phone", label: "Phone Number", type: "tel" },
              { name: "checkin", label: "Check-In Date", type: "date" },
              { name: "checkout", label: "Check-Out Date", type: "date" },
              { name: "roomtype", label: "Room Type", type: "text" },
              { name: "guests", label: "Number of Guests", type: "number" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <label className="block font-body text-sm text-primary-foreground/80 mb-2 font-medium">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className={`w-full bg-primary-foreground/10 border-2 rounded-lg px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition-all duration-300 ${
                    focused === field.name
                      ? "border-gold shadow-[0_0_20px_hsl(43_65%_52%/0.2)]"
                      : "border-primary-foreground/20"
                  }`}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  placeholder={field.label}
                />
              </div>
            ))}
          </div>
          <div className="mb-8">
            <label className="block font-body text-sm text-primary-foreground/80 mb-2 font-medium">
              Special Requests
            </label>
            <textarea
              rows={3}
              className={`w-full bg-primary-foreground/10 border-2 rounded-lg px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition-all duration-300 resize-none ${
                focused === "message"
                  ? "border-gold shadow-[0_0_20px_hsl(43_65%_52%/0.2)]"
                  : "border-primary-foreground/20"
              }`}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              placeholder="Any special requests..."
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-gold text-gold-foreground py-4 rounded-lg font-body font-semibold text-base tracking-wide animate-pulse-glow hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden ${
              ripple ? "after:absolute after:inset-0 after:bg-primary-foreground/20 after:animate-fade-in after:rounded-lg" : ""
            }`}
          >
            Confirm Reservation
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
