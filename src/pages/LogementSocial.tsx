import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LogementHeroSection } from "@/components/logement-social/LogementHeroSection";
import { LogementIntroSection } from "@/components/logement-social/LogementIntroSection";
import { LogementConditionsSection } from "@/components/logement-social/LogementConditionsSection";
import { LogementAdvantagesSection } from "@/components/logement-social/LogementAdvantagesSection";
import { LogementServicesSection } from "@/components/logement-social/LogementServicesSection";
import { LogementFAQ } from "@/components/logement-social/LogementFAQ";
import { ContactForm } from "@/components/ContactForm";
import { SchemaOrg } from "@/components/SchemaOrg";

const LogementSocial = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-1">
        <LogementHeroSection />
        <LogementIntroSection />
        <LogementConditionsSection />
        <LogementAdvantagesSection />
        <LogementServicesSection />
        <LogementFAQ />
        <ContactForm />
      </main>
      <Footer />
      <SchemaOrg />
    </div>
  );
};

export default LogementSocial;