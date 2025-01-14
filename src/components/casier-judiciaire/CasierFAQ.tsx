import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "Puis-je effacer mon casier judiciaire ?",
    answer: "La possibilité d'effacer une condamnation de votre casier judiciaire dépend principalement de la nature de l'infraction. Les condamnations pour des délits mineurs, certaines contraventions, et dans des cas spécifiques, des peines plus lourdes, peuvent être sujettes à effacement sous conditions."
  },
  {
    question: "La nature de mes condamnations permet-elle un effacement ?",
    answer: "La possibilité d'effacer une condamnation de votre casier judiciaire dépend principalement de la nature de l'infraction. Les condamnations pour des délits mineurs, certaines contraventions, et dans des cas spécifiques, des peines plus lourdes, peuvent être sujettes à effacement sous conditions."
  }
];

export const CasierFAQ = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-[#F5F5FE]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600">
              Trouvez rapidement des réponses à vos questions sur le casier judiciaire
            </p>
          </div>

          <Accordion type="single" collapsible className="bg-white rounded-lg p-6 shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Button 
              className="bg-[#000091] hover:bg-[#000091]/90"
              onClick={() => navigate("/centre-aide")}
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Accéder au centre d'aide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};