import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/titre-sejour/HeroSection";
import { MainContent } from "@/components/titre-sejour/MainContent";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

const TitreSejour = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <MainContent />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default TitreSejour;