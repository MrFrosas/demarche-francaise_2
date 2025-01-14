import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/renouvellement-titre/HeroSection";
import { ProcessSection } from "@/components/renouvellement-titre/ProcessSection";
import { DocumentsSection } from "@/components/renouvellement-titre/DocumentsSection";
import { FinalSection } from "@/components/renouvellement-titre/FinalSection";
import { RenewalFAQ } from "@/components/renouvellement-titre/RenewalFAQ";
import { ContactForm } from "@/components/ContactForm";

const RenouvellementTitreSejour = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      <main className="flex-grow">
        <HeroSection />
        <ProcessSection />
        <DocumentsSection />
        <FinalSection />
        <RenewalFAQ />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default RenouvellementTitreSejour;