import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const naturalisationFaqs = [
  {
    question: "Qu'est-ce que la Naturalisation française ?",
    answer: "La naturalisation française est le processus par lequel un étranger peut devenir citoyen français. Cela lui permet de jouir de tous les droits et avantages d'un citoyen français."
  },
  {
    question: "Puis-je solliciter la naturalisation en France ?",
    answer: "Oui, sous certaines conditions. Les critères varient en fonction de votre situation personnelle. Démarche Française peut vous aider à déterminer si vous êtes éligible."
  },
  {
    question: "Comment puis-je demander la naturalisation française ?",
    answer: "La procédure de naturalisation est complexe et comporte de nombreuses étapes. Démarche Française peut vous guider à chaque étape, de la collecte des documents à la préparation des entretiens."
  },
  {
    question: "Puis-je solliciter l'aide de Démarche Française pour ma demande de naturalisation ?",
    answer: "Oui, Démarche Française offre une assistance spécialisée pour les demandes de naturalisation. Leur équipe expérimentée peut maximiser vos chances de succès."
  },
  {
    question: "Combien de temps faut-il pour devenir citoyen français par naturalisation ?",
    answer: "Les délais varient en fonction de divers facteurs, y compris la catégorie de naturalisation et la complexité de votre cas. Démarche Française s'engage à accélérer le processus autant que possible."
  },
  {
    question: "Quels sont les critères pour la naturalisation en France ?",
    answer: "Les critères incluent des années de résidence légale en France, la maîtrise du français, et la capacité à prouver votre intégration dans la société française. Démarche Française peut vous aider à évaluer votre éligibilité."
  },
  {
    question: "Puis-je faire appel à Démarche Française si ma demande de naturalisation est refusée ?",
    answer: "En cas de refus, Démarche Française peut vous aider à contester la décision, préparer une défense solide, et faire appel si nécessaire. Leur expertise peut augmenter vos chances de succès."
  },
  {
    question: "Démarche Française garantit-elle le succès de ma demande de naturalisation ?",
    answer: "Démarche Française ne peut pas garantir le succès de chaque demande, car cela dépend des circonstances individuelles. Cependant, ils s'efforcent de vous offrir la meilleure assistance possible pour maximiser vos chances de réussite."
  }
];

export const NaturalisationFAQ = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-[#F5F5FE]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-4">
              Questions fréquentes sur la naturalisation
            </h2>
            <p className="text-lg text-gray-600">
              Trouvez rapidement des réponses à vos questions sur la naturalisation française
            </p>
          </div>

          <Accordion type="single" collapsible className="bg-white rounded-lg p-6 shadow-sm">
            {naturalisationFaqs.map((faq, index) => (
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