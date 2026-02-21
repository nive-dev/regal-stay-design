import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Rooms", "Gallery", "Amenities", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        <a href="#" className="font-heading text-2xl font-bold tracking-wider">
          <span className={scrolled ? "text-primary" : "text-primary-foreground"}>RK</span>{" "}
          <span className={scrolled ? "text-gold" : "text-gold"}>Residency</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`font-body text-sm font-medium transition-colors duration-300 tracking-wide uppercase ${
                scrolled ? "text-foreground/70 hover:text-primary" : "text-primary-foreground/80 hover:text-gold"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#booking"
          className="hidden md:block bg-gold text-gold-foreground px-6 py-2.5 rounded-lg font-body text-sm font-semibold tracking-wide glow-gold-hover transition-all duration-300"
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block font-body text-base text-foreground/80 hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="block bg-gold text-gold-foreground text-center px-6 py-3 rounded-lg font-body font-semibold"
          >
            Book Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
