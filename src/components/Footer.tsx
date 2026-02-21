import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary-deep py-20 relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary-deep-foreground/10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary-deep-foreground mb-4">
              RK <span className="opacity-70">Residency</span>
            </h3>
            <p className="font-body text-primary-deep-foreground/60 leading-relaxed">
              A luxury boutique experience with 12 premium deluxe rooms designed for your
              comfort and peace.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm uppercase tracking-[0.2em] text-primary-deep-foreground/80 mb-6 font-semibold">
              Quick Links
            </h4>
            <div className="space-y-3">
              {["About", "Rooms", "Amenities", "Book Now"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="block font-body text-primary-deep-foreground/60 hover:text-primary-deep-foreground transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body text-sm uppercase tracking-[0.2em] text-primary-deep-foreground/80 mb-6 font-semibold">
              Contact
            </h4>
            <div className="space-y-4">
              <a href="tel:+910000000000" className="flex items-center gap-3 font-body text-primary-deep-foreground/60 hover:text-primary-deep-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +91 000 000 0000
              </a>
              <a href="mailto:info@rkresidency.com" className="flex items-center gap-3 font-body text-primary-deep-foreground/60 hover:text-primary-deep-foreground transition-colors">
                <Mail className="w-4 h-4" />
                info@rkresidency.com
              </a>
              <div className="flex items-start gap-3 font-body text-primary-deep-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                RK Residency, Main Road
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-primary-deep-foreground/10 mb-8" />

        <p className="text-center font-body text-sm text-primary-deep-foreground/40">
          © 2026 RK Residency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
