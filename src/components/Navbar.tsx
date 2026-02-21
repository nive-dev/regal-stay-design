import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = ["About", "Rooms", "Amenities", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-card/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        <a href="#" className="font-heading text-2xl font-bold text-primary-deep tracking-wider">
          RK <span className="text-primary">Residency</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#booking"
          className="hidden md:block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-body text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
        >
          Book Now
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
