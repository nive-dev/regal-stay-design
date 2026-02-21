import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoomShowcase from "@/components/RoomShowcase";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import PremiumHighlight from "@/components/PremiumHighlight";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RoomShowcase />
      <AmenitiesSection />
      <GallerySection />
      <PremiumHighlight />
      <BookingSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
