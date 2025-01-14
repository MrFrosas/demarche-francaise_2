import { FAQSection } from "./sections/FAQSection";
import { IntroSection } from "./sections/IntroSection";
import { LearnMoreSection } from "./sections/LearnMoreSection";
import { ProcessSection } from "./sections/ProcessSection";
import { FamilyPermitSection } from "./sections/FamilyPermitSection";
import { AboutSection } from "./sections/AboutSection";

export const MainContent = () => {
  return (
    <div className="bg-france-white">
      <IntroSection />
      <LearnMoreSection />
      <AboutSection />
      <FamilyPermitSection />
      <ProcessSection />
      <FAQSection />
    </div>
  );
};