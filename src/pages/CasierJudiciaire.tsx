import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CasierHeroSection } from "@/components/casier-judiciaire/CasierHeroSection";
import { WhyChooseUsSection } from "@/components/casier-judiciaire/WhyChooseUsSection";
import { TestimonialSection } from "@/components/casier-judiciaire/TestimonialSection";
import { KeyElementsSection } from "@/components/casier-judiciaire/KeyElementsSection";
import { ProcessSection } from "@/components/casier-judiciaire/ProcessSection";
import { StepsSection } from "@/components/casier-judiciaire/StepsSection";
import { ContactForm } from "@/components/ContactForm";
import { SchemaOrg } from "@/components/SchemaOrg";
import { CasierFAQ } from "@/components/casier-judiciaire/CasierFAQ";

const CasierJudiciaire = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main className="min-h-screen bg-white">
        <CasierHeroSection />
        <WhyChooseUsSection />
        <TestimonialSection />
        <KeyElementsSection />
        <ProcessSection />
        <StepsSection />
        <CasierFAQ />
        <ContactForm />
        <SchemaOrg />
      </main>
      <Footer />
    </>
  );
};

export default CasierJudiciaire;