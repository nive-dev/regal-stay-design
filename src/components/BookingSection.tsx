import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="booking" className="py-32 bg-card relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-primary/40" />

      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Reserve
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-deep">
            Book Your <span className="italic text-primary">Stay</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border/50"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "phone", label: "Phone Number", type: "tel" },
              { name: "checkin", label: "Check-In Date", type: "date" },
              { name: "checkout", label: "Check-Out Date", type: "date" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <label className="block font-body text-sm text-muted-foreground mb-2 font-medium">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className={`w-full bg-secondary/50 border-2 rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 ${
                    focused === field.name
                      ? "border-primary shadow-[0_0_20px_hsl(270_50%_36%/0.15)]"
                      : "border-border/50"
                  }`}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  placeholder={field.label}
                />
              </div>
            ))}
          </div>
          <div className="mb-8">
            <label className="block font-body text-sm text-muted-foreground mb-2 font-medium">
              Special Requests
            </label>
            <textarea
              rows={3}
              className={`w-full bg-secondary/50 border-2 rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 resize-none ${
                focused === "message"
                  ? "border-primary shadow-[0_0_20px_hsl(270_50%_36%/0.15)]"
                  : "border-border/50"
              }`}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              placeholder="Any special requests..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-body font-semibold text-base tracking-wide animate-pulse-glow hover:scale-[1.02] transition-transform duration-300"
          >
            Confirm Reservation
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
