import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ContactSection } from "@/components/ContactSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { GuideSection } from "@/components/GuideSection";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { IntroSection } from "@/components/IntroSection";
import { FAQSection } from "@/components/FAQSection";
import NewsSection from "@/components/NewsSection";
import { SchemaOrg } from "@/components/SchemaOrg";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SchemaOrg />
      <Header />
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <IntroSection />
        <ValuePropositionSection />
        <ServicesSection />
        <ProcessSection />
        <FeaturesSection />
        <TestimonialSection />
        <GoogleReviewsSection />
        <NewsSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;