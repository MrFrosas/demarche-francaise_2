import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const renewalFaqs = [
  {
    question: "Que signifie le renouvellement d'un titre de séjour en France ?",
    answer: "Le renouvellement d'un titre de séjour est le processus par lequel un résident étranger prolonge son autorisation de séjour en France après l'expiration de son titre de séjour actuel."
  },
  {
    question: "Quels sont les délais pour demander le renouvellement de mon titre de séjour ?",
    answer: "Les délais varient en fonction de la catégorie de votre titre de séjour. Il est essentiel de présenter votre demande de renouvellement avant l'expiration de votre titre actuel. Démarche Française peut vous aider à respecter ces délais."
  },
  {
    question: "Puis-je solliciter l'aide de Démarche Française pour le renouvellement de mon titre de séjour ?",
    answer: "Oui, Démarche Française propose une assistance complète pour le renouvellement de titres de séjour. Leur équipe expérimentée peut vous guider tout au long du processus et vous aider à réunir les documents requis."
  },
  {
    question: "Quelles sont les catégories de titres de séjour qui peuvent être renouvelées ?",
    answer: "En général, la plupart des catégories de titres de séjour en France sont renouvelables, mais les conditions spécifiques peuvent varier. Démarche Française peut vous aider à comprendre si votre titre est renouvelable."
  },
  {
    question: "Puis-je travailler pendant la période de renouvellement de mon Titre de séjour ?",
    answer: "En règle générale, vous pouvez continuer à travailler légalement en France pendant le processus de renouvellement de votre titre de séjour. Démarche Française peut vous fournir des informations précises concernant votre situation."
  },
  {
    question: "Que faire si mon renouvellement de Titre de séjour est refusé ?",
    answer: "En cas de refus, Démarche Française peut vous aider à contester la décision, préparer une défense solide, et faire appel si nécessaire. Leur expertise peut augmenter vos chances de succès."
  },
  {
    question: "Combien de temps faut-il pour obtenir le renouvellement de mon Titre de séjour avec l'aide de Démarche Française ?",
    answer: "Les délais dépendent de la catégorie de votre titre de séjour et de la complexité de votre situation. Démarche Française s'engage à vous accompagner efficacement pour accélérer le processus autant que possible."
  },
  {
    question: "Puis-je solliciter Démarche Française pour un renouvellement de Titre de séjour si j'ai initialement obtenu mon titre sans leur aide ?",
    answer: "Oui, Démarche Française peut vous aider non seulement avec les demandes initiales, mais aussi avec les renouvellements de titre de séjour pour garantir une transition en douceur."
  },
  {
    question: "Démarche Française garantit-elle le succès de mon renouvellement de Titre de séjour ?",
    answer: "Démarche Française ne peut pas garantir le succès de chaque demande de renouvellement, car cela dépend des circonstances individuelles. Cependant, ils s'efforcent de vous offrir la meilleure assistance possible pour maximiser vos chances de succès."
  }
];

export const RenewalFAQ = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-[#F5F5FE]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-4">
              Questions fréquentes sur le renouvellement
            </h2>
            <p className="text-lg text-gray-600">
              Trouvez rapidement des réponses à vos questions sur le renouvellement de titre de séjour
            </p>
          </div>

          <Accordion type="single" collapsible className="bg-white rounded-lg p-6 shadow-sm">
            {renewalFaqs.map((faq, index) => (
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