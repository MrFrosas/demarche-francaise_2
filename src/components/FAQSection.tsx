import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "Qu'est-ce qu'un titre de séjour en France ?",
    answer: "Un titre de séjour en France est un document qui atteste de la régularité de votre séjour sur le territoire français. Il est délivré aux résidents étrangers pour des périodes déterminées."
  },
  {
    question: "Comment puis-je obtenir un titre de séjour en France ?",
    answer: "Pour obtenir un titre de séjour, vous devez suivre une procédure administrative spécifique en fonction de votre situation. Démarche Française peut vous aider à comprendre les exigences et à rassembler les documents nécessaires pour votre demande."
  },
  {
    question: "Quelles sont les catégories de titres de séjour en France ?",
    answer: "Les catégories de titres de séjour en France sont diverses, couvrant des situations telles que le travail, les études, la famille, l'asile, et bien d'autres. Démarche Française peut vous guider pour déterminer la catégorie qui vous convient."
  },
  {
    question: "Que faire si ma demande de titre de séjour est refusée ?",
    answer: "En cas de refus, Démarche Française peut vous assister pour contester la décision, préparer une défense solide, et faire appel si nécessaire. Leur expertise peut augmenter vos chances de succès."
  },
  {
    question: "Pourquoi devrais-je choisir Démarche Française pour m'aider dans ma demande de Titre de séjour ?",
    answer: "Démarche Française est une société spécialisée dans l'accompagnement administratif pour les démarches liées à l'immigration en France. Leur équipe de conseillers spécialisés offre une expertise approfondie pour vous guider à chaque étape du processus, maximisant ainsi vos chances de réussite."
  },
  {
    question: "Combien de temps faut-il pour obtenir un titre de séjour en France avec l'aide de Démarche Française ?",
    answer: "Les délais varient en fonction de la catégorie de titre de séjour et de la complexité de votre situation. Démarche Française s'engage à vous accompagner efficacement pour accélérer le processus autant que possible."
  },
  {
    question: "Démarche Française garantit-elle le succès de ma demande de titre de séjour ?",
    answer: "Démarche Française ne peut pas garantir le succès de chaque demande, car cela dépend des circonstances individuelles. Cependant, ils s'efforcent de vous offrir la meilleure assistance possible pour maximiser vos chances de succès."
  }
];

export const FAQSection = () => {
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
              Trouvez rapidement des réponses à vos questions
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