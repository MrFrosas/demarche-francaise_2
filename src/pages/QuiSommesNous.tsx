import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutExpertsSection } from "@/components/about/AboutExpertsSection";
import { AboutMissionSection } from "@/components/about/AboutMissionSection";
import { AboutValuesSection } from "@/components/about/AboutValuesSection";
import { ContactForm } from "@/components/ContactForm";

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <AboutHeroSection />
        <AboutExpertsSection />
        <AboutMissionSection />
        <AboutValuesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default QuiSommesNous;